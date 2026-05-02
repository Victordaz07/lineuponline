import type { Lesson } from '@/types/doctrine'

export const santaCena: Lesson = {
  id: 'santa-cena',
  moduleId: 'doctrina-fundamental',
  title: 'La Santa Cena',
  subtitle: 'Convenio y poder renovados',
  author: 'Iglesia de Jesucristo de los Santos de los Últimos Días',
  description:
    'El pan y el agua, la memoria del Salvador, y los convenios que renovamos cada semana. Una guía profunda sobre la ordenanza más frecuente de la Iglesia.',
  level: 'BÁSICO',
  icon: '🍷',
  duration: 45,
  order: 1,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'La ordenanza de convenio',
      intro: {
        romanNumeral: 'I',
        title: 'La ordenanza de convenio',
        paragraphs: [
          'La Santa Cena es el punto de acceso semanal a la Expiación de Jesucristo.',
        ],
      },
      topics: [
        {
          id: 'la-ordenanza-de-convenio',
          title: 'La Santa Cena: una ordenanza de convenio',
          subtitle:
            'Antes de cada reunión sacramental, el Salvador nos extiende una invitación a renovar nuestra relación con Él.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Santa Cena es una ordenanza del sacerdocio instituida por Jesucristo mismo en la noche de la Última Cena, antes de su crucifixión. No es un ritual simbólico vacío — es un acto sagrado en el que renovamos los convenios que hicimos en nuestro bautismo y nos comprometemos de nuevo con el Salvador.',
              blockId: 'sc-s1-p-0',
            },
            {
              type: 'paragraph',
              text: 'En el Antiguo Testamento, la Pascua conmemoraba la liberación de Egipto una vez al año. El Señor instituyó la Santa Cena como su cumplimiento y su sustituto — pero semanal, porque nuestra necesidad de renovar nuestra relación con Cristo no puede esperar un año.',
              blockId: 'sc-s1-p-1',
            },
            {
              type: 'highlight_verse',
              text: '"Y mientras comían, Jesús tomó el pan, y bendijo, y lo partió, y dio a sus discípulos, y dijo: Tomad, comed; esto es mi cuerpo. Y tomando la copa, y habiendo dado gracias, les dio, diciendo: Bebed de ella todos; porque esto es mi sangre del nuevo pacto, que por muchos es derramada para remisión de los pecados."',
              reference: 'Mateo 26:26–28 · Biblia (RVR)',
            },
            {
              type: 'highlight_verse',
              text: '"Tomó el pan, y habiendo dado gracias, lo partió y les dio, diciendo: Esto es mi cuerpo, que por vosotros es dado; haced esto en memoria de mí. Asimismo, tomó también la copa, después que hubo cenado, diciendo: Esta copa es el nuevo convenio en mi sangre, que por vosotros se derrama."',
              reference: 'Lucas 22:19–20 · Biblia (RVR)',
            },
            {
              type: 'paragraph',
              text: 'Después de su resurrección, el Salvador visitó el continente americano y estableció la misma ordenanza entre los nefitas. Esto confirma que la Santa Cena no era solo para Palestina — es un mandamiento universal para toda su Iglesia restaurada:',
              blockId: 'sc-s1-p-2',
            },
            {
              type: 'highlight_verse',
              text: '"Y esto haréis en memoria de mi cuerpo, el cual os he mostrado. Y será un testimonio ante el Padre de que siempre os acordáis de mí. Y si siempre os acordáis de mí, tendréis mi Espíritu con vosotros."',
              reference: '3 Nefi 18:6–7 · Libro de Mormón',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué representan los emblemas?',
              body: 'El pan representa el cuerpo de Cristo, sacrificado por nosotros en la Cruz. El agua representa la sangre de Cristo, derramada en expiación de nuestros pecados. Juntos simbolizan nuestra renovación de los convenios bautismales cada semana — no como un memorial pasivo, sino como un compromiso activo y renovado.',
            },
            {
              type: 'leader_quote',
              quote:
                'Cada semana el Salvador nos extiende su mano y nos invita a volver. La Santa Cena no es un rito de membresía — es el mecanismo más poderoso que el Señor ha dado a su pueblo para acceder semanalmente a los méritos de su Expiación. Participarla con fe viva no es solo recordar su muerte; es reclamar el poder de su vida resucitada.',
              name: 'Élder Jeffrey R. Holland · "Esto haced en memoria de mí" · Conferencia General, octubre 1995',
            },
            {
              type: 'deep_dive',
              badge: 'Contexto Histórico',
              title: 'Del cordero pascual al Cordero de Dios',
              paragraphs: [
                'La Pascua judía conmemoraba la liberación física de Egipto. La sangre del cordero en los dinteles protegía de la muerte temporal; se celebraba una vez al año mirando hacia atrás.',
                'El Señor instituyó la Santa Cena en esa misma noche para mirar hacia adelante — hacia la Expiación que se consumaría en Getsemaní y el Gólgota. Cristo es el Cordero de Dios (Juan 1:29): su sangre no nos protege de la muerte temporal, sino de la muerte espiritual.',
                'Por eso la Santa Cena es semanal: la liberación espiritual no es un evento anual — es una necesidad continua que el Señor, en su misericordia, renovó con una frecuencia que coincide con nuestro ciclo de tentación y caída.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿En qué enfocas tu mente y tu corazón durante la Santa Cena? ¿Qué cambiaría en tu semana si la recibieras con plena conciencia de los convenios que estás haciendo?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: '¿Quiénes deben participar?',
      intro: {
        romanNumeral: 'II',
        title: '¿Quiénes deben participar?',
        paragraphs: [
          'El Señor fue preciso: la Santa Cena es para corazones honestos, no para perfectos.',
        ],
      },
      topics: [
        {
          id: 'para-quien-es',
          title: '¿Quiénes deben participar?',
          subtitle:
            'No se trata de ser perfectos — se trata de ser honestos, con un corazón arrepentido y un deseo real de renovar el convenio.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Señor fue muy claro tanto sobre quiénes están invitados como sobre las consecuencias de recibirla indignamente. No se trata de perfectos — se trata de corazones honestos con un espíritu sincero de arrepentimiento.',
              blockId: 'sc-s2-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Y he aquí, este es el mandamiento que yo os doy, que no permitáis que ninguno a sabiendas participe indignamente de mi carne y de mi sangre, cuando las administréis; porque quien come mi carne y bebe mi sangre indignamente, come y bebe condenación para su alma."',
              reference: '3 Nefi 18:28–29 · Libro de Mormón',
            },
            {
              type: 'highlight_verse',
              text: '"Por tanto, pruébese cada uno a sí mismo, y coma así del pan, y beba de la copa. Porque el que come y bebe indignamente, sin discernir el cuerpo del Señor, juicio come y bebe para sí."',
              reference: '1 Corintios 11:28–29 · Biblia (RVR)',
            },
            {
              type: 'highlight_verse',
              text: '"También se os manda no desechar de vuestras reuniones sacramentales a ninguno que pertenezca a la iglesia; sin embargo, si alguien ha transgredido, no le permitáis participar sino hasta que se haya reconciliado. Y además, os digo que no desecharéis de vuestros servicios sacramentales a nadie que sinceramente esté buscando el reino."',
              reference: 'Doctrina y Convenios 46:4–5',
            },
            {
              type: 'key_points',
              points: [
                '✅ Deben recibirla: Miembros bautizados con un espíritu sincero de arrepentimiento y deseo de renovar sus convenios. No se requiere ser perfectos.',
                '⚠️ Cuándo abstenerse: El obispo puede restringir formalmente en casos de transgresiones graves, o el miembro puede auto-abstenerse si no puede hacer un convenio sincero. En caso de duda, habla con tu obispo.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'La dignidad para recibir la Santa Cena no es la perfección — es la honestidad de corazón. El que viene con un espíritu contrito y un genuino propósito de enmienda puede acercarse con confianza al trono de la gracia. El que participa fingiendo un convenio que no tiene intención de guardar, ese come y bebe condenación para sí mismo.',
              name: 'Élder Dallin H. Oaks · "La Santa Cena y la Expiación" · Conferencia General, octubre 2015',
            },
            {
              type: 'reflection',
              prompt:
                'Pablo dice "pruébese cada uno a sí mismo". ¿Cómo puedes prepararte durante la semana — no solo el domingo — para recibir la Santa Cena con plena honestidad de corazón?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Cómo se administra',
      intro: {
        romanNumeral: 'III',
        title: 'Cómo se administra',
        paragraphs: [
          'La administración de la Santa Cena es una responsabilidad sagrada del sacerdocio — cada función tiene un oficio, un orden y una reverencia específica.',
        ],
      },
      topics: [
        {
          id: 'como-se-administra',
          title: 'Preparar, bendecir y repartir',
          subtitle:
            'La Santa Cena la administran quienes poseen la autoridad debida del sacerdocio. El Manual General de la Iglesia es preciso sobre qué oficio corresponde a cada función.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Santa Cena la administran quienes poseen la autoridad debida del sacerdocio. El Manual General de la Iglesia es preciso sobre qué oficio corresponde a cada función:',
              blockId: 'sc-s3-p-0',
            },
            {
              type: 'steps',
              steps: [
                'Preparar (Maestros, Presbíteros y Sacerdocio de Melquisedec): La mesa sacramental debe estar lista antes de que inicie la reunión. Quienes preparan representan al Señor y deben hacerlo con solemnidad y reverencia.',
                'Bendecir (Presbíteros y Sacerdocio de Melquisedec): Mientras la congregación canta el himno sacramental, quien bendice retira el mantel y parte el pan. Se arrodilla y pronuncia la oración exactamente como está escrita. Si hay un error en las palabras esenciales, la oración debe repetirse desde el inicio.',
                'Repartir (Diáconos, Maestros, Presbíteros y Sacerdocio de Melquisedec): El oficial que preside recibe primero. Los portadores reparten de forma reverente y ordenada, conscientes de que sirven como instrumentos del Señor.',
              ],
            },
            {
              type: 'paragraph',
              text: 'Las oraciones no son improvisadas — fueron reveladas directamente por el Señor y deben pronunciarse con exactitud. Estas son las palabras del convenio:',
              blockId: 'sc-s3-p-1',
            },
            {
              type: 'highlight_verse',
              text: '"Oh Dios, Padre Eterno, en el nombre de Jesucristo, tu Hijo, te pedimos que bendigas y santifiques este pan para las almas de todos los que participen de él, para que lo coman en memoria del cuerpo de tu Hijo, y testifiquen ante ti, oh Dios, Padre Eterno, que están dispuestos a tomar sobre sí el nombre de tu Hijo, y a recordarle siempre, y a guardar sus mandamientos que él les ha dado, para que siempre puedan tener su Espíritu consigo. Amén."',
              reference: 'D&C 20:77 — Oración del Pan',
            },
            {
              type: 'highlight_verse',
              text: '"Oh Dios, Padre Eterno, en el nombre de Jesucristo, tu Hijo, te pedimos que bendigas y santifiques esta agua para las almas de todos los que la beban, para que lo hagan en memoria de la sangre de tu Hijo, que por ellos se derramó; para que testifiquen ante ti, oh Dios, Padre Eterno, que siempre se acuerdan de él, para que puedan tener su Espíritu consigo. Amén."',
              reference: 'D&C 20:79 — Oración del Agua',
            },
            {
              type: 'doctrine_box',
              title: 'Los tres convenios que hacemos al tomar la Santa Cena',
              body: 'Tomar sobre nosotros el nombre de Jesucristo — identificarnos con Él y con su Iglesia en todo momento. Siempre acordarnos de Él — no solo el domingo, sino en cada decisión de la semana. Guardar sus mandamientos — comprometerse activamente, no solo en intención.',
            },
            {
              type: 'highlight_verse',
              text: '"La forma en que sus élderes y presbíteros administraban la carne y la sangre de Cristo a la iglesia… Y se arrodillaban con la iglesia, y oraban al Padre en el nombre de Cristo… Oh Dios, Padre Eterno, en el nombre de Jesucristo, tu Hijo, te pedimos que bendigas y santifiques este pan…"',
              reference: 'Moroni 4:1–3 · Libro de Mormón',
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: '¿Por qué las oraciones de la Santa Cena deben ser exactas?',
              paragraphs: [
                'A diferencia de la mayoría de las oraciones — personales, espontáneas y variadas — las oraciones de la Santa Cena son reveladas palabra por palabra (Moroni 4–5; D&C 20:77,79). Este es un hecho doctrinal inusual que merece reflexión.',
                'La exactitud es el mensaje: los términos del convenio son fijados por el Señor, no negociables por el hombre. Cuando el sacerdote debe repetir la oración por un error, no es un inconveniente — es un recordatorio de que representamos al Señor ante la congregación y que las palabras del convenio importan.',
                'El élder Dallin H. Oaks enseñó que las oraciones de la Santa Cena son "el lenguaje del convenio" — la voz del sacerdocio hablando en nombre de la congregación al Padre Celestial. Esa responsabilidad exige preparación espiritual previa, no solo memorización de palabras.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'Como portador del sacerdocio, eres de los que puede bendecir la Santa Cena. ¿Cómo te preparas espiritualmente antes de arrodillarte a pronunciar esas palabras? ¿Qué sientes al representar al Señor ante la congregación?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Las bendiciones de la Santa Cena',
      intro: {
        romanNumeral: 'IV',
        title: 'Las bendiciones de la Santa Cena',
        paragraphs: [
          'La promesa del Espíritu Santo como compañero constante es la mayor bendición que recibimos cada semana.',
        ],
      },
      topics: [
        {
          id: 'las-bendiciones',
          title: 'Lo que la Santa Cena nos da',
          subtitle:
            'La Santa Cena es una fuente activa de poder espiritual — tanto para quien la administra como para quien la recibe.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Santa Cena no es un ritual vacío. Es una fuente activa de poder espiritual — tanto para quien la administra como para quien la recibe. La promesa central es la más grande que podemos recibir cada semana:',
              blockId: 'sc-s4-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Y si siempre os acordáis de mí, tendréis mi Espíritu con vosotros."',
              reference: '3 Nefi 18:7 · Libro de Mormón',
            },
            {
              type: 'paragraph',
              text: 'Esta promesa no es solo para el domingo. La compañía del Espíritu Santo cubre toda la semana — cada tentación, cada decisión, cada momento difícil. Eso es lo que renovamos cada vez que tomamos la Santa Cena dignamente.',
              blockId: 'sc-s4-p-1',
            },
            {
              type: 'key_points',
              points: [
                'Para quien la administra: Actúa en nombre de Cristo ante la congregación. Fortalece su testimonio al pronunciar palabras reveladas. Sirve como instrumento del Señor. Renueva su propio convenio al hacerlo.',
                'Para quien la recibe: Renovación del convenio bautismal. Acceso a la remisión de pecados mediante el arrepentimiento. La promesa del Espíritu Santo como compañero constante. Fortaleza espiritual acumulada semana a semana.',
              ],
            },
            {
              type: 'highlight_verse',
              text: '"Y para que más íntegramente te conserves sin mancha del mundo, irás a la casa de oración y ofrecerás tus sacramentos en mi día santo."',
              reference: 'Doctrina y Convenios 59:9',
            },
            {
              type: 'highlight_verse',
              text: '"De cierto, de cierto os digo: Si no coméis la carne del Hijo del Hombre ni bebéis su sangre, no tenéis vida en vosotros. El que come mi carne y bebe mi sangre tiene vida eterna, y yo le resucitaré en el día postrero. Porque mi carne verdaderamente es comida, y mi sangre verdaderamente es bebida. El que come mi carne y bebe mi sangre permanece en mí y yo en él."',
              reference: 'Juan 6:53–56 · Biblia (RVR)',
            },
            {
              type: 'doctrine_box',
              title: 'Verdades adicionales sobre la Santa Cena',
              body: 'Es el momento más sagrado de la semana — una oportunidad de expiación renovada cada domingo. Al tomarla somos testigos ante el Padre — no solo ante nosotros mismos. No la tomamos solos: es un acto de comunidad de convenio. Comemos y bebemos antes de recibir la promesa del Espíritu — es un ejercicio de fe, no de mérito.',
            },
            {
              type: 'leader_quote',
              quote:
                'Si participamos de la Santa Cena semanalmente con un corazón verdaderamente arrepentido y un sincero propósito de guardar los mandamientos, no necesitamos esperar años para saber que los pecados nos son perdonados. La remisión de pecados puede ser renovada cada domingo. Esa es la majestad de esta ordenanza: el acceso constante a la misericordia de Cristo.',
              name: 'Élder David A. Bednar · "Siempre retener una remisión de vuestros pecados" · Conferencia General, abril 2016',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Sábado — Preparación',
                  text: 'Autoexamen, oración y propósito de enmienda. El convenio comienza antes del domingo.',
                  color: 'gold',
                },
                {
                  label: 'Himno Sacramental',
                  text: 'La congregación se aquieta; el corazón anticipa el momento del convenio.',
                  color: 'blue',
                },
                {
                  label: 'Bendición del Sacerdocio',
                  text: 'El presbítero se arrodilla. Los tres convenios se pronuncian ante el Padre Celestial.',
                  color: 'red',
                },
                {
                  label: 'Participación Silenciosa',
                  text: 'Memoria del Salvador, renovación interior, acceso al poder de la Expiación.',
                  color: 'gold',
                },
                {
                  label: 'La Promesa se Cumple',
                  text: '«Tendréis mi Espíritu con vosotros» — toda la semana comienza aquí.',
                  color: 'green',
                },
              ],
            },
            {
              type: 'reflection',
              prompt:
                'La promesa dice "si siempre os acordáis de mí". ¿Qué haces actualmente para acordarte del Salvador durante la semana, no solo el domingo? ¿Qué podrías cambiar esta semana?',
            },
          ],
        },
      ],
    },
  ],
}
