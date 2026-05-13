import type { Lesson } from '@/types/doctrine'

export const jacobYLaRestauracion: Lesson = {
  id: 'jacob-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  title: 'Israel y la Restauración',
  subtitle: 'El nombre del pueblo eterno',
  description: 'La Restauración no abandonó el nombre de Israel — lo adoptó. Los Santos de los Últimos Días son literalmente \'la Casa de Israel.\' Las tribus dispersas serán reunidas. El convenio de Jacob es el convenio de la Restauración.',
  level: 'INTERMEDIO',
  icon: '🌅',
  duration: 15,
  order: 3414,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'jacob-israel',
  studySections: [
    {
      id: 's5',
      title: 'El Nombre de Israel en la Restauración',
      intro: { romanNumeral: 'V', title: 'El Nombre de Israel en la Restauración', paragraphs: ['DyC 110 — las llaves de la reunión de Israel'] },
      topics: [
        {
          id: 't5',
          title: 'Las llaves que llegaron del cielo',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'En Kirtland, Ohio, el 3 de abril de 1836, después de la dedicación del templo, Moisés apareció a José Smith y Oliver Cowdery y les entregó las llaves de la reunión de Israel. Luego Elías apareció. Luego Elías el profeta. Cada aparición tenía que ver directamente con el convenio de Jacob/Israel — la promesa de que sus descendientes serían reunidos de los cuatro ángulos de la tierra.' },
            { type: 'highlight_verse', id: 'v1', reference: 'DyC 110:11', text: 'Después de esta visión, se nos presentó Moisés y entregó las llaves de la congregación de Israel desde los cuatro ángulos de la tierra y de la guía de las diez tribus del país del norte.' },
            { type: 'key_points', id: 'kp1', title: 'Israel en la Restauración', points: [
              'Los Santos de los Últimos Días reciben la promesa de Israel en sus bendiciones patriarcales',
              'La obra misional es literalmente la "reunión de Israel"',
              'El bautismo por los muertos extiende el convenio a los israelitas de generaciones pasadas',
              'Los doce apóstoles de la Restauración gobiernan las doce tribus de Israel en la eternidad (DyC 29:12)',
            ]},
            { type: 'reflection', id: 'r1', prompt: '¿Cuál es tu tribu de Israel según tu bendición patriarcal? ¿Qué significa para ti ser literalmente descendiente (por nacimiento o adopción) del hombre que luchó con Dios y ganó su nombre?' },
          ],
        },
      ],
    },
  ],
}
