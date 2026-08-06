import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useStudyJournalStore } from '@/stores/studyJournalStore'
import { useHighlightsStore, type HighlightColor } from '@/stores/highlightsStore'
import { useMarginNotesStore } from '@/stores/marginNotesStore'
import { TagEditor } from '@/components/common/TagEditor'
import { seedModules } from '@/data/seed-doctrine'

// ── Helpers ────────────────────────────────────────────────────────────────

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const mins = Math.floor(diff / 60_000)
  if (mins < 1) return 'ahora mismo'
  if (mins < 60) return `hace ${mins} min`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `hace ${hours}h`
  const days = Math.floor(hours / 24)
  if (days < 7) return `hace ${days} día${days > 1 ? 's' : ''}`
  return new Date(iso).toLocaleDateString('es', { day: 'numeric', month: 'short' })
}

function moduleTitle(moduleId: string): string {
  return seedModules.find((m) => m.id === moduleId)?.title ?? moduleId
}

const HIGHLIGHT_BG: Record<HighlightColor, string> = {
  yellow: 'bg-yellow-200 text-yellow-900',
  green: 'bg-emerald-200 text-emerald-900',
  blue: 'bg-blue-200 text-blue-900',
  pink: 'bg-pink-200 text-pink-900',
}

const HIGHLIGHT_BORDER: Record<HighlightColor, string> = {
  yellow: 'border-l-yellow-400',
  green: 'border-l-emerald-400',
  blue: 'border-l-blue-400',
  pink: 'border-l-pink-400',
}

// ── Types ──────────────────────────────────────────────────────────────────

type Tab = 'highlights' | 'notes' | 'verses' | 'reflections'

// ── Tag filter helper ──────────────────────────────────────────────────────

function TagFilter({ allTags, active, onToggle }: {
  allTags: string[]
  active: string[]
  onToggle: (tag: string) => void
}) {
  if (allTags.length === 0) return null
  return (
    <div className="flex flex-wrap gap-1.5">
      {allTags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onToggle(tag)}
          className={`rounded-full px-2.5 py-0.5 font-ui text-xs font-medium transition ${
            active.includes(tag)
              ? 'bg-sg-gold text-ink'
              : 'border border-sg-gold/20 bg-transparent text-parchment/70 hover:border-sg-gold/40'
          }`}
        >
          #{tag}
        </button>
      ))}
    </div>
  )
}

// ── Component ──────────────────────────────────────────────────────────────

