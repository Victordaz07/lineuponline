/**
 * Generador de números pseudoaleatorios con semilla (mulberry32).
 * Se usa para que el "reto diario" produzca el MISMO puzzle para todos
 * los jugadores en un mismo día.
 */

/** PRNG determinístico. Devuelve una función que da números en [0, 1). */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Hash FNV-1a de una cadena a entero de 32 bits (para semillas estables). */
export function hashSeed(str: string): number {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Clave de día natural YYYY-MM-DD en hora local. */
export function dayKey(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/** Días naturales entre dos claves YYYY-MM-DD (b - a). */
export function daysBetween(a: string, b: string): number {
  const [ay, am, ad] = a.split('-').map(Number)
  const [by, bm, bd] = b.split('-').map(Number)
  const da = Date.UTC(ay, am - 1, ad)
  const db = Date.UTC(by, bm - 1, bd)
  return Math.round((db - da) / 86_400_000)
}

/** RNG determinístico a partir de una cadena semilla. */
export function seededRng(seed: string): () => number {
  return mulberry32(hashSeed(seed))
}
