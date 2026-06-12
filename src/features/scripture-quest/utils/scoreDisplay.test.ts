import { describe, it, expect } from 'vitest'
import { toDisplayScore, formatScoreDelta } from './scoreDisplay'

describe('toDisplayScore', () => {
  it('divides by 100 and floors when fraction < 0.88', () => {
    expect(toDisplayScore(3706)).toBe(37)   // 37.06 → 37
    expect(toDisplayScore(17246)).toBe(172) // 172.46 → 172
    expect(toDisplayScore(2087)).toBe(20)   // 20.87 → 20 (example from spec)
    expect(toDisplayScore(164659)).toBe(1646) // 1646.59 → 1646
  })

  it('rounds UP when fraction >= 0.88', () => {
    expect(toDisplayScore(2088)).toBe(21)   // 20.88 → 21 (example from spec)
    expect(toDisplayScore(3788)).toBe(38)   // 37.88 → 38
    expect(toDisplayScore(3800)).toBe(38)   // 38.00 → 38
    expect(toDisplayScore(8800)).toBe(88)   // 88.00 exactly → 88
  })

  it('handles exact boundaries', () => {
    expect(toDisplayScore(887)).toBe(8)    // 8.87 → 8
    expect(toDisplayScore(888)).toBe(9)    // 8.88 → 9
    expect(toDisplayScore(0)).toBe(0)
    expect(toDisplayScore(100)).toBe(1)
    expect(toDisplayScore(1000)).toBe(10)
  })

  it('never shows decimals', () => {
    const result = toDisplayScore(3706)
    expect(Number.isInteger(result)).toBe(true)
  })
})

describe('formatScoreDelta', () => {
  it('shows + for positive, − for negative', () => {
    expect(formatScoreDelta(3706)).toBe('+37')
    expect(formatScoreDelta(-2000)).toBe('−20')
    expect(formatScoreDelta(0)).toBe('+0')
  })
})
