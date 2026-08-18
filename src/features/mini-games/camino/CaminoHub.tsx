import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CAMINO_ACHIEVEMENTS } from '../data/caminoAchievements'
import { stagesForVolume } from '../data/caminoStages'
import { SCRIPTURE_VOLUMES } from '../data/scriptureVolumes'
import { starsToPoints } from '../lib/points'
import { useCaminoStore } from '../store/caminoStore'
import { PilgrimPicker } from './PilgrimPicker'

const STAR_COUNT = 26

function Starfield() {
  // Inicializador perezoso: la posición/temporización aleatoria de cada
  // estrella se calcula una sola vez al montar, no en cada render.
  const [stars] = useState(() =>
    Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      left: Math.round(Math.random() * 100),
      top: Math.round(Math.random() * 100),
      size: 1 + Math.round(Math.random() * 2),
      delay: Math.round(Math.random() * 4000),
      duration: 2600 + Math.round(Math.random() * 2400),
    })),
  )
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-sg-gold-bright"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animation: `camino-hub-twinkle ${s.duration}ms ease-in-out ${s.delay}ms infinite`,
          }}
        />
      ))}
    </div>
  )
}

/** Vestíbulo del Camino: elige tu peregrino, revisa tus logros y entra a un volumen. */
export default function CaminoHub() {
  const stageProgress = useCaminoStore((s) => s.stageProgress)
  const unlockedAchievements = useCaminoStore((s) => s.unlockedAchievements)

  const [showPilgrims, setShowPilgrims] = useState(false)
  const [showAchievements, setShowAchievements] = useState(false)

  const totalStars = useMemo(
    () => Object.values(stageProgress).reduce((sum, p) => sum + p.stars, 0),
    [stageProgress],
  )

  return (
    <div className="relative isolate mx-auto flex max-w-2xl flex-col gap-5 py-2">
      <div
        className="pointer-events-none absolute -inset-x-4 -top-2 -z-10 h-72 overflow-hidden rounded-b-[40%] sm:-inset-x-6"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgb(var(--sg-gold) / 0.18), transparent 68%)' }}
      >
        <Starfield />
        <span
          aria-hidden="true"
          className="absolute -left-10 top-6 h-40 w-40 rounded-full opacity-40 blur-3xl motion-safe:animate-[camino-hub-drift-a_9s_ease-in-out_infinite] motion-reduce:hidden"
          style={{ background: 'rgb(var(--sg-gold) / 0.5)' }}
        />
        <span
          aria-hidden="true"
          className="absolute -right-6 top-16 h-32 w-32 rounded-full opacity-30 blur-3xl motion-safe:animate-[camino-hub-drift-b_11s_ease-in-out_infinite] motion-reduce:hidden"
          style={{ background: 'rgb(var(--jade) / 0.6)' }}
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <Link
          to="/games"
          className="flex items-center gap-1.5 font-ui text-sm font-medium text-parchment/70 transition hover:text-sg-gold-light"
        >
          <span aria-hidden="true">←</span> Juegos
        </Link>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowPilgrims((v) => !v)}
            className="rounded-full border border-sg-gold/40 bg-navy-deep/40 px-3 py-1.5 font-ui text-xs font-semibold text-sg-gold-light backdrop-blur-sm transition hover:bg-sg-gold/10"
          >
            🧑‍🦱 Peregrino
          </button>
          <button
            type="button"
            onClick={() => setShowAchievements((v) => !v)}
            className="flex items-center gap-1.5 rounded-full border border-sg-gold/40 bg-navy-deep/40 px-3 py-1.5 font-ui text-xs font-semibold text-sg-gold-light backdrop-blur-sm transition hover:bg-sg-gold/10"
          >
            🏅 {unlockedAchievements.length}/{CAMINO_ACHIEVEMENTS.length}
          </button>
        </div>
      </div>

      <div className="text-center">
        <h1 className="font-display text-2xl font-bold text-parchment drop-shadow-sm sm:text-3xl">
          🗺️ El Camino de las Escrituras
        </h1>
        <p className="mt-1 font-ui text-sm text-parchment/65">
          Recorre cada volumen, resuelve los retos y avanza estación por estación.
        </p>
        <p className="mt-2 flex items-center justify-center gap-2 font-ui text-xs font-semibold text-sg-gold-light">
          <span>⭐ {totalStars} estrellas</span>
          <span className="text-parchment/30">·</span>
          <span>✨ {starsToPoints(totalStars)} puntos</span>
        </p>
      </div>

      {showPilgrims && (
        <div className="rounded-2xl border border-sg-gold/20 bg-navy-mid p-4">
          <h2 className="mb-3 font-display text-base font-bold text-parchment">Elige tu peregrino</h2>
          <PilgrimPicker />
        </div>
      )}

      {showAchievements && (
        <div className="rounded-2xl border border-sg-gold/20 bg-navy-mid p-4">
          <h2 className="mb-3 font-display text-base font-bold text-parchment">Logros</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {CAMINO_ACHIEVEMENTS.map((a) => {
              const unlocked = unlockedAchievements.includes(a.id)
              return (
                <div
                  key={a.id}
                  title={a.description}
                  className={`flex flex-col items-center gap-1 rounded-xl border p-3 text-center transition ${
                    unlocked ? 'border-sg-gold/40 bg-sg-gold/10' : 'border-parchment/10 bg-navy-deep/40 opacity-50'
                  }`}
                >
                  <span className="text-2xl" aria-hidden="true">
                    {unlocked ? a.emoji : '🔒'}
                  </span>
                  <span className="font-ui text-[11px] font-semibold text-parchment">{a.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <Link
        to="/games/sopa-de-letras/diario"
        className="group flex items-center gap-4 rounded-2xl border border-sg-gold/30 bg-gradient-to-br from-navy-mid to-navy-light p-5 shadow-sm transition hover:border-sg-gold/60"
      >
        <span className="text-4xl" aria-hidden="true">
          📅
        </span>
        <div className="flex-1">
          <p className="font-display text-lg font-bold text-parchment">Reto diario</p>
          <p className="font-ui text-sm text-parchment/65">Un puzzle nuevo cada día. ¡No rompas tu racha!</p>
        </div>
      </Link>

      <div className="flex flex-col gap-3">
        {SCRIPTURE_VOLUMES.map((volume) => {
          const stages = stagesForVolume(volume.id)
          const readyCount = stages.filter((s) => s.status === 'ready').length
          const stars = stages.reduce((sum, s) => sum + (stageProgress[s.id]?.stars ?? 0), 0)
          return (
            <Link
              key={volume.id}
              to={`/games/sopa-de-letras/camino/${volume.id}`}
              className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid shadow-sm transition hover:-translate-y-0.5 hover:border-sg-gold/40 hover:shadow-card-hover"
            >
              <div className="h-24 w-20 shrink-0 overflow-hidden">
                <img src={volume.mapSrc} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex-1 py-3 pr-4">
                <p className="font-ui text-[11px] font-semibold uppercase tracking-wide" style={{ color: volume.accentColor }}>
                  Volumen {volume.order}
                </p>
                <p className="font-display text-base font-bold text-parchment">
                  {volume.emoji} {volume.title}
                </p>
                <p className="font-ui text-xs text-parchment/55">{volume.subtitle}</p>
                <p className="mt-1 font-ui text-xs font-semibold text-sg-gold-light">
                  {readyCount} estación{readyCount !== 1 ? 'es' : ''} disponible{readyCount !== 1 ? 's' : ''}
                  {stars > 0 ? ` · ⭐ ${stars}` : ''}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      <style>{`
        @keyframes camino-hub-twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.9; }
        }
        @keyframes camino-hub-drift-a {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(18px, 12px); }
        }
        @keyframes camino-hub-drift-b {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-14px, 10px); }
        }
      `}</style>
    </div>
  )
}
