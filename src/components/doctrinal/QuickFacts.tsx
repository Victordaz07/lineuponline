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
      className="rounded-2xl border border-jade/25 bg-navy-mid p-5 shadow-card"
      aria-label="Hechos clave"
    >
      <p className="mb-3 font-ui text-xs font-semibold uppercase tracking-wide text-parchment/55">
        Datos rápidos
      </p>
      <ul className="space-y-2">
        {facts.map((fact, index) => (
          <li key={index} className="flex gap-2.5 font-reading text-sm text-parchment/80">
            <span className="mt-0.5 text-jade" aria-hidden="true">
              ◆
            </span>
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
