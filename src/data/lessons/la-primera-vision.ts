import type { Lesson } from '@/types/doctrine'

export const laPrimeraVision: Lesson = {
  id: 'primera-vision',
  moduleId: 'historia-restauracion',
  title: 'La Primera Visión',
  subtitle: 'La apertura de la última dispensación',
  author: 'Joseph Smith — Historia 1; cinco relatos canonizados',
  description:
    'La primavera de 1820: un adolescente de 14 años entra a un bosque con una pregunta y sale con el Padre y el Hijo. El relato que abrió la dispensación, su contexto histórico, su contenido doctrinal, y por qué todo lo que enseñamos depende de que sea verdad.',
  level: 'BÁSICO',
  icon: '✨',
  duration: 65,
  order: 1,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'gran-apostasia',
  studySections: [
    // ─── SECCIÓN I ───────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'El Mundo que José Encontró',
      intro: {
        romanNumeral: 'I',
        title: 'El Mundo que José Encontró',
        paragraphs: [
          'Para entender la magnitud de la Primera Visión es necesario entender el mundo en el que ocurrió. No era un mundo ateo — era un mundo profundamente religioso, pero donde el acceso a Dios era teóricamente posible pero prácticamente incierto. Las iglesias luchaban entre sí sobre quién tenía la verdad. Un adolescente sin educación formal decidió preguntarle directamente a Dios.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Contexto: El Despertar Religioso de 1820',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Había en la región donde vivíamos gran agitación religiosa. Comenzó entre los metodistas, pero pronto se tornó general entre todas las sectas de aquella región. [...] En ninguna de las que yo asistía encontraba paz alguna, y mi agitación aumentó más y más, hasta que con frecuencia me decía a mí mismo: ¿Qué se ha de hacer? ¿Cuál de todos estos grupos tiene razón, o están todos igualmente equivocados?',
              reference: 'José Smith — Historia 1:5, 10',
            },
            {
              type: 'paragraph',
              text: 'El contexto importa: el oeste de Nueva York en 1820 era una región de revivalismos religiosos tan frecuentes que los historiadores la llaman el "Distrito Quemado" — quemado por el fuego de tantos predicadores. José no era un escéptico. Era un joven sinceramente preocupado por su alma que encontraba contradicciones genuinas entre las iglesias que lo rodeaban.',
            },
            {
              type: 'highlight_verse',
              text: 'Y mientras así me hallaba sumido en los peligros que me rodeaban, y mientras reflexionaba sobre esas cosas, leí en la epístola de Santiago el primer capítulo y el quinto versículo, que dice: Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.',
              reference: 'José Smith — Historia 1:11',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué Santiago 1:5 cambió la historia',
              body: 'José no fue al bosque por impulso. Fue porque una escritura le prometió algo que parecía demasiado bueno para ser cierto: si le falta sabiduría a alguien, puede pedírsela directamente a Dios. No al sacerdote. No al obispo. A Dios. "No me parece que alguna vez hombre alguno hubiese recibido el impacto de algún pasaje de la Biblia que yo de éste," escribió. El versículo lo convenció de que Dios respondía preguntas directamente. Decidió probarlo.',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN II ──────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'La Mañana de la Primavera de 1820',
      intro: {
        romanNumeral: 'II',
        title: 'La Mañana de la Primavera de 1820',
        paragraphs: [
          'El relato de la Primera Visión existe en cinco versiones escritas por José o bajo su supervisión. Lejos de ser una contradicción, estas versiones son complementarias — cada una enfatizando diferentes aspectos según el propósito y la audiencia. El relato canonizado en José Smith — Historia es el más completo.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Lo que Ocurrió en el Bosque',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'No había andado mucho en el bosque cuando de repente me vi envuelto en una columna de luz que excedía el brillo del sol en el mediodía, y esa luz gradualmente descendió hasta mí. Cuando la luz se asentó sobre mí, vi en el aire arriba de mí a dos Personajes cuyo brillo y gloria desafían toda descripción. Uno de ellos me habló, llamándome por mi nombre, y dijo, señalando al otro: Éste es mi Hijo Amado. Escúchale.',
              reference: 'José Smith — Historia 1:16–17',
            },
            {
              type: 'paragraph',
              text: 'Tres afirmaciones de enorme peso doctrinal contenidas en este versículo: (1) Dios el Padre y su Hijo Jesucristo son dos Seres separados y distintos, con cuerpos de forma tangible. (2) Dios el Padre habla y actúa — no es un principio abstracto. (3) La autoridad de Cristo es confirmada directamente por el Padre. Todo lo que la teología cristiana tardó siglos de concilios y credos en intentar resolver, se aclara en treinta segundos en un bosque de Nueva York.',
            },
            {
              type: 'key_points',
              title: 'Doctrinas reveladas en la Primera Visión',
              points: [
                'El Padre y el Hijo son Seres distintos con cuerpos glorificados — no una Trinidad abstracta',
                'Dios responde preguntas directamente — la revelación personal es posible',
                'Ninguna iglesia de la tierra tenía la plenitud del evangelio en 1820',
                'La Expiación de Cristo es real: José fue perdonado de sus pecados en el momento',
                'Se acercaba una restauración — Cristo le diría "en el tiempo oportuno" el evangelio completo',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'Los cinco relatos — complementarios, no contradictorios',
              paragraphs: [
                'Los críticos señalan diferencias entre los cinco relatos de la Primera Visión (1832, 1835, 1838, 1842, y el relato de Wentworth 1842). Estas diferencias son reales — pero son el tipo de variación natural que existe en cualquier testimonio auténtico contado en diferentes contextos y épocas.',
                'El relato de 1832 (el más temprano, escrito de su puño y letra) enfatiza el perdón de pecados — José estaba procesando su necesidad de reconciliación con Dios. El relato de 1838 (el canonizado) es el más completo y contextualiza la visión dentro de la historia de la Restauración. El relato de 1835 hace énfasis en los ángeles que acompañaron la visión.',
                'La variación confirma autenticidad, no la niega. Los testimonios inventados son perfectamente consistentes porque fueron diseñados para serlo. Los testimonios reales tienen las variaciones naturales de una experiencia vivida, recordada, y contada en diferentes momentos a diferentes audiencias.',
              ],
            },
          ],
        },
        {
          id: 't3',
          title: 'La Oscuridad Antes de la Luz',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Me disponía a hacer el esfuerzo supremo para pedir a Dios, cuando me vi repentinamente apoderado de algún poder que me tenía completamente ligado y sujeto, de manera que no podía hablar. Una densa oscuridad se congregó alrededor de mí, y durante un momento me pareció que estaba destinado a la destrucción repentina.',
              reference: 'José Smith — Historia 1:15',
            },
            {
              type: 'paragraph',
              text: 'Antes de la columna de luz vino la oscuridad. Este patrón no es accidental — aparece en cada gran momento de la historia sagrada. En Getsemaní. En el Calvario. En la Primera Visión. El adversario reconoció lo que José no podía saber aún: esta oración iba a abrir una dispensación. Aplicó su poder máximo para detenerla. Falló — pero el intento fue real y aterrador.',
            },
            {
              type: 'leader_quote',
              quote: 'El que José Smith saliera de ese bosque con el testimonio que salió — habiendo enfrentado esa oscuridad y esa oposición — es en sí mismo una evidencia de la realidad de lo que ocurrió. Los jóvenes de 14 años no inventan ese tipo de experiencia. La inventan como algo limpio y luminoso desde el principio. La oposición que José describe es demasiado específica, demasiado aterradora, y demasiado coherente con el patrón escritural para ser fabricada.',
              name: 'Jeffrey R. Holland',
              role: '"Safety for the Soul", Conferencia General, octubre 2009 (trad.)',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN III ─────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'Por Qué Todo Depende de Esto',
      intro: {
        romanNumeral: 'III',
        title: 'Por Qué Todo Depende de Esto',
        paragraphs: [
          'Holland dijo algo que resume perfectamente la apuesta teológica de la Primera Visión: o José Smith vio al Padre y al Hijo en esa mañana de la primavera de 1820, o no hay ninguna razón para creer nada de lo que ha enseñado esta Iglesia. No hay término medio. No hay "verdad espiritual sin hechos literales." Este evento o ocurrió o no ocurrió.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'La Apuesta de Todo o Nada',
          blocks: [
            {
              type: 'leader_quote',
              quote: 'Quiero que sepan que yo sé que el Padre y el Hijo se le aparecieron a José Smith. Sé eso con la misma certeza que sé cualquier otra cosa que sé. Esta declaración es la fundación de todo lo que creemos. Si esto no ocurrió, la Iglesia no tiene ninguna razón de ser. Si ocurrió — y ocurrió — entonces todo lo que sigue tiene sentido.',
              name: 'Gordon B. Hinckley',
              role: '"The Symbol of Our Faith", Conferencia General, abril 2005 (trad.)',
            },
            {
              type: 'leader_quote',
              quote: 'Digo a todos los que pueden escucharme hoy que, si hubiera algo en la historia del mundo que el adversario desearía que no fuera verdad, es la Primera Visión. Es el pivot sobre el que toda la Restauración gira. Por eso es atacada tan ferozmente. Por eso requiere nuestro testimonio tan firmemente.',
              name: 'Jeffrey R. Holland',
              role: '"Safety for the Soul", Conferencia General, octubre 2009 (trad.)',
            },
            {
              type: 'highlight_verse',
              text: 'Así que por lo que a mí toca, hice real la visión. Había realizado un acto que no podía negar, y pensé que con el tiempo llegué a saber que Dios sabía que no lo podía negar tampoco, y así no me atreví a hacerlo; porque sabía que había visto una visión, sabía que había ocurrido, y no podía retractarme de ella.',
              reference: 'José Smith — Historia 1:25',
            },
            {
              type: 'paragraph',
              text: 'José tenía 14 años cuando vivió esta experiencia. Tenía 17 cuando las persecuciones comenzaron. Tenía 38 cuando fue asesinado. Durante 24 años de presión social, persecución, pobreza, prisión y amenazas de muerte, nunca retiró su testimonio de la Primera Visión. Las personas no mueren por historias que saben que inventaron.',
            },
            {
              type: 'reflection',
              prompt: '¿Cuándo fue la última vez que pediste al Señor tu propio testimonio de la Primera Visión — no el de tus padres, no el de tu obispo, sino el tuyo? La promesa de Santiago 1:5 no era solo para José. ¿Has probado esa promesa en oración sincera?',
            },
          ],
        },
      ],
    },
  ],
}
