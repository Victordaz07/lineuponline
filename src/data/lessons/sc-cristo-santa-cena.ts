import type { Lesson } from '@/types/doctrine'

export const scCristoSantaCena: Lesson = {
  id: 'sc-cristo-santa-cena',
  moduleId: 'la-santa-cena',
  title: 'El Cristo y la Santa Cena',
  subtitle: 'La noche que lo cambió todo — y cada domingo desde entonces',
  description:
    'Desde el aposento alto de Jerusalén hasta el continente americano y la promesa del banquete eterno: Cristo instituyó esta ordenanza con sus propias manos, en dos hemisferios, y prometió volver a tomarla con nosotros en el reino del Padre.',
  level: 'BÁSICO',
  icon: '✝️',
  duration: 35,
  order: 1,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'La Última Cena',
      intro: {
        romanNumeral: 'I',
        title: 'La Última Cena',
        paragraphs: [
          'La noche del 14 de Nisán, en el aposento alto de Jerusalén, Jesús de Nazaret partió pan con sus apóstoles por última vez antes de su crucifixión — y convirtió ese gesto en la ordenanza más frecuente de su Iglesia.',
        ],
      },
      topics: [
        {
          id: 'ultima-cena',
          title: 'La noche en que la Pascua se cumplió',
          subtitle:
            'El Salvador eligió la noche más cargada de simbolismo en toda la historia de Israel para instituir la ordenanza que sustituiría para siempre al cordero pascual.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Pascua judía conmemoraba la liberación de Egipto. Un cordero sin mancha, su sangre en los dinteles, la muerte que pasó de largo por los hogares marcados. Durante más de mil años, Israel mató corderos cada 14 de Nisán mirando hacia atrás. Esa noche, Cristo giró la mirada hacia adelante.',
              blockId: 'sc1s1p0',
            },
            {
              type: 'highlight_verse',
              text: '"Y mientras comían, Jesús tomó el pan, y bendijo, y lo partió, y dio a sus discípulos, y dijo: Tomad, comed; esto es mi cuerpo. Y tomando la copa, y habiendo dado gracias, les dio, diciendo: Bebed de ella todos; porque esto es mi sangre del nuevo pacto, que por muchos es derramada para remisión de los pecados."',
              reference: 'Mateo 26:26–28',
            },
            {
              type: 'doctrine_box',
              title: 'Del cordero pascual al Cordero de Dios',
              body: 'El cordero pascual debía ser sin mancha, y sus huesos no debían quebrarse (Éxodo 12:46). Juan 19:36 confirma que Cristo cumplió esto literalmente. Su sangre no marcaba madera sino corazones. La Pascua miraba hacia la liberación temporal de Egipto; la Santa Cena mira hacia la liberación eterna del pecado. El mismo simbolismo — el mismo Dios — un cumplimiento infinitamente mayor.',
            },
            {
              type: 'highlight_verse',
              text: '"Y os digo que desde ahora no beberé más de este fruto de la vid, hasta aquel día en que lo beba de nuevo con vosotros en el reino de mi Padre."',
              reference: 'Mateo 26:29',
            },
            {
              type: 'deep_dive',
              badge: 'Profecía',
              title: '"Hasta que lo beba de nuevo" — el banquete eterno',
              paragraphs: [
                'Cristo prometió no beber de nuevo del fruto de la vid hasta hacerlo en el reino de su Padre. No es poesía de despedida — es una promesa escatológica concreta.',
                'D&C 27:5–14 amplía esta visión: el Señor revelará su identidad como "el Fuerte" en ese banquete. Los participantes incluirán a Moroni, Elías, Juan el Bautista y profetas de todas las dispensaciones de la historia de la tierra.',
                'Cada Santa Cena que tomamos es un anticipo de ese banquete eterno. No solo miramos hacia el Calvario — miramos hacia el reino del Padre. Esa es la doble orientación temporal de esta ordenanza: atrás hacia la Cruz, adelante hacia la Gloria.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Qué significa para ti que el propio Cristo prometió volver a tomar la Santa Cena contigo en el reino del Padre? ¿Cómo cambia eso la forma en que participas el próximo domingo?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'En el Continente Americano',
      intro: {
        romanNumeral: 'II',
        title: 'En el Continente Americano',
        paragraphs: [
          'Tres días después de su resurrección, el Cristo glorificado se apareció a 2,500 personas en el continente americano. Lo primero que hizo fue administrar la Santa Cena — confirmando que es una ordenanza universal, no cultural ni geográfica.',
        ],
      },
      topics: [
        {
          id: 'americas',
          title: 'La misma ordenanza, un nuevo mundo',
          subtitle:
            'Que Cristo administrara la Santa Cena en ambos hemisferios con sus propias manos confirma que es el núcleo de su Iglesia en toda la tierra.',
          blocks: [
            {
              type: 'paragraph',
              text: 'En 3 Nefi 18, el Señor pidió pan y vino, los bendijo con sus propias manos, y los distribuyó entre la multitud. Las palabras que pronunció en el continente americano son las más citadas en la doctrina restaurada sobre la Santa Cena — y añaden algo que los evangelios sinópticos no dicen explícitamente.',
              blockId: 'sc1s2p0',
            },
            {
              type: 'highlight_verse',
              text: '"Y esto haréis en memoria de mi cuerpo, el cual os he mostrado. Y será un testimonio ante el Padre de que siempre os acordáis de mí. Y si siempre os acordáis de mí, tendréis mi Espíritu con vosotros."',
              reference: '3 Nefi 18:7',
            },
            {
              type: 'paragraph',
              text: 'La conexión explícita entre la Santa Cena y la promesa del Espíritu Santo aparece aquí por primera vez en forma directa. "Si siempre os acordáis de mí, tendréis mi Espíritu consigo" — esta frase es la clave de bóveda de toda la teología de la Santa Cena restaurada.',
              blockId: 'sc1s2p1',
            },
            {
              type: 'highlight_verse',
              text: '"También se os manda no desechar de vuestras reuniones sacramentales a ninguno que pertenezca a la iglesia… y no desecharéis de vuestros servicios sacramentales a nadie que sinceramente esté buscando el reino."',
              reference: 'Doctrina y Convenios 46:4–5',
            },
            {
              type: 'leader_quote',
              quote:
                'El Señor administró la Santa Cena en el continente americano con la misma solemnidad que en Palestina. No estamos ante un rito cultural sino ante una ordenanza eterna que trasciende continentes, idiomas y épocas. Participarla con fe es participar en algo que el propio Cristo instituyó y administró con sus propias manos en dos hemisferios.',
              name: 'Élder Jeffrey R. Holland · "Esto haced en memoria de mí" · Conferencia General, octubre 1995',
            },
            {
              type: 'reflection',
              prompt:
                'Cristo administró la Santa Cena en dos continentes. ¿Qué dice eso de la importancia que Él mismo le da a esta ordenanza? ¿Cómo recibes algo que el propio Creador del universo administró personalmente?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Presencia de Cristo',
      intro: {
        romanNumeral: 'III',
        title: 'La Presencia de Cristo',
        paragraphs: [
          'La doctrina restaurada rechaza la transubstanciación — pero afirma algo igualmente poderoso: la presencia real de Cristo en la Santa Cena a través de su Espíritu y de los convenios renovados.',
        ],
      },
      topics: [
        {
          id: 'presencia',
          title: '¿Cómo está Cristo presente en la Santa Cena?',
          subtitle:
            'Los emblemas son simbólicos — pero la presencia del Señor es genuina. No en el pan o el agua, sino en el Espíritu que viene a los que participan con fe.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Muchas tradiciones enseñan que el pan y el vino se transforman literalmente en el cuerpo y sangre de Cristo (transubstanciación). La doctrina restaurada enseña algo diferente: los elementos son simbólicos, pero la presencia del Señor es real — a través de su Espíritu.',
              blockId: 'sc1s3p0',
            },
            {
              type: 'highlight_verse',
              text: '"Porque he aquí, te digo que no importa lo que comáis o bebáis al tomar el sacramento, si es que lo hacéis con la mira puesta únicamente en mi gloria, recordando ante el Padre mi cuerpo que fue sacrificado por vosotros, y mi sangre que se derramó para la remisión de vuestros pecados."',
              reference: 'Doctrina y Convenios 27:2',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que los emblemas son — y lo que no son',
              body: 'El pan y el agua NO se convierten en el cuerpo y sangre literales de Cristo. Sí REPRESENTAN ese cuerpo y sangre — y al tomarlos con fe y covenant activo, accedemos a su poder expiatorio. El Señor fue claro: "No importa lo que comáis o bebáis... si lo hacéis con la mira puesta únicamente en mi gloria." Lo sagrado no es el elemento — es el corazón que lo recibe y el convenio que renueva.',
            },
            {
              type: 'leader_quote',
              quote:
                'Su presencia en la Santa Cena no es física, pero es real. El Espíritu que viene a los que participan dignamente es el testimonio viviente de que Cristo cumple sus promesas — incluyendo la promesa de estar siempre con su pueblo.',
              name: 'Presidente Russell M. Nelson · "Domingo: El mejor día de la semana" · Conferencia General, abril 2015',
            },
            {
              type: 'reflection',
              prompt:
                'La Santa Cena promete "tendréis mi Espíritu consigo." ¿Cuándo ha sido este momento el de mayor presencia real del Señor en tu vida? ¿Qué condiciones de tu corazón hacen posible ese encuentro?',
            },
          ],
        },
      ],
    },
  ],
}
