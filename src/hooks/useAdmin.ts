import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { isUidInAdminList } from '@/config/admin'

export function useAdmin() {
  const { user } = useAuth()
  const [tokenAdmin, setTokenAdmin] = useState(false)

  useEffect(() => {
    if (!user) {
      setTokenAdmin(false)
      return
    }
    let cancelled = false
    void user.getIdTokenResult().then((r) => {
      if (!cancelled) setTokenAdmin(r.claims.admin === true)
    })
    return () => {
      cancelled = true
    }
  }, [user])

  const isAdmin =
    Boolean(user) && (isUidInAdminList(user?.uid) || tokenAdmin)

  return { isAdmin }
}
