/**
 * Datos semilla: catálogo unificado de módulos y lecciones (sin iframes).
 */
import { elSellamiento as lessonElSellamiento } from '@/data/lessons/el-sellamiento'
import { sacerdocioAaonico as lessonSacerdocioAaonico } from '@/data/lessons/sacerdocio-aaonico'
import { elDiacono as lessonElDiacono } from '@/data/lessons/el-diacono'
import { elMaestro as lessonElMaestro } from '@/data/lessons/el-maestro'
import { elPresbitero as lessonElPresbitero } from '@/data/lessons/el-presbitero'
import { elElder as lessonElElder } from '@/data/lessons/el-elder'
import { elSumoSacerdote as lessonElSumoSacerdote } from '@/data/lessons/el-sumo-sacerdote'
import { elPatriarca as lessonElPatriarca } from '@/data/lessons/el-patriarca'
import { lessonKingFollett } from '@/data/lessons/king-follett'
import { laExpiacionDelSalvador as lessonLaExpiacionDelSalvador } from '@/data/lessons/la-expiacion-del-salvador'
import { santaCena as lessonSantaCena } from '@/data/lessons/santa-cena'
import { elBautismo as lessonElBautismo } from '@/data/lessons/el-bautismo'
import { elDonDelEspirituSanto as lessonDonEspirituSanto } from '@/data/lessons/el-don-del-espiritu-santo'
import { laFePrincipioDePoder as lessonFePrincipioPoder } from '@/data/lessons/la-fe-principio-de-poder'
import { elArrepentimientoReal as lessonArrepentimiento } from '@/data/lessons/el-arrepentimiento-real'
import { laResurreccionYLosReinos as lessonResurreccion } from '@/data/lessons/la-resurreccion-y-los-reinos'
import { laProclamacionFamilia as lessonProclamacionFamilia } from '@/data/lessons/la-proclamacion-familia'
import { laOracion as lessonOracion } from '@/data/lessons/la-oracion'
import { elEstudioEscrituras as lessonEstudioEscrituras } from '@/data/lessons/el-estudio-escrituras'
import { elMinisterioEnElHogar as lessonMinisterio } from '@/data/lessons/el-ministerio-en-el-hogar'
import { vestimentaSacerdocio as lessonVestimenta } from '@/data/lessons/vestimenta-sacerdocio'
import { laPrimeraVision as lessonPrimeraVision } from '@/data/lessons/la-primera-vision'
import { laGranApostasia as lessonGranApostasia } from '@/data/lessons/la-gran-apostasia'
import { elLibroDeMormon as lessonLibroDeMormon } from '@/data/lessons/el-libro-de-mormon'
import { elSacerdocio as lessonSacerdocio } from '@/data/lessons/el-sacerdocio'
import { elTemplo as lessonTemplo } from '@/data/lessons/el-templo'
import { laPreexistencia as lessonPreexistencia } from '@/data/lessons/la-preexistencia'
import { elPlanDeSalvacion as lessonPlanSalvacion } from '@/data/lessons/el-plan-de-salvacion'
import { justiciaYMisericordia as lessonJusticiaMisericordia } from '@/data/lessons/justicia-y-misericordia'
import { losConveniosEternos as lessonConvenios } from '@/data/lessons/los-convenios-eternos'
import { liderazgoSegunElEvangelio as lessonLiderazgo } from '@/data/lessons/liderazgo-segun-el-evangelio'
import { misionYTestimonio as lessonMisionTestimonio } from '@/data/lessons/mision-y-testimonio'
import { visionDC76 as lessonVisionDC76 } from '@/data/lessons/vision-dc-76'
import { visionTresReinos as lessonVisionTresReinos } from '@/data/lessons/vision-tres-reinos'
import { juanTresNefitasApostasia as lessonJuanTresNefitas } from '@/data/lessons/juan-tres-nefitas-apostasia'
import { porQueDiosPermiteElSufrimiento as lessonSufrimiento } from '@/data/lessons/por-que-dios-permite-el-sufrimiento'
import { laSalvacionDeLosNoBautizados as lessonNoBautizados } from '@/data/lessons/la-salvacion-de-los-no-bautizados'
import { almaElJoven as lessonAlmaElJoven } from '@/data/lessons/alma-el-joven'
import { joseDeEgipto as lessonJoseDeEgipto } from '@/data/lessons/jose-de-egipto'
import { abraham as lessonAbraham } from '@/data/lessons/abraham'
import { elCirculoDeJesus as lessonElCirculoDeJesus } from '@/data/lessons/el-circulo-de-jesus'
import { adanMiguelArcangel as lessonAdanMiguelArcangel } from '@/data/lessons/adan-miguel-arcangel'
import { adanElCreador as lessonAdanElCreador } from '@/data/lessons/adan-el-creador'
import { laCaidaElActoMasValiente as lessonLaCaida } from '@/data/lessons/la-caida-el-acto-mas-valiente'
import { evaLaMadreQueEntendio as lessonEvaLaMadre } from '@/data/lessons/eva-la-madre-que-entendio-primero'
import { adanOndiAhman as lessonAdanOndiAhman } from '@/data/lessons/adan-ondi-ahman'
import { jesusElHombre as lessonJesusElHombre } from '@/data/lessons/jesus-el-hombre'
import { jesusElCristo as lessonJesusElCristo } from '@/data/lessons/jesus-el-cristo'
import { cristoLibroDeMormonVsBiblia as lessonCristoLdMVsBiblia } from '@/data/lessons/cristo-libro-de-mormon-vs-biblia'
import { losYoSoyDeCristo as lessonLosYoSoy } from '@/data/lessons/los-yo-soy-de-cristo'
import { laResurreccionDeCristo as lessonResurreccionCristo } from '@/data/lessons/la-resurreccion-de-cristo'
import { suGraciaEsSuficiente as lessonSuGracia } from '@/data/lessons/su-gracia-es-suficiente'
import type { DifficultyLevel, DoctrinalModule, Lesson, LessonStatus } from '@/types/doctrine'

type LessonRow = {
  id: string
  moduleId: string
  title: string
  subtitle?: string
  description: string
  level: DifficultyLevel
  icon: string
  duration: number
  order: number
  status: LessonStatus
  submoduleGroup?: string
}

export const SUBMODULE_GROUPS: Record<string, { title: string; description: string; icon: string }> = {
  jesucristo: {
    title: 'Jesucristo — Centro de Todo',
    description:
      'El Salvador del mundo visto desde todos los ángulos: su vida mortal, su naturaleza divina, su presencia en los cuatro evangelios, en 3 Nefi y en la voz de los profetas.',
    icon: '🌅',
  },
  'adan-eva': {
    title: 'Adán y Eva — Los Primeros Padres',
    description:
      'El padre y la madre de todo el género humano — Miguel el Arcángel que fue Adán, la Caída como el acto más valiente de la historia, y el papel de Eva que el mundo malentendió durante milenios.',
    icon: '🌱',
  },
}

const MODULE_ROWS: Omit<DoctrinalModule, 'lessonIds'>[] = [
  {
    id: 'doctrina-fundamental',
    title: 'Doctrina Fundamental',
    description:
      'Los principios esenciales del Evangelio de Jesucristo: fe, arrepentimiento, bautismo, don del Espíritu Santo y la Expiación.',
    icon: '⚡',
    order: 1,
    level: 'BÁSICO',
    usePurpleAccent: false,
  },
  {
    id: 'vida-familiar-personal',
    title: 'Vida Familiar y Personal',
    description: 'Oración, estudio de las Escrituras y el evangelio en el hogar.',
    icon: '👨‍👩‍👧‍👦',
    order: 2,
    level: 'BÁSICO',
    usePurpleAccent: false,
  },
  {
    id: 'historia-restauracion',
    title: 'Historia y Restauración',
    description: 'La Primera Visión, la Gran Apostasía y la restauración del Evangelio.',
    icon: '🌳',
    order: 3,
    level: 'INTERMEDIO',
    usePurpleAccent: false,
  },
  {
    id: 'doctrina-avanzada-carne',
    title: 'Doctrina Avanzada — La Carne del Evangelio',
    description: 'Temas profundos: sacerdocio, templo, preexistencia y plan de salvación.',
    icon: '👑',
    order: 4,
    level: 'AVANZADO',
    usePurpleAccent: true,
  },
  {
    id: 'lideres-misioneros',
    title: 'Para Líderes y Misioneros',
    description: 'Servir, enseñar y llevar el mensaje con poder.',
    icon: '🎯',
    order: 5,
    level: 'INTERMEDIO',
    usePurpleAccent: false,
  },
  {
    id: 'discursos-sermones-clasicos',
    title: 'Discursos y Sermones Clásicos',
    description: 'Estudio profundo de discursos históricos y conferencias memorables.',
    icon: '📜',
    order: 6,
    level: 'AVANZADO',
    usePurpleAccent: true,
  },
  {
    id: 'temas-profundos',
    title: 'Preguntas Profundas',
    description:
      'Doctrinas que pocas clases responden: paradojas teológicas, preguntas difíciles, y temas que los estudiantes serios necesitan enfrentar con honestidad y fe.',
    icon: '🔭',
    order: 7,
    level: 'AVANZADO',
    usePurpleAccent: true,
  },
  {
    id: 'personajes-escrituras',
    title: 'Personajes de las Escrituras',
    description:
      'Estudios de vida de los grandes personajes de la Biblia, el Libro de Mormón y DyC: sus fortalezas, sus caídas, sus conversiones, y lo que cada uno revela sobre el carácter de Dios.',
    icon: '🧬',
    order: 8,
    level: 'INTERMEDIO',
    usePurpleAccent: false,
    categoryLabel: 'PERSONAJE PRINCIPAL',
  },
  {
    id: 'sacerdocio',
    title: 'El Sacerdocio',
    description:
      'Cada oficio del Sacerdocio Aarónico y de Melquisedec: su teología, su historia y su práctica en la Iglesia. Desde el Diácono de 12 años hasta el Patriarca que pronuncia bendiciones eternas.',
    icon: '🔑',
    order: 9,
    level: 'INTERMEDIO',
    usePurpleAccent: true,
    categoryLabel: 'OFICIO',
  },
]

