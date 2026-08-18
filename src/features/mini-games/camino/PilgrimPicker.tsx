import { useEffect, useRef, useState } from 'react'
import { PILGRIMS, pilgrimSpriteSrc, type Pilgrim } from '../data/pilgrims'
import { playAchievementChime } from '../lib/chime'
import { useCaminoStore } from '../store/caminoStore'

const SPOTLIGHT_MS = 1500

function Spotlight({ pilgrim }: { pilgrim: Pilgrim }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-2xl motion-safe:animate-[camino-spotlight-in_0.35s_ease-out]"
      style={{ background: `radial-gradient(circle at 50% 42%, ${pilgrim.accentColor}33, rgb(var(--navy-deep) / 0.97) 72%)` }}
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute inset-0 -m-6 rounded-full blur-xl motion-safe:animate-[camino-spotlight-glow_1.5s_ease-in-out]"
          style={{ background: `${pilgrim.accentColor}55` }}
        />
        <img
          src={pilgrimSpriteSrc(pilgrim.id, 'celebrando')}
          alt={pilgrim.name}
          className="relative h-40 w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] motion-safe:animate-[camino-spotlight-pop_0.5s_cubic-bezier(0.34,1.56,0.64,1)] sm:h-48"
        />
      </div>
      <p className="font-display text-xl font-bold text-parchment drop-shadow-sm sm:text-2xl">{pilgrim.name}</p>
      <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-sg-gold-bright">Tu peregrino</p>
    </div>
  )
}

/** Cuadrícula de selección de peregrino — al elegir uno, aparece en grande con
 *  su pose de triunfo antes de volver a la cuadrícula, para que se vea de verdad. */
export function PilgrimPicker() {
  const selectedPilgrimId = useCaminoStore((s) => s.selectedPilgrimId)
  const setPilgrim = useCaminoStore((s) => s.setPilgrim)
  const [spotlight, setSpotlight] = useState<Pilgrim | null>(null)
  const timerRef = useRef<number | null>(null)

  useEffect(() => () => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
  }, [])

  function choose(p: Pilgrim) {
    setPilgrim(p.id)
    setSpotlight(p)
    playAchievementChime()
    if ('vibrate' in navigator) navigator.vibrate(25)
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setSpotlight(null), SPOTLIGHT_MS)
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-8">
        {PILGRIMS.map((p) => {
          const selected = p.id === selectedPilgrimId
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => choose(p)}
              aria-pressed={selected}
              title={p.name}
              className={`flex flex-col items-center gap-1 rounded-xl border-2 p-1.5 transition ${
                selected ? 'border-sg-gold bg-sg-gold/10' : 'border-transparent hover:border-sg-gold/30'
              }`}
            >
              <div
                className="aspect-square w-full overflow-hidden rounded-lg bg-navy-deep"
                style={selected ? { boxShadow: `0 0 0 2px ${p.accentColor}` } : undefined}
              >
                <img src={pilgrimSpriteSrc(p.id, 'reposo')} alt={p.name} className="h-full w-full object-cover object-top" loading="lazy" />
              </div>
              <span className="font-ui text-[10px] font-semibold text-parchment/80">{p.name}</span>
            </button>
          )
        })}
      </div>

      {spotlight && <Spotlight pilgrim={spotlight} />}

      <style>{`
        @keyframes camino-spotlight-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes camino-spotlight-pop {
          0% { transform: scale(0.4) translateY(20px); opacity: 0; }
          60% { transform: scale(1.06) translateY(-4px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes camino-spotlight-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  )
}
