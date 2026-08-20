type KpiCardProps = {
  label: string
  value: number
  sub?: string
  accent?: boolean
}

export function KpiCard({ label, value, sub, accent }: KpiCardProps) {
  return (
    <div className="rounded-xl border border-sg-gold/10 bg-navy-deep p-4">
      <p className="font-ui text-xs uppercase tracking-wide text-parchment/40">{label}</p>
      <p className={`mt-1 font-display text-2xl ${accent ? 'text-sg-gold' : 'text-sg-gold-light'}`}>
        {value.toLocaleString()}
      </p>
      {sub ? <p className="mt-1 font-ui text-xs text-parchment/30">{sub}</p> : null}
    </div>
  )
}

type HBarProps = {
  rank: number
  label: string
  value: number
  max: number
  suffix?: string
  color?: string
}

export function HBar({ rank, label, value, max, suffix = '', color = 'bg-sg-gold' }: HBarProps) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <span className="w-5 text-right font-ui text-xs text-parchment/30">{rank}</span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="truncate font-ui text-sm text-parchment/80">{label}</span>
          <span className="shrink-0 font-ui text-xs font-semibold text-sg-gold-light">
            {value}{suffix}
          </span>
        </div>
        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-navy-light">
          <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  )
}
