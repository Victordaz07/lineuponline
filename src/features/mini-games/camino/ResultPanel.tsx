import { useEffect, useState } from 'react'
import type { CaminoAchievement } from '../data/caminoAchievements'
import { playAchievementChime, playVictoryChime } from '../lib/chime'
import { starsToPoints } from '../lib/points'

export type ResultPanelProps = {
  stars: number
  seconds: number
  hintsUsed: number
  isNewBest: boolean
  newAchievements: CaminoAchievement[]
  onRestart: () => void
  onBackToPath: () => void
}

function formatTime(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

const CONFETTI_COLORS = ['#E8C87A', '#D4AF62', '#7FD1AE', '#7FB8D9', '#E29B7D', '#C792EA']

function Confetti() {
  // Inicializador perezoso de useState: corre una sola vez al montar, no en
  // cada render — es el lugar permitido para generar aleatoriedad de un
  // efecto visual, a diferencia del cuerpo del componente o useMemo.
  const [pieces] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.round(Math.random() * 100),
      delay: Math.round(Math.random() * 150),
      duration: 900 + Math.round(Math.random() * 500),
      rotate: Math.round(Math.random() * 360),
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      size: 5 + Math.round(Math.random() * 4),
    })),
  )
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 rounded-sm opacity-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 2.2,
            backgroundColor: p.color,
            animation: `camino-confetti-fall ${p.duration}ms ease-in ${p.delay}ms forwards`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
      <style>{`
        @keyframes camino-confetti-fall {
          0% { transform: translateY(-10%) rotate(0deg); opacity: 1; }
          100% { transform: translateY(340%) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

/** Panel de resultado compartido por los 3 tipos de reto del Camino. */
export function ResultPanel({
  stars,
  seconds,
  hintsUsed,
  isNewBest,
  newAchievements,
  onRestart,
  onBackToPath,
}: ResultPanelProps) {
  useEffect(() => {
    playVictoryChime()
    if (newAchievements.length > 0) {
      const t = setTimeout(() => playAchievementChime(), 500)
      return () => clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const points = starsToPoints(stars)

  return (
    <div className="relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-sg-gold/40 bg-navy-mid p-6 text-center shadow-lg">
      <Confetti />
      <p className="text-4xl motion-safe:animate-[camino-pop_0.4s_ease-out]" aria-hidden="true">
        🎉
      </p>
      <p className="font-display text-xl font-bold text-parchment">¡Estación completada!</p>

      <div className="flex gap-1.5 text-3xl">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            aria-hidden="true"
            className={n <= stars ? 'motion-safe:animate-[camino-pop_0.35s_ease-out_backwards]' : ''}
            style={n <= stars ? { animationDelay: `${(n - 1) * 140}ms` } : undefined}
          >
            {n <= stars ? '⭐' : '☆'}
          </span>
        ))}
        <span className="sr-only">{stars} de 3 estrellas</span>
      </div>

      <p className="rounded-full border border-sg-gold/40 bg-sg-gold/10 px-3 py-1 font-ui text-sm font-bold text-sg-gold-bright">
        +{points} puntos
      </p>

      <p className="font-ui text-sm text-parchment/70">
        Tiempo: {formatTime(seconds)}
        {hintsUsed > 0 ? ` · ${hintsUsed} pista${hintsUsed > 1 ? 's' : ''} usada${hintsUsed > 1 ? 's' : ''}` : ''}
        {isNewBest ? ' · ¡Nuevo mejor resultado!' : ''}
      </p>

      {newAchievements.length > 0 && (
        <div className="flex w-full flex-col gap-1.5">
          {newAchievements.map((a) => (
            <div
              key={a.id}
              className="flex items-center gap-2 rounded-xl border border-sg-gold-bright/50 bg-sg-gold-bright/15 px-3 py-2 text-left motion-safe:animate-[camino-pop_0.4s_ease-out_backwards]"
              style={{ animationDelay: '450ms' }}
            >
              <span className="text-xl" aria-hidden="true">
                {a.emoji}
              </span>
              <div>
                <p className="font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright">Logro desbloqueado</p>
                <p className="font-ui text-sm font-semibold text-parchment">{a.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-2 pt-1">
        <button
          type="button"
          onClick={onBackToPath}
          className="rounded-lg border border-sg-gold bg-sg-gold px-5 py-2.5 font-ui text-sm font-bold text-ink shadow-sm transition hover:brightness-95"
        >
          Continuar en el camino →
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="rounded-lg border border-sg-gold/40 bg-transparent px-4 py-2.5 font-ui text-sm font-semibold text-sg-gold-light transition hover:bg-sg-gold/10"
        >
          Jugar de nuevo
        </button>
      </div>

      <style>{`
        @keyframes camino-pop {
          0% { transform: scale(0.4); opacity: 0; }
          70% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
