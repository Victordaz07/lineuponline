import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
  Timestamp,
  type Unsubscribe,
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getDb, getFirebaseAuth, getFirebaseStorage } from '@/lib/firebase'
import {
  EMPTY_COVENANT_CHECK,
  EMPTY_HUMAN_AUTHORSHIP_LOG,
  type CovenantCheck,
  type HumanAuthorshipLog,
  type Track,
} from '@/types/music'

type CovenantGateKey = Exclude<keyof CovenantCheck, 'revisadoPor' | 'fechaRevision'>

const TRACKS_COL = 'tracks'

function tsToIso(v: unknown): string {
  return v instanceof Timestamp ? v.toDate().toISOString() : new Date().toISOString()
}

function toCovenantCheck(data: Record<string, unknown>): CovenantCheck {
  return {
    ...EMPTY_COVENANT_CHECK,
    ...(typeof data === 'object' && data ? data : {}),
    revisadoPor: String((data.revisadoPor as string) ?? ''),
    fechaRevision:
      data.fechaRevision instanceof Timestamp ? data.fechaRevision.toDate().toISOString() : null,
  }
}

function toHumanAuthorshipLog(data: Record<string, unknown>): HumanAuthorshipLog {
  return {
    lyricsHumanEditPercent: Number(data.lyricsHumanEditPercent ?? 0),
    creativeDirectionNotes: String(data.creativeDirectionNotes ?? ''),
    reviewedBy: String(data.reviewedBy ?? ''),
  }
}

function toTrack(id: string, data: Record<string, unknown>): Track {
  return {
    id,
    characterId: String(data.characterId ?? ''),
    season: Number(data.season ?? 1),
    title: String(data.title ?? ''),
    scriptureRef: String(data.scriptureRef ?? ''),
    genre: String(data.genre ?? ''),
    bpm: typeof data.bpm === 'number' ? data.bpm : null,
    lyrics: String(data.lyrics ?? ''),
    lyricsApproved: Boolean(data.lyricsApproved),

    audioStatus: (data.audioStatus as Track['audioStatus']) ?? 'PENDING',
    audioProviderJobId: (data.audioProviderJobId as string | null) ?? null,
    audioUrl: (data.audioUrl as string | null) ?? null,
    coverStatus: (data.coverStatus as Track['coverStatus']) ?? 'PENDING',
    coverUrl: (data.coverUrl as string | null) ?? null,

    youtubeStatus: (data.youtubeStatus as Track['youtubeStatus']) ?? 'NOT_UPLOADED',
    youtubeVideoId: (data.youtubeVideoId as string | null) ?? null,
    syntheticContentDisclosed: Boolean(data.syntheticContentDisclosed),

    covenantCheck: toCovenantCheck((data.covenantCheck as Record<string, unknown>) ?? {}),
    humanAuthorshipLog: toHumanAuthorshipLog((data.humanAuthorshipLog as Record<string, unknown>) ?? {}),

    status: (data.status as Track['status']) ?? 'DRAFT',
    createdAt: tsToIso(data.createdAt),
    updatedAt: tsToIso(data.updatedAt),
  }
}

export function subscribeTracks(cb: (tracks: Track[]) => void): Unsubscribe {
  const q = query(collection(getDb(), TRACKS_COL), orderBy('season', 'asc'))
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => toTrack(d.id, d.data())))
  })
}

export function subscribeTracksByCharacter(
  characterId: string,
  cb: (tracks: Track[]) => void,
): Unsubscribe {
  const q = query(collection(getDb(), TRACKS_COL), where('characterId', '==', characterId))
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => toTrack(d.id, d.data())))
  })
}

export function subscribeTrack(trackId: string, cb: (track: Track | null) => void): Unsubscribe {
  return onSnapshot(doc(getDb(), TRACKS_COL, trackId), (snap) => {
    cb(snap.exists() ? toTrack(snap.id, snap.data()) : null)
  })
}

