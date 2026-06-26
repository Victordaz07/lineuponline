import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { Layout } from '@/components/layout/Layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { useFirestoreSync } from '@/hooks/useFirestoreSync'
import Dashboard from '@/pages/Dashboard'

const ModuleView = lazy(() => import('@/pages/ModuleView'))
const LessonView = lazy(() => import('@/pages/LessonView'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const MyNotes = lazy(() => import('@/pages/MyNotes'))
const Search = lazy(() => import('@/pages/Search'))
const ProfilePage = lazy(() => import('@/pages/ProfilePage'))
const CommunityPage = lazy(() => import('@/pages/CommunityPage'))
const AdminPage = lazy(() => import('@/pages/AdminPage'))
const EpisodeGeneratorPage = lazy(() => import('@/pages/EpisodeGeneratorPage'))
const BitacoraPage = lazy(() => import('@/pages/BitacoraPage'))
const MusicAdminPage = lazy(() => import('@/features/music/admin/MusicAdminPage'))

// Scripture Quest — content admin (images + audio)
const SQAdminPage = lazy(() => import('@/features/scripture-quest/admin/SQAdminPage'))
// Scripture Quest — multi-round additions
const CountdownPage = lazy(() => import('@/features/scripture-quest/components/CountdownPage'))
const BadgesDemoPage = lazy(() => import('@/features/scripture-quest/components/BadgesScreen'))
const SQTutorialPage = lazy(() => import('@/features/scripture-quest/components/TutorialPage'))
const SoloPrepPage = lazy(() => import('@/features/scripture-quest/pages/SoloPrepPage'))

// Scripture Quest — game module (loaded as one chunk through its entry point)
const sq = () => import('@/features/scripture-quest')
const SQLanding = lazy(() => sq().then((m) => ({ default: m.ScriptureQuestLandingPage })))
const SQHost    = lazy(() => sq().then((m) => ({ default: m.ScriptureQuestHostPage })))
const SQPlayer  = lazy(() => sq().then((m) => ({ default: m.ScriptureQuestPlayerPage })))
const SQResults = lazy(() => sq().then((m) => ({ default: m.ScriptureQuestResultsPage })))
const SQStudy   = lazy(() => sq().then((m) => ({ default: m.ScriptureQuestStudyPage })))
const SQSolo    = lazy(() => sq().then((m) => ({ default: m.ScriptureQuestSoloPage })))
const SQTv      = lazy(() => sq().then((m) => ({ default: m.ScriptureQuestTvPage })))
const SQProfile = lazy(() => sq().then((m) => ({ default: m.ScriptureQuestProfilePage })))
const SQAdmin   = lazy(() => sq().then((m) => ({ default: m.ScriptureQuestAdminPage })))

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <LoadingSpinner />
    </div>
  )
}

function AppRoutes() {
  useFirestoreSync()
  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/module/:moduleId" element={<ModuleView />} />
            <Route path="/lesson/:moduleId/:lessonId" element={<LessonView />} />
            <Route path="/my-notes" element={<MyNotes />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/bitacora" element={<BitacoraPage />} />
            <Route path="/admin/music" element={<MusicAdminPage />} />
            <Route path="/tools/episode-generator" element={<EpisodeGeneratorPage />} />

            {/* Scripture Quest — game pages */}
            <Route path="/games/scripture-quest" element={<SQLanding />} />
            <Route path="/games/scripture-quest/host/:roomId" element={<SQHost />} />
            <Route path="/games/scripture-quest/play/:roomId" element={<SQPlayer />} />
            <Route path="/games/scripture-quest/results/:roomId" element={<SQResults />} />
            <Route path="/games/scripture-quest/study" element={<SQStudy />} />
            <Route path="/games/scripture-quest/solo" element={<SQSolo />} />
            <Route path="/games/scripture-quest/solo/prep" element={<SoloPrepPage />} />
            <Route path="/games/scripture-quest/tv/:roomId" element={<SQTv />} />
            <Route path="/profile/scripture-quest" element={<SQProfile />} />

            {/* Scripture Quest — extra screens */}
            <Route path="/games/scripture-quest/practice/countdown" element={<CountdownPage />} />
            <Route path="/host/:roomId/countdown" element={<CountdownPage />} />
            <Route path="/play/:roomId/countdown" element={<CountdownPage />} />
            <Route path="/games/scripture-quest/badges-demo" element={<BadgesDemoPage />} />
            <Route path="/games/scripture-quest/como-jugar" element={<SQTutorialPage />} />

            {/* Scripture Quest — admin */}
            <Route path="/admin/scripture-quest" element={<SQAdmin />} />
            <Route path="/admin/scripture-quest/contenido" element={<SQAdminPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<Navigate to="/login" replace />} />
            <Route path="/notas" element={<Navigate to="/my-notes" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
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
