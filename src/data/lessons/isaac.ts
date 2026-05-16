import type { Lesson } from '@/types/doctrine'

export const isaac: Lesson = {
  id: 'isaac',
  moduleId: 'personajes-escrituras',
  title: 'Isaac — El Hijo de la Promesa',
  subtitle: 'El que cargó la leña de su propio sacrificio',
  description: 'Isaac es el personaje más silencioso de los patriarcas, pero también el más profundo tipo de Cristo: cargó la leña para su propio sacrificio, fue "muerto" para la fe de su padre y resucitó — en figura. Génesis 22 e interpretaciones de Josefo y Hebreos 11.',
  level: 'INTERMEDIO',
  icon: '🪵',
  duration: 60,
  order: 33,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
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
    {
      id: 's2',
      title: 'Génesis 22 — El Tipo más Perfecto de Cristo',
      intro: { romanNumeral: 'II', title: 'La Prueba más Grande de Abraham', paragraphs: ['Y el silencio de Isaac'] },
      topics: [
        {
          id: 't2',
          title: 'Lo que el texto no dice sobre Isaac',
          blocks: [
            { type: 'paragraph', text: 'En Génesis 22, el protagonista aparente es Abraham. Pero Josefo (Antigüedades Judías 1.13) relata una tradición que hace a Isaac consciente y voluntario: tenía aproximadamente 25 años cuando ocurrió el sacrificio. No fue un niño pequeño arrastrado por su padre — fue un joven adulto que se sometió voluntariamente. El silencio del texto bíblico sobre la respuesta de Isaac es elocuente.' },
            { type: 'key_points', title: 'Isaac como tipo de Cristo', points: [
              'Isaac es el hijo único amado (Génesis 22:2) → Cristo es el "Unigénito del Padre" (Juan 3:16)',
              'Isaac cargó la leña sobre sus hombros → Cristo cargó la cruz',
              'Ambos subieron al monte Moriah/Calvario para el sacrificio',
              'Isaac fue atado y puesto sobre la leña → Cristo fue clavado a la cruz',
              'Isaac fue "muerto" en la fe de Abraham y "resucitado" (Hebreos 11:19)',
              'Un carnero fue sacrificado en su lugar → Cristo murió en nuestro lugar',
            ]},
            { type: 'highlight_verse', reference: 'Hebreos 11:17-19', text: 'Por la fe Abraham, cuando fue probado, ofreció a Isaac; y el que había recibido las promesas ofrecía su unigénito... pensando que Dios es poderoso para levantar aun de entre los muertos, de donde, en sentido figurado, también le volvió a recibir.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Vida Silenciosa de Isaac',
      intro: { romanNumeral: 'III', title: 'El Patriarca Quieto', paragraphs: ['Su carácter en las pocas escenas que tenemos'] },
      topics: [
        {
          id: 't3',
          title: 'Isaac, el hombre de la meditación',
          blocks: [
            { type: 'paragraph', text: 'Isaac aparece pocas veces en la narrativa pero cada aparición es significativa. En Génesis 24:63, cuando sale a meditar al campo y ve venir a Rebeca, el texto usa el hebreo "lasuach" — un término de meditación o reflexión tranquila. En Génesis 26, cuando los filisteos tapan sus pozos, Isaac no responde con violencia sino que cava nuevos pozos repetidamente hasta encontrar uno donde no hay disputa. Su carácter es de mansedumbre notable.' },
            { type: 'highlight_verse', reference: 'Génesis 26:22', text: 'Y se apartó de allí, y abrió otro pozo, y no disputaron por él; y lo llamó Rehobot, y dijo: Porque ahora Jehová nos ha dado anchura, y fructificaremos en la tierra.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Las Bendiciones de Isaac',
      intro: { romanNumeral: 'IV', title: 'El Poder de las Palabras Proféticas', paragraphs: ['Génesis 27 — una bendición que no se puede revocar'] },
      topics: [
        {
          id: 't4',
          title: 'La bendición que cambió la historia',
          blocks: [
            { type: 'paragraph', text: 'La historia de Jacob robando la bendición de Esaú (Génesis 27) es perturbadora moralmente. Pero revela algo profundo sobre la teología de la bendición patriarcal: Isaac dice "le bendije, y será bendito" (v.33) — incluso después de descubrir el engaño. En la teología hebrea, la bendición pronunciada por un patriarca bajo inspiración tiene peso real. No es simplemente un deseo piadoso — es una declaración profética que el cielo reconoce.' },
            { type: 'reflection', prompt: '¿Qué "bendición" has recibido de tus padres o ancestros — espiritual, de carácter, de fe — que llevas contigo aunque nunca fue pronunciada formalmente? ¿Cómo honras esa herencia?' },
          ],
        },
      ],
    },
  ],
}
