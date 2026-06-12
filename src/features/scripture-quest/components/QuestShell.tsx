import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { sound } from '../utils/sound'

/** Dark navy shell shared by all Scripture Quest screens. */
export function QuestShell({ children }: { children: ReactNode }) {
  const [soundOn, setSoundOn] = useState(sound.enabled)
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <div className="rounded-3xl bg-navy-deep p-5 shadow-2xl md:p-10">
        <header className="mb-6 flex items-center justify-between gap-3">
          <Link to="/games/scripture-quest" className="group">
            <p className="font-ui text-[10px] uppercase tracking-[0.35em] text-sg-gold-light">
              Seeker Gospel
            </p>
            <h1 className="font-display text-2xl font-bold text-warm-white transition group-hover:text-sg-gold-bright">
              Scripture Quest
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                sound.setEnabled(!soundOn)
                setSoundOn(!soundOn)
              }}
              aria-label={soundOn ? 'Silenciar sonidos' : 'Activar sonidos'}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-light/60 text-lg transition hover:bg-navy-light"
            >
              {soundOn ? '🔊' : '🔇'}
            </button>
            <span className="text-3xl" aria-hidden>
              ⚔️
            </span>
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}

/** Blocks game screens for unauthenticated visitors (Firestore requires auth). */
export function QuestAuthGate({ children }: { children: ReactNode }) {
  const { isLoggedIn, authLoading, signInWithGoogle } = useAuth()

  if (authLoading) {
    return (
      <p className="py-16 text-center font-ui text-warm-white/60">Cargando sesión…</p>
    )
  }
  if (!isLoggedIn) {
    return (
      <div className="space-y-4 py-12 text-center">
        <p className="text-4xl" aria-hidden>
          🔑
        </p>
        <p className="font-display text-2xl font-bold text-warm-white">
          Inicia sesión para jugar
        </p>
        <p className="font-ui text-sm text-warm-white/60">
          Necesitas una cuenta para unirte a las partidas y guardar tu progreso.
        </p>
        <button
          type="button"
          onClick={() => void signInWithGoogle()}
          className="rounded-xl bg-sg-gold px-6 py-3 font-ui text-sm font-bold uppercase tracking-wide text-navy-deep transition hover:bg-sg-gold-light"
        >
          Iniciar sesión con Google
        </button>
      </div>
    )
  }
  return <>{children}</>
}
