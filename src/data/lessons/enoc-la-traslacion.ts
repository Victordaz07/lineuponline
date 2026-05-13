import type { Lesson } from '@/types/doctrine'

export const enocLaTraslacion: Lesson = {
  id: 'enoc-la-traslacion',
  moduleId: 'personajes-escrituras',
  title: 'La Traslación',
  subtitle: 'La ciudad arrebatada — y su promesa de regreso',
  description: 'Cuando la tierra se volvió demasiado malvada para Sión, Dios arrebató la ciudad entera. DyC 45 revela que Enoc y su pueblo esperan hasta que la nueva Sión esté lista para recibirlos.',
  level: 'AVANZADO',
  icon: '⬆️',
  duration: 15,
  order: 3013,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'enoc',
  studySections: [
    {
      id: 's4',
      title: 'El Regreso de Enoc',
      intro: { romanNumeral: 'IV', title: 'DyC 45 — La Promesa del Milenio', paragraphs: ['Sión vuelve'] },
      topics: [
        {
          id: 't4',
          title: 'La promesa pendiente',
          blocks: [
            { type: 'highlight_verse', reference: 'DyC 45:11-12', text: 'Y con Enoc y su pueblo, que se aguardarán hasta una temporada; y la tierra descansará. Y luego será levantada y coronada con gloria, incluso con la presencia de Dios el Padre.' },
            { type: 'paragraph', text: 'La historia de Enoc no terminó cuando su ciudad fue arrebatada. DyC 45 revela que Enoc y su pueblo están esperando — preservados — hasta el día en que la nueva Sión terrenal esté lista para recibirlos. El proyecto de Sión que Enoc comenzó es el mismo que los Santos de los Últimos Días están construyendo hoy.' },
            { type: 'reflection', prompt: '¿Qué haría falta en tu comunidad local para que fuera una Sión? ¿Qué cambio comenzaría en ti?' },
          ],
        },
      ],
    },
  ],
}
