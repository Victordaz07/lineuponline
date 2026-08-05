import { Link } from 'react-router-dom'

export type RecommendedNextProps = {
  moduleId: string
  lessonId: string
  title: string
  moduleTitle?: string
  icon?: string
  duration?: number
  level?: string
}

export function RecommendedNext({ moduleId, lessonId, title, moduleTitle, icon, duration, level }: RecommendedNextProps) {
  return (
    <div className="rounded-2xl border border-sg-gold/30 bg-navy-mid p-6 shadow-sm">
      <span className="inline-block rounded-full bg-sg-gold/15 px-3 py-1 font-ui text-xs font-bold uppercase tracking-widest text-sg-gold">
        Siguiente sugerido
      </span>
      <div className="mt-4 flex items-start gap-3">
        {icon && (
          <span className="mt-0.5 text-3xl" aria-hidden="true">
            {icon}
          </span>
        )}
        <div className="min-w-0">
          <p className="font-display text-xl leading-snug text-parchment">{title}</p>
          {moduleTitle && (
            <p className="mt-0.5 font-ui text-sm text-parchment/50">{moduleTitle}</p>
          )}
          <div className="mt-2 flex flex-wrap gap-2">
            {duration && (
              <span className="rounded bg-navy-light px-2 py-0.5 font-ui text-xs text-sg-gold-light">
                ⏱ {duration} min
              </span>
            )}
            {level && (
              <span className="rounded bg-sg-gold/15 px-2 py-0.5 font-ui text-xs font-semibold text-sg-gold">
                {level}
              </span>
            )}
          </div>
        </div>
      </div>
      <Link
        to={`/lesson/${moduleId}/${lessonId}`}
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-ink transition hover:brightness-95"
      >
        Continuar estudio →
      </Link>
    </div>
  )
}
