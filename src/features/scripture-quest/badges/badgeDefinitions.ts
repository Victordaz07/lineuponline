import type { BadgeId, BadgeLevel, SQPlayerStats } from './badgeTypes'

export interface BadgeLevelDef {
  level: BadgeLevel
  label: string        // short name shown in UI
  description: string  // what the player must achieve to earn THIS level
  /** Returns true if the player's stats meet this level's requirement */
  check: (stats: SQPlayerStats) => boolean
}

export interface BadgeDef {
  id: BadgeId
  name: string
  icon: string
  /** Base description of the badge category */
  summary: string
  levels: [
    BadgeLevelDef, BadgeLevelDef, BadgeLevelDef, BadgeLevelDef,
    BadgeLevelDef, BadgeLevelDef, BadgeLevelDef,
  ]
}

// ─── Helper ────────────────────────────────────────────────────────────────────

/** Min wins across ALL known topics (for Explorador high levels) */
function minWinsAcrossTopics(stats: SQPlayerStats, minTopics = 10): number {
  if (stats.topicsPlayed.length < minTopics) return 0
  const wins = Object.values(stats.topicWins)
  if (wins.length < minTopics) return 0
  return Math.min(...wins)
}

// ─── Badge definitions ────────────────────────────────────────────────────────

export const BADGE_DEFS: Record<BadgeId, BadgeDef> = {

  racha_sagrada: {
    id: 'racha_sagrada',
    name: 'Racha Sagrada',
    icon: '🔥',
    summary: 'Responde preguntas correctas de forma consecutiva',
    levels: [
      {
        level: 1, label: 'Principiante',
        description: 'Responde 3 preguntas seguidas correctamente en una partida',
        check: (s) => s.bestStreakEver >= 3,
      },
      {
        level: 2, label: 'Constante',
        description: 'Responde 5 preguntas seguidas correctamente en una partida',
        check: (s) => s.bestStreakEver >= 5,
      },
      {
        level: 3, label: 'Enfocado',
        description: 'Responde 7 preguntas seguidas correctamente en una partida',
        check: (s) => s.bestStreakEver >= 7,
      },
      {
        level: 4, label: 'Imparable',
        description: 'Completa una partida entera sin fallar ninguna (10 seguidas)',
        check: (s) => s.bestStreakEver >= 10,
      },
      {
        level: 5, label: 'Elegido',
        description: 'Logra 5 partidas perfectas (10/10) a lo largo del tiempo',
        check: (s) => s.perfectGameCount >= 5,
      },
      {
        level: 6, label: 'Invicto',
        description: 'Logra 15 partidas perfectas en total',
        check: (s) => s.perfectGameCount >= 15,
      },
      {
        level: 7, label: 'Profeta del Conocimiento',
        description: 'Logra 30 partidas perfectas en total',
        check: (s) => s.perfectGameCount >= 30,
      },
    ],
  },

  escriba: {
    id: 'escriba',
    name: 'Escriba',
    icon: '📜',
    summary: 'Completa partidas con 100% de respuestas correctas',
    levels: [
      {
        level: 1, label: 'Copista',
        description: 'Completa 1 partida con el 100% de aciertos',
        check: (s) => s.hundredPercentGameCount >= 1,
      },
      {
        level: 2, label: 'Registrador',
        description: 'Completa 3 partidas con el 100% de aciertos',
        check: (s) => s.hundredPercentGameCount >= 3,
      },
      {
        level: 3, label: 'Archivista',
        description: 'Completa 5 partidas con el 100% de aciertos',
        check: (s) => s.hundredPercentGameCount >= 5,
      },
      {
        level: 4, label: 'Erudito',
        description: 'Completa 10 partidas con el 100% de aciertos',
        check: (s) => s.hundredPercentGameCount >= 10,
      },
      {
        level: 5, label: 'Maestro Escriba',
        description: 'Completa 20 partidas con el 100% de aciertos',
        check: (s) => s.hundredPercentGameCount >= 20,
      },
      {
        level: 6, label: 'Guardián del Texto',
        description: 'Completa 35 partidas con el 100% de aciertos',
        check: (s) => s.hundredPercentGameCount >= 35,
      },
      {
        level: 7, label: 'Nefita Perfecto',
        description: 'Completa 50 partidas con el 100% de aciertos',
        check: (s) => s.hundredPercentGameCount >= 50,
      },
    ],
  },

  velocista: {
    id: 'velocista',
    name: 'Velocista',
    icon: '⚡',
    summary: 'Termina en lo más alto del marcador sesión tras sesión',
    levels: [
      {
        level: 1, label: 'Rápido',
        description: 'Termina con la puntuación más alta en alguna sesión',
        check: (s) => s.bestTopScoreStreak >= 1,
      },
      {
        level: 2, label: 'Ágil',
        description: 'Termina #1 en 2 sesiones consecutivas',
        check: (s) => s.bestTopScoreStreak >= 2,
      },
      {
        level: 3, label: 'Veloz',
        description: 'Termina #1 en 3 sesiones consecutivas',
        check: (s) => s.bestTopScoreStreak >= 3,
      },
      {
        level: 4, label: 'Relámpago',
        description: 'Termina #1 en 5 sesiones consecutivas',
        check: (s) => s.bestTopScoreStreak >= 5,
      },
      {
        level: 5, label: 'Tormenta',
        description: 'Termina #1 en 8 sesiones consecutivas',
        check: (s) => s.bestTopScoreStreak >= 8,
      },
      {
        level: 6, label: 'Trueno',
        description: 'Termina #1 en 12 sesiones consecutivas',
        check: (s) => s.bestTopScoreStreak >= 12,
      },
      {
        level: 7, label: 'Hijo del Trueno',
        description: 'Termina #1 en 20 sesiones consecutivas',
        check: (s) => s.bestTopScoreStreak >= 20,
      },
    ],
  },

  defensor_fe: {
    id: 'defensor_fe',
    name: 'Defensor de la Fe',
    icon: '🛡️',
    summary: 'Gana partidas en los temas de Ordenanzas y Sacerdocio',
    levels: [
      {
        level: 1, label: 'Fiel',
        description: 'Gana 1 partida en un tema de Ordenanzas o Sacerdocio',
        check: (s) => s.faithTopicWins >= 1,
      },
      {
        level: 2, label: 'Guardián',
        description: 'Gana 3 partidas en esos temas',
        check: (s) => s.faithTopicWins >= 3,
      },
      {
        level: 3, label: 'Testigo',
        description: 'Gana 5 partidas en esos temas',
        check: (s) => s.faithTopicWins >= 5,
      },
      {
        level: 4, label: 'Heraldo',
        description: 'Gana 10 partidas en esos temas',
        check: (s) => s.faithTopicWins >= 10,
      },
      {
        level: 5, label: 'Apóstol del Juego',
        description: 'Gana 20 partidas en esos temas',
        check: (s) => s.faithTopicWins >= 20,
      },
      {
        level: 6, label: 'Defensor Fiel',
        description: 'Gana 35 partidas en esos temas',
        check: (s) => s.faithTopicWins >= 35,
      },
      {
        level: 7, label: 'Campeón de la Fe',
        description: 'Gana 50 partidas en esos temas',
        check: (s) => s.faithTopicWins >= 50,
      },
    ],
  },

  explorador: {
    id: 'explorador',
    name: 'Explorador',
    icon: '🧭',
    summary: 'Explora todos los temas y gana en cada uno',
    levels: [
      {
        level: 1, label: 'Curioso',
        description: 'Juega al menos una partida en 3 temas distintos',
        check: (s) => s.topicsPlayed.length >= 3,
      },
      {
        level: 2, label: 'Viajero',
        description: 'Juega al menos una partida en 5 temas distintos',
        check: (s) => s.topicsPlayed.length >= 5,
      },
      {
        level: 3, label: 'Aventurero',
        description: 'Juega al menos una partida en 8 temas distintos',
        check: (s) => s.topicsPlayed.length >= 8,
      },
      {
        level: 4, label: 'Cartógrafo',
        description: 'Juega al menos una partida en los 10 temas disponibles',
        check: (s) => s.topicsPlayed.length >= 10,
      },
      {
        level: 5, label: 'Conquistador',
        description: 'Gana al menos 2 partidas en cada uno de los 10 temas',
        check: (s) => minWinsAcrossTopics(s, 10) >= 2,
      },
      {
        level: 6, label: 'Maestro Explorador',
        description: 'Gana al menos 5 partidas en cada uno de los 10 temas',
        check: (s) => minWinsAcrossTopics(s, 10) >= 5,
      },
      {
        level: 7, label: 'Señor de los Pergaminos',
        description: 'Gana al menos 10 partidas en cada uno de los 10 temas',
        check: (s) => minWinsAcrossTopics(s, 10) >= 10,
      },
    ],
  },

  campeon_mes: {
    id: 'campeon_mes',
    name: 'Campeón del Mes',
    icon: '👑',
    summary: 'Domina el ranking mensual de Scripture Quest',
    levels: [
      {
        level: 1, label: 'Contendiente',
        description: 'Termina en el top 10 del ranking mensual alguna vez',
        check: (s) => s.monthlyTop10Count >= 1,
      },
      {
        level: 2, label: 'Finalista',
        description: 'Termina en el top 3 del ranking mensual alguna vez',
        check: (s) => s.monthlyTop3Count >= 1,
      },
      {
        level: 3, label: 'Campeón',
        description: 'Termina #1 del ranking mensual al menos una vez',
        check: (s) => s.monthlyFirstCount >= 1,
      },
      {
        level: 4, label: 'Bicampeón',
        description: 'Termina #1 del ranking mensual en 2 meses distintos',
        check: (s) => s.monthlyFirstCount >= 2,
      },
      {
        level: 5, label: 'Tricampeón',
        description: 'Termina #1 del ranking mensual en 3 meses distintos',
        check: (s) => s.monthlyFirstCount >= 3,
      },
      {
        level: 6, label: 'Dominador',
        description: 'Termina #1 del ranking mensual en 5 meses distintos',
        check: (s) => s.monthlyFirstCount >= 5,
      },
      {
        level: 7, label: 'Leyenda Eterna',
        description: 'Termina #1 del ranking mensual en 10 meses distintos',
        check: (s) => s.monthlyFirstCount >= 10,
      },
    ],
  },

  estudioso: {
    id: 'estudioso',
    name: 'Estudioso',
    icon: '📖',
    summary: 'Repasa tus errores en el modo de estudio',
    levels: [
      {
        level: 1, label: 'Repasador',
        description: 'Repasa 3 preguntas falladas en el modo de estudio',
        check: (s) => s.studyQuestionsReviewed >= 3,
      },
      {
        level: 2, label: 'Diligente',
        description: 'Repasa 10 preguntas falladas en total',
        check: (s) => s.studyQuestionsReviewed >= 10,
      },
      {
        level: 3, label: 'Aplicado',
        description: 'Repasa 25 preguntas falladas en total',
        check: (s) => s.studyQuestionsReviewed >= 25,
      },
      {
        level: 4, label: 'Estudioso',
        description: 'Repasa 50 preguntas falladas en total',
        check: (s) => s.studyQuestionsReviewed >= 50,
      },
      {
        level: 5, label: 'Sabio',
        description: 'Repasa 100 preguntas falladas en total',
        check: (s) => s.studyQuestionsReviewed >= 100,
      },
      {
        level: 6, label: 'Maestro Sabio',
        description: 'Repasa 200 preguntas falladas en total',
        check: (s) => s.studyQuestionsReviewed >= 200,
      },
      {
        level: 7, label: 'Luz del Mundo',
        description: 'Repasa 500 preguntas falladas en total',
        check: (s) => s.studyQuestionsReviewed >= 500,
      },
    ],
  },

  llama_viva: {
    id: 'llama_viva',
    name: 'Llama Viva',
    icon: '🕯️',
    summary: 'Juega partidas de Scripture Quest una y otra vez',
    levels: [
      {
        level: 1, label: 'Iniciado',
        description: 'Completa 3 partidas en total',
        check: (s) => s.totalGamesCompleted >= 3,
      },
      {
        level: 2, label: 'Aficionado',
        description: 'Completa 10 partidas en total',
        check: (s) => s.totalGamesCompleted >= 10,
      },
      {
        level: 3, label: 'Jugador',
        description: 'Completa 25 partidas en total',
        check: (s) => s.totalGamesCompleted >= 25,
      },
      {
        level: 4, label: 'Veterano',
        description: 'Completa 50 partidas en total',
        check: (s) => s.totalGamesCompleted >= 50,
      },
      {
        level: 5, label: 'Experto',
        description: 'Completa 100 partidas en total',
        check: (s) => s.totalGamesCompleted >= 100,
      },
      {
        level: 6, label: 'Leyenda',
        description: 'Completa 250 partidas en total',
        check: (s) => s.totalGamesCompleted >= 250,
      },
      {
        level: 7, label: 'Llama Eterna',
        description: 'Completa 500 partidas en total',
        check: (s) => s.totalGamesCompleted >= 500,
      },
    ],
  },
}

/** Given a player's stats, return the highest level earned for each badge (0 if none). */
export function computeBadgeLevels(stats: SQPlayerStats): Record<BadgeId, BadgeLevel> {
  const result = {} as Record<BadgeId, BadgeLevel>
  for (const def of Object.values(BADGE_DEFS)) {
    let earned: BadgeLevel = 0
    for (const lvl of def.levels) {
      if (lvl.check(stats)) earned = lvl.level
      else break // levels are sequential — stop at first unmet
    }
    result[def.id] = earned
  }
  return result
}

/** Returns only the badge IDs that leveled up (newLevel > prevLevel). */
export function detectLevelUps(
  prev: Record<BadgeId, BadgeLevel>,
  next: Record<BadgeId, BadgeLevel>,
): { badgeId: BadgeId; newLevel: BadgeLevel }[] {
  return (Object.keys(next) as BadgeId[])
    .filter((id) => next[id] > prev[id])
    .map((id) => ({ badgeId: id, newLevel: next[id] }))
}
