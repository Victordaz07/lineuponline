import { describe, expect, it } from 'vitest'
import { CLASSIC_QUESTIONS, LOCAL_ROUNDS } from '../data/questionBank'
import { selectRounds } from '../services/bankService'
import type { GameRound, Question } from '../types'
import { checkAndAwardBadges, type BadgeCheckContext } from './awardBadges'
import { parseQuestionsResponse } from './generateQuestions'
import { generateRoomCode, isValidRoomCode, normalizeRoomCode } from './roomCodeGenerator'
import {
  evaluateAnswer,
  isPassing,
  levenshtein,
  matchTextAnswer,
  orderEventsScore,
  whoAmIPoints,
} from './scoreCalculator'

const QUESTION: Question = {
  id: 'q1',
  question: '¿Quién tradujo el Libro de Mormón?',
  options: { A: 'José Smith', B: 'Moroni', C: 'Nefi', D: 'Brigham Young' },
  correctAnswer: 'A',
  explanation: 'José Smith lo tradujo por el don y poder de Dios (D. y C. 135:3).',
  topic: 'restoration',
  level: 2,
  points: 2000,
  category: 'restauracion',
}

const CLASSIC_ROUND: GameRound = {
  id: 'q1',
  level: 2,
  topic: 'restoration',
  category: 'restauracion',
  roundType: 'classic',
  content: {
    question: QUESTION.question,
    options: QUESTION.options,
    correctAnswer: 'A',
    explanation: QUESTION.explanation,
  },
}

function badgeContext(overrides: Partial<BadgeCheckContext> = {}): BadgeCheckContext {
  return {
    uid: 'u1',
    ownedBadges: [],
    game: {
      topicId: 'atonement',
      maxStreak: 0,
      correctAnswers: 5,
      totalQuestions: 10,
      wonGame: false,
    },
    history: [],
    totalGamesPlayed: 1,
    consecutiveTopScores: 0,
    studiedMissedQuestions: 0,
    monthlyScores: {},
    ...overrides,
  }
}

describe('roomCodeGenerator', () => {
  it('generates valid 6-char codes', () => {
    for (let i = 0; i < 20; i++) {
      expect(isValidRoomCode(generateRoomCode())).toBe(true)
    }
  })

  it('normalizes user input', () => {
    expect(normalizeRoomCode(' ab c-123 ')).toBe('ABC123')
  })
})

describe('scoring — classic', () => {
  it('awards base + speed bonus + streak bonus on a fast correct answer', () => {
    // Level 2 base = 2000; instant answer = +500 speed; streak 2 = +1000
    const res = evaluateAnswer(CLASSIC_ROUND, 'A', 0, 2)
    expect(res.correct).toBe(true)
    expect(res.points).toBe(3500)
  })

  it('caps the streak bonus at +2500', () => {
    const res = evaluateAnswer(CLASSIC_ROUND, 'A', 20, 50)
    expect(res.points).toBe(2000 + 0 + 2500)
  })

  it('gives zero points on wrong or missing answers', () => {
    expect(evaluateAnswer(CLASSIC_ROUND, 'B', 0, 0).points).toBe(0)
    expect(evaluateAnswer(CLASSIC_ROUND, null, 0, 0).correct).toBe(false)
  })

  it('passes only above 60% correct', () => {
    expect(isPassing(6, 10)).toBe(false)
    expect(isPassing(7, 10)).toBe(true)
    expect(isPassing(0, 0)).toBe(false)
  })
})

describe('scoring — text rounds (fill_blank / image_guess)', () => {
  const round: GameRound = {
    id: 'fb1',
    level: 1,
    topic: 'atonement',
    category: 'escrituras',
    roundType: 'fill_blank',
    content: {
      verse: 'Yo soy el camino, y la verdad, y la [BLANK]',
      reference: 'Juan 14:6',
      answer: 'vida',
      acceptedVariants: [],
    },
  }

  it('matches exact answers and accents-insensitive variants for full points', () => {
    expect(evaluateAnswer(round, 'vida', 5, 0).points).toBe(1000)
    expect(evaluateAnswer(round, '  VIDA ', 5, 0).points).toBe(1000)
  })

  it('gives half points for near matches (Levenshtein ≤ 2)', () => {
    const res = evaluateAnswer(round, 'vda', 5, 0)
    expect(res.correct).toBe(true)
    expect(res.points).toBe(500)
  })

  it('rejects distant answers', () => {
    expect(evaluateAnswer(round, 'esperanza', 5, 0).correct).toBe(false)
  })

  it('levenshtein and matchTextAnswer behave as expected', () => {
    expect(levenshtein('semilla', 'semila')).toBe(1)
    expect(matchTextAnswer('Capitan Moroni', 'Capitán Moroni')).toBe('exact')
  })
})

