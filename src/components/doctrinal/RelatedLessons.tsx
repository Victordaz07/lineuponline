import { Link } from 'react-router-dom'
import type { Lesson } from '@/types/doctrine'
import { getRelatedLessons } from '@/services/doctrineService'
import { tagLabel } from '@/data/seed-doctrine'

export type RelatedLessonsProps = {
  lesson: Lesson
}

/**
 * Sección "Temas relacionados" al final de una lección.
 *
 * Muestra las etiquetas (asuntos) de la lección como chips que llevan a la
 * página del asunto, y tarjetas de otras lecciones que comparten alguna
 * etiqueta — calculadas automáticamente. No se muestra si la lección no tiene
 * etiquetas ni relacionadas.
 */
export function RelatedLessons({ lesson }: RelatedLessonsProps) {
  const tags = lesson.tags ?? []
  const related = getRelatedLessons(lesson)

  if (tags.length === 0 && related.length === 0) return null

  return (
    <section className="space-y-4 border-t border-sg-gold/20 pt-6" aria-label="Temas relacionados">
      <h2 className="font-display text-xl text-parchment">Temas relacionados</h2>

      {tags.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {tags.map((slug) => (
            <Link
              key={slug}
              to={`/tema/${slug}`}
              className="rounded-full border border-sg-gold/30 bg-sg-gold/5 px-3 py-1 font-ui text-xs font-semibold text-sg-gold-light transition hover:border-sg-gold/60 hover:bg-sg-gold/15"
            >
              #{tagLabel(slug)}
            </Link>
          ))}
        </div>
      ) : null}

      {related.length > 0 ? (
        <ul className="space-y-2">
          {related.map((l) => (
            <li key={l.id}>
              <Link
                to={`/lesson/${l.moduleId}/${l.id}`}
                className="flex items-center gap-3 rounded-2xl border border-sg-gold/15 bg-navy-mid px-4 py-3 shadow-sm transition hover:border-sg-gold/40 hover:bg-sg-gold/5"
              >
                <span className="text-xl" aria-hidden="true">{l.icon ?? '📖'}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-base text-parchment">{l.title}</span>
                  {l.subtitle ? (
                    <span className="block truncate font-ui text-xs text-parchment/40">{l.subtitle}</span>
                  ) : null}
                </span>
                <span className="shrink-0 font-ui text-sg-gold-light" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
