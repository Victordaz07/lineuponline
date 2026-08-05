import {
  deleteField,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
  type Unsubscribe,
} from 'firebase/firestore'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { getDb, getFirebaseStorage } from '@/lib/firebase'
import { extractYoutubeId } from '@/features/discography/lib/extractYoutubeId'
import { removePodcastTrack, upsertPodcastTrack, PODCAST_ALBUM_ID } from '@/features/discography/services/discography.service'
import type { DiscographyTrack } from '@/features/discography/types'
import { LESSON_AUDIO_SLOT_LABELS } from '@/types/lessonAudio'
import type { LessonAudioDoc, LessonAudioSlot, LessonAudioSlotKey } from '@/types/lessonAudio'

const COL = 'lessonAudio'

// Icono de podcast genérico (SVG en línea) usado como portada del episodio
// en el mini-player/reproductor completo cuando no hay una imagen propia.
const PODCAST_COVER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
      '<rect width="64" height="64" fill="#1c2a3a"/>' +
      '<rect x="26" y="14" width="12" height="22" rx="6" fill="#e8c874"/>' +
      '<path d="M18 30a14 14 0 0 0 28 0" stroke="#e8c874" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<line x1="32" y1="44" x2="32" y2="50" stroke="#e8c874" stroke-width="3" stroke-linecap="round"/>' +
      '<line x1="24" y1="50" x2="40" y2="50" stroke="#e8c874" stroke-width="3" stroke-linecap="round"/>' +
      '</svg>',
  )

function toLessonAudioDoc(lessonId: string, data: Record<string, unknown> | undefined): LessonAudioDoc {
  return {
    lessonId,
    slots: (data?.slots as LessonAudioDoc['slots']) ?? {},
  }
}

async function ensureDoc(lessonId: string): Promise<void> {
  const db = getDb()
  await setDoc(doc(db, COL, lessonId), { lessonId }, { merge: true })
}

export function subscribeLessonAudio(
  lessonId: string,
  onData: (audio: LessonAudioDoc) => void,
): Unsubscribe {
  const db = getDb()
  return onSnapshot(
    doc(db, COL, lessonId),
    (snap) => {
      onData(toLessonAudioDoc(lessonId, snap.data()))
    },
    () => {
      // Sin permisos o sin red: no hay podcast disponible, no romper la lección.
      onData(toLessonAudioDoc(lessonId, undefined))
    },
  )
}

export async function getLessonAudio(lessonId: string): Promise<LessonAudioDoc> {
  const db = getDb()
  const snap = await getDoc(doc(db, COL, lessonId))
  return toLessonAudioDoc(lessonId, snap.data())
}

/** Id estable del DiscographyTrack asociado a un slot, para poder actualizarlo o borrarlo. */
export function podcastTrackId(lessonId: string, slotKey: LessonAudioSlotKey): string {
  return `podcast-${lessonId}-${slotKey}`
}

/** Construye (sin tocar Firestore) el DiscographyTrack que representa un slot, para reproducirlo o guardarlo. */
export function buildPodcastTrack(
  lessonId: string,
  lessonTitle: string,
  slotKey: LessonAudioSlotKey,
  slot: LessonAudioSlot,
): DiscographyTrack {
  const now = new Date().toISOString()
  return {
    id: podcastTrackId(lessonId, slotKey),
    albumId: PODCAST_ALBUM_ID,
    type: 'podcast',
    title: lessonTitle,
    titleEn: null,
    subtitle: slot.label?.trim() || LESSON_AUDIO_SLOT_LABELS[slotKey],
    coverUrl: PODCAST_COVER,
    youtubeUrl: slot.sourceType === 'youtube' ? slot.url : null,
    youtubeVideoId: slot.sourceType === 'youtube' ? (slot.youtubeVideoId ?? null) : null,
    storageUrl: slot.sourceType === 'file' ? slot.url : null,
    duration: null,
    songMeta: null,
    createdAt: now,
    updatedAt: now,
  }
}

export async function saveLessonAudioFile(
  lessonId: string,
  lessonTitle: string,
  slotKey: LessonAudioSlotKey,
  file: File,
  label?: string,
): Promise<void> {
  const storage = getFirebaseStorage()
  const storagePath = `lessonAudio/${lessonId}/${slotKey}.mp3`
  const storageRef = ref(storage, storagePath)
  await uploadBytes(storageRef, file, { contentType: file.type || 'audio/mpeg' })
  const url = await getDownloadURL(storageRef)

  const slot: LessonAudioSlot = {
    sourceType: 'file',
    url,
    storagePath,
    youtubeVideoId: null,
    label: label?.trim() || null,
  }

  await ensureDoc(lessonId)
  const db = getDb()
  await updateDoc(doc(db, COL, lessonId), {
    [`slots.${slotKey}`]: slot,
    updatedAt: serverTimestamp(),
  })
  await upsertPodcastTrack(buildPodcastTrack(lessonId, lessonTitle, slotKey, slot))
}

export async function saveLessonAudioYoutube(
  lessonId: string,
  lessonTitle: string,
  slotKey: LessonAudioSlotKey,
  youtubeUrl: string,
  label?: string,
): Promise<void> {
  const youtubeVideoId = extractYoutubeId(youtubeUrl)
  if (!youtubeVideoId) {
    throw new Error('No se pudo reconocer esa URL de YouTube.')
  }

  const slot: LessonAudioSlot = {
    sourceType: 'youtube',
    url: youtubeUrl.trim(),
    storagePath: null,
    youtubeVideoId,
    label: label?.trim() || null,
  }

  await ensureDoc(lessonId)
  const db = getDb()
  await updateDoc(doc(db, COL, lessonId), {
    [`slots.${slotKey}`]: slot,
    updatedAt: serverTimestamp(),
  })
  await upsertPodcastTrack(buildPodcastTrack(lessonId, lessonTitle, slotKey, slot))
}

/**
 * Reconstruye en Música (discographyTracks) los episodios ya guardados en
 * `lessonAudio` para esta lección, sin volver a subir nada. Sirve para
 * "backfillear" audios cargados antes de que existiera la sincronización
 * automática (que corre en saveLessonAudioFile/saveLessonAudioYoutube).
 */
export async function syncLessonAudioToDiscography(
  lessonId: string,
  lessonTitle: string,
  slots: LessonAudioDoc['slots'],
): Promise<number> {
  const entries = Object.entries(slots) as [LessonAudioSlotKey, LessonAudioSlot | undefined][]
  let synced = 0
  for (const [slotKey, slot] of entries) {
    if (!slot?.url) continue
    await upsertPodcastTrack(buildPodcastTrack(lessonId, lessonTitle, slotKey, slot))
    synced += 1
  }
  return synced
}

export async function deleteLessonAudioSlot(
  lessonId: string,
  slotKey: LessonAudioSlotKey,
  storagePath?: string | null,
): Promise<void> {
  if (storagePath) {
    try {
      const storage = getFirebaseStorage()
      await deleteObject(ref(storage, storagePath))
    } catch {
      // El archivo ya pudo haber sido borrado; ignorar.
    }
  }
  const db = getDb()
  await updateDoc(doc(db, COL, lessonId), {
    [`slots.${slotKey}`]: deleteField(),
    updatedAt: serverTimestamp(),
  })
  await removePodcastTrack(podcastTrackId(lessonId, slotKey))
}
