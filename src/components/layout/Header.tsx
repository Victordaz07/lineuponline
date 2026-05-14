import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { signOut } from '@/services/authService'
import { usePreferencesStore, type FontSize } from '@/stores/preferencesStore'

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

const FONT_OPTIONS: { value: FontSize; label: string; aria: string }[] = [
  { value: 'sm', label: 'A−', aria: 'Texto pequeño' },
  { value: 'md', label: 'A',  aria: 'Texto normal' },
  { value: 'lg', label: 'A+', aria: 'Texto grande' },
]

function providerLabel(user: { providerData?: { providerId: string }[] } | null): string {
  const pid = user?.providerData?.[0]?.providerId ?? ''
  if (pid === 'google.com') return '🔵 Google'
  if (pid === 'phone') return '📱 Teléfono'
  if (pid === 'password') return '✉️ Correo'
  return '☁️ Nube'
}

function UserMenu() {
  const { user, isLoggedIn } = useAuth()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const fontSize = usePreferencesStore((s) => s.fontSize)
  const setFontSize = usePreferencesStore((s) => s.setFontSize)

  const initial =
    user?.displayName?.[0]?.toUpperCase() ??
    user?.email?.[0]?.toUpperCase() ??
    (user?.phoneNumber ? '📱' : '?')

  const displayName = user?.displayName ?? user?.email?.split('@')[0] ?? user?.phoneNumber ?? 'Usuario'
  const displayEmail = user?.email ?? user?.phoneNumber ?? ''

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  async function handleSignOut() {
    setOpen(false)
    try { await signOut() } catch { /* ignore */ }
  }

  if (!isLoggedIn) {
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
    <div className="relative" ref={menuRef}>
      {/* Avatar button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Mi cuenta"
        aria-expanded={open}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-accent font-ui text-sm font-bold text-white shadow-sm transition hover:brightness-90"
      >
        {user?.photoURL
          ? <img src={user.photoURL} alt={displayName} className="h-8 w-8 rounded-full object-cover" referrerPolicy="no-referrer" />
          : initial
        }
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute right-0 top-10 z-50 w-64 overflow-hidden rounded-2xl border border-blue-accent/10 bg-white shadow-xl">

          {/* Profile header */}
          <div className="flex items-center gap-3 border-b border-blue-accent/8 bg-bg-elevated px-4 py-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-accent font-ui text-base font-bold text-white shadow-sm">
              {user?.photoURL
                ? <img src={user.photoURL} alt={displayName} className="h-10 w-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                : initial
              }
            </div>
            <div className="min-w-0">
              <p className="truncate font-ui text-sm font-semibold text-text-main">{displayName}</p>
              {displayEmail && (
                <p className="truncate font-ui text-xs text-text-muted">{displayEmail}</p>
              )}
              <p className="mt-0.5 font-ui text-[10px] text-emerald-500 font-medium">
                {providerLabel(user)} · Activo ✓
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="border-b border-blue-accent/8 py-1">
            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 font-ui text-sm text-text-main transition hover:bg-bg-elevated"
            >
              <span className="text-base" aria-hidden="true">👤</span>
              Mi Perfil
              <span className="ml-auto text-text-muted text-xs">›</span>
            </Link>
            <Link
              to="/my-notes"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 font-ui text-sm text-text-main transition hover:bg-bg-elevated"
            >
              <span className="text-base" aria-hidden="true">📓</span>
              Mi Cuaderno
              <span className="ml-auto text-text-muted text-xs">›</span>
            </Link>
            <Link
              to="/search"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 font-ui text-sm text-text-main transition hover:bg-bg-elevated"
            >
              <span className="text-base" aria-hidden="true">🔍</span>
              Buscar lecciones
              <span className="ml-auto text-text-muted text-xs">›</span>
            </Link>
          </div>

          {/* Font size */}
          <div className="border-b border-blue-accent/8 px-4 py-3">
            <p className="mb-2 font-ui text-[10px] font-semibold uppercase tracking-widest text-text-muted">
              Tamaño de texto
            </p>
            <div className="flex gap-1.5">
              {FONT_OPTIONS.map(({ value, label, aria }) => (
                <button
                  key={value}
                  type="button"
                  aria-label={aria}
                  onClick={() => setFontSize(value)}
                  className={`flex-1 rounded-lg border py-1.5 font-ui font-semibold transition ${
                    fontSize === value
                      ? 'border-blue-accent bg-blue-accent text-white'
                      : 'border-blue-accent/20 text-blue-accent hover:border-blue-accent/40 hover:bg-bg-elevated'
                  } ${value === 'sm' ? 'text-xs' : value === 'lg' ? 'text-base' : 'text-sm'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Sign out */}
          <div className="py-1">
            <button
              type="button"
              onClick={handleSignOut}
              className="flex w-full items-center gap-3 px-4 py-2.5 font-ui text-sm text-rose-500 transition hover:bg-rose-50"
            >
              <span className="text-base" aria-hidden="true">🚪</span>
              Cerrar sesión
            </button>
          </div>

        </div>
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
