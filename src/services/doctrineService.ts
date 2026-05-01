/**
 * Acceso a datos doctrinales (módulos y lecciones).
 * Actualmente respaldado por datos semilla; Firestore puede integrarse aquí después.
 */
import { findSeedLesson, findSeedModule, seedModules } from '@/data/seed-doctrine'
import type { DoctrinalModule, Lesson } from '@/types/doctrine'

/**
 * Lista todos los módulos doctrinales disponibles.
 *
 * @returns Lista de módulos
 */
export async function fetchDoctrineModules(): Promise<DoctrinalModule[]> {
  return seedModules.map((m) => ({ ...m, lessonIds: [...m.lessonIds] }))
}

/**
 * Obtiene un módulo por id.
 *
 * @param moduleId - Identificador del módulo
 * @returns Módulo o null
 */
export async function fetchDoctrineModule(moduleId: string): Promise<DoctrinalModule | null> {
  const found = findSeedModule(moduleId)
  return found ? { ...found, lessonIds: [...found.lessonIds] } : null
}

/**
 * Obtiene una lección por módulo e id de lección.
 *
 * @param moduleId - Identificador del módulo
 * @param lessonId - Identificador de la lección
 * @returns Lección o null
 */
export async function fetchLesson(moduleId: string, lessonId: string): Promise<Lesson | null> {
  const lesson = findSeedLesson(moduleId, lessonId)
  return lesson ? { ...lesson, scriptures: lesson.scriptures ? [...lesson.scriptures] : undefined } : null
}

/**
 * Obtiene todas las lecciones de un módulo en orden (datos semilla).
 *
 * @param moduleId - Identificador del módulo
 * @returns Lista de lecciones
 */
export async function fetchLessonsForModule(moduleId: string): Promise<Lesson[]> {
  const mod = await fetchDoctrineModule(moduleId)
  if (!mod) {
    return []
  }
  return mod.lessonIds
    .map((id) => findSeedLesson(moduleId, id))
    .filter((l): l is Lesson => Boolean(l))
}
