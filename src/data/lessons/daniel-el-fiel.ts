import type { Lesson } from '@/types/doctrine'

export const danielElFiel: Lesson = {
  id: 'daniel-el-fiel',
  moduleId: 'personajes-escrituras',
  title: 'El Fiel',
  subtitle: 'Ni la estatua ni el foso lo doblegaron',
  description: 'Daniel 3 y Daniel 6 son los dos relatos de fidelidad más memorables del AT. En el primero, tres jóvenes hebreos se niegan a inclinarse ante la estatua de oro y son arrojados al horno de fuego — con un cuarto ser que aparece entre ellos. En el segundo, Daniel continúa orando tres veces al día aunque la ley lo condena a morir devorado por los leones.',
  level: 'INTERMEDIO',
  icon: '🦁',
  duration: 30,
  order: 4411,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'daniel',
  studySections: [
    {
      id: 's1',
      title: 'El horno de fuego — Daniel 3',
      intro: {
        romanNumeral: 'I',
        title: '"Nuestro Dios Puede Librarnos... Pero Aunque No Lo Hiciere"',
        paragraphs: [
          'Daniel 3 contiene la declaración de fe más incondicional del Antiguo Testamento.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La estatua y la negativa',
          blocks: [
            {
              type: 'paragraph',
              text: 'Nabucodonosor construyó una estatua de oro de 27 metros de altura y 2.7 metros de ancho en la llanura de Dura. Convocó a todos los funcionarios del Imperio a la dedicación con instrucciones claras: al escuchar la música, todos debían inclinarse. La pena por negarse: ser arrojado inmediatamente al horno de fuego preparado al efecto. El propósito político era obvio: demostrar la soberanía babilónica sobre todas las naciones y sus dioses.',
            },
            {
              type: 'highlight_verse',
              reference: 'Daniel 3:16-18',
              text: 'Sadrac, Mesac y Abed-nego respondieron al rey Nabucodonosor, diciendo: No es necesario que te respondamos sobre este asunto. He aquí nuestro Dios a quien servimos puede librarnos del horno de fuego ardiendo; y de tu mano, oh rey, nos librará. Y si no, sepas, oh rey, que no serviremos a tus dioses, ni tampoco adoraremos la estatua que has levantado.',
            },
            {
              type: 'paragraph',
              text: 'La estructura de esta respuesta es teológicamente perfecta. Hay dos afirmaciones: (1) "Nuestro Dios PUEDE librarnos" — fe en el poder divino. (2) "Y si no... NO serviremos a tus dioses" — obediencia incondicional que no depende del resultado. Esta es la declaración de fe más madura del AT: creer que Dios puede intervenir, y obedecer aunque no lo haga. No es resignación — es confianza absoluta en el carácter de Dios independientemente de las circunstancias.',
            },
            {
              type: 'doctrine_box',
              title: 'El "aunque no lo hiciere" — fe incondicional',
              body: 'La frase "y si no" (ve-hen la) es el momento más audaz de Daniel 3. Significa: "incluso si Dios elige no intervenir, nuestra respuesta es la misma." Esta fe no condiciona la obediencia al resultado milagroso. Es la misma fe que Abraham mostró al ofrecer a Isaac sin saber que había un carnero preparado. Es la misma fe que Job expresó: "aunque él me matare, en él esperaré" (Job 13:15). La fe más madura no depende de la experiencia del milagro — precede a ella.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El cuarto ser en el horno',
      intro: {
        romanNumeral: 'II',
        title: 'Un Cuarto Ser "Como el Hijo de los Dioses"',
        paragraphs: [
          'Dentro del horno de fuego, Nabucodonosor ve a un cuarto ser que la tradición ha identificado como Cristo.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La aparición en el fuego',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 3:24-25',
              text: 'Entonces el rey Nabucodonosor se espantó, y se levantó apresuradamente y dijo a los de su consejo: ¿No echaron a tres varones atados dentro del fuego? Ellos respondieron al rey: Es verdad, oh rey. Y él dijo: He aquí yo veo cuatro varones sueltos, que se pasean en medio del fuego sin sufrir ningún daño; y el aspecto del cuarto es semejante a hijo de los dioses.',
            },
            {
              type: 'paragraph',
              text: 'La descripción del cuarto ser — "semejante a hijo de los dioses" (arameo: bar elahín) — ha sido interpretada desde los padres de la Iglesia como una cristofanía: una aparición del Cristo premortal en el AT. La tradición de la Restauración también identifica este ser con Cristo, conectándolo con las múltiples apariciones del Señor premortal en el AT (a Abraham en Mambré, a Moisés en la zarza, a Josué como el capitán del ejército de Jehová).',
            },
            {
              type: 'paragraph',
              text: 'El resultado físico es verificable por los observadores externos: cuando Sadrac, Mesac y Abed-nego salen del horno, "el fuego no había tenido poder alguno sobre sus cuerpos, ni un cabello de sus cabezas se había quemado; sus ropas estaban intactas, y ni siquiera olor a fuego tenían" (Daniel 3:27). La ausencia de olor a humo es el detalle más específico y más imposible de simular: Nabucodonosor y todos sus funcionarios tuvieron que admitir que el milagro era real.',
            },
            {
              type: 'central_quote',
              text: '"Bendito sea el Dios de ellos, de Sadrac, Mesac y Abed-nego, que envió su ángel y libró a sus siervos que confiaron en él, y que no cumplieron el edicto del rey, y entregaron sus cuerpos antes que servir y adorar a otro dios que su Dios."',
              attribution: 'Nabucodonosor, rey de Babilonia — Daniel 3:28',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El foso de los leones — Daniel 6',
      intro: {
        romanNumeral: 'III',
        title: 'La Conspiración de los Sátrapas',
        paragraphs: [
          'Daniel 6 — décadas después del horno de fuego, un hombre anciano de unos 80 años enfrenta el mismo dilema.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La trampa perfecta',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 6:4-5',
              text: 'Entonces los gobernadores y sátrapas buscaban ocasión para acusar a Daniel en lo relacionado al reino; mas no podían hallar ocasión alguna o falta, porque él era fiel, y ningún vicio ni falta fue hallado en él. Entonces dijeron aquellos hombres: No hallaremos contra este Daniel ocasión alguna para acusarle, si no la hallamos contra él en relación con la ley de su Dios.',
            },
            {
              type: 'paragraph',
              text: 'La lógica de los sátrapas es perfectamente razonable desde su perspectiva: Daniel es tan íntegro en lo secular que la única vulnerabilidad posible es su fidelidad religiosa. Así que construyeron una ley que criminalizaba exactamente esa fidelidad. El decreto de Darío — orar solo al rey por 30 días — fue diseñado con un solo objetivo: eliminar a Daniel. Fue la trampa más sofisticada concebida contra un funcionario en toda la historia del Imperio Persa.',
            },
            {
              type: 'paragraph',
              text: 'El decreto usó la ley irrevocable de los medos y persas ("la ley de Media y de Persia, la cual no puede ser abrogada" — Daniel 6:8, 12, 15) como mecanismo de trampa. Una vez firmado el decreto, ni el mismo Darío podía revocarlo. Los sátrapas habían diseñado un sistema donde la integridad de Daniel lo condenaría automáticamente sin que el rey pudiera intervenir.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El decreto de Darío tras la liberación',
      intro: {
        romanNumeral: 'IV',
        title: 'La Noche Sin Sueño del Rey y el Decreto de Fe',
        paragraphs: [
          'La historia de Daniel en el foso termina con el rey pagano publicando uno de los testimonios más explícitos de Dios en todo el AT.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Lo que la fidelidad produce en los observadores',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 6:19-20',
              text: 'El rey se levantó muy de mañana, al despuntar el alba, y fue apresuradamente al foso de los leones. Y acercándose al foso llamó a voces a Daniel con voz triste, y le dijo el rey a Daniel: Daniel, siervo del Dios viviente, el Dios tuyo, a quien tú continuamente sirves, ¿te ha podido librar de los leones?',
            },
            {
              type: 'paragraph',
              text: 'Darío pasó la noche sin comer, sin dormir, sin entretenimiento — ayunando (Daniel 6:18). La preocupación del rey por Daniel es uno de los retratos más humanos de todo el libro. Este rey pagano, que había sido manipulado para firmar la sentencia de muerte de su funcionario más capaz, pasó la noche en angustia. La fidelidad de Daniel había producido en Darío algo que la propaganda religiosa no podía: respeto genuino por el Dios de Daniel.',
            },
            {
              type: 'highlight_verse',
              reference: 'Daniel 6:26-27',
              text: 'De parte mía es puesta esta ordenanza: Que en todo el dominio de mi reino todos teman y tiemblen ante el Dios de Daniel; porque él es el Dios viviente y permanece por los siglos, y su reino no será jamás destruido, y su dominio perdurará hasta el fin. Él salva y libra, y hace señales y maravillas en el cielo y en la tierra; él ha librado a Daniel del poder de los leones.',
            },
            {
              type: 'paragraph',
              text: 'El decreto de Darío es extraordinario: el rey del Imperio más poderoso del mundo ordena a todos sus súbditos temer y temblar ante el Dios de un funcionario que acababa de sobrevivir el foso de los leones. Nabucodonosor había hecho decretos similares tras el horno de fuego (Daniel 3:29) y tras la restauración de su razón (Daniel 4:37). La fidelidad consistente de Daniel y sus compañeros produjo repetidamente declaraciones de fe de los gobernantes más poderosos del mundo.',
            },
            {
              type: 'reflection',
              prompt: '¿Hay personas en tu vida — no necesariamente miembros de la Iglesia — que han observado tu fidelidad y han quedado impactadas por ella, como Darío quedó impactado por Daniel? ¿Qué tipo de observación sostenida, no de un momento heroico sino de años de consistencia, produce el mayor impacto en los que nos rodean?',
            },
          ],
        },
      ],
    },
  ],
}
