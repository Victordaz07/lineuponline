import type { Lesson } from '@/types/doctrine'

export const tomasElGemelo: Lesson = {
  id: 'tomas-el-gemelo',
  moduleId: 'personajes-escrituras',
  title: 'Dídimo — El Gemelo',
  subtitle: 'El apóstol más malentendido de los doce',
  description: 'Tomás no es simplemente "el que dudó." Su nombre en hebreo significa "gemelo" y en griego, Dídimo. Juan lo menciona cuatro veces específicas, y antes de la duda famosa ya había demostrado valentía dispuesta al martirio. Esta lección reconstruye la imagen completa del apóstol Tomás.',
  level: 'BÁSICO',
  icon: '👥',
  duration: 25,
  order: 5410,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'tomas',
  studySections: [
    {
      id: 's1',
      title: 'El Nombre que lo Define',
      intro: {
        romanNumeral: 'I',
        title: 'Tomás — Dídimo — El Gemelo',
        paragraphs: ['Un nombre con dos idiomas, un solo significado'],
      },
      topics: [
        {
          id: 't1',
          title: 'Hebreo y griego: dos nombres, un hombre',
          blocks: [
            {
              type: 'paragraph',
              text: 'El nombre "Tomás" proviene del arameo Toma (תּוֹמָא), que significa "gemelo." Juan es el único evangelista que se toma el trabajo de traducirlo al griego: Dídimo (Δίδυμος), que también significa "gemelo." Esta doble identificación — hebreo y griego — aparece tres veces en el cuarto evangelio (Juan 11:16, 20:24, 21:2) y es exclusiva del relato de Juan.',
            },
            {
              type: 'doctrine_box',
              title: '¿Gemelo de quién?',
              body: 'La tradición no identifica con certeza al hermano gemelo de Tomás. Los Hechos de Tomás (siglo II) sugieren que era gemelo de Jesús, aunque esto es apócrifo. Algunos estudiosos modernos proponen que el apodo "el Gemelo" era simplemente un descriptor físico sin implicación teológica. Lo que sí es claro: Juan usa su nombre completo arameo y su traducción griega, señalando que este hombre era conocido en dos culturas y dos idiomas.',
            },
            {
              type: 'key_points',
              title: 'Lo que el nombre revela',
              points: [
                'Tomás era un judío galileo de habla aramea, como los demás apóstoles.',
                'El hecho de que Juan traduzca su nombre al griego sugiere una audiencia helenística amplia.',
                'Su apodo "el Gemelo" era tan habitual que se convirtió en su segundo nombre oficial.',
                'Juan es el único evangelista que lo llama "Dídimo" — señal de fuente directa.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las Cuatro Apariciones en Juan',
      intro: {
        romanNumeral: 'II',
        title: 'Tomás en el Evangelio de Juan',
        paragraphs: ['Cuatro momentos que dan un retrato completo'],
      },
      topics: [
        {
          id: 't2',
          title: 'Juan 11:16 — El hombre dispuesto a morir',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Juan 11:16',
              text: 'Entonces Tomás, llamado Dídimo, dijo a sus condiscípulos: Vamos también nosotros, para que muramos con él.',
            },
            {
              type: 'paragraph',
              text: 'Este versículo es el primero en que Juan hace hablar a Tomás, y lo hace con valentía radical. Jesús acaba de anunciar que volverá a Judea, donde los líderes religiosos acaban de intentar apedrearlo (Juan 10:31). Los discípulos le advierten del peligro. Tomás no argumenta contra el viaje — dice "vayamos también para morir con él." Es lealtad hasta el martirio, no cobardía ni escepticismo.',
            },
            {
              type: 'doctrine_box',
              title: 'Fe que incluye la posibilidad del martirio',
              body: 'La frase de Tomás en Juan 11:16 es teológicamente significativa: demuestra que Tomás no era un seguidor superficial. Entendía que seguir a Jesús a Judea era potencialmente una sentencia de muerte. Su disposición a morir precede a cualquier discusión sobre su "duda." Antes de dudar de la resurrección, este hombre estaba listo para morir por su maestro.',
            },
          ],
        },
        {
          id: 't3',
          title: 'Juan 14:5 — La pregunta que generó revelación',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Juan 14:5',
              text: 'Le dijo Tomás: Señor, no sabemos a dónde vas; ¿cómo, pues, podemos saber el camino?',
            },
            {
              type: 'paragraph',
              text: 'En el aposento alto, la noche antes de la crucifixión, Jesús habla de ir al Padre. Tomás interrumpe con una pregunta honesta: "No sabemos a dónde vas; ¿cómo podemos saber el camino?" Esta pregunta provoca una de las declaraciones más memorables de Cristo: "Yo soy el camino, la verdad y la vida" (Juan 14:6). Sin la pregunta de Tomás, esa respuesta no existiría en el texto.',
            },
            {
              type: 'central_quote',
              text: 'Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.',
              attribution: 'Juan 14:6 — respuesta de Jesús a Tomás',
            },
          ],
        },
        {
          id: 't4',
          title: 'Juan 20:24-29 y Juan 21:2 — La duda y el reencuentro',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tercera mención de Tomás es el episodio más conocido: su ausencia durante la primera aparición del Resucitado y su posterior declaración condicional (Juan 20:24-29). La cuarta y última mención es en Juan 21:2, donde Tomás aparece entre los siete discípulos a quienes Jesús se aparece junto al mar de Tiberias. Su nombre figura en la lista sin comentario adicional — vuelve a ser simplemente uno de los doce, restaurado y presente.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Juan 11:16', text: 'Tomás llama a morir con Jesús al ir a Judea', ref: 'Juan 11:16', color: 'blue' },
                { label: 'Juan 14:5', text: 'Pregunta sobre el camino — provoca "Yo soy el camino"', ref: 'Juan 14:6', color: 'gold' },
                { label: 'Juan 20:24', text: 'Ausente en la primera aparición del Resucitado', ref: 'Juan 20:24', color: 'red' },
                { label: 'Juan 20:28', text: 'Confiesa "Señor mío y Dios mío"', ref: 'Juan 20:28', color: 'gold' },
                { label: 'Juan 21:2', text: 'Presente en la aparición junto al mar de Galilea', ref: 'Juan 21:2', color: 'green' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Retrato Completo',
      intro: {
        romanNumeral: 'III',
        title: 'Tomás Antes del Episodio de la "Duda"',
        paragraphs: ['El contexto que cambia todo'],
      },
      topics: [
        {
          id: 't5',
          title: 'Un apóstol leal, curioso y valiente',
          blocks: [
            {
              type: 'paragraph',
              text: 'Al leer las cuatro apariciones de Tomás en Juan en su totalidad, el retrato que emerge no es el de un escéptico crónico sino el de un hombre profundamente leal, dispuesto al sacrificio extremo, y con la honestidad intelectual de hacer preguntas directas. Su "duda" en Juan 20 no es cobardía — es la misma honestidad que lo llevó a preguntar "¿cómo podemos saber el camino?" Tomás necesitaba entender, no simplemente seguir.',
            },
            {
              type: 'key_points',
              title: 'Tomás en tres palabras',
              points: [
                'Valiente: dispuesto a morir por su maestro (Juan 11:16).',
                'Honesto: hacía las preguntas que otros callaban (Juan 14:5).',
                'Fiel: presente con los discípulos tras la resurrección (Juan 21:2).',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿En qué medida la reputación de "el que duda" de Tomás eclipsa su valentía en Juan 11:16? ¿Cómo cambia tu percepción de él saber que estuvo dispuesto a morir por Cristo antes de dudar de su resurrección?',
            },
          ],
        },
      ],
    },
  ],
}
