/**
 * Semilla de rondas no clásicas del banco de preguntas.
 * fill_blank (30) · true_false (30) · who_am_i (20) · order_events (15)
 * Amplía cualquier lista añadiendo entradas; los ids deben ser únicos.
 */
import type {
  FillBlankContent,
  OrderEventsContent,
  QuestLevel,
  QuestionCategory,
  TrueFalseContent,
  WhoAmIContent,
} from '../../types'

type Meta = { id: string; level: QuestLevel; topic: string; category: QuestionCategory }

export type FillBlankSeed = Meta & { content: FillBlankContent }
export type TrueFalseSeed = Meta & { content: TrueFalseContent }
export type WhoAmISeed = Meta & { content: WhoAmIContent }
export type OrderEventsSeed = Meta & { content: OrderEventsContent }

const fb = (
  id: string,
  level: QuestLevel,
  topic: string,
  category: QuestionCategory,
  verse: string,
  reference: string,
  answer: string,
  acceptedVariants: string[] = [],
): FillBlankSeed => ({ id, level, topic, category, content: { verse, reference, answer, acceptedVariants } })

const tf = (
  id: string,
  level: QuestLevel,
  topic: string,
  category: QuestionCategory,
  statement: string,
  isTrue: boolean,
  explanation: string,
): TrueFalseSeed => ({ id, level, topic, category, content: { statement, isTrue, explanation } })

const WAI_POINTS = [5000, 3500, 2000, 1000]

const wai = (
  id: string,
  level: QuestLevel,
  topic: string,
  clues: [string, string, string, string],
  answer: string,
  acceptedVariants: string[] = [],
): WhoAmISeed => ({
  id, level, topic, category: 'personajes',
  content: { clues, answer, acceptedVariants, points: WAI_POINTS },
})

const oe = (
  id: string,
  level: QuestLevel,
  topic: string,
  events: [string, string, string, string],
  explanation: string,
): OrderEventsSeed => ({
  id, level, topic, category: 'cronologia',
  content: {
    events: events.map((text, i) => ({ id: `${id}-e${i + 1}`, text, correctOrder: i + 1 })),
    explanation,
  },
})

/* ── COMPLETA EL VERSÍCULO (fill_blank) ──────────────────────────────── */

