export type DonationFrequency = 'one_time' | 'monthly'
export type DonationStatus = 'pending' | 'completed' | 'canceled' | 'past_due'

/** Registro completo — solo lectura admin, escrito exclusivamente por el
 *  webhook de Stripe (Cloud Function con Admin SDK). El cliente nunca
 *  escribe aquí directamente. */
export type Donation = {
  id: string
  stripeCheckoutSessionId: string
  stripeCustomerId: string | null
  stripeSubscriptionId: string | null
  stripePaymentIntentId: string | null
  frequency: DonationFrequency
  amountCents: number
  currency: 'usd'
  status: DonationStatus
  isAnonymous: boolean
  donorName: string | null
  donorCity: string | null
  donorState: string | null
  donorCountry: string | null
  donorEmail: string | null
  createdAt: string
  updatedAt: string
}

/** Proyección pública para el cuadro de honor — la escribe el mismo
 *  webhook, la lee cualquiera. Nunca incluye monto ni email. */
export type DonorWallEntry = {
  id: string
  frequency: DonationFrequency
  isAnonymous: boolean
  displayName: string
  location: string | null
  status: DonationStatus
  createdAt: string
}
