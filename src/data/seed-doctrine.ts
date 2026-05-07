/**
 * Datos semilla: catálogo unificado de módulos y lecciones (sin iframes).
 */
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
import { jesusElHombre as lessonJesusElHombre } from '@/data/lessons/jesus-el-hombre'
import { jesusElCristo as lessonJesusElCristo } from '@/data/lessons/jesus-el-cristo'
import { cristoLibroDeMormonVsBiblia as lessonCristoLdMVsBiblia } from '@/data/lessons/cristo-libro-de-mormon-vs-biblia'
import { losYoSoyDeCristo as lessonLosYoSoy } from '@/data/lessons/los-yo-soy-de-cristo'
import { laResurreccionDeCristo as lessonResurreccionCristo } from '@/data/lessons/la-resurreccion-de-cristo'
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
  },
]

const LESSON_ROWS: LessonRow[] = [
  {
    id: 'santa-cena',
    moduleId: 'doctrina-fundamental',
    title: 'La Santa Cena',
    subtitle: 'Convenio y poder renovados',
    description: 'El pan y el agua, la memoria del Salvador, y los convenios que renovamos cada semana.',
    level: 'BÁSICO',
    icon: '🍷',
    duration: 45,
    order: 1,
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
    subtitle: 'Transformación real, no penitencia',
    description: 'Diferencia entre penitencia y conversión real. DyC 19 y Alma 42 como fuentes primarias: el precio ya pagado, la justicia y la misericordia, y el camino hacia el gozo.',
    level: 'BÁSICO',
    icon: '🙏',
    duration: 65,
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
    moduleId: 'doctrina-avanzada-carne',
    title: 'El Sacerdocio — Autoridad y Poder',
    subtitle: 'Las dos mitades que la mayoría confunde',
    description: 'La distinción de Nelson entre autoridad (ordenación) y poder (rectitud), los dos sacerdocios y sus funciones, las llaves y quién las tiene. DyC 84, 107, 121.',
    level: 'AVANZADO',
    icon: '🔑',
    duration: 70,
    order: 1,
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
  'por-que-dios-permite-el-sufrimiento': lessonSufrimiento,
  'la-salvacion-de-los-no-bautizados': lessonNoBautizados,
  'alma-el-joven': lessonAlmaElJoven,
  'jose-de-egipto': lessonJoseDeEgipto,
  'abraham': lessonAbraham,
  'jesus-el-hombre': lessonJesusElHombre,
  'jesus-el-cristo': lessonJesusElCristo,
  'cristo-libro-de-mormon-vs-biblia': lessonCristoLdMVsBiblia,
  'los-yo-soy-de-cristo': lessonLosYoSoy,
  'la-resurreccion-de-cristo': lessonResurreccionCristo,
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
