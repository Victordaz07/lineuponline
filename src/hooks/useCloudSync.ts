import { useEffect, useMemo, useRef } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { isFirebaseConfigured } from '@/lib/firebase'
import { debounce } from '@/lib/debounce'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useHighlightsStore } from '@/stores/highlightsStore'
import { useMarginNotesStore } from '@/stores/marginNotesStore'
import { useStudyJournalStore } from '@/stores/studyJournalStore'
import { useToastStore } from '@/stores/toastStore'
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

  // Initial sync: pull remote + push merged state (runs once per login session)
  useEffect(() => {
    if (!isLoggedIn || !user || !isFirebaseConfigured()) return
    if (syncedForRef.current === user.uid) return
    syncedForRef.current = user.uid

    void (async () => {
      try {
        const [remoteFavs, remoteHighlights, remoteNotes, remoteJournal] = await Promise.all([
          loadFavorites(user.uid),
          loadHighlights(user.uid),
          loadMarginNotes(user.uid),
          loadJournalEntries(user.uid),
        ])

        // Merge: combine remote + local, local wins on id collision
        const favMap = new Map(remoteFavs.map((v) => [v.id, v]))
        useFavoritesStore.getState().verses.forEach((v) => favMap.set(v.id, v))

        const hlMap = new Map(remoteHighlights.map((h) => [h.id, h]))
        useHighlightsStore.getState().highlights.forEach((h) => hlMap.set(h.id, h))

        const noteMap = new Map(remoteNotes.map((n) => [n.id, n]))
        useMarginNotesStore.getState().notes.forEach((n) => noteMap.set(n.id, n))

        const jMap = new Map(remoteJournal.map((e) => [e.entryId, e]))
        useStudyJournalStore.getState().entries.forEach((e) => jMap.set(e.entryId, e))

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
        useToastStore
          .getState()
          .addToast('No se pudo sincronizar con la nube. Tus datos locales están seguros.', 'error')
      }
    })()
  }, [isLoggedIn, user])

  // Incremental sync — debounced 1500ms so rapid mutations don't fire per keystroke
  const syncFavDebounced = useMemo(
    () =>
      debounce((uid: string, data: typeof favorites) => {
        void syncFavorites(uid, data).catch(() => {
          useToastStore
            .getState()
            .addToast('Error al guardar favorito en la nube.', 'error')
        })
      }, 1500),
    [],
  )

  const syncHlDebounced = useMemo(
    () =>
      debounce((uid: string, data: typeof highlights) => {
        void syncHighlights(uid, data).catch(() => {
          useToastStore
            .getState()
            .addToast('Error al guardar resaltado en la nube.', 'error')
        })
      }, 1500),
    [],
  )

  const syncNotesDebounced = useMemo(
    () =>
      debounce((uid: string, data: typeof marginNotes) => {
        void syncMarginNotes(uid, data).catch(() => {
          useToastStore
            .getState()
            .addToast('Error al guardar nota en la nube.', 'error')
        })
      }, 1500),
    [],
  )

  const syncJournalDebounced = useMemo(
    () =>
      debounce((uid: string, data: typeof journalEntries) => {
        void syncJournalEntries(uid, data).catch(() => {
          useToastStore
            .getState()
            .addToast('Error al guardar diario en la nube.', 'error')
        })
      }, 1500),
    [],
  )

  useEffect(() => {
    if (!isLoggedIn || !user || !isFirebaseConfigured()) return
    syncFavDebounced(user.uid, favorites)
    return () => syncFavDebounced.cancel()
  }, [favorites, isLoggedIn, user, syncFavDebounced])

  useEffect(() => {
    if (!isLoggedIn || !user || !isFirebaseConfigured()) return
    syncHlDebounced(user.uid, highlights)
    return () => syncHlDebounced.cancel()
  }, [highlights, isLoggedIn, user, syncHlDebounced])

  useEffect(() => {
    if (!isLoggedIn || !user || !isFirebaseConfigured()) return
    syncNotesDebounced(user.uid, marginNotes)
    return () => syncNotesDebounced.cancel()
  }, [marginNotes, isLoggedIn, user, syncNotesDebounced])

  useEffect(() => {
    if (!isLoggedIn || !user || !isFirebaseConfigured()) return
    syncJournalDebounced(user.uid, journalEntries)
    return () => syncJournalDebounced.cancel()
  }, [journalEntries, isLoggedIn, user, syncJournalDebounced])
}
