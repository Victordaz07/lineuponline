/**
 * Modo TV (/games/scripture-quest/tv/:roomId): pantalla grande de solo
 * lectura. Cualquier dispositivo con sesión puede proyectarla; quien dirige
 * la partida es el dispositivo del anfitrión (modo escenario o control).
 */
import { useParams } from 'react-router-dom'
import { EndGamePodium } from '../components/EndGamePodium'
import { FixedStage } from '../components/FixedStage'
import { QRJoinCode } from '../components/QRJoinCode'
import { QuestionDisplay } from '../components/QuestionDisplay'
import { ResultsScreen } from '../components/ResultsScreen'
import { SQAvatar } from '../components/SQIcon'
import { QuestAuthGate, QuestShell } from '../components/QuestShell'
import { getTopicById } from '../data/topics'
import { useGameTimer } from '../hooks/useGameTimer'
import { usePlayers } from '../hooks/usePlayers'
import { useRoom } from '../hooks/useRoom'
import { TIMER_BY_TYPE } from '../utils/scoreCalculator'
import { sound } from '../utils/sound'
import { useEffect } from 'react'

export default function TvPage() {
  const { roomId } = useParams<{ roomId: string }>()
  const { room, loading, error } = useRoom(roomId)
  const { players, teams } = usePlayers(roomId)

  const round = room?.rounds[room.currentQuestion]
  const duration = round ? TIMER_BY_TYPE[round.roundType] : 20
  const timer = useGameTimer(room?.questionStartedAt, duration)
  const topic = room ? getTopicById(room.topic) : undefined

  // La TV reproduce la música que el anfitrión eligió para la sala
  useEffect(() => {
    if (room && room.status !== 'ended') {
      sound.playMusic(room.musicMode ?? 'festivo')
    } else {
      sound.stopMusic()
    }
    return () => sound.stopMusic()
  }, [room?.musicMode, room?.status, room])
  const nextRound = room ? room.rounds[room.currentQuestion + 1] : undefined

  return (
    <QuestShell>
      <QuestAuthGate>
        {loading && (
          <p className="py-16 text-center font-ui text-warm-white/60 sq-pulse">
            Conectando con la sala…
          </p>
        )}
        {!loading && (error || !room) && (
          <p className="py-16 text-center font-ui text-warm-white/70">
            {error ?? 'Sala no encontrada. Verifica el código.'}
          </p>
        )}

        {!loading && room && roomId && (
          <>
            {room.status === 'lobby' && (
              <FixedStage>
                <div className="flex h-full items-center justify-around gap-10">
                  <div className="sq-rise flex flex-col items-center gap-5">
                    <QRJoinCode roomId={roomId} />
                    <p className="font-ui text-sm uppercase tracking-widest text-sg-gold-light">
                      {topic?.label ?? room.topic} · Nivel {room.level}
                    </p>
                  </div>
                  <div className="max-w-md">
                    <h2 className="font-display text-4xl font-bold text-warm-white">
                      Jugadores conectados ({players.length})
                    </h2>
                    {players.length === 0 ? (
                      <p className="mt-3 font-ui text-warm-white/60 sq-pulse">
                        Esperando jugadores… ¡escanea el código!
                      </p>
                    ) : (
                      <ul className="mt-4 flex flex-wrap gap-3">
                        {players.map((p) => (
                          <li
                            key={p.uid}
                            className="sq-pop flex items-center gap-2 rounded-full bg-navy-light/60 py-1.5 pl-1.5 pr-4 font-ui text-warm-white"
                          >
                            <SQAvatar id={p.avatar} size={34} />
                            {p.name}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-6 font-ui text-sm text-warm-white/50 sq-pulse">
                      El anfitrión comenzará la partida en breve…
                    </p>
                  </div>
                </div>
              </FixedStage>
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
                  nextRoundType={nextRound?.roundType ?? null}
                />
              </FixedStage>
            )}

            {room.status === 'ended' && (
              <FixedStage>
                <EndGamePodium players={players} teams={teams} teamMode={room.teamMode} />
              </FixedStage>
            )}
          </>
        )}
      </QuestAuthGate>
    </QuestShell>
  )
}
