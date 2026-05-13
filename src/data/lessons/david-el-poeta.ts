import type { Lesson } from '@/types/doctrine'

export const davidElPoeta: Lesson = {
  id: 'david-el-poeta',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'david',
  title: 'David el Poeta',
  subtitle: 'El hombre que escribió la oración que Jesús usó desde la cruz',
  description:
    'David escribió al menos 73 de los 150 Salmos. El Salmo 22 describe la crucifixión con detalles anatómicos y rituales que no tenían precedente en la experiencia de David — 1,000 años antes de que la crucifixión existiera como método de ejecución. Jesús lo citó desde la cruz. El Salmo 23 es el texto más consolador del Antiguo Testamento.',
  level: 'AVANZADO',
  icon: '🎵',
  duration: 35,
  order: 4212,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El poeta más grande de Israel',
      intro: {
        romanNumeral: 'I',
        title: 'Los Salmos como autobiografía espiritual de un pueblo',
        paragraphs: [
          'Los 150 Salmos son el libro más citado del Nuevo Testamento. Jesús los citó más que cualquier otro texto del Antiguo Testamento. Los apóstoles los predicaron. Los primeros cristianos los cantaron en sus reuniones. Y en el centro de esa colección está David, el pastor que se convirtió en rey y encontró en la poesía el único lenguaje suficiente para hablar con Dios.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'David como autor y compilador del Salterio',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tradición atribuye a David al menos 73 de los 150 Salmos — más de la mitad. Los demás corresponden a Asaf (12), los hijos de Coré (11), Salomón (2), Moisés (1), Hemán (1), Etán (1) y autores anónimos. Pero David no fue solo autor — fue el arquitecto del sistema de adoración musical del templo. 1 Crónicas 25 documenta que organizó 288 músicos entrenados para el servicio del templo.',
            },
            {
              type: 'key_points',
              title: 'Categorías temáticas en los Salmos de David',
              points: [
                'Salmos de lamento — el dolor sin respuesta aparente de Dios (Salmo 13, 22, 88)',
                'Salmos de confianza — la fe que se mantiene a pesar del sufrimiento (Salmo 23, 27)',
                'Salmos de alabanza — la respuesta a la fidelidad de Dios (Salmo 103, 145)',
                'Salmos reales y mesiánicos — el rey de Israel como tipo del rey eterno (Salmo 2, 72, 110)',
                'Salmos de arrepentimiento — la confesión como acto de restauración (Salmo 32, 51)',
              ],
            },
            {
              type: 'paragraph',
              text: 'Lo que hace a los Salmos extraordinarios no es su belleza literaria — es su honestidad radical. David escribe en momentos de terror: "¿Hasta cuándo, Jehová? ¿Me olvidarás para siempre?" (Salmo 13:1). Escribe en momentos de culpa: "Porque yo reconozco mis rebeliones, y mi pecado está siempre delante de mí" (Salmo 51:3). Escribe en momentos de éxtasis: "El cielo proclama la gloria de Dios" (Salmo 19:1). Los Salmos son el lenguaje emocional completo de la relación con Dios.',
            },
            {
              type: 'leader_quote',
              quote: 'Los Salmos son el más profundo libro de devoción que jamás se ha escrito, porque en ellos se ve el corazón del hombre en su relación con Dios — no idealizado, sino real, con toda su queja y toda su alabanza.',
              name: 'C.S. Lewis',
              role: 'Reflexiones sobre los Salmos',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Salmo 22 — la profecía de la crucifixión',
      intro: {
        romanNumeral: 'II',
        title: 'El poema más profético de toda la Escritura',
        paragraphs: [
          'El Salmo 22 fue escrito por David en el siglo X a.C. La crucifixión como método de ejecución fue inventada por los persas siglos después y adoptada por los romanos. El salmo describe detalles anatómicos, rituales y emocionales de la muerte en cruz con una precisión que solo puede explicarse como inspiración profética.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Las palabras desde la cruz — Mateo 27:46',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 27:46',
              text: 'Cerca de la hora novena, Jesús clamó a gran voz, diciendo: Elí, Elí, ¿lama sabactani? Esto es: Dios mío, Dios mío, ¿por qué me has desamparado?',
            },
            {
              type: 'paragraph',
              text: 'Estas palabras son la primera línea del Salmo 22. Cuando Jesús las pronunció desde la cruz, cualquier judío que las escuchara sabría que estaba citando ese salmo. Era una referencia a un texto completo, no solo a una frase. El resto del Salmo 22 — después de ese grito inicial — es un texto de confianza y eventual victoria. Jesús no solo expresaba abandono: estaba señalando hacia un texto que los presentes conocían.',
            },
            {
              type: 'highlight_verse',
              reference: 'Salmo 22:1, 6-8, 14-18',
              text: 'Dios mío, Dios mío, ¿por qué me has desamparado?... Pero yo soy gusano, y no hombre; oprobio de los hombres, y despreciado del pueblo. Todos los que me ven me escarnecen; estiran la boca, menean la cabeza, diciendo: Se encomendó a Jehová; líbrele él... Se derramó como agua, y todos mis huesos se descoyuntaron... Horadaron mis manos y mis pies. Contar puedo todos mis huesos; ellos me miran y me observan. Repartieron entre sí mis vestidos, y sobre mi ropa echaron suertes.',
            },
            {
              type: 'deep_dive',
              title: 'Siete correspondencias entre el Salmo 22 y la crucifixión',
              paragraphs: [
                'Primera: "Dios mío, Dios mío, ¿por qué me has desamparado?" — Jesús cita esta línea exacta desde la cruz (Mateo 27:46; Marcos 15:34). Es la apertura del salmo y define todo lo que sigue.',
                'Segunda: "Todos los que me ven me escarnecen; estiran la boca, menean la cabeza" (v.7) — Mateo 27:39 dice: "Y los que pasaban le injuriaban, meneando la cabeza." Misma acción, mismo detalle físico.',
                'Tercera: "Se encomendó a Jehová; líbrele él, sálvele, puesto que en él se complacía" (v.8) — Mateo 27:43 reproduce casi literalmente estas palabras como las burlas de los sacerdotes.',
                'Cuarta: "Se derramó como agua, y todos mis huesos se descoyuntaron" (v.14) — describe el proceso fisiológico de la muerte por crucifixión, donde el cuerpo colgado pierde toda tensión muscular.',
                'Quinta: "Horadaron mis manos y mis pies" (v.16) — la primera referencia en toda la Escritura al método de perforar extremidades como forma de ejecución, siglos antes de que existiera.',
                'Sexta: "Contar puedo todos mis huesos; ellos me miran y me observan" (v.17) — el cuerpo en la cruz estaba completamente expuesto a la vista pública, dislocado y visible.',
                'Séptima: "Repartieron entre sí mis vestidos, y sobre mi ropa echaron suertes" (v.18) — Juan 19:23-24 documenta exactamente esto, y cita el salmo explícitamente como cumplimiento.',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La inspiración profética llevó a David más allá de su propia experiencia',
              body: 'David nunca fue crucificado. Nunca tuvo manos y pies perforados. Nunca tuvo soldados echando suertes por su ropa. Las experiencias de David que más se acercan al Salmo 22 son su huida de Saúl y sus crisis personales — pero ninguna de ellas tiene los detalles físicos específicos del salmo. Pedro describió este fenómeno en Hechos 2:30-31: David "siendo profeta... habló de la resurrección de Cristo." David escribió más de lo que entendía.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Jesús oró con las palabras de David',
      intro: {
        romanNumeral: 'III',
        title: 'Los Salmos como el libro de oraciones de Jesús',
        paragraphs: [
          'El Nuevo Testamento cita los Salmos más de 400 veces. Jesús los conocía de memoria — los aprendió en la sinagoga de Nazaret desde niño. Cuando oró en Getsemaní, cuando murió en el Calvario, cuando resucitó y enseñó a sus discípulos, usó el lenguaje de los Salmos.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Salmo 110 — el más citado por Jesús y los apóstoles',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Salmo 110:1',
              text: 'Jehová dijo a mi Señor: Siéntate a mi diestra, hasta que ponga a tus enemigos por estrado de tus pies.',
            },
            {
              type: 'paragraph',
              text: 'Jesús citó este versículo para desafiar la comprensión farisea del Mesías (Mateo 22:41-46). El argumento es brillante: si David llama "mi Señor" al Mesías, ¿cómo puede el Mesías ser simplemente el "hijo de David" en sentido genealógico? Algo más grande está ocurriendo. Pedro lo citó en Pentecostés (Hechos 2:34-35) para proclamar la resurrección y exaltación de Jesús. Hebreos lo usa siete veces para describir el sacerdocio eterno de Cristo.',
            },
            {
              type: 'key_points',
              title: 'Salmos que Jesús usó o cumplió según el NT',
              points: [
                'Salmo 22:1 — "Dios mío, por qué me has desamparado" (Mateo 27:46)',
                'Salmo 22:18 — "echaron suertes sobre mis vestidos" (Juan 19:24)',
                'Salmo 31:5 — "en tus manos encomiendo mi espíritu" (Lucas 23:46)',
                'Salmo 69:21 — "me dieron a beber vinagre" (Juan 19:28-29)',
                'Salmo 110:1 — "siéntate a mi diestra" (Mateo 22:44; Hechos 2:34)',
                'Salmo 118:22 — "la piedra que desecharon los edificadores" (Mateo 21:42)',
              ],
            },
            {
              type: 'paragraph',
              text: 'Los Salmos no eran para Jesús textos históricos sobre un rey antiguo. Eran palabras vivas que describían su propia experiencia. Cuando en la última cena Jesús y sus discípulos cantaron antes de ir al Monte de los Olivos (Mateo 26:30), probablemente cantaron el Hallel — los Salmos 113-118. Las palabras de David acompañaron a Jesús en la noche de su mayor prueba.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Salmo 23 — el texto más consolador',
      intro: {
        romanNumeral: 'IV',
        title: 'El pastor como imagen de Dios',
        paragraphs: [
          'David fue pastor de ovejas antes de ser rey. Conocía el trabajo desde adentro: los pastos, el agua, los depredadores, la vara y el cayado. Cuando escribió el Salmo 23, tomó su experiencia de pastorear ovejas y la usó para describir la experiencia de ser pastoreado por Dios.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El Salmo 23 línea por línea',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Salmo 23:1-6',
              text: 'Jehová es mi pastor; nada me faltará. En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará. Confortará mi alma; me guiará por sendas de justicia por amor de su nombre. Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento. Aderezas mesa delante de mí en presencia de mis angustiadores; unges mi cabeza con aceite; mi copa está rebosando. Ciertamente el bien y la misericordia me seguirán todos los días de mi vida, y en la casa de Jehová moraré por largos días.',
            },
            {
              type: 'deep_dive',
              title: 'Lo que un pastor del siglo X a.C. sabía que nosotros no sabemos',
              paragraphs: [
                '"Lugares de delicados pastos" — el hebreo dice "pastos de descanso." El pastor israelita conocía exactamente qué pasto era seguro y nutritivo, y cuál podía enfermar al rebaño. El buen pastor no llevaba a las ovejas al pasto más cercano sino al correcto.',
                '"Aguas de reposo" — las ovejas no beben de corrientes rápidas. Se ahogarían. El buen pastor buscaba remansos o pozas de agua tranquila. La imagen de Dios guiando hacia aguas de reposo es la imagen de un Dios que conoce lo que sus ovejas necesitan, no solo lo que piden.',
                '"Tu vara y tu cayado" — la vara era para los depredadores; el cayado era para rescatar ovejas atrapadas. No son instrumentos de castigo — son instrumentos de protección. El "ánimo" que infunden no viene del miedo sino de saber que el pastor tiene lo necesario para proteger.',
                '"Valle de sombra de muerte" — el hebreo tzalmaveth evoca los desfiladeros oscuros donde los pastores israelitas tenían que guiar a su rebaño. El salmo no promete evitar el valle — promete compañía dentro de él.',
              ],
            },
            {
              type: 'central_quote',
              text: 'Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.',
              attribution: 'Salmo 23:4 — David, pastor de Israel',
            },
            {
              type: 'doctrine_box',
              title: 'Jesús como el Buen Pastor — Juan 10',
              body: 'Cuando Jesús declaró "Yo soy el buen pastor" (Juan 10:11), sus oyentes judíos escucharon una afirmación sobre el Salmo 23 y el Salmo 80. El pastor de Israel era una imagen reservada para Dios mismo. Al reclamarla, Jesús estaba haciendo una declaración de identidad divina. Juan 10:14-15 añade lo que David no podía anticipar: el buen pastor "pone su vida por las ovejas." David escribió sobre el Dios que lo pastoreaba; Jesús reveló que ese Dios es el que moriría por su rebaño.',
            },
            {
              type: 'reflection',
              prompt: '¿Cuál es el versículo o frase de los Salmos de David que más ha resonado en tu vida en un momento difícil? ¿Qué significa para ti que esas palabras fueron escritas primero desde el sufrimiento humano de David?',
            },
          ],
        },
      ],
    },
  ],
}
