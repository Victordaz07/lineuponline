import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

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
  const { user, signOutUser } = useAuth()
  const [open, setOpen] = useState(false)

  if (!user) {
    return (
      <Link
        to="/login"
        className="rounded-full border border-blue-accent/20 px-3 py-1.5 font-ui text-xs font-semibold text-blue-accent transition hover:bg-gold-dim"
      >
        Ingresar
      </Link>
    )
  }

  const initials = user.displayName
    ? user.displayName.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase()
    : user.email?.[0]?.toUpperCase() ?? '?'

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menú de usuario"
        className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-gold-main/40 bg-blue-accent/10 font-ui text-xs font-bold text-blue-accent transition hover:border-gold-main"
      >
        {user.photoURL ? (
          <img src={user.photoURL} alt={user.displayName ?? 'Avatar'} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          initials
        )}
      </button>

      {open ? (
        <div className="absolute right-0 top-10 z-50 min-w-[180px] rounded-2xl border border-blue-accent/10 bg-white p-3 shadow-lg">
          <p className="mb-2 truncate font-ui text-xs font-semibold text-text-muted">
            {user.displayName ?? user.email}
          </p>
          <button
            type="button"
            onClick={async () => { setOpen(false); await signOutUser() }}
            className="w-full rounded-xl px-3 py-2 text-left font-ui text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Cerrar sesión
          </button>
        </div>
      ) : null}

      {open ? (
        <div
          className="fixed inset-0 z-40"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      ) : null}
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
