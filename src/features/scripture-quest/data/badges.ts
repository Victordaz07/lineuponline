import type { BadgeId } from '../types'

export type BadgeDef = {
  id: BadgeId
  label: string
  description: string
  icon: string
}

/** Display metadata for every badge. Award logic lives in utils/awardBadges.ts */
export const BADGES: Record<BadgeId, BadgeDef> = {
  racha_sagrada: {
    id: 'racha_sagrada',
    label: 'Racha Sagrada',
    description: 'Responde 5 preguntas correctas seguidas en una partida.',
    icon: '🔥',
  },
  escriba: {
    id: 'escriba',
    label: 'Escriba',
    description: 'Logra el 100 % de respuestas correctas en una partida completa.',
    icon: '📜',
  },
  velocista: {
    id: 'velocista',
    label: 'Velocista',
    description: 'Obtén la puntuación más alta en 3 sesiones consecutivas.',
    icon: '⚡',
  },
  defensor: {
    id: 'defensor',
    label: 'Defensor de la Fe',
    description: 'Gana una partida sobre Las Ordenanzas o El Sacerdocio.',
    icon: '🛡️',
  },
  explorador: {
    id: 'explorador',
    label: 'Explorador',
    description: 'Juega partidas de todos los temas disponibles.',
    icon: '🧭',
  },
  campeon: {
    id: 'campeon',
    label: 'Campeón del Mes',
    description: 'Logra la puntuación mensual más alta entre todos los jugadores.',
    icon: '👑',
  },
  estudioso: {
    id: 'estudioso',
    label: 'Estudioso',
    description: 'Repasa al menos 3 preguntas falladas en el modo de estudio.',
    icon: '📖',
  },
  llama_viva: {
    id: 'llama_viva',
    label: 'Llama Viva',
    description: 'Completa 10 partidas en total.',
    icon: '🕯️',
  },
}

export const AVATARS = ['🦁', '🕊️', '🐑', '🦅', '🌟', '🌿', '⛰️', '🎺', '💎', '🏹', '🌅', '⚓'] as const
