import type { Lesson } from '@/types/doctrine'

export const job: Lesson = {
  id: 'job',
  moduleId: 'personajes-escrituras',
  title: 'Job — El Sufrimiento del Justo',
  subtitle: '¿Por qué sufre quien no merece sufrir?',
  description: 'Job perdió sus hijos, su salud y su fortuna en un solo día — y Dios lo permitió. Sus tres amigos dieron respuestas teológicas incorrectas. Job los superó. Y al final Dios habló desde el torbellino. Job 19:25-27 es la declaración de fe más audaz del Antiguo Testamento.',
  level: 'AVANZADO',
  icon: '🌪️',
  duration: 70,
  order: 45,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Juego en el Cielo',
      intro: { romanNumeral: 'I', title: 'Job 1-2 — La Escena que Job nunca Vio', paragraphs: ['El drama detrás del sufrimiento'] },
      topics: [
        {
          id: 't1',
          title: 'La apuesta divina',
          blocks: [
            { type: 'paragraph', text: 'Job 1-2 revela al lector algo que Job nunca supo: su sufrimiento fue el resultado de un desafío de Satanás ante la corte celestial. "¿Acaso teme Job a Dios de balde?" La tesis de Satanás: Job solo es fiel porque le va bien. Quita las bendiciones y maldecirá a Dios. La respuesta de Dios fue permitir que Satanás lo probara — con límites. Esta estructura narrativa es perturbadora: el hombre más recto de la tierra sufre como experimento teológico.' },
            { type: 'highlight_verse', reference: 'Job 1:21', text: 'Y dijo: Desnudo salí del vientre de mi madre, y desnudo volveré allá. Jehová dio, y Jehová quitó; sea el nombre de Jehová bendito.' },
            { type: 'doctrine_box', title: 'Lo que Job no Sabía', body: 'El libro de Job es único porque el lector sabe desde el principio lo que Job ignora: la razón de su sufrimiento. Esto crea una ironía profunda: cuando los amigos de Job argumentan que sufre por sus pecados, el lector sabe que están equivocados. Cuando Job insiste en su inocencia, el lector sabe que tiene razón. La estructura del libro enseña que no siempre podemos conocer la razón del sufrimiento — pero podemos conocer el carácter de quien lo permite.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los Tres Amigos — Teología Incorrecta',
      intro: { romanNumeral: 'II', title: '"Pecaste, Por Eso Sufres"', paragraphs: ['El error teológico que Dios corrigió al final'] },
      topics: [
        {
          id: 't2',
          title: 'La teología de la prosperidad al revés',
          blocks: [
            { type: 'paragraph', text: 'Elifaz, Bildad y Zofar ofrecieron variaciones del mismo argumento: los justos prosperan, los impíos sufren; Job sufre, por tanto Job pecó. Esta teología de la retribución proporcional suena razonable y está basada en partes del Antiguo Testamento (como Deuteronomio 28). El problema es que es incompleta — no da cuenta del sufrimiento de los inocentes. Dios, al final, dice explícitamente que los amigos "no hablaron de mí lo recto" (Job 42:7).' },
            { type: 'key_points', title: 'Los errores de los amigos de Job', points: [
              'Asumieron que todo sufrimiento tiene causa en el pecado personal',
              'No consideraron el sufrimiento como prueba o como formación',
              'Argumentaban desde principios generales sin escuchar la experiencia de Job',
              'Priorizaron defender su teología sobre consolar a su amigo',
            ]},
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Job 19 — La Fe más Audaz del AT',
      intro: { romanNumeral: 'III', title: '"Yo Sé que Mi Redentor Vive"', paragraphs: ['La declaración de fe en la resurrección'] },
      topics: [
        {
          id: 't3',
          title: 'Fe sin evidencia, en el peor momento',
          blocks: [
            { type: 'highlight_verse', reference: 'Job 19:25-27', text: 'Yo sé que mi Redentor vive, y al fin se levantará sobre el polvo; y después de deshecha esta mi piel, en mi carne he de ver a Dios; al cual veré por mí mismo, y mis ojos lo verán, y no otro, aunque mi corazón desfallece dentro de mí.' },
            { type: 'paragraph', text: 'Job pronunció estas palabras en el momento más bajo de su vida — enfermo, en cenizas, sin hijos, sin dinero, rodeado de amigos que lo acusan. Y declara: "Yo sé que mi Redentor vive." No "espero" ni "creo que quizás" — "YO SÉ." Su conocimiento del Redentor no dependía de sus circunstancias. Es la declaración de fe más audaz del Antiguo Testamento — y la más hermosa.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Dios Habla desde el Torbellino',
      intro: { romanNumeral: 'IV', title: 'Job 38-41 — Las Preguntas más Inesperadas', paragraphs: ['La respuesta de Dios que no es una respuesta'] },
      topics: [
        {
          id: 't4',
          title: 'Dios no explica, revela',
          blocks: [
            { type: 'paragraph', text: 'Cuando Dios finalmente habla (Job 38), no da las explicaciones que Job pedía. En cambio, hace preguntas: "¿Dónde estabas tú cuando yo fundaba la tierra? ¿Quién encerró con puertas el mar? ¿Tienes tú brazos como Dios?" No es una respuesta teológica — es una revelación de la grandeza de Dios que pone el sufrimiento en perspectiva. Job no recibe explicación. Recibe a Dios mismo.' },
            { type: 'highlight_verse', reference: 'Job 42:5', text: 'De oídas te había oído; mas ahora mis ojos te ven.' },
            { type: 'paragraph', text: 'La transformación de Job no fue intelectual sino experiencial: antes sabía DE Dios; ahora conoce A Dios. El sufrimiento que no pudo explicar se convirtió en el camino a un conocimiento de Dios que no habría obtenido de otra manera. Esta es la lección más profunda del libro: el sufrimiento no siempre se explica, pero puede transformar.' },
            { type: 'reflection', prompt: '¿Has experimentado, como Job, un período de sufrimiento que no tenía explicación aparente? ¿Qué cambió en tu conocimiento de Dios a través de esa experiencia?' },
          ],
        },
      ],
    },
  ],
}
