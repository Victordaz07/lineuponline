import type { CommunityMessage } from '@/types/community'
import {
  MESSAGE_TYPE_LABELS,
  MESSAGE_STATUS_LABELS,
  MESSAGE_STATUS_COLORS,
} from '@/types/community'

export type UserMessageCardProps = {
  message: CommunityMessage
}

function relativeDate(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' })
  const seconds = Math.round(diff / 1000)
  if (seconds < 60) return rtf.format(-seconds, 'second')
  const minutes = Math.round(seconds / 60)
  if (minutes < 60) return rtf.format(-minutes, 'minute')
  const hours = Math.round(minutes / 60)
  if (hours < 24) return rtf.format(-hours, 'hour')
  const days = Math.round(hours / 24)
  if (days < 30) return rtf.format(-days, 'day')
  const months = Math.round(days / 30)
  if (months < 12) return rtf.format(-months, 'month')
  return rtf.format(-Math.round(months / 12), 'year')
}

/**
 * Tarjeta que muestra el mensaje de un usuario y la respuesta del administrador si existe.
 */
export function UserMessageCard({ message }: UserMessageCardProps) {
  const {
    type,
    content,
    topicName,
    status,
    adminResponse,
    adminRespondedAt,
    createdAt,
  } = message

  return (
    <article className="rounded-2xl border border-blue-accent/10 bg-bg-surface shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-blue-accent/10 px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* Type pill */}
          <span className="rounded-full border border-blue-accent/20 bg-blue-accent/8 px-2.5 py-0.5 font-ui text-xs font-semibold text-blue-accent">
            {MESSAGE_TYPE_LABELS[type]}
          </span>
          {/* Topic name */}
          {topicName && (
            <span className="font-ui text-xs text-text-muted">
              · <span className="italic">{topicName}</span>
            </span>
          )}
        </div>
        {/* Status badge */}
        <span
          className={[
            'rounded-full px-2.5 py-0.5 font-ui text-xs font-semibold',
            MESSAGE_STATUS_COLORS[status],
          ].join(' ')}
        >
          {MESSAGE_STATUS_LABELS[status]}
        </span>
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <p className="font-reading text-sm leading-relaxed text-text-main">{content}</p>
      </div>

      {/* Admin response */}
      {adminResponse && (
        <div className="mx-4 mb-3 rounded-xl border border-gold-main/40 bg-bg-elevated px-4 py-3">
          <p className="mb-1.5 font-ui text-xs font-semibold uppercase tracking-wide text-gold-main">
            Respuesta del administrador
          </p>
          <p className="font-reading text-sm leading-relaxed text-text-main">{adminResponse}</p>
          {adminRespondedAt && (
            <p className="mt-2 font-ui text-xs text-text-muted">
              {relativeDate(adminRespondedAt)}
            </p>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-blue-accent/10 px-4 py-2">
        <time
          dateTime={createdAt}
          className="font-ui text-xs text-text-muted"
        >
          {relativeDate(createdAt)}
        </time>
      </div>
    </article>
  )
}
