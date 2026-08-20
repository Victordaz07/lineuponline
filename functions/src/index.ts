import { onRequest } from 'firebase-functions/v2/https'
import { defineSecret } from 'firebase-functions/params'
import { initializeApp, getApps } from 'firebase-admin/app'
import { getAuth, type DecodedIdToken } from 'firebase-admin/auth'
import { getFirestore, FieldValue } from 'firebase-admin/firestore'
import OpenAI from 'openai'
import Anthropic from '@anthropic-ai/sdk'
import Stripe from 'stripe'

if (getApps().length === 0) initializeApp()

const openaiKey = defineSecret('OPENAI_API_KEY')
const anthropicKey = defineSecret('ANTHROPIC_API_KEY')
const stripeSecretKey = defineSecret('STRIPE_SECRET_KEY')
const stripeWebhookSecret = defineSecret('STRIPE_WEBHOOK_SECRET')

/** Misma allowlist que firestore.rules / src/config/admin.ts — Cloud Functions no tiene acceso directo a esas reglas. */
const PRIMARY_ADMIN_UIDS = ['rrl3eojMMthlp6P6PjQDFIWo9Qg2', 'O2ttkJj8VlNLT26Z5OhTRwL8nqK2']

function isAdminToken(decoded: DecodedIdToken): boolean {
  return decoded.admin === true || PRIMARY_ADMIN_UIDS.includes(decoded.uid)
}

/** Orígenes del front SPA (Hosting + desarrollo local). */
const ALLOWED_ORIGINS = [
  'https://lineuponline-a7eda.web.app',
  'https://lineuponline-a7eda.firebaseapp.com',
  'https://lineuponline-17a81.web.app',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]

export const tts = onRequest(
  {
    secrets: [openaiKey],
    cors: ALLOWED_ORIGINS,
    invoker: 'public',
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 30,
  },
  async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('')
      return
    }

    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }

    // Verify Firebase ID token — only authenticated users can use paid TTS
    const authHeader = req.headers.authorization ?? ''
    if (!authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }
    try {
      await getAuth().verifyIdToken(authHeader.slice(7))
    } catch {
      res.status(401).json({ error: 'Invalid or expired token' })
      return
    }

    const { text, voice = 'nova' } = req.body as { text?: string; voice?: string }

    if (!text?.trim()) {
      res.status(400).json({ error: 'text is required' })
      return
    }

    if (text.length > 4096) {
      res.status(400).json({ error: 'text too long (max 4096 chars)' })
      return
    }

    const validVoices = ['alloy', 'echo', 'fable', 'nova', 'onyx', 'shimmer']
    const safeVoice = validVoices.includes(voice) ? voice : 'nova'

    try {
      const openai = new OpenAI({ apiKey: openaiKey.value() })
      const mp3 = await openai.audio.speech.create({
        model: 'tts-1-hd',
        voice: safeVoice as 'nova',
        input: text.slice(0, 4096),
        speed: 0.95,
      })

      const buffer = Buffer.from(await mp3.arrayBuffer())
      res.set('Content-Type', 'audio/mpeg')
      res.set('Cache-Control', 'public, max-age=86400')
      res.send(buffer)
    } catch (err) {
      console.error('TTS error:', err)
      res.status(500).json({ error: 'TTS generation failed' })
    }
  },
)

/** Scripture Quest — genera preguntas de trivia con la API de Claude. */
const SQ_MODEL = 'claude-sonnet-4-6'

const SQ_SYSTEM_PROMPT =
  'You are a scripture trivia question generator for The Church of Jesus ' +
  'Christ of Latter-day Saints. Generate questions in Spanish. Return ONLY ' +
  'a valid JSON array, no markdown, no preamble, no explanation.'

