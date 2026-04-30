import { CATALOG_MODULES } from '../../data/catalog'
import { ModuleCard } from './ModuleCard'

export function ModuleGrid() {
  const modules = [...CATALOG_MODULES].sort((a, b) => a.order - b.order)

  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      role="list"
      aria-label="Módulos de estudio"
    >
      {modules.map((mod) => (
        <div key={mod.id} role="listitem">
          <ModuleCard module={mod} />
        </div>
      ))}
    </div>
  )
}
