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

const COLLECTION = 'moduleMedia'

export type ModuleMediaSlot = 'heroImage' | 'heroImageMobile' | 'iconImage' | 'patternImage' | 'conclusionImage'

export type ModuleMediaDoc = Partial<Record<ModuleMediaSlot, string>>

function logSnapshotError(where: string) {
  return (err: unknown) => {
    console.error(`[moduleMedia] snapshot error (${where}):`, err)
  }
}

/** Suscripción única a toda la colección — usada por moduleMediaStore. */
export function subscribeModuleMedia(cb: (media: Record<string, ModuleMediaDoc>) => void): Unsubscribe {
  return onSnapshot(
    collection(getDb(), COLLECTION),
    (snap) => {
      const media: Record<string, ModuleMediaDoc> = {}
      for (const d of snap.docs) media[d.id] = d.data() as ModuleMediaDoc
      cb(media)
    },
    (err) => {
      logSnapshotError('subscribeModuleMedia')(err)
      cb({})
    },
  )
}

export async function uploadModuleImage(groupId: string, slot: ModuleMediaSlot, file: File): Promise<string> {
  const storage = getFirebaseStorage()
  const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg'
  const storageRef = ref(storage, `${COLLECTION}/${groupId}/${slot}.${ext}`)
  await uploadBytes(storageRef, file, { contentType: file.type })
  const url = await getDownloadURL(storageRef)
  await setDoc(doc(getDb(), COLLECTION, groupId), { [slot]: url, updatedAt: serverTimestamp() }, { merge: true })
  return url
}

export async function removeModuleImage(groupId: string, slot: ModuleMediaSlot, currentUrl?: string): Promise<void> {
  await setDoc(doc(getDb(), COLLECTION, groupId), { [slot]: deleteField(), updatedAt: serverTimestamp() }, { merge: true })
  if (!currentUrl) return
  try {
    await deleteObject(ref(getFirebaseStorage(), currentUrl))
  } catch {
    // El archivo puede no existir o la URL puede ser externa — no es crítico.
  }
}
