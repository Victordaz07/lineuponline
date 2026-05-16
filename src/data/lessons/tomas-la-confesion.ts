import type { Lesson } from '@/types/doctrine'

export const tomasLaConfesion: Lesson = {
  id: 'tomas-la-confesion',
  moduleId: 'personajes-escrituras',
  title: '"¡Señor mío y Dios mío!"',
  subtitle: 'La confesión de divinidad más directa de los Evangelios',
  description: 'Tomás, el apóstol que más dudó, hizo la declaración más explícita de la divinidad de Cristo en los cuatro evangelios. "Ho kyrios mou kai ho theos mou" — en griego, la declaración directa de que Jesús es Señor y Dios. Esta lección analiza su significado lingüístico, teológico y la paradoja que representa.',
  level: 'AVANZADO',
  icon: '🌟',
  duration: 30,
  order: 5412,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'tomas',
  studySections: [
    {
      id: 's1',
      title: 'La Confesión',
      intro: {
        romanNumeral: 'I',
        title: 'Juan 20:28 — Las Palabras en Griego',
        paragraphs: ['Análisis de la declaración más directa del Nuevo Testamento'],
      },
      topics: [
        {
          id: 't1',
          title: '"Ho Kyrios mou kai ho Theos mou"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Juan 20:28',
              text: 'Entonces Tomás respondió y le dijo: ¡Señor mío, y Dios mío!',
            },
            {
              type: 'paragraph',
              text: 'En el texto griego original, Tomás dice: "ho kyrios mou kai ho theos mou" (ὁ κύριός μου καὶ ὁ θεός μου). El uso del artículo definido "ho" (el) antes de ambos sustantivos — kyrios (Señor) y theos (Dios) — es lingüísticamente preciso. No dice "un señor mío" ni "un ser divino." Dice "el Señor mío y el Dios mío," con artículo definido, aplicando a Jesús los títulos que en el Antiguo Testamento griego (la Septuaginta) corresponden exclusivamente a Yahvé.',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué el artículo definido importa',
              body: 'En el siglo primero, el vocativo griego sin artículo podría interpretarse como una exclamación de asombro ("¡Dios mío!" como expresión cultural). Pero Tomás usa el artículo definido en nominativo con función de vocativo, una construcción gramaticalmente precisa que los eruditos reconocen como identificación directa. Juan, un escritor teológicamente sofisticado, elige estas palabras con cuidado. La confesión de Tomás es el clímax teológico del Evangelio de Juan.',
            },
            {
              type: 'deep_dive',
              title: 'Comparación con otras declaraciones de fe en los Evangelios',
              paragraphs: [
                'Pedro en Mateo 16:16 dice: "Tú eres el Cristo, el Hijo del Dios viviente." Es una declaración mesénica y filial.',
                'Natanael en Juan 1:49 dice: "Rabbí, tú eres el Hijo de Dios; tú eres el Rey de Israel." Combina el título divino con el título real.',
                'Marta en Juan 11:27 dice: "Tú eres el Cristo, el Hijo de Dios." Una confesión cristológica plena.',
                'Tomás en Juan 20:28 dice: "Señor mío y Dios mío." Es la única declaración en los cuatro evangelios que identifica a Jesús directamente con Dios sin calificativo adicional. No "Hijo de Dios" sino "Dios mío."',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Paradoja del Mayor Dudador',
      intro: {
        romanNumeral: 'II',
        title: 'El que Más Dudó Hizo la Confesión Más Profunda',
        paragraphs: ['Una lección sobre el camino de la fe'],
      },
      topics: [
        {
          id: 't2',
          title: 'La conexión entre duda y fe profunda',
          blocks: [
            {
              type: 'paragraph',
              text: 'Existe una paradoja poderosa en el relato de Tomás: el apóstol que más resistencia mostró ante la resurrección hizo la confesión de divinidad más radical del Nuevo Testamento. Pedro, que declaró primero "tú eres el Cristo" (Mateo 16:16), negó a Jesús tres veces. Juan, "el discípulo amado," no hace una declaración de fe explícita en los evangelios. Tomás, el "dudoso," produce la afirmación teológica más alta.',
            },
            {
              type: 'central_quote',
              text: 'La duda honesta llevada a Cristo no produce menos fe — produce fe más profunda y más fundamentada.',
              attribution: 'Principio derivado de Juan 20:24-28',
            },
            {
              type: 'doctrine_box',
              title: 'El patrón bíblico: resistencia seguida de confesión más profunda',
              body: 'La Biblia repite este patrón: quienes más resisten antes de creer frecuentemente producen las confesiones más profundas. Moisés argumentó cinco veces contra su llamamiento antes de convertirse en el mayor profeta del Antiguo Testamento. Pablo perseguía a la Iglesia con violencia antes de recibir la visión en el camino de Damasco y convertirse en el teólogo más influyente del NT. La resistencia inicial, cuando es honesta y no cínica, puede ser señal de que la persona toma la verdad con la seriedad que merece.',
            },
          ],
        },
        {
          id: 't3',
          title: 'La respuesta de Jesús a la confesión',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Juan 20:29',
              text: 'Jesús le dijo: Porque me has visto, Tomás, creíste; bienaventurados los que no vieron, y creyeron.',
            },
            {
              type: 'paragraph',
              text: 'La respuesta de Cristo es notable por lo que no dice. No regaña a Tomás por haber dudado. No le dice que fue una fe de segunda categoría por necesitar evidencia. Reconoce su fe — "creíste" — y luego pronuncia una bienaventuranza para quienes creerán sin ese privilegio. La bienaventuranza no contradice la fe de Tomás; la trasciende hacia los lectores futuros del evangelio, quienes no tendrán acceso físico a las heridas de Cristo.',
            },
            {
              type: 'key_points',
              title: 'Lo que Jesús no dijo',
              points: [
                'No dijo: "Tu fe es inferior porque necesitaste ver."',
                'No dijo: "Debiste haber creído el testimonio de los diez."',
                'No dijo: "Eres un incrédulo."',
                'Dijo: "Porque me has visto, creíste" — reconocimiento de fe genuina.',
                'Añadió una bienaventuranza para quienes no verán pero creerán — un horizonte más amplio, no una censura.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Significado Teológico para la Restauración',
      intro: {
        romanNumeral: 'III',
        title: 'La Divinidad de Cristo en la Teología Restaurada',
        paragraphs: ['Lo que la confesión de Tomás aporta a la comprensión moderna'],
      },
      topics: [
        {
          id: 't4',
          title: 'Cristo como Dios con cuerpo resucitado',
          blocks: [
            {
              type: 'paragraph',
              text: 'La confesión de Tomás ocurre ante un Cristo resucitado con cuerpo físico — las marcas de los clavos aún visibles, el costado aún herido. La teología restaurada afirma que el Padre y el Hijo tienen cuerpos de carne y hueso tan tangibles como el del hombre (DyC 130:22). La confesión "Señor mío y Dios mío" de Tomás, dirigida a un Jesús físicamente resucitado, encaja perfectamente con esta comprensión: la divinidad y la corporalidad no son contradictorias.',
            },
            {
              type: 'doctrine_box',
              title: 'La corporeidad de Dios en la Restauración',
              body: 'DyC 130:22 declara: "El Padre tiene un cuerpo de carne y huesos tan tangible como el del hombre; el Hijo también." La confesión de Tomás se hace ante un Cristo con marcas físicas reales — heridas tangibles, no metafóricas. El apóstol que exigió evidencia física para creer recibió evidencia física, y su respuesta fue la confesión de divinidad más directa del Nuevo Testamento. La Restauración conecta corporeidad y divinidad de manera que la confesión de Tomás no choca sino que ilumina.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa para ti que la confesión más alta de la divinidad de Cristo en los Evangelios haya sido pronunciada por el apóstol más escéptico? ¿Cómo impacta esto tu comprensión de la relación entre duda honesta y fe profunda?',
            },
          ],
        },
      ],
    },
  ],
}
