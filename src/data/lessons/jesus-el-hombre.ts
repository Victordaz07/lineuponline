import type { Lesson } from '@/types/doctrine'

export const jesusElHombre: Lesson = {
  id: 'jesus-el-hombre',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'jesucristo',
  title: 'Jesús el Hombre',
  subtitle: 'La vida que nadie nos contó',
  author: 'Fuentes: Marcos 6; Lucas 2-4; Juan 11; 15; Mateo 26; Hebreos 4:15',
  description:
    'Antes de ser el Cristo resucitado, fue un niño en una aldea de Galilea, un τέκτων con callos en las manos, hermano de Santiago, amigo de Lázaro, el hombre que lloró. Esta lección recorre su vida mortal sin saltar a la doctrina — solo la humanidad de un hombre que también fue Dios.',
  level: 'BÁSICO',
  icon: '🪚',
  duration: 60,
  order: 10,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'Nazaret — La aldea que lo formó',
      intro: {
        romanNumeral: 'I',
        title: 'Nazaret — La aldea que lo formó',
        paragraphs: [
          'La arqueología del siglo I pinta un cuadro que los evangelios dan por supuesto pero no describen: Nazaret era una aldea de 200 a 400 personas en las colinas de la Baja Galilea. Sin pavimento romano. Sin mención en el Antiguo Testamento. Sin reputación. Por eso la pregunta de Natanael en Juan 1:46 sonó tan razonable a sus contemporáneos: "¿De Nazaret puede salir algo bueno?"',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El mundo físico de Jesús',
          blocks: [
            {
              type: 'paragraph',
              text: 'Desde Nazaret se veía el Monte Carmelo hacia el oeste — el mismo donde Elías desafió a los profetas de Baal. Al norte, el Monte Hermón cubierto de nieve en invierno. A 30 kilómetros, el mar de Galilea y la principal ruta comercial de Oriente Medio, la Via Maris. Jesús creció en un pueblo pequeño pero no aislado del mundo.',
            },
            {
              type: 'doctrine_box',
              title: 'Séforis: la ciudad romana a 6 km de su casa',
              body: 'Mientras Jesús crecía en Nazaret, a solo 6 kilómetros se estaba construyendo Séforis — la nueva capital romana de Galilea, destruida y reconstruida por Herodes Antipas. Una ciudad de teatro, columnas, mosaicos, baños romanos. Es muy probable que los artesanos de Nazaret, incluyendo a José y posiblemente al joven Jesús, trabajaran en su construcción. Jesús conocía el mundo romano no solo de oídas.',
            },
            {
              type: 'highlight_verse',
              text: '¿No es éste el hijo del carpintero? ¿No se llama su madre María, y sus hermanos Jacobo, José, Simón y Judas?',
              reference: 'Mateo 13:55',
            },
            {
              type: 'key_points',
              title: 'Lo que la arqueología confirma sobre Nazaret del siglo I',
              points: [
                'Población estimada: 200-400 habitantes — todos se conocían',
                'Sin sinagoga confirmada — la "sinagoga de Nazaret" en Lucas 4 puede haber sido una reunión en casa',
                'Economía agrícola y artesanal — vino, aceite, trigo, piedra',
                'Lengua materna: arameo galileo — con acento reconocible (Marcos 14:70)',
                'Alfabetismo limitado — Jesús sabía leer (Lucas 4:17), lo que era inusual',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El τέκτων — Constructor de piedra y madera',
      intro: {
        romanNumeral: 'II',
        title: 'El τέκτων — Constructor de piedra y madera',
        paragraphs: [
          'Marcos 6:3 lo llama simplemente "el τέκτων" — y el pueblo de Nazaret lo conocía por ese oficio. La palabra griega τέκτων (tektōn) significa artesano de materiales duros: madera, piedra, metal. No necesariamente solo "carpintero". En el siglo I en Galilea, los tektones construían con piedra local tanto como con madera.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Las manos de Dios encallecidas',
          blocks: [
            {
              type: 'paragraph',
              text: 'Si Jesús comenzó a trabajar con José a los 12 o 13 años (como era costumbre en las familias artesanas), tuvo casi veinte años de trabajo físico antes de iniciar su ministerio. Levantó vigas. Talló piedra. Sujetó cinceles y sierras. Sus manos, cuando comenzó a predicar, eran las manos de alguien que había trabajado toda su vida adulta. La misma noche de Getsemaní, esas manos oraban postradas en tierra.',
            },
            {
              type: 'highlight_verse',
              text: 'Porque no tenemos un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino uno que fue tentado en todo según nuestra semejanza, pero sin pecado.',
              reference: 'Hebreos 4:15',
            },
            {
              type: 'deep_dive',
              badge: 'Encarnación',
              title: 'Por qué importa que Jesús haya trabajado',
              paragraphs: [
                'La encarnación no fue solo una visita de Dios disfrazado de humano. Fue una inmersión total en la condición humana — incluyendo el trabajo físico, la fatiga, el calor de Galilea en verano, el frío del desierto en invierno. Hebreos insiste en que fue "tentado en todo" como nosotros.',
                'Un Dios que nunca trabajó con sus manos, que nunca sintió el peso de un día largo, que nunca tuvo un cliente difícil, sería un Dios que no entiende la mayor parte de la experiencia humana. El τέκτων de Nazaret entendía. Su empatía no era teórica.',
                'Cuando José Smith vio al Padre y al Hijo, los vio como seres corporales — "sus personas son tan distintas entre sí y tan distintas del hombre como lo son los cuerpos de dos hombres entre sí" (DHC 1:5). El cuerpo resucitado de Cristo conserva las marcas de los clavos. La encarnación no fue temporal.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El hijo de María',
      intro: {
        romanNumeral: 'III',
        title: 'El hijo de María',
        paragraphs: [
          'María aparece en cuatro momentos clave del evangelio de Juan: en Caná (Juan 2), en la cruz (Juan 19), y brevemente en los capítulos del ministerio. En Lucas 2, ella "guardaba todas estas cosas en su corazón." La relación entre Jesús y su madre es una de las relaciones humanas más ricas del Nuevo Testamento — y una de las menos exploradas.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Cuatro escenas con María',
          blocks: [
            {
              type: 'compare_grid',
              title: 'María en los momentos decisivos',
              left: {
                label: 'El Templo — Lucas 2:41-51',
                points: [
                  'Jesús tiene 12 años — única ventana a su infancia',
                  '"¿Por qué me buscabais? ¿No sabíais que en los negocios de mi Padre me es necesario estar?"',
                  'María "no entendió las palabras" (v.50)',
                  '"Su madre guardaba todas estas cosas en su corazón" (v.51)',
                  'Él volvió a Nazaret y "estaba sujeto a ellos"',
                ],
              },
              right: {
                label: 'La Cruz — Juan 19:25-27',
                points: [
                  '"Mujer, he ahí tu hijo." Al discípulo: "He ahí tu madre."',
                  'Incluso en agonía, Jesús asegura que alguien cuide a su madre',
                  'María fue testigo de la crucifixión — no huyó',
                  'Simeón lo había anunciado: "una espada traspasará tu alma" (Lucas 2:35)',
                  'Juan recibió a María en su casa desde ese día (v.27)',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Al tercer día se hicieron unas bodas en Caná de Galilea; y estaba allí la madre de Jesús. Y fue también invitado a las bodas Jesús con sus discípulos. Y faltando el vino, la madre de Jesús le dijo: No tienen vino. Y Jesús le dijo: ¿Qué tienes que ver conmigo, mujer? No ha llegado aún mi hora. Su madre dijo a los que servían: Haced todo lo que él os dijere.',
              reference: 'Juan 2:1-5',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué "mujer" y no "madre"?',
              body: 'En Juan 2:4, Jesús llama a María "mujer" (en griego, gynai) — no "madre". En español suena distante; en el griego del siglo I era un término de respeto, como "señora." Jesús usa la misma palabra cuando habla con la mujer samaritana (Juan 4:21) y con María Magdalena resucitado (Juan 20:15). No es distancia — es un cambio de registro: está comenzando a hablar como el Hijo de Dios, no solo como el hijo de María. En la cruz usa exactamente la misma palabra (Juan 19:26). El círculo se cierra.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El hermano de Santiago',
      intro: {
        romanNumeral: 'IV',
        title: 'El hermano de Santiago',
        paragraphs: [
          'Marcos 6:3 lista sus hermanos por nombre: Santiago (Jacobo), José, Simón y Judas. Juan 7:5 dice explícitamente: "Porque ni aun sus hermanos creían en él." El hecho más humanizante y también más misterioso: los hombres que crecieron en la misma casa que Jesús, que lo vieron cada día durante décadas, no creyeron en él durante su ministerio.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El hermano que no creyó — y luego murió mártir',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y después apareció a Jacobo; después a todos los apóstoles.',
              reference: '1 Corintios 15:7',
            },
            {
              type: 'paragraph',
              text: 'Pablo menciona casi de pasada que el Cristo resucitado se apareció a Santiago individualmente. No sabemos qué pasó en ese encuentro. Pero sabemos el resultado: el hermano que no creyó se convirtió en el líder de la Iglesia en Jerusalén, escribió la epístola de Santiago, y fue martirizado alrededor del año 62 d.C. — arrojado desde el pináculo del templo por negarse a negar a Jesucristo.',
            },
            {
              type: 'deep_dive',
              badge: 'Evidencia histórica',
              title: 'Josefo sobre la muerte de Santiago',
              paragraphs: [
                'Flavio Josefo, el historiador judío del siglo I, menciona la muerte de "Santiago, hermano de Jesús llamado el Cristo" (Antigüedades Judías, 20.9.1). Es una de las referencias históricas más sólidas fuera del Nuevo Testamento sobre una figura relacionada con Jesús.',
                'Santiago no era un creyente fanático desde siempre — fue el hermano que no creyó. Su conversión ocurrió porque vio al Cristo resucitado. Y esa conversión fue tan completa que dio su vida por ella. Es difícil explicar el martirio voluntario de alguien que sabe que la resurrección fue un fraude — especialmente si ese alguien vivió con el supuesto resucitado durante décadas.',
              ],
            },
            {
              type: 'key_points',
              title: 'Lo que los hermanos de Jesús revelan',
              points: [
                'Jesús creció en una familia real, con relaciones familiares reales — incluyendo tensión',
                'Sus hermanos fueron escépticos durante su ministerio — credibilidad histórica: nadie inventaría esto',
                'La resurrección convirtió al escéptico más cercano: Santiago',
                'El martirio de Santiago es difícil de explicar si la resurrección fue fabricada',
                'Judas (Judas 1:1 — "siervo de Jesucristo y hermano de Santiago") también se convirtió',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Sus amigos',
      intro: {
        romanNumeral: 'V',
        title: 'Sus amigos',
        paragraphs: [
          'Juan 11:35 — "Jesús lloró" — es el versículo más corto de la Biblia en español. Tiene dos palabras. No dice por qué Lázaro necesitaba ser resucitado. No dice la razón teológica del milagro. Dice que Jesús lloró en el camino al sepulcro de su amigo. La pregunta del texto no es "¿puede Dios resucitar a los muertos?" — ya la habíamos visto. La pregunta es: ¿llora Dios?',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'Lázaro, María Magdalena, y los Doce',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y cuando Jesús vio que lloraba ella, y a los judíos que habían venido con ella, también llorando, se estremeció en espíritu y se conmovió, y dijo: ¿Dónde le pusisteis? Le dijeron: Señor, ven y ve. Y lloró Jesús.',
              reference: 'Juan 11:33-35',
            },
            {
              type: 'paragraph',
              text: 'El texto griego dice que Jesús "se estremeció en el espíritu" — el verbo (embrimaomai) implica una emoción intensa, casi angustia física. No es el llanto sereno de alguien que sabe lo que va a pasar. Es la reacción de un amigo ante el dolor de personas que ama, ante la realidad de la muerte. Aunque podía y planeaba resucitar a Lázaro, lloró. La emoción no fue actuada.',
            },
            {
              type: 'highlight_verse',
              text: 'Ya no os llamaré siervos, porque el siervo no sabe lo que hace su señor; pero os he llamado amigos, porque todas las cosas que oí de mi Padre, os las he dado a conocer.',
              reference: 'Juan 15:15',
            },
            {
              type: 'doctrine_box',
              title: 'María Magdalena — la primera testigo',
              body: 'María Magdalena no era apóstol. No tenía autoridad formal en la Iglesia del siglo I. Era una mujer en una cultura que no aceptaba el testimonio femenino en la corte. Y sin embargo, el Cristo resucitado se le apareció primero a ella (Juan 20:11-18), la llamó por nombre ("¡María!"), y la envió como mensajera a los apóstoles. No es accidental que Juan registre esto. El primer testigo de la Resurrección fue la persona que menos le convenía a alguien que quisiera fabricar un relato creíble. Eso es exactamente lo que sugeriría que el relato es verdadero.',
            },
            {
              type: 'paragraph',
              text: 'Los Doce no eran funcionarios eclesiásticos — eran pescadores, cobradores de impuestos, zelotes. Comían juntos, viajaban juntos, dormían bajo las estrellas. "Os he llamado amigos" no es una metáfora devocional — es la descripción de lo que era la relación. Y aun así, uno lo traicionó, otro lo negó tres veces, y todos huyeron en Getsemaní. Jesús lo sabía de antemano. Siguió llamándoles amigos.',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'La última noche del hombre mortal',
      intro: {
        romanNumeral: 'VI',
        title: 'La última noche del hombre mortal',
        paragraphs: [
          'Jesús sabía exactamente lo que se venía. Lo había anunciado tres veces (Marcos 8, 9, 10). Y aun así, Getsemaní lo hizo caer a tierra. No fue la ignorancia lo que lo llevó al huerto — fue la elección de entrar de todos modos.',
        ],
      },
      topics: [
        {
          id: 't6-1',
          title: 'Getsemaní — la elección más humana',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y comenzó a entristecerse y a angustiarse en gran manera. Entonces Jesús les dijo: Mi alma está muy triste, hasta la muerte; quedaos aquí, y velad conmigo.',
              reference: 'Mateo 26:37-38',
            },
            {
              type: 'highlight_verse',
              text: 'Y estando en agonía, oraba más intensamente; y era su sudor como grandes gotas de sangre que caían hasta la tierra.',
              reference: 'Lucas 22:44',
            },
            {
              type: 'paragraph',
              text: 'La hematidrosis — sudor de sangre — es un fenómeno médico documentado bajo estrés extremo, donde capilares en las glándulas sudoríparas se rompen. Lucas, que según la tradición era médico, es el único evangelista que lo registra. Es el detalle más visceral del evangelio. El hombre que creó los cielos sudó sangre en un huerto.',
            },
            {
              type: 'highlight_verse',
              text: 'Y a la hora novena Jesús clamó a gran voz, diciendo: Eloi, Eloi, ¿lama sabactani? que traducido es: Dios mío, Dios mío, ¿por qué me has desamparado?',
              reference: 'Marcos 15:34',
            },
            {
              type: 'deep_dive',
              badge: 'El grito final',
              title: '¿Por qué un Dios gritó que Dios lo había abandonado?',
              paragraphs: [
                'El grito de la cruz es la cita más difícil del Nuevo Testamento. Jesús cita el Salmo 22 — un salmo que comienza con abandono y termina con vindicación. Los teólogos han debatido siglos: ¿fue un abandono real o el inicio de un salmo que termina en triunfo?',
                'El Libro de Mormón y DyC 19 dan un ángulo diferente: Getsemaní fue el momento de mayor intensidad. "Sufrí estas cosas por todos, para que ellos no tengan que sufrir si se arrepentían" (DyC 19:16-17). El peso de toda maldad humana — toda vergüenza, toda culpa, todo dolor — fue absorbido por una sola persona. El grito en la cruz no es el grito de quien perdió — es el grito de quien está pagando el precio completo.',
                'Lo que hace esto insoportablemente humano es esto: él eligió. En Getsemaní pidió que pasara el cáliz. Nadie lo obligó. El grito en la cruz es el grito de alguien que eligió entrar en el mayor dolor de la historia — y que siguió eligiendo, hasta el final.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Cuando Jesús hubo tomado el vinagre, dijo: Consumado es. Y habiendo inclinado la cabeza, entregó el espíritu.',
              reference: 'Juan 19:30',
            },
            {
              type: 'paragraph',
              text: '"Consumado es" — en griego, tetelestai. Un solo verbo en tiempo perfecto: "ha sido completado y sigue siendo así." Era la palabra que los comerciantes del siglo I escribían en los recibos cuando una deuda quedaba pagada. La deuda más grande de la historia quedó saldada con dos sílabas por un hombre con callos en las manos.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué cambia en la forma en que ves a Jesús cuando piensas en él no solo como el Cristo eterno, sino como el hombre de Nazaret que trabajó, lloró, tuvo hermanos escépticos y amigos que huyeron? ¿En qué momentos de tu propia vida sientes que ese Jesús más humano te entiende mejor que el Jesús de los vitrales?',
            },
          ],
        },
      ],
    },
  ],
}
