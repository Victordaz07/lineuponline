import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { AuthProvider } from '@/contexts/AuthContext'
import { useFirestoreSync } from '@/hooks/useFirestoreSync'
import Dashboard from '@/pages/Dashboard'
import ModuleView from '@/pages/ModuleView'
import LessonView from '@/pages/LessonView'
import Login from '@/pages/Login'
import MyNotes from '@/pages/MyNotes'
import Search from '@/pages/Search'
import CommunityPage from '@/pages/CommunityPage'
import AdminPage from '@/pages/AdminPage'

function AppRoutes() {
  useFirestoreSync()
  return (
    <Layout>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/module/:moduleId" element={<ModuleView />} />
          <Route path="/lesson/:moduleId/:lessonId" element={<LessonView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-notes" element={<MyNotes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/notas" element={<Navigate to="/my-notes" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ErrorBoundary>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
