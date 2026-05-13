import type { Lesson } from '@/types/doctrine'

export const enocElVidente: Lesson = {
  id: 'enoc-el-vidente',
  moduleId: 'personajes-escrituras',
  title: 'El Vidente',
  subtitle: 'La visión más expansiva del Antiguo Testamento',
  description: 'Enoc vio la historia completa de la humanidad — el diluvio, la vida de Cristo, la resurrección — todo antes de que ocurriera. Y vio algo que lo dejó sin palabras: Dios lloraba.',
  level: 'AVANZADO',
  icon: '👁️',
  duration: 15,
  order: 3011,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'enoc',
  studySections: [
    {
      id: 's2',
      title: 'El Vidente que Vio Todo',
      intro: { romanNumeral: 'II', heading: 'La Visión de la Eternidad', subheading: 'Moisés 7 — lo que ningún otro vio' },
      topics: [
        {
          id: 't2',
          title: 'Enoc vio el plan completo',
          blocks: [
            { type: 'paragraph', id: 'p3', text: 'En Moisés 7, Enoc recibe una de las visiones más expansivas de toda la escritura. Ve la historia de la humanidad desde Adán hasta la Segunda Venida. Ve el diluvio. Ve la vida mortal de Cristo, su crucifixión. Ve la resurrección. Ve la reunión de Sión con la tierra en los últimos días. Todo antes de que sucediera nada de ello.' },
            { type: 'highlight_verse', id: 'v2', reference: 'Moisés 7:47', text: 'Y Enoc contempló al día del Hijo del Hombre en la carne, y su alma se regocijó, diciendo: El Justo es levantado, y el Cordero es muerto desde la fundación del mundo.' },
            { type: 'doctrine_box', id: 'db1', title: 'Dios Llora — Moisés 7:28-29', content: 'Enoc ve algo que lo desconcierta profundamente: Dios llora. "¿Cómo es posible que llores, viendo que eres santo?", pregunta. La respuesta de Dios revela una teología de la emoción divina única en toda la escritura: Dios llora por Sus hijos que se pierden. La Restauración devuelve un Dios que siente, que ama, que sufre con Sus hijos — no el Primer Motor Inmóvil de Aristóteles.' },
          ],
        },
      ],
    },
  ],
}
