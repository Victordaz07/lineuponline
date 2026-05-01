import { collection, doc, getDocs, orderBy, query, serverTimestamp, setDoc, writeBatch } from 'firebase/firestore'
import { z } from 'zod'
import { getDb } from '@/lib/firebase'
import type { UserNote, UserNoteInput } from '@/types/userNotes'

const noteInputSchema = z.object({
  noteId: z.string().min(1),
  topicId: z.string().min(1),
  moduleId: z.string().min(1),
  question: z.string().min(1),
  answerText: z.string().min(1),
  clientUpdatedAt: z.string().datetime(),
})

const MAX_BATCH_SIZE = 50

export async function saveUserNote(userId: string, input: UserNoteInput): Promise<void> {
  const validNote = noteInputSchema.parse(input)

  await setDoc(
    doc(getDb(), 'user_notes', userId, 'notes', validNote.noteId),
    {
      topicId: validNote.topicId,
      moduleId: validNote.moduleId,
      question: validNote.question,
      answerText: validNote.answerText,
      clientUpdatedAt: validNote.clientUpdatedAt,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  )
}

export async function saveUserNotesBatch(userId: string, notes: UserNoteInput[]): Promise<void> {
  if (notes.length === 0) {
    return
  }

  const validatedNotes = notes.map((note) => noteInputSchema.parse(note))

  for (let start = 0; start < validatedNotes.length; start += MAX_BATCH_SIZE) {
    const chunk = validatedNotes.slice(start, start + MAX_BATCH_SIZE)
    const batch = writeBatch(getDb())

    for (const note of chunk) {
      batch.set(
        doc(getDb(), 'user_notes', userId, 'notes', note.noteId),
        {
          topicId: note.topicId,
          moduleId: note.moduleId,
          question: note.question,
          answerText: note.answerText,
          clientUpdatedAt: note.clientUpdatedAt,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      )
    }

    await batch.commit()
  }
}

export async function getUserNotes(userId: string): Promise<UserNote[]> {
  const notesRef = collection(getDb(), 'user_notes', userId, 'notes')
  const notesQuery = query(notesRef, orderBy('updatedAt', 'desc'))
  const snaps = await getDocs(notesQuery)

  return snaps.docs.map((item) => {
    const data = item.data()
    return {
      noteId: item.id,
      topicId: String(data.topicId ?? ''),
      moduleId: String(data.moduleId ?? ''),
      question: String(data.question ?? ''),
      answerText: String(data.answerText ?? ''),
      clientUpdatedAt: String(data.clientUpdatedAt ?? new Date(0).toISOString()),
      updatedAt: data.updatedAt?.toDate?.()?.toISOString?.() ?? new Date(0).toISOString(),
    }
  })
}
