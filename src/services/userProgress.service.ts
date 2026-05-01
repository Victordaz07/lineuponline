import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { z } from 'zod'
import { getDb } from '@/lib/firebase'
import type { UserTopicProgress } from '@/types/userProgress'

const progressUpdateSchema = z.object({
  userId: z.string().min(1),
  topicId: z.string().min(1),
  readModuleIds: z.array(z.string()).optional(),
  quizScore: z.number().min(0).max(100).optional(),
  quizAttempts: z.number().int().min(0).optional(),
  lastQuizAt: z.string().datetime().nullable().optional(),
})

type ProgressUpdateInput = z.infer<typeof progressUpdateSchema>

export async function upsertUserTopicProgress(input: ProgressUpdateInput): Promise<void> {
  const validInput = progressUpdateSchema.parse(input)

  await setDoc(
    doc(getDb(), 'user_progress', validInput.userId, 'topics', validInput.topicId),
    {
      ...(validInput.readModuleIds ? { readModuleIds: validInput.readModuleIds } : {}),
      ...(typeof validInput.quizScore === 'number' ? { quizScore: validInput.quizScore } : {}),
      ...(typeof validInput.quizAttempts === 'number'
        ? { quizAttempts: validInput.quizAttempts }
        : {}),
      ...(validInput.lastQuizAt !== undefined ? { lastQuizAt: validInput.lastQuizAt } : {}),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  )
}

export async function getUserTopicProgress(
  userId: string,
  topicId: string,
): Promise<UserTopicProgress | null> {
  const snap = await getDoc(doc(getDb(), 'user_progress', userId, 'topics', topicId))
  if (!snap.exists()) {
    return null
  }

  const data = snap.data()
  return {
    topicId: snap.id,
    readModuleIds: Array.isArray(data.readModuleIds)
      ? data.readModuleIds.filter((value): value is string => typeof value === 'string')
      : [],
    quizScore: Number(data.quizScore ?? 0),
    quizAttempts: Number(data.quizAttempts ?? 0),
    lastQuizAt:
      typeof data.lastQuizAt === 'string'
        ? data.lastQuizAt
        : data.lastQuizAt?.toDate?.()?.toISOString?.() ?? null,
    updatedAt: data.updatedAt?.toDate?.()?.toISOString?.() ?? new Date(0).toISOString(),
  }
}
