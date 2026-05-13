import type { Lesson } from '@/types/doctrine'

export const jacobElPadre: Lesson = {
  id: 'jacob-el-padre',
  moduleId: 'personajes-escrituras',
  title: 'El Padre de Doce Tribus',
  subtitle: 'Las bendiciones que fundaron una nación',
  description: 'Jacob/Israel tuvo doce hijos que se convirtieron en las doce tribus de Israel. Sus bendiciones patriarcales en Génesis 49 son proféticas — establecieron el destino de cada tribu. Israel existe porque de Jacob nació.',
  level: 'INTERMEDIO',
  icon: '👨‍👧‍👦',
  duration: 15,
  order: 3413,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'jacob-israel',
  studySections: [
    {
      id: 's4',
      title: 'Las 12 Tribus — El Legado de Israel',
      intro: { romanNumeral: 'IV', title: 'Un Hombre que se Convirtió en Nación', paragraphs: ['El pacto abrahámico continúa'] },
      topics: [
        {
          id: 't4',
          title: 'Sus hijos son nuestros padres',
          blocks: [
            { type: 'paragraph', id: 'p5', text: 'Los 12 hijos de Jacob/Israel — de cuatro mujeres distintas — se convirtieron en las 12 tribus de Israel. Cada tribu lleva en su nombre y en su historia el carácter de su padre: Rubén el primogénito inestable, Leví el sacerdotal, Judá el de quien desciende Cristo, José el visionario, Benjamín el más amado. La profecía de Jacob sobre sus hijos en Génesis 49 es una de las profecías mesiánicas más tempranas de la Biblia.' },
            { type: 'key_points', id: 'kp1', title: 'El Convenio Abrahámico a través de Jacob', points: [
              'Dios confirmó el convenio de Abraham a Jacob en Betel (Génesis 28:13-15)',
              'Las 12 tribus son el cumplimiento de "una gran nación"',
              'Judá lleva el linaje mesiánico — de él desciende Cristo (Génesis 49:10)',
              'El trabajo de unir los palos de Efraín y Judá (Ezequiel 37:16) es literal en la obra restaurada',
            ]},
            { type: 'reflection', id: 'r1', prompt: '¿Qué aspecto de tu carácter necesita el mismo cambio de nombre que Jacob/Israel experimentó? ¿Hay algo en ti que Dios quiere renombrar de "suplantador" a "príncipe"?' },
          ],
        },
      ],
    },
  ],
}
