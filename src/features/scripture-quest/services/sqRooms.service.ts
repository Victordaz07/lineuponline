import {
  doc,
  setDoc,
  updateDoc,
  onSnapshot,
  type Unsubscribe,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import { nanoid } from '@/lib/nanoid'
import type { GameRoom, GameConfig, SQPlayer, RoomStatus } from '../types/multiRound'

const COL = 'scripturequest_rooms'

function roomRef(roomId: string) {
  return doc(getDb(), COL, roomId)
}

// ─── Subscribe ────────────────────────────────────────────────────────────────

export function subscribeRoom(
  roomId: string,
  cb: (room: GameRoom | null) => void,
): Unsubscribe {
  return onSnapshot(roomRef(roomId), (snap) => {
    cb(snap.exists() ? ({ id: snap.id, ...snap.data() } as GameRoom) : null)
  })
}

// ─── Create room ──────────────────────────────────────────────────────────────

export async function createRoom(
  hostId: string,
  hostName: string,
  config: Partial<GameConfig> = {},
): Promise<GameRoom> {
  const roomId = nanoid(20)
  const roomCode = Math.random().toString(36).slice(2, 6).toUpperCase()
  const now = new Date().toISOString()

  const fullConfig: GameConfig = {
    totalRounds: config.totalRounds ?? 10,
    withTeams: config.withTeams ?? false,
    levels: config.levels ?? [1, 2, 3],
    topics: config.topics ?? [],
    countdownDuration: config.countdownDuration ?? 5,
  }

  const room: GameRoom = {
    id: roomId,
    hostId,
    hostName,
    roomCode,
    status: 'lobby',
    countdown: { endsAt: null, pausedSecsLeft: null },
    players: {},
    teams: {},
    config: fullConfig,
    currentRound: 0,
    selectedQuestionIds: [],
    createdAt: now,
    updatedAt: now,
  }

  await setDoc(roomRef(roomId), room)
  return room
}

// ─── Join room ────────────────────────────────────────────────────────────────

export async function joinRoom(roomId: string, player: SQPlayer): Promise<void> {
  await updateDoc(roomRef(roomId), {
    [`players.${player.uid}`]: player,
    updatedAt: new Date().toISOString(),
  })
}

// ─── Countdown controls (host only) ──────────────────────────────────────────

/** Begin the countdown — sets status to 'countdown', computes endsAt */
export async function startCountdown(roomId: string, durationSecs: number): Promise<void> {
  const endsAt = new Date(Date.now() + durationSecs * 1000).toISOString()
  await updateDoc(roomRef(roomId), {
    status: 'countdown' as RoomStatus,
    'countdown.endsAt': endsAt,
    'countdown.pausedSecsLeft': null,
    updatedAt: new Date().toISOString(),
  })
}

/** Pause the countdown — saves remaining seconds */
export async function pauseCountdown(roomId: string, secsLeft: number): Promise<void> {
  await updateDoc(roomRef(roomId), {
    'countdown.endsAt': null,
    'countdown.pausedSecsLeft': Math.max(0, secsLeft),
    updatedAt: new Date().toISOString(),
  })
}

/** Resume from where it was paused */
export async function resumeCountdown(roomId: string, pausedSecsLeft: number): Promise<void> {
  const endsAt = new Date(Date.now() + pausedSecsLeft * 1000).toISOString()
  await updateDoc(roomRef(roomId), {
    'countdown.endsAt': endsAt,
    'countdown.pausedSecsLeft': null,
    updatedAt: new Date().toISOString(),
  })
}

/** Skip countdown and start immediately */
export async function startNow(roomId: string): Promise<void> {
  await updateDoc(roomRef(roomId), {
    status: 'playing' as RoomStatus,
    'countdown.endsAt': null,
    'countdown.pausedSecsLeft': null,
    currentRound: 1,
    updatedAt: new Date().toISOString(),
  })
}

/** Go back to lobby (host cancels countdown) */
export async function backToLobby(roomId: string): Promise<void> {
  await updateDoc(roomRef(roomId), {
    status: 'lobby' as RoomStatus,
    'countdown.endsAt': null,
    'countdown.pausedSecsLeft': null,
    updatedAt: new Date().toISOString(),
  })
}
