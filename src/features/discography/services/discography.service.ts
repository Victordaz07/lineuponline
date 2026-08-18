import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  where,
  writeBatch,
  type Unsubscribe,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import { deleteDiscographyFile } from './discographyStorage.service'
import { youtubeThumbnailUrl } from '../lib/extractYoutubeId'
import type { ParsedSong } from '../lib/parseAlbumReport'
import { EMPTY_SONG_META, type Album, type DiscographyTrack, type DiscographyTrackType, type SongMeta } from '../types'

const ALBUMS_COL = 'discographyAlbums'
const TRACKS_COL = 'discographyTracks'

// Ícono de nota musical genérico (SVG en línea), usado como portada de un MP3
// subido cuando ni la canción ni su álbum tienen una portada propia.
const UPLOAD_TRACK_COVER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
      '<rect width="64" height="64" fill="#1c2a3a"/>' +
      '<path d="M40 14v22.6a8 8 0 1 0 4 6.9V22l-14 3v19.6a8 8 0 1 0 4 6.9V18l6-1.3V14z" fill="#e8c874"/>' +
      '</svg>',
  )

function tsToIso(v: unknown): string {
  return v instanceof Timestamp ? v.toDate().toISOString() : new Date().toISOString()
}

function toAlbum(id: string, data: Record<string, unknown>): Album {
  return {
    id,
    title: String(data.title ?? ''),
    description: String(data.description ?? ''),
    report: String(data.report ?? ''),
    coverUrl: (data.coverUrl as string | null) ?? null,
    createdAt: tsToIso(data.createdAt),
    updatedAt: tsToIso(data.updatedAt),
  }
}

function toSongMeta(data: Record<string, unknown> | null | undefined): SongMeta | null {
  if (!data) return null
  return {
    ...EMPTY_SONG_META,
    era: String(data.era ?? ''),
    character: String(data.character ?? ''),
    titleEn: (data.titleEn as string | null) ?? null,
    arc: String(data.arc ?? ''),
    scriptureRef: String(data.scriptureRef ?? ''),
    signatureSound: String(data.signatureSound ?? ''),
  }
}

function toTrack(id: string, data: Record<string, unknown>): DiscographyTrack {
  return {
    id,
    albumId: String(data.albumId ?? ''),
    type: (data.type as DiscographyTrackType) ?? 'youtube',
    title: String(data.title ?? ''),
    titleEn: (data.titleEn as string | null) ?? null,
    subtitle: String(data.subtitle ?? ''),
    coverUrl: String(data.coverUrl ?? ''),
    youtubeUrl: (data.youtubeUrl as string | null) ?? null,
    youtubeVideoId: (data.youtubeVideoId as string | null) ?? null,
    storageUrl: (data.storageUrl as string | null) ?? null,
    storagePath: (data.storagePath as string | null) ?? null,
    duration: typeof data.duration === 'number' ? data.duration : null,
    order: typeof data.order === 'number' ? data.order : 0,
    songMeta: toSongMeta(data.songMeta as Record<string, unknown> | null | undefined),
    createdAt: tsToIso(data.createdAt),
    updatedAt: tsToIso(data.updatedAt),
  }
}

function logSnapshotError(where: string) {
  return (err: unknown) => {
    console.error(`[discography] snapshot error (${where}):`, err)
  }
}

export function subscribeAlbums(cb: (albums: Album[]) => void): Unsubscribe {
  const q = query(collection(getDb(), ALBUMS_COL), orderBy('createdAt', 'desc'))
  return onSnapshot(
    q,
    (snap) => cb(snap.docs.map((d) => toAlbum(d.id, d.data()))),
    (err) => {
      logSnapshotError('subscribeAlbums')(err)
      cb([])
    },
  )
}

export function subscribeAlbum(albumId: string, cb: (album: Album | null) => void): Unsubscribe {
  return onSnapshot(doc(getDb(), ALBUMS_COL, albumId), (snap) => {
    cb(snap.exists() ? toAlbum(snap.id, snap.data()) : null)
  })
}

