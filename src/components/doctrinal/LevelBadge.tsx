import type { DifficultyLevel } from '@/types/doctrine'

const levelMeta: Record<
  DifficultyLevel,
  { label: string; emoji: string; className: string }
> = {
  BÁSICO: {
    label: 'Básico',
    emoji: '🌱',
    className: 'border-jade/40 bg-jade/15 text-jade',
  },
  INTERMEDIO: {
    label: 'Intermedio',
    emoji: '📘',
    className: 'border-info/40 bg-info/15 text-info',
  },
  AVANZADO: {
    label: 'Avanzado',
    emoji: '✨',
    className: 'border-purple/40 bg-purple/15 text-purple',
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
