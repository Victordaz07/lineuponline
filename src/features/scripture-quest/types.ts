export type RoundType =
  | 'classic'
  | 'fill_blank'
  | 'true_false'
  | 'image_guess'
  | 'mime'
  | 'who_am_i'
  | 'order_events'

export type QuestionLevel = 1 | 2 | 3 | 4
export type QuestionStatus = 'draft' | 'approved' | 'rejected'
export type ImageCategory = 'personaje' | 'escena' | 'lugar' | 'simbolo'

export interface ImageGuessContent {
  imageUrl: string
  imagePrompt: string
  answer: string
  acceptedVariants: string[]
  category: ImageCategory
  hint: string
}

export interface MimeContent {
  imageUrl: string
  answer: string
  acceptedVariants: string[]
  category: ImageCategory
  actorInstructions: string
}

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

// ─── Game Room ────────────────────────────────────────────────────────────────

export type RoomStatus =
  | 'lobby'           // jugadores uniéndose
  | 'countdown'       // cuenta regresiva activa
  | 'playing'         // partida en curso
  | 'between_rounds'  // resultado de ronda, antes de la siguiente
  | 'finished'        // partida terminada

export interface SQPlayer {
  uid: string
  displayName: string
  avatarIndex: number   // 0-7
  teamId?: string
  score: number
  streak: number
  joinedAt: string      // ISO
  isConnected: boolean
}

export interface SQTeam {
  id: string
  name: string
  color: string
  memberUids: string[]
  score: number
}

export interface GameConfig {
  totalRounds: number        // default 10
  withTeams: boolean
  levels: QuestionLevel[]    // which levels to include
  topics: string[]           // [] = all topics
  countdownDuration: number  // seconds before game starts, default 5
}

export interface CountdownState {
  /** ISO timestamp marking when 0 will be reached (or was about to be reached). null if not started. */
  endsAt: string | null
  /** Seconds remaining when host paused. null = countdown is running. */
  pausedSecsLeft: number | null
}

export interface GameRoom {
  id: string
  hostId: string
  hostName: string
  roomCode: string           // 4-char uppercase code for joining
  status: RoomStatus
  countdown: CountdownState
  players: Record<string, SQPlayer>
  teams: Record<string, SQTeam>
  config: GameConfig
  currentRound: number
  selectedQuestionIds: string[]
  createdAt: string
  updatedAt: string
}
