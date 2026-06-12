import { doc, getDoc, setDoc, updateDoc, onSnapshot, type Unsubscribe } from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { BadgeId, BadgeLevel, BadgeMap, SQPlayerStats } from '../badges/badgeTypes'
import { emptyStats, emptyBadgeMap, BADGE_IDS } from '../badges/badgeTypes'
import { computeBadgeLevels, detectLevelUps } from '../badges/badgeDefinitions'

const STATS_COL = 'sq_player_stats'
const BADGES_COL = 'sq_player_badges'

// ─── Stats ────────────────────────────────────────────────────────────────────

function statsRef(uid: string) { return doc(getDb(), STATS_COL, uid) }
function badgesRef(uid: string) { return doc(getDb(), BADGES_COL, uid) }

export async function getPlayerStats(uid: string): Promise<SQPlayerStats> {
  const snap = await getDoc(statsRef(uid))
  return snap.exists() ? (snap.data() as SQPlayerStats) : emptyStats(uid)
}

export async function savePlayerStats(stats: SQPlayerStats): Promise<void> {
  await setDoc(statsRef(stats.uid), { ...stats, updatedAt: new Date().toISOString() })
}

export function subscribePlayerStats(
  uid: string,
  cb: (stats: SQPlayerStats) => void,
): Unsubscribe {
  return onSnapshot(statsRef(uid), (snap) => {
    cb(snap.exists() ? (snap.data() as SQPlayerStats) : emptyStats(uid))
  })
}

// ─── Badges ───────────────────────────────────────────────────────────────────

export async function getPlayerBadges(uid: string): Promise<BadgeMap> {
  const snap = await getDoc(badgesRef(uid))
  return snap.exists() ? (snap.data() as BadgeMap) : emptyBadgeMap()
}

export function subscribePlayerBadges(
  uid: string,
  cb: (badges: BadgeMap) => void,
): Unsubscribe {
  return onSnapshot(badgesRef(uid), (snap) => {
    cb(snap.exists() ? (snap.data() as BadgeMap) : emptyBadgeMap())
  })
}

/**
 * Evaluate stats, compute new badge levels, persist any level-ups, and
 * return the list of newly leveled-up badges (empty if nothing changed).
 */
export async function evaluateAndAwardBadges(
  uid: string,
  stats: SQPlayerStats,
): Promise<{ badgeId: BadgeId; newLevel: BadgeLevel }[]> {
  const currentBadges = await getPlayerBadges(uid)

  const prevLevels = Object.fromEntries(
    BADGE_IDS.map((id) => [id, currentBadges[id]?.level ?? 0]),
  ) as Record<BadgeId, BadgeLevel>

  const newLevels = computeBadgeLevels(stats)
  const levelUps = detectLevelUps(prevLevels, newLevels)

  if (levelUps.length === 0) return []

  const now = new Date().toISOString()
  const updates: Record<string, unknown> = {}

  for (const { badgeId, newLevel } of levelUps) {
    const prev = currentBadges[badgeId] ?? { level: 0, unlockedAt: [] }
    const unlockedAt = [...(prev.unlockedAt ?? []), now]
    updates[`${badgeId}.level`] = newLevel
    updates[`${badgeId}.unlockedAt`] = unlockedAt
  }

  const snap = await getDoc(badgesRef(uid))
  if (snap.exists()) {
    await updateDoc(badgesRef(uid), updates)
  } else {
    // First time — build full map and overlay the level-ups
    const full = emptyBadgeMap()
    for (const { badgeId, newLevel } of levelUps) {
      full[badgeId] = { level: newLevel, unlockedAt: [now] }
    }
    await setDoc(badgesRef(uid), full)
  }

  return levelUps
}

// ─── Stat update helpers (called after each game) ─────────────────────────────

interface GameResult {
  totalRounds: number
  correctCount: number
  bestStreak: number
  isWin: boolean
  topic: string
  isFaithTopic: boolean    // topic is Ordenanzas or Sacerdocio
  isTopScorer: boolean     // player had the highest score in multiplayer
  studyQuestionsReviewed?: number
}

/**
 * Merge a finished game's results into the player's lifetime stats.
 * Does NOT write to Firestore — call savePlayerStats() afterwards.
 */
export function mergeGameResult(stats: SQPlayerStats, game: GameResult): SQPlayerStats {
  const updated = { ...stats }

  // Llama Viva
  updated.totalGamesCompleted += 1

  // Racha Sagrada
  if (game.bestStreak > updated.bestStreakEver) {
    updated.bestStreakEver = game.bestStreak
  }
  const isPerfect = game.correctCount === game.totalRounds
  if (isPerfect) {
    updated.perfectGameCount += 1
    updated.hundredPercentGameCount += 1
  }

  // Escriba
  if (game.correctCount === game.totalRounds) {
    // already counted above
  }

  // Velocista
  if (game.isTopScorer) {
    updated.currentTopScoreStreak += 1
    if (updated.currentTopScoreStreak > updated.bestTopScoreStreak) {
      updated.bestTopScoreStreak = updated.currentTopScoreStreak
    }
  } else {
    updated.currentTopScoreStreak = 0
  }

  // Defensor de la Fe
  if (game.isFaithTopic && game.isWin) {
    updated.faithTopicWins += 1
  }

  // Explorador
  if (!updated.topicsPlayed.includes(game.topic)) {
    updated.topicsPlayed = [...updated.topicsPlayed, game.topic]
  }
  if (game.isWin) {
    updated.topicWins = {
      ...updated.topicWins,
      [game.topic]: (updated.topicWins[game.topic] ?? 0) + 1,
    }
  }

  // Estudioso
  if (game.studyQuestionsReviewed) {
    updated.studyQuestionsReviewed += game.studyQuestionsReviewed
  }

  updated.updatedAt = new Date().toISOString()
  return updated
}

/** Update monthly ranking stats (called by the server/Cloud Function after rank calculation) */
export async function recordMonthlyRank(uid: string, rank: number): Promise<void> {
  const stats = await getPlayerStats(uid)
  const updated = { ...stats }

  if (rank <= 10) updated.monthlyTop10Count += 1
  if (rank <= 3) updated.monthlyTop3Count += 1
  if (rank === 1) updated.monthlyFirstCount += 1

  updated.updatedAt = new Date().toISOString()
  await savePlayerStats(updated)
  await evaluateAndAwardBadges(uid, updated)
}
