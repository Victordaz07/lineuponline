import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ACHIEVEMENTS } from '../data/wordSearchAchievements'
import { WORD_SEARCH_STAGES } from '../data/wordSearchStages'
import { dayKey } from '../lib/rng'
import { useWordSearchStore } from '../store/wordSearchStore'

function StarRow({ stars }: { stars: number }) {
  return (
    <span className="flex gap-0.5 text-sm" aria-label={`${stars} de 3 estrellas`}>
      {[1, 2, 3].map((n) => (
        <span key={n} aria-hidden="true">
          {n <= stars ? '⭐' : '☆'}
        </span>
      ))}
    </span>
  )
}

/** Mapa de etapas de la sopa de letras: camino temático con estrellas, reto diario y logros. */
export default function WordSearch() {
  const stageProgress = useWordSearchStore((s) => s.stageProgress)
  const isStageUnlocked = useWordSearchStore((s) => s.isStageUnlocked)
  const dailyStreak = useWordSearchStore((s) => s.dailyStreak)
  const lastDailyDay = useWordSearchStore((s) => s.lastDailyDay)
  const unlockedAchievements = useWordSearchStore((s) => s.unlockedAchievements)

  const [showAchievements, setShowAchievements] = useState(false)

  const playedDailyToday = lastDailyDay === dayKey()
  const totalStars = useMemo(
    () => Object.values(stageProgress).reduce((sum, p) => sum + p.stars, 0),
    [stageProgress],
  )
  const maxStars = WORD_SEARCH_STAGES.length * 3

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-5 px-4 py-6">
      <div className="flex items-center justify-between gap-3">
        <Link
          to="/games"
          className="flex items-center gap-1.5 font-ui text-sm font-medium text-parchment/70 transition hover:text-sg-gold-light"
        >
          <span aria-hidden="true">←</span> Juegos
        </Link>
        <button
          type="button"
          onClick={() => setShowAchievements((v) => !v)}
          className="flex items-center gap-1.5 rounded-full border border-sg-gold/40 bg-transparent px-3 py-1.5 font-ui text-xs font-semibold text-sg-gold-light transition hover:bg-sg-gold/10"
        >
          🏅 {unlockedAchievements.length}/{ACHIEVEMENTS.length}
        </button>
      </div>

      <div className="text-center">
        <h1 className="font-display text-2xl font-bold text-parchment sm:text-3xl">🔎 Sopa de Letras</h1>
        <p className="mt-1 font-ui text-sm text-parchment/65">
          Encuentra las palabras escondidas y avanza por el mapa de etapas.
        </p>
        <p className="mt-2 font-ui text-xs font-semibold text-sg-gold-light">
          ⭐ {totalStars}/{maxStars} estrellas totales
        </p>
      </div>

      {showAchievements && (
        <div className="rounded-2xl border border-sg-gold/20 bg-navy-mid p-4">
          <h2 className="mb-3 font-display text-base font-bold text-parchment">Logros</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {ACHIEVEMENTS.map((a) => {
              const unlocked = unlockedAchievements.includes(a.id)
              return (
                <div
                  key={a.id}
                  title={a.description}
                  className={`flex flex-col items-center gap-1 rounded-xl border p-3 text-center transition ${
                    unlocked
                      ? 'border-sg-gold/40 bg-sg-gold/10'
                      : 'border-parchment/10 bg-navy-deep/40 opacity-50'
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
          <p className="font-ui text-sm text-parchment/65">
            {playedDailyToday ? 'Ya jugaste hoy — vuelve mañana' : 'Un puzzle nuevo cada día. ¡No rompas tu racha!'}
          </p>
        </div>
        {dailyStreak > 0 && (
          <span className="flex items-center gap-1 rounded-full border border-terracotta/40 bg-terracotta/15 px-3 py-1 font-ui text-sm font-bold text-terracotta">
            🔥 {dailyStreak}
          </span>
        )}
      </Link>

      <div className="flex flex-col gap-3">
        {WORD_SEARCH_STAGES.map((stage, i) => {
          const progress = stageProgress[stage.id]
          const unlocked = isStageUnlocked(stage.id)
          const content = (
            <div
              className={`flex items-center gap-4 rounded-2xl border p-4 shadow-sm transition ${
                unlocked
                  ? 'border-sg-gold/15 bg-navy-mid hover:border-sg-gold/40 hover:-translate-y-0.5'
                  : 'border-parchment/10 bg-navy-deep/40 opacity-60'
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sg-gold/25 bg-navy-deep text-xl" aria-hidden="true">
                {unlocked ? stage.emoji : '🔒'}
              </span>
              <div className="flex-1">
                <p className="font-ui text-[11px] font-semibold uppercase tracking-wide text-sg-gold-light">
                  Etapa {i + 1}
                </p>
                <p className="font-display text-base font-bold text-parchment">{stage.title}</p>
                <p className="font-ui text-xs text-parchment/55">
                  {stage.wordCount} palabras · grilla {stage.size}×{stage.size}
                </p>
              </div>
              {progress && <StarRow stars={progress.stars} />}
            </div>
          )
          return unlocked ? (
            <Link key={stage.id} to={`/games/sopa-de-letras/etapa/${stage.id}`}>
              {content}
            </Link>
          ) : (
            <div key={stage.id} aria-disabled="true">
              {content}
            </div>
          )
        })}
      </div>
    </div>
  )
}
