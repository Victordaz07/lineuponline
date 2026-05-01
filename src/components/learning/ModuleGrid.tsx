import { Link } from 'react-router-dom'
import type { DoctrinalModule } from '@/types/doctrine'

export type ModuleGridProps = {
  modules: DoctrinalModule[]
}

/**
 * Cuadrícula responsive de tarjetas de módulos doctrinales.
 *
 * @param props - Lista de módulos
 * @returns Grid de enlaces
 */
export function ModuleGrid({ modules }: ModuleGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {modules.map((mod) => (
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
          <p className="font-ui text-xs font-semibold uppercase tracking-wide text-gold-main">
            {mod.lessonIds.length} lecciones
          </p>
        </Link>
      ))}
    </div>
  )
}
