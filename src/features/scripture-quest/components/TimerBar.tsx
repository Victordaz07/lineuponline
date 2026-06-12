/**
 * Barra de tiempo del juego: se vacía conforme pasa el tiempo, cambia de
 * dorado → ámbar → rojo, acelera sus franjas al final y emite tic-tac en los
 * últimos 5 segundos. Sustituye al numerito solitario en todas las pantallas.
 */
import { useEffect } from 'react'
import { sound } from '../utils/sound'

type Props = {
  remaining: number
  duration: number
  /** 'lg' para pantallas grandes (TV/anfitrión), 'sm' para teléfonos. */
  size?: 'sm' | 'lg'
  /** Silencia el tic-tac (p. ej. en el modo TV si el anfitrión ya lo emite). */
  muteTick?: boolean
}

export function TimerBar({ remaining, duration, size = 'sm', muteTick = false }: Props) {
  const fraction = duration > 0 ? Math.max(0, Math.min(1, remaining / duration)) : 0
  const low = remaining <= 5 && remaining > 0

  useEffect(() => {
    if (low && !muteTick) sound.tick()
  }, [remaining, low, muteTick])

  const color = low ? '#e2574c' : fraction < 0.45 ? '#e0a431' : 'var(--gold-bright)'

  return (
    <div className={`flex items-center gap-3 ${low ? 'sq-timebar-low' : ''}`}>
      <div className="sq-timebar-track flex-1" style={size === 'lg' ? { height: 26 } : undefined}>
        <div
          className="sq-timebar-fill"
          style={{ width: `${fraction * 100}%`, backgroundColor: color }}
        />
      </div>
      <span
        className={`shrink-0 text-center font-display font-bold ${
          size === 'lg' ? 'w-14 text-4xl' : 'w-9 text-2xl'
        } ${low ? 'text-rose-400 sq-heartbeat' : 'text-sg-gold-bright'}`}
        aria-label={`${remaining} segundos restantes`}
      >
        {remaining}
      </span>
    </div>
  )
}
