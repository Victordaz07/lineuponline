import type { AdminAnnouncement, AnnouncementType } from '@/types/community'
import {
  ANNOUNCEMENT_TYPE_LABELS,
  ANNOUNCEMENT_TYPE_COLORS,
} from '@/types/community'

export type AnnouncementBannerProps = {
  announcement: AdminAnnouncement
}

const LEFT_BORDER_COLOR: Record<AnnouncementType, string> = {
  announcement: 'border-l-sg-gold',
  update: 'border-l-sg-gold',
  new_content: 'border-l-jade',
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
 * Banner para anuncios del administrador con borde izquierdo según el tipo.
 */
export function AnnouncementBanner({ announcement }: AnnouncementBannerProps) {
  const { type, title, content, isPinned, createdAt } = announcement

  return (
    <article
      className={[
        'rounded-2xl border border-sg-gold/15 bg-navy-mid shadow-sm',
        'border-l-4',
        LEFT_BORDER_COLOR[type],
      ].join(' ')}
    >
      <div className="px-4 py-3">
        {/* Top row: type chip + pin icon */}
        <div className="mb-2 flex items-center gap-2">
          <span
            className={[
              'rounded-full px-2.5 py-0.5 font-ui text-xs font-semibold',
              ANNOUNCEMENT_TYPE_COLORS[type],
            ].join(' ')}
          >
            {ANNOUNCEMENT_TYPE_LABELS[type]}
          </span>
          {isPinned && (
            <span
              title="Fijado"
              aria-label="Anuncio fijado"
              className="text-base leading-none"
            >
              📌
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-base font-semibold text-parchment/80">{title}</h3>

        {/* Content */}
        <p className="mt-1 text-sm leading-relaxed text-parchment/80">{content}</p>

        {/* Date */}
        <time
          dateTime={createdAt}
          className="mt-2 block font-ui text-xs text-parchment/50"
        >
          {relativeDate(createdAt)}
        </time>
      </div>
    </article>
  )
}
