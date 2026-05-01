import { useCallback, useEffect, useState } from 'react'
import { fetchLesson } from '@/services/doctrineService'
import type { Lesson } from '@/types/doctrine'

type UseLessonState = {
  lesson: Lesson | null
  loading: boolean
  error: string | null
}

/**
 * Carga una lección doctrinal por módulo e id.
 *
 * @param moduleId - Id del módulo
 * @param lessonId - Id de la lección
 * @returns Estado, función de recarga
 */
export function useLesson(moduleId: string | undefined, lessonId: string | undefined): UseLessonState & {
  reload: () => Promise<void>
} {
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!moduleId || !lessonId) {
      setLesson(null)
      setLoading(false)
      setError('Parámetros de ruta incompletos.')
      return
    }

    setLoading(true)
    setError(null)
    try {
      const result = await fetchLesson(moduleId, lessonId)
      if (!result) {
        setLesson(null)
        setError('Lección no encontrada.')
      } else {
        setLesson(result)
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al cargar la lección.'
      setError(message)
      setLesson(null)
    } finally {
      setLoading(false)
    }
  }, [moduleId, lessonId])

  useEffect(() => {
    const schedule = () => {
      void load()
    }
    queueMicrotask(schedule)
  }, [load])

  return { lesson, loading, error, reload: load }
}
