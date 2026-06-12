/**
 * Tipos del motor multi-ronda de la otra sesión (salas con cuenta regresiva).
 * Aislados aquí porque sus nombres (RoomStatus, GameRoom…) chocan con los del
 * motor en vivo definido en ./index.ts.
 */
import type { QuestionLevel } from './index'

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
