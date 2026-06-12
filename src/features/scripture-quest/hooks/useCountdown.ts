import { useState, useEffect, useRef } from 'react'
import type { CountdownState } from '../types/multiRound'

interface UseCountdownResult {
  secsLeft: number
  isPaused: boolean
  isRunning: boolean
  isDone: boolean
}

/**
 * Derives the current countdown state from a Firestore CountdownState object.
 * Updates every 100ms while running; no timers when paused or done.
 */
export function useCountdown(
  countdown: CountdownState | null | undefined,
  defaultDuration: number,
  onDone?: () => void,
): UseCountdownResult {
  const [secsLeft, setSecsLeft] = useState(defaultDuration)
  const onDoneRef = useRef(onDone)
  const calledDone = useRef(false)
  useEffect(() => {
    onDoneRef.current = onDone
  })

  const isPaused =
    countdown != null &&
    countdown.endsAt === null &&
    countdown.pausedSecsLeft !== null

  const isRunning =
    countdown != null &&
    countdown.endsAt !== null &&
    countdown.pausedSecsLeft === null

  // Compute once for the paused case (no interval needed; deferred setState)
  useEffect(() => {
    if (!isPaused || countdown?.pausedSecsLeft == null) return
    const secs = countdown.pausedSecsLeft
    const t = setTimeout(() => {
      setSecsLeft(secs)
      calledDone.current = false
    }, 0)
    return () => clearTimeout(t)
  }, [isPaused, countdown?.pausedSecsLeft])

  // Tick while running
  useEffect(() => {
    if (!isRunning || !countdown?.endsAt) return

    calledDone.current = false

    const tick = () => {
      const remaining = Math.ceil(
        (new Date(countdown.endsAt!).getTime() - Date.now()) / 1000,
      )
      const clamped = Math.max(0, remaining)
      setSecsLeft(clamped)

      if (clamped <= 0 && !calledDone.current) {
        calledDone.current = true
        onDoneRef.current?.()
      }
    }

    const first = setTimeout(tick, 0)
    const id = setInterval(tick, 100)
    return () => {
      clearTimeout(first)
      clearInterval(id)
    }
  // Only re-run when the endsAt timestamp changes (new countdown or resume)
   
  }, [countdown?.endsAt, isRunning])

  // Reset to full duration when not started (deferred setState)
  useEffect(() => {
    if (countdown && (countdown.endsAt || countdown.pausedSecsLeft !== null)) return
    const t = setTimeout(() => {
      setSecsLeft(defaultDuration)
      calledDone.current = false
    }, 0)
    return () => clearTimeout(t)
  }, [countdown, defaultDuration])

  return {
    secsLeft,
    isPaused,
    isRunning,
    isDone: secsLeft <= 0 && !isPaused,
  }
}
