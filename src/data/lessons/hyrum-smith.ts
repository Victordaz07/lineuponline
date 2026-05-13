import type { Lesson } from '@/types/doctrine'

export const hyrumSmith: Lesson = {
  id: 'hyrum-smith',
  moduleId: 'personajes-escrituras',
  title: 'Hyrum Smith — El Patriarca Fiel',
  subtitle: 'El hermano que murió junto al profeta',
  description: 'Hyrum Smith fue uno de los Ocho Testigos del Libro de Mormón. Fue Patriarca y segundo en el sacerdocio. Cuando José le advirtió del peligro de ir a Carthage, Hyrum insistió en acompañarlo. "Sería una cobardía de mi parte." Fue martirizado junto a su hermano. DyC 135 los llama "preciosos" ante Dios.',
  level: 'INTERMEDIO',
  icon: '🤝',
  duration: 50,
  order: 82,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Testigo del Libro de Mormón',
      intro: { romanNumeral: 'I', title: 'Hyrum entre los Ocho Testigos', paragraphs: ['La familia Smith en el corazón de la Restauración'] },
      topics: [
        {
          id: 't1',
          title: 'La familia que creyó primero',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Hyrum Smith fue uno de los Ocho Testigos que manejaron físicamente las planchas de oro. Su nombre aparece en la declaración que abre cada edición del Libro de Mormón. Antes que cualquier investigador externo, antes que cualquier converso, la familia Smith — Hyrum, Samuel, los padres — creyeron el testimonio de José. Hyrum fue el primero en creerle, según José, y su fe nunca vaciló a pesar de las pérdidas y persecuciones que siguieron.' },
            { type: 'highlight_verse', id: 'v1', reference: 'DyC 11:17', text: 'Y ahora os digo, Hyrum, busca obtener mi palabra, y luego, si tú lo deseas, tendrás el Espíritu Santo y el poder para traer la palabra mía a vuestro prójimo. Mas no trates de declarar mi palabra, sino que primeramente busca obtenerla.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Patriarca e Instructor',
      intro: { romanNumeral: 'II', title: 'El Segundo en el Sacerdocio', paragraphs: ['Consejero, Patriarca y sostén de su hermano'] },
      topics: [
        {
          id: 't2',
          title: 'La sombra que habilitó la luz',
          blocks: [
            { type: 'paragraph', id: 'p2', text: 'José Smith dijo de Hyrum: "Hyrum me es tan cercano como un compañero de alma... si yo fuera asesinado, Hyrum tomaría mi lugar." Hyrum sirvió como Primer Consejero de la Presidencia, luego como Patriarca de la Iglesia. DyC 124:124 le confiere el cargo de "Patriarca, para que sujete las bendiciones a los hijos de Israel" y "hablar la palabra de Dios con osadía." Su liderazgo fue el de quien sostiene sin brillar por sí mismo — virtud raramente reconocida y esencialmente necesaria.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Víspera de Carthage',
      intro: { romanNumeral: 'III', title: 'Junio de 1844 — La Elección de Quedarse', paragraphs: ['"Nunca he abandonado a mi hermano"'] },
      topics: [
        {
          id: 't3',
          title: 'El valor que eligió',
          blocks: [
            { type: 'paragraph', id: 'p3', text: 'Cuando José comunicó el peligro a Hyrum y le pidió que no lo acompañara a Carthage, Hyrum respondió: "Aunque me cueste la vida, sería una cobardía no acompañarte ahora." Había otras razones para que Hyrum se quedara — su esposa Mary esperaba un hijo, tenía hijos que cuidar. Eligió ir. Cuando la turba irrumpió, Hyrum fue alcanzado por cuatro balas. Sus últimas palabras registradas fueron: "Soy un hombre muerto." Murió antes que su hermano.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: '"Inocentes y Justos"',
      intro: { romanNumeral: 'IV', title: 'DyC 135 — El Obituario de los Mártires', paragraphs: ['El testimonio que sobrevive la muerte'] },
      topics: [
        {
          id: 't4',
          title: 'La sangre que testifica',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'DyC 135:6', text: 'Jamás cayó sangre del suelo de los EE.UU. que clamara más fuerte al cielo en testimonio contra aquel que la derramó que la sangre de Joseph y Hyrum Smith. Su muerte fue el mayor asesinato que jamás se cometió en América, y tendrá que rendir cuentas de él en el gran Día del Señor.' },
            { type: 'paragraph', id: 'p4', text: 'John Taylor, que presenció el martirio (y sobrevivió con cuatro balas), escribió DyC 135. La afirmación es directa y solemne: la muerte de los hermanos Smith fue martirismo genuino — un testimonio sellado con sangre. El texto dice: "Vivieron por su obra, y sus nombres jamás serán olvidados." Para los creyentes que los siguieron, no son figuras de la historia — son testigos cuyo testimonio está sellado de manera irrevocable.' },
            { type: 'reflection', id: 'r1', prompt: '¿Qué aspecto del carácter de Hyrum — la fidelidad que no abandona aunque cueste la vida — reconoces o desearías cultivar en tus relaciones más cercanas?' },
          ],
        },
      ],
    },
  ],
}
