/**
 * Order-Events round type for Scripture Quest.
 *
 * Shows 4 events in a SHUFFLED order — never the correct answer on first render.
 * Player taps ↑ / ↓ to rearrange them, then confirms.
 * Scoring: 100% correct → full points; each out-of-place event → −25% (min 0).
 */
import { useCallback, useMemo, useState } from 'react'
import { formatDisplayScore } from '../utils/scoreDisplay'

export interface OrderEvent {
  id: string
  text: string
  correctOrder: number // 1-indexed correct position
}

export interface OrderEventsRoundProps {
  events: OrderEvent[]
  explanation?: string
  basePoints: number
  timeExpired?: boolean
  onConfirm: (scorePercent: number) => void
}

// ─── Shuffle utils ────────────────────────────────────────────────────────────

function arraysEqual(a: number[], b: number[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i])
}

/** Returns the correct order as an array of indices (0-based). */
function correctIndexOrder(events: OrderEvent[]): number[] {
  const indexed = events.map((e, i) => ({ idx: i, pos: e.correctOrder }))
  return indexed.sort((a, b) => a.pos - b.pos).map((e) => e.idx)
}

/** Fisher-Yates shuffle that guarantees result ≠ identity AND ≠ correctOrder. */
function shuffleDeranged(len: number, correct: number[]): number[] {
  const identity = Array.from({ length: len }, (_, i) => i)
  let result: number[]
  let attempts = 0
  do {
    result = [...identity]
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[result[i], result[j]] = [result[j], result[i]]
    }
    attempts++
  } while (
    attempts < 30 &&
    (arraysEqual(result, identity) || arraysEqual(result, correct))
  )
  return result
}

// ─── Score calculation ────────────────────────────────────────────────────────

/**
 * Each event that is NOT in its correct position costs 25%.
 * E.g. 4/4 correct = 100%, 3/4 = 75%, 2/4 = 50%, 1/4 = 25%, 0/4 = 0%.
 */
function calcScorePercent(displayOrder: number[], correct: number[]): number {
  const correctCount = displayOrder.filter((idx, pos) => idx === correct[pos]).length
  return Math.max(0, correctCount / displayOrder.length)
}

// ─── Component ────────────────────────────────────────────────────────────────

