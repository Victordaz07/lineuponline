import type { Lesson } from '@/types/doctrine'

export const rut: Lesson = {
  id: 'rut',
  moduleId: 'personajes-escrituras',
  title: 'Rut — La Extranjera que Eligió a Israel',
  subtitle: '"Tu pueblo será mi pueblo y tu Dios mi Dios"',
  description: 'Rut era moabita — extranjera, viuda, sin status. Eligió quedarse con su suegra Noemí cuando toda lógica le decía que volviera a casa. Su lealtad (hesed) la convirtió en ancestro del rey David y de Jesucristo. El libro más corto del AT enseña más sobre el carácter de Dios que muchos libros más largos.',
  level: 'INTERMEDIO',
  icon: '🌾',
  duration: 55,
  order: 61,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Elección en el Camino',
      intro: { romanNumeral: 'I', title: 'Rut 1 — "No Me Ruegues que te Deje"', paragraphs: ['La declaración de lealtad más bella de las Escrituras'] },
      topics: [
        {
          id: 't1',
          title: 'Elegir cuando no hay obligación',
          blocks: [
            { type: 'paragraph', text: 'El escenario inicial de Rut es pura pérdida: Noemí enviudó en tierra extranjera con dos nueras moabitas. Cuando decidió regresar a Belén, les dijo que se fueran a casa de sus madres. Orfa, la otra nuera, lloró y se fue. Rut se negó. No había ninguna obligación legal o moral que la retuviera — el matrimonio con el hijo de Noemí había terminado con la muerte del esposo. Rut eligió quedarse por amor y lealtad puros.' },
            { type: 'highlight_verse', reference: 'Rut 1:16-17', text: 'Respondió Rut: No me ruegues que te deje, y me aparte de ti; porque a dondequiera que tú fueres, iré yo, y dondequiera que vivieres, viviré. Tu pueblo será mi pueblo, y tu Dios mi Dios. Donde tú murieres, moriré yo, y allí seré sepultada.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Hesed — La Lealtad Inmerecida',
      intro: { romanNumeral: 'II', title: 'La palabra más importante del libro', paragraphs: ['El amor que no cede ante la circunstancia'] },
      topics: [
        {
          id: 't2',
          title: 'La teología del hesed',
          blocks: [
            { type: 'paragraph', text: 'La palabra hebrea hesed aparece tres veces en el libro de Rut y es la clave teológica. Generalmente traducida como "misericordia" o "bondad amorosa," significa fidelidad de alianza que va más allá de la obligación — lealtad que se mantiene cuando no tiene que mantenerse. Booz lo dice de Rut (2:20), Noemí lo dice de Dios (1:8), y Booz lo dice de nuevo al final (3:10). El hesed de Rut refleja el hesed de Dios: fidelidad que trasciende circunstancias y obligaciones.' },
            { type: 'doctrine_box', title: 'Una Extranjera en la Genealogía de Cristo', body: 'Mateo 1 enumera la genealogía de Jesucristo. Menciona solo cinco mujeres: Tamar, Rahab, Rut, la mujer de Urías (Betsabé), y María. Las cinco tienen historias complicadas. Rut era moabita — de una nación que la ley prohibía que entrara a la congregación de Israel hasta la décima generación (Deuteronomio 23:3). Sin embargo, Dios la puso directamente en la línea genealógica del Salvador. La gracia no opera dentro de los límites étnicos o jurídicos.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Booz — El Redentor',
      intro: { romanNumeral: 'III', title: 'Rut 2-4 — El Pariente Redentor', paragraphs: ['El tipo de Cristo más claro del AT'] },
      topics: [
        {
          id: 't3',
          title: 'El go\'el y la redención',
          blocks: [
            { type: 'highlight_verse', reference: 'Rut 4:9-10', text: 'Y Booz dijo a los ancianos y a todo el pueblo: Vosotros sois testigos hoy, de que he adquirido de mano de Noemí todo lo que fue de Elimelec, y todo lo que fue de Quelión y de Mahlón. Y que también tomo por mi mujer a Rut la moabita, mujer de Mahlón, para restaurar el nombre del difunto sobre su heredad.' },
            { type: 'paragraph', text: 'El concepto del go\'el (pariente redentor) en Rut es el tipo más claro de Cristo en todo el Antiguo Testamento. El go\'el era el familiar que tenía derecho y responsabilidad de rescatar a un pariente en crisis: redimir tierras vendidas por pobreza, casarse con la viuda para perpetuar el nombre del difunto. Booz hizo exactamente eso por Rut y Noemí. Cristo hace exactamente eso por la humanidad: nos redime cuando no podemos redirimirnos a nosotros mismos.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Noemí — La Amargura que Se Transformó',
      intro: { romanNumeral: 'IV', title: '"Llamadme Mara" — Amarga', paragraphs: ['Y cómo Dios transformó esa amargura'] },
      topics: [
        {
          id: 't4',
          title: 'La restauración de la desolada',
          blocks: [
            { type: 'paragraph', text: 'Noemí regresó a Belén diciéndole a la gente: "No me llaméis Noemí [agradable], sino llamadme Mara [amarga]; porque en grande amargura me ha puesto el Todopoderoso" (1:20). Había perdido a su esposo y sus dos hijos. Llegó con las manos vacías. Y Dios le devolvió un nieto — Obed, padre de Isaí, abuelo de David — por medio de la lealtad de una extranjera. La restauración de Noemí llegó a través del hesed de Rut. Así trabaja Dios frecuentemente: usa personas para restaurar a personas.' },
            { type: 'reflection', prompt: '¿Hay en tu vida un "Noemí" — alguien que está en Mara, en amargura — que podría ser tocado por tu lealtad (hesed)? ¿Y hay una "Rut" en tu historia — alguien cuya lealtad inesperada te rescató cuando estabas en tu Mara?' },
          ],
        },
      ],
    },
  ],
}
