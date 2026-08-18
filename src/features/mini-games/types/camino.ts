import type { VolumeId } from '../data/scriptureVolumes'

/** Palabra candidata para un reto de sopa de letras curado por estación. */
export type StageWordEntry = {
  word: string
  hint: string
  emoji: string
}

export type WordSearchChallenge = {
  kind: 'word_search'
  words: StageWordEntry[]
  size: number
  allowDiagonal: boolean
  allowReverse: boolean
}

export type HangmanChallenge = {
  kind: 'hangman'
  word: string
  hint: string
}

export type ConnectPair = {
  left: string
  right: string
}

export type ConnectChallenge = {
  kind: 'connect'
  pairs: ConnectPair[]
}

export type StageChallenge = WordSearchChallenge | HangmanChallenge | ConnectChallenge

export type StagePosition = {
  /** Posición del nodo sobre el mapa, en % del ancho/alto de la imagen. */
  x: number
  y: number
}

export type CaminoStage = {
  id: string
  volumeId: VolumeId
  /** Orden dentro del volumen: 1 = primera estación (abajo), 8 = estación final (arriba). */
  order: number
  position: StagePosition
  title: string
  status: 'ready' | 'coming-soon'
  /** Portada de personaje asociada (clave dentro de /assets/camino/personajes/). */
  characterId?: string
  /** Arte de escena para la pantalla del reto (dentro de /assets/camino/retos/). */
  sceneSrc?: string
  challenge?: StageChallenge
  /** [segundos para 3★, segundos para 2★]. */
  starTimes: [number, number]
}
