import { useEffect, useMemo, useRef, useState } from 'react'
import { GameLayout } from '../components/GameLayout'
import { pickRandomWords, type WordEntry } from '../data/wordBank'

type Difficulty = 'facil' | 'normal' | 'dificil'

const DIFFICULTY_CONFIG: Record<Difficulty, { label: string; pairs: number; cols: string }> = {
  facil: { label: 'Fácil · 6 pares', pairs: 6, cols: 'grid-cols-3' },
  normal: { label: 'Normal · 8 pares', pairs: 8, cols: 'grid-cols-4' },
  dificil: { label: 'Difícil · 12 pares', pairs: 12, cols: 'grid-cols-4 sm:grid-cols-6' },
}

type CardData = {
  id: number
  pairKey: string
  entry: WordEntry
  matched: boolean
}

function buildDeck(pairs: number): CardData[] {
  const words = pickRandomWords(pairs)
  const deck: CardData[] = words.flatMap((entry, i) => [
    { id: i * 2, pairKey: entry.word, entry, matched: false },
    { id: i * 2 + 1, pairKey: entry.word, entry, matched: false },
  ])
  return deck.sort(() => Math.random() - 0.5)
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

/** Juego de memoria: encuentra los pares de tarjetas con el mismo tema. */
export default function MemoryMatch() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null)
  const [deck, setDeck] = useState<CardData[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const lockRef = useRef(false)

  const matchedCount = useMemo(() => deck.filter((c) => c.matched).length / 2, [deck])
  const totalPairs = difficulty ? DIFFICULTY_CONFIG[difficulty].pairs : 0
  const won = difficulty !== null && matchedCount === totalPairs && totalPairs > 0

  useEffect(() => {
    if (!difficulty || won) return
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [difficulty, won])

  function start(d: Difficulty) {
    setDifficulty(d)
    setDeck(buildDeck(DIFFICULTY_CONFIG[d].pairs))
    setFlipped([])
    setMoves(0)
    setSeconds(0)
  }

  function restart() {
    if (difficulty) start(difficulty)
    else setDifficulty(null)
  }

  function backToSelect() {
    setDifficulty(null)
    setDeck([])
    setFlipped([])
  }

  function handleFlip(id: number) {
    if (lockRef.current) return
    if (flipped.includes(id)) return
    const card = deck.find((c) => c.id === id)
    if (!card || card.matched) return

    const next = [...flipped, id]
    setFlipped(next)

    if (next.length === 2) {
      lockRef.current = true
      setMoves((m) => m + 1)
      const [a, b] = next
      const cardA = deck.find((c) => c.id === a)!
      const cardB = deck.find((c) => c.id === b)!
      if (cardA.pairKey === cardB.pairKey) {
        setTimeout(() => {
          setDeck((d) => d.map((c) => (c.id === a || c.id === b ? { ...c, matched: true } : c)))
          setFlipped([])
          lockRef.current = false
        }, 400)
      } else {
        setTimeout(() => {
          setFlipped([])
          lockRef.current = false
        }, 900)
      }
    }
  }

  if (!difficulty) {
    return (
      <GameLayout title="Memoria" emoji="🧠">
        <p className="text-center font-ui text-sm text-parchment/70">
          Encuentra las parejas antes de que se te acabe la paciencia. Elige un nivel:
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {(Object.keys(DIFFICULTY_CONFIG) as Difficulty[]).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => start(d)}
              className="rounded-2xl border border-sg-gold/25 bg-navy-mid p-5 text-center font-ui text-sm font-semibold text-parchment shadow-sm transition hover:border-sg-gold hover:bg-navy-light"
            >
              {DIFFICULTY_CONFIG[d].label}
            </button>
          ))}
        </div>
      </GameLayout>
    )
  }

  return (
    <GameLayout
      title="Memoria"
      emoji="🧠"
      status={`Movimientos: ${moves} · Tiempo: ${formatTime(seconds)} · Pares: ${matchedCount}/${totalPairs}`}
      onRestart={restart}
    >
      {won ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-sg-gold/30 bg-navy-mid p-8 text-center">
          <p className="text-5xl" aria-hidden="true">
            🎉
          </p>
          <p className="font-display text-xl font-bold text-parchment">¡Completaste el tablero!</p>
          <p className="font-ui text-sm text-parchment/70">
            {moves} movimientos en {formatTime(seconds)}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={restart}
              className="rounded-lg border border-sg-gold bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-ink shadow-sm transition hover:brightness-95"
            >
              Jugar de nuevo
            </button>
            <button
              type="button"
              onClick={backToSelect}
              className="rounded-lg border border-sg-gold/40 bg-transparent px-4 py-2 font-ui text-sm font-semibold text-sg-gold-light transition hover:bg-sg-gold/10"
            >
              Cambiar nivel
            </button>
          </div>
        </div>
      ) : (
        <div className={`grid gap-2.5 ${DIFFICULTY_CONFIG[difficulty].cols}`}>
          {deck.map((card) => {
            const isFlipped = card.matched || flipped.includes(card.id)
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => handleFlip(card.id)}
                disabled={card.matched}
                aria-label={isFlipped ? card.entry.word : 'Tarjeta oculta'}
                className={`flex aspect-square items-center justify-center rounded-xl border text-2xl transition sm:text-3xl ${
                  card.matched
                    ? 'border-jade/50 bg-jade/15'
                    : isFlipped
                      ? 'border-sg-gold bg-gold-dim'
                      : 'border-sg-gold/20 bg-navy-mid hover:border-sg-gold/50'
                }`}
              >
                {isFlipped ? card.entry.emoji : '❓'}
              </button>
            )
          })}
        </div>
      )}
    </GameLayout>
  )
}
