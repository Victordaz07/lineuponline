import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { createDonationCheckoutSession } from '@/services/donations.service'
import type { DonationFrequency } from '@/types/donations'

const PRESET_AMOUNTS = [1, 3, 5, 10, 25]
const MIN_AMOUNT = 0.5

export function DonationForm() {
  const [searchParams] = useSearchParams()
  const status = searchParams.get('status')

  const [frequency, setFrequency] = useState<DonationFrequency>('one_time')
  const [presetAmount, setPresetAmount] = useState<number | null>(5)
  const [customAmount, setCustomAmount] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [donorName, setDonorName] = useState('')
  const [donorCity, setDonorCity] = useState('')
  const [donorState, setDonorState] = useState('')
  const [donorCountry, setDonorCountry] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const amount = customAmount ? Number(customAmount) : presetAmount

  async function handleSubmit() {
    setError(null)
    if (!amount || amount < MIN_AMOUNT) {
      setError(`El monto mínimo es $${MIN_AMOUNT.toFixed(2)}.`)
      return
    }
    setSubmitting(true)
    try {
      const { url } = await createDonationCheckoutSession({
        amountCents: Math.round(amount * 100),
        frequency,
        isAnonymous,
        donorName: isAnonymous ? undefined : donorName,
        donorCity: isAnonymous ? undefined : donorCity,
        donorState: isAnonymous ? undefined : donorState,
        donorCountry: isAnonymous ? undefined : donorCountry,
      })
      window.location.href = url
    } catch (e) {
      setError(e instanceof Error ? e.message : 'No se pudo iniciar el pago.')
      setSubmitting(false)
    }
  }

  const inputClass =
    'mb-3 w-full rounded-lg border border-sg-gold/20 bg-navy-deep px-3 py-2.5 font-ui text-sm text-parchment placeholder:text-parchment/30 focus:border-sg-gold/50 focus:outline-none'
  const labelClass = 'mb-1.5 block font-ui text-[11px] uppercase tracking-wider text-parchment/50'

  return (
    <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5">
      {status === 'success' && (
        <p className="mb-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 font-ui text-sm text-emerald-300">
          ¡Gracias por tu donación! 🍎 Tu apoyo ayuda a que sigamos mejorando Seeker Gospel.
        </p>
      )}
      {status === 'canceled' && (
        <p className="mb-4 rounded-lg border border-sg-gold/30 bg-sg-gold/10 px-3 py-2 font-ui text-sm text-sg-gold-light">
          Donación cancelada. Puedes intentarlo de nuevo cuando quieras.
        </p>
      )}

      <label className={labelClass}>Frecuencia</label>
      <div className="mb-4 flex gap-1 rounded-xl border border-sg-gold/15 bg-navy-deep p-1">
        {(['one_time', 'monthly'] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            className={`flex-1 rounded-lg px-3 py-2 font-ui text-xs font-semibold transition ${
              frequency === f ? 'bg-navy-light text-parchment shadow-sm' : 'text-parchment/40 hover:text-parchment/70'
            }`}
          >
            {f === 'one_time' ? 'Una vez' : 'Mensual'}
          </button>
        ))}
      </div>

      <label className={labelClass}>Monto (USD)</label>
      <div className="mb-3 flex flex-wrap gap-2">
        {PRESET_AMOUNTS.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => {
              setPresetAmount(a)
              setCustomAmount('')
            }}
            className={`rounded-full border px-4 py-1.5 font-ui text-sm transition ${
              presetAmount === a && !customAmount
                ? 'border-sg-gold bg-sg-gold/10 text-sg-gold-light'
                : 'border-sg-gold/20 text-parchment/60 hover:border-sg-gold/40'
            }`}
          >
            ${a}
          </button>
        ))}
      </div>
      <input
        type="number"
        min={MIN_AMOUNT}
        step="0.5"
        className={inputClass}
        value={customAmount}
        onChange={(e) => {
          setCustomAmount(e.target.value)
          setPresetAmount(null)
        }}
        placeholder={`Otro monto (mínimo $${MIN_AMOUNT.toFixed(2)})`}
      />

      <label className="mb-3 flex items-center gap-2 font-ui text-sm text-parchment/70">
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={(e) => setIsAnonymous(e.target.checked)}
          className="h-4 w-4 rounded border-sg-gold/40 bg-navy-deep"
        />
        Donar de forma anónima
      </label>

      {!isAnonymous && (
        <>
          <label className={labelClass}>Nombre (opcional, se muestra en el cuadro de honor)</label>
          <input className={inputClass} value={donorName} onChange={(e) => setDonorName(e.target.value)} placeholder="Tu nombre" />

          <div className="mb-1 grid grid-cols-3 gap-2">
            <input
              className="rounded-lg border border-sg-gold/20 bg-navy-deep px-2.5 py-2 font-ui text-xs text-parchment placeholder:text-parchment/30 focus:border-sg-gold/50 focus:outline-none"
              value={donorCity}
              onChange={(e) => setDonorCity(e.target.value)}
              placeholder="Ciudad"
            />
            <input
              className="rounded-lg border border-sg-gold/20 bg-navy-deep px-2.5 py-2 font-ui text-xs text-parchment placeholder:text-parchment/30 focus:border-sg-gold/50 focus:outline-none"
              value={donorState}
              onChange={(e) => setDonorState(e.target.value)}
              placeholder="Estado"
            />
            <input
              className="rounded-lg border border-sg-gold/20 bg-navy-deep px-2.5 py-2 font-ui text-xs text-parchment placeholder:text-parchment/30 focus:border-sg-gold/50 focus:outline-none"
              value={donorCountry}
              onChange={(e) => setDonorCountry(e.target.value)}
              placeholder="País"
            />
          </div>
          <p className="mb-3 mt-1 font-ui text-[11px] text-parchment/35">Todo opcional — solo ubicación, sin dirección exacta.</p>
        </>
      )}

      {error && <p className="mb-3 font-ui text-xs text-red-400">{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="w-full rounded-lg bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-ink disabled:opacity-60"
      >
        {submitting ? 'Redirigiendo a pago seguro...' : frequency === 'monthly' ? 'Donar cada mes 🍎' : 'Donar 🍎'}
      </button>
      <p className="mt-2 text-center font-ui text-[11px] text-parchment/35">Pago seguro procesado por Stripe.</p>
    </div>
  )
}
