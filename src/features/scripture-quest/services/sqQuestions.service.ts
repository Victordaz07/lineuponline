import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  orderBy,
  writeBatch,
  serverTimestamp,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { SQQuestion, QuestionStatus } from '../types'
import type { ImageQuestionSeed } from '../data/imageQuestionSeeds'

const COL = 'scripturequest_questions'

export async function getImageQuestions(): Promise<SQQuestion[]> {
  const q = query(
    collection(getDb(), COL),
    where('roundType', 'in', ['image_guess', 'mime']),
    orderBy('level'),
  )
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as SQQuestion))
}

export async function updateQuestion(id: string, data: Partial<SQQuestion>): Promise<void> {
  await updateDoc(doc(getDb(), COL, id), { ...data, updatedAt: serverTimestamp() })
}

export async function setQuestionStatus(id: string, status: QuestionStatus): Promise<void> {
  await updateDoc(doc(getDb(), COL, id), {
    status,
    reviewedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function setQuestionImage(id: string, imageUrl: string): Promise<void> {
  await updateDoc(doc(getDb(), COL, id), {
    'content.imageUrl': imageUrl,
    updatedAt: serverTimestamp(),
  })
}

export async function seedImageQuestions(seeds: ImageQuestionSeed[]): Promise<number> {
  const batch = writeBatch(getDb())
  const col = collection(getDb(), COL)
  const now = serverTimestamp()
  seeds.forEach((seed) => {
    const ref = doc(col)
    const content =
      seed.roundType === 'mime'
        ? {
            imageUrl: '',
            answer: seed.answer,
            acceptedVariants: seed.acceptedVariants,
            category: seed.category,
            actorInstructions: seed.actorInstructions ?? '',
          }
        : {
            imageUrl: '',
            imagePrompt: seed.imagePrompt,
            answer: seed.answer,
            acceptedVariants: seed.acceptedVariants,
            category: seed.category,
            hint: seed.hint,
          }
    batch.set(ref, {
      language: 'es',
      level: seed.level,
      topic: 'general',
      category: seed.category,
      roundType: seed.roundType,
      content,
      status: 'draft' as QuestionStatus,
      source: 'manual',
      timesPlayed: 0,
      timesCorrect: 0,
      createdAt: now,
      updatedAt: now,
    })
  })
  await batch.commit()
  return seeds.length
}

export async function createImageQuestion(
  seed: Omit<ImageQuestionSeed, 'imagePrompt'> & { imagePrompt?: string },
): Promise<string> {
  const now = serverTimestamp()
  const content =
    seed.roundType === 'mime'
      ? { imageUrl: '', answer: seed.answer, acceptedVariants: seed.acceptedVariants, category: seed.category, actorInstructions: seed.actorInstructions ?? '' }
      : { imageUrl: '', imagePrompt: seed.imagePrompt ?? '', answer: seed.answer, acceptedVariants: seed.acceptedVariants, category: seed.category, hint: seed.hint }
  const ref = await addDoc(collection(getDb(), COL), {
    language: 'es', level: seed.level, topic: 'general', category: seed.category,
    roundType: seed.roundType, content, status: 'draft' as QuestionStatus,
    source: 'manual', timesPlayed: 0, timesCorrect: 0, createdAt: now, updatedAt: now,
  })
  return ref.id
}
