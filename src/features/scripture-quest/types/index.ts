/**
 * Scripture Quest — shared types for the realtime trivia module.
 * Mirrors the Firestore data model (scripturequest_rooms + subcollections,
 * scripturequest_questions bank).
 */
import type { Timestamp } from 'firebase/firestore'

export type AnswerOption = 'A' | 'B' | 'C' | 'D'

export type QuestionCategory =
  | 'personajes'
  | 'lugares'
  | 'eventos'
  | 'doctrina'
  | 'escrituras'
  | 'cronologia'
  | 'simbolos'
  | 'restauracion'

export type QuestLevel = 1 | 2 | 3 | 4

/** Legacy/classic question shape — also used for study mode and history. */
export type Question = {
  id: string
  question: string
  options: Record<AnswerOption, string>
  correctAnswer: AnswerOption
  /** 1-2 sentences with scripture reference */
  explanation: string
  topic: string
  level: QuestLevel
  points: number
  category: QuestionCategory
}

/* ── Multi-round engine ──────────────────────────────────────────────── */

export type RoundType =
  | 'classic'
  | 'fill_blank'
  | 'true_false'
  | 'image_guess'
  | 'mime'
  | 'who_am_i'
  | 'order_events'

export type ClassicContent = {
  question: string
  options: Record<AnswerOption, string>
  correctAnswer: AnswerOption
  explanation: string
}

export type FillBlankContent = {
  /** Full verse with a [BLANK] marker */
  verse: string
  reference: string
  answer: string
  acceptedVariants: string[]
}

export type TrueFalseContent = {
  statement: string
  isTrue: boolean
  explanation: string
}

export type ImageGuessCategory = 'personaje' | 'escena' | 'lugar' | 'simbolo'

export type ImageGuessContent = {
  imageUrl: string
  /** Prompt used to generate the image (audit trail) */
  imagePrompt: string
  answer: string
  acceptedVariants: string[]
  category: ImageGuessCategory
  /** Shown after 15s if no one has answered */
  hint: string
}

export type MimeContent = {
  imageUrl: string
  answer: string
  acceptedVariants: string[]
  category: ImageGuessCategory
  /** Shown only to the actor on their phone */
  actorInstructions: string
}

export type WhoAmIContent = {
  /** 4 clues, ordered easiest to hardest */
  clues: string[]
  answer: string
  acceptedVariants: string[]
  /** Decreasing points per clue shown, e.g. [5000, 3500, 2000, 1000] */
  points: number[]
}

export type OrderEventsContent = {
  events: { id: string; text: string; correctOrder: number }[]
  explanation: string
}

export type RoundContent =
  | { roundType: 'classic'; content: ClassicContent }
  | { roundType: 'fill_blank'; content: FillBlankContent }
  | { roundType: 'true_false'; content: TrueFalseContent }
  | { roundType: 'image_guess'; content: ImageGuessContent }
  | { roundType: 'mime'; content: MimeContent }
  | { roundType: 'who_am_i'; content: WhoAmIContent }
  | { roundType: 'order_events'; content: OrderEventsContent }

/** One playable round embedded on the room document. */
export type GameRound = RoundContent & {
  id: string
  level: QuestLevel
  topic: string
  category: QuestionCategory
}

/* ── Question bank (scripturequest_questions) ────────────────────────── */

export type BankStatus = 'approved' | 'draft' | 'rejected'
export type BankSource = 'manual' | 'ai'

export type BankQuestion = RoundContent & {
  id: string
  language: 'es'
  level: QuestLevel
  topic: string
  category: QuestionCategory
  status: BankStatus
  source: BankSource
  timesPlayed: number
  timesCorrect: number
  createdAt: Timestamp | null
  updatedAt: Timestamp | null
  reviewedAt: Timestamp | null
}

/* ── Room / players / teams ──────────────────────────────────────────── */

export type RoomStatus = 'lobby' | 'playing' | 'question' | 'results' | 'ended'

/** Ambiente musical elegido por el anfitrión (sincronizado a la pantalla TV). */
export type MusicMode = 'festivo' | 'reverente' | 'silencio'

export type Room = {
  hostId: string
  status: RoomStatus
  currentQuestion: number
  currentRoundType: RoundType
  topic: string
  level: QuestLevel
  /** Rounds drawn from the approved bank when the room is created. */
  rounds: GameRound[]
  /** Bank ids of the drawn rounds (auditable reference). */
  selectedQuestionIds: string[]
  createdAt: Timestamp | null
  teamMode: boolean
  /** Música de fondo para las pantallas grandes. */
  musicMode: MusicMode
  /** Server-side timer anchor: clients derive remaining time from this. */
  questionStartedAt: Timestamp | null
}

