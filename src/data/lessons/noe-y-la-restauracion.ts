import type { Lesson } from '@/types/doctrine'

export const noeYLaRestauracion: Lesson = {
  id: 'noe-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  title: 'Noé y la Restauración',
  subtitle: 'El tipo de José Smith — preservar para una nueva era',
  description: 'Noé preservó el orden del mundo antiguo a través del diluvio para una dispensación nueva. José Smith preservó el evangelio a través de la Apostasía para la última dispensación. El paralelo es exacto.',
  level: 'INTERMEDIO',
  icon: '🌅',
  duration: 15,
  order: 3114,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'noe',
  studySections: [
    {
      id: 's5',
      title: 'Noé Como Tipo de la Restauración',
      intro: { romanNumeral: 'V', title: 'Noé Como Tipo de la Restauración', paragraphs: ['Preservación a través del caos para una nueva era'] },
      topics: [
        {
          id: 't5',
          title: 'El diluvio como tipo de la Apostasía',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'La Restauración usa el diluvio de Noé como tipo de la Gran Apostasía. Como las aguas cubrieron el mundo antiguo dejando solo a Noé y su familia con la fe verdadera, la Apostasía cubrió el mundo cristiano dejando solo fragmentos de verdad. Y como Noé emergió para construir un mundo nuevo, José Smith fue llamado para restaurar todo lo que se había perdido.' },
            { type: 'highlight_verse', id: 'v1', reference: 'DyC 84:14-16', text: 'Y [Moisés] recibió el sacerdocio de Jethro, su suegro, quien lo recibió de Caleb; y Caleb lo recibió de Elihu; y Elihu de Jeremy; y Jeremy de Gad; y Gad de Esaías; y Esaías lo recibió bajo la mano de Dios... quien era el séptimo desde Adán.' },
            { type: 'key_points', id: 'kp1', title: 'Las Paralelas entre Noé y la Restauración', points: [
              'Noé fue enviado a un mundo degenerado — José Smith a una apostasía de siglos',
              'El arca preservó vida física — la Restauración preservó vida espiritual',
              'El arco iris fue la señal del nuevo convenio — la primera Visión fue la señal de la dispensación final',
              'Noé construyó su arca contra la opinión popular — José construyó la Iglesia contra la oposición de su época',
            ]},
            { type: 'reflection', id: 'r1', prompt: '¿Cómo te identificas con Noé — alguien que construye algo en fe durante años sin ver los resultados inmediatos? ¿Qué "arca" estás construyendo en tu vida?' },
          ],
        },
      ],
    },
  ],
}
