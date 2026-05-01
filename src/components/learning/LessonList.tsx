import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Lesson } from '@/types/doctrine'
import { LevelBadge } from '@/components/doctrinal/LevelBadge'

export type LessonListProps = {
  lessons: Lesson[]
  moduleId: string
}

/**
 * Lista de lecciones con filas expandibles.
 *
 * @param props - Lecciones e id de módulo
 * @returns Lista accesible
 */
export function LessonList({ lessons, moduleId }: LessonListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(lessons[0]?.id ?? null)

  if (lessons.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-blue-accent/25 bg-white/80 p-6 text-center font-ui text-sm text-text-muted">
        Aún no hay lecciones publicadas en este módulo.
      </p>
    )
  }

  return (
    <ul className="space-y-3" aria-label="Lista de lecciones">
      {lessons.map((lesson) => {
        const open = expandedId === lesson.id
        return (
          <li key={lesson.id} className="rounded-2xl border border-blue-accent/10 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
              <button
                type="button"
                className="flex flex-1 flex-col items-start text-left"
                onClick={() => setExpandedId(open ? null : lesson.id)}
                aria-expanded={open}
                aria-controls={`lesson-panel-${lesson.id}`}
                id={`lesson-trigger-${lesson.id}`}
              >
                <span className="font-title text-lg text-blue-accent">{lesson.title}</span>
                {lesson.author ? (
                  <span className="font-ui text-xs text-text-muted">{lesson.author}</span>
                ) : null}
              </button>
              <LevelBadge level={lesson.level} />
              <Link
                to={`/lesson/${moduleId}/${lesson.id}`}
                className="rounded-lg bg-gold-main px-3 py-1.5 font-ui text-xs font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Abrir
              </Link>
            </div>
            {open ? (
              <div
                id={`lesson-panel-${lesson.id}`}
                role="region"
                aria-labelledby={`lesson-trigger-${lesson.id}`}
                className="border-t border-blue-accent/10 px-4 py-3 text-reading text-sm text-text-main"
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
