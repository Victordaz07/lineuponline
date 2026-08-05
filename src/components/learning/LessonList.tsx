import { Link } from 'react-router-dom'
import type { DifficultyLevel, Lesson } from '@/types/doctrine'
import { LevelBadge } from '@/components/doctrinal/LevelBadge'

export type LessonListProps = {
  lessons: Lesson[]
  moduleId: string
}

// Tinte del cuadro de icono según el nivel (coherente con LevelBadge).
const iconTint: Record<DifficultyLevel, string> = {
  BÁSICO: 'bg-jade/15 ring-jade/25',
  INTERMEDIO: 'bg-info/15 ring-info/25',
  AVANZADO: 'bg-purple/15 ring-purple/25',
}

export function LessonList({ lessons, moduleId }: LessonListProps) {
  if (lessons.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-sg-gold/20 bg-navy-mid p-6 text-center font-ui text-sm text-parchment/40">
        Aún no hay lecciones publicadas en este módulo.
      </p>
    )
  }

  return (
    <ul className="space-y-3" aria-label="Lista de lecciones">
      {lessons.map((lesson) => {
        const published = lesson.status === 'PUBLISHED'
        const tint = iconTint[lesson.level] ?? 'bg-sg-gold/15 ring-sg-gold/25'

        const inner = (
          <div className="flex items-center gap-4 px-4 py-3.5">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl ring-1 ${tint}`}
              aria-hidden="true"
            >
              {lesson.icon ?? '📖'}
            </div>
            <div className="min-w-0 flex-1">
              <p className={`font-ui text-[15px] font-bold ${published ? 'text-parchment' : 'text-parchment/45'}`}>
                {lesson.title}
              </p>
              <p className="mt-0.5 truncate font-ui text-xs text-parchment/45">
                {lesson.subtitle ?? (lesson.duration ? `${lesson.duration} min` : 'Lección')}
              </p>
            </div>
            <LevelBadge level={lesson.level} />
            {published ? (
              <span className="text-parchment/30" aria-hidden="true">›</span>
            ) : (
              <span className="rounded-full border border-sg-gold/15 px-2.5 py-0.5 font-ui text-[10px] font-semibold text-parchment/35">
                Pronto
              </span>
            )}
          </div>
        )

        return (
          <li key={lesson.id}>
            {published ? (
              <Link
                to={`/lesson/${moduleId}/${lesson.id}`}
                className="block rounded-2xl border border-sg-gold/12 bg-navy-mid shadow-card transition hover:border-sg-gold/30 hover:shadow-card-hover active:scale-[0.99]"
              >
                {inner}
              </Link>
            ) : (
              <div className="rounded-2xl border border-dashed border-sg-gold/10 bg-navy-mid opacity-60">
                {inner}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
