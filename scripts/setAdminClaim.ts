#!/usr/bin/env node
/**
 * Setea (o quita) el custom claim `admin: true` en uno o varios UIDs del
 * proyecto Firebase apuntado por la service account.
 *
 * Uso (PowerShell):
 *   npm run admin:set -- <uid1> [<uid2> ...]
 *   npm run admin:unset -- <uid1> [<uid2> ...]
 *
 * Requiere:
 *   - service-account.json en la raíz (o ruta en FIREBASE_SERVICE_ACCOUNT)
 *   - El JSON nunca debe subirse a git (ver .gitignore)
 *
 * Después de aplicar el claim, el usuario debe cerrar sesión e iniciar
 * sesión otra vez (o forzar refresh del token) para que las reglas de
 * Firestore lo reconozcan como admin.
 */
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { cert, initializeApp, getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

type Mode = 'set' | 'unset'

function loadServiceAccount(): Record<string, unknown> {
  const explicitPath = process.env.FIREBASE_SERVICE_ACCOUNT
  const candidates = [
    explicitPath,
    'service-account.json',
    'service-account-a7eda.json',
    'secrets/service-account.json',
  ].filter((p): p is string => typeof p === 'string' && p.length > 0)

  for (const candidate of candidates) {
    const full = resolve(candidate)
    if (existsSync(full)) {
      console.log(`Usando service account: ${full}`)
      return JSON.parse(readFileSync(full, 'utf8')) as Record<string, unknown>
    }
  }

  throw new Error(
    'No se encontró la service account. Coloca el JSON como `service-account.json` en la raíz del repo o define FIREBASE_SERVICE_ACCOUNT con la ruta absoluta.',
  )
}

function parseArgs(): { mode: Mode; uids: string[] } {
  const args = process.argv.slice(2)
  let mode: Mode = 'set'

  const filtered: string[] = []
  for (const arg of args) {
    if (arg === '--unset' || arg === '-u') {
      mode = 'unset'
    } else if (arg === '--set' || arg === '-s') {
      mode = 'set'
    } else {
      filtered.push(arg)
    }
  }

  if (filtered.length === 0) {
    throw new Error(
      'Falta UID. Uso: npm run admin:set -- <uid1> [<uid2> ...]   (o admin:unset)',
    )
  }

  return { mode, uids: filtered }
}

async function main(): Promise<void> {
  const { mode, uids } = parseArgs()
  const serviceAccount = loadServiceAccount()

  if (getApps().length === 0) {
    initializeApp({ credential: cert(serviceAccount as Parameters<typeof cert>[0]) })
  }

  const auth = getAuth()

  for (const uid of uids) {
    try {
      const user = await auth.getUser(uid)
      const currentClaims = user.customClaims ?? {}
      const nextClaims = { ...currentClaims }

      if (mode === 'set') {
        nextClaims.admin = true
      } else {
        delete nextClaims.admin
      }

      await auth.setCustomUserClaims(uid, nextClaims)

      const verb = mode === 'set' ? 'aplicado' : 'removido'
      console.log(
        `OK · ${verb} admin para ${uid} (${user.email ?? user.displayName ?? 'sin email'})`,
      )
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      console.error(`ERROR · ${uid}: ${message}`)
      process.exitCode = 1
    }
  }

  console.log('\nListo. El usuario debe cerrar sesión y volver a entrar para que el token se refresque.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
