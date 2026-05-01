import type { UserNoteInput } from '@/types/userNotes'

export type NoteQueueItem = {
  operationId: string
  userId: string
  note: UserNoteInput
  status: 'pending' | 'failed'
  retryCount: number
  lastError: string | null
  createdAt: string
}

const STORAGE_PREFIX = 'lineuponline:notesQueue:v1'

function getStorageKey(userId: string): string {
  return `${STORAGE_PREFIX}:${userId}`
}

function readQueue(userId: string): NoteQueueItem[] {
  const rawValue = window.localStorage.getItem(getStorageKey(userId))
  if (!rawValue) {
    return []
  }

  try {
    const parsedValue: unknown = JSON.parse(rawValue)
    if (!Array.isArray(parsedValue)) {
      return []
    }

    return parsedValue.filter(
      (item): item is NoteQueueItem =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as NoteQueueItem).operationId === 'string' &&
        typeof (item as NoteQueueItem).userId === 'string',
    )
  } catch {
    return []
  }
}

function writeQueue(userId: string, queue: NoteQueueItem[]): void {
  window.localStorage.setItem(getStorageKey(userId), JSON.stringify(queue))
}

export function getPendingQueue(userId: string): NoteQueueItem[] {
  return readQueue(userId).filter((item) => item.status === 'pending' || item.status === 'failed')
}

export function enqueueNote(userId: string, note: UserNoteInput): NoteQueueItem {
  const queue = readQueue(userId)
  const newItem: NoteQueueItem = {
    operationId: crypto.randomUUID(),
    userId,
    note,
    status: 'pending',
    retryCount: 0,
    lastError: null,
    createdAt: new Date().toISOString(),
  }

  const sameNoteIndex = queue.findIndex((item) => item.note.noteId === note.noteId)
  if (sameNoteIndex >= 0) {
    queue[sameNoteIndex] = newItem
  } else {
    queue.push(newItem)
  }

  writeQueue(userId, queue)
  return newItem
}

export function markBatchSynced(userId: string, operationIds: string[]): void {
  const operationIdsSet = new Set(operationIds)
  const queue = readQueue(userId).filter((item) => !operationIdsSet.has(item.operationId))
  writeQueue(userId, queue)
}

export function markBatchFailed(userId: string, operationIds: string[], errorMessage: string): void {
  const operationIdsSet = new Set(operationIds)
  const queue = readQueue(userId).map((item) => {
    if (!operationIdsSet.has(item.operationId)) {
      return item
    }

    return {
      ...item,
      status: 'failed' as const,
      retryCount: item.retryCount + 1,
      lastError: errorMessage,
    }
  })

  writeQueue(userId, queue)
}
