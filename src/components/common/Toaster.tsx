import { useToastStore } from '@/stores/toastStore'

const colorMap = {
  error: 'bg-red-500',
  success: 'bg-emerald-500',
  info: 'bg-navy-light',
}

export function Toaster() {
  const { toasts, removeToast } = useToastStore()

  if (toasts.length === 0) return null

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed bottom-20 right-4 z-[100] flex flex-col gap-2 sm:bottom-6"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          role="alert"
          className={`pointer-events-auto flex items-start gap-3 rounded-xl px-4 py-3 shadow-lg ${colorMap[t.type]} max-w-xs text-white`}
        >
          <p className="flex-1 font-ui text-sm">{t.message}</p>
          <button
            type="button"
            onClick={() => removeToast(t.id)}
            aria-label="Cerrar notificación"
            className="mt-0.5 shrink-0 opacity-75 hover:opacity-100"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}
