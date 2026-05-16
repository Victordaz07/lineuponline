import type { Lesson } from '@/types/doctrine'

export const deboraYLaRestauracion: Lesson = {
  id: 'debora-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'debora',
  title: 'Débora y la Restauración',
  subtitle: 'El liderazgo femenino en las escrituras',
  author: 'Fuentes: Jueces 4–5; DyC 25; Joel 2:28; Lucas 2:36; 1 Corintios 11:5; historia de la Restauración',
  description: 'Débora no es una anomalía histórica — es parte de un patrón bíblico de mujeres llamadas a ejercer autoridad espiritual en momentos críticos. Este patrón conecta directamente con la doctrina de la Restauración sobre el don profético, la Sociedad de Socorro, y el ministerio de las mujeres en la obra de Dios.',
  level: 'AVANZADO',
  icon: '✨',
  duration: 25,
  order: 6314,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'debora-y-jael',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'Las profetisas de la Escritura',
      intro: {
        romanNumeral: 'I',
        title: 'Un Patrón que No Es Excepción',
        paragraphs: [
          'Débora no es la única profetisa de la Escritura. Es parte de una línea que incluye a Miriam en el Éxodo, a Hulda en el período de la monarquía, a Ana en el Templo, y a las hijas que profetizarían en el Pentecostés según la promesa de Joel. La pregunta no es si las mujeres pueden ser profetisas — la Escritura responde afirmativamente. La pregunta es qué significa eso.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La línea de las profetisas bíblicas',
          blocks: [
            {
              type: 'timeline',
              items: [
                { label: 'Miriam — c. 1250 a.C.', text: 'Hermana de Moisés, llamada explícitamente "profetisa" (n\'biah) en Éxodo 15:20. Lideró el cántico de victoria después del cruce del Mar Rojo. Considerada por Miqueas 6:4 como líder enviada por Dios junto con Moisés y Aarón.', ref: 'Éxodo 15:20; Miqueas 6:4', color: 'gold' },
                { label: 'Débora — c. 1125 a.C.', text: 'Profetisa y jueza de Israel (Jueces 4:4). Única mujer que gobernó toda la nación. Convocó al ejército, emitió la orden de batalla y compuso el cántico de victoria.', ref: 'Jueces 4:4-5', color: 'blue' },
                { label: 'Hulda — c. 621 a.C.', text: 'Profetisa consultada por el sumo sacerdote y el secretario del rey Josías. Autenticó el libro de la Ley encontrado en el Templo. Su profecía fue la base de la reforma deuteronómica más significativa de la historia de Judá.', ref: '2 Reyes 22:14-20', color: 'green' },
                { label: 'Ana — c. 4 a.C.', text: 'Profetisa en el Templo, viuda desde su juventud, que vivía en el Templo sirviéndole "con ayunos y oraciones noche y día" (Lucas 2:37). Reconoció al niño Jesús como el Mesías y habló de él a todos los que esperaban la redención de Jerusalén.', ref: 'Lucas 2:36-38', color: 'red' },
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'Joel 2:28',
              text: 'Y después de esto derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas; vuestros ancianos soñarán sueños, y vuestros jóvenes verán visiones.',
            },
            {
              type: 'paragraph',
              text: 'La promesa de Joel 2:28 fue citada por el apóstol Pedro en el día de Pentecostés (Hechos 2:17) como la explicación de lo que estaban presenciando. Pedro aplicó la promesa de Joel — que incluye explícitamente "vuestras hijas" — al derramamiento del Espíritu sobre la Iglesia apostólica. La Restauración enseña que el mismo Espíritu que se derramó en Pentecostés ha sido restaurado. La promesa de Joel sigue siendo la descripción del alcance del don profético.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Priscila — la maestra que instruyó a Apolos',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Nuevo Testamento añade a esta línea el caso de Priscila (o Prisca), quien junto con su esposo Aquila instruyó al elocuente Apolos "más exactamente el camino de Dios" (Hechos 18:26). La mención de Priscila casi siempre antes que su esposo en los textos paulinos (Romanos 16:3; 1 Corintios 16:19; 2 Timoteo 4:19) sugiere que era la figura de mayor autoridad o reconocimiento de los dos. Pablo la llama "colaboradora en Cristo Jesús" — el mismo término que usa para Timoteo y Tito.',
            },
            {
              type: 'deep_dive',
              badge: 'NUEVO TESTAMENTO',
              title: 'Las profetisas en la Iglesia apostólica',
              paragraphs: [
                'El capítulo 11 de 1 Corintios es uno de los más debatidos del Nuevo Testamento, pero contiene una afirmación que con frecuencia se pasa por alto: Pablo asume que las mujeres oran y profetizan en los servicios de la Iglesia (1 Corintios 11:5). La instrucción sobre el velo no es prohibición de profetizar — es instrucción sobre cómo hacerlo dentro del contexto cultural. La premisa de la instrucción es que las mujeres están profetizando.',
                'Felipe el evangelista tenía cuatro hijas que profetizaban (Hechos 21:9). El apóstol Juan en el Apocalipsis usa el término "profetisa" (aunque negativamente) para Jezabel en Tiatira (Apocalipsis 2:20) — lo que implica que el título era reconocible y que las mujeres podían ostentarlo legítimamente en la comunidad.',
                'El patrón que emerge de la lectura del Nuevo Testamento completo es coherente con el del Antiguo: el don de profecía — recibir y transmitir mensajes divinos — no está limitado por género en ningún texto bíblico que lo trate directamente. Las restricciones que aparecen en algunos textos paulinos han sido interpretadas de maneras muy diversas y están en debate hermenéutico activo en todas las tradiciones.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Restauración y las mujeres llamadas',
      intro: {
        romanNumeral: 'II',
        title: 'El Patrón de Débora en la Historia de la Restauración',
        paragraphs: [
          'La Restauración del Evangelio en el siglo XIX incluyó desde su inicio el llamamiento de mujeres a funciones que tienen paralelos directos con el liderazgo de Débora, Miriam y Hulda.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Emma Smith — la Elegida Dama (DyC 25)',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 25:3, 7-8',
              text: 'Porque, he aquí, te digo que estás siendo escogida y llamada para hacer una obra grande y preciosa... Y además te ordeno que hagas una selección de himnos sagrados, según te sea dado, los cuales serán para tu Iglesia para el bien del alma, para el regocijo del corazón y para el albedrío del Espíritu.',
            },
            {
              type: 'paragraph',
              text: 'La revelación a Emma Smith en julio de 1830 (DyC 25) es extraordinaria por múltiples razones. La llama "mi hija" y "una elegida dama" — el título que la epístola de Juan usa para la Iglesia misma (2 Juan 1). Le encomienda una tarea litúrgica de primera magnitud: seleccionar los himnos de la Iglesia restaurada. Los himnos en la tradición cristiana no son decoración — son teología cantada, formación espiritual de toda una generación de Santos.',
            },
            {
              type: 'paragraph',
              text: 'El paralelo con el cántico de Débora es directo: ambas mujeres usaron la forma poética-musical como expresión de su llamamiento profético. Débora compuso el cántico de victoria en Jueces 5. Emma compiló y seleccionó los himnos de la Restauración. En ambos casos, la forma musical no era secundaria — era el instrumento del ministerio.',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'La Sociedad de Socorro — "para el beneficio de la Iglesia"',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando el profeta José Smith organizó la Sociedad de Socorro en 1842, hizo una declaración que conecta directamente con el precedente de Débora: "No las organizo en el patrón del mundo, sino en el patrón del sacerdocio." La Sociedad de Socorro no fue concebida como una organización auxiliar o de servicio — fue concebida como una organización de mujeres con función espiritual propia, análoga a la organización del sacerdocio.',
            },
            {
              type: 'leader_quote',
              quote: 'Las mujeres de esta Iglesia tienen una función que va más allá del servicio doméstico — son ministras del Evangelio, portadoras del Espíritu, y su influencia profética se extiende a sus familias, sus comunidades y la Iglesia completa.',
              name: 'José Smith',
              role: 'Profeta de la Restauración — discurso ante la Sociedad de Socorro, 1842',
            },
            {
              type: 'paragraph',
              text: 'La Sociedad de Socorro tiene desde su fundación características que la distinguen de otras organizaciones de mujeres: preside su propia presidencia (no está bajo la dirección del liderazgo masculino local), tiene funciones pastorales hacia sus miembros, y ha tenido históricamente su propio magisterio teológico. Eliza R. Snow, segunda presidenta general, escribió la doctrina de la Madre Celestial en un himno que se ha canonizado de facto en la himnología SUD.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: '"Para este tiempo" — el llamamiento que persiste',
      intro: {
        romanNumeral: 'III',
        title: 'Lo que el Precedente de Débora Significa Hoy',
        paragraphs: [
          'La pregunta que el liderazgo de Débora plantea no es solo histórica: ¿a quién llama Dios para liderar en momentos críticos? La respuesta que el texto bíblico da — y que la Restauración confirma — es que el llamamiento no tiene fronteras de género.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La doctrina del don profético sin fronteras',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 2:17-18',
              text: 'Y en los postreros días, dice Dios, derramaré de mi Espíritu sobre toda carne, y vuestros hijos y vuestras hijas profetizarán; vuestros jóvenes verán visiones, y vuestros ancianos soñarán sueños; y de cierto sobre mis siervos y sobre mis siervas en aquellos días derramaré de mi Espíritu, y profetizarán.',
            },
            {
              type: 'paragraph',
              text: 'Pedro cita a Joel en Pentecostés porque lo que estaba ocurriendo era exactamente lo que Joel había prometido: el Espíritu de Dios derramado sobre toda carne sin distinción de género, edad o posición social. "Vuestros hijos y vuestras hijas profetizarán" — no en ausencia de hombres disponibles, sino como parte del derramamiento completo del don espiritual en los últimos días.',
            },
            {
              type: 'doctrine_box',
              title: 'La revelación personal como forma de profecía',
              body: 'La Restauración enseña que el don de profecía tiene múltiples formas. En su expresión más amplia, incluye la revelación personal que cada miembro puede recibir para sí mismo, su familia y su llamamiento. El Espíritu Santo es dado a todos los miembros — no solo a los que tienen ordenaciones específicas — y opera a través de impresiones, sueños, testimonios y conocimiento espiritual. En este sentido, el precedente de Débora como profetisa no es un caso extraordinario sino la descripción de lo que el Señor ha prometido a toda persona bautizada.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'Mujeres que lideran hoy — el patrón continúa',
          blocks: [
            {
              type: 'paragraph',
              text: 'En la Iglesia de Jesucristo de los Santos de los Últimos Días de hoy, las mujeres presiden las organizaciones de las Auxiliares de la Iglesia, reciben revelación para sus llamamientos, administran las ordenanzas del templo, enseñan en todos los contextos de la Iglesia, y participan en los consejos de liderazgo a todos los niveles. El patrón de Débora — llamamiento específico, función espiritual reconocida, ejercicio de autoridad dentro de un marco de alianza — está presente.',
            },
            {
              type: 'compare_grid',
              title: 'El paralelo entre Débora y el ministerio femenino en la Restauración',
              left: {
                label: 'Débora en Jueces 4-5',
                points: [
                  'Profetisa — portavoz del mensaje de Dios a Israel',
                  'Jueza — autoridad civil y espiritual reconocida por toda la nación',
                  'Convocó al ejército y estuvo presente en la batalla',
                  'Compuso el cántico de celebración — teología en forma poética',
                  '"Madre en Israel" — protectora y nutricia espiritual de un pueblo',
                ],
              },
              right: {
                label: 'Mujeres en la Restauración',
                points: [
                  'Revelación personal por el Espíritu Santo — promesa universal a los bautizados',
                  'Presidencias de Auxiliares — autoridad espiritual en su jurisdicción',
                  'Participación en consejos de liderazgo y discernimiento colectivo',
                  'Himnos, escritura, enseñanza — teología en forma accesible',
                  'Sociedad de Socorro — organización de cuidado y ministerio a toda la Iglesia',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: '"Para este tiempo" — reflexión personal',
      intro: {
        romanNumeral: 'IV',
        title: 'El Llamamiento que Te Incluye',
        paragraphs: [
          'El estudio de Débora no es solo historia bíblica — es un espejo. La pregunta que su historia plantea sobre el llamamiento divino no tiene respuesta completa hasta que la aplicas a ti mismo.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El llamamiento universal al ministerio profético',
          blocks: [
            {
              type: 'paragraph',
              text: 'El profeta Moisés expresó el deseo de que todos en Israel fueran profetas: "¡Ojalá todo el pueblo de Jehová fuese profeta, y que Jehová pusiera su espíritu sobre ellos!" (Números 11:29). Este deseo de Moisés es la promesa de Joel — y la Restauración enseña que ha comenzado a cumplirse. El don del Espíritu Santo dado en la confirmación no es solo un privilegio personal — es un equipamiento para el ministerio.',
            },
            {
              type: 'paragraph',
              text: 'Débora no esperó que alguien le diera permiso para ejercer el don que Dios le había dado. Juzgaba bajo la palmera porque era la jueza. Profetizaba porque era la portavoz de Dios. Acompañó al ejército porque el momento lo requería. La pregunta que su historia formula a cada creyente es: ¿estás ejerciendo plenamente los dones que Dios te ha dado, o estás esperando que alguien te dé permiso para hacer lo que ya eres?',
            },
            {
              type: 'leader_quote',
              quote: 'Les prometo que a medida que busquen con diligencia las bendiciones del templo, aumentará su capacidad de recibir revelación personal. Sus habilidades de liderazgo se ampliarán y su influencia aumentará — para el bien de sus familias y de todos los que tengan contacto con ustedes.',
              name: 'Russell M. Nelson',
              role: 'Presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'La pregunta que cierra el ciclo',
          blocks: [
            {
              type: 'paragraph',
              text: 'El estudio de Débora completo — la jueza, la profetisa, la guerrera, Jael y la conexión con la Restauración — plantea una pregunta que no puede responderse académicamente. Solo puede responderse viviéndola: ¿cuál es tu "palmera de Débora"? ¿El lugar donde ejerces la autoridad espiritual que Dios te ha dado? ¿El momento en que dices "este es el día" y actúas en fe? ¿El cántico que compones o cantas para celebrar lo que Dios ha hecho?',
            },
            {
              type: 'reflection',
              prompt: '¿Qué aspecto del liderazgo de Débora — como jueza, como profetisa, como guerrera o como compositora — resuena más con tus propios dones? ¿Qué podría significar ejercer ese don plenamente en tu contexto actual?',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Hay mujeres en tu vida — madre, abuela, maestra, líder de la Iglesia — que hayan ejercido el tipo de autoridad espiritual que el texto bíblico atribuye a Débora? ¿Cómo han influido en tu fe?' },
                { id: 'p2', question: 'La promesa de Joel 2:28 dice que vuestras hijas profetizarán. ¿Cómo se ha cumplido esta promesa en tu experiencia — en ti misma o en mujeres que conoces?' },
                { id: 'p3', question: 'Débora se levantó "como madre en Israel" en un momento en que los caminos estaban abandonados y las aldeas en silencio (Jueces 5:6-7). ¿Cuál es el "silencio" o el "abandono" en tu contexto que requiere que alguien se levante como madre o padre espiritual?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
