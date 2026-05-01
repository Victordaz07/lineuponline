import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import Dashboard from '@/pages/Dashboard'
import ModuleView from '@/pages/ModuleView'
import LessonView from '@/pages/LessonView'
import MyNotes from '@/pages/MyNotes'
import Search from '@/pages/Search'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/module/:moduleId" element={<ModuleView />} />
          <Route path="/lesson/:moduleId/:lessonId" element={<LessonView />} />
          <Route path="/my-notes" element={<MyNotes />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<div className="p-8 text-center font-ui text-text-muted">404 — Página no encontrada</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