export const FILL_BLANK_SEED: FillBlankSeed[] = [
  // Nivel 1
  fb('fb-n1-1', 1, 'atonement', 'escrituras', 'Yo soy el camino, y la verdad, y la [BLANK]', 'Juan 14:6', 'vida'),
  fb('fb-n1-2', 1, 'faith_repentance', 'escrituras', 'Amarás a tu prójimo como a ti [BLANK]', 'Mateo 22:39', 'mismo'),
  fb('fb-n1-3', 1, 'book_of_mormon', 'escrituras', 'Yo, Nefi, nací de buenos [BLANK]', '1 Nefi 1:1', 'padres'),
  fb('fb-n1-4', 1, 'plan_of_salvation', 'escrituras', 'Jehová es mi [BLANK]; nada me faltará', 'Salmos 23:1', 'pastor'),
  fb('fb-n1-5', 1, 'eternal_family', 'escrituras', 'Dejad a los niños venir a [BLANK]', 'Marcos 10:14', 'mí', ['mi']),
  fb('fb-n1-6', 1, 'atonement', 'escrituras', 'Yo soy la luz del [BLANK]', 'Juan 8:12', 'mundo'),
  fb('fb-n1-7', 1, 'plan_of_salvation', 'escrituras', 'En el principio creó Dios los cielos y la [BLANK]', 'Génesis 1:1', 'tierra'),
  fb('fb-n1-8', 1, 'eternal_family', 'escrituras', 'Honra a tu padre y a tu [BLANK]', 'Éxodo 20:12', 'madre'),
  fb('fb-n1-9', 1, 'book_of_mormon', 'escrituras', 'Iré y haré lo que el Señor ha [BLANK]', '1 Nefi 3:7', 'mandado', ['ordenado']),
  fb('fb-n1-10', 1, 'restoration', 'escrituras', 'Este es mi Hijo Amado: ¡[BLANK]!', 'José Smith—Historia 1:17', 'Escúchalo', ['escuchalo', 'escuchadlo']),
  // Nivel 2
  fb('fb-n2-1', 2, 'faith_repentance', 'escrituras', 'Compararemos la palabra a una [BLANK]', 'Alma 32:28', 'semilla'),
  fb('fb-n2-2', 2, 'plan_of_salvation', 'escrituras', 'Adán cayó para que los hombres existiesen; y existen los hombres para que tengan [BLANK]', '2 Nefi 2:25', 'gozo', ['alegría']),
  fb('fb-n2-3', 2, 'book_of_mormon', 'escrituras', 'Cuando os halláis al servicio de vuestros semejantes, solo estáis al servicio de vuestro [BLANK]', 'Mosíah 2:17', 'Dios'),
  fb('fb-n2-4', 2, 'faith_repentance', 'escrituras', 'La [BLANK] es la esperanza en cosas que no se ven, que son verdaderas', 'Alma 32:21', 'fe'),
  fb('fb-n2-5', 2, 'ordinances', 'escrituras', 'Buscad primeramente el reino de [BLANK]', 'Mateo 6:33', 'Dios'),
  fb('fb-n2-6', 2, 'plan_of_salvation', 'escrituras', 'Esta es mi obra y mi gloria: llevar a cabo la inmortalidad y la vida [BLANK] del hombre', 'Moisés 1:39', 'eterna'),
  fb('fb-n2-7', 2, 'restoration', 'escrituras', 'Si alguno de vosotros tiene falta de sabiduría, pídala a [BLANK]', 'Santiago 1:5', 'Dios'),
  fb('fb-n2-8', 2, 'book_of_mormon', 'escrituras', 'Hablamos de Cristo, nos regocijamos en [BLANK]', '2 Nefi 25:26', 'Cristo'),
  fb('fb-n2-9', 2, 'prophets', 'escrituras', 'No hará nada Jehová el Señor, sin que revele su secreto a sus siervos los [BLANK]', 'Amós 3:7', 'profetas'),
  fb('fb-n2-10', 2, 'atonement', 'escrituras', 'Yo soy la resurrección y la [BLANK]', 'Juan 11:25', 'vida'),
  // Nivel 3
  fb('fb-n3-1', 3, 'faith_repentance', 'escrituras', 'Pida con fe, no dudando nada; porque el que duda es semejante a la [BLANK] del mar', 'Santiago 1:6', 'onda', ['ola']),
  fb('fb-n3-2', 3, 'atonement', 'escrituras', 'He aquí, yo estoy a la [BLANK] y llamo', 'Apocalipsis 3:20', 'puerta'),
  fb('fb-n3-3', 3, 'baptism', 'escrituras', 'Las palabras de Cristo os dirán todas las cosas que debéis [BLANK]', '2 Nefi 32:3', 'hacer'),
  fb('fb-n3-4', 3, 'faith_repentance', 'escrituras', 'Porque sabemos que es por la [BLANK] que nos salvamos, después de hacer cuanto podamos', '2 Nefi 25:23', 'gracia'),
  fb('fb-n3-5', 3, 'plan_of_salvation', 'escrituras', 'La gloria de Dios es la [BLANK]', 'D. y C. 93:36', 'inteligencia'),
  fb('fb-n3-6', 3, 'priesthood', 'escrituras', 'Los derechos del sacerdocio están inseparablemente unidos a los poderes del [BLANK]', 'D. y C. 121:36', 'cielo'),
  fb('fb-n3-7', 3, 'ordinances', 'escrituras', 'Si me amáis, guardad mis [BLANK]', 'Juan 14:15', 'mandamientos'),
  fb('fb-n3-8', 3, 'plan_of_salvation', 'escrituras', 'Todas las cosas obran juntamente para el [BLANK] de los que aman a Dios', 'Romanos 8:28', 'bien'),
  fb('fb-n3-9', 3, 'prophets', 'escrituras', 'Pedid, y se os dará; buscad, y [BLANK]', 'Mateo 7:7', 'hallaréis', ['hallareis', 'encontraréis', 'encontrareis']),
  fb('fb-n3-10', 3, 'faith_repentance', 'escrituras', 'Si vuestros pecados fueren como la grana, como la [BLANK] serán emblanquecidos', 'Isaías 1:18', 'nieve'),
]

/* ── VERDADERO O FALSO (true_false) ──────────────────────────────────── */

