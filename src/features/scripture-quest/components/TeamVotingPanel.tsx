import type { AnswerOption, Player, Question, Team } from '../types'

type Props = {
  question: Question
  team: Team
  players: Player[]
  isLeader: boolean
  remaining: number
  expired: boolean
  myVote: AnswerOption | null
  onVote: (option: AnswerOption) => void
  onConfirm: (option: AnswerOption) => void
}

const OPTIONS: AnswerOption[] = ['A', 'B', 'C', 'D']

const OPTION_COLORS: Record<AnswerOption, string> = {
  A: 'bg-rose-500',
  B: 'bg-sky-500',
  C: 'bg-amber-500',
  D: 'bg-emerald-500',
}

/**
 * Team mode: every member votes; the leader sees the votes arrive in realtime
 * and confirms the team answer before the timer runs out.
 */
export function TeamVotingPanel({
  question,
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
  const nameByUid = new Map(players.map((p) => [p.uid, `${p.avatar} ${p.name}`]))
  const votesByOption: Record<AnswerOption, string[]> = { A: [], B: [], C: [], D: [] }
  for (const [uid, option] of Object.entries(team.votes ?? {})) {
    votesByOption[option].push(nameByUid.get(uid) ?? '¿?')
  }
  const locked = confirmed || expired

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-ui text-sm text-sg-gold-light">
          Equipo <span className="font-semibold">{team.name}</span>
          {isLeader ? ' · Eres líder' : ''}
        </p>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full font-display text-xl font-bold ${
            remaining <= 5 ? 'bg-rose-600 text-white' : 'bg-sg-gold text-navy-deep'
          }`}
        >
          {remaining}
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold leading-snug text-warm-white">
        {question.question}
      </h2>

      <div className="grid grid-cols-1 gap-3">
        {OPTIONS.map((option) => {
          const voters = votesByOption[option]
          const isConfirmed = team.confirmedAnswer === option
          return (
            <div
              key={option}
              className={`rounded-xl border p-3 ${
                isConfirmed
                  ? 'border-sg-gold bg-gold-dim'
                  : 'border-navy-light bg-navy-light/40'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  disabled={locked}
                  onClick={() => onVote(option)}
                  className={`flex flex-1 items-center gap-3 rounded-lg px-3 py-2 text-left font-ui font-medium text-white transition ${OPTION_COLORS[option]} ${
                    locked ? 'opacity-50' : ''
                  } ${myVote === option ? 'ring-2 ring-warm-white' : ''}`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-black/25 font-display font-bold">
                    {option}
                  </span>
                  <span className="text-sm">{question.options[option]}</span>
                </button>
                {isLeader && !locked && (
                  <button
                    type="button"
                    onClick={() => onConfirm(option)}
                    className="shrink-0 rounded-lg bg-sg-gold px-3 py-2 font-ui text-xs font-bold uppercase tracking-wide text-navy-deep hover:bg-sg-gold-light"
                  >
                    Confirmar
                  </button>
                )}
              </div>
              {voters.length > 0 && (
                <p className="mt-2 font-ui text-xs text-warm-white/70">
                  Votos: {voters.join(', ')}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {confirmed && (
        <p className="text-center font-ui text-sm text-sg-gold-light">
          Respuesta confirmada: <span className="font-bold">{team.confirmedAnswer}</span>
        </p>
      )}
      {!confirmed && expired && (
        <p className="text-center font-ui text-sm text-rose-300">
          ¡Se acabó el tiempo sin confirmar respuesta!
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
