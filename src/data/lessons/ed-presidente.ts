import type { Lesson } from '@/types/doctrine'

export const edPresidente: Lesson = {
  id: 'ed-presidente',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'ed-lideres',
  title: 'El Presidente de la Escuela Dominical',
  subtitle: 'Director del aprendizaje doctrinal del barrio',
  description:
    'El presidente de la Escuela Dominical es responsable de que los adultos del barrio tengan acceso a enseñanza doctrinal de calidad cada semana. Bajo el modelo Centrado en el Hogar y Apoyado por la Iglesia, el presidente de la ED garantiza que el currículo Ven, Sígueme sea enseñado efectivamente en las clases de adultos, que los maestros estén capacitados para enseñar por el Espíritu, y que el quinto domingo sea aprovechado para fortalecer a toda la congregación.',
  level: 'BÁSICO',
  icon: '📖',
  duration: 25,
  order: 9570,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Llamamiento',
      intro: {
        romanNumeral: 'I',
        title: 'Responsable de la Enseñanza Doctrinal de los Adultos',
        paragraphs: [
          'El presidente de la Escuela Dominical no es el administrador de las clases del segundo bloque dominical. Es el responsable de que los adultos del barrio — desde los recién bautizados hasta los miembros de toda la vida — reciban enseñanza doctrinal de calidad que profundice su fe, fortalezca sus hogares y los ayude a vivir el evangelio con más profundidad.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Escuela Dominical en el Modelo Centrado en el Hogar',
          blocks: [
            {
              type: 'paragraph',
              text: 'Desde 2019, la Iglesia implementó el modelo Centrado en el Hogar y Apoyado por la Iglesia. Esto significa que el estudio principal del evangelio ocurre en el hogar, y que la Escuela Dominical apoya y enriquece ese estudio — no lo reemplaza. Para el presidente de la ED, esto tiene una implicación práctica inmediata: las clases del domingo no deben limitarse a "repasar la lectura" de la semana. Deben profundizar, aplicar, y crear conversación que lleve a los miembros a volver a sus hogares con más preguntas, más motivación y más conexión con las escrituras.',
            },
            {
              type: 'doctrine_box',
              title: 'La Escuela Dominical en el modelo Centrado en el Hogar',
              body: 'Doctrina y Convenios 88:118 invita al pueblo del Señor a "buscar diligentemente y enseñar el uno al otro palabras de sabiduría." La Escuela Dominical no es un servicio que la Iglesia ofrece a miembros pasivos — es una comunidad de discípulos que se enseñan mutuamente. El presidente de la ED es quien crea las condiciones para que esa comunidad florezca cada semana de 25 minutos. Las clases que fracasan generalmente no fracasan por falta de doctrina — fracasan por falta de conversación genuina.',
            },
            {
              type: 'key_points',
              title: 'Lo que distingue a la ED en el nuevo modelo',
              points: [
                'El estudio en el hogar es primero; la clase del domingo profundiza lo que el miembro ya leyó durante la semana',
                'El maestro de ED facilita una conversación doctrinal, no dicta una conferencia',
                'Ven, Sígueme es el currículo unificado — el mismo capítulo que los adultos estudian en casa es el que se trata en clase',
                'Los 25 minutos son suficientes cuando hay enfoque: una doctrina, una aplicación, una invitación',
                'El hogar y el domingo forman un ciclo continuo de aprendizaje — no dos eventos separados',
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'La Presidencia de ED y su Relación con el Obispado',
          blocks: [
            {
              type: 'paragraph',
              text: 'El presidente de la Escuela Dominical reporta al obispado y participa en el consejo de barrio. El Manual General (Capítulo 13) establece esta relación de coordinación directa. El obispo es responsable del bienestar espiritual de todos los miembros del barrio — el presidente de la ED es su aliado en lo que se refiere a la enseñanza doctrinal de los adultos. Esta relación debe ser activa, no solo formal.',
            },
            {
              type: 'paragraph',
              text: 'Una de las responsabilidades más concretas de esta relación es la coordinación del quinto domingo. Cuando un mes tiene cinco domingos, el obispado diseña la reunión del quinto domingo de acuerdo con las necesidades del barrio, y la presidencia de la ED es la organización que coordina esa reunión para los adultos. El presidente de la ED debe conocer con anticipación el tema que el obispo quiere tratar en el quinto domingo para planificar adecuadamente.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Responsabilidades Clave',
      intro: {
        romanNumeral: 'II',
        title: 'Seleccionar, Capacitar y Apoyar Maestros',
        paragraphs: [
          'La responsabilidad más importante del presidente de la Escuela Dominical es asegurarse de que cada clase de adultos tenga un maestro que enseñe por el Espíritu. Seleccionar bien, capacitar con intención y apoyar continuamente a los maestros es el trabajo central del presidente de la ED.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Selección y Capacitación de Maestros',
          blocks: [
            {
              type: 'paragraph',
              text: 'Un buen maestro de Escuela Dominical no es necesariamente el miembro más conocedor de las escrituras — es el que puede facilitar una conversación que invite al Espíritu. La selección de maestros debe incluir consideración de su capacidad de escuchar, de formular preguntas que inviten a la reflexión, y de su disposición a preparar con anticipación. El presidente recomienda al obispado a los candidatos a maestros; el obispado los llama.',
            },
            {
              type: 'steps',
              title: 'Proceso de selección y capacitación de maestros de ED',
              steps: [
                'Identificar candidatos a maestros en el barrio: miembros que leen las escrituras regularmente, que escuchan bien y que tienen disposición de servicio',
                'Presentar los candidatos al obispado con una recomendación razonada; el obispado extiende el llamamiento formal',
                'Reunirse con el nuevo maestro antes de que comience a enseñar: revisar el currículo Ven, Sígueme, el formato de 25 minutos y los principios de enseñanza por el Espíritu',
                'Compartir el recurso de capacitación oficial "Enseñar al Estilo del Salvador" disponible en la biblioteca del evangelio',
                'Programar una visita a la clase del nuevo maestro en su primer mes para observar y apoyar',
                'Reunirse con todos los maestros de ED al menos una vez por trimestre para capacitación continua',
              ],
            },
            {
              type: 'paragraph',
              text: 'La capacitación no termina con el primer mes. Un maestro de Escuela Dominical que enseña año tras año sin retroalimentación ni desarrollo tiende a volverse rutinario. El presidente de la ED que invierte en el desarrollo continuo de sus maestros está invirtiendo en el aprendizaje espiritual de todos los adultos del barrio.',
            },
          ],
        },
        {
          id: 't4',
          title: 'El Formato de 25 Minutos',
          blocks: [
            {
              type: 'paragraph',
              text: 'El formato actual de la Escuela Dominical asigna 25 minutos para la clase de adultos dentro del bloque de reuniones del domingo. Este tiempo es suficiente — si la clase tiene estructura y enfoque. El error más común de los maestros nuevos es intentar cubrir todo el capítulo de Ven, Sígueme en 25 minutos. El resultado es una clase superficial que no profundiza en ningún aspecto.',
            },
            {
              type: 'key_points',
              title: 'Principios para una clase de ED de 25 minutos efectiva',
              points: [
                'Una doctrina central — elegir el principio más importante del capítulo, no todos',
                'Una pregunta de apertura que involucre a los miembros desde los primeros minutos de clase',
                'Tiempo de discusión: al menos 12-15 de los 25 minutos deben ser conversación, no monólogo del maestro',
                'Una escritura o cita de profeta que ancle la doctrina del día en la revelación',
                'Una invitación de aplicación al final: ¿qué hará específicamente el miembro esta semana a partir de esta verdad?',
                'Cerrar a tiempo — el maestro que respeta el tiempo de 25 minutos comunica que respeta a los miembros',
              ],
            },
            {
              type: 'compare_grid',
              title: 'Clase de ED efectiva vs. clase que no produce discipulado',
              rows: [
                { label: 'Estructura', a: 'Una doctrina, discusión, aplicación concreta', b: 'Repaso del capítulo punto por punto hasta que se acaba el tiempo' },
                { label: 'Rol del maestro', a: 'Facilitador que formula preguntas y escucha activamente', b: 'Conferenciante que explica mientras los miembros escuchan pasivamente' },
                { label: 'Participación', a: 'La mayoría de los miembros presentes interviene al menos una vez', b: 'Solo 2-3 personas participan; el resto observa' },
                { label: 'Cierre', a: 'Invitación específica de aplicación para la semana', b: 'El maestro resume lo que se discutió y da la hora' },
                { label: 'Espíritu', a: 'Los miembros salen con algo en qué pensar y qué hacer', b: 'Los miembros salen habiendo cumplido con asistir' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Maestro como Ministerio',
      intro: {
        romanNumeral: 'III',
        title: 'Enseñar por el Espíritu, No Solo Compartir Información',
        paragraphs: [
          'El presidente de la Escuela Dominical no es solo un administrador de clases — es un guardián de la calidad espiritual de la enseñanza. Su responsabilidad más profunda es asegurarse de que sus maestros no solo enseñen contenido doctrinal, sino que enseñen de la manera que el Espíritu Santo puede confirmar y ampliar.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Visitas a Clases para Apoyar, No para Inspeccionar',
          blocks: [
            {
              type: 'paragraph',
              text: 'Una de las herramientas más poderosas del presidente de la ED es visitar las clases de sus maestros. Esta visita no es una inspección — es un acto de apoyo pastoral. Un maestro que sabe que su presidente lo visita ocasionalmente para ayudarlo, no para evaluarlo, tiende a prepararse mejor y a sentirse acompañado en su llamamiento.',
            },
            {
              type: 'steps',
              title: 'Cómo hacer una visita de apoyo a una clase de ED',
              steps: [
                'Avisar al maestro con anticipación que planea visitar ese domingo — la visita sorpresa genera ansiedad, no aprendizaje',
                'Sentarse como un miembro de la clase, no en un lugar prominente que comunique supervisión',
                'Participar genuinamente en la discusión de clase cuando sea apropiado',
                'Observar: ¿hay conversación real? ¿el maestro escucha o solo habla? ¿hay evidencia del Espíritu?',
                'Después de la clase, buscar un momento privado con el maestro para compartir una observación positiva específica',
                'Si hay algo que mejorar, compartirlo como un recurso, no como una crítica: "vi algo que podría ayudarte — ¿podemos hablar esta semana?"',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'El presidente de la Escuela Dominical que visita clases regularmente no solo apoya a sus maestros — está aprendiendo qué necesita el barrio doctrinalmente. Esa información es invaluable para la planificación del quinto domingo y para las conversaciones con el obispado.',
              name: 'Manual General de la Iglesia',
              role: 'Capítulo 13 — Escuela Dominical',
            },
            {
              type: 'reflection',
              prompt: '¿Ha visitado el presidente de la ED cada una de las clases de adultos del barrio al menos una vez en el último trimestre? ¿Qué impide que eso ocurra? ¿Qué cambiaría si ocurriera regularmente?',
            },
          ],
        },
      ],
    },
  ],
}
