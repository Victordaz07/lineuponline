import type { StepsBlock as StepsBlockType } from '@/types/doctrine'

export type StepsBlockProps = {
  block: StepsBlockType
}

export function StepsBlock({ block }: StepsBlockProps) {
  const lastIndex = block.steps.length - 1
  return (
    <div className="rounded-xl border border-sg-gold/15 bg-navy-mid p-5">
      {block.title ? <h3 className="mb-5 font-display text-lg text-parchment">{block.title}</h3> : null}
      <ol className="space-y-0">
        {block.steps.map((step, index) => (
          <li key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-sg-gold/40 bg-navy-deep font-display text-sm font-semibold text-sg-gold"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              {index < lastIndex && (
                <div className="my-1.5 w-px flex-1 bg-sg-gold/20" />
              )}
            </div>
            <div className={index < lastIndex ? 'pb-5 pt-0.5' : 'pt-0.5'}>
              {typeof step === 'string' ? (
                <p className="font-display text-base leading-relaxed text-parchment/85">{step}</p>
              ) : (
                <div>
                  <p className="font-ui text-sm font-semibold text-parchment">{step.title}</p>
                  <p className="font-display text-base leading-relaxed text-parchment/80">{step.body ?? step.description}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
