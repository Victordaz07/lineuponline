/**
 * Banco de palabras compartido por los mini-juegos (Memoria, Sopa de letras,
 * Adivina la palabra). Palabras cortas, sin espacios ni tildes, apropiadas
 * para todas las edades y con temática del evangelio.
 */

export type WordEntry = {
  /** Palabra en mayúsculas, sin tildes ni ñ (para grillas de letras) */
  word: string
  /** Pista corta que se muestra al jugador */
  hint: string
  /** Emoji asociado (se usa en el juego de Memoria) */
  emoji: string
}

export const WORD_BANK: WordEntry[] = [
  { word: 'FE', hint: 'Confianza en lo que no se ve', emoji: '🙏' },
  { word: 'AMOR', hint: 'El mayor de los mandamientos', emoji: '❤️' },
  { word: 'BIBLIA', hint: 'Las sagradas escrituras', emoji: '📖' },
  { word: 'IGLESIA', hint: 'Casa de adoración', emoji: '⛪' },
  { word: 'FAMILIA', hint: 'La unidad más importante', emoji: '👨‍👩‍👧‍👦' },
  { word: 'TEMPLO', hint: 'Casa del Señor', emoji: '🏛️' },
  { word: 'ORACION', hint: 'Hablar con Dios', emoji: '🙌' },
  { word: 'BAUTISMO', hint: 'Primera ordenanza', emoji: '💧' },
  { word: 'PROFETA', hint: 'Vocero de Dios', emoji: '📜' },
  { word: 'ESPERANZA', hint: 'Mirar el futuro con fe', emoji: '🌅' },
  { word: 'GRATITUD', hint: 'Dar gracias siempre', emoji: '🙏' },
  { word: 'HUMILDAD', hint: 'Lo opuesto al orgullo', emoji: '🕊️' },
  { word: 'PACIENCIA', hint: 'Esperar con calma', emoji: '⏳' },
  { word: 'PERDON', hint: 'Soltar el rencor', emoji: '🤝' },
  { word: 'VERDAD', hint: 'Lo que es real y correcto', emoji: '✨' },
  { word: 'LUZ', hint: 'Guía en la oscuridad', emoji: '💡' },
  { word: 'PAZ', hint: 'Tranquilidad del corazón', emoji: '🕊️' },
  { word: 'GOZO', hint: 'Alegría profunda', emoji: '😊' },
  { word: 'SERVICIO', hint: 'Ayudar a los demás', emoji: '🤲' },
  { word: 'TESTIMONIO', hint: 'Saber que algo es verdadero', emoji: '💛' },
  { word: 'MISION', hint: 'Compartir el evangelio', emoji: '🌎' },
  { word: 'JESUS', hint: 'El Salvador del mundo', emoji: '✝️' },
  { word: 'DIOS', hint: 'Nuestro Padre Celestial', emoji: '☀️' },
  { word: 'ESPIRITU', hint: 'Consolador y guía', emoji: '🕊️' },
]

/** Devuelve `count` palabras al azar (sin repetir) del banco. */
export function pickRandomWords(count: number): WordEntry[] {
  const shuffled = [...WORD_BANK].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/** Devuelve una sola palabra al azar del banco. */
export function pickRandomWord(): WordEntry {
  return WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)]
}
