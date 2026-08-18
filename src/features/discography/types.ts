// Módulo de música (álbumes + canciones enlazadas a YouTube).
//
// Nombrado "discography" y con colecciones propias (discographyAlbums /
// discographyTracks) a propósito: el proyecto ya tiene un feature distinto
// en src/features/music/ (pipeline de generación de canciones con IA, con
// colecciones `characters`/`tracks`). Este módulo es independiente de ese.

export type DiscographyTrackType = 'youtube' | 'hymn' | 'podcast'

export interface SongMeta {
  era: string
  character: string
  titleEn: string | null
  arc: string
  scriptureRef: string
  signatureSound: string
}

export const EMPTY_SONG_META: SongMeta = {
  era: '',
  character: '',
  titleEn: null,
  arc: '',
  scriptureRef: '',
  signatureSound: '',
}

export interface Album {
  id: string
  title: string
  /** Descripción pública, visible para quien escucha el álbum. */
  description: string
  /** Texto para importar canciones en lote (ver parseAlbumReport) — no se muestra al usuario. */
  report: string
  coverUrl: string | null
  createdAt: string
  updatedAt: string
}

export interface DiscographyTrack {
  id: string
  albumId: string
  type: DiscographyTrackType
  title: string
  titleEn: string | null
  subtitle: string
  coverUrl: string
  youtubeUrl: string | null
  youtubeVideoId: string | null
  storageUrl: string | null
  /** Ruta en Firebase Storage del MP3 subido (para poder borrarlo junto con el track). Null si no aplica (youtube, o audio gestionado en otra colección como lessonAudio). */
  storagePath: string | null
  duration: number | null
  /** Posición dentro del álbum (menor = antes). Los tracks legado sin este campo caen al final, ordenados por fecha. */
  order: number
  songMeta: SongMeta | null
  createdAt: string
  updatedAt: string
}
