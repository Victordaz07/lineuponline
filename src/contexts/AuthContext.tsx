import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { User } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { isFirebaseConfigured, getFirebaseAuth } from '@/lib/firebase'
import { upsertUserProfile } from '@/services/users.service'

type AuthContextValue = {
  user: User | null
  authLoading: boolean
}

const AuthContext = createContext<AuthContextValue>({ user: null, authLoading: false })

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [authLoading, setAuthLoading] = useState(isFirebaseConfigured())

  useEffect(() => {
    if (!isFirebaseConfigured()) return

    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), async (firebaseUser) => {
      setUser(firebaseUser)
      setAuthLoading(false)

      if (firebaseUser) {
        // Create / update Firestore profile — skip if no email (phone-only users)
        if (firebaseUser.email) {
          void upsertUserProfile({
            userId: firebaseUser.uid,
            displayName: firebaseUser.displayName ?? firebaseUser.email.split('@')[0] ?? 'Usuario',
            email: firebaseUser.email,
            role: 'student',
          }).catch(() => {
            // Non-critical — silently ignore profile sync errors
          })
        }
      }
    })

    return unsubscribe
  }, [])

  return <AuthContext.Provider value={{ user, authLoading }}>{children}</AuthContext.Provider>
}

export function useAuthContext(): AuthContextValue {
  return useContext(AuthContext)
}
