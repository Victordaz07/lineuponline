import type { Lesson } from '@/types/doctrine'

export const tomasYLaRestauracion: Lesson = {
  id: 'tomas-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  title: 'Tomás y la Restauración',
  subtitle: 'La fe que va más allá de la evidencia',
  description: 'La experiencia de Tomás — dudar, buscar evidencia, recibir confirmación y luego ir más allá de la evidencia para confesar — es un mapa del proceso de testimonio en la Restauración. Desde Alma 32 hasta Moroni 10:3-5, pasando por DyC 46:13-14, la teología restaurada tiene mucho que decir sobre el camino que Tomás recorrió.',
  level: 'INTERMEDIO',
  icon: '✨',
  duration: 25,
  order: 5414,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'tomas',
  studySections: [
    {
      id: 's1',
      title: 'Alma 32 — La Semilla que Crece',
      intro: {
        romanNumeral: 'I',
        title: 'El Proceso de la Fe en el Libro de Mormón',
        paragraphs: ['La metáfora perfecta para el camino de Tomás'],
      },
      topics: [
        {
          id: 't1',
          title: 'La semilla, el experimento y el conocimiento',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 32:27-28',
              text: 'Pero he aquí, si despertáis y excitáis vuestras facultades, sí, hasta el punto de siquiera experimentar con mis palabras, y ejercéis un poco de fe, sí, aun si no podéis más que desear creer, dejad que ese deseo obre en vosotros... si es una semilla buena, o si la palabra es buena, comenzará a hinchar vuestra alma; y sentiréis estas cosas hincharse en vuestro interior.',
            },
            {
              type: 'paragraph',
              text: 'Alma 32 describe un proceso de fe que no comienza con certeza sino con deseo: "aun si no podéis más que desear creer, dejad que ese deseo obre en vosotros." Tomás tenía ese deseo — de otro modo no habría permanecido con los diez durante los ocho días entre apariciones. Permanecer en comunidad con quienes afirmaban haber visto al Señor, mientras él mismo no podía creer, es precisamente el "experimento" que Alma describe.',
            },
            {
              type: 'doctrine_box',
              title: 'La fe como proceso, no como interruptor',
              body: 'El error más común sobre la fe es concebirla como binaria: o se tiene o no se tiene. Alma 32 y el relato de Tomás proponen un modelo procesual: la fe comienza como deseo, se cultiva mediante el experimento, produce evidencia interna (el hinchar del alma), y crece hacia el árbol del conocimiento. Tomás no pasó de incredulidad total a fe completa en un instante — llevaba ocho días en el proceso cuando Cristo apareció con la evidencia que completó el ciclo.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'DyC 46:13-14 — El Don de Creer',
      intro: {
        romanNumeral: 'II',
        title: 'El Don de Saber y el Don de Creer sin Saber',
        paragraphs: ['La Restauración reconoce dos caminos válidos al testimonio'],
      },
      topics: [
        {
          id: 't2',
          title: 'Dones del Espíritu para el testimonio',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 46:13-14',
              text: 'A algunos se les da por el Espíritu Santo saber que Jesucristo es el Hijo de Dios y que fue crucificado por los pecados del mundo. Y a otros se les da creer en las palabras de aquellos, para que también ellos puedan tener vida eterna si siguen siendo fieles.',
            },
            {
              type: 'paragraph',
              text: 'DyC 46:13-14 distingue dos dones espirituales válidos: el don de saber (testimonio directo) y el don de creer en el testimonio de otros. Tomás inicialmente rechazó el don de creer en el testimonio de los diez — exigió el don del saber. Cristo le concedió el saber. Pero la bienaventuranza de Juan 20:29 va dirigida a quienes ejercen el don del creer sin haber experimentado el saber directo.',
            },
            {
              type: 'compare_grid',
              title: 'Dos dones — ambos válidos',
              left: {
                title: 'Don de saber (v.13)',
                items: [
                  'Testimonio directo por el Espíritu',
                  'Conocimiento personal de Cristo',
                  'Ejemplo: Tomás después de ver',
                  'Fundamento del testimonio apostólico',
                ],
              },
              right: {
                title: 'Don de creer (v.14)',
                items: [
                  'Fe en el testimonio ajeno',
                  'Basado en la confianza y el Espíritu',
                  'Ejemplo: "bienaventurados los que no vieron"',
                  'El camino de la mayoría de los creyentes',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Moroni 10:3-5 — El Proceso de la Oración Honesta',
      intro: {
        romanNumeral: 'III',
        title: 'La "Duda Honesta" y la Promesa de Moroni',
        paragraphs: ['La conexión entre el método de Tomás y el método del Libro de Mormón'],
      },
      topics: [
        {
          id: 't3',
          title: 'La sinceridad como requisito común',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Moroni 10:3-5',
              text: 'Exhorto a que cuando recibaís estas cosas... que os acordéis de cuán misericordioso ha sido el Señor... y meditéis en ellas en vuestro corazón. Y cuando recibáis estas cosas, os exhorto a que preguntéis a Dios, el Eterno Padre, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con sincero corazón, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ellas por el poder del Espíritu Santo.',
            },
            {
              type: 'paragraph',
              text: 'Moroni 10:3-5 pide tres cosas: sincero corazón, verdadera intención, y fe en Cristo. Tomás tenía las tres. Su exigencia de ver las heridas no era cinismo — era la expresión honesta de un corazón que necesitaba verificar antes de comprometerse. La promesa de Moroni es que ese nivel de honestidad, llevado al Padre en oración, produce manifestación por el Espíritu. El camino de Tomás (evidencia física → confesión) y el de Moroni 10 (oración sincera → manifestación espiritual) convergen en el mismo destino: el conocimiento de Cristo.',
            },
            {
              type: 'doctrine_box',
              title: 'La honestidad como virtud epistémica',
              body: 'Tanto el relato de Tomás como Moroni 10:4 reconocen que Dios no recompensa la credulidad irreflexiva sino la búsqueda honesta. Tomás fue honesto sobre su estado: "no creeré sin evidencia." Moroni pide "sincero corazón" y "verdadera intención." En ambos casos, la condición de acceso al conocimiento divino es la misma: honestidad radical sobre la propia condición epistémica.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Juan 20:29 como base del testimonio espiritual',
          blocks: [
            {
              type: 'paragraph',
              text: 'La bienaventuranza de Juan 20:29 — "bienaventurados los que no vieron y creyeron" — es la base escritural más directa del testimonio espiritual sin evidencia física. Es el fundamento de la posición de que los creyentes de todos los siglos siguientes, que no tendrán acceso a las heridas físicas de Cristo, pueden aún alcanzar un conocimiento genuino. La Restauración no pide credulidad ciega sino fe informada por el testimonio espiritual.',
            },
            {
              type: 'steps',
              title: 'El camino de Tomás como modelo del proceso de testimonio',
              steps: [
                'Pérdida: Tomás pierde a su maestro y su esperanza (la cruz).',
                'Comunidad: permanece con los discípulos aunque no puede creer sus testimonios.',
                'Honestidad: expresa claramente su condición sin fingir fe que no tiene.',
                'Apertura: permanece en la comunidad donde Cristo puede encontrarlo.',
                'Evidencia: Cristo responde a su búsqueda honesta con manifestación.',
                'Confesión: la evidencia produce la fe más profunda del evangelio.',
                'Misión: la fe obtenida lo lleva hasta el fin del mundo conocido.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo relacionas el camino de Tomás — duda honesta seguida de evidencia y luego de misión — con tu propio proceso de testimonio? ¿En qué etapa de ese proceso te encuentras ahora?',
            },
          ],
        },
      ],
    },
  ],
}
