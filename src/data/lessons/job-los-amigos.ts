import type { Lesson } from '@/types/doctrine'

export const jobLosAmigos: Lesson = {
  id: 'job-los-amigos',
  moduleId: 'personajes-escrituras',
  title: 'La Teología Incorrecta',
  subtitle: 'Cuando la doctrina correcta se aplica mal',
  description: 'Los tres amigos de Job — Elifaz, Bildad y Zofar — no eran herejes. Eran teólogos competentes que aplicaron su teología al caso equivocado. Al final del libro, Dios los corrige: "No hablaron de mí lo recto, como mi siervo Job." El cuarto amigo, Eliú, ofrece un argumento diferente.',
  level: 'AVANZADO',
  icon: '🗣️',
  duration: 30,
  order: 4512,
  status: 'PUBLISHED',
  submoduleGroup: 'job',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Argumento Central de los Tres Amigos',
      intro: {
        romanNumeral: 'I',
        title: 'Sufrimiento = Castigo — La Ecuación que Dios Rechazó',
        paragraphs: [
          'Elifaz, Bildad y Zofar son presentados como sabios respetables, no como villanos. Su error no es la maldad sino la rigidez: aplican un principio verdadero de manera incorrecta a un caso concreto.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La teología de la retribución proporcional',
          blocks: [
            {
              type: 'paragraph',
              text: 'El argumento central de los tres amigos puede formularse con precisión silogística: (1) Dios es justo. (2) Los justos prosperan y los impíos sufren. (3) Job sufre. (4) Por tanto, Job ha pecado. Esta lógica no es inventada — está basada en Deuteronomio 28, en los Salmos sapienciales (Sal 1, 37, 73) y en una tradición teológica sólida del Antiguo Testamento. El problema es que es incompleta: no da cuenta del sufrimiento de los inocentes, de las pruebas, del crecimiento, ni del misterio divino.',
            },
            {
              type: 'key_points',
              title: 'El argumento compartido de Elifaz, Bildad y Zofar',
              points: [
                'Dios siempre recompensa al justo y castiga al impío en esta vida',
                'El sufrimiento de Job es evidencia de pecado oculto o no reconocido',
                'La solución es que Job confiese y se arrepienta',
                'Job al negarlo demuestra orgullo, que es en sí mismo otro pecado',
                'La misericordia de Dios lo restaurará si Job se humilla',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Una Doctrina Verdadera Mal Aplicada',
              body: 'Lo perturbador del caso de los amigos de Job es que su teología no era falsa en términos generales. El Deuteronomio sí enseña que la obediencia trae bendición y la desobediencia trae consecuencias. Los Salmos sapienciales sí afirman que el justo es protegido. El error no es la doctrina en abstracto — es su aplicación rígida a un individuo específico sin tomar en cuenta las excepciones, los misterios, y los límites del conocimiento humano. Dios al final les dice que Job habló "lo recto" y ellos no.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los Tres Ciclos de Discurso',
      intro: {
        romanNumeral: 'II',
        title: 'Job 4-27 — La Estructura Poética del Debate',
        paragraphs: [
          'Los discursos de los amigos y las respuestas de Job forman tres ciclos completos de debate. La estructura es deliberada: en cada ciclo las posiciones se vuelven más extremas.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Elifaz — el argumento de la visión y la experiencia',
          blocks: [
            {
              type: 'paragraph',
              text: 'Elifaz es el más suave de los tres (al menos al principio) y el más sofisticado. En Job 4-5 basa su argumento en una visión nocturna que recibió: "¿Puede el hombre ser más justo que Dios?" (4:17). En el tercer ciclo (Job 22), sin embargo, Elifaz inventa pecados específicos que Job nunca cometió: "Quitaste las prendas a los desnudos... No diste de beber al cansado..." (22:6-9). Cuando su argumento no puede sostenerse con principios generales, inventa hechos.',
            },
            {
              type: 'paragraph',
              text: 'Bildad apela a la tradición y la historia (Job 8, 18, 25): "Pregunta ahora a las generaciones pasadas... ¿No te enseñarán ellos?" Su argumento es que la sabiduría colectiva confirma: los impíos perecen. Zofar es el más agresivo: en Job 11 le dice directamente a Job que Dios le está castigando menos de lo que merece. "¿Sabías tú que Dios te ha pasado por alto una parte de tu pecado?" (11:6, énfasis en algunas traducciones).',
            },
            {
              type: 'compare_grid',
              title: 'Los tres amigos y sus argumentos',
              left: {
                title: 'Amigo / Énfasis',
                items: [
                  'Elifaz — Visión y experiencia religiosa personal',
                  'Bildad — Tradición y autoridad de los antepasados',
                  'Zofar — Argumento moral directo y severo',
                ],
              },
              right: {
                title: 'Progresión',
                items: [
                  'Comienza suave, termina inventando pecados de Job (Job 22)',
                  'Cada ciclo es más corto y más afilado',
                  'El más severo desde el inicio — poca paciencia con Job',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Eliú — El Cuarto Amigo',
      intro: {
        romanNumeral: 'III',
        title: 'Job 32-37 — Un Argumento Diferente',
        paragraphs: [
          'Eliú aparece de la nada en Job 32 — no ha sido mencionado antes. Es joven y estaba esperando respetuosamente. Ahora que los tres amigos han callado, él habla con un argumento distinto.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El sufrimiento como refinamiento, no como castigo',
          blocks: [
            {
              type: 'paragraph',
              text: 'El argumento de Eliú (Job 32-37) es más sofisticado que el de los tres amigos porque no insiste en que Job pecó: en cambio, propone que el sufrimiento puede ser educativo o formativo — un medio para que Dios hable al hombre y lo salve de la destrucción. En Job 33:19-22, describe cómo Dios habla mediante el sufrimiento y el ángel mediador que puede interceder. Esto lo acerca más a la verdad del libro.',
            },
            {
              type: 'highlight_verse',
              reference: 'Job 33:14,16',
              text: 'Sin embargo, de una o de otra manera habla Dios; pero el hombre no lo entiende... Entonces revela al oído de los hombres, y les señala su consejo.',
            },
            {
              type: 'doctrine_box',
              title: '¿Es Eliú Correcto?',
              body: 'El texto es ambiguo sobre Eliú. Al final del libro (Job 42), Dios reprende a Elifaz, Bildad y Zofar — pero no menciona a Eliú. Algunos comentaristas lo interpretan como aprobación tácita; otros argumentan que Eliú también se equivoca porque sigue asumiendo que el sufrimiento de Job tiene una función correctiva que Job no comprende. En cualquier caso, su argumento sobre el sufrimiento como medio de revelación divina (no solo castigo) es un paso adelante en la teología del libro.',
            },
            {
              type: 'key_points',
              title: 'La distinción de Eliú (Job 33)',
              points: [
                'El sufrimiento puede ser un medio para que Dios hable al hombre',
                'No afirma que Job haya cometido pecados específicos',
                'Introduce la idea del ángel mediador que puede interceder (33:23-24)',
                'Invita a Job a escuchar a Dios en lugar de seguir protestando',
                'Prepara el terreno para la teofanía — Dios habla desde el torbellino en Job 38',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Condena Divina de los Amigos',
      intro: {
        romanNumeral: 'IV',
        title: 'Job 42:7-9 — Dios Dice que Estaban Equivocados',
        paragraphs: [
          'El veredicto de Dios sobre los amigos de Job es uno de los momentos más importantes del libro: sus palabras son condenadas explícitamente.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Por qué Job habló "lo recto" y los amigos no',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Job 42:7',
              text: 'Y aconteció que después que habló Jehová estas palabras a Job, Jehová dijo a Elifaz temanita: Mi ira se encendió contra ti y tus dos compañeros; porque no habéis hablado de mí lo recto, como mi siervo Job.',
            },
            {
              type: 'paragraph',
              text: 'Esta declaración es desconcertante a primera vista: ¿no protestó Job contra Dios durante treinta y ocho capítulos? ¿No acusó a Dios de silencio, de abandonarlo, de tratarlo injustamente? Sin embargo, Dios dice que Job habló "lo recto." La clave está en que Job habló con Dios — protestó directamente ante Dios, le exigió una respuesta, se negó a aceptar explicaciones que sabía que no eran verdaderas. Los amigos hablaron de Dios en términos abstractos, defendiendo una teología que sabían que no encajaba con la realidad que tenían delante.',
            },
            {
              type: 'central_quote',
              text: 'Los amigos de Job cometieron el error de defender a Dios con argumentos que Dios mismo rechazó.',
              attribution: 'Observación teológica clásica sobre Job 42:7',
            },
            {
              type: 'reflection',
              prompt: '¿Has aplicado alguna vez una doctrina correcta al caso equivocado, como los amigos de Job? ¿Cómo equilibramos los principios doctrinales con la complejidad de las experiencias individuales?',
            },
            {
              type: 'leader_quote',
              quote: 'Hay momentos en que la única respuesta honesta al sufrimiento de otro es el silencio y la presencia. No siempre tenemos que explicar a Dios, ni al que sufre, ni a nosotros mismos.',
              name: 'Dieter F. Uchtdorf',
              role: 'Apóstol',
            },
          ],
        },
      ],
    },
  ],
}
