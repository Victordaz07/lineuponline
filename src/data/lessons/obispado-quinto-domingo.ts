import type { Lesson } from '@/types/doctrine'

export const obispadoQuintoDomingo: Lesson = {
  id: 'obispado-quinto-domingo',
  moduleId: 'capacitacion-liderazgo',
  title: 'El Quinto Domingo — 30 de Agosto',
  subtitle: 'Reunión especial para jóvenes, padres y líderes',
  description:
    'El domingo 30 de agosto de 2026 es el último domingo antes del inicio del nuevo programa juvenil. La Iglesia ha diseñado un evento especial para ese día: una reunión única para jóvenes, padres y líderes con videos de instrucción provistos por la Sede. Esta lección prepara al obispado para organizar ese evento con excelencia.',
  level: 'BÁSICO',
  icon: '📅',
  duration: 15,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Qué Es el Quinto Domingo del 30 de Agosto',
      intro: {
        romanNumeral: 'I',
        title: 'Una Reunión Diseñada por la Iglesia',
        paragraphs: [
          'El 30 de agosto de 2026 es un quinto domingo — un domingo sin el patrón habitual de las semanas regulares. La Iglesia ha elegido ese día para realizar una reunión especial de transición antes del inicio oficial del nuevo programa el 6 de septiembre. No es un evento opcional: es la "rampa de lanzamiento" del cambio.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El propósito del evento del 30 de agosto',
          blocks: [
            {
              type: 'paragraph',
              text: 'El quinto domingo del 30 de agosto tiene tres propósitos simultáneos: (1) celebrar el maratón de lectura de la PFJ que comenzó el 3 de mayo, (2) preparar a jóvenes, padres y líderes para el nuevo horario que inicia el 6 de septiembre, y (3) crear un momento de comunidad donde las familias vean al obispado comprometido con el éxito de este cambio. La Iglesia provee los videos de instrucción — el obispado provee el contexto, la logística y el espíritu.',
            },
            {
              type: 'key_points',
              title: 'Quiénes asisten al evento del 30 de agosto',
              points: [
                'Jóvenes 12-17 — los protagonistas del nuevo programa',
                'Padres y familias de los jóvenes — para que entiendan qué estudiarán sus hijos',
                'Líderes de jóvenes varones y mujeres jóvenes — maestros y consejeros de quórum',
                'El obispado completo — como anfitriones y como testigos del momento',
                'Idealmente, miembros interesados del barrio que quieran comprender el cambio',
              ],
            },
            {
              type: 'paragraph',
              text: 'A diferencia de los quintos domingos habituales donde cada organización decide su tema, el 30 de agosto tiene un tema único para todo el barrio. La Reunión Sacramental ocurre como siempre; es la segunda hora la que se convierte en un evento conjunto para las familias con jóvenes.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Lo que la Iglesia provee para ese día',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'El material de la Sede: videos de instrucción',
              body: 'La Iglesia ha preparado videos de instrucción específicos para el evento del 30 de agosto. Estos videos están diseñados para explicar el nuevo programa a las familias, presentar la guía PFJ y su propósito, e inspirar a los jóvenes antes del inicio oficial. El obispado no necesita crear contenido de instrucción propio — los videos de la Sede cubren ese rol. La responsabilidad del obispado es garantizar que los videos se puedan presentar con calidad técnica adecuada.',
            },
            {
              type: 'paragraph',
              text: 'Los videos estarán disponibles a través de los canales oficiales de la Iglesia para que el barrio los descargue con anticipación. Es importante que el obispado no dependa de la conexión a internet del edificio el día del evento — se recomienda descargar el material previamente y tenerlo listo en un dispositivo local.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Logística que el Obispado Debe Organizar',
      intro: {
        romanNumeral: 'II',
        title: 'La Logística Es Parte del Mensaje',
        paragraphs: [
          'Un evento bien organizado comunica que el obispado toma el cambio en serio. Un evento técnicamente deficiente — proyector que no funciona, sillas insuficientes, horario confuso — socava la credibilidad del mensaje antes de que comience. La logística no es secundaria: es parte de la preparación espiritual.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Pasos de preparación logística para el 30 de agosto',
          blocks: [
            {
              type: 'steps',
              title: 'Lista de preparación del obispado',
              steps: [
                'Confirmar con la presidencia de misión de estaca o el obispo de estaca que el material de videos está disponible — normalmente 2-3 semanas antes del evento',
                'Descargar los videos de instrucción de la Iglesia en un dispositivo confiable; probar audio y video con el equipo del salón al menos una semana antes',
                'Determinar el espacio del evento: ¿se usa el salón cultural completo, o el capilla con proyector? Considerar que asistirán familias completas — incluyendo niños pequeños',
                'Coordinar con los maestros de jóvenes y líderes que les corresponde facilitar la discusión después de los videos — darles la guía de discusión con anticipación',
                'Preparar suficientes ejemplares físicos de la guía PFJ para repartir a los jóvenes que aún no tengan — este es un buen momento para la distribución final',
                'Designar a alguien del obispado (o a un joven líder) para hacer una bienvenida breve antes de los videos — 2-3 minutos máximo',
                'Comunicar el evento desde la Reunión Sacramental los dos domingos anteriores (17 y 24 de agosto) y enviar recordatorio por los canales del barrio',
              ],
            },
            {
              type: 'paragraph',
              text: 'El evento no necesita ser elaborado — necesita ser eficiente y con espíritu. Los padres que trabajaron toda la semana llegan a ese domingo con tiempo limitado. El obispado que respeta ese tiempo y conduce el evento con puntualidad y propósito comunica que valoran a las familias que sirven.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Cómo estructurar el tiempo de la segunda hora',
          blocks: [
            {
              type: 'compare_grid',
              title: 'Estructura sugerida de la segunda hora del 30 de agosto',
              left: {
                label: 'Tiempo',
                points: [
                  '5 minutos',
                  '20-25 minutos',
                  '15-20 minutos',
                  '5-10 minutos',
                ],
              },
              right: {
                label: 'Actividad',
                points: [
                  'Bienvenida del obispo o consejero — propósito del evento, espíritu de la reunión',
                  'Presentación de los videos de instrucción de la Iglesia',
                  'Discusión guiada por los maestros de jóvenes (con familias presentes o separados por grupos)',
                  'Distribución de guías PFJ a quienes no tengan; instrucciones para el inicio del 6 de septiembre',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'La discusión posterior a los videos es crucial. Los videos informan; la conversación transforma. Los maestros de jóvenes que facilitan la discusión deben estar preparados con 3-4 preguntas concretas para los jóvenes y 2-3 para los padres. El obispado debe revisar esas preguntas con anticipación para asegurar que reflejen el espíritu del cambio.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Cómo Involucrar a las Familias',
      intro: {
        romanNumeral: 'III',
        title: 'Los Padres Son Parte del Programa',
        paragraphs: [
          'El nuevo programa juvenil no puede tener éxito sin el apoyo de los hogares. Los jóvenes estudian la PFJ una hora a la semana en el barrio — pero viven en sus hogares el resto del tiempo. Los padres que entienden el propósito del programa pueden reforzarlo en casa. Los padres que no entienden qué está estudiando su hijo no pueden acompañarlo.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El papel de los padres en el nuevo programa',
          blocks: [
            {
              type: 'paragraph',
              text: 'El 30 de agosto es la mejor oportunidad del año para explicar a los padres qué están estudiando sus hijos. Cuando los padres ven los videos de instrucción junto a sus hijos y participan en la discusión, están recibiendo el mismo mensaje que los jóvenes. Eso crea un vocabulario común en el hogar — el padre puede preguntar "¿qué capítulo están estudiando este mes?" y la conversación tiene un punto de referencia compartido.',
            },
            {
              type: 'doctrine_box',
              title: 'La familia como refuerzo del estudio dominical',
              body: 'La guía PFJ fue diseñada para ser discutida en familia, no solo en la Iglesia. Cada capítulo incluye principios que los jóvenes pueden aplicar en su vida cotidiana — y los padres que conocen el capítulo del mes pueden crear oportunidades naturales de conversación. El evento del 30 de agosto no solo prepara al barrio: prepara a los hogares. El obispado que comunica esto a los padres convierte una reunión logística en una experiencia de liderazgo familiar.',
            },
            {
              type: 'key_points',
              title: 'Mensajes específicos para los padres en el evento del 30 de agosto',
              points: [
                'Su hijo estudiará 1 capítulo de la PFJ por mes — pueden leer el mismo capítulo en casa para acompañarlo',
                'La guía PFJ está disponible gratuitamente en la aplicación de la Iglesia y en formato físico',
                'El nuevo horario no requiere que los padres preparen material — solo que estén interesados en lo que estudian sus hijos',
                'Las preguntas de aplicación al final de cada capítulo de la PFJ son perfectas para conversar en familia',
                'El barrio necesita el apoyo del hogar para que el programa florezca — este es un proyecto de familia, no solo de la Iglesia',
              ],
            },
          ],
        },
        {
          id: 't6',
          title: 'El obispado como ejemplo de interés en los jóvenes',
          blocks: [
            {
              type: 'paragraph',
              text: 'El momento en que el obispo se pone de pie en la reunión del 30 de agosto y dice — con palabras propias, no solo con datos — por qué cree que este programa beneficiará a los jóvenes del barrio, algo cambia en el salón. Los padres ven que el hombre responsable del bienestar espiritual de sus hijos ha leído la guía, la conoce, y cree en ella. Eso vale más que cualquier presentación técnicamente perfecta.',
            },
            {
              type: 'reflection',
              prompt: '¿Ha leído el obispo y cada uno de sus consejeros la guía PFJ completa? Si no, ¿cuál es el plan para hacerlo antes del 30 de agosto? ¿Qué podría decir cada miembro del obispado desde su experiencia personal con la guía que no podría decir con solo haberla hojeado?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Preguntas Frecuentes del Evento',
      intro: {
        romanNumeral: 'IV',
        title: 'Preguntas que Surgirán ese Día',
        paragraphs: [
          'En todo evento de transición, los miembros tendrán preguntas. Algunas vendrán de confusión genuina; otras, de resistencia al cambio. El obispado que ha anticipado las preguntas más comunes puede responder con calma, precisión y espíritu.',
        ],
      },
      topics: [
        {
          id: 't7',
          title: 'Respuestas preparadas para las preguntas del 30 de agosto',
          blocks: [
            {
              type: 'key_points',
              title: 'Preguntas frecuentes y respuestas breves',
              points: [
                '¿Los niños menores de 12 también cambian? No — los cambios son solo para jóvenes 12-17 y adultos 18+. La Primaria continúa igual.',
                '¿Qué pasa si un joven llega tarde y se pierde la Escuela Dominical? Llega a su clase de PFJ — los 25 minutos están claramente separados.',
                '¿La guía PFJ tiene costo? No. Está disponible gratuitamente en la app de la Iglesia. El barrio también distribuirá ejemplares físicos.',
                '¿Qué hacen los adultos durante los 25 minutos de los jóvenes? Los adultos 18+ tienen su propia clase: Cuórum de Élderes o Sociedad de Socorro, estudiando mensajes de Conferencia General.',
                '¿Empezamos el 6 de septiembre aunque no todos hayan leído la PFJ? Sí — el maratón de lectura fue la preparación ideal, pero el programa inicia independientemente.',
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                {
                  id: 'np1',
                  question: '¿Qué pregunta espera que sea la más difícil de responder en el evento del 30 de agosto? ¿Cómo la respondería con espíritu y precisión?',
                },
                {
                  id: 'np2',
                  question: '¿Hay algún padre o familia específica en el barrio que podría tener resistencia al cambio? ¿Cómo podría el obispado acercarse a ellos antes del evento?',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
