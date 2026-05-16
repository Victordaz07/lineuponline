import type { Lesson } from '@/types/doctrine'

export const jeremias: Lesson = {
  id: 'jeremias',
  moduleId: 'personajes-escrituras',
  title: 'Jeremías — El Profeta que Lloró',
  subtitle: 'Maldijo el día en que nació, y nunca paró de profetizar',
  description: 'Jeremías profetizó durante 40 años y no convirtió a nadie. Fue golpeado, encerrado en un pozo de barro, y vio Jerusalén arder. Sus Lamentaciones son el dolor más puro de las Escrituras. Y en medio de todo, profetizó la restauración.',
  level: 'INTERMEDIO',
  icon: '😭',
  duration: 65,
  order: 43,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Profeta antes de Nacer',
      intro: { romanNumeral: 'I', title: '"Antes que te Formara en el Vientre, Te Conocí"', paragraphs: ['Jeremías 1 — la preordenación más explícita del AT'] },
      topics: [
        {
          id: 't1',
          title: 'La preexistencia en el AT',
          blocks: [
            { type: 'highlight_verse', reference: 'Jeremías 1:5', text: 'Antes que te formase en el vientre te conocí, y antes que nacieses te santifiqué, te di por profeta a las naciones.' },
            { type: 'paragraph', text: 'Este versículo es la declaración más clara de la preexistencia en el Antiguo Testamento canónico. "Te conocí" en hebreo (yadaati) implica conocimiento íntimo y personal, no solo conocimiento de posibilidad. Jeremías fue conocido, santificado y designado profeta ANTES de nacer. La Restauración enseña que esto es universal — cada persona fue conocida por Dios antes de nacer — pero Jeremías es la demostración bíblica más explícita.' },
            { type: 'paragraph', text: 'La respuesta de Jeremías al llamamiento fue idéntica a la de Moisés: "¡Ah! ¡Señor Jehová! He aquí, no sé hablar, porque soy niño." Dios respondió exactamente igual: "No digas soy un niño; porque a todo lo que te envíe irás tú, y dirás todo lo que te mande." El patrón del llamamiento profético es consistente: inseguridad, comisión divina directa, promesa de asistencia.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Profeta Sin Auditorio',
      intro: { romanNumeral: 'II', title: '40 Años, Cero Conversiones', paragraphs: ['El ministerio más solitario de la historia'] },
      topics: [
        {
          id: 't2',
          title: 'Predicar sin resultado visible',
          blocks: [
            { type: 'paragraph', text: 'Jeremías profetizó desde el año 13 del rey Josías (627 a.C.) hasta después de la destrucción de Jerusalén (586 a.C.) — más de 40 años. En ese tiempo fue golpeado y puesto en cepo por el sacerdote Pasur (Jeremías 20), metido en un pozo de barro (Jeremías 38), constantemente amenazado de muerte, rechazado por su propia familia de Anatot (Jeremías 11:21), y prohibido de predicar en el templo. Nunca le está bien.' },
            { type: 'doctrine_box', title: 'Las "Confesiones" de Jeremías', body: 'A diferencia de otros profetas, Jeremías lleva un diario emocional de su sufrimiento: Jeremías 12:1 ("¿Por qué prospera el camino de los impíos?"), 15:10 ("¡Ay de mí, madre mía, que me engendraste!"), 20:7 ("Me sedujiste, oh Jehová, y fui seducido"), 20:14-18 (maldice el día de su nacimiento). La Biblia conserva estas quejas honestamente — Dios no las borró del registro.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Nuevo Pacto — Jeremías 31',
      intro: { romanNumeral: 'III', title: 'La Profecía del Evangelio', paragraphs: ['La promesa que Cristo cumplió en la última cena'] },
      topics: [
        {
          id: 't3',
          title: 'La ley escrita en el corazón',
          blocks: [
            { type: 'highlight_verse', reference: 'Jeremías 31:31-33', text: 'He aquí que vienen días, dice Jehová, en los cuales haré nuevo pacto con la casa de Israel y con la casa de Judá... Pero este es el pacto que haré con la casa de Israel después de aquellos días, dice Jehová: Daré mi ley en su mente, y la escribiré en su corazón; y yo seré a ellos por Dios, y ellos me serán por pueblo.' },
            { type: 'paragraph', text: 'Este pasaje es el único lugar del AT donde aparece la frase "nuevo pacto" (berit hadashah). Hebreos 8:7-13 lo cita extensamente para argumentar que Cristo cumplió y reemplazó la ley de Moisés. En la última cena, Cristo tomó la copa y dijo: "Esta copa es el nuevo pacto en mi sangre" — usando deliberadamente el lenguaje de Jeremías 31. El profeta más fracasado en términos de resultados visibles profetizó el pacto más importante de la historia.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Las Lamentaciones — El Dolor más Puro',
      intro: { romanNumeral: 'IV', title: 'Llora y Llora en la Noche', paragraphs: ['Lamentaciones 3 — encontrar esperanza en la ceniza'] },
      topics: [
        {
          id: 't4',
          title: 'La esperanza en la desolación',
          blocks: [
            { type: 'highlight_verse', reference: 'Lamentaciones 3:22-23', text: 'Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad.' },
            { type: 'paragraph', text: 'Lamentaciones 3:22-23 es uno de los textos más citados de la Biblia para la esperanza. Lo sorprendente es el contexto: Jeremías lo escribió en medio de las ruinas de Jerusalén, rodeado de cadáveres, habiendo visto destruido todo lo que amaba. La esperanza bíblica no es ciega al dolor — nace en él. "Grande es tu fidelidad" no es un slogan de prosperidad sino la declaración de un hombre en las ruinas que aun así encuentra razones para confiar en Dios.' },
            { type: 'reflection', prompt: '¿Ha habido en tu vida un período de "Lamentaciones" — donde sentiste que todo colapsó? ¿Qué encontraste en medio de ese período que, como Jeremías 3:22-23, fue inesperadamente esperanzador?' },
          ],
        },
      ],
    },
  ],
}