export function OrderEventsRound({
  events,
  explanation,
  basePoints,
  timeExpired = false,
  onConfirm,
}: OrderEventsRoundProps) {
  const correct = useMemo(() => correctIndexOrder(events), [events])

  // displayOrder is an array of indices into `events`, shuffled initially
  const initialOrder = useMemo(() => shuffleDeranged(events.length, correct), [events.length, correct])
  const [displayOrder, setDisplayOrder] = useState<number[]>(initialOrder)
  const [confirmed, setConfirmed] = useState(false)
  const [scorePercent, setScorePercent] = useState<number | null>(null)

  const move = useCallback((pos: number, dir: -1 | 1) => {
    const next = pos + dir
    if (next < 0 || next >= displayOrder.length) return
    setDisplayOrder((prev) => {
      const copy = [...prev]
      ;[copy[pos], copy[next]] = [copy[next], copy[pos]]
      return copy
    })
  }, [displayOrder.length])

  const handleConfirm = useCallback(() => {
    const pct = calcScorePercent(displayOrder, correct)
    setScorePercent(pct)
    setConfirmed(true)
    onConfirm(pct)
  }, [displayOrder, correct, onConfirm])

  const handleReset = useCallback(() => {
    // Reset to the SHUFFLED initial order (not the correct order)
    setDisplayOrder(initialOrder)
    setConfirmed(false)
    setScorePercent(null)
  }, [initialOrder])

  // Auto-confirm when time expires
  if (timeExpired && !confirmed) {
    const pct = calcScorePercent(displayOrder, correct)
    onConfirm(pct)
  }

  const isPerfect = scorePercent === 1
  const isPartial = scorePercent !== null && scorePercent > 0 && scorePercent < 1

  return (
    <div className="flex flex-col gap-4">
      {/* Event list */}
      <ol className="space-y-2">
        {displayOrder.map((eventIdx, pos) => {
          const event = events[eventIdx]
          const isCorrectPos = confirmed && correct[pos] === eventIdx

          return (
            <li
              key={event.id}
              className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-3 transition-all ${
                confirmed
                  ? isCorrectPos
                    ? 'border-emerald-500/60 bg-emerald-500/10'
                    : 'border-red-500/40 bg-red-500/08'
                  : 'border-sg-gold/15 bg-navy-mid'
              }`}
            >
              {/* Position badge */}
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-ui text-sm font-bold ${
                  confirmed
                    ? isCorrectPos
                      ? 'bg-emerald-500/25 text-emerald-300'
                      : 'bg-red-500/20 text-red-400'
                    : 'bg-sg-gold/15 text-sg-gold'
                }`}
              >
                {pos + 1}
              </span>

              {/* Text */}
              <span className="flex-1 font-ui text-sm text-parchment/85">{event.text}</span>

              {/* Correct-order indicator (shown after confirm) */}
              {confirmed && !isCorrectPos && (
                <span className="shrink-0 font-ui text-xs text-parchment/35">
                  → posición {correct.indexOf(eventIdx) + 1}
                </span>
              )}

              {/* Move buttons (hidden once confirmed) */}
              {!confirmed && (
                <div className="flex shrink-0 flex-col gap-1">
                  <button
                    onClick={() => move(pos, -1)}
                    disabled={pos === 0}
                    className="rounded-lg border border-sg-gold/20 px-2 py-0.5 font-ui text-xs text-parchment/60 transition hover:bg-sg-gold/10 hover:text-parchment disabled:opacity-20"
                    aria-label="Mover arriba"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => move(pos, 1)}
                    disabled={pos === displayOrder.length - 1}
                    className="rounded-lg border border-sg-gold/20 px-2 py-0.5 font-ui text-xs text-parchment/60 transition hover:bg-sg-gold/10 hover:text-parchment disabled:opacity-20"
                    aria-label="Mover abajo"
                  >
                    ↓
                  </button>
                </div>
              )}

              {/* Result icon */}
              {confirmed && (
                <span className="shrink-0 text-base">
                  {isCorrectPos ? '✓' : '✗'}
                </span>
              )}
            </li>
          )
        })}
      </ol>

      {/* Feedback */}
      {confirmed && scorePercent !== null && (
        <div
          className={`rounded-2xl border-2 p-4 text-center ${
            isPerfect
              ? 'border-emerald-500/40 bg-emerald-500/10'
              : isPartial
                ? 'border-amber-400/40 bg-amber-400/10'
                : 'border-red-500/30 bg-red-500/08'
          }`}
        >
          <p className={`font-display text-2xl font-bold ${
            isPerfect ? 'text-emerald-400' : isPartial ? 'text-amber-300' : 'text-red-400'
          }`}>
            {isPerfect
              ? '¡Orden perfecto!'
              : isPartial
                ? `${Math.round(scorePercent * 100)}% correcto`
                : 'Orden incorrecto'}
          </p>
          <p className="mt-1 font-ui text-sm text-parchment/60">
            {formatDisplayScore(Math.round(scorePercent * basePoints))} pts
          </p>
          {explanation && (
            <p className="mt-3 font-ui text-sm text-parchment/50">{explanation}</p>
          )}
        </div>
      )}

      {/* Controls */}
      {!confirmed && (
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="rounded-2xl border-2 border-parchment/15 px-5 py-2.5 font-ui text-sm font-semibold text-parchment/50 transition hover:border-parchment/30 hover:text-parchment/70"
          >
            Reiniciar
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 rounded-2xl bg-sg-gold py-2.5 font-ui text-sm font-bold text-ink shadow transition hover:bg-sg-gold-light active:scale-95"
          >
            Confirmar orden
          </button>
        </div>
      )}
    </div>
  )
}
