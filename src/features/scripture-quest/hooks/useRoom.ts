import { useEffect, useState } from 'react'
import { onSnapshot } from 'firebase/firestore'
import { roomRef } from '../services/roomService'
import type { Room } from '../types'

type Result = {
  forRoom: string
  room: Room | null
  error: string | null
}

/** Realtime subscription to a room document. */
export function useRoom(roomId: string | undefined) {
  const [result, setResult] = useState<Result | null>(null)

  useEffect(() => {
    if (!roomId) return
    const unsubscribe = onSnapshot(
      roomRef(roomId),
      (snap) => {
        setResult({
          forRoom: roomId,
          room: snap.exists() ? (snap.data() as Room) : null,
          error: null,
        })
      },
      () => {
        setResult({ forRoom: roomId, room: null, error: 'No se pudo conectar con la sala.' })
      },
    )
    return unsubscribe
  }, [roomId])

  const current = result && result.forRoom === roomId ? result : null
  return {
    room: current?.room ?? null,
    loading: Boolean(roomId) && current === null,
    error: current?.error ?? null,
  }
}
