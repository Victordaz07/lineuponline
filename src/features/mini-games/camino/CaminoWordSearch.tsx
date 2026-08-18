import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToastStore } from '@/stores/toastStore'
import type { CaminoAchievement } from '../data/caminoAchievements'
import { getPilgrim, pilgrimSpriteSrc } from '../data/pilgrims'
import { getVolume } from '../data/scriptureVolumes'
import type { CaminoStage, WordSearchChallenge } from '../types/camino'
import { calcStars } from '../lib/stars'
import { cellKey, generateWordSearch, type Cell, type WordSearchPuzzle } from '../lib/generateWordSearch'
import { useCaminoStore } from '../store/caminoStore'
import { achievementToastMessage } from '../lib/achievementToast'
import { playHintChime, playSelectionTick, playWordFoundChime } from '../lib/chime'
import { ResultPanel } from './ResultPanel'

const TRAIL_COLORS = ['#E8C87A', '#7FD1AE', '#7FB8D9', '#E29B7D', '#C792EA', '#F2A6B3']

function formatTime(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function difficultyFor(stage: CaminoStage, challenge: WordSearchChallenge) {
  const early = stage.order <= 4
  const advanced = stage.order >= 10
  return {
    count: challenge.words.length,
    size: challenge.size,
    allowDiagonal: challenge.allowDiagonal,
    allowReverse: challenge.allowReverse,
    starTimes: stage.starTimes,
    label: early ? 'Exploración' : advanced ? 'Maestría' : 'Travesía',
  }
}

function lineBetween(a: Cell, b: Cell): Cell[] {
  const dr = Math.sign(b[0] - a[0])
  const dc = Math.sign(b[1] - a[1])
  const rowDiff = Math.abs(b[0] - a[0])
  const colDiff = Math.abs(b[1] - a[1])
  if (dr !== 0 && dc !== 0 && rowDiff !== colDiff) return [a]
  const steps = Math.max(rowDiff, colDiff)
  return Array.from({ length: steps + 1 }, (_, i) => [a[0] + dr * i, a[1] + dc * i] as Cell)
}

function SelectionTrail({ cells, size }: { cells: Cell[]; size: number }) {
  if (cells.length < 2) return null
  const first = cells[0]
  const last = cells[cells.length - 1]
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <line
        x1={first[1] + 0.5}
        y1={first[0] + 0.5}
        x2={last[1] + 0.5}
        y2={last[0] + 0.5}
        stroke="#E8C87A"
        strokeWidth="0.72"
        strokeLinecap="round"
        className="drop-shadow-[0_0_5px_rgba(232,200,122,0.9)]"
      />
    </svg>
  )
}

function WordBurst({ word }: { word: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-hidden" aria-live="polite">
      <div className="motion-safe:animate-[word-found-pop_0.85s_ease-out_forwards] rounded-full border border-sg-gold-bright/60 bg-navy-deep/90 px-5 py-2 font-display text-lg font-bold text-sg-gold-bright shadow-[0_0_32px_rgba(232,200,122,0.45)]">
        ✦ {word} ✦
      </div>
      {Array.from({ length: 10 }, (_, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-sg-gold-bright motion-safe:animate-[word-spark_0.8s_ease-out_forwards]"
          style={{ '--spark-angle': `${i * 36}deg`, animationDelay: `${i * 18}ms` } as CSSProperties}
        />
      ))}
    </div>
  )
}

export type CaminoWordSearchProps = {
  stage: CaminoStage
  challenge: WordSearchChallenge
}

