/**
 * Tarjeta final del jugador (móvil): posición, puntos, insignias nuevas con
 * animación de desbloqueo y acceso al modo estudio con conteo de falladas.
 */
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BADGES } from '../data/badges'
import type { BadgeId, Player } from '../types'
import { SQAvatar, SQIcon } from './SQIcon'
import { sound } from '../utils/sound'

type Props = {
  me: Player
  rank: number
  totalPlayers: number
  newBadges: BadgeId[]
  missedCount: number
  saving: boolean
}

export function PlayerEndCard({ me, rank, totalPlayers, newBadges, missedCount, saving }: Props) {
  useEffect(() => {
    sound.fanfare()
  }, [])

  return (
    <div className="mx-auto max-w-sm space-y-5">
      <div className="sq-pop sq-card relative overflow-hidden p-6 text-center">
        <div className="flex justify-center">
          <SQAvatar id={me.avatar} size={72} className="sq-float" />
        </div>
        <p className="mt-3 font-display text-2xl font-bold text-warm-white">{me.name}</p>
        <p className="font-ui text-sm uppercase tracking-widest text-sg-gold-light">
          Posición {rank} de {totalPlayers}
        </p>
        <p className="mt-2 font-display text-5xl font-bold text-sg-gold-bright">
          {me.score.toLocaleString('es')}
        </p>
        <p className="font-ui text-xs text-warm-white/60">puntos</p>
        {me.maxStreak >= 2 && (
          <p className="mt-2 font-ui text-sm text-sg-gold-light">
            🔥 Mejor racha: {me.maxStreak} seguidas
          </p>
        )}
        {saving && (
          <p className="mt-2 font-ui text-xs text-warm-white/50 sq-pulse">Guardando resultados…</p>
        )}
      </div>

      {newBadges.length > 0 && (
        <div className="space-y-2">
          <p className="text-center font-ui text-xs font-bold uppercase tracking-widest text-sg-gold-light">
            ¡Insignias desbloqueadas!
          </p>
          {newBadges.map((id, i) => (
            <div
              key={id}
              className={`sq-pop sq-rise-${Math.min(i + 1, 4)} flex items-center gap-3 rounded-2xl border border-sg-gold bg-gold-dim p-4`}
            >
              <span className="text-sg-gold-bright">
                <SQIcon name={BADGES[id].icon} size={36} />
              </span>
              <span>
                <span className="block font-display text-lg font-bold text-warm-white">
                  {BADGES[id].label}
                </span>
                <span className="font-ui text-xs text-warm-white/70">
                  {BADGES[id].description}
                </span>
              </span>
            </div>
          ))}
        </div>
      )}

      {missedCount > 0 && (
        <Link
          to="/games/scripture-quest/study"
          className="sq-rise block rounded-2xl border border-navy-light bg-navy-light/40 p-4 text-center transition hover:border-sg-gold"
        >
          <p className="font-ui text-sm text-warm-white">
            Fallaste <span className="font-bold text-sg-gold-bright">{missedCount}</span>{' '}
            pregunta{missedCount === 1 ? '' : 's'}
          </p>
          <p className="mt-1 font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright">
            Repasar en modo estudio →
          </p>
        </Link>
      )}

      <div className="flex justify-center gap-3">
        <Link
          to="/games/scripture-quest"
          className="rounded-xl border border-sg-gold px-5 py-2.5 font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright transition hover:bg-sg-gold hover:text-ink"
        >
          Jugar otra vez
        </Link>
        <Link
          to="/profile/scripture-quest"
          className="rounded-xl border border-navy-light px-5 py-2.5 font-ui text-xs font-bold uppercase tracking-wide text-warm-white/80 transition hover:border-sg-gold"
        >
          Mi historial
        </Link>
      </div>
    </div>
  )
}
