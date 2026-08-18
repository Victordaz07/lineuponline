import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToastStore } from '@/stores/toastStore'
import { stagesForVolume } from '../data/caminoStages'
import type { CaminoStage, ConnectChallenge } from '../types/camino'
import { calcStars } from '../lib/stars'
import { shuffleWith } from '../data/wordBank'
import { useCaminoStore } from '../store/caminoStore'
import { achievementToastMessage } from '../lib/achievementToast'
import { ResultPanel } from './ResultPanel'

function formatTime(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export type CaminoConnectProps = {
  stage: CaminoStage
  challenge: ConnectChallenge
}

/** Conecta los elementos: toca un término y luego su pareja correcta. */
export function CaminoConnect({ stage, challenge }: CaminoConnectProps) {
  const navigate = useNavigate()
  const addToast = useToastStore((s) => s.addToast)
  const completeStage = useCaminoStore((s) => s.completeStage)

  const leftItems = useMemo(() => shuffleWith(challenge.pairs.map((p) => p.left), Math.random), [challenge])
  const rightItems = useMemo(() => shuffleWith(challenge.pairs.map((p) => p.right), Math.random), [challenge])

  const [matched, setMatched] = useState<Set<string>>(new Set())
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [selectedRight, setSelectedRight] = useState<string | null>(null)
  const [wrongPulse, setWrongPulse] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [result, setResult] = useState<{ stars: number; isNewBest: boolean } | null>(null)

  const secondsRef = useRef(0)
  const mistakesRef = useRef(0)
  const completedRef = useRef(false)

  const total = challenge.pairs.length
  const won = result !== null

  useEffect(() => {
    if (won) return
    const t = setInterval(() => {
      secondsRef.current += 1
      setSeconds(secondsRef.current)
    }, 1000)
    return () => clearInterval(t)
  }, [won])

  function finishRun() {
    if (completedRef.current) return
    completedRef.current = true
    const stars = calcStars(secondsRef.current, mistakesRef.current, stage.starTimes)
    const outcome = completeStage(stage.id, secondsRef.current, mistakesRef.current, stars)
    setResult({ stars: outcome.stars, isNewBest: outcome.isNewBest })
    outcome.newAchievements.forEach((a) => addToast(achievementToastMessage(a), 'success'))
  }

  function restart() {
    completedRef.current = false
    secondsRef.current = 0
    mistakesRef.current = 0
    setMatched(new Set())
    setSelectedLeft(null)
    setSelectedRight(null)
    setSeconds(0)
    setMistakes(0)
    setResult(null)
  }

  function tryMatch(left: string, right: string) {
    const isMatch = challenge.pairs.some((p) => p.left === left && p.right === right)
    if (isMatch) {
      const next = new Set(matched).add(left)
      setMatched(next)
      setSelectedLeft(null)
      setSelectedRight(null)
      if (next.size === total) finishRun()
    } else {
      setWrongPulse(true)
      mistakesRef.current += 1
      setMistakes(mistakesRef.current)
      setTimeout(() => {
        setWrongPulse(false)
        setSelectedLeft(null)
        setSelectedRight(null)
      }, 500)
    }
  }

  function pickLeft(left: string) {
    if (won || matched.has(left) || wrongPulse) return
    setSelectedLeft(left)
    if (selectedRight) tryMatch(left, selectedRight)
  }

  function pickRight(right: string) {
    if (won || wrongPulse) return
    const alreadyMatched = challenge.pairs.some((p) => p.right === right && matched.has(p.left))
    if (alreadyMatched) return
    setSelectedRight(right)
    if (selectedLeft) tryMatch(selectedLeft, right)
  }

  function useHint() {
    if (won) return
    const remaining = challenge.pairs.filter((p) => !matched.has(p.left))
    if (remaining.length === 0) return
    const pair = remaining[0]
    const next = new Set(matched).add(pair.left)
    setMatched(next)
    setSelectedLeft(null)
    setSelectedRight(null)
    mistakesRef.current += 1
    setMistakes(mistakesRef.current)
    addToast('💡 Pista usada: conectamos un par por ti', 'info')
    if (next.size === total) finishRun()
  }

  const nextStage = stagesForVolume(stage.volumeId).find((s) => s.order > stage.order && s.status === 'ready')

  function rightMatchedLeft(right: string): string | undefined {
    return challenge.pairs.find((p) => p.right === right && matched.has(p.left))?.left
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-center font-ui text-sm text-parchment/65">
        ⏱️ {formatTime(seconds)} · Conectados: {matched.size}/{total}
        {mistakes > 0 ? ` · Intentos fallidos: ${mistakes}` : ''}
      </p>

      {result && (
        <ResultPanel
          stars={result.stars}
          seconds={seconds}
          hintsUsed={mistakes}
          isNewBest={result.isNewBest}
          onRestart={restart}
          onNext={nextStage ? { label: 'Siguiente estación →', onClick: () => navigate(`/games/sopa-de-letras/reto/${nextStage.id}`) } : undefined}
          onBackToPath={() => navigate(`/games/sopa-de-letras/camino/${stage.volumeId}?justCompleted=${stage.id}`)}
        />
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          {leftItems.map((left) => {
            const isMatched = matched.has(left)
            const isSelected = selectedLeft === left
            return (
              <button
                key={left}
                type="button"
                disabled={isMatched}
                onClick={() => pickLeft(left)}
                className={`rounded-xl border px-3 py-2.5 text-left font-ui text-sm font-semibold transition ${
                  isMatched
                    ? 'border-jade/40 bg-jade/15 text-jade'
                    : isSelected
                      ? wrongPulse
                        ? 'border-terracotta bg-terracotta/20 text-terracotta'
                        : 'border-sg-gold bg-sg-gold/20 text-sg-gold-light'
                      : 'border-sg-gold/20 bg-navy-mid text-parchment/85 hover:border-sg-gold/50'
                } disabled:cursor-not-allowed`}
              >
                {left}
              </button>
            )
          })}
        </div>
        <div className="flex flex-col gap-2">
          {rightItems.map((right) => {
            const matchedLeft = rightMatchedLeft(right)
            const isSelected = selectedRight === right
            return (
              <button
                key={right}
                type="button"
                disabled={Boolean(matchedLeft)}
                onClick={() => pickRight(right)}
                className={`rounded-xl border px-3 py-2.5 text-left font-ui text-sm transition ${
                  matchedLeft
                    ? 'border-jade/40 bg-jade/15 text-jade'
                    : isSelected
                      ? wrongPulse
                        ? 'border-terracotta bg-terracotta/20 text-terracotta'
                        : 'border-sg-gold bg-sg-gold/20 text-sg-gold-light'
                      : 'border-sg-gold/20 bg-navy-mid text-parchment/75 hover:border-sg-gold/50'
                } disabled:cursor-not-allowed`}
              >
                {right}
              </button>
            )
          })}
        </div>
      </div>

      {!won && (
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
