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
      className="rounded-xl border border-blue-accent/15 bg-bg-surface px-3 py-2 font-ui text-xs text-text-muted"
      role="status"
      aria-live="polite"
    >
      <p>
        Red:{' '}
        <span className={isOnline ? 'font-semibold text-blue-accent' : 'font-semibold text-gold-main'}>
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
