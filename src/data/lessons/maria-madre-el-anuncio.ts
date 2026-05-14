import type { Lesson } from '@/types/doctrine'

export const mariaMadreElAnuncio: Lesson = {
  id: 'maria-madre-el-anuncio',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'maria-madre',
  title: 'El Anuncio',
  subtitle: 'Gabriel y el fiat que cambió la historia',
  author: 'Fuentes: Lucas 1:26-38; Mateo 1:18-25; 1 Nefi 11:13-21',
  description:
    'En un pueblo sin importancia de Galilea, el arcángel Gabriel se apareció a una joven desconocida. Su respuesta —"hágase conmigo conforme a tu palabra"— es considerada por teólogos de toda tradición cristiana como el momento más importante de la historia humana. Estudiamos la Anunciación no como mito sino como historia: un ángel, una pregunta honesta, y el fiat que abrió la puerta a la Redención.',
  level: 'INTERMEDIO',
  icon: '🕊️',
  duration: 30,
  order: 6410,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'maria-madre-la-visitacion',
  studySections: [
    {
      id: 's1',
      title: 'Nazaret y la joven María',
      intro: {
        romanNumeral: 'I',
        title: 'Una aldea sin fama y una joven sin historia',
        paragraphs: [
          'Nazaret en el siglo I era un pueblo tan insignificante que Natanael preguntó: "¿De Nazaret puede salir algo de bueno?" (Juan 1:46). Y sin embargo, fue allí donde el cielo tocó la tierra.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El contexto histórico de la Anunciación',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Anunciación ocurre en Nazaret, una aldea agrícola en la baja Galilea con una población estimada de entre 200 y 400 personas. Arqueólogos han excavado el sitio desde los años 1950 y encontrado instalaciones de almacenamiento de grano, silos, y viviendas modestas del período del Segundo Templo. No era un centro comercial ni una ciudad de importancia estratégica. Era, por todos los estándares humanos, un lugar sin historia.',
            },
            {
              type: 'paragraph',
              text: 'María era una joven "desposada" con José, un artesano de la misma aldea. El desposorio en el Judaísmo del siglo I era una etapa legalmente vinculante del matrimonio — más que un compromiso moderno, menos que la cohabitación matrimonial. Las partes estaban comprometidas ante la ley pero no vivían juntas. La edad de María no se menciona en los evangelios, pero los estudiosos de la cultura del período sitúan el desposorio típicamente entre los doce y los catorce años.',
            },
            {
              type: 'doctrine_box',
              title: 'El nombre "María" y su significado',
              body: 'El nombre griego "María" viene del hebreo "Miriam" — el mismo nombre de la hermana de Moisés. En el período del Segundo Templo, era uno de los nombres más comunes entre las mujeres judías; los papiros del período muestran que casi el 25% de las mujeres judías en Palestina se llamaban Miriam o alguna de sus variantes. Dios no eligió a una mujer con un nombre exótico. Eligió a una mujer con el nombre más común de su época y la hizo la más memorable de la historia.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: '~5 a.C.',
                  text: 'Nacimiento probable de María en Nazaret, Galilea',
                  color: 'gold',
                },
                {
                  label: '~6-4 a.C.',
                  text: 'Desposorio de María con José, carpintero de Nazaret',
                  color: 'blue',
                },
                {
                  label: '~5 a.C.',
                  text: 'La Anunciación: Gabriel se aparece a María (Lucas 1:26-38)',
                  color: 'gold',
                },
                {
                  label: '~4 a.C.',
                  text: 'Nacimiento de Jesús en Belén de Judea (Lucas 2:1-7)',
                  color: 'green',
                },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'La aparición de Gabriel',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 1:28-29',
              text: 'Y entrando el ángel en donde ella estaba, dijo: ¡Salve, muy favorecida! El Señor es contigo; bendita tú entre las mujeres. Mas ella, cuando le vio, se turbó por sus palabras, y pensaba qué salutación sería esta.',
            },
            {
              type: 'paragraph',
              text: 'El verbo griego que Lucas usa para la reacción de María es "dietarachthē" — una forma intensificada de "turbarse." No es el sobresalto superficial de quien ve algo inesperado; es una perturbación profunda, una agitación de toda la persona. María no se turbó por la aparición visual del ángel — se turbó por sus palabras. El texto dice específicamente "se turbó por sus palabras, y pensaba qué salutación sería esta."',
            },
            {
              type: 'paragraph',
              text: 'Esto revela algo importante sobre María: era una mujer que pensaba. No reaccionó con grito ni con huida. Ante algo completamente sobrenatural, su primera respuesta fue reflexión activa: ¿qué significa esto? ¿Qué clase de salutación es "muy favorecida"? La palabra griega "kecharitōmenē" — traducida como "muy favorecida" o "llena de gracia" — es un participio perfecto pasivo que implica que esta gracia fue recibida en el pasado y continúa en el presente. María había sido favorecida por Dios antes de este momento.',
            },
            {
              type: 'deep_dive',
              badge: 'ÁNGELES EN ESCRITURA',
              title: 'Gabriel: el ángel que anuncia nacimientos',
              paragraphs: [
                'Gabriel aparece por nombre solo cuatro veces en las Escrituras: dos veces en el libro de Daniel (8:16; 9:21) y dos veces en Lucas 1 (a Zacarías, v.19; y a María, v.26). En Daniel, Gabriel trae interpretaciones de visiones proféticas sobre el fin de los tiempos. En Lucas, anuncia el nacimiento de Juan el Bautista y de Jesús.',
                'Esta consistencia no es accidental: Gabriel es el mensajero de los grandes giros de la historia redentora. En Doctrina y Convenios 128:21, José Smith lo identifica con Noé, haciendo del arcángel Gabriel uno de los grandes personajes que operan en ambos lados del velo. Que Gabriel fuera enviado a María subraya la magnitud de lo que estaba por suceder: no era un anuncio ordinario sino el punto de inflexión de toda la historia.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El mensaje y la pregunta',
      intro: {
        romanNumeral: 'II',
        title: '¿Cómo será esto? — La pregunta que no era duda',
        paragraphs: [
          'Zacarías preguntó algo muy similar y fue castigado con mudez (Lucas 1:18-20). María preguntó algo parecido y no fue castigada. La diferencia no está en las palabras sino en el corazón detrás de ellas.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El anuncio del ángel',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 1:30-33',
              text: 'Entonces el ángel le dijo: María, no temas, porque has hallado gracia delante de Dios. Y ahora, concebirás en tu vientre, y darás a luz un hijo, y llamarás su nombre JESÚS. Este será grande, y será llamado Hijo del Altísimo; y el Señor Dios le dará el trono de David su padre; y reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin.',
            },
            {
              type: 'paragraph',
              text: 'El mensaje de Gabriel condensa en cuatro versículos toda la teología mesiánica de Israel. El niño se llamará Jesús (Yeshua — "el Señor salva"). Será "grande" — el mismo término usado de Juan pero sin la limitación de no beber vino (v.15). Será llamado "Hijo del Altísimo" — una designación divina directa. Recibirá el trono de David — cumplimiento de la promesa davídica (2 Samuel 7:12-16). Reinará para siempre — trascendiendo toda monarquía terrena.',
            },
            {
              type: 'key_points',
              title: 'Los cinco títulos mesiánicos en Lucas 1:31-33',
              points: [
                'Jesús — su nombre personal: "el Señor salva" (Mateo 1:21)',
                'Grande — su calidad de ser sin comparación entre los nacidos de mujer',
                'Hijo del Altísimo — su relación divina con el Padre Celestial',
                'Heredero del trono de David — cumplimiento de la promesa mesiánica de 2 Samuel 7',
                'Rey eterno — su reino que no tendrá fin, a diferencia de todos los reinos terrenales',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'La pregunta de María vs. la pregunta de Zacarías',
          blocks: [
            {
              type: 'compare_grid',
              title: 'Dos preguntas — dos corazones diferentes',
              left: {
                label: 'Zacarías (Lucas 1:18)',
                points: [
                  '"¿En qué conoceré esto?" — busca señal externa',
                  'Sacerdote mayor, anciano, experimentado en el templo',
                  'Pregunta desde el escepticismo: "porque yo soy viejo"',
                  'Resultado: mudez por nueve meses',
                  'Su pregunta era: "¿Cómo puedo estar seguro?"',
                ],
              },
              right: {
                label: 'María (Lucas 1:34)',
                points: [
                  '"¿Cómo será esto?" — busca entender el cómo',
                  'Joven, sin rango ni posición, sin experiencia espiritual previa',
                  'Pregunta desde la aceptación: "puesto que no conozco varón"',
                  'Resultado: recibe más explicación del ángel',
                  'Su pregunta era: "¿Cómo debo prepararme?"',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'La distinción teológica es crucial: Zacarías pedía prueba antes de creer. María pedía comprensión para poder obedecer. Zacarías desafiaba la promesa; María aceptaba la promesa y preguntaba por el mecanismo. Uno preguntaba desde la duda; la otra desde la fe. El ángel no castigó la honestidad de María — la honró con más información. Las preguntas honestas hechas desde el corazón que ya ha dicho sí siempre reciben respuesta.',
            },
            {
              type: 'reflection',
              prompt: 'Cuando Dios te llama a algo que parece imposible, ¿tu primera pregunta es "¿cómo puedo estar seguro de que esto es real?" (como Zacarías) o "¿cómo me preparo para hacer esto?" (como María)? ¿Qué revela esa diferencia sobre el estado de tu fe?',
            },
          ],
        },
        {
          id: 't2-3',
          title: 'La respuesta del ángel: el Espíritu Santo y el poder del Altísimo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 1:35-37',
              text: 'Respondiendo el ángel, le dijo: El Espíritu Santo vendrá sobre ti, y el poder del Altísimo te cubrirá con su sombra; por lo cual también el Santo Ser que nacerá, será llamado Hijo de Dios. Y he aquí tu parienta Elisabet, ella también ha concebido un hijo en su vejez; y este es el sexto mes para ella, la que llamaban estéril; porque nada hay imposible para Dios.',
            },
            {
              type: 'paragraph',
              text: 'El ángel no explica el mecanismo biológico — explica el agente espiritual. El Espíritu Santo "vendrá sobre" María; el poder del Altísimo la "cubrirá con su sombra." Este segundo verbo — "episkiazō" en griego — es el mismo que se usa en la Septuaginta para describir la nube de la presencia divina que cubría el Tabernáculo (Éxodo 40:35). María se convierte en el Tabernáculo viviente — el lugar donde mora la presencia de Dios.',
            },
            {
              type: 'doctrine_box',
              title: 'La concepción virginal en la teología de la Restauración',
              body: 'El Presidente Ezra Taft Benson enseñó que Jesucristo fue literalmente engendrado por el Padre Celestial, haciendo de Él el único ser nacido con un Padre inmortal y una madre mortal. Esta enseñanza, articulada también por el Presidente Brigham Young y el Élder Bruce R. McConkie, distingue la perspectiva de la Restauración de muchas tradiciones protestantes que evitan el lenguaje de paternidad literal. Jesús heredó de María la capacidad de morir; del Padre heredó el poder de resucitar.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El fiat — "Hágase conmigo"',
      intro: {
        romanNumeral: 'III',
        title: 'Lucas 1:38 — Las palabras que abrieron la Redención',
        paragraphs: [
          'Todo el plan de salvación dependía de este momento. Dios, que respeta la agencia humana, esperaba la respuesta de una joven en Nazaret.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El fiat de María',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 1:38',
              text: 'Entonces María dijo: He aquí la sierva del Señor; hágase conmigo conforme a tu palabra. Y el ángel se fue de ella.',
            },
            {
              type: 'paragraph',
              text: 'La palabra latina "fiat" — "hágase" — viene de la traducción de la Vulgata de este versículo: "fiat mihi secundum verbum tuum." Teólogos de toda la tradición cristiana han llamado a este momento el "fiat de María" — su consentimiento activo y libre a la voluntad de Dios. No es resignación pasiva; es una afirmación deliberada. El mismo verbo "fiat" fue usado por Dios en la creación: "fiat lux" — "hágase la luz" (Génesis 1:3). Con las mismas palabras que Dios creó el universo, María consintió a la nueva creación.',
            },
            {
              type: 'paragraph',
              text: 'El título que María usa para sí misma es "sierva del Señor" — en griego "doulē Kyriou" — literalmente "esclava del Señor." No es una expresión de autohumillación patológica; es el mismo título que los grandes profetas usaban: Moisés (Números 12:7), Josué (Josué 24:29), David (Salmo 89:20). Llamarse "sierva del Señor" en el vocabulario bíblico es alinearse con los mayores siervos de Dios. María sabe exactamente qué está haciendo.',
            },
            {
              type: 'central_quote',
              text: 'He aquí la sierva del Señor; hágase conmigo conforme a tu palabra.',
              attribution: 'María de Nazaret — Lucas 1:38',
            },
            {
              type: 'paragraph',
              text: 'El costo de este fiat es importante de contemplar. María sabía lo que implicaba quedar embarazada fuera del matrimonio consumado en una sociedad donde eso podía costar la vida (Deuteronomio 22:20-21). El desposorio era legalmente vinculante y una infidelidad era punible. José la podía repudiar públicamente o peor. María arriesgó su reputación, su matrimonio, y potencialmente su vida. El fiat no fue barato — fue un acto de fe que lo costó todo.',
            },
            {
              type: 'note_prompts',
              prompts: [
                {
                  id: 'p1',
                  question: '¿Qué costo personal tuvo el "sí" de María a Dios?',
                },
                {
                  id: 'p2',
                  question: '¿En qué áreas de tu vida Dios está esperando un "fiat" tuyo?',
                },
                {
                  id: 'p3',
                  question: '¿Por qué crees que Dios honró la agencia de María en lugar de simplemente actuar sin su consentimiento?',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Nephi vio esto 600 años antes',
      intro: {
        romanNumeral: 'IV',
        title: '1 Nefi 11 — La visión del árbol de la vida y la Virgen',
        paragraphs: [
          'En el hemisferio occidental, seiscientos años antes de la Anunciación, un profeta vio la misma escena en visión.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La visión de Nefi',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Nefi 11:13-15, 20-21',
              text: 'Y aconteció que vi una virgen, y era sumamente hermosa y blanca. Y sucedió que yo dije al ángel: ¿Qué significado tiene la virgen que viste? Y él me dijo: ¿Sabes tú la condescendencia de Dios? Y yo le dije: Sé que él ama a sus hijos; sin embargo, no sé el significado de todas las cosas... Y miré y vi a la virgen de nuevo, llevando a un niño en sus brazos. Y el ángel me dijo: ¡He aquí el Cordero de Dios, sí, aun el Eterno Padre!',
            },
            {
              type: 'paragraph',
              text: 'La visión de Nefi es uno de los textos más extraordinarios de toda la escritura porque describe la Anunciación y la Natividad como eventos vistos desde el futuro. Nefi ve "una virgen" antes de ver al niño — exactamente el orden de los eventos en Lucas 1-2. El ángel le pregunta a Nefi: "¿Sabes tú la condescendencia de Dios?" La palabra "condescendencia" (del latín "condescendere" — "descender juntos") se convierte en el término teológico clave del Libro de Mormón para el acto de Dios de entrar a la condición humana.',
            },
            {
              type: 'doctrine_box',
              title: 'María en el Libro de Mormón: la única mujer nombrada por nombre',
              body: 'María es la única mujer mencionada por su propio nombre en el Libro de Mormón fuera de citas del Antiguo Testamento. Su nombre aparece en 1 Nefi 11:13-21, Mosíah 3:8, y Alma 7:10. Que Dios inspirara a tres profetas del hemisferio occidental a mencionar su nombre siglos antes de su nacimiento subraya su papel singular en el plan de salvación. No es un accidente de la narrativa; es una afirmación divina de la importancia de esta mujer específica.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Nefi vio a María en visión aproximadamente 600 años antes de la Anunciación descrita en Lucas 1.',
              answer: true,
              explanation: 'Sí. La familia de Lehi salió de Jerusalén alrededor del año 600 a.C. La visión del árbol de la vida y de la virgen en 1 Nefi 11 ocurrió durante ese mismo período, aproximadamente seis siglos antes del nacimiento de Cristo.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'Lo que la Restauración añade a nuestra comprensión de María',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tradición católica honra a María con un corpus teológico extenso — la Inmaculada Concepción, la Asunción, la Intercesión — que las tradiciones protestantes generalmente rechazan. La Restauración ofrece un tercer camino: honrar profundamente a María sin elevarla a la categoría de corredentora. No es mediadora entre el hombre y Cristo, pero tampoco es una figura secundaria. Es la madre escogida antes de la fundación del mundo para llevar al Hijo de Dios.',
            },
            {
              type: 'leader_quote',
              quote: 'Ninguna mujer en la historia ha tenido una responsabilidad mayor ni ha llevado una carga más pesada que María, la madre de Jesús. Ella fue elegida antes de su nacimiento para ser la madre del Hijo de Dios. Fue elegida no por capricho divino sino por sus atributos espirituales excepcionales y su capacidad de criar al Salvador del mundo.',
              name: 'Élder Jeffrey R. Holland',
              role: 'Quórum de los Doce Apóstoles',
            },
            {
              type: 'reflection',
              prompt: 'El fiat de María — "hágase conmigo conforme a tu palabra" — es la oración de rendición más perfecta de la historia. ¿Qué aspectos de tu vida todavía no has rendido con esas palabras? ¿Qué te detiene?',
            },
          ],
        },
      ],
    },
  ],
}
