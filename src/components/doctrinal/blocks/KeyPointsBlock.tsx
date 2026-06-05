import type { KeyPointsBlock as KeyPointsBlockType } from '@/types/doctrine'

export type KeyPointsBlockProps = {
  block: KeyPointsBlockType
}

/**
 * Lista de puntos clave con viñetas.
 */
export function KeyPointsBlock({ block }: KeyPointsBlockProps) {
  return (
    <div className="rounded-xl border border-sg-gold/20 bg-sg-gold/5 p-5">
      {block.title ? <h3 className="mb-3 font-display text-lg text-parchment">{block.title}</h3> : null}
      <ul className="space-y-2">
        {block.points.map((point, index) => (
          <li key={index} className="flex gap-3 text-reading text-base text-parchment/80">
            <span
              className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-sg-gold"
              aria-hidden="true"
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
