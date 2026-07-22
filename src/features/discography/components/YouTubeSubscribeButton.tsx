// En vez del widget embebido de Google (bloqueado con frecuencia por
// ad-blockers), este es un botón con diseño propio que abre la confirmación
// oficial de suscripción de YouTube en una pestaña nueva. Cero dependencias
// externas.

interface YouTubeSubscribeButtonProps {
  channelId: string // el ID técnico, empieza con "UC..."
  channelName?: string
}

export function YouTubeSubscribeButton({ channelId, channelName }: YouTubeSubscribeButtonProps) {
  const subscribeUrl = `https://www.youtube.com/channel/${channelId}?sub_confirmation=1`

  return (
    <a
      href={subscribeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 font-ui text-[13px] font-semibold text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)]"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12z" />
      </svg>
      Suscríbete{channelName ? ` a ${channelName}` : ''}
    </a>
  )
}
