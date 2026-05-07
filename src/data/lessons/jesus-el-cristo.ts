import type { Lesson } from '@/types/doctrine'

export const jesusElCristo: Lesson = {
  id: 'jesus-el-cristo',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'jesucristo',
  title: 'Jesús el Cristo',
  subtitle: 'El Ser que creó los cielos',
  author: 'Fuentes: Juan 1; DyC 76; Moisés 1; Colosenses 1; Éxodo 3; 3 Nefi 11; James E. Talmage',
  description:
    'El hombre de Nazaret era también el Jehová del Antiguo Testamento, el Creador de mundos sin número, el Logos que existía antes de Abraham. Esta lección recorre la identidad divina de Cristo desde el Nuevo Testamento, la Restauración y 3 Nefi — la lección más importante de la app.',
  level: 'AVANZADO',
  icon: '⭐',
  duration: 90,
  order: 11,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Creador — Antes de Belén',
      intro: {
        romanNumeral: 'I',
        title: 'El Creador — Antes de Belén',
        paragraphs: [
          'El prólogo de Juan no empieza con Belén. Empieza "en el principio" — las mismas palabras de Génesis 1:1. Juan está haciendo una declaración deliberada: la historia de Jesús no comienza en un pesebre. Comienza en la eternidad.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El Logos eterno y los mundos sin número',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios. Este era en el principio con Dios. Todas las cosas por él fueron hechas, y sin él nada de lo que ha sido hecho, fue hecho.',
              reference: 'Juan 1:1-3',
            },
            {
              type: 'highlight_verse',
              text: 'Y por el Hijo fueron creados los mundos; y la creación de ellos hizo conocer el poder de Dios al hombre.',
              reference: 'DyC 76:24',
            },
            {
              type: 'highlight_verse',
              text: 'Y mundos sin número he creado; y también los creé para mi propia gloria; y por el Hijo los creé, que es mi Unigénito.',
              reference: 'Moisés 1:33',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que "mundos sin número" implica',
              body: 'La astronomía moderna estima 2 billones de galaxias en el universo observable, con un promedio de 100 mil millones de estrellas cada una. Moisés 1 dice que "mundos sin número" fueron creados por Cristo para gloria de Dios y que hay más mundos de los que una mente mortal puede comprender (Moisés 1:35). DyC 76:24 confirma que "por el Hijo" fueron creados. La persona que sudó sangre en Getsemaní era el mismo Ser que diseñó la física de cada átomo del universo. Esto no trivializa el sufrimiento — lo magnifica. Un Ser de ese poder eligió hacerse vulnerable.',
            },
            {
              type: 'highlight_verse',
              text: 'Porque en él fueron creadas todas las cosas, las que hay en los cielos y las que hay en la tierra, visibles e invisibles; sean tronos, sean dominios, sean principados, sean potestades; todo fue creado por medio de él y para él.',
              reference: 'Colosenses 1:16',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Jehová del Antiguo Testamento',
      intro: {
        romanNumeral: 'II',
        title: 'El Jehová del Antiguo Testamento',
        paragraphs: [
          'Uno de los descubrimientos más importantes de la teología de la Restauración: el Dios que habló a Moisés en la zarza ardiente no era el Padre. Era Cristo. El nombre divino YHWH — Jehová — pertenece al Hijo, no al Padre. Este es el nexo que une el Antiguo y el Nuevo Testamento en una sola historia coherente.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'YO SOY EL QUE SOY — Éxodo 3 y Juan 8',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros.',
              reference: 'Éxodo 3:14',
            },
            {
              type: 'highlight_verse',
              text: 'Jesús les dijo: De cierto, de cierto os digo: Antes que Abraham fuese, yo soy.',
              reference: 'Juan 8:58',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué "Yo soy" era una declaración de identidad divina',
              body: 'Cuando los fariseos oyeron "antes que Abraham fuese, yo soy" (Juan 8:58), tomaron piedras para apedrearlo (v.59). No porque hubiera dicho algo confuso — sino porque lo entendieron perfectamente: Jesús estaba usando el nombre divino "YO SOY" (egō eimi en griego, equivalente al hebreo YHWH) para identificarse como el mismo Dios de Éxodo 3. La acusación de blasfemia que llevó a su crucifixión tenía este momento como trasfondo.',
            },
            {
              type: 'highlight_verse',
              text: 'El Señor, que es el gran YO SOY, el Alfa y la Omega, el principio y el fin, el mismo que os miró de eternidad a eternidad.',
              reference: 'DyC 38:1',
            },
            {
              type: 'compare_grid',
              title: 'El Jehová del AT y el Jesús del NT — la misma persona',
              left: {
                label: 'Antiguo Testamento (Jehová)',
                points: [
                  '"YO SOY EL QUE SOY" — Éxodo 3:14',
                  'Habló a Abraham, Isaac, Jacob',
                  '"El Señor es mi pastor" — Salmo 23',
                  '"Luz de las naciones" — Isaías 49:6',
                  'Sacó a Israel de Egipto — 1 Corintios 10:1-4 lo confirma como Cristo',
                ],
              },
              right: {
                label: 'Nuevo Testamento (Jesucristo)',
                points: [
                  '"Antes que Abraham fuese, yo soy" — Juan 8:58',
                  '"He aquí, soy Jesucristo, el Dios de Israel" — 3 Nefi 11:14',
                  '"Yo soy el buen pastor" — Juan 10:11',
                  '"Yo soy la luz del mundo" — Juan 8:12',
                  '"DyC 110:3-4: aparece a JS identificándose como Jehová"',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Los cuatro evangelios — cuatro retratos divinos',
      intro: {
        romanNumeral: 'III',
        title: 'Los cuatro evangelios — cuatro retratos divinos',
        paragraphs: [
          'Los cuatro evangelios no son cuatro versiones contradictorias de la misma historia — son cuatro ángulos complementarios de una realidad demasiado grande para un solo punto de vista. Mateo, Marcos, Lucas y Juan cada uno presenta a Cristo para una audiencia diferente, con énfasis diferentes, revelando dimensiones distintas de su identidad.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Mateo, Marcos, Lucas y Juan — cuatro Cristos, uno',
          blocks: [
            {
              type: 'key_points',
              title: 'Los cuatro retratos de Cristo',
              points: [
                'Mateo: Cristo el Rey-Mesías judío. Genealogía de Abraham a David. 5 grandes discursos (paralelo a los 5 libros de Moisés). "Se cumplió lo que dijo el profeta" — 14 veces.',
                'Marcos: Cristo el Siervo que actúa. El evangelio más corto y más urgente. "Enseguida" (euthys) aparece 41 veces. Sin genealogía — los siervos no necesitan árbol genealógico.',
                'Lucas: Cristo el Hijo del Hombre compasivo. El único escritor gentil. Mujeres, pobres, samaritanos, pecadores — los excluidos del mundo antiguo. La parábola del hijo pródigo, del buen samaritano.',
                'Juan: Cristo el Logos eterno. Comienza "en el principio." 7 señales milagrosas. 7 declaraciones "Yo soy." Sin parábolas — solo discursos de identidad divina.',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Por qué cuatro evangelios y no uno',
              body: 'La Iglesia primitiva conservó cuatro versiones y no las unificó en una — a pesar de que hacerlo habría eliminado las "contradicciones" superficiales. El motivo: cada uno captura dimensiones auténticas de Cristo que los otros no pueden. El Cristo de Mateo es el Mesías prometido. El Cristo de Marcos es el hombre de acción que serve. El Cristo de Lucas es el amigo de los marginados. El Cristo de Juan es el Ser eterno que bajó. Un solo evangelio habría traicionado la complejidad de la persona real.',
            },
            {
              type: 'paragraph',
              text: 'La Restauración añade un quinto retrato: el Cristo de 3 Nefi — el resucitado que se aparece a 2,500 personas en América, que toca a cada una individualmente, que enseña el Sermón del Monte con variaciones, que llora de alegría. Es el Cristo más detallado después de la resurrección que existe en ninguna escritura.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: '3 Nefi — La visita más documentada',
      intro: {
        romanNumeral: 'IV',
        title: '3 Nefi — La visita más documentada',
        paragraphs: [
          'Ninguna escritura en el mundo describe la aparición de Cristo resucitado con tanta extensión y detalle como 3 Nefi 11-28. Los evangelios del Nuevo Testamento dan pocas páginas a las apariciones post-resurrección. 3 Nefi da dieciocho capítulos. Y la escena de apertura es la más poderosa del Libro de Mormón.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: '3 Nefi 11 — La voz, el descenso, los 2,500',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y aconteció que mientras estaban así mirando fijamente hacia el cielo, vieron a un Hombre que descendía del cielo; y le vistieron de una túnica blanca; y vino y se puso en medio de ellos; y los ojos de todo el pueblo estaban vueltos hacia él, y esperaban para ver si era el propio Jesús que los profetas habían dicho que vendría.',
              reference: '3 Nefi 11:8',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, yo soy Jesucristo, de quien han hablado los profetas, que había de venir al mundo. Y aconteció que él extendió su mano y habló al pueblo, diciendo: He aquí, soy Jesucristo, el Dios de Israel y el Dios de toda la tierra, y he sido muerto por los pecados del mundo.',
              reference: '3 Nefi 11:10, 14',
            },
            {
              type: 'deep_dive',
              badge: '2,500 testigos',
              title: 'La escala de la aparición en 3 Nefi',
              paragraphs: [
                '3 Nefi 17:25 dice que había aproximadamente 2,500 personas presentes. Cristo no se apareció a uno, ni a doce — se apareció a una multitud. Y no dio un discurso desde lejos: "Jesús los mandó que se acercasen a él y que metiesen sus manos en su costado, y que palparan las huellas de los clavos en sus manos y en sus pies" (3 Nefi 11:14).',
                'El texto dice que el Cristo resucitado permitió que cada una de las 2,500 personas lo tocase individualmente (3 Nefi 11:15). Eso no es una visión ni un símbolo — es un encuentro físico, uno a uno, con una persona corpórea. La resurrección del Libro de Mormón es tan material como la de Lucas 24:39 ("palpad y ved; que el espíritu no tiene carne ni huesos, como veis que yo tengo").',
                '3 Nefi 17:21-22 registra que Jesús tomó a los niños uno por uno, los bendijo, y lloró — de alegría. "Y lo vieron y oyeron, y dieron testimonio; y él los amaba." Es el momento más íntimo del Libro de Mormón.',
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Cristo descendiendo ante la multitud en el templo de Abundancia, 3 Nefi 11',
              caption: '"Vieron a un Hombre que descendía del cielo" — 3 Nefi 11:8',
              contextCard: {
                label: '3-nefi-descenso-cristo',
              },
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: '"Jesús el Cristo" de Talmage — ideas centrales',
      intro: {
        romanNumeral: 'V',
        title: '"Jesús el Cristo" de Talmage — ideas centrales',
        paragraphs: [
          'James E. Talmage fue un científico convertido al evangelio que recibió el encargo de escribir un estudio sistemático de la vida y doctrina de Cristo. Lo escribió encerrado en el templo de Salt Lake en 1915 para protegerse de interrupciones. "Jesús el Cristo" se convirtió en el libro de doctrina más influyente de la Iglesia del siglo XX.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'Las dos ideas de Talmage que cambiaron la Iglesia',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'Idea 1: La doble naturaleza — humano y divino simultáneamente',
              body: 'Talmage articuló con precisión filosófica lo que los evangelios muestran: Jesús era completamente humano (tuvo hambre, sufrió, lloró, murió) y completamente divino (creó mundos, sanó, resucitó, tiene vida en sí mismo). No alternaba entre las dos — era ambas al mismo tiempo. Esto es el misterio central de la encarnación. La Iglesia Restaurada añade un elemento que el cristianismo tradicional no tenía: Jesús heredó la inmortalidad de su Padre celestial y la mortalidad de María — por eso tenía el poder de dar su vida y de tomarla de nuevo (Juan 10:17-18).',
            },
            {
              type: 'doctrine_box',
              title: 'Idea 2: Getsemaní como el mayor sufrimiento — no el Calvario',
              body: 'Antes de Talmage, el foco del sufrimiento expiatorio en el mundo cristiano era la crucifixión. Talmage fue el primer teólogo en argumentar sistemáticamente que el mayor peso de la Expiación fue cargado en Getsemaní — no en la cruz. Basó esto en Lucas 22:44 (el sudor de sangre) y DyC 19:16-18. La crucifixión fue la muerte — Getsemaní fue el sufrimiento por los pecados del mundo. Hoy esta es la comprensión estándar en la Iglesia, pero Talmage fue quien la formalizó.',
            },
            {
              type: 'leader_quote',
              quote: 'Contemplar a Jesucristo como simplemente un gran hombre, un maestro moral o un profeta es no haberlo comprendido en absoluto. O sus afirmaciones son las de un lunático, o son verdad. No hay término medio.',
              name: 'James E. Talmage',
              role: '"Jesús el Cristo", cap. 1 (paráfrasis)',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Testimonios de los profetas',
      intro: {
        romanNumeral: 'VI',
        title: 'Testimonios de los profetas',
        paragraphs: [
          'El argumento más poderoso a favor de Cristo no es filosófico — es testimonial. A lo largo de la historia, personas que lo vieron o lo conocieron arriesgaron y perdieron sus vidas para decir una sola cosa: "Es real. Vive. Lo vi."',
        ],
      },
      topics: [
        {
          id: 't6-1',
          title: 'De José Smith a Russell M. Nelson',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y ahora, después de los muchos testimonios que se han dado de él, este es el testimonio, el postrero de todos, que damos de él: Que vive. Porque lo vimos, aun a la diestra de Dios; y oímos la voz que daba testimonio de que es el Unigénito del Padre.',
              reference: 'DyC 76:22-23',
            },
            {
              type: 'leader_quote',
              quote: 'Soy testigo de la Resurrección de Jesucristo. Esto no es una figura retórica. Estoy dando un testimonio de lo que sé. Sé que Dios vive. Sé que Jesucristo es el Hijo de Dios y el Salvador y Redentor del mundo.',
              name: 'Russell M. Nelson',
              role: 'Conferencia General, octubre 2014',
            },
            {
              type: 'leader_quote',
              quote: 'Doy testimonio de que Jesús el Cristo es el Hijo del Dios Vivo... Su misericordia es sin medida, su paciencia es infinita, y su amor por nosotros es eterno.',
              name: 'Gordon B. Hinckley',
              role: 'Conferencia General, abril 2002',
            },
            {
              type: 'highlight_verse',
              text: 'Y aconteció que el Señor habló a Moisés cara a cara, como habla un hombre con su amigo.',
              reference: 'Éxodo 33:11',
            },
            {
              type: 'paragraph',
              text: 'Desde Adán hasta José Smith, el patrón se repite: el Padre y el Hijo se revelan a individuos preparados, que luego testifican al mundo. La Primera Visión no es una anomalía — es la restauración del patrón eterno de Dios que habla a sus hijos. Y el centro de cada visión, de cada revelación, es siempre Jesucristo.',
            },
            {
              type: 'highlight_verse',
              text: 'El Señor dijo a mi Señor: Siéntate a mi diestra, hasta que ponga a tus enemigos por estrado de tus pies.',
              reference: 'Salmo 110:1 (citado en DyC 76:23)',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Según Juan 1:1-3 y Moisés 1:33, Jesucristo fue el instrumento a través del cual todas las cosas fueron creadas.',
              answer: true,
              explanation: 'Correcto. Juan 1:3 dice "todas las cosas por él fueron hechas." Moisés 1:33 dice "los creé para mi propia gloria; y por el Hijo los creé." DyC 76:24 confirma que "por el Hijo fueron creados los mundos." El papel de Cristo en la creación es doctrina consistente en múltiples escrituras.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'En Juan 8:58, Jesús usa la misma frase que el nombre divino de Éxodo 3:14 cuando dice: "Antes que Abraham fuese, ___."',
              answer: 'yo soy',
              explanation: 'El griego egō eimi ("yo soy") en Juan 8:58 es el equivalente al hebreo "YO SOY EL QUE SOY" de Éxodo 3:14. Por eso los fariseos tomaron piedras para apedrearlo — entendieron que estaba declarando ser el mismo Dios que habló a Moisés. Era blasfemia o verdad; no había término medio.',
            },
            {
              type: 'reflection',
              prompt: '¿En qué momento de tu vida has sentido más claramente que Jesucristo es real — no como concepto sino como persona? ¿Qué cambiaría en tu práctica diaria si tomaras en serio que el mismo Ser que creó "mundos sin número" también conoce tu nombre?',
            },
          ],
        },
      ],
    },
  ],
}
