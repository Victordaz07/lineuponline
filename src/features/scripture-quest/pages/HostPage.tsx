import { useEffect, useRef, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useToastStore } from '@/stores/toastStore'
import { FixedStage } from '../components/FixedStage'
import { HostLobby } from '../components/HostLobby'
import { HostRemote } from '../components/HostRemote'
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
import { useGameStore } from '../store/gameStore'
import { setRoomMusic } from '../services/roomService'
import { loadAudioLibrary } from '../services/audioLibrary'
import { TIMER_BY_TYPE } from '../utils/scoreCalculator'
import { sound } from '../utils/sound'

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

  const addToast = useToastStore((s) => s.addToast)
  const displayMode = useGameStore((s) => s.hostDisplayMode)
  const setDisplayMode = useGameStore((s) => s.setHostDisplayMode)

  const [reshuffling, setReshuffling] = useState(false)
  const [nextIn, setNextIn] = useState<number | null>(null)

  const revealedIndexRef = useRef<number | null>(null)
  const advancedIndexRef = useRef<number | null>(null)
  const isHost = Boolean(room && user && room.hostId === user.uid)

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

  // Música de fondo: solo cuando este dispositivo es la pantalla grande.
  // Usa las pistas subidas (Suno) por etapa, con respaldo sintetizado.
  useEffect(() => {
    void loadAudioLibrary()
  }, [])

  useEffect(() => {
    sound.setProfile(isHost && displayMode === 'stage' ? 'stage' : 'player')
  }, [isHost, displayMode])

  useEffect(() => {
    if (isHost && displayMode === 'stage' && room && room.status !== 'ended') {
      sound.playForRoom(room.status, room.musicMode ?? 'festivo')
    } else {
      sound.stopMusic()
    }
    return () => sound.stopMusic()
  }, [isHost, displayMode, room?.musicMode, room?.status, room])

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

  // Dirección manual desde el control remoto
  function handleForceReveal() {
    if (!roomId || !room || room.status !== 'question' || !round) return
    if (revealedIndexRef.current === room.currentQuestion) return
    revealedIndexRef.current = room.currentQuestion
    void revealResults(roomId, room.currentQuestion, round, players, teams)
  }

  function handleForceAdvance() {
    if (!roomId || !room || room.status !== 'results') return
    if (advancedIndexRef.current === room.currentQuestion) return
    advancedIndexRef.current = room.currentQuestion
    void advanceGame(roomId, room, players, teams)
  }

  const nextRound = room ? room.rounds[room.currentQuestion + 1] : undefined
  const tvUrl = roomId
    ? `${window.location.origin}/games/scripture-quest/tv/${roomId}`
    : ''

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
              <div className="space-y-6">
                {/* ¿Dónde se mostrará el juego? */}
                <div className="sq-card p-4">
                  <p className="mb-3 font-ui text-sm font-medium text-sg-gold-light">
                    ¿Dónde se mostrará la pantalla del juego?
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setDisplayMode('stage')}
                      className={`rounded-xl border p-3 text-left transition ${
                        displayMode === 'stage'
                          ? 'border-sg-gold bg-gold-dim'
                          : 'border-navy-light bg-navy-light/40 hover:border-sg-gold/50'
                      }`}
                    >
                      <p className="font-ui text-sm font-bold text-warm-white">
                        📺 En esta pantalla
                      </p>
                      <p className="font-ui text-xs text-warm-white/60">
                        Este dispositivo proyecta el juego (HDMI, espejo o pantalla propia).
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDisplayMode('remote')}
                      className={`rounded-xl border p-3 text-left transition ${
                        displayMode === 'remote'
                          ? 'border-sg-gold bg-gold-dim'
                          : 'border-navy-light bg-navy-light/40 hover:border-sg-gold/50'
                      }`}
                    >
                      <p className="font-ui text-sm font-bold text-warm-white">
                        📱 En otra pantalla
                      </p>
                      <p className="font-ui text-xs text-warm-white/60">
                        Este dispositivo será el control remoto; otra pantalla muestra el juego.
                      </p>
                    </button>
                  </div>

                  {displayMode === 'remote' && (
                    <div className="sq-rise mt-4 flex flex-wrap items-center gap-4 rounded-xl border border-sg-gold/40 bg-navy-light/40 p-4">
                      <span className="rounded-lg bg-white p-2">
                        <QRCodeSVG value={tvUrl} size={88} fgColor="#0D1B2A" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright">
                          Abre esto en la TV / proyector
                        </p>
                        <p className="break-all font-ui text-xs text-warm-white/80">{tvUrl}</p>
                        <button
                          type="button"
                          onClick={() => {
                            void navigator.clipboard
                              .writeText(tvUrl)
                              .then(() => addToast('Enlace de la TV copiado.', 'success'))
                              .catch(() => addToast(tvUrl, 'info'))
                          }}
                          className="mt-2 rounded-lg border border-sg-gold px-3 py-1.5 font-ui text-[11px] font-bold uppercase tracking-wide text-sg-gold-bright transition hover:bg-sg-gold hover:text-ink"
                        >
                          Copiar enlace
                        </button>
                        <p className="mt-1 font-ui text-[11px] text-warm-white/50">
                          Requiere iniciar sesión en ese dispositivo. Solo muestra; no controla.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <HostLobby
                  roomId={roomId}
                  room={room}
                  players={players}
                  teams={teams}
                  reshuffling={reshuffling}
                  onReshuffleRounds={() => void handleReshuffle()}
                  onStartGame={() => void startGame(roomId, players, teams)}
                  onSetMusic={(mode) => void setRoomMusic(roomId, mode)}
                />
              </div>
            )}

            {(room.status === 'playing' || room.status === 'question') &&
              round &&
              (displayMode === 'remote' ? (
                <HostRemote
                  room={room}
                  round={round}
                  players={players}
                  teams={teams}
                  remaining={timer.remaining}
                  nextIn={nextIn}
                  onForceReveal={handleForceReveal}
                  onForceAdvance={handleForceAdvance}
                />
              ) : (
                <FixedStage>
                  <QuestionDisplay
                    round={round}
                    questionNumber={room.currentQuestion + 1}
                    totalQuestions={room.rounds.length}
                    players={players}
                    teams={teams}
                    teamMode={room.teamMode}
                    remaining={timer.remaining}
                  />
                </FixedStage>
              ))}

            {room.status === 'results' &&
              round &&
              (displayMode === 'remote' ? (
                <HostRemote
                  room={room}
                  round={round}
                  players={players}
                  teams={teams}
                  remaining={timer.remaining}
                  nextIn={nextIn}
                  onForceReveal={handleForceReveal}
                  onForceAdvance={handleForceAdvance}
                />
              ) : (
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
              ))}
          </>
        )}
      </QuestAuthGate>
    </QuestShell>
  )
}
