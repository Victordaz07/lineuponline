import type { Lesson } from '@/types/doctrine'

export const pensarDeManeraCelestial: Lesson = {
  id: 'pensar-de-manera-celestial',
  moduleId: 'discursos-sermones-clasicos',
  title: '¡Piensen de Manera Celestial!',
  subtitle: 'Russell M. Nelson · Conferencia General, octubre 2023',
  description:
    'El profeta en su año 99 de vida resume lo que un siglo de experiencia le ha enseñado: el plan del Padre es fabuloso, la Expiación lo hace posible, y cada decisión de hoy determina dónde y con quién viviremos para siempre. La invitación más urgente del profeta viviente.',
  level: 'BÁSICO',
  icon: '⭐',
  duration: 55,
  order: 6,
  status: 'PUBLISHED',
  author: 'Russell M. Nelson',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 'seccion-1',
      title: 'I. Un profeta en su siglo de vida',
      intro: { romanNumeral: 'I', title: 'Un profeta en su siglo de vida' },
      topics: [
        {
          id: 'contexto-nelson-99',
          title: 'Noventa y nueve años y presente',
          blocks: [
            {
              type: 'paragraph',
              text:
                'En octubre de 2023, Russell M. Nelson había cumplido 99 años y comenzaba su centésimo año de vida. Había sufrido recientemente una lesión de espalda que le causaba dolor intenso. A pesar de ello, estuvo presente en la Conferencia General y pronunció uno de los discursos más doctrinalmente densos de su ministerio. Ese acto mismo — elegir estar presente, elegir hablar, elegir enseñar — fue el primer ejemplo del principio que proclamó: pensar de manera celestial.',
            },
            {
              type: 'paragraph',
              text:
                'Nelson abrió con una pregunta que solo alguien que ha vivido un siglo podría hacer con autoridad genuina: "¿Qué he aprendido en casi un siglo de vida?" No era retórica. Era la distilación de experiencia acumulada durante casi diez décadas de discipulado intenso, servicio como cirujano, apóstol y profeta.',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué importa quién habla',
              body:
                'Las palabras de este discurso tienen un peso especial no por el cargo de Nelson, sino por su experiencia. Ha visto nacer y morir a personas que amaba. Ha experimentado la alegría de los convenios del templo y el dolor de las pérdidas. Ha llevado la Iglesia a través de una pandemia global. Cuando un hombre de 99 años dice "el plan del Padre es fabuloso", lo dice desde un lugar donde esa afirmación ha sido probada contra la realidad más dura.',
            },
          ],
        },
        {
          id: 'el-plan-es-fabuloso',
          title: 'La enseñanza central: el plan es fabuloso',
          blocks: [
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'He aprendido que el plan del Padre Celestial para nosotros es fabuloso. Y la Expiación infinita de Jesucristo hace que ese plan perfecto sea posible.',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'paragraph',
              text:
                '"Fabuloso" no es la palabra que un teólogo académico elegiría. Es la palabra que elige un hombre que ha vivido noventa y nueve años y sabe, desde adentro de su propia experiencia, que el plan funciona. La Expiación no es solo doctrina para Nelson — es la realidad que hizo posible su propio proceso de transformación a lo largo de un siglo.',
            },
            {
              type: 'highlight_verse',
              reference: 'Moisés 1:39',
              text: 'Pues he aquí, esta es mi obra y mi gloria: llevar a cabo la inmortalidad y la vida eterna del hombre.',
            },
            {
              type: 'paragraph',
              text:
                'El propósito de Dios no es administrar una religión exitosa. Es producir seres humanos transformados — inmortales y eternos. Todo lo que el Evangelio propone — los convenios, las ordenanzas, los mandamientos, la Iglesia — son herramientas para ese propósito único. Pensar de manera celestial significa alinear cada decisión con ese propósito.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-2',
      title: 'II. ¿Qué significa pensar de manera celestial?',
      intro: { romanNumeral: 'II', title: '¿Qué significa pensar de manera celestial?' },
      topics: [
        {
          id: 'definicion',
          title: 'Definición desde las Escrituras',
          blocks: [
            {
              type: 'paragraph',
              text:
                'Nelson ancla su invitación en una enseñanza de Jacob en el Libro de Mormón: ser "espiritualmente pensante" lleva a la vida eterna. La vida terrenal, dice Nelson, es una "clase magistral sobre cómo aprender a elegir." Cada elección que hacemos es práctica para el tipo de ser en que nos estamos convirtiendo.',
            },
            {
              type: 'highlight_verse',
              reference: 'Jacob 3:2',
              text: 'Los que son puros de corazón, considerad el glorioso gozo que os espera; sí, incluso el de ver a Dios cara a cara en su poder y gloria. Esto os será dado si tenéis fe y sois espiritualmente pensantes.',
            },
            {
              type: 'paragraph',
              text:
                '"Espiritualmente pensante" no significa pensar mucho en temas religiosos. Significa orientar el aparato mental completo — las decisiones, las prioridades, las reacciones, las ambiciones — desde una perspectiva eterna en lugar de una perspectiva temporal. Es una postura del ser, no solo un tema de meditación.',
            },
            {
              type: 'compare_grid',
              title: 'Dos maneras de pensar',
              left: {
                label: 'Pensamiento telestial',
                points: [
                  '"¿Qué me hace sentir bien ahora?"',
                  '"¿Qué opinan mis amigos?"',
                  '"¿Qué es conveniente hoy?"',
                  '"¿Qué quiero en este momento?"',
                  'Horizonte: días, semanas, años',
                ],
              },
              right: {
                label: 'Pensamiento celestial',
                points: [
                  '"¿En qué tipo de ser me estoy convirtiendo?"',
                  '"¿Qué diría el Espíritu sobre esto?"',
                  '"¿Qué es eterno en esta situación?"',
                  '"¿Qué quiero ser en la eternidad?"',
                  'Horizonte: siglos, eternidades',
                ],
              },
            },
          ],
        },
        {
          id: 'la-costumbre',
          title: 'Una costumbre, no un evento',
          blocks: [
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'Los invito a adoptar la costumbre de pensar de manera celestial.',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'paragraph',
              text:
                'Nelson usa la palabra "costumbre" deliberadamente. No una decisión única. No un nuevo año de resoluciones. Una costumbre — un patrón habitual de pensamiento que se construye día a día hasta que se vuelve la manera predeterminada de procesar la realidad. El cambio que Nelson propone no es instantáneo; es gradual y acumulativo.',
            },
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'A medida que piensen de manera celestial, el corazón les cambiará poco a poco.',
              role: 'Conferencia General, octubre 2023',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-3',
      title: 'III. Las tres consecuencias eternas',
      intro: { romanNumeral: 'III', title: 'Las tres consecuencias eternas' },
      topics: [
        {
          id: 'tres-consecuencias',
          title: 'Lo que determina cada decisión',
          blocks: [
            {
              type: 'paragraph',
              text:
                'La enseñanza más concreta y más urgente del discurso es que cada decisión que tomamos determina tres cosas eternas — no metafóricamente, sino literalmente. Nelson las enumera con precisión:',
            },
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'Lo que ustedes escojan determinará dónde vivirán durante la eternidad, el tipo de cuerpo con el que resucitarán y las personas con quienes vivirán para siempre.',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'key_points',
              title: 'Las tres consecuencias eternas de las decisiones de hoy',
              points: [
                'DÓNDE vivirás eternamente — el tipo de presencia divina que podrás soportar y disfrutar',
                'QUÉ TIPO DE CUERPO recibirás en la resurrección — celestial, terrestre o telestial (D&C 88:28-32)',
                'CON QUIÉN vivirás para siempre — la familia sellada, los lazos eternos, las relaciones que permanecen',
              ],
            },
          ],
        },
        {
          id: 'tipo-cuerpo-resurreccion',
          title: 'La doctrina de los cuerpos resucitados diferenciados',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'D&C 88:28-29',
              text: 'Son cuerpos celestiales los que tienen la gloria del sol, y son cuerpos terrestres los que tienen la gloria de la luna, y son cuerpos telestiales los que tienen la gloria de las estrellas.',
            },
            {
              type: 'paragraph',
              text:
                'Esta doctrina —que el tipo de resurrección que recibirás corresponde al tipo de vida que elegiste— es una de las más poderosas y menos comprendidas del Evangelio restaurado. No todos resucitan igual. La resurrección universal (el don incondicional) da cuerpo inmortal a todos. Pero la naturaleza de ese cuerpo — su gloria, su capacidad, su poder — corresponde a las leyes que elegiste vivir en la mortalidad.',
            },
            {
              type: 'doctrine_box',
              title: 'Leyes telestiales = resurrección telestial',
              body:
                'Nelson lo dice directamente: si elegimos vivir leyes telestiales — si el patrón predominante de nuestras decisiones es telestial (centrado en el yo, en los apetitos físicos, en la conveniencia inmediata, en las prioridades temporales) — recibiremos un cuerpo telestial en la resurrección. No como castigo arbitrario, sino como consecuencia natural de quiénes nos convertimos. El tipo de ser que eres determina el tipo de resurrección que recibes.',
            },
            {
              type: 'reflection',
              prompt: '¿Las decisiones que estás tomando esta semana corresponden a leyes celestiales, terrestres o telestiales? ¿Estás consciente de que estas decisiones están formando el tipo de ser que recibirá la resurrección?',
            },
          ],
        },
        {
          id: 'con-quien-eternidad',
          title: 'Con quién vivirás para siempre',
          blocks: [
            {
              type: 'paragraph',
              text:
                'La tercera consecuencia toca el deseo más profundo de la mayoría de los seres humanos: vivir eternamente con las personas que aman. El Evangelio restaurado hace esa promesa posible — pero con condiciones precisas. No basta con amar a alguien. Se requieren convenios del templo sellados por el Espíritu Santo de la Promesa y mantenidos con fidelidad.',
            },
            {
              type: 'highlight_verse',
              reference: 'D&C 132:19',
              text: 'Y si os casáis por mi ley, y por mi palabra, y por mi ordenanza, y por quien soy enviado para administraros... tendrá vigencia cuando estéis muertos y os seréis asignados tronos, reinos, principados y potestades.',
            },
            {
              type: 'paragraph',
              text:
                'Nelson menciona que solo los hombres y mujeres sellados en el templo y fieles a sus convenios pueden vivir eternamente juntos como familia. Esta no es una exclusión cruel — es la descripción de los requisitos para el tipo de relación que puede soportar la eternidad. Las relaciones que sobrevivirán la eternidad son las que están fundamentadas en los mismos principios que fundamentan la vida eterna.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-4',
      title: 'IV. Cómo pensar celestialmente en situaciones concretas',
      intro: { romanNumeral: 'IV', title: 'Cómo pensar celestialmente en situaciones concretas' },
      topics: [
        {
          id: 'aplicacion-practica',
          title: 'La pregunta práctica',
          blocks: [
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'Cuando afronten un dilema, ¡piensen de manera celestial! Cuando tomen decisiones, los invito a adoptar una perspectiva a largo plazo.',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'paragraph',
              text:
                'Nelson enumera situaciones específicas donde el pensamiento celestial cambia la respuesta: dilemas éticos, tentaciones, momentos de decepción, adversidades, conflictos relacionales. En cada uno, la pregunta celestial cambia el encuadre completo de la situación.',
            },
            {
              type: 'steps',
              title: 'Cómo aplicar el pensamiento celestial',
              steps: [
                {
                  step: '1',
                  title: 'Identifica la decisión',
                  body: 'Antes de actuar, reconoce que estás ante una elección con consecuencias eternas — no solo temporales.',
                },
                {
                  step: '2',
                  title: 'Pregunta desde la eternidad',
                  body: '"¿Dónde quiero vivir eternamente? ¿Con quién? ¿Qué tipo de ser quiero ser en la resurrección?" Usa esas respuestas como filtro.',
                },
                {
                  step: '3',
                  title: 'Consulta al Espíritu',
                  body: 'El Espíritu Santo es el maestro del pensamiento celestial. Una persona que piensa celestialmente desarrolla el hábito de escuchar al Espíritu antes de actuar.',
                },
                {
                  step: '4',
                  title: 'Actúa según la perspectiva larga',
                  body: 'La comodidad de corto plazo rara vez coincide con el bien de largo plazo. Elegir lo eterno sobre lo temporal es la definición práctica del pensamiento celestial.',
                },
              ],
            },
          ],
        },
        {
          id: 'la-oposicion',
          title: 'La oposición que viene cuando piensas celestialmente',
          blocks: [
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'Al centrarse en pensar de manera celestial, cuenten con que afrontarán oposición.',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'paragraph',
              text:
                'Esta advertencia es importante: el pensamiento celestial no elimina la dificultad. La intensifica, porque ahora eliges estándares más altos en un mundo que los rechaza activamente. Nelson referencia la respuesta del Señor a José Smith en la Cárcel de Liberty — no la eliminación del sufrimiento, sino perspectiva eterna sobre él.',
            },
            {
              type: 'highlight_verse',
              reference: 'D&C 121:7-8',
              text: 'Mi hijo, paz sea a tu alma; tu adversidad y tus aflicciones no serán sino por un breve momento; y entonces, si lo soportas bien, Dios te exaltará en las alturas.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-5',
      title: 'V. La ley de castidad y el pensamiento celestial',
      intro: { romanNumeral: 'V', title: 'La ley de castidad y el pensamiento celestial' },
      topics: [
        {
          id: 'castidad-celestial',
          title: 'Por qué la castidad es un asunto de pensamiento eterno',
          blocks: [
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'Pensar de manera celestial también los ayudará a obedecer la ley de castidad. Muchas de las incesantes tentaciones del adversario implican violaciones de esa ley.',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'paragraph',
              text:
                'Nelson conecta la ley de castidad directamente con el pensamiento celestial — no como regla arbitraria sino como consecuencia lógica de la perspectiva eterna. Si sabes que las decisiones de hoy determinan con quién vives en la eternidad, si sabes que el cuerpo que tratas en la mortalidad es el mismo cuerpo que resucitará, la castidad deja de ser una restricción externa y se convierte en una decisión de autorespeto eterno.',
            },
            {
              type: 'paragraph',
              text:
                '"Una gran parte del mundo no cree en esto", dice Nelson. Y tiene razón. El mundo que piensa de manera telestial trata el cuerpo y la sexualidad como fuentes de placer sin consecuencias eternas. El pensamiento celestial ve el cuerpo como sagrado porque resucitará, y la sexualidad como parte de las leyes que determinan el tipo de resurrección que recibirás.',
            },
            {
              type: 'doctrine_box',
              title: 'La ley de castidad desde la perspectiva eterna',
              body:
                'La castidad no es anti-placer. Es pro-eternidad. El poder de crear vida es el mismo poder que opera en la exaltación. Dios confía ese poder a sus hijos bajo las condiciones del matrimonio sellado porque esas condiciones crean el contexto en el que ese poder puede ser manejado de manera celestial. La ley de castidad es el guardián de una realidad sagrada, no la supresión de algo malo.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-6',
      title: 'VI. El diezmo y el templo como construcciones de fe',
      intro: { romanNumeral: 'VI', title: 'El diezmo y el templo como construcciones de fe' },
      topics: [
        {
          id: 'diezmo-fe',
          title: 'El diezmo como acto de pensamiento celestial',
          blocks: [
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'El pago del diezmo requiere fe, y también edifica la fe.',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'paragraph',
              text:
                'Nelson hace una pregunta directa: "¿Cambió la Iglesia en algo porque nosotros pagáramos más diezmo?" La respuesta implícita: no cambia la Iglesia, te cambia a ti. El diezmo no es una transacción financiera — es un acto regular de afirmar que Dios es más confiable que tu cuenta bancaria. Cada pago del diezmo es un acto de pensamiento celestial: pones lo eterno por encima de lo temporal.',
            },
            {
              type: 'highlight_verse',
              reference: 'Malaquías 3:10',
              text: 'Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos y derramaré sobre vosotros bendición hasta que sobreabunde.',
            },
          ],
        },
        {
          id: 'templo-fe',
          title: 'El templo como aula del pensamiento celestial',
          blocks: [
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'Pasar más tiempo en el templo edifica la fe. Las ordenanzas y los convenios del templo tienen una importancia eterna.',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'paragraph',
              text:
                'El templo es el lugar físico donde el pensamiento celestial es enseñado, practicado y sellado. Las ordenanzas del templo no son rituales ceremoniales — son las leyes celestiales administradas a través del sacerdocio, que crean las condiciones para la exaltación. Pasar tiempo en el templo es pasar tiempo siendo formado por los estándares celestiales.',
            },
            {
              type: 'paragraph',
              text:
                'Nelson menciona que el Señor manda edificar templos porque las leyes celestiales administradas en ellos son exactamente lo que los miembros necesitan para desarrollar el tipo de pensamiento celestial que produce el tipo de ser que puede vivir en la presencia de Dios.',
            },
            {
              type: 'reflection',
              prompt: '¿Con qué frecuencia entras al templo? ¿Qué aspectos de las ordenanzas te ayudan a pensar de manera más celestial en tu vida diaria?',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-7',
      title: 'VII. La fe que crece con el pensamiento celestial',
      intro: { romanNumeral: 'VII', title: 'La fe que crece con el pensamiento celestial' },
      topics: [
        {
          id: 'fe-y-engaños',
          title: 'Protección contra los engaños del adversario',
          blocks: [
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'Los engaños del adversario no tienen fin. Pero a medida que piensen de manera celestial, su fe aumentará.',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'paragraph',
              text:
                'Nelson no promete que el pensamiento celestial eliminará las dudas o los desafíos. Promete que aumentará la fe. Hay una diferencia. La fe que crece a través del pensamiento celestial es más robusta que la fe que simplemente evita las preguntas difíciles — porque ha sido formada en el crisol de decidir por lo eterno cuando lo temporal ofrece alternativas más cómodas.',
            },
            {
              type: 'highlight_verse',
              reference: '2 Nefi 2:11',
              text: 'Pues es necesario que haya oposición en todas las cosas. Si no fuera así, la justicia no podría obrar, ni la misericordia tampoco, ni el bien ni el mal.',
            },
          ],
        },
        {
          id: 'virtud-edifica-fe',
          title: 'Vivir con virtud en un mundo que no la valora',
          blocks: [
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'Escoger llevar una vida virtuosa en un mundo sexualizado y politizado edifica la fe.',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'paragraph',
              text:
                'Nelson nombra dos características del mundo actual: está sexualizado (el cuerpo como producto de consumo) y politizado (la verdad como cuestión de poder). En ese contexto, elegir la virtud es un acto de pensamiento celestial que edifica activamente la fe, porque requiere confianza en que las leyes divinas son superiores a las leyes culturales del momento.',
            },
            {
              type: 'doctrine_box',
              title: 'La virtud como inversión espiritual',
              body:
                'Cada acto de virtud — cada vez que eliges lo eterno sobre lo conveniente — es un depósito en la cuenta de fe. Cada acto de pensamiento celestial refuerza la capacidad para el siguiente. La fe no es solo una creencia que tienes o no tienes. Es una capacidad que se desarrolla o se atrofia según las decisiones que tomas.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-8',
      title: 'VIII. La invitación del profeta',
      intro: { romanNumeral: 'VIII', title: 'La invitación del profeta' },
      topics: [
        {
          id: 'la-gran-pregunta',
          title: '¿Cómo, dónde y con quién quieren vivir?',
          blocks: [
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'Por consiguiente, mis queridos hermanos y hermanas, ¿cómo, dónde y con quién quieren vivir para siempre? Sus respuestas a esas preguntas deben guiar todas sus decisiones.',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'paragraph',
              text:
                'Esta es la pregunta con la que Nelson quería que cada oyente se fuera. No es una pregunta teológica abstracta. Es la pregunta más práctica que puede hacer un profeta: ¿ya decidiste lo que quieres eternamente? Y si ya lo decidiste, ¿tus decisiones de hoy están alineadas con esa respuesta?',
            },
            {
              type: 'paragraph',
              text:
                'El discurso completo es la respuesta práctica a esa pregunta. Pensar de manera celestial es el mecanismo para asegurarte de que tus decisiones diarias estén alineadas con tus deseos eternos. Sin ese pensamiento, es posible querer el reino celestial mientras tomas decisiones telestiales — y llegar a la resurrección como la versión del ser que construiste a través de tus decisiones, no la versión que imaginabas.',
            },
          ],
        },
        {
          id: 'llamado-a-accion',
          title: 'Un profeta de 99 años que aún tiene esperanza',
          blocks: [
            {
              type: 'paragraph',
              text:
                'Hay algo poderoso en que este discurso lo dé un hombre de 99 años con una lesión de espalda. Nelson no da este discurso desde la comodidad de la teoría. Lo da desde la frontera de la mortalidad, con un pie casi literalmente en la eternidad que está describiendo. Su urgencia es la urgencia de alguien que puede ver lo que está cerca.',
            },
            {
              type: 'leader_quote',
              name: 'Russell M. Nelson',
              quote: 'Gracias a la Expiación infinita de Jesucristo, ¡el plan de nuestro Padre Celestial es un plan perfecto!',
              role: 'Conferencia General, octubre 2023',
            },
            {
              type: 'paragraph',
              text:
                'La Expiación es la razón por la que el plan funciona aunque nadie lo ha vivido perfectamente. Nelson no invita a la perfección — invita a la costumbre de pensar desde la eternidad. Esa costumbre, practicada imperfectamente pero consistentemente, es suficiente para que el plan produzca en ti el ser que puede vivir con Dios.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'prompt-1', question: '¿Cuál de las tres consecuencias eternas (dónde, qué cuerpo, con quién) es más importante para ti? ¿Cómo afecta eso las decisiones que estás tomando esta semana?' },
                { id: 'prompt-2', question: 'Identifica una decisión recurrente en tu vida donde el pensamiento telestial ha ganado. ¿Cómo se vería esa situación vista desde el pensamiento celestial?' },
                { id: 'prompt-3', question: '¿Qué costumbre específica puedes empezar esta semana para desarrollar el hábito del pensamiento celestial? (Tiempo de escrituras, oración más profunda, reflexión antes de decisiones importantes, etc.)' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
