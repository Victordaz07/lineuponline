/**
 * Sistema de iconos SVG de Scripture Quest: 8 avatares + 8 insignias.
 * Trazos geométricos simples en currentColor para heredar el color del texto.
 */
export type SQAvatarId =
  | 'lion'
  | 'dove'
  | 'lamb'
  | 'eagle'
  | 'star'
  | 'olive'
  | 'mountain'
  | 'trumpet'

export type SQBadgeIcon =
  | 'flame'
  | 'scroll'
  | 'bolt'
  | 'shield'
  | 'compass'
  | 'crown'
  | 'book'
  | 'candle'

export type SQIconName = SQAvatarId | SQBadgeIcon

// eslint-disable-next-line react-refresh/only-export-components
export const SQ_AVATARS: { id: SQAvatarId; label: string }[] = [
  { id: 'lion', label: 'León de Judá' },
  { id: 'dove', label: 'Paloma' },
  { id: 'lamb', label: 'Cordero' },
  { id: 'eagle', label: 'Águila' },
  { id: 'star', label: 'Estrella' },
  { id: 'olive', label: 'Olivo' },
  { id: 'mountain', label: 'Monte' },
  { id: 'trumpet', label: 'Trompeta' },
]

const PATHS: Record<SQIconName, React.ReactNode> = {
  lion: (
    <>
      <circle cx="12" cy="13" r="5.5" />
      <path d="M12 4.5a8.5 8.5 0 0 1 8.5 8.5M12 4.5A8.5 8.5 0 0 0 3.5 13" />
      <path d="M9.5 12.2h.01M14.5 12.2h.01M10.3 15.2c.5.6 1.1.9 1.7.9s1.2-.3 1.7-.9" />
      <path d="M6 7l-1.5-2M18 7l1.5-2M4.2 16.5L2.8 18M19.8 16.5l1.4 1.5" />
    </>
  ),
  dove: (
    <>
      <path d="M4 14c4 1 7-.5 9-3.5 1-1.6 2.5-2.5 4.5-2.3l2 .3-2 1.7c.4 4.5-2.8 8-7.5 8-2.6 0-4.8-1.4-6-4.2Z" />
      <path d="M12 10.5C10.5 7.5 8 6 4.5 6.5c1.4 1.6 2 3.3 2.1 5.4" />
      <path d="M16.6 8.7h.01" />
    </>
  ),
  lamb: (
    <>
      <circle cx="8.5" cy="9" r="3" />
      <path d="M10.8 7c1-1.6 3.2-1.8 4.6-.6 1.7-.3 3.3.8 3.5 2.6.2 1.5-.7 2.8-2.1 3.3l-.9 6.2h-2.2l-.5-3.5h-3.4l-.5 3.5H7.1l-.8-5.6" />
      <path d="M7.4 8.6h.01" />
    </>
  ),
  eagle: (
    <>
      <path d="M12 16.5 3 9.5c2.8-.6 5 0 6.6 1.6C10 8 11 5.8 12 4c1 1.8 2 4 2.4 7.1C16 9.5 18.2 8.9 21 9.5l-9 7Z" />
      <path d="M12 16.5V20M9.5 19.5h5" />
    </>
  ),
  star: (
    <>
      <path d="m12 3.5 2.4 5 5.6.7-4.1 3.8 1.1 5.5L12 15.7l-5 2.8 1.1-5.5L4 9.2l5.6-.7Z" />
    </>
  ),
  olive: (
    <>
      <path d="M12 20c0-6 2.5-11 8-14-1 6.5-3.5 11-8 14Z" />
      <path d="M12 20C12 15 10 10.5 4 8c.8 5.6 3.4 9.8 8 12Z" />
      <path d="M12 20v1.5" />
    </>
  ),
  mountain: (
    <>
      <path d="m3 19 6.5-11L13 13l2.5-4L21 19H3Z" />
      <path d="M9.5 8 11 10.4 9.3 13" />
      <circle cx="17.5" cy="5.5" r="1.6" />
    </>
  ),
  trumpet: (
    <>
      <path d="M4 10.5h9c2.5 0 4.5-1.5 6.5-3.5v10c-2-2-4-3.5-6.5-3.5H4Z" />
      <path d="M4 9v5M7.5 13.5v3M10.5 13.5v3" />
    </>
  ),
  flame: (
    <>
      <path d="M12 3.5c.6 3-0.8 4.6-2.4 6.2C8 11.3 7 13 7 15a5 5 0 0 0 10 0c0-2.4-1.2-4.2-2.4-5.8-.9-1.2-1.8-2.4-1.6-4.2" />
      <path d="M12 20.5a2.6 2.6 0 0 1-2.6-2.6c0-1.4.9-2.2 1.6-3 .5-.6 1-1.1 1-1.9.8 1 2.6 2.4 2.6 4.9a2.6 2.6 0 0 1-2.6 2.6Z" />
    </>
  ),
  scroll: (
    <>
      <path d="M6 4h11a2 2 0 0 1 2 2v1.5h-3.5" />
      <path d="M15.5 6v12a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2v-1.5H12" />
      <path d="M7 9.5h5M7 12.5h5M7 15.5h3.5" />
    </>
  ),
  bolt: (
    <>
      <path d="M13.5 3 5.5 13.5h5L10.5 21l8-10.5h-5Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.8v5.4c0 4.5 2.9 7.7 7 9.8 4.1-2.1 7-5.3 7-9.8V5.8Z" />
      <path d="M12 7.5v6M9 10.5h6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5Z" />
      <path d="M12 3.5v1.2M12 19.3v1.2M3.5 12h1.2M19.3 12h1.2" />
    </>
  ),
  crown: (
    <>
      <path d="m4 8 3.5 3L12 5l4.5 6L20 8l-1.5 9.5h-13Z" />
      <path d="M5.5 20h13" />
      <path d="M12 12.5h.01" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.5C10.4 5 8 4.3 4 4.5v13c4-.2 6.4.5 8 2 1.6-1.5 4-2.2 8-2v-13c-4-.2-6.4.5-8 2Z" />
      <path d="M12 6.5v13" />
      <path d="M7 9h2.5M7 12h2.5M14.5 9H17M14.5 12H17" />
    </>
  ),
  candle: (
    <>
      <path d="M9.5 11h5V20a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1Z" />
      <path d="M12 11V8.8" />
      <path d="M12 8.5c-1.1-.7-1.6-1.6-1.6-2.6 0-1.1.6-2 1.6-2.9 1 .9 1.6 1.8 1.6 2.9 0 1-.5 1.9-1.6 2.6Z" />
      <path d="M9.5 14.5h5" />
    </>
  ),
}

type Props = {
  name: SQIconName
  size?: number
  className?: string
  title?: string
}

export function SQIcon({ name, size = 24, className = '', title }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      className={className}
    >
      {PATHS[name]}
    </svg>
  )
}

/** Avatar con marco circular de marca. */
export function SQAvatar({
  id,
  size = 40,
  className = '',
}: {
  id: string
  size?: number
  className?: string
}) {
  const valid = SQ_AVATARS.some((a) => a.id === id) ? (id as SQAvatarId) : 'star'
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: 'var(--navy-light)',
        color: 'var(--gold-bright)',
        border: '2px solid var(--gold)',
      }}
    >
      <SQIcon name={valid} size={Math.round(size * 0.62)} />
    </span>
  )
}
