import { Link, Navigate, useParams } from 'react-router-dom'
import { getAdjacentLessons, getLesson, getModuleById } from '../data/catalog'

export function LessonViewPage() {
  const { moduleId = '', lessonId = '' } = useParams<{ moduleId: string; lessonId: string }>()
  const mod = getModuleById(moduleId)
  const lesson = getLesson(moduleId, lessonId)

  if (!mod || !lesson) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
        <p className="font-ui text-red-800">Lección no encontrada.</p>
        <Link to="/" className="btn-secondary mt-4 inline-block">
          Volver al inicio
        </Link>
      </div>
    )
  }

  if (lesson.status !== 'PUBLISHED' || !lesson.htmlPath) {
    return (
      <Navigate
        to="/under-construction"
        replace
        state={{ lessonTitle: lesson.title, moduleId, lessonId }}
      />
    )
  }

  const { previous, next } = getAdjacentLessons(moduleId, lessonId)

  return (
    <>
      <nav
        className="mb-4 flex flex-wrap items-center gap-2 border-b border-gold-main/15 pb-3 font-ui text-sm text-text-muted"
        aria-label="Ruta de navegación"
      >
        <Link to="/" className="text-gold-main hover:text-blue-accent">
          Inicio
        </Link>
        <span aria-hidden="true">/</span>
        <Link to={`/module/${moduleId}`} className="text-gold-main hover:text-blue-accent">
          {mod.title}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="font-semibold text-blue-accent">{lesson.title}</span>
      </nav>

      <div className="lesson-iframe-shell overflow-hidden rounded-2xl border border-gold-main/20 bg-white shadow-sm">
        <iframe
          title={lesson.title}
          src={lesson.htmlPath}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
          className="lesson-iframe block min-h-[80vh] w-full border-0"
        />
      </div>

      <footer className="mt-6 flex flex-col gap-3 border-t border-gold-main/15 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {previous ? (
            <Link
              to={`/lesson/${moduleId}/${previous.id}`}
              className="btn-secondary"
            >
              ← {previous.title}
            </Link>
          ) : (
            <span className="invisible h-10 sm:hidden" aria-hidden="true" />
          )}
        </div>
        <Link to={`/module/${moduleId}`} className="btn-secondary">
          Volver al módulo
        </Link>
        <div className="flex flex-wrap justify-end gap-2">
          {next ? (
            <Link to={`/lesson/${moduleId}/${next.id}`} className="btn-primary">
              {next.title} →
            </Link>
          ) : null}
        </div>
      </footer>
    </>
  )
}
