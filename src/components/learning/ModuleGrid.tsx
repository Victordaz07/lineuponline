import { Link } from 'react-router-dom'
import type { DoctrinalModule } from '@/types/doctrine'
import { useModuleMediaStore } from '@/stores/moduleMediaStore'

export type ModuleGridProps = {
  modules: DoctrinalModule[]
  completedLessonKeys?: string[]
}

export function ModuleGrid({ modules, completedLessonKeys = [] }: ModuleGridProps) {
  const media = useModuleMediaStore((s) => s.media)

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {modules.map((mod) => {
        const total = mod.lessonIds.length
        const completed = mod.lessonIds.filter((id) =>
          completedLessonKeys.includes(`${mod.id}:${id}`),
        ).length
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0
        const coverUrl = media[mod.id]?.heroImage ?? mod.heroImageUrl

        return (
          <Link
            key={mod.id}
            to={`/module/${mod.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-deep shadow-sm transition hover:-translate-y-0.5 hover:border-sg-gold/40 hover:shadow-lg"
          >
            {coverUrl ? (
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={coverUrl}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">
                  {mod.icon ?? '📘'}
                </span>
                <h2 className="font-display text-lg text-parchment group-hover:text-sg-gold-light">{mod.title}</h2>
              </div>
              <p className="mb-4 flex-1 font-ui text-sm leading-relaxed text-parchment/50">{mod.description}</p>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <p className="font-ui text-xs font-semibold uppercase tracking-wide text-sg-gold">
                    {total} lecciones
                  </p>
                  <p className="font-ui text-xs text-parchment/35">{completed}/{total}</p>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-navy-light">
                  <div
                    className="h-full rounded-full bg-sg-gold transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
