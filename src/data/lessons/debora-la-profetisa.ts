import type { Lesson } from '@/types/doctrine'

export const deboraLaProfetisa: Lesson = {
  id: 'debora-la-profetisa',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'debora',
  title: 'La Profetisa',
  subtitle: 'La voz de Dios en el Israel de los Jueces',
  author: 'Fuentes: Jueces 4–5; Éxodo 15:20; 2 Reyes 22; Lucas 2:36; historia del profetismo en Israel',
  description: 'Débora es llamada "profetisa" en Jueces 4:4 — el mismo título que Miriam, Hulda y Ana. Convoca a Barac, entrega el mensaje de Dios, profetiza el resultado de la batalla y ve su profecía cumplirse. Toda la historia de la liberación de Israel pasa por la boca de una mujer que habla en nombre de Dios.',
  level: 'INTERMEDIO',
  icon: '🔥',
  duration: 30,
  order: 6311,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'debora-la-jueza',
  nextLessonId: 'debora-la-guerrera',
  studySections: [
    {
      id: 's1',
      title: 'El título — n\'biah',
      intro: {
        romanNumeral: 'I',
        title: 'Jueces 4:4 — "Y Débora, una Mujer Profetisa"',
        paragraphs: [
          'La primera descripción de Débora en el texto hebreo no es "jueza" sino "profetisa". El orden importa: su identidad espiritual precede a su función política. Y el título que recibe — n\'biah — la coloca en la misma categoría que los grandes portavoces de Dios en la Biblia.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'N\'biah — el título de las profetisas de Israel',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 4:4',
              text: 'Y Débora, una mujer profetisa, mujer de Lapidot, juzgaba a Israel en aquel tiempo.',
            },
            {
              type: 'paragraph',
              text: 'La palabra hebrea n\'biah es el femenino de nabi (profeta). Es la misma raíz que se usa para Moisés, Elías, Isaías, Jeremías. El uso del femenino no designa una categoría inferior o diferente — es simplemente el género gramatical aplicado a una mujer que ejerce el mismo don y la misma función. El texto de Jueces 4 usa el término sin calificativo adicional: Débora es profetisa, del mismo modo en que Samuel es profeta.',
            },
            {
              type: 'key_points',
              title: 'Las cinco profetisas nombradas en el Antiguo Testamento',
              points: [
                'Miriam — hermana de Moisés, líder del cántico del Éxodo (Éxodo 15:20)',
                'Débora — jueza y profetisa de Israel, convocó al ejército en nombre de Dios (Jueces 4:4)',
                'Hulda — profetisa consultada por el rey Josías sobre el libro encontrado en el templo (2 Reyes 22:14)',
                'Noadía — profetisa contemporánea de Nehemías, aunque de papel adversarial (Nehemías 6:14)',
                'La esposa de Isaías — llamada "la profetisa" en Isaías 8:3',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'COMPARACIÓN BÍBLICA',
              title: 'Hulda — la profetisa que autenticó la Escritura',
              paragraphs: [
                'La historia de Hulda (2 Reyes 22) es paralela a la de Débora en autoridad pero diferente en contexto. Cuando el sumo sacerdote Hilcías encontró el Libro de la Ley en el Templo durante el reinado de Josías, el rey no envió a ninguno de los profetas masculinos disponibles — entre ellos el joven Jeremías — para consultar sobre el libro. Envió a Hulda.',
                'La respuesta de Hulda fue una profecía doble: juicio sobre Israel por sus pecados, y misericordia para el rey Josías porque su corazón era tierno. Esta profecía fue la base de la reforma religiosa más significativa de la historia del reino de Judá. El texto sagrado que conocemos como el Deuteronomio fue autenticado por una profetisa.',
                'Lo que Hulda y Débora comparten es que ambas ejercieron autoridad profética en momentos de crisis nacional — y el liderazgo de Israel las buscó activamente. No hay en el texto ningún indicio de que esta búsqueda fuera considerada inusual o secundaria. Era simplemente la fuente correcta para consultar en ese momento.',
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Qué hacía una profetisa en Israel',
          blocks: [
            {
              type: 'paragraph',
              text: 'La función del profeta en Israel era ser portavoz de Dios — recibir el mensaje divino y transmitirlo con autoridad. El profeta no inventaba el mensaje; lo recibía y lo declaraba en nombre de quien lo enviaba. La fórmula "así dice Jehová" (koh amar Adonai) era la firma del oráculo profético — la afirmación de que lo que seguía no era opinión del profeta sino palabra del Señor.',
            },
            {
              type: 'paragraph',
              text: 'En el caso de Débora, la función profética se manifestó de varias formas: convocó a Barac y le transmitió la orden de Dios de convocar al ejército (Jueces 4:6-7), profetizó el resultado de la batalla antes de que comenzara (Jueces 4:9), emitió la orden de ataque en el momento preciso que Dios le indicó (Jueces 4:14), y compuso el cántico de celebración de la victoria (Jueces 5). Cada una de estas funciones es clásicamente profética.',
            },
            {
              type: 'doctrine_box',
              title: 'El profetismo en Israel y en la Restauración',
              body: 'La Restauración enseña que el don de profecía está disponible para todos los miembros de la Iglesia — hombres y mujeres — como manifestación del Espíritu Santo (Joel 2:28; 1 Corintios 14:1). Lo que Débora ejercía era exactamente esta forma de profecía: recepción y transmisión de mensajes divinos, predicción de eventos futuros como señal de origen divino, y dirección en momentos de crisis. Su historia no es un caso especial — es un precedente bíblico para la forma en que el don profético opera sin fronteras de género.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La convocatoria de Barac',
      intro: {
        romanNumeral: 'II',
        title: 'Jueces 4:6-7 — El Mensaje de Dios a Través de Débora',
        paragraphs: [
          'El primer acto profético que el texto registra de Débora en la narrativa de la liberación es la convocatoria de Barac. El mensaje que entrega no es propio — lo atribuye explícitamente a Jehová.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La orden divina — texto completo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 4:6-7',
              text: 'Ella envió a llamar a Barac hijo de Abinoam, de Cedes de Neftalí, y le dijo: ¿No te ha mandado Jehová Dios de Israel, diciendo: Ve, junta a tu gente en el monte Tabor, y toma contigo diez mil hombres de la tribu de Neftalí y de la tribu de Zabulón; y yo atraeré hacia ti al río Quisón a Sísara, capitán del ejército de Jabín, con sus carros y su ejército, y lo entregaré en tus manos?',
            },
            {
              type: 'paragraph',
              text: 'La estructura del mensaje de Débora a Barac es clásicamente profética. Comienza con una pregunta retórica — "¿no te ha mandado Jehová?" — que presupone que Barac ya conoce la orden divina o debería haberla recibido. Luego articula el plan militar con precisión: el punto de concentración (Monte Tabor), los números (diez mil), las tribus específicas (Neftalí y Zabulón), el escenario de la batalla (río Quisón), y la promesa del resultado (Sísara entregado en tus manos).',
            },
            {
              type: 'paragraph',
              text: 'Lo que Débora entrega a Barac no es un consejo estratégico — es una orden divina con detalles operativos precisos. La especificidad es parte de la autenticación: los verdaderos oráculos divinos en la tradición bíblica no son vagos. Contienen detalles verificables que, si se cumplen, confirman su origen.',
            },
            {
              type: 'dialogue',
              title: 'El intercambio entre Débora y Barac — Jueces 4:6-9',
              lines: [
                { speaker: 'Débora (transmitiendo la orden de Dios)', side: 'left', text: '¿No te ha mandado Jehová Dios de Israel, diciendo: Ve, junta a tu gente en el monte Tabor, y toma contigo diez mil hombres de la tribu de Neftalí y de la tribu de Zabulón; y yo atraeré hacia ti al río Quisón a Sísara, con sus carros y su ejército, y lo entregaré en tus manos? (Jueces 4:6-7)' },
                { speaker: 'Barac', side: 'right', text: 'Si tú fueres conmigo, yo iré; pero si no fueres conmigo, no iré. (Jueces 4:8)' },
                { speaker: 'Débora', side: 'left', text: 'Iré contigo; mas no será tuya la gloria de la jornada que emprendes, porque en mano de mujer venderá Jehová a Sísara. Y levantándose Débora, fue con Barac a Cedes. (Jueces 4:9)' },
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Barac — ¿fe o falta de fe?',
          blocks: [
            {
              type: 'paragraph',
              text: 'La respuesta de Barac — "si tú fueres conmigo, yo iré; pero si no fueres conmigo, no iré" — ha generado interpretaciones encontradas durante siglos. Algunos comentaristas lo ven como muestra de debilidad o falta de confianza en Dios: si la orden venía de Jehová, ¿por qué necesitaba la presencia de Débora para obedecerla? Otros lo interpretan como una expresión sabia de dependencia del profeta: Barac reconocía que la fuente del poder no era él sino el Señor que hablaba a través de Débora.',
            },
            {
              type: 'compare_grid',
              title: 'Las dos lecturas de la condición de Barac',
              left: {
                label: 'Lectura crítica — falta de fe',
                points: [
                  'Dios ya le había dado la orden con suficiente claridad',
                  'Poner condiciones a una orden divina muestra inseguridad',
                  'La consecuencia — la gloria va a una mujer — puede leerse como corrección',
                  'Un líder de fe debe obedecer sin depender de apoyo humano',
                ],
              },
              right: {
                label: 'Lectura favorable — dependencia del profeta',
                points: [
                  'Hebreos 11:32 incluye a Barac en el salón de la fe sin calificativo negativo',
                  'Reconocía que el poder de la victoria era de Dios, manifestado a través de Débora',
                  'La petición refleja humildad, no cobardía',
                  'La presencia del profeta era garantía de la dirección divina continua',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'La consecuencia que Débora anuncia — que la gloria de la victoria irá a manos de una mujer — no parece pronunciada en tono de castigo sino de declaración profética. No dice "por tu falta de fe, esto ocurrirá." Dice simplemente que el resultado del combate confirmará la dirección del Señor de una manera que nadie puede disputar: Sísara caerá, y no será Barac quien lo mate. La profecía se cumplirá en la historia de Jael.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              prompt: 'Débora profetizó que la gloria de la victoria sobre Sísara iría a manos de ___.',
              options: ['Barac', 'una mujer', 'el ángel del Señor', 'Mardoqueo'],
              correctIndex: 1,
              explanation: 'Débora profetizó que "en mano de mujer venderá Jehová a Sísara" (Jueces 4:9). Esta profecía se cumplió con Jael, quien mató a Sísara después de la batalla.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La orden de ataque — "este es el día"',
      intro: {
        romanNumeral: 'III',
        title: 'Jueces 4:14 — El Momento del Profeta',
        paragraphs: [
          'La función profética de Débora no terminó con la convocatoria de Barac. En el campo de batalla, en el momento decisivo, fue ella quien recibió la señal divina y emitió la orden de ataque.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: '"Levántate — este es el día"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 4:14',
              text: 'Y Débora dijo a Barac: Levántate, porque este es el día en que Jehová ha entregado a Sísara en tus manos. ¿No ha salido Jehová delante de ti? Y Barac descendió del monte Tabor, y diez mil hombres en pos de él.',
            },
            {
              type: 'paragraph',
              text: 'La orden "levántate" en hebreo bíblico es un imperativo de acción que aparece en contextos de llamamiento divino: Jehová a Moisés ante la zarza ardiente, a Elías bajo el enebro, a Jonás con su misión. La orden que Débora da a Barac usa el mismo imperativo — y lo que la respalda no es su autoridad como jueza sino su percepción del momento divino: "este es el día en que Jehová ha entregado a Sísara."',
            },
            {
              type: 'paragraph',
              text: 'El profeta hebreo tenía una función específica en la guerra santa: discernir el momento en que el Señor actuaba, y comunicarlo al comandante para que las fuerzas humanas actuaran en sincronía con la acción divina. Débora cumplía exactamente esta función. No era una comandante militar que diseñaba estrategias — era la portavoz del Señor que identificaba el momento en que debía actuarse.',
            },
            {
              type: 'central_quote',
              text: 'Levántate, porque este es el día en que Jehová ha entregado a Sísara en tus manos.',
              attribution: 'Débora a Barac — Jueces 4:14',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'La profecía cumplida en el campo de batalla',
          blocks: [
            {
              type: 'paragraph',
              text: 'El texto señala que cuando Barac descendió del Monte Tabor con sus diez mil hombres, "Jehová quebrantó a Sísara, y a todos sus carros, y a todo su ejército, a filo de espada delante de Barac" (Jueces 4:15). La mención explícita de que fue Jehová quien quebrantó al ejército es el cumplimiento de la profecía de Débora: ella había prometido que Jehová entregaría a Sísara, y el texto confirma que así ocurrió.',
            },
            {
              type: 'paragraph',
              text: 'El cumplimiento de la profecía era teológicamente esencial. En el Deuteronomio, la prueba del profeta verdadero era precisamente esta: que lo que anunciara se cumpliera (Deuteronomio 18:21-22). El cumplimiento de la profecía de Débora sobre la batalla del Quisón era la confirmación pública de que ella hablaba genuinamente en nombre de Dios. Israel tenía una profetisa legítima, no una visionaria local.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué diferencia hay entre el don de profecía tal como lo ejercía Débora y la revelación personal que cada miembro puede recibir? ¿Qué comparten?' },
                { id: 'p2', question: 'Débora identificó "este es el día" — el momento exacto de actuar. ¿Cómo aprendes a discernir en tu propia vida el momento en que Dios llama a actuar versus el momento de esperar?' },
                { id: 'p3', question: 'La presencia de Débora en el campo de batalla era tanto profética como personal. ¿Qué dice eso sobre la naturaleza del liderazgo espiritual — que el profeta acompaña, no solo declara?' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Cántico de Débora — la profetisa como poetisa',
      intro: {
        romanNumeral: 'IV',
        title: 'Jueces 5 — Uno de los Textos más Antiguos de la Biblia',
        paragraphs: [
          'El cántico de Jueces 5 fue compuesto por Débora y Barac. Los eruditos lo consideran posiblemente el texto más antiguo del Antiguo Testamento que ha sobrevivido en su forma poética original.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El cántico — historia y teología en poesía',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 5:1-3',
              text: 'Aquel día cantó Débora con Barac hijo de Abinoam, diciendo: Por haberse puesto al frente los caudillos en Israel, por haberse ofrecido voluntariamente el pueblo, Load a Jehová. Oíd, reyes; escuchad, oh príncipes; yo cantaré a Jehová, cantaré salmos a Jehová el Dios de Israel.',
            },
            {
              type: 'paragraph',
              text: 'El cántico de Jueces 5 es considerado por los lingüistas como uno de los textos hebreos más arcaicos de la Biblia, posiblemente compuesto cerca del tiempo de los eventos que narra (siglo XII a.C.). Contiene formas gramaticales y vocabulario que son anteriores al hebreo clásico de los períodos posteriores. Que haya sobrevivido en esta forma es notable — y que lleve el nombre de Débora como autora principal también lo es.',
            },
            {
              type: 'deep_dive',
              badge: 'LITERATURA BÍBLICA',
              title: 'El paralelo con el Cántico de Miriam',
              paragraphs: [
                'El cántico de Débora tiene un precedente directo en el cántico de Miriam después del cruce del Mar Rojo (Éxodo 15:1-21). En ambos casos, una profetisa lidera una celebración poética de la victoria de Dios sobre el enemigo de Israel. En ambos casos, el cántico sigue inmediatamente a un evento de liberación milagrosa. En ambos casos, la voz femenina es la voz profética.',
                'Algunos eruditos señalan que el cántico de Miriam en Éxodo 15:21 es posiblemente el texto más antiguo de la Biblia: "Cantad a Jehová, porque en extremo se ha engrandecido; ha echado al mar al caballo y al jinete." El de Débora en Jueces 5 es su equivalente generacional. Dos profetisas, dos victorias, dos canciones. La tradición del profetismo femenino en Israel tiene profundas raíces poéticas.',
                'El cántico de Débora es también documentación histórica. Menciona a las tribus que participaron en la batalla — y a las que no. Celebra a Jael con imágenes que son casi violentamente físicas. Y termina con una imagen perturbadora: la madre de Sísara esperando a su hijo en casa, imaginando que tarda porque está distribuyendo el botín. El lector sabe que Sísara no volverá.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿En qué formas expresas tu fe — a través de la música, la escritura, la poesía, el servicio, la conversación? Débora usó la poesía como acto profético. ¿Cuál es tu lenguaje natural para expresar lo que Dios ha hecho en tu vida?',
            },
          ],
        },
      ],
    },
  ],
}
