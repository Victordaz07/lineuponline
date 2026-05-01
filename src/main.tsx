import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import { AppShellLayout } from './layout/AppShellLayout'
import { DashboardPage } from './pages/DashboardPage'
import { LessonViewPage } from './pages/LessonViewPage'
import { ModuleViewPage } from './pages/ModuleViewPage'
import { LazyNotesPage } from './pages/LazyNotesPage'
import { UnderConstruction } from './components/catalog/UnderConstruction'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppShellLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="module/:moduleId" element={<ModuleViewPage />} />
          <Route path="lesson/:moduleId/:lessonId" element={<LessonViewPage />} />
          <Route path="under-construction" element={<UnderConstruction />} />
          <Route
            path="notas"
            element={
              <Suspense
                fallback={
                  <div className="flex min-h-[40vh] items-center justify-center font-ui text-text-main/80">
                    Cargando notas…
                  </div>
                }
              >
                <LazyNotesPage />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