const LESSON_ROWS: LessonRow[] = [
  {
    id: 'santa-cena',
    moduleId: 'sacerdocio',
    title: 'La Santa Cena',
    subtitle: 'Convenio y poder renovados',
    description: 'El pan y el agua, la memoria del Salvador, y los convenios que renovamos cada semana. Autoridad del sacerdocio, oraciones reveladas y el orden completo de la distribución.',
    level: 'INTERMEDIO',
    icon: '🍷',
    duration: 60,
    order: 6,
    status: 'PUBLISHED',
  },
  {
    id: 'bautismo',
    moduleId: 'doctrina-fundamental',
    title: 'El Bautismo',
    subtitle: 'Nacimiento de nuevo por agua y por el Espíritu',
    description: 'La primera ordenanza del evangelio: la puerta al camino estrecho, el convenio en las aguas, y el nacimiento espiritual que transforma al hombre viejo en hombre nuevo.',
    level: 'BÁSICO',
    icon: '💧',
    duration: 50,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'arrepentimiento',
    moduleId: 'doctrina-fundamental',
    title: 'El Arrepentimiento Real',
    subtitle: 'El milagro más grande disponible en la mortalidad',
    description: 'El arrepentimiento genuino según Spencer W. Kimball y las Escrituras: reconocimiento, tristeza según Dios, abandono total, confesión, restitución, y cómo la Expiación actúa exactamente en el alma del penitente. D&C 19, Alma 36, Enos, Mosíah 4.',
    level: 'INTERMEDIO',
    icon: '🔄',
    duration: 90,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'don-espiritu-santo',
    moduleId: 'doctrina-fundamental',
    title: 'El Don del Espíritu Santo',
    subtitle: 'El mayor don que Dios da a sus hijos en mortalidad',
    description: 'El tercer miembro de la Divinidad, sus funciones como Consolador y Santificador, la diferencia entre su influencia y su don, y cómo cultivar su compañía constante.',
    level: 'BÁSICO',
    icon: '🕊️',
    duration: 60,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'fe-principio-poder',
    moduleId: 'doctrina-fundamental',
    title: 'La Fe como Principio de Poder',
    subtitle: 'La causa motriz de toda acción en el universo',
    description: 'Las Lecciones de Fe como fuente principal: la fe como principio motor, las tres cosas necesarias para fe en Dios, el experimento de Alma 32, y Éter 12 sobre la fe que produce milagros.',
    level: 'BÁSICO',
    icon: '🌟',
    duration: 65,
    order: 5,
    status: 'PUBLISHED',
  },
  {
    id: 'la-expiacion-del-salvador',
    moduleId: 'doctrina-fundamental',
    title: 'La Expiación del Salvador',
    subtitle: 'Guía de estudio profundo',
    description:
      'Estudio lineal del plan de salvación, la Caída, la justicia y la misericordia, centrado en la Expiación de Jesucristo.',
    level: 'BÁSICO',
    icon: '✝️',
    duration: 120,
    order: 6,
    status: 'PUBLISHED',
  },
  {
    id: 'resurreccion-tres-reinos',
    moduleId: 'doctrina-fundamental',
    title: 'La Resurrección y los Tres Reinos de Gloria',
    subtitle: 'Lo que Dios reveló sobre la eternidad',
    description: 'DyC 76 y 1 Corintios 15: la resurrección universal y los tres destinos eternos de gloria revelados a José Smith.',
    level: 'AVANZADO',
    icon: '✨',
    duration: 80,
    order: 7,
    status: 'PUBLISHED',
  },
  {
    id: 'proclamacion-familia',
    moduleId: 'vida-familiar-personal',
    title: 'La Proclamación sobre la Familia',
    subtitle: 'El hogar como centro del plan eterno',
    description: 'El género eterno, el matrimonio como ordenanza divina, los roles del padre y la madre, y por qué la familia es la unidad fundamental de la eternidad.',
    level: 'BÁSICO',
    icon: '🏠',
    duration: 55,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'la-oracion',
    moduleId: 'vida-familiar-personal',
    title: 'La Oración',
    subtitle: 'El don más sublime — comunicación con el Padre',
    description: 'Cómo orar, qué esperar, qué hacer cuando el cielo parece cerrado, y cómo vivir en oración continua. Holland, Scott, Bednar, Alma 34, 3 Nefi 18.',
    level: 'BÁSICO',
    icon: '🕯️',
    duration: 65,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'estudio-escrituras',
    moduleId: 'vida-familiar-personal',
    title: 'El Estudio de las Escrituras',
    subtitle: 'Banquetear en las palabras de Cristo',
    description: 'Cómo pasar de leer a banquetear: el Libro de Mormón como caso especial, el Espíritu como maestro, y el hábito diario que construye el testimonio robusto. Bednar, Benson, DyC 18.',
    level: 'BÁSICO',
    icon: '📖',
    duration: 60,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'ministerio-en-el-hogar',
    moduleId: 'vida-familiar-personal',
    title: 'El Ministerio en el Hogar',
    subtitle: 'Cuidar como Cristo cuidó',
    description: 'Del checklist mensual al amor genuino: la diferencia entre enseñanza en el hogar y el ministerio real, la parábola de la oveja perdida, y cómo ministrar en los momentos que importan.',
    level: 'BÁSICO',
    icon: '❤️',
    duration: 50,
    order: 4,
    status: 'PUBLISHED',
  },
  {
    id: 'el-sellamiento',
    moduleId: 'vida-familiar-personal',
    title: 'El Sellamiento',
    subtitle: 'La autoridad que une las eternidades',
    description:
      'El sellamiento del templo no es una boda religiosa más. Es la ordenanza más alta del sacerdocio de Melquisedec — une a un hombre y una mujer por el tiempo y toda la eternidad, fue restaurada por Elías en 1836, y abre la única puerta a la exaltación en el reino celestial.',
    level: 'AVANZADO',
    icon: '💍',
    duration: 90,
    order: 5,
    status: 'PUBLISHED',
  },
  {
    id: 'vestimenta-sacerdocio',
    moduleId: 'sacerdocio',
    title: 'Vestimenta y Preparación para el Sacerdocio',
    subtitle: 'Cómo honramos al Señor en cómo nos presentamos',
    description:
      'La camisa blanca no es un mandamiento — es una expresión de reverencia. Por qué nos preparamos físicamente para representar al Señor, cuándo hacerlo, cómo adaptarlo al contexto, y cómo enseñarlo en el hogar.',
    level: 'BÁSICO',
    icon: '👔',
    duration: 45,
    order: 10,
    status: 'PUBLISHED',
  },
  {
    id: 'primera-vision',
    moduleId: 'historia-restauracion',
    title: 'La Primera Visión',
    subtitle: 'La apertura de la última dispensación',
    description: 'Quién era José antes del bosque, el Distrito Quemado de 1820, lo que ocurrió esa mañana, los cinco relatos y sus diferencias, las doctrinas reveladas en 30 segundos, y cómo obtener tu propio testimonio.',
    level: 'INTERMEDIO',
    icon: '✨',
    duration: 90,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'gran-apostasia',
    moduleId: 'historia-restauracion',
    title: 'La Gran Apostasía',
    subtitle: 'Por qué la Restauración era necesaria',
    description: 'La pérdida de la autoridad del sacerdocio y las llaves de revelación. Por qué la reforma no era suficiente, los cuatro elementos perdidos, y la dispensación de la plenitud de los tiempos.',
    level: 'BÁSICO',
    icon: '🍂',
    duration: 55,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'libro-de-mormon-reliquia',
    moduleId: 'historia-restauracion',
    title: 'El Libro de Mormón — Piedra Angular',
    subtitle: 'Otro testamento de Jesucristo',
    description: 'El origen del libro, los once testigos, su contenido centrado en Cristo, y la promesa de Moroni 10:4. Por qué Benson dijo que acerca más a Dios que cualquier otro libro.',
    level: 'BÁSICO',
    icon: '📜',
    duration: 65,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'sacerdocio-autoridad-poder',
    moduleId: 'sacerdocio',
    title: 'El Sacerdocio — Autoridad y Poder',
    subtitle: 'Las dos mitades que la mayoría confunde',
    description: 'La distinción de Nelson entre autoridad (ordenación) y poder (rectitud), los dos sacerdocios y sus funciones, las llaves y quién las tiene. DyC 84, 107, 121.',
    level: 'AVANZADO',
    icon: '🔑',
    duration: 70,
    order: 1,
    status: 'PUBLISHED',
  },
  // ── MÓDULO SACERDOCIO — los 7 oficios ───────────────────────────────────────
  {
    id: 'sacerdocio-aaonico',
    moduleId: 'sacerdocio',
    title: 'El Sacerdocio Aarónico',
    subtitle: 'El sacerdocio preparatorio y sus tres oficios',
    description:
      'El Sacerdocio Aarónico, restaurado por Juan el Bautista, es la base del ministerio en la Iglesia. Sus tres oficios — Diácono, Maestro y Presbítero — preparan a hombres jóvenes para una vida de servicio.',
    level: 'BÁSICO',
    icon: '⚡',
    duration: 40,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'el-diacono',
    moduleId: 'sacerdocio',
    title: 'El Diácono',
    subtitle: 'El primero en servicio — la puerta del sacerdocio',
    description:
      'El diácono es el primer oficio del sacerdocio. A los 12 años, el Padre Celestial confía en un joven para administrar la ordenanza más frecuente de la Iglesia y servir a su comunidad.',
    level: 'BÁSICO',
    icon: '🚶',
    duration: 35,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'el-maestro',
    moduleId: 'sacerdocio',
    title: 'El Maestro',
    subtitle: 'Preparar el camino — velar sobre la Iglesia',
    description:
      'El Maestro es el segundo oficio del Sacerdocio Aarónico. Prepara la mesa de la Santa Cena, ministeriza a los miembros y vela activamente que no haya contención en la Iglesia.',
    level: 'BÁSICO',
    icon: '🛡️',
    duration: 35,
    order: 4,
    status: 'PUBLISHED',
  },
  {
    id: 'el-presbitero',
    moduleId: 'sacerdocio',
    title: 'El Presbítero',
    subtitle: 'El oficio más alto del Sacerdocio Aarónico',
    description:
      'El Presbítero es la cima del Sacerdocio Aarónico. Bendice la Santa Cena, bautiza y puede ordenar a otros. Su autoridad es la de un ministro de convenios.',
    level: 'INTERMEDIO',
    icon: '🙏',
    duration: 40,
    order: 5,
    status: 'PUBLISHED',
  },
  {
    id: 'el-elder',
    moduleId: 'sacerdocio',
    title: 'El Élder',
    subtitle: 'El primer oficio del Sacerdocio de Melquisedec',
    description:
      'El Élder recibe la plenitud del sacerdocio con autoridad para administrar todas las ordenanzas de salvación, dar bendiciones de sanación, servir misión y presidir en la Iglesia.',
    level: 'INTERMEDIO',
    icon: '🔑',
    duration: 45,
    order: 7,
    status: 'PUBLISHED',
  },
  {
    id: 'el-sumo-sacerdote',
    moduleId: 'sacerdocio',
    title: 'El Sumo Sacerdote',
    subtitle: 'El oficio que preside en la Iglesia de Cristo',
    description:
      'El Sumo Sacerdote es el oficio más alto del sacerdocio ordinario. Preside en la Iglesia, tiene responsabilidad por las ordenanzas del templo, y lleva el tipo del Gran Sumo Sacerdote: Jesucristo.',
    level: 'AVANZADO',
    icon: '👑',
    duration: 50,
    order: 8,
    status: 'PUBLISHED',
  },
  {
    id: 'el-patriarca',
    moduleId: 'sacerdocio',
    title: 'El Patriarca',
    subtitle: 'El Evangelista — Mensajero Personal de Dios',
    description:
      'El Patriarca es el "Evangelista" en el lenguaje del Nuevo Testamento. Su ministerio es profético y personal: pronunciar bendiciones patriarcales que declaran el linaje tribal, promesas eternas y advertencias bajo la dirección del Espíritu.',
    level: 'AVANZADO',
    icon: '📜',
    duration: 40,
    order: 9,
    status: 'PUBLISHED',
  },
  {
    id: 'templo-casa-del-senor',
    moduleId: 'doctrina-avanzada-carne',
    title: 'El Templo — La Casa del Señor',
    subtitle: 'Donde el tiempo y la eternidad se tocan',
    description: 'El endowment, el sellamiento y el trabajo vicario por los muertos. DyC 84, 128, 132 y Russell M. Nelson sobre por qué nuestro futuro espiritual depende de nuestra relación con el templo.',
    level: 'AVANZADO',
    icon: '🏛️',
    duration: 75,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'preexistencia',
    moduleId: 'doctrina-avanzada-carne',
    title: 'La Preexistencia',
    subtitle: 'Quiénes éramos antes de nacer',
    description: 'Vivimos con Dios antes de nacer: Abraham 3, la guerra en el cielo, por qué elegiste venir a la mortalidad y las cinco implicaciones prácticas de esta doctrina para tu identidad y propósito.',
    level: 'AVANZADO',
    icon: '⭐',
    duration: 60,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'plan-de-salvacion',
    moduleId: 'doctrina-avanzada-carne',
    title: 'El Plan de Salvación',
    subtitle: 'La arquitectura de la eternidad',
    description: 'El plan de felicidad: las seis etapas de la existencia, la Caída como acto necesario, y la Expiación como eje central. Alma 42, 2 Nefi 2, DyC 76.',
    level: 'AVANZADO',
    icon: '🗺️',
    duration: 70,
    order: 4,
    status: 'PUBLISHED',
  },
  {
    id: 'justicia-y-misericordia',
    moduleId: 'doctrina-avanzada-carne',
    title: 'Justicia y Misericordia',
    subtitle: 'Equilibradas en Cristo',
    description: 'El dilema más profundo del universo: cómo Cristo satisface ambas simultáneamente. Alma 42, DyC 19 — el precio ya pagado, el arrepentido vs. el no arrepentido.',
    level: 'AVANZADO',
    icon: '⚖️',
    duration: 65,
    order: 5,
    status: 'PUBLISHED',
  },
  {
    id: 'convenios-eternos',
    moduleId: 'doctrina-avanzada-carne',
    title: 'Los Convenios Eternos',
    subtitle: 'Los lazos que nos atan a Cristo',
    description: 'La escalera de los convenios: bautismo, Santa Cena, sacerdocio, endowment y sellamiento. Por qué romper un convenio es grave y cómo se renueva a través del arrepentimiento. DyC 82, 84, 132.',
    level: 'AVANZADO',
    icon: '🔗',
    duration: 65,
    order: 6,
    status: 'PUBLISHED',
  },
  {
    id: 'liderazgo-segun-el-evangelio',
    moduleId: 'lideres-misioneros',
    title: 'Liderazgo según el Evangelio',
    subtitle: 'Servir, no ser servido',
    description: 'DyC 121: los poderes del cielo solo se manejan sobre principios de justicia. Los siete principios del liderazgo del evangelio vs. el control y el dominio. El modelo de Cristo lavando los pies.',
    level: 'INTERMEDIO',
    icon: '🧭',
    duration: 65,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'mision-y-testimonio',
    moduleId: 'lideres-misioneros',
    title: 'Misión y Testimonio',
    subtitle: 'Proclamar con claridad y amor',
    description: 'DyC 18:15-16 sobre el valor de una sola alma. La promesa de Moroni 10:4-5. DyC 42:14 y 2 Nefi 33:1 sobre enseñar con el Espíritu.',
    level: 'INTERMEDIO',
    icon: '📣',
    duration: 60,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'king-follett',
    moduleId: 'discursos-sermones-clasicos',
    title: 'El Sermón de King Follett',
    subtitle: 'Nauvoo, 7 de abril de 1844',
    description:
      'Último gran discurso doctrinal del Profeta José Smith: naturaleza de Dios, inteligencia y destino eterno.',
    level: 'AVANZADO',
    icon: '📜',
    duration: 150,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'vision-dc-76',
    moduleId: 'discursos-sermones-clasicos',
    title: 'La Visión — Doctrina y Convenios 76',
    subtitle: 'Hiram, Ohio, 16 de febrero de 1832',
    description: 'Joseph Smith y Sidney Rigdon en la granja de John Johnson. Las cinco visiones, el testimonio de Philo Dibble, y la recepción de una revelación que desmontó siglos de teología cristiana sobre el cielo y el infierno.',
    level: 'AVANZADO',
    icon: '🌌',
    duration: 70,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'vision-tres-reinos',
    moduleId: 'discursos-sermones-clasicos',
    title: 'Los Tres Reinos de Gloria — Estudio Profundo',
    subtitle: 'Enseñanza complementaria al plan de salvación',
    description: 'Del fragmentario testimonio de Pablo (2 Cor 12, 1 Cor 15) a la revelación plena de DyC 76: quiénes entran a cada reino, qué reciben, y qué implica para la misión y la vida diaria.',
    level: 'AVANZADO',
    icon: '✨',
    duration: 55,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'su-gracia-es-suficiente',
    moduleId: 'discursos-sermones-clasicos',
    title: 'Su Gracia es Suficiente',
    subtitle: 'Brad Wilcox · Devocional BYU, 12 de julio de 2011',
    description: 'El discurso que cambió la manera en que millones entienden la gracia: análisis profundo de la analogía del piano, la diferencia entre ser salvado DE vs PARA el pecado, y por qué la gracia no es un cheque en blanco sino una transformación activa.',
    level: 'BÁSICO',
    icon: '🎹',
    duration: 75,
    order: 4,
    status: 'PUBLISHED',
  },
  {
    id: 'juan-tres-nefitas-apostasia',
    moduleId: 'temas-profundos',
    title: 'Juan el Amado y los Tres Nefitas durante la Apostasía',
    subtitle: '¿Por qué no la restauraron ellos?',
    description:
      'Si Juan el Amado y los Tres Nefitas estaban vivos con autoridad del sacerdocio durante toda la apostasía, ¿por qué Dios declaró que no había autoridad en la tierra? La distinción entre poseer el sacerdocio y tener llaves de jurisdicción — y el giro que lo cambia todo: Juan YA participó en la Restauración.',
    level: 'AVANZADO',
    icon: '🔑',
    duration: 80,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'por-que-dios-permite-el-sufrimiento',
    moduleId: 'temas-profundos',
    title: '¿Por qué Dios Permite el Sufrimiento?',
    subtitle: 'La pregunta más difícil de la teología',
    description:
      'El sufrimiento de los inocentes es el argumento más antiguo contra la existencia de un Dios bueno y poderoso. El evangelio restaurado no esquiva la pregunta — la responde desde ángulos que el cristianismo tradicional no tenía.',
    level: 'AVANZADO',
    icon: '⚖️',
    duration: 75,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'la-salvacion-de-los-no-bautizados',
    moduleId: 'temas-profundos',
    title: 'La Salvación de los No Bautizados',
    subtitle: '¿Qué pasa con los que nunca oyeron el evangelio?',
    description:
      '100 mil millones de personas han vivido en la Tierra. La mayoría murió sin bautismo. ¿Las condena Dios? DyC 137, 138 y el trabajo vicario del templo como respuesta completa.',
    level: 'AVANZADO',
    icon: '🌊',
    duration: 70,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'jesus-el-hombre',
    moduleId: 'personajes-escrituras',
    submoduleGroup: 'jesucristo',
    title: 'Jesús el Hombre',
    subtitle: 'La vida que nadie nos contó',
    description:
      'Antes de ser el Cristo resucitado, fue un niño en una aldea de Galilea, un τέκτων con callos en las manos, hermano de Santiago, amigo de Lázaro, el hombre que lloró.',
    level: 'BÁSICO',
    icon: '🪚',
    duration: 60,
    order: 10,
    status: 'PUBLISHED',
  },
  {
    id: 'jesus-el-cristo',
    moduleId: 'personajes-escrituras',
    submoduleGroup: 'jesucristo',
    title: 'Jesús el Cristo',
    subtitle: 'El Ser que creó los cielos',
    description:
      'El hombre de Nazaret era también el Jehová del Antiguo Testamento, el Creador de mundos sin número, el Logos que existía antes de Abraham.',
    level: 'AVANZADO',
    icon: '⭐',
    duration: 90,
    order: 11,
    status: 'PUBLISHED',
  },
  {
    id: 'cristo-libro-de-mormon-vs-biblia',
    moduleId: 'personajes-escrituras',
    submoduleGroup: 'jesucristo',
    title: 'Cristo: Libro de Mormón vs. Biblia',
    subtitle: 'Dos testamentos, un Salvador',
    description:
      'El Libro de Mormón menciona a Cristo más de 2,500 veces. Esta lección compara lo que cada escritura aporta al retrato del Salvador.',
    level: 'INTERMEDIO',
    icon: '📚',
    duration: 70,
    order: 12,
    status: 'PUBLISHED',
  },
  {
    id: 'los-yo-soy-de-cristo',
    moduleId: 'personajes-escrituras',
    submoduleGroup: 'jesucristo',
    title: 'Yo Soy',
    subtitle: 'Los siete nombres divinos de Cristo en Juan',
    description:
      'En el Evangelio de Juan, Jesús hace siete declaraciones "Yo soy + atributo". Cada una es un eco del nombre divino de Éxodo 3:14 y revela una dimensión diferente de quién es Cristo.',
    level: 'AVANZADO',
    icon: '🔆',
    duration: 65,
    order: 13,
    status: 'PUBLISHED',
  },
  {
    id: 'la-resurreccion-de-cristo',
    moduleId: 'personajes-escrituras',
    submoduleGroup: 'jesucristo',
    title: 'La Resurrección',
    subtitle: 'El hecho que cambia todo',
    description:
      'La Resurrección no es el final feliz de una historia triste — es el eje sobre el que gira toda la fe cristiana. Recorre las apariciones del Cristo resucitado: María Magdalena, Emaús, Tomás, 3 Nefi, José Smith.',
    level: 'INTERMEDIO',
    icon: '🌄',
    duration: 65,
    order: 14,
    status: 'PUBLISHED',
  },
  {
    id: 'el-circulo-de-jesus',
    moduleId: 'personajes-escrituras',
    submoduleGroup: 'jesucristo',
    title: 'El Círculo de Jesús',
    subtitle: 'Las personas que lo rodearon — historia, escritura y restauración',
    description:
      'Un estudio histórico-escritural exhaustivo de todos los que rodearon a Jesús: su familia nuclear y extendida, el linaje davídico, las Marías, los apóstoles-familiares, y los desposyni que lideraron la Iglesia primitiva.',
    level: 'AVANZADO',
    icon: '🕊️',
    duration: 120,
    order: 15,
    status: 'PUBLISHED',
  },
  // ── ADÁN Y EVA SUBMODULO ─────────────────────────────────────────────────
  {
    id: 'adan-miguel-arcangel',
    moduleId: 'personajes-escrituras',
    submoduleGroup: 'adan-eva',
    title: 'Adán: Miguel el Arcángel',
    subtitle: 'El héroe de la guerra en el cielo',
    description:
      'Antes de ser el primer hombre de la Tierra, fue el más grande espíritu creado: Miguel, el arcángel que derrotó a Lucifer, el Anciano de Días de Daniel 7, y el que aún tiene una misión pendiente.',
    level: 'AVANZADO',
    icon: '⚔️',
    duration: 75,
    order: 20,
    status: 'PUBLISHED',
  },
  {
    id: 'adan-el-creador',
    moduleId: 'personajes-escrituras',
    submoduleGroup: 'adan-eva',
    title: 'Adán el Creador',
    subtitle: 'Antes del Jardín, ayudó a crear la Tierra',
    description:
      'Abraham 4-5 y Moisés 2-3 revelan que Adán no solo fue creado — participó activamente en la creación. Su asignación de nombres a los animales, el diseño del Jardín, y la creación de Eva son actos de un ser con autoridad cósmica.',
    level: 'INTERMEDIO',
    icon: '🌍',
    duration: 65,
    order: 21,
    status: 'PUBLISHED',
  },
  {
    id: 'la-caida-el-acto-mas-valiente',
    moduleId: 'personajes-escrituras',
    submoduleGroup: 'adan-eva',
    title: 'La Caída — El Acto más Valiente',
    subtitle: 'Transgresión, no pecado',
    description:
      'La Caída no fue un accidente ni una tragedia: fue una decisión necesaria tomada con plena conciencia de sus consecuencias. Moisés 5, 2 Nefi 2 y el testimonio de Eva explican por qué sin la Caída no podría existir el gozo.',
    level: 'INTERMEDIO',
    icon: '🌿',
    duration: 70,
    order: 22,
    status: 'PUBLISHED',
  },
  {
    id: 'eva-la-madre-que-entendio-primero',
    moduleId: 'personajes-escrituras',
    submoduleGroup: 'adan-eva',
    title: 'Eva — La Madre que Entendió Primero',
    subtitle: 'No fue engañada — eligió',
    description:
      'Eva no fue la ingenua que arruinó el plan. Fue la primera en entender que sin la Caída no habría progreso, ni gozo, ni redención. Moisés 5:11 registra su testimonio — el primero de toda la historia humana.',
    level: 'INTERMEDIO',
    icon: '🌺',
    duration: 65,
    order: 23,
    status: 'PUBLISHED',
  },
  {
    id: 'adan-ondi-ahman',
    moduleId: 'personajes-escrituras',
    submoduleGroup: 'adan-eva',
    title: 'Adán-ondi-Ahmán',
    subtitle: 'El consejo final antes de la Segunda Venida',
    description:
      'DyC 116, Daniel 7 y los escritos de José Smith revelan que Adán presidirá el consejo más importante de la historia: todos los dispensadores de las llaves del sacerdocio renderán su informe ante él — y él ante Cristo.',
    level: 'AVANZADO',
    icon: '🏔️',
    duration: 80,
    order: 24,
    status: 'PUBLISHED',
  },
  // ── PATRIARCAS FUNDADORES (orders 30-39) ─────────────────────────────────
  {
    id: 'enoc',
    moduleId: 'personajes-escrituras',
    title: 'Enoc — La Ciudad que Dios Arrebató',
    subtitle: 'El hombre que construyó Sión',
    description:
      'Enoc era "tardo en el habla" cuando Dios lo llamó. Construyó la ciudad más justa que jamás existió — y Dios la arrebató de la Tierra. Moisés 6-7 y DyC 45 revelan detalles que la Biblia no tiene.',
    level: 'AVANZADO',
    icon: '🏙️',
    duration: 70,
    order: 30,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'noe',
    moduleId: 'personajes-escrituras',
    title: 'Noé — El Diluvio y el Pacto del Arco Iris',
    subtitle: '¿Fue el diluvio global o local?',
    description:
      'Noé predicó durante 120 años sin convertir a nadie. Construyó el arca. Sobrevivió. Y el pacto con el arco iris cambió para siempre la relación de Dios con la humanidad. Con análisis del alcance del diluvio y la perspectiva restaurada.',
    level: 'INTERMEDIO',
    icon: '🌈',
    duration: 65,
    order: 31,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'melquisedec',
    moduleId: 'personajes-escrituras',
    title: 'Melquisedec — El Rey-Sacerdote Eterno',
    subtitle: 'Sin padre, sin madre, sin genealogía',
    description:
      'Hebreos 7 lo describe como "sin padre, sin madre, sin genealogía, sin principio de días ni fin de vida". El sacerdocio más alto lleva su nombre. Alma 13 en el Libro de Mormón revela datos que la Biblia omite sobre su conversión y su ciudad.',
    level: 'AVANZADO',
    icon: '👑',
    duration: 65,
    order: 32,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'isaac',
    moduleId: 'personajes-escrituras',
    title: 'Isaac — El Hijo de la Promesa',
    subtitle: 'El que cargó la leña de su propio sacrificio',
    description:
      'Isaac es el personaje más silencioso de los patriarcas, pero también el más profundo tipo de Cristo: cargó la leña para su propio sacrificio, fue "muerto" para la fe de su padre y resucitó — en figura. Génesis 22 e interpretaciones de Josefo y Hebreos 11.',
    level: 'INTERMEDIO',
    icon: '🪵',
    duration: 60,
    order: 33,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'jacob-israel',
    moduleId: 'personajes-escrituras',
    title: 'Jacob/Israel — La Lucha con el Ángel',
    subtitle: 'De suplantador a príncipe de Dios',
    description:
      'Jacob compró la primogenitura, engañó a su padre, huyó, amó en vano durante 14 años, y una noche luchó con Dios hasta el amanecer. Su nombre cambió. El nuestro también puede. Génesis 25-49 y la profecía sobre los 12 hijos.',
    level: 'INTERMEDIO',
    icon: '🤼',
    duration: 70,
    order: 34,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'moises',
    moduleId: 'personajes-escrituras',
    title: 'Moisés — El Libertador de Israel',
    subtitle: 'Profeta, legislador, hombre de dos mundos',
    description:
      'Criado como príncipe egipcio, exiliado como fugitivo, llamado desde una zarza ardiente. Moisés habló cara a cara con Dios (Éxodo 33:11), pero solo vio su espalda. La restauración (Moisés 1) añade un encuentro con Satanás que la Biblia no tiene.',
    level: 'INTERMEDIO',
    icon: '🔥',
    duration: 80,
    order: 35,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'aaron',
    moduleId: 'personajes-escrituras',
    title: 'Aarón — El Sumo Sacerdote',
    subtitle: 'El hermano que estuvo a la sombra y falló',
    description:
      'Aarón habló por Moisés, realizó las plagas, sostuvo sus brazos en la batalla de Amalec — y también construyó el becerro de oro cuando el pueblo lo presionó. El sacerdocio aarónico lleva su nombre. ¿Por qué?',
    level: 'BÁSICO',
    icon: '⚗️',
    duration: 55,
    order: 36,
    status: 'IN_CONSTRUCTION',
  },
  // ── PROFETAS DEL ANTIGUO TESTAMENTO (orders 40-49) ──────────────────────
  {
    id: 'isaias',
    moduleId: 'personajes-escrituras',
    title: 'Isaías — El Profeta de Todos los Tiempos',
    subtitle: 'Nefi lo citó más que cualquier otro profeta',
    description:
      'Nefi ordenó a sus hijos estudiar las palabras de Isaías "porque nadie puede saber estas cosas a menos que sea instruido en la manera de los judíos" (2 Nefi 25:5). ¿Por qué es tan citado y tan difícil? Un estudio de su contexto histórico, su estilo hebreo y sus profecías cumplidas y pendientes.',
    level: 'AVANZADO',
    icon: '📜',
    duration: 85,
    order: 40,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'elias',
    moduleId: 'personajes-escrituras',
    title: 'Elías — El Fuego del Cielo y la Segunda Venida',
    subtitle: 'El profeta que regresó en el Templo de Kirtland',
    description:
      'Elías convocó fuego del cielo, derrotó a 450 profetas de Baal, y luego huyó de una mujer asustado. DyC 110 registra su aparición en el Templo de Kirtland en 1836. Malaquías 4:5-6 lo promete para los últimos días. ¿Qué hizo y por qué importa ahora?',
    level: 'AVANZADO',
    icon: '⚡',
    duration: 75,
    order: 41,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'david',
    moduleId: 'personajes-escrituras',
    title: 'David — El Rey-Poeta y su Caída',
    subtitle: 'El hombre conforme al corazón de Dios que lo traicionó',
    description:
      'David mató a Goliat a los 17 años, escribió los Salmos más hermosos de la historia, y a los 50 destruyó su legado con Betsabé y Urías. DyC 132:39 da el veredicto eterno. Salmo 22 y 110 como profecías mesiánicas directas.',
    level: 'INTERMEDIO',
    icon: '🎵',
    duration: 70,
    order: 42,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'jeremias',
    moduleId: 'personajes-escrituras',
    title: 'Jeremías — El Profeta que Lloró',
    subtitle: 'Maldijo el día en que nació, y nunca paró de profetizar',
    description:
      'Jeremías profetizó durante 40 años y no convirtió a nadie. Fue golpeado, encerrado en un pozo de barro, y vio Jerusalén arder. Sus Lamentaciones son el dolor más puro de las Escrituras. Y en medio de todo, profetizó la restauración (Jeremías 31).',
    level: 'INTERMEDIO',
    icon: '😭',
    duration: 65,
    order: 43,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'daniel',
    moduleId: 'personajes-escrituras',
    title: 'Daniel — En el Foso de los Leones',
    subtitle: 'El joven que gobernó Babilonia sin comprometerse',
    description:
      'Daniel fue llevado cautivo a Babilonia a los 15 años y llegó a ser el segundo hombre del Imperio más poderoso de su época — sin comer la comida del rey, sin inclinarse ante la estatua, sin dejar de orar tres veces al día. Sus visiones del capítulo 7 son la base del Adán-ondi-Ahmán.',
    level: 'AVANZADO',
    icon: '🦁',
    duration: 75,
    order: 44,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'job',
    moduleId: 'personajes-escrituras',
    title: 'Job — El Sufrimiento del Justo',
    subtitle: '¿Por qué sufre quien no merece sufrir?',
    description:
      'Job perdió sus hijos, su salud y su fortuna en un solo día — y Dios lo permitió. Sus tres amigos dieron respuestas teológicas incorrectas. Job los superó. Y al final Dios habló desde el torbellino con las preguntas más inesperadas. Job 19:25-27 es la declaración de fe más audaz del Antiguo Testamento.',
    level: 'AVANZADO',
    icon: '🌪️',
    duration: 70,
    order: 45,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'ezequiel',
    moduleId: 'personajes-escrituras',
    title: 'Ezequiel — Las Visiones del Trono y los Huesos Secos',
    subtitle: 'El profeta que vio el carro de Dios',
    description:
      'Ezequiel vio la gloria de Dios moverse en un carro de fuego (la merkavá). Actuó sus profecías: se acostó 390 días de un lado, cocinó con estiércol, rapó su cabeza. Ezequiel 37 (el valle de los huesos secos) y 37:16-19 (los dos palos/escrituras) tienen aplicación directa en la restauración.',
    level: 'AVANZADO',
    icon: '👁️',
    duration: 70,
    order: 46,
    status: 'IN_CONSTRUCTION',
  },
  // ── PERSONAS DEL NUEVO TESTAMENTO (orders 50-59) ─────────────────────────
  {
    id: 'pedro',
    moduleId: 'personajes-escrituras',
    title: 'Pedro — La Roca que Cayó y Se Levantó',
    subtitle: 'De pescador a presidente de la Iglesia de Cristo',
    description:
      'Simón Pedro caminó sobre el agua y se hundió. Confesó que Jesús era el Cristo y fue llamado la roca. Negó a Jesús tres veces y lloró amargamente. Y fue él quien presidió la Iglesia primitiva, abrió el evangelio a los gentiles (Hechos 10) y murió crucificado de cabeza.',
    level: 'INTERMEDIO',
    icon: '🪨',
    duration: 70,
    order: 50,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'pablo',
    moduleId: 'personajes-escrituras',
    title: 'Pablo — Del Perseguidor al Mayor Misionero',
    subtitle: 'La conversión más dramática del Nuevo Testamento',
    description:
      'Pablo aprobó la muerte de Esteban, arrestó cristianos de casa en casa — y en el camino a Damasco Cristo lo detuvo. Sus 13 epístolas son el 40% del Nuevo Testamento. Tres viajes misioneros. Dos encarcelamientos en Roma. Decapitado bajo Nerón. La teología de la gracia más desarrollada de la Biblia.',
    level: 'INTERMEDIO',
    icon: '✉️',
    duration: 80,
    order: 51,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'juan-el-bautista',
    moduleId: 'personajes-escrituras',
    title: 'Juan el Bautista — La Voz en el Desierto',
    subtitle: 'El último profeta del AT y el primero del NT',
    description:
      'Jesús dijo de él: "Entre los nacidos de mujer, no ha surgido ninguno mayor que Juan el Bautista" (Mateo 11:11). Vivió en el desierto, comió langostas y miel silvestre, bautizó a Jesús, y fue decapitado por el capricho de una niña en una fiesta. DyC 13 registra su aparición a José Smith.',
    level: 'INTERMEDIO',
    icon: '🏜️',
    duration: 60,
    order: 52,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'maria-magdalena',
    moduleId: 'personajes-escrituras',
    title: 'María Magdalena — La Primera Testigo',
    subtitle: 'No fue la pecadora que el mundo inventa',
    description:
      'En 591 d.C., el Papa Gregorio I fusionó tres mujeres distintas en una y creó el mito de la "pecadora arrepentida". María era de Magdala, tuvo siete demonios expulsados, financió el ministerio de Jesús, estuvo al pie de la cruz, y fue la primera persona a quien se le apareció el Cristo resucitado. Juan 20:11-18.',
    level: 'INTERMEDIO',
    icon: '🌸',
    duration: 60,
    order: 53,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'tomas',
    moduleId: 'personajes-escrituras',
    title: 'Tomás — El Incrédulo que Llegó Más Lejos',
    subtitle: 'El que exigió pruebas hizo la confesión más profunda',
    description:
      'Tomás exigió ver las heridas antes de creer. Cuando las vio, dijo "¡Señor mío y Dios mío!" — la confesión de divinidad más directa de los cuatro evangelios. Según la tradición cristiana más antigua, llevó el evangelio hasta la India, donde murió mártir hacia el año 72 d.C.',
    level: 'BÁSICO',
    icon: '🖐️',
    duration: 55,
    order: 54,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'santiago-el-justo',
    moduleId: 'personajes-escrituras',
    title: 'Santiago el Justo — El Hermano de Jesús',
    subtitle: 'De incrédulo a mártir y líder de la Iglesia de Jerusalén',
    description:
      'Santiago no creyó en su hermano durante el ministerio (Juan 7:5). El Cristo resucitado se le apareció personalmente (1 Cor 15:7). Después de eso, presidió la Iglesia de Jerusalén durante 30 años, escribió la Epístola de Santiago, y fue arrojado desde el pináculo del templo en el año 62 d.C. Josefo registra su muerte.',
    level: 'AVANZADO',
    icon: '🏛️',
    duration: 65,
    order: 55,
    status: 'IN_CONSTRUCTION',
  },
  // ── MUJERES DE LAS ESCRITURAS (orders 60-69) ─────────────────────────────
  {
    id: 'sara',
    moduleId: 'personajes-escrituras',
    title: 'Sara — La Madre de la Fe',
    subtitle: 'La que se rió de Dios y le creyó de todas formas',
    description:
      'Sara escuchó que daría a luz a los 90 años y se rió. Dios no se ofendió — nombró al niño "Isaac" (risa). Había mentido dos veces sobre ser la esposa de Abraham, había dado a su sierva a su marido, y Hebreos 11:11 la pone en la galería de los héroes de la fe de todas formas.',
    level: 'BÁSICO',
    icon: '😂',
    duration: 55,
    order: 60,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'rut',
    moduleId: 'personajes-escrituras',
    title: 'Rut — La Lealtad que Venció al Origen',
    subtitle: 'Moabita, viuda, extranjera — y bisabuela de David',
    description:
      'Rut no era israelita. Provenía de Moab, un pueblo con orígenes vergonzosos. Perdió a su marido. Eligió quedarse con su suegra cuando podría haberse ido. Y su lealtad absoluta — "donde tú mueras, moriré yo" — la colocó en la línea directa del Mesías. El kinsman-redeemer Boaz como tipo de Cristo.',
    level: 'BÁSICO',
    icon: '🌾',
    duration: 55,
    order: 61,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'ester',
    moduleId: 'personajes-escrituras',
    title: 'Ester — "Si He de Morir, Que Muera"',
    subtitle: 'La reina que salvó a su pueblo con una cena',
    description:
      'Ester era huérfana judía viviendo bajo un nombre persa falso en la corte del rey más poderoso del mundo. Su primo Mardoqueo le dijo: "¿Quién sabe si no fue para este momento que llegaste al reino?" (Ester 4:14). Lo que hizo después salvó a todos los judíos del Imperio Persa.',
    level: 'BÁSICO',
    icon: '👸',
    duration: 55,
    order: 62,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'debora',
    moduleId: 'personajes-escrituras',
    title: 'Débora — La Jueza-Guerrera',
    subtitle: 'La única mujer jueza de Israel',
    description:
      'Débora gobernaba Israel, resolvía disputas bajo su palmera, y cuando llegó la guerra fue ella quien dio la orden de ataque. Jueces 4-5: la batalla, el general que obedeció a una mujer, y Jael, que clavó una estaca en la sien del enemigo. El Canto de Débora (Jueces 5) es uno de los textos más antiguos de la Biblia.',
    level: 'INTERMEDIO',
    icon: '⚔️',
    duration: 55,
    order: 63,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'maria-la-madre',
    moduleId: 'personajes-escrituras',
    title: 'María — La Madre Elegida entre Todas',
    subtitle: 'La más mencionada en el Libro de Mormón entre las mujeres',
    description:
      'Nefi vio a la madre del Hijo de Dios en visión 600 años antes de su nacimiento (1 Nefi 11). Mosíah 3:8 la nombra. Alma 7:10 especifica el lugar del nacimiento. María vivió la mayor alegría y el mayor dolor que puede vivir una madre — y estuvo en ambos momentos hasta el final (Juan 19:25).',
    level: 'INTERMEDIO',
    icon: '✨',
    duration: 65,
    order: 64,
    status: 'IN_CONSTRUCTION',
  },
  // ── LIBRO DE MORMÓN (orders 70-79) ───────────────────────────────────────
  {
    id: 'lehi',
    moduleId: 'personajes-escrituras',
    title: 'Lehi — El Padre que Lo Dejó Todo',
    subtitle: 'El profeta rechazado que fundó un pueblo',
    description:
      'Lehi era un hombre rico de Jerusalén. Dios le pidió que lo dejara todo — su casa, su tierra, sus posesiones — y llevara a su familia al desierto. Sus hijos lo obedecieron y lo resistieron. Murió en tierra prometida sin ver la nación que fundó. 1 Nefi 1-18 y 2 Nefi 1-4.',
    level: 'BÁSICO',
    icon: '🏕️',
    duration: 60,
    order: 70,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'nefi',
    moduleId: 'personajes-escrituras',
    title: 'Nefi — El Que Obedeció cuando Era Imposible',
    subtitle: '"Iré y haré las cosas que el Señor ha mandado"',
    description:
      'Nefi mató a un hombre borracho porque era "mejor que perezca un hombre que una nación" (1 Nefi 4:13). Construyó un barco sin instrucción previa. Obtuvo el Libro de Bronce. Y en su vejez escribió sus memorias con una tristeza que contrasta con toda su obediencia (2 Nefi 4:17-35).',
    level: 'BÁSICO',
    icon: '🚢',
    duration: 65,
    order: 71,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'el-hermano-de-jared',
    moduleId: 'personajes-escrituras',
    title: 'El Hermano de Jared — El que Vio al Señor',
    subtitle: 'Su fe fue tan grande que Dios no pudo ocultársele',
    description:
      'Su nombre es Mahonri Moriancumer (revelado a Joseph Smith). Vio al Cristo premortal cara a cara porque su fe era tan perfecta que "el Señor no pudo retenerle nada" (Eter 3:26). El relato de las piedras luminosas y la travesía del océano en barcazas herméticas es el tipo de fe que la restauración llama al mundo a alcanzar.',
    level: 'AVANZADO',
    icon: '💎',
    duration: 70,
    order: 72,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'ammon',
    moduleId: 'personajes-escrituras',
    title: 'Ammon — El Misionero que Cortó Brazos',
    subtitle: 'La misión más improbable de toda la escritura',
    description:
      'Ammon eligió servir al rey lamanita en lugar de casarse con su hija. Cortó los brazos de quienes atacaron los rebaños del rey. Y cuando el rey preguntó qué poder era ese, Ammon enseñó el evangelio. El resultado: la conversión más masiva del Libro de Mormón. Alma 17-19.',
    level: 'BÁSICO',
    icon: '💪',
    duration: 60,
    order: 73,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'rey-benjamin',
    moduleId: 'personajes-escrituras',
    title: 'Rey Benjamín — El Rey Siervo',
    subtitle: 'El discurso que transformó a toda una nación en un solo día',
    description:
      'Benjamín era rey pero trabajaba con sus propias manos para no ser una carga. Su discurso desde la torre (Mosíah 2-5) produjo una conversión colectiva tan completa que el pueblo declaró no tener más deseo de hacer el mal. Incluye la profecía del nombre de Cristo 124 años antes de su nacimiento.',
    level: 'BÁSICO',
    icon: '🏰',
    duration: 60,
    order: 74,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'capitán-moroni',
    moduleId: 'personajes-escrituras',
    title: 'Capitán Moroni — La Bandera de la Libertad',
    subtitle: '"Si todos los hombres fueran como Moroni..."',
    description:
      'A los 25 años, Moroni era el comandante supremo del ejército nefita. Rasgó su manto, escribió "En memoria de nuestro Dios, nuestra religión, y nuestra libertad" y lo izó como bandera. Alma 43-62: guerras, estrategia, teología de la defensa justa, y el hombre que Alma dijo que el mundo hubiera prosperado con él.',
    level: 'INTERMEDIO',
    icon: '🚩',
    duration: 65,
    order: 75,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'samuel-el-lamanita',
    moduleId: 'personajes-escrituras',
    title: 'Samuel el Lamanita — El Profeta Rechazado',
    subtitle: 'El lamanita que profetizó desde la muralla',
    description:
      'Samuel era lamanita — del pueblo históricamente "enemigo". Los nefitas lo expulsaron de la ciudad. Subió a la muralla y desde ahí profetizó la venida de Cristo con señales específicas: cinco años, una noche sin oscuridad, una estrella nueva. Helamán 13-15. Su mensaje no fue aceptado por quien lo necesitaba más.',
    level: 'BÁSICO',
    icon: '🗣️',
    duration: 55,
    order: 76,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'moroni-profeta',
    moduleId: 'personajes-escrituras',
    title: 'Moroni — El Último Guardián',
    subtitle: 'El último nefita, el primer ángel de la restauración',
    description:
      'Moroni sobrevivió al genocidio de su pueblo. Solo, errante, escribió los últimos capítulos del Libro de Mormón durante décadas. Enterró las planchas. Y 1,400 años después, apareció como ángel al joven José Smith en 1823. Moroni 10:4-5 contiene la promesa que ha transformado millones de vidas.',
    level: 'INTERMEDIO',
    icon: '📯',
    duration: 65,
    order: 77,
    status: 'IN_CONSTRUCTION',
  },
  // ── RESTAURACIÓN (orders 80-89) ───────────────────────────────────────────
  {
    id: 'jose-smith',
    moduleId: 'personajes-escrituras',
    title: 'José Smith — El Profeta de la Restauración',
    subtitle: 'El joven que vio lo que nadie había visto en 1,800 años',
    description:
      'A los 14 años vio al Padre y al Hijo. A los 17, a un ángel. A los 23, era el profeta, vidente y revelador de la restauración. Tradujo el Libro de Mormón, recibió el sacerdocio de Juan el Bautista y de Pedro, Santiago y Juan, estableció la Iglesia, y fue martirizado a los 38 años.',
    level: 'INTERMEDIO',
    icon: '🌟',
    duration: 80,
    order: 80,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'emma-smith',
    moduleId: 'personajes-escrituras',
    title: 'Emma Smith — La Elegida de Dios',
    subtitle: 'Más que "la esposa del profeta"',
    description:
      'DyC 25 está dirigida personalmente a Emma: "Elegida y llamada". Sirvió como escribiente, perdió cuatro hijos, vivió en la pobreza, y enfrentó la poligamia de su marido con una angustia documentada. Después de su muerte, José le dijo a Brigham Young que Emma era la mujer más dotada que había conocido.',
    level: 'INTERMEDIO',
    icon: '🌹',
    duration: 65,
    order: 81,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'hyrum-smith',
    moduleId: 'personajes-escrituras',
    title: 'Hyrum Smith — El Mártir Fiel',
    subtitle: 'El hermano que eligió morir antes que abandonar',
    description:
      'Hyrum podría haberse salvado en Carthage. Le ofrecieron la oportunidad de salir. Eligió quedarse con su hermano. Murió el mismo día, casi al mismo tiempo. José dijo que Hyrum tenía "la integridad de Job". DyC 124:15 — Dios lo amaba también.',
    level: 'BÁSICO',
    icon: '🤝',
    duration: 55,
    order: 82,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'oliver-cowdery',
    moduleId: 'personajes-escrituras',
    title: 'Oliver Cowdery — El Testigo Primero',
    subtitle: 'El escribiente, el apóstata y el regreso',
    description:
      'Oliver fue el escribiente principal del Libro de Mormón, estuvo presente cuando Juan el Bautista y después Pedro, Santiago y Juan restauraron el sacerdocio, y fue uno de los Tres Testigos. Luego fue excomulgado. Diez años después, volvió a la Iglesia y murió con su testimonio intacto.',
    level: 'INTERMEDIO',
    icon: '✍️',
    duration: 65,
    order: 83,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'brigham-young',
    moduleId: 'personajes-escrituras',
    title: 'Brigham Young — El León de Israel',
    subtitle: 'El carpintero que guió a miles al desierto',
    description:
      'Brigham Young era carpintero analfabeto cuando leyó el Libro de Mormón. Doce años después, organizó el éxodo de 70,000 santos de Nauvoo al Valle de la Sal en las condiciones más difíciles del siglo XIX. Presidió la Iglesia 30 años, estableció 350 comunidades, y dijo cosas que todavía se debaten.',
    level: 'INTERMEDIO',
    icon: '🦁',
    duration: 70,
    order: 84,
    status: 'IN_CONSTRUCTION',
  },
  // ── REGULARES YA PUBLICADOS ────────────────────────────────────────────────
  {
    id: 'alma-el-joven',
    moduleId: 'personajes-escrituras',
    title: 'Alma el Joven',
    subtitle: 'Del ángel destructor al apóstol del arrepentimiento',
    description:
      'El hijo del sumo sacerdote que se convirtió en enemigo de la Iglesia — y en su mayor defensor. Alma 36: la conversión más detallada del Libro de Mormón. Alma 32-34: la teología de la fe. Alma 42: la teodicea más rigurosa del canon.',
    level: 'INTERMEDIO',
    icon: '🔥',
    duration: 65,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'jose-de-egipto',
    moduleId: 'personajes-escrituras',
    title: 'José de Egipto',
    subtitle: 'Traicionado, encarcelado, exaltado — tipo de Cristo',
    description:
      'La vida de José de Egipto es el relato más elaborado del Antiguo Testamento como tipo de Cristo. Vendido por sus hermanos, falsamente acusado, encarcelado, exaltado. Génesis 37-50 y 2 Nefi 3: la profecía de Lehi sobre el José del final de los días.',
    level: 'INTERMEDIO',
    icon: '👑',
    duration: 65,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'abraham',
    moduleId: 'personajes-escrituras',
    title: 'Abraham',
    subtitle: 'El padre de la fe — y lo que esa fe costó',
    description:
      'El hombre al que Dios le pidió sacrificar a su hijo único. Abraham 1-3: la preordenación y la cosmología. Génesis 12-22: las pruebas acumuladas. Hebreos 11: el elogio más grande de la Biblia. DyC 132: el convenio abrahámico como fundamento de la exaltación.',
    level: 'AVANZADO',
    icon: '⭐',
    duration: 70,
    order: 3,
    status: 'PUBLISHED',
  },
]

