/**
 * Banco de palabras compartido por los mini-juegos (Memoria, Sopa de letras,
 * Adivina la palabra). Palabras cortas, sin espacios ni tildes, apropiadas
 * para todas las edades y con temática del evangelio.
 *
 * Cada palabra lleva una `category` para poder armar etapas temáticas en la
 * sopa de letras. Las palabras van SIEMPRE en mayúsculas, sin tildes ni ñ.
 */

export type WordCategory = 'virtudes' | 'personajes' | 'lugares' | 'ordenanzas' | 'escrituras'

export type WordEntry = {
  /** Palabra en mayúsculas, sin tildes ni ñ (para grillas de letras) */
  word: string
  /** Pista corta que se muestra al jugador */
  hint: string
  /** Emoji asociado (se usa en el juego de Memoria) */
  emoji: string
  /** Categoría temática (para etapas de la sopa de letras) */
  category: WordCategory
}

export const WORD_BANK: WordEntry[] = [
  // ── Virtudes ──────────────────────────────────────────────────────────────
  { word: 'FE', hint: 'Confianza en lo que no se ve', emoji: '🙏', category: 'virtudes' },
  { word: 'AMOR', hint: 'El mayor de los mandamientos', emoji: '❤️', category: 'virtudes' },
  { word: 'ESPERANZA', hint: 'Mirar el futuro con fe', emoji: '🌅', category: 'virtudes' },
  { word: 'GRATITUD', hint: 'Dar gracias siempre', emoji: '🙏', category: 'virtudes' },
  { word: 'HUMILDAD', hint: 'Lo opuesto al orgullo', emoji: '🕊️', category: 'virtudes' },
  { word: 'PACIENCIA', hint: 'Esperar con calma', emoji: '⏳', category: 'virtudes' },
  { word: 'PERDON', hint: 'Soltar el rencor', emoji: '🤝', category: 'virtudes' },
  { word: 'VERDAD', hint: 'Lo que es real y correcto', emoji: '✨', category: 'virtudes' },
  { word: 'PAZ', hint: 'Tranquilidad del corazón', emoji: '🕊️', category: 'virtudes' },
  { word: 'GOZO', hint: 'Alegría profunda', emoji: '😊', category: 'virtudes' },
  { word: 'SERVICIO', hint: 'Ayudar a los demás', emoji: '🤲', category: 'virtudes' },
  { word: 'CARIDAD', hint: 'El amor puro de Cristo', emoji: '💗', category: 'virtudes' },
  { word: 'BONDAD', hint: 'Tratar bien a todos', emoji: '🌸', category: 'virtudes' },
  { word: 'OBEDIENCIA', hint: 'Guardar los mandamientos', emoji: '✅', category: 'virtudes' },

  // ── Personajes ────────────────────────────────────────────────────────────
  { word: 'JESUS', hint: 'El Salvador del mundo', emoji: '✝️', category: 'personajes' },
  { word: 'MARIA', hint: 'La madre del Salvador', emoji: '👩', category: 'personajes' },
  { word: 'PEDRO', hint: 'El apóstol pescador', emoji: '🎣', category: 'personajes' },
  { word: 'PABLO', hint: 'El apóstol de los gentiles', emoji: '✉️', category: 'personajes' },
  { word: 'MOISES', hint: 'Guió a Israel fuera de Egipto', emoji: '🪄', category: 'personajes' },
  { word: 'DAVID', hint: 'Venció a Goliat', emoji: '🎯', category: 'personajes' },
  { word: 'NEFI', hint: 'Profeta del Libro de Mormón', emoji: '⛵', category: 'personajes' },
  { word: 'ABRAHAM', hint: 'El padre de las naciones', emoji: '🌟', category: 'personajes' },
  { word: 'NOE', hint: 'Construyó el arca', emoji: '🚢', category: 'personajes' },
  { word: 'ADAN', hint: 'El primer hombre', emoji: '🌿', category: 'personajes' },
  { word: 'ESTER', hint: 'Reina valiente de Persia', emoji: '👑', category: 'personajes' },
  { word: 'RUT', hint: 'La leal moabita', emoji: '🌾', category: 'personajes' },
  { word: 'DANIEL', hint: 'Fiel en el foso de leones', emoji: '🦁', category: 'personajes' },
  { word: 'MORONI', hint: 'Entregó las planchas', emoji: '📯', category: 'personajes' },

  // ── Lugares ───────────────────────────────────────────────────────────────
  { word: 'TEMPLO', hint: 'Casa del Señor', emoji: '🏛️', category: 'lugares' },
  { word: 'IGLESIA', hint: 'Casa de adoración', emoji: '⛪', category: 'lugares' },
  { word: 'BELEN', hint: 'Donde nació Jesús', emoji: '⭐', category: 'lugares' },
  { word: 'NAZARET', hint: 'Donde creció el Salvador', emoji: '🏘️', category: 'lugares' },
  { word: 'GETSEMANI', hint: 'El huerto de la agonía', emoji: '🫒', category: 'lugares' },
  { word: 'JERICO', hint: 'Ciudad de muros caídos', emoji: '🎺', category: 'lugares' },
  { word: 'SION', hint: 'La ciudad de los puros de corazón', emoji: '🏔️', category: 'lugares' },
  { word: 'EGIPTO', hint: 'Tierra de la esclavitud de Israel', emoji: '🏜️', category: 'lugares' },
  { word: 'CANAAN', hint: 'La tierra prometida', emoji: '🍇', category: 'lugares' },
  { word: 'GALILEA', hint: 'Región donde Jesús enseñó', emoji: '🌊', category: 'lugares' },
  { word: 'HOGAR', hint: 'El primer lugar del evangelio', emoji: '🏠', category: 'lugares' },
  { word: 'CALVARIO', hint: 'El monte de la cruz', emoji: '✝️', category: 'lugares' },

  // ── Ordenanzas ────────────────────────────────────────────────────────────
  { word: 'BAUTISMO', hint: 'Primera ordenanza del evangelio', emoji: '💧', category: 'ordenanzas' },
  { word: 'ORACION', hint: 'Hablar con Dios', emoji: '🙌', category: 'ordenanzas' },
  { word: 'AYUNO', hint: 'Abstenerse para acercarse a Dios', emoji: '🍽️', category: 'ordenanzas' },
  { word: 'CONVENIO', hint: 'Promesa sagrada con Dios', emoji: '🤝', category: 'ordenanzas' },
  { word: 'SELLAMIENTO', hint: 'Une familias para siempre', emoji: '💍', category: 'ordenanzas' },
  { word: 'INVESTIDURA', hint: 'Ordenanza del templo', emoji: '👕', category: 'ordenanzas' },
  { word: 'CONFIRMACION', hint: 'Recibir el Espíritu Santo', emoji: '🕊️', category: 'ordenanzas' },
  { word: 'ORDENACION', hint: 'Conferir el sacerdocio', emoji: '🙏', category: 'ordenanzas' },
  { word: 'ARREPENTIMIENTO', hint: 'Cambiar y volver a Dios', emoji: '🔄', category: 'ordenanzas' },
  { word: 'DIEZMO', hint: 'La décima parte al Señor', emoji: '💰', category: 'ordenanzas' },

  // ── Escrituras ────────────────────────────────────────────────────────────
  { word: 'BIBLIA', hint: 'Las sagradas escrituras', emoji: '📖', category: 'escrituras' },
  { word: 'GENESIS', hint: 'El primer libro de la Biblia', emoji: '🌍', category: 'escrituras' },
  { word: 'EXODO', hint: 'La salida de Egipto', emoji: '🚶', category: 'escrituras' },
  { word: 'SALMOS', hint: 'Cantos y alabanzas', emoji: '🎵', category: 'escrituras' },
  { word: 'EVANGELIO', hint: 'Las buenas nuevas de Cristo', emoji: '📜', category: 'escrituras' },
  { word: 'PROFETA', hint: 'Vocero de Dios', emoji: '📜', category: 'escrituras' },
  { word: 'REVELACION', hint: 'Verdad que Dios da a conocer', emoji: '💡', category: 'escrituras' },
  { word: 'PARABOLA', hint: 'Historia con enseñanza', emoji: '🌱', category: 'escrituras' },
  { word: 'TESTIMONIO', hint: 'Saber que algo es verdadero', emoji: '💛', category: 'escrituras' },
  { word: 'MANDAMIENTO', hint: 'Ley que Dios nos da', emoji: '📋', category: 'escrituras' },
  { word: 'VERSICULO', hint: 'Una línea de las escrituras', emoji: '🔖', category: 'escrituras' },
  { word: 'APOSTOL', hint: 'Testigo especial de Cristo', emoji: '🕊️', category: 'escrituras' },
]

