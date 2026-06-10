import type { AnswerOption, Player, Question, Team } from '../types'

type Props = {
  question: Question
  questionNumber: number
  totalQuestions: number
  players: Player[]
  teams: Team[]
  teamMode: boolean
  remaining: number
  progress: number
  /** When true, highlights the correct answer and shows the explanation. */
  reveal: boolean
}

const OPTIONS: AnswerOption[] = ['A', 'B', 'C', 'D']

const OPTION_COLORS: Record<AnswerOption, string> = {
  A: 'bg-rose-500',
  B: 'bg-sky-500',
  C: 'bg-amber-500',
  D: 'bg-emerald-500',
}

const CATEGORY_LABELS: Record<Question['category'], string> = {
  personajes: 'Personajes',
  lugares: 'Lugares',
  eventos: 'Eventos',
  doctrina: 'Doctrina y Convenios',
  escrituras: 'Escrituras al Pie',
  cronologia: 'Tiempo y Cronología',
  simbolos: 'Símbolos y Tipos',
  restauracion: 'Restauración e Historia',
}

/**
 * Host (projector) view: question with live vote bars that update in realtime
 * as players answer / team members vote. Desktop-first layout.
 */
export function QuestionDisplay({
  question,
  questionNumber,
  totalQuestions,
  players,
  teams,
  teamMode,
  remaining,
  progress,
  reveal,
}: Props) {
  // Aggregate live votes: individual answers, plus team member votes in team mode
  const counts: Record<AnswerOption, number> = { A: 0, B: 0, C: 0, D: 0 }
  if (teamMode) {
    for (const t of teams) {
      for (const vote of Object.values(t.votes ?? {})) counts[vote] += 1
    }
  } else {
    for (const p of players) {
      if (p.currentAnswer) counts[p.currentAnswer] += 1
    }
  }
  const totalVotes = OPTIONS.reduce((sum, o) => sum + counts[o], 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="font-ui text-sm uppercase tracking-widest text-sg-gold-light">
          Pregunta {questionNumber} de {totalQuestions} ·{' '}
          {CATEGORY_LABELS[question.category] ?? 'Doctrina'} · {question.points} pts
        </div>
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full font-display text-2xl font-bold ${
            remaining <= 5 ? 'bg-rose-600 text-white' : 'bg-sg-gold text-navy-deep'
          }`}
        >
          {reveal ? '✓' : remaining}
        </div>
      </div>

      {!reveal && (
        <div className="h-2 overflow-hidden rounded-full bg-navy-light">
          <div
            className="h-full rounded-full bg-sg-gold transition-[width] duration-300 ease-linear"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}

      <h2 className="font-display text-3xl font-bold leading-snug text-warm-white md:text-4xl">
        {question.question}
      </h2>

      <div className="grid gap-3 md:grid-cols-2">
        {OPTIONS.map((option) => {
          const count = counts[option]
          const pct = totalVotes > 0 ? (count / totalVotes) * 100 : 0
          const isCorrect = reveal && option === question.correctAnswer
          return (
            <div
              key={option}
              className={`relative overflow-hidden rounded-xl border p-4 ${
                isCorrect
                  ? 'border-emerald-400 bg-emerald-500/15'
                  : reveal
                    ? 'border-navy-light bg-navy-light/40 opacity-60'
                    : 'border-navy-light bg-navy-light/40'
              }`}
            >
              <div
                className={`absolute inset-y-0 left-0 ${OPTION_COLORS[option]} opacity-25 transition-[width] duration-500`}
                style={{ width: `${pct}%` }}
              />
              <div className="relative flex items-center justify-between gap-3">
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-lg font-bold text-white ${OPTION_COLORS[option]}`}
                  >
                    {option}
                  </span>
                  <span className="font-ui text-lg text-warm-white">
                    {question.options[option]}
                  </span>
                  {isCorrect && <span aria-hidden>✅</span>}
                </span>
                <span className="font-display text-xl font-bold text-sg-gold-bright">
                  {count}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {reveal && (
        <div className="rounded-xl border border-sg-gold/40 bg-gold-dim p-4">
          <p className="font-ui text-sm font-semibold uppercase tracking-wide text-sg-gold-bright">
            Explicación
          </p>
          <p className="mt-1 font-ui text-warm-white">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
