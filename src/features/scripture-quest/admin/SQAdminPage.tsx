import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAdmin } from '@/hooks/useAdmin'
import { useAuth } from '@/hooks/useAuth'
import { AudioManager } from './AudioManager'
import { ImageManager } from './ImageManager'

type Tab = 'images' | 'audio'

export default function SQAdminPage() {
  const { user, authLoading } = useAuth()
  const { isAdmin } = useAdmin()
  const [tab, setTab] = useState<Tab>('images')

  if (authLoading) return null
  if (!user || !isAdmin) return <Navigate to="/" replace />

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'images', label: 'Banco de imágenes', icon: '🖼️' },
    { id: 'audio',  label: 'Música del juego',  icon: '🎵' },
  ]

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-ui text-xs text-parchment/40">
        <Link to="/admin" className="hover:text-parchment/70">Admin</Link>
        <span>›</span>
        <span className="text-parchment/70">Scripture Quest</span>
      </nav>

      {/* Header */}
      <header className="space-y-1">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Scripture Quest
        </p>
        <h1 className="font-display text-3xl text-parchment">Gestión de contenido</h1>
        <p className="font-ui text-sm text-parchment/50">
          Sube imágenes para las preguntas visuales y administra las pistas de audio por etapa del juego.
        </p>
      </header>

      {/* Tab bar */}
      <div
        role="tablist"
        className="flex gap-1 rounded-2xl border border-sg-gold/15 bg-navy-mid p-1"
      >
        {tabs.map(({ id, label, icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 font-ui text-sm font-semibold transition ${
              tab === id
                ? 'bg-navy-light text-parchment shadow-sm'
                : 'text-parchment/40 hover:text-parchment/70'
            }`}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === 'images' && <ImageManager />}
      {tab === 'audio'  && <AudioManager />}
    </div>
  )
}
