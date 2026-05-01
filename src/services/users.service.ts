import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { z } from 'zod'
import { db } from '@/lib/firebase'
import type { UserProfile } from '@/types/users'

const userProfileSchema = z.object({
  userId: z.string().min(1),
  displayName: z.string().min(1),
  email: z.string().email(),
  role: z.enum(['student', 'teacher', 'admin']),
})

type UpsertUserProfileInput = z.infer<typeof userProfileSchema>

export async function upsertUserProfile(input: UpsertUserProfileInput): Promise<void> {
  const validInput = userProfileSchema.parse(input)

  await setDoc(
    doc(db, 'users', validInput.userId),
    {
      displayName: validInput.displayName,
      email: validInput.email,
      role: validInput.role,
      lastAccessAt: serverTimestamp(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  )
}

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  const snap = await getDoc(doc(db, 'users', userId))
  if (!snap.exists()) {
    return null
  }

  const data = snap.data()
  return {
    userId: snap.id,
    displayName: String(data.displayName ?? ''),
    email: String(data.email ?? ''),
    role: (data.role ?? 'student') as UserProfile['role'],
    lastAccessAt: data.lastAccessAt?.toDate?.()?.toISOString?.() ?? new Date(0).toISOString(),
    createdAt: data.createdAt?.toDate?.()?.toISOString?.() ?? new Date(0).toISOString(),
    updatedAt: data.updatedAt?.toDate?.()?.toISOString?.() ?? new Date(0).toISOString(),
  }
}
