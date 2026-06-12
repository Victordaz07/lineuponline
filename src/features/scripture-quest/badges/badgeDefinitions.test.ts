import { describe, it, expect } from 'vitest'
import { computeBadgeLevels, detectLevelUps } from './badgeDefinitions'
import { emptyStats } from './badgeTypes'
import type { SQPlayerStats, BadgeId, BadgeLevel } from './badgeTypes'

function stats(overrides: Partial<SQPlayerStats> = {}): SQPlayerStats {
  return { ...emptyStats('test-uid'), ...overrides }
}

describe('racha_sagrada', () => {
  it('L0 when no games', () => {
    expect(computeBadgeLevels(stats()).racha_sagrada).toBe(0)
  })
  it('L1 at streak 3', () => {
    expect(computeBadgeLevels(stats({ bestStreakEver: 3 })).racha_sagrada).toBe(1)
  })
  it('L2 at streak 5', () => {
    expect(computeBadgeLevels(stats({ bestStreakEver: 5 })).racha_sagrada).toBe(2)
  })
  it('L3 at streak 7', () => {
    expect(computeBadgeLevels(stats({ bestStreakEver: 7 })).racha_sagrada).toBe(3)
  })
  it('L4 at streak 10', () => {
    expect(computeBadgeLevels(stats({ bestStreakEver: 10 })).racha_sagrada).toBe(4)
  })
  it('L5 at 5 perfect games', () => {
    expect(computeBadgeLevels(stats({ bestStreakEver: 10, perfectGameCount: 5 })).racha_sagrada).toBe(5)
  })
  it('L6 at 15 perfect games', () => {
    expect(computeBadgeLevels(stats({ bestStreakEver: 10, perfectGameCount: 15 })).racha_sagrada).toBe(6)
  })
  it('L7 at 30 perfect games', () => {
    expect(computeBadgeLevels(stats({ bestStreakEver: 10, perfectGameCount: 30 })).racha_sagrada).toBe(7)
  })
  it('does NOT skip levels (streak 10 but only 4 perfect → L4)', () => {
    expect(computeBadgeLevels(stats({ bestStreakEver: 10, perfectGameCount: 4 })).racha_sagrada).toBe(4)
  })
})

describe('escriba', () => {
  const levels: [number, BadgeLevel][] = [[1,1],[3,2],[5,3],[10,4],[20,5],[35,6],[50,7]]
  levels.forEach(([count, expected]) => {
    it(`L${expected} at ${count} perfect games`, () => {
      expect(computeBadgeLevels(stats({ hundredPercentGameCount: count })).escriba).toBe(expected)
    })
  })
  it('stays at L4 with 19 games', () => {
    expect(computeBadgeLevels(stats({ hundredPercentGameCount: 19 })).escriba).toBe(4)
  })
})

describe('velocista', () => {
  const levels: [number, BadgeLevel][] = [[1,1],[2,2],[3,3],[5,4],[8,5],[12,6],[20,7]]
  levels.forEach(([streak, expected]) => {
    it(`L${expected} at top-score streak ${streak}`, () => {
      expect(computeBadgeLevels(stats({ bestTopScoreStreak: streak })).velocista).toBe(expected)
    })
  })
})

describe('defensor_fe', () => {
  const levels: [number, BadgeLevel][] = [[1,1],[3,2],[5,3],[10,4],[20,5],[35,6],[50,7]]
  levels.forEach(([wins, expected]) => {
    it(`L${expected} at ${wins} faith-topic wins`, () => {
      expect(computeBadgeLevels(stats({ faithTopicWins: wins })).defensor_fe).toBe(expected)
    })
  })
})

