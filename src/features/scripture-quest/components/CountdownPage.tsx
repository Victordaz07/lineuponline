/**
 * Route wrapper for the countdown screen.
 *
 * Multiplayer:  /host/:roomId/countdown  (host view)
 *               /play/:roomId/countdown  (player view)
 * Solo:         /games/scripture-quest/practice/countdown
 */
import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { CountdownScreen } from './CountdownScreen'
import { SQWelcomeModal, useSQWelcome } from './SQWelcomeModal'
import {
  subscribeRoom,
  pauseCountdown,
  resumeCountdown,
  startNow,
  backToLobby,
} from '../services/sqRooms.service'
import type { GameRoom, SQPlayer, GameConfig, CountdownState } from '../types/multiRound'

// ─── Solo mode ────────────────────────────────────────────────────────────────

const SOLO_CONFIG: GameConfig = {
  totalRounds: 10,
  withTeams: false,
  levels: [1, 2],
  topics: [],
  countdownDuration: 5,
}

function SoloCountdown() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { showWelcome, closeWelcome } = useSQWelcome()

  const [endsAt, setEndsAt] = useState<string | null>(null)
  const [started, setStarted] = useState(false)
  const [pausedSecsLeft, setPausedSecsLeft] = useState<number | null>(null)

  const countdown: CountdownState = { endsAt, pausedSecsLeft }

  const soloDuration = SOLO_CONFIG.countdownDuration

  const soloPlayer: SQPlayer = {
    uid: user?.uid ?? 'solo',
    displayName: user?.displayName ?? 'Jugador',
    avatarIndex: 0,
    score: 0,
    streak: 0,
    joinedAt: new Date().toISOString(),
    isConnected: true,
  }

  // Auto-start on mount (diferido: setState fuera del cuerpo del efecto)
  useEffect(() => {
    if (started) return
    const t = setTimeout(() => {
      setStarted(true)
      setEndsAt(new Date(Date.now() + soloDuration * 1000).toISOString())
    }, 0)
    return () => clearTimeout(t)
  }, [started, soloDuration])

  function handleDone() {
    navigate('/games/scripture-quest/practice/play')
  }

  return (
    <>
      {showWelcome && <SQWelcomeModal onClose={closeWelcome} />}
      <div className="fixed inset-0 z-50">
        <CountdownScreen
          countdown={countdown}
          config={SOLO_CONFIG}
          players={[soloPlayer]}
          isHost={true}
          onPause={(secsLeft) => {
            setPausedSecsLeft(secsLeft)
            setEndsAt(null)
          }}
          onResume={(secsLeft) => {
            setPausedSecsLeft(null)
            setEndsAt(new Date(Date.now() + secsLeft * 1000).toISOString())
          }}
          onStartNow={handleDone}
          onCancel={() => navigate('/games/scripture-quest')}
          onDone={handleDone}
        />
      </div>
    </>
  )
}

// ─── Multiplayer mode ─────────────────────────────────────────────────────────

function MultiCountdown({ isHost }: { isHost: boolean }) {
  const { roomId } = useParams<{ roomId: string }>()
  const navigate = useNavigate()
  const { user } = useAuth()

  const [room, setRoom] = useState<GameRoom | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!roomId) return
    const unsub = subscribeRoom(roomId, (r) => {
      setRoom(r)
      setLoading(false)
      // Navigate when game actually starts
      if (r?.status === 'playing') {
        navigate(isHost ? `/host/${roomId}/play` : `/play/${roomId}`)
      }
    })
    return unsub
  }, [roomId, isHost, navigate])

  if (loading || !room) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy-deep">
        <LoadingSpinner />
      </div>
    )
  }

  const players = Object.values(room.players)

  return (
    <div className="fixed inset-0 z-50">
      <CountdownScreen
        countdown={room.countdown}
        config={room.config}
        players={players}
        isHost={isHost && user?.uid === room.hostId}
        onPause={(secsLeft) => pauseCountdown(room.id, secsLeft)}
        onResume={(secsLeft) => resumeCountdown(room.id, secsLeft)}
        onStartNow={() => startNow(room.id)}
        onCancel={() => {
          if (isHost) backToLobby(room.id)
          navigate(isHost ? `/host/${roomId}` : `/play/${roomId}`)
        }}
        onDone={() => startNow(room.id)}
      />
    </div>
  )
}

// ─── Route dispatcher ─────────────────────────────────────────────────────────

export default function CountdownPage() {
  const [searchParams] = useSearchParams()
  const { roomId } = useParams<{ roomId?: string }>()
  const mode = searchParams.get('mode') ?? (roomId ? 'multi' : 'solo')

  if (mode === 'solo' || !roomId) return <SoloCountdown />

  const isHost = window.location.pathname.startsWith('/host/')
  return <MultiCountdown isHost={isHost} />
}
