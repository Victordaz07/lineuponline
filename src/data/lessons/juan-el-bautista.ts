import type { Lesson } from '@/types/doctrine'

export const juanElBautista: Lesson = {
  id: 'juan-el-bautista',
  moduleId: 'personajes-escrituras',
  title: 'Juan el Bautista — La Voz en el Desierto',
  subtitle: 'El último profeta del AT y el primero del NT',
  description: 'Juan nació de una madre estéril para ser el precursor de Cristo. Bautizó al Hijo de Dios en el Jordán. Jesús dijo que entre los nacidos de mujer no había habido mayor. Y en mayo de 1829, Juan restauró el Sacerdocio Aarónico a José Smith.',
  level: 'INTERMEDIO',
  icon: '🌊',
  duration: 60,
  order: 52,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Nacido para Este Momento',
      intro: { romanNumeral: 'I', title: 'Lucas 1 — El Precursor Anunciado', paragraphs: ['Gabriel, Zacarías, y el niño que saltó en el vientre'] },
      topics: [
        {
          id: 't1',
          title: 'La misión antes del nacimiento',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Gabriel anunció a Zacarías que su hijo anciana e infértil esposa Isabel concebiría. El niño "será grande delante de Dios" y "irá delante de él con el espíritu y el poder de Elías, para hacer volver los corazones de los padres a los hijos" (Lucas 1:15,17). Cuando María visitó a Isabel embarazada de Jesús, el bebé Juan saltó en el vientre de su madre — reconociendo al Señor antes de nacer. Juan fue ordenado para su misión en el mundo preterrenal.' },
            { type: 'highlight_verse', id: 'v1', reference: 'Lucas 1:76-77', text: 'Y tú, niño, profeta del Altísimo serás llamado; porque irás delante de la presencia del Señor, para preparar sus caminos; para dar conocimiento de salvación a su pueblo, para perdón de sus pecados.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Bautismo de Jesús',
      intro: { romanNumeral: 'II', title: 'Mateo 3 — En el Jordán', paragraphs: ['El momento en que la Trinidad se manifestó simultáneamente'] },
      topics: [
        {
          id: 't2',
          title: 'Por qué Juan dudó',
          blocks: [
            { type: 'paragraph', id: 'p2', text: 'Cuando Jesús llegó para ser bautizado, Juan protestó: "Yo necesito ser bautizado por ti, ¿y tú vienes a mí?" (Mateo 3:14). Juan reconocía la superioridad absoluta de Cristo. La respuesta de Jesús es teológicamente crucial: "Así conviene que cumplamos toda justicia." El bautismo no era para remisión de pecados en el caso de Cristo — era para "cumplir toda justicia" y establecer el ejemplo perfecto del pacto bautismal.' },
            { type: 'doctrine_box', id: 'db1', title: 'La Trinidad en el Jordán', body: 'Mateo 3:16-17 describe el momento más revelador sobre la naturaleza de la Divinidad en toda la Biblia: el Hijo siendo bautizado en el agua, el Espíritu descendiendo visiblemente en forma de paloma, y el Padre hablando desde los cielos. Tres personas separadas, simultáneamente presentes, cada una en su lugar. La Restauración enseña que este texto es evidencia directa contra el Credo de Nicea.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Entre los Nacidos de Mujer',
      intro: { romanNumeral: 'III', title: '"No ha Levantado Mayor"', paragraphs: ['Mateo 11 — el juicio de Cristo sobre Juan'] },
      topics: [
        {
          id: 't3',
          title: 'El elogio más alto de Jesús',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Mateo 11:11', text: 'De cierto os digo: Entre los que nacen de mujer no se ha levantado otro mayor que Juan el Bautista; pero el más pequeño en el reino de los cielos, mayor es que él.' },
            { type: 'paragraph', id: 'p3', text: 'Cristo pronunció este elogio cuando Juan, preso, envió mensajeros preguntando: "¿Eres tú el que había de venir?" — una pregunta que expresa la oscuridad espiritual que puede invadir incluso al más grande. Jesús lo llama el mayor pero también señala que quien está en el reino tiene más que él: Juan pertenece al último capítulo del Antiguo Pacto, no al primero del Nuevo. Su grandeza es el punto culminante de una era que terminó.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Sacerdocio Aarónico Restaurado',
      intro: { romanNumeral: 'IV', title: 'Mayo de 1829 — A Orillas del Río Susquehanna', paragraphs: ['Juan impuso las manos sobre José Smith y Oliver Cowdery'] },
      topics: [
        {
          id: 't4',
          title: 'La restauración de las llaves',
          blocks: [
            { type: 'highlight_verse', id: 'v3', reference: 'DyC 13:1', text: 'Sobre vosotros, mis consiervos, en nombre del Mesías, yo confiero el Sacerdocio de Aarón, el cual tiene las llaves del ministerio de ángeles, y del evangelio del arrepentimiento, y del bautismo por inmersión para la remisión de los pecados.' },
            { type: 'paragraph', id: 'p4', text: 'Juan el Bautista — resucitado, glorificado — descendió el 15 de mayo de 1829 y ordenó a José Smith y Oliver Cowdery al Sacerdocio Aarónico. Le dijo que le había sido conferida esta autoridad por Pedro, Santiago y Juan. La persona que bautizó a Cristo fue la misma que restauró la autoridad del bautismo en la dispensación final. La cadena de autoridad es directa y específica.' },
            { type: 'reflection', id: 'r1', prompt: '¿Qué significa para ti el hecho de que Juan el Bautista, el mismo que bautizó a Jesús, sea el eslabón que conecta tu bautismo con el de Cristo? ¿Cómo cambia eso la manera en que ves tu propio bautismo?' },
          ],
        },
      ],
    },
  ],
}
