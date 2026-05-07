import type { Lesson } from '@/types/doctrine'

export const misionYTestimonio: Lesson = {
  id: 'mision-y-testimonio',
  moduleId: 'lideres-misioneros',
  title: 'Misión y Testimonio',
  subtitle: 'Proclamar con claridad y amor',
  author: 'Fuentes principales: DyC 4, 18, 100; Moroni 10:4-5; 2 Nefi 33; Alma 22; 31-34',
  description:
    'El mandamiento de compartir el evangelio no es opcional. DyC 18:15-16 establece el valor de una sola alma. Moroni 10:4-5 da la metodología del testimonio. DyC 100 y 2 Nefi 33 explican el papel del Espíritu en la enseñanza efectiva.',
  level: 'INTERMEDIO',
  icon: '📣',
  duration: 60,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Mandamiento y el Valor de una Alma',
      intro: {
        romanNumeral: 'I',
        title: 'El Mandamiento y el Valor de una Alma',
        paragraphs: [
          'Hay una pregunta que el Señor hace implícitamente en DyC 18: ¿sabes cuánto vale una sola alma? No una congregación. No un número estadístico de conversiones. Una sola alma. La respuesta que da establece el fundamento de toda misión y todo testimonio.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: '¿Cuánto Vale una Sola Alma?',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y si aconteciere que trabajareis todos vuestros días y le trajeres, si no más que una sola alma a mí, ¡cuán grande será vuestro gozo con ella en el reino de mi Padre! Y ahora bien, si vuestro gozo será grande con una sola alma que hayáis traído a mí al reino de mi Padre, ¡cuánto mayor será vuestro gozo si trajeres muchas almas a mí!',
              reference: 'Doctrina y Convenios 18:15–16',
            },
            {
              type: 'paragraph',
              text: 'El Señor compara el valor de una sola alma con el valor de todo el mundo (DyC 18:10). No es hipérbole poética — es doctrina. Cada persona que camina por la calle, que vive en tu edificio, que trabaja en tu oficina, es un ser eterno con un potencial infinito. Compartir el evangelio no es un programa de reclutamiento. Es el acto de decirle a alguien que hay una verdad que podría transformar completamente su eternidad.',
            },
            {
              type: 'highlight_verse',
              text: 'Recuerda el valor de las almas es grande a los ojos de Dios; porque he aquí, el Señor, tu Redentor, sufrió la muerte en la carne; por tanto sufrió el dolor de todos los hombres, para que todos los hombres se arrepintieran y viniesen a él.',
              reference: 'Doctrina y Convenios 18:10–11',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué el evangelio es para compartir',
              body: 'DyC 4:1 dice: "He aquí, se presenta una obra maravillosa e imponente." El evangelio restaurado no fue dado para ser guardado en privado — fue restaurado para llenar la tierra. Cada bautizado lleva una parte de esa responsabilidad. No como obligación ansiosa, sino como oportunidad: si has encontrado algo que transformó tu vida, que dio sentido a tu sufrimiento y esperanza a tu futuro, ¿cómo podrías no compartirlo?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'DyC 4 — El Campo Está Blanco para la Siega',
      intro: {
        romanNumeral: 'II',
        title: 'DyC 4 — El Campo Está Blanco para la Siega',
        paragraphs: [
          'DyC 4 es la revelación más corta del canon — siete versículos — pero es la que más santos memorizan. No es por accidente. Contiene el llamamiento, las condiciones, las virtudes, y el propósito completo del trabajo misionero en menos de 200 palabras.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'DyC 4 — Versículo por Versículo',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Campo de trigo maduro listo para la cosecha al atardecer — metáfora de DyC 4',
              caption: '"He aquí, el campo está blanco, ya listo para la siega" — DyC 4:4',
              contextCard: {
                label: 'mision-campo-blanco-siega',
              },
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, se presenta una obra maravillosa e imponente; por tanto, oh vosotros que os embarcáis en el servicio de Dios, ved que le sirváis con todo vuestro corazón, poder, mente y fuerza, a fin de que estéis al final del día sin culpa ante Dios.',
              reference: 'Doctrina y Convenios 4:1–2',
            },
            {
              type: 'paragraph',
              text: 'Versículos 1-2: El mandato. "Todo vuestro corazón, poder, mente y fuerza" — el mismo lenguaje del primer mandamiento (Marcos 12:30). El servicio misionero no es una actividad más en la vida; es la aplicación del primer mandamiento a la relación con el prójimo. No se puede amar a Dios de todo corazón y luego ser indiferente al destino eterno de sus hijos.',
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, si tenéis el deseo de servir a Dios, sois llamados a la obra; porque he aquí, el campo está blanco, ya listo para la siega; y he aquí, el que hunde su hoz con toda su fuerza, aquél almacena, y no perece, sino que lleva la salvación a su alma.',
              reference: 'Doctrina y Convenios 4:3–4',
            },
            {
              type: 'doctrine_box',
              title: 'La condición de DyC 4:3 — "si tenéis el deseo"',
              body: '"Si tenéis el deseo de servir a Dios, sois llamados." La condición no es tener un talento especial para evangelizar, ni una personalidad extrovertida, ni haber tomado un curso de misión. La condición es el deseo. El llamamiento a compartir el evangelio es universal — está abierto a cualquier bautizado que lo desee. El Señor no pregunta "¿eres bueno en esto?" sino "¿quieres hacerlo?"',
            },
            {
              type: 'highlight_verse',
              text: 'Y la fe, la esperanza, la caridad y el amor, con el ojo puesto en la gloria de Dios, os califican para la obra.',
              reference: 'Doctrina y Convenios 4:5',
            },
            {
              type: 'key_points',
              title: 'Las virtudes de DyC 4:5-6 — el carácter del misionero',
              points: [
                'Fe — confianza en Dios, no en la propia habilidad',
                'Esperanza — certeza del resultado final, aunque los resultados inmediatos sean difíciles',
                'Caridad — amor genuino por la persona, no por el número',
                'Amor — el motor de todo; sin amor, la misión es actuación',
                '"El ojo puesto en la gloria de Dios" — motivación purificada; no para impresionar ni para cumplir una cuota',
                'v.6 añade: virtud, conocimiento, templanza, paciencia, piedad, hermandad fraterna y caridad — el perfil completo del discípulo que puede servir',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Promesa del Testimonio',
      intro: {
        romanNumeral: 'III',
        title: 'La Promesa del Testimonio',
        paragraphs: [
          'El fundamento de toda misión es el testimonio. Pero el testimonio no es una experiencia mística reservada para los espiritualmente avanzados — es una promesa accesible a cualquiera que la busque bajo las condiciones correctas. Moroni lo establece con una claridad que no deja excusas.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La Metodología de Moroni',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y cuando recibiereis estas cosas, os exhorto a que preguntéis a Dios, el Padre Eterno, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con sincero corazón, con intención real, teniendo fe en Cristo, él os manifestará la verdad de ellas por el poder del Espíritu Santo. Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas.',
              reference: 'Moroni 10:4–5',
            },
            {
              type: 'key_points',
              title: 'Las tres condiciones de Moroni 10:4',
              points: [
                'Sincero corazón — genuina apertura a la respuesta, sin haber decidido ya que será no',
                'Intención real — disponibilidad de actuar si la respuesta es afirmativa',
                'Fe en Cristo — la promesa está anclada en Él, no en la capacidad del que pregunta',
              ],
            },
            {
              type: 'paragraph',
              text: 'La promesa de Moroni 10:5 es universal: "por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas." No solo del Libro de Mormón. No solo de la Iglesia. De todas las cosas. El Espíritu Santo es el mecanismo de conocimiento espiritual. El testimonio no es una convicción intelectual — es una manifestación del Espíritu a la mente y el corazón (DyC 8:2).',
            },
            {
              type: 'leader_quote',
              quote: 'Un testimonio no se gana con debate, ni se protege con silencio. Se gana arrodillándose y pidiendo, y se fortalece compartiéndolo. Cada vez que alguien comparte su testimonio — sin importar cuán simple sea — el Espíritu lo confirma de nuevo. El testimonio que nunca se comparte es un testimonio que se marchita.',
              name: 'Jeffrey R. Holland',
              role: '"Missionary Work and the Atonement", Ensign, marzo 2001 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Miedo y la Promesa — DyC 100',
      intro: {
        romanNumeral: 'IV',
        title: 'El Miedo y la Promesa — DyC 100',
        paragraphs: [
          'El obstáculo más común para compartir el evangelio no es la falta de conocimiento — es el miedo. Miedo al rechazo, miedo a decir algo incorrecto, miedo a que la relación cambie. DyC 100 fue dado precisamente a dos siervos que enfrentaban exactamente ese miedo.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'DyC 100 — La Promesa a los que Abren la Boca',
          blocks: [
            {
              type: 'paragraph',
              text: 'En octubre de 1833, Joseph Smith y Sidney Rigdon estaban de misión en el norte del estado de Nueva York, lejos de sus familias durante semanas. Ambos se preocupaban por sus hogares. El Señor les dio DyC 100 con una promesa doble: sus familias estaban bien, y ellos serían capacitados para hablar.',
            },
            {
              type: 'highlight_verse',
              text: 'Y yo, el Señor, os doy esta promesa, que si no os presentáis ante los hombres en mi nombre, por virtud del poder de mi Espíritu, en testigo de mi nombre y doctrina; vuestras bocas serán abiertas y las cadenas del infierno no prevalecerán sobre vosotros.',
              reference: 'Doctrina y Convenios 100:5–6',
            },
            {
              type: 'doctrine_box',
              title: '"Se os dará en el mismo momento lo que diréis"',
              body: 'DyC 100:6 promete: "se os dará en el mismo momento lo que diréis." Esta no es una excusa para no prepararse — es una promesa para cuando la preparación acaba y comienza la conversación real. El misionero prepara, estudia, ora. Pero cuando está frente a otra persona y no sabe qué decir, la promesa entra en juego: el Espíritu llenará el hueco. Esta promesa también aparece en Lucas 12:11-12: "no os preocupéis por cómo o qué hablaréis; porque el Espíritu Santo os enseñará en la misma hora lo que debéis decir."',
            },
            {
              type: 'deep_dive',
              badge: 'Caso Bíblico',
              title: 'Alma y la misión a los Zoramitas — el fracaso transformado',
              paragraphs: [
                'En Alma 31, Alma y un grupo de misioneros van a los Zoramitas — una sociedad profundamente corrupta que había pervertido el evangelio en orgullo institucional. La misión es difícil desde el inicio. Los zoramitas tienen un sistema religioso elaborado que los excluye del cambio.',
                'Alma 31:14-16 describe la devastación que sintió Alma al ver la apostasía de su pueblo. No fue una reacción neutral — "el corazón de Alma se apesadumbró." Este es el punto de partida: el dolor genuino ante el estado espiritual de otro es la raíz del deseo de testificar.',
                'La respuesta de Alma no fue rendirse ni atacar. Fue orar (Alma 31:31-35) y predicar a los pobres que habían sido expulsados de las sinagogas de los ricos (Alma 32:1-3). La misión "fracasó" entre los ricos y "tuvo éxito" entre los pobres — exactamente donde menos se esperaba.',
                'La lección: el misionero no controla los resultados. Controla la preparación, la fe, y la fidelidad al llamamiento. Los resultados quedan en manos de Dios. El miedo al rechazo es, en parte, el miedo a perder control — y la misión nos enseña que nunca tuvimos ese control.',
              ],
            },
            {
              type: 'key_points',
              title: 'Cinco ayudas prácticas contra el miedo a compartir',
              points: [
                'Cambiar el objetivo: no convertir sino sembrar — quitar la presión del resultado',
                'Recordar DyC 100:6: "se os dará en el mismo momento lo que diréis"',
                'Comenzar con preguntas, no con declaraciones — "¿Qué crees sobre...?" abre; predicar cierra',
                'Compartir algo personal: nadie puede debatir tu experiencia',
                'Aceptar que el rechazo no es personal — quien rechaza el evangelio rechaza a Cristo, no a ti (DyC 84:36)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Cómo Enseñar con el Espíritu',
      intro: {
        romanNumeral: 'V',
        title: 'Cómo Enseñar con el Espíritu',
        paragraphs: [
          'El evangelio se enseña de dos maneras: con el Espíritu, y sin él. La diferencia no está en cuánto sabe el maestro ni en cuán elocuente es — está en si el corazón del maestro está sintonizado con el Espíritu y si el mensaje llega al corazón del oyente.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El Espíritu como Maestro Real',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y el Espíritu se os dará mediante la oración de la fe; y si no recibís el Espíritu, no enseñaréis.',
              reference: 'Doctrina y Convenios 42:14',
            },
            {
              type: 'highlight_verse',
              text: 'Y yo, Nefi, no pude escribir todas las cosas que enseñé entre mi pueblo; ni soy poderoso en la escritura como en el hablar; porque cuando un hombre habla por el poder del Espíritu Santo, el poder del Espíritu Santo lleva las palabras de Cristo al corazón de los hijos de los hombres.',
              reference: '2 Nefi 33:1',
            },
            {
              type: 'paragraph',
              text: 'La distinción de Nefi es crucial: las palabras no van solo a los oídos — el Espíritu las lleva al corazón. Ningún maestro puede hacer eso por sí solo. El papel del misionero, del maestro de Evangelio, del padre que enseña a sus hijos, es prepararse y vivir de manera que el Espíritu pueda usar sus palabras como canal. La habilidad retórica puede impresionar; solo el Espíritu puede convertir.',
            },
            {
              type: 'key_points',
              title: 'Cinco prácticas para enseñar con más poder espiritual',
              points: [
                'Orar específicamente antes de cada oportunidad de enseñar — pedir el Espíritu para ti y para quien escucha',
                'Estudiar las Escrituras personalmente, no solo para la lección — el conocimiento vivo irradia diferente que el conocimiento académico',
                'Compartir experiencias personales, no solo doctrina abstracta — el testimonio personal toca diferente que la información',
                'Hacer preguntas en lugar de solo declamar — el Espíritu trabaja mientras la persona reflexiona, no solo mientras escucha',
                'Terminar con una invitación específica — enseñar sin invitar a actuar es incompleto',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Hay una diferencia entre enseñar sobre Cristo y testificar de Cristo. Puedes enseñar sobre alguien que no conoces. Solo puedes testificar de alguien que has encontrado personalmente. El poder del testimonio no viene del volumen de las palabras sino de la realidad de la experiencia. Cuando un misionero habla de Cristo como si lo conociera — porque lo conoce — eso es lo que toca el corazón del investigador.',
              name: 'Elder David A. Bednar',
              role: '"Becoming a Missionary", Conferencia General, octubre 2005 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'El Proceso de Conversión — Después del Testimonio',
      intro: {
        romanNumeral: 'VI',
        title: 'El Proceso de Conversión — Después del Testimonio',
        paragraphs: [
          'Compartir el testimonio es el inicio, no el final. La conversión es un proceso — un movimiento del corazón que no ocurre en un instante sino en una trayectoria. Alma 22 contiene uno de los ejemplos más poderosos del Libro de Mormón sobre cómo acompañar a alguien en ese proceso.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Alma 22 — El Patrón de la Conversión',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Dos personas en conversación sincera sobre el evangelio — misionero y persona investigadora',
              caption: 'La conversión ocurre en conversación — no en conferencia unilateral',
              contextCard: {
                label: 'mision-conversion-conversacion',
              },
            },
            {
              type: 'paragraph',
              text: 'En Alma 22, Aarón enseña al padre del rey Lamoni — el rey de todos los lamanitas. Es una de las enseñanzas misionales más completas del Libro de Mormón. El rey ya había tenido una experiencia espiritual indirecta (vio lo que le ocurrió a su hijo Lamoni). Aarón no empieza desde cero — empieza donde está el oyente.',
            },
            {
              type: 'highlight_verse',
              text: 'Y aconteció que cuando Aarón había expuesto estas cosas a él, el rey dijo: ¿Qué haré para tener esta vida eterna de que has hablado? Sí, ¿qué haré para nacer de Dios, tener este pícaro espíritu desarraigado de mi pecho, y recibir su Espíritu, para que me regocije en él como Lamoni mi hermano?',
              reference: 'Alma 22:15',
            },
            {
              type: 'paragraph',
              text: 'La pregunta del rey es la pregunta de todo convertido genuino: "¿qué debo hacer?" Ya no es curiosidad intelectual — es hambre espiritual. Aarón responde con una condición directa: "Si te arrepientes de todos tus pecados... y el Señor te perdonará." El rey no escapa — hace algo extraordinario:',
            },
            {
              type: 'highlight_verse',
              text: 'Y aconteció que cuando Aarón le hubo dicho estas palabras, el rey se postró en tierra y clamó: Oh Dios, veo que eres un espíritu puro, y que eres el gran ser; que has criado a todos los hombres; y que me has dado oportunidad que te conozco. Oh Dios, si tú eres Dios, acepta a este pueblo tu en fe. Estoy dispuesto a renunciar a todo lo que poseo, sí, renunciaré a mi reino, si es necesario, para recibir esta gran alegría.',
              reference: 'Alma 22:17–18',
            },
            {
              type: 'doctrine_box',
              title: 'La oración más honesta del Libro de Mormón',
              body: 'El rey no sabe si Dios existe — dice "si tú eres Dios." Esa honestidad es el modelo de la fe inicial. No se requiere certeza para comenzar la oración — se requiere disposición. Y la disposición del rey es total: "renunciaré a todo lo que poseo, incluso mi reino, si es necesario." Esta es la condición de la conversión: no perfección, sino disponibilidad total. Es exactamente lo que Moroni 10:4 llama "intención real." El rey la tenía.',
            },
            {
              type: 'compare_grid',
              title: 'Curiosidad espiritual vs. conversión genuina',
              left: {
                label: 'Curiosidad espiritual',
                points: [
                  'Quiere saber sobre el evangelio',
                  'Las preguntas son intelectuales',
                  'No está listo para cambiar aún',
                  'El evangelio es interesante',
                  'Puede durar años sin cambio',
                ],
              },
              right: {
                label: 'Conversión genuina',
                points: [
                  '"¿Qué debo hacer?" — pregunta activa',
                  'Las preguntas son existenciales',
                  'Disposición de cambiar incluso lo que cuesta más',
                  'El evangelio es urgente',
                  'Puede ocurrir en una sola conversación (Alma 22)',
                ],
              },
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Según DyC 4:3, solo los que tienen talento natural para enseñar o personalidad extrovertida son "llamados a la obra."',
              answer: false,
              explanation: 'Incorrecto. DyC 4:3 dice: "si tenéis el deseo de servir a Dios, sois llamados a la obra." La condición es el deseo, no el talento. El Señor promete en DyC 100:5-6 que a quienes abran la boca se les dará lo que decir — el Espíritu suple lo que la personalidad no tiene.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'En Alma 22:17, el rey dijo que estaba dispuesto a renunciar incluso a su _____ si era necesario para recibir el evangelio.',
              answer: 'reino',
              explanation: '"Estoy dispuesto a renunciar a todo lo que poseo, sí, renunciaré a mi reino, si es necesario, para recibir esta gran alegría." (Alma 22:18). Esta es la expresión más clara del Libro de Mormón de lo que Moroni 10:4 llama "intención real" — disponibilidad de actuar sobre la respuesta antes de recibirla.',
            },
            {
              type: 'reflection',
              prompt: '¿Hay alguien en tu vida ahora mismo que podría estar en el nivel del "rey" — con hambre espiritual pero sin dirección? ¿Cuándo fue la última vez que compartiste algo genuinamente personal de tu fe con alguien fuera de la Iglesia? Y la pregunta más difícil: ¿estás tú mismo en el nivel del rey — dispuesto a renunciar a lo que sea necesario para crecer — o en el nivel de la curiosidad espiritual, sabiendo pero no cambiando?',
            },
          ],
        },
      ],
    },
  ],
}
