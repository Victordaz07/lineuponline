/**
 * Paneles de respuesta del jugador para cada tipo de ronda.
 * RoundPanel despacha según round.roundType. Mobile-first.
 */
import { useMemo, useState } from 'react'
import type { AnswerOption, GameRound, Player, Team } from '../types'
import { TIMER_BY_TYPE, WHO_AM_I_CLUE_SECONDS, whoAmIPoints } from '../utils/scoreCalculator'
import { AnswerPanel } from './AnswerPanel'
import { TeamVotingPanel } from './TeamVotingPanel'
import { TimerBar } from './TimerBar'
import type { RoundType } from '../types'

export type RoundPanelProps = {
  round: GameRound
  me: Player
  myTeam: Team | undefined
  players: Player[]
  remaining: number
  expired: boolean
  onAnswer: (answer: string) => void
  onVote: (answer: string) => void
  onConfirm: (answer: string) => void
}

function TimerBubble({ remaining, roundType }: { remaining: number; roundType: RoundType }) {
  return (
    <div className="w-36 shrink-0">
      <TimerBar remaining={remaining} duration={TIMER_BY_TYPE[roundType]} />
    </div>
  )
}

function SentNote({ sent, expired }: { sent: boolean; expired: boolean }) {
  if (sent) {
    return (
      <p className="text-center font-ui text-sm text-sg-gold-light sq-rise">
        Respuesta enviada. Esperando a los demás…
      </p>
    )
  }
  if (expired) {
    return <p className="text-center font-ui text-sm text-rose-300">¡Se acabó el tiempo!</p>
  }
  return null
}

/** Entrada de texto compartida por fill_blank, image_guess, who_am_i y mime. */
function TextAnswerForm({
  locked,
  expired,
  placeholder,
  onSubmit,
}: {
  locked: boolean
  expired: boolean
  placeholder: string
  onSubmit: (text: string) => void
}) {
  const [text, setText] = useState('')
  const send = () => {
    if (text.trim().length > 0 && !locked) onSubmit(text.trim())
  }
  return (
    <div className="space-y-3">
      <input
        type="text"
        value={text}
        disabled={locked}
        maxLength={60}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && send()}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-light bg-navy-light/50 px-4 py-3.5 font-ui text-lg text-warm-white placeholder:text-warm-white/40 focus:border-sg-gold focus:outline-none disabled:opacity-50"
      />
      <button
        type="button"
        disabled={locked || text.trim().length === 0}
        onClick={send}
        className="w-full rounded-xl bg-sg-gold py-3 font-ui text-sm font-bold uppercase tracking-wide text-navy-deep transition hover:bg-sg-gold-light disabled:opacity-40"
      >
        Enviar respuesta
      </button>
      <SentNote sent={locked && !expired} expired={expired && !locked} />
    </div>
  )
}

function FillBlankPanel(p: RoundPanelProps) {
  if (p.round.roundType !== 'fill_blank') return null
  const locked = p.me.answeredCurrentQuestion || p.expired
  return (
    <div className="space-y-5 sq-rise">
      <div className="flex items-start justify-between gap-3">
        <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">
          Completa el versículo · {p.round.content.reference}
        </p>
        <TimerBubble remaining={p.remaining} roundType={p.round.roundType} />
      </div>
      <blockquote className="sq-card p-5 font-display text-2xl font-bold leading-snug text-warm-white">
        {p.round.content.verse.split('[BLANK]').map((part, i, arr) => (
          <span key={i}>
            {part}
            {i < arr.length - 1 && (
              <span className="mx-1 inline-block min-w-20 border-b-2 border-sg-gold text-sg-gold-bright">
                &nbsp;____&nbsp;
              </span>
            )}
          </span>
        ))}
      </blockquote>
      <TextAnswerForm
        locked={locked}
        expired={p.expired}
        placeholder="Escribe la palabra que falta…"
        onSubmit={p.onAnswer}
      />
    </div>
  )
}

function TrueFalsePanel(p: RoundPanelProps) {
  if (p.round.roundType !== 'true_false') return null
  const locked = p.me.answeredCurrentQuestion || p.expired
  const selected = p.me.currentAnswer
  return (
    <div className="space-y-5 sq-rise">
      <div className="flex items-start justify-between gap-3">
        <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">
          ¿Verdadero o falso?
        </p>
        <TimerBubble remaining={p.remaining} roundType={p.round.roundType} />
      </div>
      <h2 className="font-display text-2xl font-bold leading-snug text-warm-white">
        {p.round.content.statement}
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          disabled={locked}
          onClick={() => p.onAnswer('true')}
          className={`sq-bounce min-h-24 rounded-xl font-ui text-xl font-bold text-white transition sq-ans-d ${
            locked && selected !== 'true' ? 'opacity-40' : ''
          } ${selected === 'true' ? 'ring-4 ring-warm-white' : ''}`}
        >
          ✔ Verdadero
        </button>
        <button
          type="button"
          disabled={locked}
          onClick={() => p.onAnswer('false')}
          className={`sq-bounce sq-rise-1 min-h-24 rounded-xl font-ui text-xl font-bold text-white transition sq-ans-a ${
            locked && selected !== 'false' ? 'opacity-40' : ''
          } ${selected === 'false' ? 'ring-4 ring-warm-white' : ''}`}
        >
          ✖ Falso
        </button>
      </div>
      <SentNote sent={Boolean(selected)} expired={p.expired && !selected} />
    </div>
  )
}

