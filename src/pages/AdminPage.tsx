import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAdmin } from '@/hooks/useAdmin'
import { useAuth } from '@/hooks/useAuth'
import { AdminStats } from '@/components/admin/AdminStats'
import { MessageQueue } from '@/components/admin/MessageQueue'
import { AnnouncementManager } from '@/components/admin/AnnouncementManager'
import { AnalyticsDashboard } from '@/components/admin/AnalyticsDashboard'
import { subscribeAllMessages } from '@/services/community.service'
import type { CommunityMessage } from '@/types/community'

type TabId = 'messages' | 'announcements' | 'metrics'

export default function AdminPage() {
  const { user, authLoading } = useAuth()
  const { isAdmin } = useAdmin()
  const [messages, setMessages] = useState<CommunityMessage[]>([])
  const [tab, setTab] = useState<TabId>('messages')

  useEffect(() => {
    if (!isAdmin) return
    const unsub = subscribeAllMessages(setMessages)
    return unsub
  }, [isAdmin])

  if (authLoading) return null

  if (!user || !isAdmin) {
    return <Navigate to="/" replace />
  }

  const tabs: { id: TabId; label: string }[] = [
    { id: 'messages', label: `Mensajes (${messages.filter((m) => m.status === 'pending').length})` },
    { id: 'announcements', label: 'Anuncios' },
    { id: 'metrics', label: 'Métricas' },
  ]

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-12">
      <header className="space-y-1">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Panel de administración
        </p>
        <h1 className="font-display text-3xl text-parchment">Seeker Gospel Admin</h1>
      </header>

      <AdminStats messages={messages} />

      <div role="tablist" className="flex gap-1 rounded-2xl border border-sg-gold/15 bg-navy-mid p-1">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex-1 rounded-xl px-3 py-2 font-ui text-xs font-semibold transition ${
              tab === id
                ? 'bg-navy-light text-parchment shadow-sm'
                : 'text-parchment/40 hover:text-parchment/70'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'messages' ? <MessageQueue messages={messages} /> : null}
      {tab === 'announcements' ? <AnnouncementManager /> : null}
      {tab === 'metrics' ? <AnalyticsDashboard /> : null}

      {/* ── Tools ── */}
      <section className="overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid shadow-sm">
        <div className="border-b border-sg-gold/10 px-5 py-3">
          <p className="font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/50">
            Herramientas
          </p>
        </div>
        <Link
          to="/admin/bitacora"
          className="flex items-center gap-4 px-5 py-4 transition hover:bg-navy-deep/40"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sg-gold/10 text-xl">
            🗒️
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-ui text-sm font-semibold text-parchment/85">Bitácora-Planner</p>
            <p className="font-ui text-xs text-parchment/45">Planeación y registro diario de productividad personal</p>
          </div>
          <span className="text-parchment/30">›</span>
        </Link>
        <Link
          to="/admin/scripture-quest"
          className="flex items-center gap-4 px-5 py-4 transition hover:bg-navy-deep/40 border-t border-sg-gold/10"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sg-gold/10 text-xl">
            ⚔️
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-ui text-sm font-semibold text-parchment/85">Scripture Quest — Contenido</p>
            <p className="font-ui text-xs text-parchment/45">Imágenes y música del juego de preguntas</p>
          </div>
          <span className="text-parchment/30">›</span>
        </Link>
        <Link
          to="/admin/music"
          className="flex items-center gap-4 px-5 py-4 transition hover:bg-navy-deep/40 border-t border-sg-gold/10"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sg-gold/10 text-xl">
            🎵
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-ui text-sm font-semibold text-parchment/85">Seeker Gospel Music</p>
            <p className="font-ui text-xs text-parchment/45">Letra → música → portada, con Creator&apos;s Covenant</p>
          </div>
          <span className="text-parchment/30">›</span>
        </Link>
        <Link
          to="/admin/musica"
          className="flex items-center gap-4 px-5 py-4 transition hover:bg-navy-deep/40 border-t border-sg-gold/10"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sg-gold/10 text-xl">
            💿
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-ui text-sm font-semibold text-parchment/85">Música — Álbumes</p>
            <p className="font-ui text-xs text-parchment/45">Publica álbumes con canciones enlazadas a YouTube</p>
          </div>
          <span className="text-parchment/30">›</span>
        </Link>
      </section>
    </div>
  )
}
