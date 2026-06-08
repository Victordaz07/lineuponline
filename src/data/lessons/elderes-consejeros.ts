import type { Lesson } from '@/types/doctrine'

export const elderesConsejeros: Lesson = {
  id: 'elderes-consejeros',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'elderes-lideres',
  title: 'Los Consejeros del Cuórum de Élderes',
  subtitle: 'Fuerza compartida, responsabilidad asignada',
  description:
    'Los consejeros del Cuórum de Élderes sirven bajo la dirección del presidente, con asignaciones específicas y la capacidad de presidir cuando él está ausente. Su fortaleza no viene de actuar independientemente — viene de conocer bien su asignación, ejercerla con fidelidad y reportar de manera que el presidente pueda tomar buenas decisiones para el cuórum.',
  level: 'BÁSICO',
  icon: '🤝',
  duration: 25,
  order: 9531,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Papel del Consejero',
      intro: {
        romanNumeral: 'I',
        title: 'Servir Bajo Dirección con Responsabilidad Real',
        paragraphs: [
          'Un consejero del Cuórum de Élderes tiene una posición de confianza y responsabilidad. No es simplemente un "respaldo" del presidente — tiene asignaciones propias, participa activamente en la presidencia y puede presidir cuando el presidente está ausente. Pero su autoridad para actuar siempre viene del presidente o de la asignación que él define.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Qué Puede y Qué Requiere Autorización',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los consejeros del cuórum sirven con autoridad real dentro de los límites de sus asignaciones. El primer consejero puede visitar directamente a un hermano con necesidad, coordinar el ministerio dentro de su área y representar al cuórum cuando el presidente lo asigna. Pero hay decisiones que siempre requieren la autorización del presidente — o del obispo cuando el presidente no puede consultarse.',
            },
            {
              type: 'compare_grid',
              title: 'Puede hacer / Requiere autorización del presidente',
              left: {
                label: 'El consejero PUEDE hacer',
                points: [
                  'Actuar como presidente cuando éste le asigna esa responsabilidad por ausencia',
                  'Visitar directamente a hermanos con necesidades dentro de su área de asignación',
                  'Coordinar el ministerio y el seguimiento a hermanos asignados',
                  'Participar activamente en la reunión de presidencia con reportes y propuestas',
                  'Facilitar la reunión dominical del cuórum si el presidente lo designa',
                ],
              },
              right: {
                label: 'REQUIERE autorización del presidente',
                points: [
                  'Representar al cuórum ante el obispado sin asignación explícita del presidente',
                  'Nombrar o proponer cambios en asignaciones de ministerio fuera de su área',
                  'Comprometer los recursos del cuórum para gastos no habituales',
                  'Tomar decisiones que afecten a todo el cuórum sin consultar al presidente',
                  'Comunicar al obispo asuntos del cuórum que el presidente desconoce',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'La diferencia entre un consejero eficaz y uno que genera confusión en el cuórum no está en su disposición o su espiritualidad — está en su comprensión de los límites de su autoridad. Un consejero que actúa dentro de sus asignaciones con fidelidad y reporta con precisión multiplica la capacidad del presidente. Uno que actúa de manera independiente fragmenta la unidad de la presidencia.',
            },
          ],
        },
        {
          id: 't2',
          title: 'El Consejero Como Apoyo, No Como Rival',
          blocks: [
            {
              type: 'paragraph',
              text: 'En algunos cuórumes, los consejeros desarrollan una relación de tensión no declarada con el presidente — especialmente si el consejero tiene más experiencia, mayor carisma o una visión diferente de cómo debería funcionar el cuórum. Esa tensión, si no se resuelve, socava todo. El remedio no es que el consejero se suprima a sí mismo — es que entienda que su rol es fortalecer al presidente, no competir con él.',
            },
            {
              type: 'doctrine_box',
              title: 'El principio de ser un apoyo',
              body: 'Doctrina y Convenios 107:22 describe a los consejeros como quienes "asisten" al que preside. Asistir no es corregir, dirigir ni liderar en paralelo. Es sostener, apoyar y completar. Un consejero que genuinamente apoya al presidente puede expresar su perspectiva con franqueza en la reunión de presidencia — y luego apoyar la decisión que el presidente tome, aunque sea diferente. Eso es integridad de liderazgo.',
            },
            {
              type: 'reflection',
              prompt: '¿Hay alguna área en la que me he sentido tentado a actuar de manera más independiente de lo que mi asignación permite? ¿Lo que me detiene es respeto genuino por la estructura del sacerdocio o simplemente la posibilidad de que el presidente se moleste?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Asignaciones Comunes de los Consejeros',
      intro: {
        romanNumeral: 'II',
        title: 'Primer y Segundo Consejero: División Funcional',
        paragraphs: [
          'El presidente asigna responsabilidades específicas a cada consejero según las necesidades del cuórum y los dones de cada uno. Aunque no existe una prescripción absoluta en el Manual General, hay un patrón común que muchas presidencias encuentran funcional y que permite que el trabajo del cuórum se distribuya de manera coherente.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Primer Consejero: Ministerio y Bienestar',
          blocks: [
            {
              type: 'paragraph',
              text: 'El primer consejero típicamente supervisa el ministerio de los hermanos y el seguimiento de bienestar. Mantiene actualizada la lista de asignaciones de hermanos ministros, se asegura de que cada familia del barrio tenga hermanos asignados, y coordina la respuesta del cuórum cuando hay una necesidad temporal: una mudanza, una hospitalización, un trabajo de emergencia en un hogar. Es la "mano derecha" del presidente en el cuidado directo de las personas.',
            },
            {
              type: 'key_points',
              title: 'Responsabilidades típicas del primer consejero',
              points: [
                'Supervisar las asignaciones de ministerio y asegurar que estén completas y actualizadas',
                'Coordinar la respuesta del cuórum a necesidades temporales identificadas',
                'Reportar al presidente el estado del ministerio en la reunión semanal de presidencia',
                'Visitar directamente a hermanos con necesidades cuando la situación lo requiere',
                'Identificar familias del barrio que necesitan hermanos ministros y presentar propuestas al presidente',
              ],
            },
          ],
        },
        {
          id: 't4',
          title: 'Segundo Consejero: Actividades, Activación y Jóvenes Adultos',
          blocks: [
            {
              type: 'paragraph',
              text: 'El segundo consejero típicamente coordina las actividades del cuórum, el esfuerzo de activación de élderes menos activos, y la atención especial a los jóvenes adultos del barrio — hombres que tienen entre 18 y 30 años y que a veces están en transición de los programas de jóvenes al cuórum de élderes. Esa transición es un momento crítico en el que el cuórum puede marcar una diferencia enorme.',
            },
            {
              type: 'paragraph',
              text: 'La activación de élderes menos activos es un trabajo delicado que requiere paciencia, sin agenda y genuino interés en la persona. El segundo consejero que visita a un hermano inactivo con la única meta de "traerlo de vuelta" generalmente no tendrá éxito. El que llega simplemente para conocerlo, escucharlo y ser su amigo — sin presión — es quien eventualmente ve a ese hermano regresar.',
            },
            {
              type: 'key_points',
              title: 'Responsabilidades típicas del segundo consejero',
              points: [
                'Planificar y coordinar las actividades de hermandad del cuórum',
                'Coordinar el esfuerzo de activación: visitas a hermanos menos activos, con reporte regular al presidente',
                'Dar atención especial a los jóvenes adultos (18-30) que están en la transición al cuórum de élderes',
                'Trabajar con el presidente del Cuórum de Hombres Jóvenes para facilitar una transición cálida a los jóvenes que cumplen 18',
                'Reportar al presidente sobre el estado de las relaciones con los hermanos menos activos',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Reunión de Presidencia — Cómo los Consejeros Contribuyen',
      intro: {
        romanNumeral: 'III',
        title: 'Reportar, Proponer, Sostener',
        paragraphs: [
          'La reunión de presidencia del cuórum es el espacio donde los consejeros ejercen su influencia más directa. Llegar preparados con reportes precisos, propuestas concretas y preguntas genuinas sobre los hermanos del cuórum es la manera en que los consejeros convierten la reunión en una herramienta de liderazgo real.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Cómo Prepararse para la Reunión de Presidencia',
          blocks: [
            {
              type: 'paragraph',
              text: 'Un consejero que llega a la reunión de presidencia sin haber contactado a sus hermanos asignados durante la semana no tiene mucho que reportar. Un consejero que ha estado activo durante la semana — que visitó a un hermano con necesidad, que habló con un élder joven que no estaba asistiendo, que coordinó un servicio de compasión — llega con información que transforma la reunión de un protocolo a una consulta pastoral genuina.',
            },
            {
              type: 'steps',
              title: 'Cómo preparar el aporte del consejero a la reunión de presidencia',
              steps: [
                'Durante la semana: mantenerse en contacto con los hermanos dentro del área de asignación',
                'Registrar las necesidades identificadas: ¿quién necesita ayuda? ¿quién está en dificultades? ¿quién tuvo un logro que merece reconocimiento?',
                'Preparar un reporte conciso de dos o tres puntos para compartir en la reunión de presidencia',
                'Si hay una decisión que el presidente necesita tomar: preparar la información y la recomendación del consejero',
                'Después de la reunión: ejecutar con prontitud las asignaciones tomadas, sin esperar el recordatorio del presidente',
              ],
            },
          ],
        },
        {
          id: 't6',
          title: 'Tomar Decisiones en Unidad con la Presidencia',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las mejores presidencias del cuórum no son aquellas donde el presidente toma todas las decisiones y los consejeros simplemente asisten. Son aquellas donde los tres hombres counsel juntos, expresan sus perspectivas con franqueza, y el presidente toma la decisión final habiendo escuchado genuinamente a sus consejeros. Eso requiere que los consejeros hablen — y que el presidente escuche.',
            },
            {
              type: 'leader_quote',
              quote: 'Un consejero que nunca expresa su perspectiva no está sirviendo al presidente — le está fallando. El presidente necesita la visión de sus consejeros para tomar buenas decisiones. Un consejero que siempre está de acuerdo con todo es tan poco útil como uno que siempre está en desacuerdo.',
              name: 'Principios de liderazgo del sacerdocio',
              role: 'Manual General, Sección 4',
            },
            {
              type: 'reflection',
              prompt: '¿Expreso mi perspectiva con franqueza en la reunión de presidencia, o tiendo a guardar mis opiniones por temor al conflicto? ¿Sostengo lealmente las decisiones del presidente una vez tomadas, aunque haya discrepado en la reunión?',
            },
          ],
        },
      ],
    },
  ],
}