function sqUserPrompt(topicLabel: string, topicId: string, level: number): string {
  return `Generate 10 trivia questions about the topic: ${topicLabel}.
Difficulty level: ${level} out of 4.
Level 1 = basic recognition (names, simple facts).
Level 2 = comprehension (context, sequence, relationships).
Level 3 = application (scripture references, doctrinal connections).
Level 4 = deep analysis (nuanced doctrine, cross-scripture synthesis).
Sources: Bible, Book of Mormon, Doctrine and Covenants, Pearl of Great Price.
Distribute the questions naturally across these categories within the topic:
personajes, lugares, eventos, doctrina, escrituras, cronologia, simbolos, restauracion.
Each question must follow this exact JSON structure:
{
  "id": string,
  "question": string,
  "options": { "A": string, "B": string, "C": string, "D": string },
  "correctAnswer": "A" | "B" | "C" | "D",
  "explanation": string (1-2 sentences with scripture reference),
  "topic": "${topicId}",
  "level": ${level},
  "points": number (10 for level 1, 20 for level 2, 35 for level 3, 50 for level 4),
  "category": "personajes" | "lugares" | "eventos" | "doctrina" | "escrituras" | "cronologia" | "simbolos" | "restauracion"
}`
}

export const scriptureQuestQuestions = onRequest(
  {
    secrets: [anthropicKey],
    cors: ALLOWED_ORIGINS,
    invoker: 'public',
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 120,
  },
  async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('')
      return
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }

    const authHeader = req.headers.authorization ?? ''
    if (!authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }
    try {
      await getAuth().verifyIdToken(authHeader.slice(7))
    } catch {
      res.status(401).json({ error: 'Invalid or expired token' })
      return
    }

    const { topicLabel, topicId, level } = req.body as {
      topicLabel?: string
      topicId?: string
      level?: number
    }
    if (!topicLabel?.trim() || !topicId?.trim()) {
      res.status(400).json({ error: 'topicLabel and topicId are required' })
      return
    }
    const safeLevel = [1, 2, 3, 4].includes(Number(level)) ? Number(level) : 1

    try {
      const anthropic = new Anthropic({ apiKey: anthropicKey.value() })
      const stream = anthropic.messages.stream({
        model: SQ_MODEL,
        max_tokens: 8192,
        system: SQ_SYSTEM_PROMPT,
        messages: [
          {
            role: 'user',
            content: sqUserPrompt(topicLabel.slice(0, 120), topicId.slice(0, 60), safeLevel),
          },
        ],
      })
      const message = await stream.finalMessage()
      const raw = message.content
        .filter((block): block is Anthropic.TextBlock => block.type === 'text')
        .map((block) => block.text)
        .join('')
      res.json({ raw })
    } catch (err) {
      console.error('Scripture Quest generation error:', err)
      res.status(500).json({ error: 'Question generation failed' })
    }
  },
)

// ── Seeker Gospel Music System ───────────────────────────────────────────────

const COVENANT_GATE_KEYS = [
  'historiaRespetaEscrituras',
  'historiaRepresentaPersonaje',
  'historiaInvitaAConocerMas',
  'musicaIdentidadPropia',
  'musicaSuenaProfesional',
  'musicaResisteElTiempo',
  'letrasDespiertanCuriosidad',
  'letrasRespetanTonoSagrado',
  'letrasEvitanCliches',
  'arteCuentaHistoria',
  'arteTieneSimbolos',
  'arteReconocibleComoSGM',
  'preguntaFinalHonraLegado',
] as const

/** Utilidad reusada por publishToYouTube y por la UI del admin (vía Firestore rules) para validar el gate completo. */
function checkCovenantGate(covenantCheck: Record<string, unknown> | undefined): boolean {
  if (!covenantCheck) return false
  return COVENANT_GATE_KEYS.every((key) => covenantCheck[key] === true)
}

const LYRICS_MODEL = 'claude-sonnet-4-6'

