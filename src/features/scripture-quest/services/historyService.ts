/**
 * Per-user persistence: game history (last 6), lifetime stats, monthly
 * leaderboard and earned badges. Runs on each player's client at game end.
 */
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  writeBatch,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { BadgeId, EarnedBadge, GameHistoryEntry, Question } from '../types'
import { checkAndAwardBadges } from '../utils/awardBadges'
import { isPassing } from '../utils/scoreCalculator'

const HISTORY_LIMIT = 6
const MONTHLY_COLLECTION = 'scripturequest_monthly'

function historyCol(uid: string) {
  return collection(getDb(), 'users', uid, 'gameHistory')
}

function badgesCol(uid: string) {
  return collection(getDb(), 'users', uid, 'badges')
}

/** Lifetime counters live in the user's appState subcollection (owner-only rules). */
function statsRef(uid: string) {
  return doc(getDb(), 'users', uid, 'appState', 'scriptureQuest')
}

type QuestStats = {
  gamesPlayed: number
  consecutiveTopScores: number
  studiedQuestionIds: string[]
}

const EMPTY_STATS: QuestStats = {
  gamesPlayed: 0,
  consecutiveTopScores: 0,
  studiedQuestionIds: [],
}

export async function fetchHistory(uid: string): Promise<GameHistoryEntry[]> {
  const snap = await getDocs(query(historyCol(uid), orderBy('date', 'desc')))
  return snap.docs.map((d) => d.data() as GameHistoryEntry)
}

export async function fetchBadges(uid: string): Promise<EarnedBadge[]> {
  const snap = await getDocs(badgesCol(uid))
  return snap.docs.map((d) => d.data() as EarnedBadge)
}

export async function fetchStats(uid: string): Promise<QuestStats> {
  const snap = await getDoc(statsRef(uid))
  return snap.exists() ? { ...EMPTY_STATS, ...(snap.data() as Partial<QuestStats>) } : EMPTY_STATS
}

/** Marks a missed question as studied; returns the updated lifetime count. */
export async function registerStudiedQuestion(uid: string, questionId: string): Promise<number> {
  const stats = await fetchStats(uid)
  if (!stats.studiedQuestionIds.includes(questionId)) {
    stats.studiedQuestionIds = [...stats.studiedQuestionIds, questionId]
    await setDoc(statsRef(uid), stats, { merge: true })
  }
  return stats.studiedQuestionIds.length
}

function monthKey(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

async function bumpMonthlyScore(uid: string, score: number): Promise<Record<string, number>> {
  const ref = doc(getDb(), MONTHLY_COLLECTION, monthKey())
  const snap = await getDoc(ref)
  const scores: Record<string, number> = snap.exists()
    ? ((snap.data().scores as Record<string, number> | undefined) ?? {})
    : {}
  scores[uid] = (scores[uid] ?? 0) + score
  await setDoc(ref, { scores }, { merge: true })
  return scores
}

export type GameFinishParams = {
  uid: string
  roomId: string
  topicId: string
  level: GameHistoryEntry['level']
  score: number
  totalQuestions: number
  correctAnswers: number
  missedQuestions: Question[]
  maxStreak: number
  /** Player (or their team) finished with the room's highest score. */
  wonGame: boolean
}

/**
 * Saves the finished game for one player: history entry (pruned to the last
 * 6), lifetime stats, monthly leaderboard — then evaluates and persists any
 * newly earned badges. Returns the badges awarded by this game.
 */
export async function finalizeGameForPlayer(params: GameFinishParams): Promise<BadgeId[]> {
  const { uid } = params

  const entry: Omit<GameHistoryEntry, 'date'> = {
    roomId: params.roomId,
    topic: params.topicId,
    level: params.level,
    score: params.score,
    totalQuestions: params.totalQuestions,
    correctAnswers: params.correctAnswers,
    passed: isPassing(params.correctAnswers, params.totalQuestions),
    missedQuestions: params.missedQuestions,
  }
  await setDoc(doc(historyCol(uid), params.roomId), { ...entry, date: serverTimestamp() })

  // Keep only the most recent HISTORY_LIMIT entries
  const all = await getDocs(query(historyCol(uid), orderBy('date', 'desc')))
  for (const stale of all.docs.slice(HISTORY_LIMIT)) {
    await deleteDoc(stale.ref)
  }

  const prevStats = await fetchStats(uid)
  const stats: QuestStats = {
    ...prevStats,
    gamesPlayed: prevStats.gamesPlayed + 1,
    consecutiveTopScores: params.wonGame ? prevStats.consecutiveTopScores + 1 : 0,
  }
  await setDoc(statsRef(uid), stats, { merge: true })

  const monthlyScores = await bumpMonthlyScore(uid, params.score)
  const history = all.docs.slice(0, HISTORY_LIMIT).map((d) => d.data() as GameHistoryEntry)
  const owned = (await fetchBadges(uid)).map((b) => b.badgeId)

  const newBadges = checkAndAwardBadges({
    uid,
    ownedBadges: owned,
    game: {
      topicId: params.topicId,
      maxStreak: params.maxStreak,
      correctAnswers: params.correctAnswers,
      totalQuestions: params.totalQuestions,
      wonGame: params.wonGame,
    },
    history,
    totalGamesPlayed: stats.gamesPlayed,
    consecutiveTopScores: stats.consecutiveTopScores,
    studiedMissedQuestions: stats.studiedQuestionIds.length,
    monthlyScores,
  })

  if (newBadges.length > 0) {
    const batch = writeBatch(getDb())
    for (const badgeId of newBadges) {
      batch.set(doc(badgesCol(uid), badgeId), { badgeId, earnedAt: serverTimestamp() })
    }
    await batch.commit()
  }
  return newBadges
}

/** Re-checks study-related badges (estudioso) after study-mode activity. */
export async function awardStudyBadgeIfEarned(uid: string, studiedCount: number): Promise<boolean> {
  if (studiedCount < 3) return false
  const owned = (await fetchBadges(uid)).map((b) => b.badgeId)
  if (owned.includes('estudioso')) return false
  await setDoc(doc(badgesCol(uid), 'estudioso'), {
    badgeId: 'estudioso',
    earnedAt: serverTimestamp(),
  })
  return true
}
