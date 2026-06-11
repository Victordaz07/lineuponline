import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { EarnedBadge } from '../types'

type Result = {
  forUid: string
  badges: EarnedBadge[]
}

/** Realtime subscription to the user's earned badges. */
export function useBadges(uid: string | undefined) {
  const [result, setResult] = useState<Result | null>(null)

  useEffect(() => {
    if (!uid) return
    const unsubscribe = onSnapshot(
      collection(getDb(), 'users', uid, 'badges'),
      (snap) => {
        setResult({ forUid: uid, badges: snap.docs.map((d) => d.data() as EarnedBadge) })
      },
      () => setResult({ forUid: uid, badges: [] }),
    )
    return unsubscribe
  }, [uid])

  const current = result && result.forUid === uid ? result : null
  return {
    badges: current?.badges ?? [],
    loading: Boolean(uid) && current === null,
  }
}
