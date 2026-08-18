import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CAMINO_ACHIEVEMENTS, type CaminoAchievement } from '../data/caminoAchievements'
import { CAMINO_STAGES, getStage } from '../data/caminoStages'
import { DEFAULT_PILGRIM_ID } from '../data/pilgrims'

type StageProgress = {
  stars: number
  bestSeconds: number
}

export type CompleteRunResult = {
  stars: number
  isNewBest: boolean
  newAchievements: CaminoAchievement[]
}

type CaminoState = {
  stageProgress: Record<string, StageProgress>
  selectedPilgrimId: string
  unlockedAchievements: string[]

  setPilgrim: (id: string) => void
  isStageUnlocked: (stageId: string) => boolean
  completeStage: (stageId: string, seconds: number, hintsUsed: number, stars: number) => CompleteRunResult
}

function evaluateNewAchievements(
  unlocked: string[],
  ctx: Parameters<CaminoAchievement['test']>[0],
): CaminoAchievement[] {
  return CAMINO_ACHIEVEMENTS.filter((a) => !unlocked.includes(a.id) && a.test(ctx))
}

export const useCaminoStore = create<CaminoState>()(
  persist(
    (set, get) => ({
      stageProgress: {},
      selectedPilgrimId: DEFAULT_PILGRIM_ID,
      unlockedAchievements: [],

      setPilgrim: (id) => set({ selectedPilgrimId: id }),

      isStageUnlocked: (stageId) => {
        const stage = getStage(stageId)
        if (!stage) return false
        if (stage.order <= 1) return true
        const prev = CAMINO_STAGES.find((s) => s.volumeId === stage.volumeId && s.order === stage.order - 1)
        if (!prev) return true
        return (get().stageProgress[prev.id]?.stars ?? 0) >= 1
      },

      completeStage: (stageId, seconds, hintsUsed, stars) => {
        const state = get()
        const prevProgress = state.stageProgress[stageId]
        const isNewBest = !prevProgress || stars > prevProgress.stars

        const nextProgress: StageProgress = {
          stars: Math.max(prevProgress?.stars ?? 0, stars),
          bestSeconds: prevProgress ? Math.min(prevProgress.bestSeconds, seconds) : seconds,
        }
        const stageProgress = { ...state.stageProgress, [stageId]: nextProgress }

        const completedIds = Object.entries(stageProgress)
          .filter(([, p]) => p.stars >= 1)
          .map(([id]) => id)
        const stagesCompleted = completedIds.length
        const perfectStages = Object.values(stageProgress).filter((p) => p.stars >= 3).length
        const totalStars = Object.values(stageProgress).reduce((sum, p) => sum + p.stars, 0)
        const totalReadyStages = CAMINO_STAGES.filter((s) => s.status === 'ready').length

        const volumesTouched = new Set(
          completedIds.map((id) => getStage(id)?.volumeId).filter(Boolean),
        ).size
        const libroMormonCompleted = completedIds.filter(
          (id) => getStage(id)?.volumeId === 'libro-mormon',
        ).length

        const newAchievements = evaluateNewAchievements(state.unlockedAchievements, {
          totalStars,
          stagesCompleted,
          totalReadyStages,
          perfectStages,
          volumesTouched,
          libroMormonCompleted,
          lastStars: stars,
          lastSeconds: seconds,
          lastHintsUsed: hintsUsed,
        })

        set({
          stageProgress,
          unlockedAchievements: [...state.unlockedAchievements, ...newAchievements.map((a) => a.id)],
        })

        return { stars, isNewBest, newAchievements }
      },
    }),
    { name: 'lineup-camino' },
  ),
)
