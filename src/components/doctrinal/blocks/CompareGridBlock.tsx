import type { CompareGridBlock } from '@/types/doctrine'

export function CompareGridBlockComponent({ block }: { block: CompareGridBlock }) {
  return (
    <div className="my-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <p className="mb-3 font-ui text-xs font-bold uppercase tracking-wide text-emerald-700">
          {block.left.title}
        </p>
        <ul className="space-y-1.5">
          {block.left.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 font-ui text-sm text-text-main">
              <span className="mt-0.5 shrink-0 text-emerald-600">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-red-200 bg-red-50 p-4">
        <p className="mb-3 font-ui text-xs font-bold uppercase tracking-wide text-red-700">
          {block.right.title}
        </p>
        <ul className="space-y-1.5">
          {block.right.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 font-ui text-sm text-text-main">
              <span className="mt-0.5 shrink-0 text-red-500">✗</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
