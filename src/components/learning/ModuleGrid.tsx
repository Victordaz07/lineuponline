import { Link } from 'react-router-dom'
import type { DoctrinalModule } from '@/types/doctrine'

export type ModuleGridProps = {
  modules: DoctrinalModule[]
  completedLessonKeys?: string[]
}

export function ModuleGrid({ modules, completedLessonKeys = [] }: ModuleGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {modules.map((mod) => {
        const total = mod.lessonIds.length
        const completed = mod.lessonIds.filter((id) =>
          completedLessonKeys.includes(`${mod.id}:${id}`),
        ).length
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0

        return (
          <Link
            key={mod.id}
            to={`/module/${mod.id}`}
            className="group flex flex-col rounded-2xl border border-gold-main/25 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gold-main/50 hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">
                {mod.icon ?? '📘'}
              </span>
              <h2 className="font-title text-lg text-blue-accent group-hover:text-gold-main">{mod.title}</h2>
            </div>
            <p className="mb-4 flex-1 font-reading text-sm leading-relaxed text-text-muted">{mod.description}</p>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <p className="font-ui text-xs font-semibold uppercase tracking-wide text-gold-main">
                  {total} lecciones
                </p>
                <p className="font-ui text-xs text-text-muted">{completed}/{total}</p>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-elevated">
                <div
                  className="h-full rounded-full bg-gold-main transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
