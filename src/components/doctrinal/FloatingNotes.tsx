import { useEffect, useMemo, useRef, useState } from 'react'
import type { StudyJournalEntry } from '@/stores/studyJournalStore'
import { usePlayerStore } from '@/features/discography/store/usePlayerStore'

export type FloatingNotesProps = {
  lessonTitle: string
  entries: StudyJournalEntry[]
  uniqueTopicTitles: string[]
}

/**
 * "Mis notas" como burbuja flotante estilo chat (tipo Messenger): un botón
 * circular siempre visible en la esquina inferior derecha mientras lees, que
 * abre un panel redondeado anclado a esa esquina con las notas de la lección.
 */
export function FloatingNotes({ lessonTitle, entries, uniqueTopicTitles }: FloatingNotesProps) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const fabRef = useRef<HTMLButtonElement>(null)

  // El mini-reproductor eleva la barra inferior; subimos la burbuja para no taparla.
  const hasActiveTrack = usePlayerStore((s) => !!s.currentTrack)
  const bottomOffset = hasActiveTrack ? 'bottom-[10rem]' : 'bottom-[6.25rem]'

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        fabRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const grouped = useMemo(() => {
    const map = new Map<string, StudyJournalEntry[]>()
    for (const e of entries) {
      const list = map.get(e.topicTitle) ?? []
      list.push(e)
      map.set(e.topicTitle, list)
    }
    return map
  }, [entries])

  const count = entries.length
  const summary =
    uniqueTopicTitles.length > 0
      ? `Hoy reflexionaste sobre: ${uniqueTopicTitles.join(', ')}.`
      : 'Aún no hay notas guardadas para esta lección.'

  return (
    <>
      {/* Capta clics fuera para cerrar, sin oscurecer la página (estilo chat) */}
      {open ? (
        <button
          type="button"
          aria-label="Cerrar notas"
          className="fixed inset-0 z-40 cursor-default"
          onClick={() => setOpen(false)}
        />
      ) : null}

      {/* Panel de notas — burbuja anclada abajo a la derecha */}
      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Mis notas"
          className={`fixed right-4 z-50 flex max-h-[70vh] w-[min(23rem,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-sg-gold/25 bg-navy-mid shadow-2xl ${bottomOffset}`}
          style={{ animation: 'bubblePop 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          <div className="flex items-center justify-between gap-2 border-b border-sg-gold/15 bg-gradient-to-r from-sg-gold/12 to-transparent px-4 py-3">
            <div className="min-w-0">
              <p className="font-ui text-[0.6rem] font-bold uppercase tracking-[0.16em] text-sg-gold-light/80">
                Mis notas
              </p>
              <h2 className="truncate font-display text-base font-semibold text-parchment">{lessonTitle}</h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-parchment/60 transition hover:bg-navy-deep/50 hover:text-parchment"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="border-b border-sg-gold/10 bg-sg-gold/[0.04] px-4 py-2.5">
            <p className="font-display text-xs leading-relaxed text-parchment/75">{summary}</p>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3">
            {grouped.size === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
                <span className="text-3xl" aria-hidden="true">📝</span>
                <p className="font-ui text-xs text-parchment/50">
                  Cuando guardes una nota guiada aparecerá aquí, disponible mientras lees.
                </p>
              </div>
            ) : (
              <ul className="space-y-4">
                {Array.from(grouped.entries()).map(([topicTitle, items]) => (
                  <li key={topicTitle}>
                    <h3 className="font-display text-sm font-semibold text-sg-gold-light">{topicTitle}</h3>
                    <ul className="mt-1.5 space-y-2">
                      {items.map((item) => (
                        <li
                          key={item.entryId}
                          className="rounded-2xl rounded-tl-sm border border-sg-gold/12 bg-navy-deep px-3 py-2.5 text-sm shadow-sm"
                        >
                          <p className="font-ui text-xs font-semibold text-parchment/80">{item.question}</p>
                          <p className="mt-1 whitespace-pre-wrap font-display text-[13px] leading-relaxed text-parchment/65">
                            {item.answerText}
                          </p>
                          <p className="mt-1.5 font-ui text-[0.6rem] text-parchment/40">
                            {new Date(item.clientUpdatedAt).toLocaleString('es')}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : null}

      {/* Botón burbuja — siempre visible mientras lees */}
      <button
        ref={fabRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Cerrar mis notas' : 'Abrir mis notas'}
        className={`fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full text-ink shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-black/10 transition-transform duration-200 hover:scale-105 active:scale-95 ${bottomOffset}`}
        style={{ background: 'linear-gradient(150deg, rgb(var(--sg-gold-bright)), rgb(var(--sg-gold)))' }}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
          </svg>
        )}
        {!open && count > 0 ? (
          <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-navy-deep bg-terracotta px-1 font-ui text-[0.6rem] font-bold text-white">
            {count > 9 ? '9+' : count}
          </span>
        ) : null}
      </button>
    </>
  )
}
