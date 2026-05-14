import { useParams } from 'react-router-dom'
import { LessonContentView } from '@/components/doctrinal/LessonContentView'
import { UnderConstruction } from '@/components/doctrinal/UnderConstruction'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { useLesson } from '@/hooks/useLesson'
import { useSyncNotes } from '@/hooks/useSyncNotes'
import { useScrollMemory } from '@/hooks/useScrollMemory'
import { useAuth } from '@/contexts/AuthContext'

export default function LessonView() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>()
  const { lesson, loading, error } = useLesson(moduleId, lessonId)
  const { user } = useAuth()
  const { saveNote } = useSyncNotes({ userId: user?.uid ?? 'anon' })
  useScrollMemory(`lesson:${moduleId}:${lessonId}`)

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

  if (lesson.status === 'IN_CONSTRUCTION') {
    return <UnderConstruction lessonTitle={lesson.title} moduleId={moduleId} />
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
