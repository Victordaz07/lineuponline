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
          const haystack = `${lesson.title} ${lesson.subtitle ?? ''} ${lesson.description ?? ''} ${lesson.author ?? ''}`.toLowerCase()
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
      <h1 className="font-display text-3xl text-parchment">Buscar</h1>
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
          className="flex-1 rounded-xl border border-sg-gold/20 bg-navy-deep px-4 py-3 font-ui text-sm text-parchment/85 placeholder:text-parchment/35 focus:border-sg-gold focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
        />
        <button
          type="submit"
          className="rounded-xl bg-sg-gold px-5 py-3 font-ui text-sm font-semibold text-navy-deep shadow-sm hover:brightness-95"
        >
          Buscar
        </button>
      </form>
      {!normalized && !loading ? (
        <p className="text-center font-ui text-sm text-parchment/55">Escribe una palabra y pulsa Buscar.</p>
      ) : null}
      {loading ? <p className="text-center font-ui text-sm text-parchment/55">Buscando…</p> : null}
      <ul className="space-y-2" aria-label="Resultados">
        {hits.map(({ moduleId, lesson }) => (
          <li key={`${moduleId}-${lesson.id}`}>
            <Link
              to={`/lesson/${moduleId}/${lesson.id}`}
              className="block rounded-xl border border-sg-gold/15 bg-navy-mid px-4 py-3 font-ui text-sm font-semibold text-parchment/85 shadow-sm transition hover:border-sg-gold/40 hover:bg-navy-deep/60"
            >
              {lesson.title}
              <span className="mt-1 block text-xs font-normal text-parchment/50">Módulo: {moduleId}</span>
            </Link>
          </li>
        ))}
      </ul>
      {normalized && !loading && hits.length === 0 ? (
        <p className="text-center font-ui text-sm text-parchment/55">Sin resultados.</p>
      ) : null}
    </div>
  )
}
