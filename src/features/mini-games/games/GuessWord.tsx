import { useMemo, useState } from 'react'
import { GameLayout } from '../components/GameLayout'
import { pickRandomWord, type WordEntry } from '../data/wordBank'

const MAX_LIVES = 6
const KEYBOARD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function newRound(): WordEntry {
  return pickRandomWord()
}

/** Adivina la palabra: descubre la palabra letra por letra antes de perder tus vidas. */
export default function GuessWord() {
  const [entry, setEntry] = useState<WordEntry>(() => newRound())
  const [guessed, setGuessed] = useState<Set<string>>(new Set())

  const letters = useMemo(() => [...entry.word], [entry])
  const wrongGuesses = useMemo(
    () => [...guessed].filter((l) => !letters.includes(l)),
    [guessed, letters],
  )
  const lives = MAX_LIVES - wrongGuesses.length
  const won = letters.every((l) => guessed.has(l))
  const lost = lives <= 0
  const over = won || lost

  function restart() {
    setEntry(newRound())
    setGuessed(new Set())
  }

  function guess(letter: string) {
    if (over || guessed.has(letter)) return
    setGuessed((g) => new Set(g).add(letter))
  }

  return (
    <GameLayout
      title="Adivina la palabra"
      emoji="🔤"
      status={`Vidas: ${'❤️'.repeat(Math.max(lives, 0))}${'🤍'.repeat(MAX_LIVES - Math.max(lives, 0))}`}
      onRestart={restart}
    >
      <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-6 text-center">
        <p className="mb-4 font-ui text-sm text-parchment/65">💡 Pista: {entry.hint}</p>
        <div className="flex flex-wrap justify-center gap-2 font-display text-2xl font-bold tracking-widest text-parchment sm:text-3xl">
          {letters.map((l, i) => {
            const revealed = guessed.has(l) || over
            return (
              <span
                key={i}
                className={`flex h-10 w-8 items-center justify-center border-b-2 sm:h-12 sm:w-10 ${
                  revealed ? 'border-sg-gold text-sg-gold-light' : 'border-parchment/30'
                }`}
              >
                {revealed ? l : ''}
              </span>
            )
          })}
        </div>
      </div>

      {over && (
        <div
          className={`flex flex-col items-center gap-2 rounded-2xl border p-5 text-center ${
            won ? 'border-jade/40 bg-jade/10' : 'border-terracotta/40 bg-terracotta/10'
          }`}
        >
          <p className="text-3xl" aria-hidden="true">
            {won ? '🎉' : '💛'}
          </p>
          <p className="font-display text-lg font-bold text-parchment">
            {won ? '¡Lo lograste!' : `La palabra era: ${entry.word}`}
          </p>
          <button
            type="button"
            onClick={restart}
            className="rounded-lg border border-sg-gold bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-ink shadow-sm transition hover:brightness-95"
          >
            Jugar de nuevo
          </button>
        </div>
      )}

      <div className="mx-auto grid max-w-md grid-cols-7 gap-1.5 sm:grid-cols-9">
        {KEYBOARD.map((letter) => {
          const used = guessed.has(letter)
          const correct = used && letters.includes(letter)
          return (
            <button
              key={letter}
              type="button"
              disabled={used || over}
              onClick={() => guess(letter)}
              className={`aspect-square rounded-lg font-ui text-sm font-bold transition ${
                used
                  ? correct
                    ? 'bg-jade/30 text-jade'
                    : 'bg-terracotta/20 text-terracotta/70 line-through'
                  : 'border border-sg-gold/20 bg-navy-mid text-parchment/85 hover:border-sg-gold/50 hover:bg-navy-light'
              } disabled:cursor-not-allowed`}
            >
              {letter}
            </button>
          )
        })}
      </div>
    </GameLayout>
  )
}