export type Player = {
  uid: string
  name: string
  avatar: string
  score: number
  teamId: string | null
  isLeader: boolean
  answeredCurrentQuestion: boolean
  /** Raw answer: option letter, free text, 'true'/'false' or ordered ids. */
  currentAnswer: string | null
  /** Seconds elapsed (vs. questionStartedAt) when the answer was sent. */
  answerElapsed: number | null
  streak: number
  /** Highest streak reached during the game (for badge checks). */
  maxStreak: number
  /** Per-round result written by the host on reveal. */
  results: Record<string, { correct: boolean; points: number }>
}

export type Team = {
  id: string
  name: string
  leaderId: string
  memberIds: string[]
  score: number
  /** Realtime vote tracking: playerId → selected option/answer */
  votes: Record<string, string>
  confirmedAnswer: string | null
}

/* ── History & badges ────────────────────────────────────────────────── */

export type GameHistoryEntry = {
  roomId: string
  date: Timestamp | null
  topic: string
  level: QuestLevel
  score: number
  totalQuestions: number
  correctAnswers: number
  /** true when correctAnswers / totalQuestions > 0.6 */
  passed: boolean
  missedQuestions: Question[]
}

export type BadgeId =
  | 'racha_sagrada'
  | 'escriba'
  | 'velocista'
  | 'defensor'
  | 'explorador'
  | 'campeon'
  | 'estudioso'
  | 'llama_viva'

export type EarnedBadge = {
  badgeId: BadgeId
  earnedAt: Timestamp | null
}

export type TopicDef = {
  id: string
  label: string
  description: string
  /** Links to a Seeker Gospel study module when one exists. */
  studyModuleId: string | null
}

/* ── Tipos del panel de contenido (otra sesión) ─────────────────────── */

export type QuestionLevel = 1 | 2 | 3 | 4
export type QuestionStatus = 'draft' | 'approved' | 'rejected'
export type ImageCategory = 'personaje' | 'escena' | 'lugar' | 'simbolo'

export interface SQQuestion {
  id: string
  language: string
  level: QuestionLevel
  topic: string
  category: string
  roundType: RoundType
  content: Record<string, unknown>
  status: QuestionStatus
  source: 'manual' | 'ai'
  timesPlayed: number
  timesCorrect: number
  createdAt: Date
  updatedAt: Date
  reviewedAt?: Date
}

// ─── Audio ───────────────────────────────────────────────────────────────────

export type AudioStage =
  | 'opening'       // Tema de apertura del show
  | 'lobby'         // Sala de espera / loop
  | 'question'      // Tensión del temporizador
  | 'correct'       // Acierto
  | 'wrong'         // Fallo / error
  | 'player_join'   // Jugador entra
  | 'podium'        // Fanfarria del podio (festivo)
  | 'reverent'      // Ambiente reverente
  | 'study'         // Reflexión / estudio

export const AUDIO_STAGE_META: Record<AudioStage, { label: string; description: string; icon: string }> = {
  opening:     { label: 'Apertura del show',        description: 'Suena al iniciar el juego en la pantalla grande', icon: '🎬' },
  lobby:       { label: 'Sala de espera',            description: 'Loop mientras los jugadores se unen a la sala',   icon: '🎭' },
  question:    { label: 'Tensión del temporizador',  description: 'Suena durante el tiempo de respuesta',            icon: '⏱️' },
  correct:     { label: 'Respuesta correcta',        description: 'Tono corto al acertar',                           icon: '✅' },
  wrong:       { label: 'Respuesta incorrecta',      description: 'Tono corto al fallar',                            icon: '❌' },
  player_join: { label: 'Jugador entra',             description: 'Pop/chime cuando un nuevo jugador se une',        icon: '🙋' },
  podium:      { label: 'Fanfarria del podio',       description: 'Celebración festiva al mostrar el podio final',   icon: '🏆' },
  reverent:    { label: 'Ambiente reverente',        description: 'Fondo suave para modos de domingo/clase',         icon: '🕊️' },
  study:       { label: 'Reflexión / Estudio',       description: 'Música tranquila para el modo de estudio',        icon: '📖' },
}

export const AUDIO_STAGE_ORDER: AudioStage[] = [
  'opening', 'lobby', 'question', 'correct', 'wrong', 'player_join', 'podium', 'reverent', 'study',
]

export interface AudioTrack {
  id: string
  name: string
  url: string
  storagePath: string
  durationSec?: number
  uploadedAt: string // ISO string for Firestore
}

export interface StagePlaylist {
  stage: AudioStage
  tracks: AudioTrack[]
  updatedAt: string
}