const PORTED: Partial<Record<string, Lesson>> = {
  'el-sellamiento': lessonElSellamiento,
  'sacerdocio-aaonico': lessonSacerdocioAaonico,
  'el-diacono': lessonElDiacono,
  'el-maestro': lessonElMaestro,
  'el-presbitero': lessonElPresbitero,
  'el-elder': lessonElElder,
  'el-sumo-sacerdote': lessonElSumoSacerdote,
  'el-patriarca': lessonElPatriarca,
  'santa-cena': lessonSantaCena,
  'bautismo': lessonElBautismo,
  'don-espiritu-santo': lessonDonEspirituSanto,
  'fe-principio-poder': lessonFePrincipioPoder,
  'arrepentimiento': lessonArrepentimiento,
  'resurreccion-tres-reinos': lessonResurreccion,
  'proclamacion-familia': lessonProclamacionFamilia,
  'la-oracion': lessonOracion,
  'estudio-escrituras': lessonEstudioEscrituras,
  'ministerio-en-el-hogar': lessonMinisterio,
  'vestimenta-sacerdocio': lessonVestimenta,
  'primera-vision': lessonPrimeraVision,
  'gran-apostasia': lessonGranApostasia,
  'libro-de-mormon-reliquia': lessonLibroDeMormon,
  'sacerdocio-autoridad-poder': lessonSacerdocio,
  'templo-casa-del-senor': lessonTemplo,
  'preexistencia': lessonPreexistencia,
  'plan-de-salvacion': lessonPlanSalvacion,
  'justicia-y-misericordia': lessonJusticiaMisericordia,
  'convenios-eternos': lessonConvenios,
  'liderazgo-segun-el-evangelio': lessonLiderazgo,
  'mision-y-testimonio': lessonMisionTestimonio,
  'vision-dc-76': lessonVisionDC76,
  'vision-tres-reinos': lessonVisionTresReinos,
  'juan-tres-nefitas-apostasia': lessonJuanTresNefitas,
  'la-expiacion-del-salvador': lessonLaExpiacionDelSalvador,
  'king-follett': lessonKingFollett,
  'su-gracia-es-suficiente': lessonSuGracia,
  'por-que-dios-permite-el-sufrimiento': lessonSufrimiento,
  'la-salvacion-de-los-no-bautizados': lessonNoBautizados,
  'alma-el-joven': lessonAlmaElJoven,
  'jose-de-egipto': lessonJoseDeEgipto,
  'abraham': lessonAbraham,
  'adan-miguel-arcangel': lessonAdanMiguelArcangel,
  'adan-el-creador': lessonAdanElCreador,
  'la-caida-el-acto-mas-valiente': lessonLaCaida,
  'eva-la-madre-que-entendio-primero': lessonEvaLaMadre,
  'adan-ondi-ahman': lessonAdanOndiAhman,
  'jesus-el-hombre': lessonJesusElHombre,
  'jesus-el-cristo': lessonJesusElCristo,
  'cristo-libro-de-mormon-vs-biblia': lessonCristoLdMVsBiblia,
  'los-yo-soy-de-cristo': lessonLosYoSoy,
  'la-resurreccion-de-cristo': lessonResurreccionCristo,
  'el-circulo-de-jesus': lessonElCirculoDeJesus,
}

