import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { Layout } from '@/components/layout/Layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import Dashboard from '@/pages/Dashboard'

// Lazy-load heavy pages to reduce initial bundle size
const ModuleView = lazy(() => import('@/pages/ModuleView'))
const LessonView = lazy(() => import('@/pages/LessonView'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const MyNotes = lazy(() => import('@/pages/MyNotes'))
const Search = lazy(() => import('@/pages/Search'))

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <LoadingSpinner />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
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
            </Suspense>
          </ErrorBoundary>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  )
}
