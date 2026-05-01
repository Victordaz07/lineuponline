import type { TimelineBlock } from '@/types/doctrine'

const dotColor = {
  gold: 'border-gold-main bg-gold-dim',
  red: 'border-red-400 bg-red-50',
  blue: 'border-blue-accent bg-blue-accent/10',
  green: 'border-emerald-500 bg-emerald-50',
}

const labelColor = {
  gold: 'text-gold-main',
  red: 'text-red-600',
  blue: 'text-blue-accent',
  green: 'text-emerald-700',
}

export function TimelineBlockComponent({ block }: { block: TimelineBlock }) {
  return (
    <div className="relative my-5 space-y-5 pl-8">
      <span className="absolute left-[9px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-gold-main/40 via-red-300/40 to-emerald-400/40" />
      {block.items.map((item, i) => (
        <div key={i} className="relative">
          <span
            className={`absolute -left-[23px] top-1 h-3.5 w-3.5 rounded-full border-2 ${dotColor[item.color]}`}
          />
          <p className={`mb-0.5 font-ui text-[0.68rem] font-bold uppercase tracking-widest ${labelColor[item.color]}`}>
            {item.label}
          </p>
          <p className="font-reading text-sm leading-relaxed text-text-main">{item.text}</p>
          {item.ref && (
            <p className="mt-1 font-ui text-xs text-text-muted">{item.ref}</p>
          )}
        </div>
      ))}
    </div>
  )
}
