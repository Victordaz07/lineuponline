import type { CommunityMessage } from '@/types/community'

type StatCardProps = {
  value: number
  label: string
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-blue-accent/10 bg-white p-4 text-center">
      <p className="font-title text-3xl text-blue-accent">{value}</p>
      <p className="mt-1 font-ui text-xs text-text-muted">{label}</p>
    </div>
  )
}

type AdminStatsProps = {
  messages: CommunityMessage[]
}

export function AdminStats({ messages }: AdminStatsProps) {
  const total = messages.length
  const pending = messages.filter((m) => m.status === 'pending').length
  const replied = messages.filter((m) => m.status === 'replied').length
  const resolved = messages.filter((m) => m.status === 'resolved').length

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <StatCard value={total} label="Total mensajes" />
      <StatCard value={pending} label="Pendientes" />
      <StatCard value={replied} label="Respondidos" />
      <StatCard value={resolved} label="Resueltos" />
    </div>
  )
}
