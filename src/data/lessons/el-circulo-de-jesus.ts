import type { Lesson } from '@/types/doctrine'
import { jesusAssets } from '@/data/jesusAssets'

/**
 * NOTAS DE INVESTIGACIÓN HISTÓRICAS Y ESCRITURALES COMPLETAS
 * "El Círculo de Jesús — Las Personas Que Lo Rodearon"
 *
 * Fuentes primarias consultadas:
 * - Evangelios sinópticos y Juan (texto griego referenciado donde es relevante)
 * - Josefo: Antigüedades Judías (Ant.) y Guerra Judía (GJ)
 * - Hegesipo (fragmentos preservados en Eusebio, Historia Eclesiástica — HE)
 * - Eusebio de Cesárea, Historia Eclesiástica (HE), s. IV
 * - Tertuliano, De Carne Christi y Adversus Marcionem
 * - Jerónimo, De Viris Illustribus y cartas
 * - Epifanio de Salamina, Panarion (Haer.)
 * - Clemente de Alejandría, Stromata
 * - Papías de Hierápolis (fragmentos en Eusebio)
 * - Evangelio de María (Magdalena), s. II — apócrifo copto
 * - Protoevangelio de Santiago, s. II — apócrifo
 * - Evangelio de Felipe, Nag Hammadi
 * - Talmud Babilónico (Nedarim 50a sobre Nicodemo ben Gurion)
 * - Libro de Mormón: 1 Nefi 11; Mosíah 3; Alma 7
 * - Doctrina y Convenios: DyC 7; 19; 45; 77; 110; 138
 * - Traducción de José Smith (TJS) del NT
 * - Enseñanzas de los Profetas: Joseph Smith (TPJS), Brigham Young, Bruce R. McConkie
 */