const LYRICS_SYSTEM_PROMPT = `You write song lyrics for Seeker Gospel Music, a musical universe based on
scripture. Hard rules, never break them:
- NEVER mention the character's name anywhere in the lyrics. The listener must discover who the
  song is about on their own, purely from imagery and scripture references.
- Base the lyrics strictly on the given scripture reference and the character's documented story —
  never invent doctrine or events not supported by scripture.
- Show, don't explain: use concrete imagery and scene, not exposition or summary.
- Don't preach or moralize directly — let the story carry the meaning.
- Respect the sacred tone of the source material; avoid clichés.
Return ONLY the lyrics text (with section labels like [Verse 1], [Chorus] if useful), no preamble,
no explanation, no markdown fences.`

function lyricsUserPrompt(input: {
  book: string
  people: string
  scriptureRef: string
  genre: string
  signatureSound: string
  toneNotes?: string
}): string {
  return `Write song lyrics for a character from the book of ${input.book} (${input.people}).
Scripture reference: ${input.scriptureRef}
Genre: ${input.genre || 'unspecified'}
Signature sound: ${input.signatureSound || 'unspecified'}
${input.toneNotes ? `Additional tone notes from the creative director: ${input.toneNotes}` : ''}
Remember: never mention the character's name.`
}

export const generateLyrics = onRequest(
  {
    secrets: [anthropicKey],
    cors: ALLOWED_ORIGINS,
    invoker: 'public',
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 60,
  },
  async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('')
      return
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }

    const authHeader = req.headers.authorization ?? ''
    if (!authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }
    let decoded: DecodedIdToken
    try {
      decoded = await getAuth().verifyIdToken(authHeader.slice(7))
    } catch {
      res.status(401).json({ error: 'Invalid or expired token' })
      return
    }
    if (!isAdminToken(decoded)) {
      res.status(403).json({ error: 'Admin access required' })
      return
    }

    const { trackId, characterId, scriptureRef, toneNotes } = req.body as {
      trackId?: string
      characterId?: string
      scriptureRef?: string
      toneNotes?: string
    }
    if (!trackId?.trim() || !characterId?.trim() || !scriptureRef?.trim()) {
      res.status(400).json({ error: 'trackId, characterId and scriptureRef are required' })
      return
    }

    const db = getFirestore()
    const characterSnap = await db.collection('characters').doc(characterId).get()
    if (!characterSnap.exists) {
      res.status(404).json({ error: 'Character not found' })
      return
    }
    const character = characterSnap.data() ?? {}
    const musicIdentity = (character.musicIdentity as Record<string, unknown>) ?? {}

    try {
      const anthropic = new Anthropic({ apiKey: anthropicKey.value() })
      const stream = anthropic.messages.stream({
        model: LYRICS_MODEL,
        max_tokens: 2048,
        system: LYRICS_SYSTEM_PROMPT,
        messages: [
          {
            role: 'user',
            content: lyricsUserPrompt({
              book: String(character.book ?? ''),
              people: String(character.people ?? ''),
              scriptureRef: scriptureRef.slice(0, 120),
              genre: String(musicIdentity.genre ?? ''),
              signatureSound: String(musicIdentity.signatureSound ?? ''),
              toneNotes: toneNotes?.slice(0, 500),
            }),
          },
        ],
      })
      const message = await stream.finalMessage()
      const lyrics = message.content
        .filter((block): block is Anthropic.TextBlock => block.type === 'text')
        .map((block) => block.text)
        .join('')
        .trim()

      // Nunca auto-aprueba: queda como propuesta para revisión humana.
      await db.collection('tracks').doc(trackId).update({
        lyrics,
        lyricsApproved: false,
        updatedAt: FieldValue.serverTimestamp(),
      })

      res.json({ lyrics })
    } catch (err) {
      console.error('Lyrics generation error:', err)
      res.status(500).json({ error: 'Lyrics generation failed' })
    }
  },
)

