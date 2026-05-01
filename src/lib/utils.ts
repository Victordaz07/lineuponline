/**
 * Utilidades compartidas (formato, texto, rutas).
 */

/**
 * Divide texto plano en párrafos por líneas en blanco.
 *
 * @param text - Texto de entrada
 * @returns Lista de párrafos recortados
 */
export function splitPlainParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
}

/**
 * Genera URL de búsqueda en church.org para una referencia de escritura.
 *
 * @param reference - Texto de referencia (ej. "Alma 7:11")
 * @returns URL absoluta
 */
export function churchOrgScripturesUrl(reference: string): string {
  const encoded = encodeURIComponent(reference.trim())
  return `https://www.churchofjesuschrist.org/search?lang=spa&query=${encoded}`
}
