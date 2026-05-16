import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useStudyJournalStore } from '@/stores/studyJournalStore'
import { seedModules } from '@/data/seed-doctrine'

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

export default function MyNotes() {
  const [query, setQuery] = useState('')

  const verses = useFavoritesStore((s) => s.verses)
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite)
  const allEntries = useStudyJournalStore((s) => s.entries)

  const q = query.trim().toLowerCase()

  const filteredVerses = useMemo(() =>
    q
      ? verses.filter(
          (v) =>
            v.text.toLowerCase().includes(q) ||
            v.reference.toLowerCase().includes(q) ||
            v.topicTitle.toLowerCase().includes(q),
        )
      : verses,
    [verses, q],
  )

  const filteredEntries = useMemo(() =>
    q
      ? allEntries.filter(
          (e) =>
            e.answerText.toLowerCase().includes(q) ||
            e.question.toLowerCase().includes(q) ||
            e.topicTitle.toLowerCase().includes(q),
        )
      : allEntries,
    [allEntries, q],
  )

  // Group reflections by moduleId + lessonId
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

  const totalVerses = verses.length
  const totalReflections = allEntries.length

  return (
    <div className="mx-auto max-w-2xl space-y-8 pb-12">
      {/* Header */}
      <header className="space-y-1">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-gold-main">
          Estudio personal
        </p>
        <h1 className="font-title text-3xl text-blue-accent">Diario de Estudio</h1>
        <p className="font-ui text-sm text-text-muted">
          {totalVerses} versículo{totalVerses !== 1 ? 's' : ''} · {totalReflections} reflexión{totalReflections !== 1 ? 'es' : ''}
        </p>
      </header>

      {/* Search */}
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-text-muted">
          🔍
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar en versículos y reflexiones…"
          className="w-full rounded-xl border border-blue-accent/20 bg-white py-2.5 pl-9 pr-4 font-ui text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold-main/30"
        />
      </div>

      {/* Mis Versículos */}
      <section>
        <h2 className="mb-3 font-title text-xl text-blue-accent">Mis Versículos</h2>
        {filteredVerses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-blue-accent/20 p-6 text-center">
            <p className="font-ui text-sm text-text-muted">
              {q ? 'Sin resultados para esa búsqueda.' : 'Marca un versículo con ★ mientras estudias para guardarlo aquí.'}
            </p>
            {!q && (
              <Link
                to="/"
                className="mt-3 inline-flex font-ui text-sm font-semibold text-gold-main underline-offset-2 hover:underline"
              >
                Ir a estudiar
              </Link>
            )}
          </div>
        ) : (
          <ul className="space-y-3">
            {filteredVerses.map((v) => (
              <li
                key={v.id}
                className="relative rounded-2xl border border-blue-accent/10 bg-white p-5 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => removeFavorite(v.id)}
                  aria-label="Eliminar de favoritos"
                  className="absolute right-3 top-3 rounded-full p-1 text-text-muted transition hover:text-red-400"
                >
                  ×
                </button>
                <p className="mb-1 font-ui text-xs font-semibold uppercase tracking-wide text-gold-main">
                  {v.reference}
                </p>
                <blockquote className="font-reading text-base leading-relaxed text-text-main">
                  &ldquo;{v.text}&rdquo;
                </blockquote>
                <footer className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-ui text-xs text-text-muted">
                    {moduleTitle(v.moduleId)}
                  </span>
                  <span className="font-ui text-xs text-text-muted">·</span>
                  <span className="font-ui text-xs text-text-muted">{v.topicTitle}</span>
                  <span className="ml-auto font-ui text-xs text-text-muted">{relativeTime(v.savedAt)}</span>
                </footer>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Mis Reflexiones */}
      <section>
        <h2 className="mb-3 font-title text-xl text-blue-accent">Mis Reflexiones</h2>
        {groupedEntries.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-blue-accent/20 p-6 text-center">
            <p className="font-ui text-sm text-text-muted">
              {q ? 'Sin resultados para esa búsqueda.' : 'Cuando respondas una pregunta de reflexión en una lección, aparecerá aquí.'}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {groupedEntries.map(({ moduleId, lessonId, entries }) => (
              <div key={`${moduleId}::${lessonId}`} className="space-y-2">
                <Link
                  to={`/lesson/${moduleId}/${lessonId}`}
                  className="inline-flex items-center gap-1 font-ui text-xs font-semibold text-blue-accent/70 hover:text-blue-accent"
                >
                  {moduleTitle(moduleId)} →
                </Link>
                <ul className="space-y-2">
                  {entries.map((e) => (
                    <li key={e.entryId} className="rounded-2xl border border-blue-accent/10 bg-white p-4 shadow-sm">
                      <p className="font-ui text-xs text-text-muted">{e.topicTitle}</p>
                      <p className="mt-1 font-ui text-sm font-semibold text-text-muted">{e.question}</p>
                      <p className="mt-2 whitespace-pre-wrap font-reading text-base leading-relaxed text-text-main">
                        {e.answerText}
                      </p>
                      <p className="mt-2 text-right font-ui text-xs text-text-muted">
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
    </div>
  )
}
