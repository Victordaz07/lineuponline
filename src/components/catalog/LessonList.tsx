import { getLessonsForModule } from '../../data/catalog'
import { LessonCard } from './LessonCard'

type LessonListProps = {
  moduleId: string
}

export function LessonList({ moduleId }: LessonListProps) {
  const lessons = getLessonsForModule(moduleId)

  return (
    <div className="flex flex-col gap-4" role="list" aria-label="Lecciones del módulo">
      {lessons.map((lesson) => (
        <div key={lesson.id} role="listitem">
          <LessonCard lesson={lesson} moduleId={moduleId} />
        </div>
      ))}
    </div>
  )
}
