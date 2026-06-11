import type { GameRound, Player, Team } from '../types'
import { SQAvatar } from './SQIcon'

type Props = {
  round: GameRound
  team: Team
  players: Player[]
  isLeader: boolean
  remaining: number
  expired: boolean
  myVote: string | null
  onVote: (option: string) => void
  onConfirm: (option: string) => void
}

const CLASSIC_COLORS: Record<string, string> = {
  A: 'sq-ans-a',
  B: 'sq-ans-b',
  C: 'sq-ans-c',
  D: 'sq-ans-d',
}

/**
 * Modo equipos (clásica y verdadero/falso): cada integrante vota, el líder ve
 * los avatares llegar en tiempo real y confirma antes de que acabe el tiempo.
 * Si el tiempo termina sin confirmar, gana la opción más votada (auto-confirmación).
 */
export function TeamVotingPanel({
  round,
  team,
  players,
  isLeader,
  remaining,
  expired,
  myVote,
  onVote,
  onConfirm,
}: Props) {
  const confirmed = team.confirmedAnswer !== null
  const locked = confirmed || expired
  const playerByUid = new Map(players.map((p) => [p.uid, p]))
  const totalVotes = Object.keys(team.votes ?? {}).length

  const options: { key: string; label: string; color: string }[] =
    round.roundType === 'classic'
      ? (['A', 'B', 'C', 'D'] as const).map((k) => ({
          key: k,
          label: `${k}. ${round.content.options[k]}`,
          color: CLASSIC_COLORS[k],
        }))
      : round.roundType === 'true_false'
        ? [
            { key: 'true', label: '✔ Verdadero', color: 'sq-ans-d' },
            { key: 'false', label: '✖ Falso', color: 'sq-ans-a' },
          ]
        : []

  const votersFor = (key: string) =>
    Object.entries(team.votes ?? {})
      .filter(([, vote]) => vote === key)
      .map(([uid]) => playerByUid.get(uid))
      .filter((p): p is Player => Boolean(p))

  const prompt =
    round.roundType === 'classic'
      ? round.content.question
      : round.roundType === 'true_false'
        ? round.content.statement
        : ''

  return (
    <div className="space-y-4 sq-rise">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-sg-gold px-3 py-1 font-ui text-[10px] font-bold uppercase tracking-wider text-navy-deep">
            {isLeader ? '⭐ Líder' : 'Integrante'}
          </span>
          <span className="font-ui text-sm text-sg-gold-light">
            Equipo <span className="font-semibold">{team.name}</span>
          </span>
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full font-display text-xl font-bold ${
            remaining <= 5 ? 'bg-rose-600 text-white sq-pulse' : 'bg-sg-gold text-navy-deep'
          }`}
        >
          {remaining}
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold leading-snug text-warm-white">{prompt}</h2>

      <p className="font-ui text-xs text-warm-white/60">
        {totalVotes}/{team.memberIds.length} votos emitidos
      </p>

      <div className="grid grid-cols-1 gap-3">
        {options.map((option) => {
          const voters = votersFor(option.key)
          const isConfirmed = team.confirmedAnswer === option.key
          return (
            <div
              key={option.key}
              className={`rounded-xl border p-3 ${
                isConfirmed ? 'border-sg-gold bg-gold-dim sq-pop' : 'border-navy-light bg-navy-light/40'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  disabled={locked}
                  onClick={() => onVote(option.key)}
                  className={`flex flex-1 items-center gap-3 rounded-lg px-3 py-2.5 text-left font-ui text-sm font-medium text-white transition ${option.color} ${
                    locked ? 'opacity-50' : ''
                  } ${myVote === option.key ? 'ring-2 ring-warm-white' : ''}`}
                >
                  {option.label}
                </button>
                {isLeader && !locked && (
                  <button
                    type="button"
                    onClick={() => onConfirm(option.key)}
                    className="shrink-0 rounded-lg bg-sg-gold px-3 py-2.5 font-ui text-xs font-bold uppercase tracking-wide text-navy-deep hover:bg-sg-gold-light"
                  >
                    Confirmar
                  </button>
                )}
              </div>
              {voters.length > 0 && (
                <div className="mt-2 flex items-center gap-1">
                  <span className="flex -space-x-2">
                    {voters.slice(0, 6).map((v) => (
                      <SQAvatar key={v.uid} id={v.avatar} size={26} className="sq-pop" />
                    ))}
                  </span>
                  <span className="ml-1 font-ui text-xs text-warm-white/70">
                    {voters.map((v) => v.name).join(', ')}
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {confirmed && (
        <p className="text-center font-ui text-sm text-sg-gold-light">
          Respuesta confirmada por el líder.
        </p>
      )}
      {!confirmed && expired && (
        <p className="text-center font-ui text-sm text-amber-300">
          Tiempo agotado: se tomará la opción más votada del equipo.
        </p>
      )}
      {!confirmed && !expired && !isLeader && (
        <p className="text-center font-ui text-xs text-warm-white/60">
          Tu voto se muestra en tiempo real al líder, quien confirma la respuesta final.
        </p>
      )}
    </div>
  )
}
