/**
 * Inicialización central de Firebase (app, Firestore, Auth, Storage).
 * La configuración proviene de variables de entorno Vite (sin secretos en código).
 *
 * No inicializar Auth ni Firestore al importar el módulo: con VITE_FIREBASE_API_KEY
 * vacío en el build de producción, getAuth() lanzaba auth/invalid-api-key y rompía toda la SPA.
 */
import { getApp, getApps, initializeApp, type FirebaseOptions } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { getStorage, type FirebaseStorage } from 'firebase/storage'

function readFirebaseOptions(): FirebaseOptions | null {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
  if (typeof apiKey !== 'string' || apiKey.trim() === '') {
    return null
  }
  return {
    apiKey: apiKey.trim(),
    authDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? ''),
    projectId: String(import.meta.env.VITE_FIREBASE_PROJECT_ID ?? ''),
    storageBucket: String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? ''),
    messagingSenderId: String(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? ''),
    appId: String(import.meta.env.VITE_FIREBASE_APP_ID ?? ''),
  }
}

let app: ReturnType<typeof initializeApp> | undefined
let dbInstance: Firestore | undefined
let authInstance: Auth | undefined
let storageInstance: FirebaseStorage | undefined

function getOrInitApp(): ReturnType<typeof initializeApp> {
  if (app) {
    return app
  }
  const options = readFirebaseOptions()
  if (!options) {
    throw new Error(
      'Firebase no está configurado: defina VITE_FIREBASE_* en el entorno donde ejecuta `vite build` (p. ej. `.env.production` o variables de CI).',
    )
  }
  app = getApps().length > 0 ? getApp() : initializeApp(options)
  return app
}

export function isFirebaseConfigured(): boolean {
  return readFirebaseOptions() !== null
}

export function getFirebaseApp(): ReturnType<typeof initializeApp> {
  return getOrInitApp()
}

/** Firestore: inicialización perezosa. Solo usar desde servicios. */
export function getDb(): Firestore {
  if (!dbInstance) {
    dbInstance = getFirestore(getOrInitApp())
  }
  return dbInstance
}

/** Auth: perezoso — evitar getAuth al cargar la app si aún no hay login. */
export function getFirebaseAuth(): Auth {
  if (!authInstance) {
    authInstance = getAuth(getOrInitApp())
  }
  return authInstance
}

export function getFirebaseStorage(): FirebaseStorage {
  if (!storageInstance) {
    storageInstance = getStorage(getOrInitApp())
  }
  return storageInstance
}