function lessonIdsForModule(moduleId: string): string[] {
  return LESSON_ROWS.filter((l) => l.moduleId === moduleId)
    .sort((a, b) => a.order - b.order)
    .map((l) => l.id)
}

function buildSeedLessons(): Record<string, Lesson> {
  const byModule = new Map<string, LessonRow[]>()
  for (const row of LESSON_ROWS) {
    const list = byModule.get(row.moduleId) ?? []
    list.push(row)
    byModule.set(row.moduleId, list)
  }
  for (const list of byModule.values()) {
    list.sort((a, b) => a.order - b.order)
  }

  const out: Record<string, Lesson> = {}

  for (const row of LESSON_ROWS) {
    const list = byModule.get(row.moduleId)!
    const idx = list.findIndex((x) => x.id === row.id)
    const prevId: string | null = idx > 0 ? list[idx - 1]!.id : null
    const nextId: string | null = idx < list.length - 1 ? list[idx + 1]!.id : null

    const ported = PORTED[row.id]
    if (ported) {
      out[row.id] = {
        ...ported,
        previousLessonId: prevId,
        nextLessonId: nextId,
        submoduleGroup: row.submoduleGroup,
      }
    } else {
      out[row.id] = {
        id: row.id,
        moduleId: row.moduleId,
        title: row.title,
        subtitle: row.subtitle,
        description: row.description,
        level: row.level,
        icon: row.icon,
        duration: row.duration,
        order: row.order,
        status: row.status,
        studyBodyPlain: '',
        originalBodyPlain: '',
        previousLessonId: prevId,
        nextLessonId: nextId,
        submoduleGroup: row.submoduleGroup,
      }
    }
  }

  return out
}

