import { useEffect, useState } from 'react'
import {
  createAnnouncement,
  deleteAnnouncement,
  subscribeAnnouncements,
  updateAnnouncement,
} from '@/services/community.service'
import {
  ANNOUNCEMENT_TYPE_COLORS,
  ANNOUNCEMENT_TYPE_LABELS,
  type AdminAnnouncement,
  type AnnouncementType,
} from '@/types/community'

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(iso))
}

const ALL_ANNOUNCEMENT_TYPES: AnnouncementType[] = ['announcement', 'update', 'new_content']

// ── New announcement form ─────────────────────────────────────────────────────

type NewAnnouncementFormProps = {
  onClose: () => void
}

function NewAnnouncementForm({ onClose }: NewAnnouncementFormProps) {
  const [type, setType] = useState<AnnouncementType>('announcement')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isPinned, setIsPinned] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return
    setSubmitting(true)
    try {
      await createAnnouncement({ type, title: title.trim(), content: content.trim(), isPinned })
      onClose()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-blue-accent/10 bg-bg-elevated p-5 space-y-4"
    >
      <h3 className="font-title text-lg text-blue-accent">Nuevo anuncio</h3>

      {/* Type */}
      <div className="space-y-1">
        <label className="font-ui text-xs font-semibold text-text-muted" htmlFor="ann-type">
          Tipo
        </label>
        <select
          id="ann-type"
          value={type}
          onChange={(e) => setType(e.target.value as AnnouncementType)}
          className="w-full rounded-xl border border-blue-accent/20 bg-white px-3 py-2 font-ui text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-blue-accent/30"
        >
          {ALL_ANNOUNCEMENT_TYPES.map((t) => (
            <option key={t} value={t}>
              {ANNOUNCEMENT_TYPE_LABELS[t]}
            </option>
          ))}
        </select>
      </div>

      {/* Title */}
      <div className="space-y-1">
        <label className="font-ui text-xs font-semibold text-text-muted" htmlFor="ann-title">
          Título
        </label>
        <input
          id="ann-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título del anuncio"
          required
          className="w-full rounded-xl border border-blue-accent/20 bg-white px-3 py-2 font-ui text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue-accent/30"
        />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <label className="font-ui text-xs font-semibold text-text-muted" htmlFor="ann-content">
          Contenido
        </label>
        <textarea
          id="ann-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          placeholder="Escribe el contenido del anuncio…"
          required
          className="w-full rounded-xl border border-blue-accent/20 bg-white px-3 py-2 font-ui text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue-accent/30"
        />
      </div>

      {/* isPinned */}
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          checked={isPinned}
          onChange={(e) => setIsPinned(e.target.checked)}
          className="h-4 w-4 rounded border-blue-accent/30 accent-blue-accent"
        />
        <span className="font-ui text-sm text-text-main">Fijar al tope</span>
      </label>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={submitting || !title.trim() || !content.trim()}
          className="rounded-lg border border-gold-main bg-gold-main px-4 py-2 font-ui text-sm font-semibold text-white shadow-sm transition hover:brightness-95 disabled:opacity-50"
        >
          {submitting ? 'Publicando…' : 'Publicar anuncio'}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-blue-accent/30 bg-white px-4 py-2 font-ui text-sm font-semibold text-blue-accent transition hover:bg-blue-accent/5"
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}

// ── Announcement card ─────────────────────────────────────────────────────────

type AnnouncementCardProps = {
  announcement: AdminAnnouncement
}

function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  const [toggling, setToggling] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const typeBadgeClass = ANNOUNCEMENT_TYPE_COLORS[announcement.type]

  async function handleTogglePin() {
    setToggling(true)
    try {
      await updateAnnouncement(announcement.id, { isPinned: !announcement.isPinned })
    } finally {
      setToggling(false)
    }
  }

  async function handleDelete() {
    if (!window.confirm('¿Eliminar este anuncio? Esta acción no se puede deshacer.')) return
    setDeleting(true)
    try {
      await deleteAnnouncement(announcement.id)
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="rounded-2xl border border-blue-accent/10 bg-white p-4 space-y-2">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {announcement.isPinned && (
            <span aria-label="Fijado" title="Fijado al tope" className="text-base">
              📌
            </span>
          )}
          <span className={`rounded-full px-2 py-0.5 font-ui text-xs font-semibold ${typeBadgeClass}`}>
            {ANNOUNCEMENT_TYPE_LABELS[announcement.type]}
          </span>
        </div>
        <span className="font-ui text-xs text-text-muted">{formatDate(announcement.createdAt)}</span>
      </div>

      {/* Title */}
      <p className="font-title text-base text-blue-accent">{announcement.title}</p>

      {/* Content preview */}
      <p className="line-clamp-2 font-ui text-sm leading-relaxed text-text-muted">
        {announcement.content}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 border-t border-blue-accent/10 pt-3">
        <button
          type="button"
          onClick={handleTogglePin}
          disabled={toggling}
          className="rounded-lg border border-blue-accent/30 bg-white px-3 py-1.5 font-ui text-xs font-semibold text-blue-accent transition hover:bg-blue-accent/5 disabled:opacity-50"
        >
          {toggling ? '…' : announcement.isPinned ? 'Desfijar' : 'Fijar'}
        </button>
        <button
          type="button"
          onClick={handleDelete}
          disabled={deleting}
          className="rounded-lg border border-red-600 bg-red-600 px-3 py-1.5 font-ui text-xs font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
        >
          {deleting ? '…' : 'Eliminar'}
        </button>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function AnnouncementManager() {
  const [announcements, setAnnouncements] = useState<AdminAnnouncement[]>([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const unsub = subscribeAnnouncements(setAnnouncements)
    return unsub
  }, [])

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <h2 className="font-title text-xl text-blue-accent">Anuncios</h2>
        {!showForm && (
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="rounded-lg border border-gold-main bg-gold-main px-4 py-2 font-ui text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            + Nuevo anuncio
          </button>
        )}
      </div>

      {/* Inline form */}
      {showForm && <NewAnnouncementForm onClose={() => setShowForm(false)} />}

      {/* Announcements list */}
      {announcements.length === 0 ? (
        <div className="rounded-2xl border border-blue-accent/10 bg-white p-10 text-center">
          <p className="font-ui text-sm text-text-muted">No hay anuncios publicados aún.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {announcements.map((a) => (
            <AnnouncementCard key={a.id} announcement={a} />
          ))}
        </div>
      )}
    </div>
  )
}
