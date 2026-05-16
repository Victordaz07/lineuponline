import type { Lesson } from '@/types/doctrine'

export const isaacElSacrificio: Lesson = {
  id: 'isaac-el-sacrificio',
  moduleId: 'personajes-escrituras',
  title: 'El Monte Moriah',
  subtitle: 'El tipo de Cristo más perfecto del AT',
  description: 'Isaac cargó la leña para su propio sacrificio. Fue \'muerto\' para la fe de su padre y \'resucitado\' — en figura. Hebreos 11 dice que Abraham recibió a Isaac de vuelta como \'en figura\' de resurrección.',
  level: 'INTERMEDIO',
  icon: '🪵',
  duration: 15,
  order: 3311,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'isaac',
  studySections: [
    {
      id: 's2',
      title: 'Génesis 22 — El Tipo más Perfecto de Cristo',
      intro: { romanNumeral: 'II', title: 'La Prueba más Grande de Abraham', paragraphs: ['Y el silencio de Isaac'] },
      topics: [
        {
          id: 't2',
          title: 'Lo que el texto no dice sobre Isaac',
          blocks: [
            { type: 'paragraph', text: 'En Génesis 22, el protagonista aparente es Abraham. Pero Josefo (Antigüedades Judías 1.13) relata una tradición que hace a Isaac consciente y voluntario: tenía aproximadamente 25 años cuando ocurrió el sacrificio. No fue un niño pequeño arrastrado por su padre — fue un joven adulto que se sometió voluntariamente. El silencio del texto bíblico sobre la respuesta de Isaac es elocuente.' },
            { type: 'key_points', title: 'Isaac como tipo de Cristo', points: [
              'Isaac es el hijo único amado (Génesis 22:2) → Cristo es el "Unigénito del Padre" (Juan 3:16)',
              'Isaac cargó la leña sobre sus hombros → Cristo cargó la cruz',
              'Ambos subieron al monte Moriah/Calvario para el sacrificio',
              'Isaac fue atado y puesto sobre la leña → Cristo fue clavado a la cruz',
              'Isaac fue "muerto" en la fe de Abraham y "resucitado" (Hebreos 11:19)',
              'Un carnero fue sacrificado en su lugar → Cristo murió en nuestro lugar',
            ]},
            { type: 'highlight_verse', reference: 'Hebreos 11:17-19', text: 'Por la fe Abraham, cuando fue probado, ofreció a Isaac; y el que había recibido las promesas ofrecía su unigénito... pensando que Dios es poderoso para levantar aun de entre los muertos, de donde, en sentido figurado, también le volvió a recibir.' },
          ],
        },
      ],
    },
  ],
}
