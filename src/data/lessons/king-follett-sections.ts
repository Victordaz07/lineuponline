import type { LessonSection } from '@/types/doctrine'

/**
 * Contenido estructurado del Sermón de King Follett (estudio guiado).
 * Basado en el discurso del Profeta José Smith (7 de abril de 1844, Nauvoo).
 */
export const kingFollettStudySections: LessonSection[] = [
  {
    id: 'contexto-y-llamado',
    title: 'Contexto y llamado',
    intro: {
      romanNumeral: 'I',
      title: 'La conferencia que cambió el rumbo doctrinal',
      paragraphs: [
        'El 7 de abril de 1844, José Smith se dirigió a decenas de miles de santos reunidos en Nauvoo. Había llovido; hacía frío. Pocas semanas antes de su martirio, el Profeta enseñó con claridad lo que casi nadie se atreve a preguntar: ¿qué clase de ser es Dios?',
      ],
    },
    topics: [
      {
        id: 'funeral-king-follett',
        title: 'Funeral del Élder King Follett',
        subtitle: 'Más que un discurso fúnebre',
        blocks: [
          {
            type: 'paragraph',
            blockId: 'ctx-p0',
            text: 'El sermón recibe su nombre popular porque se pronunció en memoria del Élder King Follett, quien murió en un accidente en marzo de 1844. José usó la ocasión para abrir doctrina profunda que prepararía a los santos para el templo y la obra redentora.',
          },
          {
            type: 'media_slot',
            kind: 'image',
            src: undefined,
            alt: '',
            caption: 'Espacio para mapa, grabado o imagen de Nauvoo (modo avión: añade archivos locales).',
            contextCard: { year: '1844', place: 'Nauvoo, Illinois', label: 'Conferencia general' },
          },
          {
            type: 'reflection',
            prompt: '¿Qué significa para ti que este discurso fuera uno de los últimos que dio el Profeta en público?',
          },
          {
            type: 'quiz',
            id: 'qf-ctx-1',
            question: {
              kind: 'true_false',
              statement: 'El Sermón de King Follett se dio en Nauvoo, Illinois.',
              correctAnswer: true,
              explanation: 'Se pronunció el 7 de abril de 1844 durante la conferencia general en Nauvoo.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'conocer-a-dios',
    title: 'Conocer a Dios',
    intro: {
      romanNumeral: 'II',
      title: 'La vida eterna es conocimiento, no mera creencia',
      paragraphs: [
        'José enseñó que si ignoramos la naturaleza de Dios, carecemos del fundamento de la vida eterna tal como la define el Salvador.',
      ],
    },
    topics: [
      {
        id: 'vida-eterna',
        title: 'Vida eterna según Juan 17:3',
        blocks: [
          {
            type: 'highlight_verse',
            reference: 'Juan 17:3',
            text: 'Esta es la vida eterna: que te conozcan a ti, el único Dios verdadero, y a Jesucristo, a quien has enviado.',
          },
          {
            type: 'paragraph',
            blockId: 'dios-p0',
            text: 'El sermón parte de una pregunta audaz: la mayor parte de la humanidad, dice el Profeta, no entiende su relación con Dios. Si no conocemos su carácter real, difícilmente podemos decir que poseemos vida eterna en el sentido pleno que enseña Jesús.',
          },
          {
            type: 'doctrine_box',
            icon: '⚡',
            title: 'Primer principio',
            body: 'Conocer la naturaleza de Dios es la base sobre la que se construyen fe, arrepentimiento y progreso — debemos saber con quién tratamos.',
          },
          {
            type: 'quiz',
            id: 'qf-dios-1',
            question: {
              kind: 'true_false',
              statement: 'Según el discurso, la vida eterna puede ser solo “durar mucho tiempo” sin conocer a Dios verdaderamente.',
              correctAnswer: false,
              explanation: 'La vida eterna implica relación y conocimiento genuino del Padre y del Hijo.',
            },
          },
          {
            type: 'note_prompts',
            prompts: [
              {
                id: 'np-dios-1',
                question: '¿Qué te motiva a querer conocer mejor a Dios esta semana?',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'naturaleza-de-dios',
    title: 'Naturaleza de Dios',
    intro: {
      romanNumeral: 'III',
      title: 'Un ser glorificado que podemos llegar a comprender',
    },
    topics: [
      {
        id: 'gran-secreto',
        title: 'Dios y el hombre: el patrón de la eternidad',
        blocks: [
          {
            type: 'leader_quote',
            name: 'José Smith',
            role: 'Profeta',
            quote: 'Dios mismo, el Padre de todos nosotros, habitó sobre una tierra, así como Jesucristo mismo lo hizo.',
          },
          {
            type: 'paragraph',
            blockId: 'nat-p0',
            text: 'El Profeta contrasta errores comunes de su época —como suponer que Dios “siempre fue Dios” en un sentido estático— con la revelación de que el progreso y la exaltación siguieron un camino que también está abierto, por gracia, a los hijos de Dios.',
          },
          {
            type: 'key_points',
            title: 'Ideas a anclar',
            points: [
              'El testimonio sellado por el Espíritu transforma la manera en que leemos las escrituras y oramos.',
              'La exaltación se describe como una escalera: grado en grado, capacidad en capacidad.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'creacion-y-elementos',
    title: 'Creación y elementos',
    intro: {
      romanNumeral: 'IV',
      title: 'Organizar, no “hacer de la nada”',
    },
    topics: [
      {
        id: 'baurau',
        title: 'Lenguaje, traducción y principios eternos',
        blocks: [
          {
            type: 'paragraph',
            blockId: 'cre-p0',
            text: 'José enseñó que términos hebreos empleados en la creación hablan de organizar y dar forma más que de aniquilar el sentido de la materia preexistente. Los elementos pueden reorganizarse pero, en su esencia pura, no tienen fin.',
          },
          {
            type: 'central_quote',
            attribution: 'Enseñanzas del sermón',
            text: 'Los principios puros de los elementos son principios que jamás pueden ser destruidos; pueden ser organizados, y reorganizados, mas no destruidos.',
          },
          {
            type: 'quiz',
            id: 'qf-cre-1',
            question: {
              kind: 'fill_blank',
              prompt: 'Según el sermón, crear en ciertos usos hebreos implica principalmente…',
              options: ['Aniquilar la materia', 'Organizar y dar forma', 'Ignorar la física'],
              correctIndex: 1,
            },
          },
        ],
      },
    ],
  },
  {
    id: 'inteligencia-y-espiritu',
    title: 'Inteligencia y espíritu',
    intro: {
      romanNumeral: 'V',
      title: 'Sin principio ni fin',
    },
    topics: [
      {
        id: 'coigual',
        title: 'Mente, espíritu y eternidad',
        blocks: [
          {
            type: 'paragraph',
            blockId: 'int-p0',
            text: 'Usando el anillo como ejemplo, José explora la lógica: lo que es inmortal en verdad no puede haber comenzado a existir de la nada. La inteligencia se describe como eterna, existiendo sobre un principio existente en sí mismo.',
          },
          {
            type: 'steps',
            title: 'Razonamiento esencial',
            steps: [
              'Si algo “inmortal” tuvo un comienzo absoluto, podría tener un fin.',
              'Los espíritus son coiguales con Dios en cuanto a eternidad, no en estación o gloria todavía.',
              'Las leyes de Dios permiten progreso y mayor capacidad para quienes las obedecen.',
            ],
          },
          {
            type: 'quiz',
            id: 'qf-int-sort',
            question: {
              kind: 'sort_items',
              items: [
                'Las leyes divinas ofrecen camino de progreso',
                'La inteligencia es eterna',
                'Dios es más inteligente y establece el orden',
              ],
              correctOrder: [1, 2, 0],
              explanation: 'Primero la premisa de eternidad, luego la posición de Dios, y después las leyes que nos elevan.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'exaltacion',
    title: 'Exaltación y progreso',
    intro: {
      romanNumeral: 'VI',
      title: 'De gracia en gracia',
    },
    topics: [
      {
        id: 'escalera',
        title: 'Subir de grado en grado',
        blocks: [
          {
            type: 'paragraph',
            blockId: 'ex-p0',
            text: 'Tener un reino propio y presentarlo al Padre, recibir de Su plenitud —estos temas conectan el ministerio del Hijo con la vocación de quienes guardan sus convenios.',
          },
          {
            type: 'reflection',
            prompt: '¿En qué área de tu vida sientes que Dios te está invitando a “subir un escalón”?',
          },
        ],
      },
    ],
  },
  {
    id: 'muertos-y-elias',
    title: 'Muertos y la obra vicaria',
    intro: {
      romanNumeral: 'VII',
      title: 'Corazones de padres e hijos',
    },
    topics: [
      {
        id: 'responsabilidad-muertos',
        title: 'Nuestra responsabilidad más urgente',
        blocks: [
          {
            type: 'paragraph',
            blockId: 'mu-p0',
            text: 'José enfatiza Hebreos y Malaquías: sin nosotros los difuntos no pueden recibir todas las bendiciones; se necesitan llaves, sellos y obra del sacerdocio en la tierra.',
          },
          {
            type: 'highlight_verse',
            reference: 'Malaquías 4:5-6',
            text: 'He aquí, yo os envío al profeta Elías… para convertir el corazón de los padres a los hijos…',
          },
          {
            type: 'note_prompts',
            prompts: [
              {
                id: 'np-muertos-1',
                question: '¿Qué nombre o generación llevarás al templo (o a tu lista de familia) esta temporada?',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'salvacion-y-pecado',
    title: 'Salvación y límites',
    intro: {
      romanNumeral: 'VIII',
      title: 'Esperanza amplia y pecado imperdonable',
    },
    topics: [
      {
        id: 'perdon-imperdonable',
        title: 'Condiciones y responsabilidad personal',
        blocks: [
          {
            type: 'paragraph',
            blockId: 'sal-p0',
            text: 'Se enseña una salvación posible para casi todas las transgresiones, salvo el pecado imperdonable en condiciones muy definidas: conocimiento pleno, luz recibida y rebeldía contra el Espíritu Santo.',
          },
          {
            type: 'quiz',
            id: 'qf-sal-1',
            question: {
              kind: 'true_false',
              statement: 'El sermón enseña que, en general, quienes no cometieron el pecado imperdonable pueden ser alcanzados por la salvación en esta vida o la venidera.',
              correctAnswer: true,
            },
          },
        ],
      },
    ],
  },
  {
    id: 'consuelo-y-testimonio',
    title: 'Consuelo y testimonio',
    intro: {
      romanNumeral: 'IX',
      title: '“Dentro de poco nos volveremos a ver”',
    },
    topics: [
      {
        id: 'gozo-tras-el-duelo',
        title: 'Testimonio del Espíritu en el duelo',
        blocks: [
          {
            type: 'paragraph',
            blockId: 'con-p0',
            text: 'José habló de padres, hijos y amigos ya en el mundo de los espíritus. El consuelo no es vago optimismo: es certeza basada en revelación y promesas de reunión.',
          },
          {
            type: 'leader_quote',
            name: 'José Smith',
            role: 'Profeta',
            quote: 'Se han ausentado tan sólo por un momento. Se hallan en el espíritu, y dentro de poco nos volveremos a ver.',
          },
          {
            type: 'note_prompts',
            prompts: [
              {
                id: 'np-fin-1',
                question: 'Escribe un mensaje breve a “tu yo del futuro” sobre lo que el sermón te recordó hoy.',
              },
            ],
          },
        ],
      },
    ],
  },
]
