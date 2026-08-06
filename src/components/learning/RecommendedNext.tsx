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
    <div
      className="relative overflow-hidden rounded-[20px] border border-terracotta/30 p-5 shadow-card sm:p-6"
      style={{ background: 'linear-gradient(120deg, rgb(var(--navy-mid)), rgb(var(--navy-deep)))' }}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-terracotta/15 px-3 py-1 font-ui text-[11px] font-bold uppercase tracking-widest text-terracotta">
        <span aria-hidden="true">⚡</span>
        {moduleTitle ? `Continuar · ${moduleTitle}` : 'Siguiente sugerido'}
      </span>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-terracotta/15 text-3xl ring-1 ring-terracotta/25" aria-hidden="true">
          {icon ?? '📖'}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-xl font-semibold leading-snug text-parchment">{title}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {duration && (
              <span className="rounded-full bg-navy-light px-2.5 py-0.5 font-ui text-xs font-medium text-sg-gold-light">
                ⏱ {duration} min
              </span>
            )}
            {level && (
              <span className="rounded-full bg-sg-gold/15 px-2.5 py-0.5 font-ui text-xs font-semibold text-sg-gold">
                {level}
              </span>
            )}
          </div>
        </div>
      </div>

      <Link
        to={`/lesson/${moduleId}/${lessonId}`}
        className="group relative mt-5 inline-flex items-center gap-2 overflow-hidden rounded-full bg-sg-gold px-5 py-2.5 font-ui text-sm font-bold text-ink shadow-md transition hover:brightness-105"
      >
        <span className="relative z-10">Continuar estudio →</span>
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-3/5"
          style={{
            background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent)',
            animation: 'shimmerSweep 3s ease-in-out infinite',
          }}
        />
      </Link>
    </div>
  )
}
