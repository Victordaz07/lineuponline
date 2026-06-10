import { useEffect, useState } from 'react'
import type { Timestamp } from 'firebase/firestore'

export const QUESTION_SECONDS = 20

/**
 * Server-side timer: the room stores questionStartedAt (a server timestamp)
 * and every client derives the remaining time from it, so all screens stay in
 * sync regardless of when they connected.
 */
export function useGameTimer(
  startedAt: Timestamp | null | undefined,
  durationSeconds: number = QUESTION_SECONDS,
) {
  const startedMs = startedAt ? startedAt.toMillis() : null
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (startedMs === null) return
    const interval = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(interval)
  }, [startedMs])

  if (startedMs === null) {
    return { remaining: durationSeconds, expired: false, progress: 1 }
  }
  const elapsed = (now - startedMs) / 1000
  const remaining = Math.max(0, Math.ceil(durationSeconds - elapsed))
  return {
    remaining,
    expired: elapsed >= durationSeconds,
    progress: Math.max(0, Math.min(1, 1 - elapsed / durationSeconds)),
  }
}
