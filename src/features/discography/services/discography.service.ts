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
  Timestamp,
  updateDoc,
  where,
  type Unsubscribe,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import { youtubeThumbnailUrl } from '../lib/extractYoutubeId'
import type { ParsedSong } from '../lib/parseAlbumReport'
import { EMPTY_SONG_META, type Album, type DiscographyTrack, type DiscographyTrackType, type SongMeta } from '../types'

const ALBUMS_COL = 'discographyAlbums'
const TRACKS_COL = 'discographyTracks'

function tsToIso(v: unknown): string {
  return v instanceof Timestamp ? v.toDate().toISOString() : new Date().toISOString()
}

function toAlbum(id: string, data: Record<string, unknown>): Album {
  return {
    id,
    title: String(data.title ?? ''),
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
    duration: typeof data.duration === 'number' ? data.duration : null,
    songMeta: toSongMeta(data.songMeta as Record<string, unknown> | null | undefined),
    createdAt: tsToIso(data.createdAt),
    updatedAt: tsToIso(data.updatedAt),
  }
}

export function subscribeAlbums(cb: (albums: Album[]) => void): Unsubscribe {
  const q = query(collection(getDb(), ALBUMS_COL), orderBy('createdAt', 'desc'))
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => toAlbum(d.id, d.data())))
  })
}

export function subscribeAlbum(albumId: string, cb: (album: Album | null) => void): Unsubscribe {
  return onSnapshot(doc(getDb(), ALBUMS_COL, albumId), (snap) => {
    cb(snap.exists() ? toAlbum(snap.id, snap.data()) : null)
  })
}

export function subscribeTracksByAlbum(albumId: string, cb: (tracks: DiscographyTrack[]) => void): Unsubscribe {
  const q = query(collection(getDb(), TRACKS_COL), where('albumId', '==', albumId), orderBy('createdAt', 'asc'))
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => toTrack(d.id, d.data())))
  })
}

export async function addAlbum(input: { title: string; report: string; coverUrl?: string | null }): Promise<string> {
  const ref = await addDoc(collection(getDb(), ALBUMS_COL), {
    title: input.title,
    report: input.report,
    coverUrl: input.coverUrl?.trim() || null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
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

export interface AddTrackInput {
  albumId: string
  subtitle: string
  title: string
  titleEn?: string | null
  youtubeUrl: string
  youtubeVideoId: string
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
    duration: null,
    songMeta: input.songMeta ?? null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return ref.id
}

export async function addTracksFromImport(albumId: string, subtitle: string, songs: ParsedSong[]): Promise<number> {
  const validSongs = songs.filter((s) => s.valid && s.youtubeVideoId)
  for (const song of validSongs) {
    await addTrack({
      albumId,
      subtitle,
      title: song.title,
      titleEn: song.titleEn || null,
      youtubeUrl: song.youtubeUrl,
      youtubeVideoId: song.youtubeVideoId as string,
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

export async function deleteTrack(trackId: string): Promise<void> {
  await deleteDoc(doc(getDb(), TRACKS_COL, trackId))
}
