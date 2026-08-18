/**
 * Los 5 volúmenes de escritura que forman el Camino. Cada uno es un tablero
 * vertical independiente con su propio mapa ilustrado y paleta de identidad.
 */

export type VolumeId =
  | 'libro-mormon'
  | 'antiguo-testamento'
  | 'nuevo-testamento'
  | 'doctrina-convenios'
  | 'perla-gran-precio'

export type ScriptureVolume = {
  id: VolumeId
  order: number
  title: string
  subtitle: string
  emoji: string
  mapSrc: string
  /** Color de acento para tarjetas y detalles de UI de este volumen. */
  accentColor: string
}

export const SCRIPTURE_VOLUMES: ScriptureVolume[] = [
  {
    id: 'libro-mormon',
    order: 1,
    title: 'Libro de Mormón',
    subtitle: 'Nefi, el barco, y otro testamento de Cristo',
    emoji: '🌿',
    mapSrc: '/assets/camino/mapas/libro-mormon.webp',
    accentColor: '#3F8F5C',
  },
  {
    id: 'antiguo-testamento',
    order: 2,
    title: 'Antiguo Testamento',
    subtitle: 'Desde la Creación hasta los profetas de Israel',
    emoji: '🏜️',
    mapSrc: '/assets/camino/mapas/antiguo-testamento.webp',
    accentColor: '#B8923A',
  },
  {
    id: 'nuevo-testamento',
    order: 3,
    title: 'Nuevo Testamento',
    subtitle: 'La vida y el ministerio del Salvador',
    emoji: '⛵',
    mapSrc: '/assets/camino/mapas/nuevo-testamento.webp',
    accentColor: '#2C6E8C',
  },
  {
    id: 'doctrina-convenios',
    order: 4,
    title: 'Doctrina y Convenios',
    subtitle: 'La Restauración del Evangelio',
    emoji: '🕊️',
    mapSrc: '/assets/camino/mapas/doctrina-convenios.webp',
    accentColor: '#7A6B2F',
  },
  {
    id: 'perla-gran-precio',
    order: 5,
    title: 'Perla de Gran Precio',
    subtitle: 'Desde antes del mundo hasta Abraham y Moisés',
    emoji: '✨',
    mapSrc: '/assets/camino/mapas/perla-gran-precio.webp',
    accentColor: '#5B4B9E',
  },
]

export function getVolume(id: string): ScriptureVolume | undefined {
  return SCRIPTURE_VOLUMES.find((v) => v.id === id)
}
