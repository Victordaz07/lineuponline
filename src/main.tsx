import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { getFirebaseAnalytics, isFirebaseConfigured } from '@/lib/firebase'
import { initThemeFromStorage } from '@/stores/preferencesStore'

// Resuelve el tema (claro/oscuro/sistema) antes del primer render para evitar parpadeo.
initThemeFromStorage()

if (isFirebaseConfigured()) {
  void getFirebaseAnalytics()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