export function CaminoWordSearch({ stage, challenge }: CaminoWordSearchProps) {
  const navigate = useNavigate()
  const addToast = useToastStore((s) => s.addToast)
  const completeStage = useCaminoStore((s) => s.completeStage)
  const selectedPilgrimId = useCaminoStore((s) => s.selectedPilgrimId)
  const profile = useMemo(() => difficultyFor(stage, challenge), [stage, challenge])

  const [runId, setRunId] = useState(0)
  const puzzle = useMemo<WordSearchPuzzle>(
    () => {
      // `runId` fuerza una nueva distribución aleatoria al reiniciar.
      void runId
      return generateWordSearch({
        size: profile.size,
        words: challenge.words,
        count: profile.count,
        allowDiagonal: profile.allowDiagonal,
        allowReverse: profile.allowReverse,
      })
    },
    [challenge.words, profile, runId],
  )

  const [found, setFound] = useState<Set<string>>(new Set())
  const [foundCells, setFoundCells] = useState<Set<string>>(new Set())
  const [selecting, setSelecting] = useState(false)
  const [start, setStart] = useState<Cell | null>(null)
  const [current, setCurrent] = useState<Cell[]>([])
  const [seconds, setSeconds] = useState(0)
  const [hintsUsed, setHintsUsed] = useState(0)
  const [hintedWord, setHintedWord] = useState<string | null>(null)
  const [hintCells, setHintCells] = useState<Cell[]>([])
  const [lastFound, setLastFound] = useState<string | null>(null)
  const [streak, setStreak] = useState(0)
  const [result, setResult] = useState<{ stars: number; isNewBest: boolean; newAchievements: CaminoAchievement[] } | null>(null)

  const secondsRef = useRef(0)
  const hintsRef = useRef(0)
  const completedRef = useRef(false)
  const streakTimerRef = useRef<number | null>(null)
  const totalWords = puzzle.placed.length
  const won = result !== null
  const progress = totalWords ? Math.round((found.size / totalWords) * 100) : 0
  const volume = getVolume(stage.volumeId)
  const pilgrim = getPilgrim(selectedPilgrimId)

  useEffect(() => {
    if (won) return
    const timer = window.setInterval(() => {
      secondsRef.current += 1
      setSeconds(secondsRef.current)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [won])

  useEffect(() => () => {
    if (streakTimerRef.current) window.clearTimeout(streakTimerRef.current)
  }, [])

  function finishRun(newFoundSize: number) {
    if (completedRef.current || newFoundSize < totalWords) return
    completedRef.current = true
    const stars = calcStars(secondsRef.current, hintsRef.current, profile.starTimes)
    const outcome = completeStage(stage.id, secondsRef.current, hintsRef.current, stars)
    setResult({ stars: outcome.stars, isNewBest: outcome.isNewBest, newAchievements: outcome.newAchievements })
    outcome.newAchievements.forEach((achievement) => addToast(achievementToastMessage(achievement), 'success'))
  }

  function registerFound(word: string, cells: Cell[]) {
    const nextFound = new Set(found).add(word)
    setFound(nextFound)
    setFoundCells((previous) => {
      const next = new Set(previous)
      cells.forEach((cell) => next.add(cellKey(cell)))
      return next
    })
    setHintedWord(null)
    setHintCells([])
    setLastFound(word)
    window.setTimeout(() => setLastFound(null), 850)
    setStreak((previous) => {
      const next = previous + 1
      playWordFoundChime(next)
      return next
    })
    if (streakTimerRef.current) window.clearTimeout(streakTimerRef.current)
    streakTimerRef.current = window.setTimeout(() => setStreak(0), 5000)
    if ('vibrate' in navigator) navigator.vibrate([28, 22, 45])
    finishRun(nextFound.size)
  }

  function restart() {
    completedRef.current = false
    secondsRef.current = 0
    hintsRef.current = 0
    setRunId((value) => value + 1)
    setFound(new Set())
    setFoundCells(new Set())
    setSelecting(false)
    setStart(null)
    setCurrent([])
    setSeconds(0)
    setHintsUsed(0)
    setHintedWord(null)
    setHintCells([])
    setLastFound(null)
    setStreak(0)
    setResult(null)
  }

  function cellFromPoint(x: number, y: number): Cell | null {
    const element = document.elementFromPoint(x, y) as HTMLElement | null
    const target = element?.closest('[data-row]') as HTMLElement | null
    if (!target) return null
    const row = Number(target.dataset.row)
    const column = Number(target.dataset.col)
    return Number.isNaN(row) || Number.isNaN(column) ? null : [row, column]
  }

  useEffect(() => {
    if (!selecting) return
    function handleMove(event: PointerEvent) {
      if (!start) return
      const cell = cellFromPoint(event.clientX, event.clientY)
      if (cell) setCurrent(lineBetween(start, cell))
    }
    function handleUp() {
      setSelecting(false)
      if (current.length > 1) {
        const forward = current.map(([row, column]) => puzzle.grid[row][column]).join('')
        const backward = [...forward].reverse().join('')
        const match = puzzle.placed.find((placed) => !found.has(placed.word) && (placed.word === forward || placed.word === backward))
        if (match) registerFound(match.word, match.cells)
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
    // registerFound uses the state snapshot that belongs to this gesture.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selecting, start, current, found, puzzle])

  const currentSet = useMemo(() => new Set(current.map(cellKey)), [current])
  const hintSet = useMemo(() => new Set(hintCells.map(cellKey)), [hintCells])
  const cellColor = useMemo(() => {
    const map = new Map<string, string>()
    puzzle.placed.forEach((placed, index) => {
      const color = TRAIL_COLORS[index % TRAIL_COLORS.length]
      placed.cells.forEach((cell) => {
        const key = cellKey(cell)
        if (!map.has(key)) map.set(key, color)
      })
    })
    return map
  }, [puzzle])

  function useHint() {
    if (won) return
    const remaining = puzzle.placed.filter((placed) => !found.has(placed.word))
    if (!remaining.length) return
    const target = remaining.reduce((left, right) => (left.word.length <= right.word.length ? left : right))
    hintsRef.current += 1
    setHintsUsed(hintsRef.current)
    playHintChime()
    if (hintedWord === target.word) {
      setHintCells(target.cells)
      addToast(`✨ Trazo revelado para ${target.word}`, 'info')
    } else {
      setHintedWord(target.word)
      setHintCells([target.cells[0]])
      addToast(`💡 Busca ${target.word} desde la letra iluminada`, 'info')
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <section
        className="relative isolate overflow-hidden rounded-3xl border border-sg-gold/30 bg-navy-mid shadow-[0_18px_50px_rgba(0,0,0,0.3)]"
        style={{ '--volume-accent': volume?.accentColor ?? '#B8923A' } as CSSProperties}
      >
        <div className="relative min-h-36 overflow-hidden px-4 py-4 sm:min-h-44 sm:px-6">
          {stage.sceneSrc ? <img src={stage.sceneSrc} alt="" className="absolute inset-0 h-full w-full object-cover" /> : null}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/25" />
          <div className="relative z-10 flex min-h-28 items-end justify-between gap-4 sm:min-h-36">
            <div className="max-w-sm">
              <p className="mb-1 font-ui text-[10px] font-bold uppercase tracking-[0.2em] text-sg-gold-bright">{profile.label} · Estación {stage.order}</p>
              <h2 className="font-display text-xl font-bold text-parchment sm:text-2xl">Tu misión</h2>
              <p className="mt-1 font-ui text-sm text-parchment/75">Descubre las palabras clave de esta historia y completa la escena.</p>
            </div>
            <img
              src={pilgrimSpriteSrc(selectedPilgrimId, lastFound ? 'celebrando' : 'reposo')}
              alt={`${pilgrim.name}, tu peregrino`}
              className={`w-20 shrink-0 drop-shadow-[0_8px_12px_rgba(0,0,0,0.55)] sm:w-24 ${lastFound ? 'motion-safe:animate-[pilgrim-cheer_0.65s_ease-out]' : 'motion-safe:animate-[pilgrim-breathe_2.8s_ease-in-out_infinite]'}`}
            />
          </div>
        </div>

        <div className="border-t border-white/10 bg-navy-deep/90 p-3 sm:p-5">
          <div className="mb-3 grid grid-cols-[1fr_auto_auto] items-center gap-2">
            <div>
              <div className="mb-1 flex items-center justify-between font-ui text-[11px] font-semibold text-parchment/65">
                <span>{found.size} de {totalWords} halladas</span><span>{progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-sg-gold to-sg-gold-bright transition-[width] duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center">
              <span className="block font-ui text-[9px] uppercase tracking-wide text-parchment/45">Tiempo</span>
              <span className="font-ui text-sm font-bold tabular-nums text-parchment">{formatTime(seconds)}</span>
            </div>
            <div className={`rounded-xl border px-3 py-2 text-center transition ${streak >= 2 ? 'border-sg-gold-bright/60 bg-sg-gold/15' : 'border-white/10 bg-white/5'}`}>
              <span className="block font-ui text-[9px] uppercase tracking-wide text-parchment/45">Racha</span>
              <span className="font-ui text-sm font-bold text-sg-gold-bright">×{Math.max(streak, 1)}</span>
            </div>
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            {puzzle.placed.map((placed) => (
              <span
                key={placed.word}
                className={`shrink-0 rounded-full border px-2.5 py-1 font-ui text-[11px] font-semibold transition-all duration-300 ${
                  found.has(placed.word)
                    ? 'scale-95 border-jade/40 bg-jade/15 text-jade line-through opacity-65'
                    : hintedWord === placed.word
                      ? 'border-sg-gold-bright/70 bg-sg-gold/15 text-sg-gold-bright motion-safe:animate-pulse'
                      : 'border-white/10 bg-white/5 text-parchment/75'
                }`}
              >
                {placed.emoji} {placed.word}
              </span>
            ))}
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-2xl border border-sg-gold/20 bg-[radial-gradient(circle_at_50%_35%,rgba(232,200,122,0.08),transparent_65%)] p-2 shadow-inner sm:p-3">
            {lastFound ? <WordBurst word={lastFound} /> : null}
            <div className="relative grid h-full w-full touch-none select-none gap-[2px]" style={{ gridTemplateColumns: `repeat(${puzzle.size}, minmax(0, 1fr))` }}>
              {puzzle.grid.map((row, rowIndex) =>
                row.map((letter, columnIndex) => {
                  const key = `${rowIndex},${columnIndex}`
                  const isFound = foundCells.has(key)
                  const isCurrent = currentSet.has(key)
                  const isHint = hintSet.has(key)
                  const color = cellColor.get(key)
                  return (
                    <button
                      key={key}
                      type="button"
                      data-row={rowIndex}
                      data-col={columnIndex}
                      aria-label={`Letra ${letter}, fila ${rowIndex + 1}, columna ${columnIndex + 1}`}
                      onPointerDown={(event) => {
                        event.currentTarget.setPointerCapture(event.pointerId)
                        playSelectionTick()
                        setSelecting(true)
                        setStart([rowIndex, columnIndex])
                        setCurrent([[rowIndex, columnIndex]])
                      }}
                      style={isFound && color ? { backgroundColor: `${color}35`, color, boxShadow: `inset 0 0 0 1px ${color}65` } : undefined}
                      className={`flex aspect-square min-w-0 items-center justify-center rounded-[4px] font-ui font-extrabold transition-colors ${
                        puzzle.size >= 16 ? 'text-[8px] sm:text-[11px]' : puzzle.size >= 14 ? 'text-[9px] sm:text-xs' : 'text-[11px] sm:text-sm'
                      } ${isCurrent ? 'bg-sg-gold text-ink' : isHint ? 'bg-sg-gold-bright text-ink motion-safe:animate-pulse' : isFound ? '' : 'bg-white/[0.035] text-parchment/90 hover:bg-white/10'}`}
                    >
                      {letter}
                    </button>
                  )
                }),
              )}
              <SelectionTrail cells={current} size={puzzle.size} />
            </div>
          </div>

          {!won ? (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <button type="button" onClick={useHint} className="rounded-full border border-sg-gold/40 bg-sg-gold/10 px-4 py-2 font-ui text-xs font-bold text-sg-gold-light transition hover:bg-sg-gold/20">
                💡 {hintedWord ? 'Revelar dirección' : 'Iluminar una letra'}
              </button>
              <span className="font-ui text-[11px] text-parchment/45">Las pistas reducen la puntuación · usadas: {hintsUsed}</span>
            </div>
          ) : null}
        </div>
      </section>

      {result ? (
        <ResultPanel
          stars={result.stars}
          seconds={seconds}
          hintsUsed={hintsUsed}
          isNewBest={result.isNewBest}
          newAchievements={result.newAchievements}
          onRestart={restart}
          onBackToPath={() => navigate(`/games/sopa-de-letras/camino/${stage.volumeId}?justCompleted=${stage.id}`)}
        />
      ) : null}

      <style>{`
        @keyframes word-found-pop { 0% { transform: scale(.45); opacity: 0; } 32% { transform: scale(1.08); opacity: 1; } 75% { transform: scale(1); opacity: 1; } 100% { transform: translateY(-18px) scale(.92); opacity: 0; } }
        @keyframes word-spark { 0% { transform: translate(-50%,-50%) rotate(var(--spark-angle)) translateX(8px) scale(1); opacity: 1; } 100% { transform: translate(-50%,-50%) rotate(var(--spark-angle)) translateX(92px) scale(0); opacity: 0; } }
        @keyframes pilgrim-cheer { 0% { transform: translateY(8px) scale(.92); } 55% { transform: translateY(-10px) scale(1.08) rotate(-2deg); } 100% { transform: none; } }
        @keyframes pilgrim-breathe { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
      `}</style>
    </div>
  )
}
