import {
  collection,
  deleteField,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  type Unsubscribe,
} from 'firebase/firestore'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { getDb, getFirebaseStorage } from '@/lib/firebase'

const COLLECTION = 'lessonMedia'

export type LessonMediaSlot = 'heroImage' | 'iconImage'

export type LessonMediaDoc = Partial<Record<LessonMediaSlot, string>> & { heroImageAlt?: string }

function logSnapshotError(where: string) {
  return (err: unknown) => {
    console.error(`[lessonMedia] snapshot error (${where}):`, err)
  }
}

/** Suscripción única a toda la colección — usada por lessonMediaStore. */
export function subscribeLessonMedia(cb: (media: Record<string, LessonMediaDoc>) => void): Unsubscribe {
  return onSnapshot(
    collection(getDb(), COLLECTION),
    (snap) => {
      const media: Record<string, LessonMediaDoc> = {}
      for (const d of snap.docs) media[d.id] = d.data() as LessonMediaDoc
      cb(media)
    },
    (err) => {
      logSnapshotError('subscribeLessonMedia')(err)
      cb({})
    },
  )
}

export async function uploadLessonImage(lessonId: string, slot: LessonMediaSlot, file: File): Promise<string> {
  const storage = getFirebaseStorage()
  const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg'
  const storageRef = ref(storage, `${COLLECTION}/${lessonId}/${slot}.${ext}`)
  await uploadBytes(storageRef, file, { contentType: file.type })
  const url = await getDownloadURL(storageRef)
  await setDoc(doc(getDb(), COLLECTION, lessonId), { [slot]: url, updatedAt: serverTimestamp() }, { merge: true })
  return url
}

export async function removeLessonImage(lessonId: string, slot: LessonMediaSlot, currentUrl?: string): Promise<void> {
  await setDoc(doc(getDb(), COLLECTION, lessonId), { [slot]: deleteField(), updatedAt: serverTimestamp() }, { merge: true })
  if (!currentUrl) return
  try {
    await deleteObject(ref(getFirebaseStorage(), currentUrl))
  } catch {
    // El archivo puede no existir o la URL puede ser externa — no es crítico.
  }
}
