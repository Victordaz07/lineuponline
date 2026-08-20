import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  type Unsubscribe,
} from 'firebase/firestore'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { getDb, getFirebaseStorage } from '@/lib/firebase'
import { inferCountryCode } from '@/lib/geoInference'
import type { DownloadableResource } from '@/types/downloadable'

const EVENTS_COLLECTION = 'downloadEvents'

const COLLECTION = 'downloadableResources'

function tsToIso(v: unknown): string {
  return v instanceof Timestamp ? v.toDate().toISOString() : new Date().toISOString()
}

function toResource(id: string, data: Record<string, unknown>): DownloadableResource {
  return {
    id,
    title: String(data.title ?? ''),
    description: String(data.description ?? ''),
    fileUrl: String(data.fileUrl ?? ''),
    storagePath: String(data.storagePath ?? ''),
    fileName: String(data.fileName ?? ''),
    fileSizeBytes: typeof data.fileSizeBytes === 'number' ? data.fileSizeBytes : 0,
    fileType: String(data.fileType ?? ''),
    coverImageUrl: (data.coverImageUrl as string | null) ?? null,
    coverStoragePath: (data.coverStoragePath as string | null) ?? null,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    relatedModuleIds: Array.isArray(data.relatedModuleIds) ? (data.relatedModuleIds as string[]) : [],
    downloadCount: typeof data.downloadCount === 'number' ? data.downloadCount : 0,
    uploadedByUid: String(data.uploadedByUid ?? ''),
    createdAt: tsToIso(data.createdAt),
    updatedAt: tsToIso(data.updatedAt),
  }
}

function logSnapshotError(where: string) {
  return (err: unknown) => {
    console.error(`[downloadables] snapshot error (${where}):`, err)
  }
}

/** Genera un id sin escribir nada aún — para subir el archivo a
 *  `downloadables/files/{id}/...` antes de crear el documento. */
export function newDownloadableResourceId(): string {
  return doc(collection(getDb(), COLLECTION)).id
}

export function subscribeDownloadables(cb: (items: DownloadableResource[]) => void): Unsubscribe {
  const q = query(collection(getDb(), COLLECTION), orderBy('createdAt', 'desc'))
  return onSnapshot(
    q,
    (snap) => cb(snap.docs.map((d) => toResource(d.id, d.data()))),
    (err) => {
      logSnapshotError('subscribeDownloadables')(err)
      cb([])
    },
  )
}

export function subscribeDownloadable(id: string, cb: (item: DownloadableResource | null) => void): Unsubscribe {
  return onSnapshot(
    doc(getDb(), COLLECTION, id),
    (snap) => cb(snap.exists() ? toResource(snap.id, snap.data()) : null),
    (err) => {
      logSnapshotError('subscribeDownloadable')(err)
      cb(null)
    },
  )
}

export async function uploadDownloadableFile(
  resourceId: string,
  file: File,
): Promise<{ url: string; storagePath: string }> {
  const storage = getFirebaseStorage()
  const storagePath = `downloadables/files/${resourceId}/${file.name}`
  const storageRef = ref(storage, storagePath)
  await uploadBytes(storageRef, file, { contentType: file.type })
  const url = await getDownloadURL(storageRef)
  return { url, storagePath }
}

export async function uploadDownloadableCover(
  resourceId: string,
  file: File,
): Promise<{ url: string; storagePath: string }> {
  const storage = getFirebaseStorage()
  const storagePath = `downloadables/covers/${resourceId}/${file.name}`
  const storageRef = ref(storage, storagePath)
  await uploadBytes(storageRef, file, { contentType: file.type })
  const url = await getDownloadURL(storageRef)
  return { url, storagePath }
}

export type CreateDownloadableInput = {
  id: string
  title: string
  description: string
  fileUrl: string
  storagePath: string
  fileName: string
  fileSizeBytes: number
  fileType: string
  coverImageUrl?: string | null
  coverStoragePath?: string | null
  tags: string[]
  relatedModuleIds?: string[]
  uploadedByUid: string
}

export async function createDownloadable(input: CreateDownloadableInput): Promise<void> {
  await setDoc(doc(getDb(), COLLECTION, input.id), {
    title: input.title.trim(),
    description: input.description.trim(),
    fileUrl: input.fileUrl,
    storagePath: input.storagePath,
    fileName: input.fileName,
    fileSizeBytes: input.fileSizeBytes,
    fileType: input.fileType,
    coverImageUrl: input.coverImageUrl ?? null,
    coverStoragePath: input.coverStoragePath ?? null,
    tags: input.tags,
    relatedModuleIds: input.relatedModuleIds ?? [],
    downloadCount: 0,
    uploadedByUid: input.uploadedByUid,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function updateDownloadable(
  id: string,
  fields: Partial<Omit<DownloadableResource, 'id' | 'downloadCount' | 'createdAt' | 'updatedAt'>>,
): Promise<void> {
  await updateDoc(doc(getDb(), COLLECTION, id), { ...fields, updatedAt: serverTimestamp() })
}

export async function deleteDownloadable(
  id: string,
  storagePath: string,
  coverStoragePath?: string | null,
): Promise<void> {
  const storage = getFirebaseStorage()
  try {
    await deleteObject(ref(storage, storagePath))
  } catch (err) {
    console.error('[downloadables] error borrando archivo de Storage:', err)
  }
  if (coverStoragePath) {
    try {
      await deleteObject(ref(storage, coverStoragePath))
    } catch (err) {
      console.error('[downloadables] error borrando portada de Storage:', err)
    }
  }
  await deleteDoc(doc(getDb(), COLLECTION, id))
}

/** Registra una descarga: incrementa el contador del recurso y guarda un
 *  evento detallado (tema, país aproximado) para la analítica de admin.
 *  Nunca bloquea la descarga real si algo falla. */
export async function registerDownload(resource: DownloadableResource): Promise<void> {
  try {
    await updateDoc(doc(getDb(), COLLECTION, resource.id), {
      downloadCount: increment(1),
      updatedAt: serverTimestamp(),
    })
  } catch (err) {
    console.error('[downloadables] error registrando descarga:', err)
  }

  try {
    const { countryCode, localeRegion, timeZone } = inferCountryCode()
    await addDoc(collection(getDb(), EVENTS_COLLECTION), {
      resourceId: resource.id,
      resourceTitle: resource.title,
      tags: resource.tags,
      countryCode,
      localeRegion,
      timeZone,
      createdAt: serverTimestamp(),
    })
  } catch (err) {
    console.error('[downloadables] error registrando evento de descarga:', err)
  }
}
