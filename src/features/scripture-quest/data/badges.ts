import type { SQBadgeIcon } from '../components/SQIcon'
import type { BadgeId } from '../types'

export type BadgeDef = {
  id: BadgeId
  label: string
  description: string
  icon: SQBadgeIcon
}

/** Display metadata for every badge. Award logic lives in utils/awardBadges.ts */
export const BADGES: Record<BadgeId, BadgeDef> = {
  racha_sagrada: {
    id: 'racha_sagrada',
    label: 'Racha Sagrada',
    description: 'Responde 5 preguntas correctas seguidas en una partida.',
    icon: 'flame',
  },
  escriba: {
    id: 'escriba',
    label: 'Escriba',
    description: 'Logra el 100 % de respuestas correctas en una partida completa.',
    icon: 'scroll',
  },
  velocista: {
    id: 'velocista',
    label: 'Velocista',
    description: 'Obtén la puntuación más alta en 3 sesiones consecutivas.',
    icon: 'bolt',
  },
  defensor: {
    id: 'defensor',
    label: 'Defensor de la Fe',
    description: 'Gana una partida sobre Las Ordenanzas o El Sacerdocio.',
    icon: 'shield',
  },
  explorador: {
    id: 'explorador',
    label: 'Explorador',
    description: 'Juega partidas de todos los temas disponibles.',
    icon: 'compass',
  },
  campeon: {
    id: 'campeon',
    label: 'Campeón del Mes',
    description: 'Logra la puntuación mensual más alta entre todos los jugadores.',
    icon: 'crown',
  },
  estudioso: {
    id: 'estudioso',
    label: 'Estudioso',
    description: 'Repasa al menos 3 preguntas falladas en el modo de estudio.',
    icon: 'book',
  },
  llama_viva: {
    id: 'llama_viva',
    label: 'Llama Viva',
    description: 'Completa 10 partidas en total.',
    icon: 'candle',
  },
}

export const ROUND_TYPE_LABELS: Record<string, string> = {
  classic: 'Pregunta clásica',
  fill_blank: 'Completa el versículo',
  true_false: 'Verdadero o falso',
  image_guess: 'Adivina la imagen',
  mime: 'Mímica en equipo',
  who_am_i: '¿Quién soy?',
  order_events: 'Ordena los eventos',
}
