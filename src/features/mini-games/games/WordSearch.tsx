import { useEffect, useMemo, useState } from 'react'
import { GameLayout } from '../components/GameLayout'
import { pickRandomWords } from '../data/wordBank'

const GRID_SIZE = 10
const WORD_COUNT = 7
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const DIRECTIONS: [number, number][] = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
]

type Cell = [number, number]

type PlacedWord = {
  word: string
  cells: Cell[]
}

function cellKey([r, c]: Cell) {
  return `${r},${c}`
}

function buildPuzzle() {
  const words = pickRandomWords(WORD_COUNT).map((w) => w.word)
  const grid: string[][] = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''))
  const placed: PlacedWord[] = []

  for (const word of words) {
    let ok = false
    for (let attempt = 0; attempt < 300 && !ok; attempt++) {
      const [dr, dc] = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)]
      const row = Math.floor(Math.random() * GRID_SIZE)
      const col = Math.floor(Math.random() * GRID_SIZE)
      const endRow = row + dr * (word.length - 1)
      const endCol = col + dc * (word.length - 1)
      if (endRow < 0 || endRow >= GRID_SIZE || endCol < 0 || endCol >= GRID_SIZE) continue

      const cells: Cell[] = []
      let fits = true
      for (let i = 0; i < word.length; i++) {
        const r = row + dr * i
        const c = col + dc * i
        const existing = grid[r][c]
        if (existing && existing !== word[i]) {
          fits = false
          break
        }
        cells.push([r, c])
      }
      if (!fits) continue

      cells.forEach(([r, c], i) => {
        grid[r][c] = word[i]
      })
      placed.push({ word, cells })
      ok = true
    }
  }

  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (!grid[r][c]) grid[r][c] = LETTERS[Math.floor(Math.random() * LETTERS.length)]
    }
  }

  return { grid, placed }
}

/** Sopa de letras: encuentra las palabras escondidas en la grilla. */
export default function WordSearch() {
  const [puzzle, setPuzzle] = useState(() => buildPuzzle())
  const [found, setFound] = useState<Set<string>>(new Set())
  const [foundCells, setFoundCells] = useState<Set<string>>(new Set())
  const [selecting, setSelecting] = useState(false)
  const [start, setStart] = useState<Cell | null>(null)
  const [current, setCurrent] = useState<Cell[]>([])

  const won = puzzle.placed.length > 0 && found.size === puzzle.placed.length

  function restart() {
    setPuzzle(buildPuzzle())
    setFound(new Set())
    setFoundCells(new Set())
    setSelecting(false)
    setStart(null)
    setCurrent([])
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
          setFound((f) => new Set(f).add(match.word))
          setFoundCells((f) => {
            const next = new Set(f)
            match.cells.forEach((cell) => next.add(cellKey(cell)))
            return next
          })
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
  }, [selecting, start, current, found, puzzle])

  const currentSet = useMemo(() => new Set(current.map(cellKey)), [current])

  return (
    <GameLayout
      title="Sopa de letras"
      emoji="🔎"
      status={`Encontradas: ${found.size}/${puzzle.placed.length}`}
      onRestart={restart}
    >
      {won && (
        <div className="mb-1 flex flex-col items-center gap-2 rounded-2xl border border-jade/40 bg-jade/10 p-5 text-center">
          <p className="text-3xl" aria-hidden="true">
            🎉
          </p>
          <p className="font-display text-lg font-bold text-parchment">¡Encontraste todas las palabras!</p>
          <button
            type="button"
            onClick={restart}
            className="rounded-lg border border-sg-gold bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-ink shadow-sm transition hover:brightness-95"
          >
            Jugar de nuevo
          </button>
        </div>
      )}

      <div
        className="mx-auto grid touch-none select-none gap-0.5 rounded-xl border border-sg-gold/15 bg-navy-mid p-2"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`, maxWidth: 420 }}
      >
        {puzzle.grid.map((row, r) =>
          row.map((letter, c) => {
            const key = `${r},${c}`
            const isFound = foundCells.has(key)
            const isCurrent = currentSet.has(key)
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
                className={`flex aspect-square items-center justify-center rounded-sm font-ui text-[11px] font-bold transition sm:text-sm ${
                  isFound
                    ? 'bg-jade/40 text-ink'
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
            className={`rounded-full border px-3 py-1 font-ui text-xs font-semibold transition ${
              found.has(p.word)
                ? 'border-jade/40 bg-jade/15 text-jade line-through'
                : 'border-sg-gold/25 bg-navy-mid text-parchment/75'
            }`}
          >
            {p.word}
          </span>
        ))}
      </div>
      <p className="text-center font-ui text-xs text-parchment/50">
        Arrastra desde la primera hasta la última letra de cada palabra.
      </p>
    </GameLayout>
  )
}
