import { useCallback, useEffect, useMemo, useState } from 'react'
import { saveUserNotesBatch } from '../../../services/firestore/userNotes.service'
import {
  enqueueNote,
  getPendingQueue,
  markBatchFailed,
  markBatchSynced,
} from '../../../services/sync/localNotesQueue'
import type { UserNoteInput } from '../../../types/firestore/userNotes'

type UseSyncNotesOptions = {
  userId: string
  batchSize?: number
}

type UseSyncNotesReturn = {
  isOnline: boolean
  isSyncing: boolean
  pendingCount: number
  lastError: string | null
  saveNote: (note: UserNoteInput) => Promise<void>
  flushPending: () => Promise<void>
}

const DEFAULT_BATCH_SIZE = 20

export function useSyncNotes({ userId, batchSize = DEFAULT_BATCH_SIZE }: UseSyncNotesOptions): UseSyncNotesReturn {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine)
  const [isSyncing, setIsSyncing] = useState<boolean>(false)
  const [pendingCount, setPendingCount] = useState<number>(() => getPendingQueue(userId).length)
  const [lastError, setLastError] = useState<string | null>(null)

  const safeBatchSize = useMemo(() => Math.max(1, batchSize), [batchSize])

  const refreshPendingCount = useCallback(() => {
    setPendingCount(getPendingQueue(userId).length)
  }, [userId])

  const flushPending = useCallback(async () => {
    if (isSyncing || !navigator.onLine) {
      return
    }

    setIsSyncing(true)
    setLastError(null)

    try {
      const pending = getPendingQueue(userId)

      for (let start = 0; start < pending.length; start += safeBatchSize) {
        const batchItems = pending.slice(start, start + safeBatchSize)
        const notePayload = batchItems.map((item) => item.note)

        try {
          await saveUserNotesBatch(userId, notePayload)
          markBatchSynced(
            userId,
            batchItems.map((item) => item.operationId),
          )
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Error desconocido al sincronizar notas'
          markBatchFailed(
            userId,
            batchItems.map((item) => item.operationId),
            message,
          )
          setLastError(message)
          break
        }
      }
    } finally {
      setIsSyncing(false)
      refreshPendingCount()
    }
  }, [isSyncing, refreshPendingCount, safeBatchSize, userId])

  const saveNote = useCallback(
    async (note: UserNoteInput) => {
      enqueueNote(userId, note)
      refreshPendingCount()

      if (navigator.onLine) {
        await flushPending()
      }
    },
    [flushPending, refreshPendingCount, userId],
  )

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      void flushPending()
    }

    const handleOffline = () => {
      setIsOnline(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [flushPending])

  return {
    isOnline,
    isSyncing,
    pendingCount,
    lastError,
    saveNote,
    flushPending,
  }
}
