import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type LessonProgressState = {
  visitedTopics: string[]
  completedQuizzes: string[]
  markTopicVisited: (key: string) => void
  markQuizCompleted: (key: string) => void
  isTopicVisited: (key: string) => boolean
  isQuizCompleted: (key: string) => boolean
}

function addUnique(list: string[], key: string): string[] {
  return list.includes(key) ? list : [...list, key]
}

/**
 * Progreso local por lección (visitas y quizzes), persistido en localStorage.
 * Claves típicas: `${lessonId}:${topicId}` y clave de quiz `${lessonId}:${quizId}`.
 */
export const useLessonProgressStore = create<LessonProgressState>()(
  persist(
    (set, get) => ({
      visitedTopics: [],
      completedQuizzes: [],
      markTopicVisited: (key) => set((s) => ({ visitedTopics: addUnique(s.visitedTopics, key) })),
      markQuizCompleted: (key) => set((s) => ({ completedQuizzes: addUnique(s.completedQuizzes, key) })),
      isTopicVisited: (key) => get().visitedTopics.includes(key),
      isQuizCompleted: (key) => get().completedQuizzes.includes(key),
    }),
    { name: 'lineup-lesson-progress' },
  ),
)
