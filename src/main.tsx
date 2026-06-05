import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { getFirebaseAnalytics, isFirebaseConfigured } from '@/lib/firebase'

if (isFirebaseConfigured()) {
  void getFirebaseAnalytics()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
