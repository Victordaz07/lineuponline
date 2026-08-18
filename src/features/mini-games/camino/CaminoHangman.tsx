import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToastStore } from '@/stores/toastStore'
import type { CaminoAchievement } from '../data/caminoAchievements'
import type { CaminoStage, HangmanChallenge } from '../types/camino'
import { calcStars } from '../lib/stars'
import { useCaminoStore } from '../store/caminoStore'
import { achievementToastMessage } from '../lib/achievementToast'
import { ResultPanel } from './ResultPanel'

const MAX_LIVES = 6
const KEYBOARD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function formatTime(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export type CaminoHangmanProps = {
  stage: CaminoStage
  challenge: HangmanChallenge
}

/** Ahorcado / completa la palabra: descubre la palabra letra por letra antes de quedarte sin vidas. */
export function CaminoHangman({ stage, challenge }: CaminoHangmanProps) {
  const navigate = useNavigate()
  const addToast = useToastStore((s) => s.addToast)
  const completeStage = useCaminoStore((s) => s.completeStage)

  const [guessed, setGuessed] = useState<Set<string>>(new Set())
  const [seconds, setSeconds] = useState(0)
  const [hintsUsed, setHintsUsed] = useState(0)
  const [result, setResult] = useState<{ stars: number; isNewBest: boolean; newAchievements: CaminoAchievement[] } | null>(
    null,
  )

  const secondsRef = useRef(0)
  const hintsRef = useRef(0)
  const completedRef = useRef(false)

  const letters = useMemo(() => [...challenge.word], [challenge])
  const wrongGuesses = useMemo(() => [...guessed].filter((l) => !letters.includes(l)), [guessed, letters])
  const lives = MAX_LIVES - wrongGuesses.length
  const won = result !== null
  const lost = lives <= 0 && !won
  const over = won || lost

  useEffect(() => {
    if (over) return
    const t = setInterval(() => {
      secondsRef.current += 1
      setSeconds(secondsRef.current)
    }, 1000)
    return () => clearInterval(t)
  }, [over])

  function finishRun() {
    if (completedRef.current) return
    completedRef.current = true
    const stars = calcStars(secondsRef.current, hintsRef.current, stage.starTimes)
    const outcome = completeStage(stage.id, secondsRef.current, hintsRef.current, stars)
    setResult({ stars: outcome.stars, isNewBest: outcome.isNewBest, newAchievements: outcome.newAchievements })
    outcome.newAchievements.forEach((a) => addToast(achievementToastMessage(a), 'success'))
  }

  function restart() {
    completedRef.current = false
    secondsRef.current = 0
    hintsRef.current = 0
    setGuessed(new Set())
    setSeconds(0)
    setHintsUsed(0)
    setResult(null)
  }

  function guess(letter: string) {
    if (over || guessed.has(letter)) return
    const next = new Set(guessed).add(letter)
    setGuessed(next)
    if (letters.every((l) => next.has(l))) finishRun()
  }

  function useHint() {
    if (over) return
    const remaining = letters.filter((l) => !guessed.has(l))
    if (remaining.length === 0) return
    const letter = remaining[0]
    const next = new Set(guessed).add(letter)
    setGuessed(next)
    hintsRef.current += 1
    setHintsUsed(hintsRef.current)
    addToast(`💡 Pista usada: revelamos la letra "${letter}"`, 'info')
    if (letters.every((l) => next.has(l))) finishRun()
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-center font-ui text-sm text-parchment/65">
        ⏱️ {formatTime(seconds)} · Vidas: {'❤️'.repeat(Math.max(lives, 0))}
        {'🤍'.repeat(MAX_LIVES - Math.max(lives, 0))}
        {hintsUsed > 0 ? ` · Pistas: ${hintsUsed}` : ''}
      </p>

      {result && (
        <ResultPanel
          stars={result.stars}
          seconds={seconds}
          hintsUsed={hintsUsed}
          isNewBest={result.isNewBest}
          newAchievements={result.newAchievements}
          onRestart={restart}
          onBackToPath={() => navigate(`/games/sopa-de-letras/camino/${stage.volumeId}?justCompleted=${stage.id}`)}
        />
      )}

      {lost && (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-terracotta/40 bg-terracotta/10 p-5 text-center">
          <p className="text-3xl" aria-hidden="true">
            💛
          </p>
          <p className="font-display text-lg font-bold text-parchment">La palabra era: {challenge.word}</p>
          <button
            type="button"
            onClick={restart}
            className="rounded-lg border border-sg-gold bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-ink shadow-sm transition hover:brightness-95"
          >
            Intentar de nuevo
          </button>
        </div>
      )}

      <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-6 text-center">
        <p className="mb-4 font-ui text-sm text-parchment/65">💡 Pista: {challenge.hint}</p>
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

      {!over && (
        <button
          type="button"
          onClick={useHint}
          className="mx-auto rounded-full border border-sg-gold/40 bg-transparent px-4 py-1.5 font-ui text-xs font-semibold text-sg-gold-light transition hover:bg-sg-gold/10"
        >
          💡 Pista
        </button>
      )}
    </div>
  )
}
