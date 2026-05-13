import type { Lesson } from '@/types/doctrine'

export const noe: Lesson = {
  id: 'noe',
  moduleId: 'personajes-escrituras',
  title: 'Noé — El Diluvio y el Pacto del Arco Iris',
  subtitle: '¿Fue el diluvio global o local?',
  description: 'Noé predicó durante 120 años sin convertir a nadie. Construyó el arca. Sobrevivió. Y el pacto con el arco iris cambió para siempre la relación de Dios con la humanidad.',
  level: 'INTERMEDIO',
  icon: '🌈',
  duration: 65,
  order: 31,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
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
    {
      id: 's3',
      title: '¿Global o Local? El Debate del Diluvio',
      intro: { romanNumeral: 'III', title: 'La Pregunta que Importa', paragraphs: ['Evidencia y perspectiva restaurada'] },
      topics: [
        {
          id: 't3',
          title: 'Las dos posiciones y la evidencia',
          blocks: [
            { type: 'compare_grid', title: 'Diluvio Global vs. Local', rows: [
              { label: 'Extensión', a: 'Cubre toda la tierra habitable conocida por Noé', b: 'Cubre todo el mundo geológico literal' },
              { label: 'Evidencia geológica', a: 'Estratos locales del Mar Negro (Ryan/Pitman)', b: 'Difícil de reconciliar con geología moderna' },
              { label: 'Texto hebreo', a: '"Eretz" = tierra/región, no necesariamente globo', b: '"Kol" (todo) puede ser hipérbole hebrea' },
              { label: 'Propósito teológico', a: 'Juzgar a toda la humanidad conocida del momento', b: 'Demostrar poder absoluto de Dios sobre la creación' },
            ]},
            { type: 'paragraph', text: 'La Iglesia no toma posición oficial sobre la extensión geológica del diluvio. Lo que sí es claro doctrinalmente: el diluvio fue un evento real, histórico, de escala suficiente para justificar el arca, y es un tipo del bautismo (1 Pedro 3:20-21 — las aguas del diluvio como tipo del bautismo que "ahora nos salva").' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Pacto del Arco Iris',
      intro: { romanNumeral: 'IV', title: 'Un Pacto para Siempre', paragraphs: ['DyC 133:54-56 — la señal que siempre veremos'] },
      topics: [
        {
          id: 't4',
          title: 'El primer pacto con toda la humanidad',
          blocks: [
            { type: 'highlight_verse', reference: 'Génesis 9:13-15', text: 'Mi arco he puesto en las nubes, el cual será por señal del pacto entre mí y la tierra. Y sucederá que cuando haga venir nubes sobre la tierra, se dejará ver entonces mi arco en las nubes. Y me acordaré del pacto mío.' },
            { type: 'paragraph', text: 'El arco iris es el primer símbolo de pacto de la Biblia — y es unilateral: Dios no pide nada a cambio. Solo promete. Este pacto precede al abrahámico, al mosaico, y al nuevo pacto de Cristo. DyC 133:54-56 confirma que este pacto seguirá vigente en el milenio. Noé es el patriarca del nuevo comienzo — un segundo Adán después del diluvio.' },
            { type: 'reflection', prompt: '¿En qué momento de tu vida has sentido que Dios te daba una promesa no por lo que merecías sino por pura gracia, como el pacto del arco iris? ¿Cómo respondiste a esa promesa?' },
          ],
        },
      ],
    },
  ],
}
