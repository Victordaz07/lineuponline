import type { CaminoAchievement } from '../data/caminoAchievements'

export function achievementToastMessage(a: CaminoAchievement): string {
  return `${a.emoji} Logro desbloqueado: ${a.title}`
}
