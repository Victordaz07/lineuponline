import type { Lesson } from '@/types/doctrine'

export const losConveniosEternos: Lesson = {
  id: 'convenios-eternos',
  moduleId: 'doctrina-avanzada-carne',
  title: 'Los Convenios Eternos',
  subtitle: 'Los lazos que nos atan a Cristo',
  author: 'Fuentes principales: DyC 82, 84, 132; Oseas 2, Jeremías 31',
  description:
    'Los convenios no son contratos religiosos — son lazos de amor entre Dios y Sus hijos. Qué es un convenio, por qué los convenios rotos importan tanto, cómo se renuevan, y por qué los convenios del templo son la forma más alta de unión entre lo humano y lo divino.',
  level: 'AVANZADO',
  icon: '🔗',
  duration: 65,
  order: 6,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'justicia-y-misericordia',
  nextLessonId: null,
  studySections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECCIÓN I: Convenio vs. Contrato
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'Convenio vs. Contrato',
      intro: {
        romanNumeral: 'I',
        title: 'Convenio vs. Contrato — La Naturaleza del Lazo Divino',
        paragraphs: [
          'La palabra "convenio" aparece cientos de veces en las Escrituras, pero rara vez se define con precisión. Muchos santos la usan como sinónimo de "promesa" o "regla." Es mucho más que eso. Un convenio es un lazo sagrado entre Dios y un ser humano — un compromiso bilateral que, cuando ambas partes lo cumplen, produce bendiciones que ningún esfuerzo individual puede obtener.',
          'Para entender verdaderamente lo que hacemos cada vez que participamos de la Santa Cena, cada vez que entramos al templo, cada vez que recibimos una ordenanza — primero hay que entender la diferencia radical entre un convenio divino y cualquier otro tipo de acuerdo humano.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Naturaleza del Convenio Divino',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Estoy obligado cuando vosotros hacéis lo que yo digo; mas cuando no hacéis lo que yo digo, no tenéis ninguna promesa.',
              reference: 'Doctrina y Convenios 82:10',
            },
            {
              type: 'paragraph',
              text: 'Esta declaración del Señor en DyC 82:10 es una de las más audaces de toda la Restauración: Dios se declara a Sí mismo obligado. No condicionalmente, no provisionalmente — obligado. Cuando nosotros cumplimos nuestra parte del convenio, Dios no puede dejar de cumplir la Suya. No porque sea forzado, sino porque Su naturaleza perfecta garantiza que Sus promesas son absolutas. El convenio convierte las promesas de Dios en compromisos ejecutables.',
            },
            {
              type: 'highlight_verse',
              text: 'Y cuando obtenemos cualquier bendición de Dios, es en obediencia a esa ley sobre la cual está basada.',
              reference: 'Doctrina y Convenios 130:20–21',
            },
            {
              type: 'paragraph',
              text: 'DyC 130:20–21 establece el principio universal: las bendiciones no son arbitrarias, son estructurales. Están atadas a leyes, y las leyes se activan a través de los convenios. No es que Dios sea mecánico o burocrático — es que el universo opera bajo leyes eternas que ni siquiera Dios viola. Los convenios son el mecanismo por el cual las leyes celestiales se conectan con la vida mortal. Cuando un mortal guarda un convenio, invoca una ley celestial — y esa ley produce bendiciones que exceden lo que cualquier esfuerzo humano aislado podría obtener.',
            },
            {
              type: 'doctrine_box',
              title: 'Cinco diferencias entre un convenio y un contrato',
              body: '1. PARTES: Un contrato es entre iguales con poder de negociación. Un convenio divino es entre el Creador omnipotente y un mortal dependiente — las partes son radicalmente desiguales.\n\n2. TÉRMINOS: En un contrato, los términos se negocian. En un convenio divino, los términos los establece Dios completamente — Él decide qué requiere y qué promete. Aceptamos Sus condiciones tal como son.\n\n3. BENEFICIOS: En un contrato, cada parte busca su propio beneficio equilibrado. En un convenio, las bendiciones prometidas por Dios exceden infinitamente lo que el mortal podría aportar o merecer por sus propios méritos.\n\n4. CONSECUENCIAS: Un contrato roto produce consecuencias legales entre iguales. Un convenio roto no produce castigo legal de parte de Dios — produce pérdida del acceso a las bendiciones prometidas, que solo se restaura a través del arrepentimiento.\n\n5. RENOVACIÓN: Un contrato roto generalmente termina la relación. Un convenio roto puede renovarse a través del arrepentimiento — Dios siempre está dispuesto a restablecer el lazo.',
            },
            {
              type: 'paragraph',
              text: 'Entonces ¿por qué Dios usa convenios en lugar de simplemente dar bendiciones a todos Sus hijos? La respuesta está en la naturaleza del crecimiento eterno. Dios no quiere hijos dependientes — quiere coherederos. Las bendiciones que da en el contexto de los convenios son exactamente aquellas que requieren que el receptor haya desarrollado la capacidad de recibirlas. Un convenio no es solo el canal para una bendición — es el proceso formativo que nos hace aptos para ella.',
            },
            {
              type: 'leader_quote',
              quote: 'Los convenios que hacemos con Dios no son restricciones de nuestra libertad — son los lazos que nos conectan con el poder de Dios. Cuando una persona entiende que un convenio es una alianza con el ser más poderoso del universo, la perspectiva de la obediencia cambia completamente. No obedecemos por miedo ni por costumbre. Obedecemos porque hemos prometido, y porque sabemos que cada promesa guardada nos convierte en algo más cercano a lo que fuimos destinados a ser.',
              name: 'D. Todd Christofferson',
              role: '"El beneficio del convenio", Conferencia General, octubre 2009 (trad.)',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Contrato humano',
                items: [
                  'Partes iguales con poder de negociación',
                  'Términos mutuamente acordados',
                  'Motivo: beneficio personal equivalente',
                  'Ruptura: consecuencias legales',
                  'Fin del contrato = fin de la relación',
                  'Duración: temporal y circunstancial',
                ],
              },
              right: {
                title: 'Convenio divino',
                items: [
                  'Dios omnipotente y mortal dependiente',
                  'Términos establecidos completamente por Dios',
                  'Motivo: amor de Dios y crecimiento del hijo',
                  'Ruptura: pérdida de acceso a las bendiciones',
                  'Ruptura renovable a través del arrepentimiento',
                  'Duración: eterna cuando sellado por el Espíritu',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿Cuándo fue la última vez que pensaste en la Santa Cena como la renovación de un lazo sagrado con el Creador del universo, en lugar de simplemente como un ritual semanal? ¿Cómo cambiaría tu preparación si recordaras que Dios se declara "obligado" cuando tú cumples tu parte?',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECCIÓN II: Historia Completa de los Convenios
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'Historia de los Convenios',
      intro: {
        romanNumeral: 'II',
        title: 'Historia Completa de los Convenios — Un Solo Hilo a Través de las Dispensaciones',
        paragraphs: [
          'Una de las perspectivas más poderosas sobre las Escrituras es esta: los convenios de Dios no son múltiples y separados. Son un solo convenio eterno, revelado progresivamente a través de las dispensaciones. Cada vez que Dios establece un convenio con un profeta, no reemplaza el anterior — lo amplía, lo enriquece y lo acerca a su forma final.',
          'Comprender esta línea continua transforma la manera en que leemos el Antiguo Testamento, el Libro de Mormón y la Doctrina y Convenios. Todo apunta hacia el mismo destino: la exaltación de los hijos e hijas de Dios.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Hilo del Convenio a Través de la Historia',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'Adán — Ley de Sacrificio',
                  text: 'El primer convenio después de la caída: ofrecer sacrificios como tipo y sombra del sacrificio del Mesías. La obediencia sin entender el porqué es la prueba primaria de la fe.',
                  ref: 'Moisés 5:5-8; DyC 138:38-39',
                  color: 'gold',
                },
                {
                  label: 'Noé — El Arco Iris',
                  text: 'Primer convenio de preservación universal: "Estableceré mi convenio con vosotros... no será más destruida toda carne con aguas de diluvio." La señal visible de una promesa invisible.',
                  ref: 'Génesis 9:11-13',
                  color: 'blue',
                },
                {
                  label: 'Abraham — Descendencia y Tierra',
                  text: 'El convenio más amplio del Antiguo Testamento: descendencia innumerable, tierra prometida, y la promesa de que en Abraham serán benditas todas las naciones. La circuncisión como señal del convenio.',
                  ref: 'Génesis 17:1-8; Abraham 2:9-11',
                  color: 'gold',
                },
                {
                  label: 'Moisés — El Sinaí',
                  text: 'El convenio nacional: "Seréis mi especial tesoro sobre todos los pueblos." La ley de Moisés como tutor preparatorio hacia Cristo. Los Diez Mandamientos como columna del convenio.',
                  ref: 'Éxodo 19:5-6; 20:1-17',
                  color: 'blue',
                },
                {
                  label: 'Jeremías — El Nuevo Convenio Prometido',
                  text: '"He aquí que vienen días... en que haré nuevo convenio... pondré mi ley en su mente, y la escribiré en su corazón." La profecía del convenio interiorizado, cumplida en Cristo.',
                  ref: 'Jeremías 31:31-33',
                  color: 'gold',
                },
                {
                  label: 'Cristo — Cumplimiento y Nuevo Convenio',
                  text: 'La expiación cumple y trasciende todos los convenios anteriores. La Santa Cena establece el "nuevo convenio" sellado con sangre. La ley de Moisés se cumple; el evangelio pleno se restaura.',
                  ref: '3 Nefi 15:4-5; Lucas 22:20',
                  color: 'blue',
                },
                {
                  label: 'Restauración — Los Convenios Completos',
                  text: 'José Smith restaura el poder sellador, los convenios del templo, el convenio del matrimonio eterno. Por primera vez desde los tiempos del Nuevo Testamento, el convenio completo está disponible en la tierra.',
                  ref: 'DyC 132:18-20; DyC 84:33-41',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Panoramic sweep of covenant history: rainbow over mountains (Noah), stars over desert (Abraham), stone tablets glowing (Moses), Christ breaking bread, four scenes unified',
              caption: 'El mismo convenio eterno — renovado en cada dispensación desde Adán hasta la Restauración',
              contextCard: { label: 'Historia de los Convenios' },
            },
            {
              type: 'doctrine_box',
              title: 'Un solo convenio eterno — no muchos convenios separados',
              body: 'El apóstol Pablo llama al plan de Dios "el nuevo y sempiterno convenio" (Hebreos 13:20). Los profetas de la Restauración enseñan que los convenios a través de las dispensaciones no son tratados separados: son el mismo convenio ampliado y aplicado a nuevas circunstancias. Adán ofreció sacrificios mirando hacia Cristo. Abraham recibió la promesa de descendencia que se cumpliría en Cristo. Moisés recibió la ley que preparaba para Cristo. Jeremías profetizó del convenio que Cristo establecería. Todas las líneas convergen en la expiación — y la Restauración las recoge todas en un solo sistema de convenios progresivos que culmina en la exaltación.',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí que vienen días, dice el Señor, en los cuales haré nuevo convenio con la casa de Israel y con la casa de Judá... pondré mi ley en su mente, y la escribiré en su corazón; y yo seré a ellos por Dios, y ellos me serán a mí por pueblo.',
              reference: 'Jeremías 31:31–33',
            },
            {
              type: 'paragraph',
              text: 'La profecía de Jeremías es notable porque anticipa el problema central de los convenios externos: una ley grabada en piedra puede conocerse intelectualmente sin transformar el corazón. El nuevo convenio que Dios promete en Jeremías — y que se cumple primero en Cristo y luego en plenitud en la Restauración — es un convenio que opera desde adentro. La diferencia entre guardar los mandamientos por obligación y guardarlos porque están "escritos en el corazón" es exactamente la diferencia entre religión cultural y discipulado real.',
            },
            {
              type: 'leader_quote',
              quote: 'Somos el pueblo del convenio. Eso no es solo un título honorífico — es una descripción de nuestra relación con el Padre Celestial. Abraham, Isaac y Jacob son nuestros padres del convenio. Sus promesas son nuestras promesas. Su fe es el fundamento sobre el que edificamos. Cuando hacemos convenios en la tierra, nos conectamos con una cadena de fe que se extiende a través de todas las dispensaciones hasta el principio mismo de la historia humana.',
              name: 'Henry B. Eyring',
              role: '"Siempre retened la remisión de vuestros pecados", Conferencia General, octubre 2016 (trad.)',
            },
            {
              type: 'quiz',
              id: 'q-historia-convenios',
              question: {
                kind: 'true_false',
                statement: 'Cada dispensación introduce un convenio completamente nuevo y distinto que reemplaza al anterior.',
                correctAnswer: false,
                explanation: 'Los convenios de Dios a través de las dispensaciones no se reemplazan entre sí. Son el mismo convenio eterno ampliado y aplicado progresivamente — cada uno añade comprensión y ordenanzas hasta el plan completo restaurado por José Smith.',
              },
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECCIÓN III: La Escalera de los Convenios
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'La Escalera de los Convenios',
      intro: {
        romanNumeral: 'III',
        title: 'La Escalera de los Convenios — Progresión Ordenada hacia Dios',
        paragraphs: [
          'El evangelio restaurado no ofrece un solo convenio genérico — ofrece un sistema progresivo de convenios, cada uno construyendo sobre el anterior, cada uno introduciendo nuevas obligaciones y nuevas bendiciones. Elder Bruce R. McConkie llamó a esto "la escalera del convenio eterno."',
          'No se puede saltear peldaños. El bautismo es el portal de entrada — sin él, las ordenanzas posteriores no tienen validez convenantal. La Santa Cena mantiene vivo el bautismo semana tras semana. El sacerdocio abre la puerta al servicio sagrado. La investidura introduce al creyente en las realidades celestiales. El sellamiento une familias para la eternidad. Cada peldaño es necesario; ninguno es suficiente solo.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Los Cinco Peldaños del Convenio',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'Bautismo',
                  text: 'Tomar el nombre de Cristo, guardar Sus mandamientos, llevar cargas de otros, dar testimonio de Dios en todo tiempo y lugar. Entrada al reino de Dios.',
                  ref: 'Mosiah 18:8-10; DyC 20:37',
                  color: 'blue',
                },
                {
                  label: 'Santa Cena',
                  text: 'Renovación semanal del convenio bautismal — recordar el cuerpo y la sangre de Cristo, tomar Su nombre, guardar Sus mandamientos. El acto de convenio más frecuente de un Santo de los Últimos Días.',
                  ref: 'DyC 20:77-79; 3 Nefi 18:7',
                  color: 'gold',
                },
                {
                  label: 'Sacerdocio',
                  text: 'Convenio de actuar fielmente en el nombre de Dios, magnificar el llamamiento, enseñar el evangelio y administrar las ordenanzas salvadoras. Acceso al poder de Dios en la tierra.',
                  ref: 'DyC 84:33-40',
                  color: 'blue',
                },
                {
                  label: 'Investidura (Endowment)',
                  text: 'Convenios de obediencia, castidad, consagración y dedicación al reino de Dios. Dotación de conocimiento y poder espiritual para la vida mortal y la exaltación eterna.',
                  ref: 'DyC 84:19-22; 105:12',
                  color: 'gold',
                },
                {
                  label: 'Sellamiento',
                  text: 'El nuevo y sempiterno convenio del matrimonio — familia unida por tiempo y toda la eternidad. El convenio más alto disponible en la tierra mortal.',
                  ref: 'DyC 132:18-20',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'A luminous ascending staircase with five steps, each glowing with sacred golden light, labels visible on each step, ascending into bright celestial light above',
              caption: 'La escalera de los convenios — cada peldaño abre acceso al siguiente nivel de poder divino',
              contextCard: { label: 'La Escalera de los Convenios' },
            },
            {
              type: 'key_points',
              title: 'Lo que cada convenio añade que el anterior no tenía',
              points: [
                'Bautismo: da acceso a la remisión de pecados y al don del Espíritu Santo. Sin él, ninguna otra ordenanza es válida.',
                'Santa Cena: mantiene el convenio bautismal activo a lo largo de toda la vida mortal. Es la renovación, no el inicio.',
                'Sacerdocio: añade autoridad para actuar en nombre de Dios, no solo para recibir Sus bendiciones. Transforma al receptor en un agente del poder divino.',
                'Investidura: añade conocimiento de las verdades eternas del plan de salvación y promesas específicas de protección espiritual. Abre el camino para regresar a la presencia de Dios.',
                'Sellamiento: añade la dimensión familiar a la exaltación. Un individuo puede ser exaltado solo hasta cierto punto — la plenitud del Padre requiere la unidad matrimonial y familiar (DyC 131:1-4).',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Por lo cual, si guardáis mis mandamientos y permanecéis en mi convenio, iréis adelante eternamente; porque el camino eterno está preparado ante vosotros.',
              reference: 'Moisés 6:59',
            },
            {
              type: 'quiz',
              id: 'q-escalera-convenios',
              question: {
                kind: 'fill_blank',
                prompt: 'La ordenanza que renueva el convenio bautismal cada semana es...',
                options: ['El bautismo', 'La Santa Cena', 'El endowment'],
                correctIndex: 1,
                explanation: 'La Santa Cena es el acto de convenio más frecuente de un Santo de los Últimos Días. No reemplaza el bautismo — lo renueva. Cada domingo es una oportunidad de reafirmar las promesas hechas al ser bautizados.',
              },
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina profunda',
              title: 'El poder del sacerdocio como convenio',
              paragraphs: [
                'DyC 84:33–40 enseña una de las doctrinas más elevadas de la Restauración: quienes obtienen el sacerdocio de Melquisedec y magnifican su llamamiento entran en el "convenio del sacerdocio" — y a través de ese convenio reciben "todo lo que tiene el Padre."',
                'Esto no es retórica. Es una declaración literal sobre la exaltación. El convenio del sacerdocio conecta al portador con "la línea de la autoridad" que regresa a Jesucristo y, a través de Él, al Padre Eterno. Cuando un portador del sacerdocio actúa en esa autoridad con rectitud, no actúa solo — actúa como representante oficial del Dios que creó el universo.',
                'Elder McConkie escribió que el convenio del sacerdocio es el convenio más alto que un hombre puede hacer en la mortalidad fuera del templo — porque incluye la promesa de "toda la luz y conocimiento que el Padre tiene." La clave es "magnificar el llamamiento" — no simplemente poseer el sacerdocio, sino ejercerlo activamente en el servicio y la enseñanza.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Los convenios que hacemos con Dios nos atan a Él con lazos más fuertes que los del matrimonio, más fuertes que los de la sangre, más fuertes que cualquier lealtad humana. Cuando entendemos eso, entendemos por qué romper un convenio es algo tan serio — y por qué renovarlo a través del arrepentimiento es uno de los mayores privilegios de la mortalidad.',
              name: 'David A. Bednar',
              role: '"Exceeding Great and Precious Promises", Conferencia General, octubre 2017 (trad.)',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECCIÓN IV: Oseas — El Convenio Roto y la Santa Cena
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 's4',
      title: 'Oseas y la Santa Cena',
      intro: {
        romanNumeral: 'IV',
        title: 'Oseas — El Convenio Roto y la Santa Cena como Renovación',
        paragraphs: [
          'El libro de Oseas es uno de los textos proféticos más personales y desgarradores de toda la Biblia. En él, un profeta vive en carne propia la tragedia del convenio roto: Dios le ordena casarse con una mujer que lo será infiel, para que el profeta comprenda — desde adentro — lo que Dios siente cuando Israel rompe su convenio.',
          'Pero el libro de Oseas no termina en el abandono. Termina en la restauración. Y esa restauración es exactamente lo que la Santa Cena promete a cada miembro cada domingo.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El Matrimonio de Oseas como Metáfora del Convenio',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Señor ordena a Oseas: "Ve, toma para ti una mujer fornicaria" (Oseas 1:2). Esta es una de las órdenes más extrañas de toda la Escritura. Pero el propósito es pedagógico: Dios quiere que Oseas experimente desde adentro lo que significa amar a alguien que te abandona repetidamente. Gomer, la esposa de Oseas, es infiel. La abandona. Cae en esclavitud. Y aun así, el Señor ordena a Oseas que la recupere: "Ve, ama a una mujer amada de su amigo y adúltera" (Oseas 3:1). Oseas paga el precio de su rescate y la trae de vuelta.',
            },
            {
              type: 'highlight_verse',
              text: 'Y te desposaré conmigo para siempre; te desposaré conmigo en justicia, juicio, benignidad y misericordia. Y te desposaré conmigo en fidelidad, y conocerás al Señor.',
              reference: 'Oseas 2:19–20',
            },
            {
              type: 'paragraph',
              text: 'Estas palabras — "te desposaré conmigo para siempre" — son pronunciadas por Dios a Israel después de que Israel ha roto repetidamente el convenio. No es una promesa de primer matrimonio. Es una promesa de restauración. Dios no dice "te olvidaré" ni "te buscaré un reemplazo." Dice: te vuelvo a desposaré. El convenio roto puede ser restaurado. El amor que lo sostuvo no ha disminuido. Y las condiciones del nuevo desposamiento son aún más ricas: justicia, juicio, benignidad, misericordia, fidelidad.',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, borré como a nube tus rebeliones, y como a niebla tus pecados; vuélvete a mí, porque yo te redimí.',
              reference: 'Isaías 44:22',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Close-up of weathered hands carefully breaking white sacrament bread over a white cloth, soft natural window light, reverent and intimate',
              caption: 'La Santa Cena — el mecanismo semanal de renovación del convenio (DyC 20:77)',
              contextCard: { label: 'La Santa Cena — Renovación del Convenio' },
            },
            {
              type: 'doctrine_box',
              title: 'Por qué la Santa Cena es el acto de convenio más frecuente de un Santo de los Últimos Días',
              body: 'El bautismo ocurre una sola vez. El sacerdocio se confiere una sola vez. La investidura se recibe una sola vez. El sellamiento se realiza una sola vez. Pero la Santa Cena ocurre cada semana — y esa frecuencia no es accidental.\n\nDios sabe que la naturaleza mortal debilita los convenios. Las presiones del mundo, la tentación, el pecado cotidiano van erosionando el lazo que el bautismo estableció. Por eso diseñó un mecanismo de renovación semanal: la Santa Cena.\n\nCada vez que un miembro digno participa de la Santa Cena, renueva explícitamente las promesas del bautismo: tomar el nombre de Cristo, recordarle siempre, guardar Sus mandamientos. Y Dios, fiel a Su parte del convenio, promete: "tendrán siempre Su Espíritu consigo" (DyC 20:77).\n\nEsta es la respuesta de Dios al problema de Oseas: un sistema en el que el convenio roto puede ser renovado cada siete días, sin importar lo que haya sucedido en la semana anterior.',
            },
            {
              type: 'highlight_verse',
              text: 'Y esto haréis en memoria de mí; y he aquí, yo os digo que tan a menudo como hagáis esto, recordaréis mi cuerpo, el cual os he mostrado a vosotros. Y será un testimonio al Padre de que siempre me recordáis.',
              reference: '3 Nefi 18:7',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, el que se ha arrepentido de sus pecados es perdonado, y yo, el Señor, no los recuerdo más.',
              reference: 'Doctrina y Convenios 58:42–43',
            },
            {
              type: 'paragraph',
              text: 'DyC 58:42 es quizás el versículo más importante sobre el arrepentimiento en toda la Restauración. Cuando Dios dice que "no recuerda más" los pecados perdonados, no está describiendo un olvido involuntario. Está describiendo una decisión deliberada de misericordia: una vez que el arrepentimiento es genuino, Dios elige tratar al pecador como si ese pecado nunca hubiera ocurrido. El convenio que el pecado suspendió se reactiva. La relación que el pecado dañó se restaura. Las bendiciones que el convenio prometía se vuelven disponibles de nuevo.',
            },
            {
              type: 'key_points',
              title: 'Cómo se renuevan los convenios rotos',
              points: [
                'El bautismo no se repite — pero el convenio bautismal se renueva cada semana en la Santa Cena (DyC 20:77-79)',
                'El arrepentimiento sincero restaura el acceso a las bendiciones del convenio — el Señor "no recuerda más" el pecado perdonado (DyC 58:42)',
                'Las ordenanzas del templo se pueden restaurar para quienes las perdieron por transgresión grave — a través del proceso de consejo con el obispo y el presidente de estaca',
                'El sellamiento no se pierde automáticamente por pecado — pero sus bendiciones plenas están condicionadas a la fidelidad continuada hasta el final',
                'La Santa Cena como "nuevo convenio" (Lucas 22:20) — cada participación digna es un acto formal de renovación del lazo con Cristo',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Una de las verdades más hermosas del evangelio es esta: los convenios no se pierden por debilidad. Se pueden renovar. El Señor diseñó un sistema en el que la caída no tiene que ser permanente, en el que el regreso siempre es posible, en el que el arrepentimiento activa nuevamente las promesas que el pecado había suspendido. Los convenios de Dios son promesas eternas — y Su paciencia para esperarnos también lo es.',
              name: 'Russell M. Nelson',
              role: '"Welcome Message", Conferencia General, abril 2018 (trad.)',
            },
            {
              type: 'quiz',
              id: 'q-santa-cena-convenio',
              question: {
                kind: 'fill_blank',
                prompt: 'Según DyC 20:77, la promesa específica que Dios hace a quienes participan dignamente de la Santa Cena es que...',
                options: [
                  'Serán perdonados de todos sus pecados cometidos esa semana',
                  'Tendrán siempre Su Espíritu consigo',
                  'Sus convenios del templo permanecerán activos',
                ],
                correctIndex: 1,
                explanation: 'La promesa del convenio de la Santa Cena es específica: "tendrán siempre Su Espíritu consigo." No es una promesa de perdón automático, sino de la presencia constante del Espíritu Santo — el guía, consolador y santificador.',
              },
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECCIÓN V: Identidad como Pueblo del Convenio
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 's5',
      title: 'Pueblo del Convenio',
      intro: {
        romanNumeral: 'V',
        title: 'Identidad como Pueblo del Convenio — Quiénes Somos Porque Prometimos',
        paragraphs: [
          'Los convenios no son solo compromisos que hacemos en momentos especiales — son el fundamento de quiénes somos. Un "pueblo del convenio" no es simplemente gente que va a la iglesia o que sigue una tradición cultural. Es gente cuya identidad más profunda está definida por los lazos que ha establecido con Dios.',
          'Esta distinción tiene implicaciones prácticas en cada área de la vida: en las decisiones de carrera, en el matrimonio, en el uso del tiempo y el dinero, en la manera de tratar a otras personas. Cuando se entiende la identidad convenantal, la vida ordinaria se convierte en una serie continua de oportunidades de fidelidad.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Vivir Como Persona del Convenio',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'A family of four standing at the open entrance of a modern temple, backs to camera, looking toward warm golden light inside, hopeful and peaceful atmosphere',
              caption: 'Pueblo del convenio — identidad más profunda que la membresía (Éxodo 19:6)',
              contextCard: { label: 'Identidad como Pueblo del Convenio' },
            },
            {
              type: 'highlight_verse',
              text: 'Seréis para mí un reino de sacerdotes, y gente santa.',
              reference: 'Éxodo 19:6',
            },
            {
              type: 'paragraph',
              text: 'Esta descripción de Israel en el Sinaí — "reino de sacerdotes, gente santa" — no era solo para el pueblo del Antiguo Testamento. El apóstol Pedro la reutiliza para los santos del Nuevo Testamento (1 Pedro 2:9). Y en la Restauración, la Iglesia está constituida sobre exactamente ese mismo principio: todos los miembros que guardan sus convenios son, en sentido convenantal, un pueblo sacerdotal. No se trata de título eclesiástico — se trata de identidad.',
            },
            {
              type: 'key_points',
              title: 'Cinco dimensiones prácticas de vivir como persona del convenio',
              points: [
                'Decisiones filtradas por el convenio: antes de una decisión mayor, preguntarse "¿esta decisión honra los convenios que hice?" — no como restricción, sino como brújula.',
                'Identidad antes que membresía: la diferencia entre decir "soy miembro de la Iglesia" y "soy persona del convenio" no es semántica. Una es membresía institucional; la otra es relación personal con Dios.',
                'Responsabilidad recíproca: el convenio crea responsabilidad no solo con Dios sino con la comunidad. "Llevar cargas de otros" (Mosiah 18:8) es un compromiso convenantal, no una sugerencia opcional.',
                'Perspectiva temporal expandida: una persona del convenio piensa en términos eternos, no solo inmediatos. Las bendiciones prometidas en los convenios trascienden la mortalidad — lo que cambia cómo se valoran las pérdidas y ganancias terrenales.',
                'Fuente de fortaleza en la adversidad: los convenios son promesas de Dios que permanecen activas incluso en tiempos difíciles. Cuando la vida es dura, el convenio recuerda que Dios está "obligado" (DyC 82:10) — Su compromiso no depende de nuestras circunstancias.',
              ],
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Membresía cultural',
                items: [
                  'Definida por tradición familiar o social',
                  'Activada por nacimiento o costumbre',
                  'Se evalúa por asistencia y actividad visible',
                  'Puede coexistir con falta de compromiso real',
                  'Se pierde por inactividad gradual sin gran crisis',
                  'La fuente de motivación es la pertenencia social',
                ],
              },
              right: {
                title: 'Identidad del convenio',
                items: [
                  'Definida por promesas hechas deliberadamente a Dios',
                  'Activada por elección personal y ordenanzas',
                  'Se evalúa por fidelidad a los compromisos específicos',
                  'Requiere coherencia entre lo prometido y lo vivido',
                  'Se renueva activamente cada semana en la Santa Cena',
                  'La fuente de motivación es el amor a Dios y las promesas',
                ],
              },
            },
            {
              type: 'deep_dive',
              badge: 'Aplicación práctica',
              title: 'Cómo los convenios informan las decisiones mayores de la vida',
              paragraphs: [
                'Carrera y vocación: el convenio de consagración — hacer en la tierra lo que edifica el reino de Dios — no significa que todos debamos trabajar en organizaciones religiosas. Significa que la habilidad profesional de cada persona puede y debe ser ofrecida al Señor. Un médico, un maestro, un ingeniero, un artista que vive su convenio de consagración encuentra oportunidades de servicio en su campo que otro no vería.',
                'Matrimonio: la decisión de con quién casarse es la más directamente convenantal de la vida mortal. No se trata solo de compatibilidad emocional o atractivo — se trata de encontrar a alguien con quien quieras guardar convenios eternamente. Las preguntas relevantes no son solo "¿me hace feliz?" sino "¿nos ayudaremos mutuamente a guardar nuestros convenios? ¿Tiene esta persona el carácter para ser sellada y fiel a esa promesa?"',
                'Finanzas: el diezmo es el convenio financiero más visible — pero la consagración va más lejos. Una persona del convenio pregunta no solo "¿pago mi diezmo?" sino "¿uso mis recursos de maneras que honren lo que prometí a Dios?" Eso puede implicar generosidad con los necesitados, moderación en el lujo, y disposición a redirigir recursos cuando el Señor lo pida.',
                'Tiempo: el día de reposo es el convenio del tiempo. No se guarda porque la ley lo requiera — se guarda porque es la manera convenantal de decir que el tiempo pertenece a Dios antes que a nosotros. Una persona del convenio estructura su semana de manera que el Señor siempre tiene el primer día y, en sentido más amplio, que la oración, el estudio y el servicio tengan espacio garantizado.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Porque yo os digo: el que recibe mis siervos me recibe a mí; y el que me recibe a mí, recibe a mi Padre; y el que recibe a mi Padre, recibe el reino de mi Padre.',
              reference: 'Doctrina y Convenios 84:36–38',
            },
            {
              type: 'paragraph',
              text: 'Esta cadena de recepción en DyC 84:36-38 ilustra algo profundo sobre la identidad del convenio: cuando una persona honra sus convenios, no solo cumple una regla. Se inserta en una red de relaciones divinas que conecta directamente con el Padre Celestial. El convenio no es un contrato administrativo — es el lazo que nos hace parte de la familia de Dios en el sentido más literal y eterno posible.',
            },
            {
              type: 'leader_quote',
              quote: 'Ser una persona del convenio significa que nunca enfrentas la vida solo. Cada desafío, cada tentación, cada momento de debilidad es enfrentado con el poder de un convenio activo — la promesa de que el Espíritu Santo estará contigo, que las bendiciones del sacerdocio están disponibles, que el sellamiento une tu alma a quienes amas. Los convenios no son la carga del evangelio — son la fortaleza del evangelio.',
              name: 'D. Todd Christofferson',
              role: '"El poder de los convenios", Conferencia General, abril 2009 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Qué convenios has hecho con el Señor? ¿Cuáles de ellos estás cumpliendo con fidelidad, y cuáles guardas de manera más superficial? Piensa en una decisión importante que tienes por delante — ¿cómo cambiaría esa decisión si la pasaras primero por el filtro de tus convenios? La Santa Cena de este domingo es una oportunidad de renovación. ¿Qué llevarás a esa mesa, y con qué saldrás de ella?',
            },
            {
              type: 'quiz',
              id: 'q-renovacion-convenios',
              question: {
                kind: 'true_false',
                statement: 'Los convenios que se han roto por transgresión pueden ser renovados a través del arrepentimiento sincero.',
                correctAnswer: true,
                explanation: 'Este es uno de los principios más hermosos del evangelio. El Señor declaró: "el que se ha arrepentido de sus pecados es perdonado, y yo, el Señor, no los recuerdo más" (DyC 58:42). A través del arrepentimiento genuino, el convenio roto puede ser renovado y las bendiciones prometidas se vuelven disponibles nuevamente.',
              },
            },
          ],
        },
      ],
    },
  ],
}
