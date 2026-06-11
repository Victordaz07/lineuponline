/**
 * Banco local de preguntas (semilla incluida en la app).
 * Sirve como respaldo sin costo cuando la colección scripturequest_questions
 * aún no ha sido sembrada en Firestore, y como fuente para el script de carga.
 */
import type { BankQuestion, GameRound, Question } from '../types'
import { LEVEL_1 } from './questions/level1'
import { LEVEL_2 } from './questions/level2'
import { LEVEL_3 } from './questions/level3'
import { LEVEL_4 } from './questions/level4'
import {
  FILL_BLANK_SEED,
  ORDER_EVENTS_SEED,
  TRUE_FALSE_SEED,
  WHO_AM_I_SEED,
} from './seed/rounds'

export const CLASSIC_QUESTIONS: Question[] = [...LEVEL_1, ...LEVEL_2, ...LEVEL_3, ...LEVEL_4]

export function classicToRound(q: Question): GameRound {
  return {
    id: q.id,
    level: q.level,
    topic: q.topic,
    category: q.category,
    roundType: 'classic',
    content: {
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    },
  }
}

/** Todas las rondas locales listas para jugar. */
export const LOCAL_ROUNDS: GameRound[] = [
  ...CLASSIC_QUESTIONS.map(classicToRound),
  ...FILL_BLANK_SEED.map((s) => ({ ...metaOf(s), roundType: 'fill_blank' as const, content: s.content })),
  ...TRUE_FALSE_SEED.map((s) => ({ ...metaOf(s), roundType: 'true_false' as const, content: s.content })),
  ...WHO_AM_I_SEED.map((s) => ({ ...metaOf(s), roundType: 'who_am_i' as const, content: s.content })),
  ...ORDER_EVENTS_SEED.map((s) => ({ ...metaOf(s), roundType: 'order_events' as const, content: s.content })),
]

function metaOf(s: { id: string; level: GameRound['level']; topic: string; category: GameRound['category'] }) {
  return { id: s.id, level: s.level, topic: s.topic, category: s.category }
}

/** Convierte el banco local al formato de documento de Firestore. */
export function localBankAsSeedDocs(): Omit<BankQuestion, 'createdAt' | 'updatedAt' | 'reviewedAt'>[] {
  return LOCAL_ROUNDS.map((round) => ({
    id: round.id,
    language: 'es',
    level: round.level,
    topic: round.topic,
    category: round.category,
    roundType: round.roundType,
    content: round.content,
    status: 'approved',
    source: 'manual',
    timesPlayed: 0,
    timesCorrect: 0,
  })) as Omit<BankQuestion, 'createdAt' | 'updatedAt' | 'reviewedAt'>[]
}
