import { useMemo } from 'react'
import { useAuthContext } from '@/contexts/AuthContext'

const LOCAL_ID_KEY = 'lineuponline:localId'

function getOrCreateLocalId(): string {
  let id = localStorage.getItem(LOCAL_ID_KEY)
  if (!id) {
    id = `local-${crypto.randomUUID()}`
    localStorage.setItem(LOCAL_ID_KEY, id)
  }
  return id
}

/**
 * Hook principal de autenticación.
 *
 * - `isLoggedIn`: true cuando hay usuario Firebase autenticado
 * - `userId`: uid de Firebase cuando logged in, o ID local estable cuando anónimo
 */
export function useAuth() {
  const { user, authLoading, signInWithGoogle, signOutUser } = useAuthContext()

  const userId = useMemo(() => {
    if (user) return user.uid
    return getOrCreateLocalId()
  }, [user])

  return {
    user,
    authLoading,
    isLoggedIn: user !== null,
    userId,
    signInWithGoogle,
    signOutUser,
  }
}
