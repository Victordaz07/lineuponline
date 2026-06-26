import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAdmin } from '@/hooks/useAdmin'
import { useAuth } from '@/hooks/useAuth'
import { DayDetail } from '@/components/bitacora/DayDetail'
import { WeekView } from '@/components/bitacora/WeekView'
import { IdeasInbox } from '@/components/bitacora/IdeasInbox'
import { HistoryView } from '@/components/bitacora/HistoryView'
import { toDateKey } from '@/utils/bitacoraDate'

type TabId = 'hoy' | 'semana' | 'ideas' | 'historial'

const TABS: { id: TabId; label: string }[] = [
  { id: 'hoy', label: 'Hoy' },
  { id: 'semana', label: 'Semana' },
  { id: 'ideas', label: 'Ideas' },
  { id: 'historial', label: 'Historial' },
]

export default function BitacoraPage() {
  const { user, authLoading } = useAuth()
  const { isAdmin } = useAdmin()
  const [tab, setTab] = useState<TabId>('hoy')
  const today = toDateKey(new Date())

  if (authLoading) return null
  if (!user || !isAdmin) return <Navigate to="/" replace />

  return (
    <div className="mx-auto max-w-2xl space-y-6 pb-12">
      <header className="space-y-1">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Panel de administración
        </p>
        <h1 className="font-display text-3xl text-parchment">Bitácora-Planner</h1>
      </header>

      <div role="tablist" className="flex gap-1 rounded-2xl border border-sg-gold/15 bg-navy-mid p-1">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex-1 rounded-xl px-3 py-2 font-ui text-xs font-semibold transition ${
              tab === id ? 'bg-navy-light text-parchment shadow-sm' : 'text-parchment/40 hover:text-parchment/70'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'hoy' ? <DayDetail date={today} /> : null}
      {tab === 'semana' ? <WeekView /> : null}
      {tab === 'ideas' ? <IdeasInbox /> : null}
      {tab === 'historial' ? <HistoryView /> : null}
    </div>
  )
}
