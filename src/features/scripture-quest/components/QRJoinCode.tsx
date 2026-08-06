import { QRCodeSVG } from 'qrcode.react'

type Props = {
  roomId: string
}

/** Session code + QR pointing at the player join URL. */
export function QRJoinCode({ roomId }: Props) {
  const joinUrl = `${window.location.origin}/games/scripture-quest/play/${roomId}`
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 shadow-lg">
      <QRCodeSVG value={joinUrl} size={180} fgColor="#0D1B2A" bgColor="#FFFFFF" />
      <div className="text-center">
        <p className="font-ui text-xs uppercase tracking-widest text-text-muted">
          Código de sala
        </p>
        <p className="font-display text-4xl font-bold tracking-[0.3em] text-ink">
          {roomId}
        </p>
      </div>
      <p className="max-w-[220px] text-center font-ui text-xs text-text-muted">
        Escanea el código QR o ingresa el código en{' '}
        <span className="font-semibold text-ink">/games/scripture-quest</span>
      </p>
    </div>
  )
}
