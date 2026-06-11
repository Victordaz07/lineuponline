/** Sala de espera del jugador: avatar flotante, ficha de equipo y puntos pulsantes. */
import type { Player, Team } from '../types'
import { SQAvatar } from './SQIcon'

type Props = {
  me: Player
  myTeam: Team | undefined
}

export function WaitingRoom({ me, myTeam }: Props) {
  return (
    <div className="space-y-5 py-8 text-center">
      <div className="flex justify-center">
        <SQAvatar id={me.avatar} size={88} className="sq-float" />
      </div>
      <h2 className="font-display text-3xl font-bold text-warm-white">
        ¡Estás dentro, {me.name}!
      </h2>
      {myTeam && (
        <span className="inline-flex items-center gap-2 rounded-full border border-sg-gold bg-gold-dim px-4 py-1.5 font-ui text-sm text-warm-white sq-pop">
          Equipo <span className="font-bold text-sg-gold-bright">{myTeam.name}</span>
          {myTeam.leaderId === me.uid && ' · ⭐ Líder'}
        </span>
      )}
      <p className="flex items-center justify-center gap-1 font-ui text-sm text-warm-white/60">
        Espera a que el anfitrión comience
        <span className="sq-pulse">●</span>
        <span className="sq-pulse" style={{ animationDelay: '0.3s' }}>●</span>
        <span className="sq-pulse" style={{ animationDelay: '0.6s' }}>●</span>
      </p>
    </div>
  )
}
