/**
 * Scripture Quest — score display utilities.
 *
 * Raw scores (stored in Firestore / used for all calculations) are large
 * integers, e.g. 3706 or 17 246.  To keep the player-facing UI readable we
 * collapse them by ÷100, rounding UP only when the fractional part ≥ 0.88:
 *
 *   3706  →  37   (37.06, fraction 0.06 < 0.88 → floor)
 *   3788  →  38   (37.88, fraction 0.88 = 0.88 → ceil)
 *   3800  →  38   (38.00 exactly → 38)
 *  17246  → 172   (172.46 → floor)
 * 164659  → 1646  (1646.59 → floor)
 *
 * ONLY use these helpers in player-visible JSX.
 * Admin dashboards and Firestore writes always use the raw value.
 */

const DISPLAY_DIVISOR = 100
const ROUND_UP_THRESHOLD = 0.88

/** Convert a raw score to the player-visible display integer. */
export function toDisplayScore(raw: number): number {
  // Use integer remainder to avoid floating-point precision issues.
  // raw=3706 → base=37, remainder=6  → 6 < 88 → 37
  // raw=3788 → base=37, remainder=88 → 88 ≥ 88 → 38
  const rawInt = Math.round(raw) // guard against any accidental float
  const base = Math.floor(rawInt / DISPLAY_DIVISOR)
  const remainder = rawInt % DISPLAY_DIVISOR
  const threshold = Math.round(ROUND_UP_THRESHOLD * DISPLAY_DIVISOR) // 88
  return remainder >= threshold ? base + 1 : base
}

/** Format a display score with locale separators, e.g. 1646 → "1.646" (es) */
export function formatDisplayScore(raw: number, locale = 'es'): string {
  return toDisplayScore(raw).toLocaleString(locale)
}

/**
 * Format a score delta for the "+N pts" feedback label.
 * Returns e.g. "+37" or "−0" (never shows decimals).
 */
export function formatScoreDelta(rawDelta: number, locale = 'es'): string {
  const display = toDisplayScore(Math.abs(rawDelta))
  const sign = rawDelta >= 0 ? '+' : '−'
  return `${sign}${display.toLocaleString(locale)}`
}
