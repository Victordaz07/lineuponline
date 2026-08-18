/**
 * Generador de sopas de letras parametrizable y seedable.
 * Recibe un `rng` (opcionalmente con semilla) para poder reproducir el mismo
 * tablero — clave para el reto diario.
 */

export type Cell = [number, number]

/** Forma mínima que necesita una palabra candidata (WordEntry y StageWordEntry son compatibles). */
export type WordCandidate = {
  word: string
  hint: string
  emoji: string
}

export type PlacedWord = {
  word: string
  hint: string
  emoji: string
  cells: Cell[]
}

export type WordSearchPuzzle = {
  grid: string[][]
  placed: PlacedWord[]
  size: number
}

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const DIR_ORTHOGONAL: Cell[] = [
  [0, 1],
  [1, 0],
]
const DIR_DIAGONAL: Cell[] = [
  [1, 1],
  [1, -1],
]

export function cellKey([r, c]: Cell): string {
  return `${r},${c}`
}

export type GenerateOptions = {
  size: number
  /** Palabras candidatas (ya filtradas por categoría o curadas a mano). */
  words: WordCandidate[]
  /** Cuántas colocar como máximo. */
  count: number
  /** Permitir diagonales. */
  allowDiagonal: boolean
  /** Permitir colocar palabras al revés. */
  allowReverse: boolean
  /** Fuente de aleatoriedad (con semilla para reto diario). */
  rng?: () => number
}

/**
 * Construye un tablero colocando tantas palabras como sea posible.
 * Las palabras se recortan a las que caben en `size`.
 */
export function generateWordSearch(opts: GenerateOptions): WordSearchPuzzle {
  const { size, allowDiagonal, allowReverse, count } = opts
  const rng = opts.rng ?? Math.random

  const baseDirs = allowDiagonal ? [...DIR_ORTHOGONAL, ...DIR_DIAGONAL] : [...DIR_ORTHOGONAL]

  const candidates = opts.words
    .filter((w) => w.word.length <= size)
    .slice()
    .sort((a, b) => b.word.length - a.word.length) // primero las largas: colocan mejor

  const grid: string[][] = Array.from({ length: size }, () => Array<string>(size).fill(''))
  const placed: PlacedWord[] = []

  for (const entry of candidates) {
    if (placed.length >= count) break
    const word = entry.word
    let ok = false

    // 4000 intentos: barato por intento y elimina fallos aleatorios de
    // colocación en grids grandes (24×24+) con muchas palabras.
    for (let attempt = 0; attempt < 4000 && !ok; attempt++) {
      const [dr0, dc0] = baseDirs[Math.floor(rng() * baseDirs.length)]
      const reversed = allowReverse && rng() < 0.5
      const dr = reversed ? -dr0 : dr0
      const dc = reversed ? -dc0 : dc0

      const row = Math.floor(rng() * size)
      const col = Math.floor(rng() * size)
      const endRow = row + dr * (word.length - 1)
      const endCol = col + dc * (word.length - 1)
      if (endRow < 0 || endRow >= size || endCol < 0 || endCol >= size) continue

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
      placed.push({ word, hint: entry.hint, emoji: entry.emoji, cells })
      ok = true
    }
  }

  // Rellena huecos con letras al azar (seedable).
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (!grid[r][c]) grid[r][c] = LETTERS[Math.floor(rng() * LETTERS.length)]
    }
  }

  return { grid, placed, size }
}
