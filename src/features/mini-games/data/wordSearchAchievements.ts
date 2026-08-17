/**
 * Logros (medallas) de la sopa de letras. Cada logro define un `test` sobre un
 * contexto de progreso; el store los evalúa tras cada partida y desbloquea los
 * que se cumplan por primera vez.
 */

export type AchievementContext = {
  /** Total de estrellas acumuladas en todas las etapas. */
  totalStars: number
  /** Etapas completadas (≥1★). */
  stagesCompleted: number
  /** Total de etapas disponibles. */
  totalStages: number
  /** Etapas con 3 estrellas. */
  perfectStages: number
  /** Palabras encontradas en toda la historia. */
  totalWordsFound: number
  /** Racha diaria actual. */
  dailyStreak: number
  /** Datos de la última partida terminada. */
  lastStars: number
  lastSeconds: number
  lastHintsUsed: number
}

export type Achievement = {
  id: string
  title: string
  description: string
  emoji: string
  test: (c: AchievementContext) => boolean
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'primera-etapa',
    title: 'El comienzo',
    description: 'Completa tu primera etapa',
    emoji: '🌟',
    test: (c) => c.stagesCompleted >= 1,
  },
  {
    id: 'sin-pistas',
    title: 'Mente clara',
    description: 'Completa una etapa sin usar pistas',
    emoji: '🧠',
    test: (c) => c.lastHintsUsed === 0 && c.lastStars >= 1,
  },
  {
    id: 'velocista',
    title: 'Velocista',
    description: 'Termina una etapa en menos de 45 segundos',
    emoji: '⚡',
    test: (c) => c.lastSeconds > 0 && c.lastSeconds < 45,
  },
  {
    id: 'tres-estrellas',
    title: 'Perfección',
    description: 'Gana 3 estrellas en una etapa',
    emoji: '💎',
    test: (c) => c.lastStars === 3,
  },
  {
    id: 'cinco-etapas',
    title: 'Peregrino',
    description: 'Completa 5 etapas',
    emoji: '🏅',
    test: (c) => c.stagesCompleted >= 5,
  },
  {
    id: 'perfeccionista',
    title: 'Perfeccionista',
    description: 'Consigue 3 estrellas en 5 etapas',
    emoji: '👑',
    test: (c) => c.perfectStages >= 5,
  },
  {
    id: 'maestro',
    title: 'Maestro de la palabra',
    description: 'Completa todas las etapas',
    emoji: '🎓',
    test: (c) => c.totalStages > 0 && c.stagesCompleted >= c.totalStages,
  },
  {
    id: 'palabras-50',
    title: 'Buscador',
    description: 'Encuentra 50 palabras en total',
    emoji: '📚',
    test: (c) => c.totalWordsFound >= 50,
  },
  {
    id: 'palabras-200',
    title: 'Erudito',
    description: 'Encuentra 200 palabras en total',
    emoji: '📖',
    test: (c) => c.totalWordsFound >= 200,
  },
  {
    id: 'racha-3',
    title: 'Constancia',
    description: 'Juega el reto diario 3 días seguidos',
    emoji: '🔥',
    test: (c) => c.dailyStreak >= 3,
  },
  {
    id: 'racha-7',
    title: 'Devoción diaria',
    description: 'Juega el reto diario 7 días seguidos',
    emoji: '🔥',
    test: (c) => c.dailyStreak >= 7,
  },
]

export function getAchievement(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find((a) => a.id === id)
}
