import type { Lesson } from '@/types/doctrine'

export const oliverCowdery: Lesson = {
  id: 'oliver-cowdery',
  moduleId: 'personajes-escrituras',
  title: 'Oliver Cowdery — El Segundo Testigo',
  subtitle: 'Escriba, testigo y apóstol de la Restauración temprana',
  description: 'Oliver Cowdery fue el escriba principal del Libro de Mormón. Recibió el Sacerdocio Aarónico junto a José Smith directamente de Juan el Bautista. Fue uno de los Tres Testigos. Se apartó de la Iglesia durante años, y regresó antes de morir. Su historia es sobre la fe que se va y vuelve.',
  level: 'INTERMEDIO',
  icon: '✍️',
  duration: 55,
  order: 83,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Escriba del Libro de Mormón',
      intro: { romanNumeral: 'I', heading: 'Primavera-Verano de 1829 — La Traducción', subheading: 'El hombre que transcribió el libro sagrado' },
      topics: [
        {
          id: 't1',
          title: 'La velocidad que asombró a los testigos',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Oliver Cowdery llegó a casa de José Smith el 5 de abril de 1829 como nuevo maestro para los hijos de la familia. En dos días comenzó como escriba de la traducción. En aproximadamente 65 días de trabajo activo, Oliver transcribió la mayor parte del Libro de Mormón — cientos de páginas. DyC 9 registra que Oliver quiso traducir él mismo y recibió instrucción sobre cómo funciona la revelación: "Debes estudiarla en tu mente... entonces si es correcto, haré que tu pecho arda dentro de ti."' },
            { type: 'highlight_verse', id: 'v1', reference: 'DyC 6:22-23', text: 'Si acaso dudas de las cosas que te he dicho, acuérdate de la noche en que clamaste a mí en tu corazón para que entendieras las Escrituras, y te dije: ¿No he traído paz a tu mente concerniente a este asunto? ¿Cuál testimonio mayor puedes tener que el de Dios?' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Sacerdocio y los Tres Testigos',
      intro: { romanNumeral: 'II', heading: 'Mayo de 1829 — Juan el Bautista en el Río Susquehanna', subheading: 'Ordenado por un ser resucitado' },
      topics: [
        {
          id: 't2',
          title: 'El testigo que no podía negar',
          blocks: [
            { type: 'paragraph', id: 'p2', text: 'Oliver Cowdery recibió el Sacerdocio Aarónico junto a José Smith directamente de Juan el Bautista en mayo de 1829. Meses después, con Martín Harris y David Whitmer, fue uno de los Tres Testigos que vieron el ángel Moroni y las planchas. Su testimonio — que nunca negó aunque se alejó de la Iglesia durante años — declaró: "Hemos visto; y sabemos que si testificamos fielmente de estas cosas, el Señor nos salvará." Los Tres Testigos se apartaron de la Iglesia pero ninguno retiró su testimonio.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Apostasía y el Regreso',
      intro: { romanNumeral: 'III', heading: '1838-1848 — Fuera y Vuelto', subheading: 'El testigo que se fue y no pudo negar' },
      topics: [
        {
          id: 't3',
          title: 'El camino de regreso',
          blocks: [
            { type: 'paragraph', id: 'p3', text: 'Oliver Cowdery fue excomulgado en abril de 1838, en parte por disputas con el liderazgo de la Iglesia en Far West. Vivió como abogado en Ohio y Michigan durante diez años. En 1848, poco antes de morir, se rebautizó en la Iglesia. Cuando fue recibido en la congregación de Kanesville, Iowa, dijo a la asamblea: "Fui con Joseph cuando fue dado el sacerdocio... sé lo que sé; tengo ese conocimiento... y no puedo negar." La experiencia que lo convirtió era permanente aunque su membresía no lo había sido.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Muerte con Fe',
      intro: { romanNumeral: 'IV', heading: 'Marzo de 1850 — El Testimonio Final', subheading: 'Murió como testigo' },
      topics: [
        {
          id: 't4',
          title: 'El testimonio que sobrevivió al alejamiento',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'DyC 8:2-3', text: 'Sí, yo os lo diré en vuestra mente y en vuestro corazón, por el Espíritu Santo, que vendrá sobre vosotros y que morará en vuestro corazón... Ahora, he aquí, esta es la voz del Espíritu.' },
            { type: 'paragraph', id: 'p4', text: 'Oliver Cowdery murió el 3 de marzo de 1850, antes de poder unirse a los Santos en Utah. Sus últimas palabras, según su cuñado Phineas Young: "El mundo no puede recibir estas cosas; pero las he visto yo y por eso las testifico y muero con ese testimonio en mis labios." Un hombre que se había alejado de la Iglesia, que había tenido conflictos con el profeta, que vivió fuera de la membresía durante una década — murió con el testimonio que había recibido en el río Susquehanna.' },
            { type: 'reflection', id: 'r1', prompt: '¿Qué te enseña la historia de Oliver sobre los testimonios que se obtienen por experiencia directa y cómo resisten incluso períodos de alejamiento o desacuerdo? ¿Hay un testimonio tuyo que has recibido y que podría sostenerte en un período de duda o desacuerdo?' },
          ],
        },
      ],
    },
  ],
}
