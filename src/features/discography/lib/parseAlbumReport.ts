// Convierte el "informe" pegado por el admin (texto plano con el formato de
// plantilla, ver docs/SEEKER-GOSPEL-PLANTILLA-INFORME.md) en un array de
// canciones ya estructuradas, listas para guardar en Firestore.

import { extractYoutubeId } from './extractYoutubeId'

export interface ParsedSong {
  title: string
  titleEn: string
  character: string
  era: string
  youtubeUrl: string
  youtubeVideoId: string | null
  arc: string
  scriptureRef: string
  signatureSound: string
  valid: boolean // false si falta algo obligatorio o la URL de YouTube no es válida
  errors: string[]
}

type ParsedSongField = Exclude<keyof ParsedSong, 'youtubeVideoId' | 'valid' | 'errors'>

const FIELD_LABELS: Record<string, ParsedSongField> = {
  título: 'title',
  titulo: 'title',
  'título en': 'titleEn',
  'titulo en': 'titleEn',
  'título inglés': 'titleEn',
  personaje: 'character',
  era: 'era',
  youtube: 'youtubeUrl',
  arco: 'arc',
  escrituras: 'scriptureRef',
  escritura: 'scriptureRef',
  'signature sound': 'signatureSound',
}

function parseSongBlock(block: string): ParsedSong {
  const song: Record<ParsedSongField, string> = {
    title: '',
    titleEn: '',
    character: '',
    era: '',
    youtubeUrl: '',
    arc: '',
    scriptureRef: '',
    signatureSound: '',
  }

  const lines = block
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)

  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue

    const rawLabel = line.slice(0, colonIndex).trim().toLowerCase()
    const value = line.slice(colonIndex + 1).trim()
    const field = FIELD_LABELS[rawLabel]

    if (field) {
      // Si el campo ya tiene contenido (ej. "Arco" en varias líneas), concatenar
      song[field] = song[field] ? `${song[field]} ${value}` : value
    }
  }

  const videoId = extractYoutubeId(song.youtubeUrl)
  const errors: string[] = []
  if (!song.title) errors.push('Falta el Título')
  if (!song.youtubeUrl) errors.push('Falta la URL de YouTube')
  else if (!videoId) errors.push('La URL de YouTube no es reconocible')

  return {
    ...song,
    youtubeVideoId: videoId,
    valid: errors.length === 0,
    errors,
  }
}

export function parseAlbumReport(fullText: string): ParsedSong[] {
  // Cada canción va separada por una línea "---SONG---" ... "---FIN---"
  const blocks = fullText.split(/---SONG---/i).slice(1) // el primer trozo es lo de antes del primer bloque
  return blocks
    .map((b) => b.split(/---FIN---/i)[0])
    .filter((b) => b.trim().length > 0)
    .map(parseSongBlock)
}
