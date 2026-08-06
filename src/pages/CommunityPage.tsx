import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { AnnouncementBanner } from '@/components/community/AnnouncementBanner'
import { MessageForm } from '@/components/community/MessageForm'
import { UserMessageCard } from '@/components/community/UserMessageCard'
import {
  submitMessage,
  subscribeAnnouncements,
  subscribeUserMessages,
} from '@/services/community.service'
import type { AdminAnnouncement, CommunityMessage, MessageType } from '@/types/community'

type TabId = 'announcements' | 'send' | 'my_messages'

export default function CommunityPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState<TabId>('announcements')
  const [announcements, setAnnouncements] = useState<AdminAnnouncement[]>([])
  const [myMessages, setMyMessages] = useState<CommunityMessage[]>([])
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    const unsub = subscribeAnnouncements(setAnnouncements)
    return unsub
  }, [])

  useEffect(() => {
    if (!user) return
    const unsub = subscribeUserMessages(user.uid, setMyMessages)
    return unsub
  }, [user])

  async function handleSubmit(payload: {
    type: MessageType
    content: string
    topicName?: string
  }) {
    if (!user) { navigate('/login'); return }
    await submitMessage({
      ...payload,
      userId: user.uid,
      userName: user.displayName ?? user.email ?? 'Usuario',
    })
    setSubmitSuccess(true)
    setTab('my_messages')
    setTimeout(() => setSubmitSuccess(false), 4000)
  }

  const tabs: { id: TabId; label: string }[] = [
    { id: 'announcements', label: 'Avisos' },
    { id: 'send', label: 'Enviar mensaje' },
    { id: 'my_messages', label: 'Mis mensajes' },
  ]

  return (
    <div className="mx-auto max-w-2xl space-y-6 pb-12">
      <header className="space-y-1">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Comunidad
        </p>
        <h1 className="font-display text-3xl text-parchment">Seeker Gospel</h1>
        <p className="font-ui text-sm text-parchment/55">
          Avisos del equipo, sugerencias y solicitudes de temas.
        </p>
      </header>

      {/* Tabs */}
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
                ? 'bg-sg-gold text-ink shadow-sm'
                : 'text-parchment/50 hover:text-parchment/80'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {submitSuccess ? (
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 px-4 py-3 font-ui text-sm text-emerald-400">
          ✓ Mensaje enviado correctamente. El administrador lo revisará pronto.
        </div>
      ) : null}

      {/* Avisos */}
      {tab === 'announcements' ? (
        <section className="space-y-3">
          {announcements.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-sg-gold/20 p-8 text-center">
              <p className="font-ui text-sm text-parchment/50">No hay avisos por ahora.</p>
            </div>
          ) : (
            announcements.map((a) => <AnnouncementBanner key={a.id} announcement={a} />)
          )}
        </section>
      ) : null}

      {/* Enviar mensaje */}
      {tab === 'send' ? (
        <section>
          {!user ? (
            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/30 p-6 text-center">
              <p className="mb-3 font-ui text-sm text-amber-300">
                Necesitas iniciar sesión para enviar mensajes.
              </p>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="rounded-full bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-ink"
              >
                Iniciar sesión
              </button>
            </div>
          ) : (
            <MessageForm onSubmit={handleSubmit} />
          )}
        </section>
      ) : null}

      {/* Mis mensajes */}
      {tab === 'my_messages' ? (
        <section className="space-y-3">
          {!user ? (
            <div className="rounded-2xl border border-dashed border-sg-gold/20 p-6 text-center">
              <p className="font-ui text-sm text-parchment/50">
                Inicia sesión para ver tus mensajes.
              </p>
            </div>
          ) : myMessages.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-sg-gold/20 p-8 text-center">
              <p className="font-ui text-sm text-parchment/50">
                Aún no has enviado ningún mensaje.
              </p>
            </div>
          ) : (
            myMessages.map((m) => <UserMessageCard key={m.id} message={m} />)
          )}
        </section>
      ) : null}
    </div>
  )
}
