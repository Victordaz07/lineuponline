/**
 * Banco de preguntas aprobadas (scripturequest_questions).
 * Las partidas NUNCA llaman a la API de Claude: las rondas se sortean del
 * banco aprobado en Firestore, con respaldo en la semilla local incluida
 * en la app (sin costo alguno).
 */
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import { LOCAL_ROUNDS, localBankAsSeedDocs } from '../data/questionBank'
import { MIXED_TOPIC_ID } from '../data/topics'
import type { BankQuestion, GameRound, QuestLevel, Question } from '../types'
import { TEAM_ONLY_TYPES } from '../utils/scoreCalculator'

export const BANK_COLLECTION = 'scripturequest_questions'

function bankCol() {
  return collection(getDb(), BANK_COLLECTION)
}

export function bankDocToRound(data: BankQuestion): GameRound {
  return {
    id: data.id,
    level: data.level,
    topic: data.topic,
    category: data.category,
    roundType: data.roundType,
    content: data.content,
  } as GameRound
}

/** Rondas aprobadas en Firestore; si el banco está vacío, usa la semilla local. */
export async function fetchApprovedRounds(): Promise<GameRound[]> {
  try {
    const snap = await getDocs(query(bankCol(), where('status', '==', 'approved')))
    if (snap.empty) return LOCAL_ROUNDS
    return snap.docs.map((d) => bankDocToRound({ ...(d.data() as BankQuestion), id: d.id }))
  } catch {
    // Sin conexión o sin permisos: el juego sigue funcionando con la semilla
    return LOCAL_ROUNDS
  }
}

function shuffle<T>(items: T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export type RoundSelection = {
  topicId: string
  level: QuestLevel
  count: number
  teamMode: boolean
}

/**
 * Sortea las rondas de una partida: prioriza tema+nivel exactos, rellena con
 * niveles vecinos del mismo tema y finalmente con el mismo nivel de otros
 * temas. Con el tema Mixto, cualquier tema cuenta como coincidencia.
 * Omite rondas exclusivas de equipos cuando no hay equipos.
 */
export function selectRounds(pool: GameRound[], params: RoundSelection): GameRound[] {
  const usable = pool.filter(
    (r) => params.teamMode || !TEAM_ONLY_TYPES.includes(r.roundType),
  )
  const matchesTopic = (r: GameRound) =>
    params.topicId === MIXED_TOPIC_ID || r.topic === params.topicId
  const picked: GameRound[] = []
  const pickedIds = new Set<string>()
  const take = (candidates: GameRound[]) => {
    for (const round of shuffle(candidates)) {
      if (picked.length >= params.count) return
      if (pickedIds.has(round.id)) continue
      pickedIds.add(round.id)
      picked.push(round)
    }
  }

  take(usable.filter((r) => matchesTopic(r) && r.level === params.level))
  // Niveles vecinos del mismo tema, del más cercano al más lejano
  const byDistance = [1, 2, 3]
    .flatMap((d) => [params.level - d, params.level + d])
    .filter((l): l is QuestLevel => l >= 1 && l <= 4)
  for (const level of byDistance) {
    take(usable.filter((r) => matchesTopic(r) && r.level === level))
  }
  take(usable.filter((r) => r.level === params.level))
  take(usable)

  return shuffle(picked)
}

/* ── Administración (solo admins según las reglas de Firestore) ───────── */

export async function fetchAllBankQuestions(): Promise<BankQuestion[]> {
  const snap = await getDocs(bankCol())
  return snap.docs.map((d) => ({ ...(d.data() as BankQuestion), id: d.id }))
}

export async function setQuestionStatus(
  id: string,
  status: BankQuestion['status'],
): Promise<void> {
  await updateDoc(doc(bankCol(), id), {
    status,
    reviewedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function bulkApprove(ids: string[]): Promise<void> {
  const batch = writeBatch(getDb())
  for (const id of ids) {
    batch.update(doc(bankCol(), id), {
      status: 'approved',
      reviewedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
  }
  await batch.commit()
}

export async function deleteBankQuestion(id: string): Promise<void> {
  await deleteDoc(doc(bankCol(), id))
}

/** Guarda preguntas clásicas generadas por IA como borradores a revisar. */
export async function saveAiDrafts(questions: Question[]): Promise<number> {
  const batch = writeBatch(getDb())
  for (const q of questions) {
    const ref = doc(bankCol())
    const draft: Omit<BankQuestion, 'createdAt' | 'updatedAt' | 'reviewedAt' | 'id'> = {
      language: 'es',
      level: q.level,
      topic: q.topic,
      category: q.category,
      roundType: 'classic',
      content: {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
      },
      status: 'draft',
      source: 'ai',
      timesPlayed: 0,
      timesCorrect: 0,
    }
    batch.set(ref, {
      ...draft,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      reviewedAt: null,
    })
  }
  await batch.commit()
  return questions.length
}

/** Siembra el banco local en Firestore (un documento por ronda). */
export async function seedBankToFirestore(): Promise<number> {
  const docs = localBankAsSeedDocs()
  // Firestore limita los lotes a 500 operaciones
  for (let i = 0; i < docs.length; i += 400) {
    const batch = writeBatch(getDb())
    for (const item of docs.slice(i, i + 400)) {
      batch.set(doc(bankCol(), item.id), {
        ...item,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        reviewedAt: serverTimestamp(),
      })
    }
    await batch.commit()
  }
  return docs.length
}

export async function uploadBankImage(file: File, kind: 'image_guess' | 'mime'): Promise<string> {
  const { getFirebaseStorage } = await import('@/lib/firebase')
  const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage')
  const storageRef = ref(
    getFirebaseStorage(),
    `scripture-quest/images/${kind}-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`,
  )
  await uploadBytes(storageRef, file)
  return getDownloadURL(storageRef)
}

/** Crea una pregunta de imagen (image_guess o mime) desde el panel admin. */
export async function createImageQuestion(params: {
  roundType: 'image_guess' | 'mime'
  level: QuestLevel
  topic: string
  imageUrl: string
  answer: string
  acceptedVariants: string[]
  imageCategory: 'personaje' | 'escena' | 'lugar' | 'simbolo'
  hintOrInstructions: string
}): Promise<void> {
  const ref = doc(bankCol())
  const base = {
    language: 'es' as const,
    level: params.level,
    topic: params.topic,
    category: 'personajes' as const,
    status: 'draft' as const,
    source: 'manual' as const,
    timesPlayed: 0,
    timesCorrect: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    reviewedAt: null,
  }
  if (params.roundType === 'image_guess') {
    await setDoc(ref, {
      ...base,
      roundType: 'image_guess',
      content: {
        imageUrl: params.imageUrl,
        imagePrompt: '',
        answer: params.answer,
        acceptedVariants: params.acceptedVariants,
        category: params.imageCategory,
        hint: params.hintOrInstructions,
      },
    })
  } else {
    await setDoc(ref, {
      ...base,
      roundType: 'mime',
      content: {
        imageUrl: params.imageUrl,
        answer: params.answer,
        acceptedVariants: params.acceptedVariants,
        category: params.imageCategory,
        actorInstructions: params.hintOrInstructions,
      },
    })
  }
}
