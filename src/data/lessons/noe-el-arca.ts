import type { Lesson } from '@/types/doctrine'

export const noeElArca: Lesson = {
  id: 'noe-el-arca',
  moduleId: 'personajes-escrituras',
  title: 'El Arca',
  subtitle: 'La fe que se construye con madera',
  description: 'El arca no era un símbolo abstracto — era carpintería real, trabajo físico, fe operante. Noé construyó la salvación de su familia con sus propias manos durante décadas.',
  level: 'INTERMEDIO',
  icon: '🚢',
  duration: 15,
  order: 3111,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'noe',
  studySections: [
    {
      id: 's2',
      title: 'El Arca — Una Obra de Fe',
      intro: { romanNumeral: 'II', title: 'Construir sin Ver la Lluvia', paragraphs: ['Hebreos 11:7'] },
      topics: [
        {
          id: 't2',
          title: 'La fe que construye lo que no ve',
          blocks: [
            { type: 'highlight_verse', reference: 'Hebreos 11:7', text: 'Por la fe Noé, cuando fue advertido por Dios acerca de cosas que aún no se veían, con temor preparó el arca en que su casa se salvase; y por esa fe condenó al mundo, y fue hecho heredero de la justicia que es según la fe.' },
            { type: 'paragraph', text: 'Pablo incluye a Noé en su galería de héroes de la fe (Hebreos 11) con una observación sorprendente: al preparar el arca, Noé "condenó al mundo". No con palabras de juicio — con su acción. Cuando un hombre actúa en fe sobre lo que Dios le dijo, su obediencia es un testigo tácito contra quienes no creyeron.' },
          ],
        },
      ],
    },
  ],
}
