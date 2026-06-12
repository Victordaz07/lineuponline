import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import { ROOMS_COLLECTION } from '../services/roomService'
import type { Player, Team } from '../types'

/** Realtime subscription to the players and teams subcollections of a room. */
export function usePlayers(roomId: string | undefined) {
  const [players, setPlayers] = useState<Player[]>([])
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    if (!roomId) return
    const unsubPlayers = onSnapshot(
      collection(getDb(), ROOMS_COLLECTION, roomId, 'players'),
      (snap) => {
        setPlayers(snap.docs.map((d) => d.data() as Player))
      },
    )
    const unsubTeams = onSnapshot(
      collection(getDb(), ROOMS_COLLECTION, roomId, 'teams'),
      (snap) => {
        setTeams(snap.docs.map((d) => ({ ...(d.data() as Omit<Team, 'id'>), id: d.id })))
      },
    )
    return () => {
      unsubPlayers()
      unsubTeams()
    }
  }, [roomId])

  return { players, teams }
}
