import { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { updateDisplayName, uploadProfilePhoto } from '@/services/authService'
import { useHighlightsStore } from '@/stores/highlightsStore'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useMarginNotesStore } from '@/stores/marginNotesStore'

// ── helpers ──────────────────────────────────────────────────────────────────

function providerInfo(user: { providerData?: { providerId: string }[] } | null) {
  const pid = user?.providerData?.[0]?.providerId ?? ''
  if (pid === 'google.com') return { icon: '🔵', label: 'Google' }
  if (pid === 'phone')      return { icon: '📱', label: 'Teléfono' }
  if (pid === 'password')   return { icon: '✉️', label: 'Correo' }
  return { icon: '☁️', label: 'Firebase' }
}

function formatDate(iso: string | undefined): string {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('es', { year: 'numeric', month: 'long' })
}

function AvatarUploader({
  photoURL,
  initial,
  onUpload,
  uploading,
}: {
  photoURL: string | null | undefined
  initial: string
  onUpload: (file: File) => void
  uploading: boolean
}) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <div className="relative mx-auto h-28 w-28">
      {/* Circle */}
      <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-navy-mid shadow-xl ring-2 ring-sg-gold/25">
        {photoURL
          ? <img src={photoURL} alt="Foto de perfil" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
          : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-mid to-navy-light font-display text-4xl font-bold text-parchment">
              {initial}
            </div>
          )
        }
      </div>

      {/* Upload button */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        aria-label="Cambiar foto"
        className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-navy-mid bg-sg-gold shadow-md transition hover:brightness-90 disabled:opacity-60"
      >
        {uploading
          ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          : <span className="text-sm text-ink" aria-hidden="true">📷</span>
        }
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) onUpload(file)
          e.target.value = ''
        }}
      />
    </div>
  )
}

function StatCard({ icon, value, label }: { icon: string; value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl border border-sg-gold/15 bg-navy-mid px-4 py-4 shadow-sm">
      <span className="text-2xl" aria-hidden="true">{icon}</span>
      <span className="font-display text-2xl font-bold text-sg-gold-light">{value}</span>
      <span className="text-center font-ui text-xs text-parchment/55">{label}</span>
    </div>
  )
}

// ── page ─────────────────────────────────────────────────────────────────────

