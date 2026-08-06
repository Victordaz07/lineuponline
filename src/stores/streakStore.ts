import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * Racha de estudio: días consecutivos en los que el usuario abre/estudia en la app.
 * Se registra una vez por día natural (hora local). Si pasa más de un día sin
 * actividad, la racha se reinicia a 1 en la siguiente visita.
 */

function dayKey(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/** Días naturales entre dos claves YYYY-MM-DD (b - a). */
function daysBetween(a: string, b: string): number {
  const [ay, am, ad] = a.split('-').map(Number)
  const [by, bm, bd] = b.split('-').map(Number)
  const da = Date.UTC(ay, am - 1, ad)
  const db = Date.UTC(by, bm - 1, bd)
  return Math.round((db - da) / 86_400_000)
}

type StreakState = {
  currentStreak: number
  longestStreak: number
  lastActiveDay: string | null
  /** Registra actividad de hoy y actualiza la racha. Idempotente por día. */
  recordActivity: () => void
}

export const useStreakStore = create<StreakState>()(
  persist(
    (set, get) => ({
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDay: null,
      recordActivity: () => {
        const today = dayKey()
        const { lastActiveDay, currentStreak, longestStreak } = get()
        if (lastActiveDay === today) return
        let next = 1
        if (lastActiveDay) {
          const diff = daysBetween(lastActiveDay, today)
          if (diff === 1) next = currentStreak + 1
          // diff <= 0 no debería ocurrir; diff > 1 => racha rota => next = 1
        }
        set({
          lastActiveDay: today,
          currentStreak: next,
          longestStreak: Math.max(longestStreak, next),
        })
      },
    }),
    { name: 'lineup-streak' },
  ),
)
