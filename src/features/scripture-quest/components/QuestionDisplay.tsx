/**
 * Vista del anfitrión (proyector/TV): muestra la ronda en curso con barras de
 * votos en vivo, pistas progresivas o conteo de respuestas según el tipo.
 */
import type { GameRound, Player, Team } from '../types'
import { ROUND_TYPE_LABELS } from '../data/badges'
import {
  TIMER_BY_TYPE,
  WHO_AM_I_CLUE_SECONDS,
  whoAmIPoints,
} from '../utils/scoreCalculator'
import { SQAvatar } from './SQIcon'
import { TimerBar } from './TimerBar'

type Props = {
  round: GameRound
  questionNumber: number
  totalQuestions: number
  players: Player[]
  teams: Team[]
  teamMode: boolean
  remaining: number
  /** Silencia el tic-tac local (p. ej. cuando otra pantalla ya lo emite). */
  muteTick?: boolean
}

const OPTION_KEYS = ['A', 'B', 'C', 'D'] as const
const OPTION_CLASSES: Record<string, string> = {
  A: 'sq-ans-a',
  B: 'sq-ans-b',
  C: 'sq-ans-c',
  D: 'sq-ans-d',
}

function VoteBars({
  options,
  counts,
}: {
  options: { key: string; label: string; color: string }[]
  counts: Record<string, number>
}) {
  const total = options.reduce((sum, o) => sum + (counts[o.key] ?? 0), 0)
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {options.map((option) => {
        const count = counts[option.key] ?? 0
        const pct = total > 0 ? (count / total) * 100 : 0
        return (
          <div
            key={option.key}
            className="relative overflow-hidden rounded-xl border border-navy-light bg-navy-light/40 p-4"
          >
            <div
              className={`absolute inset-y-0 left-0 ${option.color} opacity-25 transition-[width] duration-500`}
              style={{ width: `${pct}%` }}
            />
            <div className="relative flex items-center justify-between gap-3">
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-9 min-w-9 shrink-0 items-center justify-center rounded-lg px-2 font-display text-lg font-bold text-white ${option.color}`}
                >
                  {option.key === 'true' ? '✔' : option.key === 'false' ? '✖' : option.key}
                </span>
                <span className="font-ui text-lg text-warm-white">{option.label}</span>
              </span>
              <span className="font-display text-xl font-bold text-sg-gold-bright">{count}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function AnsweredMeter({ players, label }: { players: Player[]; label?: string }) {
  const answered = players.filter((p) => p.answeredCurrentQuestion)
  return (
    <div className="sq-card flex items-center justify-between p-4">
      <span className="font-ui text-warm-white">
        {label ?? 'Respuestas recibidas'}: {answered.length}/{players.length}
      </span>
      <span className="flex -space-x-2">
        {answered.slice(0, 10).map((p) => (
          <SQAvatar key={p.uid} id={p.avatar} size={30} className="sq-pop" />
        ))}
      </span>
    </div>
  )
}

export function QuestionDisplay({
  round,
  questionNumber,
  totalQuestions,
  players,
  teams,
  teamMode,
  remaining,
  muteTick = false,
}: Props) {
  const duration = TIMER_BY_TYPE[round.roundType]
  const elapsed = Math.max(0, duration - remaining)

  // Conteo de votos para clásica / verdadero-falso
  const counts: Record<string, number> = {}
  if (teamMode) {
    for (const t of teams) {
      for (const vote of Object.values(t.votes ?? {})) counts[vote] = (counts[vote] ?? 0) + 1
    }
  } else {
    for (const p of players) {
      if (p.currentAnswer) counts[p.currentAnswer] = (counts[p.currentAnswer] ?? 0) + 1
    }
  }

  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div className="font-ui text-sm uppercase tracking-widest text-sg-gold-light sq-rise">
        Ronda {questionNumber} de {totalQuestions} · {ROUND_TYPE_LABELS[round.roundType]} ·
        Nivel {round.level}
      </div>

      <TimerBar remaining={remaining} duration={duration} size="lg" muteTick={muteTick} />

      <div className="flex-1 space-y-6">
        {round.roundType === 'classic' && (
          <>
            <h2 className="sq-rise font-display text-4xl font-bold leading-snug text-warm-white">
              {round.content.question}
            </h2>
            <VoteBars
              options={OPTION_KEYS.map((k) => ({
                key: k,
                label: round.content.options[k],
                color: OPTION_CLASSES[k],
              }))}
              counts={counts}
            />
          </>
        )}

        {round.roundType === 'true_false' && (
          <>
            <h2 className="sq-rise font-display text-4xl font-bold leading-snug text-warm-white">
              {round.content.statement}
            </h2>
            <VoteBars
              options={[
                { key: 'true', label: 'Verdadero', color: 'sq-ans-d' },
                { key: 'false', label: 'Falso', color: 'sq-ans-a' },
              ]}
              counts={counts}
            />
          </>
        )}

        {round.roundType === 'fill_blank' && (
          <>
            <blockquote className="sq-rise font-display text-4xl font-bold leading-snug text-warm-white">
              {round.content.verse.replace('[BLANK]', ' ______ ')}
            </blockquote>
            <p className="font-ui text-lg text-sg-gold-light">{round.content.reference}</p>
            <AnsweredMeter players={players} />
          </>
        )}

        {round.roundType === 'image_guess' && (
          <div className="grid h-full grid-cols-[1fr_auto] items-start gap-8">
            <div className="space-y-4">
              <h2 className="sq-rise font-display text-3xl font-bold text-warm-white">
                ¿Qué representa esta imagen?
              </h2>
              {elapsed >= 15 && (
                <p className="sq-card sq-rise p-4 font-ui text-xl text-sg-gold-bright">
                  💡 Pista: {round.content.hint}
                </p>
              )}
              <AnsweredMeter players={players} />
            </div>
            <img
              src={round.content.imageUrl}
              alt="Adivina la imagen"
              className="max-h-96 rounded-2xl border-2 border-sg-gold object-contain"
            />
          </div>
        )}

        {round.roundType === 'mime' && (
          <div className="space-y-6 text-center">
            <p className="text-6xl" aria-hidden>🎭</p>
            <h2 className="font-display text-4xl font-bold text-warm-white">
              ¡Mímica en equipo!
            </h2>
            <p className="font-ui text-xl text-warm-white/70">
              El líder de cada equipo actúa lo que ve en su teléfono.
              <br />
              ¡Su equipo debe escribir la respuesta antes de que acabe el tiempo!
            </p>
            <AnsweredMeter players={players.filter((p) => !p.isLeader)} label="Intentos" />
          </div>
        )}

        {round.roundType === 'who_am_i' && (
          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-4xl font-bold text-warm-white">¿Quién soy?</h2>
              <p className="font-display text-3xl font-bold text-sg-gold-bright">
                {whoAmIPoints(
                  round.content,
                  Math.min(
                    Math.floor(elapsed / WHO_AM_I_CLUE_SECONDS) + 1,
                    round.content.clues.length,
                  ),
                ).toLocaleString('es')}{' '}
                pts
              </p>
            </div>
            <ol className="space-y-3">
              {round.content.clues
                .slice(
                  0,
                  Math.min(
                    Math.floor(elapsed / WHO_AM_I_CLUE_SECONDS) + 1,
                    round.content.clues.length,
                  ),
                )
                .map((clue, i) => (
                  <li
                    key={i}
                    className="sq-card sq-rise p-4 font-display text-2xl text-warm-white"
                  >
                    <span className="mr-3 font-bold text-sg-gold-bright">{i + 1}.</span>
                    {clue}
                  </li>
                ))}
            </ol>
            <AnsweredMeter players={players} />
          </div>
        )}

        {round.roundType === 'order_events' && (
          <div className="space-y-4">
            <h2 className="sq-rise font-display text-3xl font-bold text-warm-white">
              Ordena los acontecimientos cronológicamente
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {round.content.events.map((event) => (
                <li key={event.id} className="sq-card p-4 font-ui text-lg text-warm-white">
                  {event.text}
                </li>
              ))}
            </ul>
            <AnsweredMeter players={players} />
          </div>
        )}
      </div>
    </div>
  )
}
