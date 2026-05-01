/**
 * Utilidades para URLs de medios públicos (imágenes, video poster, etc.).
 */

const IMAGE_EXTENSIONS = /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i

/**
 * Comprueba si una URL parece apuntar a una imagen por extensión.
 *
 * @param url - URL a validar
 * @returns true si coincide con extensiones habituales
 */
export function isLikelyImageUrl(url: string): boolean {
  const trimmed = url.trim()
  if (!trimmed.startsWith('http') && !trimmed.startsWith('/')) {
    return false
  }
  return IMAGE_EXTENSIONS.test(trimmed)
}
