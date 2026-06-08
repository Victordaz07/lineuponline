import type { Lesson } from '@/types/doctrine'

export const srsConsejeras: Lesson = {
  id: 'srs-consejeras',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'srs-lideres',
  title: 'Las Consejeras de la Sociedad de Socorro',
  subtitle: 'Apoyo específico, no dirección independiente',
  description:
    'Una consejera de la Sociedad de Socorro no preside ni toma decisiones por sí sola. Su rol es apoyar a la presidenta con asignaciones específicas, rendir cuentas de su trabajo en la presidencia y, cuando se le asigna, actuar en nombre de la presidenta. Entender estos límites no restringe su ministerio — lo hace más poderoso.',
  level: 'BÁSICO',
  icon: '🤝',
  duration: 25,
  order: 9521,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Naturaleza del Llamamiento',
      intro: {
        romanNumeral: 'I',
        title: 'Servir Bajo Dirección, No en Paralelo',
        paragraphs: [
          'Cuando una hermana es llamada como consejera, a veces asume que tiene una porción de la autoridad de la presidenta — que puede actuar, decidir y dirigir en su área de responsabilidad con plena independencia. Esa comprensión no es correcta. Una consejera sirve bajo la dirección de la presidenta, y su autoridad para actuar viene siempre de la asignación explícita de quien preside.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Consejera No Preside — Apoya',
          blocks: [
            {
              type: 'paragraph',
              text: 'La presidenta de la Sociedad de Socorro preside la organización. Sus consejeras la apoyan. Esta no es solo una distinción formal — tiene implicaciones prácticas importantes. Una consejera no convoca reuniones de presidencia. No toma decisiones sobre maestras o coordinadoras sin consultar a la presidenta. No representa a la Sociedad de Socorro ante el obispado ni en el consejo de barrio salvo cuando la presidenta lo ha asignado expresamente.',
            },
            {
              type: 'doctrine_box',
              title: 'La autoridad delegada: de dónde viene',
              body: 'Según el Manual General, las consejeras reciben su autoridad para actuar de la asignación que les hace la presidenta. Esto significa que cuando una consejera visita a una hermana con necesidades, coordina un servicio de compasión o facilita una actividad, lo hace como representante de la presidenta — no por su propia autoridad. Esa cadena de delegación no es burocrática. Es el sistema que protege la unidad de la presidencia y garantiza que la presidenta permanezca informada y en control del trabajo.',
            },
            {
              type: 'compare_grid',
              title: 'Una consejera PUEDE / Una consejera NO PUEDE',
              left: {
                label: 'Una consejera PUEDE',
                points: [
                  'Actuar como presidenta cuando ésta le asigna esa responsabilidad por ausencia',
                  'Coordinar actividades y ministerio dentro de su área de asignación',
                  'Asistir a la reunión de presidencia y compartir su perspectiva y sus reportes',
                  'Acercarse directamente a hermanas con necesidades en su área',
                  'Preparar propuestas para presentar a la presidenta para su aprobación',
                ],
              },
              right: {
                label: 'Una consejera NO PUEDE',
                points: [
                  'Tomar decisiones que afectan a toda la Sociedad de Socorro sin consultar a la presidenta',
                  'Nombrar o relevar a maestras o coordinadoras sin autorización expresa',
                  'Representar a la SRS ante el obispado sin asignación explícita',
                  'Actuar como presidenta cuando la presidenta está presente en el barrio',
                  'Comprometer recursos del presupuesto de la organización sin aprobación',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿Hay áreas en las que he actuado de manera más independiente de lo que corresponde a mi llamamiento? ¿O áreas en las que he sido más pasiva de lo que mi asignación me permite?',
            },
          ],
        },
        {
          id: 't2',
          title: 'La Unidad en la Presidencia',
          blocks: [
            {
              type: 'paragraph',
              text: 'Una presidencia de la Sociedad de Socorro que funciona bien no es una presidenta con dos asistentes. Es un quórum de tres mujeres que counsel juntas, que comparten información, que toman decisiones en unidad y que se sostienen mutuamente en los momentos difíciles. La consejera contribuye a esa unidad cuando reporta fielmente, cuando expresa sus perspectivas con franqueza y cuando apoya las decisiones de la presidenta — incluso cuando difiere de ellas.',
            },
            {
              type: 'doctrine_box',
              title: 'El principio de unidad en el liderazgo',
              body: 'El Señor enseñó en Doctrina y Convenios 107:27 que las decisiones de los cuerpos de presidencia deben tomarse en unanimidad — en "plena concordia." Este principio aplica a la presidencia de la Sociedad de Socorro. No significa que las consejeras siempre estarán de acuerdo con todo, sino que su desacuerdo se expresa en el espacio seguro de la reunión de presidencia — no fuera de ella. Una vez tomada la decisión, la presidencia actúa unida.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Asignaciones Típicas de las Consejeras',
      intro: {
        romanNumeral: 'II',
        title: 'Primera y Segunda Consejera: Roles Complementarios',
        paragraphs: [
          'El Manual General no prescribe una división exacta de responsabilidades entre la primera y segunda consejera. Sin embargo, existe un patrón común que muchas presidencias encuentran útil: la primera consejera enfocada en el ministerio y la compasión, la segunda en la enseñanza y las actividades. La presidenta asigna, define y ajusta estas responsabilidades según las capacidades de cada consejera y las necesidades del barrio.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Primera Consejera: Ministerio y Compasión',
          blocks: [
            {
              type: 'paragraph',
              text: 'La primera consejera típicamente coordina el ministerio de las hermanas: mantiene actualizada la lista de asignaciones de hermanas ministradoras, asegura que cada hermana tenga compañeras asignadas, y supervisa el seguimiento a las hermanas que necesitan atención especial. También puede supervisar el servicio de compasión: comidas, ayuda en crisis familiares, y coordinación de recursos cuando hay necesidad temporal.',
            },
            {
              type: 'key_points',
              title: 'Responsabilidades comunes de la primera consejera',
              points: [
                'Mantener actualizada la lista de asignaciones de ministerio de las hermanas',
                'Asegurar que cada hermana del barrio tenga compañeras ministradoras asignadas',
                'Supervisar el seguimiento pastoral a hermanas inactivas, nuevas o con necesidades especiales',
                'Coordinar el servicio de compasión cuando hay necesidad familiar',
                'Reportar a la presidenta sobre el estado del ministerio en la reunión semanal de presidencia',
              ],
            },
          ],
        },
        {
          id: 't4',
          title: 'Segunda Consejera: Enseñanza y Actividades',
          blocks: [
            {
              type: 'paragraph',
              text: 'La segunda consejera típicamente coordina la enseñanza en la Sociedad de Socorro: selecciona (con la presidenta) los discursos de Conferencia General para las clases dominicales, apoya a las maestras en su preparación, y coordina las actividades de hermandad que refuerzan el ministerio. Su área incluye asegurarse de que la clase semanal de SRS tenga la estructura, el tono y la profundidad que el Manual General describe.',
            },
            {
              type: 'key_points',
              title: 'Responsabilidades comunes de la segunda consejera',
              points: [
                'Coordinar la selección mensual de discursos para la clase de la Sociedad de Socorro',
                'Apoyar a las maestras en su preparación: retroalimentación, recursos, orientación',
                'Planificar y coordinar actividades de hermandad que complementen el ministerio',
                'Asegurarse de que las clases sigan el formato del Manual: consejo, no clase magistral',
                'Identificar a hermanas con el don de la enseñanza y presentarlas a la presidenta como candidatas a maestras',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Conozco con precisión cuál es mi asignación específica dentro de la presidencia? ¿He conversado con la presidenta para definirla claramente o estoy actuando en base a suposiciones?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Actuar Como Presidenta — Cuándo y Cómo',
      intro: {
        romanNumeral: 'III',
        title: 'Presidir en Ausencia: Autoridad con Límites Claros',
        paragraphs: [
          'Habrá momentos en que la presidenta no esté disponible y la consejera deba actuar en su nombre. Saber cuándo se puede hacer eso — y qué se puede y no se puede hacer en esos momentos — es esencial para que la presidencia funcione sin fricciones.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Cuándo y Cómo Actuar en Lugar de la Presidenta',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando la presidenta está ausente —por viaje, enfermedad u otra razón— la primera consejera asume las responsabilidades de presidir. Esto incluye conducir la reunión de presidencia, representar a la Sociedad de Socorro en el consejo de barrio si fuera necesario, y atender necesidades urgentes que no pueden esperar. Sin embargo, hay decisiones que la consejera debe postponer para cuando la presidenta regrese, especialmente aquellas que involucran nombramientos, cambios importantes de programa o asuntos que requieran la aprobación del obispo.',
            },
            {
              type: 'compare_grid',
              title: 'En ausencia de la presidenta: puede hacer / requiere esperar',
              left: {
                label: 'La consejera PUEDE hacer',
                points: [
                  'Conducir la reunión de presidencia con la agenda habitual',
                  'Atender necesidades urgentes de hermanas que no pueden esperar',
                  'Representar a la SRS en el consejo de barrio si es necesario',
                  'Comunicarse con las maestras y coordinadoras sobre asuntos rutinarios',
                  'Tomar decisiones menores de coordinación dentro de su área de asignación',
                ],
              },
              right: {
                label: 'La consejera DEBE ESPERAR a la presidenta',
                points: [
                  'Llamar o relevar a maestras, coordinadoras u otras líderes',
                  'Comprometer el presupuesto de la organización para gastos no habituales',
                  'Aprobar cambios significativos de programa o actividades',
                  'Llevar asuntos formales al obispo que la presidenta desconoce',
                  'Tomar decisiones que establezcan precedentes para toda la organización',
                ],
              },
            },
            {
              type: 'leader_quote',
              quote: 'Una buena consejera no actúa para demostrar su capacidad cuando la presidenta está ausente. Actúa para preservar la continuidad de la organización hasta que la presidenta regrese. La diferencia de actitud es enorme.',
              name: 'Orientación para presidencias de la Sociedad de Socorro',
              role: 'Manual General, Sección 9',
            },
          ],
        },
      ],
    },
  ],
}
