import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToastStore } from '@/stores/toastStore'
import { stagesForVolume } from '../data/caminoStages'
import type { CaminoStage, WordSearchChallenge } from '../types/camino'
import { calcStars } from '../lib/stars'
import { cellKey, generateWordSearch, type Cell, type WordSearchPuzzle } from '../lib/generateWordSearch'
import { useCaminoStore } from '../store/caminoStore'
import { achievementToastMessage } from '../lib/achievementToast'
import { ResultPanel } from './ResultPanel'

const TRAIL_COLORS = ['#E8C87A', '#7FD1AE', '#7FB8D9', '#E29B7D', '#C792EA', '#F2A6B3', '#9AD1D4', '#D9C77F']

function formatTime(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export type CaminoWordSearchProps = {
  stage: CaminoStage
  challenge: WordSearchChallenge
}

/** Sopa de letras del Camino: misma mecánica de arrastre, pero con lista de palabras curada por estación. */
export function CaminoWordSearch({ stage, challenge }: CaminoWordSearchProps) {
  const navigate = useNavigate()
  const addToast = useToastStore((s) => s.addToast)
  const completeStage = useCaminoStore((s) => s.completeStage)

  const [runId, setRunId] = useState(0)
  const puzzle = useMemo<WordSearchPuzzle>(
    () =>
      generateWordSearch({
        size: challenge.size,
        words: challenge.words,
        count: challenge.words.length,
        allowDiagonal: challenge.allowDiagonal,
        allowReverse: challenge.allowReverse,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [challenge, runId],
  )

  const [found, setFound] = useState<Set<string>>(new Set())
  const [foundCells, setFoundCells] = useState<Set<string>>(new Set())
  const [selecting, setSelecting] = useState(false)
  const [start, setStart] = useState<Cell | null>(null)
  const [current, setCurrent] = useState<Cell[]>([])
  const [seconds, setSeconds] = useState(0)
  const [hintsUsed, setHintsUsed] = useState(0)
  const [result, setResult] = useState<{ stars: number; isNewBest: boolean } | null>(null)

  const secondsRef = useRef(0)
  const hintsRef = useRef(0)
  const completedRef = useRef(false)

  const totalWords = puzzle.placed.length
  const won = result !== null

  useEffect(() => {
    if (won) return
    const t = setInterval(() => {
      secondsRef.current += 1
      setSeconds(secondsRef.current)
    }, 1000)
    return () => clearInterval(t)
  }, [won])

  function finishRun(newFoundSize: number) {
    if (completedRef.current || newFoundSize < totalWords) return
    completedRef.current = true
    const stars = calcStars(secondsRef.current, hintsRef.current, stage.starTimes)
    const outcome = completeStage(stage.id, secondsRef.current, hintsRef.current, stars)
    setResult({ stars: outcome.stars, isNewBest: outcome.isNewBest })
    outcome.newAchievements.forEach((a) => addToast(achievementToastMessage(a), 'success'))
  }

  function restart() {
    completedRef.current = false
    secondsRef.current = 0
    hintsRef.current = 0
    setRunId((n) => n + 1)
    setFound(new Set())
    setFoundCells(new Set())
    setSelecting(false)
    setStart(null)
    setCurrent([])
    setSeconds(0)
    setHintsUsed(0)
    setResult(null)
  }

  function cellFromPoint(x: number, y: number): Cell | null {
    const el = document.elementFromPoint(x, y) as HTMLElement | null
    const target = el?.closest('[data-row]') as HTMLElement | null
    if (!target) return null
    const r = Number(target.dataset.row)
    const c = Number(target.dataset.col)
    if (Number.isNaN(r) || Number.isNaN(c)) return null
    return [r, c]
  }

  function lineBetween(a: Cell, b: Cell): Cell[] {
    const dr = Math.sign(b[0] - a[0])
    const dc = Math.sign(b[1] - a[1])
    const rowDiff = Math.abs(b[0] - a[0])
    const colDiff = Math.abs(b[1] - a[1])
    if (dr !== 0 && dc !== 0 && rowDiff !== colDiff) return [a]
    const steps = Math.max(rowDiff, colDiff)
    const cells: Cell[] = []
    for (let i = 0; i <= steps; i++) cells.push([a[0] + dr * i, a[1] + dc * i])
    return cells
  }

  useEffect(() => {
    if (!selecting) return

    function handleMove(e: PointerEvent) {
      if (!start) return
      const cell = cellFromPoint(e.clientX, e.clientY)
      if (cell) setCurrent(lineBetween(start, cell))
    }

    function handleUp() {
      setSelecting(false)
      if (current.length > 1) {
        const forward = current.map(([r, c]) => puzzle.grid[r][c]).join('')
        const backward = [...forward].reverse().join('')
        const match = puzzle.placed.find(
          (p) => !found.has(p.word) && (p.word === forward || p.word === backward),
        )
        if (match) {
          const nextFound = new Set(found).add(match.word)
          setFound(nextFound)
          setFoundCells((f) => {
            const next = new Set(f)
            match.cells.forEach((cell) => next.add(cellKey(cell)))
            return next
          })
          if (typeof navigator !== 'undefined' && 'vibrate' in navigator) navigator.vibrate(30)
          finishRun(nextFound.size)
        }
      }
      setCurrent([])
      setStart(null)
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selecting, start, current, found, puzzle])

  const currentSet = useMemo(() => new Set(current.map(cellKey)), [current])

  const cellColor = useMemo(() => {
    const map = new Map<string, string>()
    puzzle.placed.forEach((p, i) => {
      const color = TRAIL_COLORS[i % TRAIL_COLORS.length]
      p.cells.forEach((cell) => {
        const key = cellKey(cell)
        if (!map.has(key)) map.set(key, color)
      })
    })
    return map
  }, [puzzle])

  function useHint() {
    if (won) return
    const remaining = puzzle.placed.filter((p) => !found.has(p.word))
    if (remaining.length === 0) return
    const shortest = remaining.reduce((a, b) => (a.word.length <= b.word.length ? a : b))
    const nextFound = new Set(found).add(shortest.word)
    setFound(nextFound)
    setFoundCells((f) => {
      const next = new Set(f)
      shortest.cells.forEach((cell) => next.add(cellKey(cell)))
      return next
    })
    hintsRef.current += 1
    setHintsUsed(hintsRef.current)
    addToast(`💡 Pista usada: te regalamos "${shortest.word}"`, 'info')
    finishRun(nextFound.size)
  }

  const nextStage = stagesForVolume(stage.volumeId).find((s) => s.order > stage.order && s.status === 'ready')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-center font-ui text-sm text-parchment/65">
        ⏱️ {formatTime(seconds)} · Encontradas: {found.size}/{totalWords}
        {hintsUsed > 0 ? ` · Pistas: ${hintsUsed}` : ''}
      </p>

      {result && (
        <ResultPanel
          stars={result.stars}
          seconds={seconds}
          hintsUsed={hintsUsed}
          isNewBest={result.isNewBest}
          onRestart={restart}
          onNext={nextStage ? { label: 'Siguiente estación →', onClick: () => navigate(`/games/sopa-de-letras/reto/${nextStage.id}`) } : undefined}
          onBackToPath={() => navigate(`/games/sopa-de-letras/camino/${stage.volumeId}?justCompleted=${stage.id}`)}
        />
      )}

      <div
        className="mx-auto grid touch-none select-none gap-0.5 rounded-xl border border-sg-gold/15 bg-navy-mid p-2"
        style={{ gridTemplateColumns: `repeat(${puzzle.size}, minmax(0, 1fr))`, maxWidth: 460 }}
      >
        {puzzle.grid.map((row, r) =>
          row.map((letter, c) => {
            const key = `${r},${c}`
            const isFound = foundCells.has(key)
            const isCurrent = currentSet.has(key)
            const color = cellColor.get(key)
            return (
              <button
                key={key}
                type="button"
                data-row={r}
                data-col={c}
                onPointerDown={() => {
                  setSelecting(true)
                  setStart([r, c])
                  setCurrent([[r, c]])
                }}
                style={isFound && color ? { backgroundColor: `${color}55`, color } : undefined}
                className={`flex aspect-square items-center justify-center rounded-sm font-ui text-[10px] font-bold transition sm:text-sm ${
                  isFound ? '' : isCurrent ? 'bg-sg-gold text-ink' : 'text-parchment/85 hover:bg-navy-light'
                }`}
              >
                {letter}
              </button>
            )
          }),
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {puzzle.placed.map((p) => (
          <span
            key={p.word}
            title={p.hint}
            className={`rounded-full border px-3 py-1 font-ui text-xs font-semibold transition ${
              found.has(p.word)
                ? 'border-jade/40 bg-jade/15 text-jade line-through'
                : 'border-sg-gold/25 bg-navy-mid text-parchment/75'
            }`}
          >
            {p.emoji} {p.word}
          </span>
        ))}
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
