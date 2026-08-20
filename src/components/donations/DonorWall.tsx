import { useEffect, useState } from 'react'
import { splitDonorWall, subscribeDonorWall } from '@/services/donations.service'
import type { DonorWallEntry } from '@/types/donations'

function DonorRow({ entry }: { entry: DonorWallEntry }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg bg-navy-deep px-3 py-2.5">
      <span className="truncate font-ui text-sm text-parchment/85">{entry.displayName}</span>
      {entry.location && <span className="shrink-0 font-ui text-xs text-parchment/40">{entry.location}</span>}
    </div>
  )
}

export function DonorWall() {
  const [entries, setEntries] = useState<DonorWallEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return subscribeDonorWall((all) => {
      setEntries(all)
      setLoading(false)
    })
  }, [])

  if (loading) return null

  const { monthlyTeam, oneTimeCollaborators } = splitDonorWall(entries)

  if (monthlyTeam.length === 0 && oneTimeCollaborators.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-sg-gold/25 bg-navy-mid/50 p-5 text-center">
        <p className="font-ui text-sm text-parchment/50">Aún no hay donadores — ¡sé el primero!</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {monthlyTeam.length > 0 && (
        <section className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5">
          <h2 className="mb-3 font-display text-lg text-parchment">Equipo mensual 🍎</h2>
          <p className="mb-3 font-ui text-xs text-parchment/40">Sostienen los servidores mes a mes</p>
          <div className="space-y-2">
            {monthlyTeam.map((entry) => (
              <DonorRow key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      )}

      {oneTimeCollaborators.length > 0 && (
        <section className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5">
          <h2 className="mb-3 font-display text-lg text-parchment">Colaboradores</h2>
          <p className="mb-3 font-ui text-xs text-parchment/40">Hicieron una donación única</p>
          <div className="space-y-2">
            {oneTimeCollaborators.map((entry) => (
              <DonorRow key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
