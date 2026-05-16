import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { FavoriteVerse } from '@/stores/favoritesStore'
import type { StudyJournalEntry } from '@/stores/studyJournalStore'

export type ProgressSnapshot = {
  visitedTopics: string[]
  completedQuizzes: string[]
}

export async function fetchFavorites(uid: string): Promise<FavoriteVerse[]> {
  const snap = await getDocs(collection(getDb(), 'users', uid, 'favorites'))
  return snap.docs.map((d) => d.data() as FavoriteVerse)
}

export async function saveFavorite(uid: string, verse: FavoriteVerse): Promise<void> {
  await setDoc(doc(getDb(), 'users', uid, 'favorites', verse.id), verse)
}

export async function deleteFavorite(uid: string, id: string): Promise<void> {
  await deleteDoc(doc(getDb(), 'users', uid, 'favorites', id))
}

export async function fetchJournalEntries(uid: string): Promise<StudyJournalEntry[]> {
  const snap = await getDocs(collection(getDb(), 'users', uid, 'journalEntries'))
  return snap.docs.map((d) => d.data() as StudyJournalEntry)
}

export async function saveJournalEntry(uid: string, entry: StudyJournalEntry): Promise<void> {
  await setDoc(doc(getDb(), 'users', uid, 'journalEntries', entry.entryId), entry)
}

export async function fetchProgress(uid: string): Promise<ProgressSnapshot | null> {
  const snap = await getDoc(doc(getDb(), 'users', uid, 'appState', 'progress'))
  if (!snap.exists()) return null
  const data = snap.data()
  return {
    visitedTopics: Array.isArray(data.visitedTopics) ? (data.visitedTopics as string[]) : [],
    completedQuizzes: Array.isArray(data.completedQuizzes) ? (data.completedQuizzes as string[]) : [],
  }
}

export async function saveProgress(uid: string, snapshot: ProgressSnapshot): Promise<void> {
  await setDoc(doc(getDb(), 'users', uid, 'appState', 'progress'), snapshot)
}