/** Mezcla una copia de `arr` de forma determinística usando el `rng` dado. */
export function shuffleWith<T>(arr: readonly T[], rng: () => number): T[] {
  const out = [...arr]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** Palabras de una categoría cuya longitud cabe en `maxLen`. */
export function wordsByCategory(category: WordCategory, maxLen = Infinity): WordEntry[] {
  return WORD_BANK.filter((w) => w.category === category && w.word.length <= maxLen)
}

/**
 * Elige `count` palabras de una categoría, sin repetir, de forma determinística
 * con el `rng` dado (para retos diarios reproducibles) o al azar si se omite.
 */
export function pickCategoryWords(
  category: WordCategory,
  count: number,
  maxLen = Infinity,
  rng: () => number = Math.random,
): WordEntry[] {
  const pool = wordsByCategory(category, maxLen)
  return shuffleWith(pool, rng).slice(0, Math.min(count, pool.length))
}

/** Devuelve `count` palabras al azar (sin repetir) de todo el banco. */
export function pickRandomWords(count: number): WordEntry[] {
  return shuffleWith(WORD_BANK, Math.random).slice(0, Math.min(count, WORD_BANK.length))
}

/** Devuelve una sola palabra al azar del banco. */
export function pickRandomWord(): WordEntry {
  return WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)]
}
