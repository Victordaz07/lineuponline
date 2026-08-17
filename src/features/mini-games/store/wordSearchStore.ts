import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ACHIEVEMENTS, type Achievement } from '../data/wordSearchAchievements'
import { WORD_SEARCH_STAGES } from '../data/wordSearchStages'
import { dayKey, daysBetween } from '../lib/rng'

type StageProgress = {
  stars: number
  bestSeconds: number
}

export type CompleteRunResult = {
  stars: number
  isNewBest: boolean
  newAchievements: Achievement[]
}

type WordSearchState = {
  stageProgress: Record<string, StageProgress>
  totalWordsFound: number

  dailyStreak: number
  longestDailyStreak: number
  lastDailyDay: string | null

  unlockedAchievements: string[]

  isStageUnlocked: (stageId: string) => boolean
  completeStage: (stageId: string, seconds: number, hintsUsed: number, wordsFound: number, stars: number) => CompleteRunResult
  completeDaily: (seconds: number, hintsUsed: number, wordsFound: number, stars: number) => CompleteRunResult
  hasPlayedDailyToday: () => boolean
}

function evaluateNewAchievements(
  unlocked: string[],
  ctx: Parameters<Achievement['test']>[0],
): Achievement[] {
  return ACHIEVEMENTS.filter((a) => !unlocked.includes(a.id) && a.test(ctx))
}

export const useWordSearchStore = create<WordSearchState>()(
  persist(
    (set, get) => ({
      stageProgress: {},
      totalWordsFound: 0,
      dailyStreak: 0,
      longestDailyStreak: 0,
      lastDailyDay: null,
      unlockedAchievements: [],

      isStageUnlocked: (stageId) => {
        const stages = WORD_SEARCH_STAGES
        const idx = stages.findIndex((s) => s.id === stageId)
        if (idx <= 0) return true
        const prev = stages[idx - 1]
        return (get().stageProgress[prev.id]?.stars ?? 0) >= 1
      },

      completeStage: (stageId, seconds, hintsUsed, wordsFound, stars) => {
        const state = get()
        const prevProgress = state.stageProgress[stageId]
        const isNewBest = !prevProgress || stars > prevProgress.stars

        const nextProgress: StageProgress = {
          stars: Math.max(prevProgress?.stars ?? 0, stars),
          bestSeconds: prevProgress ? Math.min(prevProgress.bestSeconds, seconds) : seconds,
        }
        const stageProgress = { ...state.stageProgress, [stageId]: nextProgress }
        const totalWordsFound = state.totalWordsFound + wordsFound

        const stagesCompleted = Object.values(stageProgress).filter((p) => p.stars >= 1).length
        const perfectStages = Object.values(stageProgress).filter((p) => p.stars >= 3).length
        const totalStars = Object.values(stageProgress).reduce((sum, p) => sum + p.stars, 0)

        const newAchievements = evaluateNewAchievements(state.unlockedAchievements, {
          totalStars,
          stagesCompleted,
          totalStages: WORD_SEARCH_STAGES.length,
          perfectStages,
          totalWordsFound,
          dailyStreak: state.dailyStreak,
          lastStars: stars,
          lastSeconds: seconds,
          lastHintsUsed: hintsUsed,
        })

        set({
          stageProgress,
          totalWordsFound,
          unlockedAchievements: [...state.unlockedAchievements, ...newAchievements.map((a) => a.id)],
        })

        return { stars, isNewBest, newAchievements }
      },

      hasPlayedDailyToday: () => get().lastDailyDay === dayKey(),

      completeDaily: (seconds, hintsUsed, wordsFound, stars) => {
        const state = get()
        const today = dayKey()
        const alreadyToday = state.lastDailyDay === today

        let nextStreak = state.dailyStreak
        if (!alreadyToday) {
          nextStreak = 1
          if (state.lastDailyDay) {
            const diff = daysBetween(state.lastDailyDay, today)
            if (diff === 1) nextStreak = state.dailyStreak + 1
            // diff <= 0 no debería pasar aquí; diff > 1 => racha rota => 1
          }
        }

        const totalWordsFound = state.totalWordsFound + (alreadyToday ? 0 : wordsFound)
        const longestDailyStreak = Math.max(state.longestDailyStreak, nextStreak)

        const stagesCompleted = Object.values(state.stageProgress).filter((p) => p.stars >= 1).length
        const perfectStages = Object.values(state.stageProgress).filter((p) => p.stars >= 3).length
        const totalStars = Object.values(state.stageProgress).reduce((sum, p) => sum + p.stars, 0)

        const newAchievements = evaluateNewAchievements(state.unlockedAchievements, {
          totalStars,
          stagesCompleted,
          totalStages: WORD_SEARCH_STAGES.length,
          perfectStages,
          totalWordsFound,
          dailyStreak: nextStreak,
          lastStars: stars,
          lastSeconds: seconds,
          lastHintsUsed: hintsUsed,
        })

        set({
          lastDailyDay: today,
          dailyStreak: nextStreak,
          longestDailyStreak,
          totalWordsFound,
          unlockedAchievements: [...state.unlockedAchievements, ...newAchievements.map((a) => a.id)],
        })

        return { stars, isNewBest: !alreadyToday, newAchievements }
      },
    }),
    { name: 'lineup-wordsearch' },
  ),
)
