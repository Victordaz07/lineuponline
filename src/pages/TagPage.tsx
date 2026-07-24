import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LevelBadge } from '@/components/doctrinal/LevelBadge'
import { getLessonsByTag } from '@/services/doctrineService'
import { TAGS, tagLabel } from '@/data/seed-doctrine'

export default function TagPage() {
  const { tag } = useParams<{ tag: string }>()
  const lessons = useMemo(() => (tag ? getLessonsByTag(tag) : []), [tag])

  if (!tag) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-red-900/40 bg-red-950/40 p-6 text-center">
        <p className="font-ui text-sm text-red-400">Asunto no especificado.</p>
      </div>
    )
  }

  const label = tagLabel(tag)
  const description = TAGS[tag]?.description

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-sg-gold">Asunto</p>
        <h1 className="font-display text-3xl text-parchment">#{label}</h1>
        {description ? (
          <p className="max-w-prose font-display text-base text-parchment/60">{description}</p>
        ) : null}
        <p className="font-ui text-sm text-parchment/40">
          {lessons.length} {lessons.length === 1 ? 'lección' : 'lecciones'}
        </p>
      </header>

      <section aria-label={`Lecciones sobre ${label}`}>
        {lessons.length === 0 ? (
          <p className="rounded-xl border border-dashed border-sg-gold/20 bg-navy-mid p-6 text-center font-ui text-sm text-parchment/40">
            Aún no hay lecciones publicadas con este asunto.
          </p>
        ) : (
          <ul className="space-y-3" aria-label="Lista de lecciones">
            {lessons.map((lesson) => (
              <li key={lesson.id} className="rounded-2xl border border-sg-gold/15 bg-navy-mid shadow-sm">
                <Link
                  to={`/lesson/${lesson.moduleId}/${lesson.id}`}
                  className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 transition hover:bg-sg-gold/5"
                >
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="font-display text-lg text-parchment">
                      {lesson.icon ? `${lesson.icon} ` : ''}{lesson.title}
                    </span>
                    {lesson.subtitle ? (
                      <span className="truncate font-ui text-xs text-parchment/40">{lesson.subtitle}</span>
                    ) : null}
                  </span>
                  <LevelBadge level={lesson.level} />
                  <span className="font-ui text-sg-gold-light" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Link to="/" className="inline-block font-ui text-sm text-sg-gold">
        ← Volver al inicio
      </Link>
    </div>
  )
}
