import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { User } from 'firebase/auth'
import { onIdTokenChanged } from 'firebase/auth'
import { isFirebaseConfigured, getFirebaseAuth } from '@/lib/firebase'
import { upsertUserProfile } from '@/services/users.service'
import {
  signInWithGoogle as signInGoogleWithPopup,
  signOut as firebaseSignOut,
} from '@/services/authService'

type AuthContextValue = {
  user: User | null
  authLoading: boolean
  signInWithGoogle: () => Promise<void>
  signOutUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  authLoading: false,
  signInWithGoogle: async () => {},
  signOutUser: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [authLoading, setAuthLoading] = useState(isFirebaseConfigured())

  useEffect(() => {
    if (!isFirebaseConfigured()) return

    const unsubscribe = onIdTokenChanged(getFirebaseAuth(), async (firebaseUser) => {
      setUser(firebaseUser)
      setAuthLoading(false)

      if (firebaseUser?.email) {
        void upsertUserProfile({
          userId: firebaseUser.uid,
          displayName:
            firebaseUser.displayName ??
            firebaseUser.email.split('@')[0] ??
            'Usuario',
          email: firebaseUser.email,
          role: 'student',
        }).catch(() => {
          // No crítico: errores de perfil Firestore no bloquean la sesión
        })
      }
    })

    return unsubscribe
  }, [])

  async function signInWithGoogle() {
    await signInGoogleWithPopup()
  }

  async function signOutUser() {
    await firebaseSignOut()
  }

  return (
    <AuthContext.Provider value={{ user, authLoading, signInWithGoogle, signOutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(): AuthContextValue {
  return useContext(AuthContext)
}
