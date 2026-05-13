import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  writeBatch,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { FavoriteVerse } from '@/stores/favoritesStore'
import type { TextHighlight } from '@/stores/highlightsStore'
import type { MarginNote } from '@/stores/marginNotesStore'
import type { StudyJournalEntry } from '@/stores/studyJournalStore'

// ── Helpers ──────────────────────────────────────────────────────────────────

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

async function loadAll<T>(path: string): Promise<T[]> {
  const snap = await getDocs(collection(getDb(), path))
  return snap.docs.map((d) => ({ ...d.data(), id: d.id }) as T)
}

// ── Favorites ─────────────────────────────────────────────────────────────────

export async function syncFavorites(userId: string, verses: FavoriteVerse[]): Promise<void> {
  await batchSet(`user_favorites/${userId}/verses`, verses, 'id')
}

export async function loadFavorites(userId: string): Promise<FavoriteVerse[]> {
  return loadAll<FavoriteVerse>(`user_favorites/${userId}/verses`)
}

export async function deleteFavorite(userId: string, id: string): Promise<void> {
  await deleteDoc(doc(getDb(), `user_favorites/${userId}/verses`, id))
}

// ── Highlights ────────────────────────────────────────────────────────────────

export async function syncHighlights(userId: string, highlights: TextHighlight[]): Promise<void> {
  await batchSet(`user_highlights/${userId}/items`, highlights, 'id')
}

export async function loadHighlights(userId: string): Promise<TextHighlight[]> {
  return loadAll<TextHighlight>(`user_highlights/${userId}/items`)
}

export async function deleteHighlight(userId: string, id: string): Promise<void> {
  await deleteDoc(doc(getDb(), `user_highlights/${userId}/items`, id))
}

// ── Margin Notes ──────────────────────────────────────────────────────────────

export async function syncMarginNotes(userId: string, notes: MarginNote[]): Promise<void> {
  await batchSet(`user_margin_notes/${userId}/items`, notes, 'id')
}

export async function loadMarginNotes(userId: string): Promise<MarginNote[]> {
  return loadAll<MarginNote>(`user_margin_notes/${userId}/items`)
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
  return loadAll<StudyJournalEntry>(`user_journal/${userId}/entries`)
}
