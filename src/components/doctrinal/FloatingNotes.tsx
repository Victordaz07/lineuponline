import { useEffect, useMemo, useRef, useState } from 'react'
import type { LessonSection } from '@/types/doctrine'
import { useStudyJournalStore, type StudyJournalEntry } from '@/stores/studyJournalStore'
import { usePlayerStore } from '@/features/discography/store/usePlayerStore'
import { useAuth } from '@/hooks/useAuth'
import { isFirebaseConfigured } from '@/lib/firebase'
import { deleteJournalEntry } from '@/services/userPersonalData.service'
import { useToastStore } from '@/stores/toastStore'

export type FloatingNotesProps = {
  lessonId: string
  moduleId: string
  lessonTitle: string
  entries: StudyJournalEntry[]
  sections: LessonSection[]
  activeIndex: number
  onGoToSection: (sectionId: string) => void
}

// Paleta por sección (coincide con los acentos del tema).
const SECTION_COLORS = [
  { dot: 'bg-sg-gold', border: 'border-l-sg-gold', tint: 'bg-sg-gold/[0.06]', text: 'text-sg-gold-light', chip: 'bg-sg-gold/15' },
  { dot: 'bg-terracotta', border: 'border-l-terracotta', tint: 'bg-terracotta/[0.06]', text: 'text-terracotta', chip: 'bg-terracotta/15' },
  { dot: 'bg-info', border: 'border-l-info', tint: 'bg-info/[0.06]', text: 'text-info', chip: 'bg-info/15' },
  { dot: 'bg-purple', border: 'border-l-purple', tint: 'bg-purple/[0.06]', text: 'text-purple', chip: 'bg-purple/15' },
  { dot: 'bg-jade', border: 'border-l-jade', tint: 'bg-jade/[0.06]', text: 'text-jade', chip: 'bg-jade/15' },
] as const

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

function timeLabel(iso: string) {
  return new Date(iso).toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })
}

/**
 * "Mis notas" como burbuja flotante estilo chat (tipo Messenger): un botón
 * circular siempre visible mientras lees —que se reduce a un punto al hacer
 * scroll— y un panel anclado a la esquina con búsqueda, filtro por sección,
 * notas agrupadas por fecha (cada una enlazada a su pasaje) y un compositor.
 */
