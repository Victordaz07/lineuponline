import type { Lesson } from '@/types/doctrine'

export const pabloLaTeologia: Lesson = {
  id: 'pablo-la-teologia',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'pablo',
  title: 'La Teología de Pablo',
  subtitle: 'Gracia, cuerpo, amor, resurrección — el sistema doctrinal que formó el mundo cristiano',
  description:
    'Las cartas de Pablo forman la columna vertebral doctrinal del Nuevo Testamento. Justificación por fe, el cuerpo de Cristo, el himno a la caridad, la resurrección de los muertos, el bautismo por los muertos: ningún escritor bíblico construyó un sistema teológico tan completo ni tan influyente.',
  level: 'AVANZADO',
  icon: '📚',
  duration: 35,
  order: 5113,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Justificación por Fe',
      intro: {
        romanNumeral: 'I',
        title: 'Romanos y Gálatas — La Doctrina que Detonó la Reforma',
        paragraphs: [
          'La doctrina central de Pablo es que el ser humano no puede ganar la salvación mediante la observancia de la ley. La salvación es un don de la gracia de Dios recibido mediante la fe. Esta idea sola bastaría para hacer a Pablo el teólogo más influyente de la historia.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Romanos 3 — la condición universal',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Romanos 3:23-24',
              text: 'Por cuanto todos pecaron, y están destituidos de la gloria de Dios, siendo justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús.',
            },
            {
              type: 'paragraph',
              text: 'El argumento de Romanos 1-3 establece que tanto judíos como gentiles están bajo juicio: los gentiles por la luz de la conciencia y la creación (Romanos 1:20), los judíos por haber recibido la ley y haberla incumplido (Romanos 2:17-24). La conclusión de Romanos 3:23 es demoledora en su igualdad: "todos pecaron." No hay excepción. La justificación no puede venir de la ley porque nadie la ha guardado perfectamente.',
            },
            {
              type: 'highlight_verse',
              reference: 'Gálatas 2:16',
              text: 'Sabiendo que el hombre no es justificado por las obras de la ley, sino por la fe de Jesucristo, nosotros también hemos creído en Jesucristo, para ser justificados por la fe de Cristo y no por las obras de la ley, por cuanto por las obras de la ley nadie será justificado.',
            },
            {
              type: 'deep_dive',
              title: 'Justificación: el término técnico legal de Pablo',
              paragraphs: [
                'La palabra griega dikaiōsis (justificación) proviene del lenguaje judicial. Ser "justificado" es ser declarado justo por un tribunal. Pablo usa esta metáfora para decir que Dios, el juez supremo, nos declara justos no porque lo seamos de hecho, sino porque Cristo tomó nuestra condena sobre sí.',
                'La tensión entre la justicia de Dios (que no puede ignorar el pecado) y la misericordia de Dios (que desea salvar al pecador) se resuelve en la expiación: Cristo satisface las demandas de la justicia, y la gracia puede fluir libremente. Romanos 3:26 lo formula: Dios es "el justo, y el que justifica al que es de la fe de Jesús."',
                'La Restauración no rechaza esta teología sino que la ubica en su contexto completo: la gracia que justifica es la misma que demanda ordenanzas, convenios y obediencia. 2 Nefi 25:23 no contradice a Pablo — añade la perspectiva de la obediencia como respuesta a la gracia, no como precio de ella.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Cuerpo de Cristo',
      intro: {
        romanNumeral: 'II',
        title: '1 Corintios 12 — La Eclesiología Orgánica',
        paragraphs: [
          'La metáfora del cuerpo que Pablo usa para describir la Iglesia es la más influyente de toda la teología cristiana. Define la relación entre los dones espirituales, los ministerios y la unidad.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Dones, ministerios y la unidad del cuerpo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Corintios 12:27-28',
              text: 'Vosotros, pues, sois el cuerpo de Cristo, y miembros cada uno en particular. Y a unos puso Dios en la iglesia, primeramente apóstoles, luego profetas, lo tercero maestros, luego los que hacen milagros, después los que sanan, los que ayudan, los que administran, los que tienen don de lenguas.',
            },
            {
              type: 'paragraph',
              text: 'La lista de 1 Corintios 12:28 tiene un orden deliberado: primero los apóstoles, luego los profetas. Efesios 2:20 complementa: la Iglesia está "edificada sobre el fundamento de los apóstoles y profetas, siendo la principal piedra del ángulo Jesucristo mismo." Esta estructura no es opcional o cultural — Pablo la presenta como la forma en que Dios organizó la Iglesia. Cuando esta estructura desapareció históricamente, la unidad que garantizaba también desapareció.',
            },
            {
              type: 'compare_grid',
              title: 'El cuerpo y sus miembros — 1 Corintios 12',
              left: {
                title: 'El problema en Corinto',
                items: [
                  'Competencia por los dones espectaculares',
                  'El don de lenguas valorado sobre todos',
                  'Divisiones entre grupos de creyentes',
                  'Menosprecio de los dones "menores"',
                ],
              },
              right: {
                title: 'La respuesta de Pablo',
                items: [
                  'Todos los dones vienen del mismo Espíritu',
                  'El cuerpo necesita todos sus miembros',
                  'El miembro menos visible es indispensable',
                  'La unidad supera la uniformidad',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Himno a la Caridad',
      intro: {
        romanNumeral: 'III',
        title: '1 Corintios 13 — El Capítulo Más Leído de Pablo',
        paragraphs: [
          '1 Corintios 13 es el texto más citado de Pablo en bodas, funerales y discursos de graduación. También es el texto más malinterpretado: Pablo lo escribió para corregir el orgullo de los carismáticos, no para definir el amor romántico.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El contexto polémico del himno',
          blocks: [
            {
              type: 'paragraph',
              text: 'El capítulo 13 está emparedado entre los capítulos 12 y 14, que tratan sobre los dones espirituales — específicamente el don de lenguas. Pablo acaba de decir que todos los dones son necesarios pero que no todos tienen todos los dones. Ahora dice: hay algo que todos necesitan y que supera todos los dones. No el amor romántico — el ágape, el amor incondicional que imita el amor de Dios. Un don de lenguas sin ágape es "metal que resuena, o címbalo que retiñe."',
            },
            {
              type: 'highlight_verse',
              reference: '1 Corintios 13:4-8',
              text: 'El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor; no se goza de la injusticia, mas se goza de la verdad. Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta. El amor nunca deja de ser.',
            },
            {
              type: 'doctrine_box',
              title: 'Moroni 7:45 y 1 Corintios 13',
              body: 'Moroni 7:45 reproduce casi verbatim la lista de cualidades del ágape de 1 Corintios 13:4-7. Esto no es accidental — el Libro de Mormón afirma citar la misma enseñanza que los discípulos de Cristo recibieron. La caridad es "el amor puro de Cristo" (Moroni 7:47), que en el lenguaje de Pablo es el ágape — el amor que imita el carácter de Dios, no el amor sentimental que el mundo llama amor.',
            },
            {
              type: 'reflection',
              prompt: 'Lee la lista de 1 Corintios 13:4-7 sustituyendo "el amor" por tu propio nombre. ¿Cuál de las características describe mejor tu relación actual con tu familia, tu quórum o tu barrio? ¿Cuál necesita más trabajo?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Resurrección',
      intro: {
        romanNumeral: 'IV',
        title: '1 Corintios 15 — El Capítulo Más Importante del Nuevo Testamento',
        paragraphs: [
          '1 Corintios 15 es el argumento más sostenido y articulado sobre la resurrección corporal en toda la Biblia. Pablo lo construyó en respuesta a creyentes en Corinto que negaban la resurrección futura.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Si Cristo no resucitó',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Corintios 15:3-8',
              text: 'Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras; y que apareció a Cefas, y después a los doce. Después apareció a más de quinientos hermanos a la vez, de los cuales muchos viven aún, y otros ya duermen. Después apareció a Jacobo; después a todos los apóstoles; y al último de todos, como a un abortivo, me apareció a mí también.',
            },
            {
              type: 'paragraph',
              text: 'El argumento de Pablo en 1 Corintios 15:12-19 es lógicamente riguroso: si la resurrección de los muertos no existe como fenómeno posible, entonces Cristo tampoco resucitó; si Cristo no resucitó, la predicación y la fe son vanas; los apóstoles son falsos testigos; los muertos están perdidos; los que esperan en Cristo son "los más dignos de lástima de todos los hombres." Pablo no suaviza las implicaciones de negar la resurrección. La fe cristiana se sostiene o cae con ese hecho.',
            },
            {
              type: 'deep_dive',
              title: 'El bautismo por los muertos — 1 Corintios 15:29',
              paragraphs: [
                'En medio del argumento sobre la resurrección, Pablo hace una referencia enigmática: "De otro modo, ¿qué harán los que se bautizan por los muertos, si en ninguna manera los muertos resucitan? ¿Por qué, pues, se bautizan por los muertos?" (1 Corintios 15:29).',
                'Este versículo ha generado más de doscientas interpretaciones diferentes en la historia del comentario bíblico. La interpretación más directa — que los corintios practicaban el bautismo vicario por difuntos — es también la más perturbadora para las tradiciones que no tienen esa práctica.',
                'Pablo no condena ni aprueba la práctica — la usa como argumento: si quienes la practican creen que beneficia a los muertos, ¿por qué lo harían si los muertos no resucitan? La existencia de la práctica en Corinto, mencionada sin condena, es históricamente significativa para la Restauración.',
              ],
            },
          ],
        },
        {
          id: 't5',
          title: 'Los cuerpos de la resurrección',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Corintios 15:40-42',
              text: 'Y hay cuerpos celestiales, y cuerpos terrenales; pero una es la gloria de los celestiales, y otra la de los terrenales. Una es la gloria del sol, otra la gloria de la luna, y otra la gloria de las estrellas, pues una estrella es diferente de otra en gloria. Así también es la resurrección de los muertos.',
            },
            {
              type: 'paragraph',
              text: 'La metáfora de los grados de gloria — sol, luna, estrellas — es uno de los textos fundacionales de la visión de D&C 76. Pablo distingue cuerpos celestiales y terrenales, y dentro de ambas categorías, diferencias de gloria. Esto contradice la visión binaria (cielo/infierno) que dominó el pensamiento medieval y sugiere una escatología más matizada — que la Restauración desarrolló plenamente.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Cuál es la diferencia entre la "justificación" y la "santificación" según Pablo?' },
                { id: 'np2', question: '¿Por qué Pablo dice que sin la resurrección "somos los más dignos de lástima"?' },
                { id: 'np3', question: '¿Qué relación ves entre 1 Corintios 15:29 (bautismo por los muertos) y DyC 128?' },
                { id: 'np4', question: '¿Cómo reconcilias la gracia de Pablo con la necesidad de ordenanzas en la Restauración?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
