import { useId } from 'react'
import type { DoctrineBoxBlock as DoctrineBoxBlockType } from '@/types/doctrine'

export type DoctrineBoxBlockProps = {
  block: DoctrineBoxBlockType
}

export function DoctrineBoxBlock({ block }: DoctrineBoxBlockProps) {
  const headingId = useId()
  return (
    <aside
      className="rounded-2xl border-2 border-sg-gold/35 bg-navy-mid p-5 shadow-md"
      aria-labelledby={headingId}
    >
      <h3 id={headingId} className="flex items-center gap-2 font-display text-lg text-parchment">
        {block.icon ? <span aria-hidden="true">{block.icon}</span> : <span aria-hidden="true">📖</span>}
        {block.title}
      </h3>
      <p className="mt-3 font-display text-base leading-relaxed text-parchment/80">{block.body}</p>
    </aside>
  )
}
