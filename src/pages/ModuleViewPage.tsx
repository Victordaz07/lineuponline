import { Link, useParams } from 'react-router-dom'
import { getModuleById } from '../data/catalog'
import { LessonList } from '../components/catalog/LessonList'
import { getPublishedCountForModule } from '../data/catalog'

export function ModuleViewPage() {
  const { moduleId = '' } = useParams<{ moduleId: string }>()
  const mod = getModuleById(moduleId)

  if (!mod) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
        <p className="font-ui text-red-800">Módulo no encontrado.</p>
        <Link to="/" className="btn-secondary mt-4 inline-block">
          Volver al inicio
        </Link>
      </div>
    )
  }

  const { published, total } = getPublishedCountForModule(moduleId)

  return (
    <>
      <div
        className={`rounded-2xl border p-6 shadow-sm sm:p-8 ${
          mod.usePurpleAccent
            ? 'border-violet-200/80 bg-gradient-to-br from-white to-violet-50/40'
            : 'border-gold-main/20 bg-gradient-to-br from-white to-bg-surface'
        }`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-4xl" aria-hidden="true">
            {mod.icon}
          </span>
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-wider text-gold-main">
              Módulo {mod.order}
            </p>
            <h1
              className={`font-title text-2xl sm:text-3xl ${
                mod.usePurpleAccent ? 'text-violet-900' : 'text-blue-accent'
              }`}
            >
              {mod.title}
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-3xl font-ui text-text-main">{mod.description}</p>
        <p className="mt-3 font-ui text-sm text-text-muted">
          {published} de {total} lecciones disponibles en la app.
        </p>
        <Link to="/" className="btn-secondary mt-4 inline-block text-sm">
          ← Todos los módulos
        </Link>
      </div>

      <section>
        <h2 className="mb-4 font-title text-xl text-blue-accent">Lecciones</h2>
        <LessonList moduleId={moduleId} />
      </section>
    </>
  )
}
