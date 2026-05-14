import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAdmin } from '@/hooks/useAdmin'
import { useAuth } from '@/hooks/useAuth'
import { AdminStats } from '@/components/admin/AdminStats'
import { MessageQueue } from '@/components/admin/MessageQueue'
import { AnnouncementManager } from '@/components/admin/AnnouncementManager'
import { subscribeAllMessages } from '@/services/community.service'
import type { CommunityMessage } from '@/types/community'

type TabId = 'messages' | 'announcements'

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
    { id: 'messages', label: `Mensajes (${messages.filter((m) => m.status === 'pending').length} pendientes)` },
    { id: 'announcements', label: 'Anuncios' },
  ]

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-12">
      <header className="space-y-1">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-gold-main">
          Panel de administración
        </p>
        <h1 className="font-title text-3xl text-blue-accent">LineUponLine Admin</h1>
      </header>

      <AdminStats messages={messages} />

      <div role="tablist" className="flex gap-1 rounded-2xl border border-blue-accent/10 bg-white p-1">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex-1 rounded-xl px-3 py-2 font-ui text-xs font-semibold transition ${
              tab === id
                ? 'bg-blue-accent text-white shadow-sm'
                : 'text-text-muted hover:text-blue-accent'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'messages' ? <MessageQueue messages={messages} /> : null}
      {tab === 'announcements' ? <AnnouncementManager /> : null}
    </div>
  )
}
