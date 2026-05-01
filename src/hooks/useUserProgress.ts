import { useCallback, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'lineuponline:userProgress:v1'

type ProgressPayload = {
  completedLessonKeys: string[]
}

function readProgress(): ProgressPayload {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return { completedLessonKeys: [] }
    }
    const parsed: unknown = JSON.parse(raw)
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      Array.isArray((parsed as ProgressPayload).completedLessonKeys)
    ) {
      return {
        completedLessonKeys: (parsed as ProgressPayload).completedLessonKeys.filter(
          (k): k is string => typeof k === 'string',
        ),
      }
    }
  } catch {
    /* ignore */
  }
  return { completedLessonKeys: [] }
}

function writeProgress(payload: ProgressPayload): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
}

function lessonKey(moduleId: string, lessonId: string): string {
  return `${moduleId}:${lessonId}`
}

/**
 * Progreso local del usuario (lecciones completadas) persistido en localStorage.
 *
 * @param userId - Id de usuario (reservado para cuando exista auth unificada)
 * @returns Estado y helpers
 */
export function useUserProgress(userId: string) {
  const [completedLessonKeys, setCompletedLessonKeys] = useState<string[]>([])

  useEffect(() => {
    void userId
    queueMicrotask(() => {
      const { completedLessonKeys: keys } = readProgress()
      setCompletedLessonKeys(keys)
    })
  }, [userId])

  const markLessonComplete = useCallback((moduleId: string, lessonId: string) => {
    const key = lessonKey(moduleId, lessonId)
    setCompletedLessonKeys((prev) => {
      if (prev.includes(key)) {
        return prev
      }
      const next = [...prev, key]
      writeProgress({ completedLessonKeys: next })
      return next
    })
  }, [])

  const isLessonComplete = useCallback(
    (moduleId: string, lessonId: string) => completedLessonKeys.includes(lessonKey(moduleId, lessonId)),
    [completedLessonKeys],
  )

  const completedCount = useMemo(() => completedLessonKeys.length, [completedLessonKeys])

  return {
    completedLessonKeys,
    completedCount,
    markLessonComplete,
    isLessonComplete,
  }
}
