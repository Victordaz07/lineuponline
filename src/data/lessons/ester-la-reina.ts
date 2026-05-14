import type { Lesson } from '@/types/doctrine'

export const esterLaReina: Lesson = {
  id: 'ester-la-reina',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'ester',
  title: 'La Reina',
  subtitle: 'La doble vida en la corte del rey más poderoso',
  author: 'Fuentes: Ester 2–3; historia del período aqueménida',
  description: 'Ester lleva la corona del Imperio Persa y un secreto que podría costarle la vida. En la corte más poderosa del mundo, vive una doble identidad: reina de Persia ante los nobles, Hadasa la judía ante Dios. Esta sección explora qué significa mantener la identidad cuando el mundo no la puede conocer.',
  level: 'BÁSICO',
  icon: '👑',
  duration: 30,
  order: 6211,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'ester-la-huerfana',
  nextLessonId: 'ester-el-decreto',
  studySections: [
    {
      id: 's1',
      title: 'La coronación',
      intro: {
        romanNumeral: 'I',
        title: 'Ester 2:17 — "Más que Todas las Demás"',
        paragraphs: [
          'El momento en que el rey Asuero colocó la corona real sobre la cabeza de Hadasa fue el momento en que comenzó su ministerio — aunque ella aún no lo sabía.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La nueva reina de Persia',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 2:17',
              text: 'Y el rey amó a Ester más que a todas las otras mujeres, y halló ella gracia y benevolencia delante de él más que todas las demás vírgenes; y puso la corona real en su cabeza, y la hizo reina en lugar de Vasti.',
            },
            {
              type: 'paragraph',
              text: 'El texto emplea tres expresiones distintas para describir lo que Ester produce en el rey: amor (ahavah), gracia (hen) y benevolencia (hesed). La acumulación de términos es literariamente inusual — el autor quiere que el lector entienda que el efecto de Ester sobre Asuero es completo y múltiple. No es simplemente atracción física: es también algo que se parece a la lealtad, a la confianza. Esto es significativo para lo que viene después: cuando Ester tome el riesgo de acercarse al rey no llamada, este fondo de gracia acumulada será parte de lo que inclina la balanza.',
            },
            {
              type: 'paragraph',
              text: 'La fiesta de coronación que Asuero ofreció "a todos sus príncipes y siervos" en honor de Ester (Ester 2:18) fue un evento de Estado. Hadasa, la huérfana de la diáspora, era ahora la primera dama del Imperio más grande del mundo conocido. No tenemos datos sobre lo que sintió en ese momento. El texto, fiel a su estilo austero, no nos dice. Pero en silencio había un secreto que ninguno de los asistentes a la fiesta conocía.',
            },
            {
              type: 'doctrine_box',
              title: 'El llamamiento antes de que se entienda',
              body: 'La coronación de Ester precedió en años a la crisis que justificaría su presencia en el trono. Este patrón es recurrente en la escritura y en la experiencia de los Santos: el llamamiento llega antes de que el propósito sea visible. José Smith fue llamado a los catorce años; la Restauración tardó años en tomar forma. El don precede a la demanda. Ester fue puesta en el trono para "este momento" (Ester 4:14) antes de que "este momento" existiera.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'La doble vida — identidad pública e identidad profunda',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 2:10',
              text: 'Ester no declaró su pueblo ni su parentela, porque Mardoqueo le había mandado que no lo declarase.',
            },
            {
              type: 'paragraph',
              text: 'La identidad oculta de Ester no era una táctica de corto plazo — se mantuvo a lo largo de todo el proceso de selección y continuó después de la coronación (Ester 2:20). Ser judío en el Imperio Persa era perfectamente legal bajo la política aqueménida de tolerancia religiosa, de modo que el secreto de Ester no era estrictamente necesario por razones legales. Era prudencia política: en una corte llena de facciones, aliancias y envidias, revelar una identidad minoritaria prematuramente era innecesariamente arriesgador.',
            },
            {
              type: 'compare_grid',
              title: 'La identidad pública y la identidad profunda de Ester',
              left: {
                label: 'Ester la Reina (identidad pública)',
                points: [
                  'Nombre persa: Ester',
                  'Vestida con ropas reales, rodeada de eunucos y siervos',
                  'Primera dama del Imperio más poderoso del mundo',
                  'No revela su origen ni su pueblo',
                  'Navega las intrigas de la corte con discreción',
                ],
              },
              right: {
                label: 'Hadasa la Judía (identidad profunda)',
                points: [
                  'Nombre hebreo: Hadasa — arrayán',
                  'Huérfana criada en fidelidad a la ley de Dios',
                  'Miembro de la comunidad judía en la diáspora',
                  'Obediente a Mardoqueo como figura paterna',
                  'Capaz de llamar al ayuno cuando llegue el momento crítico',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿Existe en tu propia vida una "identidad profunda" — la persona que eres ante Dios — que a veces no puede expresarse plenamente en todos los contextos donde te mueves? ¿Cómo mantienes esa identidad sin hipocresía cuando el entorno no la entiende o no la acepta?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Mardoqueo en la puerta del rey',
      intro: {
        romanNumeral: 'II',
        title: 'El Guardián que No Se Rendía',
        paragraphs: [
          'Mientras Ester vivía detrás de los muros del palacio, Mardoqueo permanecía en la puerta del rey — observando, vigilando, conectado a ella por una lealtad que ninguna distancia había podido cortar.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El primo que vigilaba desde la puerta',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 2:11',
              text: 'Y cada día Mardoqueo se paseaba delante del patio de la casa de las mujeres, para saber cómo estaba Ester, y cómo la trataban.',
            },
            {
              type: 'paragraph',
              text: 'La imagen de Mardoqueo paseándose cada día frente a la casa de las mujeres es una de las más humanas del libro. Había entregado a Ester a un proceso que no controlaba, a un entorno donde no podía entrar, a un futuro incierto. Lo único que podía hacer era estar cerca. La lealtad que lo había llevado a criar a una huérfana como hija propia era la misma que lo traía de vuelta cada día a la puerta.',
            },
            {
              type: 'paragraph',
              text: 'Mardoqueo "sentaba a la puerta del rey" (Ester 2:19, 21; 3:2). Esto no era simplemente su lugar favorito — era su función oficial. Sentarse en la puerta de una ciudad o de un palacio en el mundo antiguo era el equivalente de un funcionario de la administración pública. Mardoqueo tenía acceso regular al corazón del gobierno imperial. Este acceso resultaría crucial cuando descubriera la conspiración contra el rey.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              alt: 'Representación de la puerta de un palacio persa',
              caption: 'La "puerta del rey" en Susa era un edificio administrativo donde se procesaban audiencias y peticiones.',
              contextCard: {
                year: '479 a.C.',
                place: 'Susa, Persia',
                label: 'La Puerta del Rey — centro de la administración imperial',
              },
            },
          ],
        },
        {
          id: 't2-2',
          title: 'La conspiración descubierta',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 2:21-23',
              text: 'En aquellos días, estando Mardoqueo sentado a la puerta del rey, se enojaron Bigtán y Teres, dos eunucos del rey, de la guardia de la puerta, y procuraban poner mano en el rey Asuero. Cuando Mardoqueo entendió esto, lo denunció a la reina Ester, y Ester lo dijo al rey en nombre de Mardoqueo.',
            },
            {
              type: 'paragraph',
              text: 'El episodio de la conspiración contra el rey (Ester 2:21-23) parece una digresión en el relato. No lo es. Es la siembra de un detalle providencial que germina en el momento crítico del libro: en la noche en que el rey no puede dormir (Ester 6:1-2), le leen las crónicas del reino y encuentran este registro — que Mardoqueo había salvado la vida del rey y no había recibido recompensa. Ese recuerdo nocturno cambiará el destino de todo el pueblo judío.',
            },
            {
              type: 'paragraph',
              text: 'El texto señala un detalle significativo: el descubrimiento de la conspiración fue reportado al rey "en nombre de Mardoqueo" — a través de Ester. La cadena de comunicación refleja la realidad del sistema: Ester tenía acceso al rey que Mardoqueo no podía tener. Ella fue el conducto. Y el registro en los libros del rey fue en nombre de Mardoqueo. Ester no buscó el mérito para sí misma; lo canalizó hacia quien correspondía.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Mardoqueo reveló la conspiración directamente al rey Asuero sin pasar por Ester.',
              answer: false,
              explanation: 'No. Mardoqueo denunció la conspiración a Ester, y ella lo comunicó al rey en nombre de Mardoqueo (Ester 2:22). Ester funcionó como el puente de comunicación entre Mardoqueo y el rey.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El silencio antes de la tormenta',
      intro: {
        romanNumeral: 'III',
        title: 'La Calma que Precede al Decreto',
        paragraphs: [
          'Por un tiempo, la vida en la corte continuó. Ester era reina. Mardoqueo vigilaba en la puerta. El secreto estaba guardado. Entonces llegó Amán.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Lo que la identidad oculta enseña sobre el llamamiento',
          blocks: [
            {
              type: 'paragraph',
              text: 'Entre la coronación de Ester (Ester 2:17) y el comienzo de la crisis con Amán (Ester 3:1) no hay información sobre cuánto tiempo pasó. El texto salta. Pero lo que ese silencio narrativo representa es significativo: años de vida ordinaria en la corte, de construcción de confianza, de acumulación de la influencia y el favor que serían absolutamente necesarios cuando llegara el momento de actuar.',
            },
            {
              type: 'paragraph',
              text: 'La paciencia es una forma de preparación. Ester no sabía para qué estaba siendo preparada. Cada día en la corte — aprendiendo sus ritmos, sus protocoles, sus peligros y sus oportunidades — era formación. Cuando Mardoqueo le dijera "¿quién sabe si no fue para este momento que llegaste al reino?" (Ester 4:14), toda esa preparación silenciosa se volvería repentinamente relevante.',
            },
            {
              type: 'central_quote',
              text: 'No sabemos lo que estamos aprendiendo mientras lo aprendemos. Solo lo vemos cuando necesitamos usarlo.',
              attribution: 'Reflexión doctrinal sobre la preparación providencial',
            },
            {
              type: 'key_points',
              title: 'Lo que la doble vida de Ester nos enseña',
              points: [
                'La identidad auténtica no desaparece cuando no puede expresarse — permanece disponible para cuando sea necesaria',
                'La obediencia a la sabiduría de quienes nos guían (Mardoqueo) forma parte del discernimiento espiritual',
                'El favor que Ester generó en cada entorno no era manipulación — era el fruto de un carácter real',
                'Los años de aparente silencio en la corte fueron años de formación invisible',
                'La crisis que llegaría exigiría todo lo que Ester había acumulado en esos años de preparación',
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Hay en tu vida un período de "silencio narrativo" — años de preparación cuyo propósito no ves aún con claridad? ¿Cómo lo vives con fe?' },
                { id: 'p2', question: 'Ester mantuvo su identidad judía en secreto durante años sin renegar de ella. ¿Qué diferencia hay entre guardar silencio sobre tu fe por prudencia y negarla por miedo?' },
                { id: 'p3', question: '¿Qué papel juega Mardoqueo como guía y figura de apoyo en la formación de Ester? ¿Qué personas en tu vida han jugado un papel similar?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
