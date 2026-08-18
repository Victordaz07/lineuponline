/**
 * Las estaciones del Camino: 8 por volumen, posicionadas sobre el mapa
 * ilustrado de su volumen. El Libro de Mormón tiene contenido curado
 * completo en sus 8 estaciones; los otros 4 volúmenes tienen su primera
 * estación jugable y el resto marcado "Próximamente" — el camino se ve
 * completo desde ya, y se puede seguir llenando de contenido con el
 * tiempo sin tocar el arte ni la posición de los nodos.
 */

import type { CaminoStage } from '../types/camino'

export const CAMINO_STAGES: CaminoStage[] = [
  // ── Libro de Mormón ───────────────────────────────────────────────────
  {
    id: 'lm-1',
    volumeId: 'libro-mormon',
    order: 1,
    position: { x: 47, y: 97 },
    title: 'Lehi deja Jerusalén',
    status: 'ready',
    starTimes: [45, 90],
    challenge: {
      kind: 'word_search',
      size: 9,
      allowDiagonal: false,
      allowReverse: false,
      words: [
        { word: 'LEHI', hint: 'El profeta que guió a su familia fuera de Jerusalén', emoji: '🧭' },
        { word: 'SUENO', hint: 'Cómo recibió Lehi la advertencia de huir', emoji: '💭' },
        { word: 'DESIERTO', hint: 'Donde la familia de Lehi acampó al huir', emoji: '🏕️' },
        { word: 'TIENDA', hint: 'Su nueva casa durante el viaje', emoji: '⛺' },
        { word: 'VISION', hint: 'Lo que Lehi tuvo antes de partir', emoji: '👁️' },
        { word: 'FE', hint: 'Lo que se necesitó para dejarlo todo atrás', emoji: '🙏' },
      ],
    },
  },
  {
    id: 'lm-2',
    volumeId: 'libro-mormon',
    order: 2,
    position: { x: 53, y: 85 },
    title: 'Las planchas de bronce',
    status: 'ready',
    starTimes: [40, 80],
    challenge: {
      kind: 'hangman',
      word: 'PLANCHAS',
      hint: 'El registro de metal que Nefi debía obtener de Labán',
    },
  },
  {
    id: 'lm-3',
    volumeId: 'libro-mormon',
    order: 3,
    position: { x: 57, y: 73 },
    title: 'Nefi construye un barco',
    status: 'ready',
    characterId: 'nefi',
    starTimes: [50, 100],
    challenge: {
      kind: 'word_search',
      size: 10,
      allowDiagonal: true,
      allowReverse: false,
      words: [
        { word: 'BARCO', hint: 'Lo que Nefi construyó para cruzar el mar', emoji: '⛵' },
        { word: 'MONTE', hint: 'Donde el Señor le mostró a Nefi cómo trabajar el metal', emoji: '⛰️' },
        { word: 'HERRAMIENTAS', hint: 'Nefi las hizo con mineral que fundió', emoji: '🔨' },
        { word: 'OBEDIENCIA', hint: 'Por qué Nefi tuvo éxito donde sus hermanos dudaron', emoji: '✅' },
        { word: 'TORMENTA', hint: 'Lo que enfrentó el barco en altamar', emoji: '🌊' },
        { word: 'BRUJULA', hint: 'El Liahona funcionaba según la fe de quien la usaba', emoji: '🧭' },
      ],
    },
  },
  {
    id: 'lm-4',
    volumeId: 'libro-mormon',
    order: 4,
    position: { x: 48, y: 61 },
    title: 'El árbol de la vida',
    status: 'ready',
    starTimes: [45, 90],
    challenge: {
      kind: 'connect',
      pairs: [
        { left: 'Árbol de la vida', right: 'El amor de Dios' },
        { left: 'Barra de hierro', right: 'La palabra de Dios' },
        { left: 'Río de agua sucia', right: 'Las tentaciones del mundo' },
        { left: 'Edificio grande y espacioso', right: 'El orgullo del mundo' },
        { left: 'Niebla de tinieblas', right: 'Las tentaciones de Satanás' },
      ],
    },
  },
  {
    id: 'lm-5',
    volumeId: 'libro-mormon',
    order: 5,
    position: { x: 47, y: 49 },
    title: 'El discurso del rey Benjamín',
    status: 'ready',
    starTimes: [40, 80],
    challenge: {
      kind: 'hangman',
      word: 'SIERVOS',
      hint: 'Así llamó el rey Benjamín a quienes sirven a sus semejantes',
    },
  },
  {
    id: 'lm-6',
    volumeId: 'libro-mormon',
    order: 6,
    position: { x: 62, y: 43 },
    title: 'La conversión de Alma el Joven',
    status: 'ready',
    starTimes: [45, 90],
    challenge: {
      kind: 'word_search',
      size: 10,
      allowDiagonal: true,
      allowReverse: false,
      words: [
        { word: 'ANGEL', hint: 'Quien detuvo a Alma en su rebeldía', emoji: '😇' },
        { word: 'DOLOR', hint: 'Lo que Alma sintió al recordar sus pecados', emoji: '💔' },
        { word: 'GOZO', hint: 'Lo que Alma sintió al arrepentirse', emoji: '😊' },
        { word: 'ARREPENTIMIENTO', hint: 'El cambio de corazón que vivió Alma', emoji: '🔄' },
        { word: 'TESTIMONIO', hint: 'Lo que Alma dedicó su vida a compartir después', emoji: '💛' },
      ],
    },
  },
  {
    id: 'lm-7',
    volumeId: 'libro-mormon',
    order: 7,
    position: { x: 43, y: 30 },
    title: 'Los hijos de Mosíah entre los lamanitas',
    status: 'ready',
    starTimes: [45, 90],
    challenge: {
      kind: 'connect',
      pairs: [
        { left: 'Amón', right: 'Sirvió al rey Lamoni' },
        { left: 'Espada', right: 'La usó para defender los rebaños del rey' },
        { left: 'Rey Lamoni', right: 'Cayó como muerto de puro gozo' },
        { left: 'Convenio de paz', right: 'Enterraron sus espadas en la tierra' },
      ],
    },
  },
  {
    id: 'lm-8',
    volumeId: 'libro-mormon',
    order: 8,
    position: { x: 40, y: 24 },
    title: 'Cristo visita a los nefitas',
    status: 'ready',
    characterId: 'jesus',
    sceneSrc: '/assets/camino/retos/bom-cristo-visita-nefitas.webp',
    starTimes: [50, 100],
    challenge: {
      kind: 'word_search',
      size: 10,
      allowDiagonal: true,
      allowReverse: true,
      words: [
        { word: 'CRISTO', hint: 'Quien descendió del cielo ante el pueblo', emoji: '✝️' },
        { word: 'AMERICA', hint: 'El continente donde ocurrió esta visita', emoji: '🌎' },
        { word: 'BENDICION', hint: 'Lo que Cristo dio a cada niño presente', emoji: '🙌' },
        { word: 'TESTIGOS', hint: 'Lo que el pueblo se convirtió al tocar sus heridas', emoji: '👥' },
        { word: 'PAZ', hint: 'Lo que Cristo trajo tras años de destrucción', emoji: '🕊️' },
      ],
    },
  },

  // ── Antiguo Testamento ───────────────────────────────────────────────
  {
    id: 'at-1',
    volumeId: 'antiguo-testamento',
    order: 1,
    position: { x: 40, y: 95 },
    title: 'Moisés y el Mar Rojo',
    status: 'ready',
    characterId: 'moises',
    sceneSrc: '/assets/camino/retos/at-moises-mar-rojo.webp',
    starTimes: [45, 90],
    challenge: {
      kind: 'word_search',
      size: 9,
      allowDiagonal: false,
      allowReverse: false,
      words: [
        { word: 'MOISES', hint: 'El profeta que Dios llamó desde la zarza ardiente', emoji: '🔥' },
        { word: 'EGIPTO', hint: 'La tierra de la que Israel salió', emoji: '🐪' },
        { word: 'FARAON', hint: 'El gobernante que no quería dejar ir al pueblo', emoji: '👑' },
        { word: 'LIBERTAD', hint: 'Lo que Israel encontró al cruzar el mar', emoji: '🕊️' },
        { word: 'MILAGRO', hint: 'Cómo se abrieron las aguas', emoji: '✨' },
        { word: 'BASTON', hint: 'Lo que Moisés levantó sobre el mar', emoji: '🦯' },
      ],
    },
  },
  { id: 'at-2', volumeId: 'antiguo-testamento', order: 2, position: { x: 55, y: 83 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'at-3', volumeId: 'antiguo-testamento', order: 3, position: { x: 43, y: 73 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'at-4', volumeId: 'antiguo-testamento', order: 4, position: { x: 63, y: 64 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'at-5', volumeId: 'antiguo-testamento', order: 5, position: { x: 47, y: 57 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'at-6', volumeId: 'antiguo-testamento', order: 6, position: { x: 68, y: 51 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'at-7', volumeId: 'antiguo-testamento', order: 7, position: { x: 36, y: 26 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'at-8', volumeId: 'antiguo-testamento', order: 8, position: { x: 53, y: 18 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },

  // ── Nuevo Testamento ─────────────────────────────────────────────────
  {
    id: 'nt-1',
    volumeId: 'nuevo-testamento',
    order: 1,
    position: { x: 56, y: 96 },
    title: 'Juan el Bautista prepara el camino',
    status: 'ready',
    characterId: 'juan-bautista',
    starTimes: [40, 80],
    challenge: {
      kind: 'hangman',
      word: 'BAUTISMO',
      hint: 'La ordenanza que Juan realizaba en el río Jordán',
    },
  },
  { id: 'nt-2', volumeId: 'nuevo-testamento', order: 2, position: { x: 47, y: 83 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'nt-3', volumeId: 'nuevo-testamento', order: 3, position: { x: 55, y: 70 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'nt-4', volumeId: 'nuevo-testamento', order: 4, position: { x: 47, y: 56 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'nt-5', volumeId: 'nuevo-testamento', order: 5, position: { x: 55, y: 43 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'nt-6', volumeId: 'nuevo-testamento', order: 6, position: { x: 52, y: 32 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  {
    id: 'nt-7',
    volumeId: 'nuevo-testamento',
    order: 7,
    position: { x: 40, y: 25 },
    title: 'Los Doce Apóstoles',
    status: 'ready',
    sceneSrc: '/assets/camino/retos/nt-doce-apostoles.webp',
    starTimes: [45, 90],
    challenge: {
      kind: 'connect',
      pairs: [
        { left: 'Pedro', right: 'El pescador que llegó a ser el primer Apóstol' },
        { left: 'Juan', right: 'El discípulo amado, autor del cuarto Evangelio' },
        { left: 'Andrés', right: 'El hermano de Pedro, también pescador' },
        { left: 'Mateo', right: 'El cobrador de impuestos que dejó todo por seguirlo' },
      ],
    },
  },
  { id: 'nt-8', volumeId: 'nuevo-testamento', order: 8, position: { x: 53, y: 17 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },

  // ── Doctrina y Convenios ─────────────────────────────────────────────
  {
    id: 'dc-1',
    volumeId: 'doctrina-convenios',
    order: 1,
    position: { x: 42, y: 98 },
    title: 'La Primera Visión',
    status: 'ready',
    starTimes: [45, 90],
    challenge: {
      kind: 'word_search',
      size: 9,
      allowDiagonal: false,
      allowReverse: false,
      words: [
        { word: 'ARBOLEDA', hint: 'Donde José Smith fue a orar', emoji: '🌳' },
        { word: 'ORACION', hint: 'Lo que José hizo buscando respuesta', emoji: '🙏' },
        { word: 'LUZ', hint: 'Lo que descendió antes de la aparición', emoji: '💡' },
        { word: 'PADRE', hint: 'Uno de los dos Seres que aparecieron', emoji: '☀️' },
        { word: 'RESPUESTA', hint: 'Lo que José recibió a su pregunta', emoji: '✨' },
        { word: 'VISION', hint: 'Cómo se conoce este acontecimiento', emoji: '👁️' },
      ],
    },
  },
  { id: 'dc-2', volumeId: 'doctrina-convenios', order: 2, position: { x: 50, y: 86 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'dc-3', volumeId: 'doctrina-convenios', order: 3, position: { x: 54, y: 74 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'dc-4', volumeId: 'doctrina-convenios', order: 4, position: { x: 50, y: 62 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'dc-5', volumeId: 'doctrina-convenios', order: 5, position: { x: 55, y: 50 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'dc-6', volumeId: 'doctrina-convenios', order: 6, position: { x: 49, y: 38 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'dc-7', volumeId: 'doctrina-convenios', order: 7, position: { x: 53, y: 27 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'dc-8', volumeId: 'doctrina-convenios', order: 8, position: { x: 62, y: 16 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },

  // ── Perla de Gran Precio ─────────────────────────────────────────────
  {
    id: 'pgp-1',
    volumeId: 'perla-gran-precio',
    order: 1,
    position: { x: 43, y: 97 },
    title: 'Moisés ve la obra de Dios',
    status: 'ready',
    characterId: 'moises',
    starTimes: [45, 90],
    challenge: {
      kind: 'word_search',
      size: 9,
      allowDiagonal: false,
      allowReverse: false,
      words: [
        { word: 'MOISES', hint: 'A quien Dios mostró la creación entera', emoji: '🧑' },
        { word: 'MUNDOS', hint: 'Dios le mostró que existen incontables de estos', emoji: '🌍' },
        { word: 'GLORIA', hint: 'La obra y la ___ de Dios: la inmortalidad y vida eterna del hombre', emoji: '✨' },
        { word: 'CREACION', hint: 'La obra que Dios le reveló a Moisés', emoji: '🌱' },
        { word: 'ETERNIDAD', hint: 'La escala de tiempo en la que Dios obra', emoji: '♾️' },
        { word: 'HIJOS', hint: 'Cómo Dios llama a toda la humanidad', emoji: '👨‍👩‍👧' },
      ],
    },
  },
  { id: 'pgp-2', volumeId: 'perla-gran-precio', order: 2, position: { x: 65, y: 86 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'pgp-3', volumeId: 'perla-gran-precio', order: 3, position: { x: 46, y: 74 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'pgp-4', volumeId: 'perla-gran-precio', order: 4, position: { x: 68, y: 62 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'pgp-5', volumeId: 'perla-gran-precio', order: 5, position: { x: 48, y: 51 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'pgp-6', volumeId: 'perla-gran-precio', order: 6, position: { x: 58, y: 45 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'pgp-7', volumeId: 'perla-gran-precio', order: 7, position: { x: 38, y: 32 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
  { id: 'pgp-8', volumeId: 'perla-gran-precio', order: 8, position: { x: 55, y: 19 }, title: 'Próximamente', status: 'coming-soon', starTimes: [45, 90] },
]

export function stagesForVolume(volumeId: string): CaminoStage[] {
  return CAMINO_STAGES.filter((s) => s.volumeId === volumeId).sort((a, b) => a.order - b.order)
}

export function getStage(id: string): CaminoStage | undefined {
  return CAMINO_STAGES.find((s) => s.id === id)
}
