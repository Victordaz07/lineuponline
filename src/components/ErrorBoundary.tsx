import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = { children: ReactNode }
type State = { error: Error | null }

const CHUNK_RELOAD_FLAG = 'lul:chunk-reload-attempted'

function isChunkLoadError(error: unknown): boolean {
  if (!(error instanceof Error)) return false
  const message = error.message || ''
  return (
    message.includes('Failed to fetch dynamically imported module') ||
    message.includes('Importing a module script failed') ||
    message.includes('error loading dynamically imported module') ||
    error.name === 'ChunkLoadError'
  )
}

async function purgeCachesAndReload(): Promise<void> {
  try {
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations()
      await Promise.all(registrations.map((r) => r.unregister()))
    }
    if ('caches' in window) {
      const names = await caches.keys()
      await Promise.all(names.map((n) => caches.delete(n)))
    }
  } catch (cleanupError) {
    console.warn('[ErrorBoundary] No se pudo limpiar la cach\u00e9 antes de recargar', cleanupError)
  } finally {
    window.location.reload()
  }
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  private handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    if (isChunkLoadError(event.reason)) {
      this.recoverFromStaleChunk(event.reason)
      return
    }
    console.error('[Unhandled Promise Rejection]', event.reason)
  }

  private handleWindowError = (event: ErrorEvent) => {
    if (isChunkLoadError(event.error)) {
      this.recoverFromStaleChunk(event.error)
      return
    }
    console.error('[Window Error]', event.error)
  }

  private recoverFromStaleChunk(error: unknown) {
    if (sessionStorage.getItem(CHUNK_RELOAD_FLAG) === '1') {
      console.error('[ErrorBoundary] Chunk load fall\u00f3 tras recargar', error)
      this.setState({ error: error instanceof Error ? error : new Error(String(error)) })
      return
    }
    sessionStorage.setItem(CHUNK_RELOAD_FLAG, '1')
    void purgeCachesAndReload()
  }

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection)
    window.addEventListener('error', this.handleWindowError)
    if (sessionStorage.getItem(CHUNK_RELOAD_FLAG) === '1') {
      sessionStorage.removeItem(CHUNK_RELOAD_FLAG)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.handleUnhandledRejection)
    window.removeEventListener('error', this.handleWindowError)
  }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (isChunkLoadError(error)) {
      this.recoverFromStaleChunk(error)
      return
    }
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
          <p className="font-display text-4xl">⚠️</p>
          <h2 className="font-display text-2xl text-parchment">Algo salió mal</h2>
          <p className="max-w-sm font-ui text-sm text-parchment/60">
            {this.state.error.message || 'Error inesperado en esta sección.'}
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => this.setState({ error: null })}
              className="rounded-full border border-sg-gold/25 bg-transparent px-4 py-2 font-ui text-sm font-semibold text-parchment/80 hover:bg-navy-deep/50"
            >
              Reintentar
            </button>
            <Link
              to="/"
              className="rounded-full bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-ink"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