/** Stub: requiere credenciales de Apiframe/Suno (pendientes). Verifica la precondición del brief. */
export const generateMusic = onRequest(
  {
    cors: ALLOWED_ORIGINS,
    invoker: 'public',
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 30,
  },
  async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('')
      return
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }
    const authHeader = req.headers.authorization ?? ''
    if (!authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }
    let decoded: DecodedIdToken
    try {
      decoded = await getAuth().verifyIdToken(authHeader.slice(7))
    } catch {
      res.status(401).json({ error: 'Invalid or expired token' })
      return
    }
    if (!isAdminToken(decoded)) {
      res.status(403).json({ error: 'Admin access required' })
      return
    }

    const { trackId } = req.body as { trackId?: string }
    if (!trackId?.trim()) {
      res.status(400).json({ error: 'trackId is required' })
      return
    }
    const trackSnap = await getFirestore().collection('tracks').doc(trackId).get()
    if (!trackSnap.exists) {
      res.status(404).json({ error: 'Track not found' })
      return
    }
    if (trackSnap.data()?.lyricsApproved !== true) {
      res.status(400).json({ error: 'lyrics must be approved before generating music' })
      return
    }

    res.status(501).json({
      error: 'generateMusic not implemented: missing Apiframe/Suno provider credentials',
    })
  },
)

/** Stub: requiere credenciales del generador de imágenes (Midjourney/FLUX, pendientes). */
export const generateCover = onRequest(
  {
    cors: ALLOWED_ORIGINS,
    invoker: 'public',
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 30,
  },
  async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('')
      return
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }
    const authHeader = req.headers.authorization ?? ''
    if (!authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }
    let decoded: DecodedIdToken
    try {
      decoded = await getAuth().verifyIdToken(authHeader.slice(7))
    } catch {
      res.status(401).json({ error: 'Invalid or expired token' })
      return
    }
    if (!isAdminToken(decoded)) {
      res.status(403).json({ error: 'Admin access required' })
      return
    }

    const { trackId } = req.body as { trackId?: string }
    if (!trackId?.trim()) {
      res.status(400).json({ error: 'trackId is required' })
      return
    }
    const trackSnap = await getFirestore().collection('tracks').doc(trackId).get()
    if (!trackSnap.exists) {
      res.status(404).json({ error: 'Track not found' })
      return
    }

    res.status(501).json({
      error: 'generateCover not implemented: missing image generation provider credentials',
    })
  },
)

/** Stub: requiere credenciales OAuth de YouTube Data API (pendientes). Aplica el gate del Covenant sin excepción. */
export const publishToYouTube = onRequest(
  {
    cors: ALLOWED_ORIGINS,
    invoker: 'public',
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 30,
  },
  async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('')
      return
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }
    const authHeader = req.headers.authorization ?? ''
    if (!authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }
    let decoded: DecodedIdToken
    try {
      decoded = await getAuth().verifyIdToken(authHeader.slice(7))
    } catch {
      res.status(401).json({ error: 'Invalid or expired token' })
      return
    }
    if (!isAdminToken(decoded)) {
      res.status(403).json({ error: 'Admin access required' })
      return
    }

    const { trackId } = req.body as { trackId?: string }
    if (!trackId?.trim()) {
      res.status(400).json({ error: 'trackId is required' })
      return
    }
    const trackSnap = await getFirestore().collection('tracks').doc(trackId).get()
    if (!trackSnap.exists) {
      res.status(404).json({ error: 'Track not found' })
      return
    }
    const track = trackSnap.data() ?? {}

    if (!checkCovenantGate(track.covenantCheck as Record<string, unknown> | undefined)) {
      res.status(400).json({ error: 'Creator\'s Covenant checklist is not fully approved' })
      return
    }
    if (track.syntheticContentDisclosed !== true) {
      res.status(400).json({ error: 'syntheticContentDisclosed must be true before publishing' })
      return
    }

    res.status(501).json({
      error: 'publishToYouTube not implemented: missing YouTube Data API OAuth credentials',
    })
  },
)

// --- Donaciones ("invítame una manzana") ---------------------------------
// Checkout hosteado por Stripe: el cliente nunca carga Stripe.js, solo pide
// una URL de sesión y redirige. El monto es elegido por el donador, así que
// se usa price_data dinámico en vez de un Price ID fijo.

const DONATION_MIN_CENTS = 50
const DONATION_MAX_CENTS = 100_000_000

