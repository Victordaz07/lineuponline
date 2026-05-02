import type { Lesson } from '@/types/doctrine'

export const elBautismo: Lesson = {
  id: 'bautismo',
  moduleId: 'doctrina-fundamental',
  title: 'El Bautismo',
  subtitle: 'Nacimiento de nuevo por agua y por el Espíritu',
  author: 'Iglesia de Jesucristo de los Santos de los Últimos Días',
  description:
    'La primera ordenanza del evangelio: la puerta al camino estrecho, el convenio en las aguas, y el nacimiento espiritual que transforma al hombre viejo en hombre nuevo.',
  level: 'BÁSICO',
  icon: '💧',
  duration: 50,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'santa-cena',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'La puerta del camino estrecho',
      intro: {
        romanNumeral: 'I',
        title: 'La puerta del camino estrecho',
        paragraphs: [
          'El bautismo no es un rito cultural ni un trámite de membresía — es la puerta de entrada al camino que lleva de regreso a la presencia de Dios.',
        ],
      },
      topics: [
        {
          id: 'la-puerta-del-camino-estrecho',
          title: 'La primera ordenanza del evangelio',
          subtitle:
            'El profeta Nefi lo vio con claridad: sin la puerta del bautismo, no hay camino. Y Jesucristo mismo fue bautizado para mostrarnos cómo entrar.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El bautismo es la primera ordenanza del evangelio de Jesucristo. No es una formalidad ni un ritual cultural — es el acto por el cual una persona entra oficialmente al reino de Dios, hace sus primeros convenios con Él, y comienza el camino hacia la exaltación. Sin bautismo, no hay acceso a las bendiciones del Espíritu, ni a las ordenanzas superiores del templo.',
              blockId: 'baut-s1-p-0',
            },
            {
              type: 'paragraph',
              text: 'Nefi, en su visión del plan de salvación, usa una imagen arquitectónica precisa: el bautismo es una puerta. No una recomendación, no una opción avanzada — es la entrada al camino.',
              blockId: 'baut-s1-p-1',
            },
            {
              type: 'highlight_verse',
              text: '"Y yo también oí una voz del Padre, que decía: Sí, las palabras de mi Hijo muy Amado son verdad y fieles. El que aguante hasta el fin, este será salvo. Y ahora, mis amados hermanos, sé por esto que a menos que un hombre aguante hasta el fin, siguiendo el ejemplo del Hijo del Dios viviente, no puede ser salvo. Por tanto, debéis avanzar con firmeza en Cristo, con regocijo perfecto, y con un propósito firme de corazón, aferraos al Hijo del Dios viviente."',
              reference: '2 Nefi 31:15–16 · Libro de Mormón · El Profeta Nefi',
            },
            {
              type: 'highlight_verse',
              text: '"Y ahora yo, Nefi, os digo que este es el camino; y no hay otro camino ni nombre dado bajo el cielo por el que el hombre sea salvo en el reino de Dios. Y ahora he aquí, esta es la doctrina de Cristo, y el único y verdadero camino y puerta por donde puede entrar al reino de Dios."',
              reference: '2 Nefi 31:21 · Libro de Mormón',
            },
            {
              type: 'paragraph',
              text: 'Pero la mayor enseñanza sobre el bautismo no vino de palabras — vino de un acto. Jesucristo, el único ser sin pecado en la historia del mundo, fue bautizado. No porque lo necesitara para ser limpiado, sino para "cumplir toda justicia" y darnos el ejemplo perfecto que debíamos seguir:',
              blockId: 'baut-s1-p-2',
            },
            {
              type: 'highlight_verse',
              text: '"Entonces Jesús vino de Galilea al Jordán, a Juan, para ser bautizado por él. Mas Juan se lo impedía, diciendo: Yo necesito ser bautizado por ti, ¿y tú vienes a mí? Pero Jesús le respondió: Deja ahora, porque así conviene que cumplamos toda justicia."',
              reference: 'Mateo 3:13–15 · Biblia (RVR) · Bautismo de Jesucristo',
            },
            {
              type: 'highlight_verse',
              text: '"De cierto, de cierto te digo, que el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios."',
              reference: 'Juan 3:5 · Biblia (RVR) · El Salvador a Nicodemo',
            },
            {
              type: 'doctrine_box',
              title: 'Los tres elementos que hacen válido un bautismo',
              body: 'Autoridad correcta — debe ser realizado por alguien que posea el Sacerdocio Aarónico con la autorización de quien preside. Forma correcta — la persona debe ser sumergida completamente bajo el agua. Palabras exactas — la oración bautismal debe pronunciarse tal como fue revelada (D&C 20:73).',
            },
            {
              type: 'leader_quote',
              quote:
                'El bautismo es el primer paso en el camino que lleva de regreso a la presencia del Padre. No es el final del viaje — es la puerta que da acceso al camino. Y como toda puerta, solo funciona si uno la traspasa con intención, comprensión y un corazón genuinamente arrepentido.',
              name: 'Presidente Russell M. Nelson · "El sabor de la justicia" · Conferencia General, octubre 2019',
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: '¿Por qué se bautizó Jesús si no tenía pecado?',
              paragraphs: [
                'El Padre Lehi y el Profeta Nefi responden esto directamente: Cristo fue bautizado para "cumplir toda justicia" (2 Nefi 31:5-7). Al hacerlo, cumplió la ley, honró la ordenanza que Él mismo había instituido, y estableció el patrón que todos sus discípulos deben seguir.',
                'También fue bautizado para ser testigo ante el Padre de que obedecía sus mandamientos — exactamente como nosotros lo somos al recibir la ordenanza. Si el único ser sin pecado de la historia se humilló ante la puerta, ¿qué nos dice eso sobre la importancia de la ordenanza?',
                'Nefi concluye: "Sabéis que la puerta por donde debéis entrar es el arrepentimiento y el bautismo en agua; y después viene la remisión de vuestros pecados por fuego y por el Espíritu Santo. Y entonces sois en el sendero estrecho y angosto que conduce a la vida eterna." (2 Nefi 31:17–18)',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Recuerdas el día de tu bautismo? ¿Qué significó para ti en ese momento? ¿Qué significa ahora, años después, cuando entiendes más sobre los convenios que hiciste ese día?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El convenio en las aguas de Mormón',
      intro: {
        romanNumeral: 'II',
        title: 'El convenio en las aguas de Mormón',
        paragraphs: [
          'Mosiah 18 contiene la descripción más completa y poderosa del convenio bautismal en todas las escrituras. Alma lo preguntó directamente: "¿Qué deseáis de mí?"',
        ],
      },
      topics: [
        {
          id: 'el-convenio-bautismal',
          title: 'Lo que prometemos y lo que Dios promete',
          subtitle:
            'El bautismo no es solo un acto de limpieza — es un convenio bilateral. Nosotros prometemos tres cosas. Dios promete dos. Y las condiciones fueron establecidas en las orillas de un estanque escondido en el desierto.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando Alma predicó el evangelio al pueblo de Noseah en el Bosque de Mormón, no los invitó a un ritual — los invitó a un convenio. Las palabras que usó contienen la descripción más rica y completa del bautismo en toda la escritura restaurada. Son palabras que todo miembro de la Iglesia debería conocer de memoria:',
              blockId: 'baut-s2-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"¿No deseáis venir al redil de Dios, y ser llamados su pueblo, y estar dispuestos a llevaros las cargas los unos a los otros para que sean ligeras; sí, y estar dispuestos a llorar con los que lloran; sí, y a consolar a los que necesitan consolación; y a ser testigos de Dios en todo tiempo, y en todas las cosas, y en todo lugar en que estéis, aun hasta la muerte, para que podáis ser redimidos de Dios...? Ahora os digo, si esto es el deseo de vuestro corazón, ¿qué impedimento hay para que seáis bautizados en el nombre del Señor?"',
              reference: 'Mosiah 18:8–10 · Libro de Mormón · Alma en las Aguas de Mormón',
            },
            {
              type: 'doctrine_box',
              title: 'Los compromisos del convenio bautismal — Mosiah 18',
              body: 'Nosotros prometemos: (1) Llevar las cargas los unos de los otros — el servicio no es opcional. (2) Llorar con los que lloran y consolar — la empatía es parte del convenio. (3) Ser testigos de Dios en TODO tiempo, lugar y circunstancia — sin excepciones. Dios promete: (1) Redimirnos — la remisión de pecados. (2) Derramar su Espíritu más abundantemente sobre nosotros — el don del Espíritu Santo.',
            },
            {
              type: 'highlight_verse',
              text: '"Y se llamarán: los que desean tomar sobre sí el nombre de Cristo, con determinación de servirle hasta el fin."',
              reference: 'Moroni 6:3 · Libro de Mormón',
            },
            {
              type: 'highlight_verse',
              text: '"Y todos los que humildemente se arrepientan, vendrán al Señor mi Dios; y yo los bautizaré con fuego y con el Espíritu Santo."',
              reference: 'D&C 20:37 · Revelación dada al Profeta José Smith',
            },
            {
              type: 'key_points',
              points: [
                '💛 Lo que prometemos al bautizarnos: Tomar el nombre de Cristo, recordarle siempre, guardar sus mandamientos, servir a los demás, ser sus testigos en todo lugar.',
                '✦ Lo que Dios nos promete: Remisión de pecados, el don del Espíritu Santo, ser contados como su pueblo, y la vida eterna si aguantamos hasta el fin.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'El convenio del bautismo no es un compromiso de perfección inmediata — es un compromiso de dirección. Al bautizarnos, tomamos el nombre de Cristo y declaramos al Padre que hemos elegido alinear nuestra voluntad con la suya. Cada vez que guardamos ese convenio, la promesa del Espíritu se hace más real en nuestra vida. Cada vez que lo rompemos y nos arrepentimos, la misericordia de Cristo lo restaura. Ese es el poder del convenio.',
              name: 'Élder David A. Bednar · "Nacidos de nuevo" · Conferencia General, abril 2007',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: '"Testigos de Dios en todo tiempo" — lo que Alma realmente pidió',
              paragraphs: [
                'La frase de Alma 18:9 es una de las más demandantes de toda la escritura: "ser testigos de Dios en todo tiempo, y en todas las cosas, y en todo lugar en que estéis, aun hasta la muerte." No dice en el domingo. No dice en los momentos cómodos. Dice: TODO tiempo, TODAS las cosas, TODO lugar, HASTA la muerte.',
                'Esto significa que el convenio bautismal no es solo sobre lo que hacemos en la Iglesia — es sobre cómo hablamos en el trabajo, cómo tratamos a la familia, cómo reaccionamos cuando nadie nos ve. El bautismo convierte cada momento de la vida en un acto de testimonio.',
                'Elder Neal A. Maxwell llamó a esto el "testimonio de vida" — la evidencia no de lo que decimos que creemos, sino de cómo vivimos. Cuando aceptamos el convenio de Mosiah 18, aceptamos que nuestra vida entera es el documento que firmamos.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '"Testigos de Dios en todo tiempo, en todas las cosas, en todo lugar." ¿Hay algún área de tu vida donde ese testimonio de vida es difícil de mantener? ¿Qué ayuda te da el convenio para esa área específica?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La ordenanza exacta',
      intro: {
        romanNumeral: 'III',
        title: 'La ordenanza exacta',
        paragraphs: [
          'El Señor restauró las palabras exactas del bautismo y la razón de la inmersión — no porque Dios sea formalista, sino porque la forma lleva el mensaje doctrinal.',
        ],
      },
      topics: [
        {
          id: 'la-ordenanza-exacta',
          title: 'Por inmersión, por autoridad, con las palabras exactas',
          subtitle:
            'Pablo vio el bautismo por inmersión como un símbolo poderoso: sepultados con Cristo en su muerte, resucitados con Él en su vida. La forma no es arbitraria — es el mensaje.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El bautismo en la Iglesia de Jesucristo se realiza por inmersión total bajo el agua. Esta no es una preferencia cultural ni una tradición heredada — es la forma que el Salvador instituyó, que los apóstoles practicaron, y que el Señor restauró por revelación directa. La razón es profunda:',
              blockId: 'baut-s3-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"¿O no sabéis que todos los que hemos sido bautizados en Cristo Jesús, hemos sido bautizados en su muerte? Porque somos sepultados juntamente con él para muerte por el bautismo, a fin de que como Cristo resucitó de los muertos por la gloria del Padre, así también nosotros andemos en vida nueva. Porque si fuimos plantados juntamente en la semejanza de su muerte, así también lo seremos en la de su resurrección."',
              reference: 'Romanos 6:3–5 · Biblia (RVR) · El Apóstol Pablo',
            },
            {
              type: 'paragraph',
              text: 'Cuando el Salvador visitó a los nefitas después de su resurrección, no solo enseñó la doctrina del bautismo — reveló las palabras exactas de la ordenanza, palabra por palabra:',
              blockId: 'baut-s3-p-1',
            },
            {
              type: 'highlight_verse',
              text: '"De cierto os digo que quien arrepentido sea bautizado en mi nombre, bautizándolo así: He aquí, he tomado sobre mí el nombre de Jesucristo, a quien adoro, y prometo obedecer sus mandamientos tanto como seré fiel hasta el fin, amén — habiendo sido bautizado en el nombre de Jesucristo, el que el Padre, el Hijo y el Espíritu Santo son testigos de que es bautizado en el nombre de mi Padre, del Hijo y del Espíritu Santo."',
              reference: '3 Nefi 11:23–26 · Libro de Mormón · Las palabras del Salvador',
            },
            {
              type: 'highlight_verse',
              text: '"La persona que sea bautizada, que haya sido designada para ello, será sumergida en el agua, y saldrá de ella de nuevo; y de acuerdo con el poder del Espíritu Santo que mora en mí, yo te bautizo en el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén."',
              reference: 'D&C 20:73–74 · La oración bautismal revelada al Profeta José Smith',
            },
            {
              type: 'steps',
              steps: [
                'Autoridad del sacerdocio: El que bautiza debe poseer el Sacerdocio Aarónico y tener la autorización del que preside. Sin la autoridad correcta, la ordenanza no es válida ante Dios.',
                'Las palabras exactas: La oración bautismal debe pronunciarse tal como fue revelada en D&C 20:73. Un error en las palabras esenciales requiere que la ordenanza se repita.',
                'Inmersión total: La persona debe ser sumergida completamente bajo el agua — simbolizando la muerte al hombre viejo y el nacimiento al hombre nuevo.',
                'Un testigo: Dos testigos deben confirmar que la ordenanza fue realizada correctamente. Si alguno tiene duda, la ordenanza se repite.',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Simbolismo',
              title: 'Por qué la inmersión — y no el aspersión — lleva el mensaje completo',
              paragraphs: [
                'Pablo lo articula perfectamente en Romanos 6: el bautismo es una sepultura y una resurrección. Cuando alguien es sumergido bajo el agua, el hombre viejo — con sus pecados, su pasado, su naturaleza caída — muere simbólicamente. Cuando emerge del agua, nace el hombre nuevo.',
                'La aspersión (gotear agua sobre la cabeza) no lleva ese mensaje. Solo la inmersión total captura la imagen del entierro y la resurrección. Esta no es una distinción menor — es el corazón doctrinal del simbolismo bautismal.',
                'Por eso el Señor, al restaurar la Iglesia, no dejó la forma al criterio humano. Reveló que la inmersión es el método correcto — y al hacerlo, preservó la enseñanza visual más poderosa sobre la Expiación: que somos literalmente sepultados en Cristo y resucitados con Él.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'Pablo dice que fuimos "sepultados con Cristo" en el bautismo. ¿Qué aspectos del "hombre viejo" dejaste atrás en tu bautismo? ¿Hay algo del hombre viejo que todavía luchas por dejar enterrado?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Nacidos de nuevo — el cambio poderoso',
      intro: {
        romanNumeral: 'IV',
        title: 'Nacidos de nuevo — el cambio poderoso',
        paragraphs: [
          'Alma el Joven lo preguntó directamente a su pueblo: "¿Habéis experimentado este gran cambio en vuestros corazones?" El bautismo es el inicio de esa transformación.',
        ],
      },
      topics: [
        {
          id: 'nacidos-de-nuevo',
          title: 'El cambio poderoso de corazón',
          subtitle:
            'El bautismo no produce automáticamente el hombre nuevo — inicia el proceso. Alma 5 y Mosiah 5 describen qué se siente cuando la transformación es real.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Salvador le dijo a Nicodemo que debía nacer de nuevo — "de agua y del Espíritu." Pero este nacimiento no es solo un evento; es un proceso que comienza en el bautismo y continúa por toda la vida. Alma el Joven, que conocía el contraste entre vida sin Dios y vida con Él, lo describió con la mayor claridad:',
              blockId: 'baut-s4-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"¿Habéis experimentado este gran cambio en vuestros corazones? ¿Podéis sentir así ahora? ¿Habéis nacido espiritualmente de Dios? ¿Habéis recibido su imagen en vuestros semblantes? ¿Habéis experimentado esta gran transformación en vuestros corazones?"',
              reference: 'Alma 5:14 · Libro de Mormón · Alma el Joven predicando en Zarahemla',
            },
            {
              type: 'highlight_verse',
              text: '"Y sucedió que después que el rey Benjamín hubo terminado de hablar, volvió sus ojos sobre la multitud, y he aquí, habían caído al suelo, porque el temor del Señor había llegado a ellos... Y todos clamaron a una voz, diciendo: ¡Oh, ten misericordia y aplica la sangre expiatoria de Cristo para que recibamos el perdón de nuestros pecados, y nuestros corazones sean purificados! ...Y ahora, debido al convenio que habéis hecho, seréis llamados los hijos de Cristo, sus hijos e hijas; porque he aquí que hoy os ha engendrado espiritualmente; pues decís que vuestros corazones han cambiado mediante la fe en su nombre; por tanto, habéis nacido de él y os habéis vuelto sus hijos e hijas."',
              reference: 'Mosiah 5:2–7 · Libro de Mormón · El Rey Benjamín',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'El Hombre Viejo — antes del convenio',
                items: [
                  'Sujeto a la naturaleza caída — inclinación al mal',
                  'Separado de Dios por el pecado y la distancia espiritual',
                  'Sin acceso al don constante del Espíritu Santo',
                  'Identidad centrada en el mundo y sus afectos',
                  'Sin nombre nuevo — sin pertenencia al reino de Dios',
                ],
              },
              right: {
                title: 'El Hombre Nuevo — nacido por agua y Espíritu',
                items: [
                  'Nueva disposición — "no más deseo de hacer el mal" (Mosiah 5:2)',
                  'Hijo o hija de Cristo — adoptado al linaje del convenio',
                  'Acceso al don del Espíritu Santo como compañero constante',
                  'Identidad centrada en Cristo y en sus mandamientos',
                  'Llamado por su nombre — marcado como suyo (Mosiah 5:9)',
                ],
              },
            },
            {
              type: 'leader_quote',
              quote:
                'Nacer de nuevo no significa que instantáneamente dejamos de tener tentaciones, debilidades o errores. Significa que hemos cambiado de dirección — que el deseo fundamental de nuestra vida ha sido reorientado hacia Dios. El bautismo inicia ese proceso; el Espíritu Santo lo sostiene; y la fidelidad a los convenios lo completa. No es un evento de un día — es la obra de toda una vida.',
              name: 'Élder David A. Bednar · "Nacidos de nuevo" · Conferencia General, abril 2007',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Arrepentimiento previo',
                  text: 'Fe en Cristo, dolor por el pecado, propósito firme de cambiar. Sin esto, el bautismo es solo mojarse.',
                  color: 'gold',
                },
                {
                  label: 'El bautismo de agua',
                  text: 'La muerte del hombre viejo y el nacimiento del hombre nuevo. El convenio se hace oficial ante Dios.',
                  color: 'blue',
                },
                {
                  label: 'La confirmación',
                  text: 'El don del Espíritu Santo. La ordenanza es completa solo cuando ambas — agua y fuego — han sido recibidas.',
                  color: 'red',
                },
                {
                  label: 'La fidelidad continua',
                  text: 'El nacimiento espiritual no termina en la pila bautismal — se vive y se profundiza semana a semana, convenio a convenio.',
                  color: 'green',
                },
              ],
            },
            {
              type: 'reflection',
              prompt:
                'Alma pregunta: "¿Habéis experimentado este gran cambio en vuestros corazones?" No pregunta si fueron bautizados — pregunta si el cambio fue real. ¿Cómo describirías el cambio que el evangelio ha producido en ti? ¿En qué área de tu vida sientes que el proceso todavía está en curso?',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El don del Espíritu Santo',
      intro: {
        romanNumeral: 'V',
        title: 'El don del Espíritu Santo',
        paragraphs: [
          'Pedro lo dijo en el día de Pentecostés: arrepentíos, sed bautizados, y recibiréis el don del Espíritu Santo. El bautismo de agua no está completo sin el bautismo de fuego.',
        ],
      },
      topics: [
        {
          id: 'el-don-del-espiritu-santo',
          title: 'El bautismo de fuego que completa la ordenanza',
          subtitle:
            'El don del Espíritu Santo es diferente a su influencia general. Es el derecho a la compañía constante del tercer miembro de la Divinidad — la mayor bendición disponible en este mundo.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando Pedro predicó en el día de Pentecostés y miles preguntaron "¿Qué haremos?", su respuesta fue precisa: arrepentíos, bautizaos, y recibiréis el don del Espíritu Santo. El bautismo de agua y el bautismo de fuego no son ordenanzas separadas — son dos mitades de una misma puerta.',
              blockId: 'baut-s5-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Al oír esto, se compungieron de corazón, y dijeron a Pedro y a los otros apóstoles: Varones hermanos, ¿qué haremos? Pedro les dijo: Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo."',
              reference: 'Hechos 2:37–38 · Biblia (RVR) · Pedro en Pentecostés',
            },
            {
              type: 'highlight_verse',
              text: '"Y ahora bien, no os he dicho que así sea con todos; pues no sé cuanto tiempo ha de pasar antes que el Señor lleve a efecto estas cosas que yo os he declarado; porque proceden de vuestro Padre que está en los cielos; mas he aquí que él os enviará el Consolador, que es el Espíritu Santo."',
              reference: '2 Nefi 31:12–13 · Libro de Mormón · El Profeta Nefi',
            },
            {
              type: 'doctrine_box',
              title: 'La diferencia entre la INFLUENCIA y el DON del Espíritu Santo',
              body: 'La INFLUENCIA del Espíritu Santo está disponible para todas las personas en la tierra — es lo que permite que cualquier persona sienta el testimonio de la verdad, sienta remordimiento por el pecado, o sea movida por la bondad. El DON del Espíritu Santo — recibido por confirmación con autoridad del sacerdocio — es diferente: es el derecho y el privilegio de tener la compañía constante del Espíritu, disponible a toda hora si vivimos dignamente. Este es uno de los dones más grandes que Dios da a sus hijos en mortalidad.',
            },
            {
              type: 'highlight_verse',
              text: '"Y ninguno fue recibido en el bautismo si no tomaba sobre sí el nombre de Cristo, con plena resolución de aguantar hasta el fin. Y después de haber sido recibidos en el bautismo, y de haber sido obrados por el Espíritu Santo, y limpiados por sangre, esto es, la sangre de Cristo, se les numeró entre el pueblo de la iglesia de Cristo."',
              reference: 'Moroni 6:3–4 · Libro de Mormón · Moroni sobre los requisitos del bautismo',
            },
            {
              type: 'highlight_verse',
              text: '"Porque el Espíritu Santo da autoridad para hablar con el poder de Dios."',
              reference: '1 Nefi 10:22 · Libro de Mormón',
            },
            {
              type: 'key_points',
              points: [
                '🔥 El bautismo de fuego: La confirmación por manos del sacerdocio imparte el don del Espíritu Santo — la guía constante del tercer miembro de la Divinidad.',
                '✦ No es automático: El don del Espíritu Santo es un derecho, no una garantía continua. Se activa y se mantiene por fidelidad a los convenios, oración, y vida recta.',
                '💧 Agua + Fuego = Una sola puerta: Nefi y el Salvador enseñaron que ambas ordenanzas juntas constituyen "la doctrina de Cristo" — la entrada completa al camino de la exaltación.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'El don del Espíritu Santo es la mayor dádiva que Dios puede dar a un ser mortal. Por mediación de él, la persona puede conocer la verdad de todas las cosas, ser santificada, recibir todas las otras dádivas del Espíritu, y finalmente ser preparada para entrar en la presencia de Dios. Comprendemos la magnitud de lo que se nos ofrece cuando recibimos la confirmación — no un acto rutinario, sino el acceso constante a la mente de Dios.',
              name: 'Élder Bruce R. McConkie · "El don del Espíritu Santo" · Doctrinal New Testament Commentary, vol. 2',
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: 'La restauración del sacerdocio y la autoridad para bautizar',
              paragraphs: [
                'En mayo de 1829, José Smith y Oliver Cowdery oraban acerca del bautismo. En respuesta, un ángel — Juan el Bautista — apareció, puso sus manos sobre ellos, y dijo: "A vosotros, mis consiervos, en el nombre de Mesías, os confiero el Sacerdocio de Aarón, el cual tiene las llaves del ministerio de los ángeles, y del evangelio del arrepentimiento, y del bautismo por inmersión para la remisión de los pecados." (D&C 13:1)',
                'Esta restauración es esencial para entender por qué la Iglesia afirma que los bautismos realizados por otras iglesias no son válidos ante Dios — no porque las personas sean malas o la intención incorrecta, sino porque la autoridad del sacerdocio fue perdida en la apostasía y solo fue restaurada por revelación al profeta José Smith.',
                'Cada bautismo realizado hoy en la Iglesia de Jesucristo de los Santos de los Últimos Días es realizado con la misma autoridad que Juan el Bautista entregó en 1829 — una cadena ininterrumpida de autoridad que se remonta al Salvador mismo.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'Has recibido el don del Espíritu Santo. ¿Cómo lo describes cuando opera en tu vida? ¿Cuándo lo sientes más presente? ¿Hay algo que haces que lo invite — o algo que lo ahuyenta? ¿Qué cambiarías?',
            },
          ],
        },
      ],
    },
  ],
}