describe('explorador', () => {
  const tenTopics = ['t1','t2','t3','t4','t5','t6','t7','t8','t9','t10']

  it('L1 at 3 topics', () => {
    expect(computeBadgeLevels(stats({ topicsPlayed: ['a','b','c'] })).explorador).toBe(1)
  })
  it('L2 at 5 topics', () => {
    expect(computeBadgeLevels(stats({ topicsPlayed: ['a','b','c','d','e'] })).explorador).toBe(2)
  })
  it('L3 at 8 topics', () => {
    expect(computeBadgeLevels(stats({ topicsPlayed: tenTopics.slice(0, 8) })).explorador).toBe(3)
  })
  it('L4 at 10 topics', () => {
    expect(computeBadgeLevels(stats({ topicsPlayed: tenTopics })).explorador).toBe(4)
  })
  it('L5 with 2 wins in all 10 topics', () => {
    const wins = Object.fromEntries(tenTopics.map((t) => [t, 2]))
    expect(computeBadgeLevels(stats({ topicsPlayed: tenTopics, topicWins: wins })).explorador).toBe(5)
  })
  it('does NOT give L5 if one topic has only 1 win', () => {
    const wins = Object.fromEntries(tenTopics.map((t, i) => [t, i === 0 ? 1 : 2]))
    expect(computeBadgeLevels(stats({ topicsPlayed: tenTopics, topicWins: wins })).explorador).toBe(4)
  })
  it('L7 with 10 wins in all 10 topics', () => {
    const wins = Object.fromEntries(tenTopics.map((t) => [t, 10]))
    expect(computeBadgeLevels(stats({ topicsPlayed: tenTopics, topicWins: wins })).explorador).toBe(7)
  })
})

describe('campeon_mes', () => {
  it('L1 top10', () => expect(computeBadgeLevels(stats({ monthlyTop10Count: 1 })).campeon_mes).toBe(1))
  it('L2 top3', () => expect(computeBadgeLevels(stats({ monthlyTop10Count: 1, monthlyTop3Count: 1 })).campeon_mes).toBe(2))
  it('L3 first×1', () => expect(computeBadgeLevels(stats({ monthlyTop10Count:1, monthlyTop3Count:1, monthlyFirstCount:1 })).campeon_mes).toBe(3))
  it('L4 first×2', () => expect(computeBadgeLevels(stats({ monthlyTop10Count:2, monthlyTop3Count:2, monthlyFirstCount:2 })).campeon_mes).toBe(4))
  it('L7 first×10', () => expect(computeBadgeLevels(stats({ monthlyTop10Count:10, monthlyTop3Count:10, monthlyFirstCount:10 })).campeon_mes).toBe(7))
})

describe('estudioso', () => {
  const levels: [number, BadgeLevel][] = [[3,1],[10,2],[25,3],[50,4],[100,5],[200,6],[500,7]]
  levels.forEach(([n, expected]) => {
    it(`L${expected} at ${n} questions reviewed`, () => {
      expect(computeBadgeLevels(stats({ studyQuestionsReviewed: n })).estudioso).toBe(expected)
    })
  })
})

describe('llama_viva', () => {
  const levels: [number, BadgeLevel][] = [[3,1],[10,2],[25,3],[50,4],[100,5],[250,6],[500,7]]
  levels.forEach(([n, expected]) => {
    it(`L${expected} at ${n} games`, () => {
      expect(computeBadgeLevels(stats({ totalGamesCompleted: n })).llama_viva).toBe(expected)
    })
  })
})

describe('detectLevelUps', () => {
  it('returns empty when nothing changes', () => {
    const levels = computeBadgeLevels(stats())
    expect(detectLevelUps(levels, levels)).toHaveLength(0)
  })
  it('detects a single level-up', () => {
    const prev = computeBadgeLevels(stats())
    const next = computeBadgeLevels(stats({ totalGamesCompleted: 3 }))
    const ups = detectLevelUps(prev as Record<BadgeId, BadgeLevel>, next as Record<BadgeId, BadgeLevel>)
    expect(ups).toHaveLength(1)
    expect(ups[0].badgeId).toBe('llama_viva')
    expect(ups[0].newLevel).toBe(1)
  })
  it('detects simultaneous level-ups on multiple badges', () => {
    const prev = computeBadgeLevels(stats())
    const next = computeBadgeLevels(stats({ totalGamesCompleted: 10, studyQuestionsReviewed: 10 }))
    const ups = detectLevelUps(prev as Record<BadgeId, BadgeLevel>, next as Record<BadgeId, BadgeLevel>)
    expect(ups.length).toBeGreaterThanOrEqual(2)
  })
})
