import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { FixedStage } from '../components/FixedStage'
import { HostLobby } from '../components/HostLobby'
import { QuestionDisplay } from '../components/QuestionDisplay'
import { ResultsScreen } from '../components/ResultsScreen'
import { QuestAuthGate, QuestShell } from '../components/QuestShell'
import { useGameTimer } from '../hooks/useGameTimer'
import { usePlayers } from '../hooks/usePlayers'
import { useRoom } from '../hooks/useRoom'
import { fetchApprovedRounds, selectRounds } from '../services/bankService'
import {
  advanceGame,
  revealResults,
  setRoomRounds,
  startGame,
} from '../services/roomService'
import { TIMER_BY_TYPE } from '../utils/scoreCalculator'

const RESULTS_SECONDS = 5
const ROUNDS_PER_GAME = 10

/** Host view (TV/proyector): lobby → ronda en vivo → revelación → podio. */
export default function HostPage() {
  const { roomId } = useParams<{ roomId: string }>()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { room, loading, error } = useRoom(roomId)
  const { players, teams } = usePlayers(roomId)

  const round = room?.rounds[room.currentQuestion]
  const duration = round ? TIMER_BY_TYPE[round.roundType] : 20
  const timer = useGameTimer(room?.questionStartedAt, duration)

  const [reshuffling, setReshuffling] = useState(false)
  const [nextIn, setNextIn] = useState<number | null>(null)

  const revealedIndexRef = useRef<number | null>(null)
  const advancedIndexRef = useRef<number | null>(null)

  // Latest players/teams for timer callbacks (avoids stale closures)
  const playersRef = useRef(players)
  const teamsRef = useRef(teams)
  const roomRefLatest = useRef(room)
  useEffect(() => {
    playersRef.current = players
    teamsRef.current = teams
    roomRefLatest.current = room
  })

  const allAnswered = (() => {
    if (!room || !round || players.length === 0) return false
    const isVoteRound = round.roundType === 'classic' || round.roundType === 'true_false'
    if (room.teamMode && isVoteRound) {
      return teams.length > 0 && teams.every((t) => t.confirmedAnswer !== null)
    }
    if (round.roundType === 'mime') {
      // El actor (líder) no responde
      const guessers = players.filter((p) => !p.isLeader)
      return guessers.length > 0 && guessers.every((p) => p.answeredCurrentQuestion)
    }
    return players.every((p) => p.answeredCurrentQuestion)
  })()

  // Cierra la ronda al expirar el temporizador del servidor o al responder todos
  useEffect(() => {
    if (!roomId || !room || room.status !== 'question' || !round) return
    if (!timer.expired && !allAnswered) return
    if (revealedIndexRef.current === room.currentQuestion) return
    revealedIndexRef.current = room.currentQuestion
    void revealResults(roomId, room.currentQuestion, round, players, teams)
  }, [roomId, room, round, timer.expired, allAnswered, players, teams])

  // Tabla de posiciones 5 segundos y avanza a la siguiente ronda
  useEffect(() => {
    if (!roomId || !room || room.status !== 'results') return
    if (advancedIndexRef.current === room.currentQuestion) return
    const questionIndex = room.currentQuestion
    const startedAt = Date.now()
    const interval = setInterval(() => {
      const left = RESULTS_SECONDS - Math.floor((Date.now() - startedAt) / 1000)
      setNextIn(Math.max(0, left))
      if (left <= 0) {
        clearInterval(interval)
        const latestRoom = roomRefLatest.current
        if (advancedIndexRef.current !== questionIndex && latestRoom) {
          advancedIndexRef.current = questionIndex
          void advanceGame(roomId, latestRoom, playersRef.current, teamsRef.current)
        }
      }
    }, 250)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, room?.status, room?.currentQuestion])

  useEffect(() => {
    if (room?.status === 'ended' && roomId) {
      navigate(`/games/scripture-quest/results/${roomId}`)
    }
  }, [room?.status, roomId, navigate])

  async function handleReshuffle() {
    if (!roomId || !room) return
    setReshuffling(true)
    try {
      const pool = await fetchApprovedRounds()
      const rounds = selectRounds(pool, {
        topicId: room.topic,
        level: room.level,
        count: ROUNDS_PER_GAME,
        teamMode: room.teamMode,
      })
      await setRoomRounds(roomId, rounds)
    } finally {
      setReshuffling(false)
    }
  }

  const isHost = Boolean(room && user && room.hostId === user.uid)
  const nextRound = room ? room.rounds[room.currentQuestion + 1] : undefined

  return (
    <QuestShell>
      <QuestAuthGate>
        {loading && (
          <p className="py-16 text-center font-ui text-warm-white/60">Cargando sala…</p>
        )}
        {!loading && (error || !room) && (
          <p className="py-16 text-center font-ui text-warm-white/70">
            {error ?? 'Sala no encontrada.'}
          </p>
        )}
        {!loading && room && !isHost && (
          <p className="py-16 text-center font-ui text-warm-white/70">
            Solo el anfitrión puede ver esta pantalla.
          </p>
        )}

        {!loading && room && roomId && isHost && (
          <>
            {room.status === 'lobby' && (
              <HostLobby
                roomId={roomId}
                room={room}
                players={players}
                teams={teams}
                reshuffling={reshuffling}
                onReshuffleRounds={() => void handleReshuffle()}
                onStartGame={() => void startGame(roomId, players, teams)}
              />
            )}

            {(room.status === 'playing' || room.status === 'question') && round && (
              <FixedStage>
                <QuestionDisplay
                  round={round}
                  questionNumber={room.currentQuestion + 1}
                  totalQuestions={room.rounds.length}
                  players={players}
                  teams={teams}
                  teamMode={room.teamMode}
                  remaining={timer.remaining}
                  progress={timer.progress}
                />
              </FixedStage>
            )}

            {room.status === 'results' && round && (
              <FixedStage>
                <ResultsScreen
                  round={round}
                  players={players}
                  teams={teams}
                  teamMode={room.teamMode}
                  nextIn={nextIn}
                  nextRoundType={nextRound?.roundType ?? null}
                />
              </FixedStage>
            )}
          </>
        )}
      </QuestAuthGate>
    </QuestShell>
  )
}