export const elCirculoDeJesus: Lesson = {
  id: 'el-circulo-de-jesus',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'jesucristo',
  title: 'El Círculo de Jesús',
  subtitle: 'Las personas que lo rodearon — historia, escritura y restauración',
  author:
    'Fuentes: Evangelios; Josefo Ant. 20.9.1; Hegesipo vía Eusebio HE 2.23; 3.20; DyC 110; TJS; Libro de Mormón',
  description:
    'Un estudio histórico-escritural exhaustivo de todos los que rodearon a Jesús durante su ministerio mortal: su familia nuclear y extendida, las Marías, los apóstoles-familiares, los personajes en las sombras, y los desposyni — descendientes de la familia de Jesús — que lideraron la Iglesia primitiva. Con referencias a Josefo, Hegesipo, Eusebio, la Traducción de José Smith, el Libro de Mormón y DyC.',
  level: 'AVANZADO',
  icon: '🕊️',
  iconImage: jesusAssets.lessonIcons['el-circulo-de-jesus'],
  heroImage: {
    url: jesusAssets.lessons['el-circulo-de-jesus'].hero,
    alt: 'Mosaico de personas alrededor de Jesús — familia, discípulos, mujeres y amigos que formaron su círculo',
  },
  duration: 120,
  order: 11,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'jesus-el-hombre',
  nextLessonId: null,

  studySections: [
    // ─────────────────────────────────────────────────────────────────
    // SECCIÓN I: JOSÉ — EL PADRE QUE DESAPARECE
    // ─────────────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'José — El Padre que Desaparece',
      intro: {
        romanNumeral: 'I',
        title: 'José — El Padre que Desaparece',
        paragraphs: [
          'José de Nazaret es uno de los personajes más importantes y menos documentados del Nuevo Testamento. Aparece con frecuencia en los evangelios de la infancia de Mateo y Lucas — y luego sencillamente deja de existir en el texto. Nunca aparece durante el ministerio público de Jesús. Nunca aparece en la crucifixión. Nunca se menciona su muerte. Solo su ausencia.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La Última Mención de José — y lo que el Silencio Implica',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].images.familia,
              alt: 'La familia de Jesús — José, María y los hermanos y hermanas reunidos',
              caption: 'La familia de Nazaret',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.jose,
              alt: 'Retrato artístico de José de Nazaret',
              caption: 'José de Nazaret — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'highlight_verse',
              text: 'Y sus padres iban todos los años a Jerusalén en la fiesta de la pascua. Y cuando tuvo doce años, subieron a Jerusalén conforme a la costumbre de la fiesta.',
              reference: 'Lucas 2:41-42',
            },
            {
              type: 'paragraph',
              text: 'La última mención explícita de José en el texto es en Lucas 2:41-51 — cuando Jesús tiene doce años y es hallado en el Templo. Después de eso, desaparece. En Lucas 3:23, cuando Jesús comienza su ministerio, el texto dice que "era hijo, según se creía, de José." El "según se creía" (hos enomizeto) es el griego de Lucas reconociendo la singularidad de la concepción virginal. Pero la frase implica que para entonces José ya no está presente — nadie lo menciona como presente. En Juan 6:42, los nazarenos preguntan: "¿No es este Jesús, el hijo de José, cuyo padre y madre nosotros conocemos?" — referencia en pasado tácito. Para Juan 19:25-27, cuando Jesús desde la cruz encomienda a su madre a Juan el Amado, la implicación es que no hay esposo ni padre de familia que la cuide. José ha muerto.',
            },
            {
              type: 'doctrine_box',
              title: '¿Cuándo murió José? Lo que los historiadores concluyen',
              body: 'El consenso académico es que José murió antes del ministerio público de Jesús, probablemente entre los años que Jesús tenía 12 y 30. Que Jesús haya trabajado como τέκτων (artesano) en Marcos 6:3, no solo como "hijo del carpintero" (Mateo 13:55), sugiere que hacia los años de su ministerio era él la figura principal del oficio familiar — el jefe del taller. Esto sería consistente con que José hubiera muerto y dejado a Jesús, como hijo mayor, a cargo de la familia. Orígenes (s. III, Contra Celsum 6.36) menciona que Jesús mismo era llamado "el carpintero" — el τέκτων activo, no solo el hijo del carpintero. Para sostener a su madre y sus hermanos menores, Jesús habría trabajado como artesano principal durante años antes de comenzar su ministerio a los ~30 años (Lucas 3:23).',
            },
            {
              type: 'deep_dive',
              badge: 'Lingüística',
              title: 'τέκτων — No solo "carpintero"',
              paragraphs: [
                'El término griego τέκτων (tektōn) que los evangelios usan para José y Jesús es más amplio que "carpintero." Significa artesano de materiales duros: madera, piedra, o incluso metal. Justino Mártir (Diálogo con Trifón 88, s. II d.C.) especifica que Jesús hacía yugos y arados — implementos agrícolas de madera, no muebles finos. Esto lo coloca en la categoría de artesano rural práctico, no en una carpintería urbana.',
                'La arqueología de Galilea del siglo I muestra que los tektones trabajaban predominantemente con piedra caliza local. Nazaret está en una zona sin grandes bosques. Y a solo 6 km, Séforis se estaba reconstruyendo como capital romana — todo en piedra. Es muy probable que José y Jesús hayan trabajado en esa construcción. Un tektōn de Galilea era esencialmente un contratista de obras: albañil, carpintero, y en ocasiones cantero.',
                'La implicación teológica es profunda: Jesús pasó quizás dos décadas construyendo casas y estructuras para otros antes de declarar "voy a preparar lugar para vosotros" (Juan 14:2). El que construyó casas en Galilea prometió construir moradas eternas.',
              ],
            },
            {
              type: 'key_points',
              title: 'Las dos grandes teorías sobre los "hermanos de Jesús" — raíz en la comprensión de José',
              points: [
                'TEORÍA EPIFANIANA (Epifanio, s. IV): José era viudo con hijos de un matrimonio anterior antes de desposar a María. Los "hermanos" son hijos de José, medio-hermanos de Jesús. Apoya la perpetua virginidad de María. Adoptada en la tradición ortodoxa oriental.',
                'TEORÍA HIERONIMIANA (Jerónimo, s. IV): Los "hermanos" no son hermanos sino primos (anepsioi). Jerónimo argumenta que el hebreo/arameo "ah" (hermano) abarca a los primos. Esta es la posición de la Iglesia Católica Romana.',
                'TEORÍA HELVIDIANA (Helvidio, s. IV, contra Jerónimo): Los "hermanos" son hermanos biológicos plenos, hijos de José y María después del nacimiento de Jesús. Mateo 1:25 "y no la conoció hasta que ella dio a luz a su hijo primogénito" implica relación conyugal posterior. Esta es la posición protestante mayoritaria y la que mejor encaja con el texto griego.',
                'POSICIÓN SUD: La Iglesia no toma posición oficial, pero las escrituras de la restauración no enseñan la virginidad perpetua de María. El texto del Libro de Mormón (1 Nefi 11:18-20) llama a María "virgen" en el momento de la concepción — no hace ninguna afirmación sobre su estado posterior.',
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'José en las Escrituras de la Restauración',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Traducción de José Smith (TJS) hace varios ajustes menores a los relatos de la natividad pero no añade información biográfica significativa sobre José como persona. Lo que la restauración sí añade es el contexto del papel de José como guardián y testigo de la divinidad de Jesús. DyC 45:3-5 habla de Cristo como abogado ante el Padre, y Hebreos 11 (texto que José Smith estudió profundamente) presenta una teología del hombre de fe que hace pensar en José.',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que Bruce R. McConkie enseñó sobre José',
              body: 'El élder McConkie escribió en "El Mesías Mortal" que José de Nazaret fue uno de los hombres más grandes de todos los tiempos — un hombre de fe extraordinaria, escogido antes de nacer para ser el guardián legal del Hijo de Dios. Su anonimato histórico es, paradójicamente, una señal de grandeza: cumplió su misión tan bien que no necesitó protagonismo. Su papel no era brillar sino proteger y sostener a Quien sí debía brillar.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué dice sobre el carácter de José que el Nuevo Testamento lo mencione solo cuando es necesario y nunca registre una sola palabra suya? ¿Qué clase de fuerza se requiere para ser el padre terrenal del Hijo de Dios en silencio y sin reconocimiento?',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // SECCIÓN II: MARÍA — LA MUJER QUE GUARDÓ TODAS ESTAS COSAS
    // ─────────────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'María — La Mujer que Guardó Todas Estas Cosas',
      intro: {
        romanNumeral: 'II',
        title: 'María — La Mujer que Guardó Todas Estas Cosas',
        paragraphs: [
          'María es la figura femenina más mencionada del Nuevo Testamento y, paradójicamente, una de las más silenciosas. Lucas nos da su voz en el Magnificat (Lucas 1:46-55) — uno de los poemas teológicos más densos del NT. Juan nos da su presencia en tres momentos cruciales. El resto es tradición, inferencia, y lo que las escrituras de la restauración añaden.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El Linaje de María — ¿Judá, Leví, o Ambos?',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.maria,
              alt: 'Retrato artístico de María, madre de Jesús',
              caption: 'María — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'paragraph',
              text: 'El Nuevo Testamento no declara explícitamente el linaje de María. Lo que sí declara es que Jesús es "del linaje de David según la carne" (Romanos 1:3) y "de la simiente de David" (2 Timoteo 2:8). Si Jesús es Hijo de Dios biológicamente (concepción virginal sin paternidad de José), entonces su linaje davídico debe venir de María. Esto coloca a María en la tribu de Judá, línea de David.',
            },
            {
              type: 'compare_grid',
              title: '¿Judá o Leví? El doble linaje de María',
              left: {
                label: 'Evidencia para Judá (línea de David)',
                points: [
                  'Romanos 1:3 — Jesús es "del linaje de David según la carne"',
                  'Lucas 1:32 — Jesús será grande y "el Señor Dios le dará el trono de David su padre"',
                  'Si José no es padre biológico, el linaje davídico de Jesús debe venir de María',
                  'Eusebio (HE 1.7) cita a Africano: la genealogía de Lucas es la de María',
                  'Jerónimo (s. IV) identifica al padre de María como Joachim (Eliacim) de la tribu de Judá',
                ],
              },
              right: {
                label: 'Evidencia para conexión levítica',
                points: [
                  'Lucas 1:36 — Elisabeth es "pariente" (suggenis) de María',
                  'Elisabet era del linaje de Aarón (Leví) — Lucas 1:5',
                  'Matrimonios entre Judá y Leví eran legalmente permisibles y no infrecuentes',
                  'Tradición del Protoevangelio de Santiago (apócrifo s.II): María de padres Anna y Joachim de la tribu de Judá',
                  'Solución: el padre de María de Judá, pero tenía parientes maternos de Leví — no hay contradicción',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y he aquí, concebirás en tu vientre, y darás a luz un hijo, y llamarás su nombre JESÚS. Este será grande, y será llamado Hijo del Altísimo; y el Señor Dios le dará el trono de David su padre.',
              reference: 'Lucas 1:31-32',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que el Libro de Mormón dice sobre María — 1 Nefi 11 y Mosíah 3',
              body: '1 Nefi 11:13-20: Nefi ve en visión a "una virgen, la más bella y pura de todas las otras vírgenes" — que es "la madre del Hijo de Dios." Esta es la primera referencia escritural extrabíblica al nombre de María, siglos antes del nacimiento de Jesús. La visión de Nefi es notable porque enfatiza dos atributos de María: su pureza y su belleza — términos que en el contexto del texto indican santidad moral y su posición privilegiada en el plan de Dios.\n\nMosíah 3:8 (profecía del rey Benjamín, c. 124 a.C.): "Y se llamará Jesucristo, el Hijo de Dios, el Padre del cielo y de la tierra, el Creador de todas las cosas desde el principio; y su madre se llamará María." El nombre de María está en el canon del Libro de Mormón siglos antes del nacimiento. Esta es la especificidad profética más asombrosa de ese libro en relación con los personajes del NT.',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'María Después de la Resurrección — Juan 19:27 y la Tradición',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Cuando vio Jesús a su madre, y al discípulo a quien él amaba, que estaba presente, dijo a su madre: Mujer, he ahí tu hijo. Después dijo al discípulo: He ahí tu madre. Y desde aquella hora el discípulo la recibió en su propia casa.',
              reference: 'Juan 19:26-27',
            },
            {
              type: 'paragraph',
              text: 'Desde la cruz, Jesús confía a su madre al discípulo amado (Juan). Esto tiene implicaciones importantes: (1) María estaba sin esposo (confirmando la muerte de José). (2) Los "hermanos" de Jesús — James, José, Simón, Judas — no son considerados custodios adecuados, posiblemente porque en ese momento aún no eran creyentes (Juan 7:5). (3) Juan recibe a María en su propia casa "desde aquella hora" — una transferencia formal de responsabilidad filial.',
            },
            {
              type: 'key_points',
              title: 'El destino de María después de la Resurrección — Historia y Tradición',
              points: [
                'Hechos 1:14 — María estaba presente en el aposento alto después de la Ascensión, orando con los apóstoles — la última mención en el NT.',
                'Tradición efesiana (s. IV): Juan llevó a María a Éfeso, donde vivió hasta su muerte. La "Casa de María" en Éfeso sigue siendo un sitio de veneración. Basada parcialmente en las visiones de la beata Ana Catalina Emmerich (s. XIX) — fuente mística, no histórica.',
                'Tradición jerosolimitana: María murió y fue enterrada en Jerusalén, en Getsemaní. El "Santuario de la Dormición" en el Monte Sión perpetúa esta tradición.',
                'Dogma Católico de la Asunción (Pio XII, 1950): María fue llevada al cielo en cuerpo y alma. Ni el NT ni los primeros padres de la iglesia del siglo I o II enseñan esto — el dogma formal es medieval tardío.',
                'POSICIÓN SUD: La Iglesia no enseña nada específico sobre la muerte o destino póstumo de María. No hay revelación restaurada sobre este punto. El silencio es la respuesta honesta.',
              ],
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // SECCIÓN III: LOS HERMANOS DE JESÚS — EL DEBATE DE DOS MILENIOS
    // ─────────────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'Los Hermanos de Jesús — El Debate de Dos Milenios',
      intro: {
        romanNumeral: 'III',
        title: 'Los Hermanos de Jesús — El Debate de Dos Milenios',
        paragraphs: [
          'Mateo 13:55 y Marcos 6:3 nombran cuatro hermanos de Jesús: Santiago (Jacobo / James), José (Joses), Simón y Judas. El debate sobre si eran hermanos biológicos, medios hermanos o primos es uno de los más antiguos de la historia cristiana — y tiene implicaciones para la doctrina mariana, la estructura de la Iglesia primitiva, y la comprensión de los "desposyni".',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Santiago el Justo — Del Escéptico al Mártir',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'c. 30 a.C.',
                  text: 'Nace Santiago, posiblemente el primero de los hermanos de Jesús.',
                  color: 'gold',
                },
                {
                  label: 'c. 27-30 d.C.',
                  text: 'Juan 7:5: "Porque ni aun sus hermanos creían en él." Santiago es escéptico durante el ministerio de Jesús.',
                  ref: 'Juan 7:5',
                  color: 'red',
                },
                {
                  label: 'c. 33 d.C.',
                  text: '1 Corintios 15:7: "Después apareció a Jacobo; después a todos los apóstoles." Cristo resucitado se aparece a Santiago individualmente.',
                  ref: '1 Corintios 15:7',
                  color: 'gold',
                },
                {
                  label: 'c. 33-62 d.C.',
                  text: 'Santiago lidera la Iglesia de Jerusalén. Gálatas 1:19: Pablo lo llama "el hermano del Señor." Hechos 15: preside el Concilio de Jerusalén.',
                  ref: 'Gálatas 1:19; Hechos 15',
                  color: 'blue',
                },
                {
                  label: '62 d.C.',
                  text: 'Muerte de Santiago. Josefo, Ant. 20.9.1: "el hermano de Jesús el llamado Cristo, de nombre Santiago." Hegesipo (vía Eusebio HE 2.23): arrojado del pináculo del templo, apedreado, golpeado con un mazo de batanero.',
                  ref: 'Josefo Ant. 20.9.1; Eusebio HE 2.23',
                  color: 'red',
                },
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Fuentes históricas',
              title: 'Josefo y Hegesipo sobre la muerte de Santiago',
              paragraphs: [
                'JOSEFO (Ant. 20.9.1, c. 93 d.C.): "Ananías [sumo sacerdote]... convocó al sanedrín de jueces y trajo ante él al hermano de Jesús el llamado Cristo, de nombre Santiago, y a algunos otros, y habiendo formado una acusación contra ellos como violadores de la ley, los entregó para ser lapidados." Esta referencia de Josefo a Santiago es ampliamente aceptada como auténtica por los académicos, a diferencia del disputado Testimonium Flavianum sobre Jesús.',
                'HEGESIPO (vía Eusebio, HE 2.23, c. 180 d.C.): Hegesipo, un judío cristiano del siglo II que conocía a los que habían conocido a testigos directos, describe a Santiago con extraordinario detalle. Lo llama "el Justo" (ho dikaios). Dice que desde su nacimiento fue santo — nunca bebió vino ni comió carne, nunca usó aceite, nunca tomó baño, usaba solo lino (no lana), era el único al que se permitía entrar al Santuario, y sus rodillas eran tan callosas por la oración constante que parecían rodillas de camello. Los fariseos del templo lo empujaron desde el pináculo (eparama, el alero del techo), y cuando cayó y sobrevivió, comenzaron a apedrearle. Mientras lo apedreaban, Santiago oró: "Te ruego, Señor Dios Padre, que les perdones pues no saben lo que hacen." Finalmente, un batanero le golpeó en la cabeza con su mazo.',
                'EL TESTIMONIO CONVERGENTE: Josefo (fuente judía secular) y Hegesipo (fuente cristiana primitiva que cita testigos) coinciden en los hechos esenciales — Santiago murió como mártir por su fe, alrededor del 62 d.C., ejecutado por autoridades judías. La convergencia de fuentes independientes eleva enormemente la confiabilidad histórica.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Jacobo, siervo de Dios y del Señor Jesucristo, a las doce tribus que están en la dispersión: Salud.',
              reference: 'Santiago 1:1',
            },
            {
              type: 'paragraph',
              text: 'La Epístola de Santiago abre sin mención de parentesco con Jesús — solo como "siervo." Esto es notable: el hombre que conoció a Jesús mejor que nadie (vivieron bajo el mismo techo durante décadas) no usa esa familiaridad como credencial. Se identifica como siervo, no como hermano. El contraste con lo que haría un impostor es revelador: un falsificador habría comenzado con "Santiago, hermano del Señor Jesús."',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'Judas/Judá — El Hermano que Escribió la Epístola Más Corta',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Judas, siervo de Jesucristo, y hermano de Jacobo, a los llamados, santificados en Dios Padre, y guardados en Jesucristo.',
              reference: 'Judas 1:1',
            },
            {
              type: 'paragraph',
              text: 'Judas (Judá, en hebreo Yehudah — el mismo nombre que el traidor Judas Iscariote, lo que creó enorme confusión en la tradición) se identifica como "hermano de Jacobo" — es decir, de Santiago el Justo. No se identifica como "hermano del Señor," aunque eso habría sido la credencial más poderosa. El mismo patrón de humildad que en Santiago.',
            },
            {
              type: 'deep_dive',
              badge: 'Hegesipo y los desposyni',
              title: 'Los nietos de Judas ante el Emperador Domiciano',
              paragraphs: [
                'Hegesipo (vía Eusebio, HE 3.20) relata uno de los episodios más dramáticos de la historia cristiana primitiva: El Emperador Domiciano (81-96 d.C.) supo que existían descendientes de la familia de David — y de Jesús — y les temía como posibles pretendientes al trono mesiánico. Mandó traer a los nietos de Judas, hermano del Señor.',
                '"Vinieron y fueron interrogados sobre Cristo y su reino, qué naturaleza y origen tenía y cuándo aparecería. Respondieron que no era un reino del mundo ni terrenal, sino celestial y angélico, y que aparecería al fin del mundo, cuando viniera en gloria a juzgar a vivos y muertos y dar a cada uno según sus obras. Entonces Domiciano les preguntó cuántos bienes y propiedades tenían. Dijeron que entre los dos solo poseían un trozo de tierra de 39 pletros [~9 hectáreas] de valor total de 9.000 denarios, de la que pagaban sus impuestos y la trabajaban con sus propias manos. Para probarlo, mostraron sus manos, callosas por el duro trabajo."',
                '"Domiciano los despidió sin daño y por decreto puso fin a la persecución de la Iglesia. Liberados, se convirtieron en líderes de las iglesias, como testigos y como de la estirpe del Señor, y permanecieron en paz hasta el reinado de Trajano" (Eusebio, HE 3.20).',
                'Los granjeros con manos callosas y nueve hectáreas de tierra que convencieron al Emperador más poderoso de la tierra de que su reino no era político — y lo convencieron mostrando sus callos. La imagen es irresistible.',
              ],
            },
          ],
        },
        {
          id: 't3-3',
          title: 'Joses/José y Simón — Los Hermanos que la Historia Casi Olvidó',
          blocks: [
            {
              type: 'paragraph',
              text: 'Joses (o José) y Simón aparecen solo en las listas de Mateo 13:55 y Marcos 6:3. No tienen epístolas. No tienen acciones narradas en los evangelios. Joses aparece una vez más en Marcos 15:40 y 47, donde "María madre de Santiago el menor y de Joses" es identificada como testigo de la crucifixión y del entierro de Jesús — pero esto probablemente se refiere a otra familia (ver Sección sobre María de Clopas). Simón, según Hegesipo (Eusebio HE 3.11; 3.32), se convirtió en el segundo obispo de Jerusalén después de Santiago — dirigiendo la Iglesia de Jerusalén durante décadas. Fue crucificado bajo el Emperador Trajano alrededor del año 107 d.C., a la edad avanzada de más de 100 años según Hegesipo.',
            },
            {
              type: 'doctrine_box',
              title: 'Simeón/Simón — Segundo Obispo de Jerusalén',
              body: 'Hegesipo (Eusebio HE 3.11): "Después del martirio de Santiago y la rendición de Jerusalén [70 d.C.], los apóstoles y discípulos del Señor que aún vivían se reunieron de todas partes con los parientes del Señor según la carne, pues muchos de ellos aún vivían, y consultaron a quién deberían confiar la dirección de la Iglesia. Todos decidieron unánimemente que Simeón, hijo de Cleofás, que se menciona en el Evangelio, era digno del trono del episcopado." Si Cleofás es el Clopas de Juan 19:25 y es hermano de José (ver Sección VI), entonces Simeón es primo de Jesús y segundo líder de la Iglesia de Jerusalén. La Iglesia primitiva de Jerusalén era esencialmente una empresa familiar.',
            },
          ],
        },
        {
          id: 't3-4',
          title: 'Las Hermanas de Jesús — Los Rostros sin Nombre',
          blocks: [
            {
              type: 'highlight_verse',
              text: '¿No es éste el hijo del carpintero? ¿No se llama su madre María, y sus hermanos Jacobo, José, Simón y Judas? ¿Y no están todas sus hermanas con nosotros?',
              reference: 'Mateo 13:55-56',
            },
            {
              type: 'paragraph',
              text: 'El texto dice "todas sus hermanas" (pasai) — plural definitivo. Al menos dos, posiblemente más. No se nombran en ningún evangelio canónico. La razón más probable es cultural: las mujeres en los documentos legales y genealógicos del siglo I palestino raramente eran nombradas a menos que fueran relevantes para la narrativa. Las hermanas de Jesús, al parecer, vivían en o cerca de Nazaret ("están con nosotros") y no formaron parte del grupo de seguidores itinerantes.',
            },
            {
              type: 'key_points',
              title: 'Nombres en la tradición — con cautela',
              points: [
                'El Protoevangelio de Santiago (apócrifo, s. II) — que presenta a María como hija de Joaquín y Ana — no menciona hermanas de Jesús porque en ese texto los "hermanos" son hijos del primer matrimonio de José.',
                'La tradición copta y siríaca posterior menciona nombres como "María" y "Salomé" para las hermanas de Jesús — pero sin fuente primaria confiable.',
                'Hegesipo (vía Eusebio) no menciona a las hermanas de Jesús en los fragmentos preservados.',
                'La conclusión honesta: no sabemos sus nombres. El texto los preservó en silencio.',
              ],
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // SECCIÓN IV: FAMILIA EXTENDIDA — LA CONEXIÓN SACERDOTAL-REAL
    // ─────────────────────────────────────────────────────────────────
    {
      id: 's4',
      title: 'Familia Extendida — La Conexión Sacerdotal-Real',
      intro: {
        romanNumeral: 'IV',
        title: 'Familia Extendida — La Conexión Sacerdotal-Real',
        paragraphs: [
          'El mundo de Jesús no era una familia aislada. Estaba conectado por sangre y alianza a la línea sacerdotal levítica a través de Elisabet y Juan el Bautista, y posiblemente a otras ramas de la familia a través de Clopas/Alfeo. Entender estas conexiones cambia la forma en que leemos el Nuevo Testamento.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Elisabet y Zacarías — La Conexión Levítica',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Hubo en los días de Herodes, rey de Judea, un sacerdote llamado Zacarías, de la clase sacerdotal de Abías; y su mujer era de las hijas de Aarón, y se llamaba Elisabet.',
              reference: 'Lucas 1:5',
            },
            {
              type: 'paragraph',
              text: 'Zacarías pertenecía a la "clase sacerdotal de Abías" — el octavo de los veinticuatro turnos de sacerdotes establecidos por David (1 Crónicas 24:10). Cada turno de sacerdotes servía en el Templo durante una semana dos veces al año. El sorteo de quemar incienso en el Templo (Lucas 1:9) era el honor más alto de ese servicio — y a Zacarías le tocó una vez en su vida. En ese momento único recibió la visión del ángel Gabriel anunciando el nacimiento de Juan.',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué significa que Elisabet sea "pariente" (suggenis) de María?',
              body: 'Lucas 1:36 usa la palabra griega suggenis — que significa simplemente "pariente de sangre" o "kinswoman." No dice "prima" (anepsia) ni "tía" (theia). La relación exacta es desconocida. Podría ser prima, prima segunda, o cualquier parentesco femenino. Lo que sí queda claro es que había un lazo de familia entre la familia levítica de Elisabet y la familia de María — lo que daría a Jesús tanto sangre real davidiana (de María) como una conexión al linaje sacerdotal aarónico (de su kinswoman Elisabet). Esto tenía una importancia simbólica enorme: Jesús era rey (Judá) y sumo sacerdote (tipo de Aarón) en una sola persona.',
            },
            {
              type: 'deep_dive',
              badge: 'Tradición cristiana primitiva',
              title: 'La muerte de Zacarías — ¿el mismo de Mateo 23:35?',
              paragraphs: [
                'MATEO 23:35: Jesús denuncia a los escribas y fariseos y menciona "la sangre de Zacarías hijo de Berequías, que matasteis entre el templo y el altar." Esto ha creado un problema exegético durante siglos: ¿a qué Zacarías se refiere?',
                'OPCIÓN A — El profeta Zacarías hijo de Berequías (s. VI a.C.): Mencionado en Zacarías 1:1. Pero no hay ningún texto bíblico que registre que este profeta fuera asesinado en el Templo.',
                'OPCIÓN B — Zacarías hijo de Joyadá (2 Crónicas 24:20-21): Asesinado en el atrio del Templo por orden del rey Joás. El nombre del padre difiere (Joyadá, no Berequías), pero la escena coincide exactamente. Mateo puede estar usando "Berequías" por confusión o por una variante textual.',
                'OPCIÓN C — Zacarías padre de Juan el Bautista (tradición cristiana primitiva): El Protoevangelio de Santiago (s. II, cap. 23) relata que Zacarías fue asesinado en el Templo cuando Herodes buscaba a Juan infante. Orígenes (Comentario sobre Mateo, s. III) adopta esta interpretación. Si fuera correcta, Jesús en Mateo 23 estaría haciendo referencia al asesinato de su propio tío-abuelo por parte de las autoridades del Templo.',
                'La mayoría de los académicos modernos prefieren la Opción B (2 Crónicas 24), ya que Mateo parece estar citando casos del Génesis al final de las Escrituras Hebreas. Pero la tradición de la muerte violenta de Zacarías padre de Juan es muy antigua.',
              ],
            },
          ],
        },
        {
          id: 't4-2',
          title: 'Juan el Bautista — El Primo que No Sabía que Era Primo',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Yo no le conocía; mas para que fuese manifestado a Israel, por esto vine yo bautizando con agua.',
              reference: 'Juan 1:31',
            },
            {
              type: 'paragraph',
              text: '"Yo no le conocía" (Juan 1:31, 33) es uno de los versículos más desconcertantes del evangelio de Juan. Si Juan y Jesús eran parientes (sus madres eran kinswoman — Lucas 1:36), ¿cómo es posible que Juan no lo reconociera? Las respuestas académicas son varias: (1) Siendo primos y viviendo en regiones distintas (Elisabet en la región montañosa de Judea, María en Galilea), pudieron haberse visto raramente o nunca de adultos. (2) "No le conocía" puede referirse al conocimiento espiritual revelado — Juan sabía quién era Jesús en términos familiares, pero no sabía que era el Mesías hasta la revelación del bautismo. (3) La diferencia de edad (6 meses, Lucas 1:26, 36) y la distancia geográfica entre Galilea y Judea (unos 100 km) hacen plausible que apenas se conocieran personalmente.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.juanElBautista,
              alt: 'Retrato artístico de Juan el Bautista',
              caption: 'Juan el Bautista — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'doctrine_box',
              title: 'DyC 84:27-28 — Lo que la Restauración añade sobre Juan',
              body: 'DyC 84:27-28: "Y Juan fue bautizado estando aún en su infancia, y fue ordenado al poder de este sacerdocio [Aarónico] por el ángel de Dios en el tiempo en que su padre Zacarías administraba el ministerio del templo." Esto añade detalles sin precedente bíblico: Juan fue bautizado en su infancia, fue ordenado al sacerdocio Aarónico por un ángel (posiblemente Gabriel, quien había anunciado su nacimiento), y esta ordenación ocurrió cuando Zacarías aún vivía y servía en el Templo. La revelación conecta la ordenación de Juan con el ministerio sacerdotal de su padre.',
            },
            {
              type: 'highlight_verse',
              text: 'Y Juan fue bautizado estando aún en su infancia, y fue ordenado al poder de este sacerdocio por el ángel de Dios en el tiempo en que su padre Zacarías administraba el ministerio del templo.',
              reference: 'Doctrina y Convenios 84:27-28',
            },
          ],
        },
        {
          id: 't4-3',
          title: 'Salomé — ¿La Hermana de María que Explica Todo?',
          blocks: [
            {
              type: 'compare_grid',
              title: 'Las cuatro mujeres al pie de la cruz — la comparación de los evangelios',
              left: {
                label: 'Juan 19:25',
                points: [
                  '"Su madre" = María la madre de Jesús',
                  '"La hermana de su madre" = ¿Salomé?',
                  '"María mujer de Cleofás" = María de Clopas',
                  '"María Magdalena"',
                ],
              },
              right: {
                label: 'Mateo 27:56 y Marcos 15:40',
                points: [
                  '"María Magdalena"',
                  '"María madre de Jacobo y de José"',
                  '"La madre de los hijos de Zebedeo" (Mateo)',
                  '"Salomé" (Marcos)',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Comparando las listas, muchos académicos identifican a "la hermana de su madre" (Juan) con "Salomé" (Marcos) y con "la madre de los hijos de Zebedeo" (Mateo). Si esta identificación es correcta, entonces: Salomé era hermana de María la madre de Jesús, y por tanto madre de Santiago y Juan hijo de Zebedeo. Santiago y Juan serían primos de Jesús — no solo discípulos, sino familia cercana.',
            },
            {
              type: 'deep_dive',
              badge: 'Implicación apostólica',
              title: 'Si Salomé era tía de Jesús — la petición del mejor asiento cobra nuevo sentido',
              paragraphs: [
                'Mateo 20:20-21: "Entonces se le acercó la madre de los hijos de Zebedeo con sus hijos, postrándose ante él y pidiéndole algo. Él le dijo: ¿Qué quieres? Ella le dijo: Ordena que en tu reino se sienten estos dos hijos míos, el uno a tu derecha, y el otro a tu izquierda."',
                'Si esta mujer es Salomé, hermana de María la madre de Jesús, entonces no es simplemente una madre ambiciosa — es la tía de Jesús intercediendo por sus sobrinos-primos ante su sobrino. La petición familiar adquiere un tono completamente diferente. No es impudencia de una extraña; es la confianza de una familiar que se cree con derecho a pedir favores dentro de la familia.',
                'Que Jesús rechace incluso esa petición familiar es parte de la enseñanza: en el Reino de Dios, los títulos de sangre no dan posición. "El que quiera hacerse grande entre vosotros, sea vuestro servidor" (v.26).',
                'LDS: No hay revelación restaurada que confirme o niegue esta identificación. Richard Lloyd Anderson (BYU) y otros académicos SUD han discutido esta posibilidad como plausible pero no definitiva.',
              ],
            },
          ],
        },
        {
          id: 't4-4',
          title: 'Clopas/Cleofás/Alfeo — La Conexión que Une Todo',
          blocks: [
            {
              type: 'paragraph',
              text: 'Este es uno de los nudos más complejos de la genealogía del NT, y resolverlo ilumina múltiples relaciones. Hay tres nombres que los estudiosos frecuentemente identifican como la misma persona: CLOPAS (Klōpas, Juan 19:25 — el esposo de María de Clopas), CLEOFÁS (Kleopas, Lucas 24:18 — el discípulo en el camino a Emaús), y ALFEO (Halaphai en arameo, padre del apóstol Santiago de Alfeo — Mateo 10:3). El nombre Clopas/Klōpas es una forma semita-griega del arameo Halaphai.',
            },
            {
              type: 'doctrine_box',
              title: 'Hegesipo — Clopas era hermano de José',
              body: 'Hegesipo (vía Eusebio, HE 3.11; 4.22): "Después del martirio de Santiago... Simeón hijo de Cleofás fue designado obispo de Jerusalén... Simeón era hijo del tío del Señor, pues Cleofás era hermano de José." Si Hegesipo es correcto — y es la fuente más antigua sobre este punto, c. 180 d.C. — entonces: Clopas = Cleofás = hermano de José el padre de Jesús. María de Clopas = cuñada de José = tía por afinidad de Jesús. Sus hijos = primos de Jesús. Santiago de Alfeo (si Alfeo = Clopas) = primo apostólico de Jesús. Simeón = el que fue segundo obispo de Jerusalén = primo de Jesús. La "familia extendida" de Jesús dominó la Iglesia primitiva de Jerusalén durante décadas.',
            },
            {
              type: 'highlight_verse',
              text: 'Y he aquí, dos de ellos iban el mismo día a una aldea llamada Emaús... Y uno de ellos, que se llamaba Cleofás, respondiendo, le dijo: ¿Eres tú el único forastero en Jerusalén que no has sabido las cosas que en ella han acontecido?',
              reference: 'Lucas 24:13, 18',
            },
            {
              type: 'paragraph',
              text: 'Si Cleofás del camino a Emaús es el mismo Clopas/hermano de José, entonces estamos ante un escena de una intimidad extraordinaria: un familiar cercano de Jesús que no lo reconoce durante kilómetros de conversación. El Cristo resucitado caminó incógnito con su propio tío — discutiendo las profecías de su propia muerte y resurrección — hasta que al partir el pan fue reconocido. La escena de Emaús es quizás la aparición más humana y emocionalmente rica del Resucitado.',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // SECCIÓN V: LAS MARÍAS — UNA CONFUSIÓN DE DOS MILENIOS
    // ─────────────────────────────────────────────────────────────────
    {
      id: 's5',
      title: 'Las Marías — Una Confusión de Dos Milenios',
      intro: {
        romanNumeral: 'V',
        title: 'Las Marías — Una Confusión de Dos Milenios',
        paragraphs: [
          'Miriam (María) era el nombre femenino más común en Palestina del siglo I — tan común que el NT menciona al menos seis mujeres llamadas María. La tradición cristiana las ha confundido repetidamente, con consecuencias significativas para la teología y la historia. Desenredarlas requiere leer los cuatro evangelios en paralelo con precisión.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'María Magdalena — La Primera Testigo y la Víctima de la Confusión Papal',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].images.mujeresDiscipulas,
              alt: 'Grupo de mujeres discípulas que siguieron a Jesús y sostuvieron su ministerio',
              caption: 'Las mujeres que siguieron a Jesús',
            },
            {
              type: 'highlight_verse',
              text: 'Y estaban también algunas mujeres mirando de lejos, entre las cuales estaba María Magdalena, de quien había echado siete demonios.',
              reference: 'Marcos 15:40; Lucas 8:2',
            },
            {
              type: 'paragraph',
              text: 'María era de Magdala — una ciudad pesquera próspera en la orilla occidental del Mar de Galilea, conocida en el siglo I por su industria de salazón de pescado (el nombre griego era Tarichaea, "el lugar del pescado salado"). No era un pueblo marginal: tenía un hipódromo y fue destruida en la guerra judía del 67-68 d.C. por su resistencia a Roma. María Magdalena era de una ciudad real, no de un pueblo fantasma.',
            },
            {
              type: 'deep_dive',
              badge: 'El error de 591 d.C.',
              title: 'Cómo el Papa Gregorio I convirtió a María Magdalena en pecadora',
              paragraphs: [
                'El 14 de septiembre de 591 d.C., el Papa Gregorio I pronunció una homilía en Roma en la que identificó a tres mujeres distintas como la misma persona: María Magdalena (Lucas 8:2), la pecadora anónima que ungió los pies de Jesús (Lucas 7:37-50), y María de Betania hermana de Lázaro (Juan 11-12). Esta fusión no tiene base en ninguno de los cuatro evangelios — son narraciones claramente distintas.',
                'La Iglesia Ortodoxa Oriental nunca aceptó esta confusión — para ellos siempre fueron tres mujeres distintas. La Iglesia Católica Romana finalmente las separó oficialmente en el Martirologio Romano de 1969, aunque el daño cultural perduró siglos.',
                'Las implicaciones son enormes: durante siglos, la primera testigo de la Resurrección — a quien Cristo se apareció primero — fue reencuadrada como una pecadora sexual arrepentida. Esto relegó a María Magdalena al rol de ex-prostituta redimida en lugar del rol que el texto le da: mensajera apostólica enviada por Cristo resucitado.',
                'EL TEXTO DE JUAN: Juan 20:11-18 — Cristo llama a María Magdalena por nombre (¡María!). Ella lo reconoce y lo llama "Raboni" (Maestro, en arameo — el único uso de esta palabra en Juan). Cristo le dice: "Ve a mis hermanos y diles..." María es enviada como apostola apostolorum — "apóstol de los apóstoles" — antes de que ningún hombre vea al Resucitado. Esta es una de las afirmaciones más contundentes del texto sobre la dignidad y el rol de la mujer en la Iglesia primitiva.',
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.mariaMagdalena,
              alt: 'Retrato artístico de María Magdalena',
              caption: 'María Magdalena — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'key_points',
              title: 'Los siete demonios de Lucas 8:2 — ¿Qué significa esto?',
              points: [
                'El texto no da detalles sobre la naturaleza de los "siete demonios." No hay ninguna implicación de pecado moral o vida sexual.',
                'En el mundo del siglo I, los demonios explicaban enfermedades mentales y físicas severas — epilepsia, psicosis, posesión. El "siete" indica multiplicidad/gravedad, no un tipo específico.',
                'Académicos como Ben Witherington III y Richard Bauckham argumentan que pudo ser una condición debilitante severa, no ningún tipo de moralidad cuestionable.',
                'El Evangelio de María (texto gnóstico copto del s. II, Códice de Berlín 8502) presenta a María Magdalena como la discípula más avanzada de Jesús — pero es un texto gnóstico tardío que refleja debates del siglo II sobre autoridad entre hombres y mujeres en la Iglesia, no historia del siglo I.',
                'POSICIÓN SUD: La Iglesia no ha comentado oficialmente sobre María Magdalena más allá de lo que los evangelios enseñan. No hay revelación restaurada específica sobre su vida.',
              ],
            },
          ],
        },
        {
          id: 't5-2',
          title: 'María y Marta de Betania — Fe, Contemplación y una Resurrección',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].images.betania,
              alt: 'Marta, María y Lázaro en su hogar de Betania',
              caption: 'La casa de Betania',
            },
            {
              type: 'highlight_verse',
              text: 'Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá. Y todo aquel que vive y cree en mí, no morirá eternamente. ¿Crees esto? Le dijo: Sí, Señor; yo he creído que tú eres el Cristo, el Hijo de Dios, que has venido al mundo.',
              reference: 'Juan 11:25-27',
            },
            {
              type: 'paragraph',
              text: 'Marta de Betania pronuncia en Juan 11:27 la confesión de fe más completa registrada en el cuarto evangelio — incluyendo "el Cristo, el Hijo de Dios, que has venido al mundo." Es paralela a la confesión de Pedro en Mateo 16:16, pero hecha por una mujer, y en un contexto de dolor y duelo. El texto de Juan la pone a la par teológica de Pedro.',
            },
            {
              type: 'doctrine_box',
              title: 'Lucas 10:38-42 — La escena que dos milenios han malinterpretado',
              body: 'La escena clásica: Marta prepara la comida, María escucha a los pies de Jesús. Jesús dice que María "eligió la mejor parte." Esto ha sido interpretado como una crítica al trabajo doméstico y una preferencia por la contemplación espiritual. Pero el texto griego matiza: María estaba "sentada a los pies" del Maestro — la postura exacta del discípulo ante el rabí. María estaba recibiendo instrucción rabínica — algo que en el siglo I estaba reservado a los hombres. Jesús no está contraponiendo trabajo vs. espiritualidad; está afirmando el derecho de una mujer a recibir la misma enseñanza doctrinal que sus discípulos varones. La crítica de Marta no era al trabajo; era la interrupción de esa enseñanza.',
            },
            {
              type: 'paragraph',
              text: 'Respecto a su riqueza: Juan 12:3 menciona que María usó "una libra de perfume de nardo puro, de mucho precio" — cuyo costo Judas Iscariote calcula en 300 denarios (Juan 12:5), equivalente a casi un año del salario de un trabajador. Esta es una suma extraordinaria. La familia de Lázaro era de los acaudalados de Betania — un pueblo a solo 3 km de Jerusalén, en la ruta principal de la Ciudad Santa. Las ruinas arqueológicas de Betania (actual Al-Eizariya, "el lugar de Lázaro") confirman que era un asentamiento bien establecido.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.marta,
              alt: 'Retrato artístico de Marta de Betania',
              caption: 'Marta de Betania — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.mariaDeBetania,
              alt: 'Retrato artístico de María de Betania',
              caption: 'María de Betania — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.lazaro,
              alt: 'Retrato artístico de Lázaro de Betania',
              caption: 'Lázaro de Betania — representación artística, no reconstrucción histórica verificada',
            },
          ],
        },
        {
          id: 't5-3',
          title: 'María de Clopas — La Cuñada Testigo',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Estaban junto a la cruz de Jesús su madre, y la hermana de su madre, María mujer de Cleofas, y María Magdalena.',
              reference: 'Juan 19:25',
            },
            {
              type: 'paragraph',
              text: 'María de Clopas (o María mujer de Cleofás) es identificada en Marcos 15:40 como "María madre de Jacobo el menor y de José." Estuvo presente en la crucifixión, en el entierro (Marcos 15:47), y fue una de las primeras al sepulcro la mañana de la resurrección (Marcos 16:1; Lucas 24:10). Si Clopas era hermano de José (como dice Hegesipo), María de Clopas era cuñada de José y tía política de Jesús. Esto hace de ella una de las parientas más cercanas de Jesús presente en los momentos culminantes de su vida.',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // SECCIÓN VI: LOS APÓSTOLES — ¿CUÁNTOS ERAN FAMILIA?
    // ─────────────────────────────────────────────────────────────────
    {
      id: 's6',
      title: 'Los Apóstoles — ¿Cuántos Eran Familia?',
      intro: {
        romanNumeral: 'VI',
        title: 'Los Apóstoles — ¿Cuántos Eran Familia?',
        paragraphs: [
          'Si las identificaciones históricas que hemos examinado son correctas, al menos cuatro de los Doce apóstoles eran parientes directos de Jesús. Esto no fue nepotismo — fue el patrón de los movimientos religiosos judíos del siglo I, donde la familia del fundador normalmente lideraba. Y sin embargo Jesús eligió a doce, no a cuatro de su familia y ocho de fuera.',
        ],
      },
      topics: [
        {
          id: 't6-1',
          title: 'Santiago y Juan hijo de Zebedeo — Los Primos Tronantes',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].images.llamamientoPescadores,
              alt: 'Jesús llamando a los pescadores junto al Mar de Galilea',
              caption: 'El llamamiento de los pescadores',
            },
            {
              type: 'paragraph',
              text: 'Si la identificación de Salomé como hermana de María es correcta (ver Sección IV), Santiago y Juan hijo de Zebedeo eran primos de Jesús. Marcos 3:17 registra que Jesús los llamó Boanerges, "hijos del trueno" — un apodo que sugiere temperamentos fuertes y quizás un privilegio de cercanía. Santiago fue el primer apóstol mártir (Hechos 12:2, Herodes Agripa I, 44 d.C.). Juan es el apóstol amado, custodio de María, y según DyC 7 un ser traducido que permanece en la tierra.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.santiagoHijoDeZebedeo,
              alt: 'Retrato artístico de Santiago, hijo de Zebedeo',
              caption: 'Santiago, hijo de Zebedeo — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.juan,
              alt: 'Retrato artístico del apóstol Juan',
              caption: 'Juan, hijo de Zebedeo — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'highlight_verse',
              text: 'Y el rey Herodes echó mano a algunos de la iglesia para hacerles mal. Y mató a espada a Jacobo, hermano de Juan.',
              reference: 'Hechos 12:1-2',
            },
            {
              type: 'doctrine_box',
              title: 'DyC 7 — La misión de Juan que el NT no registra',
              body: 'DyC 7 es la "traducción" (recuperación) de un pergamino escrito por Juan el Amado que estaba en posesión de Pedro. En él, el Señor confirma que Juan pidió permanecer vivo hasta la Segunda Venida para "traer almas" al Señor. Esto es posterior a Juan 21:20-23, donde Jesús hace una declaración ambigua sobre Juan. DyC 7 aclara el registro: Juan es un ser traducido, activo en la tierra, preparando para la Segunda Venida. También participa en la Restauración: el 15 de mayo de 1829, Juan, junto con Pedro y Santiago, confirieron el Sacerdocio de Melquisedec a José Smith y Oliver Cowdery (DyC 27:12).',
            },
          ],
        },
        {
          id: 't6-2',
          title: 'Santiago de Alfeo — El Primo Apostólico',
          blocks: [
            {
              type: 'paragraph',
              text: 'Santiago de Alfeo (Mateo 10:3) es conocido en la tradición cristiana como "Santiago el Menor" para distinguirlo de Santiago hijo de Zebedeo. Si Alfeo = Clopas = hermano de José (argumentado por Hegesipo), entonces Santiago de Alfeo era primo de Jesús. Eusebio (HE 1.12) nota que varios de los Doce eran parientes del Señor. Santiago de Alfeo aparece en todas las listas apostólicas pero no en ninguna acción específica en los evangelios. Su madre (María de Clopas) fue testigo de la crucifixión y la resurrección.',
            },
          ],
        },
        {
          id: 't6-3',
          title: 'Simón Pedro — La Familia del Cefas',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.pedro,
              alt: 'Retrato artístico del apóstol Pedro',
              caption: 'Simón Pedro — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'highlight_verse',
              text: '¿No tenemos derecho de traer con nosotros una hermana, una mujer creyente, como también los otros apóstoles, y los hermanos del Señor, y Cefas?',
              reference: '1 Corintios 9:5',
            },
            {
              type: 'paragraph',
              text: '1 Corintios 9:5 confirma que Pedro tenía esposa ("una mujer creyente") y la llevaba consigo en sus viajes misioneros. Marcos 1:30 registra que Jesús sanó a la suegra de Pedro en Cafarnaúm — confirmando tanto la existencia del matrimonio de Pedro como que vivía en Cafarnaúm. La tradición dice que la esposa de Pedro se llamaba Petronila (aunque esto aparece en textos tardíos del siglo II). Clemente de Alejandría (Stromata 7.11) relata que Pedro fue testigo del martirio de su propia esposa en Roma y la animó con las palabras "Recuerda al Señor."',
            },
            {
              type: 'doctrine_box',
              title: 'El hogar de Pedro en Cafarnaúm — confirmado arqueológicamente',
              body: 'Las excavaciones en Cafarnaúm han descubierto lo que los arqueólogos identifican como la casa de Pedro. La estructura del siglo I muestra evidencia de uso doméstico, seguida de una fase del siglo II donde el espacio fue reconvertido en un lugar de reunión, y luego una iglesia del siglo IV construida sobre los mismos cimientos. Los graffiti en las paredes incluyen invocaciones a Pedro. La continuidad del sitio desde el siglo I hasta la iglesia cristiana es uno de los hallazgos arqueológicos más significativos relacionados con los personajes del NT.',
            },
          ],
        },
        {
          id: 't6-4',
          title: 'Andrés y los Demás del Círculo Apostólico',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.andres,
              alt: 'Retrato artístico del apóstol Andrés',
              caption: 'Andrés — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'highlight_verse',
              text: 'Éste [Andrés] halló primero a su hermano Simón, y le dijo: Hemos hallado al Mesías (que traducido es, el Cristo). Y le trajo a Jesús.',
              reference: 'Juan 1:40-42',
            },
            {
              type: 'paragraph',
              text: 'Andrés, hermano de Simón Pedro, fue de los primeros en seguir a Jesús — y el primero en llevarle a otro. No todos los del círculo apostólico eran familia de sangre de Jesús; varios llegaron por invitación de otro discípulo, como Andrés trajo a su hermano, o como Felipe trajo a Natanael (Bartolomé).',
            },
            {
              type: 'highlight_verse',
              text: 'Felipe... halló a Natanael, y le dijo: Hemos hallado a aquel de quien escribió Moisés en la ley, así como los profetas: a Jesús, el hijo de José, de Nazaret... Le dijo Natanael: ¿De Nazaret puede haber algo de bueno? Le dijo Felipe: Ven y ve.',
              reference: 'Juan 1:45-46',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.felipe,
              alt: 'Retrato artístico del apóstol Felipe',
              caption: 'Felipe — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.bartolome,
              alt: 'Retrato artístico del apóstol Bartolomé (Natanael)',
              caption: 'Bartolomé (Natanael) — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'paragraph',
              text: 'Mateo, el publicano llamado desde su mesa de cobro de impuestos (Mateo 9:9), y Tomás, cuya lealtad se manifestó antes de la resurrección — "Vamos también nosotros, para que muramos con él" (Juan 11:16) — completan el grupo de los Doce cuya presencia en la vida de Jesús no dependía de un lazo de sangre, sino de una decisión de seguirlo.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.mateo,
              alt: 'Retrato artístico del apóstol Mateo',
              caption: 'Mateo — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.tomas,
              alt: 'Retrato artístico del apóstol Tomás',
              caption: 'Tomás — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'key_points',
              title: 'Judas Iscariote — un nombre, dos personas distintas',
              points: [
                'Marcos 3:19 nombra entre los Doce a "Judas Iscariote, el que le entregó" — un apóstol distinto de Judas/Judá, hermano de Jesús (ver Sección III).',
                'La coincidencia de nombre (Judá/Yehudah era uno de los más comunes en la Palestina del siglo I) generó confusión en parte de la tradición posterior, pero los evangelios los distinguen con claridad: uno es de los Doce, el otro es de la familia de Jesús.',
                'El Evangelio de Felipe (texto gnóstico de Nag Hammadi, s. III) y otros textos apócrifos tardíos especulan sobre el personaje de Judas Iscariote, pero no son fuente histórica confiable para el siglo I.',
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.judasIscariote,
              alt: 'Retrato artístico de Judas Iscariote',
              caption: 'Judas Iscariote — representación artística, no reconstrucción histórica verificada',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // SECCIÓN VII: LOS PERSONAJES EN LAS SOMBRAS
    // ─────────────────────────────────────────────────────────────────
    {
      id: 's7',
      title: 'Los Personajes en las Sombras',
      intro: {
        romanNumeral: 'VII',
        title: 'Los Personajes en las Sombras',
        paragraphs: [
          'Algunos de los personajes más fascinantes del entorno de Jesús aparecen brevemente, con detalles específicos que los evangelistas preservaron deliberadamente, y luego desaparecen. La especificidad de esos detalles — un nombre, una profesión, una cantidad exacta — sugiere que los primeros lectores los conocían, o que el evangelista quería que los investigáramos.',
        ],
      },
      topics: [
        {
          id: 't7-1',
          title: 'Nicodemo — El Fariseo que Llegó de Noche',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].images.nicodemo,
              alt: 'Nicodemo visitando a Jesús de noche',
              caption: 'Nicodemo llega de noche — Juan 3:1-2',
            },
            {
              type: 'highlight_verse',
              text: 'Había un hombre de los fariseos que se llamaba Nicodemo, un principal entre los judíos. Este vino a Jesús de noche, y le dijo: Rabí, sabemos que has venido de Dios como maestro; porque nadie puede hacer estas señales que tú haces, si no está Dios con él.',
              reference: 'Juan 3:1-2',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Juan 3',
                  text: 'Nicodemo visita a Jesús de noche — uno a uno. Recibe la enseñanza sobre nacer de nuevo y Juan 3:16. Viene como investigador.',
                  ref: 'Juan 3:1-21',
                  color: 'gold',
                },
                {
                  label: 'Juan 7:50-51',
                  text: '"¿Acaso nuestra ley juzga a un hombre si primero no le oye, y sabe lo que ha hecho?" Nicodemo defiende a Jesús ante el sanedrín — todavía no declarado seguidor, pero ya abogado.',
                  ref: 'Juan 7:50-51',
                  color: 'blue',
                },
                {
                  label: 'Juan 19:39-40',
                  text: '"Y también Nicodemo, el que antes había venido a Jesús de noche, vino trayendo un compuesto de mirra y áloes, como cien libras." Sale del armario — literalmente — al pie de la cruz.',
                  ref: 'Juan 19:39-40',
                  color: 'red',
                },
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Historia y arqueología',
              title: 'Nicodemo ben Gurion — ¿el mismo hombre?',
              paragraphs: [
                'El Talmud Babilónico (Nedarim 50a; Gittin 56a) menciona a un hombre llamado Nicodemo ben Gurion como uno de los tres hombres más ricos de Jerusalén en la época del Templo. El Talmud relata que Nicodemo ben Gurion realizó un milagro de lluvia (oró y lluvia cayó exactamente cuando se necesitaba) — por lo que recibió el nombre "Nicodemo" (el que fue honrado por el pueblo), aunque su nombre real era Buni.',
                'Si este Nicodemo talmúdico es el mismo Nicodemo del evangelio de Juan (un "principal de los judíos" con enorme riqueza), entonces su arco narrativo es aún más dramático: un hombre de enorme poder, conexiones y riqueza que comenzó visitando a Jesús a escondidas por temor a sus compañeros del sanedrín, y terminó llevando 100 libras romanas de especias aromáticas para ungir el cuerpo crucificado de aquel a quien había visitado de noche.',
                '100 libras romanas (librae) = unos 32 kilogramos de mirra y áloes. Era una cantidad reservada para los funerales de reyes o personas de la más alta posición social. El costo habría sido inmenso. Este no es el gesto discreto de un seguidor secreto — es una declaración pública de lealtad en el momento más peligroso posible. Nicodemo salió del armario a la vista de todos.',
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.nicodemo,
              alt: 'Retrato artístico de Nicodemo',
              caption: 'Nicodemo — representación artística, no reconstrucción histórica verificada',
            },
          ],
        },
        {
          id: 't7-2',
          title: 'José de Arimatea — El Hombre del Sepulcro Nuevo',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.joseDeArimatea,
              alt: 'Retrato artístico de José de Arimatea',
              caption: 'José de Arimatea — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'highlight_verse',
              text: 'Un hombre rico de Arimatea, llamado José, que también había sido discípulo de Jesús. Este fue a Pilato y pidió el cuerpo de Jesús... Y José tomó el cuerpo, lo envolvió en una sábana limpia, y lo puso en su sepulcro nuevo, que había labrado en la peña; y después de hacer rodar una gran piedra a la entrada del sepulcro, se fue.',
              reference: 'Mateo 27:57-60',
            },
            {
              type: 'paragraph',
              text: 'Marcos 15:43 agrega un detalle crucial: José de Arimatea era "miembro prominente del concilio" — es decir, del sanedrín — y "esperaba el reino de Dios." Lucas 23:51 especifica que no había consentido en el acuerdo del sanedrín que condenó a Jesús. Juan 19:38 lo llama "discípulo secreto de Jesús, por miedo de los judíos." Cuatro evangelistas lo mencionan, y cada uno añade un matiz diferente del mismo hombre: rico, poderoso, miembro disidente del sanedrín, seguidor secreto que sale de las sombras en la hora más oscura.',
            },
            {
              type: 'key_points',
              title: 'Por qué el sepulcro de José importa históricamente',
              points: [
                'Poseer un sepulcro tallado en roca cerca de Golgotha era extraordinariamente caro — terreno de alta demanda en la ciudad más santa del judaísmo.',
                'Era un sepulcro "nuevo" — no utilizado. Ley judía: nadie tenía el mismo status impuro que un cuerpo ejecutado por los romanos, a quien normalmente se enterraba en una tumba común de convictos.',
                'Al ofrecer su sepulcro privado, José cumplía accidentalmente la profecía de Isaías 53:9: "y se dispuso con los ricos en su muerte."',
                'La ubicación del sepulcro en o cerca del actual Santo Sepulcro en Jerusalén ha sido defendida arqueológicamente. Los estudios muestran que el área fuera de las murallas del siglo I era efectivamente zona de tumbas.',
                'TRADICIÓN POSTERIOR: El ciclo artúrico medieval y textos como el "José de Arimatea" de Robert de Boron (c. 1200) conectan a José con el Santo Grial y lo envían a Glastonbury, Inglaterra. Esto es legendario — no tiene base histórica. Pero revela que José de Arimatea se convirtió en una figura de memoria cristiana poderosa: el hombre que cuidó el cuerpo de Cristo.',
              ],
            },
          ],
        },
        {
          id: 't7-3',
          title: 'Simón de Cirene y sus Hijos — Una Familia que Apareció por Accidente',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y obligaron a uno que pasaba, Simón de Cirene, padre de Alejandro y de Rufo, que venía del campo, a que le llevase la cruz.',
              reference: 'Marcos 15:21',
            },
            {
              type: 'deep_dive',
              badge: 'Detalle revelador',
              title: 'Alejandro y Rufo — ¿Por qué nombrar a sus hijos?',
              paragraphs: [
                'Marcos es el evangelio que menos incluye nombres propios innecesarios — es el más escueto. Sin embargo, Marcos 15:21 no solo nombra a Simón sino también a sus dos hijos: "Alejandro y Rufo." Mateo 27:32 y Lucas 23:26 mencionan a Simón pero no a sus hijos. La única explicación para que Marcos añadiera los nombres es que Alejandro y Rufo eran conocidos de la audiencia de Marcos — probablemente miembros de la comunidad cristiana de Roma para quien Marcos escribió.',
                'ROMANOS 16:13: Pablo saluda a "Rufo, escogido en el Señor, y a su madre y mía." Si este Rufo es el hijo de Simón de Cirene, entonces la madre de Rufo (y esposa de Simón) fue también una figura reconocida en la comunidad romana que Pablo llama "madre mía" — un término de afecto filial de parte de Pablo.',
                'La secuencia implicada es notable: Simón fue forzado por los soldados romanos a cargar la cruz de un condenado desconocido. De ese acto forzado emergió algo tan transformador para él y su familia que décadas después sus hijos eran figuras conocidas en la Iglesia de Roma, y su esposa era tratada como madre por el apóstol Pablo. El hombre que fue compelido involuntariamente a llevar la cruz del Salvador se convirtió en familia del movimiento que el Salvador fundó.',
              ],
            },
          ],
        },
        {
          id: 't7-4',
          title: 'Bartimeo, Zaqueo, y la Mujer Samaritana — Nombres Preservados',
          blocks: [
            {
              type: 'paragraph',
              text: 'Jesús sanó a cientos de personas en los evangelios. La gran mayoría son anónimas. Cuando el texto preserva un nombre — como Bartimeo (Marcos 10:46-52) — es significativo. Bartimeo (literalmente "hijo de Timeo") era un mendigo ciego en Jericó. Su nombre fue preservado, sugieren algunos académicos, porque se convirtió en un testigo conocido de la primera Iglesia. Siguió a Jesús "por el camino" (Marcos 10:52) — la misma frase que Marcos usa para los discípulos.',
            },
            {
              type: 'key_points',
              title: 'Tres personajes sin nombre — con nombres en la tradición',
              points: [
                'LA MUJER SAMARITANA (Juan 4): No tiene nombre en el texto. La tradición cristiana oriental (ortodoxa y siríaca, s. IV-V) la llama Fotina (Photini) — "la luminosa" — y la venera como mártir. La Iglesia Ortodoxa la llama "igual a los apóstoles" por su rol de evangelizar a los samaritanos. No hay confirmación histórica del nombre.',
                'ZAQUEO (Lucas 19): Sí tiene nombre en el texto — "jefe de los publicanos," hombre rico de Jericó. La tradición eclesiástica tardía (Clemente de Roma, Constituciones Apostólicas) lo identifica como el primer obispo de Cesárea. No hay confirmación en el NT.',
                'EL HOMBRE RICO (Marcos 10:17): "El joven rico" que se fue triste — anónimo. La tradición siríaca lo llama Barnabe; la copta lo llama por otros nombres. Irrelevante para el texto.',
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.mujerSamaritana,
              alt: 'Retrato artístico de la mujer samaritana del pozo de Jacob',
              caption: 'La mujer samaritana — representación artística, no reconstrucción histórica verificada',
            },
          ],
        },
        {
          id: 't7-5',
          title: 'Las Autoridades que Cruzaron su Camino',
          blocks: [
            {
              type: 'paragraph',
              text: 'No todos los que rodearon a Jesús fueron familia, discípulos o amigos. Algunos de los rostros más recordados del relato de la Pasión son los de las autoridades que presidieron su proceso — figuras históricas reales, documentadas también fuera del NT, cuyo papel en el relato es indispensable para entenderlo.',
            },
            {
              type: 'highlight_verse',
              text: 'Y los que prendieron a Jesús le llevaron a Caifás sumo sacerdote, adonde estaban reunidos los escribas y los ancianos.',
              reference: 'Mateo 26:57',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.caifas,
              alt: 'Retrato artístico de Caifás, sumo sacerdote',
              caption: 'Caifás — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.poncioPilato,
              alt: 'Retrato artístico de Poncio Pilato',
              caption: 'Poncio Pilato — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'highlight_verse',
              text: 'Y como supo que era de la jurisdicción de Herodes, le remitió a Herodes, que en aquellos días también estaba en Jerusalén.',
              reference: 'Lucas 23:6-7',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.herodesAntipas,
              alt: 'Retrato artístico de Herodes Antipas',
              caption: 'Herodes Antipas — representación artística, no reconstrucción histórica verificada',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // SECCIÓN VIII: LOS DESPOSYNI — LA FAMILIA DEL SEÑOR EN LA IGLESIA PRIMITIVA
    // ─────────────────────────────────────────────────────────────────
    {
      id: 's8',
      title: 'Los Desposyni — La Familia del Señor en la Iglesia Primitiva',
      intro: {
        romanNumeral: 'VIII',
        title: 'Los Desposyni — La Familia del Señor en la Iglesia Primitiva',
        paragraphs: [
          'Desposyni (δεσπόσυνοι) es un término griego que significa "los que pertenecen al Señor (despoths)" — usado en la Iglesia primitiva para referirse a los parientes de sangre de Jesús. Hegesipo, escribiendo alrededor del 180 d.C. pero basándose en fuentes que se remontan al siglo I, es nuestra fuente más rica sobre este grupo. Eusebio (HE 1.7; 2.23; 3.11; 3.19; 3.20; 3.32; 4.22) preserva extensos fragmentos de Hegesipo que de otra manera se habrían perdido.',
        ],
      },
      topics: [
        {
          id: 't8-1',
          title: 'El Liderazgo Familiar de la Iglesia de Jerusalén',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'c. 33-62 d.C.',
                  text: 'Santiago el Justo (hermano de Jesús) — primer obispo/líder de la Iglesia de Jerusalén. "Hermano del Señor" (Gálatas 1:19). Presidió el Concilio de Jerusalén (Hechos 15).',
                  ref: 'Gálatas 1:19; Hechos 15; Eusebio HE 2.23',
                  color: 'gold',
                },
                {
                  label: '62 d.C.',
                  text: 'Muerte de Santiago. Martyrdom relatado por Josefo (Ant. 20.9.1) y Hegesipo (HE 2.23).',
                  ref: 'Josefo Ant. 20.9.1',
                  color: 'red',
                },
                {
                  label: '62-107 d.C.',
                  text: 'Simeón hijo de Clopas (primo de Jesús) — segundo obispo de Jerusalén. Muere mártir bajo Trajano, a edad centenaria. Hegesipo (HE 3.11; 3.32).',
                  ref: 'Eusebio HE 3.11; 3.32',
                  color: 'blue',
                },
                {
                  label: 'c. 90 d.C.',
                  text: 'Domiciano convoca a los nietos de Judas (hermano de Jesús). Los interroga sobre el "reino de David." Los libera tras ver sus manos callosas de campesinos. (HE 3.20)',
                  ref: 'Eusebio HE 3.20',
                  color: 'gold',
                },
                {
                  label: 'c. 90-130 d.C.',
                  text: 'Los nietos de Judas se convierten en líderes de las iglesias. La familia de Jesús continúa en posiciones de liderazgo hasta al menos tres generaciones después.',
                  color: 'blue',
                },
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Eusebio HE 3.20',
              title: 'Los campesinos que convencieron a un Emperador',
              paragraphs: [
                'El relato completo de Hegesipo (vía Eusebio HE 3.20) sobre los nietos de Judas merece ser citado extensamente porque es uno de los documentos más fascinantes del cristianismo primitivo:',
                '"De la familia del Señor vivían aún los nietos de Judas, que era llamado hermano del Señor según la carne, y a éstos se les acusó de ser de la estirpe de David. El evocatus [oficial imperial] los llevó ante Domiciano César, pues éste temía la venida del Cristo como Herodes. Les preguntó si eran de la estirpe de David, y ellos lo confesaron. Entonces les preguntó cuántos bienes y propiedades tenían. Dijeron que entre los dos solo poseían nueve mil denarios en total, la mitad para cada uno, y que no en plata sino en una parcela de tierra de treinta y nueve pletros [~9 ha], de la que pagaban impuestos y la trabajaban con sus propias manos para vivir. Luego mostraron sus manos como prueba del trabajo manual: sus manos eran callosas y endurecidas por el trabajo continuo."',
                '"Domiciano no los condenó en absoluto, sino que los despreció como simples personas y los dejó ir libres, y por decreto hizo cesar la persecución contra la iglesia. Liberados, rigieron las iglesias, porque eran mártires y de la familia del Señor, y permanecieron en paz hasta el reinado de Trajano."',
                'La escena tiene la textura de lo verdadero: el contraste entre el Emperador del Imperio más poderoso del mundo y dos campesinos galileos con manos callosas discutiendo la naturaleza de un reino que no es de este mundo. Y los campesinos ganan. No porque sean poderosos, sino porque son claramente inofensivos, claramente pobres, y claramente sinceros.',
              ],
            },
          ],
        },
        {
          id: 't8-2',
          title: 'Implicaciones para la Comprensión de la Iglesia Primitiva',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los desposyni revelan que la Iglesia primitiva de Jerusalén no era solo una comunidad de fe — era también una comunidad familiar. La familia de Jesús, incluyendo a aquellos que inicialmente no creyeron en él (Juan 7:5), se convirtió en la columna vertebral institucional de la Iglesia judeocristiana hasta la destrucción de Jerusalén en el 70 d.C. y más allá. Eusebio (HE 4.22) registra que los primeros quince obispos de Jerusalén eran todos circuncisos — es decir, todos judíos de nacimiento, y muchos de ellos de la familia directa o extendida de Jesús.',
            },
            {
              type: 'compare_grid',
              title: 'La Iglesia de Jerusalén vs. la Iglesia Paulina — Dos Mundos',
              left: {
                label: 'Iglesia de Jerusalén',
                points: [
                  'Liderada por la familia de Jesús (desposyni)',
                  'Judeo-cristiana: observaba la ley mosaica',
                  'Santiago como figura de autoridad central',
                  'Destruida/dispersada por la guerra del 66-70 d.C.',
                  'Relocalizada en Pella (Transjordania) durante la guerra',
                  'Reconstruida lentamente; perseguida por Roma por linaje davídico',
                ],
              },
              right: {
                label: 'Iglesia Paulina (gentil)',
                points: [
                  'Liderada por apóstoles sin parentesco con Jesús',
                  'Libre de la ley mosaica (Gálatas 3:28)',
                  'Pablo como figura de autoridad central en debate',
                  'Floreciente en Asia Menor, Grecia, Roma',
                  'Tensión registrada con la Iglesia de Jerusalén (Gálatas 2)',
                  'Eventualmente la corriente dominante del cristianismo',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿Qué te dice sobre el carácter de Dios el hecho de que los hermanos de Jesús, que no creyeron en él durante su ministerio, se convirtieran en los líderes que sostuvieron su Iglesia durante décadas después de la resurrección? ¿Qué rol juega la experiencia personal del Cristo resucitado en esa transformación?',
            },
          ],
        },
        {
          id: 't8-3',
          title: 'Lo que la Revelación Restaurada Añade — DyC 138 y la Visión de la Redención',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Vi a Adán y a Eva, a Abraham y a Isaac, a Jacob y a Moisés... Vi a Isaías y a Ezequiel, a Daniel y a muchos otros profetas y santos... Y también vi a Juan el Bautista, al apóstol Pedro y a otros que estaban en el mundo del espíritu, quienes se estaban preparando para salir como mensajeros del Señor para ministrar a los que aún permanecían en el mundo.',
              reference: 'Doctrina y Convenios 138:38-40, 53-57',
            },
            {
              type: 'paragraph',
              text: 'DyC 138, la Visión de la Redención de los Muertos revelada al Presidente Joseph F. Smith en 1918, coloca a Juan el Bautista entre quienes estaban en el mundo de los espíritus preparándose para ministrar. Esta revelación proporciona el contexto eterno de todos los personajes que hemos estudiado: sus vidas mortales no fueron la totalidad de su historia. Juan el Bautista, que fue decapitado (Marcos 6:27), estaba en el mundo de los espíritus como mensajero activo. Los desposyni — la familia de Jesús — habrán estado igualmente activos en ese mundo preparando el camino.',
            },
            {
              type: 'doctrine_box',
              title: 'DyC 110 — El 3 de abril de 1836: Los antepasados apostólicos regresan',
              body: 'DyC 110 registra las visiones del Templo de Kirtland del 3 de abril de 1836 (Domingo de Resurrección). Además del Señor Jesucristo, se aparecieron tres figuras del mundo del Antiguo Testamento: Moisés, que entregó las llaves de la dispensación del recogimiento (v.11); Elías, que restauró las llaves del evangelio de Abraham (v.12); y Elías (el Elías profetizado, posiblemente Juan el Bautista en su papel de Elías que había de venir — ver Malaquías 4:5-6), quien comprometió "la dispensación del evangelio de Abraham, diciendo que en nosotros y en nuestra posteridad serán bendecidas todas las generaciones" (v.12). Los personajes de los evangelios no dejaron de ser activos en la historia después de su muerte.',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // SECCIÓN IX: SÍNTESIS — EL MAPA FAMILIAR DE JESÚS
    // ─────────────────────────────────────────────────────────────────
    {
      id: 's9',
      title: 'Síntesis — El Mapa Familiar y lo que Todo Esto Enseña',
      intro: {
        romanNumeral: 'IX',
        title: 'Síntesis — El Mapa Familiar y lo que Todo Esto Enseña',
        paragraphs: [
          'Después de recorrer seis grupos de personas alrededor de Jesús — familia nuclear, familia extendida, las Marías, los apóstoles-familiares, los personajes en las sombras, y los desposyni — ¿qué conclusiones emergen?',
        ],
      },
      topics: [
        {
          id: 't9-1',
          title: 'El Árbol Familiar Reconstruido',
          blocks: [
            {
              type: 'key_points',
              title: 'Lo que la historia y las escrituras establecen con alta confianza',
              points: [
                'José murió antes del ministerio público de Jesús (argumentado por ausencia textual y rol de Jesús como τέκτων activo).',
                'María tenía linaje de David (necesario para la descendencia davídica de Jesús) y conexión familiar con el linaje aarónico de Elisabet.',
                'Elisabet era pariente (suggenis) de María — grado exacto desconocido. Juan el Bautista y Jesús eran parientes, aunque no necesariamente se conocían bien.',
                'Clopas/Alfeo era hermano de José (Hegesipo vía Eusebio HE 3.11) — haciendo a María de Clopas cuñada de José y a Santiago de Alfeo primo de Jesús.',
                'Salomé, si es hermana de María (reconstrucción de Juan 19:25 + Marcos 15:40 + Mateo 27:56), era madre de Santiago y Juan hijo de Zebedeo — primos de Jesús.',
                'Santiago el Justo (hermano de Jesús) no creyó durante el ministerio (Juan 7:5), fue convertido por aparición del Resucitado (1 Cor 15:7), lideró la Iglesia de Jerusalén, y murió mártir ~62 d.C. (Josefo Ant. 20.9.1; Hegesipo HE 2.23).',
                'Judas el hermano tuvo nietos que fueron interrogados por Domiciano y liberados (Hegesipo HE 3.20) — los "desposyni" como clase continúan activos.',
                'Simeón hijo de Clopas (primo de Jesús) fue segundo obispo de Jerusalén, martirizado bajo Trajano c. 107 d.C. (Hegesipo HE 3.11; 3.32).',
              ],
            },
            {
              type: 'key_points',
              title: 'Lo que las escrituras de la restauración añaden de forma única',
              points: [
                'El nombre de María registrado en el Libro de Mormón (Mosíah 3:8) siglos antes del nacimiento de Jesús — especificidad profética sin paralelo en otro canon.',
                '1 Nefi 11:13-20 — María como "la más bella y pura de todas las otras vírgenes" vista en visión por Nefi c. 600 a.C.',
                'DyC 84:27-28 — Juan el Bautista bautizado en su infancia y ordenado al sacerdocio aarónico por un ángel.',
                'DyC 7 — Juan el Amado como ser traducido, activo hasta la Segunda Venida.',
                'DyC 110 — Elías, Moisés y el Señor se aparecen en el Templo de Kirtland el 3 de abril de 1836.',
                'DyC 138 — Juan el Bautista en el mundo de los espíritus como mensajero activo.',
                'TJS — La Traducción de José Smith del NT añade varios aclaraciones aunque no biografía nueva de los personajes secundarios.',
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].maps.redRelacional,
              alt: 'Mapa de la red de personas, acontecimientos y lugares relacionados con Jesucristo',
              caption: 'Red de personas y acontecimientos alrededor de Jesucristo',
            },
            {
              type: 'key_points',
              title: 'La red del círculo de Jesús — agrupada por cercanía',
              points: [
                'Familia: María, José, Santiago, hermanos y hermanas.',
                'Los Doce: Pedro, Andrés, Santiago, Juan, Felipe, Bartolomé, Mateo, Tomás, otros apóstoles.',
                'Mujeres discípulas: María Magdalena, Juana, Susana, Marta, María de Betania, otras mujeres.',
                'Amigos y buscadores: Lázaro, Nicodemo, José de Arimatea, Zaqueo, mujer samaritana.',
                'Testigos de la Resurrección: María Magdalena, Pedro y discípulos, Tomás, más de 500, Santiago, Pablo.',
                'Discípulos nefitas: multitud en Abundancia, Nefi, los doce discípulos, los niños.',
                'Autoridades y opositores: Anás, Caifás, Pilato, Herodes Antipas, fariseos, saduceos, Judas Iscariote.',
                '(Mateo; Marcos; Lucas; Juan; Hechos 1; 1 Corintios 15; 3 Nefi 11–28)',
              ],
            },
            {
              type: 'central_quote',
              text: '"Conocer a las personas que rodearon a Jesús no es curiosidad histórica — es entender cómo Dios opera: a través de familias, de conversiones inesperadas, de personas que empiezan como escépticos y terminan como mártires, de primos que se convierten en testigos, de campesinos con manos callosas que convencen a emperadores."',
              attribution: 'Reflexión doctrinal',
            },
            {
              type: 'note_prompts',
              prompts: [
                {
                  id: 'np1',
                  question: '¿Cuál de los personajes de esta lección te sorprendió más y por qué? ¿Qué cambió en tu comprensión del ministerio de Jesús?',
                },
                {
                  id: 'np2',
                  question: 'Santiago el Justo no creyó durante el ministerio de Jesús, pero se convirtió el mártir de mayor influencia de la Iglesia primitiva. ¿Qué dice esto sobre el proceso de conversión y sobre la relación entre familiaridad y fe?',
                },
                {
                  id: 'np3',
                  question: 'Los desposyni — los nietos de Judas con manos callosas — convencieron a Domiciano de que el reino de Jesús no era político. ¿Cómo describes hoy a alguien el reino de Dios de manera que sea igualmente convincente?',
                },
                {
                  id: 'np4',
                  question: '¿Qué añade a tu testimonio el hecho de que Mosíah 3:8 registra el nombre "María" siglos antes de su nacimiento?',
                },
              ],
            },
          ],
        },
        {
          id: 't9-2',
          title: 'El Círculo se Extiende — Nefitas y Pablo',
          blocks: [
            {
              type: 'paragraph',
              text: 'El círculo de Jesús no terminó con su ascensión ni se limitó a Jerusalén. Las escrituras registran que el Cristo resucitado ministró y llamó discípulos también entre los nefitas, y se apareció a un antiguo perseguidor de la Iglesia que se convirtió en uno de sus testigos más influyentes.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].images.nefitas,
              alt: 'El Cristo resucitado ministrando a una multitud de discípulos nefitas en Abundancia',
              caption: 'Cristo entre los nefitas — 3 Nefi 11',
            },
            {
              type: 'highlight_verse',
              text: 'Y sucedió que cuando Jesús hubo dicho estas palabras, escogió a doce de entre ellos, y les dio poder para bautizar... Y les dio poder para dar el don del Espíritu Santo.',
              reference: '3 Nefi 11:18-22; 12:1',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.nefi,
              alt: 'Retrato artístico de Nefi, discípulo nefita elegido por Cristo',
              caption: 'Nefi, hijo de Nefi — discípulo nefita elegido en 3 Nefi 11:18-22 (distinto del profeta Nefi, hijo de Lehi, autor de 1 Nefi) — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'highlight_verse',
              text: 'Y al último de todos, como a un abortivo, me apareció a mí también.',
              reference: '1 Corintios 15:8',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['el-circulo-de-jesus'].portraits.pablo,
              alt: 'Retrato artístico del apóstol Pablo',
              caption: 'Pablo — representación artística, no reconstrucción histórica verificada',
            },
            {
              type: 'paragraph',
              text: 'Pablo no caminó con Jesús en Galilea ni compartió su mesa como los Doce. Sin embargo, el Cristo resucitado se le apareció (Hechos 9:3-6) y lo integró a su círculo de testigos, tal como en el otro extremo del mundo eligió a doce discípulos nefitas para continuar su obra. El círculo de Jesús, en ese sentido, nunca dejó de crecer.',
            },
          ],
        },
      ],
    },
  ],

  scriptures: [
    { reference: 'Mateo 13:55-56' },
    { reference: 'Marcos 6:3' },
    { reference: 'Lucas 1:5, 36' },
    { reference: 'Lucas 2:41-51' },
    { reference: 'Juan 3:1-2' },
    { reference: 'Juan 7:5' },
    { reference: 'Juan 19:25-27' },
    { reference: 'Gálatas 1:19' },
    { reference: '1 Corintios 15:7' },
    { reference: 'Santiago 1:1' },
    { reference: 'Judas 1:1' },
    { reference: 'Hechos 12:1-2' },
    { reference: 'Romanos 16:13' },
    { reference: 'Marcos 15:21' },
    { reference: '1 Nefi 11:13-20' },
    { reference: 'Mosíah 3:8' },
    { reference: 'Doctrina y Convenios 7' },
    { reference: 'Doctrina y Convenios 84:27-28' },
    { reference: 'Doctrina y Convenios 110' },
    { reference: 'Doctrina y Convenios 138:38-57' },
  ],

  quickFacts: [
    'Josefo menciona a Santiago "hermano de Jesús el llamado Cristo" en Ant. 20.9.1 — una de las referencias históricas no-bíblicas más sólidas sobre la familia de Jesús.',
    'Mosíah 3:8 nombra a "María" como madre de Jesús siglos antes de su nacimiento — la especificidad profética más notable del Libro de Mormón sobre los personajes del NT.',
    'El Papa Gregorio I confundió a María Magdalena con la pecadora de Lucas 7 en 591 d.C. — error corregido por la Iglesia Católica en 1969.',
    'Los nietos de Judas (hermano de Jesús) convencieron al Emperador Domiciano de que el reino de Cristo no era político mostrando sus manos callosas de trabajar la tierra (Hegesipo vía Eusebio HE 3.20).',
    'Hegesipo (c. 180 d.C.) registra que Clopas era hermano de José — haciendo que al menos tres o cuatro apóstoles fueran primos de Jesús.',
    'DyC 84:27-28 revela que Juan el Bautista fue bautizado en su infancia y ordenado al sacerdocio aarónico por un ángel durante el servicio sacerdotal de Zacarías en el Templo.',
    'Simeón hijo de Clopas (primo de Jesús) fue el segundo obispo de Jerusalén — martirizado bajo el Emperador Trajano a más de 100 años de edad (Hegesipo HE 3.32).',
  ],
}
