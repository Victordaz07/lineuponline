import type { Lesson } from '@/types/doctrine'

export const srsSecretaria: Lesson = {
  id: 'srs-secretaria',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'srs-lideres',
  title: 'La Secretaria de la Sociedad de Socorro',
  subtitle: 'El sistema de información que hace funcionar la presidencia',
  description:
    'La secretaria de la Sociedad de Socorro no es una asistente administrativa. Es la memoria institucional de la organización: toma minutas precisas, mantiene el registro de asistencia y ministerio, administra el presupuesto, y asegura que la información fluya correctamente dentro de la presidencia y hacia el obispado. Sin una secretaria eficaz, la presidencia no puede funcionar.',
  level: 'BÁSICO',
  icon: '📋',
  duration: 25,
  order: 9522,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Papel de la Secretaria — Más Que Tomar Notas',
      intro: {
        romanNumeral: 'I',
        title: 'La Memoria Institucional de la Organización',
        paragraphs: [
          'Una presidencia sin secretaria funciona sobre la base de la memoria personal de sus miembros. Los acuerdos tomados en una reunión se olvidan antes de la siguiente. Las necesidades identificadas de hermanas se pierden entre las ocupaciones de la semana. Los compromisos no se cumplen porque nadie los registró. La secretaria no es una figura secundaria — es el sistema que convierte las palabras de la presidencia en acción real.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Qué Es y Qué No Es la Secretaria',
          blocks: [
            {
              type: 'paragraph',
              text: 'La secretaria asiste a todas las reuniones de presidencia, toma minutas, mantiene los registros de la organización y administra la comunicación. Nunca preside ni toma decisiones de dirección. Su rol es instrumental — facilita que la presidencia funcione — pero no es secundario. Una secretaria diligente es, en muchos aspectos, la persona que más contribuye a la eficacia del trabajo pastoral de la presidenta.',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué el registro importa espiritualmente',
              body: 'El Señor instruyó desde el inicio de la Iglesia que los registros deben llevarse con cuidado. En Doctrina y Convenios 128:7, el trabajo de registrar se describe como "sagrado." Las minutas de la presidencia de la Sociedad de Socorro no son solo documentos administrativos — son el registro de cómo la presidencia respondió a las necesidades del pueblo del Señor. Ese registro tiene valor espiritual, histórico y práctico.',
            },
            {
              type: 'key_points',
              title: 'Las responsabilidades centrales de la secretaria',
              points: [
                'Asistir a todas las reuniones de presidencia y tomar minutas detalladas',
                'Mantener el registro de asistencia de la Sociedad de Socorro',
                'Administrar el directorio actualizado de todas las hermanas del barrio',
                'Administrar el presupuesto de la organización y registrar gastos',
                'Preparar el informe mensual de la Sociedad de Socorro para el consejo de barrio',
                'Coordinar la comunicación de la presidencia hacia las hermanas del barrio',
                'Mantener el archivo organizado de la presidencia (minutas, registros, presupuestos)',
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'Cómo Tomar Minutas Efectivas',
          blocks: [
            {
              type: 'paragraph',
              text: 'Tomar minutas no es transcribir todo lo que se dice en una reunión. Es registrar lo que se decidió, quién tomó qué compromiso, y cuándo se espera que se cumpla. Unas minutas bien tomadas permiten que la próxima reunión comience con una revisión de compromisos — no con una discusión sobre qué se acordó la semana pasada.',
            },
            {
              type: 'steps',
              title: 'Pasos para tomar minutas efectivas en la presidencia',
              steps: [
                'Antes de la reunión: tener la plantilla lista con fecha, hora, asistentes y agenda del día',
                'Durante la reunión: registrar decisiones, no debates. Anotar: "Se decidió X" y "La Hermana Y se comprometió a hacer Z antes del [fecha]"',
                'Para cada hermana mencionada con necesidades: anotar el nombre, la necesidad, y quién tiene la asignación de seguimiento',
                'Si se toma un acuerdo importante: leerlo en voz alta para que todos confirmen que fue registrado correctamente',
                'Al final de la reunión: verificar la lista de asignaciones — cada asignación debe tener nombre, tarea y fecha',
                'Después de la reunión: distribuir las minutas a todos los miembros de la presidencia antes del siguiente día',
                'Al inicio de la próxima reunión: repasar las asignaciones del acta anterior como primer punto de agenda',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Presupuesto, Finanzas y Registros',
      intro: {
        romanNumeral: 'II',
        title: 'El Ministerio de Administrar los Recursos',
        paragraphs: [
          'La Sociedad de Socorro recibe un presupuesto del barrio para llevar a cabo sus actividades y servicio. La secretaria es responsable de administrar ese presupuesto con transparencia, de registrar todos los gastos, y de asegurarse de que la presidenta tenga información actualizada sobre los recursos disponibles. Administrar el dinero de la organización con fidelidad es también un acto de mayordomía.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Administración del Presupuesto de la SRS',
          blocks: [
            {
              type: 'key_points',
              title: 'Responsabilidades de la secretaria en finanzas y presupuesto',
              points: [
                'Conocer el presupuesto anual asignado a la Sociedad de Socorro por el barrio',
                'Registrar todos los gastos con recibos o comprobantes — sin excepción',
                'Presentar el estado del presupuesto a la presidenta al inicio de cada mes',
                'Alertar a la presidenta cuando el saldo disponible esté por debajo del 25% del presupuesto anual',
                'Asegurarse de que ningún gasto supere el presupuesto aprobado sin autorización del obispo',
                'Preparar un resumen anual del uso del presupuesto para la reunión de evaluación de fin de año',
              ],
            },
            {
              type: 'paragraph',
              text: 'Los fondos de la Sociedad de Socorro no son recursos de la presidenta — son recursos del Señor, administrados a través del barrio para el bienestar de las hermanas. Esa perspectiva de mayordomía cambia cómo la secretaria registra, reporta y protege cada peso o dólar del presupuesto. La transparencia con los recursos es una expresión de integridad en el llamamiento.',
            },
          ],
        },
        {
          id: 't4',
          title: 'El Directorio y el Sistema de Seguimiento',
          blocks: [
            {
              type: 'paragraph',
              text: 'La secretaria mantiene actualizado el directorio de las hermanas del barrio: nombres, contactos, estado de actividad, asignaciones de ministerio y cualquier información relevante que la presidenta necesite para ejercer su responsabilidad pastoral. Un directorio desactualizado es un obstáculo al ministerio; uno actualizado es una herramienta pastoral de primer orden.',
            },
            {
              type: 'steps',
              title: 'Cómo mantener el directorio actualizado',
              steps: [
                'Revisar el directorio oficial de la Iglesia (Leader and Clerk Resources o la app) al inicio de cada mes',
                'Confirmar con la primera consejera que las asignaciones de ministerio están actualizadas',
                'Registrar cuando una hermana nueva se muda al barrio — notificar a la presidenta dentro de las 48 horas',
                'Registrar cuando una hermana se muda fuera del barrio para que se libere su asignación de ministerio',
                'Identificar a las hermanas cuya información de contacto está incompleta o desactualizada y coordinar la actualización',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Está el directorio de las hermanas del barrio actualizado a la fecha de hoy? ¿Sé cuántas hermanas activas, menos activas e inactivas hay en el barrio? ¿Tiene cada hermana activa compañeras ministradoras asignadas?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Informe Mensual y Comunicación con el Obispado',
      intro: {
        romanNumeral: 'III',
        title: 'El Reporte como Herramienta de Liderazgo',
        paragraphs: [
          'La secretaria prepara el informe mensual de la Sociedad de Socorro que la presidenta lleva al consejo de barrio. Ese informe no es un formulario burocrático — es la voz documentada de las hermanas del barrio ante el obispado. Prepararlo bien requiere saber qué información es útil, qué es confidencial, y cómo presentar las necesidades de una manera que permita al obispo actuar.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Preparar el Informe Mensual para el Consejo de Barrio',
          blocks: [
            {
              type: 'paragraph',
              text: 'El informe mensual de la Sociedad de Socorro al consejo de barrio debe ser conciso, útil y accionable. No es una lista de actividades pasadas — es un reporte del estado pastoral de las hermanas del barrio y de las necesidades que requieren atención de todo el liderazgo del barrio. La secretaria lo prepara en coordinación con la presidenta, y la presidenta lo presenta.',
            },
            {
              type: 'steps',
              title: 'Plantilla para el informe mensual de la Sociedad de Socorro',
              steps: [
                'Asistencia del mes: número de hermanas asistentes en promedio, comparado con el mes anterior',
                'Estado del ministerio: porcentaje de hermanas con compañeras ministradoras asignadas; número de visitas completadas vs. pendientes',
                'Nuevas hermanas: mudanzas recientes que requieren bienvenida y asignación de ministerio',
                'Hermanas que necesitan atención especial (sin nombres si hay privacidad involucrada): situaciones de salud, familia, bienestar temporal',
                'Necesidades que requieren recursos del barrio o acción del obispo',
                'Logros del mes: servicio de compasión brindado, actividades realizadas, momentos de fortaleza espiritual colectiva',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Qué información es confidencial en el reporte',
              body: 'El informe mensual al consejo de barrio no debe incluir detalles personales o sensibles de las hermanas sin su consentimiento. Cuando hay una necesidad específica que el obispo debe conocer, la secretaria y la presidenta deben discutir qué información compartir en el consejo (donde hay más personas) versus qué reservar para la reunión privada entre la presidenta y el obispo. La regla general: lo que involucra pecado, abuso, salud mental o situaciones legales va al obispo en privado, no al consejo de barrio.',
            },
          ],
        },
        {
          id: 't6',
          title: 'El Ministerio de la Administración',
          blocks: [
            {
              type: 'paragraph',
              text: 'La secretaria puede sentir a veces que su llamamiento es de segunda categoría — que los llamados "pastorales" son los que realmente importan, mientras ella toma notas. Esa percepción no refleja la realidad del evangelio. Las hermanas del barrio son atendidas porque la presidencia funciona. La presidencia funciona porque hay un sistema de información que la sostiene. Ese sistema tiene una persona responsable: la secretaria.',
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 58:27',
              text: 'No os conviene que seáis mandados en todas las cosas; porque el que es compelido en todas las cosas es un siervo perezoso y no sabio; por tanto, no recibe ninguna recompensa.',
            },
            {
              type: 'reflection',
              prompt: '¿Ejerzo mi llamamiento con la misma devoción que si fuera presidenta? ¿O me percibo a mí misma como una asistente en lugar de como una líder con responsabilidades propias?',
            },
          ],
        },
      ],
    },
  ],
}
