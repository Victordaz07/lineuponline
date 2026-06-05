import type { CrisisCardsBlock } from '@/types/doctrine'

const colorMap = {
  purple: {
    border: 'border-purple-400/40',
    bg: 'bg-purple-950/30',
    bar: 'bg-purple-500',
    num: 'text-purple-300',
  },
  blue: {
    border: 'border-sg-gold/30',
    bg: 'bg-navy-mid',
    bar: 'bg-sg-gold',
    num: 'text-sg-gold-light',
  },
  red: {
    border: 'border-red-400/40',
    bg: 'bg-red-950/30',
    bar: 'bg-red-500',
    num: 'text-red-400',
  },
}

export function CrisisCardsBlockComponent({ block }: { block: CrisisCardsBlock }) {
  return (
    <div className="my-5 flex flex-col gap-4">
      {block.cards.map((card, i) => {
        const c = colorMap[card.color]
        return (
          <div
            key={i}
            className={`relative overflow-hidden rounded-xl border ${c.border} ${c.bg} pl-5 pr-4 py-4`}
          >
            <span className={`absolute left-0 top-0 bottom-0 w-1 ${c.bar} rounded-l-xl`} />
            <p className={`mb-1 font-ui text-xs font-bold uppercase tracking-widest ${c.num}`}>
              {card.num}
            </p>
            <p className="mb-1.5 font-reading text-base font-semibold text-parchment/85">{card.title}</p>
            <p className="font-ui text-sm leading-relaxed text-parchment/75">{card.desc}</p>
          </div>
        )
      })}
    </div>
  )
}
