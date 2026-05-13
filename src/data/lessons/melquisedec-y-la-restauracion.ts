import type { Lesson } from '@/types/doctrine'

export const melquisedecYLaRestauracion: Lesson = {
  id: 'melquisedec-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  title: 'Melquisedec y la Restauración',
  subtitle: 'El nombre que la Restauración rechazó cambiar',
  description: 'DyC 107 dice que el sacerdocio mayor fue originalmente llamado \'el Santo Sacerdocio según el Orden del Hijo de Dios\' — y que se cambió a \'Melquisedec\' en su honor. La Restauración preservó ese honor.',
  level: 'AVANZADO',
  icon: '🌅',
  duration: 15,
  order: 3214,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'melquisedec',
  studySections: [
    {
      id: 's5',
      title: 'Un Nombre que Honra a un Hombre',
      intro: { romanNumeral: 'V', heading: 'Un Nombre que Honra a un Hombre', subheading: 'DyC 107:2-4 — La razón del nombre' },
      topics: [
        {
          id: 't5',
          title: 'El nombre que tomó el lugar del nombre de Dios',
          blocks: [
            { type: 'highlight_verse', id: 'v1', reference: 'DyC 107:2-4', text: 'Por qué se llama el Sacerdocio de Melquisedec, porque Melquisedec era tan gran sumo sacerdote, que su nombre fue conferido al sacerdocio para evitar la repetición demasiado frecuente del nombre del Ser Supremo.' },
            { type: 'paragraph', id: 'p1', text: 'El hecho de que el sacerdocio lleve el nombre de Melquisedec es en sí una declaración teológica. Tan grande fue su fidelidad al orden del Hijo de Dios que la iglesia primitiva eligió su nombre para evitar nombrar a Dios directamente con demasiada frecuencia. Así es como el nombre más alto en la práctica religiosa pertenece a un hombre que aparece solo en dos versículos de Génesis.' },
            { type: 'paragraph', id: 'p2', text: 'En la Iglesia restaurada, cada élder sostiene el Sacerdocio de Melquisedec. Cada Sumo Sacerdote, Patriarca, Apóstol y Presidente ejerce autoridad bajo este orden. La sombra de Melquisedec cubre cada bendición del sacerdocio dada hoy — su nombre es el recordatorio diario de que los hombres mortales pueden alcanzar ese nivel de fidelidad.' },
            { type: 'reflection', id: 'r1', prompt: 'Cuando alguien te da una bendición del sacerdocio de Melquisedec, ¿qué cambia en cómo recibes esa bendición si recuerdas que el sacerdocio lleva el nombre de un hombre que convirtió a su ciudad entera y fue tan fiel que su nombre tomó el lugar del nombre de Dios?' },
          ],
        },
      ],
    },
  ],
}
