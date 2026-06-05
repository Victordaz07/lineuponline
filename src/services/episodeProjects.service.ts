import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  Timestamp,
  type Unsubscribe,
} from 'firebase/firestore'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage'
import { getDb } from '@/lib/firebase'
import { getFirebaseStorage } from '@/lib/firebase'
import type { Episode, EpisodeSegment } from '@/types/episode'

const COL = 'episodes'

function toEpisode(id: string, data: Record<string, unknown>): Episode {
  const ts = (v: unknown) =>
    v instanceof Timestamp ? v.toDate().toISOString() : String(v ?? new Date().toISOString())
  return {
    id,
    title: String(data.title ?? ''),
    description: String(data.description ?? ''),
    rawScript: String(data.rawScript ?? ''),
    segments: Array.isArray(data.segments) ? (data.segments as EpisodeSegment[]) : [],
    status: (data.status as Episode['status']) ?? 'draft',
    combinedAudioPath: data.combinedAudioPath ? String(data.combinedAudioPath) : undefined,
    combinedAudioUrl: data.combinedAudioUrl ? String(data.combinedAudioUrl) : undefined,
    totalCharacters: Number(data.totalCharacters ?? 0),
    createdAt: ts(data.createdAt),
    updatedAt: ts(data.updatedAt),
  }
}

export function subscribeEpisodes(
  onData: (episodes: Episode[]) => void,
): Unsubscribe {
  const db = getDb()
  const q = query(collection(db, COL), orderBy('createdAt', 'desc'))
  return onSnapshot(q, (snap) => {
    onData(snap.docs.map((d) => toEpisode(d.id, d.data() as Record<string, unknown>)))
  })
}

export async function createEpisode(
  title: string,
  description: string,
  rawScript: string,
  segments: EpisodeSegment[],
  totalCharacters: number,
): Promise<string> {
  const db = getDb()
  const ref = await addDoc(collection(db, COL), {
    title,
    description,
    rawScript,
    segments,
    status: 'draft',
    totalCharacters,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return ref.id
}

export async function updateEpisodeMeta(
  episodeId: string,
  fields: Partial<Pick<Episode, 'title' | 'description' | 'rawScript' | 'segments' | 'status' | 'totalCharacters' | 'combinedAudioPath' | 'combinedAudioUrl'>>,
): Promise<void> {
  const db = getDb()
  await updateDoc(doc(db, COL, episodeId), {
    ...fields,
    updatedAt: serverTimestamp(),
  })
}

export async function deleteEpisode(episodeId: string): Promise<void> {
  const db = getDb()
  await deleteDoc(doc(db, COL, episodeId))
}

export async function uploadSegmentAudio(
  episodeId: string,
  segmentId: string,
  blob: Blob,
): Promise<{ storagePath: string; downloadUrl: string }> {
  const storage = getFirebaseStorage()
  const storagePath = `episodes/${episodeId}/segments/${segmentId}.mp3`
  const storageRef = ref(storage, storagePath)
  await uploadBytes(storageRef, blob, { contentType: 'audio/mpeg' })
  const downloadUrl = await getDownloadURL(storageRef)
  return { storagePath, downloadUrl }
}

export async function uploadCombinedAudio(
  episodeId: string,
  blob: Blob,
): Promise<{ storagePath: string; downloadUrl: string }> {
  const storage = getFirebaseStorage()
  const storagePath = `episodes/${episodeId}/combined.mp3`
  const storageRef = ref(storage, storagePath)
  await uploadBytes(storageRef, blob, { contentType: 'audio/mpeg' })
  const downloadUrl = await getDownloadURL(storageRef)
  return { storagePath, downloadUrl }
}

export async function deleteStorageFile(storagePath: string): Promise<void> {
  try {
    const storage = getFirebaseStorage()
    await deleteObject(ref(storage, storagePath))
  } catch {
    // ignore if file doesn't exist
  }
}
