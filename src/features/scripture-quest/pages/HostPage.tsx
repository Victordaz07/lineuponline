import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { HostLobby } from '../components/HostLobby'
import { QuestionDisplay } from '../components/QuestionDisplay'
import { ResultsScreen } from '../components/ResultsScreen'
import { QuestAuthGate, QuestShell } from '../components/QuestShell'
import { getTopicById } from '../data/topics'
import { useGameTimer } from '../hooks/useGameTimer'
import { usePlayers } from '../hooks/usePlayers'
import { useRoom } from '../hooks/useRoom'
import {
  advanceGame,
  revealResults,
  setRoomQuestions,
  startGame,
} from '../services/roomService'
import { generateQuestions } from '../utils/generateQuestions'

const RESULTS_SECONDS = 5

/** Host view: lobby → live question (vote bars) → reveal → leaderboard loop. */
export default function HostPage() {
  const { roomId } = useParams<{ roomId: string }>()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { room, loading, error } = useRoom(roomId)
  const { players, teams } = usePlayers(roomId)
  const timer = useGameTimer(room?.questionStartedAt)

  const [generating, setGenerating] = useState(false)
  const [generationError, setGenerationError] = useState<string | null>(null)
  const [nextIn, setNextIn] = useState<number | null>(null)

  const revealedIndexRef = useRef<number | null>(null)
  const advancedIndexRef = useRef<number | null>(null)

  const question = room?.questions[room.currentQuestion]

  const allAnswered =
    room?.teamMode === true
      ? teams.length > 0 && teams.every((t) => t.confirmedAnswer !== null)
      : players.length > 0 && players.every((p) => p.answeredCurrentQuestion)

  // Close the question when the (server-side) timer ends or everyone answered
  useEffect(() => {
    if (!roomId || !room || room.status !== 'question' || !question) return
    if (!timer.expired && !allAnswered) return
    if (revealedIndexRef.current === room.currentQuestion) return
    revealedIndexRef.current = room.currentQuestion
    void revealResults(roomId, room.currentQuestion, question, players, teams)
  }, [roomId, room, question, timer.expired, allAnswered, players, teams])

  // Latest players/teams for timer callbacks (avoids stale closures)
  const playersRef = useRef(players)
  const teamsRef = useRef(teams)
  const roomRefLatest = useRef(room)
  useEffect(() => {
    playersRef.current = players
    teamsRef.current = teams
    roomRefLatest.current = room
  })

  // Show the leaderboard for 5 seconds, then advance to the next question
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

  async function handleGenerateQuestions() {
    if (!roomId || !room) return
    const topic = getTopicById(room.topic)
    setGenerating(true)
    setGenerationError(null)
    try {
      const questions = await generateQuestions(
        topic?.label ?? room.topic,
        room.topic,
        room.level,
      )
      await setRoomQuestions(roomId, questions)
    } catch (err) {
      setGenerationError(
        err instanceof Error ? err.message : 'No se pudieron generar las preguntas.',
      )
    } finally {
      setGenerating(false)
    }
  }

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
        {!loading && room && user && room.hostId !== user.uid && (
          <p className="py-16 text-center font-ui text-warm-white/70">
            Solo el anfitrión puede ver esta pantalla.
          </p>
        )}

        {!loading && room && roomId && user && room.hostId === user.uid && (
          <>
            {room.status === 'lobby' && (
              <HostLobby
                roomId={roomId}
                room={room}
                players={players}
                teams={teams}
                generating={generating}
                generationError={generationError}
                onGenerateQuestions={() => void handleGenerateQuestions()}
                onStartGame={() => void startGame(roomId, players, teams)}
              />
            )}

            {(room.status === 'playing' || room.status === 'question') && question && (
              <QuestionDisplay
                question={question}
                questionNumber={room.currentQuestion + 1}
                totalQuestions={room.questions.length}
                players={players}
                teams={teams}
                teamMode={room.teamMode}
                remaining={timer.remaining}
                progress={timer.progress}
                reveal={false}
              />
            )}

            {room.status === 'results' && question && (
              <ResultsScreen
                question={question}
                players={players}
                teams={teams}
                teamMode={room.teamMode}
                nextIn={nextIn}
              />
            )}
          </>
        )}
      </QuestAuthGate>
    </QuestShell>
  )
}
