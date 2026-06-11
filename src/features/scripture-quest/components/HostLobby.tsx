import { getTopicById } from '../data/topics'
import { ROUND_TYPE_LABELS } from '../data/badges'
import type { Player, Room, Team } from '../types'
import { QRJoinCode } from './QRJoinCode'
import { SQAvatar } from './SQIcon'

type Props = {
  roomId: string
  room: Room
  players: Player[]
  teams: Team[]
  reshuffling: boolean
  onReshuffleRounds: () => void
  onStartGame: () => void
}

/** Host lobby: QR + código, jugadores conectados y resumen de rondas del banco. */
export function HostLobby({
  roomId,
  room,
  players,
  teams,
  reshuffling,
  onReshuffleRounds,
  onStartGame,
}: Props) {
  const topic = getTopicById(room.topic)
  const canStart = room.rounds.length > 0 && players.length > 0

  const typeCounts = room.rounds.reduce<Record<string, number>>((acc, r) => {
    acc[r.roundType] = (acc[r.roundType] ?? 0) + 1
    return acc
  }, {})

  return (
    <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
      <div className="flex flex-col items-center gap-4 sq-rise">
        <QRJoinCode roomId={roomId} />
        <div className="rounded-xl bg-navy-light/50 px-4 py-3 text-center">
          <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">
            {topic?.label ?? room.topic}
          </p>
          <p className="font-ui text-sm text-warm-white/80">
            Nivel {room.level} · {room.teamMode ? 'Por equipos' : 'Individual'}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="sq-rise sq-rise-1">
          <h2 className="font-display text-2xl font-bold text-warm-white">
            Jugadores conectados ({players.length})
          </h2>
          {players.length === 0 ? (
            <p className="mt-2 font-ui text-sm text-warm-white/60 sq-pulse">
              Esperando jugadores… comparte el código o el QR.
            </p>
          ) : (
            <ul className="mt-3 flex flex-wrap gap-2">
              {players.map((p) => (
                <li
                  key={p.uid}
                  className="sq-pop flex items-center gap-2 rounded-full bg-navy-light/60 py-1.5 pl-1.5 pr-4 font-ui text-sm text-warm-white"
                >
                  <SQAvatar id={p.avatar} size={30} />
                  {p.name}
                  {p.isLeader && <span title="Líder de equipo">⭐</span>}
                </li>
              ))}
            </ul>
          )}
        </div>

        {room.teamMode && teams.length > 0 && (
          <div className="sq-rise sq-rise-2">
            <h3 className="font-display text-xl font-bold text-warm-white">Equipos</h3>
            <ul className="mt-2 space-y-1.5">
              {teams.map((t) => (
                <li
                  key={t.id}
                  className="rounded-xl bg-navy-light/50 px-4 py-2 font-ui text-sm text-warm-white"
                >
                  <span className="font-semibold text-sg-gold-light">{t.name}</span> ·{' '}
                  {t.memberIds.length} integrante{t.memberIds.length === 1 ? '' : 's'}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="sq-rise sq-rise-3 space-y-3 rounded-2xl border border-navy-light bg-navy-light/30 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-ui font-semibold text-warm-white">
                {room.rounds.length} rondas listas (banco aprobado)
              </p>
              <p className="font-ui text-xs text-warm-white/60">
                {Object.entries(typeCounts)
                  .map(([type, count]) => `${ROUND_TYPE_LABELS[type] ?? type} ×${count}`)
                  .join(' · ')}
              </p>
            </div>
            <button
              type="button"
              disabled={reshuffling}
              onClick={onReshuffleRounds}
              className="shrink-0 rounded-xl border border-sg-gold px-4 py-2.5 font-ui text-sm font-bold uppercase tracking-wide text-sg-gold-bright transition hover:bg-sg-gold hover:text-navy-deep disabled:opacity-40"
            >
              {reshuffling ? 'Sorteando…' : 'Sortear otras rondas'}
            </button>
          </div>
          <p className="font-ui text-xs text-warm-white/50">
            Las rondas provienen del banco de preguntas aprobadas — la partida no consume IA.
          </p>
        </div>

        <button
          type="button"
          disabled={!canStart}
          onClick={onStartGame}
          className="w-full rounded-xl bg-sg-gold py-4 font-ui text-lg font-bold uppercase tracking-wide text-navy-deep transition hover:bg-sg-gold-light disabled:opacity-40"
        >
          Comenzar partida
        </button>
        {!canStart && (
          <p className="text-center font-ui text-xs text-warm-white/50">
            Necesitas al menos un jugador conectado para comenzar.
          </p>
        )}
      </div>
    </div>
  )
}
