import { useState } from 'react'
import { BADGE_DEFS } from '../badges/badgeDefinitions'
import { BADGE_IDS, emptyBadgeMap } from '../badges/badgeTypes'
import type { BadgeId, BadgeLevel, BadgeLevelEntry, BadgeMap } from '../badges/badgeTypes'

// Degradado del hexágono por categoría de insignia (medallón decorativo).
const BADGE_GRADIENT: Record<BadgeId, string> = {
  racha_sagrada: 'linear-gradient(160deg,#C1633D,#8a4127)',
  llama_viva: 'linear-gradient(160deg,#DE8F63,#a5502a)',
  escriba: 'linear-gradient(160deg,#B8923A,#7c5f22)',
  campeon_mes: 'linear-gradient(160deg,#E8C87A,#9a7420)',
  explorador: 'linear-gradient(160deg,#4F9686,#245349)',
  estudioso: 'linear-gradient(160deg,#5aa896,#2b6154)',
  velocista: 'linear-gradient(160deg,#7C5CBF,#4a3573)',
  defensor_fe: 'linear-gradient(160deg,#3E8ED0,#285a86)',
}

const HEXAGON_CLIP = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'

// ─── Level dot row ────────────────────────────────────────────────────────────

function LevelDots({ current, max = 7 }: { current: BadgeLevel; max?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: max }, (_, i) => {
        const lvl = (i + 1) as BadgeLevel
        const earned = lvl <= current
        const isNext = lvl === current + 1
        return (
          <div
            key={i}
            className="relative flex items-center justify-center"
          >
            <div
              className={`rounded-full transition-all ${
                earned
                  ? current === 7
                    ? 'h-3 w-3 bg-sg-gold-bright shadow-[0_0_6px_rgba(232,200,122,0.8)]'
                    : 'h-3 w-3 bg-sg-gold'
                  : isNext
                    ? 'h-3 w-3 border-2 border-dashed border-sg-gold/40 bg-transparent'
                    : 'h-2.5 w-2.5 bg-navy-light border border-parchment/10'
              }`}
            />
          </div>
        )
      })}
      <span className="ml-1 font-ui text-[10px] font-semibold text-parchment/35">
        {current}/7
      </span>
    </div>
  )
}

// ─── Individual badge card ─────────────────────────────────────────────────────

function BadgeCard({ badgeId, entry }: { badgeId: BadgeId; entry: BadgeLevelEntry }) {
  const def = BADGE_DEFS[badgeId]
  const level = entry.level
  const isMaxed = level === 7
  const isEarned = level > 0
  const currentLevelDef = isEarned ? def.levels[level - 1] : null
  const nextLevelDef = level < 7 ? def.levels[level as 0|1|2|3|4|5|6] : null
  const lastUnlocked = entry.unlockedAt?.[entry.unlockedAt.length - 1]

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border transition-all ${
        isMaxed
          ? 'border-sg-gold-bright bg-gradient-to-b from-navy-mid to-navy-deep shadow-[0_0_24px_rgba(212,175,98,0.25)]'
          : isEarned
            ? 'border-sg-gold/30 bg-navy-mid'
            : 'border-parchment/8 bg-navy-mid/60'
      }`}
    >
      {/* Legendary shimmer strip */}
      {isMaxed && (
        <div
          className="absolute inset-x-0 top-0 h-0.5"
          style={{
            background: 'linear-gradient(90deg, transparent, #E8C87A, #D4AF62, #E8C87A, transparent)',
            animation: 'sqShimmer 3s ease-in-out infinite',
          }}
        />
      )}

      <div className="flex flex-col gap-3 p-5">
        {/* Icon + level pill row */}
        <div className="flex items-start justify-between gap-2">
          <span className="relative inline-flex">
            {isMaxed && (
              <span
                aria-hidden="true"
                className="absolute -inset-1"
                style={{
                  clipPath: HEXAGON_CLIP,
                  background: 'linear-gradient(160deg,#E8C87A,#B8923A)',
                  filter: 'blur(3px)',
                  opacity: 0.7,
                }}
              />
            )}
            <span
              className={`relative flex h-14 w-14 items-center justify-center text-2xl transition-all ${
                isEarned ? '' : 'opacity-40 grayscale'
              }`}
              style={{
                clipPath: HEXAGON_CLIP,
                background: isEarned ? BADGE_GRADIENT[badgeId] : 'rgb(var(--navy-light))',
                boxShadow: isEarned ? 'inset 0 1px 2px rgba(255,255,255,0.25)' : undefined,
              }}
            >
              {def.icon}
            </span>
          </span>

          {isEarned && (
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 font-ui text-[10px] font-bold uppercase tracking-wider ${
                isMaxed
                  ? 'bg-sg-gold text-ink shadow-[0_0_12px_rgba(212,175,98,0.4)]'
                  : 'bg-sg-gold/15 text-sg-gold'
              }`}
            >
              Niv. {level}
            </span>
          )}
        </div>

        {/* Name */}
        <div>
          <h3
            className={`font-display text-xl leading-tight ${
              isEarned ? 'text-parchment' : 'text-parchment/35'
            }`}
          >
            {def.name}
          </h3>
          {currentLevelDef && (
            <p className="mt-0.5 font-ui text-xs font-semibold text-sg-gold/80">
              {currentLevelDef.label}
            </p>
          )}
        </div>

        {/* Level dots */}
        <LevelDots current={level} />

        {/* Current / next description */}
        <div className="min-h-[2.5rem]">
          {isMaxed ? (
            <p className="font-ui text-xs font-semibold text-sg-gold-bright">
              ¡Nivel máximo alcanzado!
            </p>
          ) : nextLevelDef ? (
            <p className="font-ui text-xs leading-relaxed text-parchment/40">
              <span className="text-parchment/55">Siguiente: </span>
              {nextLevelDef.description}
            </p>
          ) : null}
        </div>

        {/* Unlock date or locked label */}
        {isEarned && lastUnlocked ? (
          <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.12em] text-sg-gold/60">
            Niv.{level} el{' '}
            {new Date(lastUnlocked).toLocaleDateString('es', {
              day: 'numeric', month: 'numeric', year: 'numeric',
            })}
          </p>
        ) : !isEarned ? (
          <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.12em] text-parchment/25">
            Por desbloquear
          </p>
        ) : null}
      </div>

      {/* Maxed glow overlay */}
      {isMaxed && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,98,0.08) 0%, transparent 70%)',
          }}
        />
      )}
    </div>
  )
}

