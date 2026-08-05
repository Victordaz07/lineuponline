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
import type { LessonAudioDoc, LessonAudioSlot, LessonAudioSlotKey } from '@/types/lessonAudio'

const COL = 'lessonAudio'

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

export async function saveLessonAudioFile(
  lessonId: string,
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
}

export async function saveLessonAudioYoutube(
  lessonId: string,
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
}
