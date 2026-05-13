import type { Lesson } from '@/types/doctrine'

export const joseSmith: Lesson = {
  id: 'jose-smith',
  moduleId: 'personajes-escrituras',
  title: 'José Smith — El Profeta de la Restauración',
  subtitle: 'El joven de 14 años que vio al Padre y al Hijo',
  description: 'José Smith vio al Padre y al Hijo a los 14 años. Tradujo el Libro de Mormón. Restauró el sacerdocio. Organizó la Iglesia. Recibió el Libro de Doctrina y Convenios. Construyó el templo de Kirtland. Fue martirizado a los 38 años. En 14 años de ministerio, la Restauración alcanzó proporciones que ninguna reforma anterior había logrado.',
  level: 'INTERMEDIO',
  icon: '🌟',
  duration: 75,
  order: 80,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Primera Visión',
      intro: { romanNumeral: 'I', heading: 'Primavera de 1820 — La Arboleda Sagrada', subheading: 'La visión más importante desde la Ascensión de Cristo' },
      topics: [
        {
          id: 't1',
          title: 'Un adolescente con una pregunta real',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Santiago 1:5 — que José Smith leyó y que le dijo que si carecía de sabiduría pidiera a Dios — no fue la génesis de un acto religioso casual. Fue la chispa que encendió una búsqueda real de un adolescente que había visto a su familia dividida por denominaciones en competencia, que escuchaba predicadores y no podía reconciliar sus contradicciones. La pregunta que llevó al bosque no fue teológica abstracta — fue: "¿Cuál de todas estas iglesias es verdadera?"' },
            { type: 'highlight_verse', id: 'v1', reference: 'José Smith — Historia 1:17', text: 'Vi dos Personajes, cuyo brillo y gloria desafían toda descripción, quienes estaban de pie sobre mí en el aire. Uno de ellos me habló, llamándome por mi nombre, y dijo, señalando al otro: Este es mi Hijo Amado. ¡Escúchale!' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Libro de Mormón y la Traducción',
      intro: { romanNumeral: 'II', heading: '1827-1830 — De las Planchas al Libro', subheading: 'El instrumento central de la Restauración' },
      topics: [
        {
          id: 't2',
          title: 'La obra más prodigiosa de la Restauración',
          blocks: [
            { type: 'paragraph', id: 'p2', text: 'José Smith obtuvo las planchas en septiembre de 1827. Perdió las 116 páginas con Martín Harris en 1828 — error costoso. Retomó la traducción con Oliver Cowdery en 1829. Publicó el Libro de Mormón el 26 de marzo de 1830, cinco días antes de organizar la Iglesia. La velocidad de la traducción — aproximadamente 65 días de trabajo activo para 531 páginas — desafía la explicación natural. Los testigos del proceso describieron a José dictando sin notas, sin pausas editoriales.' },
            { type: 'doctrine_box', id: 'db1', title: 'El Problema Histórico de José Smith', content: 'Los críticos durante dos siglos han intentado explicar el Libro de Mormón como producto natural de José Smith — inspirado en libros de la época, en teorías sobre indígenas americanos, en fragmentos de la Biblia. Ninguna teoría ha podido dar cuenta de la coherencia interna del texto, la complejidad de su estructura narrativa, y los detalles que investigaciones arqueológicas y textuales del siglo XX han confirmado (quiasmo, nombres hebreos, elementos del Cercano Oriente antiguo).' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Revelaciones Restauradoras',
      intro: { romanNumeral: 'III', heading: 'Doctrina y Convenios — La Voz Directa de Cristo', subheading: 'Revelación continua como principio central' },
      topics: [
        {
          id: 't3',
          title: 'El cuerpo doctrinal de la Restauración',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'DyC 1:38', text: 'Lo que yo el Señor he hablado, lo he hablado, y no me excuso; y aunque los cielos y la tierra pasen, mi palabra no pasará, sino que todos serán cumplidos, ya sea por mi propia voz o por la voz de mis siervos, es lo mismo.' },
            { type: 'paragraph', id: 'p3', text: 'Entre 1831 y 1844, José Smith recibió más de 130 revelaciones registradas en DyC. Las doctrinas restauradas incluyen: la naturaleza corporal de Dios (1820), las tres glorias (1832), las ordenanzas del templo (1836-1844), el bautismo por los muertos (1840-41), el matrimonio celestial (1843), la preexistencia, la deificación, la organización del sacerdocio. Ninguna revelación de esta magnitud doctrinal había sido registrada desde la muerte de los apóstoles originales.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Martirio',
      intro: { romanNumeral: 'IV', heading: '27 de Junio de 1844 — Carthage', subheading: '"Ningún hombre conoce mi historia"' },
      topics: [
        {
          id: 't4',
          title: 'El testimonio sellado con sangre',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'José Smith fue asesinado en la cárcel de Carthage, Illinois, el 27 de junio de 1844. Tenía 38 años. Sus últimas palabras registradas fueron "¡Oh Señor, mi Dios!" — posiblemente el signo de socorro de la masonería que pensó sería respetado por la turba. DyC 135:3: "José Smith, el Profeta y Vidente del Señor, ha hecho más salvo Jesús, para la salvación de los hombres en este mundo, que cualquier otro hombre que jamás haya vivido en él." Esta es la afirmación más audaz de la Restauración — y la que requiere o creerla o rechazarla totalmente.' },
            { type: 'reflection', id: 'r1', prompt: '¿Cuál es la revelación o doctrina de José Smith que más ha transformado tu comprensión de Dios y de tu relación con él? ¿Cuál encuentras más difícil de integrar y por qué?' },
          ],
        },
      ],
    },
  ],
}