export function subscribeTracksByAlbum(albumId: string, cb: (tracks: DiscographyTrack[]) => void): Unsubscribe {
  // Filtramos por albumId y ordenamos en el cliente. Combinar where + orderBy
  // en Firestore exigiría un índice compuesto; como las listas de un álbum
  // son pequeñas, ordenar aquí es más simple y evita ese requisito.
  // Orden: por `order` (posición elegida en el admin); los tracks viejos sin
  // ese campo caen todos en 0 y se ordenan entre sí por fecha de creación.
  const q = query(collection(getDb(), TRACKS_COL), where('albumId', '==', albumId))
  return onSnapshot(
    q,
    (snap) => {
      const tracks = snap.docs.map((d) => toTrack(d.id, d.data()))
      tracks.sort((a, b) => a.order - b.order || a.createdAt.localeCompare(b.createdAt))
      cb(tracks)
    },
    (err) => {
      logSnapshotError('subscribeTracksByAlbum')(err)
      cb([])
    },
  )
}

/** Genera un id de álbum sin escribir nada aún — para poder subir la portada
 *  a `discography/covers/{id}/...` antes de crear el documento del álbum. */
export function newAlbumId(): string {
  return doc(collection(getDb(), ALBUMS_COL)).id
}

export async function addAlbum(input: {
  id?: string
  title: string
  description?: string
  report: string
  coverUrl?: string | null
}): Promise<string> {
  const payload = {
    title: input.title,
    description: input.description?.trim() ?? '',
    report: input.report,
    coverUrl: input.coverUrl?.trim() || null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }
  if (input.id) {
    await setDoc(doc(getDb(), ALBUMS_COL, input.id), payload)
    return input.id
  }
  const ref = await addDoc(collection(getDb(), ALBUMS_COL), payload)
  return ref.id
}

export async function updateAlbum(
  albumId: string,
  fields: Partial<Omit<Album, 'id' | 'createdAt' | 'updatedAt'>>,
): Promise<void> {
  await updateDoc(doc(getDb(), ALBUMS_COL, albumId), { ...fields, updatedAt: serverTimestamp() })
}

export async function deleteAlbum(albumId: string): Promise<void> {
  const tracksSnap = await getDocs(query(collection(getDb(), TRACKS_COL), where('albumId', '==', albumId)))
  await Promise.all(tracksSnap.docs.map((d) => deleteDoc(d.ref)))
  await deleteDoc(doc(getDb(), ALBUMS_COL, albumId))
}

/** Siguiente valor de `order` para agregar una canción al final del álbum. */
export function nextTrackOrder(tracks: DiscographyTrack[]): number {
  return tracks.reduce((max, t) => Math.max(max, t.order), -1) + 1
}

export interface AddTrackInput {
  albumId: string
  subtitle: string
  title: string
  titleEn?: string | null
  youtubeUrl: string
  youtubeVideoId: string
  order: number
  songMeta?: SongMeta | null
}

