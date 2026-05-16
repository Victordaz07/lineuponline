import { useEffect, useRef } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useStudyJournalStore } from '@/stores/studyJournalStore'
import { useLessonProgressStore } from '@/stores/lessonProgressStore'
import {
  deleteFavorite,
  fetchFavorites,
  fetchJournalEntries,
  fetchProgress,
  saveFavorite,
  saveJournalEntry,
  saveProgress,
} from '@/services/firestoreNotes'

/**
 * Syncs favorites, journal entries, and lesson progress between
 * local Zustand stores and Firestore.
 * - On login: pulls remote data, merges with local (remote wins on conflicts).
 * - While logged in: write-through for favorites/journal; debounced snapshot for progress.
 * Mount once at the app root inside AuthProvider.
 */
export function useFirestoreSync() {
  const { user } = useAuth()
  const syncedUid = useRef<string | null>(null)
  const progressDebounce = useRef<ReturnType<typeof setTimeout> | null>(null)

  const setVerses = useFavoritesStore((s) => s.setVerses)
  const setEntries = useStudyJournalStore((s) => s.setEntries)
  const setVisitedTopics = useLessonProgressStore((s) => s.setVisitedTopics)
  const setCompletedQuizzes = useLessonProgressStore((s) => s.setCompletedQuizzes)

  // Pull remote data once per login session and merge with local
  useEffect(() => {
    if (!user || syncedUid.current === user.uid) return
    syncedUid.current = user.uid
    const uid = user.uid

    void (async () => {
      try {
        const [remoteVerses, remoteEntries, remoteProgress] = await Promise.all([
          fetchFavorites(uid),
          fetchJournalEntries(uid),
          fetchProgress(uid),
        ])

        if (remoteVerses.length > 0) {
          const local = useFavoritesStore.getState().verses
          const remoteIds = new Set(remoteVerses.map((v) => v.id))
          const localOnly = local.filter((v) => !remoteIds.has(v.id))
          setVerses([...remoteVerses, ...localOnly])
        }

        if (remoteEntries.length > 0) {
          const local = useStudyJournalStore.getState().entries
          const remoteIds = new Set(remoteEntries.map((e) => e.entryId))
          const localOnly = local.filter((e) => !remoteIds.has(e.entryId))
          setEntries([...remoteEntries, ...localOnly])
        }

        if (remoteProgress) {
          const local = useLessonProgressStore.getState()
          // Merge: union of remote + local-only keys
          const remoteVisited = new Set(remoteProgress.visitedTopics)
          const remoteQuizzes = new Set(remoteProgress.completedQuizzes)
          const mergedVisited = [
            ...remoteProgress.visitedTopics,
            ...local.visitedTopics.filter((k) => !remoteVisited.has(k)),
          ]
          const mergedQuizzes = [
            ...remoteProgress.completedQuizzes,
            ...local.completedQuizzes.filter((k) => !remoteQuizzes.has(k)),
          ]
          setVisitedTopics(mergedVisited)
          setCompletedQuizzes(mergedQuizzes)
        }
      } catch (e) {
        console.error('[useFirestoreSync] Error pulling from Firestore:', e)
      }
    })()
  }, [user, setVerses, setEntries, setVisitedTopics, setCompletedQuizzes])

  // Write-through for favorites and journal; debounced snapshot for progress
  useEffect(() => {
    if (!user) return
    const uid = user.uid

    const unsubFav = useFavoritesStore.subscribe((state, prevState) => {
      if (state.verses === prevState.verses) return
      const prevIds = new Set(prevState.verses.map((v) => v.id))
      const currIds = new Set(state.verses.map((v) => v.id))
      for (const v of state.verses) {
        if (!prevIds.has(v.id)) {
          saveFavorite(uid, v).catch((e) => console.error('[sync] saveFavorite', e))
        }
      }
      for (const v of prevState.verses) {
        if (!currIds.has(v.id)) {
          deleteFavorite(uid, v.id).catch((e) => console.error('[sync] deleteFavorite', e))
        }
      }
    })

    const unsubJournal = useStudyJournalStore.subscribe((state, prevState) => {
      if (state.entries === prevState.entries) return
      const prevIds = new Set(prevState.entries.map((e) => e.entryId))
      for (const e of state.entries) {
        if (!prevIds.has(e.entryId)) {
          saveJournalEntry(uid, e).catch((err) => console.error('[sync] saveJournalEntry', err))
        }
      }
    })

    // Debounced progress snapshot — batches rapid topic visits into one Firestore write
    const unsubProgress = useLessonProgressStore.subscribe((state, prevState) => {
      if (
        state.visitedTopics === prevState.visitedTopics &&
        state.completedQuizzes === prevState.completedQuizzes
      )
        return
      if (progressDebounce.current) clearTimeout(progressDebounce.current)
      progressDebounce.current = setTimeout(() => {
        saveProgress(uid, {
          visitedTopics: useLessonProgressStore.getState().visitedTopics,
          completedQuizzes: useLessonProgressStore.getState().completedQuizzes,
        }).catch((e) => console.error('[sync] saveProgress', e))
      }, 2000)
    })

    return () => {
      unsubFav()
      unsubJournal()
      unsubProgress()
      if (progressDebounce.current) clearTimeout(progressDebounce.current)
    }
  }, [user])
}
