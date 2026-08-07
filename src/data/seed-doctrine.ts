/**
 * Datos semilla: catálogo unificado de módulos y lecciones (sin iframes).
 */
import { davidAssets } from '@/data/davidAssets'
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
import { guiaEscriturasClaveMisioneros as lessonGuiaEscriturasMisioneros } from '@/data/lessons/guia-escrituras-clave-misioneros'
import { preparacionMisionalJovenes as lessonPreparacionMisionalJovenes } from '@/data/lessons/preparacion-misional-jovenes'
import { preparacionMisionalPadres as lessonPreparacionMisionalPadres } from '@/data/lessons/preparacion-misional-padres'
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
import { jeremiasElLlamamiento as lessonJeremiasElLlamamiento } from '@/data/lessons/jeremias-el-llamamiento'
import { jeremiasElPerseguido as lessonJeremiasElPerseguido } from '@/data/lessons/jeremias-el-perseguido'
import { jeremiasLasLamentaciones as lessonJeremiasLasLamentaciones } from '@/data/lessons/jeremias-las-lamentaciones'
import { jeremiasElNuevoConvenio as lessonJeremiasElNuevoConvenio } from '@/data/lessons/jeremias-el-nuevo-convenio'
import { jeremiasYLaRestauracion as lessonJeremiasYLaRestauracion } from '@/data/lessons/jeremias-y-la-restauracion'
import { danielElCautivo as lessonDanielElCautivo } from '@/data/lessons/daniel-el-cautivo'
import { danielElFiel as lessonDanielElFiel } from '@/data/lessons/daniel-el-fiel'
import { danielLasVisiones as lessonDanielLasVisiones } from '@/data/lessons/daniel-las-visiones'
import { danielEnElFoso as lessonDanielEnElFoso } from '@/data/lessons/daniel-en-el-foso'
import { danielYLaRestauracion as lessonDanielYLaRestauracion } from '@/data/lessons/daniel-y-la-restauracion'
import { jobElJusto as lessonJobElJusto } from '@/data/lessons/job-el-justo'
import { jobElSufrimiento as lessonJobElSufrimiento } from '@/data/lessons/job-el-sufrimiento'
import { jobLosAmigos as lessonJobLosAmigos } from '@/data/lessons/job-los-amigos'
import { jobLaRespuesta as lessonJobLaRespuesta } from '@/data/lessons/job-la-respuesta'
import { jobYLaRestauracion as lessonJobYLaRestauracion } from '@/data/lessons/job-y-la-restauracion'
import { ezequielLaVision as lessonEzequielLaVision } from '@/data/lessons/ezequiel-la-vision'
import { ezequielElGuardian as lessonEzequielElGuardian } from '@/data/lessons/ezequiel-el-guardian'
import { ezequielLosHuesoSecos as lessonEzequielLosHueoSecos } from '@/data/lessons/ezequiel-los-huesos-secos'
import { ezequielLosDoPalos as lessonEzequielLosDoPalos } from '@/data/lessons/ezequiel-los-dos-palos'
import { ezequielYLaRestauracion as lessonEzequielYLaRestauracion } from '@/data/lessons/ezequiel-y-la-restauracion'
import { pedroElPescador as lessonPedroElPescador } from '@/data/lessons/pedro-el-pescador'
import { pedroLaConfesion as lessonPedroLaConfesion } from '@/data/lessons/pedro-la-confesion'
import { pedroLaNegacion as lessonPedroLaNegacion } from '@/data/lessons/pedro-la-negacion'
import { pedroElApostol as lessonPedroElApostol } from '@/data/lessons/pedro-el-apostol'
import { pedroYLaRestauracion as lessonPedroYLaRestauracion } from '@/data/lessons/pedro-y-la-restauracion'
import { pabloElPerseguidor as lessonPabloElPerseguidor } from '@/data/lessons/pablo-el-perseguidor'
import { pabloLaConversion as lessonPabloLaConversion } from '@/data/lessons/pablo-la-conversion'
import { pabloElMisionero as lessonPabloElMisionero } from '@/data/lessons/pablo-el-misionero'
import { pabloLaTeologia as lessonPabloLaTeologia } from '@/data/lessons/pablo-la-teologia'
import { pabloYLaRestauracion as lessonPabloYLaRestauracion } from '@/data/lessons/pablo-y-la-restauracion'
import { juanBautistaElPrecursor as lessonJuanBautistaElPrecursor } from '@/data/lessons/juan-bautista-el-precursor'
import { juanBautistaElBautismo as lessonJuanBautistaElBautismo } from '@/data/lessons/juan-bautista-el-bautismo'
import { juanBautistaElMayor as lessonJuanBautistaElMayor } from '@/data/lessons/juan-bautista-el-mayor'
import { juanBautistaLaPrision as lessonJuanBautistaLaPrision } from '@/data/lessons/juan-bautista-la-prision'
import { juanBautistaYLaRestauracion as lessonJuanBautistaYLaRestauracion } from '@/data/lessons/juan-bautista-y-la-restauracion'
import { mariaMagdalenaElMito as lessonMariaMagdalenaElMito } from '@/data/lessons/maria-magdalena-el-mito'
import { mariaMagdalenaLaDiscipula as lessonMariaMagdalenaLaDiscipula } from '@/data/lessons/maria-magdalena-la-discipula'
import { mariaMagdalenaLaCruz as lessonMariaMagdalenaLaCruz } from '@/data/lessons/maria-magdalena-la-cruz'
import { mariaMagdalenaLaResurreccion as lessonMariaMagdalenaLaResurreccion } from '@/data/lessons/maria-magdalena-la-resurreccion'
import { mariaMagdalenaYLaRestauracion as lessonMariaMagdalenaYLaRestauracion } from '@/data/lessons/maria-magdalena-y-la-restauracion'
import { tomasElGemelo as lessonTomasElGemelo } from '@/data/lessons/tomas-el-gemelo'
import { tomasLaDuda as lessonTomasLaDuda } from '@/data/lessons/tomas-la-duda'
import { tomasLaConfesion as lessonTomasLaConfesion } from '@/data/lessons/tomas-la-confesion'
import { tomasElMisionero as lessonTomasElMisionero } from '@/data/lessons/tomas-el-misionero'
import { tomasYLaRestauracion as lessonTomasYLaRestauracion } from '@/data/lessons/tomas-y-la-restauracion'
import { santiagoElIncredulo as lessonSantiagoElIncredulo } from '@/data/lessons/santiago-el-incredulo'
import { santiagoElApostol as lessonSantiagoElApostol } from '@/data/lessons/santiago-el-apostol'
import { santiagoElLider as lessonSantiagoElLider } from '@/data/lessons/santiago-el-lider'
import { santiagoLaEpistola as lessonSantiagoLaEpistola } from '@/data/lessons/santiago-la-epistola'
import { santiagoYLaRestauracion as lessonSantiagoYLaRestauracion } from '@/data/lessons/santiago-y-la-restauracion'
import { saraLaEsposa as lessonSaraLaEsposa } from '@/data/lessons/sara-la-esposa'
import { saraLaRisa as lessonSaraLaRisa } from '@/data/lessons/sara-la-risa'
import { saraYAgar as lessonSaraYAgar } from '@/data/lessons/sara-y-agar'
import { saraLaMadre as lessonSaraLaMadre } from '@/data/lessons/sara-la-madre'
import { saraYLaRestauracion as lessonSaraYLaRestauracion } from '@/data/lessons/sara-y-la-restauracion'
import { rutLaMoabita as lessonRutLaMoabita } from '@/data/lessons/rut-la-moabita'
import { rutLaLeal as lessonRutLaLeal } from '@/data/lessons/rut-la-leal'
import { rutEnLosCampos as lessonRutEnLosCampos } from '@/data/lessons/rut-en-los-campos'
import { rutYBoaz as lessonRutYBoaz } from '@/data/lessons/rut-y-boaz'
import { rutYLaRestauracion as lessonRutYLaRestauracion } from '@/data/lessons/rut-y-la-restauracion'
import { esterLaHuerfana as lessonEsterLaHuerfana } from '@/data/lessons/ester-la-huerfana'
import { esterLaReina as lessonEsterLaReina } from '@/data/lessons/ester-la-reina'
import { esterElDecreto as lessonEsterElDecreto } from '@/data/lessons/ester-el-decreto'
import { esterElValor as lessonEsterElValor } from '@/data/lessons/ester-el-valor'
import { esterYLaRestauracion as lessonEsterYLaRestauracion } from '@/data/lessons/ester-y-la-restauracion'
import { deboraLaJueza as lessonDeboraLaJueza } from '@/data/lessons/debora-la-jueza'
import { deboraLaProfetisa as lessonDeboraLaProfetisa } from '@/data/lessons/debora-la-profetisa'
import { deboraLaGuerrera as lessonDeboraLaGuerrera } from '@/data/lessons/debora-la-guerrera'
import { deboraYJael as lessonDeboraYJael } from '@/data/lessons/debora-y-jael'
import { deboraYLaRestauracion as lessonDeboraYLaRestauracion } from '@/data/lessons/debora-y-la-restauracion'
import { mariaMadreElAnuncio as lessonMariaMadreElAnuncio } from '@/data/lessons/maria-madre-el-anuncio'
import { mariaMadreLaVisitacion as lessonMariaMadreLaVisitacion } from '@/data/lessons/maria-madre-la-visitacion'
import { mariaMadreYJose as lessonMariaMadreYJose } from '@/data/lessons/maria-madre-y-jose'
import { mariaMadreEnLaCruz as lessonMariaMadreEnLaCruz } from '@/data/lessons/maria-madre-en-la-cruz'
import { mariaMadreYLaRestauracion as lessonMariaMadreYLaRestauracion } from '@/data/lessons/maria-madre-y-la-restauracion'
import { hermanoJaredLaTorre as lessonHermanoJaredLaTorre } from '@/data/lessons/hermano-jared-la-torre'
import { hermanoJaredElViaje as lessonHermanoJaredElViaje } from '@/data/lessons/hermano-jared-el-viaje'
import { hermanoJaredLasPiedras as lessonHermanoJaredLasPiedras } from '@/data/lessons/hermano-jared-las-piedras'
import { hermanoJaredLaVision as lessonHermanoJaredLaVision } from '@/data/lessons/hermano-jared-la-vision'
import { hermanoJaredYLaRestauracion as lessonHermanoJaredYLaRestauracion } from '@/data/lessons/hermano-jared-y-la-restauracion'
import { ammonLaMision as lessonAmmonLaMision } from '@/data/lessons/ammon-la-mision'
import { ammonElGuardian as lessonAmmonElGuardian } from '@/data/lessons/ammon-el-guardian'
import { ammonElMaestro as lessonAmmonElMaestro } from '@/data/lessons/ammon-el-maestro'
import { ammonElPadre as lessonAmmonElPadre } from '@/data/lessons/ammon-el-padre'
import { ammonYLaRestauracion as lessonAmmonYLaRestauracion } from '@/data/lessons/ammon-y-la-restauracion'
import { capitanMoroni as lessonCapitanMoroni } from '@/data/lessons/capitan-moroni'
import { samuelElLamanita as lessonSamuelElLamanita } from '@/data/lessons/samuel-el-lamanita'
import { joseSmithLaPrimeraVision as lessonJoseSmithLaPrimeraVision } from '@/data/lessons/jose-smith-la-primera-vision'
import { joseSmithElTraductor as lessonJoseSmithElTraductor } from '@/data/lessons/jose-smith-el-traductor'
import { joseSmithElProfeta as lessonJoseSmithElProfeta } from '@/data/lessons/jose-smith-el-profeta'
import { joseSmithElMartir as lessonJoseSmithElMartir } from '@/data/lessons/jose-smith-el-martir'
import { joseSmithYLaRestauracion as lessonJoseSmithYLaRestauracion } from '@/data/lessons/jose-smith-y-la-restauracion'
import { emmaSmithLaElegida as lessonEmmaSmithLaElegida } from '@/data/lessons/emma-smith-la-elegida'
import { emmaSmithLaEscribiente as lessonEmmaSmithLaEscribiente } from '@/data/lessons/emma-smith-la-escribiente'
import { emmaSmithElSufrimiento as lessonEmmaSmithElSufrimiento } from '@/data/lessons/emma-smith-el-sufrimiento'
import { emmaSmithLaMusica as lessonEmmaSmithLaMusica } from '@/data/lessons/emma-smith-la-musica'
import { emmaSmithYLaRestauracion as lessonEmmaSmithYLaRestauracion } from '@/data/lessons/emma-smith-y-la-restauracion'
import { hyrumSmithElHermano as lessonHyrumSmithElHermano } from '@/data/lessons/hyrum-smith-el-hermano'
import { hyrumSmithElPatriarca as lessonHyrumSmithElPatriarca } from '@/data/lessons/hyrum-smith-el-patriarca'
import { hyrumSmithLaIntegridad as lessonHyrumSmithLaIntegridad } from '@/data/lessons/hyrum-smith-la-integridad'
import { hyrumSmithCarthage as lessonHyrumSmithCarthage } from '@/data/lessons/hyrum-smith-carthage'
import { hyrumSmithYLaRestauracion as lessonHyrumSmithYLaRestauracion } from '@/data/lessons/hyrum-smith-y-la-restauracion'
import { oliverCowderyElEscribiente as lessonOliverCowderyElEscribiente } from '@/data/lessons/oliver-cowdery-el-escribiente'
import { oliverCowderyElTestigo as lessonOliverCowderyElTestigo } from '@/data/lessons/oliver-cowdery-el-testigo'
import { oliverCowderyElSacerdocio as lessonOliverCowderyElSacerdocio } from '@/data/lessons/oliver-cowdery-el-sacerdocio'
import { oliverCowderyLaApostasia as lessonOliverCowderyLaApostasia } from '@/data/lessons/oliver-cowdery-la-apostasia'
import { oliverCowderyYLaRestauracion as lessonOliverCowderyYLaRestauracion } from '@/data/lessons/oliver-cowdery-y-la-restauracion'
import { brighamYoungLaConversion as lessonBrighamYoungLaConversion } from '@/data/lessons/brigham-young-la-conversion'
import { brighamYoungNauvoo as lessonBrighamYoungNauvoo } from '@/data/lessons/brigham-young-nauvoo'
import { brighamYoungElExodo as lessonBrighamYoungElExodo } from '@/data/lessons/brigham-young-el-exodo'
import { brighamYoungElColonizador as lessonBrighamYoungElColonizador } from '@/data/lessons/brigham-young-el-colonizador'
import { brighamYoungYLaRestauracion as lessonBrighamYoungYLaRestauracion } from '@/data/lessons/brigham-young-y-la-restauracion'
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
// ── CAPACITACIÓN LIDERAZGO — PFJ TRANSICIÓN 2026 ─────────────────────────────
import { obispadoElCambio as lessonObispadoElCambio } from '@/data/lessons/obispado-el-cambio'
import { obispadoQuintoDomingo as lessonObispadoQuintoDomingo } from '@/data/lessons/obispado-quinto-domingo'
import { obispadoComunicarPadres as lessonObispadoComunicarPadres } from '@/data/lessons/obispado-comunicar-padres'
import { hjLaGuiaPfj as lessonHjLaGuiaPfj } from '@/data/lessons/hj-la-guia-pfj'
import { hjEnsenar25Minutos as lessonHjEnsenar25Minutos } from '@/data/lessons/hj-ensenar-25-minutos'
import { hjMaratonLectura as lessonHjMaratonLectura } from '@/data/lessons/hj-maraton-lectura'
import { mjLaGuiaPfj as lessonMjLaGuiaPfj } from '@/data/lessons/mj-la-guia-pfj'
import { mjEnsenar25Minutos as lessonMjEnsenar25Minutos } from '@/data/lessons/mj-ensenar-25-minutos'
import { mjConectarHogar as lessonMjConectarHogar } from '@/data/lessons/mj-conectar-hogar'
import { mjNuevosNombres as lessonMjNuevosNombres } from '@/data/lessons/mj-nuevos-nombres'
import { edNuevoHorario as lessonEdNuevoHorario } from '@/data/lessons/ed-nuevo-horario'
import { edCoorinarClases as lessonEdCoorinarClases } from '@/data/lessons/ed-coordinar-clases'
import { hjEjemploClasePfj as lessonHjEjemploClasePfj } from '@/data/lessons/hj-ejemplo-clase-pfj'
import { edEjemploClase as lessonEdEjemploClase } from '@/data/lessons/ed-ejemplo-clase'
import { mjEjemploClasePfj as lessonMjEjemploClasePfj } from '@/data/lessons/mj-ejemplo-clase-pfj'
import { srsEjemploClase as lessonSrsEjemploClase } from '@/data/lessons/srs-ejemplo-clase'
import { elderesEjemploClase as lessonElderesEjemploClase } from '@/data/lessons/elderes-ejemplo-clase'
import { elderesRolMisional as lessonElderesRolMisional } from '@/data/lessons/elderes-rol-misional'
import { elderesMentoresJovenes as lessonElderesMentoresJovenes } from '@/data/lessons/elderes-mentores-jovenes'
import { elderesVisionPfj as lessonElderesVisionPfj } from '@/data/lessons/elderes-vision-pfj'
// ── CAPACITACIÓN LIDERAZGO — LLAMIMIENTOS ─────────────────────────────────────
import { srsPresidenta as lessonSrsPresidenta } from '@/data/lessons/srs-presidenta'
import { srsConsejeras as lessonSrsConsejeras } from '@/data/lessons/srs-consejeras'
import { srsSecretaria as lessonSrsSecretaria } from '@/data/lessons/srs-secretaria'
import { elderesPresidente as lessonElderesPresidente } from '@/data/lessons/elderes-presidente'
import { elderesConsejeros as lessonElderesConsejeros } from '@/data/lessons/elderes-consejeros'
import { elderesSecretario as lessonElderesSecretario } from '@/data/lessons/elderes-secretario'
import { mjPresidenta as lessonMjPresidenta } from '@/data/lessons/mj-presidenta'
import { mjConsejeras as lessonMjConsejeras } from '@/data/lessons/mj-consejeras'
import { mjSecretaria as lessonMjSecretaria } from '@/data/lessons/mj-secretaria'
import { hjPresidente as lessonHjPresidente } from '@/data/lessons/hj-presidente'
import { hjConsejeros as lessonHjConsejeros } from '@/data/lessons/hj-consejeros'
import { hjSecretario as lessonHjSecretario } from '@/data/lessons/hj-secretario'
import { primariaPresidenta as lessonPrimariaPresidenta } from '@/data/lessons/primaria-presidenta'
import { primariaConsejeras as lessonPrimariaConsejeras } from '@/data/lessons/primaria-consejeras'
import { primariaSecretaria as lessonPrimariaSecretaria } from '@/data/lessons/primaria-secretaria'
import { edPresidente as lessonEdPresidente } from '@/data/lessons/ed-presidente'
import { edConsejeros as lessonEdConsejeros } from '@/data/lessons/ed-consejeros'
import { edSecretario as lessonEdSecretario } from '@/data/lessons/ed-secretario'
// ── VIDA FAMILIAR Y PERSONAL — PARTICIPACIÓN DOMINICAL ───────────────────────
import { comoDarUnDiscurso as lessonComoDarUnDiscurso } from '@/data/lessons/como-dar-un-discurso'
import { comoDarUnTestimonio as lessonComoDarUnTestimonio } from '@/data/lessons/como-dar-un-testimonio'
import { comoHacerUnaOracion as lessonComoHacerUnaOracion } from '@/data/lessons/como-hacer-una-oracion'
// ── MÓDULO LA SANTA CENA ──────────────────────────────────────────────────────
import { scCristoSantaCena as lessonScCristoSantaCena } from '@/data/lessons/sc-cristo-santa-cena'
import { scQueSimboliza as lessonScQueSimboliza } from '@/data/lessons/sc-que-simboliza'
import { scComoServir as lessonScComoServir } from '@/data/lessons/sc-como-servir'
import { scArrepentimiento as lessonScArrepentimiento } from '@/data/lessons/sc-arrepentimiento'
import { scVidaSinSantaCena as lessonScVidaSinSantaCena } from '@/data/lessons/sc-vida-sin-santa-cena'
import { scPromesaEspiritu as lessonScPromesaEspiritu } from '@/data/lessons/sc-promesa-espiritu'
// ── MÓDULO ELÍ ───────────────────────────────────────────────────────────────
import { eliElSumoSacerdote as lessonEliElSumoSacerdote } from '@/data/lessons/eli-el-sumo-sacerdote'
import { eliYAna as lessonEliYAna } from '@/data/lessons/eli-y-ana'
import { eliYSusHijos as lessonEliYSusHijos } from '@/data/lessons/eli-y-sus-hijos'
import { eliLaCaida as lessonEliLaCaida } from '@/data/lessons/eli-la-caida'
import { eliYLaRestauracion as lessonEliYLaRestauracion } from '@/data/lessons/eli-y-la-restauracion'
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
  tags?: string[]
}