export const TRUE_FALSE_SEED: TrueFalseSeed[] = [
  // Nivel 1
  tf('tf-n1-1', 1, 'book_of_mormon', 'eventos', 'Nefi construyó el barco usando herramientas que encontró en el desierto.', false, 'Falso: el Señor le mostró dónde hallar el mineral y cómo fabricar las herramientas (1 Nefi 17:9–10).'),
  tf('tf-n1-2', 1, 'baptism', 'eventos', 'Jesús fue bautizado en el río Jordán.', true, 'Jesús vino de Galilea al Jordán para ser bautizado por Juan (Mateo 3:13).'),
  tf('tf-n1-3', 1, 'restoration', 'cronologia', 'José Smith tenía 14 años cuando recibió la Primera Visión.', true, 'Tenía 14 años en la primavera de 1820 (José Smith—Historia 1:7, 14).'),
  tf('tf-n1-4', 1, 'book_of_mormon', 'escrituras', 'El Libro de Mormón fue escrito originalmente en español.', false, 'Falso: fue escrito en egipcio reformado y traducido por el don y poder de Dios (Mormón 9:32).'),
  tf('tf-n1-5', 1, 'baptism', 'doctrina', 'Los niños pueden bautizarse a partir de los ocho años.', true, 'Ocho años es la edad de responsabilidad ante el Señor (D. y C. 68:27).'),
  tf('tf-n1-6', 1, 'book_of_mormon', 'personajes', 'Moroni fue el padre de Mormón.', false, 'Falso: Moroni era hijo de Mormón, y concluyó el registro de su padre (Mormón 8:1).'),
  tf('tf-n1-7', 1, 'prophets', 'personajes', 'El gigante Goliat fue vencido por el rey Saúl.', false, 'Falso: fue David, un joven pastor, con una honda y su fe en Jehová (1 Samuel 17).'),
  tf('tf-n1-8', 1, 'ordinances', 'doctrina', 'La Santa Cena se toma en memoria del cuerpo y la sangre de Jesucristo.', true, 'El pan y el agua se bendicen en memoria del Salvador (D. y C. 20:77, 79).'),
  tf('tf-n1-9', 1, 'book_of_mormon', 'lugares', 'Lehi y su familia salieron de la ciudad de Babilonia.', false, 'Falso: salieron de Jerusalén antes de su destrucción (1 Nefi 2:2–4).'),
  tf('tf-n1-10', 1, 'restoration', 'cronologia', 'El ángel Moroni visitó por primera vez a José Smith en 1823.', true, 'Moroni lo visitó la noche del 21 de septiembre de 1823 (José Smith—Historia 1:27–33).'),
  // Nivel 2
  tf('tf-n2-1', 2, 'faith_repentance', 'personajes', 'Alma el Viejo se convirtió al escuchar las palabras de Abinadí.', true, 'Alma, sacerdote del rey Noé, creyó a Abinadí y escribió sus palabras (Mosíah 17:2–4).'),
  tf('tf-n2-2', 2, 'priesthood', 'personajes', 'El Sacerdocio de Melquisedec fue restaurado por Juan el Bautista.', false, 'Falso: Juan el Bautista restauró el Aarónico; el de Melquisedec lo restauraron Pedro, Santiago y Juan (D. y C. 13; 27:12).'),
  tf('tf-n2-3', 2, 'prophets', 'cronologia', 'Samuel el Lamanita profetizó el nacimiento de Cristo cinco años antes de que ocurriera.', true, '"He aquí, os doy una señal: pasarán cinco años más…" (Helamán 14:2).'),
  tf('tf-n2-4', 2, 'book_of_mormon', 'simbolos', 'En el sueño de Lehi, el edificio grande y espacioso representa el orgullo del mundo.', true, 'El edificio era "el orgullo del mundo" que se burlaba de los que comían del fruto (1 Nefi 11:36; 12:18).'),
  tf('tf-n2-5', 2, 'book_of_mormon', 'personajes', 'Los 2060 jóvenes guerreros eran hijos de los nefitas de Zarahemla.', false, 'Falso: eran hijos del pueblo de Ammón, cuyos padres habían hecho convenio de no tomar las armas (Alma 53:16–17; 56:3–5).'),
  tf('tf-n2-6', 2, 'restoration', 'cronologia', 'La Iglesia fue organizada el 6 de abril de 1830 con seis miembros oficiales.', true, 'Se organizó en Fayette, Nueva York, con seis miembros, conforme a las leyes del país (D. y C. 20:1).'),
  tf('tf-n2-7', 2, 'book_of_mormon', 'eventos', 'El rey Benjamín pronunció su gran discurso desde la cubierta de un barco.', false, 'Falso: habló desde una torre que mandó construir junto al templo (Mosíah 2:7–8).'),
  tf('tf-n2-8', 2, 'faith_repentance', 'eventos', 'Abinadí fue liberado por el rey Noé después de dar su testimonio.', false, 'Falso: fue condenado a morir por fuego, sellando su testimonio (Mosíah 17:13, 20).'),
  tf('tf-n2-9', 2, 'baptism', 'doctrina', 'El Espíritu Santo es un personaje de espíritu.', true, '"El Espíritu Santo… es un personaje de Espíritu" (D. y C. 130:22).'),
  tf('tf-n2-10', 2, 'book_of_mormon', 'eventos', 'Ammón defendió los rebaños del rey Lamoni en las aguas de Sebús.', true, 'Ammón dispersó a los ladrones y cortó sus brazos, asombrando al rey (Alma 17:26–39).'),
  // Nivel 3
  tf('tf-n3-1', 3, 'plan_of_salvation', 'escrituras', 'Doctrina y Convenios 76 describe los tres grados de gloria.', true, 'La "Visión" de 1832 reveló los reinos celestial, terrestre y telestial (D. y C. 76).'),
  tf('tf-n3-2', 3, 'priesthood', 'escrituras', 'El juramento y convenio del sacerdocio se encuentra en Doctrina y Convenios 84.', true, 'D. y C. 84:33–40 describe el juramento y convenio del sacerdocio.'),
  tf('tf-n3-3', 3, 'plan_of_salvation', 'doctrina', 'Según Alma 40, todos los espíritus van directamente al reino celestial al morir.', false, 'Falso: van al mundo de los espíritus — paraíso o prisión — a esperar la resurrección (Alma 40:11–14).'),
  tf('tf-n3-4', 3, 'book_of_mormon', 'escrituras', 'La profecía de los "palos" de Judá y de José se encuentra en Isaías.', false, 'Falso: está en Ezequiel 37:15–17; Isaías profetizó del libro sellado (Isaías 29).'),
  tf('tf-n3-5', 3, 'priesthood', 'escrituras', 'D. y C. 121 enseña que el poder del sacerdocio se ejerce por persuasión y amor sincero.', true, '"Por persuasión, por longanimidad… y por amor sincero" (D. y C. 121:41–42).'),
  tf('tf-n3-6', 3, 'plan_of_salvation', 'doctrina', 'Según 2 Nefi 2, la oposición existe únicamente a causa del pecado de Adán.', false, 'Falso: la oposición es necesaria "en todas las cosas" para que existan el albedrío y la felicidad (2 Nefi 2:11).'),
  tf('tf-n3-7', 3, 'eternal_family', 'cronologia', 'Elías el Profeta apareció en el Templo de Kirtland durante la época de la Pascua de 1836.', true, 'Apareció el 3 de abril de 1836, en plena Pascua, cuando los judíos esperan a Elías (D. y C. 110:13–16).'),
  tf('tf-n3-8', 3, 'ordinances', 'doctrina', 'El convenio abrahámico incluye promesas de posteridad y del sacerdocio.', true, 'Abraham recibió promesas de posteridad, sacerdocio y de bendecir a todas las naciones (Abraham 2:9–11).'),
  tf('tf-n3-9', 3, 'ordinances', 'escrituras', 'Pablo enseñó que el bautismo por los muertos era desconocido en la iglesia primitiva.', false, 'Falso: Pablo lo usó como argumento de la resurrección: "¿qué harán los que se bautizan por los muertos?" (1 Corintios 15:29).'),
  tf('tf-n3-10', 3, 'atonement', 'escrituras', 'La doctrina de la "expiación infinita" se enseña en 2 Nefi 9.', true, 'Jacob enseñó que "debe ser una expiación infinita" (2 Nefi 9:7).'),
]

