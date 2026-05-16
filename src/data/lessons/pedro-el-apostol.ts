import type { Lesson } from '@/types/doctrine'

export const pedroElApostol: Lesson = {
  id: 'pedro-el-apostol',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'pedro',
  title: 'El Presidente del Quórum',
  subtitle: 'De Pentecostés a la apertura a los gentiles',
  description:
    'Después de la resurrección de Cristo, el mismo Pedro que había negado tres veces a su Señor se convirtió en el presidente de la Iglesia primitiva. Presidió el primer concilio, predicó el primer sermón misionero, abrió el evangelio a los gentiles y murió crucificado de cabeza.',
  level: 'AVANZADO',
  icon: '🌍',
  duration: 35,
  order: 5013,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Pentecostés — El Primer Sermón Misionero',
      intro: {
        romanNumeral: 'I',
        title: 'Hechos 2 — Tres Mil Bautizados en un Solo Día',
        paragraphs: [
          'El mismo hombre que negó a Cristo ante una sirvienta se puso de pie ante miles en Jerusalén cincuenta días después de la resurrección. La transformación de Pedro en Pentecostés es uno de los cambios más dramáticos del Nuevo Testamento.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El discurso de Pentecostés: estructura y contenido',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hechos 2 describe el derramamiento del Espíritu Santo el día de Pentecostés: lenguas de fuego, el sonido de viento recio, el don de hablar en idiomas que los presentes entendían. La respuesta de la multitud fue de burla: "están llenos de mosto." Pedro, de pie con los once, tomó la palabra. Hechos 2:14-36 contiene el primer sermón misionero cristiano registrado — un discurso de unos tres minutos de lectura que convirtió a tres mil personas.',
            },
            {
              type: 'highlight_verse',
              reference: 'Hechos 2:36-38',
              text: 'Sepa, pues, ciertísimamente toda la casa de Israel, que a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo. Al oír esto, se compungieron de corazón, y dijeron a Pedro y a los otros apóstoles: Varones hermanos, ¿qué haremos? Pedro les dijo: Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo.',
            },
            {
              type: 'doctrine_box',
              title: 'El patrón misionero en Hechos 2',
              body: 'El sermón de Pedro en Hechos 2 establece el patrón del primer mensaje misionero de la Iglesia: (1) el cumplimiento de la profecía — "esto es lo que dijo el profeta Joel"; (2) el testimonio de Cristo — su ministerio, muerte y resurrección; (3) el llamamiento al arrepentimiento y al bautismo; (4) la promesa del don del Espíritu Santo. Este patrón de cuatro partes es exactamente el mismo que el mensaje de la Restauración en sus formulaciones más tempranas.',
            },
            {
              type: 'key_points',
              title: 'Los resultados de Pentecostés',
              points: [
                'Tres mil personas fueron bautizadas ese día (Hechos 2:41)',
                'La primera Iglesia en Jerusalén se estableció con comunidad diaria, partir el pan y oración',
                'Hechos 2:44-45 describe la ley de consagración en la Iglesia primitiva: "tenían en común todas las cosas"',
                'Pedro y Juan comenzaron a predicar diariamente en el templo',
                'La comunidad creció hasta que las autoridades judías comenzaron a arrestarlos',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Pedro Sana al Cojo en la Puerta Hermosa',
      intro: {
        romanNumeral: 'II',
        title: 'Hechos 3 — "Lo que Tengo Te Doy"',
        paragraphs: [
          'El primer milagro público de Pedro en Hechos revela su comprensión del poder apostólico: no opera en su propio nombre ni con sus propios recursos.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El milagro y su declaración teológica',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 3:4-8',
              text: 'Pedro, con Juan, fijando en él los ojos, le dijo: Míranos. Entonces él les estuvo atento, esperando recibir de ellos algo. Mas Pedro dijo: No tengo plata ni oro, pero lo que tengo te doy; en el nombre de Jesucristo de Nazaret, levántate y anda. Y tomándole por la mano derecha le levantó; y al momento se le afirmaron los pies y tobillos; y saltando, se puso en pie y anduvo.',
            },
            {
              type: 'paragraph',
              text: 'La declaración "No tengo plata ni oro, pero lo que tengo te doy" es la definición más concisa del ministerio apostólico. La riqueza no es el recurso del apóstol — la autoridad del nombre de Cristo es el recurso. Pedro sanó en el nombre de Jesucristo, no en el nombre de Pedro. Inmediatamente después del milagro, cuando la gente corre a ellos asombrada, Pedro dice: "¿Por qué os maravilláis de esto? ¿O por qué ponéis los ojos en nosotros, como si por nuestro poder o piedad hubiésemos hecho andar a éste?" (Hechos 3:12). El poder no era suyo.',
            },
            {
              type: 'deep_dive',
              title: 'El impacto del milagro en la Iglesia primitiva',
              paragraphs: [
                'El cojo en la puerta Hermosa tenía más de cuarenta años (Hechos 4:22) y era cojo de nacimiento. No era un enfermo que se había curado espontáneamente — era un caso que todos en Jerusalén conocían porque pedía limosna en la puerta del templo diariamente.',
                'El milagro desencadenó el primer arresto de Pedro y Juan (Hechos 4:1-3). Las autoridades del templo estaban "resentidos de que enseñasen al pueblo y anunciasen en Jesús la resurrección de entre los muertos." El milagro no solo sanó a un hombre — amenazó el orden religioso establecido.',
                'Ante el Sanedrín, Pedro habló con poder tan evidente que Hechos 4:13 registra la reacción de los líderes: "viendo la valentía de Pedro y de Juan, y sabiendo que eran hombres sin letras y del vulgo, se maravillaban; y les reconocían que habían estado con Jesús." La evidencia del discipulado es visible incluso para los enemigos.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Visión del Mantel — Apertura a los Gentiles',
      intro: {
        romanNumeral: 'III',
        title: 'Hechos 10 — La Decisión que Cambió la Historia del Mundo',
        paragraphs: [
          'Pedro recibió una visión que transformó no solo su teología personal sino la dirección de toda la historia cristiana: el evangelio no era solo para Israel.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La visión de los animales impuros',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 10:9-15',
              text: 'Pedro subió a la azotea para orar... y vio el cielo abierto, y que descendía algo semejante a un gran lienzo, que atado de las cuatro puntas era bajado a la tierra; en el cual había de todos los cuadrúpedos terrestres y reptiles y aves del cielo. Y le vino una voz: Levántate, Pedro, mata y come. Entonces Pedro dijo: Señor, no; porque ninguna cosa común o inmunda he comido jamás. Volvió la voz a él la segunda vez: Lo que Dios limpió, no lo llames tú común.',
            },
            {
              type: 'paragraph',
              text: 'La visión se repitió tres veces. Mientras Pedro meditaba sobre su significado, llegaron los mensajeros de Cornelio — un centurión romano, gentil, que había tenido su propia visión angelical. Pedro fue a su casa, y cuando comenzó a predicar, el Espíritu Santo cayó sobre los gentiles presentes antes del bautismo. Pedro, estupefacto, declaró: "¿Puede acaso alguno impedir el agua, para que no sean bautizados estos que han recibido el Espíritu Santo también como nosotros?" (Hechos 10:47).',
            },
            {
              type: 'doctrine_box',
              title: 'Revelación continua a través del profeta presidente',
              body: 'La visión de Pedro en Hechos 10 es el patrón escritural más claro de la revelación continua a través del presidente de la Iglesia. Pedro no tomó la decisión de abrir el evangelio a los gentiles por razonamiento filosófico ni por voto del quórum — recibió una visión revelada directamente. Esta visión cambió una política que había estado vigente desde Mateo 10:5-6 ("no vayáis a los gentiles") hasta entonces. El profeta vivo puede recibir revelación que modifica o expande lo que revelaciones anteriores establecieron.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Cornelio y el bautismo de los gentiles',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cornelio era centurión de la cohorte llamada "la italiana." Era un hombre piadoso, que "oraba a Dios siempre" y daba muchas limosnas al pueblo. Un ángel se le apareció y le dio instrucciones específicas: enviar mensajeros a buscar a Pedro en Jope. La narrativa de Hechos 10 es una operación coordinada del Espíritu Santo en dos extremos: mientras el ángel preparaba a Cornelio, la visión preparaba a Pedro.',
            },
            {
              type: 'highlight_verse',
              reference: 'Hechos 10:34-35',
              text: 'Entonces Pedro, abriendo la boca, dijo: En verdad comprendo que Dios no hace acepción de personas, sino que en toda nación se agrada del que le teme y hace justicia.',
            },
            {
              type: 'key_points',
              title: 'Las implicaciones de Hechos 10 para la historia de la Iglesia',
              points: [
                'Estableció el precedente de que los gentiles podían bautizarse sin circuncisión previa',
                'Preparó el terreno para el Concilio de Jerusalén (Hechos 15) donde se formalizó esta política',
                'La experiencia de Cornelio fue el argumento más poderoso de Pedro ante los judaizantes',
                'Sin esta apertura, el evangelio no habría llegado al Imperio Romano ni, eventualmente, al mundo entero',
                'El patrón — visión revelada, nueva política, aplicación inmediata — es el mismo de OD-1 y OD-2 en la doctrina restaurada',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Concilio de Jerusalén — Hechos 15',
      intro: {
        romanNumeral: 'IV',
        title: 'El Primer Concilio General de la Iglesia',
        paragraphs: [
          'Hechos 15 registra la primera conferencia general de la Iglesia cristiana, convocada para resolver una controversia doctrinal que amenazaba con dividir a la Iglesia naciente.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'La controversia y el papel de Pedro',
          blocks: [
            {
              type: 'paragraph',
              text: 'La controversia era simple en su enunciado y enorme en sus implicaciones: ¿debían los gentiles que se convertían al evangelio también circuncidarse y guardar la ley de Moisés? Algunos creyentes de la secta de los fariseos insistían en que sí. Pablo y Bernabé, que venían de sus viajes misioneros entre los gentiles, sostenían que no. El concilio en Jerusalén convocó a los apóstoles y los ancianos para debatir la cuestión.',
            },
            {
              type: 'highlight_verse',
              reference: 'Hechos 15:7-11',
              text: 'Y después de mucha discusión, Pedro se levantó y les dijo: Varones hermanos, vosotros sabéis cómo ya hace algún tiempo que Dios escogió que los gentiles oyesen por mi boca la palabra del evangelio y creyesen... Ahora, pues, ¿por qué tentáis a Dios, poniendo sobre la cerviz de los discípulos un yugo que ni nuestros padres ni nosotros hemos podido llevar? Antes creemos que por la gracia del Señor Jesús seremos salvos, de igual modo que ellos.',
            },
            {
              type: 'paragraph',
              text: 'La intervención de Pedro fue decisiva. Citó la experiencia de Cornelio como precedente revelado. Luego habló Santiago, hermano del Señor y obispo de Jerusalén, quien propuso la decisión final: los gentiles no necesitaban circuncidarse, pero debían abstenerse de la fornicación, de la sangre y de los ídolos. El concilio ratificó esta decisión, que se comunicó a las iglesias mediante carta apostólica (Hechos 15:23-29).',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La Muerte de Pedro — Crucificado de Cabeza',
      intro: {
        romanNumeral: 'V',
        title: '"Cuando ya Seas Viejo... Otro te Ceñirá"',
        paragraphs: [
          'El propio Jesús predijo en Juan 21:18-19 la manera en que Pedro moriría. La tradición patrística confirma el cumplimiento de esa profecía bajo el emperador Nerón.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'La profecía y su cumplimiento',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Juan 21:18-19',
              text: 'De cierto, de cierto te digo: Cuando eras más joven, te ceñías, e ibas a donde querías; mas cuando ya seas viejo, extenderás tus manos, y te ceñirá otro, y te llevará a donde no quieras. Esto dijo, dando a entender con qué muerte había de glorificar a Dios.',
            },
            {
              type: 'paragraph',
              text: 'La tradición cristiana temprana — atestiguada por Clemente de Roma (ca. 96 d.C.), Ignacio de Antioquía (ca. 110 d.C.), Tertuliano (ca. 200 d.C.) y Eusebio de Cesarea (ca. 313 d.C.) — establece que Pedro fue crucificado en Roma durante la persecución de Nerón, probablemente entre 64 y 68 d.C. La tradición específica de que fue crucificado de cabeza proviene del Acta de Pedro (siglo II), que indica que Pedro solicitó ser crucificado así por considerarse indigno de morir de la misma manera que su Señor.',
            },
            {
              type: 'doctrine_box',
              title: 'El testigo fiel hasta la muerte',
              body: 'La muerte de Pedro completó el arco de su vida de una manera que ningún novelista hubiera imaginado. El hombre que no pudo confesar a Cristo ante una sirvienta junto a una hoguera dio su vida antes que negar a Cristo ante el poder imperial de Roma. La diferencia entre el Pedro de Juan 18 y el Pedro de la tradición martirológica no es de carácter — es de transformación espiritual. El Espíritu Santo que descendió en Pentecostés hizo en Pedro lo que Pedro no pudo hacer por sí mismo.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué dice sobre el poder del Espíritu Santo el hecho de que el mismo hombre que negó a Cristo tres veces ante una sirvienta murió antes que negarlo ante el poder del Imperio Romano? ¿Qué "Pedro de Juan 18" hay en ti, y qué necesitas para convertirte en el "Pedro de Hechos 2"?',
            },
          ],
        },
      ],
    },
  ],
}
