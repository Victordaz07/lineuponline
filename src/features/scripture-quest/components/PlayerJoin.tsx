import { useState } from 'react'
import { AVATARS } from '../data/badges'
import { useGameStore } from '../store/gameStore'

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
    <div className="mx-auto max-w-sm space-y-5">
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
        <div className="grid grid-cols-6 gap-2">
          {AVATARS.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAvatar(a)}
              className={`flex aspect-square items-center justify-center rounded-xl text-2xl transition ${
                avatar === a
                  ? 'bg-sg-gold/30 ring-2 ring-sg-gold'
                  : 'bg-navy-light/50 hover:bg-navy-light'
              }`}
              aria-label={`Avatar ${a}`}
            >
              {a}
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
        className="w-full rounded-xl bg-sg-gold py-3.5 font-ui text-base font-bold uppercase tracking-wide text-navy-deep transition hover:bg-sg-gold-light disabled:opacity-40"
      >
        {joining ? 'Entrando…' : 'Entrar a la sala'}
      </button>
    </div>
  )
}
