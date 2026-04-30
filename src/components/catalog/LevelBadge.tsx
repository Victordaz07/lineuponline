import type { DifficultyLevel } from '../../types/catalog'

type LevelBadgeProps = {
  level: DifficultyLevel
  className?: string
}

export function LevelBadge({ level, className = '' }: LevelBadgeProps) {
  const styles: Record<DifficultyLevel, string> = {
    BÁSICO:
      'border border-[rgba(184,134,11,0.45)] bg-gold-dim text-[#1B3A6B]',
    INTERMEDIO:
      'border border-[rgba(27,58,107,0.35)] bg-[rgba(27,58,107,0.06)] text-[#1B3A6B]',
    AVANZADO:
      'border border-violet-400/50 bg-violet-50 text-violet-800',
  }

  const icons: Record<DifficultyLevel, string> = {
    BÁSICO: '⭐',
    INTERMEDIO: '🌟',
    AVANZADO: '💎',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold font-ui ${styles[level]} ${className}`}
    >
      <span aria-hidden="true">{icons[level]}</span>
      {level}
    </span>
  )
}
