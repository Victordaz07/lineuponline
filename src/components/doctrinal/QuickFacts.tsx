export type QuickFactsProps = {
  facts: string[]
}

/**
 * Lista de hechos clave con estilo ámbar suave.
 *
 * @param props - Lista de textos
 * @returns Tarjeta de datos rápidos
 */
export function QuickFacts({ facts }: QuickFactsProps) {
  if (facts.length === 0) {
    return null
  }
  return (
    <aside
      className="rounded-2xl border border-amber-200 bg-amber-50/90 p-5 shadow-sm"
      aria-label="Hechos clave"
    >
      <p className="mb-3 font-ui text-xs font-semibold uppercase tracking-wide text-amber-900/80">
        Datos rápidos
      </p>
      <ul className="space-y-2">
        {facts.map((fact, index) => (
          <li key={index} className="flex gap-2 font-reading text-sm text-amber-950">
            <span className="text-gold-main" aria-hidden="true">
              ✓
            </span>
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
