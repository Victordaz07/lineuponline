import type { QuestLevel, Question } from '../types'

/** Base points awarded per difficulty level (mirrors the generation prompt). */
export const POINTS_BY_LEVEL: Record<QuestLevel, number> = {
  1: 10,
  2: 20,
  3: 35,
  4: 50,
}

/** Extra points per consecutive correct answer, capped to avoid runaway scores. */
const STREAK_BONUS_PER_HIT = 5
const STREAK_BONUS_CAP = 25

export function basePointsForQuestion(question: Question): number {
  return question.points > 0 ? question.points : POINTS_BY_LEVEL[question.level] ?? 10
}

/**
 * Points for a correct answer: question base points plus a small streak bonus.
 * `streakBefore` is the player's streak prior to this question.
 */
export function pointsForCorrectAnswer(question: Question, streakBefore: number): number {
  const bonus = Math.min(streakBefore * STREAK_BONUS_PER_HIT, STREAK_BONUS_CAP)
  return basePointsForQuestion(question) + bonus
}

export function isPassing(correctAnswers: number, totalQuestions: number): boolean {
  if (totalQuestions <= 0) return false
  return correctAnswers / totalQuestions > 0.6
}
