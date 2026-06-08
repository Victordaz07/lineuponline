import type { Lesson } from '@/types/doctrine'

export const mjPresidenta: Lesson = {
  id: 'mj-presidenta',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'mj-lideres',
  title: 'La Presidenta de las Mujeres Jóvenes',
  subtitle: 'Pastora de jóvenes — entre el obispado y las jóvenes',
  description:
    'La presidenta de Mujeres Jóvenes del barrio es llamada por el obispo para presidir la organización y servir como el principal puente pastoral entre el obispado y cada joven. Su autoridad es de servicio, no de administración — y su primera responsabilidad nunca es el programa: es la persona.',
  level: 'BÁSICO',
  icon: '💜',
  duration: 25,
  order: 9540,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Llamamiento — Su Origen y Su Peso',
      intro: {
        romanNumeral: 'I',
        title: 'Llamada por el Obispo, Sostenida por el Barrio',
        paragraphs: [
          'La presidenta de Mujeres Jóvenes no se postula, no es elegida por las jóvenes, ni es asignada por la estaca. Es llamada por el obispo, quien actúa bajo inspiración al extender ese llamamiento. Ese origen marca todo lo que sigue: ella responde al obispo y trabaja bajo su dirección, no de manera independiente.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Relación con el Obispo — Autoridad y Colaboración',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Manual General de la Iglesia (capítulo 11) establece que la presidenta de Mujeres Jóvenes trabaja bajo la dirección del obispo. Esto no es una formalidad burocrática — es el modelo revelado para que la organización funcione bien. La presidenta lleva al obispo información que él necesita para cumplir su responsabilidad pastoral con las jóvenes; el obispo le da dirección, recursos y respaldo espiritual para ejercer su llamamiento.',
            },
            {
              type: 'doctrine_box',
              title: 'La mayordomía sagrada sobre las jóvenes',
              body: 'El Manual General enseña que "el bienestar espiritual y temporal de cada joven" es la primera responsabilidad de la presidenta de MJ. No es el programa, no es el presupuesto, no es el calendario de actividades — es cada persona. Una presidenta que administra bien los programas pero no conoce el nombre y la situación de cada joven de su grupo ha invertido sus prioridades. Las jóvenes son la razón; el programa es el medio.',
            },
            {
              type: 'key_points',
              title: 'Lo que el llamamiento incluye',
              points: [
                'Presidir sobre la organización de Mujeres Jóvenes del barrio',
                'Servir bajo la dirección directa del obispo',
                'Recibir orientación del obispo antes de comenzar a ejercer el llamamiento',
                'Participar en el consejo de barrio como voz de las jóvenes',
                'Ser la primera responsable del bienestar espiritual y temporal de cada joven',
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 121:41–42',
              text: 'Ningún poder ni influencia se puede ni se debe mantener en virtud del sacerdocio, sino solo por persuasión, por mansedumbre y humildad, por paciencia, por benignidad y por amor sincero.',
            },
          ],
        },
        {
          id: 't2',
          title: 'La Orientación Inicial — No Comenzar Sin Ella',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Manual General instruye que el obispo o uno de sus consejeros orienta a la presidenta de MJ antes de que comience su servicio. Esta orientación no es una conversación informal de cortesía — es la transferencia formal de información pastoral: cuáles jóvenes necesitan atención especial, cuáles son las prioridades del barrio en relación con los jóvenes, cuál es el presupuesto disponible, y cuáles son las expectativas del obispado para la organización.',
            },
            {
              type: 'reflection',
              prompt: '¿Recibiste esa orientación formal cuando fuiste llamada? ¿Qué información tenías al comenzar? ¿Qué información te habría sido útil tener desde el inicio y nunca recibiste? ¿Cómo puedes asegurarte de que la próxima presidenta comience mejor equipada?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Responsabilidades Concretas en el Barrio',
      intro: {
        romanNumeral: 'II',
        title: 'De la Presidencia al Consejo de Barrio',
        paragraphs: [
          'La presidenta de MJ no solo sirve a las jóvenes — sirve en el cuerpo de liderazgo del barrio. Eso significa que sus responsabilidades se despliegan en múltiples frentes simultáneos: su propia presidencia, el consejo de barrio, la coordinación con los Hombres Jóvenes, y la supervisión de las tres clases.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Conducir la Presidencia de MJ — Una Reunión con Propósito',
          blocks: [
            {
              type: 'paragraph',
              text: 'La reunión de presidencia de MJ no es una reunión para "ponerse al día" — es un espacio de ministerio planificado. El Manual General sugiere que estas reuniones incluyan oración, revisión del bienestar de cada joven, asignación de ministros para jóvenes específicas, coordinación de enseñanza y actividades, y reporte de las consejeras sobre sus grupos asignados. Una presidenta que conduce esta reunión con agenda clara y espíritu de propósito transforma a sus consejeras en co-ministras, no en asistentes.',
            },
            {
              type: 'steps',
              title: 'Agenda sugerida para la reunión de presidencia de MJ',
              steps: [
                'Oración de apertura y un momento breve de estudio de las Escrituras o las palabras de líderes generales (5 min)',
                'Revisión de cada joven del grupo por nombre — ¿quién estuvo ausente el domingo? ¿Quién está pasando por algo difícil? (10 min)',
                'Asignación de seguimiento: quién contactará a quién esta semana, con qué propósito (5 min)',
                'Revisión de la clase o actividad próxima — ¿la enseñanza está preparada? ¿La logística está cubierta? (5 min)',
                'Revisión de asuntos pendientes del consejo de barrio o del obispado (5 min)',
                'Oración de clausura y compromiso de cada líder con su asignación de la semana (2 min)',
              ],
            },
            {
              type: 'paragraph',
              text: 'La frecuencia de la reunión de presidencia la determina la presidenta según las necesidades del barrio — puede ser semanal o quincenal. Lo que no puede variar es su propósito: siempre centrada en las personas, no en los programas.',
            },
          ],
        },
        {
          id: 't4',
          title: 'El Consejo de Barrio — La Voz de las Jóvenes',
          blocks: [
            {
              type: 'paragraph',
              text: 'La presidenta de MJ participa en el consejo de barrio. Esa participación no es ceremonial. Ella lleva al consejo información que ningún otro líder tiene: el estado real de cada joven de su grupo, sus necesidades, sus desafíos, las tendencias que observa. Sin esa información, el obispado no puede hacer su trabajo pastoral con las jóvenes de manera efectiva.',
            },
            {
              type: 'key_points',
              title: 'Qué llevar al consejo de barrio',
              points: [
                'Nombres específicos de jóvenes que necesitan atención pastoral del obispo',
                'Tendencias observadas en el grupo — no solo casos individuales',
                'Solicitudes de recursos o apoyo que la presidenta no puede resolver por sí sola',
                'Actualizaciones sobre actividades o programas relevantes para el barrio',
                'Preguntas sobre jóvenes que el obispado puede ayudar a responder',
              ],
            },
          ],
        },
        {
          id: 't5',
          title: 'Coordinar con Hombres Jóvenes y Supervisar las Clases',
          blocks: [
            {
              type: 'paragraph',
              text: 'La presidenta de MJ coordina con la presidencia de Hombres Jóvenes para actividades conjuntas. Esta coordinación es práctica y tiene límites: las actividades mixtas requieren aprobación del obispado, deben tener propósito claro, y no deben comprometer la identidad y el ministerio específico de cada organización. El objetivo no es fusionar los grupos — es que colaboren cuando la colaboración sirve a los jóvenes.',
            },
            {
              type: 'paragraph',
              text: 'La presidenta también supervisa las tres clases de MJ: Edificadoras de Fe (12–13 años), Mensajeras de Esperanza (14–15 años), y Guardianas de Luz (16–17 años). Cada clase tiene una maestra asignada. La presidenta revisa que la enseñanza sea coherente con el programa, aprueba actividades, y asegura que ninguna clase sea "olvidada" por el liderazgo.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Ministerio Personal a Cada Joven',
      intro: {
        romanNumeral: 'III',
        title: 'Conocer a Cada Una por Nombre',
        paragraphs: [
          'El Manual General es explícito: el bienestar espiritual y temporal de cada joven es la primera responsabilidad de la presidenta. Eso solo es posible si la presidenta conoce a cada joven — no solo su nombre en el directorio, sino su situación, sus luchas, sus esperanzas.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'El Seguimiento a Jóvenes Inactivas y en Transición',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las jóvenes que dejan de asistir raramente lo anuncian. Simplemente dejan de aparecer. La presidenta que espera que una joven regrese por su cuenta ha malentendido su responsabilidad. El modelo del Buen Pastor es el modelo correcto: ir a buscar, no solo esperar. Eso significa un contacto directo — una llamada, un mensaje, una visita — cuando una joven lleva dos domingos ausente, no cuando lleva dos meses.',
            },
            {
              type: 'key_points',
              title: 'Situaciones que requieren atención especial',
              points: [
                'Jóvenes que se ausentan dos domingos consecutivos sin causa conocida',
                'Jóvenes que se van a la universidad o a trabajar fuera del barrio',
                'Jóvenes en hogares donde los padres no son miembros activos',
                'Jóvenes que atraviesan crisis familiares, escolares, o de salud mental',
                'Jóvenes recién mudadas al barrio que aún no tienen conexión con el grupo',
              ],
            },
            {
              type: 'paragraph',
              text: 'Cuando una joven se va a la universidad o a trabajar a otro lugar, la presidenta puede coordinar con el liderazgo del barrio receptor para que sea recibida. Una llamada del nuevo barrio la primera semana de su llegada puede ser la diferencia entre que se conecte con la Iglesia en ese lugar o que se pierda en la transición.',
            },
          ],
        },
        {
          id: 't7',
          title: 'Ver a Cada Joven Como Dios la Ve',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tentación de toda presidenta es ver el grupo como un conjunto — "mis jóvenes" — en lugar de ver a cada persona individual. El Señor no administra rebaños: llama a cada oveja por su nombre. Una presidenta que aspira a ese estándar necesita cultivar el hábito de preguntarse, por cada joven individualmente: ¿Qué está viviendo esta semana? ¿Qué necesita de mí que no me está pidiendo? ¿Cuándo fue la última vez que hablé con ella sobre algo que no fuera el programa?',
            },
            {
              type: 'leader_quote',
              quote: 'No te preocupes tanto por el programa. El programa es el andamio. La joven es el edificio. Cuando el edificio está en pie, el andamio ya ha cumplido su propósito.',
              name: 'Presidenta General de Mujeres Jóvenes',
              role: 'Orientación para presidentas de barrio',
            },
            {
              type: 'reflection',
              prompt: '¿Puedes describir en detalle la situación personal de cada joven de tu grupo — no solo su nombre, sino lo que está viviendo ahora mismo? ¿Qué haría falta para que pudieras hacerlo? ¿Qué cambiarías en tu calendario de esta semana para acercarte más a ese conocimiento?',
            },
          ],
        },
      ],
    },
  ],
}
