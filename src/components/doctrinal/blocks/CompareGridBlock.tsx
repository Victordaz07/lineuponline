import type { CompareGridBlock, CompareGridColumn } from '@/types/doctrine'

function columnHeading(column: CompareGridColumn): string {
  return column.title ?? column.label ?? ''
}

function columnBullets(column: CompareGridColumn): string[] {
  return column.items ?? column.points ?? []
}

export function CompareGridBlockComponent({ block }: { block: CompareGridBlock }) {
  if (block.rows && block.rows.length > 0) {
    return (
      <div className="my-5 overflow-x-auto">
        {block.title ? (
          <p className="mb-3 font-ui text-sm font-semibold text-text-main">{block.title}</p>
        ) : null}
        <table className="w-full border-collapse text-sm">
          {block.columns ? (
            <thead>
              <tr className="bg-blue-accent/10">
                {block.columns.map((col, i) => (
                  <th key={i} className="border border-blue-accent/15 px-3 py-2 font-ui font-bold text-text-main text-left">{col}</th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {block.rows.map((row, i) => {
              const cells = Array.isArray(row) ? row : [row.label, row.a, row.b]
              return (
                <tr key={i} className={i % 2 === 0 ? 'bg-white/60' : 'bg-blue-50/40'}>
                  <td className="border border-blue-accent/15 px-3 py-2 font-ui font-semibold text-text-main">{cells[0]}</td>
                  <td className="border border-blue-accent/15 px-3 py-2 text-emerald-800">{cells[1]}</td>
                  <td className="border border-blue-accent/15 px-3 py-2 text-red-800">{cells[2]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  const left = block.left ?? { label: '', points: [] }
  const right = block.right ?? { label: '', points: [] }
  const leftHeading = columnHeading(left)
  const rightHeading = columnHeading(right)
  const leftItems = columnBullets(left)
  const rightItems = columnBullets(right)

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