export async function addTrack(input: AddTrackInput): Promise<string> {
  const ref = await addDoc(collection(getDb(), TRACKS_COL), {
    albumId: input.albumId,
    type: 'youtube' satisfies DiscographyTrackType,
    title: input.title,
    titleEn: input.titleEn?.trim() || null,
    subtitle: input.subtitle,
    coverUrl: youtubeThumbnailUrl(input.youtubeVideoId),
    youtubeUrl: input.youtubeUrl,
    youtubeVideoId: input.youtubeVideoId,
    storageUrl: null,
    storagePath: null,
    duration: null,
    order: input.order,
    songMeta: input.songMeta ?? null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return ref.id
}

export interface AddUploadedTrackInput {
  albumId: string
  subtitle: string
  title: string
  titleEn?: string | null
  storageUrl: string
  storagePath: string
  order: number
  coverUrl?: string | null
  songMeta?: SongMeta | null
}

/** Canción subida directamente como MP3 (sin pasar por YouTube). */
export async function addUploadedTrack(input: AddUploadedTrackInput): Promise<string> {
  const ref = await addDoc(collection(getDb(), TRACKS_COL), {
    albumId: input.albumId,
    type: 'hymn' satisfies DiscographyTrackType,
    title: input.title,
    titleEn: input.titleEn?.trim() || null,
    subtitle: input.subtitle,
    coverUrl: input.coverUrl?.trim() || UPLOAD_TRACK_COVER,
    youtubeUrl: null,
    youtubeVideoId: null,
    storageUrl: input.storageUrl,
    storagePath: input.storagePath,
    duration: null,
    order: input.order,
    songMeta: input.songMeta ?? null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return ref.id
}

export async function addTracksFromImport(
  albumId: string,
  subtitle: string,
  songs: ParsedSong[],
  startOrder: number,
): Promise<number> {
  const validSongs = songs.filter((s) => s.valid && s.youtubeVideoId)
  let order = startOrder
  for (const song of validSongs) {
    await addTrack({
      albumId,
      subtitle,
      title: song.title,
      titleEn: song.titleEn || null,
      youtubeUrl: song.youtubeUrl,
      youtubeVideoId: song.youtubeVideoId as string,
      order: order++,
      songMeta: {
        era: song.era,
        character: song.character,
        titleEn: song.titleEn || null,
        arc: song.arc,
        scriptureRef: song.scriptureRef,
        signatureSound: song.signatureSound,
      },
    })
  }
  return validSongs.length
}

/** Sube o baja un track un puesto dentro de `tracks` (ya ordenado) y persiste
 *  el nuevo orden de todos — así funciona aunque los tracks vengan sin
 *  `order` explícito todavía (legado). */
export async function reorderTrack(
  tracks: DiscographyTrack[],
  trackId: string,
  direction: 'up' | 'down',
): Promise<void> {
  const from = tracks.findIndex((t) => t.id === trackId)
  if (from === -1) return
  const to = direction === 'up' ? from - 1 : from + 1
  if (to < 0 || to >= tracks.length) return

  const reordered = [...tracks]
  ;[reordered[from], reordered[to]] = [reordered[to], reordered[from]]

  const batch = writeBatch(getDb())
  reordered.forEach((t, i) => {
    if (t.order !== i) batch.update(doc(getDb(), TRACKS_COL, t.id), { order: i })
  })
  await batch.commit()
}

export async function updateTrack(
  trackId: string,
  fields: Partial<Pick<DiscographyTrack, 'title' | 'titleEn'>>,
): Promise<void> {
  await updateDoc(doc(getDb(), TRACKS_COL, trackId), { ...fields, updatedAt: serverTimestamp() })
}

export async function deleteTrack(trackId: string, storagePath?: string | null): Promise<void> {
  if (storagePath) {
    try {
      await deleteDiscographyFile(storagePath)
    } catch (err) {
      console.error('[discography] error borrando archivo de Storage:', err)
    }
  }
  await deleteDoc(doc(getDb(), TRACKS_COL, trackId))
}

// --- Podcasts de lecciones ---------------------------------------------
// Los episodios que un admin sube por lección (LessonPodcastPlayer) se
// guardan como DiscographyTrack (type: 'podcast') para reutilizar el mismo
// reproductor persistente/mini-player que las canciones. No usan un álbum
// real: `albumId` es solo una etiqueta de agrupación, no hay documento en
// `discographyAlbums` ni aparecen en la grilla de álbumes de /musica.

export const PODCAST_ALBUM_ID = 'podcast-lecciones'

/** Crea o actualiza (por id estable) el track de un episodio de podcast. */
export async function upsertPodcastTrack(track: DiscographyTrack): Promise<void> {
  await setDoc(
    doc(getDb(), TRACKS_COL, track.id),
    {
      albumId: track.albumId,
      type: track.type,
      title: track.title,
      titleEn: track.titleEn,
      subtitle: track.subtitle,
      coverUrl: track.coverUrl,
      youtubeUrl: track.youtubeUrl,
      youtubeVideoId: track.youtubeVideoId,
      storageUrl: track.storageUrl,
      storagePath: track.storagePath,
      duration: track.duration,
      order: track.order,
      songMeta: track.songMeta,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  )
}

export async function removePodcastTrack(trackId: string): Promise<void> {
  await deleteDoc(doc(getDb(), TRACKS_COL, trackId))
}

export function subscribePodcastTracks(cb: (tracks: DiscographyTrack[]) => void): Unsubscribe {
  const q = query(collection(getDb(), TRACKS_COL), where('type', '==', 'podcast'))
  return onSnapshot(
    q,
    (snap) => {
      const tracks = snap.docs.map((d) => toTrack(d.id, d.data()))
      tracks.sort((a, b) => a.title.localeCompare(b.title) || a.subtitle.localeCompare(b.subtitle))
      cb(tracks)
    },
    (err) => {
      logSnapshotError('subscribePodcastTracks')(err)
      cb([])
    },
  )
}
