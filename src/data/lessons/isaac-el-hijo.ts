import type { Lesson } from '@/types/doctrine'

export const isaacElHijo: Lesson = {
  id: 'isaac-el-hijo',
  moduleId: 'personajes-escrituras',
  title: 'El Hijo de la Promesa',
  subtitle: 'Nacido de lo imposible',
  description: 'Isaac nació cuando todo decía que era imposible. Su nacimiento fue el cumplimiento de una promesa hecha décadas antes a un matrimonio estéril. Su nombre — \'risa\' — lo dice todo.',
  level: 'INTERMEDIO',
  icon: '👦',
  duration: 15,
  order: 3310,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'isaac',
  studySections: [
    {
      id: 's1',
      title: 'El Hijo de la Promesa Imposible',
      intro: { romanNumeral: 'I', title: '"Risa" — El Nombre lo Dice Todo', paragraphs: ['Sara se rió; Dios cumplió'] },
      topics: [
        {
          id: 't1',
          title: 'Nacido contra toda lógica',
          blocks: [
            { type: 'paragraph', text: 'Isaac nació cuando Abraham tenía 100 años y Sara 90. No es hipérbole: Hebreos 11:11-12 lo confirma. Su nacimiento fue milagroso no solo biológicamente sino teológicamente — toda la promesa de la descendencia de Abraham descansaba sobre este único hijo. Su nombre, "Yitzhak" en hebreo, significa "él ríe" o "risa" — en honor a la risa de incredulidad de Sara cuando escuchó la promesa (Génesis 18:12) y a la risa de gozo cuando se cumplió (Génesis 21:6).' },
            { type: 'highlight_verse', reference: 'Génesis 21:6', text: 'Y dijo Sara: Dios me ha hecho reír, y cualquiera que lo oyere, se reirá conmigo.' },
          ],
        },
      ],
    },
  ],
}
