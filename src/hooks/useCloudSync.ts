import { useEffect, useRef } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { isFirebaseConfigured } from '@/lib/firebase'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useHighlightsStore } from '@/stores/highlightsStore'
import { useMarginNotesStore } from '@/stores/marginNotesStore'
import { useStudyJournalStore } from '@/stores/studyJournalStore'
import {
  loadFavorites,
  loadHighlights,
  loadJournalEntries,
  loadMarginNotes,
  syncFavorites,
  syncHighlights,
  syncJournalEntries,
  syncMarginNotes,
} from '@/services/userPersonalData.service'

/**
 * Activa la sincronización bidireccional con Firestore cuando el usuario
 * está autenticado. Se llama desde el componente raíz o Layout para que
 * quede siempre montado.
 *
 * Flujo en login:
 *   1. Pull de Firestore → mezcla con datos locales (los locales prevalecen en conflicto)
 *   2. Push de datos locales a Firestore (copia inicial)
 *
 * En logout: sin efecto, los datos locales quedan intactos.
 */
export function useCloudSync() {
  const { user, isLoggedIn } = useAuth()
  const syncedForRef = useRef<string | null>(null)

  const favorites = useFavoritesStore((s) => s.verses)

  const highlights = useHighlightsStore((s) => s.highlights)
  const marginNotes = useMarginNotesStore((s) => s.notes)
  const journalEntries = useStudyJournalStore((s) => s.entries)

  useEffect(() => {
    if (!isLoggedIn || !user || !isFirebaseConfigured()) return
    // Only run once per user session
    if (syncedForRef.current === user.uid) return
    syncedForRef.current = user.uid

    void (async () => {
      try {
        // 1. Pull remote data
        const [remoteFavs, remoteHighlights, remoteNotes, remoteJournal] = await Promise.all([
          loadFavorites(user.uid),
          loadHighlights(user.uid),
          loadMarginNotes(user.uid),
          loadJournalEntries(user.uid),
        ])

        // 2. Merge: combine remote + local, local wins on id collision
        const favMap = new Map(remoteFavs.map((v) => [v.id, v]))
        useFavoritesStore.getState().verses.forEach((v) => favMap.set(v.id, v))

        const hlMap = new Map(remoteHighlights.map((h) => [h.id, h]))
        useHighlightsStore.getState().highlights.forEach((h) => hlMap.set(h.id, h))

        const noteMap = new Map(remoteNotes.map((n) => [n.id, n]))
        useMarginNotesStore.getState().notes.forEach((n) => noteMap.set(n.id, n))

        const jMap = new Map(remoteJournal.map((e) => [e.entryId, e]))
        useStudyJournalStore.getState().entries.forEach((e) => jMap.set(e.entryId, e))

        // Apply merged data to local stores
        if (remoteFavs.length > 0) {
          useFavoritesStore.setState({ verses: [...favMap.values()] })
        }
        if (remoteHighlights.length > 0) {
          useHighlightsStore.setState({ highlights: [...hlMap.values()] })
        }
        if (remoteNotes.length > 0) {
          useMarginNotesStore.setState({ notes: [...noteMap.values()] })
        }
        if (remoteJournal.length > 0) {
          useStudyJournalStore.setState({ entries: [...jMap.values()] })
        }

        // 3. Push merged state to Firestore
        const mergedFavs = [...favMap.values()]
        const mergedHl = [...hlMap.values()]
        const mergedNotes = [...noteMap.values()]
        const mergedJournal = [...jMap.values()]

        await Promise.all([
          mergedFavs.length > 0 ? syncFavorites(user.uid, mergedFavs) : Promise.resolve(),
          mergedHl.length > 0 ? syncHighlights(user.uid, mergedHl) : Promise.resolve(),
          mergedNotes.length > 0 ? syncMarginNotes(user.uid, mergedNotes) : Promise.resolve(),
          mergedJournal.length > 0 ? syncJournalEntries(user.uid, mergedJournal) : Promise.resolve(),
        ])
      } catch {
        // Non-critical — local data is always intact, sync failure is silent
      }
    })()
  }, [isLoggedIn, user])

  // Push incremental writes when stores change (only while logged in)
  useEffect(() => {
    if (!isLoggedIn || !user || !isFirebaseConfigured()) return
    void syncFavorites(user.uid, favorites).catch(() => {})
  }, [favorites, isLoggedIn, user])

  useEffect(() => {
    if (!isLoggedIn || !user || !isFirebaseConfigured()) return
    void syncHighlights(user.uid, highlights).catch(() => {})
  }, [highlights, isLoggedIn, user])

  useEffect(() => {
    if (!isLoggedIn || !user || !isFirebaseConfigured()) return
    void syncMarginNotes(user.uid, marginNotes).catch(() => {})
  }, [marginNotes, isLoggedIn, user])

  useEffect(() => {
    if (!isLoggedIn || !user || !isFirebaseConfigured()) return
    void syncJournalEntries(user.uid, journalEntries).catch(() => {})
  }, [journalEntries, isLoggedIn, user])
}
