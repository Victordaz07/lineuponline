import type { Lesson } from '@/types/doctrine'

export const emmaSmithLaElegida: Lesson = {
  id: 'emma-smith-la-elegida',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'emma-smith',
  title: '"Elegida y Llamada"',
  subtitle: 'La única revelación personal dirigida a una mujer en DyC',
  author: 'Fuentes: DyC 25; JS-H 1; Historia de la Iglesia',
  description:
    'DyC 25 es la única revelación en la Doctrina y Convenios dirigida específicamente a una mujer por nombre. Emma Hale Smith es llamada "mujer elect de Dios" y recibe un llamamiento personal — compilar himnos, consolar a su esposo, y aprender. Esta lección examina quién era Emma antes de casarse con el profeta, por qué su revelación es única, y qué dice sobre cómo Dios llama a las mujeres.',
  level: 'BÁSICO',
  icon: '🌹',
  duration: 30,
  order: 8110,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'emma-smith-la-escribiente',
  studySections: [
    {
      id: 's1',
      title: 'Emma Hale — Antes del Profeta',
      intro: {
        romanNumeral: 'I',
        title: 'La Mujer que José Eligió',
        paragraphs: [
          'Emma Hale no era una joven pasiva que siguió ciegamente a un hombre interesante. Era educada, fuerte de carácter, y provenía de una familia que desconfiaba profundamente de José Smith.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El origen y carácter de Emma Hale',
          blocks: [
            {
              type: 'paragraph',
              text: 'Emma Hale nació el 10 de julio de 1804, en Harmony, Pennsylvania. Era la séptima de nueve hijos de Isaac y Elizabeth Hale. Su padre, Isaac Hale, era cazador y agricultor, un hombre serio y escéptico que desconfiaba de José Smith desde el principio — en parte por las actividades de búsqueda de tesoros en las que José había participado antes de recibir las planchas. Isaac Hale llegó a escribir una declaración pública criticando a su yerno.',
            },
            {
              type: 'paragraph',
              text: 'Emma era notable para su época: sabía leer y escribir con fluidez, tenía buena educación para una mujer de su tiempo y lugar, y era descrita por contemporáneos como alta, de cabello oscuro, con una presencia digna y un temperamento firme. No era fácilmente influenciable. Su decisión de casarse con José Smith fue, en todos los sentidos, una decisión costosa — le costó la aprobación de su padre por años.',
            },
            {
              type: 'doctrine_box',
              title: 'El Cortejo en Secreto',
              body: 'José Smith conoció a Emma Hale en el otoño de 1825, cuando se hospedó en la casa de los Hale mientras trabajaba para Josiah Stowell buscando minas en la región. Isaac Hale se opuso al cortejo desde el principio. El 18 de enero de 1827, José y Emma se casaron en secreto en South Bainbridge, Nueva York, sin el consentimiento del padre de ella. Emma tenía 22 años. Esta acción revela tanto la determinación de Emma como el precio que estuvo dispuesta a pagar por el hombre en quien creyó.',
            },
            {
              type: 'timeline',
              items: [
                { label: '1804', text: 'Emma Hale nace en Harmony, Pennsylvania', color: 'gold' },
                { label: '1825', text: 'José conoce a Emma en casa de los Hale durante trabajos mineros', color: 'blue' },
                { label: 'Ene. 1827', text: 'Emma y José se casan en secreto sin la aprobación del padre', color: 'green' },
                { label: 'Sep. 1827', text: 'José recibe las planchas del ángel Moroni — Emma es testigo de su regreso', color: 'gold' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Lo que Emma sabía que otros no sabían',
          blocks: [
            {
              type: 'paragraph',
              text: 'Desde los primeros días, Emma tuvo acceso a evidencias que la mayoría de los miembros no tuvieron jamás. Ella vivía con el hombre que decía ser profeta. Vio las planchas envueltas en lino sobre la mesa. Levantó el paño que las cubría — no para mirar, sino porque le asignaron limpiar alrededor de ellas. Describió años después cómo las movía al limpiar y podía sentir el peso y la irregularidad de las láminas individuales.',
            },
            {
              type: 'central_quote',
              text: 'Yo levanté las planchas con sus cubiertas, y las moví de un lugar a otro en la mesa mientras limpiaba, igual que movería cualquier otra pila de libros gruesos.',
              attribution: 'Emma Smith, en entrevista con su hijo Joseph Smith III, 1879',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa para ti que Emma eligió creer — no desde la distancia, sino viviendo diariamente con el profeta y con las pruebas físicas? ¿Cómo moldea tu fe conocer que ella tenía más acceso a la evidencia y aun así eligió quedarse?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'DyC 25 — La Revelación para Emma',
      intro: {
        romanNumeral: 'II',
        title: 'Julio de 1830 — Dios Habla a Emma por Nombre',
        paragraphs: [
          'En julio de 1830, apenas tres meses después de la organización de la Iglesia, José Smith recibió una revelación específicamente dirigida a Emma. Es la única revelación en la Doctrina y Convenios dada a una mujer identificada por nombre.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: '"Mujer elect de Dios" — el título más alto dado a una mujer en las escrituras modernas',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 25:3',
              text: 'Escucha la voz de él que te habla, tu esposo, con el brazo de la misericordia sobre ti, y oye las palabras de él que te habla, el Señor tu Dios, y que escucha tu oración, incluso el Señor tu Dios, y un Redentor misericordioso de los pecados del mundo; porque yo soy Jesucristo, el Hijo del Unigénito. Por tanto, levántate y regocíjate.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 25:3',
              text: 'Y exceptuando tus pecados, los cuales han sido perdonados, eres una elegida de Dios y serás llamada a mayor obra.',
            },
            {
              type: 'paragraph',
              text: 'El título "mujer elect de Dios" no es decorativo. En la teología de la Restauración, "elegido" o "elect" implica llamamiento divino, responsabilidad y confianza especial. El mismo término se usa para los doce apóstoles en DyC 95:5 y para el pueblo del convenio en general. Que Dios lo use específicamente de Emma — en una revelación solo para ella — no tiene precedente en las escrituras modernas. Ninguna otra mujer recibe este título individual.',
            },
            {
              type: 'key_points',
              title: 'Lo que DyC 25 le dice directamente a Emma',
              points: [
                'Sus pecados le son perdonados (v. 3) — gracia personal y directa',
                'Es llamada a "mayor obra" — su llamamiento no está limitado al hogar',
                'Debe ser apoyo y consuelo a José (v. 5) — un rol activo de ministerio',
                'Debe compilar un himnario para la Iglesia (v. 11) — llamamiento formal con efecto duradero',
                'Debe aprender, estudiar, tener paciencia y fidelidad (v. 8-10)',
                'Este mandamiento dado a ella es dado "a la Iglesia" (v. 16) — tiene alcance universal',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'El llamamiento de apoyo — no sumisión pasiva',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 25:5',
              text: 'Y también te designo ser traductora y escribiente para mi siervo José Smith, hijo, y que asistieses a él en la transcripción de las traducciones, sí, y que seas consoladora y apoyo para él constantemente.',
            },
            {
              type: 'paragraph',
              text: 'El versículo 5 lista los roles de Emma en este orden: traductora, escribiente, consoladora, apoyo. No es una lista de tareas domésticas — es una lista de ministerios. "Consoladora" (en inglés original "comforter") es el mismo término usado para el Espíritu Santo como Consolador. "Apoyo" (helpmeet en génesis, pero aquí usado como "asistente activo") implica participación, no pasividad. Emma no era el decorado del profeta — era su colaboradora ungida por revelación.',
            },
            {
              type: 'paragraph',
              text: 'El idioma de la revelación también es notable: Dios no le dice a Emma lo que José Smith quiere de ella — Dios le habla directamente, en primera persona, del Señor Jesucristo a Emma. Esta distinción importa: Emma recibe su llamamiento de Dios, no de su esposo. Es una revelación personal, no una instrucción conyugal.',
            },
            {
              type: 'dialogue',
              title: 'La diferencia entre instrucción marital y revelación divina',
              lines: [
                { speaker: 'Un lector', side: 'left', text: '¿No es DyC 25 simplemente José diciéndole a Emma lo que tiene que hacer como esposa?' },
                { speaker: 'El texto', side: 'right', text: 'No. El versículo 1 identifica al que habla: "el Señor tu Dios." José recibió la revelación, pero el que habla a Emma es Jesucristo. Es una revelación dada por el profeta, pero dirigida directamente a Emma como individuo ante Dios.' },
                { speaker: 'Un lector', side: 'left', text: '¿Y qué diferencia hace eso en la práctica?' },
                { speaker: 'El texto', side: 'right', text: 'Toda la diferencia: significa que el llamamiento de Emma no depende de José. Su identidad como "mujer elect de Dios" es anterior a y separable de su rol como esposa del profeta. Dios la ve, la llama, y le habla — a ella.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Himnario y el Cántico del Corazón',
      intro: {
        romanNumeral: 'III',
        title: 'La Primera Tarea Formal de Emma',
        paragraphs: [
          'Dios encargó a Emma recopilar los himnos de la Iglesia. No fue un proyecto casual — fue un llamamiento divino con consecuencias que duran hasta hoy.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El mandamiento del himnario',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 25:11-12',
              text: 'Y también te designo la selección de himnos sagrados como el Señor te enseñe; y el cántico de los justos es una oración para mí, y será contestado con una bendición sobre sus cabezas. Por tanto, levántate y exhórtate a tu marido, y exhórtalos a todos para que se fortalezcan y que su corazón se regocije siempre, y que sus mentes formen parte de la alabanza que se envía al cielo como incienso ante Jehová.',
            },
            {
              type: 'paragraph',
              text: 'El versículo 12 contiene una de las teologías de la música más poderosas de toda la escritura moderna: "el cántico de los justos es una oración para mí." No simplemente preparación para la oración, no simplemente adoración — es oración en sí misma. Y como toda oración sincera, "será contestado con una bendición sobre sus cabezas." La música no es relleno litúrgico. Es comunicación directa con el cielo.',
            },
            {
              type: 'doctrine_box',
              title: 'La Teología de la Música como Oración',
              body: 'En la tradición judía antigua, los cánticos del Templo (los Salmos) eran considerados formas de comunicación divina — no solo expresión humana sino intercambio con Dios. La Restauración retoma este entendimiento: el himno cantado con corazón justo sube ante Dios como incienso — imagen tomada de Apocalipsis 8:3-4 donde las oraciones de los santos suben ante el trono. Emma fue comisionada como guardiana de esta tradición para la Iglesia restaurada.',
            },
            {
              type: 'reflection',
              prompt: '¿Cuándo fue la última vez que cantaste un himno como una oración — no como un ritual previo al sacramento, sino como comunicación real con Dios? ¿Qué cambia en tu experiencia del culto si tratas el himno como oración?',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El himnario de 1835 — el producto del llamamiento',
          blocks: [
            {
              type: 'paragraph',
              text: 'Emma cumplió su llamamiento. En 1835, publicó el primer himnario de La Iglesia de Jesucristo de los Santos de los Últimos Días, con 90 himnos. Muchos provenían de tradiciones protestantes que Emma conocía bien; algunos eran composiciones originales de miembros de la Iglesia. Emma seleccionó personalmente cada uno — "como el Señor te enseñe," dice la revelación. Fue un proceso de discernimiento espiritual, no solo de compilación literaria.',
            },
            {
              type: 'key_points',
              title: 'El legado del himnario de Emma',
              points: [
                'Primer himnario publicado de la Iglesia — 1835',
                '90 himnos seleccionados bajo guía espiritual personal',
                'Estableció el patrón de música congregacional en la Iglesia restaurada',
                'Muchos himnos que usamos hoy tienen raíces en esa primera selección',
                'La revisión de himnos en curso (2024-2025) sigue el mandamiento de DyC 25',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Lo que DyC 25 Enseña sobre el Llamamiento de las Mujeres',
      intro: {
        romanNumeral: 'IV',
        title: 'Una Revelación con Alcance Universal',
        paragraphs: [
          'El versículo final de DyC 25 extiende el alcance de la revelación más allá de Emma: "Y este mandamiento se da a mis hijos como una ley para todos."',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'De Emma a todas las mujeres de la Iglesia',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 25:16',
              text: 'Y este mandamiento se da a mis hijos como una ley para todos; y en él hallarán que estoy con ustedes, y que tengo misericordia de ustedes; por tanto, permanezcan en mi paz, hasta que vengan ante mí. Así lo ordena el Señor.',
            },
            {
              type: 'paragraph',
              text: 'La universalización del versículo 16 es teológicamente significativa: lo que fue dicho a Emma no es solo para ella. Los principios de su llamamiento — ser apoyo y consuelo, aprender las escrituras, mantener la paz, regocijarse en el Señor — se convierten en principios para todos los miembros. Pero en el contexto de la Restauración, esta revelación tiene un significado especial para las mujeres: demuestra que Dios conoce a las mujeres por nombre y les habla directamente.',
            },
            {
              type: 'leader_quote',
              quote: 'Emma Smith fue una mujer de extraordinaria fortaleza y fe. Dios la llamó por nombre, le dio un llamamiento específico y le habló directamente. Eso no es una nota al pie de la historia — es el corazón de cómo Dios trabaja con sus hijos, incluidas sus hijas.',
              name: 'Élder Jeffrey R. Holland',
              role: 'Quórum de los Doce Apóstoles',
            },
            {
              type: 'compare_grid',
              title: 'Emma en DyC 25 — Llamada como individuo, no solo como esposa',
              left: {
                label: 'Lo que podría esperarse (rol conyugal)',
                points: [
                  'Apoyar a José en su trabajo',
                  'Mantener el hogar y la familia',
                  'Seguir al profeta sin cuestionamiento',
                  'Ser discreta y silenciosa',
                ],
              },
              right: {
                label: 'Lo que DyC 25 realmente dice (llamamiento personal)',
                points: [
                  'Llamada por Dios directamente — no por José',
                  'Recibe perdón personal de sus pecados (v. 3)',
                  'Tiene llamamiento formal: compilar himnos (v. 11)',
                  'Debe aprender, estudiar las escrituras (v. 8)',
                  'Es "mujer elect de Dios" — título doctrinal, no conyugal',
                ],
              },
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué parte de DyC 25 te habla más directamente, independientemente de que hayas sido llamado o llamada como Emma?' },
                { id: 'p2', question: '¿Cómo entiendes tu propio llamamiento personal ante Dios — más allá de tus roles familiares o eclesiales?' },
                { id: 'p3', question: '¿Qué significa para ti que "el cántico de los justos es una oración"? ¿Cambia esto cómo participas en los himnos de la Iglesia?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
