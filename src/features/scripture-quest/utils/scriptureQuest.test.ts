import { describe, expect, it } from 'vitest'
import type { Question } from '../types'
import { checkAndAwardBadges, type BadgeCheckContext } from './awardBadges'
import { parseQuestionsResponse } from './generateQuestions'
import { generateRoomCode, isValidRoomCode, normalizeRoomCode } from './roomCodeGenerator'
import { isPassing, pointsForCorrectAnswer } from './scoreCalculator'

const QUESTION: Question = {
  id: 'q1',
  question: '¿Quién tradujo el Libro de Mormón?',
  options: { A: 'José Smith', B: 'Moroni', C: 'Nefi', D: 'Brigham Young' },
  correctAnswer: 'A',
  explanation: 'José Smith lo tradujo por el don y poder de Dios (D. y C. 135:3).',
  topic: 'restoration',
  level: 2,
  points: 20,
  category: 'restauracion',
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

describe('scoreCalculator', () => {
  it('awards base points plus streak bonus', () => {
    expect(pointsForCorrectAnswer(QUESTION, 0)).toBe(20)
    expect(pointsForCorrectAnswer(QUESTION, 2)).toBe(30)
  })

  it('caps the streak bonus', () => {
    expect(pointsForCorrectAnswer(QUESTION, 50)).toBe(45)
  })

  it('passes only above 60% correct', () => {
    expect(isPassing(6, 10)).toBe(false)
    expect(isPassing(7, 10)).toBe(true)
    expect(isPassing(0, 0)).toBe(false)
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
    const winner = checkAndAwardBadges(
      badgeContext({ monthlyScores: { u1: 300, u2: 200 } }),
    )
    expect(winner).toContain('campeon')
    const loser = checkAndAwardBadges(
      badgeContext({ monthlyScores: { u1: 100, u2: 200 } }),
    )
    expect(loser).not.toContain('campeon')
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
