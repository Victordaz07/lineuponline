import type { Lesson } from '@/types/doctrine'

export const pedroLaConfesion: Lesson = {
  id: 'pedro-la-confesion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'pedro',
  title: 'La Confesión de Cesarea de Filipo',
  subtitle: '"Tú eres el Cristo, el Hijo del Dios viviente"',
  description:
    'En Cesarea de Filipo, bajo las sombras de las estatuas de los dioses del mundo grecorromano, Pedro pronunció la confesión más importante de los Evangelios. Jesús respondió con la declaración que fundó la Iglesia.',
  level: 'INTERMEDIO',
  icon: '🪨',
  duration: 30,
  order: 5011,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Pregunta que lo Cambió Todo',
      intro: {
        romanNumeral: 'I',
        title: '"¿Quién Decís que Soy Yo?"',
        paragraphs: [
          'Mateo 16 — Jesús pregunta primero qué dice la gente, y luego lo que dicen los doce. La diferencia entre las dos preguntas es la diferencia entre la opinión popular y la revelación personal.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La pregunta en su contexto geográfico',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cesarea de Filipo era una ciudad en el extremo norte de la tierra de Israel, al pie del monte Hermón, donde el río Jordán nace de manantiales subterráneos. Herodes Filipo II la había reconstruido y nombrado en honor a César. El lugar era famoso por una gruta dedicada al dios Pan, con un abismo oscuro en la roca desde el que manaba agua, al que los paganos llamaban "las puertas del Hades." Es precisamente aquí, rodeado de templos paganos y estatuas de César, donde Jesús hace la pregunta central de su ministerio.',
            },
            {
              type: 'highlight_verse',
              reference: 'Mateo 16:13-15',
              text: 'Viniendo Jesús a la región de Cesarea de Filipo, preguntó a sus discípulos, diciendo: ¿Quién dicen los hombres que es el Hijo del Hombre? Ellos dijeron: Unos, Juan el Bautista; otros, Elías; y otros, Jeremías, o alguno de los profetas. Él les dijo: Y vosotros, ¿quién decís que soy yo?',
            },
            {
              type: 'paragraph',
              text: 'Las respuestas populares son reveladoras: Juan el Bautista, Elías, Jeremías. Todas son figuras proféticas de alto rango. El pueblo no pensaba que Jesús fuera un mero rabino o curandero ambulante — lo veían como alguien al nivel de los grandes profetas. Pero ninguna de esas respuestas llegaba a la verdad. Jesús no era uno entre varios profetas. Era el Hijo de Dios.',
            },
          ],
        },
        {
          id: 't2',
          title: 'La respuesta de Pedro y la declaración de Jesús',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 16:16-18',
              text: 'Respondiendo Simón Pedro, dijo: Tú eres el Cristo, el Hijo del Dios viviente. Entonces le respondió Jesús: Bienaventurado eres, Simón, hijo de Jonás, porque no te lo reveló carne ni sangre, sino mi Padre que está en los cielos. Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella.',
            },
            {
              type: 'doctrine_box',
              title: 'La fuente de la confesión: revelación personal',
              body: 'Jesús no dice "Acertaste" o "Buen argumento." Dice: "no te lo reveló carne ni sangre, sino mi Padre que está en los cielos." El conocimiento que Pedro tiene no es deducción intelectual — es revelación directa. Esto tiene implicaciones enormes para la doctrina restaurada: el testimonio de que Jesucristo es el Hijo de Dios no se genera por argumento sino por revelación del Espíritu. Es el patrón de la Primera Visión de José Smith.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Roca y las Llaves del Reino',
      intro: {
        romanNumeral: 'II',
        title: '"Sobre Esta Roca Edificaré Mi Iglesia"',
        paragraphs: [
          'La declaración de Jesús sobre "esta roca" ha generado siglos de debate. La Restauración aporta luz sobre su significado.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: '¿Qué es "la roca"?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Mateo 16:18 en griego distingue entre "Petros" (nombre masculino, Pedro) y "petra" (roca masiva, femenina). Jesús dice literalmente: "tú eres Petros, y sobre esta petra edificaré mi iglesia." Los católicos romanos interpretan que la roca es Pedro mismo como primer papa. Los protestantes clásicos argumentan que la roca es la confesión de fe que Pedro acaba de hacer. La doctrina restaurada ofrece una tercera lectura: la roca es el principio de revelación continua — el mismo proceso por el cual Pedro recibió esa confesión. La Iglesia se edifica sobre profetas y apóstoles (Efesios 2:20) que reciben revelación.',
            },
            {
              type: 'compare_grid',
              title: 'Tres interpretaciones de "la roca"',
              left: {
                title: 'Tradición Católica',
                items: [
                  'La roca es Pedro personalmente',
                  'Establece la primacía papal como sucesión de Pedro',
                  'Autoridad transmitida por línea institucional',
                ],
              },
              right: {
                title: 'Lectura de la Restauración',
                items: [
                  'La roca es la revelación que produjo la confesión',
                  'La Iglesia se funda sobre apóstoles y profetas con revelación continua',
                  'Cuando la revelación apostólica cesó, la roca desapareció',
                ],
              },
            },
            {
              type: 'highlight_verse',
              reference: 'Mateo 16:19',
              text: 'Y a ti te daré las llaves del reino de los cielos; y todo lo que atares en la tierra será atado en los cielos; y todo lo que desatares en la tierra será desatado en los cielos.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Las llaves del reino: atar y desatar',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las "llaves del reino de los cielos" son una metáfora de autoridad administrativa. En el mundo antiguo, el mayordomo de un rey guardaba las llaves del palacio y tenía poder para abrir y cerrar el acceso a la presencia del rey. Dar las llaves es delegar autoridad representativa. La promesa de "atar y desatar" (también en Mateo 18:18 para todos los apóstoles) implica que las decisiones hechas con autoridad apostólica son ratificadas por el cielo.',
            },
            {
              type: 'doctrine_box',
              title: 'Las llaves en la doctrina restaurada',
              body: 'DyC 81:2 y 65:2 usan el mismo lenguaje de "llaves del reino." En la doctrina restaurada, las llaves son la autoridad directiva del sacerdocio — el derecho a presidir, a autorizar ordenanzas, a recibir revelación para la jurisdicción asignada. Pedro, Santiago y Juan las devolvieron a José Smith en mayo de 1829 (DyC 27:12). El sellamiento eterno en el templo es directamente el poder de "atar en la tierra" que Jesús prometió a Pedro.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Pedro Caminando sobre el Agua',
      intro: {
        romanNumeral: 'III',
        title: 'Mateo 14 — La Fe que Funciona y la Duda que Hunde',
        paragraphs: [
          'El único ser humano además de Jesucristo que caminó sobre el agua fue Pedro. El mismo que se hundió.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'La petición más audaz de los Evangelios',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 14:28-31',
              text: 'Entonces le respondió Pedro, y dijo: Señor, si eres tú, mándame ir a ti sobre las aguas. Y él dijo: Ven. Y descendiendo Pedro de la barca, andaba sobre las aguas para ir a Jesús. Pero al ver el fuerte viento, tuvo miedo; y comenzando a hundirse, dio voces, diciendo: ¡Señor, sálvame! Al momento Jesús, extendiendo la mano, asió de él, y le dijo: ¡Hombre de poca fe! ¿Por qué dudaste?',
            },
            {
              type: 'paragraph',
              text: 'Ninguno de los otros once discípulos pidió bajar del barco. Solo Pedro tuvo la audacia de pedir lo imposible. Y lo recibió — caminó sobre el agua. El fracaso posterior no cancela el logro: Pedro caminó sobre el agua. La pregunta de Jesús ("¿Por qué dudaste?") no es una reprensión severa sino una enseñanza sobre el mecanismo de la fe: la duda no es la ausencia de fe, es el desvío de la atención. Pedro caminó mientras mantuvo los ojos en Cristo; se hundió cuando los puso en el viento.',
            },
            {
              type: 'key_points',
              title: 'Lo que Pedro logró que nadie más hizo',
              points: [
                'Fue el único discípulo que tuvo fe suficiente para pedir salir de la barca',
                'Caminó sobre el agua — esto es un milagro en sí mismo, independientemente del hundimiento',
                'Cuando comenzó a hundirse, tuvo la presencia de ánimo de clamar "¡Señor, sálvame!"',
                'La respuesta de Jesús fue inmediata: extendió la mano y lo asió',
                'El incidente termina con adoración colectiva: "verdaderamente eres Hijo de Dios" (Mateo 14:33)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Transfiguración — Pedro como Testigo Ocular',
      intro: {
        romanNumeral: 'IV',
        title: 'Mateo 17 — El Monte Santo',
        paragraphs: [
          'Pedro, Santiago y Juan fueron los tres testigos de la Transfiguración. Este evento se convirtió en el fundamento del testimonio personal de Pedro.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Lo que Pedro vio en el monte',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 17:1-5',
              text: 'Seis días después, Jesús tomó a Pedro, a Jacobo y a Juan su hermano, y los llevó aparte a un monte alto; y se transfiguró delante de ellos, y resplandeció su rostro como el sol, y sus vestidos se hicieron blancos como la luz. Y he aquí les aparecieron Moisés y Elías, hablando con él. Entonces Pedro dijo a Jesús: Señor, bueno es para nosotros que estemos aquí... Mientras él aún hablaba, una nube de luz los cubrió; y he aquí una voz desde la nube, que decía: Este es mi Hijo amado, en quien tengo complacencia; a él oíd.',
            },
            {
              type: 'paragraph',
              text: 'La Transfiguración fue el momento en que Pedro vio la gloria real de Jesucristo antes de la crucifixión. Moisés y Elías — representando la ley y los profetas — se aparecieron hablando con Jesús. La voz del Padre desde la nube confirmó la identidad del Hijo. En 2 Pedro 1:16-18, el apóstol citará este evento décadas después como la base de su testimonio: "no os hemos dado a conocer el poder y la venida de nuestro Señor Jesucristo siguiendo fábulas artificiosas, sino como habiendo visto con nuestros propios ojos su majestad."',
            },
            {
              type: 'doctrine_box',
              title: 'La Transfiguración como patrón de teofanía',
              body: 'La Transfiguración es el paralelo neotestamentario de la experiencia de Moisés en el Sinaí (Éxodo 34:29-35), cuando su rostro resplandecía después de hablar con Dios. El mismo monte, la misma gloria, la misma voz divina. En la doctrina restaurada, el monte de la Transfiguración es donde se cree que Pedro, Santiago y Juan recibieron las llaves del sacerdocio de Melquisedec directamente de Moisés y Elías (DyC 63:21).',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa para ti que Pedro vio la gloria del Padre y del Hijo en el monte, y aun así negó a Cristo semanas después? ¿Cómo reconcilias las experiencias espirituales profundas con la fragilidad humana posterior?',
            },
          ],
        },
      ],
    },
  ],
}
