import { useState } from 'react'
import type { DeepDiveBlock } from '@/types/doctrine'

export function DeepDiveBlockComponent({ block }: { block: DeepDiveBlock }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-gold-main/25">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 bg-bg-elevated px-4 py-3 text-left transition hover:bg-gold-dim"
      >
        <span className="shrink-0 rounded-full border border-gold-main/30 bg-gold-dim px-2.5 py-0.5 font-ui text-[0.68rem] font-bold uppercase tracking-wide text-gold-main">
          {block.badge ?? 'Profundizar'}
        </span>
        <span className="flex-1 font-reading text-sm text-text-main">{block.title}</span>
        <span
          className={`shrink-0 text-xs text-text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
      {open && (
        <div className="space-y-3 border-t border-gold-main/15 px-4 py-4">
          {block.paragraphs.map((p, i) => (
            <p key={i} className="font-ui text-sm leading-relaxed text-text-main">
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
