import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  writeBatch,
} from 'firebase/firestore'
import { z } from 'zod'
import { getDb } from '@/lib/firebase'
import type { FavoriteVerse } from '@/stores/favoritesStore'
import type { TextHighlight } from '@/stores/highlightsStore'
import type { MarginNote } from '@/stores/marginNotesStore'
import type { StudyJournalEntry } from '@/stores/studyJournalStore'

// ── Schemas ───────────────────────────────────────────────────────────────────

const favoriteVerseSchema = z.object({
  id: z.string(),
  reference: z.string().max(200),
  text: z.string().max(2000),
  lessonId: z.string().max(256),
  moduleId: z.string().max(256),
  topicTitle: z.string().max(200),
  tags: z.array(z.string().max(50)).max(20).default([]),
  savedAt: z.string(),
})

const textHighlightSchema = z.object({
  id: z.string(),
  lessonId: z.string().max(256),
  topicId: z.string().max(256),
  blockKey: z.string().max(512),
  selectedText: z.string().max(1000),
  color: z.enum(['yellow', 'green', 'blue', 'pink']),
  tags: z.array(z.string().max(50)).max(20).default([]),
  note: z.string().max(5000).default(''),
  savedAt: z.string(),
})

const marginNoteSchema = z.object({
  id: z.string(),
  lessonId: z.string().max(256),
  topicId: z.string().max(256),
  blockKey: z.string().max(512),
  blockType: z.string().max(64),
  noteText: z.string().max(5000),
  tags: z.array(z.string().max(50)).max(20).default([]),
  savedAt: z.string(),
  updatedAt: z.string(),
})

const studyJournalEntrySchema = z.object({
  entryId: z.string(),
  lessonId: z.string().max(256),
  moduleId: z.string().max(256),
  topicId: z.string().max(256),
  topicTitle: z.string().max(200),
  promptId: z.string().max(256),
  question: z.string().max(500),
  answerText: z.string().max(10000),
  clientUpdatedAt: z.string(),
})

// ── Helpers ───────────────────────────────────────────────────────────────────

async function batchSet<T extends Record<string, unknown>>(
  path: string,
  items: T[],
  idField: keyof T,
): Promise<void> {
  if (items.length === 0) return
  const db = getDb()
  for (let i = 0; i < items.length; i += 400) {
    const chunk = items.slice(i, i + 400)
    const batch = writeBatch(db)
    for (const item of chunk) {
      const id = String(item[idField])
      batch.set(doc(db, path, id), item, { merge: true })
    }
    await batch.commit()
  }
}

async function safeLoadAll<T>(path: string, schema: z.ZodSchema<T>): Promise<T[]> {
  const snap = await getDocs(collection(getDb(), path))
  const results: T[] = []
  for (const d of snap.docs) {
    const parsed = schema.safeParse({ ...d.data(), id: d.id })
    if (parsed.success) results.push(parsed.data)
    // Silently skip malformed documents rather than crashing
  }
  return results
}

// ── Favorites ─────────────────────────────────────────────────────────────────

export async function syncFavorites(userId: string, verses: FavoriteVerse[]): Promise<void> {
  await batchSet(`user_favorites/${userId}/verses`, verses, 'id')
}

export async function loadFavorites(userId: string): Promise<FavoriteVerse[]> {
  return safeLoadAll(`user_favorites/${userId}/verses`, favoriteVerseSchema)
}

export async function deleteFavorite(userId: string, id: string): Promise<void> {
  await deleteDoc(doc(getDb(), `user_favorites/${userId}/verses`, id))
}

// ── Highlights ────────────────────────────────────────────────────────────────

export async function syncHighlights(userId: string, highlights: TextHighlight[]): Promise<void> {
  await batchSet(`user_highlights/${userId}/items`, highlights, 'id')
}

export async function loadHighlights(userId: string): Promise<TextHighlight[]> {
  return safeLoadAll(`user_highlights/${userId}/items`, textHighlightSchema)
}

export async function deleteHighlight(userId: string, id: string): Promise<void> {
  await deleteDoc(doc(getDb(), `user_highlights/${userId}/items`, id))
}

// ── Margin Notes ──────────────────────────────────────────────────────────────

export async function syncMarginNotes(userId: string, notes: MarginNote[]): Promise<void> {
  await batchSet(`user_margin_notes/${userId}/items`, notes, 'id')
}

export async function loadMarginNotes(userId: string): Promise<MarginNote[]> {
  return safeLoadAll(`user_margin_notes/${userId}/items`, marginNoteSchema)
}

export async function deleteMarginNote(userId: string, id: string): Promise<void> {
  await deleteDoc(doc(getDb(), `user_margin_notes/${userId}/items`, id))
}

// ── Study Journal ─────────────────────────────────────────────────────────────

export async function syncJournalEntries(
  userId: string,
  entries: StudyJournalEntry[],
): Promise<void> {
  await batchSet(`user_journal/${userId}/entries`, entries, 'entryId')
}

export async function loadJournalEntries(userId: string): Promise<StudyJournalEntry[]> {
  return safeLoadAll(`user_journal/${userId}/entries`, studyJournalEntrySchema)
}

export async function deleteJournalEntry(userId: string, entryId: string): Promise<void> {
  await deleteDoc(doc(getDb(), `user_journal/${userId}/entries`, entryId))
}
