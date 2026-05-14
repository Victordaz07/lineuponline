import type { Lesson } from '@/types/doctrine'

export const hermanoJaredLaTorre: Lesson = {
  id: 'hermano-jared-la-torre',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'hermano-jared',
  title: 'La Torre',
  subtitle: 'Babel y el origen del pueblo jaredita',
  author: 'Fuentes: Génesis 11:1-9; Éter 1:33-43; Éter 2:1-4',
  description:
    'En los llanos de Senaar se levantó una torre cuyo objetivo era llegar al cielo. Dios confundió los idiomas. La dispersión fue universal — pero para una familia, la confusión fue evitada por la oración de un hermano fiel. El hermano de Jared, cuyo nombre fue revelado a José Smith como Mahonri Moriancumer, intercedió ante el Señor y obtuvo una promesa que llevó a un pueblo entero a una tierra prometida al otro lado del mundo.',
  level: 'AVANZADO',
  icon: '🏰',
  duration: 30,
  order: 7210,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'hermano-jared-el-viaje',
  studySections: [
    {
      id: 's1',
      title: 'La Torre de Babel y la dispersión de las naciones',
      intro: {
        romanNumeral: 'I',
        title: 'Génesis 11:1-9 — El Orgullo que Dividió a la Humanidad',
        paragraphs: [
          'Toda la tierra tenía un mismo idioma. Los hombres se asentaron en la llanura de Senaar y tomaron una decisión que cambiaría la historia de la humanidad: construir una torre cuya cúspide llegara al cielo.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El contexto de Babel — ¿Qué era la torre?',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Génesis 11:4',
              text: 'Y dijeron: Vamos, edifiquémonos una ciudad y una torre, cuya cúspide llegue al cielo; y hagámonos un nombre, por si fuéremos esparcidos sobre la faz de toda la tierra.',
            },
            {
              type: 'paragraph',
              text: 'La Torre de Babel corresponde probablemente a un zigurat mesopotámico — una estructura piramidal escalonada con un templo en la cima, diseñada para ser la residencia terrenal de una deidad. Las excavaciones arqueológicas en la región de Mesopotamia han encontrado restos de construcciones de este tipo que datan del tercer milenio antes de Cristo, consistente con el período de Babel en la cronología bíblica. No era únicamente un logro de ingeniería — era un proyecto religioso y político de unificación bajo el orgullo humano.',
            },
            {
              type: 'paragraph',
              text: 'La motivación declarada en el texto es reveladora: "hagámonos un nombre." En el lenguaje bíblico, hacerse un nombre es una usurpación del papel divino — es Dios quien da nombre (como dio nombre a Abram, Jacob, y a Israel). Los constructores de Babel buscaban autoperpetuarse, autoengrandecerse, y resistir la dispersión que Dios había mandado desde el inicio (Génesis 9:1). La torre no era contra Dios — era en lugar de Dios.',
            },
            {
              type: 'doctrine_box',
              title: 'Babel en la teología de la Restauración',
              body: 'El libro de Éter comienza precisamente con Babel — conectando el inicio del registro jaredita con el relato del Génesis. Moroni, al abreviar el libro de Éter, escoge este punto de entrada deliberadamente: el pueblo jaredita nació del juicio de Babel. La confusión de lenguas que fue castigo para los soberbios se convirtió en oportunidad para los humildes. Cada juicio divino contiene dentro de sí una semilla de misericordia para quienes están preparados para recibirla.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'La confusión de lenguas como acto de misericordia y juicio',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Génesis 11:7-9',
              text: 'Ahora pues, descendamos, y confundamos allí su lengua, para que ninguno entienda el habla de su compañero. Así los esparció Jehová desde allí sobre la faz de toda la tierra, y dejaron de edificar la ciudad. Por esto fue llamado el nombre de ella Babel, porque allí confundió Jehová el lenguaje de toda la tierra, y desde allí los esparció sobre la faz de toda la tierra.',
            },
            {
              type: 'paragraph',
              text: 'La confusión de lenguas en Babel fue simultáneamente un juicio y una salvaguarda. Como juicio: detuvo el proyecto de unificación bajo la arrogancia humana. Como salvaguarda: impidió que la humanidad, en su estado caído, consolidara el poder de una manera que hubiera acelerado su autodestrucción. El texto de Génesis sugiere que Dios intervino no por capricho sino porque reconoció el potencial destructivo de una humanidad sin límites autoimpuestos.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Llanura de Senaar', text: 'La humanidad poscataclis­mica se asienta en Mesopotamia y decide no dispersarse según el mandato divino (Génesis 11:1-2)', color: 'gold' },
                { label: 'La torre', text: 'Inician la construcción de una ciudad con una torre cuya cúspide llegue al cielo (Génesis 11:3-4)', color: 'red' },
                { label: 'La intervención divina', text: 'Dios desciende, observa el proyecto, y confunde los idiomas de los constructores (Génesis 11:5-7)', color: 'blue' },
                { label: 'La dispersión', text: 'Los pueblos son esparcidos sobre la faz de toda la tierra — incluyendo el grupo de Jared que viaja al nuevo mundo (Éter 1:33)', color: 'green' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El hermano de Jared intercede',
      intro: {
        romanNumeral: 'II',
        title: 'Éter 1:33-43 — La Oración que Desvió el Juicio',
        paragraphs: [
          'En medio de la confusión universal, un hombre oró. No pidió que el juicio fuera detenido para todos — pidió misericordia para su familia, sus amigos, y su hermano Jared.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Mahonri Moriancumer — el nombre del hermano de Jared',
          blocks: [
            {
              type: 'paragraph',
              text: 'El libro de Éter nunca menciona el nombre del hermano de Jared — siempre lo llama solo por su relación con Jared. Sin embargo, la historia de la Iglesia registra que el profeta José Smith, al tener al infante de un amigo sobre sus rodillas durante una bendición patriarcal, pronunció el nombre: Mahonri Moriancumer. La madre del niño lo registró: ese era el nombre del hermano de Jared. Es un nombre semítico compuesto que algunos estudiosos han analizado en relación con raíces del Cercano Oriente antiguo.',
            },
            {
              type: 'paragraph',
              text: 'Que el texto del Libro de Mormón evite el nombre es probablemente intencional por parte de Moroni: el énfasis del texto no está en la persona sino en el principio. Lo que importa no es quién era Mahonri Moriancumer sino qué hizo y cómo lo hizo. El anonimato literario en la narrativa de Éter empuja al lector a ver el principio universal más que la biografía personal.',
            },
            {
              type: 'highlight_verse',
              reference: 'Éter 1:34-35',
              text: 'Y el hermano de Jared (siendo un hombre grande y poderoso, y muy estimado ante el Señor) le rogó al Señor que no confundiera la lengua del hermano de Jared; y el Señor tuvo compasión de Jared; por ende, no confundió la lengua de Jared; y Jared y su hermano no fueron confundidos.',
            },
            {
              type: 'paragraph',
              text: 'La descripción del hermano de Jared como "un hombre grande y poderoso, y muy estimado ante el Señor" establece su carácter antes de que la narrativa haya comenzado. No es un desconocido al que se le otorga el favor divino por azar — es un hombre que ya tenía una relación establecida con el Señor. La misericordia divina sobre Jared no fue espontánea; fue la respuesta a la intercesión de un hombre que había cultivado acceso a Dios.',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'La petición ampliada: los amigos y la familia',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Éter 1:36-37',
              text: 'Y lo hizo Jared; y cuando hubo orado al Señor, el Señor tuvo compasión de sus amigos y de su familia también, y no los confundió. Y el hermano de Jared dijo también a Jared: Si el Señor nos guiará fuera de la tierra, ¿querrás ir con nosotros? Y yo sé que el Señor hará esto por nosotros.',
            },
            {
              type: 'paragraph',
              text: 'La intercesión del hermano de Jared se expandió en círculos: primero por su hermano Jared, luego por los amigos de Jared, y luego por los propios amigos del hermano de Jared. Este patrón de intercesión ampliada — comenzar con los más cercanos y expandir el radio de misericordia — es un modelo de oración altruista. La oración del hermano de Jared no fue egoísta ni limitada a su familia inmediata. Buscó la protección del mayor número posible de personas.',
            },
            {
              type: 'reflection',
              prompt: '¿Por quién estás intercediendo regularmente en oración? ¿Tu círculo de intercesión se está expandiendo con el tiempo, o permanece limitado a los que ya conoces íntimamente? El hermano de Jared enseña que la gran fe intercede más allá del círculo familiar.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La promesa de una tierra prometida',
      intro: {
        romanNumeral: 'III',
        title: 'Éter 1:38-43 — "Iré Delante de ti a una Tierra Escogida"',
        paragraphs: [
          'El Señor no solo evitó la confusión de lenguas para esta familia — les prometió guiarlos a la tierra más escogida de la faz de la tierra.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La tierra prometida — la más escogida de la faz de la tierra',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Éter 1:42-43',
              text: 'Y he aquí, iré delante de ti hacia una tierra que es escogida sobre todas las tierras de la tierra, la cual bendeciré para siempre con tus descendientes. Y haré de ti una gran nación, y no habrá en toda la faz de la tierra nadie tan grande como el pueblo que bendeciré con este propósito. Y así lo haré, porque por mucho tiempo este clamor ha llegado ante mí a causa de la iniquidad de tu hermano; por lo tanto no sufriré que este clamor llegue más ante mí.',
            },
            {
              type: 'paragraph',
              text: 'La promesa al hermano de Jared es extraordinaria por su alcance: la tierra más escogida de la faz de la tierra — que la tradición de la Restauración identifica con el continente americano. Éter 2:9-11 añade que esta tierra es una tierra de libertad que será guardada de todas las otras naciones siempre que sus habitantes sirvan al Dios del país. La promesa no es solo geográfica — es condicional y moral.',
            },
            {
              type: 'doctrine_box',
              title: 'El continente americano como tierra prometida — doctrina de la Restauración',
              body: 'Éter 2:9-12 establece que la tierra prometida jaredita — el continente americano — está bajo condiciones específicas: prosperará mientras sus habitantes sirvan al Dios del país, que es Jesucristo. Si no lo hacen, serán "barridos cuando la plenitud de Su ira llegue sobre ellos." Esta doctrina de responsabilidad territorial ante Dios fue desarrollada por el profeta José Smith y es fundamental para entender la misión de América en el plan divino de los últimos días. La tierra tiene un convenio; los que la habitan heredan ese convenio.',
            },
            {
              type: 'key_points',
              title: 'Las cinco promesas del Señor al hermano de Jared en Éter 1:38-43',
              points: [
                'Guía personal: "Iré delante de ti" — presencia divina durante el viaje',
                'La tierra más escogida de la faz de la tierra — una heredad territorial sin igual',
                'Bendición eterna sobre sus descendientes — una promesa que trasciende generaciones',
                'Una gran nación — poder político y demográfico que no tendría comparación',
                'Ninguna nación tan grande como esta en la tierra — supremacía providencial',
              ],
            },
          ],
        },
        {
          id: 't3-2',
          title: 'Los animales y las abejas — la escala de la migración',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Éter 2:2-3',
              text: 'Y aconteció que Jared y su hermano, y sus familias, y también los amigos de Jared y de su hermano y sus familias, fueron al desierto con sus rebaños y con sus manadas, que habían preparado para ellos, y también sus semillas de toda especie, que habían preparado para ellos; y ellos fueron al desierto.',
            },
            {
              type: 'paragraph',
              text: 'La migración jaredita fue una operación logística de una escala sin precedentes en la narrativa del Libro de Mormón. Llevaron consigo rebaños y manadas — todos los animales domésticos que necesitarían para establecer una civilización. Éter 2:3 menciona específicamente "deseret" — las abejas — como parte de lo que transportaron. "Deseret" es la palabra jaredita para "abeja," y el hecho de que se incluyan en la lista sugiere una migración planificada con gran cuidado, pensando no solo en el viaje sino en la civilización que construirían al llegar.',
            },
            {
              type: 'deep_dive',
              badge: 'Contexto lingüístico',
              title: '"Deseret" — la abeja jaredita y el legado de Utah',
              paragraphs: [
                'La palabra "deseret" aparece solo una vez en el Libro de Mormón (Éter 2:3) y se traduce como "abeja de miel." Es notable que el profeta José Smith, al traducir el Libro de Mormón, encontró este término — y décadas después, cuando los santos pioneros establecieron su comunidad en el valle del Gran Lago Salado, eligieron el nombre "Estado de Deseret" para su territorio. La abeja — símbolo de industriosidad, cooperación, y productividad comunitaria — se convirtió en el emblema del pueblo que se identificaba con el legado de los primeros migrantes guiados por Dios al continente americano.',
                'El hecho de que los jareditas llevaran abejas consigo habla de una planificación civilizacional a largo plazo. No llevaban solo animales para comer o labrar — llevaban una especie de valor agrícola y económico que requería conocimiento especializado para transportar y establecer. Los jareditas no huían de Babel; construían hacia un futuro concebido y prometido por Dios.',
              ],
            },
            {
              type: 'compare_grid',
              title: 'Babel y la dispersión jaredita — ¿Juicio o misericordia?',
              left: {
                label: 'Para las naciones de Babel',
                points: [
                  'Confusión de lenguas como juicio al orgullo',
                  'Dispersión forzada sobre toda la tierra',
                  'Pérdida de unidad y comunicación',
                  'Ninguna guía divina prometida para el viaje',
                  'El resultado fue la fragmentación de la humanidad',
                ],
              },
              right: {
                label: 'Para los jareditas',
                points: [
                  'Preservación de su lengua por misericordia divina',
                  'Guía activa del Señor en nube (Éter 2:5)',
                  'Comunidad unida de familias y amigos',
                  'Promesa de la tierra más escogida de la tierra',
                  'El resultado fue una gran nación con heredad divina',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Babel como tipo de la Restauración',
      intro: {
        romanNumeral: 'IV',
        title: 'Los "Llamados de Babel" y la Reunión de los Últimos Días',
        paragraphs: [
          'La historia de los jareditas llamados de Babel tiene un eco directo en la doctrina de la Restauración: el llamado divino a salir de la confusión espiritual del mundo y ser guiados a una tierra de promesa.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Babel como tipo de la confusión religiosa del mundo',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los Padres Fundadores de la Restauración vieron en la Torre de Babel un tipo de la confusión religiosa de su época. El profeta José Smith describió el mundo religioso del siglo XIX como un estado de confusión donde las denominaciones disputaban sobre doctrina y nadie tenía autoridad divina. La Restauración fue presentada como el llamado de Dios a salir de esa Babel espiritual — no de una ciudad específica sino de un estado de confusión doctrinal y falta de autoridad sacerdotal.',
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 1:30',
              text: 'Y también han tomado conocimiento de mi evangelio que vine por medio de mi siervo José Smith, hijo, a quien llamé de los oscuros y lenguaraces; sí, de entre los humildes de la tierra le levantaré a ti: para cubrirte con mi poder celestial.',
            },
            {
              type: 'paragraph',
              text: 'El paralelo entre el hermano de Jared y José Smith es significativo: ambos fueron llamados en medio de una confusión de voces y doctrinas. Ambos recibieron instrucción directa de Dios. Ambos fueron enviados con sus comunidades hacia una tierra prometida en el continente americano. La migración jaredita y la migración pionera no son solo eventos históricos paralelos — son tipos y sombras del mismo patrón redentor.',
            },
            {
              type: 'leader_quote',
              quote: 'La Restauración del Evangelio no fue la creación de algo nuevo — fue el regreso de lo que siempre había sido verdadero. Como los jareditas que preservaron su lengua cuando el mundo fue confundido, los santos de los últimos días han recibido la palabra pura de Dios cuando el mundo religioso estaba en confusión.',
              name: 'Élder Russell M. Nelson',
              role: 'Presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'Lo que el hermano de Jared nos enseña sobre la oración intercesora',
          blocks: [
            {
              type: 'paragraph',
              text: 'La oración del hermano de Jared ante el juicio de Babel es un modelo de oración intercesora en tiempo de crisis. No oró primero por sí mismo; oró por su hermano. Luego por los amigos de su hermano. Luego por los propios amigos suyos. El radio de la intercesión se fue ampliando desde el centro hacia afuera. Esto es amor en acción: comenzar con lo más cercano y expandir la compasión.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Cómo describe Éter 1:34 el carácter del hermano de Jared antes de comenzar la narrativa del viaje? ¿Qué sugiere esa descripción sobre la relación previa del personaje con Dios?' },
                { id: 'p2', question: '¿Cuál es la diferencia entre la dispersión de las naciones desde Babel y el "llamamiento" de los jareditas fuera de Babel? ¿Qué convirtió el mismo evento en juicio para unos y en misericordia para otros?' },
                { id: 'p3', question: '¿De qué manera el llamado de los jareditas desde Babel ilustra el principio de la Restauración de ser "llamados de los oscuros y lenguaraces"?' },
              ],
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'El nombre del hermano de Jared aparece explícitamente en el texto del libro de Éter en el Libro de Mormón.',
              answer: false,
              explanation: 'El libro de Éter nunca menciona el nombre del hermano de Jared por nombre. El nombre Mahonri Moriancumer fue revelado por el profeta José Smith durante una bendición patriarcal, pero no aparece en el texto canónico del libro de Éter.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'La palabra jaredita "deseret," que aparece en Éter 2:3, significa _____ de miel.',
              answer: 'abeja',
              explanation: 'Éter 2:3 menciona que los jareditas llevaron consigo "deseret," que se traduce como "abeja de miel." Este término es el origen del nombre "Estado de Deseret" que los primeros santos del siglo XIX dieron a su territorio en Utah.',
            },
          ],
        },
      ],
    },
  ],
}
