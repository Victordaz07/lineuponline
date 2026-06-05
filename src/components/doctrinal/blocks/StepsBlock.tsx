import type { StepsBlock as StepsBlockType } from '@/types/doctrine'

export type StepsBlockProps = {
  block: StepsBlockType
}

export function StepsBlock({ block }: StepsBlockProps) {
  return (
    <div className="rounded-xl border border-sg-gold/15 bg-navy-mid p-5">
      {block.title ? <h3 className="mb-4 font-display text-lg text-parchment">{block.title}</h3> : null}
      <ol className="relative space-y-4 border-l-2 border-sg-gold/40 pl-6">
        {block.steps.map((step, index) => (
          <li key={index} className="relative">
            <span
              className="absolute -left-[1.85rem] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-sg-gold font-ui text-xs font-bold text-navy-deep"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            {typeof step === 'string' ? (
              <p className="font-display text-base leading-relaxed text-parchment/85">{step}</p>
            ) : (
              <div>
                <p className="font-ui text-sm font-semibold text-parchment">{step.title}</p>
                <p className="font-display text-base leading-relaxed text-parchment/80">{step.body ?? step.description}</p>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
