import { PILGRIMS, pilgrimSpriteSrc } from '../data/pilgrims'
import { useCaminoStore } from '../store/caminoStore'

/** Cuadrícula de selección de peregrino — cambia en cualquier momento sin perder progreso. */
export function PilgrimPicker() {
  const selectedPilgrimId = useCaminoStore((s) => s.selectedPilgrimId)
  const setPilgrim = useCaminoStore((s) => s.setPilgrim)

  return (
    <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-8">
      {PILGRIMS.map((p) => {
        const selected = p.id === selectedPilgrimId
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => setPilgrim(p.id)}
            aria-pressed={selected}
            title={p.name}
            className={`flex flex-col items-center gap-1 rounded-xl border-2 p-1.5 transition ${
              selected ? 'border-sg-gold bg-sg-gold/10' : 'border-transparent hover:border-sg-gold/30'
            }`}
          >
            <div
              className="aspect-square w-full overflow-hidden rounded-lg bg-navy-deep"
              style={selected ? { boxShadow: `0 0 0 2px ${p.accentColor}` } : undefined}
            >
              <img src={pilgrimSpriteSrc(p.id, 'reposo')} alt={p.name} className="h-full w-full object-cover object-top" loading="lazy" />
            </div>
            <span className="font-ui text-[10px] font-semibold text-parchment/80">{p.name}</span>
          </button>
        )
      })}
    </div>
  )
}
