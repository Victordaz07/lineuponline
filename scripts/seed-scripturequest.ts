#!/usr/bin/env node
/**
 * Siembra el banco local de Scripture Quest (≈245 rondas aprobadas) en la
 * colección scripturequest_questions de Firestore.
 *
 * Uso:
 *   npx tsx scripts/seed-scripturequest.ts
 *
 * Requiere service-account.json en la raíz (o ruta en FIREBASE_SERVICE_ACCOUNT),
 * igual que scripts/setAdminClaim.ts. Alternativa sin terminal: el botón
 * "Sembrar banco local en Firestore" del panel /admin/scripture-quest.
 */
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { cert, initializeApp, getApps } from 'firebase-admin/app'
import { FieldValue, getFirestore } from 'firebase-admin/firestore'
import { localBankAsSeedDocs } from '../src/features/scripture-quest/data/questionBank'

function loadServiceAccount(): Record<string, unknown> {
  const explicitPath = process.env.FIREBASE_SERVICE_ACCOUNT
  const candidates = [explicitPath, 'service-account.json'].filter(
    (p): p is string => Boolean(p),
  )
  for (const candidate of candidates) {
    const path = resolve(process.cwd(), candidate)
    if (existsSync(path)) {
      return JSON.parse(readFileSync(path, 'utf8')) as Record<string, unknown>
    }
  }
  throw new Error(
    'No se encontró service-account.json (o defina FIREBASE_SERVICE_ACCOUNT).',
  )
}

async function main() {
  if (getApps().length === 0) {
    initializeApp({ credential: cert(loadServiceAccount()) })
  }
  const db = getFirestore()
  const docs = localBankAsSeedDocs()
  console.log(`Sembrando ${docs.length} preguntas en scripturequest_questions…`)

  for (let i = 0; i < docs.length; i += 400) {
    const batch = db.batch()
    for (const item of docs.slice(i, i + 400)) {
      batch.set(db.collection('scripturequest_questions').doc(item.id), {
        ...item,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
        reviewedAt: FieldValue.serverTimestamp(),
      })
    }
    await batch.commit()
    console.log(`  lote ${Math.floor(i / 400) + 1} confirmado`)
  }
  console.log('Listo ✅ — todas con status "approved" y source "manual".')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
