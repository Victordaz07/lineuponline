import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { Layout } from '@/components/layout/Layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { useFirestoreSync } from '@/hooks/useFirestoreSync'
import Dashboard from '@/pages/Dashboard'

const GamesHub = lazy(() => import('@/pages/GamesHub'))
const MemoryMatch = lazy(() => import('@/features/mini-games/games/MemoryMatch'))
const WordSearchPlay = lazy(() => import('@/features/mini-games/games/WordSearchPlay'))
const CaminoHub = lazy(() => import('@/features/mini-games/camino/CaminoHub'))
const CaminoPath = lazy(() => import('@/features/mini-games/camino/CaminoPath'))
const CaminoChallenge = lazy(() => import('@/features/mini-games/camino/CaminoChallenge'))
const GuessWord = lazy(() => import('@/features/mini-games/games/GuessWord'))

const ModuleView = lazy(() => import('@/pages/ModuleView'))
const LessonView = lazy(() => import('@/pages/LessonView'))
const TagPage = lazy(() => import('@/pages/TagPage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const MyNotes = lazy(() => import('@/pages/MyNotes'))
const Search = lazy(() => import('@/pages/Search'))
const ProfilePage = lazy(() => import('@/pages/ProfilePage'))
const CommunityPage = lazy(() => import('@/pages/CommunityPage'))
const AdminPage = lazy(() => import('@/pages/AdminPage'))
const BitacoraPage = lazy(() => import('@/pages/BitacoraPage'))
const ModuleImagesAdminPage = lazy(() => import('@/pages/ModuleImagesAdminPage'))
const MusicAdminPage = lazy(() => import('@/features/music/admin/MusicAdminPage'))
const MusicPage = lazy(() => import('@/pages/MusicPage'))
const DescargablesPage = lazy(() => import('@/pages/DescargablesPage'))
const DescargableDetailPage = lazy(() => import('@/pages/DescargableDetailPage'))
const DescargablesAdminPage = lazy(() => import('@/pages/DescargablesAdminPage'))
const ApoyanosPage = lazy(() => import('@/pages/ApoyanosPage'))

// Música (álbumes + canciones de YouTube) — feature independiente del pipeline de IA de arriba
const DiscographyPage = lazy(() => import('@/features/discography/pages/DiscographyPage'))
const AlbumPage = lazy(() => import('@/features/discography/pages/AlbumPage'))
const DiscographyAdminPage = lazy(() => import('@/features/discography/admin/DiscographyAdminPage'))

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
            <Route path="/tema/:tag" element={<TagPage />} />
            <Route path="/my-notes" element={<MyNotes />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/bitacora" element={<BitacoraPage />} />
            <Route path="/admin/imagenes" element={<ModuleImagesAdminPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/admin/music" element={<MusicAdminPage />} />

            {/* Descargables — recursos públicos descargables (PDFs, guías) */}
            <Route path="/descargables" element={<DescargablesPage />} />
            <Route path="/descargables/:id" element={<DescargableDetailPage />} />
            <Route path="/admin/descargables" element={<DescargablesAdminPage />} />
            <Route path="/apoyanos" element={<ApoyanosPage />} />

            {/* Música — álbumes + canciones de YouTube */}
            <Route path="/musica" element={<DiscographyPage />} />
            <Route path="/musica/album/:albumId" element={<AlbumPage />} />
            <Route path="/admin/musica" element={<DiscographyAdminPage />} />

            {/* Games hub — mini-juegos casuales */}
            <Route path="/games" element={<GamesHub />} />
            <Route path="/games/memoria" element={<MemoryMatch />} />
            <Route path="/games/sopa-de-letras" element={<CaminoHub />} />
            <Route path="/games/sopa-de-letras/diario" element={<WordSearchPlay />} />
            <Route path="/games/sopa-de-letras/etapa/:stageId" element={<WordSearchPlay />} />
            <Route path="/games/sopa-de-letras/camino/:volumeId" element={<CaminoPath />} />
            <Route path="/games/sopa-de-letras/reto/:stageId" element={<CaminoChallenge />} />
            <Route path="/games/adivina-la-palabra" element={<GuessWord />} />

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