/* ── ¿QUIÉN SOY? (who_am_i) ──────────────────────────────────────────── */

export const WHO_AM_I_SEED: WhoAmISeed[] = [
  // Nivel 1
  wai('wai-n1-1', 1, 'book_of_mormon', [
    'Salí de Jerusalén con mi familia siendo joven',
    'Obedecí al Señor cuando mis hermanos murmuraban',
    'Construí un barco para cruzar el mar hacia la tierra prometida',
    'Dije: "Iré y haré lo que el Señor ha mandado"',
  ], 'Nefi'),
  wai('wai-n1-2', 1, 'prophets', [
    'Fui pastor de ovejas en Belén',
    'Toqué el arpa para calmar a un rey atormentado',
    'Llegué a ser rey de Israel',
    'Vencí a un gigante con una honda y una piedra',
  ], 'David', ['rey david']),
  wai('wai-n1-3', 1, 'restoration', [
    'Nací en Vermont en 1805',
    'De niño me preguntaba cuál de todas las iglesias era la verdadera',
    'Vi al Padre y al Hijo en una arboleda',
    'Traduje el Libro de Mormón por el don y poder de Dios',
  ], 'José Smith', ['jose smith', 'el profeta jose smith']),
  wai('wai-n1-4', 1, 'prophets', [
    'Prediqué el arrepentimiento durante muchos años sin éxito',
    'La gente se burlaba de la obra que el Señor me mandó hacer',
    'Construí una embarcación enorme lejos del mar',
    'Salvé a mi familia del gran diluvio',
  ], 'Noé', ['noe']),
  wai('wai-n1-5', 1, 'prophets', [
    'Fui criado en el palacio de un rey de Egipto',
    'Vi una zarza que ardía sin consumirse',
    'Guie a Israel fuera de la esclavitud',
    'Recibí los Diez Mandamientos en el monte Sinaí',
  ], 'Moisés', ['moises']),
  // Nivel 2
  wai('wai-n2-1', 2, 'book_of_mormon', [
    'Fui líder de un gran ejército siendo muy joven',
    'Nunca perdí una batalla gracias a mi fe y preparación',
    'Hice una bandera famosa para motivar a mi pueblo a defender su libertad',
    'Si todos los hombres fueran como yo, el diablo no tendría poder',
  ], 'Capitán Moroni', ['moroni', 'el capitan moroni']),
  wai('wai-n2-2', 2, 'prophets', [
    'Fui huérfana, criada por mi primo en el exilio',
    'Llegué a ser reina de Persia',
    'Arriesgué mi vida al presentarme ante el rey sin ser invitada',
    'Salvé a mi pueblo del decreto de Amán',
  ], 'Ester', ['la reina ester']),
  wai('wai-n2-3', 2, 'book_of_mormon', [
    'Regresé a mi ciudad disfrazado para predicar',
    'Testifiqué ante un rey inicuo y sus sacerdotes',
    'Mis palabras convirtieron a un sacerdote llamado Alma',
    'Sellé mi testimonio con la muerte por fuego',
  ], 'Abinadí', ['abinadi']),
  wai('wai-n2-4', 2, 'prophets', [
    'Fui llevado cautivo a Babilonia siendo joven',
    'Interpreté los sueños de un rey',
    'Oré tres veces al día aunque la ley lo prohibía',
    'Dios envió a Su ángel y cerró la boca de los leones',
  ], 'Daniel'),
  wai('wai-n2-5', 2, 'eternal_family', [
    'Dejé mi tierra natal de Moab por amor',
    'Dije: "tu pueblo será mi pueblo, y tu Dios mi Dios"',
    'Espigué en los campos de un hombre llamado Booz',
    'Fui bisabuela del rey David',
  ], 'Rut'),
  // Nivel 3
  wai('wai-n3-1', 3, 'faith_repentance', [
    'En mi juventud perseguí a la Iglesia de Dios',
    'Un ángel me reprendió y quedé sin fuerzas por tres días',
    'Al recordar a Jesucristo, mi alma fue librada del tormento',
    'Llegué a ser el primer juez superior de los nefitas',
  ], 'Alma, hijo de Alma', ['alma', 'alma hijo', 'alma el joven', 'alma hijo de alma']),
  wai('wai-n3-2', 3, 'priesthood', [
    'Prediqué en el desierto de Judea',
    'Vestía pelo de camello y comía langostas y miel silvestre',
    'Bauticé al Hijo de Dios',
    'Restauré el Sacerdocio Aarónico en 1829',
  ], 'Juan el Bautista', ['juan bautista']),
  wai('wai-n3-3', 3, 'eternal_family', [
    'Sellé los cielos para que no lloviera por mi palabra',
    'Desafié a los profetas de Baal en el monte Carmelo',
    'Fui llevado al cielo en un torbellino',
    'Entregué las llaves del sellamiento en el Templo de Kirtland',
  ], 'Elías el Profeta', ['elias', 'elias el profeta']),
  wai('wai-n3-4', 3, 'book_of_mormon', [
    'A los diez años se me encargó cuidar los registros sagrados',
    'Dirigí los ejércitos de mi pueblo desde los dieciséis años',
    'Compendié mil años de historia en planchas de oro',
    'El libro que tradujo José Smith lleva mi nombre',
  ], 'Mormón', ['mormon']),
  wai('wai-n3-5', 3, 'prophets', [
    'Perseguí a los cristianos con cartas de autoridad',
    'Una luz del cielo me detuvo camino a Damasco',
    'Fui llamado como apóstol a los gentiles',
    'Escribí muchas de las epístolas del Nuevo Testamento',
  ], 'Pablo', ['saulo', 'pablo de tarso', 'el apostol pablo']),
  // Nivel 4
  wai('wai-n4-1', 4, 'priesthood', [
    'Fui rey de Salem en los días de Abraham',
    'Mi pueblo se arrepintió por mi predicación y obtuvo la paz',
    'Se me llamó príncipe de paz',
    'El sacerdocio mayor lleva mi nombre',
  ], 'Melquisedec'),
  wai('wai-n4-2', 4, 'plan_of_salvation', [
    'Era lento en el habla y el pueblo me aborrecía',
    'Vi a Dios llorar por Sus hijos',
    'Edifiqué una ciudad tan justa que fue llevada al cielo',
    'Mi ciudad se llamó Sion',
  ], 'Enoc'),
  wai('wai-n4-3', 4, 'book_of_mormon', [
    'Fui sierva de una reina lamanita',
    'Estaba convertida en secreto por una visión de mi padre',
    'Corrí de casa en casa para reunir al pueblo ante el milagro',
    'Tomé la mano de la reina y ella se levantó',
  ], 'Abish'),
  wai('wai-n4-4', 4, 'book_of_mormon', [
    'Mi lenguaje no fue confundido en la gran torre',
    'Llevé a mi pueblo a través del mar en barcos cerrados',
    'Vi el dedo del Señor tocar dieciséis piedras pequeñas',
    'Mi fe era tan grande que no pude ser detenido fuera del velo',
  ], 'El hermano de Jared', ['hermano de jared', 'mahonri moriancumer']),
  wai('wai-n4-5', 4, 'eternal_family', [
    'Se me llamó "la madre de todos los vivientes"',
    'Mi decisión abrió la puerta de la mortalidad',
    'Comprendí que sin la Caída no conoceríamos el gozo de la redención',
    'Mi esposo fue el primer hombre sobre la tierra',
  ], 'Eva'),
]

