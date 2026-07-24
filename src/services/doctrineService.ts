/**
 * Acceso a datos doctrinales (módulos y lecciones).
 * Actualmente respaldado por datos semilla; Firestore puede integrarse aquí después.
 */
import { findSeedLesson, findSeedModule, seedLessons, seedModules, tagLabel } from '@/data/seed-doctrine'
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

// ── Etiquetas (asuntos) ───────────────────────────────────────────────────────

/**
 * Lecciones publicadas relacionadas con la dada por asunto compartido.
 * Se calcula automáticamente: comparten ≥1 etiqueta, se ordenan por número de
 * etiquetas compartidas (desc) y luego por `order`, excluyendo la propia.
 */
export function getRelatedLessons(lesson: Lesson, limit = 6): Lesson[] {
  const tags = lesson.tags
  if (!tags || tags.length === 0) return []
  const tagSet = new Set(tags)

  const scored = Object.values(seedLessons)
    .filter((l) => l.id !== lesson.id && l.status === 'PUBLISHED' && l.tags?.some((t) => tagSet.has(t)))
    .map((l) => ({ lesson: l, shared: l.tags!.filter((t) => tagSet.has(t)).length }))

  scored.sort((a, b) => b.shared - a.shared || a.lesson.order - b.lesson.order)
  return scored.slice(0, limit).map((s) => s.lesson)
}

/** Todas las lecciones publicadas con una etiqueta dada, ordenadas. */
export function getLessonsByTag(tag: string): Lesson[] {
  return Object.values(seedLessons)
    .filter((l) => l.status === 'PUBLISHED' && l.tags?.includes(tag))
    .sort((a, b) => a.moduleId.localeCompare(b.moduleId) || a.order - b.order)
}

/** Inventario de etiquetas presentes en lecciones publicadas, con conteo. */
export function getAllTags(): { slug: string; label: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const l of Object.values(seedLessons)) {
    if (l.status !== 'PUBLISHED' || !l.tags) continue
    for (const t of l.tags) counts.set(t, (counts.get(t) ?? 0) + 1)
  }
  return [...counts.entries()]
    .map(([slug, count]) => ({ slug, label: tagLabel(slug), count }))
    .sort((a, b) => a.label.localeCompare(b.label))
}
