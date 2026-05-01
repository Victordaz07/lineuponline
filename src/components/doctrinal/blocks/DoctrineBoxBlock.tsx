import { useId } from 'react'
import type { DoctrineBoxBlock as DoctrineBoxBlockType } from '@/types/doctrine'

export type DoctrineBoxBlockProps = {
  block: DoctrineBoxBlockType
}

/**
 * Recuadro doctrinal destacado.
 */
export function DoctrineBoxBlock({ block }: DoctrineBoxBlockProps) {
  const headingId = useId()
  return (
    <aside
      className="rounded-2xl border-2 border-gold-main/40 bg-white p-5 shadow-md"
      aria-labelledby={headingId}
    >
      <h3 id={headingId} className="flex items-center gap-2 font-title text-lg text-blue-accent">
        {block.icon ? <span aria-hidden="true">{block.icon}</span> : <span aria-hidden="true">📖</span>}
        {block.title}
      </h3>
      <p className="mt-3 text-reading text-base leading-relaxed text-text-main">{block.body}</p>
    </aside>
  )
}
