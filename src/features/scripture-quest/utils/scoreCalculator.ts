import type { GameRound, Question, QuestLevel, RoundType } from '../types'

/** Base points per difficulty level. */
export const POINTS_BY_LEVEL: Record<QuestLevel, number> = {
  1: 1000,
  2: 2000,
  3: 3500,
  4: 5000,
}

/** Streak bonus: +500 per consecutive correct answer, capped at +2500. */
const STREAK_BONUS_PER_HIT = 500
const STREAK_BONUS_CAP = 2500

/** Max speed bonus (linear with remaining time) for classic/true_false. */
const SPEED_BONUS_MAX = 500

/** Timer duration in seconds per round type. */
export const TIMER_BY_TYPE: Record<RoundType, number> = {
  classic: 20,
  fill_blank: 25,
  true_false: 10,
  image_guess: 30,
  mime: 60,
  who_am_i: 48, // 4 clues × 12s
  order_events: 35,
}

/** A new who_am_i clue is revealed every 12 seconds. */
export const WHO_AM_I_CLUE_SECONDS = 12

/** Round types that can only be played with teams. */
export const TEAM_ONLY_TYPES: RoundType[] = ['mime']

export function basePointsForLevel(level: QuestLevel): number {
  return POINTS_BY_LEVEL[level] ?? 1000
}

export function streakBonus(streakBefore: number): number {
  return Math.min(streakBefore * STREAK_BONUS_PER_HIT, STREAK_BONUS_CAP)
}

function speedBonus(elapsedSeconds: number, duration: number): number {
  if (duration <= 0) return 0
  const remainingFraction = Math.max(0, 1 - elapsedSeconds / duration)
  return Math.round(SPEED_BONUS_MAX * remainingFraction)
}

export function isPassing(correctAnswers: number, totalQuestions: number): boolean {
  if (totalQuestions <= 0) return false
  return correctAnswers / totalQuestions > 0.6
}

/* ── Texto: normalización y coincidencia aproximada ───────────────────── */

export function normalizeText(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9ñ\s]/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Levenshtein distance between two normalized strings. */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    const curr = [i]
    for (let j = 1; j <= b.length; j++) {
      curr[j] = Math.min(
        prev[j] + 1,
        curr[j - 1] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      )
    }
    prev = curr
  }
  return prev[b.length]
}

export type TextMatch = 'exact' | 'partial' | 'wrong'

/** Exact match or accepted variant = exact; Levenshtein ≤ 2 = partial. */
export function matchTextAnswer(
  raw: string,
  answer: string,
  acceptedVariants: string[] = [],
): TextMatch {
  const guess = normalizeText(raw)
  if (!guess) return 'wrong'
  const candidates = [answer, ...acceptedVariants].map(normalizeText)
  if (candidates.includes(guess)) return 'exact'
  if (candidates.some((c) => levenshtein(guess, c) <= 2)) return 'partial'
  return 'wrong'
}

/* ── Puntuación por tipo de ronda ─────────────────────────────────────── */

/** Points for who_am_i depending on how many clues were visible (1-based). */
export function whoAmIPoints(content: { points: number[] }, cluesShown: number): number {
  const idx = Math.min(Math.max(cluesShown, 1), content.points.length) - 1
  return content.points[idx] ?? 0
}

/** 100% correct order = full points; each out-of-place item −25% (min 0). */
export function orderEventsScore(
  submittedIds: string[],
  events: { id: string; correctOrder: number }[],
  basePoints: number,
): number {
  const correctSequence = [...events]
    .sort((a, b) => a.correctOrder - b.correctOrder)
    .map((e) => e.id)
  let misplaced = 0
  for (let i = 0; i < correctSequence.length; i++) {
    if (submittedIds[i] !== correctSequence[i]) misplaced++
  }
  return Math.max(0, Math.round(basePoints * (1 - 0.25 * misplaced)))
}

export type RoundEvaluation = { correct: boolean; points: number }

/**
 * Evaluates a raw answer for any round type and returns the points earned.
 * `elapsedSeconds` is measured from the server-side questionStartedAt.
 */