function trimCap(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export const createDonationCheckoutSession = onRequest(
  {
    secrets: [stripeSecretKey],
    cors: ALLOWED_ORIGINS,
    invoker: 'public',
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 30,
  },
  async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('')
      return
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }

    const body = req.body as {
      amountCents?: number
      frequency?: string
      isAnonymous?: boolean
      donorName?: string
      donorCity?: string
      donorState?: string
      donorCountry?: string
    }

    const amountCents = Number(body.amountCents)
    if (!Number.isInteger(amountCents) || amountCents < DONATION_MIN_CENTS || amountCents > DONATION_MAX_CENTS) {
      res.status(400).json({ error: `amountCents debe ser un entero entre ${DONATION_MIN_CENTS} y ${DONATION_MAX_CENTS}` })
      return
    }

    const frequency = body.frequency === 'monthly' ? 'monthly' : body.frequency === 'one_time' ? 'one_time' : null
    if (!frequency) {
      res.status(400).json({ error: 'frequency debe ser "one_time" o "monthly"' })
      return
    }

    const isAnonymous = body.isAnonymous === true
    const donorName = isAnonymous ? '' : trimCap(body.donorName, 120)
    const donorCity = isAnonymous ? '' : trimCap(body.donorCity, 120)
    const donorState = isAnonymous ? '' : trimCap(body.donorState, 120)
    const donorCountry = isAnonymous ? '' : trimCap(body.donorCountry, 120)

    const origin = req.headers.origin
    const baseUrl = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
    const metadata = { isAnonymous: String(isAnonymous), donorName, donorCity, donorState, donorCountry }

    try {
      const stripe = new Stripe(stripeSecretKey.value())

      const session =
        frequency === 'monthly'
          ? await stripe.checkout.sessions.create({
              mode: 'subscription',
              line_items: [
                {
                  price_data: {
                    currency: 'usd',
                    unit_amount: amountCents,
                    recurring: { interval: 'month' },
                    product_data: { name: 'Donación mensual — Seeker Gospel' },
                  },
                  quantity: 1,
                },
              ],
              success_url: `${baseUrl}/apoyanos?status=success`,
              cancel_url: `${baseUrl}/apoyanos?status=canceled`,
              metadata,
            })
          : await stripe.checkout.sessions.create({
              mode: 'payment',
              line_items: [
                {
                  price_data: {
                    currency: 'usd',
                    unit_amount: amountCents,
                    product_data: { name: 'Donación — Seeker Gospel' },
                  },
                  quantity: 1,
                },
              ],
              success_url: `${baseUrl}/apoyanos?status=success`,
              cancel_url: `${baseUrl}/apoyanos?status=canceled`,
              metadata,
            })

      if (!session.url) {
        res.status(500).json({ error: 'Stripe no devolvió una URL de checkout' })
        return
      }
      res.json({ url: session.url })
    } catch (err) {
      console.error('createDonationCheckoutSession error:', err)
      res.status(500).json({ error: 'No se pudo crear la sesión de pago' })
    }
  },
)

function donorDisplayName(isAnonymous: boolean, donorName: string | null): string {
  if (isAnonymous) return 'Anónimo'
  return donorName?.trim() || 'Anónimo'
}

function donorLocationLabel(
  isAnonymous: boolean,
  city: string | null,
  state: string | null,
  country: string | null,
): string | null {
  if (isAnonymous) return null
  const parts = [city, state, country].map((p) => p?.trim()).filter((p): p is string => Boolean(p))
  return parts.length > 0 ? parts.join(', ') : null
}

