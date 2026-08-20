/**
 * Detecta si un texto de atribución (name/role de `leader_quote`, o
 * `attribution` de `central_quote`) marca el pasaje como paráfrasis en vez
 * de cita textual verificable.
 *
 * Hallazgo #1 de AUDITORIA_CUMPLIMIENTO.md: el esquema de datos no tiene un
 * campo estructurado para esto — el contenido lo indica como texto libre
 * ("(paráfrasis)", "Adaptado de..."). Esta función es la fuente de verdad
 * única para esa detección, usada por los bloques de cita para decidir su
 * formato de presentación.
 */
const PARAPHRASE_MARKER_RE = /par[aá]frasis|parafrase|adaptad[oa]\s+(?:de|a)\b/i

export function isParaphraseAttribution(...parts: (string | undefined)[]): boolean {
  return PARAPHRASE_MARKER_RE.test(parts.filter(Boolean).join(' '))
}
