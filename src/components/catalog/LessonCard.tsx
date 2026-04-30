import { useNavigate } from 'react-router-dom'
import type { CatalogLesson } from '../../types/catalog'
import { LevelBadge } from './LevelBadge'

type LessonCardProps = {
  lesson: CatalogLesson
  moduleId: string
}

export function LessonCard({ lesson, moduleId }: LessonCardProps) {
  const navigate = useNavigate()
  const isPublished = lesson.status === 'PUBLISHED' && lesson.htmlPath

  const handleActivate = () => {
    if (isPublished) {
      navigate(`/lesson/${moduleId}/${lesson.id}`)
      return
    }
    navigate('/under-construction', {
      state: {
        lessonTitle: lesson.title,
        moduleId,
        lessonId: lesson.id,
      },
    })
  }

  return (
    <article
      className={`rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 sm:p-5 ${
        isPublished
          ? 'border-gold-main/25 hover:border-gold-main/50 hover:shadow-md'
          : 'border-dashed border-gold-main/30 opacity-95 hover:border-gold-main/45'
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">
            {lesson.icon}
          </span>
          <LevelBadge level={lesson.level} />
        </div>
        <span
          className={`rounded-full px-2.5 py-0.5 font-ui text-xs font-bold ${
            isPublished
              ? 'bg-green-100 text-green-800'
              : 'bg-amber-100 text-amber-900'
          }`}
        >
          {isPublished ? 'DISPONIBLE' : 'EN CONSTRUCCIÓN'}
        </span>
      </div>
      <h3 className="mt-3 font-title text-lg text-blue-accent">{lesson.title}</h3>
      {lesson.subtitle ? (
        <p className="mt-0.5 font-ui text-sm text-gold-main">{lesson.subtitle}</p>
      ) : null}
      <p className="mt-2 font-ui text-sm text-text-muted">{lesson.description}</p>
      <p className="mt-2 font-ui text-xs text-text-muted">⏱️ ~{lesson.duration} min</p>
      <button
        type="button"
        onClick={handleActivate}
        title={
          isPublished
            ? 'Abrir lección'
            : 'Victor está estudiando este tema — pronto estará disponible'
        }
        className="btn-primary mt-4 w-full sm:w-auto"
      >
        {isPublished ? 'Estudiar ahora' : 'Ver estado'}
      </button>
    </article>
  )
}
