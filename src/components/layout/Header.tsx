import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { signOut } from '@/services/authService'
import { isFirebaseConfigured } from '@/lib/firebase'

function BackButton() {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      aria-label="Volver"
      className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 font-ui text-sm font-semibold text-blue-accent transition hover:bg-gold-dim active:scale-95"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 3L5 8l5 5" />
      </svg>
      Volver
    </button>
  )
}

function UserMenu() {
  const { user, isLoggedIn } = useAuth()
  const [open, setOpen] = useState(false)

  const initial =
    user?.displayName?.[0]?.toUpperCase() ??
    user?.email?.[0]?.toUpperCase() ??
    (user?.phoneNumber ? '📱' : '?')

  const displayLabel =
    user?.displayName ?? user?.email ?? user?.phoneNumber ?? 'Mi cuenta'

  async function handleSignOut() {
    setOpen(false)
    try { await signOut() } catch { /* ignore */ }
  }

  if (!isLoggedIn) {
    if (!isFirebaseConfigured()) return null
    return (
      <Link
        to="/login"
        className="flex items-center gap-1.5 rounded-lg border border-gold-main/30 px-3 py-1.5 font-ui text-xs font-semibold text-blue-accent transition hover:border-gold-main/60 hover:bg-gold-dim/30"
      >
        <span aria-hidden="true">☁</span>
        <span className="hidden sm:inline">Guardar progreso</span>
        <span className="sm:hidden">Guardar</span>
      </Link>
    )
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Mi cuenta"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-accent font-ui text-sm font-bold text-white shadow-sm transition hover:brightness-90"
      >
        {initial}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="absolute right-0 top-10 z-50 min-w-[180px] rounded-xl border border-blue-accent/10 bg-white py-1 shadow-lg">
            <div className="border-b border-blue-accent/10 px-4 py-2">
              <p className="max-w-[160px] truncate font-ui text-xs font-semibold text-text-main">
                {displayLabel}
              </p>
              <p className="font-ui text-[10px] text-text-muted">Cuenta activa ✓</p>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              className="flex w-full items-center px-4 py-2.5 font-ui text-sm text-text-muted transition hover:bg-red-50 hover:text-red-500"
            >
              Cerrar sesión
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export function Header() {
  const { pathname } = useLocation()
  const isNested = pathname !== '/'

  return (
    <header className="sticky top-0 z-30 border-b border-blue-accent/10 bg-white/85 px-4 py-3 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center gap-3">
        {isNested ? <BackButton /> : null}
        <div className="flex flex-col gap-0.5">
          <p className="font-ui text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold-main leading-none">
            Edición celestial
          </p>
          <Link to="/" className="font-title text-xl text-blue-accent sm:text-2xl leading-tight">
            LineUponLine
          </Link>
        </div>
        <div className="ml-auto">
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