export async function addTrack(input: {
  characterId: string
  season: number
  title: string
  scriptureRef: string
  genre: string
}): Promise<string> {
  const ref = await addDoc(collection(getDb(), TRACKS_COL), {
    ...input,
    bpm: null,
    lyrics: '',
    lyricsApproved: false,

    audioStatus: 'PENDING',
    audioProviderJobId: null,
    audioUrl: null,
    coverStatus: 'PENDING',
    coverUrl: null,

    youtubeStatus: 'NOT_UPLOADED',
    youtubeVideoId: null,
    syntheticContentDisclosed: false,

    covenantCheck: EMPTY_COVENANT_CHECK,
    humanAuthorshipLog: EMPTY_HUMAN_AUTHORSHIP_LOG,

    status: 'DRAFT',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return ref.id
}

export async function updateTrack(
  trackId: string,
  fields: Partial<Omit<Track, 'id' | 'createdAt' | 'updatedAt'>>,
): Promise<void> {
  await updateDoc(doc(getDb(), TRACKS_COL, trackId), { ...fields, updatedAt: serverTimestamp() })
}

export async function deleteTrack(trackId: string): Promise<void> {
  await deleteDoc(doc(getDb(), TRACKS_COL, trackId))
}

// ── Subida manual de assets (mientras no haya generación automática) ────────

function fileExtension(filename: string): string {
  const match = /\.([a-zA-Z0-9]+)$/.exec(filename)
  return match ? match[1].toLowerCase() : 'bin'
}

/** Sube un archivo de audio generado fuera de la app (Suno, etc.) y lo asocia al track. */
export async function uploadTrackAudio(trackId: string, file: File): Promise<string> {
  const storage = getFirebaseStorage()
  const storageRef = ref(storage, `tracks/${trackId}/audio.${fileExtension(file.name)}`)
  await uploadBytes(storageRef, file, { contentType: file.type || 'audio/mpeg' })
  const audioUrl = await getDownloadURL(storageRef)
  await updateTrack(trackId, { audioUrl, audioStatus: 'READY' })
  return audioUrl
}

/** Sube una portada generada fuera de la app y la asocia al track. */
export async function uploadTrackCover(trackId: string, file: File): Promise<string> {
  const storage = getFirebaseStorage()
  const storageRef = ref(storage, `tracks/${trackId}/cover.${fileExtension(file.name)}`)
  await uploadBytes(storageRef, file, { contentType: file.type || 'image/jpeg' })
  const coverUrl = await getDownloadURL(storageRef)
  await updateTrack(trackId, { coverUrl, coverStatus: 'READY' })
  return coverUrl
}

function parseYoutubeVideoId(input: string): string | null {
  const trimmed = input.trim()
  if (!trimmed) return null
  const urlMatch = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([a-zA-Z0-9_-]{6,})/.exec(
    trimmed,
  )
  if (urlMatch) return urlMatch[1]
  return /^[a-zA-Z0-9_-]{6,}$/.test(trimmed) ? trimmed : null
}

/**
 * Registra un video que el admin ya subió manualmente a YouTube (fuera de la app).
 * No omite ningún requisito del Covenant: la UI solo habilita esto cuando el gate,
 * la divulgación de contenido sintético y los assets ya están completos.
 */
export async function setManualYoutubePublish(trackId: string, videoIdOrUrl: string): Promise<void> {
  const youtubeVideoId = parseYoutubeVideoId(videoIdOrUrl)
  if (!youtubeVideoId) {
    throw new Error('No se pudo reconocer el ID o el link de YouTube.')
  }
  await updateTrack(trackId, { youtubeVideoId, youtubeStatus: 'PUBLISHED', status: 'PUBLISHED' })
}

// ── Cloud Function calls ─────────────────────────────────────────────────────

function generateLyricsFunctionUrl(): string | null {
  const url = import.meta.env.VITE_GENERATE_LYRICS_FUNCTION_URL
  return typeof url === 'string' && url.trim() !== '' ? url.trim() : null
}

/** Llama a la función `generateLyrics`: nunca auto-aprueba, solo propone letra (lyricsApproved queda en false). */
export async function callGenerateLyrics(
  trackId: string,
  characterId: string,
  scriptureRef: string,
  toneNotes?: string,
): Promise<void> {
  const url = generateLyricsFunctionUrl()
  if (!url) {
    throw new Error('Generador no configurado: defina VITE_GENERATE_LYRICS_FUNCTION_URL.')
  }
  const user = getFirebaseAuth().currentUser
  if (!user) throw new Error('Debes iniciar sesión para generar letras.')
  const token = await user.getIdToken()
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ trackId, characterId, scriptureRef, toneNotes }),
  })
  if (!res.ok) {
    const body = await res.json().catch(() => null)
    throw new Error(body?.error ?? `No se pudo generar la letra (HTTP ${res.status}).`)
  }
}

/** Marca/desmarca una casilla del Creator's Covenant. Sella quién y cuándo (nunca auto-aprueba). */
export async function setCovenantField(
  trackId: string,
  key: CovenantGateKey,
  value: boolean,
  reviewer: string,
): Promise<void> {
  await updateDoc(doc(getDb(), TRACKS_COL, trackId), {
    [`covenantCheck.${key}`]: value,
    [`covenantCheck.revisadoPor`]: reviewer,
    [`covenantCheck.fechaRevision`]: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function setHumanAuthorshipLog(
  trackId: string,
  fields: Partial<HumanAuthorshipLog>,
): Promise<void> {
  const updates: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(fields)) {
    updates[`humanAuthorshipLog.${key}`] = value
  }
  await updateDoc(doc(getDb(), TRACKS_COL, trackId), { ...updates, updatedAt: serverTimestamp() })
}

export async function setSyntheticContentDisclosed(trackId: string, value: boolean): Promise<void> {
  await updateDoc(doc(getDb(), TRACKS_COL, trackId), {
    syntheticContentDisclosed: value,
    updatedAt: serverTimestamp(),
  })
}

function publishToYouTubeFunctionUrl(): string | null {
  const url = import.meta.env.VITE_PUBLISH_YOUTUBE_FUNCTION_URL
  return typeof url === 'string' && url.trim() !== '' ? url.trim() : null
}

/** Llama a la función `publishToYouTube`. El servidor revalida el gate del Covenant sin excepción. */
export async function callPublishToYouTube(trackId: string): Promise<void> {
  const url = publishToYouTubeFunctionUrl()
  if (!url) {
    throw new Error('Publicación no configurada: defina VITE_PUBLISH_YOUTUBE_FUNCTION_URL.')
  }
  const user = getFirebaseAuth().currentUser
  if (!user) throw new Error('Debes iniciar sesión para publicar.')
  const token = await user.getIdToken()
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ trackId }),
  })
  if (!res.ok) {
    const body = await res.json().catch(() => null)
    throw new Error(body?.error ?? `No se pudo publicar (HTTP ${res.status}).`)
  }
}
