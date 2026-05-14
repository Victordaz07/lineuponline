/**
 * UIDs de administrador fijos (lista en cliente; reglas Firestore usan token `admin`).
 */
export const PRIMARY_ADMIN_UIDS = ['x2xbmUz7moOejTahj7EIWrBVTLd2'] as const

/** @deprecated Usar PRIMARY_ADMIN_UIDS */
export const PRIMARY_ADMIN_UID = PRIMARY_ADMIN_UIDS[0]

/**
 * UIDs con acceso al panel en la app: lista fija + VITE_ADMIN_UID (coma).
 */
export function resolveAdminUids(): string[] {
  const raw = import.meta.env.VITE_ADMIN_UID
  const fromEnv =
    typeof raw === 'string' && raw.trim().length > 0
      ? raw
          .split(',')
          .map((s) => s.trim())
          .filter((s) => s.length > 0 && s !== 'undefined' && s !== 'null')
      : []
  return [...new Set<string>([...PRIMARY_ADMIN_UIDS, ...fromEnv])]
}

/** Comprobación síncrona (no depende de Firestore ni de efectos). */
export function isUidInAdminList(uid: string | null | undefined): boolean {
  if (!uid) return false
  return resolveAdminUids().includes(uid)
}
