import { useParams } from 'react-router-dom'
import { LessonContentView } from '@/components/doctrinal/LessonContentView'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { useLesson } from '@/hooks/useLesson'
import { useSyncNotes } from '@/hooks/useSyncNotes'

const DEMO_USER = 'demo-user'

/**
 * Página de lección individual con vista maestra y notas opcionales.
 *
 * @returns Contenido de lección o estados de carga/error
 */
export default function LessonView() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>()
  const { lesson, loading, error } = useLesson(moduleId, lessonId)
  const { saveNote } = useSyncNotes({ userId: DEMO_USER })

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error || !lesson || !moduleId || !lessonId) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
        <p className="font-ui text-sm text-amber-900">{error ?? 'No se pudo cargar la lección.'}</p>
      </div>
    )
  }

  return (
    <LessonContentView
      moduleId={moduleId}
      lessonId={lessonId}
      title={lesson.title}
      lesson={lesson}
      heroImageUrl={lesson.heroImage?.url}
      onSaveNote={saveNote}
    />
  )
}
