import type { Lesson } from '@/types/doctrine'

export const elderesSecretario: Lesson = {
  id: 'elderes-secretario',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'elderes-lideres',
  title: 'El Secretario del Cuórum de Élderes',
  subtitle: 'Administración al servicio del ministerio',
  description:
    'El secretario del Cuórum de Élderes mantiene los registros que permiten que la presidencia ejerza su responsabilidad pastoral. Toma minutas, administra las asignaciones de ministerio, registra la asistencia, prepara los informes para el obispado y administra el presupuesto del cuórum. Su trabajo administrativo es un acto de servicio que sostiene el ministerio de toda la presidencia.',
  level: 'BÁSICO',
  icon: '📋',
  duration: 25,
  order: 9532,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Papel Administrativo del Secretario',
      intro: {
        romanNumeral: 'I',
        title: 'Los Registros del Cuórum: Una Responsabilidad Sagrada',
        paragraphs: [
          'El secretario del cuórum puede sentir que su llamamiento es el más periférico de la presidencia — que los otros líderes hacen el "trabajo real" mientras él toma notas. Esa percepción no refleja la realidad. Sin un secretario diligente, la presidencia pierde la memoria institucional de su trabajo pastoral, los registros de ministerio se desactualizan, las necesidades identificadas se olvidan antes de atenderse, y el obispado no recibe los reportes que necesita para coordinar el cuidado del barrio.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Las Responsabilidades Centrales del Secretario',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las responsabilidades del secretario del cuórum abarcan cuatro áreas: registros (asistencia, ministerio, directorio), minutas de presidencia, presupuesto y finanzas, y comunicación con el obispado. Cada una de estas áreas requiere trabajo consistente durante la semana — no solo los domingos.',
            },
            {
              type: 'key_points',
              title: 'Responsabilidades centrales del secretario del cuórum',
              points: [
                'Asistir a todas las reuniones de presidencia y tomar minutas detalladas',
                'Mantener el registro actualizado de asistencia del cuórum (semanal)',
                'Administrar la lista de asignaciones de ministerio de los hermanos',
                'Administrar el presupuesto del cuórum y registrar todos los gastos',
                'Preparar el informe mensual del cuórum para el consejo de barrio',
                'Mantener actualizado el directorio del cuórum (nombres, contactos, estado de actividad)',
                'Coordinar la comunicación de la presidencia hacia los hermanos del cuórum',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Por qué el registro importa',
              body: 'Desde los primeros días de la Iglesia, el Señor instruyó que se llevaran registros cuidadosos (Doctrina y Convenios 128:7). Para el cuórum de élderes, esos registros tienen un valor práctico inmediato: permiten a la presidencia saber quién necesita atención, qué compromisos se tomaron y si se cumplieron, y qué hermanos han dejado de asistir. Sin esa información, la presidencia no puede ejercer su responsabilidad pastoral con eficacia.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Mantener las Asignaciones de Ministerio Actualizadas',
          blocks: [
            {
              type: 'paragraph',
              text: 'El sistema de ministerio del cuórum solo funciona si las asignaciones están actualizadas y los hermanos saben quiénes son sus asignados. El secretario es responsable de ese registro. Cuando un hermano nuevo llega al barrio, el secretario notifica a la presidencia para que se le asigne un hermano ministro. Cuando alguien se muda, el secretario actualiza el registro para liberar esa asignación.',
            },
            {
              type: 'steps',
              title: 'Cómo mantener el registro de asignaciones de ministerio',
              steps: [
                'Revisar mensualmente la lista de asignaciones de ministerio con el primer consejero',
                'Cuando un hermano nuevo llega al barrio: notificar a la presidencia dentro de 48 horas para asignar hermano ministro',
                'Cuando un hermano se muda fuera del barrio: actualizar el registro y liberar sus asignaciones',
                'Verificar que cada familia y hermano soltero del barrio tiene un hermano ministro asignado',
                'Si un hermano ministro no ha podido visitar a sus asignados en más de un mes: notificar al primer consejero',
                'Mantener la lista sincronizada con el sistema oficial de la Iglesia (Leader and Clerk Resources)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Reportes al Obispado',
      intro: {
        romanNumeral: 'II',
        title: 'La Información que Fluye Hacia Arriba',
        paragraphs: [
          'El obispo dirige el barrio con información. El secretario del cuórum es uno de los canales a través de los cuales esa información llega al obispado. Un reporte mensual bien preparado permite al obispo conocer el estado del cuórum y coordinar la respuesta del barrio a las necesidades identificadas.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Informe Mensual del Cuórum de Élderes',
          blocks: [
            {
              type: 'paragraph',
              text: 'El informe mensual del cuórum que el presidente presenta al consejo de barrio es preparado por el secretario en coordinación con la presidencia. No es una lista de actividades pasadas — es un reporte del estado pastoral del cuórum y las necesidades que requieren atención del barrio. Prepararlo bien requiere que el secretario haya consolidado la información del mes anterior: asistencia, ministerio, necesidades identificadas, respuestas coordinadas.',
            },
            {
              type: 'key_points',
              title: 'Contenido del informe mensual del cuórum de élderes',
              points: [
                'Asistencia promedio del mes, comparada con el mes anterior',
                'Estado del ministerio: porcentaje de hermanos con asignaciones actualizadas; visitas completadas vs. pendientes',
                'Nuevos hermanos en el barrio que necesitan integración al cuórum',
                'Hermanos menos activos con los que se estableció o renovó contacto',
                'Necesidades temporales o espirituales identificadas que requieren atención del barrio',
                'Logros del mes: servicios prestados, actividades realizadas, conversiones o reactivaciones',
              ],
            },
          ],
        },
        {
          id: 't4',
          title: 'Qué Información es Confidencial',
          blocks: [
            {
              type: 'paragraph',
              text: 'El secretario tendrá acceso a información sensible sobre los hermanos del cuórum: situaciones de salud, problemas económicos, dificultades familiares, luchas espirituales. Esa información fue compartida con la presidencia con confianza. El secretario no la difunde, no la incluye en el informe mensual en detalle que exponga a los hermanos, y no la comparte en conversaciones informales.',
            },
            {
              type: 'doctrine_box',
              title: 'La regla de confidencialidad en el reporte',
              body: 'En el informe mensual al consejo de barrio, las necesidades específicas de personas deben referirse sin identificar al hermano por nombre cuando la situación es sensible. Lo que involucra pecado, salud mental, problemas legales o abuso va directamente del presidente al obispo en privado — no al consejo de barrio. El secretario ayuda al presidente a preparar ese reporte privado de manera precisa, pero entiende que él mismo no lleva esa información al obispo directamente: el presidente es quien presenta.',
            },
            {
              type: 'reflection',
              prompt: '¿Tengo un sistema personal para distinguir qué información del cuórum es apropiada compartir en el reporte al consejo de barrio y qué debe guardarse solo para la reunión privada del presidente con el obispo?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Secretario También Es Ministro',
      intro: {
        romanNumeral: 'III',
        title: 'Administrar es Servir, No Solo Gestionar',
        paragraphs: [
          'El secretario tiene responsabilidades administrativas, pero sigue siendo un élder del cuórum con asignaciones de ministerio propias. Su trabajo administrativo no lo exime de visitar a sus hermanos asignados — lo que hace es una expresión diferente del mismo llamamiento de discipulado.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El Secretario como Élder y como Ministro',
          blocks: [
            {
              type: 'paragraph',
              text: 'Algunos secretarios entienden su llamamiento como exclusivamente administrativo y descuidan sus responsabilidades de ministerio personal. Eso es un error. El secretario tiene asignaciones de ministerio como cualquier otro élder del cuórum. Sus responsabilidades administrativas son adicionales a esas asignaciones — no las reemplazan. Un secretario que registra fielmente las visitas de ministerio de otros hermanos pero nunca visita a sus propios asignados vive una contradicción que eventualmente erosiona su entusiasmo por el llamamiento.',
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 81:5',
              text: 'Por tanto, sé fiel... ten cuidado de los que están a tu alrededor para llorar con los que lloran; sí, y compadécete de los afligidos, a fin de que sus almas puedan ser consoladas.',
            },
            {
              type: 'paragraph',
              text: 'El trabajo administrativo del secretario es una forma de cuidar a los hermanos del cuórum — asegura que nadie quede sin atención, que los compromisos se cumplan, que las necesidades lleguen a quien puede atenderlas. Esa es una forma de ministerio. Y sus visitas personales a sus hermanos asignados son otra forma. Las dos juntas constituyen el llamamiento completo del secretario.',
            },
          ],
        },
        {
          id: 't6',
          title: 'Presupuesto y Mayordomía de los Recursos del Cuórum',
          blocks: [
            {
              type: 'paragraph',
              text: 'El cuórum de élderes recibe un presupuesto del barrio para sus actividades. El secretario administra ese presupuesto: registra todos los gastos, verifica que no se supere el monto asignado, y presenta el estado financiero a la presidencia mensualmente. Administrar el presupuesto con fidelidad — sin gastos no autorizados, con transparencia total — es una expresión de integridad en el llamamiento.',
            },
            {
              type: 'key_points',
              title: 'Responsabilidades de presupuesto del secretario',
              points: [
                'Conocer el presupuesto anual asignado al cuórum de élderes por el barrio',
                'Registrar cada gasto con comprobante — sin excepciones',
                'Alertar al presidente cuando el saldo disponible caiga por debajo del 25% del presupuesto anual',
                'No aprobar gastos que superen el presupuesto sin autorización del presidente y del obispado',
                'Presentar el estado del presupuesto a la presidencia al inicio de cada mes',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Tengo un sistema organizado para los registros del cuórum, o trabajo de manera reactiva cada semana? ¿Qué aspecto de mis responsabilidades administrativas necesita más atención este mes?',
            },
          ],
        },
      ],
    },
  ],
}
