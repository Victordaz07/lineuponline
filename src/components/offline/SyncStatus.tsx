/**
 * Muestra el estado de sincronización de notas y red.
 *
 * @param props - Estado de red y sincronización
 * @returns Barra de estado compacta
 */
export function SyncStatus({
  isOnline,
  isSyncing,
  pendingCount,
  lastError,
}: {
  isOnline: boolean
  isSyncing: boolean
  pendingCount: number
  lastError: string | null
}) {
  return (
    <div
      className="rounded-xl border border-sg-gold/15 bg-navy-mid px-3 py-2 font-ui text-xs text-parchment/55"
      role="status"
      aria-live="polite"
    >
      <p>
        Red:{' '}
        <span className={isOnline ? 'font-semibold text-emerald-400' : 'font-semibold text-sg-gold'}>
          {isOnline ? 'En línea' : 'Sin conexión'}
        </span>
      </p>
      <p>
        Sincronización: {isSyncing ? 'En curso' : 'Inactiva'} · Pendientes: {pendingCount}
      </p>
      {lastError ? <p className="mt-1 text-red-600">Error: {lastError}</p> : null}
    </div>
  )
}
