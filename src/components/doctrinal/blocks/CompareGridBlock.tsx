import type { CompareGridBlock, CompareGridColumn } from '@/types/doctrine'

function columnHeading(column: CompareGridColumn): string {
  return column.title ?? column.label ?? ''
}

function columnBullets(column: CompareGridColumn): string[] {
  return column.items ?? column.points ?? []
}

export function CompareGridBlockComponent({ block }: { block: CompareGridBlock }) {
  const leftHeading = columnHeading(block.left)
  const rightHeading = columnHeading(block.right)
  const leftItems = columnBullets(block.left)
  const rightItems = columnBullets(block.right)

  return (
    <div className="my-5">
      {block.title ? (
        <p className="mb-3 font-ui text-sm font-semibold text-text-main">{block.title}</p>
      ) : null}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="mb-3 font-ui text-xs font-bold uppercase tracking-wide text-emerald-700">{leftHeading}</p>
          <ul className="space-y-1.5">
            {leftItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 font-ui text-sm text-text-main">
                <span className="mt-0.5 shrink-0 text-emerald-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="mb-3 font-ui text-xs font-bold uppercase tracking-wide text-red-700">{rightHeading}</p>
          <ul className="space-y-1.5">
            {rightItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 font-ui text-sm text-text-main">
                <span className="mt-0.5 shrink-0 text-red-500">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
