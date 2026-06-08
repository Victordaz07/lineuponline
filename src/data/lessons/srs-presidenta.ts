import type { Lesson } from '@/types/doctrine'

export const srsPresidenta: Lesson = {
  id: 'srs-presidenta',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'srs-lideres',
  title: 'La Presidenta de la Sociedad de Socorro',
  subtitle: 'Pastora, administradora y voz de las hermanas ante el obispado',
  description:
    'La presidenta de la Sociedad de Socorro no es la maestra principal ni la organizadora de actividades. Es la líder pastoral de las mujeres del barrio: conduce una presidencia, reporta al obispo con regularidad, participa en el consejo de barrio y dirige el ministerio. Esta lección explora qué significa presidir con autoridad delegada y responsabilidad real, basándose en el Manual General capítulo 9.',
  level: 'BÁSICO',
  icon: '💐',
  duration: 25,
  order: 9520,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Llamamiento — Qué Significa Presidir',
      intro: {
        romanNumeral: 'I',
        title: 'Presidir No Es Administrar',
        paragraphs: [
          'Existe una diferencia fundamental entre presidir una organización y administrarla. Una coordinadora administra actividades. Una maestra enseña. Pero una presidenta preside — lo cual significa que tiene responsabilidad pastoral sobre las personas bajo su cuidado, no solo sobre las reuniones o los programas. Entender esa diferencia cambia todo en el ejercicio del llamamiento.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Presidir vs. Administrar: La Diferencia Esencial',
          blocks: [
            {
              type: 'paragraph',
              text: 'La presidenta de la Sociedad de Socorro preside, lo que significa que tiene responsabilidad sobre el bienestar espiritual y temporal de las mujeres del barrio. Una coordinadora de actividades organiza eventos. Una maestra prepara lecciones. Pero la presidenta lleva una responsabilidad pastoral: conoce a las hermanas individualmente, identifica sus necesidades, y dirige los recursos de la organización hacia esas necesidades. Administrar es gestionar sistemas; presidir es cuidar personas.',
            },
            {
              type: 'doctrine_box',
              title: 'Las llaves del bienestar de las mujeres del barrio',
              body: 'Según el Manual General (9.1.1), la presidenta de la Sociedad de Socorro "trabaja con el obispo para lograr el bienestar de las mujeres y las familias del barrio." Aunque las llaves del sacerdocio descansan en el obispo, la presidenta tiene una responsabilidad delegada y sagrada sobre el bienestar de las mujeres. No es simplemente una ejecutora de programas — es una pastora que reporta directamente al obispo sobre las necesidades de las hermanas.',
            },
            {
              type: 'compare_grid',
              title: 'Presidenta vs. Coordinadora / Maestra',
              left: {
                label: 'La Presidenta PRESIDE',
                points: [
                  'Responsabilidad pastoral sobre todas las mujeres adultas del barrio',
                  'Reporta al obispo y participa en el consejo de barrio',
                  'Dirige la presidencia y asigna responsabilidades a las consejeras',
                  'Identifica necesidades espirituales y temporales de las hermanas',
                  'Aprueba (con el obispo) el nombramiento de maestras y coordinadoras',
                ],
              },
              right: {
                label: 'Coordinadora / Maestra ADMINISTRA',
                points: [
                  'Responsabilidad específica sobre una actividad o clase asignada',
                  'Reporta a la presidenta, no al obispo directamente',
                  'Ejecuta la visión de la presidencia, no establece la dirección general',
                  'Atiende un aspecto particular del ministerio',
                  'Es nombrada por la presidenta con aprobación del obispo',
                ],
              },
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 25:3',
              text: 'Si eres fiel y andas en los caminos de la virtud delante de mí, yo te preservaré; y tu suerte será que heredarás el reino celestial.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Lo Que Distingue Este Llamamiento de Otros',
          blocks: [
            {
              type: 'paragraph',
              text: 'Muchos llamamientos en el barrio tienen un alcance bien definido: el maestro de la Escuela Dominical enseña a su clase, el coordinador de servicios organiza proyectos específicos. El llamamiento de presidenta es diferente porque su alcance no está limitado por una clase ni por un programa — es toda mujer adulta del barrio, sin excepción. Eso incluye a las hermanas inactivas, a las no miembros casadas con miembros, a las ancianas que no pueden asistir, y a las jóvenes adultas solteras.',
            },
            {
              type: 'reflection',
              prompt: '¿Conozco a todas las mujeres adultas de mi barrio por nombre? ¿Sé cuáles son sus circunstancias actuales? ¿Cuál es la hermana que más necesita atención esta semana y qué estoy haciendo al respecto?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Responsabilidades Principales de la Presidenta',
      intro: {
        romanNumeral: 'II',
        title: 'Siete Responsabilidades Centrales',
        paragraphs: [
          'El Manual General describe con claridad qué hace la presidenta de la Sociedad de Socorro. No es una lista de sugerencias — es una descripción del llamamiento. Conocer estas responsabilidades permite a la presidenta evaluar si está usando su tiempo en lo que más importa o si está gastando su energía en tareas que podrían delegarse.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Reuniones, Ministerio y Supervisión',
          blocks: [
            {
              type: 'key_points',
              title: 'Las responsabilidades centrales de la presidenta',
              points: [
                'Conduce la reunión semanal de la presidencia de la Sociedad de Socorro — agenda, seguimiento, oración y revelación colectiva',
                'Se reúne regularmente con el obispo (al menos mensualmente) para reportar el estado de las hermanas y recibir dirección',
                'Participa en el consejo de barrio como representante de las mujeres adultas del barrio',
                'Dirige el ministerio de las hermanas: asigna compañeras ministradoras y supervisa la atención personal',
                'Supervisa el servicio de compasión: identifica familias con necesidades, coordina con el obispo los recursos del bienestar',
                'Nombra (con aprobación del obispo) a las maestras de la Sociedad de Socorro y a las coordinadoras de comités',
                'Asegura que la enseñanza en la Sociedad de Socorro refleje las directrices del manual y los mensajes de Conferencia General',
              ],
            },
            {
              type: 'steps',
              title: 'Agenda típica de la reunión semanal de presidencia',
              steps: [
                'Oración inicial — invitar al Espíritu y establecer el tono espiritual de la reunión',
                'Revisión del seguimiento de la semana anterior — ¿qué compromisos se tomaron y qué se cumplió?',
                'Informe de ministerio — cada consejera con asignación de ministerio comparte novedades sobre las hermanas a su cargo',
                'Identificación de necesidades específicas — hermanas que requieren atención inmediata o seguimiento especial',
                'Asignación de acciones — quién hará qué antes de la próxima reunión, con nombre y fecha',
                'Preparación para reuniones próximas — temas de la Sociedad de Socorro, visita al consejo de barrio',
                'Oración de cierre y registro en minutas por la secretaria',
              ],
            },
          ],
        },
        {
          id: 't4',
          title: 'El Consejo de Barrio: La Voz de las Hermanas',
          blocks: [
            {
              type: 'paragraph',
              text: 'La participación de la presidenta en el consejo de barrio no es protocolar — es esencial. Ella lleva al consejo información sobre las necesidades de las hermanas que el obispo no puede obtener por sí solo. Muchas situaciones de bienestar, crisis familiares o necesidades espirituales de las mujeres del barrio solo llegan al obispo a través de la presidenta. Eso hace de su voz en el consejo un elemento irreemplazable del liderazgo del barrio.',
            },
            {
              type: 'leader_quote',
              quote: 'La presidenta de la Sociedad de Socorro no asiste al consejo de barrio para escuchar — asiste para contribuir. Ella trae perspectivas y conocimiento sobre las hermanas del barrio que el obispo y los élderes no tienen. Su participación activa es una bendición para toda la unidad.',
              name: 'Manual General de la Iglesia',
              role: 'Capítulo 29 — El Consejo de Barrio',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Trabajar con el Obispado',
      intro: {
        romanNumeral: 'III',
        title: 'Una Relación de Trabajo, No de Dependencia',
        paragraphs: [
          'La relación entre la presidenta de la Sociedad de Socorro y el obispo es una de las asociaciones más importantes del barrio. No es una relación donde la presidenta simplemente ejecuta las órdenes del obispo, ni donde opera de manera completamente independiente. Es una relación de consulta, reporte y confianza mutua que, cuando funciona bien, multiplica la capacidad de ambos líderes para servir a los miembros.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'La Reunión Mensual con el Obispo',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Manual General establece que la presidenta debe reunirse con el obispo al menos mensualmente. Esa reunión no es una auditoría ni un informe burocrático — es una consulta pastoral. La presidenta trae información sobre el estado de las hermanas; el obispo trae dirección, recursos y visión. Cuando esa reunión se cancela o se convierte en algo superficial, ambas partes pierden información vital para el cuidado del barrio.',
            },
            {
              type: 'steps',
              title: 'Cómo preparar la reunión mensual con el obispo',
              steps: [
                'Revisar las minutas de las reuniones de presidencia del mes anterior — ¿qué asuntos requieren la atención o autorización del obispo?',
                'Identificar por nombre a las hermanas con necesidades específicas que el obispo debería conocer (respetando la confidencialidad)',
                'Traer cualquier solicitud de aprobación: nuevos nombramientos, uso del presupuesto, actividades especiales',
                'Preparar preguntas específicas — no ir a la reunión esperando que el obispo marque la agenda',
                'Tomar nota de la dirección y las instrucciones del obispo para comunicarlas a la presidencia',
              ],
            },
          ],
        },
        {
          id: 't6',
          title: 'Confidencialidad y Cuándo Escalar al Obispo',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las hermanas a veces comparten con la presidenta información de naturaleza sensible: dificultades matrimoniales, luchas con la fe, problemas de salud mental, situaciones de abuso. La presidenta debe entender claramente qué información es confidencial (y debe serlo) y qué situaciones requieren escalar inmediatamente al obispo, independientemente de la privacidad.',
            },
            {
              type: 'key_points',
              title: 'Cuándo escalar inmediatamente al obispo',
              points: [
                'Cualquier situación de abuso físico, emocional o sexual — el obispo debe saber inmediatamente',
                'Hermanas con riesgo de hacerse daño o de hacérselo a otros',
                'Asuntos que requieren la autorización del sacerdocio del obispo (disciplina, entrevistas de recomendación, etc.)',
                'Necesidades de bienestar que superan lo que la Sociedad de Socorro puede atender por sí sola',
                'Cualquier asunto legal o que involucre a las autoridades civiles',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Existe alguna hermana en el barrio cuya situación debería haber escalado al obispo y que no lo ha hecho? ¿Qué está impidiendo esa conversación — incomodidad, incertidumbre, o la falsa creencia de que "puedo manejarlo sola"?',
            },
          ],
        },
      ],
    },
  ],
}
