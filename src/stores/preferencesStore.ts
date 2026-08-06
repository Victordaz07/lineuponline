import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FontSize = 'sm' | 'md' | 'lg'
export type ThemeMode = 'light' | 'dark' | 'system'

const FONT_SCALE: Record<FontSize, string> = {
  sm: '93.75%',  // ~15px
  md: '100%',    // 16px (default)
  lg: '112.5%',  // 18px
}

type PreferencesState = {
  fontSize: FontSize
  setFontSize: (size: FontSize) => void
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      fontSize: 'md',
      setFontSize: (fontSize) => set({ fontSize }),
      theme: 'system',
      setTheme: (theme) => {
        applyTheme(theme)
        set({ theme })
      },
    }),
    { name: 'lineup-preferences' },
  ),
)

export function applyFontSize(size: FontSize) {
  document.documentElement.style.fontSize = FONT_SCALE[size]
}

/** Resuelve 'system' consultando la preferencia del dispositivo. */
export function resolveTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'system') {
    return typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  }
  return mode
}

/** Aplica el tema al documento (data-theme + color-scheme). */
export function applyTheme(mode: ThemeMode) {
  if (typeof document === 'undefined') return
  const resolved = resolveTheme(mode)
  const el = document.documentElement
  el.setAttribute('data-theme', resolved)
  el.style.colorScheme = resolved
}

/**
 * Inicializa el tema antes del primer render de React leyendo la preferencia
 * persistida directamente de localStorage. Minimiza el parpadeo al cargar.
 */
export function initThemeFromStorage() {
  let mode: ThemeMode = 'system'
  try {
    const raw = localStorage.getItem('lineup-preferences')
    if (raw) {
      const t = JSON.parse(raw)?.state?.theme
      if (t === 'light' || t === 'dark' || t === 'system') mode = t
    }
  } catch {
    /* ignore */
  }
  applyTheme(mode)
}
