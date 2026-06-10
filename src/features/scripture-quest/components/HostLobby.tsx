import { getTopicById } from '../data/topics'
import type { Player, Room, Team } from '../types'
import { QRJoinCode } from './QRJoinCode'

type Props = {
  roomId: string
  room: Room
  players: Player[]
  teams: Team[]
  generating: boolean
  generationError: string | null
  onGenerateQuestions: () => void
  onStartGame: () => void
}

/** Host lobby: QR + code, joined players, question generation and game start. */
export function HostLobby({
  roomId,
  room,
  players,
  teams,
  generating,
  generationError,
  onGenerateQuestions,
  onStartGame,
}: Props) {
  const topic = getTopicById(room.topic)
  const hasQuestions = room.questions.length > 0
  const canStart = hasQuestions && players.length > 0

  return (
    <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
      <div className="flex flex-col items-center gap-4">
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
        <div>
          <h2 className="font-display text-2xl font-bold text-warm-white">
            Jugadores conectados ({players.length})
          </h2>
          {players.length === 0 ? (
            <p className="mt-2 font-ui text-sm text-warm-white/60">
              Esperando jugadores… comparte el código o el QR.
            </p>
          ) : (
            <ul className="mt-3 flex flex-wrap gap-2">
              {players.map((p) => (
                <li
                  key={p.uid}
                  className="flex items-center gap-2 rounded-full bg-navy-light/60 px-4 py-2 font-ui text-sm text-warm-white"
                >
                  <span className="text-lg">{p.avatar}</span>
                  {p.name}
                  {p.isLeader && <span title="Líder de equipo">⭐</span>}
                </li>
              ))}
            </ul>
          )}
        </div>

        {room.teamMode && teams.length > 0 && (
          <div>
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

        <div className="space-y-3 rounded-2xl border border-navy-light bg-navy-light/30 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-ui font-semibold text-warm-white">Preguntas</p>
              <p className="font-ui text-sm text-warm-white/60">
                {hasQuestions
                  ? `${room.questions.length} preguntas listas ✅`
                  : 'Genera las preguntas con IA antes de comenzar.'}
              </p>
            </div>
            <button
              type="button"
              disabled={generating}
              onClick={onGenerateQuestions}
              className="shrink-0 rounded-xl border border-sg-gold px-4 py-2.5 font-ui text-sm font-bold uppercase tracking-wide text-sg-gold-bright transition hover:bg-sg-gold hover:text-navy-deep disabled:opacity-40"
            >
              {generating
                ? 'Generando…'
                : hasQuestions
                  ? 'Regenerar preguntas'
                  : 'Generar Preguntas'}
            </button>
          </div>
          {generationError && (
            <p className="font-ui text-sm text-rose-300">{generationError}</p>
          )}
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
            Necesitas preguntas generadas y al menos un jugador para comenzar.
          </p>
        )}
      </div>
    </div>
  )
}
