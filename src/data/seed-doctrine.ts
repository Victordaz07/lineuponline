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
import { permanecerParaSiempre as lessonPermanecerParaSiempre } from '@/data/lessons/permanecer-para-siempre'
import { pensarDeManeraCelestial as lessonPensarCelestial } from '@/data/lessons/pensar-de-manera-celestial'
import { sumoSacerdoteBienesVenideros as lessonSumoSacerdoteHolland } from '@/data/lessons/sumo-sacerdote-bienes-venideros'
import { elDomingoLlegara as lessonElDomingoLlegara } from '@/data/lessons/el-domingo-llegara'
import { elGranPlanDeLaFelicidad as lessonGranPlan } from '@/data/lessons/el-gran-plan-de-la-felicidad'
import { sacerdocioPoderMujer as lessonSacerdocioPoderMujer } from '@/data/lessons/sacerdocio-poder-mujer'
import { fechandoLaMuerteDeCristo as lessonFechandoMuerte } from '@/data/lessons/fechando-la-muerte-de-cristo'
import { elObispo as lessonElObispo } from '@/data/lessons/el-obispo'
import { elApostol as lessonElApostol } from '@/data/lessons/el-apostol'
import { elPresidenteDeLaIglesia as lessonElPresidente } from '@/data/lessons/el-presidente-de-la-iglesia'
import { elohimElPadreCelestial as lessonElohim } from '@/data/lessons/elohim-el-padre-celestial'
import { laDivinidad as lessonLaDivinidad } from '@/data/lessons/la-divinidad'
import { cristoElGranSumoSacerdote as lessonCristoSumoSacerdote } from '@/data/lessons/cristo-el-gran-sumo-sacerdote'
import { enoc as _lessonEnoc } from '@/data/lessons/enoc'
import { noe as _lessonNoe } from '@/data/lessons/noe'
import { melquisedec as _lessonMelquisedec } from '@/data/lessons/melquisedec'
import { isaac as _lessonIsaac } from '@/data/lessons/isaac'
import { jacobIsrael as _lessonJacobIsrael } from '@/data/lessons/jacob-israel'
import { jeremias as lessonJeremias } from '@/data/lessons/jeremias'
import { daniel as lessonDaniel } from '@/data/lessons/daniel'
import { job as lessonJob } from '@/data/lessons/job'
import { ezequiel as lessonEzequiel } from '@/data/lessons/ezequiel'
import { pedro as lessonPedro } from '@/data/lessons/pedro'
import { pablo as lessonPablo } from '@/data/lessons/pablo'
import { juanElBautista as lessonJuanElBautista } from '@/data/lessons/juan-el-bautista'
import { mariaMagdalena as lessonMariaMagdalena } from '@/data/lessons/maria-magdalena'
import { tomas as lessonTomas } from '@/data/lessons/tomas'
import { santiagoElJusto as lessonSantiagoElJusto } from '@/data/lessons/santiago-el-justo'
import { sara as lessonSara } from '@/data/lessons/sara'
import { rut as lessonRut } from '@/data/lessons/rut'
import { ester as lessonEster } from '@/data/lessons/ester'
import { debora as lessonDebora } from '@/data/lessons/debora'
import { mariaLaMadre as lessonMariaLaMadre } from '@/data/lessons/maria-la-madre'
import { lehi as _lessonLehi } from '@/data/lessons/lehi'
import { nefi as _lessonNefi } from '@/data/lessons/nefi'
import { elHermanoDeJared as lessonHermanoDeJared } from '@/data/lessons/el-hermano-de-jared'
import { ammon as lessonAmmon } from '@/data/lessons/ammon'
import { reyBenjamin as _lessonReyBenjamin } from '@/data/lessons/rey-benjamin'
import { capitanMoroni as lessonCapitanMoroni } from '@/data/lessons/capitan-moroni'
import { samuelElLamanita as lessonSamuelElLamanita } from '@/data/lessons/samuel-el-lamanita'
import { moroniProfeta as _lessonMoroniProfeta } from '@/data/lessons/moroni-profeta'
import { joseSmith as lessonJoseSmith } from '@/data/lessons/jose-smith'
import { emmaSmith as lessonEmmaSmith } from '@/data/lessons/emma-smith'
import { hyrumSmith as lessonHyrumSmith } from '@/data/lessons/hyrum-smith'
import { oliverCowdery as lessonOliverCowdery } from '@/data/lessons/oliver-cowdery'
import { brighamYoung as lessonBrighamYoung } from '@/data/lessons/brigham-young'
import { lucifer as lessonLucifer } from '@/data/lessons/lucifer'
import { elMundoDeLoEspiritus as lessonMundoEspiritus } from '@/data/lessons/el-mundo-de-los-espiritus'
import { enocElLlamamiento as lessonEnocElLlamamiento } from '@/data/lessons/enoc-el-llamamiento'
import { enocElVidente as lessonEnocElVidente } from '@/data/lessons/enoc-el-vidente'
import { enocLaCiudad as lessonEnocLaCiudad } from '@/data/lessons/enoc-la-ciudad'
import { enocLaTraslacion as lessonEnocLaTraslacion } from '@/data/lessons/enoc-la-traslacion'
import { enocYLaRestauracion as lessonEnocYLaRestauracion } from '@/data/lessons/enoc-y-la-restauracion'
import { noeElPredicador as lessonNoeElPredicador } from '@/data/lessons/noe-el-predicador'
import { noeElArca as lessonNoeElArca } from '@/data/lessons/noe-el-arca'
import { noeElDiluvio as lessonNoeElDiluvio } from '@/data/lessons/noe-el-diluvio'
import { noeElPacto as lessonNoeElPacto } from '@/data/lessons/noe-el-pacto'
import { noeYLaRestauracion as lessonNoeYLaRestauracion } from '@/data/lessons/noe-y-la-restauracion'
import { melquisedecElRey as lessonMelquisedecElRey } from '@/data/lessons/melquisedec-el-rey'
import { melquisedecLaCiudad as lessonMelquisedecLaCiudad } from '@/data/lessons/melquisedec-la-ciudad'
import { melquisedecTipoDeCristo as lessonMelquisedecTipoDeCristo } from '@/data/lessons/melquisedec-tipo-de-cristo'
import { melquisedecElSacerdocio as lessonMelquisedecElSacerdocio } from '@/data/lessons/melquisedec-el-sacerdocio'
import { melquisedecYLaRestauracion as lessonMelquisedecYLaRestauracion } from '@/data/lessons/melquisedec-y-la-restauracion'
import { isaacElHijo as lessonIsaacElHijo } from '@/data/lessons/isaac-el-hijo'
import { isaacElSacrificio as lessonIsaacElSacrificio } from '@/data/lessons/isaac-el-sacrificio'
import { isaacElEsposo as lessonIsaacElEsposo } from '@/data/lessons/isaac-el-esposo'
import { isaacElPatriarca as lessonIsaacElPatriarca } from '@/data/lessons/isaac-el-patriarca'
import { isaacYLaRestauracion as lessonIsaacYLaRestauracion } from '@/data/lessons/isaac-y-la-restauracion'
import { jacobElSuplantador as lessonJacobElSuplantador } from '@/data/lessons/jacob-el-suplantador'
import { jacobElFugitivo as lessonJacobElFugitivo } from '@/data/lessons/jacob-el-fugitivo'
import { jacobLaLucha as lessonJacobLaLucha } from '@/data/lessons/jacob-la-lucha'
import { jacobElPadre as lessonJacobElPadre } from '@/data/lessons/jacob-el-padre'
import { jacobYLaRestauracion as lessonJacobYLaRestauracion } from '@/data/lessons/jacob-y-la-restauracion'
import { lehiElProfeta as lessonLehiElProfeta } from '@/data/lessons/lehi-el-profeta'
import { lehiElArbol as lessonLehiElArbol } from '@/data/lessons/lehi-el-arbol'
import { lehiLasBendiciones as lessonLehiLasBendiciones } from '@/data/lessons/lehi-las-bendiciones'
import { lehiElLegado as lessonLehiElLegado } from '@/data/lessons/lehi-el-legado'
import { lehiYLaRestauracion as lessonLehiYLaRestauracion } from '@/data/lessons/lehi-y-la-restauracion'
import { nefiIreYHare as lessonNefiIreYHare } from '@/data/lessons/nefi-ire-y-hare'
import { nefiLaVision as lessonNefiLaVision } from '@/data/lessons/nefi-la-vision'
import { nefiElLamento as lessonNefiElLamento } from '@/data/lessons/nefi-el-lamento'
import { nefiElConstructor as lessonNefiElConstructor } from '@/data/lessons/nefi-el-constructor'
import { nefiYLaRestauracion as lessonNefiYLaRestauracion } from '@/data/lessons/nefi-y-la-restauracion'
import { reyBenjaminElReySiervo as lessonReyBenjaminElReySiervo } from '@/data/lessons/rey-benjamin-el-rey-siervo'
import { reyBenjaminLaDeuda as lessonReyBenjaminLaDeuda } from '@/data/lessons/rey-benjamin-la-deuda'
import { reyBenjaminElNombre as lessonReyBenjaminElNombre } from '@/data/lessons/rey-benjamin-el-nombre'
import { reyBenjaminElProjimo as lessonReyBenjaminElProjimo } from '@/data/lessons/rey-benjamin-el-projimo'
import { reyBenjaminYLaRestauracion as lessonReyBenjaminYLaRestauracion } from '@/data/lessons/rey-benjamin-y-la-restauracion'
import { moroniElSobreviviente as lessonMoroniElSobreviviente } from '@/data/lessons/moroni-el-sobreviviente'
import { moroniLaProfecia as lessonMoroniLaProfecia } from '@/data/lessons/moroni-la-profecia'
import { moroniLaPromesa as lessonMoroniLaPromesa } from '@/data/lessons/moroni-la-promesa'
import { moroniLasPlanchas as lessonMoroniLasPlanchas } from '@/data/lessons/moroni-las-planchas'
import { moroniYLaRestauracion as lessonMoroniYLaRestauracion } from '@/data/lessons/moroni-y-la-restauracion'
import { mormonElGeneral as lessonMormonElGeneral } from '@/data/lessons/mormon-el-general'
import { mormonElCompilador as lessonMormonElCompilador } from '@/data/lessons/mormon-el-compilador'
import { mormonElProfeta as lessonMormonElProfeta } from '@/data/lessons/mormon-el-profeta'
import { mormonElPadre as lessonMormonElPadre } from '@/data/lessons/mormon-el-padre'
import { mormonYLaRestauracion as lessonMormonYLaRestauracion } from '@/data/lessons/mormon-y-la-restauracion'
import { moisesElPrincipe as lessonMoisesElPrincipe } from '@/data/lessons/moises-el-principe'
import { moisesLaRevelacion as lessonMoisesLaRevelacion } from '@/data/lessons/moises-la-revelacion'
import { moisesElLibertador as lessonMoisesElLibertador } from '@/data/lessons/moises-el-libertador'
import { moisesElLegislador as lessonMoisesElLegislador } from '@/data/lessons/moises-el-legislador'
import { moisesYLaRestauracion as lessonMoisesYLaRestauracion } from '@/data/lessons/moises-y-la-restauracion'
import { aaronLaVoz as lessonAaronLaVoz } from '@/data/lessons/aaron-la-voz'
import { aaronElSumoSacerdote as lessonAaronElSumoSacerdote } from '@/data/lessons/aaron-el-sumo-sacerdote'
import { aaronElBecerro as lessonAaronElBecerro } from '@/data/lessons/aaron-el-becerro'
import { aaronElSacerdocio as lessonAaronElSacerdocio } from '@/data/lessons/aaron-el-sacerdocio'
import { aaronYLaRestauracion as lessonAaronYLaRestauracion } from '@/data/lessons/aaron-y-la-restauracion'
import { isaiasElProfeta as lessonIsaiasElProfeta } from '@/data/lessons/isaias-el-profeta'
import { isaiasElMesianico as lessonIsaiasElMesianico } from '@/data/lessons/isaias-el-mesianico'
import { isaiasLosUltimosDias as lessonIsaiasLosUltimosDias } from '@/data/lessons/isaias-los-ultimos-dias'
import { isaiasEnElLibroDeMormon as lessonIsaiasEnElLibroDeMormon } from '@/data/lessons/isaias-en-el-libro-de-mormon'
import { isaiasYLaRestauracion as lessonIsaiasYLaRestauracion } from '@/data/lessons/isaias-y-la-restauracion'
import { eliasElCelo as lessonEliasElCelo } from '@/data/lessons/elias-el-celo'
import { eliasElAgotado as lessonEliasElAgotado } from '@/data/lessons/elias-el-agotado'
import { eliasLaTraslacion as lessonEliasLaTraslacion } from '@/data/lessons/elias-la-traslacion'
import { eliasLasLlaves as lessonEliasLasLlaves } from '@/data/lessons/elias-las-llaves'
import { eliasYLaRestauracion as lessonEliasYLaRestauracion } from '@/data/lessons/elias-y-la-restauracion'
import { davidElElegido as lessonDavidElElegido } from '@/data/lessons/david-el-elegido'
import { davidYGoliat as lessonDavidYGoliat } from '@/data/lessons/david-y-goliat'
import { davidElPoeta as lessonDavidElPoeta } from '@/data/lessons/david-el-poeta'
import { davidLaCaida as lessonDavidLaCaida } from '@/data/lessons/david-la-caida'
import { davidYLaRestauracion as lessonDavidYLaRestauracion } from '@/data/lessons/david-y-la-restauracion'
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
  enoc: {
    title: 'Enoc — El Hombre que Caminó con Dios',
    description:
      'De profeta tardo en el habla a constructor de Sión. Enoc edificó la ciudad más justa de la historia y Dios la arrebató de la tierra. Moisés 6-7 revela lo que la Biblia oculta.',
    icon: '🏙️',
  },
  noe: {
    title: 'Noé — El Justo en el Diluvio',
    description:
      'Predicó 120 años sin convertir a nadie. Construyó el arca. El diluvio llegó. Y el pacto del arco iris cambió para siempre la relación de Dios con la humanidad.',
    icon: '🌈',
  },
  melquisedec: {
    title: 'Melquisedec — El Rey-Sacerdote Eterno',
    description:
      'El sacerdocio más alto lleva su nombre. Hebreos 7 lo describe sin padre, sin madre, sin genealogía. Alma 13 revela su conversión y la ciudad que convirtió de pecadores a santos.',
    icon: '👑',
  },
  isaac: {
    title: 'Isaac — El Hijo de la Promesa',
    description:
      'El personaje más silencioso de los patriarcas. Cargó la leña de su propio sacrificio, fue atado sobre el altar, y fue "resucitado en figura." El tipo más completo de Cristo en el Antiguo Testamento.',
    icon: '🪵',
  },
  'jacob-israel': {
    title: 'Jacob-Israel — El que Luchó con Dios',
    description:
      'De suplantador a príncipe. Jacob compró la primogenitura, engañó a su padre, amó 14 años por Raquel, y una noche luchó con Dios hasta el amanecer. Su nombre cambió. El nuestro también puede.',
    icon: '🤼',
  },
  lehi: {
    title: 'Lehi — El Patriarca que Dejó Todo',
    description:
      'Un hombre rico de Jerusalén que lo abandonó todo por obediencia. Sus visiones fundaron una civilización. Su árbol de la vida es la alegoría central del Libro de Mormón. Sus bendiciones a sus hijos son profecía para naciones.',
    icon: '🌳',
  },
  nefi: {
    title: 'Nefi — "Iré y Haré"',
    description:
      'El joven que obedeció sin saber de antemano cómo. Mató a un hombre, construyó un barco sin instrucción, escribió escritura sagrada y lamentó su propia debilidad. La fe de Nefi es la que la Restauración llama al mundo a imitar.',
    icon: '⚔️',
  },
  'rey-benjamin': {
    title: 'Rey Benjamín — El Rey que Sirvió',
    description:
      'Gobernó sin cobrar tributo y trabajó con sus propias manos. Su discurso desde la torre produjo una conversión colectiva completa. "Cuando estáis al servicio de vuestros semejantes, solamente estáis al servicio de vuestro Dios."',
    icon: '🛡️',
  },
  'moroni-profeta': {
    title: 'Moroni — El Último Profeta del Libro de Mormón',
    description:
      'Sobreviviente de una civilización destruida. Solo, errante, escribió los últimos capítulos del Libro de Mormón durante décadas. Enterró las planchas. Y 1,400 años después apareció como ángel a José Smith para entregarlas.',
    icon: '📯',
  },
  mormon: {
    title: 'Mormon — El Profeta-Compilador',
    description:
      'Nombrado general a los 15 años. Compiló el Libro de Mormón de registros milenarios. Fue profeta sin audiencia, padre que entrenó a Moroni, y testigo del colapso final de su pueblo. El libro que lleva su nombre es su legado eterno.',
    icon: '📚',
  },
  moises: {
    title: 'Moisés — El Libertador de Israel',
    description:
      'Criado como príncipe egipcio, exiliado como fugitivo, llamado desde una zarza ardiente. Habló cara a cara con Dios y recibió la ley en el Sinaí. La Restauración añade un encuentro con Satanás que la Biblia no tiene.',
    icon: '🔥',
  },
  aaron: {
    title: 'Aarón — El Sumo Sacerdote',
    description:
      'Hermano y portavoz de Moisés. Realizó señales ante el Faraón, sostuvo los brazos de Moisés en la batalla — y también construyó el becerro de oro. El sacerdocio aarónico lleva su nombre por razones que la Restauración ilumina.',
    icon: '⚗️',
  },
  isaias: {
    title: 'Isaías — El Profeta de Todos los Tiempos',
    description:
      'Nefi ordenó a sus hijos estudiar las palabras de Isaías. Sus profecías mesiánicas, sobre los últimos días y sobre la Restauración son las más citadas de toda la escritura. El profeta que habla al pasado, al presente y al futuro.',
    icon: '📜',
  },
  elias: {
    title: 'Elías — El Fuego del Cielo',
    description:
      'Convocó fuego del cielo, derrotó a 450 profetas de Baal, y luego huyó de Jezabel. DyC 110 registra su aparición en el Templo de Kirtland. Malaquías prometió su regreso antes del gran día del Señor.',
    icon: '⚡',
  },
  david: {
    title: 'David — El Rey-Poeta',
    description:
      'Mató a Goliat a los 17 años, escribió los Salmos más profundos de la historia, y a los 50 destruyó su legado con Betsabé y Urías. DyC 132:39 da el veredicto eterno. Un estudio de la fe, la caída y la gracia.',
    icon: '🎵',
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
    order: 4,
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
  // ── PATRIARCAS FUNDADORES — ENOC (submodule, orders 3010-3014) ───────────
  { id: 'enoc-el-llamamiento', moduleId: 'personajes-escrituras', title: 'El Llamamiento', subtitle: 'El profeta tardo en el habla', description: 'Enoc era joven y "tardo en el habla" cuando Dios lo llamó. Su historia comienza con una negación y termina con una ciudad arrebatada al cielo.', level: 'INTERMEDIO', icon: '📢', duration: 30, order: 3010, status: 'PUBLISHED', submoduleGroup: 'enoc' },
  { id: 'enoc-el-vidente', moduleId: 'personajes-escrituras', title: 'El Vidente', subtitle: 'Las visiones del futuro de la humanidad', description: 'Enoc vio el futuro completo de la humanidad — el Diluvio, la venida de Cristo, la Restauración, la Segunda Venida. Sus visiones en Moisés 7 son las más extensas de cualquier patriarca antiguo.', level: 'AVANZADO', icon: '👁️', duration: 35, order: 3011, status: 'PUBLISHED', submoduleGroup: 'enoc' },
  { id: 'enoc-la-ciudad', moduleId: 'personajes-escrituras', title: 'La Ciudad de Sión', subtitle: 'Un pueblo de un solo corazón', description: 'Enoc construyó Sión — la única comunidad en la historia bíblica descrita como "de un solo corazón y una sola mente." No había pobres entre ellos. Y Dios la arrebató de la tierra.', level: 'AVANZADO', icon: '🏙️', duration: 35, order: 3012, status: 'PUBLISHED', submoduleGroup: 'enoc' },
  { id: 'enoc-la-traslacion', moduleId: 'personajes-escrituras', title: 'La Traslación', subtitle: 'Tomado sin probar la muerte', description: 'Enoc y toda su ciudad fueron trasladados — tomados por Dios sin morir. ¿Qué significa la traslación? ¿Qué ocurre con un ser trasladado? La doctrina restaurada tiene respuestas únicas.', level: 'AVANZADO', icon: '✨', duration: 30, order: 3013, status: 'PUBLISHED', submoduleGroup: 'enoc' },
  { id: 'enoc-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Enoc y la Restauración', subtitle: 'Lo que la Biblia no dice pero Moisés sí', description: 'El libro de Moisés en la Perla de Gran Precio revela capítulos enteros sobre Enoc que la Biblia omite. Cómo la Restauración devolvió al profeta más misterioso del Antiguo Testamento.', level: 'INTERMEDIO', icon: '📖', duration: 25, order: 3014, status: 'PUBLISHED', submoduleGroup: 'enoc' },
  // ── NOÉ (submodule, orders 3110-3114) ────────────────────────────────────
  { id: 'noe-el-predicador', moduleId: 'personajes-escrituras', title: 'El Predicador', subtitle: '120 años sin un solo converso', description: 'Noé predicó durante 120 años. No convirtió a nadie fuera de su familia. ¿Fue un fracaso? La fidelidad sin resultados visibles es una de las formas más puras de la fe.', level: 'INTERMEDIO', icon: '🗣️', duration: 30, order: 3110, status: 'PUBLISHED', submoduleGroup: 'noe' },
  { id: 'noe-el-arca', moduleId: 'personajes-escrituras', title: 'El Arca', subtitle: 'La logística de la obediencia', description: 'Construir el arca fue un acto de fe pública — visible para todos, ridiculizado por todos. Las dimensiones del arca, la logística real, y lo que significó construirla durante décadas ante un mundo incrédulo.', level: 'INTERMEDIO', icon: '🚢', duration: 30, order: 3111, status: 'PUBLISHED', submoduleGroup: 'noe' },
  { id: 'noe-el-diluvio', moduleId: 'personajes-escrituras', title: 'El Diluvio', subtitle: '¿Global o local? La perspectiva restaurada', description: '¿Fue el diluvio de Noé global o local? La ciencia, la arqueología, la teología y las revelaciones restauradas convergen en una respuesta más matizada de lo que la tradición sugiere.', level: 'AVANZADO', icon: '🌊', duration: 35, order: 3112, status: 'PUBLISHED', submoduleGroup: 'noe' },
  { id: 'noe-el-pacto', moduleId: 'personajes-escrituras', title: 'El Pacto del Arco Iris', subtitle: 'La primera alianza con toda la humanidad', description: 'El arco iris no es solo un símbolo de esperanza — es el sello de un pacto. El primer pacto que Dios hizo con toda la humanidad, no solo con Israel. Su alcance universal anticipa el evangelio eterno.', level: 'INTERMEDIO', icon: '🌈', duration: 30, order: 3113, status: 'PUBLISHED', submoduleGroup: 'noe' },
  { id: 'noe-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Noé y la Restauración', subtitle: 'El ángel Gabriel y las llaves del diluvio', description: 'En la Restauración, Noé es identificado como el ángel Gabriel. Visitó a María para anunciar el nacimiento de Cristo. Sus llaves del sacerdocio siguen activas. La historia de Noé no terminó en el arco.', level: 'AVANZADO', icon: '👼', duration: 25, order: 3114, status: 'PUBLISHED', submoduleGroup: 'noe' },
  // ── MELQUISEDEC (submodule, orders 3210-3214) ─────────────────────────────
  { id: 'melquisedec-el-rey', moduleId: 'personajes-escrituras', title: 'El Rey de Salem', subtitle: 'Sin padre, sin madre, sin genealogía', description: 'Hebreos 7 describe a Melquisedec con palabras que no se aplican a ningún otro ser humano en la Biblia: sin padre, sin madre, sin genealogía, sin principio de días ni fin de vida.', level: 'AVANZADO', icon: '👑', duration: 35, order: 3210, status: 'PUBLISHED', submoduleGroup: 'melquisedec' },
  { id: 'melquisedec-la-ciudad', moduleId: 'personajes-escrituras', title: 'La Ciudad de Paz', subtitle: 'Salem — antecedente de Sión', description: 'Alma 13 revela que Melquisedec gobernó una ciudad de "inicuos" que se convirtió en ciudad de paz. Como Enoc antes que él, transformó una comunidad entera mediante el sacerdocio y la fe.', level: 'AVANZADO', icon: '🕊️', duration: 30, order: 3211, status: 'PUBLISHED', submoduleGroup: 'melquisedec' },
  { id: 'melquisedec-tipo-de-cristo', moduleId: 'personajes-escrituras', title: 'Tipo de Cristo', subtitle: 'El sacerdocio eterno como imagen del Salvador', description: 'Hebreos 4-7 argumenta que Cristo es el sumo sacerdote "según el orden de Melquisedec." ¿Qué significa eso exactamente? La relación entre el hombre Melquisedec y el papel que prefigura es teológicamente rica.', level: 'AVANZADO', icon: '✝️', duration: 35, order: 3212, status: 'PUBLISHED', submoduleGroup: 'melquisedec' },
  { id: 'melquisedec-el-sacerdocio', moduleId: 'personajes-escrituras', title: 'El Sacerdocio', subtitle: 'Por qué lleva su nombre', description: 'El sacerdocio más alto de la Iglesia lleva el nombre de Melquisedec para evitar repetir el nombre del Hijo de Dios. DyC 107 explica el principio. La historia del sacerdocio desde Abraham hasta la Restauración.', level: 'AVANZADO', icon: '🔑', duration: 30, order: 3213, status: 'PUBLISHED', submoduleGroup: 'melquisedec' },
  { id: 'melquisedec-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Melquisedec y la Restauración', subtitle: 'Las llaves que nunca se perdieron', description: 'DyC 107:2-4 y las enseñanzas de José Smith sobre Melquisedec revelan un sacerdote que no solo existió en el pasado — cuyas llaves y ordenanza siguen activas en la Restauración.', level: 'AVANZADO', icon: '📖', duration: 25, order: 3214, status: 'PUBLISHED', submoduleGroup: 'melquisedec' },
  // ── ISAAC (submodule, orders 3310-3314) ──────────────────────────────────
  { id: 'isaac-el-hijo', moduleId: 'personajes-escrituras', title: 'El Hijo de la Promesa', subtitle: 'Nacido cuando era humanamente imposible', description: 'Abraham tenía 100 años. Sara tenía 90. Isaac nació cuando era biológicamente imposible — como señal de que el poder de Dios trasciende la naturaleza. El hijo prometido que llegó después de décadas de espera.', level: 'INTERMEDIO', icon: '👶', duration: 30, order: 3310, status: 'PUBLISHED', submoduleGroup: 'isaac' },
  { id: 'isaac-el-sacrificio', moduleId: 'personajes-escrituras', title: 'El Sacrificio en el Moriah', subtitle: 'El tipo más completo de Cristo en el AT', description: 'Isaac cargó la leña de su propio sacrificio. Fue atado sobre el altar. Y fue "resucitado en figura" cuando el ángel detuvo la mano de Abraham. Hebreos 11 lo llama el tipo más explícito de la resurrección de Cristo.', level: 'AVANZADO', icon: '🔥', duration: 35, order: 3311, status: 'PUBLISHED', submoduleGroup: 'isaac' },
  { id: 'isaac-el-esposo', moduleId: 'personajes-escrituras', title: 'El Esposo', subtitle: 'El amor que esperó al mensajero', description: 'La historia de cómo Abraham mandó a su siervo a buscar esposa para Isaac es una de las más tiernas de la Biblia. Rebeca vio al mensajero desde lejos y bajó del camello. Isaac la amó desde el primer momento.', level: 'INTERMEDIO', icon: '💍', duration: 25, order: 3312, status: 'PUBLISHED', submoduleGroup: 'isaac' },
  { id: 'isaac-el-patriarca', moduleId: 'personajes-escrituras', title: 'El Patriarca', subtitle: 'La bendición que no se puede revocar', description: 'Cuando Isaac bendijo a Jacob creyendo que era Esaú, y descubrió el engaño, no pudo revocar la bendición ya dada. ¿Por qué? Porque las bendiciones patriarcales, una vez pronunciadas con el Espíritu, son proféticas e irrevocables.', level: 'INTERMEDIO', icon: '📜', duration: 30, order: 3313, status: 'PUBLISHED', submoduleGroup: 'isaac' },
  { id: 'isaac-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Isaac y la Restauración', subtitle: '"El Dios de Abraham, Isaac y Jacob"', description: 'El nombre de Isaac está unido para siempre al nombre de Dios. "El Dios de Abraham, Isaac y Jacob" aparece más de 20 veces en las escrituras. La Restauración revela por qué este orden de nombres es inalterable.', level: 'INTERMEDIO', icon: '✨', duration: 25, order: 3314, status: 'PUBLISHED', submoduleGroup: 'isaac' },
  // ── JACOB-ISRAEL (submodule, orders 3410-3414) ───────────────────────────
  { id: 'jacob-el-suplantador', moduleId: 'personajes-escrituras', title: 'El Suplantador', subtitle: 'La primogenitura comprada con lentejas', description: 'Jacob compró la primogenitura de Esaú con un plato de lentejas. Luego engañó a su padre ciego para robar la bendición. ¿Es Jacob un héroe o un villano? La respuesta complica cualquier lectura simple.', level: 'INTERMEDIO', icon: '🍲', duration: 30, order: 3410, status: 'PUBLISHED', submoduleGroup: 'jacob-israel' },
  { id: 'jacob-el-fugitivo', moduleId: 'personajes-escrituras', title: 'El Fugitivo', subtitle: '14 años de servicio por amor', description: 'Huyendo de Esaú, Jacob llegó a Labán y se enamoró de Raquel. Trabajó 7 años por ella. Lo engañaron con Lea. Trabajó 7 más. La historia del amor más costoso del Antiguo Testamento.', level: 'INTERMEDIO', icon: '🏃', duration: 30, order: 3411, status: 'PUBLISHED', submoduleGroup: 'jacob-israel' },
  { id: 'jacob-la-lucha', moduleId: 'personajes-escrituras', title: 'La Lucha con Dios', subtitle: 'Peniel — "He visto a Dios cara a cara"', description: 'Una noche, antes de enfrentar a Esaú, Jacob luchó con un ser desconocido hasta el amanecer. Al final el ser le cambió el nombre: ya no Jacob, sino Israel. "El que lucha con Dios y prevalece."', level: 'AVANZADO', icon: '⚡', duration: 35, order: 3412, status: 'PUBLISHED', submoduleGroup: 'jacob-israel' },
  { id: 'jacob-el-padre', moduleId: 'personajes-escrituras', title: 'El Padre de las Doce Tribus', subtitle: 'La profecía sobre cada hijo', description: 'Al final de su vida, Jacob reunió a sus 12 hijos y pronunció una profecía individual para cada uno. Génesis 49 es uno de los textos proféticos más densos de la Biblia — cada bendición anticipa el destino de una tribu.', level: 'AVANZADO', icon: '👨‍👩‍👧‍👦', duration: 35, order: 3413, status: 'PUBLISHED', submoduleGroup: 'jacob-israel' },
  { id: 'jacob-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Jacob y la Restauración', subtitle: 'La reunión de Israel en los últimos días', description: 'DyC 110 registra la aparición de Elías quien trajo las llaves de la reunión de Israel. Los convenios abrahámicos con Jacob siguen activos. La "reunión de Israel" es la misión central de la Iglesia restaurada.', level: 'AVANZADO', icon: '🌐', duration: 25, order: 3414, status: 'PUBLISHED', submoduleGroup: 'jacob-israel' },
  // ── MOISÉS (submodule, orders 3510-3514) ────────────────────────────────
  { id: 'moises-el-principe', moduleId: 'personajes-escrituras', title: 'El Príncipe de Egipto', subtitle: 'Criado en el palacio, llamado en el desierto', description: 'Moisés fue adoptado por la hija del Faraón y criado en la corte más poderosa del mundo. Pero Dios lo formó en el desierto de Madián durante 40 años antes de llamarlo. La preparación invisible que precede al llamamiento visible.', level: 'INTERMEDIO', icon: '🏛️', duration: 30, order: 3510, status: 'PUBLISHED', submoduleGroup: 'moises' },
  { id: 'moises-la-revelacion', moduleId: 'personajes-escrituras', title: 'La Zarza y Moisés 1', subtitle: 'El encuentro cara a cara que la Biblia amplía', description: 'Éxodo 3 registra el llamamiento en la zarza ardiente. Pero Moisés 1 (revelado en 1830) añade un encuentro previo con Satanás y la visión del cosmos entero. La Restauración devuelve lo que los manuscritos bíblicos perdieron.', level: 'AVANZADO', icon: '🔥', duration: 35, order: 3511, status: 'PUBLISHED', submoduleGroup: 'moises' },
  { id: 'moises-el-libertador', moduleId: 'personajes-escrituras', title: 'El Libertador', subtitle: 'Las 10 plagas, el Éxodo y el Mar Rojo', description: 'Moisés confrontó al Faraón diez veces. El endurecimiento del corazón de Faraón, la Pascua como tipo de la Expiación y la travesía del Mar Rojo como tipo del bautismo son los tres grandes tipos de Cristo en el Éxodo.', level: 'INTERMEDIO', icon: '🌊', duration: 35, order: 3512, status: 'PUBLISHED', submoduleGroup: 'moises' },
  { id: 'moises-el-legislador', moduleId: 'personajes-escrituras', title: 'El Legislador', subtitle: 'La ley de Moisés como evangelio preparatorio', description: 'Moisés recibió la ley de Dios en el Sinaí después de que Israel rechazara la ley mayor. Pablo llama a la ley "ayo" — tutor que guía a Cristo. Cada sacrificio, cada rito y cada fiesta señalaba al Mesías que vendría.', level: 'AVANZADO', icon: '📜', duration: 35, order: 3513, status: 'PUBLISHED', submoduleGroup: 'moises' },
  { id: 'moises-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Moisés y la Restauración', subtitle: 'Las llaves de la reunión de Israel', description: 'DyC 110 registra la aparición de Moisés en el Templo de Kirtland el 3 de abril de 1836. Entregó las llaves de la reunión de Israel — la misión central de la Iglesia restaurada. El Éxodo de entonces prefigura el Éxodo de los últimos días.', level: 'INTERMEDIO', icon: '✨', duration: 25, order: 3514, status: 'PUBLISHED', submoduleGroup: 'moises' },
  // ── AARÓN (submodule, orders 3610-3614) ─────────────────────────────────
  { id: 'aaron-la-voz', moduleId: 'personajes-escrituras', title: 'La Voz de Moisés', subtitle: 'El portavoz que habló ante el Faraón', description: 'Cuando Moisés dijo "soy tardo en el habla", Dios designó a Aarón como su portavoz. Aarón convirtió su vara en serpiente, realizó las primeras tres plagas y habló ante el Faraón más poderoso del mundo.', level: 'BÁSICO', icon: '🗣️', duration: 25, order: 3610, status: 'PUBLISHED', submoduleGroup: 'aaron' },
  { id: 'aaron-el-sumo-sacerdote', moduleId: 'personajes-escrituras', title: 'El Sumo Sacerdote', subtitle: 'El primero en ser ungido para el servicio del tabernáculo', description: 'Dios designó a Aarón y sus hijos para el sacerdocio levítico. Levítico 8-9 describe su unción, sus vestimentas sagradas y sus responsabilidades en el tabernáculo. El Sumo Sacerdote era el único que podía entrar al Lugar Santísimo.', level: 'INTERMEDIO', icon: '⚗️', duration: 35, order: 3611, status: 'PUBLISHED', submoduleGroup: 'aaron' },
  { id: 'aaron-el-becerro', moduleId: 'personajes-escrituras', title: 'El Becerro de Oro', subtitle: 'El mayor fracaso del líder espiritual de Israel', description: 'Cuando el pueblo presionó a Aarón con "haznos dioses", cedió. Construyó el becerro de oro. Su excusa a Moisés — "lo eché al fuego y salió este becerro" — es la evasión más absurda de la Biblia. Un estudio sobre el liderazgo bajo presión.', level: 'INTERMEDIO', icon: '🐄', duration: 30, order: 3612, status: 'PUBLISHED', submoduleGroup: 'aaron' },
  { id: 'aaron-el-sacerdocio', moduleId: 'personajes-escrituras', title: 'El Sacerdocio de Aarón', subtitle: 'Por qué el sacerdocio menor lleva su nombre', description: 'El sacerdocio aarónico en la Restauración incluye las llaves del ministerio de ángeles y el evangelio de arrepentimiento y bautismo. Juan el Bautista, quien trajo estas llaves a José Smith, era sacerdote levítico de la línea de Aarón.', level: 'AVANZADO', icon: '🔑', duration: 35, order: 3613, status: 'PUBLISHED', submoduleGroup: 'aaron' },
  { id: 'aaron-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Aarón y la Restauración', subtitle: 'Las llaves del sacerdocio aarónico restauradas', description: 'El 15 de mayo de 1829, Juan el Bautista confirió el sacerdocio aarónico a José Smith y Oliver Cowdery. Este sacerdocio lleva el nombre de Aarón porque él fue el primer sumo sacerdote de la dispensación mosaica. Su herencia continúa.', level: 'INTERMEDIO', icon: '✨', duration: 25, order: 3614, status: 'PUBLISHED', submoduleGroup: 'aaron' },
  // ── PROFETAS DEL ANTIGUO TESTAMENTO (orders 40-49) ──────────────────────
  // ── ISAÍAS (submodule, orders 4010-4014) ────────────────────────────────
  { id: 'isaias-el-profeta', moduleId: 'personajes-escrituras', title: 'El Profeta', subtitle: 'Contexto histórico de la voz más citada de las Escrituras', description: 'Isaías profetizó en Jerusalén entre 740 y 700 a.C. durante el colapso del Reino del Norte y la amenaza asiria. Entender su contexto histórico — Acaz, Ezequías, Senaquerib — es la clave para leer sus profecías con precisión.', level: 'INTERMEDIO', icon: '🏛️', duration: 30, order: 4010, status: 'PUBLISHED', submoduleGroup: 'isaias' },
  { id: 'isaias-el-mesianico', moduleId: 'personajes-escrituras', title: 'El Mesíanico', subtitle: 'Las profecías de Cristo escritas 700 años antes', description: 'Isaías 7:14 (la virgen), 9:6 (el Príncipe de Paz), 53 (el Siervo Sufriente) y 61:1 (ungido para proclamar libertad) son las profecías mesiánicas más directas del Antiguo Testamento. Jesús las citó en la sinagoga de Nazaret.', level: 'AVANZADO', icon: '✝️', duration: 35, order: 4011, status: 'PUBLISHED', submoduleGroup: 'isaias' },
  { id: 'isaias-los-ultimos-dias', moduleId: 'personajes-escrituras', title: 'Los Últimos Días', subtitle: 'La montaña de la casa del Señor en los últimos días', description: 'Isaías 2, 11, 35 y 60 describen con detalle la era mesiánica final: la montaña del templo como centro de naciones, el regreso de Israel disperso, el desierto que florece y la gloria de Sión. Profecías que la Restauración identifica como literales.', level: 'AVANZADO', icon: '🌄', duration: 35, order: 4012, status: 'PUBLISHED', submoduleGroup: 'isaias' },
  { id: 'isaias-en-el-libro-de-mormon', moduleId: 'personajes-escrituras', title: 'Isaías en el Libro de Mormón', subtitle: '"Nadie puede entenderlo sin ser instruido a la manera de los judíos"', description: 'Nefi copió 21 capítulos completos de Isaías. El Señor mismo en 3 Nefi 23:1 mandó: "examinad estas cosas atentamente." ¿Por qué tanto énfasis? Un estudio de los capítulos de Isaías en el Libro de Mormón y lo que revelan.', level: 'AVANZADO', icon: '📖', duration: 35, order: 4013, status: 'PUBLISHED', submoduleGroup: 'isaias' },
  { id: 'isaias-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Isaías y la Restauración', subtitle: 'La "obra maravillosa y portento" que profetizó', description: 'Isaías 29:14 profetizó una "obra maravillosa y portento." DyC 4:1 y 2 Nefi 25:17 identifican la Restauración como su cumplimiento. José Smith citó a Isaías más que cualquier otro profeta. El "libro sellado" de Isaías 29 y las planchas de oro.', level: 'AVANZADO', icon: '✨', duration: 25, order: 4014, status: 'PUBLISHED', submoduleGroup: 'isaias' },
  // ── ELÍAS (submodule, orders 4110-4114) ─────────────────────────────────
  { id: 'elias-el-celo', moduleId: 'personajes-escrituras', title: 'El Celo de Dios', subtitle: 'El profeta que detuvo la lluvia y derrotó a Baal', description: 'Elías declaró que no llovería sin su palabra, luego desapareció. Tres años después se presentó ante Acab y desafió a 450 profetas de Baal en el monte Carmelo. Fuego del cielo. El celo de Dios manifestado en un hombre.', level: 'INTERMEDIO', icon: '🔥', duration: 30, order: 4110, status: 'PUBLISHED', submoduleGroup: 'elias' },
  { id: 'elias-el-agotado', moduleId: 'personajes-escrituras', title: 'El Agotado', subtitle: '"Ya es suficiente, Señor; quítame la vida"', description: 'Después de la victoria en el Carmelo, Elías huyó de Jezabel al desierto y pidió morir. Un ángel lo alimentó dos veces. En Horeb oyó la voz de Dios — no en el viento, ni en el terremoto, ni en el fuego — sino en una voz quieta y delicada.', level: 'INTERMEDIO', icon: '😔', duration: 30, order: 4111, status: 'PUBLISHED', submoduleGroup: 'elias' },
  { id: 'elias-la-traslacion', moduleId: 'personajes-escrituras', title: 'La Traslación', subtitle: 'Arrebatado al cielo en un carro de fuego', description: 'Elías fue trasladado sin morir — arrebatado al cielo en un carro de fuego ante los ojos de Eliseo. La Restauración enseña que los seres trasladados tienen un ministerio específico. Elías fue preservado para una misión futura.', level: 'AVANZADO', icon: '🌪️', duration: 30, order: 4112, status: 'PUBLISHED', submoduleGroup: 'elias' },
  { id: 'elias-las-llaves', moduleId: 'personajes-escrituras', title: 'Las Llaves del Sello', subtitle: 'La misión de volver los corazones de los hijos a los padres', description: 'Malaquías 4:5-6 prometió el regreso de Elías "antes del gran y terrible día del Señor." DyC 2 es la primera sección revelada porque estas llaves son el cimiento de toda la obra del templo. ¿Qué son exactamente las llaves del sello?', level: 'AVANZADO', icon: '🔑', duration: 35, order: 4113, status: 'PUBLISHED', submoduleGroup: 'elias' },
  { id: 'elias-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Elías y la Restauración', subtitle: 'La aparición en el Templo de Kirtland — 3 de abril de 1836', description: 'DyC 110 registra la aparición de Elías junto a Cristo, Moisés y Elias. Entregó las llaves del sacerdocio de Elías — el poder de sellar en la tierra lo que es sellado en el cielo. Esta fecha y este evento son el fundamento de la obra de templos.', level: 'AVANZADO', icon: '✨', duration: 25, order: 4114, status: 'PUBLISHED', submoduleGroup: 'elias' },
  // ── DAVID (submodule, orders 4210-4214) ─────────────────────────────────
  { id: 'david-el-elegido', moduleId: 'personajes-escrituras', title: 'El Elegido', subtitle: '"El Señor mira el corazón" — 1 Samuel 16', description: 'Samuel llegó a Belén a ungir a un hijo de Isaí. Siete hijos desfilaron — ninguno era el elegido. Dios dijo: "el hombre mira la apariencia, pero el Señor mira el corazón." David era el octavo hijo, pastoreando ovejas, y nadie lo había considerado.', level: 'INTERMEDIO', icon: '👑', duration: 30, order: 4210, status: 'PUBLISHED', submoduleGroup: 'david' },
  { id: 'david-y-goliat', moduleId: 'personajes-escrituras', title: 'David y Goliat', subtitle: 'La fe inductiva contra el gigante de Gat', description: 'Israel llevaba 40 días paralizado por las burlas de Goliat. David llegó con pan y queso para sus hermanos. Su argumento para pelear no era valentía — era teología: "¿Quién es este filisteo incircunciso para desafiar a los ejércitos del Dios viviente?"', level: 'INTERMEDIO', icon: '⚡', duration: 30, order: 4211, status: 'PUBLISHED', submoduleGroup: 'david' },
  { id: 'david-el-poeta', moduleId: 'personajes-escrituras', title: 'El Poeta de Israel', subtitle: 'Los Salmos como profecía mesiánica y oración universal', description: 'David escribió al menos 73 de los 150 Salmos. El Salmo 22 describe la crucifixión con 7 correspondencias exactas escritas 1,000 años antes. El Salmo 110 es el versículo del Antiguo Testamento más citado en el Nuevo Testamento.', level: 'AVANZADO', icon: '🎵', duration: 35, order: 4212, status: 'PUBLISHED', submoduleGroup: 'david' },
  { id: 'david-la-caida', moduleId: 'personajes-escrituras', title: 'La Caída', subtitle: 'Betsabé, Urías y el precio del pecado del ungido', description: 'En la primavera "cuando los reyes salen a la guerra", David se quedó en Jerusalén. Vio a Betsabé. La tomó. Hizo matar a Urías. Nathan le dijo: "Tú eres aquel hombre." El Salmo 51 es su clamor de arrepentimiento. DyC 132:39 da el veredicto eterno.', level: 'AVANZADO', icon: '💔', duration: 35, order: 4213, status: 'PUBLISHED', submoduleGroup: 'david' },
  { id: 'david-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'David y la Restauración', subtitle: 'El convenio davídico y Cristo como su cumplimiento', description: '2 Samuel 7 registra el convenio de Dios con David: un hijo suyo reinaría para siempre. DyC 113:1-6 identifica a Cristo como el Vástago de Isaías 11. El "Mesías" (ungido) era el título del rey davídico. Jesús es el David eterno.', level: 'AVANZADO', icon: '✨', duration: 25, order: 4214, status: 'PUBLISHED', submoduleGroup: 'david' },
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
  // ── LEHI (submodule, orders 7010-7014) ───────────────────────────────────
  { id: 'lehi-el-profeta', moduleId: 'personajes-escrituras', title: 'El Profeta', subtitle: 'El llamamiento en Jerusalén', description: 'Lehi era un hombre rico de Jerusalén. Tuvo visiones, predicó, fue rechazado y huyó al desierto con su familia. El profeta que lo abandonó todo antes de que alguien más lo hiciera.', level: 'INTERMEDIO', icon: '🔥', duration: 30, order: 7010, status: 'PUBLISHED', submoduleGroup: 'lehi' },
  { id: 'lehi-el-arbol', moduleId: 'personajes-escrituras', title: 'El Árbol de la Vida', subtitle: 'La alegoría central del Libro de Mormón', description: 'La visión de Lehi en 1 Nefi 8 — el árbol de fruto blanco, la barra de hierro, la niebla de oscuridad y el gran edificio — es la alegoría más citada de toda la escritura restaurada.', level: 'AVANZADO', icon: '🌳', duration: 35, order: 7011, status: 'PUBLISHED', submoduleGroup: 'lehi' },
  { id: 'lehi-las-bendiciones', moduleId: 'personajes-escrituras', title: 'Las Bendiciones Patriarcales', subtitle: 'Las últimas palabras como herencia profética', description: 'Lehi reunió a sus hijos antes de morir y pronunció una bendición profética individual para cada uno. 2 Nefi 1-4 son algunas de las palabras más emotivas y teológicamente densas del Libro de Mormón.', level: 'INTERMEDIO', icon: '📜', duration: 30, order: 7012, status: 'PUBLISHED', submoduleGroup: 'lehi' },
  { id: 'lehi-el-legado', moduleId: 'personajes-escrituras', title: 'El Legado', subtitle: 'Una decisión que cambió una civilización', description: 'La decisión de Lehi de abandonar Jerusalén dio origen a dos naciones que durarían mil años y recibirían la visita personal de Cristo resucitado. El impacto de una familia obediente en la escala de la historia.', level: 'AVANZADO', icon: '🌎', duration: 30, order: 7013, status: 'PUBLISHED', submoduleGroup: 'lehi' },
  { id: 'lehi-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Lehi y la Restauración', subtitle: 'La cadena de custodia de las planchas de oro', description: 'Los descendientes de Lehi preservaron las planchas durante mil años. Sus profecías de 1 Nefi 13-14 sobre la Restauración se cumplieron con precisión. El árbol de la vida tiene conexión directa con la teología del templo restaurado.', level: 'INTERMEDIO', icon: '✨', duration: 25, order: 7014, status: 'PUBLISHED', submoduleGroup: 'lehi' },
  // ── NEFI (submodule, orders 7110-7114) ───────────────────────────────────
  { id: 'nefi-ire-y-hare', moduleId: 'personajes-escrituras', title: '"Iré y Haré"', subtitle: 'La promesa antes del plan', description: 'Nefi prometió obedecer antes de saber cómo. Intentó tres veces obtener las planchas de Labán. La tercera, fue conducido por el Espíritu "sin saber de antemano las cosas que haría."', level: 'INTERMEDIO', icon: '⚔️', duration: 30, order: 7110, status: 'PUBLISHED', submoduleGroup: 'nefi' },
  { id: 'nefi-la-vision', moduleId: 'personajes-escrituras', title: 'La Visión', subtitle: 'Creer para ver', description: 'Nefi quiso ver lo mismo que su padre. El Espíritu le preguntó primero: "¿Crees que tu padre vio el árbol?" Su visión en 1 Nefi 11-14 expandió la de Lehi con interpretación profética completa.', level: 'AVANZADO', icon: '👁️', duration: 35, order: 7111, status: 'PUBLISHED', submoduleGroup: 'nefi' },
  { id: 'nefi-el-lamento', moduleId: 'personajes-escrituras', title: 'El Salmo de Nefi', subtitle: 'La fe que coexiste con la debilidad', description: 'En 2 Nefi 4, Nefi llora su propia imperfección con una honestidad que contrasta con toda su fortaleza. El Salmo de Nefi es uno de los textos de vida interior más auténticos de la escritura sagrada.', level: 'INTERMEDIO', icon: '😢', duration: 30, order: 7112, status: 'PUBLISHED', submoduleGroup: 'nefi' },
  { id: 'nefi-el-constructor', moduleId: 'personajes-escrituras', title: 'El Constructor', subtitle: 'El barco, el templo, la nación', description: 'Nefi construyó un barco sin saber cómo. Cruzó el océano. Fundó la Ciudad de Nefi y construyó un templo semejante al de Salomón. El obediente también construye — a escala de civilización.', level: 'INTERMEDIO', icon: '🚢', duration: 30, order: 7113, status: 'PUBLISHED', submoduleGroup: 'nefi' },
  { id: 'nefi-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Nefi y la Restauración', subtitle: 'El profeta que más nos habla directamente', description: '2 Nefi 25-29 son profecías directas sobre la Restauración: la apostasía, el Libro de Mormón, la objeción "ya tenemos Biblia," y la invitación universal. Nefi escribió estos capítulos para nosotros.', level: 'AVANZADO', icon: '📖', duration: 25, order: 7114, status: 'PUBLISHED', submoduleGroup: 'nefi' },
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
  // ── REY BENJAMÍN (submodule, orders 7410-7414) ───────────────────────────
  { id: 'rey-benjamin-el-rey-siervo', moduleId: 'personajes-escrituras', title: 'El Rey Siervo', subtitle: 'Gobernó sin cobrar tributo', description: 'Benjamín era rey pero trabajaba con sus propias manos. Fue guerrero, gobernante y servidor. Su liderazgo invierte el modelo antiguo: la autoridad que sirve es la autoridad legítima.', level: 'INTERMEDIO', icon: '🛡️', duration: 30, order: 7410, status: 'PUBLISHED', submoduleGroup: 'rey-benjamin' },
  { id: 'rey-benjamin-la-deuda', moduleId: 'personajes-escrituras', title: 'La Deuda Impagable', subtitle: 'El argumento más poderoso sobre la gracia', description: 'Mosíah 2:20-25 demuestra que no podemos saldar nuestra deuda con Dios — cada capacidad de servirle viene de Él. La única respuesta posible a la gracia es gratitud, no pago.', level: 'AVANZADO', icon: '⚖️', duration: 35, order: 7411, status: 'PUBLISHED', submoduleGroup: 'rey-benjamin' },
  { id: 'rey-benjamin-el-nombre', moduleId: 'personajes-escrituras', title: 'El Nombre de Cristo', subtitle: 'Tomar el nombre como convenio', description: 'Mosíah 5:7-15 describe el convenio del pueblo de tomar sobre sí el nombre de Cristo. La conversión colectiva que siguió al discurso es única en la escritura: todos, sin excepción, experimentaron un cambio de corazón.', level: 'AVANZADO', icon: '✝️', duration: 35, order: 7412, status: 'PUBLISHED', submoduleGroup: 'rey-benjamin' },
  { id: 'rey-benjamin-el-projimo', moduleId: 'personajes-escrituras', title: 'El Prójimo como Dios', subtitle: '"Al servicio de vuestros semejantes..."', description: 'Mosíah 2:17 es el versículo más citado de Rey Benjamín: servir a los demás ES servir a Dios. La teología del servicio como identidad — no como deber — es el legado práctico de su reinado.', level: 'INTERMEDIO', icon: '🤝', duration: 30, order: 7413, status: 'PUBLISHED', submoduleGroup: 'rey-benjamin' },
  { id: 'rey-benjamin-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Rey Benjamín y la Restauración', subtitle: 'El sermón más completo sobre la Expiación antes de Cristo', description: 'El discurso de Rey Benjamín en Mosíah 3-5 es el tratado pre-cristiano más completo sobre la Expiación en la escritura. Su ceremonia de renovación de convenio anticipa la estructura del templo restaurado.', level: 'AVANZADO', icon: '✨', duration: 25, order: 7414, status: 'PUBLISHED', submoduleGroup: 'rey-benjamin' },
  {
    id: 'capitan-moroni',
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
  // ── MORONI PROFETA (submodule, orders 7710-7714) ─────────────────────────
  { id: 'moroni-el-sobreviviente', moduleId: 'personajes-escrituras', title: 'El Sobreviviente', subtitle: 'Solo después de Cumorah', description: 'Moroni sobrevivió al genocidio de 230,000 nefitas incluyendo a su padre Mormon. Solo, errante, sin familia ni comunidad, escribió para una audiencia que no conocería nunca.', level: 'AVANZADO', icon: '🗡️', duration: 35, order: 7710, status: 'PUBLISHED', submoduleGroup: 'moroni-profeta' },
  { id: 'moroni-la-profecia', moduleId: 'personajes-escrituras', title: 'La Profecía', subtitle: 'El diagnóstico de nuestra época', description: 'Mormón 8:35-41: Moroni describe con precisión la época en que el Libro de Mormón sería traducido. Orgullo, ropa de lujo, abandono de los pobres, contaminación de la iglesia. Nos habla directamente.', level: 'AVANZADO', icon: '🔭', duration: 35, order: 7711, status: 'PUBLISHED', submoduleGroup: 'moroni-profeta' },
  { id: 'moroni-la-promesa', moduleId: 'personajes-escrituras', title: 'La Promesa', subtitle: 'Cómo saber que el libro es verdadero', description: 'Moroni 10:3-5 ofrece la promesa más conocida del Libro de Mormón: ponder, pray with sincere heart and real intent, and God will manifest the truth by the Holy Ghost. El mecanismo de confirmación espiritual.', level: 'INTERMEDIO', icon: '🙏', duration: 30, order: 7712, status: 'PUBLISHED', submoduleGroup: 'moroni-profeta' },
  { id: 'moroni-las-planchas', moduleId: 'personajes-escrituras', title: 'El Ángel', subtitle: 'De guardián a mensajero de la Restauración', description: 'Moroni como ser resucitado visitó a José Smith a partir del 21 de septiembre de 1823. Cuatro años de preparación antes de la entrega de las planchas. Apocalipsis 14:6 lo profetizó 1,700 años antes.', level: 'AVANZADO', icon: '📿', duration: 30, order: 7713, status: 'PUBLISHED', submoduleGroup: 'moroni-profeta' },
  { id: 'moroni-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Moroni y la Restauración', subtitle: 'La figura en la cima del templo', description: 'Moroni corona los templos del mundo con su trompeta — el heraldo de la Restauración. DyC 27:5 lo identifica. Sus palabras a José Smith cruzaron 1,400 años de silencio para inaugurar la última dispensación.', level: 'AVANZADO', icon: '📯', duration: 25, order: 7714, status: 'PUBLISHED', submoduleGroup: 'moroni-profeta' },
  // ── MORMON EL PROFETA (submodule, orders 7810-7814) ──────────────────────
  { id: 'mormon-el-general', moduleId: 'personajes-escrituras', title: 'El General', subtitle: 'Nombrado comandante a los 15 años', description: 'Mormon dirigió los ejércitos nefitas durante 60 años en guerras cada vez más desesperadas. Un general justo al servicio de un pueblo injusto. Cuando el pueblo atacó por venganza, se negó a liderarlos.', level: 'AVANZADO', icon: '⚔️', duration: 35, order: 7810, status: 'PUBLISHED', submoduleGroup: 'mormon' },
  { id: 'mormon-el-compilador', moduleId: 'personajes-escrituras', title: 'El Compilador', subtitle: 'El editor más importante de la historia sagrada', description: 'Mormon tuvo acceso a milenios de registros nefitas. Eligió qué incluir, qué omitir, y por qué. Su voz editorial ("y así vemos") aparece en todo el libro. Es uno de los narradores más conscientes de sí mismos en la literatura antigua.', level: 'AVANZADO', icon: '📚', duration: 35, order: 7811, status: 'PUBLISHED', submoduleGroup: 'mormon' },
  { id: 'mormon-el-profeta', moduleId: 'personajes-escrituras', title: 'El Profeta', subtitle: 'Visitado por el Señor a los 15 años', description: 'A los 10, Ammoró lo preparó para la misión de los registros. A los 15 fue visitado del Señor. A los 15 también tomó el mando del ejército. Mormon fue profeta y general simultáneamente, en un pueblo que rechazaba ambas cosas.', level: 'AVANZADO', icon: '🌟', duration: 30, order: 7812, status: 'PUBLISHED', submoduleGroup: 'mormon' },
  { id: 'mormon-el-padre', moduleId: 'personajes-escrituras', title: 'El Padre', subtitle: 'Las cartas de un padre a su hijo durante el apocalipsis', description: 'Las cartas de Mormon a Moroni sobre el bautismo infantil (Moroni 8) muestran un teólogo preciso escribiendo en medio de la guerra. Entrenó a Moroni militarmente y espiritualmente. Le entregó las planchas y la misión.', level: 'INTERMEDIO', icon: '👨‍👦', duration: 30, order: 7813, status: 'PUBLISHED', submoduleGroup: 'mormon' },
  { id: 'mormon-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Mormon y la Restauración', subtitle: 'El libro que lleva su nombre', description: 'Mormon nunca supo que el registro que compiló en los últimos días de una civilización colapsada sería traducido 1,400 años después y cambiaría el mundo. Sus palabras directas a los futuros lectores son una carta abierta para nosotros.', level: 'AVANZADO', icon: '📖', duration: 25, order: 7814, status: 'PUBLISHED', submoduleGroup: 'mormon' },
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
  // ── DISCURSOS CLÁSICOS ADICIONALES (orders 5-8) ──────────────────────────────
  {
    id: 'permanecer-para-siempre',
    moduleId: 'discursos-sermones-clasicos',
    title: 'Permanecer Para Siempre',
    subtitle: 'Lawrence E. Corbridge · BYU Devotional, 2019',
    description:
      'Cómo responder al antagonismo intelectual contra la Iglesia: el método científico aplicado a la fe según Alma 32, la diferencia entre dudas y preguntas, y las cuatro preguntas que toda crítica debe responder antes de descartarse.',
    level: 'INTERMEDIO',
    icon: '🔍',
    duration: 65,
    order: 5,
    status: 'PUBLISHED',
  },
  {
    id: 'pensar-de-manera-celestial',
    moduleId: 'discursos-sermones-clasicos',
    title: 'Pensar de Manera Celestial',
    subtitle: 'Russell M. Nelson · Conferencia General, Oct 2023',
    description:
      'El profeta a sus 99 años revela que la manera en que pensamos determina nuestra felicidad eterna. D&C 88:28-32 y D&C 132:19: las tres consecuencias eternas del pensamiento, y la invitación práctica a elevar nuestra mente al nivel celestial.',
    level: 'BÁSICO',
    icon: '⭐',
    duration: 55,
    order: 6,
    status: 'PUBLISHED',
  },
  {
    id: 'sumo-sacerdote-bienes-venideros',
    moduleId: 'discursos-sermones-clasicos',
    title: 'El Sumo Sacerdote de los Bienes Venideros',
    subtitle: 'Jeffrey R. Holland · Conferencia General, Oct 1999',
    description:
      'Los primeros pasos son los más difíciles de cualquier camino de fe. Holland explora Hebreos 8:6, el patrón de Abraham, y el Salvador que también esperó — para darnos certeza de que las bendiciones prometidas, aunque tardías, siempre llegan.',
    level: 'BÁSICO',
    icon: '⚓',
    duration: 45,
    order: 7,
    status: 'PUBLISHED',
  },
  {
    id: 'el-domingo-llegara',
    moduleId: 'discursos-sermones-clasicos',
    title: 'El Domingo Llegará',
    subtitle: 'Joseph B. Wirthlin · Conferencia General, Oct 2006',
    description:
      'Hermano Wirthlin perdió a su esposa de 56 años, a su madre a los 98, y a su hija Elisa repentinamente. Su mensaje es simple y eterno: así como al Viernes Santo siguió el Domingo de Resurrección, toda noche oscura del alma tiene su amanecer.',
    level: 'BÁSICO',
    icon: '🌅',
    duration: 45,
    order: 8,
    status: 'PUBLISHED',
  },
  // ── TEMAS PROFUNDOS ADICIONALES (orders 4-5) ──────────────────────────────────
  {
    id: 'el-gran-plan-de-la-felicidad',
    moduleId: 'temas-profundos',
    title: 'El Gran Plan de la Felicidad',
    subtitle: 'Tyler J. Griffin y Donald B. Anderson · BYU Religious Education',
    description:
      '¿Por qué los diagramas tradicionales del plan de salvación fallan? Un análisis académico de los seis estados de la existencia humana, la distinción entre redención incondicional y salvación condicional, y cómo Cristo aparece en cada etapa del plan.',
    level: 'INTERMEDIO',
    icon: '🗺️',
    duration: 70,
    order: 4,
    status: 'PUBLISHED',
  },
  {
    id: 'fechando-la-muerte-de-cristo',
    moduleId: 'temas-profundos',
    title: 'Fechando la Muerte de Cristo',
    subtitle: 'Jeffrey R. Chadwick (BYU Studies) · Scripture Central KnoWhy #300',
    description:
      'Evidencia astronómica, el calendario judío y el Libro de Mormón convergen en una misma fecha: Nisan 14, jueves 6 de abril del año 30 d.C. — exactamente 1,800 años antes de la organización de la Iglesia. Un análisis académico riguroso con implicaciones profundas para la fe.',
    level: 'AVANZADO',
    icon: '📅',
    duration: 65,
    order: 5,
    status: 'PUBLISHED',
  },
  // ── SACERDOCIO ADICIONAL (orders 11-15) ──────────────────────────────────────
  {
    id: 'sacerdocio-poder-mujer',
    moduleId: 'sacerdocio',
    title: 'Sacerdocio, Poder y la Mujer',
    subtitle: 'Barbara Morgan Gardner · BYU Religious Education, 2021',
    description:
      'Russell M. Nelson preguntó en 2019: "¿Cuánto poder del sacerdocio tienen las mujeres en la Iglesia?" La respuesta cambia todo. Estudio del sacerdocio patriarcal vs. administrativo, lo que se perdió en la apostasía, lo que Elías restauró en 1836, y la autoridad plena de la mujer en sus llamamientos.',
    level: 'AVANZADO',
    icon: '👑',
    duration: 75,
    order: 11,
    status: 'PUBLISHED',
  },
  {
    id: 'el-obispo',
    moduleId: 'sacerdocio',
    title: 'El Obispo',
    subtitle: 'Pastor, juez y padre espiritual del rebaño local',
    description:
      'El Obispo preside el barrio, tiene las llaves del sacerdocio aarónico, y actúa como juez en Israel. Pedro llamó a Cristo "el Obispo de vuestras almas" — y en Él encontramos el patrón de todo lo que un obispo debe ser.',
    level: 'INTERMEDIO',
    icon: '🏛️',
    duration: 50,
    order: 12,
    status: 'PUBLISHED',
  },
  {
    id: 'el-apostol',
    moduleId: 'sacerdocio',
    title: 'El Apóstol',
    subtitle: 'Testigo especial del nombre de Cristo en todo el mundo',
    description:
      'El Apóstol no es simplemente un líder senior — es un testigo especial del nombre de Cristo con autoridad mundial. El Quórum de los Doce sostiene todas las llaves del reino en reserva, listo para ejercerlas cuando sea necesario.',
    level: 'AVANZADO',
    icon: '🕊️',
    duration: 60,
    order: 13,
    status: 'PUBLISHED',
  },
  {
    id: 'el-presidente-de-la-iglesia',
    moduleId: 'sacerdocio',
    title: 'El Presidente de la Iglesia',
    subtitle: 'Profeta, Vidente y Revelador — el único que ejerce todas las llaves',
    description:
      'El Presidente de la Iglesia es el único ser en la tierra que ejerce simultáneamente todas las llaves del sacerdocio. No es un administrador — es el portavoz viviente de Cristo ante Su Iglesia y el mundo.',
    level: 'AVANZADO',
    icon: '🔱',
    duration: 55,
    order: 14,
    status: 'PUBLISHED',
  },
  {
    id: 'cristo-el-gran-sumo-sacerdote',
    moduleId: 'sacerdocio',
    title: 'Cristo — El Gran Sumo Sacerdote',
    subtitle: 'Cada oficio del sacerdocio es un tipo de Él',
    description:
      'El Sacerdocio de Melquisedec se llama así para evitar repetir el nombre del Hijo de Dios. Hebreos 4-9 es el tratado más profundo del NT sobre el sacerdocio — y Jesucristo es su conclusión y capstone. Cada oficio que has estudiado apunta a Él.',
    level: 'AVANZADO',
    icon: '⚜️',
    duration: 70,
    order: 15,
    status: 'PUBLISHED',
  },
  // ── TEMAS PROFUNDOS ADICIONALES (orders 6-7) ─────────────────────────────────
  {
    id: 'lucifer',
    moduleId: 'temas-profundos',
    title: 'Lucifer — El Hijo de la Mañana',
    subtitle: 'De estrella premortal a adversario eterno',
    description:
      'Lucifer fue uno de los espíritus más prominentes del mundo premortal. Su plan alternativo en el Gran Concilio, la Guerra en el Cielo, sus estrategias contra la humanidad, y su destino final. La doctrina restaurada revela más sobre Satanás que cualquier otra tradición cristiana.',
    level: 'AVANZADO',
    icon: '🌑',
    duration: 90,
    order: 20,
    status: 'PUBLISHED',
  },
  {
    id: 'el-mundo-de-los-espiritus',
    moduleId: 'temas-profundos',
    title: 'El Mundo de los Espíritus',
    subtitle: 'El reino intermedio entre la muerte y la resurrección',
    description:
      'Entre la muerte y la resurrección existe un reino real, habitado por espíritus conscientes que recuerdan quiénes son, aprenden el evangelio, y esperan la resurrección. DyC 138 revela su organización. La Restauración lo ha descrito con más detalle que ninguna otra tradición.',
    level: 'AVANZADO',
    icon: '🌌',
    duration: 95,
    order: 21,
    status: 'PUBLISHED',
  },
  {
    id: 'elohim-el-padre-celestial',
    moduleId: 'temas-profundos',
    title: 'Elohim — El Padre Celestial',
    subtitle: 'La doctrina más radical de la Restauración: Dios es un Ser personal',
    description:
      'El Padre Celestial no es una fuerza abstracta. Es un Ser glorificado, con cuerpo de carne y huesos resucitado. Somos literalmente Sus hijos. Esta es la doctrina que más separa a la Restauración del mundo cristiano — y la que más cambia todo lo demás.',
    level: 'AVANZADO',
    icon: '✨',
    duration: 65,
    order: 6,
    status: 'PUBLISHED',
  },
  {
    id: 'la-divinidad',
    moduleId: 'temas-profundos',
    title: 'La Divinidad',
    subtitle: 'Tres Seres distintos — no la Trinidad de Nicea',
    description:
      'El Concilio de Nicea (325 d.C.) redefinió a Dios como una sustancia trinitaria incognoscible. La Primera Visión de José Smith revirtió 1,500 años de teología en treinta segundos: el Padre y el Hijo son dos Seres distintos, y el Espíritu Santo es un tercero.',
    level: 'AVANZADO',
    icon: '🌟',
    duration: 70,
    order: 7,
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
  'permanecer-para-siempre': lessonPermanecerParaSiempre,
  'pensar-de-manera-celestial': lessonPensarCelestial,
  'sumo-sacerdote-bienes-venideros': lessonSumoSacerdoteHolland,
  'el-domingo-llegara': lessonElDomingoLlegara,
  'el-gran-plan-de-la-felicidad': lessonGranPlan,
  'sacerdocio-poder-mujer': lessonSacerdocioPoderMujer,
  'fechando-la-muerte-de-cristo': lessonFechandoMuerte,
  'el-obispo': lessonElObispo,
  'el-apostol': lessonElApostol,
  'el-presidente-de-la-iglesia': lessonElPresidente,
  'elohim-el-padre-celestial': lessonElohim,
  'la-divinidad': lessonLaDivinidad,
  'cristo-el-gran-sumo-sacerdote': lessonCristoSumoSacerdote,
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
  'lucifer': lessonLucifer,
  'el-mundo-de-los-espiritus': lessonMundoEspiritus,
  'lehi-el-profeta': lessonLehiElProfeta,
  'lehi-el-arbol': lessonLehiElArbol,
  'lehi-las-bendiciones': lessonLehiLasBendiciones,
  'lehi-el-legado': lessonLehiElLegado,
  'lehi-y-la-restauracion': lessonLehiYLaRestauracion,
  'nefi-ire-y-hare': lessonNefiIreYHare,
  'nefi-la-vision': lessonNefiLaVision,
  'nefi-el-lamento': lessonNefiElLamento,
  'nefi-el-constructor': lessonNefiElConstructor,
  'nefi-y-la-restauracion': lessonNefiYLaRestauracion,
  'rey-benjamin-el-rey-siervo': lessonReyBenjaminElReySiervo,
  'rey-benjamin-la-deuda': lessonReyBenjaminLaDeuda,
  'rey-benjamin-el-nombre': lessonReyBenjaminElNombre,
  'rey-benjamin-el-projimo': lessonReyBenjaminElProjimo,
  'rey-benjamin-y-la-restauracion': lessonReyBenjaminYLaRestauracion,
  'moroni-el-sobreviviente': lessonMoroniElSobreviviente,
  'moroni-la-profecia': lessonMoroniLaProfecia,
  'moroni-la-promesa': lessonMoroniLaPromesa,
  'moroni-las-planchas': lessonMoroniLasPlanchas,
  'moroni-y-la-restauracion': lessonMoroniYLaRestauracion,
  'mormon-el-general': lessonMormonElGeneral,
  'mormon-el-compilador': lessonMormonElCompilador,
  'mormon-el-profeta': lessonMormonElProfeta,
  'mormon-el-padre': lessonMormonElPadre,
  'mormon-y-la-restauracion': lessonMormonYLaRestauracion,
  'enoc-el-llamamiento': lessonEnocElLlamamiento,
  'enoc-el-vidente': lessonEnocElVidente,
  'enoc-la-ciudad': lessonEnocLaCiudad,
  'enoc-la-traslacion': lessonEnocLaTraslacion,
  'enoc-y-la-restauracion': lessonEnocYLaRestauracion,
  'noe-el-predicador': lessonNoeElPredicador,
  'noe-el-arca': lessonNoeElArca,
  'noe-el-diluvio': lessonNoeElDiluvio,
  'noe-el-pacto': lessonNoeElPacto,
  'noe-y-la-restauracion': lessonNoeYLaRestauracion,
  'melquisedec-el-rey': lessonMelquisedecElRey,
  'melquisedec-la-ciudad': lessonMelquisedecLaCiudad,
  'melquisedec-tipo-de-cristo': lessonMelquisedecTipoDeCristo,
  'melquisedec-el-sacerdocio': lessonMelquisedecElSacerdocio,
  'melquisedec-y-la-restauracion': lessonMelquisedecYLaRestauracion,
  'isaac-el-hijo': lessonIsaacElHijo,
  'isaac-el-sacrificio': lessonIsaacElSacrificio,
  'isaac-el-esposo': lessonIsaacElEsposo,
  'isaac-el-patriarca': lessonIsaacElPatriarca,
  'isaac-y-la-restauracion': lessonIsaacYLaRestauracion,
  'jacob-el-suplantador': lessonJacobElSuplantador,
  'jacob-el-fugitivo': lessonJacobElFugitivo,
  'jacob-la-lucha': lessonJacobLaLucha,
  'jacob-el-padre': lessonJacobElPadre,
  'jacob-y-la-restauracion': lessonJacobYLaRestauracion,
  'moises-el-principe': lessonMoisesElPrincipe,
  'moises-la-revelacion': lessonMoisesLaRevelacion,
  'moises-el-libertador': lessonMoisesElLibertador,
  'moises-el-legislador': lessonMoisesElLegislador,
  'moises-y-la-restauracion': lessonMoisesYLaRestauracion,
  'aaron-la-voz': lessonAaronLaVoz,
  'aaron-el-sumo-sacerdote': lessonAaronElSumoSacerdote,
  'aaron-el-becerro': lessonAaronElBecerro,
  'aaron-el-sacerdocio': lessonAaronElSacerdocio,
  'aaron-y-la-restauracion': lessonAaronYLaRestauracion,
  'isaias-el-profeta': lessonIsaiasElProfeta,
  'isaias-el-mesianico': lessonIsaiasElMesianico,
  'isaias-los-ultimos-dias': lessonIsaiasLosUltimosDias,
  'isaias-en-el-libro-de-mormon': lessonIsaiasEnElLibroDeMormon,
  'isaias-y-la-restauracion': lessonIsaiasYLaRestauracion,
  'elias-el-celo': lessonEliasElCelo,
  'elias-el-agotado': lessonEliasElAgotado,
  'elias-la-traslacion': lessonEliasLaTraslacion,
  'elias-las-llaves': lessonEliasLasLlaves,
  'elias-y-la-restauracion': lessonEliasYLaRestauracion,
  'david-el-elegido': lessonDavidElElegido,
  'david-y-goliat': lessonDavidYGoliat,
  'david-el-poeta': lessonDavidElPoeta,
  'david-la-caida': lessonDavidLaCaida,
  'david-y-la-restauracion': lessonDavidYLaRestauracion,
  'jeremias': lessonJeremias,
  'daniel': lessonDaniel,
  'job': lessonJob,
  'ezequiel': lessonEzequiel,
  'pedro': lessonPedro,
  'pablo': lessonPablo,
  'juan-el-bautista': lessonJuanElBautista,
  'maria-magdalena': lessonMariaMagdalena,
  'tomas': lessonTomas,
  'santiago-el-justo': lessonSantiagoElJusto,
  'sara': lessonSara,
  'rut': lessonRut,
  'ester': lessonEster,
  'debora': lessonDebora,
  'maria-la-madre': lessonMariaLaMadre,
  'el-hermano-de-jared': lessonHermanoDeJared,
  'ammon': lessonAmmon,
  'capitan-moroni': lessonCapitanMoroni,
  'samuel-el-lamanita': lessonSamuelElLamanita,
  'jose-smith': lessonJoseSmith,
  'emma-smith': lessonEmmaSmith,
  'hyrum-smith': lessonHyrumSmith,
  'oliver-cowdery': lessonOliverCowdery,
  'brigham-young': lessonBrighamYoung,
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
