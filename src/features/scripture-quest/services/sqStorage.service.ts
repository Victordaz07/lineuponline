import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { getFirebaseStorage } from '@/lib/firebase'

export async function uploadSQImage(file: File, questionId: string): Promise<string> {
  const storage = getFirebaseStorage()
  const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg'
  const path = `scripture-quest/images/${questionId}.${ext}`
  const storageRef = ref(storage, path)
  await uploadBytes(storageRef, file, { contentType: file.type })
  return getDownloadURL(storageRef)
}

export async function uploadSQAudio(
  file: File,
  stage: string,
): Promise<{ url: string; storagePath: string }> {
  const storage = getFirebaseStorage()
  const timestamp = Date.now()
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
  const storagePath = `scripture-quest/audio/${stage}/${timestamp}_${safeName}`
  const storageRef = ref(storage, storagePath)
  await uploadBytes(storageRef, file, { contentType: file.type })
  const url = await getDownloadURL(storageRef)
  return { url, storagePath }
}

export async function deleteSQFile(storagePath: string): Promise<void> {
  const storage = getFirebaseStorage()
  const fileRef = ref(storage, storagePath)
  await deleteObject(fileRef)
}
