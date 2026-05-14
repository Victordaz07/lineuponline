import { useEffect, useRef } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useStudyJournalStore } from '@/stores/studyJournalStore'
import {
  deleteFavorite,
  fetchFavorites,
  fetchJournalEntries,
  saveFavorite,
  saveJournalEntry,
} from '@/services/firestoreNotes'

/**
 * Syncs favorites and journal entries between local Zustand stores and Firestore.
 * - On login: pulls remote data, merges with local (remote wins on conflicts).
 * - While logged in: write-through on every store mutation.
 * Mount once at the app root inside AuthProvider.
 */
export function useFirestoreSync() {
  const { user } = useAuth()
  const syncedUid = useRef<string | null>(null)
  const setVerses = useFavoritesStore((s) => s.setVerses)
  const setEntries = useStudyJournalStore((s) => s.setEntries)

  // Pull remote data once per login session and merge with local
  useEffect(() => {
    if (!user || syncedUid.current === user.uid) return
    syncedUid.current = user.uid
    const uid = user.uid

    void (async () => {
      try {
        const [remoteVerses, remoteEntries] = await Promise.all([
          fetchFavorites(uid),
          fetchJournalEntries(uid),
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
      } catch (e) {
        console.error('[useFirestoreSync] Error pulling from Firestore:', e)
      }
    })()
  }, [user, setVerses, setEntries])

  // Write-through: mirror store mutations to Firestore
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

    return () => {
      unsubFav()
      unsubJournal()
    }
  }, [user])
}
