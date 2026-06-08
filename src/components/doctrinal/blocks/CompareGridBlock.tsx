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
          <p className="mb-3 font-ui text-sm font-semibold text-parchment/85">{block.title}</p>
        ) : null}
        <table className="w-full border-collapse text-sm">
          {block.columns ? (
            <thead>
              <tr className="bg-sg-gold/10">
                {block.columns.map((col, i) => (
                  <th key={i} className="border border-sg-gold/15 px-3 py-2 font-ui font-bold text-parchment text-left">{col}</th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {block.rows.map((row, i) => {
              const cells = Array.isArray(row) ? row : [row.label, row.a, row.b]
              return (
                <tr key={i} className={i % 2 === 0 ? 'bg-navy-mid' : 'bg-navy-deep'}>
                  <td className="border border-sg-gold/15 px-3 py-2 font-ui font-semibold text-parchment/85">{cells[0]}</td>
                  <td className="border border-sg-gold/15 px-3 py-2 text-emerald-400">{cells[1]}</td>
                  <td className="border border-sg-gold/15 px-3 py-2 text-red-400">{cells[2]}</td>
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
        <p className="mb-3 font-ui text-sm font-semibold text-parchment/85">{block.title}</p>
      ) : null}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4">
          <p className="mb-3 font-ui text-xs font-bold uppercase tracking-wide text-emerald-400">{leftHeading}</p>
          <ul className="space-y-1.5">
            {leftItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 font-ui text-sm text-parchment/80">
                <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-red-500/25 bg-red-500/10 p-4">
          <p className="mb-3 font-ui text-xs font-bold uppercase tracking-wide text-red-400">{rightHeading}</p>
          <ul className="space-y-1.5">
            {rightItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 font-ui text-sm text-parchment/80">
                <span className="mt-0.5 shrink-0 text-red-400/70">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
