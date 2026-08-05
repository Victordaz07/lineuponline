import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useAdmin } from '@/hooks/useAdmin'
import { signOut } from '@/services/authService'
import { usePreferencesStore, resolveTheme, type FontSize, type ThemeMode } from '@/stores/preferencesStore'
import { SeekerLogo } from '@/components/common/SeekerLogo'

const THEME_OPTIONS: { value: ThemeMode; label: string; icon: string }[] = [
  { value: 'light', label: 'Claro', icon: '☀️' },
  { value: 'system', label: 'Auto', icon: '💻' },
  { value: 'dark', label: 'Oscuro', icon: '🌙' },
]

function ThemeToggle() {
  const theme = usePreferencesStore((s) => s.theme)
  const setTheme = usePreferencesStore((s) => s.setTheme)
  const resolved = resolveTheme(theme)
  const goingLight = resolved === 'dark'
  return (
    <button
      type="button"
      onClick={() => setTheme(goingLight ? 'light' : 'dark')}
      aria-label={goingLight ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={goingLight ? 'Modo claro' : 'Modo oscuro'}
      className="flex h-8 w-8 items-center justify-center rounded-full text-sg-gold-light transition hover:bg-navy-mid active:scale-95"
    >
      {goingLight ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  )
}

function BackButton() {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      aria-label="Volver"
      className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 font-ui text-sm font-semibold text-warm-white transition hover:bg-navy-mid active:scale-95"
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
  const { isAdmin } = useAdmin()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const fontSize = usePreferencesStore((s) => s.fontSize)
  const setFontSize = usePreferencesStore((s) => s.setFontSize)
  const theme = usePreferencesStore((s) => s.theme)
  const setTheme = usePreferencesStore((s) => s.setTheme)

  const initial =
    user?.displayName?.[0]?.toUpperCase() ??
    user?.email?.[0]?.toUpperCase() ??
    (user?.phoneNumber ? '📱' : '?')

  const displayName = user?.displayName ?? user?.email?.split('@')[0] ?? user?.phoneNumber ?? 'Usuario'
  const displayEmail = user?.email ?? user?.phoneNumber ?? ''

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

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  async function handleSignOut() {
    setOpen(false)
    try {
      await signOut()
    } catch {
      /* ignore */
    }
  }

  if (!isLoggedIn) {
    return (
      <Link
        to="/login"
        className="flex items-center gap-1.5 rounded-lg border border-sg-gold/40 px-3 py-1.5 font-ui text-xs font-semibold text-sg-gold-light transition hover:border-sg-gold hover:bg-navy-mid"
      >
        <span aria-hidden="true">☁</span>
        <span className="hidden sm:inline">Guardar progreso</span>
        <span className="sm:hidden">Guardar</span>
      </Link>
    )
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Mi cuenta"
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-sg-gold font-ui text-sm font-bold text-ink shadow-sm transition hover:brightness-90 focus-visible:ring-2 focus-visible:ring-sg-gold focus-visible:ring-offset-2"
      >
        {user?.photoURL ? (
          <img src={user.photoURL} alt={displayName} className="h-8 w-8 rounded-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          initial
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-50 w-64 overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid shadow-xl">
          <div className="flex items-center gap-3 border-b border-sg-gold/15 bg-navy-deep px-4 py-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sg-gold font-ui text-base font-bold text-ink shadow-sm">
              {user?.photoURL ? (
                <img src={user.photoURL} alt={displayName} className="h-10 w-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                initial
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate font-ui text-sm font-semibold text-parchment/85">{displayName}</p>
              {displayEmail ? <p className="truncate font-ui text-xs text-parchment/55">{displayEmail}</p> : null}
              <p className="mt-0.5 font-ui text-[10px] font-medium text-emerald-500">
                {providerLabel(user)} · Activo ✓
              </p>
            </div>
          </div>

          <div className="border-b border-sg-gold/15 py-1">
            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 font-ui text-sm text-parchment/80 transition hover:bg-navy-deep/50"
            >
              <span className="text-base" aria-hidden="true">👤</span>
              Mi Perfil
              <span className="ml-auto text-parchment/55 text-xs">›</span>
            </Link>
            <Link
              to="/my-notes"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 font-ui text-sm text-parchment/80 transition hover:bg-navy-deep/50"
            >
              <span className="text-base" aria-hidden="true">📓</span>
              Mi Cuaderno
              <span className="ml-auto text-parchment/55 text-xs">›</span>
            </Link>
            <Link
              to="/games/scripture-quest"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 font-ui text-sm text-parchment/80 transition hover:bg-navy-deep/50"
            >
              <span className="text-base" aria-hidden="true">⚔️</span>
              Scripture Quest
              <span className="ml-auto text-parchment/55 text-xs">›</span>
            </Link>
            <Link
              to="/profile/scripture-quest"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 font-ui text-sm text-parchment/80 transition hover:bg-navy-deep/50"
            >
              <span className="text-base" aria-hidden="true">🏆</span>
              Mis insignias
              <span className="ml-auto text-parchment/55 text-xs">›</span>
            </Link>
            <Link
              to="/community"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 font-ui text-sm text-parchment/80 transition hover:bg-navy-deep/50"
            >
              <span className="text-base" aria-hidden="true">💬</span>
              Comunidad
              <span className="ml-auto text-parchment/55 text-xs">›</span>
            </Link>
            <Link
              to="/search"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 font-ui text-sm text-parchment/80 transition hover:bg-navy-deep/50"
            >
              <span className="text-base" aria-hidden="true">🔍</span>
              Buscar lecciones
              <span className="ml-auto text-parchment/55 text-xs">›</span>
            </Link>
            {isAdmin ? (
              <Link
                to="/admin"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-t border-sg-gold/15 bg-sg-gold/10 px-4 py-2.5 font-ui text-sm font-semibold text-sg-gold-light transition hover:bg-sg-gold/20"
              >
                <span className="text-base" aria-hidden="true">🛡️</span>
                Panel admin
                <span className="ml-auto text-sg-gold/50 text-xs">›</span>
              </Link>
            ) : null}
          </div>

          <div className="border-b border-sg-gold/15 px-4 py-3">
            <p className="mb-2 font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/50">
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
                      ? 'border-sg-gold bg-sg-gold text-ink'
                      : 'border-sg-gold/20 text-parchment/65 hover:border-sg-gold/40 hover:bg-navy-deep/40'
                  } ${value === 'sm' ? 'text-xs' : value === 'lg' ? 'text-base' : 'text-sm'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-b border-sg-gold/15 px-4 py-3">
            <p className="mb-2 font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/50">
              Apariencia
            </p>
            <div className="flex gap-1.5">
              {THEME_OPTIONS.map(({ value, label, icon }) => (
                <button
                  key={value}
                  type="button"
                  aria-label={`Tema ${label}`}
                  aria-pressed={theme === value}
                  onClick={() => setTheme(value)}
                  className={`flex flex-1 flex-col items-center gap-0.5 rounded-lg border py-1.5 font-ui text-[11px] font-semibold transition ${
                    theme === value
                      ? 'border-sg-gold bg-sg-gold text-ink'
                      : 'border-sg-gold/20 text-parchment/65 hover:border-sg-gold/40 hover:bg-navy-deep/40'
                  }`}
                >
                  <span className="text-sm" aria-hidden="true">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="py-1">
            <button
              type="button"
              onClick={handleSignOut}
              className="flex w-full items-center gap-3 px-4 py-2.5 font-ui text-sm text-rose-400 transition hover:bg-red-950/40"
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
    <header className="sticky top-0 z-30 border-b border-sg-gold/20 bg-navy-deep/95 px-4 py-3 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center gap-3">
        {isNested ? <BackButton /> : null}
        <Link to="/" className="flex items-center gap-2.5">
          <SeekerLogo size={34} variant="dark" rounded="rounded" />
          <div className="flex flex-col gap-0">
            <p className="font-ui text-[9px] font-medium uppercase tracking-[0.18em] leading-none text-sg-gold">
              Deep Gospel Study
            </p>
            <span className="font-display text-[19px] font-semibold leading-tight text-parchment">
              Seeker Gospel
            </span>
          </div>
        </Link>
        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
