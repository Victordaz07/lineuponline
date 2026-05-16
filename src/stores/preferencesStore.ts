import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FontSize = 'sm' | 'md' | 'lg'

const FONT_SCALE: Record<FontSize, string> = {
  sm: '93.75%',  // ~15px
  md: '100%',    // 16px (default)
  lg: '112.5%',  // 18px
}

type PreferencesState = {
  fontSize: FontSize
  setFontSize: (size: FontSize) => void
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      fontSize: 'md',
      setFontSize: (fontSize) => set({ fontSize }),
    }),
    { name: 'lineup-preferences' },
  ),
)

export function applyFontSize(size: FontSize) {
  document.documentElement.style.fontSize = FONT_SCALE[size]
}