export function evaluateAnswer(
  round: GameRound,
  rawAnswer: string | null,
  elapsedSeconds: number,
  streakBefore: number,
): RoundEvaluation {
  const base = basePointsForLevel(round.level)
  const duration = TIMER_BY_TYPE[round.roundType]
  if (rawAnswer === null || rawAnswer === '') return { correct: false, points: 0 }

  switch (round.roundType) {
    case 'classic': {
      const correct = rawAnswer === round.content.correctAnswer
      return {
        correct,
        points: correct
          ? base + speedBonus(elapsedSeconds, duration) + streakBonus(streakBefore)
          : 0,
      }
    }
    case 'true_false': {
      const correct = rawAnswer === String(round.content.isTrue)
      return {
        correct,
        points: correct
          ? base + speedBonus(elapsedSeconds, duration) + streakBonus(streakBefore)
          : 0,
      }
    }
    case 'fill_blank':
    case 'image_guess': {
      const match = matchTextAnswer(
        rawAnswer,
        round.content.answer,
        round.content.acceptedVariants,
      )
      if (match === 'exact') return { correct: true, points: base }
      if (match === 'partial') return { correct: true, points: Math.round(base / 2) }
      return { correct: false, points: 0 }
    }
    case 'mime': {
      // Full points to the whole team if any member typed the correct answer
      const match = matchTextAnswer(
        rawAnswer,
        round.content.answer,
        round.content.acceptedVariants,
      )
      return { correct: match !== 'wrong', points: match !== 'wrong' ? base : 0 }
    }
    case 'who_am_i': {
      const match = matchTextAnswer(
        rawAnswer,
        round.content.answer,
        round.content.acceptedVariants,
      )
      if (match === 'wrong') return { correct: false, points: 0 }
      const cluesShown = Math.min(
        Math.floor(elapsedSeconds / WHO_AM_I_CLUE_SECONDS) + 1,
        round.content.clues.length,
      )
      return { correct: true, points: whoAmIPoints(round.content, cluesShown) }
    }
    case 'order_events': {
      const submitted = rawAnswer.split(',').map((s) => s.trim())
      const points = orderEventsScore(submitted, round.content.events, base)
      return { correct: points === base, points }
    }
  }
}

/** Correct answer of a round as display text (reveal/study screens). */
export function roundAnswerText(round: GameRound): string {
  switch (round.roundType) {
    case 'classic':
      return `${round.content.correctAnswer}. ${round.content.options[round.content.correctAnswer]}`
    case 'fill_blank':
      return round.content.answer
    case 'true_false':
      return round.content.isTrue ? 'Verdadero' : 'Falso'
    case 'image_guess':
    case 'mime':
    case 'who_am_i':
      return round.content.answer
    case 'order_events':
      return [...round.content.events]
        .sort((a, b) => a.correctOrder - b.correctOrder)
        .map((e, i) => `${i + 1}. ${e.text}`)
        .join(' → ')
  }
}

/** Round headline shown to players/host. */
export function roundPromptText(round: GameRound): string {
  switch (round.roundType) {
    case 'classic':
      return round.content.question
    case 'fill_blank':
      return round.content.verse
    case 'true_false':
      return round.content.statement
    case 'image_guess':
      return '¿Qué representa esta imagen?'
    case 'mime':
      return '¡Adivina lo que actúa tu compañero!'
    case 'who_am_i':
      return '¿Quién soy?'
    case 'order_events':
      return 'Ordena los acontecimientos cronológicamente'
  }
}

/** Explanation / "Dato de las Escrituras" for the reveal screen. */
export function roundExplanation(round: GameRound): string {
  switch (round.roundType) {
    case 'classic':
      return round.content.explanation
    case 'fill_blank':
      return `"${round.content.verse.replace('[BLANK]', round.content.answer)}" (${round.content.reference})`
    case 'true_false':
      return round.content.explanation
    case 'order_events':
      return round.content.explanation
    case 'who_am_i':
      return `Las pistas describían a ${round.content.answer}.`
    case 'image_guess':
    case 'mime':
      return `La imagen representaba: ${round.content.answer}.`
  }
}

/** Converts any round into a classic-shaped Question for study/history. */
export function roundToStudyQuestion(round: GameRound): Question {
  if (round.roundType === 'classic') {
    return {
      id: round.id,
      question: round.content.question,
      options: round.content.options,
      correctAnswer: round.content.correctAnswer,
      explanation: round.content.explanation,
      topic: round.topic,
      level: round.level,
      points: basePointsForLevel(round.level),
      category: round.category,
    }
  }
  const answer = roundAnswerText(round)
  return {
    id: round.id,
    question: roundPromptText(round),
    options: { A: answer, B: '', C: '', D: '' },
    correctAnswer: 'A',
    explanation: roundExplanation(round),
    topic: round.topic,
    level: round.level,
    points: basePointsForLevel(round.level),
    category: round.category,
  }
}
