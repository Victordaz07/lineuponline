import type { DifficultyLevel } from '@/types/doctrine'

const levelMeta: Record<
  DifficultyLevel,
  { label: string; emoji: string; className: string }
> = {
  BÁSICO: {
    label: 'Básico',
    emoji: '🌱',
    className: 'border-emerald-600/30 bg-emerald-50 text-emerald-900',
  },
  INTERMEDIO: {
    label: 'Intermedio',
    emoji: '📘',
    className: 'border-blue-accent/30 bg-blue-50 text-blue-accent',
  },
  AVANZADO: {
    label: 'Avanzado',
    emoji: '✨',
    className: 'border-purple-700/30 bg-purple-50 text-purple-900',
  },
}

export type LevelBadgeProps = {
  level: DifficultyLevel
}

/**
 * Muestra el nivel de dificultad de una lección con color y emoji.
 *
 * @param props - Nivel doctrinal
 * @returns Badge accesible
 */
export function LevelBadge({ level }: LevelBadgeProps) {
  const meta = levelMeta[level]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-ui text-xs font-bold uppercase tracking-wide ${meta.className}`}
      role="img"
      aria-label={`Nivel ${meta.label}`}
    >
      <span aria-hidden="true">{meta.emoji}</span>
      {meta.label}
    </span>
  )
}
