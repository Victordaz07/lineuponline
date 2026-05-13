import type { Lesson } from '@/types/doctrine'

export const noeElPacto: Lesson = {
  id: 'noe-el-pacto',
  moduleId: 'personajes-escrituras',
  title: 'El Pacto del Arco Iris',
  subtitle: 'La primera alianza post-diluvio',
  description: 'El arco iris no es solo una señal meteorológica — es el sello de un convenio eterno. Dios prometió nunca más destruir la tierra por agua. Pero prometió fuego.',
  level: 'INTERMEDIO',
  icon: '🌈',
  duration: 15,
  order: 3113,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'noe',
  studySections: [
    {
      id: 's4',
      title: 'El Pacto del Arco Iris',
      intro: { romanNumeral: 'IV', heading: 'Un Pacto para Siempre', subheading: 'DyC 133:54-56 — la señal que siempre veremos' },
      topics: [
        {
          id: 't4',
          title: 'El primer pacto con toda la humanidad',
          blocks: [
            { type: 'highlight_verse', id: 'v3', reference: 'Génesis 9:13-15', text: 'Mi arco he puesto en las nubes, el cual será por señal del pacto entre mí y la tierra. Y sucederá que cuando haga venir nubes sobre la tierra, se dejará ver entonces mi arco en las nubes. Y me acordaré del pacto mío.' },
            { type: 'paragraph', id: 'p5', text: 'El arco iris es el primer símbolo de pacto de la Biblia — y es unilateral: Dios no pide nada a cambio. Solo promete. Este pacto precede al abrahámico, al mosaico, y al nuevo pacto de Cristo. DyC 133:54-56 confirma que este pacto seguirá vigente en el milenio. Noé es el patriarca del nuevo comienzo — un segundo Adán después del diluvio.' },
            { type: 'reflection', id: 'r1', prompt: '¿En qué momento de tu vida has sentido que Dios te daba una promesa no por lo que merecías sino por pura gracia, como el pacto del arco iris? ¿Cómo respondiste a esa promesa?' },
          ],
        },
      ],
    },
  ],
}
