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
    <div className="rounded-2xl border-2 border-gold-main/40 bg-gradient-to-r from-white to-bg-elevated p-6 shadow-sm">
      <span className="inline-block rounded-full bg-gold-main/15 px-3 py-1 font-ui text-xs font-bold uppercase tracking-widest text-gold-main">
        Siguiente sugerido
      </span>
      <div className="mt-4 flex items-start gap-3">
        {icon && (
          <span className="mt-0.5 text-3xl" aria-hidden="true">
            {icon}
          </span>
        )}
        <div className="min-w-0">
          <p className="font-title text-xl leading-snug text-blue-accent">{title}</p>
          {moduleTitle && (
            <p className="mt-0.5 font-ui text-sm text-text-muted">{moduleTitle}</p>
          )}
          <div className="mt-2 flex flex-wrap gap-2">
            {duration && (
              <span className="rounded bg-blue-accent/10 px-2 py-0.5 font-ui text-xs text-blue-accent">
                ⏱ {duration} min
              </span>
            )}
            {level && (
              <span className="rounded bg-gold-main/15 px-2 py-0.5 font-ui text-xs font-semibold text-gold-main">
                {level}
              </span>
            )}
          </div>
        </div>
      </div>
      <Link
        to={`/lesson/${moduleId}/${lessonId}`}
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-accent px-5 py-2.5 font-ui text-sm font-semibold text-white transition hover:brightness-110"
      >
        Continuar estudio →
      </Link>
    </div>
  )
}
