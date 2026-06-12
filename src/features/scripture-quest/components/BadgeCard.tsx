import type { BadgeDef } from '../data/badges'
import { SQIcon } from './SQIcon'

type Props = {
  badge: BadgeDef
  earned: boolean
  earnedAt?: Date | null
}

export function BadgeCard({ badge, earned, earnedAt }: Props) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition ${
        earned
          ? 'border-sg-gold bg-gold-dim shadow-md sq-pop'
          : 'border-navy-light bg-navy-light/40 opacity-60 grayscale'
      }`}
    >
      <span className={earned ? 'text-sg-gold-bright' : 'text-warm-white/50'}>
        <SQIcon name={badge.icon} size={40} title={badge.label} />
      </span>
      <p className="font-display text-lg font-bold text-warm-white">{badge.label}</p>
      <p className="font-ui text-xs leading-snug text-warm-white/60">{badge.description}</p>
      {earned && earnedAt && (
        <p className="font-ui text-[10px] uppercase tracking-wide text-sg-gold">
          Obtenida el {earnedAt.toLocaleDateString('es')}
        </p>
      )}
      {!earned && (
        <p className="font-ui text-[10px] uppercase tracking-wide text-warm-white/40">
          Por desbloquear
        </p>
      )}
    </div>
  )
}
