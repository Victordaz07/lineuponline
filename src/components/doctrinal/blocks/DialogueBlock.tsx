import type { DialogueBlock } from '@/types/doctrine'

export function DialogueBlockComponent({ block }: { block: DialogueBlock }) {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-sg-gold/25">
      <div className="border-b border-sg-gold/20 bg-navy-mid px-4 py-2.5 font-ui text-xs font-semibold uppercase tracking-widest text-sg-gold">
        {block.title ?? 'Diálogo Dramatizado'}
      </div>
      {block.lines.map((line, i) => (
        <div
          key={i}
          className={`flex gap-3 border-b border-sg-gold/10 px-4 py-3 last:border-0 ${
            line.side === 'left' ? 'bg-navy-mid' : 'bg-navy-deep'
          }`}
        >
          <span
            className={`w-20 shrink-0 pt-0.5 font-ui text-[0.68rem] font-bold uppercase tracking-wide ${
              line.side === 'left' ? 'text-sg-gold' : 'text-sg-gold-light'
            }`}
          >
            {line.speaker}
          </span>
          <p className="flex-1 font-display text-sm leading-relaxed text-parchment/85">{line.text}</p>
        </div>
      ))}
    </div>
  )
}
