import { useCallback, useEffect, useState } from 'react'
import { fetchDoctrineModule } from '@/services/doctrineService'
import type { DoctrinalModule, Lesson } from '@/types/doctrine'
import { findSeedLesson } from '@/data/seed-doctrine'

type UseModuleState = {
  module: DoctrinalModule | null
  lessons: Lesson[]
  loading: boolean
  error: string | null
}

/**
 * Carga un módulo doctrinal y resuelve las lecciones asociadas desde datos semilla.
 *
 * @param moduleId - Id del módulo
 * @returns Estado y recarga
 */
export function useModule(moduleId: string | undefined): UseModuleState & { reload: () => Promise<void> } {
  const [module, setModule] = useState<DoctrinalModule | null>(null)
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!moduleId) {
      setModule(null)
      setLessons([])
      setLoading(false)
      setError('Módulo no especificado.')
      return
    }

    setLoading(true)
    setError(null)
    try {
      const mod = await fetchDoctrineModule(moduleId)
      if (!mod) {
        setModule(null)
        setLessons([])
        setError('Módulo no encontrado.')
        return
      }

      const resolved = mod.lessonIds
        .map((id) => findSeedLesson(moduleId, id))
        .filter((l): l is Lesson => Boolean(l))

      setModule(mod)
      setLessons(resolved)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al cargar el módulo.'
      setError(message)
      setModule(null)
      setLessons([])
    } finally {
      setLoading(false)
    }
  }, [moduleId])

  useEffect(() => {
    queueMicrotask(() => {
      void load()
    })
  }, [load])

  return { module, lessons, loading, error, reload: load }
}