export function FloatingNotes({
  lessonId,
  moduleId,
  lessonTitle,
  entries,
  sections,
  activeIndex,
  onGoToSection,
}: FloatingNotesProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [sectionFilter, setSectionFilter] = useState<number | null>(null)
  const [draft, setDraft] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState('')
  const [collapsed, setCollapsed] = useState(false)

  const fabRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const addEntry = useStudyJournalStore((s) => s.addEntry)
  const updateEntry = useStudyJournalStore((s) => s.updateEntry)
  const removeEntry = useStudyJournalStore((s) => s.removeEntry)
  const { user } = useAuth()
  const addToast = useToastStore((s) => s.addToast)

  const hasActiveTrack = usePlayerStore((s) => !!s.currentTrack)
  const bottomOffset = hasActiveTrack ? 'bottom-[10rem]' : 'bottom-[6.25rem]'

  // topicId → índice de sección, para etiquetar y colorear cada nota.
  const topicSection = useMemo(() => {
    const map = new Map<string, number>()
    sections.forEach((sec, i) => sec.topics.forEach((t) => map.set(t.id, i)))
    return map
  }, [sections])

  const sectionMeta = (i: number) => {
    const sec = sections[i]
    return {
      roman: sec?.intro?.romanNumeral ?? ROMAN[i] ?? String(i + 1),
      title: sec?.intro?.title ?? sec?.title ?? 'General',
      color: SECTION_COLORS[i % SECTION_COLORS.length],
    }
  }

  const countsBySection = useMemo(() => {
    const counts = sections.map(() => 0)
    for (const e of entries) {
      const i = topicSection.get(e.topicId)
      if (i != null) counts[i] += 1
    }
    return counts
  }, [entries, sections, topicSection])

  // Notas nuevas sin ver (persistente por lección).
  const seenKey = `sg-notes-seen-${lessonId}`
  const [seenCount, setSeenCount] = useState(() => {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem(`sg-notes-seen-${lessonId}`) : null
    return raw ? Number(raw) || 0 : 0
  })
  const hasUnseen = entries.length > seenCount

  // Reducir la burbuja a un punto mientras se hace scroll.
  useEffect(() => {
    const onScroll = () => {
      setCollapsed(true)
      if (scrollTimer.current) clearTimeout(scrollTimer.current)
      scrollTimer.current = setTimeout(() => setCollapsed(false), 550)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (scrollTimer.current) clearTimeout(scrollTimer.current)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        fabRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function openPanel() {
    setOpen(true)
    setSeenCount(entries.length)
    if (typeof window !== 'undefined') window.localStorage.setItem(seenKey, String(entries.length))
  }

  // Búsqueda + filtro de sección.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return entries.filter((e) => {
      if (sectionFilter != null && topicSection.get(e.topicId) !== sectionFilter) return false
      if (!q) return true
      return (
        e.answerText.toLowerCase().includes(q) ||
        e.topicTitle.toLowerCase().includes(q) ||
        e.question.toLowerCase().includes(q)
      )
    })
  }, [entries, query, sectionFilter, topicSection])

  // Agrupar por fecha: HOY / ESTA SEMANA / ANTES.
  const groups = useMemo(() => {
    const startOfToday = new Date()
    startOfToday.setHours(0, 0, 0, 0)
    const weekAgo = new Date(startOfToday)
    weekAgo.setDate(weekAgo.getDate() - 6)
    const buckets: Record<string, StudyJournalEntry[]> = { HOY: [], 'ESTA SEMANA': [], ANTES: [] }
    for (const e of filtered) {
      const d = new Date(e.clientUpdatedAt)
      if (d >= startOfToday) buckets.HOY.push(e)
      else if (d >= weekAgo) buckets['ESTA SEMANA'].push(e)
      else buckets.ANTES.push(e)
    }
    return Object.entries(buckets).filter(([, list]) => list.length > 0)
  }, [filtered])

  function handleSend() {
    const text = draft.trim()
    if (!text) return
    const idx = activeIndex >= 0 ? activeIndex : 0
    const sec = sections[idx]
    const topic = sec?.topics[0]
    const topicId = topic?.id ?? 'general'
    const topicTitle = sec?.intro?.title ?? sec?.title ?? 'Nota rápida'
    addEntry({
      entryId: `${lessonId}-quick-${topicId}-${Date.now()}`,
      lessonId,
      moduleId,
      topicId,
      topicTitle,
      promptId: 'quick',
      question: 'Nota sobre este pasaje',
      answerText: text,
      clientUpdatedAt: new Date().toISOString(),
    })
    setDraft('')
    setSeenCount((c) => c + 1)
    if (typeof window !== 'undefined') window.localStorage.setItem(seenKey, String(entries.length + 1))
    requestAnimationFrame(() => listRef.current?.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  function handleDelete(entryId: string) {
    removeEntry(entryId)
    if (user && isFirebaseConfigured()) {
      void deleteJournalEntry(user.uid, entryId).catch(() => {
        addToast('La nota se borró aquí, pero no se pudo borrar en la nube.', 'error')
      })
    }
  }

  function handleExport() {
    if (entries.length === 0) return
    const text = entries
      .map((e) => {
        const i = topicSection.get(e.topicId)
        const tag = i != null ? `[Sección ${sectionMeta(i).roman}] ` : ''
        return `${tag}${e.topicTitle}\n${e.answerText}\n(${new Date(e.clientUpdatedAt).toLocaleString('es')})`
      })
      .join('\n\n')
    const header = `Mis notas — ${lessonTitle}\n\n`
    void navigator.clipboard
      ?.writeText(header + text)
      .then(() => addToast('Notas copiadas al portapapeles.', 'success'))
      .catch(() => addToast('No se pudieron copiar las notas.', 'error'))
  }

  const count = entries.length

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="Cerrar notas"
          className="fixed inset-0 z-40 cursor-default"
          onClick={() => setOpen(false)}
        />
      ) : null}

      {open ? (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Mis notas"
          className={`fixed right-4 z-50 flex max-h-[74vh] w-[min(23.5rem,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-sg-gold/25 bg-navy-mid shadow-2xl ${bottomOffset}`}
          style={{ animation: 'bubblePop 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          {/* Cabecera */}
          <div className="flex items-center justify-between gap-2 border-b border-sg-gold/15 bg-gradient-to-r from-sg-gold/12 to-transparent px-4 py-3">
            <div className="min-w-0">
              <p className="font-ui text-[0.6rem] font-bold uppercase tracking-[0.16em] text-sg-gold-light/80">
                Mis notas
              </p>
              <h2 className="truncate font-display text-base font-semibold text-parchment">{lessonTitle}</h2>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <button
                type="button"
                onClick={handleExport}
                disabled={count === 0}
                aria-label="Copiar notas"
                className="flex h-8 w-8 items-center justify-center rounded-full text-parchment/55 transition hover:bg-navy-deep/50 hover:text-parchment disabled:opacity-30"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12" /><path d="M8 11l4 4 4-4" /><path d="M5 19h14" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="flex h-8 w-8 items-center justify-center rounded-full text-parchment/60 transition hover:bg-navy-deep/50 hover:text-parchment"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Búsqueda */}
          <div className="px-4 pt-3">
            <div className="flex items-center gap-2 rounded-full border border-sg-gold/15 bg-navy-deep px-3 py-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-parchment/40" aria-hidden="true">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar en tus notas..."
                aria-label="Buscar en tus notas"
                className="min-w-0 flex-1 bg-transparent font-ui text-sm text-parchment placeholder:text-parchment/40 focus:outline-none"
              />
            </div>
          </div>

          {/* Chips por sección */}
          {sections.length > 0 ? (
            <div className="flex items-center gap-2 overflow-x-auto px-4 pb-1 pt-2.5">
              {sections.map((sec, i) => {
                const m = sectionMeta(i)
                const active = sectionFilter === i
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setSectionFilter(active ? null : i)}
                    aria-pressed={active}
                    className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-ui text-[11px] font-bold transition ${
                      active ? `${m.color.chip} border-transparent ${m.color.text}` : 'border-sg-gold/15 text-parchment/45 hover:text-parchment/70'
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${m.color.dot}`} aria-hidden="true" />
                    {m.roman}-{countsBySection[i] ?? 0}
                  </button>
                )
              })}
              <span className="shrink-0 pl-1 font-ui text-[10px] text-parchment/35">notas por sección</span>
            </div>
          ) : null}

          {/* Lista de notas */}
          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-3">
            {count === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 py-10 text-center">
                <span className="text-3xl" aria-hidden="true">📝</span>
                <p className="font-ui text-xs text-parchment/50">
                  Escribe abajo tu primera nota sobre este pasaje. Quedará aquí, disponible mientras lees.
                </p>
              </div>
            ) : filtered.length === 0 ? (
              <p className="py-8 text-center font-ui text-xs text-parchment/45">
                Ninguna nota coincide con tu búsqueda.
              </p>
            ) : (
              <div className="space-y-5">
                {groups.map(([label, list]) => (
                  <div key={label}>
                    <p className="mb-2 font-ui text-[10px] font-bold uppercase tracking-[0.14em] text-parchment/35">
                      {label}
                    </p>
                    <ul className="space-y-2.5">
                      {list.map((e) => {
                        const i = topicSection.get(e.topicId) ?? 0
                        const m = sectionMeta(i)
                        const isEditing = editingId === e.entryId
                        const passage = e.promptId === 'quick' ? m.title : e.topicTitle
                        return (
                          <li key={e.entryId}>
                            <div
                              className={`rounded-2xl rounded-tl-sm border border-sg-gold/10 border-l-[3px] ${m.color.border} ${m.color.tint} px-3 py-2.5 shadow-sm`}
                            >
                              <button
                                type="button"
                                onClick={() => {
                                  if (sections[i]) {
                                    setOpen(false)
                                    onGoToSection(sections[i].id)
                                  }
                                }}
                                className={`flex max-w-full items-center gap-1.5 rounded-full ${m.color.chip} px-2 py-0.5 font-ui text-[10px] font-bold ${m.color.text} transition hover:brightness-110`}
                              >
                                <span className={`h-1.5 w-1.5 rounded-full ${m.color.dot}`} aria-hidden="true" />
                                <span className="truncate">Sección {m.roman} · {passage}</span>
                              </button>

                              {isEditing ? (
                                <div className="mt-2">
                                  <textarea
                                    value={editText}
                                    onChange={(ev) => setEditText(ev.target.value)}
                                    rows={3}
                                    className="w-full resize-none rounded-xl border border-sg-gold/25 bg-navy-deep px-2.5 py-2 font-display text-[13px] leading-relaxed text-parchment focus:border-sg-gold/50 focus:outline-none"
                                  />
                                  <div className="mt-1.5 flex justify-end gap-2">
                                    <button
                                      type="button"
                                      onClick={() => setEditingId(null)}
                                      className="rounded-full px-3 py-1 font-ui text-xs font-semibold text-parchment/55 hover:text-parchment"
                                    >
                                      Cancelar
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const t = editText.trim()
                                        if (t) updateEntry(e.entryId, t)
                                        setEditingId(null)
                                      }}
                                      className="rounded-full bg-sg-gold px-3 py-1 font-ui text-xs font-bold text-ink hover:brightness-105"
                                    >
                                      Guardar
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <p className="mt-1.5 whitespace-pre-wrap font-display text-[13px] leading-relaxed text-parchment/85">
                                    {e.answerText}
                                  </p>
                                  <div className="mt-1.5 flex items-center justify-between gap-2">
                                    <p className="font-ui text-[0.6rem] text-parchment/40">
                                      {timeLabel(e.clientUpdatedAt)}
                                      {e.promptId === 'quick' ? ' · nota rápida' : ' · desde el pasaje'}
                                    </p>
                                    <div className="flex items-center gap-0.5">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setEditingId(e.entryId)
                                          setEditText(e.answerText)
                                        }}
                                        aria-label="Editar nota"
                                        className="flex h-6 w-6 items-center justify-center rounded-full text-parchment/45 transition hover:bg-navy-deep/60 hover:text-sg-gold-light"
                                      >
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                                        </svg>
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleDelete(e.entryId)}
                                        aria-label="Borrar nota"
                                        className="flex h-6 w-6 items-center justify-center rounded-full text-parchment/45 transition hover:bg-terracotta/15 hover:text-terracotta"
                                      >
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M3 6h18" /><path d="M8 6V4h8v2" /><path d="M6 6l1 14h10l1-14" />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Compositor */}
          <div className="border-t border-sg-gold/15 bg-navy-deep/40 px-3 py-2.5">
            <div className="flex items-end gap-2">
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                rows={1}
                placeholder="Escribe una nota sobre este pasaje..."
                aria-label="Escribe una nota sobre este pasaje"
                className="max-h-24 min-h-[2.5rem] flex-1 resize-none rounded-2xl border border-sg-gold/15 bg-navy-mid px-3.5 py-2.5 font-ui text-sm text-parchment placeholder:text-parchment/40 focus:border-sg-gold/40 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!draft.trim()}
                aria-label="Guardar nota"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink shadow-md transition hover:brightness-105 active:scale-95 disabled:opacity-40"
                style={{ background: 'linear-gradient(150deg, rgb(var(--sg-gold-bright)), rgb(var(--sg-gold)))' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Botón burbuja — siempre visible; se reduce a un punto al hacer scroll */}
      <button
        ref={fabRef}
        type="button"
        onClick={() => (open ? setOpen(false) : openPanel())}
        aria-expanded={open}
        aria-label={open ? 'Cerrar mis notas' : 'Abrir mis notas'}
        className={`fixed right-4 z-50 flex items-center justify-center rounded-full text-ink shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-black/10 transition-all duration-300 ease-out hover:scale-105 active:scale-95 ${bottomOffset} ${
          collapsed && !open ? 'h-9 w-9 opacity-70' : 'h-14 w-14 opacity-100'
        }`}
        style={{ background: 'linear-gradient(150deg, rgb(var(--sg-gold-bright)), rgb(var(--sg-gold)))' }}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : collapsed ? (
          <span className="h-2 w-2 rounded-full bg-ink" aria-hidden="true" />
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
          </svg>
        )}

        {!open && !collapsed && count > 0 ? (
          <span className="absolute -bottom-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-navy-deep bg-navy-mid px-1 font-ui text-[0.6rem] font-bold text-sg-gold-light">
            {count > 99 ? '99+' : count}
          </span>
        ) : null}
        {!open && hasUnseen ? (
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-navy-deep bg-terracotta" aria-hidden="true" />
        ) : null}
      </button>
    </>
  )
}