// ─── Summary strip ────────────────────────────────────────────────────────────

function SummaryStrip({ badges }: { badges: BadgeMap }) {
  const earned = BADGE_IDS.filter((id) => badges[id].level > 0).length
  const maxed  = BADGE_IDS.filter((id) => badges[id].level === 7).length
  const totalLevels = BADGE_IDS.reduce((sum, id) => sum + badges[id].level, 0)

  return (
    <div className="grid grid-cols-3 gap-3">
      {[
        { value: `${earned}/8`, label: 'Insignias activas' },
        { value: `${totalLevels}/56`, label: 'Niveles totales' },
        { value: maxed,          label: 'Nivel máximo' },
      ].map(({ value, label }) => (
        <div key={label} className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 text-center">
          <p className="font-display text-3xl text-sg-gold-light">{value}</p>
          <p className="mt-1 font-ui text-xs text-parchment/50">{label}</p>
        </div>
      ))}
    </div>
  )
}

// ─── BadgesScreen ─────────────────────────────────────────────────────────────

interface BadgesScreenProps {
  badges: BadgeMap
  playerName?: string
}

export function BadgesScreen({ badges, playerName }: BadgesScreenProps) {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          ⚔️ Scripture Quest
        </p>
        <h1 className="font-display text-3xl text-parchment">
          {playerName ? `Insignias de ${playerName}` : 'Insignias'}
        </h1>
        <p className="font-ui text-sm text-parchment/45">
          Cada insignia tiene 7 niveles — cuanto más juegas, más suben.
        </p>
      </header>

      <SummaryStrip badges={badges} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BADGE_IDS.map((id) => (
          <BadgeCard key={id} badgeId={id} entry={badges[id]} />
        ))}
      </div>

      <style>{`
        @keyframes sqShimmer {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

// ─── Demo page (for preview at /games/scripture-quest/badges-demo) ────────────

const DEMO_BADGES: BadgeMap = {
  racha_sagrada: { level: 4, unlockedAt: ['2026-06-11T10:00:00Z','2026-06-11T12:00:00Z','2026-06-12T08:00:00Z','2026-06-13T15:00:00Z'] },
  escriba:       { level: 2, unlockedAt: ['2026-06-10T09:00:00Z','2026-06-12T11:00:00Z'] },
  velocista:     { level: 3, unlockedAt: ['2026-06-09T14:00:00Z','2026-06-10T16:00:00Z','2026-06-12T18:00:00Z'] },
  defensor_fe:   { level: 0, unlockedAt: [] },
  explorador:    { level: 5, unlockedAt: ['2026-06-08T10:00:00Z','2026-06-09T10:00:00Z','2026-06-10T10:00:00Z','2026-06-11T10:00:00Z','2026-06-13T10:00:00Z'] },
  campeon_mes:   { level: 7, unlockedAt: ['2026-05-01T00:00:00Z','2026-05-02T00:00:00Z','2026-05-03T00:00:00Z','2026-05-04T00:00:00Z','2026-05-05T00:00:00Z','2026-05-06T00:00:00Z','2026-06-01T00:00:00Z'] },
  estudioso:     { level: 1, unlockedAt: ['2026-06-11T20:00:00Z'] },
  llama_viva:    { level: 0, unlockedAt: [] },
}

export default function BadgesDemoPage() {
  const [badges, setBadges] = useState<BadgeMap>(DEMO_BADGES)
  const [showReal, setShowReal] = useState(false)

  // Toggling demo ↔ empty to show contrast
  function toggleEmpty() {
    setBadges(showReal ? emptyBadgeMap() : DEMO_BADGES)
    setShowReal((v) => !v)
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-16">
      <div className="flex items-center justify-between">
        <div />
        <button
          onClick={toggleEmpty}
          className="rounded-xl border border-sg-gold/20 px-4 py-2 font-ui text-xs text-parchment/50 hover:text-parchment"
        >
          {showReal ? 'Ver con insignias ganadas' : 'Ver sin insignias (nivel 0)'}
        </button>
      </div>
      <BadgesScreen badges={badges} playerName="Victor" />
    </div>
  )
}
