import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const DEFAULT_AVATAR = 'lion'

type Role = 'host' | 'player'

/** Dónde muestra el anfitrión la pantalla grande del juego. */
export type HostDisplayMode = 'stage' | 'remote'

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
  /** 'stage': este dispositivo proyecta; 'remote': controla y la TV muestra. */
  hostDisplayMode: HostDisplayMode
  setHostDisplayMode: (mode: HostDisplayMode) => void
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      playerName: '',
      avatar: DEFAULT_AVATAR,
      setIdentity: (playerName, avatar) => set({ playerName, avatar }),
      activeRoomId: null,
      role: null,
      setActiveRoom: (activeRoomId, role) => set({ activeRoomId, role }),
      clearActiveRoom: () => set({ activeRoomId: null, role: null }),
      hostDisplayMode: 'stage',
      setHostDisplayMode: (hostDisplayMode) => set({ hostDisplayMode }),
    }),
    { name: 'scripture-quest-store' },
  ),
)
