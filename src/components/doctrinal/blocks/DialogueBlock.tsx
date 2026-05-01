import type { DialogueBlock } from '@/types/doctrine'

export function DialogueBlockComponent({ block }: { block: DialogueBlock }) {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-gold-main/25">
      <div className="border-b border-gold-main/20 bg-bg-elevated px-4 py-2.5 font-ui text-xs font-semibold uppercase tracking-widest text-gold-main">
        {block.title ?? 'Diálogo Dramatizado'}
      </div>
      {block.lines.map((line, i) => (
        <div
          key={i}
          className={`flex gap-3 border-b border-gold-main/10 px-4 py-3 last:border-0 ${
            line.side === 'left' ? 'bg-gold-dim/30' : 'bg-blue-accent/[0.04]'
          }`}
        >
          <span
            className={`w-20 shrink-0 pt-0.5 font-ui text-[0.68rem] font-bold uppercase tracking-wide ${
              line.side === 'left' ? 'text-gold-main' : 'text-blue-accent'
            }`}
          >
            {line.speaker}
          </span>
          <p className="flex-1 font-reading text-sm leading-relaxed text-text-main">{line.text}</p>
        </div>
      ))}
    </div>
  )
}
