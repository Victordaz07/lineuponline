import type { Lesson } from '@/types/doctrine'

export const sacerdocioAaonico: Lesson = {
  id: 'sacerdocio-aaonico',
  moduleId: 'sacerdocio',
  title: 'El Sacerdocio Aarónico',
  subtitle: 'El sacerdocio preparatorio y sus tres oficios',
  description:
    'El Sacerdocio Aarónico, restaurado por Juan el Bautista, es la base del ministerio en la Iglesia. Sus tres oficios — Diácono, Maestro y Presbítero — preparan a hombres jóvenes para una vida de servicio.',
  level: 'BÁSICO',
  icon: '⚡',
  duration: 40,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: '¿Qué es el Sacerdocio Aarónico?',
      intro: {
        romanNumeral: 'I',
        title: 'El sacerdocio preparatorio — poder real en manos jóvenes',
        paragraphs: [
          'No es una distinción honorífica. Es autoridad divina real delegada a hombres jóvenes para ministrar ordinanzas específicas.',
        ],
      },
      topics: [
        {
          id: 'que-es-aaonico',
          title: 'El sacerdocio preparatorio — poder real en manos jóvenes',
          subtitle:
            'No es una distinción honorífica. Es autoridad divina real delegada a hombres jóvenes para ministrar ordinanzas específicas.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Sacerdocio Aarónico es una de las dos divisiones del sacerdocio restaurado. Lleva el nombre de Aarón, hermano de Moisés, sumo sacerdote de Israel. También se le llama «sacerdocio preparatorio» porque sus poseedores se preparan para recibir el Sacerdocio de Melquisedec y para una vida entera de servicio al Señor.',
            },
            {
              type: 'highlight_verse',
              text: '"Y el Sacerdocio Menor continúa y tiene el evangelio de arrepentimiento y de bautismo, y la remisión de pecados, y también la llave del ministerio de los ángeles."',
              reference: 'Doctrina y Convenios 84:26–27',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué administra el Sacerdocio Aarónico?',
              body: 'Tiene tres llaves específicas: (1) El ministerio de ángeles — guardando la puerta de acceso a la guía celestial. (2) El evangelio del arrepentimiento — predicando y preparando corazones. (3) El bautismo por inmersión para remisión de pecados — la primera ordenanza de salvación.',
            },
            {
              type: 'compare_grid',
              title: 'Los dos sacerdocios',
              left: {
                title: 'Sacerdocio Aarónico',
                items: [
                  'Restaurado por Juan el Bautista (1829)',
                  'Oficios: Diácono, Maestro y Presbítero',
                  'Administra ordinanzas preparatorias',
                  'Ministra ángeles y arrepentimiento',
                  'Administra la Santa Cena',
                ],
              },
              right: {
                title: 'Sacerdocio de Melquisedec',
                items: [
                  'Restaurado por Pedro, Santiago y Juan (1829)',
                  'Oficios: Élder, Sumo Sacerdote, Patriarca, Setenta, Apóstol',
                  'Administra todas las ordenanzas de salvación',
                  'Gobierna la Iglesia',
                  'Preside todas las organizaciones',
                ],
              },
            },
            {
              type: 'key_points',
              title: 'Aspectos esenciales del Sacerdocio Aarónico',
              points: [
                'El nombre "Aarónico" viene de Aarón, hermano de Moisés — el primer sumo sacerdote de Israel. Aarón y sus descendientes administraron las ordenanzas del tabernáculo por generaciones.',
                'También se llama "sacerdocio levítico" porque la tribu de Leví estaba dedicada al servicio sacerdotal en Israel (Números 3).',
                'No confundir autoridad con poder: un joven de 12 años ordenado diácono tiene autoridad real delegada por Dios — no simbólica.',
                'El Sacerdocio Aarónico en la Iglesia restaurada es una expansión del aarónico de la antigüedad: tiene más llaves y funciones que el antiguo.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Cuándo recibiste el Sacerdocio Aarónico? ¿Cómo has visto la diferencia entre simplemente tener la autoridad y ejercer el poder del sacerdocio con rectitud?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Restauración por Juan el Bautista',
      intro: {
        romanNumeral: 'II',
        title: '15 de mayo de 1829 — Juan el Bautista aparece',
        paragraphs: [
          'El momento exacto en que el Sacerdocio Aarónico regresó a la tierra después de siglos de apostasía.',
        ],
      },
      topics: [
        {
          id: 'restauracion-aaonico',
          title: '15 de mayo de 1829 — Juan el Bautista aparece',
          subtitle:
            'El momento exacto en que el Sacerdocio Aarónico regresó a la tierra después de siglos de apostasía.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El 15 de mayo de 1829, José Smith y Oliver Cowdery estaban traduciendo el Libro de Mormón cuando llegaron a los pasajes sobre el bautismo. Fueron al río Susquehanna en Pensilvania y oraron pidiendo guía. Lo que ocurrió a continuación cambió la historia del sacerdocio en la tierra.',
            },
            {
              type: 'highlight_verse',
              text: '"Mientras orábamos, descendió sobre nosotros un mensajero celestial, y se posó sobre nosotros, y nos impuso sus manos, y nos ordenó, diciendo: A vosotros, mis consiervos, en nombre del Mesías os confiero el Sacerdocio de Aarón, el cual tiene las llaves del ministerio de ángeles y del evangelio de arrepentimiento y del bautismo de inmersión para remisión de pecados."',
              reference: 'José Smith — Historia 1:68–69',
            },
            {
              type: 'paragraph',
              text: 'El mensajero se identificó como Juan el Bautista, que actuó bajo la dirección de Pedro, Santiago y Juan. Les instruyó que se bautizaran mutuamente, y que quien bautizara primero sería el de mayor autoridad. José bautizó a Oliver, y Oliver a José.',
            },
            {
              type: 'highlight_verse',
              text: '"El mensajero que nos visitó en esta ocasión, y que nos confirió este sacerdocio, dijo que su nombre era Juan, el mismo que se llama Juan el Bautista en el Nuevo Testamento, y que actuaba bajo la dirección de Pedro, Santiago y Juan, quienes tenían las llaves del Sacerdocio de Melquisedec."',
              reference: 'Doctrina y Convenios 13:1 — encabezado histórico',
            },
            {
              type: 'deep_dive',
              badge: 'Historia',
              title: '¿Por qué Juan el Bautista? ¿Por qué a ellos?',
              paragraphs: [
                'Juan el Bautista fue elegido para restaurar el Sacerdocio Aarónico por una razón precisa: él mismo había ejercido las llaves de ese sacerdocio en la meridez de los tiempos. Bautizó a Jesús, preparó el camino del Señor y pagó con su vida su fidelidad. Era el portador original de esas llaves.',
                'El momento histórico es también significativo: José y Oliver no estaban buscando el sacerdocio — estaban buscando entender el bautismo. El Señor respondió a una pregunta honesta con una visitación. La restauración comenzó con preguntas sinceras.',
                'La secuencia es teológicamente importante: recibieron el sacerdocio ANTES de bautizarse. La autoridad precede a la ordenanza — no hay bautismo válido sin la autoridad preexistente.',
              ],
            },
            {
              type: 'timeline',
              items: [
                {
                  label: '1829, 15 de mayo',
                  text: 'Juan el Bautista impone manos sobre José Smith y Oliver Cowdery a orillas del río Susquehanna.',
                  color: 'gold',
                },
                {
                  label: 'Mayo 1829',
                  text: 'José bautiza a Oliver y Oliver a José — los primeros bautismos bajo la autoridad restaurada.',
                  color: 'blue',
                },
                {
                  label: 'Junio 1829',
                  text: 'Pedro, Santiago y Juan restauran el Sacerdocio de Melquisedec.',
                  color: 'red',
                },
                {
                  label: '6 de abril de 1830',
                  text: 'Se organiza la Iglesia. Los primeros élderes son ordenados con plena autoridad.',
                  color: 'green',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Los Tres Oficios',
      intro: {
        romanNumeral: 'III',
        title: 'Diácono, Maestro y Presbítero — el camino de crecimiento',
        paragraphs: [
          'Cada oficio añade responsabilidad y autoridad. No son etapas que se dejan atrás — son identidades que se acumulan.',
        ],
      },
      topics: [
        {
          id: 'tres-oficios',
          title: 'Diácono, Maestro y Presbítero — el camino de crecimiento',
          subtitle:
            'Cada oficio añade responsabilidad y autoridad. No son etapas que se dejan atrás — son identidades que se acumulan.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Sacerdocio Aarónico tiene tres oficios ordenados: Diácono (desde los 12 años), Maestro (desde los 14) y Presbítero (desde los 16). Cada oficio añade deberes específicos sin quitar los del anterior. Un presbítero aún puede repartir la Santa Cena. Un élder aún puede preparar la mesa.',
            },
            {
              type: 'steps',
              title: 'Los tres oficios y sus deberes principales',
              steps: [
                'DIÁCONO (12 años en adelante) — Repartir la Santa Cena a la congregación. Recoger ofrendas de ayuno. Ayudar en otras responsabilidades bajo dirección del obispo. La llamada a servir comienza aquí.',
                'MAESTRO (14 años en adelante) — Todo lo del diácono, más: Preparar la mesa sacramental antes de la reunión. Ministrar a los miembros asignados. Velar por la Iglesia y cuidar que no haya contención ni iniquidad. No puede bautizar ni administrar la Santa Cena.',
                'PRESBÍTERO (16 años en adelante) — Todo lo del maestro, más: Bendecir la Santa Cena (pronunciar las oraciones reveladas). Bautizar. Ordenar a otros al Sacerdocio Aarónico. Tomar la delantera en reuniones cuando no hay autoridad del Sacerdocio de Melquisedec.',
              ],
            },
            {
              type: 'highlight_verse',
              text: '"Y los presbíteros deberán enseñar, exponer, exhortar, bautizar y administrar la Santa Cena, y visitar a los miembros de la iglesia, exhortándoles a orar vocal y secretamente y a atender a todos los deberes de la familia."',
              reference: 'Doctrina y Convenios 20:46–47',
            },
            {
              type: 'doctrine_box',
              title: '¿Cuándo se ordena a alguien a un oficio?',
              body: 'La ordenación no es automática al cumplir la edad. El obispo entrevista a cada joven para determinar su dignidad. Un joven digno y capaz puede recibir el siguiente oficio si el obispo así lo llama. La dignidad — no solo la edad — es el requisito central.',
            },
            {
              type: 'leader_quote',
              quote:
                'Los jóvenes del Sacerdocio Aarónico son llamados de Dios. No son simples voluntarios. El Padre los llama para servir a Su pueblo en Sus ordenanzas. Cada diácono que pasa la bandeja de la Santa Cena está cumpliendo un ministerio sagrado.',
              name: 'Élder Gary E. Stevenson · Conferencia General',
            },
            {
              type: 'reflection',
              prompt:
                '¿Qué oficio del Sacerdocio Aarónico marcó más tu vida? ¿Qué momento en ese oficio te hizo sentir que tu servicio era realmente sagrado?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Crecer en el Sacerdocio',
      intro: {
        romanNumeral: 'IV',
        title: 'El privilegio y la responsabilidad — qué significa ser llamado de Dios',
        paragraphs: [
          'El Sacerdocio Aarónico no es un título. Es una confianza sagrada del Padre Celestial en hombres jóvenes.',
        ],
      },
      topics: [
        {
          id: 'crecer-aaonico',
          title: 'El privilegio y la responsabilidad — qué significa ser llamado de Dios',
          subtitle:
            'El Sacerdocio Aarónico no es un título. Es una confianza sagrada del Padre Celestial en hombres jóvenes.',
          blocks: [
            {
              type: 'highlight_verse',
              text: '"Nuestro Padre Celestial tiene mucha confianza en los jóvenes poseedores del Sacerdocio Aarónico, puesto que les ha asignado el privilegio de administrar los santos emblemas sacramentales."',
              reference: 'Manual del Sacerdocio Aarónico — Lección 14',
            },
            {
              type: 'key_points',
              title: 'Lo que el Sacerdocio Aarónico no es',
              points: [
                'No es una edad de espera para el Sacerdocio de Melquisedec. Tiene su propio poder, sus propias llaves y su propio ministerio.',
                'No es automático. Requiere dignidad activa, no solo tiempo.',
                'No es menos importante porque lo reciben jóvenes. Los diáconos administran la ordenanza más frecuente de la Iglesia — la Santa Cena.',
                'No termina al recibir el Sacerdocio de Melquisedec. Un élder sigue siendo un presbítero que puede bautizar.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'Cuando un diácono os lleva los emblemas sagrados de la Santa Cena, sed conscientes de que está poniéndose de pie donde estaría Jesús si estuviera ahí, ofreciendo aliviar vuestras cargas.',
              name: 'Élder Steven J. Lund · Conferencia General',
            },
            {
              type: 'reflection',
              prompt:
                'Como poseedor del Sacerdocio de Melquisedec, ¿cómo puedes honrar y fortalecer a los jóvenes del Sacerdocio Aarónico en tu barrio? ¿Recuerdas quién te enseñó a preparar la mesa o a repartir con reverencia?',
            },
          ],
        },
      ],
    },
  ],
}
