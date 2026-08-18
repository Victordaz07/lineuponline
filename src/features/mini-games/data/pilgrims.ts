/**
 * Los 8 peregrinos seleccionables que representan al jugador en el Camino.
 * Misma importancia visual, misma vestimenta base, mismas 3 poses — la
 * diversidad está en tono de piel, cabello y color de capa, sin asociar
 * estadísticas ni ventajas a ninguno.
 */

export type PilgrimPose = 'reposo' | 'caminando' | 'celebrando'

export type Pilgrim = {
  id: string
  name: string
  /** Color identificador (no decorativo únicamente — se usa como acento secundario). */
  accentColor: string
}

export const PILGRIMS: Pilgrim[] = [
  { id: 'hombre-01', name: 'Josías', accentColor: '#2F6E64' },
  { id: 'hombre-02', name: 'Kwan', accentColor: '#B5482F' },
  { id: 'hombre-03', name: 'Arjun', accentColor: '#2C4C8C' },
  { id: 'hombre-04', name: 'Mateo', accentColor: '#3B6B3E' },
  { id: 'mujer-01', name: 'Amara', accentColor: '#7A3F6D' },
  { id: 'mujer-02', name: 'Mei', accentColor: '#3F8F5C' },
  { id: 'mujer-03', name: 'Priya', accentColor: '#4B4A9E' },
  { id: 'mujer-04', name: 'Camila', accentColor: '#1F9C9C' },
]

export const DEFAULT_PILGRIM_ID = 'hombre-01'

export function pilgrimSpriteSrc(pilgrimId: string, pose: PilgrimPose): string {
  return `/assets/camino/avatar/${pilgrimId}-${pose}.webp`
}

export function getPilgrim(id: string): Pilgrim {
  return PILGRIMS.find((p) => p.id === id) ?? PILGRIMS[0]
}