describe('scoring — who_am_i', () => {
  const round: GameRound = {
    id: 'wai1',
    level: 2,
    topic: 'book_of_mormon',
    category: 'personajes',
    roundType: 'who_am_i',
    content: {
      clues: ['pista 1', 'pista 2', 'pista 3', 'pista 4'],
      answer: 'Nefi',
      acceptedVariants: [],
      points: [5000, 3500, 2000, 1000],
    },
  }

  it('decreases points per clue shown', () => {
    expect(whoAmIPoints(round.content, 1)).toBe(5000)
    expect(whoAmIPoints(round.content, 4)).toBe(1000)
    // Answered at 5s (clue 1) vs 30s (clue 3)
    expect(evaluateAnswer(round, 'Nefi', 5, 0).points).toBe(5000)
    expect(evaluateAnswer(round, 'Nefi', 30, 0).points).toBe(2000)
  })
})

describe('scoring — order_events', () => {
  const events = [
    { id: 'a', correctOrder: 1 },
    { id: 'b', correctOrder: 2 },
    { id: 'c', correctOrder: 3 },
    { id: 'd', correctOrder: 4 },
  ]

  it('full points for the perfect order and −25% per misplaced item', () => {
    expect(orderEventsScore(['a', 'b', 'c', 'd'], events, 1000)).toBe(1000)
    expect(orderEventsScore(['a', 'b', 'd', 'c'], events, 1000)).toBe(500)
    expect(orderEventsScore(['d', 'c', 'b', 'a'], events, 1000)).toBe(0)
  })
})

describe('question bank', () => {
  it('contains the full seeded content', () => {
    expect(CLASSIC_QUESTIONS.length).toBe(200)
    const byType = LOCAL_ROUNDS.reduce<Record<string, number>>((acc, r) => {
      acc[r.roundType] = (acc[r.roundType] ?? 0) + 1
      return acc
    }, {})
    expect(byType.classic).toBe(200)
    expect(byType.fill_blank).toBe(30)
    expect(byType.true_false).toBe(30)
    expect(byType.who_am_i).toBe(20)
    expect(byType.order_events).toBe(15)
  })

  it('has unique ids and valid classic answers', () => {
    const ids = new Set(LOCAL_ROUNDS.map((r) => r.id))
    expect(ids.size).toBe(LOCAL_ROUNDS.length)
    for (const q of CLASSIC_QUESTIONS) {
      expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer)
      expect(q.options[q.correctAnswer].length).toBeGreaterThan(0)
      expect(q.explanation.length).toBeGreaterThan(10)
    }
  })

  it('selectRounds draws the requested count and skips team-only types in solo mode', () => {
    const rounds = selectRounds(LOCAL_ROUNDS, {
      topicId: 'atonement',
      level: 2,
      count: 10,
      teamMode: false,
    })
    expect(rounds).toHaveLength(10)
    expect(rounds.some((r) => r.roundType === 'mime')).toBe(false)
    expect(new Set(rounds.map((r) => r.id)).size).toBe(10)
  })
})

describe('checkAndAwardBadges', () => {
  it('awards racha_sagrada at streak 5', () => {
    const earned = checkAndAwardBadges(
      badgeContext({ game: { ...badgeContext().game, maxStreak: 5 } }),
    )
    expect(earned).toContain('racha_sagrada')
  })

  it('awards escriba on a perfect game', () => {
    const earned = checkAndAwardBadges(
      badgeContext({ game: { ...badgeContext().game, correctAnswers: 10 } }),
    )
    expect(earned).toContain('escriba')
  })

  it('awards defensor when winning on priesthood', () => {
    const earned = checkAndAwardBadges(
      badgeContext({ game: { ...badgeContext().game, topicId: 'priesthood', wonGame: true } }),
    )
    expect(earned).toContain('defensor')
  })

  it('awards campeon only with the top monthly score', () => {
    expect(checkAndAwardBadges(badgeContext({ monthlyScores: { u1: 300, u2: 200 } }))).toContain(
      'campeon',
    )
    expect(
      checkAndAwardBadges(badgeContext({ monthlyScores: { u1: 100, u2: 200 } })),
    ).not.toContain('campeon')
  })

  it('awards velocista, estudioso and llama_viva on thresholds', () => {
    const earned = checkAndAwardBadges(
      badgeContext({
        consecutiveTopScores: 3,
        studiedMissedQuestions: 3,
        totalGamesPlayed: 10,
      }),
    )
    expect(earned).toEqual(expect.arrayContaining(['velocista', 'estudioso', 'llama_viva']))
  })

  it('never re-awards an owned badge', () => {
    const earned = checkAndAwardBadges(
      badgeContext({
        ownedBadges: ['racha_sagrada'],
        game: { ...badgeContext().game, maxStreak: 7 },
      }),
    )
    expect(earned).not.toContain('racha_sagrada')
  })
})

describe('parseQuestionsResponse', () => {
  const payload = JSON.stringify([{ ...QUESTION, id: '' }])

  it('parses a plain JSON array and fills missing ids', () => {
    const parsed = parseQuestionsResponse(payload, 'restoration', 2)
    expect(parsed).toHaveLength(1)
    expect(parsed[0].id).toBe('restoration-2-1')
    expect(parsed[0].correctAnswer).toBe('A')
  })

  it('tolerates markdown fences around the array', () => {
    const parsed = parseQuestionsResponse('```json\n' + payload + '\n```', 'restoration', 2)
    expect(parsed).toHaveLength(1)
  })

  it('rejects output without a JSON array', () => {
    expect(() => parseQuestionsResponse('no hay datos', 'restoration', 2)).toThrow()
  })
})
