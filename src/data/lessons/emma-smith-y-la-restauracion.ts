import type { Lesson } from '@/types/doctrine'

export const emmaSmithYLaRestauracion: Lesson = {
  id: 'emma-smith-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'emma-smith',
  title: 'Emma y la Restauración',
  subtitle: 'El legado de la Mujer Elegida de Dios',
  author: 'Fuentes: DyC 25; DyC 135; Historia de la Iglesia; Registros de la Sociedad de Socorro',
  description:
    'Emma Smith organizó la primera Sociedad de Socorro, compiló el primer himnario, y fue la primera escribiente del Libro de Mormón. Su vida posterior — el no emigrar a Utah, el unirse a la Iglesia Reorganizada — complica una narrativa simple de lealtad institucional. Esta lección examina su legado completo: lo que la Iglesia recibió de ella, lo que Dios le prometió, y por qué su nombre sigue siendo pronunciado con honor casi dos siglos después.',
  level: 'AVANZADO',
  icon: '✨',
  duration: 25,
  order: 8114,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'emma-smith-la-musica',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'La Sociedad de Socorro — La Fundación',
      intro: {
        romanNumeral: 'I',
        title: '17 de Marzo de 1842 — "La Iglesia Nunca Estuvo Perfectamente Organizada hasta Ahora"',
        paragraphs: [
          'En la habitación superior de la tienda roja de José Smith en Nauvoo, Illinois, dieciocho mujeres se reunieron para organizar la Sociedad de Socorro. Emma Smith fue elegida como su primera presidenta. Según los registros de la reunión, José Smith dijo algo extraordinario sobre lo que acababa de ocurrir.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Las palabras de José en la fundación',
          blocks: [
            {
              type: 'central_quote',
              text: 'La Iglesia nunca estuvo perfectamente organizada hasta ahora.',
              attribution: 'José Smith, en la reunión fundacional de la Sociedad de Socorro — 17 de marzo de 1842',
            },
            {
              type: 'paragraph',
              text: 'La afirmación de José es extraordinaria: la organización de la Sociedad de Socorro no fue un apéndice de la Iglesia — fue, según él, la culminación de su organización. Doce años después de que la Iglesia se organizara formalmente (abril de 1830), José declaró que ahora, con las mujeres organizadas formalmente bajo el sacerdocio, la Iglesia estaba "perfectamente organizada." Emma, al aceptar la presidencia, cumplió un rol que José consideraba esencial.',
            },
            {
              type: 'paragraph',
              text: 'Emma fue elegida presidenta por las mujeres presentes — un detalle significativo. No fue designada por José. Las hermanas votaron. Y a su vez, Emma eligió a sus consejeras. El modelo de liderazgo femenino con sustentación congregacional comenzó ese día, en esa habitación, con Emma Smith como primera presidenta.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Mar. 1842', text: 'Fundación de la Sociedad de Socorro — Emma elegida primera presidenta, 18 mujeres fundadoras', color: 'gold' },
                { label: '1842-1844', text: 'Emma preside activamente — reuniones regulares en Nauvoo, crecimiento rápido de membresía', color: 'green' },
                { label: 'Jun. 1844', text: 'Martirio de José Smith — Emma queda viuda con hijos, la Sociedad de Socorro suspende actividades', color: 'red' },
                { label: '1846', text: 'Los Santos emigran a Utah — Emma permanece en Nauvoo con sus hijos', color: 'blue' },
                { label: '1880', text: 'La Sociedad de Socorro se reorganiza permanentemente bajo Brigham Young — Eliza R. Snow como segunda presidenta', color: 'gold' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Lo que Emma instituyó en la Sociedad de Socorro',
          blocks: [
            {
              type: 'paragraph',
              text: 'Durante su presidencia de dos años, Emma estableció prácticas que definirían a la organización por generaciones: el estudio de las escrituras, el servicio a los pobres y enfermos, la recaudación de fondos para el Templo de Nauvoo, y la formación espiritual de las hermanas. Las reuniones de la Sociedad de Socorro en Nauvoo eran conocidas por su seriedad doctrinal — Emma no presidía una organización social sino un ministerio.',
            },
            {
              type: 'key_points',
              title: 'Contribuciones de Emma como primera presidenta de la Sociedad de Socorro',
              points: [
                'Estableció el patrón de estudios de escrituras en las reuniones de hermanas',
                'Organizó recolección de fondos para la construcción del Templo de Nauvoo',
                'Coordinó asistencia a los pobres y enfermos en Nauvoo — servicio organizado formalmente',
                'Presidió reuniones en las que José Smith enseñó doctrina avanzada directamente a las hermanas',
                'Estableció el precedente de que las mujeres tienen voz y voto en su propia organización',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los Años Difíciles — Emma después de Carthage',
      intro: {
        romanNumeral: 'II',
        title: 'Una Decisión que la Iglesia y Emma Tomarían Caminos Distintos',
        paragraphs: [
          'El martirio de José en junio de 1844 dejó a Emma viuda con cuatro hijos y embarazada del quinto. Las decisiones que tomó en los años siguientes son las más complejas de su historia, y merecen ser comprendidas, no simplificadas.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Por qué Emma no fue al oeste',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el invierno de 1846, los Santos de los Últimos Días comenzaron el éxodo de Nauvoo hacia lo que sería Utah. Emma no fue. Sus razones son múltiples y documentadas: tenía hijos pequeños, incluyendo el bebé David nacido meses después del martirio. No tenía los recursos para un viaje tan largo. Desconfiaba de Brigham Young — su relación con él era tensa, en parte por el matrimonio plural, en parte por disputas sobre los bienes de José. Nauvoo era el único hogar que le quedaba.',
            },
            {
              type: 'paragraph',
              text: 'La decisión de Emma de quedarse en Nauvoo no fue de apostasía sino de circunstancia, agotamiento, y una relación complicada con el liderazgo que siguió a José. Que esto haya resultado en que su historia sea contada mayormente desde la perspectiva de la Iglesia que sí fue al oeste — y con frecuencia de manera poco caritativa — es una injusticia histórica que historiadores y líderes modernos han trabajado por corregir.',
            },
            {
              type: 'deep_dive',
              badge: 'Historia Compleja',
              title: 'Emma y la Iglesia Reorganizada (RLDS)',
              paragraphs: [
                'En 1860, Emma se unió formalmente a la Iglesia Reorganizada de Jesucristo de los Santos de los Últimos Días (RLDS), liderada por su hijo Joseph Smith III. Esta organización rechazaba la poligamia y reclamaba la sucesión legítima del profetado a través de la línea de Joseph Smith. Emma sirvió como testigo y figura de respaldo a la RLDS hasta su muerte en 1879.',
                'Para la Iglesia en Utah, la decisión de Emma de unirse a la RLDS fue interpretada durante generaciones como rechazo de la verdadera sucesión. Para Emma, fue la forma de honrar el legado de su esposo en una organización que rechazaba la práctica que más dolor le había causado.',
                'Ambas perspectivas tienen lógica interna. Lo que es indudable: Emma nunca abandonó su testimonio de la Restauración, del Libro de Mormón, o de que José Smith fue profeta. Hasta el final de su vida, afirmó los eventos fundacionales. Su división fue con ciertas doctrinas y con el liderazgo posterior — no con la revelación original.',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Lo que Emma nunca retractó',
          blocks: [
            {
              type: 'paragraph',
              text: 'A pesar de sus diferencias con la Iglesia en Utah y su militante oposición al matrimonio plural, Emma nunca retractó los puntos centrales de su testimonio. En 1879, el año de su muerte, a los 74 años, fue entrevistada extensamente por su hijo Joseph Smith III. Sus afirmaciones en esa entrevista son claras: las planchas eran reales, la traducción fue milagrosa, José era profeta, el Libro de Mormón es la palabra de Dios.',
            },
            {
              type: 'central_quote',
              text: 'Mi creencia es que el Libro de Mormón es la palabra de Dios... José Smith no habría podido dictar el texto que dictó. Era un hombre notablemente ignorante en ese tiempo, y yo habría sabido si hubiese intentado engañarme.',
              attribution: 'Emma Smith, entrevista con Joseph Smith III, 1879 — el año de su muerte',
            },
            {
              type: 'paragraph',
              text: 'La fidelidad al testimonio central — en ausencia de toda razón institucional para mantenerlo — es uno de los argumentos más poderosos sobre la autenticidad de Emma como testigo. Si la Restauración fuera falsa, Emma tenía todas las razones para decirlo al final de su vida. No lo dijo.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Llamamiento que Permanece',
      intro: {
        romanNumeral: 'III',
        title: 'DyC 25 — Revelación que No Depende de la Vida Perfecta de Emma',
        paragraphs: [
          'Una pregunta que los estudiantes de historia LDS se hacen: ¿permanece el llamamiento de DyC 25 aunque Emma tomara decisiones con las que la Iglesia no estuvo de acuerdo? La respuesta que la Iglesia ha sostenido consistentemente es: sí.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La revelación persiste',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 25:3',
              text: 'He aquí, y escucha la voz de él que te habla, tu esposo, con el brazo de la misericordia sobre ti, y oye las palabras de él que te habla, el Señor tu Dios, y que escucha tu oración, incluso el Señor tu Dios, y un Redentor misericordioso de los pecados del mundo; porque yo soy Jesucristo, el Hijo del Unigénito. Por tanto, levántate y regocíjate. Y exceptuando tus pecados, los cuales han sido perdonados, eres una elegida de Dios y serás llamada a mayor obra.',
            },
            {
              type: 'doctrine_box',
              title: 'Los Callamientos de Dios Son Irrevocables',
              body: 'Romanos 11:29 declara que "los dones y el llamamiento de Dios son irrevocables." Que Emma haya tomado decisiones difíciles después de 1844 no cancela el llamamiento que Dios le dio en 1830. DyC 25 no tiene cláusula de caducidad. Fue canonizado en las Doctrinas y Convenios y leído por Santos en todo el mundo generación tras generación. El llamamiento fue real. Las contribuciones fueron reales. Y la promesa — "tendrás paz y descanso en el gran día del Señor" (v. 4) — sigue en pie.',
            },
            {
              type: 'paragraph',
              text: 'Los líderes modernos de la Iglesia han hablado de Emma con creciente generosidad y reconocimiento. El presidente Russell M. Nelson, la hermana Jean B. Bingham, y el élder Jeffrey R. Holland han mencionado a Emma no como figura trágica sino como mujer cuyo legado permanece activo en la Iglesia. Su nombre está en los registros de la Sociedad de Socorro, sus himnos suenan en los templos, y su llamamiento de DyC 25 se cita como vigente.',
            },
            {
              type: 'leader_quote',
              quote: 'Emma Smith fue llamada por nombre por el Señor Jesucristo. Ese llamamiento no se canceló por las circunstancias de su vida posterior. Dios la conocía, la amaba, y confió en ella con responsabilidades que han dado forma a la Iglesia hasta hoy.',
              name: 'Hermana Jean B. Bingham',
              role: 'Presidenta General de la Sociedad de Socorro',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'Lo que Emma enseña a cada generación',
          blocks: [
            {
              type: 'paragraph',
              text: 'La historia de Emma Smith es incómoda precisamente porque no se resuelve de manera limpia. No es la historia de una heroína que lo hizo todo bien ni la de una apóstata que abandonó la verdad. Es la historia de una mujer real que amó profundamente, sufrió devastadoramente, creyó firmemente en los fundamentos, y navegó el resto con las herramientas humanas imperfectas que tenía.',
            },
            {
              type: 'compare_grid',
              title: 'El legado de Emma — Lo que permanece',
              left: {
                label: 'Contribuciones que la Iglesia conserva',
                points: [
                  'El primer himnario — modelo de adoración musical',
                  'La primera Sociedad de Socorro — organización de millones',
                  'Testimonio de la traducción del Libro de Mormón',
                  'DyC 25 — revelación canonizada para todas las mujeres',
                  'El patrón de que Dios llama a las mujeres por nombre',
                ],
              },
              right: {
                label: 'Lo que su historia nos enseña',
                points: [
                  'Que Dios trabaja con seres humanos complejos y contradictorios',
                  'Que el sufrimiento no cancela el llamamiento',
                  'Que la fidelidad a los fundamentos puede coexistir con desacuerdo en otros puntos',
                  'Que "llevar tu cruz" (DyC 25:4) es un llamamiento real y costoso',
                  'Que la promesa de paz "en el gran día del Señor" no es vacía — es escatológica',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿Cómo te ayuda la historia completa de Emma — incluyendo sus años difíciles — a entender mejor lo que significa mantener un testimonio cuando las circunstancias son complicadas? ¿Qué parte de su historia te habla más directamente?',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Cómo reconcilias las contribuciones permanentes de Emma con sus decisiones posteriores que la alejaron de la Iglesia institutcional en Utah?' },
                { id: 'p2', question: 'DyC 25:4 promete "paz y descanso en el gran día del Señor" a Emma. ¿Qué significa para ti esa promesa escatológica, y cómo aplica a las personas que sufren hoy?' },
                { id: 'p3', question: '¿Qué aprendes sobre el carácter de Dios al ver que Él llama a alguien por nombre, le confía responsabilidades enormes, y hace promesas eternas — incluso sabiendo que la vida de esa persona será profundamente complicada?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