export const seedLessons: Record<string, Lesson> = buildSeedLessons()

export const seedModules: DoctrinalModule[] = [...MODULE_ROWS]
  .sort((a, b) => a.order - b.order)
  .map((m) => ({
    ...m,
    lessonIds: lessonIdsForModule(m.id),
  }))

/**
 * Busca una lección por módulo e id.
 *
 * @param moduleId - Id del módulo
 * @param lessonId - Id de la lección
 * @returns Lección o undefined
 */
export function findSeedLesson(moduleId: string, lessonId: string): Lesson | undefined {
  const lesson = seedLessons[lessonId]
  if (!lesson || lesson.moduleId !== moduleId) {
    return undefined
  }
  return lesson
}

/**
 * Obtiene el módulo semilla por id.
 *
 * @param moduleId - Id del módulo
 * @returns Módulo o undefined
 */
export function findSeedModule(moduleId: string): DoctrinalModule | undefined {
  return seedModules.find((m) => m.id === moduleId)
}

/**
 * Estadísticas del catálogo (lecciones publicadas vs total).
 *
 * @returns Totales y porcentaje redondeado
 */
export function getCatalogStats(): {
  totalLessons: number
  published: number
  percentRounded: number
} {
  const totalLessons = LESSON_ROWS.length
  const published = LESSON_ROWS.filter((l) => l.status === 'PUBLISHED').length
  const percentRounded = totalLessons === 0 ? 0 : Math.round((published / totalLessons) * 100)
  return { totalLessons, published, percentRounded }
}
