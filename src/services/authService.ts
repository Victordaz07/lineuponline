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
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getFirebaseAuth, getFirebaseStorage } from '@/lib/firebase'

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

// ── Profile updates ───────────────────────────────────────────────────────────

export async function updateDisplayName(displayName: string): Promise<void> {
  const user = getFirebaseAuth().currentUser
  if (!user) throw new Error('No hay sesión activa')
  await updateProfile(user, { displayName: displayName.trim() })
}

export async function uploadProfilePhoto(file: File): Promise<string> {
  const user = getFirebaseAuth().currentUser
  if (!user) throw new Error('No hay sesión activa')
  const ext = file.name.split('.').pop() ?? 'jpg'
  const storageRef = ref(getFirebaseStorage(), `avatars/${user.uid}/photo.${ext}`)
  await uploadBytes(storageRef, file, { contentType: file.type })
  const downloadURL = await getDownloadURL(storageRef)
  await updateProfile(user, { photoURL: downloadURL })
  return downloadURL
}

// ── Sign out ──────────────────────────────────────────────────────────────────

export async function signOut(): Promise<void> {
  await firebaseSignOut(getFirebaseAuth())
}
