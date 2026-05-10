import type { Lesson } from '@/types/doctrine'

export const elDiacono: Lesson = {
  id: 'el-diacono',
  moduleId: 'sacerdocio',
  title: 'El Diácono',
  subtitle: 'El primero en servicio — la puerta del sacerdocio',
  description:
    'El diácono es el primer oficio del sacerdocio. A los 12 años, el Padre Celestial confía en un joven para administrar la ordenanza más frecuente de la Iglesia y servir a su comunidad.',
  level: 'BÁSICO',
  icon: '🚶',
  duration: 35,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Oficio del Diácono',
      intro: {
        romanNumeral: 'I',
        title: 'El Oficio del Diácono',
      },
      topics: [
        {
          id: 'oficio-diacono',
          title: 'El primer paso — autoridad real a los 12 años',
          subtitle:
            'No es un cargo menor. Es la primera vez que el Padre Celestial confía autoridad de sacerdocio a un hombre joven.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El diácono es el primer oficio del Sacerdocio Aarónico. Se ordena a hombres jóvenes que han cumplido 12 años y son dignos. La palabra «diácono» viene del griego diakonos — que significa servidor o ministro. El nombre define perfectamente la llamada: el diácono es antes que nada un servidor.',
            },
            {
              type: 'highlight_verse',
              text: '"Además, el deber de los diáconos es asistir a los maestros en cualesquiera de sus deberes, si así se requiere, y también ayudar al obispo en la administración de todos los asuntos temporales."',
              reference: 'Doctrina y Convenios 20:57–58',
            },
            {
              type: 'highlight_verse',
              text: '"Un diácono debe tener al menos doce años de edad."',
              reference: 'Doctrina y Convenios 107:85',
            },
            {
              type: 'doctrine_box',
              title: 'Los tres deberes principales del Diácono',
              body: '(1) Repartir la Santa Cena — administrar los emblemas sagrados a la congregación, representando al Salvador ante su pueblo. (2) Recoger las ofrendas de ayuno — servir a los pobres y necesitados del barrio. (3) Asistir al obispo — en asuntos temporales, mensajes, cuidado del edificio, apoyo en lo que sea necesario.',
            },
            {
              type: 'key_points',
              title: 'Lo que hace especial al oficio de Diácono',
              points: [
                'Es el único oficio del sacerdocio en el que el Señor confía su ordenanza más frecuente a jóvenes. Los diáconos administran la Santa Cena que los élderes y sumos sacerdotes reciben.',
                'Recoger ofrendas de ayuno es ministerio directo a los pobres — una de las responsabilidades más sagradas en la Iglesia.',
                'El diácono lleva mensajes del obispo y ayuda en asuntos temporales del barrio — es los "ojos y oídos" del obispo entre la congregación.',
                'En la Iglesia de los primeros tiempos, los diáconos también cuidaban los edificios sagrados, una práctica que se mantiene hoy.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'El Señor conoce y ama a cada diácono por nombre. No olvidéis que cuando servís en este oficio, servís al Señor Jesucristo mismo. Vuestra obra tiene valor eterno.',
              name: 'Presidente Thomas S. Monson',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Diácono y la Santa Cena',
      intro: {
        romanNumeral: 'II',
        title: 'El Diácono y la Santa Cena',
      },
      topics: [
        {
          id: 'diacono-santa-cena',
          title: 'Repartir la Santa Cena — ponerse donde estaría el Salvador',
          subtitle:
            'El diácono no solo pasa una bandeja — representa al Salvador extendiendo su mano de misericordia a la congregación.',
          blocks: [
            {
              type: 'paragraph',
              text: 'De todas las responsabilidades del diácono, repartir la Santa Cena es la más visible y la más sagrada. Cada domingo, el diácono lleva los emblemas del cuerpo y sangre de Cristo a cada miembro de la congregación. Ese acto tiene un significado profundo.',
            },
            {
              type: 'leader_quote',
              quote:
                'Podemos pensar en lo que significa cuando un diácono nos lleva los emblemas sagrados, poniéndose de pie donde estaría Jesús si estuviera ahí, ofreciendo aliviar nuestras cargas y decirnos que Él nos recuerda.',
              name: 'Élder Steven J. Lund · «La fuerza de los jóvenes» · Conferencia General',
            },
            {
              type: 'key_points',
              title: 'Principios para repartir con reverencia',
              points: [
                'Preparación personal: el diácono debe haber orado, estar en paz consigo mismo y consciente de la santidad de lo que lleva en sus manos.',
                'Apariencia: ropa limpia y apropiada (no necesariamente traje — camisa limpia y modesta es suficiente). La apariencia habla de la reverencia interior.',
                'Actitud: caminar con paso firme y controlado, no correr. Ofrecer la bandeja con ambas manos o al menos con mano derecha. Mantener la vista respetuosa, no distraída.',
                'Asistir a quienes no pueden levantarse: el diácono cuida especialmente de ancianos, enfermos o personas con movilidad reducida — lleva la ordenanza hasta donde ellos están.',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: '¿Por qué el Señor usa jóvenes de 12 años para esta tarea?',
              paragraphs: [
                'En el Antiguo Testamento, solo los sacerdotes levitas podían administrar las ordenanzas sagradas. Era un privilegio reservado a hombres consagrados. En la Iglesia restaurada, el Señor tomó esa responsabilidad y la confió a jóvenes de 12 años — es un acto deliberado de confianza divina.',
                'El Señor conoce a cada joven por nombre antes de que nazca (Jeremías 1:5). La ordenación al oficio de Diácono no es administrativa — es el cumplimiento de un llamamiento premortal.',
                'Cuando una congregación ve a sus jóvenes sirviendo reverentemente, ese testimonio silencioso fortalece la fe de toda la reunión. Los diáconos son ministros visibles del amor del Salvador hacia su rebaño.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'Como diácono o como miembro que recibe la Santa Cena de manos de un diácono: ¿puedes ver al Salvador en ese momento? ¿Qué cambiaría en tu experiencia de la reunión sacramental si recordaras quién está representando el joven frente a ti?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Ofrendas de Ayuno',
      intro: {
        romanNumeral: 'III',
        title: 'Las Ofrendas de Ayuno',
      },
      topics: [
        {
          id: 'ofrendas-ayuno',
          title: 'Recoger las ofrendas de ayuno — ministrar a los pobres',
          subtitle:
            'Esta responsabilidad del diácono conecta directamente con el corazón del evangelio: cuidar al necesitado.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cada primer domingo del mes, el diácono recoge las ofrendas de ayuno — el dinero o bienes que los miembros ofrecen después de ayunar dos comidas. Esos fondos se destinan directamente a ayudar a los pobres y necesitados del barrio, administrados por el obispo.',
            },
            {
              type: 'highlight_verse',
              text: '"¿No es más bien el ayuno que yo escogí, desatar las ligaduras de impiedad, soltar las cargas de opresión, y dejar ir libres a los quebrantados, y que rompáis todo yugo? ¿No es que partas tu pan con el hambriento, y a los pobres errantes albergues en casa; que cuando veas al desnudo, lo cubras?"',
              reference: 'Isaías 58:6–7',
            },
            {
              type: 'key_points',
              title: 'Lo que las ofrendas de ayuno representan',
              points: [
                'El diácono es el instrumento visible entre los miembros que ayunan y el obispo que distribuye. Su servicio une los dos extremos de la cadena de bendición.',
                'Las ofrendas de ayuno son una de las formas más puras de caridad en la Iglesia — el donador se priva para dar al necesitado.',
                'El Presidente Gordon B. Hinckley enseñó: "El ayuno implica privación personal en beneficio de quienes pasan necesidad. Es uno de los principios más nobles del Evangelio."',
                'El diácono que recoge fielmente estas ofrendas está participando en el cuidado del pobre, la viuda y el huérfano — una responsabilidad sagrada que se menciona en todas las escrituras.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Has sentido el peso sagrado de recoger una ofrenda de ayuno? ¿Cómo cambia tu actitud hacia el ayuno saber que tu donación llega directamente a una familia de tu barrio que lo necesita?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Crecer en el Oficio',
      intro: {
        romanNumeral: 'IV',
        title: 'Crecer en el Oficio',
      },
      topics: [
        {
          id: 'crecer-diacono',
          title: 'Del diácono al hombre de convenio',
          subtitle:
            'El oficio del Diácono no es un peldaño para subir — es la fundación sobre la que se construye toda una vida de sacerdocio.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El diácono que sirve con fidelidad está construyendo hábitos espirituales que lo acompañarán toda la vida: puntualidad, preparación, reverencia, servicio. Un élder fiel casi siempre fue primero un diácono fiel.',
            },
            {
              type: 'key_points',
              title: 'Principios para crecer en el oficio',
              points: [
                'La dignidad es activa, no pasiva. No es solo "no hacer el mal" — es orar, estudiar las escrituras, honrar la Palabra de Sabiduría y buscar la guía del Espíritu activamente.',
                'El cuórum de Diáconos es tu primera experiencia de liderazgo de sacerdocio. Las habilidades que desarrollas ahí — organizar el reparto, asignar filas, cuidar de los miembros — te preparan para presidir un día.',
                'Tu presidente del cuórum de diáconos tiene autoridad real. Seguirle es practicar el principio de seguir al profeta.',
                'El diácono que sirve bien en lo pequeño será confiado con lo grande (Mateo 25:23). La fidelidad en el oficio más pequeño es la prueba de la fidelidad futura.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'No hay oficio más digno en el sacerdocio que el de diácono. El que sirve fielmente en este oficio está preparándose para recibir mayor autoridad, mayor poder y mayor responsabilidad.',
              name: 'Élder Robert D. Hales · Conferencia General',
            },
            {
              type: 'highlight_verse',
              text: '"El que es fiel en lo muy poco, también en lo más es fiel; y el que en lo muy poco es injusto, también en lo más es injusto."',
              reference: 'Lucas 16:10',
            },
            {
              type: 'reflection',
              prompt:
                'Cuando eras diácono, ¿quién fue tu mentor? ¿Quién te enseñó a servir? ¿A qué joven diácono puedes tú mentorear ahora para que viva la plenitud de este sagrado oficio?',
            },
          ],
        },
      ],
    },
  ],
}
