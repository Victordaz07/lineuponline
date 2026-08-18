/**
 * Logros del Camino — aplican a los 3 tipos de reto por igual (sopa de
 * letras, ahorcado, conecta), ya que todos reportan estrellas, tiempo y
 * pistas usadas de la misma forma.
 */

export type CaminoAchievementContext = {
  totalStars: number
  stagesCompleted: number
  totalReadyStages: number
  perfectStages: number
  volumesTouched: number
  libroMormonCompleted: number
  lastStars: number
  lastSeconds: number
  lastHintsUsed: number
}

export type CaminoAchievement = {
  id: string
  title: string
  description: string
  emoji: string
  test: (c: CaminoAchievementContext) => boolean
}

export const CAMINO_ACHIEVEMENTS: CaminoAchievement[] = [
  {
    id: 'primera-etapa',
    title: 'El comienzo',
    description: 'Completa tu primera estación del Camino',
    emoji: '🌟',
    test: (c) => c.stagesCompleted >= 1,
  },
  {
    id: 'sin-pistas',
    title: 'Mente clara',
    description: 'Completa una estación sin usar pistas',
    emoji: '🧠',
    test: (c) => c.lastHintsUsed === 0 && c.lastStars >= 1,
  },
  {
    id: 'velocista',
    title: 'Velocista',
    description: 'Termina una estación en menos de 45 segundos',
    emoji: '⚡',
    test: (c) => c.lastSeconds > 0 && c.lastSeconds < 45,
  },
  {
    id: 'tres-estrellas',
    title: 'Perfección',
    description: 'Gana 3 estrellas en una estación',
    emoji: '💎',
    test: (c) => c.lastStars === 3,
  },
  {
    id: 'cinco-etapas',
    title: 'Peregrino',
    description: 'Completa 5 estaciones',
    emoji: '🏅',
    test: (c) => c.stagesCompleted >= 5,
  },
  {
    id: 'perfeccionista',
    title: 'Perfeccionista',
    description: 'Consigue 3 estrellas en 5 estaciones',
    emoji: '👑',
    test: (c) => c.perfectStages >= 5,
  },
  {
    id: 'explorador',
    title: 'Explorador de las Escrituras',
    description: 'Completa al menos una estación en 3 volúmenes distintos',
    emoji: '🗺️',
    test: (c) => c.volumesTouched >= 3,
  },
  {
    id: 'testigo-otro-testamento',
    title: 'Testigo de otro testamento',
    description: 'Completa las 8 estaciones del Libro de Mormón',
    emoji: '📖',
    test: (c) => c.libroMormonCompleted >= 8,
  },
]

export function getCaminoAchievement(id: string): CaminoAchievement | undefined {
  return CAMINO_ACHIEVEMENTS.find((a) => a.id === id)
}