async function handleCheckoutCompleted(
  db: FirebaseFirestore.Firestore,
  session: Stripe.Checkout.Session,
): Promise<void> {
  const metadata = session.metadata ?? {}
  const isAnonymous = metadata.isAnonymous === 'true'
  const donorName = metadata.donorName || null
  const donorCity = metadata.donorCity || null
  const donorState = metadata.donorState || null
  const donorCountry = metadata.donorCountry || null
  const frequency: 'one_time' | 'monthly' = session.mode === 'subscription' ? 'monthly' : 'one_time'
  const subscriptionId = typeof session.subscription === 'string' ? session.subscription : null

  const donationRef = db.collection('donations').doc()
  await donationRef.set({
    stripeCheckoutSessionId: session.id,
    stripeCustomerId: typeof session.customer === 'string' ? session.customer : null,
    stripeSubscriptionId: subscriptionId,
    stripePaymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : null,
    frequency,
    amountCents: session.amount_total ?? 0,
    currency: 'usd',
    status: 'completed',
    isAnonymous,
    donorName,
    donorCity,
    donorState,
    donorCountry,
    donorEmail: session.customer_details?.email ?? null,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  })

  await db.collection('donorWall').doc(donationRef.id).set({
    frequency,
    isAnonymous,
    displayName: donorDisplayName(isAnonymous, donorName),
    location: donorLocationLabel(isAnonymous, donorCity, donorState, donorCountry),
    status: 'completed',
    createdAt: FieldValue.serverTimestamp(),
  })

  // Índice para poder ubicar la donación mensual cuando llegue un evento
  // de actualización/cancelación de la suscripción (que solo trae el id
  // de la suscripción, no el de la sesión de checkout original).
  if (subscriptionId) {
    await db.collection('donations_bySubscription').doc(subscriptionId).set({ donationId: donationRef.id })
  }
}

async function handleSubscriptionChange(
  db: FirebaseFirestore.Firestore,
  subscription: Stripe.Subscription,
): Promise<void> {
  const indexSnap = await db.collection('donations_bySubscription').doc(subscription.id).get()
  if (!indexSnap.exists) return
  const donationId = indexSnap.data()?.donationId as string | undefined
  if (!donationId) return

  const status: 'completed' | 'canceled' | 'past_due' =
    subscription.status === 'active' || subscription.status === 'trialing'
      ? 'completed'
      : subscription.status === 'past_due'
        ? 'past_due'
        : 'canceled'

  await db.collection('donations').doc(donationId).update({ status, updatedAt: FieldValue.serverTimestamp() })
  await db.collection('donorWall').doc(donationId).update({ status })
}

/** Webhook de Stripe — servidor a servidor, sin CORS. Nunca confiar en un
 *  "pago exitoso" reportado por el cliente: la única fuente de verdad es
 *  este evento con firma verificada. */
export const stripeWebhook = onRequest(
  {
    secrets: [stripeSecretKey, stripeWebhookSecret],
    invoker: 'public',
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 30,
  },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).send('Method not allowed')
      return
    }

    const sig = req.headers['stripe-signature']
    if (!sig || typeof sig !== 'string') {
      res.status(400).send('Missing Stripe-Signature header')
      return
    }

    const stripe = new Stripe(stripeSecretKey.value())
    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(req.rawBody, sig, stripeWebhookSecret.value())
    } catch (err) {
      console.error('Stripe webhook signature verification failed:', err)
      res.status(400).send('Invalid signature')
      return
    }

    const db = getFirestore()
    const processedRef = db.collection('processedWebhookEvents').doc(event.id)
    const processedSnap = await processedRef.get()
    if (processedSnap.exists) {
      // Stripe puede reenviar eventos — evita aplicar el efecto dos veces.
      res.json({ received: true, deduped: true })
      return
    }

    try {
      if (event.type === 'checkout.session.completed') {
        await handleCheckoutCompleted(db, event.data.object as Stripe.Checkout.Session)
      } else if (event.type === 'customer.subscription.updated' || event.type === 'customer.subscription.deleted') {
        await handleSubscriptionChange(db, event.data.object as Stripe.Subscription)
      }
      await processedRef.set({ processedAt: FieldValue.serverTimestamp(), type: event.type })
    } catch (err) {
      console.error('Stripe webhook handling error:', err)
      res.status(500).send('Webhook handler failed')
      return
    }

    res.json({ received: true })
  },
)
