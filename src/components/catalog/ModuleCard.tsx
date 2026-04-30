import { Link } from 'react-router-dom'
import type { CatalogModule } from '../../types/catalog'
import { getPublishedCountForModule } from '../../data/catalog'

type ModuleCardProps = {
  module: CatalogModule
}

export function ModuleCard({ module }: ModuleCardProps) {
  const { published, total } = getPublishedCountForModule(module.id)
  const percent = total === 0 ? 0 : Math.round((published / total) * 100)

  const accent = module.usePurpleAccent
    ? 'ring-1 ring-violet-300/60 hover:border-violet-400/40'
    : 'hover:border-gold-main/35'

  return (
    <Link
      to={`/module/${module.id}`}
      className={`group flex flex-col rounded-2xl border border-gold-main/20 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md ${accent}`}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <span className="text-3xl" aria-hidden="true">
          {module.icon}
        </span>
        <span className="font-ui text-xs font-semibold text-text-muted">
          {published}/{total} disponibles
        </span>
      </div>
      <h2
        className={`font-title text-lg leading-snug sm:text-xl ${
          module.usePurpleAccent ? 'text-violet-900' : 'text-blue-accent'
        }`}
      >
        {module.title}
      </h2>
      <p className="mt-2 flex-1 font-ui text-sm leading-relaxed text-text-muted">
        {module.description}
      </p>
      <div className="mt-4">
        <div className="h-2 w-full overflow-hidden rounded-full bg-bg-elevated">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              module.usePurpleAccent
                ? 'bg-gradient-to-r from-violet-500 to-violet-400'
                : 'bg-gradient-to-r from-blue-accent to-gold-main'
            }`}
            style={{ width: `${percent}%` }}
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progreso de lecciones publicadas en este módulo"
          />
        </div>
        <p className="mt-1.5 font-ui text-xs text-text-muted">{percent}% del módulo publicado</p>
      </div>
      <span className="mt-3 font-ui text-sm font-semibold text-gold-main group-hover:text-blue-accent">
        Abrir módulo →
      </span>
    </Link>
  )
}
