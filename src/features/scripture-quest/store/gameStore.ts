import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AVATARS } from '../data/badges'

type Role = 'host' | 'player'

type GameState = {
  /** Player identity reused across games (persisted locally). */
  playerName: string
  avatar: string
  setIdentity: (name: string, avatar: string) => void
  /** Room the user is currently in, to allow rejoining after a refresh. */
  activeRoomId: string | null
  role: Role | null
  setActiveRoom: (roomId: string, role: Role) => void
  clearActiveRoom: () => void
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      playerName: '',
      avatar: AVATARS[0],
      setIdentity: (playerName, avatar) => set({ playerName, avatar }),
      activeRoomId: null,
      role: null,
      setActiveRoom: (activeRoomId, role) => set({ activeRoomId, role }),
      clearActiveRoom: () => set({ activeRoomId: null, role: null }),
    }),
    { name: 'scripture-quest-store' },
  ),
)
