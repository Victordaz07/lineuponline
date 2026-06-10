import type { AnswerOption, Question } from '../types'

type Props = {
  question: Question
  remaining: number
  expired: boolean
  selected: AnswerOption | null
  onAnswer: (option: AnswerOption) => void
}

const OPTIONS: AnswerOption[] = ['A', 'B', 'C', 'D']

const OPTION_COLORS: Record<AnswerOption, string> = {
  A: 'bg-rose-500 active:bg-rose-600',
  B: 'bg-sky-500 active:bg-sky-600',
  C: 'bg-amber-500 active:bg-amber-600',
  D: 'bg-emerald-500 active:bg-emerald-600',
}

/** Player answer view: big tappable buttons + countdown. Mobile-first. */
export function AnswerPanel({ question, remaining, expired, selected, onAnswer }: Props) {
  const locked = selected !== null || expired
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-ui text-sm text-warm-white/80">{question.points} pts</p>
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
        {OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            disabled={locked}
            onClick={() => onAnswer(option)}
            className={`flex min-h-16 items-center gap-3 rounded-xl px-4 py-3 text-left font-ui text-base font-medium text-white transition ${OPTION_COLORS[option]} ${
              locked && selected !== option ? 'opacity-40' : ''
            } ${selected === option ? 'ring-4 ring-warm-white' : ''}`}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black/25 font-display text-lg font-bold">
              {option}
            </span>
            {question.options[option]}
          </button>
        ))}
      </div>

      {selected && (
        <p className="text-center font-ui text-sm text-sg-gold-light">
          Respuesta enviada. Esperando a los demás…
        </p>
      )}
      {!selected && expired && (
        <p className="text-center font-ui text-sm text-rose-300">¡Se acabó el tiempo!</p>
      )}
    </div>
  )
}
