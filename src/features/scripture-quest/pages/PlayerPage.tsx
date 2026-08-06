import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useToastStore } from '@/stores/toastStore'
import { PlayerJoin } from '../components/PlayerJoin'
import { ResultsScreen } from '../components/ResultsScreen'
import { RoundPanel } from '../components/RoundPanels'
import { WaitingRoom } from '../components/WaitingRoom'
import { QuestAuthGate, QuestShell } from '../components/QuestShell'
import { useGameTimer } from '../hooks/useGameTimer'
import { usePlayers } from '../hooks/usePlayers'
import { useRoom } from '../hooks/useRoom'
import {
  confirmTeamAnswer,
  createTeam,
  joinRoom,
  joinTeam,
  submitAnswer,
  voteTeamAnswer,
} from '../services/roomService'
import { useGameStore } from '../store/gameStore'
import { TIMER_BY_TYPE } from '../utils/scoreCalculator'
import { sound } from '../utils/sound'

/** Vista del jugador (móvil): unirse → sala de espera → rondas → resultados. */
export default function PlayerPage() {
  const { roomId } = useParams<{ roomId: string }>()
  const navigate = useNavigate()
  const { user } = useAuth()
  const addToast = useToastStore((s) => s.addToast)
  const setActiveRoom = useGameStore((s) => s.setActiveRoom)

  const { room, loading, error } = useRoom(roomId)
  const { players, teams } = usePlayers(roomId)

  const round = room?.rounds[room.currentQuestion]
  const duration = round ? TIMER_BY_TYPE[round.roundType] : 20
  const timer = useGameTimer(room?.questionStartedAt, duration)

  const [joining, setJoining] = useState(false)
  const [teamName, setTeamName] = useState('')

  const me = players.find((p) => p.uid === user?.uid)
  const myTeam = me?.teamId ? teams.find((t) => t.id === me.teamId) : undefined

  useEffect(() => {
    sound.setProfile('player')
  }, [])

  useEffect(() => {
    if (room?.status === 'ended' && roomId) {
      navigate(`/games/scripture-quest/results/${roomId}`)
    }
  }, [room?.status, roomId, navigate])

  async function handleJoin(name: string, avatar: string) {
    if (!roomId || !user) return
    setJoining(true)
    try {
      await joinRoom(roomId, { uid: user.uid, name, avatar })
      setActiveRoom(roomId, 'player')
    } catch {
      addToast('No se pudo entrar a la sala.', 'error')
    } finally {
      setJoining(false)
    }
  }

  async function handleCreateTeam() {
    if (!roomId || !user || teamName.trim().length < 2) return
    try {
      await createTeam(roomId, teamName.trim(), user.uid)
      setTeamName('')
    } catch {
      addToast('No se pudo crear el equipo.', 'error')
    }
  }

  const elapsed = duration - timer.remaining

  const inLobby = room?.status === 'lobby'
  const inQuestion = room?.status === 'playing' || room?.status === 'question'

  return (
    <QuestShell>
      <QuestAuthGate>
        {loading && (
          <p className="py-16 text-center font-ui text-warm-white/60">Cargando sala…</p>
        )}
        {!loading && (error || !room) && (
          <p className="py-16 text-center font-ui text-warm-white/70">
            {error ?? 'Sala no encontrada. Verifica el código.'}
          </p>
        )}

        {!loading && room && roomId && user && (
          <>
            {!me && room.status === 'lobby' && (
              <PlayerJoin joining={joining} onJoin={(n, a) => void handleJoin(n, a)} />
            )}
            {!me && room.status !== 'lobby' && (
              <p className="py-16 text-center font-ui text-warm-white/70">
                La partida ya comenzó y no estás inscrito en esta sala.
              </p>
            )}

            {me && inLobby && (
              <div className="space-y-6">
                <WaitingRoom me={me} myTeam={myTeam} />

                {room.teamMode && (
                  <div className="mx-auto max-w-sm space-y-3 text-left">
                    <h3 className="font-display text-xl font-bold text-sg-gold-light">Equipos</h3>
                    {teams.map((t) => (
                      <div
                        key={t.id}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                          me.teamId === t.id
                            ? 'border-sg-gold bg-gold-dim'
                            : 'border-navy-light bg-navy-light/40'
                        }`}
                      >
                        <span className="font-ui text-sm text-warm-white">
                          {t.name} · {t.memberIds.length}
                          {t.leaderId === me.uid && ' · Eres líder ⭐'}
                        </span>
                        {me.teamId !== t.id && (
                          <button
                            type="button"
                            onClick={() => void joinTeam(roomId, t, me.uid)}
                            className="rounded-lg bg-sg-gold px-3 py-1.5 font-ui text-xs font-bold uppercase text-ink hover:bg-sg-gold-light"
                          >
                            Unirme
                          </button>
                        )}
                      </div>
                    ))}
                    {!me.teamId && (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={teamName}
                          maxLength={24}
                          onChange={(e) => setTeamName(e.target.value)}
                          placeholder="Nombre del equipo"
                          className="flex-1 rounded-xl border border-navy-light bg-navy-light/50 px-4 py-2.5 font-ui text-sm text-warm-white placeholder:text-warm-white/40 focus:border-sg-gold focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => void handleCreateTeam()}
                          className="rounded-xl bg-sg-gold px-4 py-2.5 font-ui text-xs font-bold uppercase text-ink hover:bg-sg-gold-light"
                        >
                          Crear
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {me && inQuestion && round && (
              <RoundPanel
                round={round}
                me={me}
                myTeam={myTeam}
                players={players}
                remaining={timer.remaining}
                expired={timer.expired}
                onAnswer={(answer) => {
                  sound.select()
                  void submitAnswer(roomId, me.uid, answer, elapsed).catch(() =>
                    addToast('No se pudo enviar tu respuesta.', 'error'),
                  )
                }}
                onVote={(answer) => {
                  sound.select()
                  if (myTeam) void voteTeamAnswer(roomId, myTeam.id, me.uid, answer)
                }}
                onConfirm={(answer) => {
                  sound.select()
                  if (myTeam) void confirmTeamAnswer(roomId, myTeam.id, me.uid, answer, elapsed)
                }}
              />
            )}

            {me && room.status === 'results' && round && (
              <ResultsScreen
                round={round}
                players={players}
                teams={teams}
                teamMode={room.teamMode}
                myResult={me.results?.[String(room.currentQuestion)] ?? { correct: false, points: 0 }}
                highlightUid={me.uid}
              />
            )}
          </>
        )}
      </QuestAuthGate>
    </QuestShell>
  )
}
