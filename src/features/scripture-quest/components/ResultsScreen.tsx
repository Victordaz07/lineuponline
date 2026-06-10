import type { AnswerOption, Player, Question, Team } from '../types'
import { LiveLeaderboard } from './LiveLeaderboard'

type Props = {
  question: Question
  players: Player[]
  teams: Team[]
  teamMode: boolean
  /** Player view: the answer this user (or their team) gave. */
  myAnswer?: AnswerOption | null
  highlightUid?: string
  /** Host view: seconds until the next question starts automatically. */
  nextIn?: number | null
}

/** Between-questions screen: correct answer, explanation and standings. */
export function ResultsScreen({
  question,
  players,
  teams,
  teamMode,
  myAnswer,
  highlightUid,
  nextIn,
}: Props) {
  const answered = myAnswer !== undefined
  const correct = myAnswer === question.correctAnswer

  return (
    <div className="space-y-6">
      {answered && (
        <div
          className={`rounded-2xl p-5 text-center ${
            correct ? 'bg-emerald-500/15 ring-1 ring-emerald-400' : 'bg-rose-500/15 ring-1 ring-rose-400'
          }`}
        >
          <p className="text-4xl" aria-hidden>
            {correct ? '🎉' : '😔'}
          </p>
          <p className="mt-1 font-display text-2xl font-bold text-warm-white">
            {correct ? '¡Correcto!' : myAnswer ? 'Incorrecto' : 'Sin respuesta'}
          </p>
        </div>
      )}

      <div className="rounded-2xl border border-sg-gold/40 bg-gold-dim p-5">
        <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-bright">
          Respuesta correcta
        </p>
        <p className="mt-1 font-display text-xl font-bold text-warm-white">
          {question.correctAnswer}. {question.options[question.correctAnswer]}
        </p>
        <p className="mt-2 font-ui text-sm text-warm-white/85">{question.explanation}</p>
      </div>

      <LiveLeaderboard
        players={players}
        teams={teams}
        teamMode={teamMode}
        highlightUid={highlightUid}
        limit={8}
      />

      {typeof nextIn === 'number' && nextIn > 0 && (
        <p className="text-center font-ui text-sm text-warm-white/60">
          Siguiente pregunta en {nextIn}…
        </p>
      )}
    </div>
  )
}