export default function MyNotes() {
  const [tab, setTab] = useState<Tab>('highlights')
  const [query, setQuery] = useState('')
  const [activeTags, setActiveTags] = useState<string[]>([])

  const verses = useFavoritesStore((s) => s.verses)
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite)
  const updateVerseTags = useFavoritesStore((s) => s.updateTags)

  const allEntries = useStudyJournalStore((s) => s.entries)

  const highlights = useHighlightsStore((s) => s.highlights)
  const removeHighlight = useHighlightsStore((s) => s.removeHighlight)
  const updateHighlightTags = useHighlightsStore((s) => s.updateTags)

  const marginNotes = useMarginNotesStore((s) => s.notes)
  const removeNote = useMarginNotesStore((s) => s.removeNote)
  const updateNoteTags = useMarginNotesStore((s) => s.updateTags)

  const q = query.trim().toLowerCase()

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  const matchesTags = useCallback((tags: string[]) => {
    if (activeTags.length === 0) return true
    return activeTags.every((t) => tags.includes(t))
  }, [activeTags])

  // ── Filtered data ────────────────────────────────────────────────────────

  const filteredHighlights = useMemo(
    () =>
      highlights.filter(
        (h) =>
          matchesTags(h.tags) &&
          (!q || h.selectedText.toLowerCase().includes(q) || h.lessonId.toLowerCase().includes(q)),
      ),
    [highlights, q, matchesTags],
  )

  const filteredNotes = useMemo(
    () =>
      marginNotes.filter(
        (n) =>
          matchesTags(n.tags) &&
          (!q || n.noteText.toLowerCase().includes(q) || n.lessonId.toLowerCase().includes(q)),
      ),
    [marginNotes, q, matchesTags],
  )

  const filteredVerses = useMemo(
    () =>
      verses.filter(
        (v) =>
          matchesTags(v.tags) &&
          (!q ||
            v.text.toLowerCase().includes(q) ||
            v.reference.toLowerCase().includes(q) ||
            v.topicTitle.toLowerCase().includes(q)),
      ),
    [verses, q, matchesTags],
  )

  const filteredEntries = useMemo(
    () =>
      allEntries.filter(
        (e) =>
          !q ||
          e.answerText.toLowerCase().includes(q) ||
          e.question.toLowerCase().includes(q) ||
          e.topicTitle.toLowerCase().includes(q),
      ),
    [allEntries, q],
  )

  // ── All tags per tab ─────────────────────────────────────────────────────

  const allHighlightTags = useMemo(
    () => [...new Set(highlights.flatMap((h) => h.tags))].sort(),
    [highlights],
  )
  const allNoteTags = useMemo(
    () => [...new Set(marginNotes.flatMap((n) => n.tags))].sort(),
    [marginNotes],
  )
  const allVerseTags = useMemo(
    () => [...new Set(verses.flatMap((v) => v.tags))].sort(),
    [verses],
  )

  const groupedEntries = useMemo(() => {
    const map = new Map<string, typeof filteredEntries>()
    for (const e of filteredEntries) {
      const key = `${e.moduleId}::${e.lessonId}`
      const list = map.get(key) ?? []
      list.push(e)
      map.set(key, list)
    }
    return [...map.entries()].map(([key, entries]) => {
      const [moduleId, lessonId] = key.split('::')
      return { moduleId: moduleId!, lessonId: lessonId!, entries }
    })
  }, [filteredEntries])

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: 'highlights', label: 'Resaltados', count: highlights.length },
    { id: 'notes', label: 'Notas', count: marginNotes.length },
    { id: 'verses', label: 'Versículos', count: verses.length },
    { id: 'reflections', label: 'Reflexiones', count: allEntries.length },
  ]

  function onTabChange(t: Tab) {
    setTab(t)
    setActiveTags([])
  }

  const EMPTY_MSG: Record<Tab, { idle: string; empty: string }> = {
    highlights: {
      idle: 'Selecciona cualquier texto en una lección y elige un color para resaltarlo.',
      empty: 'Sin resaltados para esa búsqueda.',
    },
    notes: {
      idle: 'Pasa el cursor sobre cualquier bloque y toca ✏ para agregar una nota personal.',
      empty: 'Sin notas para esa búsqueda.',
    },
    verses: {
      idle: 'Toca ★ en cualquier versículo de una lección para guardarlo aquí.',
      empty: 'Sin versículos para esa búsqueda.',
    },
    reflections: {
      idle: 'Cuando respondas una pregunta de reflexión en una lección, aparecerá aquí.',
      empty: 'Sin reflexiones para esa búsqueda.',
    },
  }

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="mx-auto max-w-2xl space-y-6 pb-16">
      {/* Header */}
      <header className="space-y-1">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Estudio personal
        </p>
        <h1 className="font-display text-3xl text-parchment">Mi Cuaderno</h1>
        <p className="font-ui text-sm text-parchment/55">
          {highlights.length} resaltado{highlights.length !== 1 ? 's' : ''} ·{' '}
          {marginNotes.length} nota{marginNotes.length !== 1 ? 's' : ''} ·{' '}
          {verses.length} versículo{verses.length !== 1 ? 's' : ''} ·{' '}
          {allEntries.length} reflexión{allEntries.length !== 1 ? 'es' : ''}
        </p>
      </header>

      {/* Search */}
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-parchment/45">
          🔍
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar en tu cuaderno…"
          className="w-full rounded-xl border border-sg-gold/20 bg-navy-deep py-2.5 pl-9 pr-4 font-ui text-sm text-parchment/80 placeholder:text-parchment/30 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-xl border border-sg-gold/15 bg-navy-mid p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onTabChange(t.id)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 font-ui text-xs font-semibold transition ${
              tab === t.id
                ? 'bg-navy-deep text-sg-gold-light shadow-sm'
                : 'text-parchment/50 hover:text-parchment/80'
            }`}
          >
            {t.label}
            {t.count > 0 && (
              <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${tab === t.id ? 'bg-sg-gold/10 text-sg-gold-light' : 'bg-navy-deep/40 text-parchment/40'}`}>
                {t.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Resaltados ─────────────────────────────────────────────────── */}
      {tab === 'highlights' && (
        <section className="space-y-4">
          <TagFilter allTags={allHighlightTags} active={activeTags} onToggle={toggleTag} />
          {filteredHighlights.length === 0 ? (
            <EmptyState msg={q || activeTags.length > 0 ? EMPTY_MSG.highlights.empty : EMPTY_MSG.highlights.idle} />
          ) : (
            <ul className="space-y-3">
              {filteredHighlights.map((h) => (
                <li key={h.id} className={`relative rounded-2xl border-l-4 bg-navy-mid p-5 shadow-sm ${HIGHLIGHT_BORDER[h.color]}`}>
                  <button
                    type="button"
                    onClick={() => removeHighlight(h.id)}
                    aria-label="Eliminar resaltado"
                    className="absolute right-3 top-3 rounded-full p-1 text-parchment/40 transition hover:text-red-400"
                  >
                    ×
                  </button>
                  <p className={`inline rounded px-1 font-display text-base leading-relaxed ${HIGHLIGHT_BG[h.color]}`}>
                    {h.selectedText}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <Link
                      to={`/lesson/${h.lessonId.split(':')[0] ?? h.lessonId}/${h.lessonId}`}
                      className="font-ui text-xs text-sg-gold/60 hover:text-sg-gold-light"
                    >
                      {h.lessonId} →
                    </Link>
                    <span className="ml-auto font-ui text-xs text-parchment/40">{relativeTime(h.savedAt)}</span>
                  </div>
                  <div className="mt-2">
                    <TagEditor tags={h.tags} onChange={(tags) => updateHighlightTags(h.id, tags)} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* ── Notas al margen ────────────────────────────────────────────── */}
      {tab === 'notes' && (
        <section className="space-y-4">
          <TagFilter allTags={allNoteTags} active={activeTags} onToggle={toggleTag} />
          {filteredNotes.length === 0 ? (
            <EmptyState msg={q || activeTags.length > 0 ? EMPTY_MSG.notes.empty : EMPTY_MSG.notes.idle} />
          ) : (
            <ul className="space-y-3">
              {filteredNotes.map((n) => (
                <li key={n.id} className="relative rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 shadow-sm">
                  <button
                    type="button"
                    onClick={() => removeNote(n.id)}
                    aria-label="Eliminar nota"
                    className="absolute right-3 top-3 rounded-full p-1 text-parchment/40 transition hover:text-red-400"
                  >
                    ×
                  </button>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="rounded-md bg-sg-gold/10 px-2 py-0.5 font-ui text-xs text-sg-gold-light">
                      {n.blockType}
                    </span>
                    <Link
                      to={`/lesson/${n.lessonId}`}
                      className="font-ui text-xs text-sg-gold/60 hover:text-sg-gold-light"
                    >
                      {n.lessonId} →
                    </Link>
                  </div>
                  <p className="whitespace-pre-wrap font-display text-base leading-relaxed text-parchment/80 pr-6">
                    {n.noteText}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-ui text-xs text-parchment/40">{relativeTime(n.updatedAt)}</span>
                  </div>
                  <div className="mt-2">
                    <TagEditor tags={n.tags} onChange={(tags) => updateNoteTags(n.id, tags)} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* ── Versículos favoritos ───────────────────────────────────────── */}
      {tab === 'verses' && (
        <section className="space-y-4">
          <TagFilter allTags={allVerseTags} active={activeTags} onToggle={toggleTag} />
          {filteredVerses.length === 0 ? (
            <EmptyState msg={q || activeTags.length > 0 ? EMPTY_MSG.verses.empty : EMPTY_MSG.verses.idle} />
          ) : (
            <ul className="space-y-3">
              {filteredVerses.map((v) => (
                <li key={v.id} className="relative rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 shadow-sm">
                  <button
                    type="button"
                    onClick={() => removeFavorite(v.id)}
                    aria-label="Eliminar de favoritos"
                    className="absolute right-3 top-3 rounded-full p-1 text-parchment/40 transition hover:text-red-400"
                  >
                    ×
                  </button>
                  <p className="mb-1 font-ui text-xs font-semibold uppercase tracking-wide text-sg-gold">
                    {v.reference}
                  </p>
                  <blockquote className="font-display text-base leading-relaxed text-parchment/80 pr-6">
                    &ldquo;{v.text}&rdquo;
                  </blockquote>
                  <footer className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-ui text-xs text-parchment/40">{moduleTitle(v.moduleId)}</span>
                    <span className="font-ui text-xs text-parchment/40">·</span>
                    <span className="font-ui text-xs text-parchment/40">{v.topicTitle}</span>
                    <span className="ml-auto font-ui text-xs text-parchment/40">{relativeTime(v.savedAt)}</span>
                  </footer>
                  <div className="mt-2">
                    <TagEditor tags={v.tags} onChange={(tags) => updateVerseTags(v.id, tags)} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* ── Reflexiones ────────────────────────────────────────────────── */}
      {tab === 'reflections' && (
        <section className="space-y-4">
          {groupedEntries.length === 0 ? (
            <EmptyState msg={q ? EMPTY_MSG.reflections.empty : EMPTY_MSG.reflections.idle} />
          ) : (
            <div className="space-y-6">
              {groupedEntries.map(({ moduleId, lessonId, entries }) => (
                <div key={`${moduleId}::${lessonId}`} className="space-y-2">
                  <Link
                    to={`/lesson/${moduleId}/${lessonId}`}
                    className="inline-flex items-center gap-1 font-ui text-xs font-semibold text-sg-gold/60 hover:text-sg-gold-light"
                  >
                    {moduleTitle(moduleId)} →
                  </Link>
                  <ul className="space-y-2">
                    {entries.map((e) => (
                      <li key={e.entryId} className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 shadow-sm">
                        <p className="font-ui text-xs text-parchment/50">{e.topicTitle}</p>
                        <p className="mt-1 font-ui text-sm font-semibold text-parchment/55">{e.question}</p>
                        <p className="mt-2 whitespace-pre-wrap font-display text-base leading-relaxed text-parchment/80">
                          {e.answerText}
                        </p>
                        <p className="mt-2 text-right font-ui text-xs text-parchment/40">
                          {relativeTime(e.clientUpdatedAt)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  )
}

function EmptyState({ msg }: { msg: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-sg-gold/20 p-8 text-center">
      <p className="font-ui text-sm text-parchment/50">{msg}</p>
      <Link
        to="/"
        className="mt-3 inline-flex font-ui text-sm font-semibold text-sg-gold underline-offset-2 hover:underline"
      >
        Ir a estudiar →
      </Link>
    </div>
  )
}