function ImageGuessPanel(p: RoundPanelProps) {
  if (p.round.roundType !== 'image_guess') return null
  const locked = p.me.answeredCurrentQuestion || p.expired
  const duration = TIMER_BY_TYPE.image_guess
  const elapsed = duration - p.remaining
  const showHint = elapsed >= 15
  return (
    <div className="space-y-4 sq-rise">
      <div className="flex items-start justify-between gap-3">
        <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">
          ¿Qué representa esta imagen?
        </p>
        <TimerBubble remaining={p.remaining} roundType={p.round.roundType} />
      </div>
      <img
        src={p.round.content.imageUrl}
        alt="Adivina la imagen"
        className="max-h-72 w-full rounded-2xl border border-navy-light object-contain"
      />
      {showHint && (
        <p className="sq-card sq-rise p-3 font-ui text-sm text-sg-gold-bright">
          💡 Pista: {p.round.content.hint}
        </p>
      )}
      <TextAnswerForm
        locked={locked}
        expired={p.expired}
        placeholder="Escribe tu respuesta…"
        onSubmit={p.onAnswer}
      />
    </div>
  )
}

function MimePanel(p: RoundPanelProps) {
  if (p.round.roundType !== 'mime') return null
  const isActor = p.myTeam ? p.myTeam.leaderId === p.me.uid : false
  const locked = p.me.answeredCurrentQuestion || p.expired
  if (!p.myTeam) {
    return (
      <p className="py-12 text-center font-ui text-warm-white/70">
        Esta ronda es solo para equipos. ¡Observa y disfruta!
      </p>
    )
  }
  if (isActor) {
    return (
      <div className="space-y-4 sq-rise">
        <div className="flex items-start justify-between gap-3">
          <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">
            🎭 Eres quien actúa — ¡que tu equipo no vea tu pantalla!
          </p>
          <TimerBubble remaining={p.remaining} roundType={p.round.roundType} />
        </div>
        <img
          src={p.round.content.imageUrl}
          alt="Para actuar"
          className="max-h-72 w-full rounded-2xl border border-sg-gold object-contain sq-gold-ring"
        />
        <div className="sq-card p-4">
          <p className="font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright">
            Instrucciones
          </p>
          <p className="mt-1 font-ui text-sm text-warm-white">
            {p.round.content.actorInstructions}
          </p>
          <p className="mt-2 font-ui text-xs text-warm-white/60">
            Respuesta: <span className="font-bold">{p.round.content.answer}</span>
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="space-y-4 sq-rise">
      <div className="flex items-start justify-between gap-3">
        <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">
          🎭 ¡Adivina lo que actúa {p.players.find((x) => x.uid === p.myTeam?.leaderId)?.name ?? 'tu compañero'}!
        </p>
        <TimerBubble remaining={p.remaining} roundType={p.round.roundType} />
      </div>
      <TextAnswerForm
        locked={locked}
        expired={p.expired}
        placeholder="¿Qué está actuando?"
        onSubmit={p.onAnswer}
      />
      <p className="text-center font-ui text-xs text-warm-white/60">
        Si cualquier integrante acierta, todo el equipo gana los puntos.
      </p>
    </div>
  )
}

function WhoAmIPanel(p: RoundPanelProps) {
  if (p.round.roundType !== 'who_am_i') return null
  const locked = p.me.answeredCurrentQuestion || p.expired
  const duration = TIMER_BY_TYPE.who_am_i
  const elapsed = Math.max(0, duration - p.remaining)
  const cluesShown = Math.min(
    Math.floor(elapsed / WHO_AM_I_CLUE_SECONDS) + 1,
    p.round.content.clues.length,
  )
  const currentPoints = whoAmIPoints(p.round.content, cluesShown)
  return (
    <div className="space-y-4 sq-rise">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">¿Quién soy?</p>
          <p className="font-display text-xl font-bold text-sg-gold-bright">
            Vale {currentPoints.toLocaleString('es')} pts
          </p>
        </div>
        <TimerBubble remaining={p.remaining} roundType={p.round.roundType} />
      </div>
      <ol className="space-y-2">
        {p.round.content.clues.slice(0, cluesShown).map((clue, i) => (
          <li key={i} className="sq-card sq-rise p-3 font-ui text-warm-white">
            <span className="mr-2 font-display font-bold text-sg-gold-bright">{i + 1}.</span>
            {clue}
          </li>
        ))}
      </ol>
      <TextAnswerForm
        locked={locked}
        expired={p.expired}
        placeholder="¿Quién es?"
        onSubmit={p.onAnswer}
      />
      <p className="text-center font-ui text-xs text-warm-white/60">
        Cada pista nueva reduce los puntos. ¡Responde pronto!
      </p>
    </div>
  )
}

function OrderEventsPanel(p: RoundPanelProps) {
  // Hook order: useMemo/useState must run unconditionally before any return
  const { round } = p
  const shuffled = useMemo(() => {
    if (round.roundType !== 'order_events') return []
    return [...round.content.events].sort(
      (a, b) => a.id.localeCompare(b.id) * ((a.text.length % 2) * 2 - 1),
    )
  }, [round])
  const [order, setOrder] = useState<string[]>([])
  if (p.round.roundType !== 'order_events') return null
  const locked = p.me.answeredCurrentQuestion || p.expired

  const toggle = (id: string) => {
    if (locked) return
    setOrder((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  return (
    <div className="space-y-4 sq-rise">
      <div className="flex items-start justify-between gap-3">
        <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">
          Toca los eventos en orden cronológico
        </p>
        <TimerBubble remaining={p.remaining} roundType={p.round.roundType} />
      </div>
      <ul className="space-y-2">
        {shuffled.map((event) => {
          const position = order.indexOf(event.id)
          return (
            <li key={event.id}>
              <button
                type="button"
                disabled={locked}
                onClick={() => toggle(event.id)}
                className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left font-ui text-sm transition ${
                  position >= 0
                    ? 'border-sg-gold bg-gold-dim text-warm-white'
                    : 'border-navy-light bg-navy-light/40 text-warm-white/85'
                } disabled:opacity-60`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-base font-bold ${
                    position >= 0 ? 'bg-sg-gold text-navy-deep' : 'bg-navy-light text-warm-white/50'
                  }`}
                >
                  {position >= 0 ? position + 1 : '·'}
                </span>
                {event.text}
              </button>
            </li>
          )
        })}
      </ul>
      <div className="flex gap-2">
        <button
          type="button"
          disabled={locked || order.length === 0}
          onClick={() => setOrder([])}
          className="rounded-xl border border-navy-light px-4 py-2.5 font-ui text-xs font-bold uppercase text-warm-white/70 hover:border-sg-gold disabled:opacity-40"
        >
          Reiniciar
        </button>
        <button
          type="button"
          disabled={locked || order.length !== shuffled.length}
          onClick={() => p.onAnswer(order.join(','))}
          className="flex-1 rounded-xl bg-sg-gold py-2.5 font-ui text-sm font-bold uppercase tracking-wide text-navy-deep hover:bg-sg-gold-light disabled:opacity-40"
        >
          Confirmar orden
        </button>
      </div>
      <SentNote sent={locked && !p.expired} expired={p.expired && !p.me.answeredCurrentQuestion} />
    </div>
  )
}

/** Despachador principal: muestra el panel correcto para la ronda en curso. */
export function RoundPanel(props: RoundPanelProps) {
  const { round, me, myTeam } = props
  const teamVoting = myTeam && (round.roundType === 'classic' || round.roundType === 'true_false')

  if (teamVoting && myTeam) {
    return (
      <TeamVotingPanel
        round={round}
        team={myTeam}
        players={props.players}
        isLeader={myTeam.leaderId === me.uid}
        remaining={props.remaining}
        expired={props.expired}
        myVote={myTeam.votes?.[me.uid] ?? null}
        onVote={props.onVote}
        onConfirm={props.onConfirm}
      />
    )
  }

  switch (round.roundType) {
    case 'classic':
      return (
        <AnswerPanel
          question={{
            id: round.id,
            question: round.content.question,
            options: round.content.options,
            correctAnswer: round.content.correctAnswer,
            explanation: round.content.explanation,
            topic: round.topic,
            level: round.level,
            points: 0,
            category: round.category,
          }}
          remaining={props.remaining}
          expired={props.expired}
          selected={(me.currentAnswer as AnswerOption | null) ?? null}
          onAnswer={(o) => props.onAnswer(o)}
        />
      )
    case 'true_false':
      return <TrueFalsePanel {...props} />
    case 'fill_blank':
      return <FillBlankPanel {...props} />
    case 'image_guess':
      return <ImageGuessPanel {...props} />
    case 'mime':
      return <MimePanel {...props} />
    case 'who_am_i':
      return <WhoAmIPanel {...props} />
    case 'order_events':
      return <OrderEventsPanel {...props} />
  }
}