/* ── ORDENA LOS EVENTOS (order_events) ───────────────────────────────── */

export const ORDER_EVENTS_SEED: OrderEventsSeed[] = [
  // Nivel 1
  oe('oe-n1-1', 1, 'book_of_mormon', [
    'El Señor manda a Lehi salir de Jerusalén',
    'Los hijos regresan por las planchas de bronce',
    'Nefi construye el barco',
    'La familia llega a la tierra prometida',
  ], 'El viaje de la familia de Lehi se narra en 1 Nefi 2–18.'),
  oe('oe-n1-2', 1, 'atonement', [
    'Jesús nace en Belén',
    'Es bautizado por Juan en el Jordán',
    'Sufre en Getsemaní',
    'Resucita al tercer día',
  ], 'La vida del Salvador culmina en Su expiación y resurrección (Lucas 2; Mateo 3; Lucas 22–24).'),
  oe('oe-n1-3', 1, 'restoration', [
    'La Primera Visión (1820)',
    'Moroni visita a José Smith (1823)',
    'José recibe las planchas (1827)',
    'Se organiza la Iglesia (1830)',
  ], 'Los hitos de la Restauración abarcan una década (José Smith—Historia).'),
  oe('oe-n1-4', 1, 'plan_of_salvation', [
    'Dios crea la tierra',
    'Adán y Eva viven en el Jardín de Edén',
    'La Caída',
    'Adán y Eva forman una familia y ofrecen sacrificios',
  ], 'La Creación y la Caída abrieron el camino del plan de salvación (Génesis 1–4; Moisés 5).'),
  oe('oe-n1-5', 1, 'prophets', [
    'José recibe la túnica de su padre',
    'Es vendido por sus hermanos',
    'Interpreta los sueños de Faraón',
    'Salva a su familia del hambre',
  ], 'La historia de José de Egipto muestra cómo Dios convierte la adversidad en bendición (Génesis 37–45).'),
  // Nivel 2
  oe('oe-n2-1', 2, 'plan_of_salvation', [
    'Vida preterrenal con Dios',
    'Nacimiento y vida terrenal',
    'Mundo de los espíritus',
    'Resurrección y juicio final',
  ], 'El plan de salvación traza nuestro recorrido eterno (Alma 40; D. y C. 76).'),
  oe('oe-n2-2', 2, 'faith_repentance', [
    'Alma persigue a la Iglesia',
    'Un ángel lo reprende',
    'Tres días sin fuerzas; se arrepiente y nace de nuevo',
    'Predica el evangelio y llega a ser juez superior',
  ], 'La conversión de Alma, hijo, es un modelo del poder del arrepentimiento (Mosíah 27; Alma 36).'),
  oe('oe-n2-3', 2, 'ordinances', [
    'Las plagas caen sobre Egipto',
    'La primera Pascua protege a Israel',
    'Israel cruza el mar Rojo',
    'Moisés recibe los Diez Mandamientos',
  ], 'El Éxodo prefigura la redención: la sangre del cordero, el agua y la ley (Éxodo 7–20).'),
  oe('oe-n2-4', 2, 'book_of_mormon', [
    'Destrucción y tres días de oscuridad',
    'La voz del Padre presenta a Su Hijo',
    'La multitud palpa las heridas del Salvador',
    'Jesús llama a doce discípulos',
  ], 'El ministerio del Cristo resucitado entre los nefitas (3 Nefi 8–12).'),
  oe('oe-n2-5', 2, 'priesthood', [
    'José y Oliver oran acerca del bautismo',
    'Juan el Bautista les confiere el Sacerdocio Aarónico',
    'Se bautizan el uno al otro en el Susquehanna',
    'Pedro, Santiago y Juan confieren el Sacerdocio de Melquisedec',
  ], 'La autoridad fue restaurada por mensajeros celestiales en 1829 (D. y C. 13; 27:12; JS—Historia 1:68–72).'),
  // Nivel 3
  oe('oe-n3-1', 3, 'restoration', [
    'Muerte de los apóstoles originales',
    'La Gran Apostasía se extiende',
    'La Reforma prepara el terreno',
    'La Primera Visión inicia la Restauración',
  ], 'Siglos de preparación precedieron a la Restauración (2 Tesalonicenses 2:3; Amós 8:11–12).'),
  oe('oe-n3-2', 3, 'baptism', [
    'Abinadí testifica ante el rey Noé',
    'Alma cree sus palabras y es expulsado',
    'Alma bautiza en las aguas de Mormón',
    'El pueblo de Alma escapa de los ejércitos del rey',
  ], 'Del testimonio de un solo profeta nació una comunidad de conversos (Mosíah 17–18, 23).'),
  oe('oe-n3-3', 3, 'eternal_family', [
    'El Señor manda construir el Templo de Kirtland',
    'El templo es dedicado (marzo de 1836)',
    'El Salvador acepta Su casa',
    'Moisés, Elías y Elías el Profeta entregan las llaves',
  ], 'La dedicación de Kirtland culminó con la restauración de llaves esenciales (D. y C. 95; 109; 110).'),
  oe('oe-n3-4', 3, 'atonement', [
    'Entrada triunfal en Jerusalén',
    'La Última Cena',
    'Getsemaní y el arresto',
    'Crucifixión y sepultura',
  ], 'La última semana del ministerio terrenal del Salvador (Mateo 21–27).'),
  oe('oe-n3-5', 3, 'book_of_mormon', [
    'Moroni entierra las planchas (~421 d.C.)',
    'José Smith recibe las planchas (1827)',
    'Se completa la traducción (1829)',
    'Se publica el Libro de Mormón (1830)',
  ], 'El registro esperó catorce siglos para salir a luz (Mormón 8; José Smith—Historia).'),
]
