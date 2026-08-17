import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useToastStore } from '@/stores/toastStore'
import { GameLayout } from '../components/GameLayout'
import { wordsByCategory } from '../data/wordBank'
import { calcStars, DAILY_STAGE, getStage, WORD_SEARCH_STAGES, type WordSearchStage } from '../data/wordSearchStages'
import { cellKey, generateWordSearch, type Cell, type WordSearchPuzzle } from '../lib/generateWordSearch'
import { dayKey, seededRng } from '../lib/rng'
import { useWordSearchStore } from '../store/wordSearchStore'

const DAILY_CATEGORIES = ['virtudes', 'personajes', 'lugares', 'ordenanzas', 'escrituras'] as const

/** Paleta de colores para el "rastro" de cada palabra encontrada. */
const TRAIL_COLORS = ['#E8C87A', '#7FD1AE', '#7FB8D9', '#E29B7D', '#C792EA', '#F2A6B3', '#9AD1D4', '#D9C77F']

function dailyCategoryForToday(): (typeof DAILY_CATEGORIES)[number] {
  const rng = seededRng(`daily-cat-${dayKey()}`)
  return DAILY_CATEGORIES[Math.floor(rng() * DAILY_CATEGORIES.length)]
}

function formatTime(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function buildPuzzleFor(stage: WordSearchStage, rng?: () => number): WordSearchPuzzle {
  return generateWordSearch({
    size: stage.size,
    words: wordsByCategory(stage.category),
    count: stage.wordCount,
    allowDiagonal: stage.allowDiagonal,
    allowReverse: stage.allowReverse,
    rng,
  })
}

type WordSearchPlayInnerProps = {
  isDaily: boolean
  stageId?: string
}

/**
 * Juego real. Se remonta por completo (vía `key` en el export por defecto)
 * cada vez que cambia la etapa o el modo diario, así ningún estado de la
 * ronda anterior (tiempo, pistas, palabras encontradas) se filtra a la nueva.
 */
function WordSearchPlayInner({ isDaily, stageId }: WordSearchPlayInnerProps) {
  const navigate = useNavigate()
  const addToast = useToastStore((s) => s.addToast)
  const completeStage = useWordSearchStore((s) => s.completeStage)
  const completeDaily = useWordSearchStore((s) => s.completeDaily)

  const stage = isDaily ? null : getStage(stageId ?? '')

  const dailyStage: WordSearchStage | null = useMemo(() => {
    if (!isDaily) return null
    const category = dailyCategoryForToday()
    return { id: 'diario', order: 0, title: 'Reto diario', emoji: '📅', category, ...DAILY_STAGE }
  }, [isDaily])

  const activeStage = stage ?? dailyStage

  const puzzle = useMemo(() => {
    if (!activeStage) return null
    if (isDaily) return buildPuzzleFor(activeStage, seededRng(`daily-${dayKey()}`))
    return buildPuzzleFor(activeStage)
  }, [activeStage, isDaily])

  const [found, setFound] = useState<Set<string>>(new Set())
  const [foundCells, setFoundCells] = useState<Set<string>>(new Set())
  const [selecting, setSelecting] = useState(false)
  const [start, setStart] = useState<Cell | null>(null)
  const [current, setCurrent] = useState<Cell[]>([])
  const [seconds, setSeconds] = useState(0)
  const [hintsUsed, setHintsUsed] = useState(0)
  const [result, setResult] = useState<{ stars: number; isNewBest: boolean } | null>(null)

  // Fuentes de verdad para el cálculo de finalización: los refs nunca quedan
  // obsoletos por closures viejos de un handler creado en un render anterior.
  const secondsRef = useRef(0)
  const hintsRef = useRef(0)
  const completedRef = useRef(false)

  const totalWords = puzzle?.placed.length ?? 0
  const won = result !== null

  useEffect(() => {
    if (!puzzle || won) return
    const t = setInterval(() => {
      secondsRef.current += 1
      setSeconds(secondsRef.current)
    }, 1000)
    return () => clearInterval(t)
  }, [puzzle, won])

  /** Se llama desde el handler que produce la última palabra (arrastre o pista). */
  const finishRun = useCallback(
    (newFoundSize: number) => {
      if (completedRef.current || !activeStage || newFoundSize < totalWords) return
      completedRef.current = true
      const stars = calcStars(secondsRef.current, hintsRef.current, activeStage.starTimes)
      const outcome = isDaily
        ? completeDaily(secondsRef.current, hintsRef.current, totalWords, stars)
        : completeStage(activeStage.id, secondsRef.current, hintsRef.current, totalWords, stars)
      setResult({ stars: outcome.stars, isNewBest: outcome.isNewBest })
      outcome.newAchievements.forEach((a) => {
        addToast(`${a.emoji} Logro desbloqueado: ${a.title}`, 'success')
      })
    },
    [activeStage, totalWords, isDaily, completeDaily, completeStage, addToast],
  )

  function restart() {
    completedRef.current = false
    secondsRef.current = 0
    hintsRef.current = 0
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
    // solo líneas rectas u horizontales/verticales/diagonales perfectas
    if (dr !== 0 && dc !== 0 && rowDiff !== colDiff) return [a]
    const steps = Math.max(rowDiff, colDiff)
    const cells: Cell[] = []
    for (let i = 0; i <= steps; i++) {
      cells.push([a[0] + dr * i, a[1] + dc * i])
    }
    return cells
  }

  useEffect(() => {
    if (!selecting || !puzzle) return

    function handleMove(e: PointerEvent) {
      if (!start) return
      const cell = cellFromPoint(e.clientX, e.clientY)
      if (cell) setCurrent(lineBetween(start, cell))
    }

    function handleUp() {
      setSelecting(false)
      if (current.length > 1 && puzzle) {
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
  }, [selecting, start, current, found, puzzle, finishRun])

  const currentSet = useMemo(() => new Set(current.map(cellKey)), [current])

  /** Color de rastro por celda, según a qué palabra encontrada pertenece. */
  const cellColor = useMemo(() => {
    const map = new Map<string, string>()
    if (!puzzle) return map
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
    if (!puzzle || won) return
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

  if (!isDaily && !stage) {
    return (
      <GameLayout title="Sopa de letras" emoji="🔎" backTo="/games/sopa-de-letras" backLabel="Etapas">
        <p className="text-center font-ui text-sm text-parchment/70">Esa etapa no existe.</p>
      </GameLayout>
    )
  }

  if (!puzzle || !activeStage) return null

  const title = isDaily ? 'Reto diario' : activeStage.title
  const emoji = activeStage.emoji
  const currentStageIdx = stage ? WORD_SEARCH_STAGES.findIndex((s) => s.id === stage.id) : -1
  const nextStage = currentStageIdx >= 0 ? WORD_SEARCH_STAGES[currentStageIdx + 1] : undefined

  return (
    <GameLayout
      title={title}
      emoji={emoji}
      backTo="/games/sopa-de-letras"
      backLabel="Etapas"
      status={`⏱️ ${formatTime(seconds)} · Encontradas: ${found.size}/${totalWords}${
        hintsUsed > 0 ? ` · Pistas: ${hintsUsed}` : ''
      }`}
      onRestart={restart}
    >
      {won && result && (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-sg-gold/40 bg-navy-mid p-6 text-center shadow-lg">
          <p className="text-4xl" aria-hidden="true">
            🎉
          </p>
          <p className="font-display text-xl font-bold text-parchment">¡Etapa completada!</p>
          <div className="flex gap-1 text-3xl" aria-label={`${result.stars} de 3 estrellas`}>
            {[1, 2, 3].map((n) => (
              <span key={n} aria-hidden="true">
                {n <= result.stars ? '⭐' : '☆'}
              </span>
            ))}
          </div>
          <p className="font-ui text-sm text-parchment/70">
            Tiempo: {formatTime(seconds)}
            {hintsUsed > 0 ? ` · ${hintsUsed} pista${hintsUsed > 1 ? 's' : ''} usada${hintsUsed > 1 ? 's' : ''}` : ''}
            {result.isNewBest ? ' · ¡Nuevo mejor resultado!' : ''}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={restart}
              className="rounded-lg border border-sg-gold bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-ink shadow-sm transition hover:brightness-95"
            >
              Jugar de nuevo
            </button>
            {!isDaily && nextStage && (
              <button
                type="button"
                onClick={() => navigate(`/games/sopa-de-letras/etapa/${nextStage.id}`)}
                className="rounded-lg border border-jade/50 bg-jade/20 px-4 py-2 font-ui text-sm font-semibold text-jade transition hover:bg-jade/30"
              >
                Siguiente etapa →
              </button>
            )}
            <button
              type="button"
              onClick={() => navigate('/games/sopa-de-letras')}
              className="rounded-lg border border-sg-gold/40 bg-transparent px-4 py-2 font-ui text-sm font-semibold text-sg-gold-light transition hover:bg-sg-gold/10"
            >
              Volver al mapa
            </button>
          </div>
        </div>
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
                  isFound
                    ? ''
                    : isCurrent
                      ? 'bg-sg-gold text-ink'
                      : 'text-parchment/85 hover:bg-navy-light'
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
        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={useHint}
            className="rounded-full border border-sg-gold/40 bg-transparent px-4 py-1.5 font-ui text-xs font-semibold text-sg-gold-light transition hover:bg-sg-gold/10"
          >
            💡 Pista
          </button>
          <p className="text-center font-ui text-xs text-parchment/50">
            Arrastra desde la primera hasta la última letra de cada palabra. Usar pistas reduce las estrellas que
            ganas.
          </p>
        </div>
      )}
    </GameLayout>
  )
}

/**
 * Envoltorio de ruta: lee la etapa de la URL y fuerza un remontaje completo
 * (`key`) al cambiar de etapa o de modo diario, para que ninguna ronda
 * anterior deje estado residual (tiempo, pistas, palabras encontradas).
 */
export default function WordSearchPlay() {
  const { stageId } = useParams<{ stageId?: string }>()
  const isDaily = !stageId
  return <WordSearchPlayInner key={stageId ?? 'diario'} isDaily={isDaily} stageId={stageId} />
}
