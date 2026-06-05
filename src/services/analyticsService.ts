import { collection, collectionGroup, getDocs } from 'firebase/firestore'
import { getDb } from '@/lib/firebase'

export type LessonMetric = {
  lessonId: string
  readers: number
}

export type QuizMetric = {
  lessonId: string
  avgScore: number
  attempts: number
}

export type AnalyticsData = {
  totalUsers: number
  activeUsersLast7d: number
  activeUsersLast30d: number
  totalTopicVisits: number
  totalQuizAttempts: number
  totalJournalEntries: number
  totalNotes: number
  topLessons: LessonMetric[]
  topQuizLessons: QuizMetric[]
  lowQuizLessons: QuizMetric[]
}

export async function fetchAnalytics(): Promise<AnalyticsData> {
  const db = getDb()
  const now = Date.now()
  const ms7d = 7 * 24 * 60 * 60 * 1000
  const ms30d = 30 * 24 * 60 * 60 * 1000

  // Users
  const usersSnap = await getDocs(collection(db, 'users'))
  let totalUsers = 0
  let activeUsersLast7d = 0
  let activeUsersLast30d = 0

  usersSnap.forEach((doc) => {
    totalUsers++
    const lastAccess = doc.data().lastAccessAt?.toDate?.()?.getTime?.() ?? 0
    const diff = now - lastAccess
    if (diff < ms7d) activeUsersLast7d++
    if (diff < ms30d) activeUsersLast30d++
  })

  // Topics — most studied lessons + quiz performance
  const topicsSnap = await getDocs(collectionGroup(db, 'topics'))
  const lessonReaders = new Map<string, Set<string>>()
  const lessonQuiz = new Map<string, { totalScore: number; attempts: number }>()
  let totalTopicVisits = 0
  let totalQuizAttempts = 0

  topicsSnap.forEach((doc) => {
    totalTopicVisits++
    const topicId = doc.id
    const lessonId = topicId.includes(':') ? topicId.split(':')[0] : topicId

    // path: user_progress/{userId}/topics/{topicId}
    const pathParts = doc.ref.path.split('/')
    const userId = pathParts[1] ?? 'unknown'

    if (!lessonReaders.has(lessonId)) lessonReaders.set(lessonId, new Set())
    lessonReaders.get(lessonId)!.add(userId)

    const data = doc.data()
    if ((data.quizAttempts as number) > 0 && typeof data.quizScore === 'number') {
      totalQuizAttempts += data.quizAttempts as number
      if (!lessonQuiz.has(lessonId)) lessonQuiz.set(lessonId, { totalScore: 0, attempts: 0 })
      const q = lessonQuiz.get(lessonId)!
      q.totalScore += (data.quizScore as number) * (data.quizAttempts as number)
      q.attempts += data.quizAttempts as number
    }
  })

  const topLessons: LessonMetric[] = [...lessonReaders.entries()]
    .map(([lessonId, readers]) => ({ lessonId, readers: readers.size }))
    .sort((a, b) => b.readers - a.readers)
    .slice(0, 10)

  const quizMetrics: QuizMetric[] = [...lessonQuiz.entries()]
    .map(([lessonId, { totalScore, attempts }]) => ({
      lessonId,
      avgScore: Math.round(totalScore / attempts),
      attempts,
    }))
    .filter((m) => m.attempts >= 1)

  const topQuizLessons = [...quizMetrics].sort((a, b) => b.avgScore - a.avgScore).slice(0, 5)
  const lowQuizLessons = [...quizMetrics]
    .sort((a, b) => a.avgScore - b.avgScore)
    .filter((m) => m.avgScore < 80)
    .slice(0, 5)

  // Journal entries
  const journalSnap = await getDocs(collectionGroup(db, 'entries'))
  const totalJournalEntries = journalSnap.size

  // Notes
  const notesSnap = await getDocs(collectionGroup(db, 'notes'))
  const totalNotes = notesSnap.size

  return {
    totalUsers,
    activeUsersLast7d,
    activeUsersLast30d,
    totalTopicVisits,
    totalQuizAttempts,
    totalJournalEntries,
    totalNotes,
    topLessons,
    topQuizLessons,
    lowQuizLessons,
  }
}