export type SubmoduleGroupMeta = {
  title: string
  description: string
  icon: string
  label?: string
  heroImage?: string
  /** Fondo alterno para pantallas pequeñas (si no está, se usa `heroImage` en todos los tamaños). */
  heroImageMobile?: string
  heroImagePosition?: string
  iconImage?: string
  /** Franja de progreso/actos debajo de la descripción. */
  timelineImage?: string
  /** Separador ornamental entre la descripción y la lista de lecciones. */
  dividerImage?: string
  /** Textura de fondo muy sutil (opacidad ~0.05) detrás de todo el submódulo. */
  patternImage?: string
  /** Se muestra cuando todas las lecciones del submódulo están visitadas. */
  conclusionImage?: string
}

export const SUBMODULE_GROUPS: Record<string, SubmoduleGroupMeta> = {
  // ── DOCTRINA FUNDAMENTAL ──────────────────────────────────────────────────
  'la-santa-cena': {
    title: 'La Santa Cena',
    description: 'La ordenanza más frecuente de la Iglesia vista desde todos los ángulos: institución por Cristo, sus símbolos, cómo se administra, su conexión con el arrepentimiento y qué perdemos cuando nos alejamos.',
    icon: '🍷',
  },
  // ── CAPACITACIÓN LIDERAZGO ────────────────────────────────────────────────
  'obispado-pfj': {
    title: 'Obispado',
    description: 'La transición PFJ desde la perspectiva del obispado: comunicar, organizar el quinto domingo y acompañar a cada organización.',
    icon: '⚖️',
  },
  'hj-pfj': {
    title: 'Hombres Jóvenes',
    description: 'Líderes de HJ: conocer la guía PFJ, enseñar en 25 minutos y activar el maratón de lectura con los jóvenes y sus familias.',
    icon: '🧑',
  },
  'mj-pfj': {
    title: 'Mujeres Jóvenes',
    description: 'Líderes de MJ: la guía PFJ desde la perspectiva de las jóvenes, clases semanales y conectar el hogar con el domingo.',
    icon: '👧',
  },
  'elderes-pfj': {
    title: 'Élderes y Líder Misional',
    description: 'El Cuórum de Élderes como puente generacional: mentores misioneros, visión misional del PFJ y discipulado diario.',
    icon: '🌍',
  },
  'ed-pfj': {
    title: 'Escuela Dominical',
    description: 'La Presidencia de la Escuela Dominical coordina el nuevo horario dominical: Escuela Dominical cada domingo, el bloque PFJ para jóvenes y la implementación del 6 de septiembre.',
    icon: '📋',
  },
  'srs-pfj': {
    title: 'Sociedad de Socorro',
    description: 'La nueva clase semanal de Sociedad de Socorro de 25 minutos: mensajes de Conferencia General como consejo entre hermanas, no como clase magistral.',
    icon: '💐',
  },
  'srs-lideres': {
    title: 'Sociedad de Socorro',
    description: 'La clase semanal de 25 minutos: mensajes de Conferencia General como consejo entre hermanas. Llamientos: qué hace la presidenta, las consejeras y la secretaria, cómo trabajan con el obispado y cómo sirven a cada hermana del barrio.',
    icon: '💐',
  },
  'mj-lideres': {
    title: 'Mujeres Jóvenes',
    description: 'La guía PFJ, los nuevos nombres de las clases y el formato de 25 minutos. Llamientos: presidenta, consejeras y secretaria — responsabilidades, coordinación con el obispado y ministerio a cada joven.',
    icon: '💜',
  },
  'hj-lideres': {
    title: 'Hombres Jóvenes',
    description: 'La guía PFJ de 12 capítulos, cómo enseñar en 25 minutos y el maratón de lectura. Llamientos: el presidente que sirve bajo la dirección del obispo, los consejeros como mentores y el secretario que da seguimiento a cada joven.',
    icon: '🧑',
  },
  'elderes-lideres': {
    title: 'Cuórum de Élderes',
    description: 'El rol misional del cuórum como puente generacional y mentores de los jóvenes. Llamientos: presidente, consejeros y secretario — ministerio, bienestar y fraternidad de convenio activa.',
    icon: '🌍',
  },
  'primaria-lideres': {
    title: 'Primaria',
    description: 'Llamientos de la Primaria: presidenta, consejeras y secretaria — formación de la fe desde la infancia, presentación anual y ministerio personal a cada niño.',
    icon: '⭐',
  },
  'ed-lideres': {
    title: 'Escuela Dominical',
    description: 'El nuevo horario dominical, coordinación con HJ y MJ, y cómo enseñar Ven, Sígueme en 25 minutos. Llamientos: presidente, consejeros y secretario — capacitación de maestros y enseñanza doctrinal de calidad.',
    icon: '📖',
  },
  'participacion-dominical': {
    title: 'Cómo Participar',
    description: 'Guías prácticas para participar activamente en el culto: cómo dar un discurso en la reunión sacramental, cómo compartir un testimonio en el día de ayuno, y cómo ofrecer una oración vocal.',
    icon: '🎤',
  },
  jesucristo: {
    title: 'Jesucristo — Centro de Todo',
    description:
      'El Salvador del mundo visto desde todos los ángulos: su vida mortal, su naturaleza divina, su presencia en los cuatro evangelios, en 3 Nefi y en la voz de los profetas.',
    icon: '🌅',
    label: 'PERSONAJE PRINCIPAL',
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
    heroImage: davidAssets.module.heroDesktop,
    heroImageMobile: davidAssets.module.hero,
    heroImagePosition: davidAssets.module.heroObjectPosition,
    iconImage: davidAssets.module.icon,
    timelineImage: davidAssets.module.timeline,
    dividerImage: davidAssets.module.divider,
    patternImage: davidAssets.module.pattern,
    conclusionImage: davidAssets.module.conclusion,
  },
  sara: {
    title: 'Sara — La Madre de la Fe',
    description:
      'Se rió de Dios cuando le prometió un hijo a los 90 años. Dios nombró al niño "Isaac" — risa. Sara vivió la fe más improbable del Antiguo Testamento: creer en lo imposible después de décadas de silencio divino.',
    icon: '😂',
  },
  rut: {
    title: 'Rut — La Lealtad que Venció al Origen',
    description:
      "Moabita, viuda, extranjera — y bisabuela de David. Su declaración \"donde tú mueras, moriré yo\" es la declaración de lealtad más hermosa de la Biblia. Boaz como tipo de Cristo: el go'el que paga el precio completo.",
    icon: '🌾',
  },
  ester: {
    title: 'Ester — "Si He de Morir, Que Muera"',
    description:
      'Huérfana judía viviendo con nombre persa en la corte del rey más poderoso del mundo. "¿Quién sabe si no fue para este momento que llegaste al reino?" Lo que hizo después salvó a un pueblo entero.',
    icon: '👸',
  },
  debora: {
    title: 'Débora — La Jueza que Dirigió una Guerra',
    description:
      'La única mujer jueza de Israel. Gobernaba bajo su palmera, profetizaba la voluntad de Dios, y dio la orden de ataque cuando el general dudó. Su Canto (Jueces 5) es uno de los textos más antiguos de la Biblia.',
    icon: '⚔️',
  },
  'maria-madre': {
    title: 'María — La Madre Elegida entre Todas',
    description:
      'Nefi la vio en visión 600 años antes de su nacimiento. Mosíah 3:8 la nombra. Alma 7:10 especifica el lugar de su parto. María vivió la mayor alegría y el mayor dolor que puede vivir una madre — y estuvo en ambos momentos.',
    icon: '✨',
  },
  'hermano-jared': {
    title: 'El Hermano de Jared — El que Vio al Cristo Premortal',
    description:
      'Su fe fue tan grande que Dios no pudo ocultársele. Vio al Cristo premortal cara a cara. Las 16 piedras luminosas. La travesía del océano. Y una porción sellada de las escrituras que el mundo aún no ha recibido.',
    icon: '💎',
  },
  ammon: {
    title: 'Ammón — El Misionero que Cortó Brazos',
    description:
      'Eligió servir al rey lamanita. Cortó los brazos de sus atacantes. Convirtió al rey, al rey supremo, y a miles de lamanitas. Los Anti-Nefi-Lehíes enterraron sus armas y murieron antes de volver a usarlas.',
    icon: '💪',
  },
  'jose-smith': {
    title: 'José Smith — El Profeta de la Restauración',
    description:
      'A los 14 años vio al Padre y al Hijo. A los 38 fue martirizado. Entre esas dos fechas, tradujo el Libro de Mormón, restauró el sacerdocio, recibió 138 revelaciones, y estableció la dispensación de la plenitud de los tiempos.',
    icon: '🌟',
  },
  'emma-smith': {
    title: 'Emma Smith — La Elegida de Dios',
    description:
      'DyC 25 le habla directamente: "Elegida y llamada." Primera escribiente del Libro de Mormón. Compiló el primer himnario. Organizó la Sociedad de Socorro. Vivió el costo completo de ser la esposa del profeta.',
    icon: '🌹',
  },
  'hyrum-smith': {
    title: 'Hyrum Smith — El Mártir de la Integridad',
    description:
      '"Tiene la integridad de Job" — dijo José de él. Podría haberse salvado en Carthage. Eligió quedarse con su hermano. DyC 135 los nombra a ambos como mártires. Su muerte selló su testimonio con sangre.',
    icon: '🤝',
  },
  'oliver-cowdery': {
    title: 'Oliver Cowdery — El Testigo que Nunca Negó',
    description:
      'Transcribió el Libro de Mormón. Fue co-receptor del sacerdocio de Juan el Bautista y de Pedro, Santiago y Juan. Fue excomulgado. Diez años después volvió. Y murió con el mismo testimonio intacto.',
    icon: '✍️',
  },
  'brigham-young': {
    title: 'Brigham Young — El León de Israel',
    description:
      'Carpintero semi-analfabeto que leyó el Libro de Mormón y tardó dos años en convertirse. Treinta años después había guiado 70,000 santos a través de las llanuras y fundado 350 comunidades en el desierto.',
    icon: '🦁',
  },
  jeremias: {
    title: 'Jeremías — El Profeta que Lloró',
    description:
      'Profetizó 40 años sin convertir a nadie. Fue encerrado en un pozo de barro y vio Jerusalén arder. Sus Lamentaciones son el dolor más puro de las Escrituras. Y en medio de todo, profetizó el Nuevo Convenio escrito en el corazón.',
    icon: '😭',
  },
  daniel: {
    title: 'Daniel — En el Foso de los Leones',
    description:
      'Deportado a Babilonia a los 15 años, llegó a ser segundo del Imperio más poderoso de su época sin comprometer su fe. Sus visiones del capítulo 7 son la base de Adán-ondi-Ahmán. José Smith citó Daniel 2 como profecía central de la Restauración.',
    icon: '🦁',
  },
  job: {
    title: 'Job — El Sufrimiento del Justo',
    description:
      '¿Por qué sufre quien no merece sufrir? Job perdió todo en un día, sus amigos dieron respuestas incorrectas, y Dios respondió desde el torbellino con preguntas. Job 19:25-27 es la declaración de fe más audaz del Antiguo Testamento.',
    icon: '🌪️',
  },
  ezequiel: {
    title: 'Ezequiel — Las Visiones del Trono',
    description:
      'Vio la gloria de Dios moverse en un carro de fuego. Ezequiel 37 (los huesos secos) y 37:16-19 (los dos palos) tienen aplicación directa en la Restauración. El Libro de Mormón cumple la profecía del palo de Efraín.',
    icon: '👁️',
  },
  pedro: {
    title: 'Pedro — La Roca que Cayó y Se Levantó',
    description:
      'Caminó sobre el agua y se hundió. Confesó que Jesús era el Cristo. Negó a Jesús tres veces y lloró amargamente. Y fue él quien presidió la Iglesia primitiva, abrió el evangelio a los gentiles y murió crucificado de cabeza.',
    icon: '🪨',
  },
  pablo: {
    title: 'Pablo — Del Perseguidor al Mayor Misionero',
    description:
      'Aprobó la muerte de Esteban y arrestó cristianos de casa en casa — hasta que Cristo lo detuvo en el camino a Damasco. Sus 13 epístolas son el 40% del Nuevo Testamento. 1 Corintios 15:29 es el fundamento escritural del bautismo por los muertos.',
    icon: '✉️',
  },
  'juan-bautista': {
    title: 'Juan el Bautista — La Voz en el Desierto',
    description:
      '"Entre los nacidos de mujer, no ha surgido ninguno mayor." Bautizó a Jesús, fue decapitado por el capricho de una niña, y en 1829 apareció como ser resucitado para restaurar el sacerdocio aarónico a José Smith.',
    icon: '🏜️',
  },
  'maria-magdalena': {
    title: 'María Magdalena — La Primera Testigo',
    description:
      'No fue la pecadora que el mundo inventa — ese mito lo creó el Papa Gregorio I en 591 d.C. Era discípula fiel que financió el ministerio de Jesús, estuvo al pie de la cruz, y fue la primera persona a quien se le apareció el Cristo resucitado.',
    icon: '🌸',
  },
  tomas: {
    title: 'Tomás — El Incrédulo que Llegó Más Lejos',
    description:
      'El que exigió ver las heridas antes de creer hizo la confesión de divinidad más directa de los cuatro evangelios: "¡Señor mío y Dios mío!" Llevó el evangelio hasta la India en el año 52 d.C.',
    icon: '🖐️',
  },
  'santiago-justo': {
    title: 'Santiago el Justo — El Hermano de Jesús',
    description:
      'No creyó en su hermano durante el ministerio. El Cristo resucitado se le apareció personalmente. Después de eso presidió la Iglesia de Jerusalén 30 años. Santiago 1:5 fue el versículo que detonó la Primera Visión de José Smith.',
    icon: '🏛️',
  },
  eli: {
    title: 'Elí — El Sumo Sacerdote de Siló',
    description:
      'Juez de Israel durante cuarenta años. Guardián del arca del convenio. Padre de hijos que corrompieron el sacerdocio desde adentro. La historia de Elí es la historia de lo que pasa cuando el amor paternal supera a la fidelidad a Dios — y el patrón de restauración que Dios usa cuando el sacerdocio falla.',
    icon: '🏛️',
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
    heroImageUrl: '/assets/modules/covers/doctrina-fundamental.webp',
  },
  {
    id: 'vida-familiar-personal',
    title: 'Vida Familiar y Personal',
    description: 'Oración, estudio de las Escrituras y el evangelio en el hogar.',
    icon: '👨‍👩‍👧‍👦',
    order: 2,
    level: 'BÁSICO',
    usePurpleAccent: false,
    heroImageUrl: '/assets/modules/covers/vida-familiar-personal.webp',
  },
  {
    id: 'historia-restauracion',
    title: 'Historia y Restauración',
    description: 'La Primera Visión, la Gran Apostasía y la restauración del Evangelio.',
    icon: '🌳',
    order: 3,
    level: 'INTERMEDIO',
    usePurpleAccent: false,
    heroImageUrl: '/assets/modules/covers/historia-restauracion.webp',
  },
  {
    id: 'doctrina-avanzada-carne',
    title: 'Doctrina Avanzada — La Carne del Evangelio',
    description: 'Temas profundos: sacerdocio, templo, preexistencia y plan de salvación.',
    icon: '👑',
    order: 4,
    level: 'AVANZADO',
    usePurpleAccent: true,
    heroImageUrl: '/assets/modules/covers/doctrina-avanzada-carne.webp',
  },
  {
    id: 'lideres-misioneros',
    title: 'Para Líderes y Misioneros',
    description: 'Servir, enseñar y llevar el mensaje con poder.',
    icon: '🎯',
    order: 5,
    level: 'INTERMEDIO',
    usePurpleAccent: false,
    heroImageUrl: '/assets/modules/covers/lideres-misioneros.webp',
  },
  {
    id: 'discursos-sermones-clasicos',
    title: 'Discursos y Sermones Clásicos',
    description: 'Estudio profundo de discursos históricos y conferencias memorables.',
    icon: '📜',
    order: 6,
    level: 'AVANZADO',
    usePurpleAccent: true,
    heroImageUrl: '/assets/modules/covers/discursos-sermones-clasicos.webp',
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
    heroImageUrl: '/assets/modules/covers/temas-profundos.webp',
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
    heroImageUrl: '/assets/modules/covers/personajes-escrituras.webp',
  },
  {
    id: 'capacitacion-liderazgo',
    title: 'Capacitación del Liderazgo',
    description:
      'Recursos de capacitación para el liderazgo del barrio: cambios programáticos, roles de cada organización y herramientas para enseñar y servir con más eficacia.',
    icon: '🏛️',
    order: 22,
    level: 'BÁSICO',
    usePurpleAccent: false,
    heroImageUrl: '/assets/modules/covers/capacitacion-liderazgo.webp',
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
    heroImageUrl: '/assets/modules/covers/sacerdocio.webp',
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
  // ── SUBMÓDULO LA SANTA CENA (bajo doctrina-fundamental) ─────────────────────
  { id: 'sc-cristo-santa-cena', moduleId: 'doctrina-fundamental', title: 'El Cristo y la Santa Cena', subtitle: 'La noche que lo cambió todo — y cada domingo desde entonces', description: 'Desde el aposento alto hasta el continente americano y el banquete eterno: Cristo instituyó esta ordenanza con sus propias manos y prometió volver a tomarla con nosotros.', level: 'BÁSICO', icon: '🌟', duration: 35, order: 101, status: 'PUBLISHED', submoduleGroup: 'la-santa-cena' },
  { id: 'sc-que-simboliza', moduleId: 'doctrina-fundamental', title: '¿Qué Simboliza la Santa Cena?', subtitle: 'Pan, agua, manto blanco — cada elemento tiene un mensaje revelado', description: 'El pan no es solo pan y el agua no es solo agua. Esta lección abre el lenguaje simbólico de la ordenanza más frecuente de la Iglesia.', level: 'BÁSICO', icon: '🍞', duration: 30, order: 102, status: 'PUBLISHED', submoduleGroup: 'la-santa-cena' },
  { id: 'sc-como-servir', moduleId: 'doctrina-fundamental', title: 'Cómo Servir la Santa Cena', subtitle: 'Los pasos, las oraciones reveladas y el corazón del servidor', description: 'Preparar, bendecir y repartir: quién puede hacer qué, las oraciones palabra por palabra, el orden completo y el corazón de quien representa a Cristo ante su pueblo.', level: 'BÁSICO', icon: '🙏', duration: 40, order: 103, status: 'PUBLISHED', submoduleGroup: 'la-santa-cena' },
  { id: 'sc-arrepentimiento', moduleId: 'doctrina-fundamental', title: 'La Santa Cena y el Arrepentimiento', subtitle: 'El mecanismo semanal de acceso a la misericordia de Cristo', description: 'La remisión semanal de pecados, la diferencia entre indigno e imperfecto, y cómo prepararse durante la semana para ese momento del domingo.', level: 'BÁSICO', icon: '🤍', duration: 35, order: 104, status: 'PUBLISHED', submoduleGroup: 'la-santa-cena' },
  { id: 'sc-vida-sin-santa-cena', moduleId: 'doctrina-fundamental', title: 'La Vida sin la Santa Cena', subtitle: 'Qué perdemos cuando nos alejamos — y por qué el regreso siempre es posible', description: 'Qué sucede espiritualmente cuando un miembro deja de tomar la Santa Cena: el proceso de alejamiento, el endurecimiento gradual y el camino de regreso que siempre está abierto.', level: 'INTERMEDIO', icon: '💔', duration: 40, order: 105, status: 'PUBLISHED', submoduleGroup: 'la-santa-cena' },
  { id: 'sc-promesa-espiritu', moduleId: 'doctrina-fundamental', title: 'La Promesa del Espíritu', subtitle: '"Tendréis mi Espíritu consigo" — lo que eso significa de lunes a sábado', description: 'La promesa central de la Santa Cena no es para el domingo — es para toda la semana. Qué significa tener al Espíritu como compañero y cómo los minutos de silencio de la distribución son los de mayor potencial revelador.', level: 'INTERMEDIO', icon: '🕊️', duration: 30, order: 106, status: 'PUBLISHED', submoduleGroup: 'la-santa-cena' },
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
    icon: '🌟',
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
    id: 'como-dar-un-discurso',
    moduleId: 'vida-familiar-personal',
    title: 'Cómo Dar un Discurso',
    subtitle: 'Preparar y presentar un mensaje en la reunión sacramental',
    description: 'Guía práctica para preparar y dar un discurso en la reunión sacramental. Desde el momento en que te asignan el tema hasta las últimas palabras desde el púlpito: estructura, errores comunes, cómo usar las escrituras y cómo dejar que el Espíritu sea el maestro real.',
    level: 'BÁSICO',
    icon: '🎤',
    duration: 20,
    order: 6,
    status: 'PUBLISHED',
    submoduleGroup: 'participacion-dominical',
  },
  {
    id: 'como-dar-un-testimonio',
    moduleId: 'vida-familiar-personal',
    title: 'Cómo Dar un Testimonio',
    subtitle: 'El día de ayuno y testimonio — qué decir y cómo decirlo',
    description: 'Muchos miembros confunden compartir un testimonio con contar una historia o dar un sermón. Esta lección explica qué ES un testimonio, qué NO es, cómo estructurarlo en 2-3 minutos, y cómo vencer el miedo a levantarte por primera vez.',
    level: 'BÁSICO',
    icon: '🕊️',
    duration: 15,
    order: 7,
    status: 'PUBLISHED',
    submoduleGroup: 'participacion-dominical',
  },
  {
    id: 'como-hacer-una-oracion',
    moduleId: 'vida-familiar-personal',
    title: 'Cómo Hacer una Oración',
    subtitle: 'La estructura, el lenguaje y los errores más comunes',
    description: 'Guía práctica sobre cómo ofrecer una oración vocal — la estructura de cuatro partes, el lenguaje correcto en español (tú/te/ti), la diferencia entre oración personal y grupal, y los errores más frecuentes que todos cometemos sin darnos cuenta.',
    level: 'BÁSICO',
    icon: '🙏',
    duration: 15,
    order: 8,
    status: 'PUBLISHED',
    submoduleGroup: 'participacion-dominical',
  },
  {
    id: 'preparacion-misional-padres',
    moduleId: 'vida-familiar-personal',
    title: 'Preparación Misional: Guía para Padres',
    subtitle: 'Cómo apoyar a un hijo o hija que se prepara para servir',
    description: 'Cómo apoyar espiritual, financiera y emocionalmente a un hijo o hija antes, durante y después de la misión: preparar sin presionar, cultivar una fe propia, habilidades prácticas, finanzas familiares, cartas, dejar ir con fe y el regreso a casa.',
    level: 'BÁSICO',
    icon: '🤝',
    duration: 90,
    order: 9,
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
    id: 'guia-escrituras-clave-misioneros',
    moduleId: 'lideres-misioneros',
    title: 'Guía de Escrituras Clave para Misioneros',
    subtitle: 'Escrituras ancla, raíces originales y respuestas para el campo',
    description: 'Nueve tópicos centrales del mensaje restaurado con versículo ancla, escrituras clave, estudio de raíces hebreas y griegas, sugerencias de enseñanza y respuestas a las objeciones más comunes de los investigadores.',
    level: 'INTERMEDIO',
    icon: '📖',
    duration: 95,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'preparacion-misional-jovenes',
    moduleId: 'lideres-misioneros',
    title: 'Preparación Misional para Jóvenes',
    subtitle: 'Espíritu, carácter, cuerpo y corazón antes de servir',
    description: 'Diez áreas de preparación integral antes de servir: requisitos y edades actuales, conversión personal, dignidad, obediencia y sacrificio, preparación física, despedidas, autodisciplina, amor por los extraños, manejo del rechazo, y el proceso de solicitud paso a paso.',
    level: 'INTERMEDIO',
    icon: '🎒',
    duration: 100,
    order: 4,
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
  { id: 'melquisedec-tipo-de-cristo', moduleId: 'personajes-escrituras', title: 'Tipo de Cristo', subtitle: 'El sacerdocio eterno como imagen del Salvador', description: 'Hebreos 4-7 argumenta que Cristo es el sumo sacerdote "según el orden de Melquisedec." ¿Qué significa eso exactamente? La relación entre el hombre Melquisedec y el papel que prefigura es teológicamente rica.', level: 'AVANZADO', icon: '🌟', duration: 35, order: 3212, status: 'PUBLISHED', submoduleGroup: 'melquisedec' },
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
  { id: 'isaias-el-mesianico', moduleId: 'personajes-escrituras', title: 'El Mesíanico', subtitle: 'Las profecías de Cristo escritas 700 años antes', description: 'Isaías 7:14 (la virgen), 9:6 (el Príncipe de Paz), 53 (el Siervo Sufriente) y 61:1 (ungido para proclamar libertad) son las profecías mesiánicas más directas del Antiguo Testamento. Jesús las citó en la sinagoga de Nazaret.', level: 'AVANZADO', icon: '🌟', duration: 35, order: 4011, status: 'PUBLISHED', submoduleGroup: 'isaias' },
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
  // ── JEREMÍAS (submodule, orders 4310-4314) ──────────────────────────────
  { id: 'jeremias-el-llamamiento', moduleId: 'personajes-escrituras', title: 'El Llamamiento', subtitle: '"Antes que te formase en el vientre te conocí"', description: 'Jeremías fue llamado profeta antes de nacer (Jer 1:5). Resistió, alegando ser "un niño." Dios tocó su boca y lo envió a las naciones. El llamamiento prenatal de Jeremías es base doctrinal de la preexistencia en la Restauración.', level: 'INTERMEDIO', icon: '📢', duration: 30, order: 4310, status: 'PUBLISHED', submoduleGroup: 'jeremias' },
  { id: 'jeremias-el-perseguido', moduleId: 'personajes-escrituras', title: 'El Perseguido', subtitle: 'Encerrado en el cepo, arrojado al pozo', description: 'Pasur lo golpeó y puso en el cepo. Fue arrojado a un pozo de barro. Sus "confesiones" revelan un hombre al borde del colapso que siguió profetizando. El profeta más maltratado de la Biblia nunca pidió ser relevado de su llamamiento.', level: 'INTERMEDIO', icon: '😤', duration: 30, order: 4311, status: 'PUBLISHED', submoduleGroup: 'jeremias' },
  { id: 'jeremias-las-lamentaciones', moduleId: 'personajes-escrituras', title: 'Las Lamentaciones', subtitle: 'El dolor más puro de las Escrituras', description: 'Jeremías vio Jerusalén arder en 586 a.C. y escribió 5 poemas de dolor en estructura acróstica hebrea. Lamentaciones 3:22-23 ("sus misericordias son nuevas cada mañana") nació en la destrucción total.', level: 'AVANZADO', icon: '😭', duration: 35, order: 4312, status: 'PUBLISHED', submoduleGroup: 'jeremias' },
  { id: 'jeremias-el-nuevo-convenio', moduleId: 'personajes-escrituras', title: 'El Nuevo Convenio', subtitle: 'La profecía que nombró al Nuevo Testamento', description: 'Jeremías 31:31-34 profetizó un convenio escrito en el corazón, no en tablas de piedra. El Nuevo Testamento lleva el nombre de esta profecía. Hebreos 8:8-12 la cita como cumplida en Cristo.', level: 'AVANZADO', icon: '📜', duration: 35, order: 4313, status: 'PUBLISHED', submoduleGroup: 'jeremias' },
  { id: 'jeremias-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Jeremías y la Restauración', subtitle: 'Las planchas de bronce y la reunión de Israel', description: 'Las planchas de bronce contenían escritos de Jeremías (1 Nefi 5:13). Lehi era su contemporáneo. Jeremías 16:14-15 profetizó la reunión de Israel "de todos los rincones de la tierra" — la misión central de la Restauración.', level: 'INTERMEDIO', icon: '✨', duration: 25, order: 4314, status: 'PUBLISHED', submoduleGroup: 'jeremias' },
  // ── DANIEL (submodule, orders 4410-4414) ────────────────────────────────
  { id: 'daniel-el-cautivo', moduleId: 'personajes-escrituras', title: 'El Cautivo Fiel', subtitle: 'Deportado a Babilonia a los 15 años', description: 'Daniel fue llevado en la primera deportación babilónica (605 a.C.). Su primera decisión fue no contaminarse con la comida del rey. La prueba de 10 días con legumbres y agua fue el primer acto de una fe que nunca cedió.', level: 'INTERMEDIO', icon: '🏛️', duration: 30, order: 4410, status: 'PUBLISHED', submoduleGroup: 'daniel' },
  { id: 'daniel-el-fiel', moduleId: 'personajes-escrituras', title: 'El Fiel', subtitle: 'Ni la estatua ni el foso lo doblegaron', description: 'El horno de Sadrac, Mesac y Abed-nego (Daniel 3) — "nuestro Dios puede librarnos, pero aunque no lo hiciere." La aparición del cuarto ser en el fuego. El foso de los leones (Daniel 6) y la noche sin dormir del rey Darío.', level: 'INTERMEDIO', icon: '🦁', duration: 30, order: 4411, status: 'PUBLISHED', submoduleGroup: 'daniel' },
  { id: 'daniel-las-visiones', moduleId: 'personajes-escrituras', title: 'Las Visiones Apocalípticas', subtitle: 'La piedra que llenó la tierra y el Hijo del Hombre', description: 'La estatua de metales (4 imperios + la piedra del reino de Dios), las cuatro bestias de Daniel 7, las 70 semanas y el calendario del Mesías, y Adán-ondi-Ahmán (DyC 116) como cumplimiento de Daniel 7.', level: 'AVANZADO', icon: '👁️', duration: 35, order: 4412, status: 'PUBLISHED', submoduleGroup: 'daniel' },
  { id: 'daniel-en-el-foso', moduleId: 'personajes-escrituras', title: 'La Oración que No Cesó', subtitle: 'Tres veces al día, ventana abierta hacia Jerusalén', description: 'Los sátrapas usaron la oración de Daniel como trampa: decreto de orar solo al rey por 30 días. Daniel continuó orando tres veces al día con la ventana abierta. La noche de Darío sin dormir. "El Dios tuyo te libró."', level: 'INTERMEDIO', icon: '🙏', duration: 30, order: 4413, status: 'PUBLISHED', submoduleGroup: 'daniel' },
  { id: 'daniel-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Daniel y la Restauración', subtitle: 'La piedra cortada sin manos — profecía de la Restauración', description: 'José Smith enseñó que Daniel 2:44-45 profetizó la Restauración. DyC 116 identifica Adán-ondi-Ahmán con Daniel 7. Las 70 semanas apuntan al ministerio de Cristo. Daniel es el profeta más citado en documentos de la Restauración después de Isaías.', level: 'AVANZADO', icon: '✨', duration: 25, order: 4414, status: 'PUBLISHED', submoduleGroup: 'daniel' },
  // ── JOB (submodule, orders 4510-4514) ───────────────────────────────────
  { id: 'job-el-justo', moduleId: 'personajes-escrituras', title: 'El Justo', subtitle: '"¿Has considerado a mi siervo Job?"', description: 'El prólogo celestial de Job 1 — la apuesta entre Dios y el Acusador. Job es descrito como "íntegro y recto" sin paralelo en la Biblia. Cuatro catástrofes en un día. Su primera respuesta: "Desnudo salí... desnudo volveré."', level: 'AVANZADO', icon: '⚖️', duration: 30, order: 4510, status: 'PUBLISHED', submoduleGroup: 'job' },
  { id: 'job-el-sufrimiento', moduleId: 'personajes-escrituras', title: 'El Sufrimiento', subtitle: '"Aunque me mate, en él esperaré"', description: 'La segunda prueba (las llagas), los 7 días de silencio de los amigos, las confesiones de Job en los capítulos 3, 7, 10, 13. Y la declaración de fe más audaz del Antiguo Testamento: Job 19:25-27 — "yo sé que mi Redentor vive."', level: 'AVANZADO', icon: '🌪️', duration: 35, order: 4511, status: 'PUBLISHED', submoduleGroup: 'job' },
  { id: 'job-los-amigos', moduleId: 'personajes-escrituras', title: 'La Teología Incorrecta', subtitle: 'Cuando la doctrina correcta se aplica mal', description: 'Los tres amigos tenían una teología técnicamente ortodoxa (sufrimiento = castigo) pero la aplicaron mal. Eliú ofrece un argumento diferente (Job 33: el sufrimiento como refinamiento). Al final Dios les dijo que no habían "hablado lo recto" como Job.', level: 'AVANZADO', icon: '🗣️', duration: 30, order: 4512, status: 'PUBLISHED', submoduleGroup: 'job' },
  { id: 'job-la-respuesta', moduleId: 'personajes-escrituras', title: 'La Respuesta desde el Torbellino', subtitle: '"¿Dónde estabas tú cuando puse los fundamentos de la tierra?"', description: 'Dios responde con preguntas sobre la creación — no con explicaciones. Behemot y Leviatán. La respuesta de Job: "Mis oídos te habían oído, pero ahora te ven mis ojos" (Job 42:5). La restauración de Job como tipo de la resurrección.', level: 'AVANZADO', icon: '🌩️', duration: 35, order: 4513, status: 'PUBLISHED', submoduleGroup: 'job' },
  { id: 'job-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Job y la Restauración', subtitle: '"Yo sé que mi Redentor vive" — profecía de la resurrección', description: 'Job 19:25-27 profetizó la resurrección corporal 1,500 años antes de Cristo. Lorenzo Snow citó a Job en el contexto de la exaltación. La doctrina restaurada responde la pregunta de Job: el sufrimiento no siempre indica desaprobación divina.', level: 'INTERMEDIO', icon: '✨', duration: 25, order: 4514, status: 'PUBLISHED', submoduleGroup: 'job' },
  // ── EZEQUIEL (submodule, orders 4610-4614) ──────────────────────────────
  { id: 'ezequiel-la-vision', moduleId: 'personajes-escrituras', title: 'La Visión del Trono', subtitle: 'La merkavá — el carro de la gloria de Dios', description: 'Ezequiel 1 — los cuatro seres vivientes y las ruedas dentro de ruedas. La Gloria del Señor que abandona el templo (Ezequiel 10-11) y regresa al templo nuevo (Ezequiel 43). La merkavá como la visión teofánica más compleja del Antiguo Testamento.', level: 'AVANZADO', icon: '👁️', duration: 35, order: 4610, status: 'PUBLISHED', submoduleGroup: 'ezequiel' },
  { id: 'ezequiel-el-guardian', moduleId: 'personajes-escrituras', title: 'El Atalaya de Israel', subtitle: '"Te he puesto por atalaya a la casa de Israel"', description: 'Ezequiel 3 y 33 — la responsabilidad del profeta de advertir. Las actuaciones proféticas: 390+40 días acostado, el duelo prohibido por la muerte de su esposa (Ezequiel 24). La teología radical de responsabilidad individual vs. colectiva (Ezequiel 18).', level: 'INTERMEDIO', icon: '⚔️', duration: 30, order: 4611, status: 'PUBLISHED', submoduleGroup: 'ezequiel' },
  { id: 'ezequiel-los-huesos-secos', moduleId: 'personajes-escrituras', title: 'El Valle de los Huesos Secos', subtitle: '¿Vivirán estos huesos? — Ezequiel 37', description: 'Ezequiel 37:1-14 — la visión completa en cuatro etapas (ruido, temblor, carne, soplo). Interpretación inmediata: la casa de Israel que dice "nuestros huesos se secaron." Interpretación doctrinal: la resurrección literal. "Viviréis y sabréis que yo soy el Señor."', level: 'AVANZADO', icon: '🦴', duration: 35, order: 4612, status: 'PUBLISHED', submoduleGroup: 'ezequiel' },
  { id: 'ezequiel-los-dos-palos', moduleId: 'personajes-escrituras', title: 'Los Dos Palos', subtitle: 'La Biblia y el Libro de Mormón en Ezequiel 37', description: 'Ezequiel 37:15-28 — el palo de Judá y el palo de Efraín que se unen en una mano. La Restauración identifica la Biblia como el palo de Judá y el Libro de Mormón como el de José/Efraín. 2 Nefi 3:12 lo confirma desde el propio Libro de Mormón.', level: 'AVANZADO', icon: '📖', duration: 35, order: 4613, status: 'PUBLISHED', submoduleGroup: 'ezequiel' },
  { id: 'ezequiel-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Ezequiel y la Restauración', subtitle: 'El templo milenial y el río que sana', description: 'Ezequiel 40-48 — las medidas precisas del templo milenial. El río de Ezequiel 47 que sana las aguas muertas. Ezequiel 36:26 (corazón de carne). La profecía de Gog y Magog (Ezequiel 38-39) y su cumplimiento en DyC 45.', level: 'AVANZADO', icon: '✨', duration: 25, order: 4614, status: 'PUBLISHED', submoduleGroup: 'ezequiel' },
  // ── PERSONAS DEL NUEVO TESTAMENTO (orders 50-59) ─────────────────────────
  // ── PEDRO (submodule, orders 5010-5014) ─────────────────────────────────
  { id: 'pedro-el-pescador', moduleId: 'personajes-escrituras', title: 'El Pescador', subtitle: '"Desde ahora serás pescador de hombres"', description: 'Simón Bar-Jonás de Betsaida. El llamamiento junto al Mar de Galilea (Lucas 5 — la pesca milagrosa). "Apártate de mí, Señor, porque soy hombre pecador." El nuevo nombre Cefas/Pedro. La dinámica de ser el hermano que Andrés encontró primero.', level: 'BÁSICO', icon: '🎣', duration: 25, order: 5010, status: 'PUBLISHED', submoduleGroup: 'pedro' },
  { id: 'pedro-la-confesion', moduleId: 'personajes-escrituras', title: 'La Confesión de Cesarea', subtitle: '"Tú eres el Cristo, el Hijo del Dios viviente"', description: '"¿Quién decís que soy yo?" — la pregunta que definió la Iglesia. La respuesta de Pedro y la declaración de Jesús ("sobre esta roca"). Las llaves del reino de los cielos. Pedro caminando sobre el agua. La Transfiguración como testigo.', level: 'INTERMEDIO', icon: '🪨', duration: 30, order: 5011, status: 'PUBLISHED', submoduleGroup: 'pedro' },
  { id: 'pedro-la-negacion', moduleId: 'personajes-escrituras', title: 'La Negación', subtitle: 'Tres veces, junto a la hoguera', description: 'La predicción de Jesús. Getsemaní — Pedro dormido. La negación junto a la hoguera en el patio del sumo sacerdote. "El canto del gallo" y "Pedro salió y lloró amargamente." La restauración en Juan 21: tres preguntas que anulan tres negaciones.', level: 'INTERMEDIO', icon: '🔥', duration: 30, order: 5012, status: 'PUBLISHED', submoduleGroup: 'pedro' },
  { id: 'pedro-el-apostol', moduleId: 'personajes-escrituras', title: 'El Presidente del Quórum', subtitle: 'De Pentecostés a la apertura a los gentiles', description: 'El discurso de Pentecostés (Hechos 2 — 3,000 bautizados), la visión del mantel impuro y la apertura del evangelio a los gentiles (Cornelio, Hechos 10), el Concilio de Jerusalén (Hechos 15), y su muerte crucificado de cabeza bajo Nerón.', level: 'AVANZADO', icon: '🌍', duration: 35, order: 5013, status: 'PUBLISHED', submoduleGroup: 'pedro' },
  { id: 'pedro-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Pedro y la Restauración', subtitle: 'Las llaves del apostolado restauradas', description: 'Pedro, Santiago y Juan confirieron el Sacerdocio de Melquisedec a José Smith y Oliver Cowdery (ca. 1829 — DyC 27:12-13). 2 Pedro 1:16-18 como testimonio ocular de la Transfiguración. 1 Pedro 3:18-20 como base del bautismo vicario.', level: 'AVANZADO', icon: '✨', duration: 25, order: 5014, status: 'PUBLISHED', submoduleGroup: 'pedro' },
  // ── PABLO (submodule, orders 5110-5114) ─────────────────────────────────
  { id: 'pablo-el-perseguidor', moduleId: 'personajes-escrituras', title: 'El Perseguidor', subtitle: 'De guardar los mantos a la muerte de Esteban', description: 'Saulo de Tarso — fariseo de fariseos, discípulo de Gamaliel, ciudadano romano. Aprobó la muerte de Esteban (Hechos 7). Persecución sistemática de casa en casa (Hechos 8:3). Un hombre absolutamente convencido de servir a Dios al perseguir la Iglesia.', level: 'INTERMEDIO', icon: '⚔️', duration: 30, order: 5110, status: 'PUBLISHED', submoduleGroup: 'pablo' },
  { id: 'pablo-la-conversion', moduleId: 'personajes-escrituras', title: 'El Camino a Damasco', subtitle: 'La conversión más dramática del Nuevo Testamento', description: 'La luz, la voz ("¿por qué me persigues?"), tres días sin vista ni comida, Ananías el discípulo que obedeció sin entender, la recuperación de la vista y el bautismo inmediato. Los tres relatos del mismo evento (Hechos 9, 22, 26) con diferencias significativas.', level: 'INTERMEDIO', icon: '⚡', duration: 30, order: 5111, status: 'PUBLISHED', submoduleGroup: 'pablo' },
  { id: 'pablo-el-misionero', moduleId: 'personajes-escrituras', title: 'El Gran Misionero', subtitle: 'Tres viajes, 14.000 km, 13 epístolas', description: 'Tres viajes misioneros por el mundo mediterráneo, el método misionero (sinagogas → gentiles), los sufrimientos de 2 Corintios 11:24-28, la carta a los Filipenses escrita desde la cárcel ("me gozo en el Señor siempre"), y su muerte en Roma.', level: 'BÁSICO', icon: '✉️', duration: 30, order: 5112, status: 'PUBLISHED', submoduleGroup: 'pablo' },
  { id: 'pablo-la-teologia', moduleId: 'personajes-escrituras', title: 'La Teología de la Gracia', subtitle: 'Justificación por fe y el cuerpo de Cristo', description: 'La justificación por fe (Romanos 3, Gálatas 2), el cuerpo de Cristo (1 Corintios 12), el himno a la caridad (1 Corintios 13), la resurrección en 1 Corintios 15, y el bautismo por los muertos en 1 Corintios 15:29.', level: 'AVANZADO', icon: '📚', duration: 35, order: 5113, status: 'PUBLISHED', submoduleGroup: 'pablo' },
  { id: 'pablo-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Pablo y la Restauración', subtitle: '1 Corintios 15:29 y la práctica primitiva', description: '1 Corintios 15:29 — el bautismo por los muertos como práctica conocida en la Iglesia primitiva. DyC 128:14-17 (José Smith cita a Pablo). Efesios 1:10 ("dispensación del cumplimiento de los tiempos"). La apostasía predicha en 2 Tesalonicenses 2.', level: 'AVANZADO', icon: '✨', duration: 25, order: 5114, status: 'PUBLISHED', submoduleGroup: 'pablo' },
  // ── JUAN EL BAUTISTA (submodule, orders 5210-5214) ──────────────────────
  { id: 'juan-bautista-el-precursor', moduleId: 'personajes-escrituras', title: 'El Precursor', subtitle: '"Voz del que clama en el desierto"', description: 'El nacimiento milagroso de Juan (Lucas 1). El ángel Gabriel y la profecía de que irá "con el espíritu y el poder de Elías." La vida en el desierto, la predicación de arrepentimiento, y su identificación como el "Elías que había de venir" (Mateo 11:14).', level: 'INTERMEDIO', icon: '🏜️', duration: 30, order: 5210, status: 'PUBLISHED', submoduleGroup: 'juan-bautista' },
  { id: 'juan-bautista-el-bautismo', moduleId: 'personajes-escrituras', title: 'El Bautismo de Jesús', subtitle: 'La Trinidad manifiesta en el Jordán', description: 'La resistencia de Juan a bautizar a Jesús ("yo necesito ser bautizado por ti"). Jesús: "para cumplir toda justicia." La apertura de los cielos, la paloma, la voz del Padre. Por qué el bautismo de Jesús no fue para remisión de pecados pero establece el patrón correcto.', level: 'INTERMEDIO', icon: '💧', duration: 30, order: 5211, status: 'PUBLISHED', submoduleGroup: 'juan-bautista' },
  { id: 'juan-bautista-el-mayor', moduleId: 'personajes-escrituras', title: '"Entre los Nacidos de Mujer, Ninguno Mayor"', subtitle: 'El lugar único de Juan en el plan de salvación', description: 'Mateo 11:11 — la paradoja ("el más pequeño en el reino es mayor que él"). Juan como el único profeta llamado antes de nacer con un nombre específico. Su papel como el último profeta del Antiguo Testamento y el primero del Nuevo.', level: 'AVANZADO', icon: '👑', duration: 30, order: 5212, status: 'PUBLISHED', submoduleGroup: 'juan-bautista' },
  { id: 'juan-bautista-la-prision', moduleId: 'personajes-escrituras', title: 'La Prisión y la Muerte', subtitle: '"¿Eres tú el que había de venir?"', description: 'Juan encarcelado por reprender el matrimonio de Herodes. Su pregunta desde la prisión ("¿eres tú el que había de venir?") y lo que revela sobre la fe en el sufrimiento. La fiesta de Herodes, la danza de Salomé, y la decapitación del primer mártir cristiano.', level: 'INTERMEDIO', icon: '⛓️', duration: 30, order: 5213, status: 'PUBLISHED', submoduleGroup: 'juan-bautista' },
  { id: 'juan-bautista-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Juan y la Restauración', subtitle: 'DyC 13 — las llaves del sacerdocio aarónico', description: 'Juan el Bautista como ser resucitado confirió el sacerdocio aarónico a José Smith y Oliver Cowdery el 15 de mayo de 1829 (DyC 13). Las llaves específicas: ministerio de ángeles, evangelio de arrepentimiento, bautismo por inmersión. El sacerdocio que "nunca será quitado."', level: 'AVANZADO', icon: '✨', duration: 25, order: 5214, status: 'PUBLISHED', submoduleGroup: 'juan-bautista' },
  // ── MARÍA MAGDALENA (submodule, orders 5310-5314) ───────────────────────
  { id: 'maria-magdalena-el-mito', moduleId: 'personajes-escrituras', title: 'El Mito', subtitle: 'Cómo el Papa Gregorio I inventó un personaje en 591 d.C.', description: 'Gregorio I fusionó tres mujeres distintas en una: María de Magdala, la pecadora anónima de Lucas 7, y María de Betania. El error duró 1,400 años. La Iglesia Católica lo corrigió oficialmente en 1969. Lo que dice Lucas 8:1-3 realmente sobre María.', level: 'INTERMEDIO', icon: '🔍', duration: 30, order: 5310, status: 'PUBLISHED', submoduleGroup: 'maria-magdalena' },
  { id: 'maria-magdalena-la-discipula', moduleId: 'personajes-escrituras', title: 'La Discípula Fiel', subtitle: 'Financió el ministerio de Jesús y lo siguió hasta el final', description: 'Lucas 8:1-3 — María Magdalena y otras mujeres que servían con sus bienes al grupo de Jesús. Lo que esto significa económicamente. Las mujeres en los momentos más críticos de los Evangelios. El contraste con los doce que huyeron.', level: 'INTERMEDIO', icon: '🌸', duration: 30, order: 5311, status: 'PUBLISHED', submoduleGroup: 'maria-magdalena' },
  { id: 'maria-magdalena-la-cruz', moduleId: 'personajes-escrituras', title: 'Al Pie de la Cruz', subtitle: 'La que no huyó en la oscuridad del Calvario', description: 'Las cuatro listas de mujeres en la crucifixión (Mateo 27, Marcos 15, Lucas 23, Juan 19) y sus diferencias. María Magdalena en todas las versiones. La vigilia junto al sepulcro. El significado teológico de ser testigo del momento más oscuro.', level: 'AVANZADO', icon: '🌟', duration: 30, order: 5312, status: 'PUBLISHED', submoduleGroup: 'maria-magdalena' },
  { id: 'maria-magdalena-la-resurreccion', moduleId: 'personajes-escrituras', title: 'La Primera Testigo', subtitle: 'Juan 20:11-18 — Rabboni', description: 'Juan 20:1-18 completo: María llega de noche, la piedra quitada, los dos ángeles, el "jardinero", el reconocimiento cuando Jesús la llama por su nombre, "Rabboni", y el mandato "Ve y di a mis hermanos." El primer heraldo de la resurrección es una mujer.', level: 'AVANZADO', icon: '🌅', duration: 35, order: 5313, status: 'PUBLISHED', submoduleGroup: 'maria-magdalena' },
  { id: 'maria-magdalena-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'María Magdalena y la Restauración', subtitle: 'La dignidad y el papel de la mujer en el evangelio', description: 'La enseñanza restaurada sobre el papel de la mujer como testigo y heraldo. Emma Smith en DyC 25:3. La Sociedad de Socorro fundada por José Smith. El testimonio de María como modelo de discipulado que no depende de posición eclesiástica.', level: 'INTERMEDIO', icon: '✨', duration: 25, order: 5314, status: 'PUBLISHED', submoduleGroup: 'maria-magdalena' },
  // ── TOMÁS (submodule, orders 5410-5414) ─────────────────────────────────
  { id: 'tomas-el-gemelo', moduleId: 'personajes-escrituras', title: 'Dídimo — El Gemelo', subtitle: 'El apóstol más malentendido de los doce', description: '"Tomás, llamado el Dídimo (Gemelo)" — cuatro momentos específicos en Juan (11:16, 14:5, 20:24-29, 21:2). Tomás en Juan 11:16: "vayamos también nosotros para morir con él" — un hombre dispuesto al martirio antes del episodio de la "duda."', level: 'BÁSICO', icon: '👥', duration: 25, order: 5410, status: 'PUBLISHED', submoduleGroup: 'tomas' },
  { id: 'tomas-la-duda', moduleId: 'personajes-escrituras', title: 'La Duda Honesta', subtitle: '"Si no viere... no creeré"', description: 'Tomás no estaba cuando Jesús apareció la primera vez. Su declaración ("si no viere la señal de los clavos... no creeré") no fue incredulidad sino exigencia de evidencia empírica. La aparición a los ocho días y la invitación de Jesús: "no seas incrédulo sino creyente."', level: 'INTERMEDIO', icon: '🖐️', duration: 30, order: 5411, status: 'PUBLISHED', submoduleGroup: 'tomas' },
  { id: 'tomas-la-confesion', moduleId: 'personajes-escrituras', title: '"¡Señor mío y Dios mío!"', subtitle: 'La confesión de divinidad más directa de los Evangelios', description: '"Ho kyrios mou kai ho theos mou" — la declaración de divinidad de Cristo más explícita en los cuatro evangelios. La paradoja: el que más dudó hizo la confesión más profunda. La respuesta de Jesús sobre los que creen sin ver.', level: 'AVANZADO', icon: '🌟', duration: 30, order: 5412, status: 'PUBLISHED', submoduleGroup: 'tomas' },
  { id: 'tomas-el-misionero', moduleId: 'personajes-escrituras', title: 'El Misionero de la India', subtitle: 'El evangelio llega al subcontinente en el año 52 d.C.', description: 'Tomás llegó a Muzuris (Kerala) en 52 d.C. Fundó siete iglesias. La comunidad de Cristianos de Santo Tomás existe hasta hoy. Murió mártir en Chennai hacia el año 72 d.C. Su historia está documentada desde el siglo II.', level: 'INTERMEDIO', icon: '🌏', duration: 30, order: 5413, status: 'PUBLISHED', submoduleGroup: 'tomas' },
  { id: 'tomas-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Tomás y la Restauración', subtitle: 'La fe que va más allá de la evidencia', description: 'La enseñanza restaurada sobre fe y testimonio (Alma 32). DyC 46:13-14 (el don de saber, el don de creer sin saber). Juan 20:29 como base del testimonio espiritual. La conexión entre la "duda honesta" de Tomás y la promesa de Moroni 10:3-5.', level: 'INTERMEDIO', icon: '✨', duration: 25, order: 5414, status: 'PUBLISHED', submoduleGroup: 'tomas' },
  // ── SANTIAGO EL JUSTO (submodule, orders 5510-5514) ─────────────────────
  { id: 'santiago-el-incredulo', moduleId: 'personajes-escrituras', title: 'El Hermano Incrédulo', subtitle: 'Juan 7:5 — "Ni aun sus hermanos creían en él"', description: 'Juan 7:5 es el verso más honesto de la Biblia sobre Jesús. Los hermanos de Jesús (Santiago, José, Simón, Judas — Mateo 13:55). Santiago burlándose en Juan 7:3-4. Lo que significa crecer en Nazaret como el hermano de alguien que afirma ser el Hijo de Dios.', level: 'INTERMEDIO', icon: '🏠', duration: 30, order: 5510, status: 'PUBLISHED', submoduleGroup: 'santiago-justo' },
  { id: 'santiago-el-apostol', moduleId: 'personajes-escrituras', title: 'La Aparición que lo Cambió Todo', subtitle: '1 Corintios 15:7 — Cristo se le apareció a Santiago', description: 'Pablo menciona específicamente la aparición del Cristo resucitado a Santiago (1 Cor 15:7). La transformación de incrédulo a líder de la Iglesia de Jerusalén. Su ascenso en Hechos (12:17, 15:13, 21:18). Las conversiones producidas por el testimonio ocular de la resurrección.', level: 'INTERMEDIO', icon: '👁️', duration: 30, order: 5511, status: 'PUBLISHED', submoduleGroup: 'santiago-justo' },
  { id: 'santiago-el-lider', moduleId: 'personajes-escrituras', title: 'El Líder de Jerusalén', subtitle: '30 años al frente de la Iglesia madre', description: 'El dictamen de Santiago en el Concilio de Jerusalén (Hechos 15). La relación con Pablo (Gálatas 2:9-12). El apodo "el Justo" dado por Josefo y Hegesipo. Sus rodillas callosas de tanto orar. La fortaleza de la comunidad judeo-cristiana de Jerusalén.', level: 'AVANZADO', icon: '🏛️', duration: 35, order: 5512, status: 'PUBLISHED', submoduleGroup: 'santiago-justo' },
  { id: 'santiago-la-epistola', moduleId: 'personajes-escrituras', title: 'La Epístola de Santiago', subtitle: '"La fe sin obras está muerta"', description: 'Santiago 1:5 como el versículo que detonó la Primera Visión. Santiago 2:17-26 — la fe sin obras vs. la justificación por fe de Pablo (aparente contradicción resuelta). La oración por los enfermos (Santiago 5:14-15). La calidad literaria judía de la epístola.', level: 'AVANZADO', icon: '📜', duration: 30, order: 5513, status: 'PUBLISHED', submoduleGroup: 'santiago-justo' },
  { id: 'santiago-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Santiago y la Restauración', subtitle: 'Santiago 1:5 — el versículo que detonó la Primera Visión', description: 'José Smith de 14 años leyó Santiago 1:5 y sintió que "penetraba con gran fuerza en mi corazón" (JS-H 1:11-12). La Primera Visión como respuesta directa. La muerte de Santiago arrojado desde el pináculo del templo en 62 d.C. (Josefo, Antigüedades 20.9.1).', level: 'AVANZADO', icon: '✨', duration: 25, order: 5514, status: 'PUBLISHED', submoduleGroup: 'santiago-justo' },
  // ── SARA (submodule, orders 6010-6014) ───────────────────────────────────
  { id: 'sara-la-esposa', moduleId: 'personajes-escrituras', title: 'La Esposa', subtitle: 'Sarai de Ur: antes de la promesa', description: 'Sara antes del convenio: la mujer de Ur que siguió a Abraham al desierto, que vivió como nómada décadas, y que mintió dos veces sobre su identidad por miedo.', level: 'BÁSICO', icon: '👩', duration: 30, order: 6010, status: 'PUBLISHED', submoduleGroup: 'sara' },
  { id: 'sara-la-risa', moduleId: 'personajes-escrituras', title: 'La Risa', subtitle: 'El Dios que nombró a un niño "risa"', description: 'Sara escuchó la promesa de un hijo a los 90 años y se rió. Dios no se ofendió — nombró al niño Isaac. El teología de la risa como respuesta ante lo imposible.', level: 'INTERMEDIO', icon: '😂', duration: 30, order: 6011, status: 'PUBLISHED', submoduleGroup: 'sara' },
  { id: 'sara-y-agar', moduleId: 'personajes-escrituras', title: 'Agar', subtitle: 'La solución humana a un problema divino', description: 'Sara da a Agar a Abraham para acelerar el cumplimiento de la promesa. El conflicto que siguió muestra lo que pasa cuando intentamos forzar los tiempos de Dios.', level: 'INTERMEDIO', icon: '🏜️', duration: 35, order: 6012, status: 'PUBLISHED', submoduleGroup: 'sara' },
  { id: 'sara-la-madre', moduleId: 'personajes-escrituras', title: 'Isaac', subtitle: 'El hijo que Dios prometió y cumplió', description: 'El nacimiento de Isaac a los 90 años de Sara. Su muerte a los 127 años — la única mujer en la Biblia cuya edad de muerte se registra. La fe que sobrevivió décadas de espera.', level: 'BÁSICO', icon: '👶', duration: 30, order: 6013, status: 'PUBLISHED', submoduleGroup: 'sara' },
  { id: 'sara-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Sara y la Restauración', subtitle: 'La madre del convenio abrahámico', description: 'Sara en DyC 132, Hebreos 11:11 y 1 Pedro 3:6. Su lugar en el convenio eterno. La Restauración y el matrimonio eterno como contexto de su legado.', level: 'AVANZADO', icon: '✨', duration: 25, order: 6014, status: 'PUBLISHED', submoduleGroup: 'sara' },
  // ── RUT (submodule, orders 6110-6114) ────────────────────────────────────
  { id: 'rut-la-moabita', moduleId: 'personajes-escrituras', title: 'La Moabita', subtitle: 'Del pueblo maldito a la genealogía del Mesías', description: 'Los moabitas tenían orígenes vergonzosos (Gén 19:37). Rut provenía de ese pueblo. Su historia comienza con lo que el mundo descartaría como un defecto de origen irreparable.', level: 'BÁSICO', icon: '🌾', duration: 30, order: 6110, status: 'PUBLISHED', submoduleGroup: 'rut' },
  { id: 'rut-la-leal', moduleId: 'personajes-escrituras', title: '"Donde tú vayas"', subtitle: 'La declaración de lealtad más hermosa de la Biblia', description: 'Rut 1:16-18: "donde tú mueras, moriré yo." Lo que esa declaración costó en términos concretos. El hesed hebreo: lealtad de convenio que excede la obligación.', level: 'BÁSICO', icon: '💛', duration: 30, order: 6111, status: 'PUBLISHED', submoduleGroup: 'rut' },
  { id: 'rut-en-los-campos', moduleId: 'personajes-escrituras', title: 'Los Campos de Boaz', subtitle: 'La providencia que parece coincidencia', description: 'Rut "casualmente" llega al campo de Boaz (Rut 2:3). La ley del rebusco (Lev 19:9-10). La providencia divina que opera a través de momentos ordinarios.', level: 'INTERMEDIO', icon: '🌿', duration: 30, order: 6112, status: 'PUBLISHED', submoduleGroup: 'rut' },
  { id: 'rut-y-boaz', moduleId: 'personajes-escrituras', title: 'El Redentor', subtitle: 'Boaz como tipo de Cristo', description: 'El go\'el (redentor pariente) en la ley de Israel. Boaz paga el precio completo para redimir lo perdido. La era de trillar, el sandal, la puerta de la ciudad — y el paralelo con Cristo como nuestro Redentor.', level: 'AVANZADO', icon: '💍', duration: 35, order: 6113, status: 'PUBLISHED', submoduleGroup: 'rut' },
  { id: 'rut-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Rut y la Restauración', subtitle: 'La extranjera en la línea del Salvador', description: 'Rut en Mateo 1:5 — en la genealogía de Jesús. Lo que significa que una moabita esté en la línea directa del Mesías. Romanos 11 y 1 Nefi 15: cualquier nación puede ser injertada en el convenio.', level: 'INTERMEDIO', icon: '✨', duration: 25, order: 6114, status: 'PUBLISHED', submoduleGroup: 'rut' },
  // ── ESTER (submodule, orders 6210-6214) ──────────────────────────────────
  { id: 'ester-la-huerfana', moduleId: 'personajes-escrituras', title: 'La Huérfana', subtitle: 'Hadasa en el Imperio Persa', description: 'Ester (Hadassah: mirto) era una huérfana judía criada por Mardoqueo en la diáspora persa. El concurso de belleza de Asuero. La doble vida: reina de Persia, judía en secreto.', level: 'BÁSICO', icon: '🌿', duration: 30, order: 6210, status: 'PUBLISHED', submoduleGroup: 'ester' },
  { id: 'ester-la-reina', moduleId: 'personajes-escrituras', title: 'La Reina', subtitle: 'La doble vida en la corte del rey más poderoso', description: 'Ester en el palacio: favor del rey, identidad oculta, la conspiración que Mardoqueo descubre. La vida de fe bajo una identidad que no puede revelarse todavía.', level: 'BÁSICO', icon: '👑', duration: 30, order: 6211, status: 'PUBLISHED', submoduleGroup: 'ester' },
  { id: 'ester-el-decreto', moduleId: 'personajes-escrituras', title: 'El Decreto', subtitle: 'El genocidio firmado con el anillo del rey', description: 'El decreto de Amán para exterminar a todos los judíos del Imperio Persa. Mardoqueo en duelo. El mensaje a Ester: debe actuar. Su resistencia: "cualquiera que entre sin ser llamado será ejecutado."', level: 'INTERMEDIO', icon: '📜', duration: 35, order: 6212, status: 'PUBLISHED', submoduleGroup: 'ester' },
  { id: 'ester-el-valor', moduleId: 'personajes-escrituras', title: '"Si He de Morir"', subtitle: 'La decisión que salvó a un pueblo', description: '"¿Quién sabe si no fue para este momento que llegaste al reino?" La decisión de Ester, tres días de ayuno, el acceso al rey, la estrategia del banquete, la caída de Amán y el Purim.', level: 'INTERMEDIO', icon: '⚔️', duration: 35, order: 6213, status: 'PUBLISHED', submoduleGroup: 'ester' },
  { id: 'ester-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Ester y la Restauración', subtitle: 'La providencia sin milagros visibles', description: 'El libro de Ester no menciona a Dios — pero la providencia está en cada página. Cómo Dios actúa a través de personas ordinarias en momentos extraordinarios. Emma Smith, Eliza R. Snow como Esteres modernas.', level: 'AVANZADO', icon: '✨', duration: 25, order: 6214, status: 'PUBLISHED', submoduleGroup: 'ester' },
  // ── DÉBORA (submodule, orders 6310-6314) ─────────────────────────────────
  { id: 'debora-la-jueza', moduleId: 'personajes-escrituras', title: 'La Jueza', subtitle: 'La única mujer jueza de Israel', description: 'Débora juzgaba a Israel bajo su palmera (Jueces 4:4-5). 20 años de opresión cananea, 900 carros de hierro. Lo extraordinario de una mujer con autoridad judicial, militar y espiritual en el mundo antiguo.', level: 'INTERMEDIO', icon: '⚖️', duration: 30, order: 6310, status: 'PUBLISHED', submoduleGroup: 'debora' },
  { id: 'debora-la-profetisa', moduleId: 'personajes-escrituras', title: 'La Profetisa', subtitle: 'La voz de Dios en el Israel de los Jueces', description: 'Débora es llamada n\'biah — profetisa — en Jueces 4:4. Convoca a Barac y entrega el mensaje divino. Barac se niega a ir sin ella. La profecía: el honor irá a una mujer.', level: 'INTERMEDIO', icon: '🔥', duration: 30, order: 6311, status: 'PUBLISHED', submoduleGroup: 'debora' },
  { id: 'debora-la-guerrera', moduleId: 'personajes-escrituras', title: 'La Batalla', subtitle: '900 carros de hierro que no sirvieron de nada', description: 'La batalla en el río Quisón. La orden de Débora: "Levántate, porque este es el día." La inundación que neutralizó los carros. Lo que enseña sobre la estrategia divina versus el poder humano.', level: 'INTERMEDIO', icon: '⚔️', duration: 30, order: 6312, status: 'PUBLISHED', submoduleGroup: 'debora' },
  { id: 'debora-y-jael', moduleId: 'personajes-escrituras', title: 'Jael', subtitle: 'La estaca de la tienda y el fin de Sísara', description: 'Sísara huye a la tienda de Jael. El clavo de la tienda. El Canto de Débora (Jueces 5) — uno de los textos más antiguos de la Biblia en hebreo arcaico — celebra a ambas mujeres.', level: 'AVANZADO', icon: '🏕️', duration: 35, order: 6313, status: 'PUBLISHED', submoduleGroup: 'debora' },
  { id: 'debora-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Débora y la Restauración', subtitle: 'El liderazgo femenino en las escrituras', description: 'Débora, Miriam, Hulda, Ana: el linaje de profetisas. Emma como Mujer Elegida (DyC 25). La Sociedad de Socorro. Joel 2:28 / Hechos 2:17: "vuestras hijas profetizarán."', level: 'AVANZADO', icon: '✨', duration: 25, order: 6314, status: 'PUBLISHED', submoduleGroup: 'debora' },
  // ── MARÍA LA MADRE (submodule, orders 6410-6414) ─────────────────────────
  { id: 'maria-madre-el-anuncio', moduleId: 'personajes-escrituras', title: 'El Anuncio', subtitle: 'Gabriel y el fiat que cambió la historia', description: 'Lucas 1:26-38: Gabriel a María. "He aquí la sierva del Señor." El fiat como el momento de entrega total. 1 Nefi 11: Nefi vio este mismo momento 600 años antes.', level: 'INTERMEDIO', icon: '🕊️', duration: 30, order: 6410, status: 'PUBLISHED', submoduleGroup: 'maria-madre' },
  { id: 'maria-madre-la-visitacion', moduleId: 'personajes-escrituras', title: 'El Magníficat', subtitle: 'La canción de la madre del Señor', description: 'Lucas 1:39-56: la Visitación a Elisabet. El Magníficat — "Mi alma engrandece al Señor" — eco del Canto de Ana. María como teóloga: conoce las escrituras y entiende lo que está pasando.', level: 'INTERMEDIO', icon: '🌟', duration: 30, order: 6411, status: 'PUBLISHED', submoduleGroup: 'maria-madre' },
  { id: 'maria-madre-y-jose', moduleId: 'personajes-escrituras', title: 'José y María', subtitle: 'El desposorio, el sueño y Belén', description: 'Mateo 1:18-25: el dilema de José, el ángel en el sueño. Lucas 2:1-20: el censo, Belén, el pesebre, los pastores. Simeón: "una espada traspasará tu alma."', level: 'INTERMEDIO', icon: '🌙', duration: 35, order: 6412, status: 'PUBLISHED', submoduleGroup: 'maria-madre' },
  { id: 'maria-madre-en-la-cruz', moduleId: 'personajes-escrituras', title: 'De Belén a la Cruz', subtitle: 'La espada que traspasó su alma', description: 'El recorrido completo de María: Egipto, el Templo a los 12, Caná, la crucifixión (Juan 19:25-27), "Mujer, he ahí tu hijo." María en Hechos 1:14 — presente en Pentecostés.', level: 'AVANZADO', icon: '🌟', duration: 35, order: 6413, status: 'PUBLISHED', submoduleGroup: 'maria-madre' },
  { id: 'maria-madre-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'María y la Restauración', subtitle: 'La más mencionada en el Libro de Mormón', description: '1 Nefi 11:13-21, Mosíah 3:8, Alma 7:10. La única mujer nombrada por nombre en el Libro de Mormón fuera de citas del AT. Lo que la Restauración añade a nuestra comprensión de María.', level: 'AVANZADO', icon: '✨', duration: 25, order: 6414, status: 'PUBLISHED', submoduleGroup: 'maria-madre' },
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
  // ── HERMANO DE JARED (submodule, orders 7210-7214) ───────────────────────
  { id: 'hermano-jared-la-torre', moduleId: 'personajes-escrituras', title: 'La Torre de Babel', subtitle: 'El origen de un pueblo elegido', description: 'El Hermano de Jared intercedió ante el Señor en el caos de Babel para preservar el idioma de su familia. Esta primera oración documentada revela un hombre que conocía a su Dios y sabía cómo acercarse a Él.', level: 'BÁSICO', icon: '🗼', duration: 25, order: 7210, status: 'PUBLISHED', submoduleGroup: 'hermano-jared' },
  { id: 'hermano-jared-el-viaje', moduleId: 'personajes-escrituras', title: 'El Viaje al Mar', subtitle: 'Cuatro años de silencio divino', description: 'Después de cruzar tierras salvajes, el grupo acampó en la orilla del mar cuatro años. El Señor reprendió al Hermano de Jared por no orar. La disciplina espiritual como preparación para la mayor visión de la escritura.', level: 'INTERMEDIO', icon: '🏕️', duration: 30, order: 7211, status: 'PUBLISHED', submoduleGroup: 'hermano-jared' },
  { id: 'hermano-jared-las-piedras', moduleId: 'personajes-escrituras', title: 'Las Dieciséis Piedras', subtitle: 'La fe que movió la mano del Señor', description: 'El Hermano de Jared presentó dieciséis piedras pequeñas al Señor y pidió que las iluminara. No pidió un milagro automático — preparó el instrumento y pidió poder divino. La fe activa que no espera soluciones ya empaquetadas.', level: 'AVANZADO', icon: '💎', duration: 35, order: 7212, status: 'PUBLISHED', submoduleGroup: 'hermano-jared' },
  { id: 'hermano-jared-la-vision', moduleId: 'personajes-escrituras', title: 'La Gran Visión', subtitle: 'Vio al Cristo premortal cara a cara', description: 'Al tocar las piedras, el velo se rasgó y el Hermano de Jared vio al Cristo premortal. "El Señor no pudo retenerle nada" (Eter 3:26). La mayor teofanía privada registrada en la escritura — y toda la humanidad futura se le mostró.', level: 'AVANZADO', icon: '👁️', duration: 40, order: 7213, status: 'PUBLISHED', submoduleGroup: 'hermano-jared' },
  { id: 'hermano-jared-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'El Hermano de Jared y la Restauración', subtitle: 'El tipo máximo de fe activa', description: 'La historia del Hermano de Jared es el modelo de fe restaurada: preparación activa, petición específica, acceso directo al Señor. Su visión sellada en el libro de Eter aguarda lectores con fe suficiente para recibirla.', level: 'AVANZADO', icon: '📖', duration: 25, order: 7214, status: 'PUBLISHED', submoduleGroup: 'hermano-jared' },
  // ── AMMÓN (submodule, orders 7310-7314) ──────────────────────────────────
  { id: 'ammon-la-mision', moduleId: 'personajes-escrituras', title: 'La Misión Imposible', subtitle: 'Fue a servir, no a predicar', description: 'Ammón eligió servir al rey lamanita Lamoni como sirviente en lugar de casarse con su hija. Esta elección de humildad radical cambió el curso de una civilización. Alma 17: el misionero que invirtió el modelo.', level: 'BÁSICO', icon: '🌍', duration: 25, order: 7310, status: 'PUBLISHED', submoduleGroup: 'ammon' },
  { id: 'ammon-el-guardian', moduleId: 'personajes-escrituras', title: 'El Guardián de Rebaños', subtitle: 'La espada como instrumento del Señor', description: 'Ammón cortó los brazos de quienes atacaban los rebaños del rey. No lo hizo por violencia sino por servicio fiel. El rey Lamoni quedó tan asombrado que preguntó qué poder tenía este hombre — y Ammón enseñó el evangelio. Alma 17-18.', level: 'BÁSICO', icon: '⚔️', duration: 30, order: 7311, status: 'PUBLISHED', submoduleGroup: 'ammon' },
  { id: 'ammon-el-maestro', moduleId: 'personajes-escrituras', title: 'El Maestro del Rey', subtitle: 'La conversión de Lamoni', description: 'Ammón enseñó al rey Lamoni sobre el Gran Espíritu, la Creación, el plan de redención y la Expiación. Lamoni cayó como muerto de gozo. Su esposa, su casa, y los sirvientes experimentaron el poder del Espíritu. Alma 18-19.', level: 'INTERMEDIO', icon: '👑', duration: 35, order: 7312, status: 'PUBLISHED', submoduleGroup: 'ammon' },
  { id: 'ammon-el-padre', moduleId: 'personajes-escrituras', title: 'Los Anti-Nefi-Lehíes', subtitle: 'El pueblo que enterró sus armas', description: 'Bajo la influencia de Ammón, miles de lamanitas se convirtieron y enterraron sus armas como convenio de no derramar sangre. Eligieron morir antes que romper su convenio. La conversión más profunda del Libro de Mormón. Alma 23-24.', level: 'AVANZADO', icon: '🕊️', duration: 35, order: 7313, status: 'PUBLISHED', submoduleGroup: 'ammon' },
  { id: 'ammon-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Ammón y la Restauración', subtitle: 'El modelo del misionero restaurado', description: 'La misión de Ammón es el arquetipo de la misión restaurada: servicio antes que sermón, conversión profunda sobre conversión superficial, convenios que cuestan algo. Los misioneros modernos estudian a Ammón como modelo.', level: 'AVANZADO', icon: '✨', duration: 25, order: 7314, status: 'PUBLISHED', submoduleGroup: 'ammon' },
  // ── REY BENJAMÍN (submodule, orders 7410-7414) ───────────────────────────
  { id: 'rey-benjamin-el-rey-siervo', moduleId: 'personajes-escrituras', title: 'El Rey Siervo', subtitle: 'Gobernó sin cobrar tributo', description: 'Benjamín era rey pero trabajaba con sus propias manos. Fue guerrero, gobernante y servidor. Su liderazgo invierte el modelo antiguo: la autoridad que sirve es la autoridad legítima.', level: 'INTERMEDIO', icon: '🛡️', duration: 30, order: 7410, status: 'PUBLISHED', submoduleGroup: 'rey-benjamin' },
  { id: 'rey-benjamin-la-deuda', moduleId: 'personajes-escrituras', title: 'La Deuda Impagable', subtitle: 'El argumento más poderoso sobre la gracia', description: 'Mosíah 2:20-25 demuestra que no podemos saldar nuestra deuda con Dios — cada capacidad de servirle viene de Él. La única respuesta posible a la gracia es gratitud, no pago.', level: 'AVANZADO', icon: '⚖️', duration: 35, order: 7411, status: 'PUBLISHED', submoduleGroup: 'rey-benjamin' },
  { id: 'rey-benjamin-el-nombre', moduleId: 'personajes-escrituras', title: 'El Nombre de Cristo', subtitle: 'Tomar el nombre como convenio', description: 'Mosíah 5:7-15 describe el convenio del pueblo de tomar sobre sí el nombre de Cristo. La conversión colectiva que siguió al discurso es única en la escritura: todos, sin excepción, experimentaron un cambio de corazón.', level: 'AVANZADO', icon: '🌟', duration: 35, order: 7412, status: 'PUBLISHED', submoduleGroup: 'rey-benjamin' },
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
  // ── JOSÉ SMITH (submodule, orders 8010-8014) ──────────────────────────────
  { id: 'jose-smith-la-primera-vision', moduleId: 'personajes-escrituras', title: 'La Primera Visión', subtitle: 'El bosque donde todo comenzó', description: 'En la primavera de 1820, José Smith de 14 años entró al bosque con una pregunta simple. Lo que recibió cambió el mundo para siempre: el Padre y el Hijo se le aparecieron, le llamaron por nombre, y dijeron que la apostasía era real.', level: 'BÁSICO', icon: '🌲', duration: 30, order: 8010, status: 'PUBLISHED', submoduleGroup: 'jose-smith' },
  { id: 'jose-smith-el-traductor', moduleId: 'personajes-escrituras', title: 'El Traductor', subtitle: 'Cómo se tradujo el Libro de Mormón', description: 'En 63 días de trabajo intenso, José Smith dictó el Libro de Mormón casi sin correcciones. Sin educación formal. Sin manuscrito a la vista. El proceso de traducción — las piedras, el sombrero, el proceso visionario — sigue siendo fascinante.', level: 'INTERMEDIO', icon: '📜', duration: 35, order: 8011, status: 'PUBLISHED', submoduleGroup: 'jose-smith' },
  { id: 'jose-smith-el-profeta', moduleId: 'personajes-escrituras', title: 'El Profeta Sellador', subtitle: 'Las llaves de la última dispensación', description: 'José Smith recibió más revelaciones que cualquier profeta en la historia registrada. La restauración del sacerdocio, el templo, la exaltación familiar, las llaves de sellar y desatar. Su doctrina sobre la familia y la vida eterna transformó la teología cristiana.', level: 'AVANZADO', icon: '🗝️', duration: 40, order: 8012, status: 'PUBLISHED', submoduleGroup: 'jose-smith' },
  { id: 'jose-smith-el-martir', moduleId: 'personajes-escrituras', title: 'El Mártir', subtitle: 'La tarde del 27 de junio de 1844', description: 'José Smith tenía 38 años cuando fue asesinado en Carthage. No fue sorprendido: había profetizado su muerte. Entró a la cárcel como un cordero al matadero. Su muerte selló su testimonio con sangre — el sello definitivo de toda dispensación.', level: 'AVANZADO', icon: '🕊️', duration: 35, order: 8013, status: 'PUBLISHED', submoduleGroup: 'jose-smith' },
  { id: 'jose-smith-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'José Smith y la Restauración', subtitle: 'El hombre que abrió la última dispensación', description: 'José Smith es el pivote de la historia sagrada moderna. Todo lo que la Iglesia enseña, practica y espera viene de las llaves y revelaciones que él recibió. Entender a José Smith es entender la Restauración.', level: 'AVANZADO', icon: '✨', duration: 25, order: 8014, status: 'PUBLISHED', submoduleGroup: 'jose-smith' },
  // ── EMMA SMITH (submodule, orders 8110-8114) ──────────────────────────────
  { id: 'emma-smith-la-elegida', moduleId: 'personajes-escrituras', title: 'La Elegida', subtitle: 'DyC 25: "Elegida y llamada"', description: 'Emma Hale fue la primera destinataria de una revelación personal en esta dispensación. DyC 25 la llama "elegida y llamada" — no por ser esposa del profeta, sino por sus propios dones y su propio convenio. Quien es ella en sus propios términos.', level: 'BÁSICO', icon: '✨', duration: 25, order: 8110, status: 'PUBLISHED', submoduleGroup: 'emma-smith' },
  { id: 'emma-smith-la-escribiente', moduleId: 'personajes-escrituras', title: 'La Escribiente', subtitle: 'La primera secretaria de la Restauración', description: 'Emma fue una de las escribientes del Libro de Mormón. Escribía mientras José dictaba, sin pausas para elaborar. Testificó que él nunca consultó notas ni texto previo. Su rol intelectual en los primeros años de la Iglesia ha sido sistemáticamente subestimado.', level: 'INTERMEDIO', icon: '✍️', duration: 30, order: 8111, status: 'PUBLISHED', submoduleGroup: 'emma-smith' },
  { id: 'emma-smith-el-sufrimiento', moduleId: 'personajes-escrituras', title: 'El Sufrimiento', subtitle: 'Cuatro hijos muertos, pobreza, persecución', description: 'Emma perdió cuatro de sus once hijos. Vivió en pobreza crónica. Fue desplazada varias veces. Enfrentó la poligamia de José con una angustia documentada. Y siguió. Su resistencia no fue ciega — fue forjada en pérdidas reales y repetidas.', level: 'AVANZADO', icon: '💔', duration: 35, order: 8112, status: 'PUBLISHED', submoduleGroup: 'emma-smith' },
  { id: 'emma-smith-la-musica', moduleId: 'personajes-escrituras', title: 'La Música Sagrada', subtitle: 'Compiló el primer himnario de la Iglesia', description: 'DyC 25:11 le encargó a Emma seleccionar himnos para la Iglesia. El primer himnario de 1835 fue su obra. La música de adoración de esta dispensación tiene su origen en los gustos, el conocimiento y la fe de Emma Smith.', level: 'INTERMEDIO', icon: '🎵', duration: 30, order: 8113, status: 'PUBLISHED', submoduleGroup: 'emma-smith' },
  { id: 'emma-smith-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Emma Smith y la Restauración', subtitle: 'La mujer detrás de la dispensación', description: 'Emma Smith es la madre invisible de la Restauración moderna. Sin ella, no hay himnos, no hay escribiente del Libro de Mormón, no hay refugio para el profeta en los años más vulnerables. Su historia nos invita a reconocer el costo humano de la fundación de la Iglesia.', level: 'AVANZADO', icon: '🌹', duration: 25, order: 8114, status: 'PUBLISHED', submoduleGroup: 'emma-smith' },
  // ── HYRUM SMITH (submodule, orders 8210-8214) ────────────────────────────
  { id: 'hyrum-smith-el-hermano', moduleId: 'personajes-escrituras', title: 'El Hermano Mayor', subtitle: 'La sombra que sostuvo al profeta', description: 'Hyrum Smith fue el hermano mayor constante que José nunca menciona pero siempre necesitó. Desde los años de Kirtland hasta Carthage, estuvo presente. Su lealtad no fue fácil — costó su reputación, su comodidad, y al final, su vida.', level: 'BÁSICO', icon: '🤝', duration: 25, order: 8210, status: 'PUBLISHED', submoduleGroup: 'hyrum-smith' },
  { id: 'hyrum-smith-el-patriarca', moduleId: 'personajes-escrituras', title: 'El Patriarca', subtitle: 'Portavoz de bendiciones para la Iglesia', description: 'Hyrum fue llamado como Patriarca de la Iglesia — el oficio que da bendiciones patriarcales a cada miembro. DyC 124:15 dice que Dios "lo amaba por la integridad de su corazón". No por brillantez, sino por integridad constante.', level: 'INTERMEDIO', icon: '✋', duration: 30, order: 8211, status: 'PUBLISHED', submoduleGroup: 'hyrum-smith' },
  { id: 'hyrum-smith-la-integridad', moduleId: 'personajes-escrituras', title: 'La Integridad de Job', subtitle: 'El hombre que José admiraba más', description: 'José dijo que Hyrum tenía "la integridad de Job". Era el estándar de rectitud privada en la familia Smith. No se conocen escándalos, vacilaciones o compromisos con principios. En una época de apostasías masivas, Hyrum no se movió.', level: 'AVANZADO', icon: '🏛️', duration: 35, order: 8212, status: 'PUBLISHED', submoduleGroup: 'hyrum-smith' },
  { id: 'hyrum-smith-carthage', moduleId: 'personajes-escrituras', title: 'Carthage', subtitle: 'Eligió morir antes que abandonar a su hermano', description: 'En Carthage, Hyrum podría haberse salvado. Había una oportunidad para salir. Eligió quedarse con José. Fue el primero en morir ese 27 de junio de 1844. DyC 135:3: "...han sellado su testimonio con su propia sangre".', level: 'AVANZADO', icon: '🕯️', duration: 35, order: 8213, status: 'PUBLISHED', submoduleGroup: 'hyrum-smith' },
  { id: 'hyrum-smith-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Hyrum Smith y la Restauración', subtitle: 'El testigo silencioso de la dispensación', description: 'Hyrum Smith fue testigo de casi todos los eventos fundacionales de la Restauración. Su testimonio en silencio — sin libros publicados, sin grandes discursos — es el testimonio del hombre ordinario con integridad extraordinaria.', level: 'AVANZADO', icon: '📖', duration: 25, order: 8214, status: 'PUBLISHED', submoduleGroup: 'hyrum-smith' },
  // ── OLIVER COWDERY (submodule, orders 8310-8314) ─────────────────────────
  { id: 'oliver-cowdery-el-escribiente', moduleId: 'personajes-escrituras', title: 'El Escribiente', subtitle: 'Escribió el Libro de Mormón de principio a fin', description: 'Oliver Cowdery llegó a Harmony, Pennsylvania en abril de 1829. En 60 días fue el escribiente principal del Libro de Mormón. Su testimonio de la traducción es el más detallado que tenemos de ese proceso extraordinario.', level: 'BÁSICO', icon: '✍️', duration: 25, order: 8310, status: 'PUBLISHED', submoduleGroup: 'oliver-cowdery' },
  { id: 'oliver-cowdery-el-testigo', moduleId: 'personajes-escrituras', title: 'El Testigo', subtitle: 'Vio y tocó las planchas de oro', description: 'Oliver fue uno de los Tres Testigos. Vio al ángel Moroni con las planchas. Oyó la voz de Dios declarar que la traducción era correcta. Aunque fue excomulgado 9 años después, nunca retiró su testimonio — ni en los peores momentos de apostasía.', level: 'INTERMEDIO', icon: '👁️', duration: 30, order: 8311, status: 'PUBLISHED', submoduleGroup: 'oliver-cowdery' },
  { id: 'oliver-cowdery-el-sacerdocio', moduleId: 'personajes-escrituras', title: 'La Restauración del Sacerdocio', subtitle: 'Presente cuando Juan el Bautista descendió', description: 'Oliver estaba con José cuando Juan el Bautista les confirió el Sacerdocio Aarónico en mayo de 1829. Meses después, estuvo presente cuando Pedro, Santiago y Juan restauraron el Sacerdocio de Melquisedec. Fue co-receptor de las llaves más grandes de esta dispensación.', level: 'AVANZADO', icon: '🙌', duration: 35, order: 8312, status: 'PUBLISHED', submoduleGroup: 'oliver-cowdery' },
  { id: 'oliver-cowdery-la-apostasia', moduleId: 'personajes-escrituras', title: 'La Apostasía y el Regreso', subtitle: 'Excomulgado. Diez años después volvió.', description: 'Oliver fue excomulgado en 1838 tras diferencias con José Smith. Pasó diez años fuera de la Iglesia. En 1848, regresó — no por presión, sino por convicción. Se rebautizó antes de morir. Su testimonio sobrevivió su apostasía.', level: 'AVANZADO', icon: '🔄', duration: 35, order: 8313, status: 'PUBLISHED', submoduleGroup: 'oliver-cowdery' },
  { id: 'oliver-cowdery-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Oliver Cowdery y la Restauración', subtitle: 'El co-fundador olvidado', description: 'Oliver Cowdery es el co-fundador más importante de la Restauración que la historia ha relegado a segundo plano. Sin él, no hay Libro de Mormón traducido, no hay sacerdocio restaurado, no hay Tres Testigos. Su historia es la historia de lo que cuesta ser el primero.', level: 'AVANZADO', icon: '✨', duration: 25, order: 8314, status: 'PUBLISHED', submoduleGroup: 'oliver-cowdery' },
  // ── BRIGHAM YOUNG (submodule, orders 8410-8414) ──────────────────────────
  { id: 'brigham-young-la-conversion', moduleId: 'personajes-escrituras', title: 'La Conversión', subtitle: 'El carpintero que leyó el Libro de Mormón', description: 'Brigham Young era carpintero de Vermont cuando le dieron el Libro de Mormón en 1830. Lo estudió dos años antes de bautizarse — quería estar seguro. Cuando se convenció, fue total. Su conversión tardía pero absoluta marcó su liderazgo posterior.', level: 'BÁSICO', icon: '🪵', duration: 25, order: 8410, status: 'PUBLISHED', submoduleGroup: 'brigham-young' },
  { id: 'brigham-young-nauvoo', moduleId: 'personajes-escrituras', title: 'Nauvoo y la Sucesión', subtitle: 'Cómo Brigham tomó el mando', description: 'Cuando José Smith murió en 1844, hubo una crisis de sucesión. Brigham Young, como presidente del Quórum de los Doce, asumió el liderazgo. Muchos testigos declararon que su voz y apariencia cambiaron para parecerse a José — el manto del profeta.', level: 'INTERMEDIO', icon: '🏙️', duration: 30, order: 8411, status: 'PUBLISHED', submoduleGroup: 'brigham-young' },
  { id: 'brigham-young-el-exodo', moduleId: 'personajes-escrituras', title: 'El Éxodo', subtitle: 'Guió a 70,000 santos al desierto', description: 'En el invierno de 1846, Brigham organizó el mayor éxodo en la historia de América del Norte: 70,000 santos de Nauvoo al Valle del Gran Lago Salado. La logística fue milagrosa. Murieron miles en el camino. Llegaron miles más. La fe organizada como supervivencia.', level: 'AVANZADO', icon: '🌵', duration: 40, order: 8412, status: 'PUBLISHED', submoduleGroup: 'brigham-young' },
  { id: 'brigham-young-el-colonizador', moduleId: 'personajes-escrituras', title: 'El Colonizador', subtitle: 'Fundó 350 comunidades en el desierto', description: 'Como presidente de la Iglesia por 30 años, Brigham Young fundó más de 350 comunidades en el oeste americano. Estableció la Universidad Brigham Young, el sistema de colonización basado en cooperativas, y una cultura de autosuficiencia que define el mormonismo hasta hoy.', level: 'INTERMEDIO', icon: '🏗️', duration: 35, order: 8413, status: 'PUBLISHED', submoduleGroup: 'brigham-young' },
  { id: 'brigham-young-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Brigham Young y la Restauración', subtitle: 'El León de Israel que consolidó la obra', description: 'Brigham Young tomó una Iglesia en crisis de sucesión y la convirtió en una civilización en el desierto. Su contribución no fue doctrinal sino organizacional: probó que la Restauración podía sobrevivir sin su profeta fundador.', level: 'AVANZADO', icon: '🦁', duration: 25, order: 8414, status: 'PUBLISHED', submoduleGroup: 'brigham-young' },
  // ── ELÍ (submodule, orders 8510-8514) ────────────────────────────────────
  { id: 'eli-el-sumo-sacerdote', moduleId: 'personajes-escrituras', title: 'El Sumo Sacerdote de Siló', subtitle: 'Cuarenta años juzgando a Israel desde el tabernáculo', description: 'Elí era sumo sacerdote y juez de Israel durante cuatro décadas cuando una mujer desesperada entró a orar al tabernáculo de Siló. Esta lección establece quién era Elí, qué posición ocupaba, y el mundo que lo rodeaba.', level: 'BÁSICO', icon: '🏛️', duration: 30, order: 8510, status: 'PUBLISHED', submoduleGroup: 'eli' },
  { id: 'eli-y-ana', moduleId: 'personajes-escrituras', title: 'Elí y Ana', subtitle: 'La oración más silenciosa que cambió la historia de Israel', description: 'Ana era estéril y despreciada. En su desesperación entró al tabernáculo y oró con un dolor tan profundo que Elí la confundió con una borracha. Pero esa oración fue respondida — y el hijo que nació se convertiría en el profeta que untaría a los dos primeros reyes de Israel.', level: 'BÁSICO', icon: '🙏', duration: 35, order: 8511, status: 'PUBLISHED', submoduleGroup: 'eli' },
  { id: 'eli-y-sus-hijos', moduleId: 'personajes-escrituras', title: 'Elí y Sus Hijos', subtitle: 'Cuando el sacerdocio se usa para servirse a uno mismo', description: 'Ofni y Finees eran "hombres impíos que no conocían a Jehová." Su corrupción de las ofrendas y su conducta en el tabernáculo fue una de las tragedias espirituales más documentadas del Antiguo Testamento — y Elí lo sabía y no los detuvo.', level: 'INTERMEDIO', icon: '⚠️', duration: 40, order: 8512, status: 'PUBLISHED', submoduleGroup: 'eli' },
  { id: 'eli-la-caida', moduleId: 'personajes-escrituras', title: 'Icabod — La Gloria se Ha Apartado', subtitle: 'La batalla de Eben-ezer y la muerte de Elí', description: 'En un solo día: Israel perdió la batalla, el arca fue capturada, los dos hijos de Elí murieron, y Elí cayó hacia atrás y murió. Una nuera dio a luz en ese momento y le puso al bebé un nombre que resumía todo: Icabod — "Se ha apartado la gloria de Israel."', level: 'INTERMEDIO', icon: '💔', duration: 35, order: 8513, status: 'PUBLISHED', submoduleGroup: 'eli' },
  { id: 'eli-y-la-restauracion', moduleId: 'personajes-escrituras', title: 'Elí y la Restauración', subtitle: 'Cuando Dios llama a un niño porque los sacerdotes han fallado', description: 'La historia de Elí y Samuel no es solo una tragedia familiar — es el patrón que Dios usa cuando el sacerdocio se corrompe: lo quita de los indignos y lo entrega a alguien humilde. Este patrón se repitió cuando un adolescente entró a un bosque con una pregunta honesta.', level: 'AVANZADO', icon: '🌟', duration: 35, order: 8514, status: 'PUBLISHED', submoduleGroup: 'eli' },
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
  // ── CAPACITACIÓN LIDERAZGO — PFJ TRANSICIÓN 2026 ─────────────────────────
  // Obispado (orders 9010-9012)
  { id: 'obispado-el-cambio', moduleId: 'capacitacion-liderazgo', title: 'El Cambio y Por Qué Importa', subtitle: 'Comprender el propósito antes de comunicarlo', description: 'Visión general del cambio PFJ 2026 para el obispado: qué cambia, por qué lo implementa la Iglesia, y cómo el obispado lidera la transición con claridad y confianza.', level: 'BÁSICO', icon: '⚖️', duration: 20, order: 9010, status: 'PUBLISHED', submoduleGroup: 'obispado-pfj' },
  { id: 'obispado-quinto-domingo', moduleId: 'capacitacion-liderazgo', title: 'El Quinto Domingo — 30 de Agosto', subtitle: 'Reunión especial para jóvenes, padres y líderes', description: 'La Iglesia ha designado el 30 de agosto de 2026 para una reunión especial con videos instructivos. El obispado coordina la logística, la participación familiar y prepara a todos para el inicio oficial.', level: 'BÁSICO', icon: '📅', duration: 15, order: 9011, status: 'PUBLISHED', submoduleGroup: 'obispado-pfj' },
  { id: 'obispado-comunicar-padres', moduleId: 'capacitacion-liderazgo', title: 'Comunicar a los Padres', subtitle: 'Cómo anunciar el cambio desde la reunión sacramental', description: 'Los padres necesitan entender el cambio antes de septiembre. Guía para anunciarlo desde el púlpito, responder las preguntas más frecuentes y distribuir la guía PFJ a cada familia.', level: 'BÁSICO', icon: '🗣️', duration: 15, order: 9012, status: 'PUBLISHED', submoduleGroup: 'obispado-pfj' },
  // Hombres Jóvenes (orders 9110-9112)
  { id: 'hj-la-guia-pfj', moduleId: 'capacitacion-liderazgo', title: 'La Guía PFJ — 12 Capítulos', subtitle: 'Conocer el material antes de enseñarlo', description: 'La guía Para la Fortaleza de la Juventud actualizada tiene 12 capítulos centrados en Cristo y la toma de decisiones. Los líderes de HJ deben dominar el contenido antes de llevar a los jóvenes a través de él.', level: 'BÁSICO', icon: '📖', duration: 20, order: 9110, status: 'PUBLISHED', submoduleGroup: 'hj-lideres' },
  { id: 'hj-ensenar-25-minutos', moduleId: 'capacitacion-liderazgo', title: 'Enseñar en 25 Minutos', subtitle: 'El formato doctrina → principio → aplicación', description: 'Cada semana hay 25 minutos para enseñar un capítulo mensual. Esta lección enseña cómo estructurar ese tiempo: 5 min de introducción, 10 min de doctrina, 10 min de principio y aplicación.', level: 'INTERMEDIO', icon: '⏱️', duration: 20, order: 9111, status: 'PUBLISHED', submoduleGroup: 'hj-lideres' },
  { id: 'hj-maraton-lectura', moduleId: 'capacitacion-liderazgo', title: 'El Maratón de Lectura', subtitle: 'Unir a jóvenes y familias desde mayo', description: 'El 3 de mayo de 2026 comienza el maratón mundial de lectura en @forstrengthofyouth. Una lección práctica para activar la participación de los jóvenes, sus familias y el cuórum de élderes en el proceso de lectura.', level: 'BÁSICO', icon: '🏃', duration: 15, order: 9112, status: 'PUBLISHED', submoduleGroup: 'hj-lideres' },
  { id: 'hj-ejemplo-clase-pfj', moduleId: 'capacitacion-liderazgo', title: 'Clase Modelo PFJ — Cuórum del Sacerdocio Aarónico', subtitle: 'Cómo estructurar los 4 domingos del mes con el Capítulo 1', description: 'Ejemplo completo del arco de 4 domingos usando el Capítulo 1 del PFJ. Domingo 1: verdad eterna. Domingos 2-3: principios y doctrinas. Domingo 4: identidad y aplicación al sacerdocio.', level: 'BÁSICO', icon: '📘', duration: 20, order: 9113, status: 'PUBLISHED', submoduleGroup: 'hj-lideres' },
  // Mujeres Jóvenes (orders 9210-9212)
  { id: 'mj-la-guia-pfj', moduleId: 'capacitacion-liderazgo', title: 'La Guía PFJ para las Mujeres Jóvenes', subtitle: 'El mismo material, una perspectiva única', description: 'La guía PFJ es la misma para HJ y MJ, pero el contexto de las jóvenes tiene sus particularidades. Cómo presentar los 12 capítulos desde la perspectiva de las mujeres jóvenes y conectarlo con su preparación para el templo y la familia.', level: 'BÁSICO', icon: '💜', duration: 20, order: 9210, status: 'PUBLISHED', submoduleGroup: 'mj-lideres' },
  { id: 'mj-ensenar-25-minutos', moduleId: 'capacitacion-liderazgo', title: 'Clases Semanales de 25 Minutos', subtitle: 'De alternas a semanales — el regalo del tiempo', description: 'El cambio de clases alternas a semanales es un regalo: más continuidad, más profundidad. Esta lección ayuda a los líderes de MJ a planificar el uso mensual del capítulo y mantener a las jóvenes comprometidas semana a semana.', level: 'INTERMEDIO', icon: '⏱️', duration: 20, order: 9211, status: 'PUBLISHED', submoduleGroup: 'mj-lideres' },
  { id: 'mj-conectar-hogar', moduleId: 'capacitacion-liderazgo', title: 'Conectar el Hogar con el Domingo', subtitle: 'Que lo que enseñamos no se quede en el salón', description: 'El PFJ es diseñado para conectar el estudio del hogar con la clase dominical. Herramientas para que los líderes de MJ inviten a los padres y ayuden a las jóvenes a aplicar el evangelio diariamente.', level: 'INTERMEDIO', icon: '🏠', duration: 15, order: 9212, status: 'PUBLISHED', submoduleGroup: 'mj-lideres' },
  { id: 'mj-nuevos-nombres', moduleId: 'capacitacion-liderazgo', title: 'Los Nuevos Nombres de las Mujeres Jóvenes', subtitle: 'Edificadoras, Mensajeras, Guardianas — Identidad Divina', description: 'Anunciados el 20 de abril de 2026: Edificadoras de Fe, Mensajeras de Esperanza y Guardianas de Luz. La doctrina detrás de cada nombre, el himno que los inspiró, y cómo presentarlos a las jóvenes como una declaración de identidad ante Dios.', level: 'BÁSICO', icon: '✨', duration: 25, order: 9213, status: 'PUBLISHED', submoduleGroup: 'mj-lideres' },
  { id: 'mj-ejemplo-clase-pfj', moduleId: 'capacitacion-liderazgo', title: 'Clase Modelo PFJ — Mujeres Jóvenes', subtitle: 'Los 4 domingos de septiembre con el Capítulo 1', description: 'Ejemplo del arco de 4 domingos del Capítulo 1: verdad eterna → principios → doctrinas → identidad del convenio. Incluye los cambios de formato (sin ejercicios de apertura, Tema a actividades) y el formato de la Presidenta Freeman.', level: 'BÁSICO', icon: '💜', duration: 20, order: 9214, status: 'PUBLISHED', submoduleGroup: 'mj-lideres' },
  // Élderes y Líder Misional (orders 9310-9312)
  { id: 'elderes-rol-misional', moduleId: 'capacitacion-liderazgo', title: 'Nuestro Rol en la Transición', subtitle: 'El Cuórum de Élderes como puente generacional', description: 'El PFJ prepara a los jóvenes para la misión. El cuórum de élderes — formado por hombres que fueron esos jóvenes — tiene un rol único: servir de puente entre la juventud del barrio y la misión de tiempo completo.', level: 'BÁSICO', icon: '🌍', duration: 20, order: 9310, status: 'PUBLISHED', submoduleGroup: 'elderes-lideres' },
  { id: 'elderes-mentores-jovenes', moduleId: 'capacitacion-liderazgo', title: 'Élderes como Mentores Misioneros', subtitle: 'Invitar élderes a compartir en las clases de jóvenes', description: 'Cómo involucrar a los élderes del cuórum en las clases de jóvenes: compartir experiencias misioneras relevantes, escuchar más que hablar, y crear relaciones que duran más allá del domingo.', level: 'INTERMEDIO', icon: '🤝', duration: 20, order: 9311, status: 'PUBLISHED', submoduleGroup: 'elderes-lideres' },
  { id: 'elderes-vision-pfj', moduleId: 'capacitacion-liderazgo', title: 'La Visión Misional del PFJ', subtitle: '"El discipulado diario comienza hoy"', description: '"El discipulado para toda la vida comienza con el discipulado diario." — Pdte. Timothy L. Farnes. Esta lección explora la visión teológica detrás del PFJ: no es solo un cambio de horario, es una invitación a una generación a convertirse en discípulos de Cristo para siempre.', level: 'AVANZADO', icon: '✨', duration: 20, order: 9312, status: 'PUBLISHED', submoduleGroup: 'elderes-lideres' },
  { id: 'elderes-ejemplo-clase', moduleId: 'capacitacion-liderazgo', title: 'Clase Modelo — Cuórum de Élderes 25 Minutos', subtitle: 'Mensajes de Conferencia General como discipulado, no como tarea', description: 'Ejemplo del nuevo formato semanal del Cuórum de Élderes: presidencia selecciona el discurso según necesidades del cuórum, consejo de hermanos con preguntas preparadas, sin anuncios en clase.', level: 'BÁSICO', icon: '🌍', duration: 15, order: 9313, status: 'PUBLISHED', submoduleGroup: 'elderes-lideres' },
  // Escuela Dominical (orders 9410-9411)
  { id: 'ed-nuevo-horario', moduleId: 'capacitacion-liderazgo', title: 'El Nuevo Horario Dominical', subtitle: 'Qué cambia el 6 de septiembre y de quién es la responsabilidad', description: 'La Presidencia de la Escuela Dominical coordina el cambio de horario: Escuela Dominical cada domingo, el 30 de agosto y la implementación del 6 de septiembre. Esta lección explica el antes y el después con pasos concretos.', level: 'BÁSICO', icon: '🗓️', duration: 20, order: 9410, status: 'PUBLISHED', submoduleGroup: 'ed-lideres' },
  { id: 'ed-coordinar-clases', moduleId: 'capacitacion-liderazgo', title: 'Coordinar las Clases de Jóvenes', subtitle: 'El rol de la Escuela Dominical con HJ, MJ y el bloque PFJ', description: 'Qué corresponde a la ED y qué a las organizaciones de jóvenes. Mapa de responsabilidades, logística del primer domingo y cómo prevenir fricciones el 6 de septiembre.', level: 'INTERMEDIO', icon: '🤝', duration: 15, order: 9411, status: 'PUBLISHED', submoduleGroup: 'ed-lideres' },
  { id: 'ed-ejemplo-clase', moduleId: 'capacitacion-liderazgo', title: 'Clase Modelo — Escuela Dominical 25 Minutos', subtitle: 'Cómo enseñar Ven, Sígueme con menos tiempo y más profundidad', description: 'Ejemplo concreto de cómo preparar la Escuela Dominical de 25 minutos: elegir 1-3 principios, preguntas que abren conversación, y el rol del maestro como facilitador.', level: 'BÁSICO', icon: '📖', duration: 15, order: 9412, status: 'PUBLISHED', submoduleGroup: 'ed-lideres' },
  { id: 'srs-ejemplo-clase', moduleId: 'capacitacion-liderazgo', title: 'Clase Modelo — Sociedad de Socorro 25 Minutos', subtitle: 'Mensajes de Conferencia General como consejo entre hermanas', description: 'Ejemplo de cómo estructurar la nueva clase semanal de SRS: presidencia selecciona el discurso prayerfully, sin anuncios en clase, discusión como consejo — no como lección magistral.', level: 'BÁSICO', icon: '💐', duration: 15, order: 9510, status: 'PUBLISHED', submoduleGroup: 'srs-lideres' },
  { id: 'srs-presidenta', moduleId: 'capacitacion-liderazgo', title: 'La Presidenta de la Sociedad de Socorro', subtitle: 'Pastora, administradora y voz de las hermanas ante el obispado', description: 'La presidenta de la Sociedad de Socorro es la líder responsable del bienestar espiritual y temporal de todas las mujeres adultas. Esta lección cubre su llamamiento, responsabilidades centrales y relación con el obispado.', level: 'BÁSICO', icon: '💐', duration: 25, order: 9520, status: 'PUBLISHED', submoduleGroup: 'srs-lideres' },
  { id: 'srs-consejeras', moduleId: 'capacitacion-liderazgo', title: 'Las Consejeras de la Sociedad de Socorro', subtitle: 'Apoyo específico, no dirección independiente', description: 'Una consejera de la Sociedad de Socorro sirve bajo la dirección de la presidenta con asignaciones específicas. Esta lección cubre la naturaleza del llamamiento, asignaciones típicas y cómo actuar en ausencia de la presidenta.', level: 'BÁSICO', icon: '🤝', duration: 25, order: 9521, status: 'PUBLISHED', submoduleGroup: 'srs-lideres' },
  { id: 'srs-secretaria', moduleId: 'capacitacion-liderazgo', title: 'La Secretaria de la Sociedad de Socorro', subtitle: 'El sistema de información que hace funcionar la presidencia', description: 'La secretaria es la memoria institucional de la Sociedad de Socorro: minutas de presidencia, registro de ministerio, administración del presupuesto y preparación del informe mensual al obispado.', level: 'BÁSICO', icon: '📋', duration: 25, order: 9522, status: 'PUBLISHED', submoduleGroup: 'srs-lideres' },
  { id: 'elderes-presidente', moduleId: 'capacitacion-liderazgo', title: 'El Presidente del Cuórum de Élderes', subtitle: 'Llave del ministerio y del bienestar de los hombres del barrio', description: 'El presidente del Cuórum de Élderes dirige el ministerio de los hermanos, responde por su bienestar espiritual y temporal, preside la presidencia del cuórum y participa en el consejo de barrio. Basado en el Manual General capítulo 8.', level: 'BÁSICO', icon: '🌍', duration: 25, order: 9530, status: 'PUBLISHED', submoduleGroup: 'elderes-lideres' },
  { id: 'elderes-consejeros', moduleId: 'capacitacion-liderazgo', title: 'Los Consejeros del Cuórum de Élderes', subtitle: 'Fuerza compartida, responsabilidad asignada', description: 'Los consejeros del Cuórum de Élderes sirven bajo la dirección del presidente con asignaciones específicas. Esta lección cubre su papel, las asignaciones comunes del primer y segundo consejero, y cómo contribuyen a la reunión de presidencia.', level: 'BÁSICO', icon: '🤝', duration: 25, order: 9531, status: 'PUBLISHED', submoduleGroup: 'elderes-lideres' },
  { id: 'elderes-secretario', moduleId: 'capacitacion-liderazgo', title: 'El Secretario del Cuórum de Élderes', subtitle: 'Administración al servicio del ministerio', description: 'El secretario del cuórum mantiene los registros de asistencia y ministerio, toma minutas, administra el presupuesto y prepara los informes para el obispado. Su labor administrativa es fundamental para que la presidencia pueda ejercer su responsabilidad pastoral.', level: 'BÁSICO', icon: '📋', duration: 25, order: 9532, status: 'PUBLISHED', submoduleGroup: 'elderes-lideres' },
  { id: 'mj-presidenta', moduleId: 'capacitacion-liderazgo', title: 'La Presidenta de las Mujeres Jóvenes', subtitle: 'Pastora de jóvenes — entre el obispado y las jóvenes', description: 'La presidenta de MJ es llamada y orientada por el obispo. Su primera responsabilidad es el bienestar espiritual y temporal de cada joven. Cubre responsabilidades, ministerio personal y coordinación con el consejo de barrio.', level: 'BÁSICO', icon: '💜', duration: 25, order: 9540, status: 'PUBLISHED', submoduleGroup: 'mj-lideres' },
  { id: 'mj-consejeras', moduleId: 'capacitacion-liderazgo', title: 'Las Consejeras de las Mujeres Jóvenes', subtitle: 'Asignadas a clases, actividades y bienestar individual', description: 'Las consejeras de MJ sirven bajo la dirección de la presidenta con asignaciones específicas por clase o área. Cubre la división de responsabilidades, el ministerio personal a cada joven y la presencia constante que gana el corazón de las jóvenes.', level: 'BÁSICO', icon: '🤝', duration: 25, order: 9541, status: 'PUBLISHED', submoduleGroup: 'mj-lideres' },
  { id: 'mj-secretaria', moduleId: 'capacitacion-liderazgo', title: 'La Secretaria de las Mujeres Jóvenes', subtitle: 'Organización al servicio de cada joven', description: 'La secretaria de MJ mantiene el directorio actualizado, registra asistencia, coordina actividades y campamentos, maneja el presupuesto y reporta al obispado. Su trabajo organizado libera a la presidenta para el ministerio pastoral.', level: 'BÁSICO', icon: '📋', duration: 20, order: 9542, status: 'PUBLISHED', submoduleGroup: 'mj-lideres' },
  { id: 'hj-presidente', moduleId: 'capacitacion-liderazgo', title: 'El Presidente de los Hombres Jóvenes', subtitle: 'Coordinador entre el obispado y los cuórums del Sacerdocio Aarónico', description: 'El presidente de HJ sirve bajo la dirección del obispo — quien presida el Sacerdocio Aarónico. Cubre la distinción teológica clave, las responsabilidades de coordinación y el foco espiritual en preparar a cada joven para la misión y el templo.', level: 'BÁSICO', icon: '🧑', duration: 25, order: 9550, status: 'PUBLISHED', submoduleGroup: 'hj-lideres' },
  { id: 'hj-consejeros', moduleId: 'capacitacion-liderazgo', title: 'Los Consejeros de los Hombres Jóvenes', subtitle: 'Mentores, no supervisores — presencia que cambia vidas', description: 'Los consejeros de HJ son mentores que conocen a los jóvenes en su mundo — no solo en el edificio. Cubre asignaciones por cuórum, el principio del ejemplo de vida y el impacto de un adulto que genuinamente conoce a cada joven.', level: 'BÁSICO', icon: '🤝', duration: 25, order: 9551, status: 'PUBLISHED', submoduleGroup: 'hj-lideres' },
  { id: 'hj-secretario', moduleId: 'capacitacion-liderazgo', title: 'El Secretario de los Hombres Jóvenes', subtitle: 'Seguimiento, asistencia y coordinación de actividades', description: 'El secretario de HJ coordina con los secretarios de cuórum, planifica el calendario anual de actividades, maneja el presupuesto y da seguimiento a los avances del Sacerdocio Aarónico — especialmente a los jóvenes próximos a cumplir misión.', level: 'BÁSICO', icon: '📋', duration: 20, order: 9552, status: 'PUBLISHED', submoduleGroup: 'hj-lideres' },
  { id: 'primaria-presidenta', moduleId: 'capacitacion-liderazgo', title: 'La Presidenta de la Primaria', subtitle: 'Formadora de la fe que dura toda la vida', description: 'La presidenta de la Primaria tiene a su cargo los niños del barrio desde los 18 meses hasta los 11 años. Cubre el llamamiento, la Presentación Anual de la Primaria y la coordinación con el obispado.', level: 'BÁSICO', icon: '⭐', duration: 25, order: 9560, status: 'PUBLISHED', submoduleGroup: 'primaria-lideres' },
  { id: 'primaria-consejeras', moduleId: 'capacitacion-liderazgo', title: 'Las Consejeras de la Primaria', subtitle: 'Presencia constante en la vida de cada niño', description: 'Las consejeras de la Primaria son asignadas a grupos de edad, conocen a cada niño individualmente y coordinan la música y el ambiente espiritual. Su ministerio directo a los niños es el corazón del llamamiento.', level: 'BÁSICO', icon: '🤝', duration: 25, order: 9561, status: 'PUBLISHED', submoduleGroup: 'primaria-lideres' },
  { id: 'primaria-secretaria', moduleId: 'capacitacion-liderazgo', title: 'La Secretaria de la Primaria', subtitle: 'El registro que protege y acompaña a cada niño', description: 'La secretaria de la Primaria mantiene el directorio de niños, registra asistencia, coordina los discursos en la reunión sacramental y administra el presupuesto. Su trabajo sistemático asegura que ningún niño quede sin seguimiento.', level: 'BÁSICO', icon: '📋', duration: 20, order: 9562, status: 'PUBLISHED', submoduleGroup: 'primaria-lideres' },
  { id: 'ed-presidente', moduleId: 'capacitacion-liderazgo', title: 'El Presidente de la Escuela Dominical', subtitle: 'Director del aprendizaje doctrinal del barrio', description: 'El presidente de la ED selecciona y capacita maestros, coordina con el obispado, supervisa el formato de 25 minutos de Ven, Sígueme y dirige el quinto domingo. Su llamamiento es velar por la calidad doctrinal de toda la enseñanza adulta del barrio.', level: 'BÁSICO', icon: '📖', duration: 25, order: 9570, status: 'PUBLISHED', submoduleGroup: 'ed-lideres' },
  { id: 'ed-consejeros', moduleId: 'capacitacion-liderazgo', title: 'Los Consejeros de la Escuela Dominical', subtitle: 'Apoyo a los maestros y coordinación de clases', description: 'Los consejeros de ED apoyan a los maestros visitando clases, ofreciendo recursos y coordinando el quinto domingo. Su rol es asegurarse de que cada maestro tenga el apoyo que necesita para enseñar con el Espíritu.', level: 'BÁSICO', icon: '🤝', duration: 20, order: 9571, status: 'PUBLISHED', submoduleGroup: 'ed-lideres' },
  { id: 'ed-secretario', moduleId: 'capacitacion-liderazgo', title: 'El Secretario de la Escuela Dominical', subtitle: 'Coordinación y registros al servicio de la enseñanza', description: 'El secretario de ED mantiene la lista de clases y maestros, gestiona los sustitutos, comunica el material semanal y coordina con otras organizaciones cuando cambia el horario. Su labor permite que la enseñanza fluya sin fricciones.', level: 'BÁSICO', icon: '📋', duration: 20, order: 9572, status: 'PUBLISHED', submoduleGroup: 'ed-lideres' },
]

const PORTED: Partial<Record<string, Lesson>> = {
  'el-sellamiento': lessonElSellamiento,
  'como-dar-un-discurso': lessonComoDarUnDiscurso,
  'como-dar-un-testimonio': lessonComoDarUnTestimonio,
  'como-hacer-una-oracion': lessonComoHacerUnaOracion,
  'sacerdocio-aaonico': lessonSacerdocioAaonico,
  'el-diacono': lessonElDiacono,
  'el-maestro': lessonElMaestro,
  'el-presbitero': lessonElPresbitero,
  'el-elder': lessonElElder,
  'el-sumo-sacerdote': lessonElSumoSacerdote,
  'el-patriarca': lessonElPatriarca,
  'santa-cena': lessonSantaCena,
  'sc-cristo-santa-cena': lessonScCristoSantaCena,
  'sc-que-simboliza': lessonScQueSimboliza,
  'sc-como-servir': lessonScComoServir,
  'sc-arrepentimiento': lessonScArrepentimiento,
  'sc-vida-sin-santa-cena': lessonScVidaSinSantaCena,
  'sc-promesa-espiritu': lessonScPromesaEspiritu,
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
  'guia-escrituras-clave-misioneros': lessonGuiaEscriturasMisioneros,
  'preparacion-misional-jovenes': lessonPreparacionMisionalJovenes,
  'preparacion-misional-padres': lessonPreparacionMisionalPadres,
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
  'jeremias-el-llamamiento': lessonJeremiasElLlamamiento,
  'jeremias-el-perseguido': lessonJeremiasElPerseguido,
  'jeremias-las-lamentaciones': lessonJeremiasLasLamentaciones,
  'jeremias-el-nuevo-convenio': lessonJeremiasElNuevoConvenio,
  'jeremias-y-la-restauracion': lessonJeremiasYLaRestauracion,
  'daniel-el-cautivo': lessonDanielElCautivo,
  'daniel-el-fiel': lessonDanielElFiel,
  'daniel-las-visiones': lessonDanielLasVisiones,
  'daniel-en-el-foso': lessonDanielEnElFoso,
  'daniel-y-la-restauracion': lessonDanielYLaRestauracion,
  'job-el-justo': lessonJobElJusto,
  'job-el-sufrimiento': lessonJobElSufrimiento,
  'job-los-amigos': lessonJobLosAmigos,
  'job-la-respuesta': lessonJobLaRespuesta,
  'job-y-la-restauracion': lessonJobYLaRestauracion,
  'ezequiel-la-vision': lessonEzequielLaVision,
  'ezequiel-el-guardian': lessonEzequielElGuardian,
  'ezequiel-los-huesos-secos': lessonEzequielLosHueoSecos,
  'ezequiel-los-dos-palos': lessonEzequielLosDoPalos,
  'ezequiel-y-la-restauracion': lessonEzequielYLaRestauracion,
  'pedro-el-pescador': lessonPedroElPescador,
  'pedro-la-confesion': lessonPedroLaConfesion,
  'pedro-la-negacion': lessonPedroLaNegacion,
  'pedro-el-apostol': lessonPedroElApostol,
  'pedro-y-la-restauracion': lessonPedroYLaRestauracion,
  'pablo-el-perseguidor': lessonPabloElPerseguidor,
  'pablo-la-conversion': lessonPabloLaConversion,
  'pablo-el-misionero': lessonPabloElMisionero,
  'pablo-la-teologia': lessonPabloLaTeologia,
  'pablo-y-la-restauracion': lessonPabloYLaRestauracion,
  'juan-bautista-el-precursor': lessonJuanBautistaElPrecursor,
  'juan-bautista-el-bautismo': lessonJuanBautistaElBautismo,
  'juan-bautista-el-mayor': lessonJuanBautistaElMayor,
  'juan-bautista-la-prision': lessonJuanBautistaLaPrision,
  'juan-bautista-y-la-restauracion': lessonJuanBautistaYLaRestauracion,
  'maria-magdalena-el-mito': lessonMariaMagdalenaElMito,
  'maria-magdalena-la-discipula': lessonMariaMagdalenaLaDiscipula,
  'maria-magdalena-la-cruz': lessonMariaMagdalenaLaCruz,
  'maria-magdalena-la-resurreccion': lessonMariaMagdalenaLaResurreccion,
  'maria-magdalena-y-la-restauracion': lessonMariaMagdalenaYLaRestauracion,
  'tomas-el-gemelo': lessonTomasElGemelo,
  'tomas-la-duda': lessonTomasLaDuda,
  'tomas-la-confesion': lessonTomasLaConfesion,
  'tomas-el-misionero': lessonTomasElMisionero,
  'tomas-y-la-restauracion': lessonTomasYLaRestauracion,
  'santiago-el-incredulo': lessonSantiagoElIncredulo,
  'santiago-el-apostol': lessonSantiagoElApostol,
  'santiago-el-lider': lessonSantiagoElLider,
  'santiago-la-epistola': lessonSantiagoLaEpistola,
  'santiago-y-la-restauracion': lessonSantiagoYLaRestauracion,
  'sara-la-esposa': lessonSaraLaEsposa,
  'sara-la-risa': lessonSaraLaRisa,
  'sara-y-agar': lessonSaraYAgar,
  'sara-la-madre': lessonSaraLaMadre,
  'sara-y-la-restauracion': lessonSaraYLaRestauracion,
  'rut-la-moabita': lessonRutLaMoabita,
  'rut-la-leal': lessonRutLaLeal,
  'rut-en-los-campos': lessonRutEnLosCampos,
  'rut-y-boaz': lessonRutYBoaz,
  'rut-y-la-restauracion': lessonRutYLaRestauracion,
  'ester-la-huerfana': lessonEsterLaHuerfana,
  'ester-la-reina': lessonEsterLaReina,
  'ester-el-decreto': lessonEsterElDecreto,
  'ester-el-valor': lessonEsterElValor,
  'ester-y-la-restauracion': lessonEsterYLaRestauracion,
  'debora-la-jueza': lessonDeboraLaJueza,
  'debora-la-profetisa': lessonDeboraLaProfetisa,
  'debora-la-guerrera': lessonDeboraLaGuerrera,
  'debora-y-jael': lessonDeboraYJael,
  'debora-y-la-restauracion': lessonDeboraYLaRestauracion,
  'maria-madre-el-anuncio': lessonMariaMadreElAnuncio,
  'maria-madre-la-visitacion': lessonMariaMadreLaVisitacion,
  'maria-madre-y-jose': lessonMariaMadreYJose,
  'maria-madre-en-la-cruz': lessonMariaMadreEnLaCruz,
  'maria-madre-y-la-restauracion': lessonMariaMadreYLaRestauracion,
  'hermano-jared-la-torre': lessonHermanoJaredLaTorre,
  'hermano-jared-el-viaje': lessonHermanoJaredElViaje,
  'hermano-jared-las-piedras': lessonHermanoJaredLasPiedras,
  'hermano-jared-la-vision': lessonHermanoJaredLaVision,
  'hermano-jared-y-la-restauracion': lessonHermanoJaredYLaRestauracion,
  'ammon-la-mision': lessonAmmonLaMision,
  'ammon-el-guardian': lessonAmmonElGuardian,
  'ammon-el-maestro': lessonAmmonElMaestro,
  'ammon-el-padre': lessonAmmonElPadre,
  'ammon-y-la-restauracion': lessonAmmonYLaRestauracion,
  'capitan-moroni': lessonCapitanMoroni,
  'samuel-el-lamanita': lessonSamuelElLamanita,
  'jose-smith-la-primera-vision': lessonJoseSmithLaPrimeraVision,
  'jose-smith-el-traductor': lessonJoseSmithElTraductor,
  'jose-smith-el-profeta': lessonJoseSmithElProfeta,
  'jose-smith-el-martir': lessonJoseSmithElMartir,
  'jose-smith-y-la-restauracion': lessonJoseSmithYLaRestauracion,
  'emma-smith-la-elegida': lessonEmmaSmithLaElegida,
  'emma-smith-la-escribiente': lessonEmmaSmithLaEscribiente,
  'emma-smith-el-sufrimiento': lessonEmmaSmithElSufrimiento,
  'emma-smith-la-musica': lessonEmmaSmithLaMusica,
  'emma-smith-y-la-restauracion': lessonEmmaSmithYLaRestauracion,
  'hyrum-smith-el-hermano': lessonHyrumSmithElHermano,
  'hyrum-smith-el-patriarca': lessonHyrumSmithElPatriarca,
  'hyrum-smith-la-integridad': lessonHyrumSmithLaIntegridad,
  'hyrum-smith-carthage': lessonHyrumSmithCarthage,
  'hyrum-smith-y-la-restauracion': lessonHyrumSmithYLaRestauracion,
  'oliver-cowdery-el-escribiente': lessonOliverCowderyElEscribiente,
  'oliver-cowdery-el-testigo': lessonOliverCowderyElTestigo,
  'oliver-cowdery-el-sacerdocio': lessonOliverCowderyElSacerdocio,
  'oliver-cowdery-la-apostasia': lessonOliverCowderyLaApostasia,
  'oliver-cowdery-y-la-restauracion': lessonOliverCowderyYLaRestauracion,
  'brigham-young-la-conversion': lessonBrighamYoungLaConversion,
  'brigham-young-nauvoo': lessonBrighamYoungNauvoo,
  'brigham-young-el-exodo': lessonBrighamYoungElExodo,
  'brigham-young-el-colonizador': lessonBrighamYoungElColonizador,
  'brigham-young-y-la-restauracion': lessonBrighamYoungYLaRestauracion,
  // eli
  'eli-el-sumo-sacerdote': lessonEliElSumoSacerdote,
  'eli-y-ana': lessonEliYAna,
  'eli-y-sus-hijos': lessonEliYSusHijos,
  'eli-la-caida': lessonEliLaCaida,
  'eli-y-la-restauracion': lessonEliYLaRestauracion,
  // capacitacion-liderazgo
  'obispado-el-cambio': lessonObispadoElCambio,
  'obispado-quinto-domingo': lessonObispadoQuintoDomingo,
  'obispado-comunicar-padres': lessonObispadoComunicarPadres,
  'hj-la-guia-pfj': lessonHjLaGuiaPfj,
  'hj-ensenar-25-minutos': lessonHjEnsenar25Minutos,
  'hj-maraton-lectura': lessonHjMaratonLectura,
  'mj-la-guia-pfj': lessonMjLaGuiaPfj,
  'mj-ensenar-25-minutos': lessonMjEnsenar25Minutos,
  'mj-conectar-hogar': lessonMjConectarHogar,
  'mj-nuevos-nombres': lessonMjNuevosNombres,
  'elderes-rol-misional': lessonElderesRolMisional,
  'elderes-mentores-jovenes': lessonElderesMentoresJovenes,
  'elderes-vision-pfj': lessonElderesVisionPfj,
  'ed-nuevo-horario': lessonEdNuevoHorario,
  'ed-coordinar-clases': lessonEdCoorinarClases,
  'hj-ejemplo-clase-pfj': lessonHjEjemploClasePfj,
  'ed-ejemplo-clase': lessonEdEjemploClase,
  'mj-ejemplo-clase-pfj': lessonMjEjemploClasePfj,
  'srs-ejemplo-clase': lessonSrsEjemploClase,
  'elderes-ejemplo-clase': lessonElderesEjemploClase,
  // llamimientos
  'srs-presidenta': lessonSrsPresidenta,
  'srs-consejeras': lessonSrsConsejeras,
  'srs-secretaria': lessonSrsSecretaria,
  'elderes-presidente': lessonElderesPresidente,
  'elderes-consejeros': lessonElderesConsejeros,
  'elderes-secretario': lessonElderesSecretario,
  'mj-presidenta': lessonMjPresidenta,
  'mj-consejeras': lessonMjConsejeras,
  'mj-secretaria': lessonMjSecretaria,
  'hj-presidente': lessonHjPresidente,
  'hj-consejeros': lessonHjConsejeros,
  'hj-secretario': lessonHjSecretario,
  'primaria-presidenta': lessonPrimariaPresidenta,
  'primaria-consejeras': lessonPrimariaConsejeras,
  'primaria-secretaria': lessonPrimariaSecretaria,
  'ed-presidente': lessonEdPresidente,
  'ed-consejeros': lessonEdConsejeros,
  'ed-secretario': lessonEdSecretario,
}

function lessonIdsForModule(moduleId: string): string[] {
  return LESSON_ROWS.filter((l) => l.moduleId === moduleId)
    .sort((a, b) => a.order - b.order)
    .map((l) => l.id)
}

/**
 * Etiquetas (asuntos) por lección — fuente principal para conectar temas.
 * Al subir una lección nueva, agregar aquí una línea `'id-leccion': [...]`.
 * Slugs deben existir en `TAGS` (o se muestran humanizados). Una fila en
 * `LESSON_ROWS` puede sobreescribir esto con su propio campo `tags`.
 */
const LESSON_TAGS: Record<string, string[]> = {
  // ── Doctrina fundamental ────────────────────────────────────────────────
  'sc-cristo-santa-cena': ['santa-cena', 'jesucristo', 'convenios'],
  'sc-que-simboliza': ['santa-cena', 'convenios'],
  'sc-como-servir': ['santa-cena', 'sacerdocio'],
  'sc-arrepentimiento': ['santa-cena', 'arrepentimiento', 'perdon'],
  'sc-vida-sin-santa-cena': ['santa-cena', 'arrepentimiento'],
  'sc-promesa-espiritu': ['santa-cena', 'espiritu-santo'],
  bautismo: ['bautismo', 'convenios', 'espiritu-santo'],
  arrepentimiento: ['arrepentimiento', 'expiacion', 'perdon'],
  'don-espiritu-santo': ['espiritu-santo', 'revelacion'],
  'fe-principio-poder': ['fe', 'discipulado'],
  'la-expiacion-del-salvador': ['expiacion', 'jesucristo', 'plan-de-salvacion'],
  'resurreccion-tres-reinos': ['plan-de-salvacion', 'jesucristo'],
  // ── Temas profundos ─────────────────────────────────────────────────────
  'juan-tres-nefitas-apostasia': ['restauracion', 'profetas'],
  'por-que-dios-permite-el-sufrimiento': ['adversidad', 'esperanza', 'fe'],
  'la-salvacion-de-los-no-bautizados': ['plan-de-salvacion', 'bautismo', 'templo'],
  'el-gran-plan-de-la-felicidad': ['plan-de-salvacion', 'jesucristo'],
  'fechando-la-muerte-de-cristo': ['jesucristo', 'escrituras'],
  lucifer: ['plan-de-salvacion'],
  'el-mundo-de-los-espiritus': ['plan-de-salvacion'],
  'elohim-el-padre-celestial': ['divinidad', 'plan-de-salvacion'],
  'la-divinidad': ['divinidad', 'jesucristo', 'espiritu-santo'],
  // ── Vida familiar y personal ────────────────────────────────────────────
  'proclamacion-familia': ['familias-eternas', 'templo', 'convenios'],
  'la-oracion': ['oracion', 'revelacion'],
  'estudio-escrituras': ['escrituras', 'revelacion'],
  'ministerio-en-el-hogar': ['ministracion', 'familias-eternas'],
  'el-sellamiento': ['familias-eternas', 'templo', 'convenios'],
  'como-dar-un-testimonio': ['discipulado'],
  'como-hacer-una-oracion': ['oracion'],
  // ── Sacerdocio ──────────────────────────────────────────────────────────
  'santa-cena': ['santa-cena', 'sacerdocio', 'convenios'],
  'vestimenta-sacerdocio': ['sacerdocio'],
  'sacerdocio-autoridad-poder': ['sacerdocio', 'convenios'],
  'sacerdocio-aaonico': ['sacerdocio'],
  'el-diacono': ['sacerdocio'],
  'el-maestro': ['sacerdocio', 'ministracion'],
  'el-presbitero': ['sacerdocio'],
  'el-elder': ['sacerdocio'],
  'el-sumo-sacerdote': ['sacerdocio'],
  'el-patriarca': ['sacerdocio', 'familias-eternas'],
  'sacerdocio-poder-mujer': ['sacerdocio', 'templo'],
  'el-obispo': ['sacerdocio', 'liderazgo'],
  'el-apostol': ['sacerdocio', 'profetas', 'liderazgo'],
  'el-presidente-de-la-iglesia': ['profetas', 'liderazgo', 'revelacion'],
  'cristo-el-gran-sumo-sacerdote': ['sacerdocio', 'jesucristo'],
  // ── Discursos y sermones clásicos ───────────────────────────────────────
  'king-follett': ['plan-de-salvacion', 'divinidad'],
  'vision-dc-76': ['plan-de-salvacion', 'revelacion'],
  'vision-tres-reinos': ['plan-de-salvacion'],
  'su-gracia-es-suficiente': ['expiacion', 'jesucristo', 'esperanza'],
  'permanecer-para-siempre': ['plan-de-salvacion', 'familias-eternas'],
  'pensar-de-manera-celestial': ['discipulado', 'esperanza'],
  'sumo-sacerdote-bienes-venideros': ['sacerdocio', 'jesucristo', 'expiacion'],
  'el-domingo-llegara': ['expiacion', 'jesucristo', 'esperanza'],
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
        moduleId: row.moduleId,
        previousLessonId: prevId,
        nextLessonId: nextId,
        submoduleGroup: row.submoduleGroup,
        tags: row.tags ?? LESSON_TAGS[row.id] ?? ported.tags,
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
        tags: row.tags ?? LESSON_TAGS[row.id],
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

/**
 * Registro de etiquetas (asuntos) para conectar lecciones entre sí.
 * La clave es el slug que se usa en `Lesson.tags` y en la URL `/tema/:tag`;
 * `label` es el nombre bonito y `description` encabeza la página del asunto.
 * Agregar aquí una etiqueta es opcional: si un slug no está registrado, la UI
 * lo humaniza automáticamente (ver `tagLabel`).
 */
export const TAGS: Record<string, { label: string; description?: string }> = {
  'familias-eternas': { label: 'Familias eternas', description: 'El plan de Dios para la familia: sellamientos, la obra del templo y las promesas eternas del hogar.' },
  templo: { label: 'El templo', description: 'Ordenanzas, convenios y bendiciones de la casa del Señor.' },
  convenios: { label: 'Convenios', description: 'Las promesas sagradas entre Dios y sus hijos, y lo que significa guardarlas.' },
  expiacion: { label: 'La Expiación', description: 'El sacrificio de Jesucristo y su poder para sanar, perdonar y transformar.' },
  arrepentimiento: { label: 'Arrepentimiento', description: 'El cambio de corazón que nos acerca a Dios a través de Cristo.' },
  'santa-cena': { label: 'La Santa Cena', description: 'La ordenanza semanal que renueva nuestros convenios bautismales.' },
  bautismo: { label: 'El bautismo', description: 'La puerta del convenio y el primer paso en el evangelio de Jesucristo.' },
  'espiritu-santo': { label: 'El Espíritu Santo', description: 'El don, la guía y el testimonio del tercer miembro de la Trinidad.' },
  sacerdocio: { label: 'El sacerdocio', description: 'La autoridad y el poder de Dios delegados para bendecir y servir.' },
  fe: { label: 'La fe', description: 'El principio de acción y poder que comienza toda conversión.' },
  oracion: { label: 'La oración', description: 'La conversación con el Padre Celestial y cómo recibir respuestas.' },
  revelacion: { label: 'Revelación', description: 'Cómo Dios comunica su voluntad a profetas y a cada persona.' },
  profetas: { label: 'Profetas', description: 'La voz del Señor a través de sus siervos escogidos, antiguos y modernos.' },
  restauracion: { label: 'La Restauración', description: 'El regreso del evangelio y de la Iglesia de Jesucristo en los últimos días.' },
  'plan-de-salvacion': { label: 'El plan de salvación', description: 'El plan del Padre para el progreso eterno de sus hijos.' },
  'jesucristo': { label: 'Jesucristo', description: 'La vida, misión y divinidad del Salvador del mundo.' },
  'obra-misional': { label: 'Obra misional', description: 'Compartir el evangelio e invitar a otros a venir a Cristo.' },
  liderazgo: { label: 'Liderazgo', description: 'Servir, dirigir y ministrar según el modelo del Salvador.' },
  ministracion: { label: 'Ministración', description: 'Cuidar a los demás uno por uno, como lo hizo Jesús.' },
  discipulado: { label: 'Discipulado', description: 'Lo que significa seguir a Jesucristo cada día.' },
  perdon: { label: 'El perdón', description: 'Recibir y ofrecer perdón a la manera del Señor.' },
  esperanza: { label: 'Esperanza', description: 'La confianza en las promesas de Dios en medio de la prueba.' },
  adversidad: { label: 'Adversidad', description: 'Encontrar sentido y crecimiento en el sufrimiento y la prueba.' },
  escrituras: { label: 'Las Escrituras', description: 'Estudiar y atesorar la palabra de Dios.' },
  divinidad: { label: 'La Divinidad', description: 'El Padre, el Hijo y el Espíritu Santo: quiénes son y cómo obran.' },
}

/** Nombre legible de una etiqueta: usa el registro o humaniza el slug. */
export function tagLabel(slug: string): string {
  const known = TAGS[slug]
  if (known) return known.label
  return slug
    .split('-')
    .map((w) => (w ? w[0]!.toUpperCase() + w.slice(1) : w))
    .join(' ')
}
