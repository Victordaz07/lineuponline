/**
 * Etapas de la sopa de letras: un camino de retos temáticos con dificultad
 * creciente. Cada etapa fija tamaño de grilla, nº de palabras, si permite
 * diagonales/reverso y los umbrales de tiempo para ganar 2 y 3 estrellas.
 */

import type { WordCategory } from './wordBank'

export type WordSearchStage = {
  id: string
  order: number
  title: string
  emoji: string
  category: WordCategory
  size: number
  wordCount: number
  allowDiagonal: boolean
  allowReverse: boolean
  /** [maxSeg para 3★, maxSeg para 2★]. Más rápido = más estrellas. */
  starTimes: [number, number]
}

export const WORD_SEARCH_STAGES: WordSearchStage[] = [
  {
    id: 'virtudes-1',
    order: 1,
    title: 'Primeros pasos',
    emoji: '🌱',
    category: 'virtudes',
    size: 8,
    wordCount: 5,
    allowDiagonal: false,
    allowReverse: false,
    starTimes: [45, 90],
  },
  {
    id: 'personajes-1',
    order: 2,
    title: 'Héroes de fe',
    emoji: '🦁',
    category: 'personajes',
    size: 9,
    wordCount: 6,
    allowDiagonal: false,
    allowReverse: false,
    starTimes: [60, 110],
  },
  {
    id: 'lugares-1',
    order: 3,
    title: 'Tierra santa',
    emoji: '🏔️',
    category: 'lugares',
    size: 10,
    wordCount: 6,
    allowDiagonal: true,
    allowReverse: false,
    starTimes: [80, 140],
  },
  {
    id: 'ordenanzas-1',
    order: 4,
    title: 'Convenios sagrados',
    emoji: '💧',
    category: 'ordenanzas',
    size: 11,
    wordCount: 7,
    allowDiagonal: true,
    allowReverse: false,
    starTimes: [100, 170],
  },
  {
    id: 'escrituras-1',
    order: 5,
    title: 'Palabra de Dios',
    emoji: '📖',
    category: 'escrituras',
    size: 11,
    wordCount: 7,
    allowDiagonal: true,
    allowReverse: true,
    starTimes: [120, 200],
  },
  {
    id: 'virtudes-2',
    order: 6,
    title: 'Corazón puro',
    emoji: '💗',
    category: 'virtudes',
    size: 12,
    wordCount: 8,
    allowDiagonal: true,
    allowReverse: true,
    starTimes: [130, 210],
  },
  {
    id: 'personajes-2',
    order: 7,
    title: 'Profetas y reyes',
    emoji: '👑',
    category: 'personajes',
    size: 12,
    wordCount: 8,
    allowDiagonal: true,
    allowReverse: true,
    starTimes: [140, 230],
  },
  {
    id: 'escrituras-2',
    order: 8,
    title: 'Maestros de la palabra',
    emoji: '📜',
    category: 'escrituras',
    size: 13,
    wordCount: 9,
    allowDiagonal: true,
    allowReverse: true,
    starTimes: [160, 260],
  },
]

/** Config del reto diario: tamaño medio, todas las direcciones, mezcla amplia. */
export const DAILY_STAGE: Omit<WordSearchStage, 'id' | 'order' | 'title' | 'emoji' | 'category'> = {
  size: 12,
  wordCount: 8,
  allowDiagonal: true,
  allowReverse: true,
  starTimes: [120, 210],
}

export function getStage(id: string): WordSearchStage | undefined {
  return WORD_SEARCH_STAGES.find((s) => s.id === id)
}

/** Calcula estrellas (1–3) según tiempo y pistas usadas. */
export function calcStars(seconds: number, hintsUsed: number, starTimes: [number, number]): number {
  let stars = seconds <= starTimes[0] ? 3 : seconds <= starTimes[1] ? 2 : 1
  if (hintsUsed >= 3) stars = Math.min(stars, 1)
  else if (hintsUsed >= 1) stars = Math.min(stars, 2)
  return stars
}
