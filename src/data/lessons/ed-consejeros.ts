import type { Lesson } from '@/types/doctrine'

export const edConsejeros: Lesson = {
  id: 'ed-consejeros',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'ed-lideres',
  title: 'Los Consejeros de la Escuela Dominical',
  subtitle: 'Apoyo a los maestros y coordinación de clases',
  description:
    'Los consejeros de la Escuela Dominical son el puente entre el presidente y los maestros. Su función principal es visitar clases periódicamente para apoyar — no inspeccionar — y ayudar al presidente a que cada maestro de adultos cuente con los recursos, la retroalimentación y el aliento que necesita. También coordinan el quinto domingo junto al presidente. Esta lección describe cómo ejercer este llamamiento con presencia pastoral y propósito doctrinal.',
  level: 'BÁSICO',
  icon: '🤝',
  duration: 25,
  order: 9571,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Función de Apoyo',
      intro: {
        romanNumeral: 'I',
        title: 'Presencia que Habilita, No que Supervisa',
        paragraphs: [
          'Un consejero de Escuela Dominical que entiende su llamamiento no va a las clases a evaluar ni a reportar fallas al presidente. Va a apoyar, a conocer, a ofrecer recursos. La diferencia entre esas dos mentalidades determina si los maestros del barrio sienten el llamamiento como una carga solitaria o como un ministerio acompañado.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Rol del Consejero en Barrios de Distintos Tamaños',
          blocks: [
            {
              type: 'paragraph',
              text: 'En barrios grandes, la presidencia de la Escuela Dominical puede tener múltiples clases de adultos simultáneas — diferentes grupos de Ven, Sígueme o clases organizadas por idioma, necesidad o edad. En esos barrios, los consejeros pueden tener asignadas clases específicas para supervisar y apoyar, distribuyendo la carga de seguimiento que el presidente no puede ejercer solo. En barrios pequeños con solo una clase de adultos, los consejeros apoyan al presidente con mayor flexibilidad de roles.',
            },
            {
              type: 'key_points',
              title: 'Responsabilidades típicas de los consejeros de ED',
              points: [
                'Visitar las clases de adultos asignadas con regularidad — al menos una vez al mes',
                'Conocer a los maestros asignados: sus fortalezas, sus desafíos, sus recursos',
                'Proveer materiales de apoyo: recursos de Ven, Sígueme, citas de conferencia, materiales visuales cuando aplica',
                'Reportar al presidente sobre el estado de las clases visitadas — incluyendo lo que está funcionando bien',
                'Ayudar a coordinar sustitutos cuando un maestro no puede enseñar en un domingo específico',
                'Apoyar la planificación y ejecución del quinto domingo',
              ],
            },
            {
              type: 'paragraph',
              text: 'El consejero no es el "asistente" del presidente — es un líder con responsabilidades propias dentro de la presidencia. La presidencia que funciona como equipo, con cada miembro claro en sus responsabilidades, produce mejores resultados para los maestros y los miembros del barrio que una presidencia donde el presidente hace todo y los consejeros solo asisten a las reuniones.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Distribución de Clases entre Consejeros',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando el barrio tiene múltiples clases de Escuela Dominical para adultos, el presidente puede asignar a cada consejero un conjunto específico de clases para supervisar y apoyar. Esta distribución permite que cada consejero desarrolle una relación de continuidad con sus maestros asignados — no solo una visita ocasional de quien "pasó por ahí".',
            },
            {
              type: 'compare_grid',
              title: 'Consejero con asignación clara vs. sin asignación definida',
              rows: [
                { label: 'Conocimiento de maestros', a: 'Conoce a sus maestros asignados, sus fortalezas y sus necesidades', b: 'Tiene una relación superficial con todos los maestros, sin profundidad con ninguno' },
                { label: 'Visitas a clase', a: 'Visita con anticipación planificada; el maestro sabe que puede esperar apoyo', b: 'Aparece ocasionalmente sin patrón predecible' },
                { label: 'Continuidad', a: 'Puede comparar cómo ha evolucionado una clase a lo largo del trimestre', b: 'Cada visita es independiente sin contexto acumulado' },
                { label: 'Reporte al presidente', a: 'Entrega información específica y útil sobre cada clase en la reunión de presidencia', b: 'Ofrece impresiones generales sin detalles accionables' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Apoyo a los Maestros',
      intro: {
        romanNumeral: 'II',
        title: 'Visitar Para Edificar',
        paragraphs: [
          'La visita de un consejero a una clase de Escuela Dominical debe dejar al maestro más alentado, más equipado y más seguro en su llamamiento que antes de la visita. Ese es el estándar. Una visita que deja al maestro sintiéndose observado, evaluado o criticado ha fallado en su propósito — independientemente de la información que el consejero haya obtenido.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Proceso de Visita y Retroalimentación',
          blocks: [
            {
              type: 'paragraph',
              text: 'Una visita de apoyo a una clase de Escuela Dominical tiene tres momentos: la preparación, la visita en sí, y la conversación posterior. Los tres momentos importan. Un consejero que improvisa la visita y no tiene una conversación posterior con el maestro desperdicia la mayor parte del valor que esa visita podría generar.',
            },
            {
              type: 'steps',
              title: 'Proceso de visita de apoyo y retroalimentación al maestro',
              steps: [
                'Preparación — Notificar al maestro con anticipación que asistirá ese domingo; leer el capítulo de Ven, Sígueme para estar en contexto',
                'Llegada — Llegar como miembro de la clase, sin anunciarse; sentarse entre los participantes, no al frente',
                'Durante la clase — Participar genuinamente; observar el nivel de conversación, la atmósfera espiritual, la claridad del maestro',
                'Al salir — No compartir retroalimentación en el umbral de la puerta; acordar una conversación privada dentro de los próximos días',
                'Conversación posterior — Comenzar siempre con lo que funcionó bien; ser específico ("la pregunta que hiciste a los 10 minutos abrió la discusión")',
                'Si hay algo a mejorar — Formularlo como recurso, no como crítica: "vi algo que podría ayudarte con eso — ¿te puedo enviar algo?"',
                'Cierre — Expresar apreciación por el trabajo del maestro; ofrecer disponibilidad para cualquier pregunta antes del próximo domingo',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Los maestros de Escuela Dominical del barrio sienten que la presidencia de ED los apoya o que los supervisa? ¿Cómo sabría usted cuál de las dos percepciones predomina? ¿Qué podría hacer para cambiar esa percepción si fuera necesario?',
            },
          ],
        },
        {
          id: 't4',
          title: 'Recursos para los Maestros',
          blocks: [
            {
              type: 'paragraph',
              text: 'Muchos maestros de Escuela Dominical no saben que existen recursos disponibles para apoyarlos más allá del manual de Ven, Sígueme. La aplicación de la Iglesia incluye materiales adicionales para cada capítulo; la Guía para el Estudio de las Escrituras, el Diccionario Bíblico y los recursos de "Enseñar al Estilo del Salvador" son herramientas que el consejero puede dirigir activamente hacia sus maestros.',
            },
            {
              type: 'key_points',
              title: 'Recursos que el consejero puede compartir con los maestros',
              points: [
                '"Enseñar al Estilo del Salvador" — recurso oficial de la Iglesia para mejorar la capacidad de enseñanza espiritual',
                'Materiales adicionales de Ven, Sígueme en la app de la Iglesia — contexto histórico, escrituras relacionadas, citas de profetas',
                'Guía para el Estudio de las Escrituras y Diccionario Bíblico — para profundizar en conceptos doctrinales específicos',
                'Citas de la Conferencia General relacionadas con el tema del mes — el presidente puede seleccionarlas y el consejero distribuirlas',
                'Conexión directa con el presidente de la ED para cualquier pregunta difícil que surja en clase',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Quinto Domingo',
      intro: {
        romanNumeral: 'III',
        title: 'Una Reunión Especial para Toda la Congregación',
        paragraphs: [
          'Cuando un mes tiene cinco domingos, el obispado diseña una reunión especial para la segunda hora que reúne a los adultos del barrio — normalmente la Sociedad de Socorro, el Cuórum de Élderes y la Escuela Dominical juntos — en torno a un tema elegido por el obispo. La presidencia de la ED coordina la ejecución de esa reunión.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Coordinación del Quinto Domingo',
          blocks: [
            {
              type: 'paragraph',
              text: 'El quinto domingo no es un domingo "libre" ni una reunión improvisada. Es una oportunidad que el obispo tiene para abordar un tema que toda la congregación de adultos necesita escuchar juntos. Los temas comunes incluyen el cuidado de los menos activos, la preparación económica de las familias, el fortalecimiento del estudio en el hogar, o la preparación para un evento de estaca próximo.',
            },
            {
              type: 'key_points',
              title: 'Elementos de una coordinación exitosa del quinto domingo',
              points: [
                'El presidente de ED consulta al obispo con al menos tres semanas de anticipación sobre el tema del quinto domingo',
                'El obispo puede asignar a la presidencia de ED la planificación completa, o puede definir el contenido y pedir apoyo logístico',
                'Los consejeros ayudan a planificar: quién habla, cuánto tiempo tiene, qué materiales se necesitan',
                'Se coordina con las presidencias de Sociedad de Socorro y Cuórum de Élderes para comunicar el cambio de horario a sus miembros',
                'Uno de los consejeros puede ser el maestro de ceremonias o facilitador de la reunión del quinto domingo',
                'Después de la reunión, reportar brevemente al obispado sobre cómo resultó y cualquier seguimiento necesario',
              ],
            },
            {
              type: 'steps',
              title: 'Cronograma de preparación del quinto domingo',
              steps: [
                'Tres semanas antes — El presidente de ED se reúne con el obispo para conocer el tema y el formato deseado',
                'Dos semanas antes — La presidencia de ED planifica la estructura de la reunión: quién presenta, cuánto tiempo, materiales',
                'Una semana antes — Comunicar el tema del quinto domingo a los miembros del barrio por los canales habituales',
                'Domingo de la reunión — Llegar temprano para asegurar el espacio, el equipo audiovisual (si aplica) y la logística',
                'Semana siguiente — Reunión breve de evaluación con el presidente para identificar qué funcionó y qué mejorar',
              ],
            },
          ],
        },
      ],
    },
  ],
}
