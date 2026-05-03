import type { Lesson } from '@/types/doctrine'

export const visionDC76: Lesson = {
  id: 'vision-dc-76',
  moduleId: 'discursos-sermones-clasicos',
  title: 'La Visión — Doctrina y Convenios 76',
  subtitle: 'Hiram, Ohio, 16 de febrero de 1832',
  author: 'Fuentes primarias: DyC 76; History of the Church, vol. 1; Philo Dibble (eyewitness)',
  description:
    'El 16 de febrero de 1832, Joseph Smith y Sidney Rigdon recibieron la revelación más expansiva del movimiento de la Restauración. Cinco visiones en una tarde que desmontaron siglos de teología cristiana sobre el cielo y el infierno. Estudio del texto, del contexto histórico y de la recepción del documento.',
  level: 'AVANZADO',
  icon: '🌌',
  duration: 70,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Momento Histórico',
      intro: {
        romanNumeral: 'I',
        title: 'El Momento Histórico',
        paragraphs: [
          'Para entender DyC 76, hay que entender el momento en que llegó. No fue revelada en el vacío — fue recibida en medio de un proyecto de traducción de la Biblia, en la granja de un carpintero en Ohio, con un testigo adicional presente. Los detalles históricos son parte del mensaje.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Hiram, Ohio — 16 de Febrero de 1832',
          blocks: [
            {
              type: 'paragraph',
              text: 'Joseph Smith y Sidney Rigdon se encontraban trabajando en la Traducción Inspirada de la Biblia en la granja de John Johnson en Hiram, Ohio. Estaban revisando el Evangelio de Juan cuando llegaron a Juan 5:29 — el versículo sobre "la resurrección de vida" y "la resurrección de condenación." Fue mientras meditaban en ese texto que los cielos se abrieron.',
            },
            {
              type: 'highlight_verse',
              text: 'Por la fe contemplamos el honor y la majestad del Padre; y recibimos de su plenitud y su gracia; y él ha demostrado ser fiel en darnos un testimonio de su Hijo. Y hemos visto, mientras aún éramos en el Espíritu, al Señor nuestro Salvador a la diestra del Padre.',
              reference: 'Doctrina y Convenios 76:19–20',
            },
            {
              type: 'paragraph',
              text: 'Philo Dibble estaba presente en la habitación durante la recepción de la visión. Su testimonio es el único relato de primera mano de un testigo externo: "Joseph se paró en pie durante toda la entrevista, excepto por breves períodos... Sydney, sin embargo, cayó al suelo y estuvo fuera por un tiempo. El aspecto de Joseph al recibir la visión era brillante y radiante. La visión continuó durante más de una hora." (Philo Dibble, "Early Scenes in Church History," Juvenile Instructor, mayo 1892)',
            },
            {
              type: 'deep_dive',
              badge: 'Contexto',
              title: 'Por qué comenzó con Juan 5:29',
              paragraphs: [
                'Juan 5:29 habla de "los que hicieron lo bueno" saliendo a "resurrección de vida," y "los que hicieron lo malo" a "resurrección de condenación." Durante siglos, el cristianismo interpretó este versículo como confirmación de un sistema binario: cielo o infierno, punto final.',
                'Joseph y Sidney estaban meditando precisamente en esa división cuando la visión comenzó. La primera cosa que el Señor les mostró no fue los reinos de gloria — fue al Hijo en la diestra del Padre. El fundamento antes que la arquitectura.',
                'DyC 76 no comienza respondiendo la pregunta "¿a dónde van los muertos?" Comienza con "¿quién es Cristo?" El orden es deliberado: la comprensión de los reinos eternos solo tiene sentido dentro de la comprensión de quien es el Redentor.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Ofrecemos nuestro testimonio de que él vive; pues le vimos, y aunque este testimonio es el último de todos; no obstante es verdadero; y todo que oiga puede regocijarse.',
              reference: 'Doctrina y Convenios 76:22–24',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las Cinco Visiones',
      intro: {
        romanNumeral: 'II',
        title: 'Las Cinco Visiones',
        paragraphs: [
          'DyC 76 no es una sola visión continua — es una secuencia de al menos cinco visiones distintas, cada una revelando un nivel diferente de la realidad eterna. La estructura interna del texto revela su arquitectura.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La Estructura de la Revelación',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'Primera visión: El Padre y el Hijo',
                  text: 'Vv. 19-24 — Ven al Padre y al Hijo. La base teológica: Cristo es el Redentor de los mundos, y ellos son dos Personas distintas.',
                  ref: 'DyC 76:19-24',
                  color: 'gold',
                },
                {
                  label: 'Segunda visión: Satanás y los hijos de perdición',
                  text: 'Vv. 25-49 — El origen y destino del adversario. El único destino sin redención posible.',
                  ref: 'DyC 76:25-49',
                  color: 'blue',
                },
                {
                  label: 'Tercera visión: El reino celestial',
                  text: 'Vv. 50-70 — Quiénes lo heredan, qué reciben, el nivel más alto de gloria.',
                  ref: 'DyC 76:50-70',
                  color: 'gold',
                },
                {
                  label: 'Cuarta visión: El reino terrestre',
                  text: 'Vv. 71-80 — Los honorables que rechazaron el evangelio completo.',
                  ref: 'DyC 76:71-80',
                  color: 'blue',
                },
                {
                  label: 'Quinta visión: El reino telestial',
                  text: 'Vv. 81-106 — La multitud de los que no aceptaron el evangelio en esta vida.',
                  ref: 'DyC 76:81-106',
                  color: 'blue',
                },
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y oímos la voz que decía: Escribid la visión, porque he aquí, ese es el fin de la visión de los sufrimientos de los impíos. Y también, de los que no han de ser redimidos de entre los muertos, antes de que llegue la resurrección de Cristo.',
              reference: 'Doctrina y Convenios 76:47–50',
            },
            {
              type: 'highlight_verse',
              text: 'Estos son los que recibieron el testimonio de Jesús, y creyeron en su nombre, y fueron bautizados después de la manera de su entierro, y se les perdonaron sus pecados; que habían de recibir corona de rectitud.',
              reference: 'Doctrina y Convenios 76:51–53',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que no pudo escribirse',
              body: 'DyC 76:114-116 registra algo extraordinario: "Pero los grandes y maravillosos obras que el Señor hará para los hijos de los hombres, ni el ojo ha visto ni el oído ha escuchado... El Señor mandó a nosotros que no lo escribamos mientras estemos todavía en el mundo." La revelación es más grande que el texto que la registra. Lo que Joseph y Sidney vieron esa tarde excedió lo que podían comunicar con palabras — lo que está escrito en DyC 76 es ya lo más expansivo del canon restaurado, pero no es todo lo que vieron.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Recepción y el Impacto',
      intro: {
        romanNumeral: 'III',
        title: 'La Recepción y el Impacto',
        paragraphs: [
          'DyC 76 no fue recibida sin controversia. Para los santos del siglo XIX — educados en un mundo donde el cielo y el infierno eran las únicas opciones — la revelación de tres reinos de gloria fue un terremoto teológico. Las reacciones fueron reveladoras.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Cómo Reaccionaron los Santos y Por Qué Importa',
          blocks: [
            {
              type: 'paragraph',
              text: 'William McLellin, uno de los primeros apóstoles, escribió en su diario que la revelación lo perturbó profundamente. Le parecía que casi nadie iría al infierno — lo cual chocaba con sus presuposiciones protestantes. Brigham Young, por su parte, describió su reacción inicial: cuando escuchó la revelación por primera vez, le parecía demasiado grande para creerla — demasiado gloriosa para ser verdad. Le tomó tiempo en oración y reflexión llegar a aceptarla.',
            },
            {
              type: 'highlight_verse',
              text: 'Mas recibid esto: que si un espíritu hombre o mujer os declara que sea ángel de Dios, o sea el diablo, y no os da una sensación de amor y de paz y claridad, no le deis crédito... mas si os da amor, paz y claridad, recibidlo, que es de Dios.',
              reference: 'Doctrina y Convenios 129:9 (contexto de discernimiento espiritual)',
            },
            {
              type: 'paragraph',
              text: 'Joseph Smith escribió después de la visión: "Podría explicar cien veces más si pudiera salir ahora y predicar al mundo." Sidney Rigdon añadió: "Nunca habría imaginado o soñado que algo tan grande fuera revelado. La visión expandió mi alma de tal forma que puedo ahora entender cosas que antes no podía ni imaginar." (paráfrase del relato de Philo Dibble). La visión no solo reveló doctrina — transformó la comprensión de sus testigos.',
            },
            {
              type: 'key_points',
              title: 'Por qué DyC 76 es doctrinalmente revolucionaria',
              points: [
                'Destruye el sistema binario cielo/infierno que dominó la teología cristiana por siglos',
                'Establece que el destino eterno es proporcional al conocimiento y rectitud — la justicia de Dios es más matizada que una sola línea',
                'Revela que aun el reino más bajo de gloria (telestial) "sobrepasa todo entendimiento" (DyC 76:89)',
                'Abre la posibilidad de una comprensión de la salvación que honra tanto la justicia como la misericordia de Dios',
                'Sitúa a Cristo como el Redentor no solo de la Tierra sino de "mundos sin número" (DyC 76:24)',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Cuando yo tenía diecinueve años y escuché la doctrina de los tres reinos por primera vez, mi corazón saltó de alegría. No porque significara que "casi nadie iría al infierno," sino porque revelaba un Dios cuya justicia es más grande que yo había imaginado — un Dios que da a cada hijo exactamente lo que puede recibir, sin desperdiciar a ninguno. Eso cambió mi imagen de Dios permanentemente.',
              name: 'Jeffrey R. Holland',
              role: '"The Grandeur of God", Conferencia General, octubre 2003 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo afecta tu vida práctica saber que DyC 76 existe? ¿Cambia cómo ves a personas que no son miembros de la Iglesia — sabiendo que Dios tiene un destino apropiado para cada uno según su rectitud y conocimiento? ¿Hay algo en tu comprensión de Dios que la revelación de los tres reinos corrige o expande?',
            },
          ],
        },
      ],
    },
  ],
}
