import { useAuth } from '@/contexts/AuthContext'

const ADMIN_UID = import.meta.env.VITE_ADMIN_UID as string | undefined

export function useAdmin() {
  const { user } = useAuth()
  return {
    isAdmin: Boolean(user && ADMIN_UID && user.uid === ADMIN_UID),
  }
}
