import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchDoctrineModules, fetchLessonsForModule } from '@/services/doctrineService'
import type { Lesson } from '@/types/doctrine'

type SearchHit = {
  moduleId: string
  lesson: Lesson
}

/**
 * Búsqueda local sobre datos semilla (módulos y títulos de lección).
 *
 * @returns Página de búsqueda
 */
export default function Search() {
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState<SearchHit[]>([])
  const [loading, setLoading] = useState(false)

  const normalized = useMemo(() => query.trim().toLowerCase(), [query])

  const runSearch = async () => {
    if (!normalized) {
      setHits([])
      return
    }
    setLoading(true)
    try {
      const modules = await fetchDoctrineModules()
      const results: SearchHit[] = []
      for (const mod of modules) {
        const lessons = await fetchLessonsForModule(mod.id)
        for (const lesson of lessons) {
          const haystack = `${lesson.title} ${lesson.description ?? ''} ${lesson.author ?? ''}`.toLowerCase()
          if (haystack.includes(normalized)) {
            results.push({ moduleId: mod.id, lesson })
          }
        }
      }
      setHits(results)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-xl space-y-6 py-4">
      <h1 className="font-title text-3xl text-blue-accent">Buscar</h1>
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault()
          void runSearch()
        }}
      >
        <label htmlFor="search-q" className="sr-only">
          Texto a buscar
        </label>
        <input
          id="search-q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Escribe para buscar lecciones…"
          className="flex-1 rounded-xl border border-blue-accent/25 bg-white px-4 py-3 font-ui text-sm shadow-inner focus:border-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent/20"
        />
        <button
          type="submit"
          className="rounded-xl bg-gold-main px-5 py-3 font-ui text-sm font-semibold text-white shadow-sm hover:brightness-95"
        >
          Buscar
        </button>
      </form>
      {!normalized && !loading ? (
        <p className="text-center font-ui text-sm text-text-muted">Escribe una palabra y pulsa Buscar.</p>
      ) : null}
      {loading ? <p className="text-center font-ui text-sm text-text-muted">Buscando…</p> : null}
      <ul className="space-y-2" aria-label="Resultados">
        {hits.map(({ moduleId, lesson }) => (
          <li key={`${moduleId}-${lesson.id}`}>
            <Link
              to={`/lesson/${moduleId}/${lesson.id}`}
              className="block rounded-xl border border-blue-accent/10 bg-white px-4 py-3 font-ui text-sm font-semibold text-blue-accent shadow-sm transition hover:border-gold-main/40 hover:bg-gold-dim"
            >
              {lesson.title}
              <span className="mt-1 block text-xs font-normal text-text-muted">Módulo: {moduleId}</span>
            </Link>
          </li>
        ))}
      </ul>
      {normalized && !loading && hits.length === 0 ? (
        <p className="text-center font-ui text-sm text-text-muted">Sin resultados.</p>
      ) : null}
    </div>
  )
}
