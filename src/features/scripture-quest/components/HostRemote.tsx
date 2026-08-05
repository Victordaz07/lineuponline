/**
 * Control remoto del anfitrión (modo "proyectar a otra pantalla"):
 * vista compacta para el teléfono con estado en vivo y botones de dirección.
 * La pantalla grande la muestra cualquier dispositivo en /tv/:roomId.
 */
import { ROUND_TYPE_LABELS } from '../data/badges'
import type { GameRound, Player, Room, Team } from '../types'
import { roundAnswerText, roundPromptText } from '../utils/scoreCalculator'
import { TIMER_BY_TYPE } from '../utils/scoreCalculator'
import { LiveLeaderboard } from './LiveLeaderboard'
import { SQAvatar } from './SQIcon'
import { TimerBar } from './TimerBar'

type Props = {
  room: Room
  round: GameRound | undefined
  players: Player[]
  teams: Team[]
  remaining: number
  nextIn: number | null
  onForceReveal: () => void
  onForceAdvance: () => void
}

export function HostRemote({
  room,
  round,
  players,
  teams,
  remaining,
  nextIn,
  onForceReveal,
  onForceAdvance,
}: Props) {
  const answered = players.filter((p) => p.answeredCurrentQuestion)
  const inQuestion = room.status === 'playing' || room.status === 'question'
  const nextRound = room.rounds[room.currentQuestion + 1]

  return (
    <div className="mx-auto max-w-sm space-y-4">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-sg-gold px-3 py-1 font-ui text-[10px] font-bold uppercase tracking-wider text-ink">
          🎛️ Control remoto
        </span>
        <span className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">
          Ronda {room.currentQuestion + 1}/{room.rounds.length}
        </span>
      </div>

      {round && (
        <div className="sq-card p-4">
          <p className="font-ui text-[10px] uppercase tracking-widest text-sg-gold-light">
            {ROUND_TYPE_LABELS[round.roundType]} · Nivel {round.level}
          </p>
          <p className="mt-1 font-display text-lg font-bold leading-snug text-warm-white">
            {roundPromptText(round)}
          </p>
          {/* Solo el anfitrión ve la respuesta para poder moderar */}
          <p className="mt-2 font-ui text-xs text-emerald-300">
            ✓ Respuesta: {roundAnswerText(round)}
          </p>
        </div>
      )}

      {inQuestion && (
        <>
          {round && <TimerBar remaining={remaining} duration={TIMER_BY_TYPE[round.roundType]} muteTick />}
          <div className="sq-card flex items-center justify-between px-4 py-3">
            <span className="font-ui text-sm text-warm-white">
              Respuestas: {answered.length}/{players.length}
            </span>
            <span className="flex -space-x-2">
              {answered.slice(0, 6).map((p) => (
                <SQAvatar key={p.uid} id={p.avatar} size={26} className="sq-pop" />
              ))}
            </span>
          </div>
          <button
            type="button"
            onClick={onForceReveal}
            className="w-full rounded-xl border border-sg-gold py-3 font-ui text-sm font-bold uppercase tracking-wide text-sg-gold-bright transition hover:bg-sg-gold hover:text-ink"
          >
            Cerrar ronda y revelar ahora
          </button>
        </>
      )}

      {room.status === 'results' && (
        <>
          <div className="sq-card p-4 text-center">
            <p className="font-ui text-sm text-warm-white">
              Mostrando resultados en la pantalla grande
            </p>
            {typeof nextIn === 'number' && nextIn > 0 && (
              <p className="mt-1 font-ui text-xs text-warm-white/60">
                {nextRound
                  ? `Siguiente (${ROUND_TYPE_LABELS[nextRound.roundType]}) en ${nextIn}…`
                  : `Cerrando partida en ${nextIn}…`}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onForceAdvance}
            className="w-full rounded-xl bg-sg-gold py-3 font-ui text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-sg-gold-light"
          >
            {nextRound ? 'Siguiente ronda ahora' : 'Terminar partida ahora'}
          </button>
        </>
      )}

      <LiveLeaderboard
        players={players}
        teams={teams}
        teamMode={room.teamMode}
        limit={5}
      />
    </div>
  )
}
