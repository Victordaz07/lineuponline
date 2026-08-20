import { DonationForm } from '@/components/donations/DonationForm'
import { DonorWall } from '@/components/donations/DonorWall'

export default function ApoyanosPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-parchment">Apóyanos 🍎</h1>
        <p className="mt-1 font-ui text-sm text-parchment/50">
          Estos archivos y lecciones son gratuitos, pero mantener los servidores tiene un costo. Es un
          trabajo que amamos hacer — invítanos algo saludable para seguir mejorando Seeker Gospel.
        </p>
      </div>

      <DonationForm />

      <div>
        <h2 className="mb-3 font-display text-xl text-parchment">Cuadro de honor</h2>
        <DonorWall />
      </div>
    </div>
  )
}
