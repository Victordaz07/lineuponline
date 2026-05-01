import type { ReflectionBlock as ReflectionBlockType } from '@/types/doctrine'

export type ReflectionBlockProps = {
  block: ReflectionBlockType
}

/**
 * Bloque de reflexión o pregunta guiada.
 */
export function ReflectionBlock({ block }: ReflectionBlockProps) {
  return (
    <div
      className="rounded-xl border border-blue-accent/25 bg-blue-accent/5 p-5"
      role="note"
    >
      <p className="font-ui text-xs font-semibold uppercase tracking-wider text-blue-accent">Reflexiona</p>
      <p className="mt-2 text-reading text-base font-medium text-text-main">{block.prompt}</p>
    </div>
  )
}
