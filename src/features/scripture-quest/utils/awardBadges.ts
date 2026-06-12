import { TOPICS } from '../data/topics'
import type { BadgeId, GameHistoryEntry } from '../types'

export type BadgeCheckContext = {
  uid: string
  /** Badges the player already owns (never re-awarded). */
  ownedBadges: BadgeId[]
  /** Result of the game that just finished. */
  game: {
    topicId: string
    maxStreak: number
    correctAnswers: number
    totalQuestions: number
    /** true when this player (or their team) had the highest score in the room */
    wonGame: boolean
  }
  /** Player history including the game that just finished (most recent first). */
  history: GameHistoryEntry[]
  /** Lifetime games played (persisted counter — history only keeps 6 entries). */
  totalGamesPlayed: number
  /** Consecutive sessions finishing with the top score, including this one. */
  consecutiveTopScores: number
  /** Missed questions reviewed in study mode (lifetime). */
  studiedMissedQuestions: number
  /** Monthly scores across all users: uid → accumulated score for current month. */
  monthlyScores: Record<string, number>
}

/**
 * Pure badge evaluation: returns the badges newly earned given the context.
 * Persistence (users/{uid}/badges) is handled by the caller.
 */
export function checkAndAwardBadges(ctx: BadgeCheckContext): BadgeId[] {
  const earned: BadgeId[] = []
  const owns = (id: BadgeId) => ctx.ownedBadges.includes(id) || earned.includes(id)
  const award = (id: BadgeId, condition: boolean) => {
    if (condition && !owns(id)) earned.push(id)
  }

  award('racha_sagrada', ctx.game.maxStreak >= 5)

  award(
    'escriba',
    ctx.game.totalQuestions > 0 && ctx.game.correctAnswers === ctx.game.totalQuestions,
  )

  award('velocista', ctx.consecutiveTopScores >= 3)

  award(
    'defensor',
    ctx.game.wonGame && (ctx.game.topicId === 'ordinances' || ctx.game.topicId === 'priesthood'),
  )

  const playedTopics = new Set(ctx.history.map((h) => h.topic))
  playedTopics.add(ctx.game.topicId)
  award('explorador', TOPICS.every((t) => playedTopics.has(t.id)))

  const entries = Object.entries(ctx.monthlyScores)
  const myMonthly = ctx.monthlyScores[ctx.uid] ?? 0
  award(
    'campeon',
    entries.length > 0 && myMonthly > 0 && entries.every(([, score]) => score <= myMonthly),
  )

  award('estudioso', ctx.studiedMissedQuestions >= 3)

  award('llama_viva', ctx.totalGamesPlayed >= 10)

  return earned
}
