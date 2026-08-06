import type { Lesson } from '@/types/doctrine'
import { davidAssets } from '@/data/davidAssets'

export const davidElElegido: Lesson = {
  id: 'david-el-elegido',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'david',
  title: 'David — El Elegido',
  subtitle: 'El día que Dios eligió al pastor que nadie había llamado',
  description:
    'Cuando Samuel llegó a Belén a ungir a un rey, Jesse presentó a siete hijos. Todos fueron rechazados. El octavo, que estaba en el campo cuidando ovejas, fue el elegido. 1 Samuel 16:7 establece el principio eterno: Dios no mira lo que mira el hombre.',
  level: 'INTERMEDIO',
  icon: '👑',
  iconImage: davidAssets.lessons.elegido.icon,
  heroImage: {
    url: davidAssets.lessons.elegido.hero,
    alt: 'David, joven pastor, es ungido por el profeta Samuel',
  },
  duration: 30,
  order: 4210,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El criterio de Dios vs. el criterio humano',
      intro: {
        romanNumeral: 'I',
        title: 'Dos maneras de ver',
        paragraphs: [
          'Dios y el hombre evalúan el liderazgo con criterios radicalmente distintos. La historia de la unción de David no es solo biográfica — es una declaración teológica sobre cómo Dios elige a sus siervos.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Lo que el hombre mira y lo que Dios mira',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Samuel 16:7',
              text: 'Y Jehová respondió a Samuel: No mires a su parecer, ni a lo grande de su estatura, porque yo lo desecho; porque Jehová no mira lo que mira el hombre; pues el hombre mira lo que está delante de sus ojos, pero Jehová mira el corazón.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: davidAssets.lessons.elegido.heart,
              alt: 'Contraste entre la apariencia exterior y el corazón, según 1 Samuel 16:7',
              caption: '"Jehová no mira lo que mira el hombre... Jehová mira el corazón" — 1 Samuel 16:7.',
            },
            {
              type: 'paragraph',
              text: 'Este versículo es una de las declaraciones más directas de toda la Escritura sobre la diferencia entre el juicio divino y el humano. El contexto lo hace aún más poderoso: Samuel era el profeta de Israel, ungido por el Señor, con décadas de experiencia. Y aun así, cuando vio al primer hijo de Jesse, asumió que era el elegido. Dios tuvo que corregirlo.',
            },
            {
              type: 'compare_grid',
              title: 'Dos tipos de evaluación',
              left: {
                label: 'Criterio humano',
                points: [
                  'Apariencia física e impresión visual',
                  'Edad, primogenitura y posición familiar',
                  'Experiencia previa en posiciones de poder',
                  'Reconocimiento social y reputación pública',
                  'Habilidades militares o políticas visibles',
                ],
              },
              right: {
                label: 'Criterio divino',
                points: [
                  'Intención y pureza del corazón',
                  'Disposición a obedecer, independientemente del rango',
                  'Fidelidad en lo pequeño y en lo oculto',
                  'Humildad para servir sin reconocimiento',
                  'Fe activa en situaciones sin testigos humanos',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'El principio es consistente en toda la Escritura',
              body: 'Este mismo patrón se repite en Génesis (Dios elige a Abel, no a Caín; a Isaac, no a Ismael; a Jacob, no a Esaú), en el Nuevo Testamento (Dios elige a pescadores galileos, no a sacerdotes jerusalemitas), y en la Restauración (Dios llama a un joven de 14 años sin educación formal para restaurar el evangelio). El principio no es arbitrario — Dios elige corazones que Él sabe que responderán a la revelación.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El día que Samuel llegó a Belén',
      intro: {
        romanNumeral: 'II',
        title: '1 Samuel 16 — La misión secreta del profeta',
        paragraphs: [
          'Samuel fue enviado a Belén con instrucciones específicas: ungir a uno de los hijos de Jesse como próximo rey. La misión era tan delicada que Samuel temía por su vida si Saúl se enteraba.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El contexto de la misión de Samuel',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando Dios envió a Samuel a Belén, el profeta tenía miedo. "¿Cómo iré? Si Saúl lo supiere, me matará" (1 Samuel 16:2). Dios le dio una cobertura: ir como si fuera a ofrecer un sacrificio. La unción del próximo rey tenía que ser un acto secreto — Saúl todavía reinaba y no renunciaría voluntariamente al trono. Este contexto político hace que la elección del pastor anónimo sea aún más significativa.',
            },
            {
              type: 'highlight_verse',
              reference: '1 Samuel 16:4-5',
              text: 'Samuel hizo lo que Jehová le dijo. Y luego que él llegó a Belén, los ancianos de la ciudad le salieron a recibir con miedo, y dijeron: ¿Es pacífica tu venida? Y él respondió: Sí, vengo a ofrecer sacrificio a Jehová; santificaos, y venid conmigo al sacrificio.',
            },
            {
              type: 'paragraph',
              text: 'Los ancianos de Belén tenían miedo de la llegada de Samuel — lo que indica que era un evento inusual y potencialmente peligroso. Un profeta de la talla de Samuel no llegaba a un pueblo pequeño sin razón. Jesse y sus hijos fueron santificados e invitados al sacrificio. Era una convocatoria de honor, una selección implícita: solo los hijos de Jesse habían sido llamados.',
            },
            {
              type: 'key_points',
              title: 'Datos clave del escenario',
              points: [
                'Belén era un pueblo pequeño de la tribu de Judá — no la ciudad principal de Israel',
                'Jesse era un anciano respetado pero no era realeza ni figura política',
                'El sacrificio era el pretexto oficial; la unción era el propósito real',
                'Ninguno de los presentes sabía que estaban viendo nacer a una dinastía',
                'La reunión comenzó con siete hijos — número de completitud en la simbología hebrea',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El octavo hijo que nadie llamó',
      intro: {
        romanNumeral: 'III',
        title: 'El menor de los hijos',
        paragraphs: [
          'Después de desfilar siete hijos ante Samuel, ninguno fue el elegido. Cuando Samuel preguntó si había alguno más, Jesse respondió con una respuesta que dice todo: "Queda aún el menor, que apacienta las ovejas." No lo llamó por su nombre. No pensó que valiera la pena convocarlo.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El hijo que su padre olvidó invitar',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Samuel 16:11',
              text: 'Entonces dijo Samuel a Isaí: ¿Son éstos todos tus hijos? Y él respondió: Queda aún el menor, que apacienta las ovejas. Y Samuel dijo a Isaí: Envía por él, porque no nos sentaremos a la mesa hasta que él venga aquí.',
            },
            {
              type: 'paragraph',
              text: 'La respuesta de Jesse revela su evaluación de David: el menor de los hijos, reducido a su función ("apacienta las ovejas"), no merecía ser llamado a la reunión con el profeta nacional. Era tan improbable candidato que su propio padre ni lo consideró. Este detalle no es accidental en el texto — el autor bíblico lo preserva precisamente porque ilustra el punto central: el elegido de Dios no era el candidato obvio para nadie que lo conocía.',
            },
            {
              type: 'deep_dive',
              title: 'El significado del número ocho en la Escritura hebrea',
              paragraphs: [
                'En la numerología bíblica hebrea, el siete representa completitud — el séptimo día de la creación, los siete años sabáticos, los siete branquias del candelabro. El ocho, sin embargo, representa lo que viene después de la completitud: la resurrección, el comienzo nuevo, lo que trasciende el ciclo completo.',
                'David era el octavo hijo de Jesse. Esta posición numérica tiene ecos en toda la Escritura: la circuncisión ocurría en el octavo día (Génesis 17:12), Noé era el octavo (2 Pedro 2:5), y la resurrección de Cristo ocurrió el "primer día" — que también se leía como el octavo día de la semana en el calendario litúrgico judío.',
                'Si el patrón es deliberado — y los autores bíblicos eran meticulosos en estos detalles — entonces David como el octavo hijo comunica que él representaba algo más allá del orden humano establecido: era el que venía después del final esperado, el que nadie anticipaba.',
              ],
            },
            {
              type: 'central_quote',
              text: 'Queda aún el menor, que apacienta las ovejas.',
              attribution: 'Jesse de Belén, respondiendo a Samuel — 1 Samuel 16:11',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La unción del pastor',
      intro: {
        romanNumeral: 'IV',
        title: 'El momento que cambió la historia de Israel',
        paragraphs: [
          'David llegó del campo con las ovejas. El texto hebreo lo describe como "rubio, hermoso de ojos y de buen parecer" — pero esta vez Dios confirmó la elección antes de que Samuel actuara.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El ungido que todavía era pastor',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Samuel 16:12-13',
              text: 'Y él envió, e hizo entrar. Era rubio, y de hermoso semblante y de buena presencia. Entonces Jehová dijo: Levántate y úngele, porque éste es. Y Samuel tomó el cuerno del aceite, y le ungió en medio de sus hermanos; y desde aquel día en adelante el Espíritu de Jehová vino sobre David.',
            },
            {
              type: 'paragraph',
              text: 'La escena es dramáticamente precisa: David entra, Dios confirma de inmediato, Samuel actúa. No hay un segundo de duda. El Espíritu descendió sobre David ese día y, según el texto, permaneció con él desde entonces. Este momento marcó el inicio de una doble vida que duraría años: David era el ungido rey de Israel mientras Saúl todavía ocupaba el trono. Tendría que vivir con esa tensión por más de una década antes de poder reinar.',
            },
            {
              type: 'doctrine_box',
              title: 'La unción como llamamiento antes de la investidura',
              body: 'En la tradición del templo de Israel, la unción con aceite era un acto de consagración que separaba a alguien para un propósito sagrado. No era solo un nombramiento político — era una transferencia del Espíritu de Dios al ungido. Para David, la unción precedió al reinado por más de diez años. En ese período, David no actuó como rey — pero el Espíritu ya estaba sobre él. Este patrón — el llamamiento que precede al servicio visible — es consistente con la revelación moderna: los llamamientos de Dios operan en su tiempo, no en el nuestro.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa para ti que Dios elige con criterios que los demás no pueden ver? ¿Hay alguna área en tu vida donde el juicio de Dios sobre ti podría ser diferente al juicio que tú tienes sobre ti mismo?',
            },
            {
              type: 'key_points',
              title: 'Lo que 1 Samuel 16 enseña sobre el llamamiento divino',
              points: [
                'Dios no necesita que seas el candidato obvio — solo necesita tu corazón',
                'La fidelidad en el trabajo anónimo (pastorear ovejas) prepara para la responsabilidad mayor',
                'El llamamiento de Dios puede preceder por años al ejercicio público de ese llamamiento',
                'Tu familia puede subestimarte; Dios no',
                'El Espíritu de Dios es la señal real del llamamiento — no el reconocimiento humano',
              ],
            },
          ],
        },
      ],
    },
  ],
}