export default function ProfilePage() {
  const { user, isLoggedIn } = useAuth()

  const highlights = useHighlightsStore((s) => s.highlights)
  const favorites  = useFavoritesStore((s) => s.verses)
  const notes      = useMarginNotesStore((s) => s.notes)

  const [name, setName] = useState(user?.displayName ?? '')
  const [nameEditing, setNameEditing] = useState(false)
  const [nameSaving, setNameSaving] = useState(false)
  const [nameError, setNameError] = useState('')
  const [nameSuccess, setNameSuccess] = useState(false)

  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [photoURL, setPhotoURL] = useState(user?.photoURL ?? null)

  // Sync name when user object changes (e.g. after save)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!nameEditing) setName(user?.displayName ?? '')
  }, [user?.displayName, nameEditing])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhotoURL(user?.photoURL ?? null)
  }, [user?.photoURL])

  if (!isLoggedIn) return <Navigate to="/login" replace />

  const initial =
    (user?.displayName?.[0] ?? user?.email?.[0] ?? '?').toUpperCase()

  const provider = providerInfo(user)

  const memberSince = formatDate(
    user?.metadata?.creationTime
      ? new Date(user.metadata.creationTime).toISOString()
      : undefined,
  )

  async function saveName() {
    const trimmed = name.trim()
    if (!trimmed) { setNameError('El nombre no puede estar vacío'); return }
    setNameSaving(true)
    setNameError('')
    try {
      await updateDisplayName(trimmed)
      setNameEditing(false)
      setNameSuccess(true)
      setTimeout(() => setNameSuccess(false), 2500)
    } catch {
      setNameError('No se pudo guardar. Intenta de nuevo.')
    } finally {
      setNameSaving(false)
    }
  }

  async function handlePhotoUpload(file: File) {
    setUploading(true)
    setUploadError('')
    try {
      const url = await uploadProfilePhoto(file)
      setPhotoURL(url)
    } catch {
      setUploadError('No se pudo subir la foto. Intenta de nuevo.')
    } finally {
      setUploading(false)
    }
  }

  const displayEmail  = user?.email ?? user?.phoneNumber ?? ''
  const displayHandle = user?.displayName ?? user?.email?.split('@')[0] ?? 'Usuario'

  return (
    <div className="mx-auto max-w-lg pb-16 pt-2">

      {/* ── Hero banner ── */}
      <div className="relative mb-20 overflow-hidden rounded-3xl bg-gradient-to-br from-navy-mid via-navy-light to-navy-deep px-6 pb-16 pt-10 text-center shadow-xl">
        {/* Decorative rings */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -right-6 -bottom-8 h-32 w-32 rounded-full bg-white/5" />

        <p className="mb-5 font-ui text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
          Mi Perfil
        </p>

        <AvatarUploader
          photoURL={photoURL}
          initial={initial}
          onUpload={handlePhotoUpload}
          uploading={uploading}
        />

        {uploadError && (
          <p className="mt-2 font-ui text-xs text-rose-300">{uploadError}</p>
        )}

        <h1 className="mt-4 font-display text-2xl text-parchment">{displayHandle}</h1>
        {displayEmail && (
          <p className="mt-1 font-ui text-sm text-white/60">{displayEmail}</p>
        )}
        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-parchment/10 px-3 py-1 font-ui text-xs text-parchment/80">
          <span>{provider.icon}</span>
          <span>{provider.label}</span>
          <span className="mx-1 text-white/30">·</span>
          <span>Desde {memberSince}</span>
        </div>
      </div>

      {/* ── Stats ── (pulled up over banner) */}
      <div className="-mt-16 mb-6 grid grid-cols-3 gap-3 px-2">
        <StatCard icon="✨" value={highlights.length} label="Resaltados" />
        <StatCard icon="⭐" value={favorites.length}  label="Favoritos"  />
        <StatCard icon="📓" value={notes.length}      label="Notas"      />
      </div>

      {/* ── Info personal ── */}
      <section className="mb-4 overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid shadow-sm">
        <div className="border-b border-sg-gold/10 px-5 py-3">
          <p className="font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/50">
            Información personal
          </p>
        </div>

        {/* Name row */}
        <div className="px-5 py-4">
          <p className="mb-1 font-ui text-xs text-parchment/50">Nombre</p>
          {nameEditing
            ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={name}
                  autoFocus
                  maxLength={60}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') void saveName()
                    if (e.key === 'Escape') { setNameEditing(false); setName(user?.displayName ?? '') }
                  }}
                  className="flex-1 rounded-xl border border-sg-gold/20 bg-navy-deep px-3 py-2 font-ui text-sm text-parchment/80 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
                />
                <button
                  type="button"
                  onClick={() => void saveName()}
                  disabled={nameSaving}
                  className="rounded-xl bg-sg-gold px-3 py-2 font-ui text-xs font-semibold text-ink transition hover:brightness-90 disabled:opacity-60"
                >
                  {nameSaving ? '…' : 'Guardar'}
                </button>
                <button
                  type="button"
                  onClick={() => { setNameEditing(false); setName(user?.displayName ?? '') }}
                  className="rounded-xl border border-sg-gold/20 px-3 py-2 font-ui text-xs text-parchment/50 hover:bg-navy-deep/50"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
            )
            : (
              <div className="flex items-center justify-between">
                <span className="font-ui text-sm font-semibold text-parchment/85">
                  {user?.displayName ?? '—'}
                  {nameSuccess && <span className="ml-2 text-emerald-400 text-xs">✓ Guardado</span>}
                </span>
                <button
                  type="button"
                  onClick={() => setNameEditing(true)}
                  className="rounded-lg px-2 py-1 font-ui text-xs text-sg-gold-light transition hover:bg-navy-deep/50"
                >
                  Editar ✏️
                </button>
              </div>
            )
          }
          {nameError && <p className="mt-1 font-ui text-xs text-rose-500">{nameError}</p>}
        </div>

        {/* Email/phone row */}
        {displayEmail && (
          <div className="border-t border-sg-gold/10 px-5 py-4">
            <p className="mb-1 font-ui text-xs text-parchment/50">
              {user?.email ? 'Correo electrónico' : 'Teléfono'}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-ui text-sm text-parchment/80">{displayEmail}</span>
              <span className="font-ui text-xs text-parchment/50" title="Gestionado por el proveedor">🔒</span>
            </div>
          </div>
        )}

        {/* Provider row */}
        <div className="border-t border-sg-gold/10 px-5 py-4">
          <p className="mb-1 font-ui text-xs text-parchment/50">Método de acceso</p>
          <div className="flex items-center gap-2">
            <span>{provider.icon}</span>
            <span className="font-ui text-sm text-parchment/80">{provider.label}</span>
            <span className="ml-auto rounded-full bg-emerald-950/30 px-2 py-0.5 font-ui text-xs font-medium text-emerald-400">
              Activo ✓
            </span>
          </div>
        </div>
      </section>

      {/* ── Cuenta ── */}
      <section className="overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid shadow-sm">
        <div className="border-b border-sg-gold/10 px-5 py-3">
          <p className="font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/50">
            Cuenta
          </p>
        </div>
        <div className="px-5 py-4">
          <p className="mb-1 font-ui text-xs text-parchment/50">Miembro desde</p>
          <p className="font-ui text-sm text-parchment/80">{memberSince}</p>
        </div>
        <div className="border-t border-sg-gold/10 px-5 py-4">
          <p className="mb-1 font-ui text-xs text-parchment/50">ID de usuario</p>
          <p className="font-mono text-xs text-parchment/50 break-all">{user?.uid}</p>
        </div>
      </section>

    </div>
  )
}
