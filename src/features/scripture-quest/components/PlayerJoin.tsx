import { useState } from 'react'
import { useGameStore } from '../store/gameStore'
import { SQ_AVATARS, SQAvatar } from './SQIcon'

type Props = {
  joining: boolean
  onJoin: (name: string, avatar: string) => void
}

/** Player onboarding: pick a name + avatar before entering the lobby. */
export function PlayerJoin({ joining, onJoin }: Props) {
  const stored = useGameStore()
  const [name, setName] = useState(stored.playerName)
  const [avatar, setAvatar] = useState<string>(stored.avatar)

  const valid = name.trim().length >= 2

  return (
    <div className="mx-auto max-w-sm space-y-5 sq-rise">
      <h2 className="text-center font-display text-3xl font-bold text-warm-white">
        Únete a la partida
      </h2>

      <label className="block space-y-1.5">
        <span className="font-ui text-sm font-medium text-sg-gold-light">Tu nombre</span>
        <input
          type="text"
          value={name}
          maxLength={20}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej. Moroni"
          className="w-full rounded-xl border border-navy-light bg-navy-light/50 px-4 py-3 font-ui text-warm-white placeholder:text-warm-white/40 focus:border-sg-gold focus:outline-none"
        />
      </label>

      <div className="space-y-1.5">
        <span className="font-ui text-sm font-medium text-sg-gold-light">Elige tu avatar</span>
        <div className="grid grid-cols-4 gap-2">
          {SQ_AVATARS.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setAvatar(a.id)}
              title={a.label}
              className={`flex aspect-square items-center justify-center rounded-xl transition ${
                avatar === a.id ? 'bg-sg-gold/25 sq-gold-ring' : 'bg-navy-light/50 hover:bg-navy-light'
              }`}
              aria-label={a.label}
            >
              <SQAvatar id={a.id} size={48} />
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        disabled={!valid || joining}
        onClick={() => {
          stored.setIdentity(name.trim(), avatar)
          onJoin(name.trim(), avatar)
        }}
        className="w-full rounded-xl bg-sg-gold py-3.5 font-ui text-base font-bold uppercase tracking-wide text-ink transition hover:bg-sg-gold-light disabled:opacity-40"
      >
        {joining ? 'Entrando…' : 'Entrar a la sala'}
      </button>
    </div>
  )
}
