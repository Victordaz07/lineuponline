import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import Dashboard from '@/pages/Dashboard'
import ModuleView from '@/pages/ModuleView'
import LessonView from '@/pages/LessonView'
import ExpiacionView from '@/pages/ExpiacionView'
import MyNotes from '@/pages/MyNotes'
import Search from '@/pages/Search'

/**
 * Raíz de enrutamiento: rutas canónicas bajo `Layout`.
 *
 * @returns Aplicación enrutada
 */
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/module/:moduleId" element={<ModuleView />} />
          <Route path="/lesson/doctrina-fundamental/la-expiacion-del-salvador" element={<ExpiacionView />} />
          <Route path="/lesson/:moduleId/:lessonId" element={<LessonView />} />
          <Route path="/my-notes" element={<MyNotes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notas" element={<Navigate to="/my-notes" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
