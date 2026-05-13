import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { Layout } from '@/components/layout/Layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import Dashboard from '@/pages/Dashboard'
import ModuleView from '@/pages/ModuleView'
import LessonView from '@/pages/LessonView'
import LoginPage from '@/pages/LoginPage'
import MyNotes from '@/pages/MyNotes'
import Search from '@/pages/Search'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/module/:moduleId" element={<ModuleView />} />
              <Route path="/lesson/:moduleId/:lessonId" element={<LessonView />} />
              <Route path="/my-notes" element={<MyNotes />} />
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registro" element={<Navigate to="/login" replace />} />
              <Route path="/notas" element={<Navigate to="/my-notes" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ErrorBoundary>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  )
}
