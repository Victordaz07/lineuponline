import { useState } from 'react'
import {
  deleteMessage,
  replyToMessage,
  updateMessageStatus,
} from '@/services/community.service'
import {
  MESSAGE_STATUS_COLORS,
  MESSAGE_STATUS_LABELS,
  MESSAGE_TYPE_LABELS,
  type CommunityMessage,
  type MessageStatus,
  type MessageType,
} from '@/types/community'

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso))
}

const ALL_STATUSES: MessageStatus[] = ['pending', 'read', 'replied', 'resolved']
const ALL_TYPES: MessageType[] = ['comment', 'suggestion', 'concern', 'topic_request']

// ── Sub-components ────────────────────────────────────────────────────────────

type FilterButtonProps = {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 font-ui text-xs font-semibold transition
        ${
          active
            ? 'border-sg-gold bg-sg-gold text-navy-deep'
            : 'border-sg-gold/20 bg-transparent text-parchment/55 hover:border-sg-gold/50 hover:text-parchment/80'
        }`}
    >
      {children}
    </button>
  )
}

type MessageCardProps = {
  message: CommunityMessage
}

function MessageCard({ message }: MessageCardProps) {
  const [replyOpen, setReplyOpen] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [sending, setSending] = useState(false)
  const [updatingStatus, setUpdatingStatus] = useState(false)

  async function handleStatusChange(status: MessageStatus) {
    setUpdatingStatus(true)
    try {
      await updateMessageStatus(message.id, status)
    } finally {
      setUpdatingStatus(false)
    }
  }

  async function handleReply() {
    if (!replyText.trim()) return
    setSending(true)
    try {
      await replyToMessage(message.id, replyText.trim())
      setReplyText('')
      setReplyOpen(false)
    } finally {
      setSending(false)
    }
  }

  async function handleDelete() {
    if (!window.confirm('¿Eliminar este mensaje? Esta acción no se puede deshacer.')) return
    await deleteMessage(message.id)
  }

  const statusBadgeClass = MESSAGE_STATUS_COLORS[message.status]

  return (
    <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 space-y-3">
      {/* Header row */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-ui text-sm font-semibold text-parchment/85">{message.userName}</span>
          <span className="rounded-full border border-sg-gold/15 bg-navy-deep/50 px-2 py-0.5 font-ui text-xs text-parchment/55">
            {MESSAGE_TYPE_LABELS[message.type]}
          </span>
          <span className={`rounded-full px-2 py-0.5 font-ui text-xs font-semibold ${statusBadgeClass}`}>
            {MESSAGE_STATUS_LABELS[message.status]}
          </span>
        </div>
        <span className="font-ui text-xs text-parchment/50">{formatDate(message.createdAt)}</span>
      </div>

      {/* Topic */}
      {message.topicName && (
        <p className="font-ui text-xs text-parchment/55">
          Tema: <span className="font-semibold text-sg-gold-light">{message.topicName}</span>
        </p>
      )}

      {/* Content */}
      <p className="font-ui text-sm leading-relaxed text-parchment/80">{message.content}</p>

      {/* Admin response */}
      {message.adminResponse && (
        <div className="rounded-xl border-l-4 border-sg-gold/40 bg-sg-gold/5 p-3">
          <p className="mb-1 font-ui text-xs font-semibold text-sg-gold-light">Respuesta del administrador</p>
          <p className="font-ui text-sm text-parchment/80">{message.adminResponse}</p>
          {message.adminRespondedAt && (
            <p className="mt-1 font-ui text-xs text-parchment/50">{formatDate(message.adminRespondedAt)}</p>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2 border-t border-sg-gold/15 pt-3">
        {/* Status selector */}
        <select
          value={message.status}
          disabled={updatingStatus}
          onChange={(e) => handleStatusChange(e.target.value as MessageStatus)}
          className="rounded-lg border border-sg-gold/20 bg-navy-deep px-2 py-1.5 font-ui text-xs text-parchment/80 focus:outline-none focus:ring-2 focus:ring-sg-gold/30 disabled:opacity-50"
          aria-label="Cambiar estado"
        >
          {ALL_STATUSES.map((s) => (
            <option key={s} value={s}>
              {MESSAGE_STATUS_LABELS[s]}
            </option>
          ))}
        </select>

        {/* Reply toggle */}
        <button
          type="button"
          onClick={() => setReplyOpen((v) => !v)}
          className="rounded-lg border border-sg-gold/30 bg-transparent px-3 py-1.5 font-ui text-xs font-semibold text-parchment/70 transition hover:bg-navy-deep/60"
        >
          {replyOpen ? 'Cancelar' : 'Responder'}
        </button>

        {/* Delete */}
        <button
          type="button"
          onClick={handleDelete}
          className="rounded-lg border border-red-600 bg-red-600 px-3 py-1.5 font-ui text-xs font-semibold text-white transition hover:bg-red-700"
        >
          Eliminar
        </button>
      </div>

      {/* Inline reply form */}
      {replyOpen && (
        <div className="space-y-2">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            rows={3}
            placeholder="Escribe tu respuesta..."
            className="w-full rounded-xl border border-sg-gold/20 bg-navy-deep p-3 font-ui text-sm text-parchment/80 placeholder:text-parchment/30 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
          />
          <button
            type="button"
            onClick={handleReply}
            disabled={sending || !replyText.trim()}
            className="rounded-lg border border-sg-gold bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-navy-deep shadow-sm transition hover:brightness-95 disabled:opacity-50"
          >
            {sending ? 'Enviando…' : 'Enviar respuesta'}
          </button>
        </div>
      )}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

type MessageQueueProps = {
  messages: CommunityMessage[]
}

export function MessageQueue({ messages }: MessageQueueProps) {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<MessageStatus | 'all'>('all')
  const [typeFilter, setTypeFilter] = useState<MessageType | 'all'>('all')

  const filtered = messages.filter((m) => {
    const matchesStatus = statusFilter === 'all' || m.status === statusFilter
    const matchesType = typeFilter === 'all' || m.type === typeFilter
    const q = search.toLowerCase()
    const matchesSearch =
      !q ||
      m.content.toLowerCase().includes(q) ||
      m.userName.toLowerCase().includes(q) ||
      (m.topicName?.toLowerCase().includes(q) ?? false)
    return matchesStatus && matchesType && matchesSearch
  })

  return (
    <div className="space-y-4">
      {/* Search */}
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por contenido, usuario o tema…"
        className="w-full rounded-xl border border-sg-gold/20 bg-navy-deep px-4 py-2.5 font-ui text-sm text-parchment/80 placeholder:text-parchment/30 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
      />

      {/* Status filters */}
      <div className="flex flex-wrap gap-2">
        <FilterButton active={statusFilter === 'all'} onClick={() => setStatusFilter('all')}>
          Todos
        </FilterButton>
        {ALL_STATUSES.map((s) => (
          <FilterButton key={s} active={statusFilter === s} onClick={() => setStatusFilter(s)}>
            {MESSAGE_STATUS_LABELS[s]}
          </FilterButton>
        ))}
      </div>

      {/* Type filters */}
      <div className="flex flex-wrap gap-2">
        <FilterButton active={typeFilter === 'all'} onClick={() => setTypeFilter('all')}>
          Todos los tipos
        </FilterButton>
        {ALL_TYPES.map((t) => (
          <FilterButton key={t} active={typeFilter === t} onClick={() => setTypeFilter(t)}>
            {MESSAGE_TYPE_LABELS[t]}
          </FilterButton>
        ))}
      </div>

      {/* Message list */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-10 text-center">
          <p className="font-ui text-sm text-parchment/50">No hay mensajes que coincidan con los filtros.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((m) => (
            <MessageCard key={m.id} message={m} />
          ))}
        </div>
      )}
    </div>
  )
}
