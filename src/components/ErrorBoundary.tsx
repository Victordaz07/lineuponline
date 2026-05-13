import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = { children: ReactNode }
type State = { error: Error | null }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
          <p className="font-title text-4xl">⚠️</p>
          <h2 className="font-title text-2xl text-blue-accent">Algo salió mal</h2>
          <p className="max-w-sm font-ui text-sm text-text-muted">
            {this.state.error.message || 'Error inesperado en esta sección.'}
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => this.setState({ error: null })}
              className="rounded-full border border-blue-accent/25 bg-white px-4 py-2 font-ui text-sm font-semibold text-blue-accent"
            >
              Reintentar
            </button>
            <Link
              to="/"
              className="rounded-full bg-gold-main px-4 py-2 font-ui text-sm font-semibold text-white"
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
