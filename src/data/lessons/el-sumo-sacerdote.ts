import type { Lesson } from '@/types/doctrine'

export const elSumoSacerdote: Lesson = {
  id: 'el-sumo-sacerdote',
  moduleId: 'sacerdocio',
  title: 'El Sumo Sacerdote',
  subtitle: 'El oficio que preside en la Iglesia de Cristo',
  description:
    'El Sumo Sacerdote es el oficio más alto del sacerdocio ordinario. Preside en la Iglesia, tiene responsabilidad por las ordenanzas del templo, y lleva el tipo del Gran Sumo Sacerdote: Jesucristo.',
  level: 'AVANZADO',
  icon: '👑',
  duration: 50,
  order: 8,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Oficio del Sumo Sacerdote',
      intro: {
        romanNumeral: 'I',
        title: 'El Oficio del Sumo Sacerdote',
      },
      topics: [
        {
          id: 'oficio-sumo-sacerdote',
          title: 'El oficio que preside — la autoridad de gobernar la Iglesia',
          subtitle:
            'El Sumo Sacerdote tiene autoridad para presidir cualquier asignación en la Iglesia — la más alta autoridad del sacerdocio ordinario.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Sumo Sacerdote es el oficio más alto del sacerdocio ordinario (no de autoridad especial como el Apóstol o el Patriarca). El nombre viene del Gran Sumo Sacerdote del Antiguo Testamento — quien ofrecía el sacrificio en el Día de la Expiación, quien entraba al Lugar Santísimo, quien era el mediador supremo entre Israel y Dios.',
            },
            {
              type: 'highlight_verse',
              text: '"El sumo sacerdocio de la iglesia constituye el orden más elevado del sacerdocio establecido en la iglesia para las cosas temporales; de manera que los obispos deben ser elegidos de los sumos sacerdotes, a menos que sean hijos literales de Aarón."',
              reference: 'Doctrina y Convenios 107:17',
            },
            {
              type: 'highlight_verse',
              text: '"Los sumos sacerdotes, cuando son llamados a desempeñar las labores del obispo, tienen autoridad para hacer todo lo que el obispo puede hacer, excepto cuando son hijos literales de Aarón."',
              reference: 'Doctrina y Convenios 68:19',
            },
            {
              type: 'doctrine_box',
              title: 'Los deberes del Sumo Sacerdote',
              body: 'El Sumo Sacerdote tiene autoridad para: (1) Presidir cualquier organización o reunión de la Iglesia. (2) Ser llamado como obispo, presidente de rama o presidente de estaca. (3) Administrar todos los asuntos espirituales y temporales de la Iglesia. (4) Participar en todos los consejos de gobierno de la Iglesia. (5) Representar a la Iglesia en cualquier nivel.',
            },
            {
              type: 'key_points',
              title: '¿Cuándo se ordena a alguien Sumo Sacerdote?',
              points: [
                'Cuando es llamado a servir en un oficio que requiere ese sacerdocio: obispo, consejero en la presidencia de estaca, presidente de rama, sumo consejero, patriarca.',
                'Un Élder puede servir toda su vida fielmente sin ser ordenado Sumo Sacerdote — no es un estatus automático. Es una ordenación ligada a un llamamiento.',
                'El Sumo Sacerdote, como el Élder, puede administrar todas las ordenanzas del Sacerdocio de Melquisedec.',
                'D&C 107:64-67 establece que el cuórum de Sumos Sacerdotes en cada estaca está presidido por el presidente de estaca.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Sumos Sacerdotes en las Escrituras',
      intro: {
        romanNumeral: 'II',
        title: 'Sumos Sacerdotes en las Escrituras',
      },
      topics: [
        {
          id: 'sumos-sacerdotes-escrituras',
          title: 'Melquisedec, Abraham, Moisés — los grandes Sumos Sacerdotes',
          subtitle:
            'El oficio del Sumo Sacerdote tiene una historia que atraviesa todas las dispensaciones del evangelio.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La historia del oficio del Sumo Sacerdote es la historia de los grandes líderes de cada dispensación del evangelio. Desde Adán hasta Jesucristo mismo, los Sumos Sacerdotes han sido los mediadores entre Dios y su pueblo en cada era de la historia.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Adán',
                  text: 'El primer Sumo Sacerdote — presidió el primer consejo del sacerdocio y entregó las llaves a sus descendientes (D&C 107:53-57). Adam-ondi-Ahman.',
                  color: 'gold',
                },
                {
                  label: 'Melquisedec',
                  text: 'El más grande de todos los Sumos Sacerdotes (Alma 13:14). Rey de Salem, sacerdote del Dios Altísimo. Abraham le pagó diezmos. El sacerdocio lleva su nombre (D&C 107:2-4).',
                  color: 'blue',
                },
                {
                  label: 'Abraham',
                  text: 'Ordenado bajo Melquisedec (D&C 84:14). Sumo Sacerdote de su linaje. Padre de todos los creyentes.',
                  color: 'gold',
                },
                {
                  label: 'Moisés y Aarón',
                  text: 'Moisés como Sumo Sacerdote del Sacerdocio de Melquisedec; Aarón del sacerdocio que lleva su nombre. El tabernáculo de Moisés prefiguraba el templo.',
                  color: 'red',
                },
                {
                  label: 'Jesucristo',
                  text: 'El Gran Sumo Sacerdote (Hebreos 5-7). No necesitaba hacer sacrificio por sus propios pecados. Su sacrificio fue perfecto y eterno.',
                  color: 'green',
                },
              ],
            },
            {
              type: 'highlight_verse',
              text: '"Porque tal sumo sacerdote nos convenía: santo, inocente, sin mancha, apartado de los pecadores, y hecho más sublime que los cielos; que no tiene necesidad cada día, como aquellos sumos sacerdotes, de ofrecer primero sacrificios por sus propios pecados, y luego por los del pueblo; porque esto lo hizo una vez para siempre, ofreciéndose a sí mismo."',
              reference: 'Hebreos 7:26–27',
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: 'Alma 13 — el modelo eterno del Sumo Sacerdote',
              paragraphs: [
                'Alma 13 en el Libro de Mormón contiene la exposición más detallada del oficio del Sumo Sacerdote en todas las escrituras. Alma enseña que los Sumos Sacerdotes fueron «llamados y preparados desde la fundación del mundo» (Alma 13:3) — sus calificaciones son premortales.',
                'El Sumo Sacerdote es «ordenado con un santo orden, que fue antes de la fundación del mundo» (Alma 13:7). El oficio no es una innovación administrativa — refleja un orden eterno establecido antes de la creación.',
                'Alma menciona a Melquisedec como el ejemplo supremo: «ahora, Melquisedec era rey de Salem; y su pueblo había llegado a ser muy malvado y perverso. Pero Melquisedec ejerció un poderoso ministerio entre ellos… y fue llamado el príncipe de la paz» (Alma 13:17-18). El Sumo Sacerdote fiel transforma civilizaciones.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'Los Sumos Sacerdotes son los hombres de mayor confianza del Señor en cada barrio y estaca. Son los que presiden, los que cuidan, los que mantienen el orden del sacerdocio. Es un oficio de servicio, no de honor.',
              name: 'Élder Boyd K. Packer · Conferencia General',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Sumo Sacerdote y el Templo',
      intro: {
        romanNumeral: 'III',
        title: 'El Sumo Sacerdote y el Templo',
      },
      topics: [
        {
          id: 'sumo-sacerdote-templo',
          title: 'El templo — la ordenanza que pertenece al Sumo Sacerdote',
          subtitle:
            'Las ordenanzas más sagradas del templo — el endowment y el sellamiento — están íntimamente ligadas al oficio del Sumo Sacerdote.',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el tabernáculo de Moisés y en el templo de Salomón, solo el Sumo Sacerdote podía entrar al Lugar Santísimo (Hebreos 9:7) — y solo una vez al año, en el Día de la Expiación. En la Iglesia restaurada, esas puertas están abiertas para todo poseedor digno del Sacerdocio de Melquisedec.',
            },
            {
              type: 'highlight_verse',
              text: '"Mas ahora Cristo ha sido levantado de entre los muertos… Cristo entró en el santuario una vez para siempre por su propia sangre, habiendo obtenido eterna redención… ¿Cuánto más la sangre de Cristo, el cual mediante el Espíritu eterno se ofreció a sí mismo sin mancha a Dios, limpiará vuestras conciencias de obras muertas para que sirváis al Dios vivo?"',
              reference: 'Hebreos 9:11–14',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué hacía el Sumo Sacerdote en el Día de la Expiación?',
              body: 'Una vez al año, el Sumo Sacerdote se purificaba con rituales especiales, se vestía con ropas blancas específicas, y entraba solo al Lugar Santísimo — el espacio donde se suponía que habitaba la presencia de Dios. Allí rociaba sangre del sacrificio sobre el Arca del Convenio como expiación por todo Israel. Este ritual prefiguraba el sacrificio de Cristo: un solo sacerdote, un solo acto, una expiación por todo un pueblo.',
            },
            {
              type: 'key_points',
              title: 'La conexión Sumo Sacerdote — Templo — Exaltación',
              points: [
                'El endowment del templo es "la dote del poder de lo alto" que el Señor prometió en D&C 38:32 — y está disponible para todos los poseedores dignos del Sacerdocio de Melquisedec.',
                'El sellamiento del templo es la ordenanza que une familias para la eternidad — presidida por hombres que ejercen las llaves del Sacerdocio de Melquisedec.',
                'El Sumo Sacerdote ordenado como Patriarca tiene autoridad para dar bendiciones patriarcales — el mapa personal de la vida eterna.',
                'Cada Sumo Sacerdote activo que entra al templo cumple, de alguna forma, lo que el Gran Sumo Sacerdote de Israel hacía en el Día de la Expiación — se presenta ante la presencia de Dios.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Con qué frecuencia asistes al templo? ¿Cómo conectas tu oficio del sacerdocio con las ordenanzas que recibes y administras en el templo? ¿Hay alguien en tu familia que aún no ha recibido esas ordenanzas y por quien puedes trabajar?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Vivir la Dignidad del Sumo Sacerdote',
      intro: {
        romanNumeral: 'IV',
        title: 'Vivir la Dignidad del Sumo Sacerdote',
      },
      topics: [
        {
          id: 'dignidad-sumo-sacerdote',
          title: '«Ordenados con un santo orden» — la vida del Sumo Sacerdote fiel',
          subtitle:
            'El Sumo Sacerdote no solo tiene el sacerdocio — lo vive. La dignidad no es un requisito de entrada; es el estilo de vida que define al oficio.',
          blocks: [
            {
              type: 'highlight_verse',
              text: '"Ahora bien, estos ordenes fueron establecidos de esta manera: siendo llamados a este santo orden y ordenados para ello, teniéndose sumo cuidado por los que los ordenaron por su fe y obras buenas; habiendo grande rectitud, siendo dejado libre para que eligieran el bien o el mal."',
              reference: 'Alma 13:2–3',
            },
            {
              type: 'key_points',
              title: 'Lo que distingue al Sumo Sacerdote fiel',
              points: [
                'Preside en amor, no en autoridad. D&C 121:41-43 es el estándar: "solo por persuasión, por mansedumbre y por paciencia y amor sin fingimiento."',
                'Conoce las escrituras. El Sumo Sacerdote que preside una Iglesia, una familia o una estaca necesita el fundamento doctrinal para guiar con sabiduría.',
                'Es el primero en el templo. El que preside en el barrio o estaca establece la cultura de asistencia al templo con su propio ejemplo.',
                'Cuida al vulnerable. El obispo — que es Sumo Sacerdote — tiene responsabilidad especial hacia los pobres, la viuda, el huérfano y el extranjero.',
                'Es fidedigno. Su palabra vale. Sus compromisos se cumplen. Su nombre es sinónimo de integridad.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'El sumo sacerdocio es el sacerdocio de administrar. Pero administrar bien significa servir bien — y el servicio del Sumo Sacerdote fiel toca cada aspecto de la vida de su familia, su barrio y su comunidad.',
              name: 'Presidente Dallin H. Oaks · Conferencia General',
            },
            {
              type: 'reflection',
              prompt:
                'Como Sumo Sacerdote, ¿en qué llamamiento o responsabilidad ejerces más activamente tu sacerdocio? ¿Hay alguien bajo tu cuidado — en la familia, en el barrio, en la comunidad — que necesita de la autoridad y el poder de tu sacerdocio esta semana?',
            },
          ],
        },
      ],
    },
  ],
}
