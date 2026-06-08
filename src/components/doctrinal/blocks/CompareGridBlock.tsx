import type { CompareGridBlock, CompareGridColumn } from '@/types/doctrine'

function columnHeading(column: CompareGridColumn): string {
  return column.title ?? column.label ?? ''
}

function columnBullets(column: CompareGridColumn): string[] {
  return column.items ?? column.points ?? []
}

// Keywords that indicate a column contains the "wrong/bad" option
const NEG_RE = /\bno\b|error|desconect|cierr|limitad|improvisa|coercitiv|defensiv|tentaci|barata|aplastante|muerta|aleja|\bmal\b|complicad|que espera\b/i
// Keywords that indicate a column contains the "right/good" option
const POS_RE = /\bsí\b|conecta|corrección|\babre\b|\bplena\b|servidor|genuina|\bviva\b|invita|actúa/i

type Polarity = 'left-neg' | 'right-neg' | 'neutral'

function detectPolarity(leftLabel: string, rightLabel: string): Polarity {
  const lNeg = NEG_RE.test(leftLabel)
  const rNeg = NEG_RE.test(rightLabel)
  const lPos = POS_RE.test(leftLabel)
  const rPos = POS_RE.test(rightLabel)
  // Both match the same kind → can't determine contrast → neutral
  if (lNeg && rNeg) return 'neutral'
  if (lPos && rPos) return 'neutral'
  if (lNeg || rPos) return 'left-neg'
  if (rNeg || lPos) return 'right-neg'
  return 'neutral'
}

const NEG_STYLE = {
  border: 'border-red-500/20',
  bg: 'bg-red-900/10',
  heading: 'text-red-400/90',
  dot: <span className="mt-0.5 shrink-0 text-red-400/60 select-none">–</span>,
}
const POS_STYLE = {
  border: 'border-emerald-500/20',
  bg: 'bg-emerald-900/10',
  heading: 'text-emerald-400/90',
  dot: <span className="mt-0.5 shrink-0 text-emerald-400 select-none">✓</span>,
}
const NEUTRAL_STYLE = {
  border: 'border-sg-gold/20',
  bg: 'bg-navy-deep',
  heading: 'text-parchment/55',
  dot: <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sg-gold/40 inline-block" />,
}

function Column({
  heading, items, style,
}: {
  heading: string
  items: string[]
  style: typeof NEG_STYLE
}) {
  return (
    <div className={`rounded-xl border ${style.border} ${style.bg} p-4`}>
      <p className={`mb-3 font-ui text-xs font-bold uppercase tracking-wide ${style.heading}`}>
        {heading}
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 font-ui text-sm text-parchment/80">
            {style.dot}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CompareGridBlockComponent({ block }: { block: CompareGridBlock }) {
  // ── Table variant ────────────────────────────────────────────────────────────
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
                  <th key={i} className="border border-sg-gold/15 px-3 py-2 text-left font-ui font-bold text-parchment">
                    {col}
                  </th>
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
                  <td className="border border-sg-gold/15 px-3 py-2 text-parchment/80">{cells[1]}</td>
                  <td className="border border-sg-gold/15 px-3 py-2 text-parchment/80">{cells[2]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  // ── Two-column variant ───────────────────────────────────────────────────────
  const left = block.left ?? { label: '', points: [] }
  const right = block.right ?? { label: '', points: [] }
  const lHead = columnHeading(left)
  const rHead = columnHeading(right)
  const lItems = columnBullets(left)
  const rItems = columnBullets(right)

  const polarity = detectPolarity(lHead, rHead)
  const leftStyle =
    polarity === 'left-neg' ? NEG_STYLE :
    polarity === 'right-neg' ? POS_STYLE :
    NEUTRAL_STYLE
  const rightStyle =
    polarity === 'right-neg' ? NEG_STYLE :
    polarity === 'left-neg' ? POS_STYLE :
    NEUTRAL_STYLE

  return (
    <div className="my-5">
      {block.title ? (
        <p className="mb-3 font-ui text-sm font-semibold text-parchment/85">{block.title}</p>
      ) : null}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Column heading={lHead} items={lItems} style={leftStyle} />
        <Column heading={rHead} items={rItems} style={rightStyle} />
      </div>
    </div>
  )
}
