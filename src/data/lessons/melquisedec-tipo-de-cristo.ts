import type { Lesson } from '@/types/doctrine'

export const melquisedecTipoDeCristo: Lesson = {
  id: 'melquisedec-tipo-de-cristo',
  moduleId: 'personajes-escrituras',
  title: 'El Tipo de Cristo',
  subtitle: 'Pan, vino y la prefiguración del Salvador',
  description: 'Melquisedec ofreció pan y vino a Abraham — el tipo más claro de la Santa Cena en el Antiguo Testamento. Cristo es Sumo Sacerdote según el orden de Melquisedec, no de Aarón.',
  level: 'AVANZADO',
  icon: '🌟',
  duration: 15,
  order: 3212,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'melquisedec',
  studySections: [
    {
      id: 's3',
      title: 'Alma 13 — Lo que el Libro de Mormón Añade',
      intro: { romanNumeral: 'III', title: 'Preordenado antes de Nacer', paragraphs: ['El origen eterno del sacerdocio'] },
      topics: [
        {
          id: 't3',
          title: 'Llamados desde el principio',
          blocks: [
            { type: 'highlight_verse', reference: 'Alma 13:3', text: 'Y esto es el modo según el cual fueron llamados según la preparación de Dios desde la fundación del mundo, a causa de su fe y sus buenas obras; en el primer estado de su existencia siendo dejados a su propia agencia, eligieron el bien.' },
            { type: 'paragraph', text: 'Alma 13 revela que los sumos sacerdotes — incluyendo Melquisedec — fueron llamados y preparados en la preexistencia. Su sacerdocio no fue accidental ni solo genealógico: fue el resultado de sus elecciones en la vida premortal. Esto conecta el sacerdocio con la doctrina de la preexistencia de una manera que ningún otro texto del canon bíblico hace.' },
            { type: 'paragraph', text: 'Alma también revela el nombre de la ciudad de Melquisedec: Salem/Jerusalén estaba llena de maldad, y Melquisedec "ejerció un poderoso ministerio entre su pueblo" y los trajo al arrepentimiento, convirtiéndola en una ciudad de paz. Por eso se le llamó "Príncipe de Paz" — antes que Cristo, Melquisedec trajo paz a su ciudad como tipo del Príncipe de Paz eterno.' },
          ],
        },
      ],
    },
  ],
}
