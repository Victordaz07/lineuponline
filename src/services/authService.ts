import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  RecaptchaVerifier,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut as firebaseSignOut,
  updateProfile,
  type ConfirmationResult,
} from 'firebase/auth'
import { getFirebaseAuth } from '@/lib/firebase'

// ── Google ──────────────────────────────────────────────────────────────────

export async function signInWithGoogle(): Promise<void> {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  await signInWithPopup(getFirebaseAuth(), provider)
}

// ── Email / Password ─────────────────────────────────────────────────────────

export async function signInWithEmail(email: string, password: string): Promise<void> {
  await signInWithEmailAndPassword(getFirebaseAuth(), email, password)
}

export async function createAccountWithEmail(
  email: string,
  password: string,
  displayName: string,
): Promise<void> {
  const credential = await createUserWithEmailAndPassword(getFirebaseAuth(), email, password)
  if (displayName.trim()) {
    await updateProfile(credential.user, { displayName: displayName.trim() })
  }
}

export async function sendPasswordReset(email: string): Promise<void> {
  await sendPasswordResetEmail(getFirebaseAuth(), email)
}

// ── Phone / SMS ───────────────────────────────────────────────────────────────

/**
 * Inicia el flujo de autenticación por teléfono.
 * `recaptchaContainerId` debe ser el id de un div vacío en el DOM.
 * Requiere que "Phone" esté habilitado en Firebase Console → Authentication → Sign-in providers.
 */
export async function signInWithPhone(
  phoneNumber: string,
  recaptchaContainerId: string,
): Promise<ConfirmationResult> {
  const auth = getFirebaseAuth()
  const verifier = new RecaptchaVerifier(auth, recaptchaContainerId, { size: 'invisible' })
  return signInWithPhoneNumber(auth, phoneNumber, verifier)
}

export async function confirmPhoneOTP(
  confirmationResult: ConfirmationResult,
  otp: string,
): Promise<void> {
  await confirmationResult.confirm(otp)
}

// ── Sign out ──────────────────────────────────────────────────────────────────

export async function signOut(): Promise<void> {
  await firebaseSignOut(getFirebaseAuth())
}
