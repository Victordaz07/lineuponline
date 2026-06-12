export type BadgeId =
  | 'racha_sagrada'    // best streak in one game
  | 'escriba'          // 100% accuracy games
  | 'velocista'        // consecutive top-score sessions
  | 'defensor_fe'      // wins on Ordenanzas / Sacerdocio topics
  | 'explorador'       // topics played + wins per topic
  | 'campeon_mes'      // monthly leaderboard finishes
  | 'estudioso'        // questions reviewed in study mode
  | 'llama_viva'       // total games completed

export const BADGE_IDS: BadgeId[] = [
  'racha_sagrada', 'escriba', 'velocista', 'defensor_fe',
  'explorador', 'campeon_mes', 'estudioso', 'llama_viva',
]

/** 0 = not yet earned, 1–7 = current level */
export type BadgeLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

export interface BadgeLevelEntry {
  level: BadgeLevel
  /** ISO dates of each level unlock, index = level-1 */
  unlockedAt: string[]
}

/** Stored in Firestore: users/{uid}/sq_stats → field `badges` */
export type BadgeMap = Record<BadgeId, BadgeLevelEntry>

/** All lifetime stats needed to evaluate badge levels */
export interface SQPlayerStats {
  uid: string

  // ── Racha Sagrada ─────────────────────────────────────────────────────────
  /** Best streak (consecutive correct) achieved in a single game, ever */
  bestStreakEver: number
  /** Games where the player got every single question correct (streak = totalRounds) */
  perfectGameCount: number

  // ── Escriba ───────────────────────────────────────────────────────────────
  /** Games completed with 100% correct answers (same as perfectGameCount) */
  hundredPercentGameCount: number

  // ── Velocista ─────────────────────────────────────────────────────────────
  /** Best ever consecutive sessions where player had the highest score */
  bestTopScoreStreak: number
  /** Current running streak (reset to 0 whenever player is NOT the top scorer) */
  currentTopScoreStreak: number

  // ── Defensor de la Fe ─────────────────────────────────────────────────────
  /** Games won where the topic was Ordenanzas or Sacerdocio */
  faithTopicWins: number

  // ── Explorador ────────────────────────────────────────────────────────────
  /** Distinct topic IDs the player has played at least one game on */
  topicsPlayed: string[]
  /** Map topicId → number of wins on that topic */
  topicWins: Record<string, number>

  // ── Campeón del Mes ───────────────────────────────────────────────────────
  /** Times the player finished in the top 10 of the monthly ranking */
  monthlyTop10Count: number
  /** Times the player finished top 3 */
  monthlyTop3Count: number
  /** Times the player finished #1 */
  monthlyFirstCount: number

  // ── Estudioso ─────────────────────────────────────────────────────────────
  /** Total missed questions reviewed in study mode, cumulative */
  studyQuestionsReviewed: number

  // ── Llama Viva ────────────────────────────────────────────────────────────
  /** Total complete games played, lifetime */
  totalGamesCompleted: number

  updatedAt: string
}

/** Empty initial stats for a new player */
export function emptyStats(uid: string): SQPlayerStats {
  return {
    uid,
    bestStreakEver: 0,
    perfectGameCount: 0,
    hundredPercentGameCount: 0,
    bestTopScoreStreak: 0,
    currentTopScoreStreak: 0,
    faithTopicWins: 0,
    topicsPlayed: [],
    topicWins: {},
    monthlyTop10Count: 0,
    monthlyTop3Count: 0,
    monthlyFirstCount: 0,
    studyQuestionsReviewed: 0,
    totalGamesCompleted: 0,
    updatedAt: new Date().toISOString(),
  }
}

/** Empty initial badge map */
export function emptyBadgeMap(): BadgeMap {
  return Object.fromEntries(
    BADGE_IDS.map((id) => [id, { level: 0 as BadgeLevel, unlockedAt: [] as string[] }]),
  ) as unknown as BadgeMap
}
