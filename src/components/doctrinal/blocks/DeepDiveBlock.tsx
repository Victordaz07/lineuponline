import { useState } from 'react'
import type { DeepDiveBlock } from '@/types/doctrine'

export function DeepDiveBlockComponent({ block }: { block: DeepDiveBlock }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-sg-gold/25">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 bg-navy-mid px-4 py-3 text-left transition hover:bg-sg-gold/10"
      >
        <span className="shrink-0 rounded-full border border-sg-gold/30 bg-sg-gold/10 px-2.5 py-0.5 font-ui text-[0.68rem] font-bold uppercase tracking-wide text-sg-gold">
          {block.badge ?? 'Profundizar'}
        </span>
        <span className="flex-1 font-display text-sm text-parchment/85">{block.title}</span>
        <span
          className={`shrink-0 text-xs text-parchment/50 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
      {open && (
        <div className="space-y-3 border-t border-sg-gold/15 bg-navy-deep px-4 py-4">
          {block.paragraphs.map((p, i) => (
            <p key={i} className="font-display text-sm leading-relaxed text-parchment/80">
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
