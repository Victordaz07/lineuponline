import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { getFirebaseStorage } from '@/lib/firebase'

export async function uploadDiscographyAudio(
  file: File,
  albumId: string,
): Promise<{ url: string; storagePath: string }> {
  const storage = getFirebaseStorage()
  const timestamp = Date.now()
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
  const storagePath = `discography/audio/${albumId}/${timestamp}_${safeName}`
  const storageRef = ref(storage, storagePath)
  await uploadBytes(storageRef, file, { contentType: file.type || 'audio/mpeg' })
  const url = await getDownloadURL(storageRef)
  return { url, storagePath }
}

export async function uploadDiscographyCover(file: File, albumId: string): Promise<string> {
  const storage = getFirebaseStorage()
  const timestamp = Date.now()
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
  const storagePath = `discography/covers/${albumId}/${timestamp}_${safeName}`
  const storageRef = ref(storage, storagePath)
  await uploadBytes(storageRef, file, { contentType: file.type || 'image/jpeg' })
  return getDownloadURL(storageRef)
}

export async function deleteDiscographyFile(storagePath: string): Promise<void> {
  const storage = getFirebaseStorage()
  await deleteObject(ref(storage, storagePath))
}
