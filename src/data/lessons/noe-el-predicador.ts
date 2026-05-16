import type { Lesson } from '@/types/doctrine'

export const noeElPredicador: Lesson = {
  id: 'noe-el-predicador',
  moduleId: 'personajes-escrituras',
  title: 'El Predicador',
  subtitle: '120 años, cero conversiones',
  description: 'Noé predicó durante 120 años sin convertir a nadie. ¿Fue un fracaso? La fidelidad sin resultado visible es también una forma de éxito ante Dios.',
  level: 'INTERMEDIO',
  icon: '📣',
  duration: 15,
  order: 3110,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'noe',
  studySections: [
    {
      id: 's1',
      title: '120 Años de Predicación Sin Fruto',
      intro: { romanNumeral: 'I', title: 'El Profeta que Nadie Escuchó', paragraphs: ['La misión más solitaria de la historia'] },
      topics: [
        {
          id: 't1',
          title: 'El contexto de la maldad',
          blocks: [
            { type: 'paragraph', text: 'Génesis 6:5 describe la condición humana en tiempos de Noé: "vio Jehová que la maldad de los hombres era mucha en la tierra, y que todo designio de los pensamientos del corazón de ellos era de continuo solamente el mal." El texto hebreo es enfático: no solo actos malos, sino pensamientos completamente corrompidos. Noé predicó en ese contexto durante más de un siglo.' },
            { type: 'highlight_verse', reference: 'Génesis 6:8-9', text: 'Pero Noé halló gracia ante los ojos de Jehová. Estas son las generaciones de Noé: Noé, varón justo, era perfecto en sus generaciones; con Dios caminó Noé.' },
            { type: 'paragraph', text: 'La frase "perfecto en sus generaciones" en hebreo (tamim be-dorotav) tiene doble lectura: (1) intachable en su conducta ética, (2) sin mezcla con las generaciones corrompidas. La Restauración añade que Noé fue Gabriel antes de nacer — el mismo ángel que visitó a María. Su papel en la historia divina es mucho más grande de lo que Génesis revela.' },
          ],
        },
      ],
    },
  ],
}
