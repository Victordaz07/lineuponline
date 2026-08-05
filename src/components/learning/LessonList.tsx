import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Lesson } from '@/types/doctrine'
import { LevelBadge } from '@/components/doctrinal/LevelBadge'

export type LessonListProps = {
  lessons: Lesson[]
  moduleId: string
}

export function LessonList({ lessons, moduleId }: LessonListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(lessons[0]?.id ?? null)

  if (lessons.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-sg-gold/20 bg-navy-mid p-6 text-center font-ui text-sm text-parchment/40">
        Aún no hay lecciones publicadas en este módulo.
      </p>
    )
  }

  return (
    <ul className="space-y-3" aria-label="Lista de lecciones">
      {lessons.map((lesson) => {
        const open = expandedId === lesson.id
        const published = lesson.status === 'PUBLISHED'
        return (
          <li
            key={lesson.id}
            className={`rounded-2xl border bg-navy-mid shadow-sm ${
              published ? 'border-sg-gold/15' : 'border-dashed border-sg-gold/10 opacity-60'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
              <button
                type="button"
                className="flex flex-1 flex-col items-start text-left"
                onClick={() => published ? setExpandedId(open ? null : lesson.id) : undefined}
                aria-expanded={published ? open : undefined}
                aria-controls={published ? `lesson-panel-${lesson.id}` : undefined}
                id={`lesson-trigger-${lesson.id}`}
              >
                <span className={`font-display text-lg ${published ? 'text-parchment' : 'text-parchment/40'}`}>
                  {lesson.icon ? `${lesson.icon} ` : ''}{lesson.title}
                </span>
                {lesson.subtitle ? (
                  <span className="font-ui text-xs text-parchment/40">{lesson.subtitle}</span>
                ) : null}
              </button>
              <LevelBadge level={lesson.level} />
              {published ? (
                <Link
                  to={`/lesson/${moduleId}/${lesson.id}`}
                  className="rounded-lg bg-sg-gold px-3 py-1.5 font-ui text-xs font-semibold text-ink shadow-sm transition hover:brightness-95"
                >
                  Abrir
                </Link>
              ) : (
                <span className="rounded-lg border border-sg-gold/15 px-3 py-1.5 font-ui text-xs font-semibold text-parchment/35">
                  Próximamente
                </span>
              )}
            </div>
            {open && published ? (
              <div
                id={`lesson-panel-${lesson.id}`}
                role="region"
                aria-labelledby={`lesson-trigger-${lesson.id}`}
                className="border-t border-sg-gold/10 px-4 py-3 font-ui text-sm text-parchment/60"
              >
                {lesson.description ?? 'Sin descripción breve.'}
              </div>
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}
