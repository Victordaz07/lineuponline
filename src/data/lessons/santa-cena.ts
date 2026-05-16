import type { Lesson } from '@/types/doctrine'

export const santaCena: Lesson = {
  id: 'santa-cena',
  moduleId: 'doctrina-avanzada-carne',
  title: 'La Santa Cena',
  subtitle: 'Convenio y poder renovados',

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
              type: 'media_slot',
              kind: 'image',
              src: '/images/santa-cena/ultima-cena.jpg',
              alt: 'Cristo instituyendo la Santa Cena en la Última Cena con sus apóstoles',
              caption: 'La noche antes de su crucifixión, el Salvador instituyó la ordenanza que renovaríamos cada semana.',
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
              type: 'media_slot',
              kind: 'image',
              src: '/images/santa-cena/congregacion-recibe.jpg',
              alt: 'Una congregación recibiendo la Santa Cena en silencio y reverencia',
              caption: 'Cada miembro se examina a sí mismo — no se trata de ser perfectos, sino de ser honestos.',
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
        {
          id: 'vestimenta-para-oficiar',
          title: 'Vestimenta para oficiar',
          subtitle:
            'La apariencia del que oficia en la Santa Cena no es un detalle menor — es parte del mensaje que el sacerdocio envía a la congregación y al Señor.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Manual General de la Iglesia enseña que quienes administran la Santa Cena deben vestirse de manera modesta, limpia y apropiada. La vestimenta del que oficia comunica reverencia — tanto al Señor cuya ordenanza se administra, como a los miembros que la reciben. No existe una lista rígida de prendas obligatorias, pero el principio es claro: la apariencia debe honrar la santidad del momento.',
              blockId: 'sc-s3b-p-0',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: '/images/santa-cena/padre-prepara-hijo.png',
              caption: 'La preparación comienza en casa — un padre ayuda a su hijo a vestirse con reverencia para el domingo.',
            },
            {
              type: 'key_points',
              points: [
                '✅ Camisa blanca y corbata — estándar preferido en la mayoría de las culturas donde es accesible; comunica solemnidad y distinción de la ordenanza.',
                '✅ Ropa limpia y modesta adaptada a la cultura local — el Señor mira el corazón, pero la apariencia externa refleja el estado interior.',
                '⚠️ No se requiere traje completo — en muchos países un polo blanco o camisa limpia es apropiado y suficiente; el principio es la reverencia, no la marca de la ropa.',
                '❌ Evitar ropa llamativa, rota, sucia o que distraiga la atención de la ordenanza hacia la persona.',
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: '/images/santa-cena/vestimenta-apropiada.png',
              caption: 'Traje formal con corbata (climas fríos) o camisa blanca manga corta (climas cálidos) — ambas opciones son apropiadas para oficiar.',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué importa la vestimenta al oficiar?',
              body: 'Cuando un presbítero se arrodilla ante la mesa sacramental, representa a Jesucristo ante la congregación. La vestimenta no salva — pero sí habla. Una apariencia cuidada dice: "entiendo la seriedad de lo que hago." El Señor, que mira el corazón, también ve si el portador del sacerdocio ha tenido suficiente cuidado de su persona como señal del cuidado que tiene de su responsabilidad.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: '/images/santa-cena/bendiciendo-santa-cena.png',
              caption: 'Un presbítero se arrodilla a bendecir la Santa Cena — preparado en apariencia y en espíritu para representar al Señor ante la congregación.',
            },
            {
              type: 'reflection',
              prompt:
                '¿Cómo te vistes cuando oficias en la Santa Cena? ¿Qué mensaje envía tu apariencia a la congregación y al Señor? ¿Cómo puedes prepararte — tanto por dentro como por fuera — para que tu presencia honre la santidad de la ordenanza?',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Autoridad: ¿quién hace qué?',
      intro: {
        romanNumeral: 'IV',
        title: 'Autoridad: ¿quién hace qué?',
        paragraphs: [
          'Tres funciones distintas, tres niveles de autoridad. El Señor estableció un orden específico — no cualquier poseedor del sacerdocio puede hacer todo.',
        ],
      },
      topics: [
        {
          id: 'quien-puede-que',
          title: '¿Quién puede preparar, bendecir y repartir?',
          subtitle:
            'El Manual General §18.9.2 es preciso: cada función de la Santa Cena requiere el oficio correspondiente del sacerdocio.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Santa Cena tiene tres funciones distintas — preparar, bendecir y repartir — y cada una requiere un nivel específico de autoridad del sacerdocio. Esto no es protocolo cultural: es el orden establecido por el Señor.',
              blockId: 'sc-s5-p-0',
            },
            {
              type: 'key_points',
              title: 'Tabla de autoridad (Manual General §18.9.2)',
              points: [
                '🍞 PREPARAR — Maestros ✓ · Presbíteros ✓ · Élderes/SM ✓ · Diáconos ✗ — Preparan la mesa antes de que inicie la reunión.',
                '🙏 BENDECIR — Presbíteros ✓ · Élderes/SM ✓ · Maestros ✗ · Diáconos ✗ — Pronuncian las oraciones reveladas arrodillados ante la mesa.',
                '🚶 REPARTIR — Diáconos ✓ · Maestros ✓ · Presbíteros ✓ · Élderes/SM ✓ — Todos los oficios del sacerdocio pueden distribuir.',
              ],
            },
            {
              type: 'highlight_verse',
              text: '"La misión de los presbíteros es… administrar la Santa Cena."',
              reference: 'Doctrina y Convenios 20:46',
            },
            {
              type: 'key_points',
              points: [
                '¿Por qué los presbíteros bendicen? El sacerdocio de los presbíteros incluye el deber específico de "administrar" la Santa Cena (D&C 20:46). Es una de sus responsabilidades principales.',
                '¿Por qué los diáconos reparten pero no bendicen? Su oficio tiene autoridad para repartir, pero bendecir requiere el oficio de presbítero o superior.',
                'Dignidad requerida. El Manual indica que quien tenga "pecados graves sin resolver" no debe preparar, bendecir ni repartir hasta haberse arrepentido y reconciliado con el obispo.',
                'El Sacerdocio de Melquisedec puede suplir. Cuando no hay suficientes jóvenes del Sacerdocio Aarónico, los élderes y sumos sacerdotes pueden cubrir cualquier función.',
              ],
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué los jóvenes del Sacerdocio Aarónico administran la Santa Cena?',
              body: 'No es por conveniencia — es profundamente simbólico. El Élder Steven J. Lund enseñó: "Podemos pensar en lo que significa cuando un diácono nos lleva los emblemas sagrados, poniéndose de pie donde estaría Jesús si estuviera ahí, ofreciendo aliviar nuestras cargas." Cuando un joven portador del sacerdocio extiende la bandeja, representa al Salvador mismo extendiendo su brazo de misericordia hacia nosotros.',
            },
            {
              type: 'leader_quote',
              quote:
                'Cuando un poseedor del sacerdocio extiende el brazo para ofrecernos los emblemas sagrados, es como si el Salvador mismo estuviera extendiendo Su brazo de misericordia hacia nosotros.',
              name: 'Hermana Cheryl A. Esplin · Presidencia General de la Primaria',
            },
          ],
        },
        {
          id: 'obispo-primero',
          title: '¿Por qué el obispo recibe la Santa Cena primero?',
          subtitle:
            'El Manual es explícito: «El líder que preside es el primero que la recibe». No es protocolo cultural — tiene fundamento doctrinal directo.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Manual General §18.9.4 establece literalmente: «El líder que preside es el primero que la recibe, y después de él no se sigue ningún orden específico.» Esta instrucción se repite dos veces — una para el pan y otra para el agua.',
              blockId: 'sc-s5b-p-0',
            },
            {
              type: 'key_points',
              points: [
                'El obispo tiene las llaves. El Manual General §18.9.1 indica que "el obispo posee las llaves del sacerdocio para preparar, bendecir y repartir la Santa Cena en el barrio". Él es el responsable final de la ordenanza.',
                'Quien preside, no necesariamente el obispo. Si un miembro de la presidencia de estaca preside la reunión, él recibe primero. El principio es que quien preside recibe primero.',
                'Después no hay orden específico. Una vez que el que preside ha recibido, los demás miembros del estrado y la congregación reciben sin orden jerárquico particular.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'El obispo representa a Cristo como líder del rebaño. ¿Cómo cambia tu perspectiva de la Santa Cena saber que cada acto — incluyendo quién recibe primero — tiene una razón doctrinal precisa?',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Los emblemas y las oraciones',
      intro: {
        romanNumeral: 'V',
        title: 'Los emblemas y las oraciones',
        paragraphs: [
          '¿Por qué agua y no vino? ¿Por qué la mano derecha? ¿Qué prometemos exactamente en esas oraciones? Cada detalle tiene una respuesta revelada.',
        ],
      },
      topics: [
        {
          id: 'por-que-agua',
          title: '¿Por qué usamos agua y no vino?',
          subtitle:
            'Jesús usó vino en la Última Cena. La Iglesia usa agua. Hay una revelación directa del Señor sobre esto — con un contexto histórico fascinante.',
          blocks: [
            {
              type: 'paragraph',
              text: 'En agosto de 1830, el Profeta José Smith se disponía a comprar vino para administrar la Santa Cena. Un mensajero celestial se le apareció y le entregó esta revelación:',
              blockId: 'sc-s6-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Porque he aquí, te digo que no importa lo que comáis o bebáis al tomar el sacramento, si es que lo hacéis con la mira puesta únicamente en mi gloria, recordando ante el Padre mi cuerpo que fue sacrificado por vosotros, y mi sangre que se derramó para la remisión de vuestros pecados."',
              reference: 'Doctrina y Convenios 27:2',
            },
            {
              type: 'paragraph',
              text: 'El Señor también advirtió a José que no comprara vino ni bebidas alcohólicas a sus enemigos (D&C 27:3–4). La Iglesia adoptó el agua como emblema permanente por ser pura, universalmente accesible y sin asociación con el alcohol.',
              blockId: 'sc-s6-p-1',
            },
            {
              type: 'key_points',
              points: [
                'El elemento no es lo sagrado. Lo sagrado es la intención del corazón y lo que los emblemas representan — el cuerpo y la sangre de Cristo.',
                'La oración dice «esta agua». Según el Manual §18.9.4, quien bendice el agua debe usar las palabras «esta agua» en lugar de «este vino», como indica D&C 20:79.',
                'Revelada antes de la Palabra de Sabiduría. Esta instrucción llegó más de dos años antes de D&C 89. El Señor ya guiaba hacia emblemas más puros.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'No es el tipo de elemento lo que es esencial, sino el espíritu con el que participamos del sacramento.',
              name: 'Presidente Joseph Fielding Smith · Doctrina de Salvación',
            },
          ],
        },
        {
          id: 'mano-derecha',
          title: '¿Por qué tomamos la Santa Cena con la mano derecha?',
          subtitle:
            'El Manual dice «cuando sea posible». El Presidente Nelson explicó el significado profundo: es la misma mano con la que hacemos convenios sagrados.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Manual General indica claramente: «Los miembros toman la Santa Cena con la mano derecha, cuando sea posible.» No es una regla absoluta, pero tiene un simbolismo profundo.',
              blockId: 'sc-s6b-p-0',
            },
            {
              type: 'leader_quote',
              quote:
                'La mano utilizada al participar del sacramento sería lógicamente la misma mano utilizada al hacer cualquier otro convenio sagrado. Para la mayoría de nosotros, sería la mano derecha. Puesto que tengo una mano derecha, la ofrezco al participar del sacramento como juramento de que siempre recordaré su sacrificio expiatorio, tomaré su nombre sobre mí y guardaré los mandamientos de Dios.',
              name: 'Presidente Russell M. Nelson',
            },
            {
              type: 'key_points',
              points: [
                'La mano derecha y los convenios. En la Biblia, la mano derecha aparece 166 veces en contextos de fidelidad, fuerza y poder. Se usaba al hacer convenios desde los tiempos de Abram (Génesis 14:22).',
                'Cristo está a la diestra del Padre. Jesús declaró que estaría "sentado a la diestra del poder de Dios" (Mateo 26:64). Extender la mano derecha es una alusión a esa posición.',
                'No es obligatorio. Quien no puede usar la mano derecha por discapacidad u otra razón puede tomarla con la mano izquierda sin ningún problema. El corazón importa más que el gesto.',
                'No se pueden requerir ciertas acciones. El Manual indica expresamente: "no se deben requerir ciertas acciones (como colocar la mano izquierda detrás de la espalda)". La reverencia no se fuerza.',
              ],
            },
          ],
        },
        {
          id: 'oraciones-anotadas',
          title: 'Las oraciones sacramentales — versículo a versículo',
          subtitle:
            'Las oraciones no son poemas — son un contrato bilateral con Dios. Tres promesas nuestras, una promesa de Él.',
          blocks: [
            {
              type: 'paragraph',
              text: 'A diferencia de la mayoría de las oraciones — personales y espontáneas — las oraciones de la Santa Cena son reveladas palabra por palabra. Esto es un hecho doctrinal inusual: los términos del convenio son fijados por el Señor, no negociables por el hombre.',
              blockId: 'sc-s6c-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Oh Dios, Padre Eterno, en el nombre de Jesucristo, tu Hijo, te pedimos que bendigas y santifiques este pan para las almas de todos los que participen de él, para que lo coman [1] en memoria del cuerpo de tu Hijo, y testifiquen ante ti, oh Dios, Padre Eterno, que están [2] dispuestos a tomar sobre sí el nombre de tu Hijo, y a [3] recordarle siempre, y a [4] guardar sus mandamientos que él les ha dado, para que siempre puedan tener su Espíritu consigo. Amén."',
              reference: 'D&C 20:77 — Oración del Pan · [1–4] los cuatro compromisos',
            },
            {
              type: 'doctrine_box',
              title: 'Los tres convenios + la promesa de Dios',
              body: 'NOSOTROS prometemos tres cosas: (1) tomar el nombre de Cristo — identificarnos con Él en todo momento; (2) recordarle siempre — no solo el domingo, sino en cada decisión; (3) guardar sus mandamientos — compromiso activo, no solo de intención. DIOS promete una sola cosa: que siempre podamos tener Su Espíritu consigo. Es un intercambio eterno.',
            },
            {
              type: 'highlight_verse',
              text: '"Oh Dios, Padre Eterno, en el nombre de Jesucristo, tu Hijo, te pedimos que bendigas y santifiques esta agua para las almas de todos los que la beban, para que la beban en memoria de la sangre de tu Hijo, que por ellos se derramó; para que testifiquen ante ti, oh Dios, Padre Eterno, que siempre se acuerdan de él, para que puedan tener su Espíritu consigo. Amén."',
              reference: 'D&C 20:79 — Oración del Agua · Nota: se dice «esta agua» en lugar de «este vino»',
            },
            {
              type: 'key_points',
              title: 'Protocolo cuando hay un error en la oración',
              points: [
                '✅ Si el bendecidor se corrige a sí mismo → no es necesario repetir la oración.',
                '⚠️ Si no corrige el error → el obispo le pide con amabilidad que repita la oración.',
                '🔇 Con discreción. El obispo se asegura de que al pedir la repetición no avergüenza a nadie ni perturba la ordenanza.',
                '🤝 El otro puede ayudar. La persona en la otra silla de la mesa sacramental puede asistir a recordar las palabras, según sea necesario.',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: '¿Por qué las oraciones deben ser exactas?',
              paragraphs: [
                'Cuando el sacerdote debe repetir la oración por un error, no es un inconveniente — es un recordatorio de que representamos al Señor ante la congregación y que las palabras del convenio importan.',
                'El élder Dallin H. Oaks enseñó que las oraciones de la Santa Cena son "el lenguaje del convenio" — la voz del sacerdocio hablando en nombre de la congregación al Padre Celestial.',
                'Esa responsabilidad exige preparación espiritual previa, no solo memorización de palabras.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'Al escuchar las palabras de la oración del pan este domingo, ¿cuál de los tres compromisos sientes que más necesitas renovar esta semana? ¿Tomar su nombre, recordarle siempre, o guardar sus mandamientos?',
            },
          ],
        },
      ],
    },
    {
      id: 's7',
      title: 'El orden de la distribución',
      intro: {
        romanNumeral: 'VI',
        title: 'El orden de la distribución',
        paragraphs: [
          'La Santa Cena tiene un orden preciso — desde el himno hasta el manto blanco. Cada paso refleja reverencia, autoridad y el significado sagrado de la ordenanza.',
        ],
      },
      topics: [
        {
          id: 'orden-distribucion',
          title: 'Los 11 pasos de la distribución',
          subtitle:
            'Desde que suena el himno sacramental hasta que los repartidores regresan a sus asientos — este es el orden completo.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La distribución de la Santa Cena sigue un orden establecido que refleja autoridad, reverencia y el significado sagrado de cada acto. Conocer este orden ayuda a quienes sirven a hacerlo con mayor confianza y solemnidad.',
              blockId: 'sc-s7-p-0',
            },
            {
              type: 'steps',
              title: 'Fase del Pan',
              steps: [
                'Durante el himno sacramental — Los bendecidores (B1 y B2) se adelantan a la mesa y cortan el pan, colocándolo en las bandejas. Los seis repartidores permanecen sentados en su banca.',
                'Al terminar el himno — Los seis repartidores se levantan y se colocan en fila frente a la mesa sacramental, en el mismo orden en que estaban sentados (D1 al extremo derecho, D6 al extremo izquierdo).',
                'Bendición del pan — B1 se arrodilla detrás de la mesa frente al micrófono y pronuncia la oración de D&C 20:77 con exactitud. Todos inclinan la cabeza.',
                'D1 sube al estrado — B2 pasa la primera bandeja a D1 (extremo derecho). D1 sube y entrega al obispo (o quien presida) primero, luego a los consejeros. Simultáneamente D2–D6 se dirigen a sus filas.',
                'D1 entrega a los músicos — Después del obispado, D1 avanza al área de música (director y pianista) y luego baja por la fila del extremo izquierdo hasta el fondo y el área de overflow.',
                'D2–D6 reparten sus filas — D2 → fila derecha; D3 → centro-derecha; D4 → centro-izquierda; D5 → fila izquierda; D6 → overflow y bancas adicionales. Todo simultáneo, de frente a atrás.',
                'Regreso a la mesa — Los repartidores regresan en fila ordenada, entregan las bandejas. B1 y B2 comen primero (los que bendijeron), luego los repartidores D1–D6 comen del pan.',
              ],
            },
            {
              type: 'steps',
              title: 'Fase del Agua',
              steps: [
                'Bendición del agua — Igual que el pan: D1–D6 están de pie frente a la mesa. B1 (o B2) se arrodilla y pronuncia la oración de D&C 20:79. Se dice «esta agua» en lugar de «este vino».',
                'Distribución del agua — Proceso idéntico al pan: D1 al obispado y músicos, D2–D6 a sus filas correspondientes, todo simultáneo.',
                'Regreso y cierre del pan — Los repartidores regresan en orden. B1 y B2 comen, luego D1–D6. Todo en reverencia.',
              ],
            },
            {
              type: 'steps',
              title: 'Cierre de la ordenanza',
              steps: [
                'El manto blanco — Al terminar la distribución del agua, los bendecidores cubren las bandejas con el manto blanco. Este gesto representa reverencia y el cierre formal de la ordenanza.',
                'Todos regresan a sus asientos — Bendecidores y repartidores regresan ordenadamente a sus respectivos asientos. Un miembro del obispado puede dar un breve agradecimiento y cierra la ordenanza.',
              ],
            },
            {
              type: 'key_points',
              title: 'Pautas del Manual General sobre la administración (§18.9.3–4)',
              points: [
                '🧼 Lavado de manos. «Quienes preparan, bendicen o reparten la Santa Cena deben lavarse las manos primeramente con jabón u otro limpiador.» (§18.9.4, punto 1)',
                '🤍 Manteles blancos. «Los manteles de la Santa Cena deben ser blancos, y estar limpios y planchados.» Simbolizan pureza y el sagrado carácter de la ordenanza.',
                '🔇 Sin música al repartir. «No se debe tocar música mientras se reparte la Santa Cena ni inmediatamente después.» El silencio es parte de la reverencia.',
                '🎵 El himno no puede reemplazarse. «Se parte el pan mientras la congregación canta el himno sacramental. No se puede reemplazar ese himno con solos cantados ni música instrumental.»',
                '🚶 Reparto natural, no rígido. «El reparto debe hacerse de forma natural y no excesivamente formal.» No se requieren posturas específicas al recibirla.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'Esta ordenanza siempre se debe llevar a cabo con reverencia y dignidad. Los presbíteros que ofrecen las oraciones en nombre de la congregación deben pronunciar las palabras lenta y claramente, expresando los términos de los convenios y de las bendiciones prometidas. Éste es un acto sumamente sagrado.',
              name: 'Presidente Dallin H. Oaks · «La reunión sacramental y la Santa Cena» · Conferencia General, octubre 2008',
            },
            {
              type: 'reflection',
              prompt:
                'Como repartidor o bendecidor, ¿qué paso del proceso sientes que puedes hacer con más solemnidad y conciencia? ¿Qué cambiaría si cada movimiento lo hicieras como si el Señor estuviera presente en la reunión?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Las bendiciones de la Santa Cena',
      intro: {
        romanNumeral: 'VII',
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
              type: 'media_slot',
              kind: 'image',
              src: '/images/santa-cena/promesa-espiritu.jpg',
              alt: 'Luz espiritual y paz que representa la promesa del Espíritu Santo',
              caption: '«Si siempre os acordáis de mí, tendréis mi Espíritu con vosotros.» — 3 Nefi 18:7',
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
