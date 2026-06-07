import type { Lesson } from '@/types/doctrine'

export const scComoServir: Lesson = {
  id: 'sc-como-servir',
  moduleId: 'la-santa-cena',
  title: 'Cómo Servir la Santa Cena',
  subtitle: 'Los pasos, las oraciones reveladas y el corazón del servidor',
  description:
    'Preparar, bendecir y repartir la Santa Cena no es una tarea mecánica — es representar a Cristo ante su pueblo. Esta lección cubre quién puede hacer qué, las oraciones reveladas palabra por palabra, el orden completo de la distribución y el corazón que debe tener quien sirve.',
  level: 'BÁSICO',
  icon: '🙏',
  duration: 40,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'Representar a Cristo',
      intro: {
        romanNumeral: 'I',
        title: 'Representar a Cristo',
        paragraphs: [
          'Esa misma noche en el aposento alto, antes de partir el pan, Jesús lavó los pies de sus discípulos. El patrón es claro: quien sirve la ordenanza más sagrada sigue el ejemplo del Salvador que sirvió primero.',
        ],
      },
      topics: [
        {
          id: 'representar',
          title: 'El que sirve como el que sirvió',
          subtitle:
            'Cuando un diácono extiende la bandeja o un presbítero se arrodilla, no son jóvenes cumpliendo una tarea dominical. Son representantes de Cristo ante su pueblo.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Antes de partir el pan en el aposento alto, Jesús se levantó, se quitó el manto y lavó los pies de sus discípulos. "¿Sabéis lo que os he hecho?" preguntó después. "Si yo, el Señor y el Maestro, os he lavado los pies, vosotros también debéis lavaros los pies los unos a los otros" (Juan 13:12–14). Ese gesto de servicio precedió y enmarcó la institución de la Santa Cena.',
              blockId: 'sc3s1p0',
            },
            {
              type: 'leader_quote',
              quote:
                'Podemos pensar en lo que significa cuando un diácono nos lleva los emblemas sagrados, poniéndose de pie donde estaría Jesús si estuviera ahí, ofreciendo aliviar nuestras cargas. Cuando un joven portador del sacerdocio extiende la bandeja, representa al Salvador mismo extendiendo su brazo de misericordia hacia nosotros.',
              name: 'Hermana Cheryl A. Esplin · Presidencia General de la Primaria · Conferencia General, abril 2012',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué significa representar a Cristo?',
              body: 'El sacerdocio actúa en el nombre de Cristo, con su autoridad delegada. Cada acto de preparar, bendecir o repartir la Santa Cena es un acto realizado en el nombre de Jesucristo. Cuando el portador del sacerdocio extiende la bandeja, no ofrece su propia misericordia — ofrece la de Cristo. Su corazón, su apariencia, su reverencia son el mensaje que acompaña ese gesto sagrado.',
            },
            {
              type: 'reflection',
              prompt:
                'La próxima vez que te levantes a repartir o bendecir, ¿qué diferencia haría pensar: "Estoy representando al Salvador ante estas personas"? ¿Cómo cambia tu postura, tu reverencia, tu preparación del sábado anterior?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los Roles del Sacerdocio',
      intro: {
        romanNumeral: 'II',
        title: 'Los Roles del Sacerdocio',
        paragraphs: [
          'Tres funciones distintas, tres niveles de autoridad. El Manual General §18.9.2 es preciso: no cualquier portador del sacerdocio puede hacer cualquier función de la Santa Cena.',
        ],
      },
      topics: [
        {
          id: 'roles',
          title: 'Preparar, Bendecir, Repartir',
          subtitle:
            'El Señor estableció un orden específico para administrar la Santa Cena. Conocerlo nos ayuda a ejecutarlo con confianza y a entender por qué cada oficio tiene la responsabilidad que tiene.',
          blocks: [
            {
              type: 'key_points',
              title: 'Tabla de autoridad — Manual General §18.9.2',
              points: [
                '🍞 PREPARAR — Maestros ✓ · Presbíteros ✓ · Élderes/SM ✓ · Diáconos ✗ — Preparan la mesa antes de que inicie la reunión: lavar manos, colocar manteles, preparar los emblemas con reverencia.',
                '🙏 BENDECIR — Presbíteros ✓ · Élderes/SM ✓ · Maestros ✗ · Diáconos ✗ — Se arrodillan ante la mesa y pronuncian las oraciones reveladas con exactitud. Si hay error en palabras esenciales, la oración se repite completa.',
                '🚶 REPARTIR — Diáconos ✓ · Maestros ✓ · Presbíteros ✓ · Élderes/SM ✓ — Todos los oficios pueden distribuir. El que preside la reunión recibe primero.',
              ],
            },
            {
              type: 'paragraph',
              text: 'El Manual también establece que los portadores del sacerdocio con pecados graves sin resolver no deben participar en ninguna función de la Santa Cena hasta haberse reconciliado con el obispo. La administración requiere no solo autoridad de oficio sino dignidad personal — ambas cosas importan.',
              blockId: 'sc3s2p0',
            },
            {
              type: 'highlight_verse',
              text: '"La misión de los presbíteros es… administrar la Santa Cena."',
              reference: 'Doctrina y Convenios 20:46',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué los jóvenes del Sacerdocio Aarónico administran la Santa Cena?',
              body: 'No es por conveniencia — es profundamente simbólico. Cuando un diácono de 12 años extiende la bandeja, representa al Salvador mismo. Este ministerio temprano moldea el carácter de los jóvenes más que cualquier clase o programa: los sitúa semana a semana en el rol de siervos de Cristo ante toda la congregación. El Sacerdocio de Melquisedec puede suplir cuando no hay suficientes jóvenes — pero el diseño original es que los jóvenes sirvan.',
            },
            {
              type: 'steps',
              title: 'El orden completo de la administración',
              steps: [
                'Antes de la reunión — Los preparadores (Maestros o superiores) limpian la mesa, colocan los manteles blancos, preparan pan y agua, y se lavan las manos.',
                'Durante el himno — Los bendecidores retiran el mantel, parten el pan y lo colocan en las bandejas. Los repartidores permanecen sentados hasta el fin del himno.',
                'Bendición del pan — El presbítero (o superior) se arrodilla y pronuncia la oración de D&C 20:77 con exactitud. Toda la congregación inclina la cabeza.',
                'Distribución del pan — El que preside la reunión recibe primero. Los repartidores sirven a toda la congregación simultáneamente.',
                'Bendición del agua — El presbítero se arrodilla y pronuncia la oración de D&C 20:79, usando "esta agua" (no "este vino").',
                'Distribución del agua — Mismo proceso: quien preside primero, luego toda la congregación.',
                'Cierre — Los bendecidores cubren las bandejas con el manto blanco. Todos regresan ordenadamente a sus asientos.',
              ],
            },
            {
              type: 'key_points',
              title: 'Si hay un error en la oración',
              points: [
                '✅ Si el bendecidor se corrige a sí mismo → no es necesario repetir la oración.',
                '⚠️ Si no corrige el error → el obispo pide con discreción que se repita la oración completa desde el inicio.',
                '🤝 El oficial en la otra silla puede ayudar a recordar las palabras si es necesario.',
                '🔇 El obispo se asegura de que la repetición no avergüence a nadie ni perturbe la solemnidad de la ordenanza.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Oraciones Reveladas',
      intro: {
        romanNumeral: 'III',
        title: 'Las Oraciones Reveladas',
        paragraphs: [
          'Las oraciones de la Santa Cena son las únicas de la Iglesia que deben pronunciarse con exactitud palabra por palabra. No es burocracia — es el lenguaje del convenio: los términos fijados por el Señor, no negociables por el hombre.',
        ],
      },
      topics: [
        {
          id: 'oraciones',
          title: 'El lenguaje del convenio — versículo a versículo',
          subtitle:
            'Cuatro compromisos de nuestra parte. Una promesa de Dios. Las oraciones de la Santa Cena son el contrato más repetido de nuestra vida espiritual.',
          blocks: [
            {
              type: 'highlight_verse',
              text: '"Oh Dios, Padre Eterno, en el nombre de Jesucristo, tu Hijo, te pedimos que bendigas y santifiques este pan para las almas de todos los que participen de él, para que lo coman en memoria del cuerpo de tu Hijo, y testifiquen ante ti, oh Dios, Padre Eterno, que están dispuestos a tomar sobre sí el nombre de tu Hijo, y a recordarle siempre, y a guardar sus mandamientos que él les ha dado, para que siempre puedan tener su Espíritu consigo. Amén."',
              reference: 'D&C 20:77 — Oración del Pan',
            },
            {
              type: 'highlight_verse',
              text: '"Oh Dios, Padre Eterno, en el nombre de Jesucristo, tu Hijo, te pedimos que bendigas y santifiques esta agua para las almas de todos los que la beban, para que la beban en memoria de la sangre de tu Hijo, que por ellos se derramó; para que testifiquen ante ti, oh Dios, Padre Eterno, que siempre se acuerdan de él, para que puedan tener su Espíritu consigo. Amén."',
              reference: 'D&C 20:79 — Oración del Agua',
            },
            {
              type: 'doctrine_box',
              title: 'Los cuatro compromisos + la única promesa de Dios',
              body: 'Nosotros prometemos cuatro cosas: (1) comer en MEMORIA del cuerpo de Cristo — mantener presente su sacrificio; (2) tomar su NOMBRE — identificarnos con Él en todo momento; (3) RECORDARLE siempre — no solo el domingo sino en cada decisión; (4) GUARDAR sus mandamientos — comprometerse activamente, no solo en intención. Dios promete una sola cosa: que siempre podamos tener su ESPÍRITU consigo. Cuatro de nuestra parte, uno de la Suya. Pero ese uno es el más poderoso de todos.',
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: '¿Por qué las oraciones deben ser exactas?',
              paragraphs: [
                'A diferencia de todas las demás oraciones de la Iglesia — personales, espontáneas, variadas — las de la Santa Cena deben pronunciarse literalmente como están escritas (Moroni 4–5; D&C 20:77, 79).',
                'Este hecho doctrinal inusual tiene un significado profundo: los términos del convenio son fijados por el Señor, no negociables por el hombre. El sacerdocio no improvisa el contrato — lo pronuncia como representante.',
                'El Élder Dallin H. Oaks enseñó que estas oraciones son "el lenguaje del convenio" — la voz del sacerdocio hablando en nombre de toda la congregación al Padre Celestial. Cuando el bendecidor debe repetir por un error, no es un momento embarazoso — es un recordatorio de que las palabras del convenio merecen exactitud. Prepararse antes del domingo no es solo memorizar — es venerar.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'Esta ordenanza siempre se debe llevar a cabo con reverencia y dignidad. Los presbíteros que ofrecen las oraciones deben pronunciar las palabras lenta y claramente, expresando los términos de los convenios y las bendiciones prometidas. Éste es un acto sumamente sagrado.',
              name: 'Presidente Dallin H. Oaks · "La reunión sacramental y la Santa Cena" · Conferencia General, octubre 2008',
            },
            {
              type: 'reflection',
              prompt:
                'Como portador del sacerdocio que bendice la Santa Cena: ¿cómo te preparas espiritualmente antes del domingo? ¿Qué cambiaría si llegaras al domingo sabiendo que vas a arrodillarte ante el Padre Celestial en nombre de toda la congregación?',
            },
          ],
        },
      ],
    },
  ],
}
