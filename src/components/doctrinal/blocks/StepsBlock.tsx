import type { StepsBlock as StepsBlockType } from '@/types/doctrine'

export type StepsBlockProps = {
  block: StepsBlockType
}

/**
 * Pasos numerados con conector visual.
 */
export function StepsBlock({ block }: StepsBlockProps) {
  return (
    <div className="rounded-xl border border-blue-accent/15 bg-white/90 p-5">
      {block.title ? <h3 className="mb-4 font-title text-lg text-blue-accent">{block.title}</h3> : null}
      <ol className="relative space-y-4 border-l-2 border-gold-main/50 pl-6">
        {block.steps.map((step, index) => (
          <li key={index} className="relative">
            <span
              className="absolute -left-[1.85rem] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-gold-main font-ui text-xs font-bold text-white"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <p className="text-reading text-base leading-relaxed text-text-main">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
