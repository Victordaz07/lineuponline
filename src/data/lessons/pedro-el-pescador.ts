import type { Lesson } from '@/types/doctrine'

export const pedroElPescador: Lesson = {
  id: 'pedro-el-pescador',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'pedro',
  title: 'El Pescador',
  subtitle: '"Desde ahora serás pescador de hombres"',
  description:
    'Simón Bar-Jonás era un pescador de Betsaida en el mar de Galilea. El día que Jesús subió a su barca y le pidió que echara las redes, su vida cambió para siempre. Este es el hombre antes de convertirse en la roca.',
  level: 'BÁSICO',
  icon: '🎣',
  duration: 25,
  order: 5010,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Simón Bar-Jonás de Betsaida',
      intro: {
        romanNumeral: 'I',
        title: 'El Hombre antes del Llamamiento',
        paragraphs: [
          'Un pescador galileo de familia trabajadora, hermano de Andrés, conocido antes de conocer a Cristo.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Quién era Simón antes de ser Pedro',
          blocks: [
            {
              type: 'paragraph',
              text: 'Simón era hijo de Jonás (Mateo 16:17) y hermano de Andrés. Ambos eran de Betsaida, ciudad pesquera en la ribera norte del Mar de Galilea (Juan 1:44), aunque Simón tenía su hogar en Capernaum, donde vivía con su esposa y su suegra (Marcos 1:29-31). Era un hombre del pueblo: sin educación rabínica formal, con manos curtidas por las redes, acostumbrado al trabajo nocturno en el lago. Los Hechos 4:13 describen a Pedro y Juan como "hombres sin letras y del vulgo", lo que en boca de los sacerdotes era desprecio, pero en el diseño de Dios era precisamente el punto.',
            },
            {
              type: 'doctrine_box',
              title: 'El patrón divino de llamar a lo ordinario',
              body: 'Dios no eligió a Simón a pesar de su condición de pescador sino en parte a causa de ella. El llamamiento divino no busca competencia previa sino disposición. Amós era boyero; Gedeón era el menor de su familia; Moisés tartamudeaba. El principio es consistente: Dios provee la capacidad que requiere el llamamiento.',
            },
            {
              type: 'key_points',
              title: 'Lo que sabemos de Simón antes de Lucas 5',
              points: [
                'Era pescador de oficio en el Mar de Galilea, probablemente copropietario de una embarcación (Lucas 5:10)',
                'Tenía esposa — Pablo lo confirma en 1 Corintios 9:5 al mencionar que los apóstoles llevaban esposas en sus viajes',
                'Su suegra vivía con él en Capernaum; Jesús la sanó de fiebre (Marcos 1:29-31)',
                'Andrés, su hermano, fue discípulo de Juan el Bautista antes de conocer a Jesús (Juan 1:35-40)',
                'Era socio de Santiago y Juan, hijos de Zebedeo (Lucas 5:10), indicando un negocio familiar de cierta escala',
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'Andrés encontró a Simón primero',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Juan 1:41-42',
              text: 'Este [Andrés] halló primero a su hermano Simón, y le dijo: Hemos hallado al Mesías (que traducido es, el Cristo). Y le trajo a Jesús. Y mirándole Jesús, dijo: Tú eres Simón, hijo de Jonás; tú serás llamado Cefas (que quiere decir, Pedro).',
            },
            {
              type: 'paragraph',
              text: 'La ironía narrativa de Juan 1 es exquisita: Andrés encontró a Simón primero, pero en el arco completo de la historia, Simón eclipsaría a su hermano. Desde el primer encuentro, Jesús ya lo llamó por un nombre que Simón todavía no era — "Pedro", "Cefas" en arameo — la Roca. El nombre es profético, no descriptivo. Simón en ese momento era impulsivo, inestable, lleno de contradicciones. El nombre "Pedro" era el destino, no el estado presente.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Pesca Milagrosa — Lucas 5',
      intro: {
        romanNumeral: 'II',
        title: '"Echa Mar Adentro, y Echad Vuestras Redes para Pescar"',
        paragraphs: [
          'El relato de Lucas 5 es el llamamiento más detallado de Pedro. Jesús sube a su barca, predica, y luego produce el milagro que cambia todo.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La noche sin peces y el mandato de volver',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 5:4-7',
              text: 'Cuando terminó de hablar, dijo a Simón: Boga mar adentro, y echad vuestras redes para pescar. Respondiendo Simón, le dijo: Maestro, toda la noche hemos estado trabajando, y nada hemos pescado; mas en tu palabra echaré la red. Y habiéndolo hecho, encerraron gran cantidad de peces, y su red se rompía.',
            },
            {
              type: 'paragraph',
              text: 'La condición de Pedro en el momento del llamamiento no es de ignorancia sino de agotamiento profesional. Ha trabajado toda la noche — el tiempo óptimo para la pesca en el lago — y no ha sacado nada. Lo que Jesús le pide es técnicamente absurdo: boga mar adentro en pleno día, cuando los peces están en el fondo, con redes ya tendidas sin resultado. La obediencia de Pedro es heroica en su sencillez: "mas en tu palabra echaré la red." No porque entienda. Porque confía en quien habla.',
            },
            {
              type: 'deep_dive',
              title: 'El Mar de Galilea: contexto del milagro',
              paragraphs: [
                'El Mar de Galilea (también llamado lago de Genesaret o mar de Tiberíades) tiene 21 km de largo por 13 km de ancho, con una profundidad máxima de 43 metros. En el siglo I era el corazón económico de la región de Galilea, con al menos nueve ciudades importantes en sus orillas.',
                'La pesca nocturna era la práctica estándar: se usaban redes de arrastre en aguas poco profundas durante la noche porque los peces se acercaban a la superficie. Pescar de día en aguas profundas era contrario a toda lógica pesquera. La obediencia de Pedro fue, en términos profesionales, irracional.',
                'El volumen de la pesca fue tan grande que llenó dos barcas hasta el punto de hundirse. Para un pescador galileo, este era un ingreso que normalmente requería semanas de trabajo. La señal fue inconfundible.',
              ],
            },
          ],
        },
        {
          id: 't4',
          title: '"Apártate de mí, Señor, porque soy hombre pecador"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 5:8-10',
              text: 'Viendo esto Simón Pedro, cayó de rodillas ante Jesús, diciendo: Apártate de mí, Señor, porque soy hombre pecador. Porque por la pesca que habían hecho, el temor se había apoderado de él, y de todos los que estaban con él... Y Jesús dijo a Simón: No temas; desde ahora serás pescador de hombres.',
            },
            {
              type: 'paragraph',
              text: 'La reacción de Pedro al milagro es teológicamente profunda. No dice "¡Gracias!" ni "¡Eres increíble!" — cae de rodillas y pide distancia. Es la respuesta del hombre que súbitamente percibe que está en presencia de lo sagrado y siente el peso de su propia indignidad. Es la respuesta de Isaías ante el serafín ("¡Ay de mí! que soy muerto" — Isaías 6:5), de Job ante la voz del torbellino, de Moisés ante la zarza ardiente. La santidad provoca consciencia del pecado.',
            },
            {
              type: 'central_quote',
              text: '"No temas; desde ahora serás pescador de hombres."',
              attribution: 'Jesús a Simón Pedro — Lucas 5:10',
            },
            {
              type: 'paragraph',
              text: 'La respuesta de Jesús es notable por lo que no hace: no corrige la evaluación de Pedro sobre sí mismo. No dice "No, tú no eres tan malo." Acepta la percepción de Pedro y la transforma en llamamiento. La conciencia del pecado no es disqualificadora — es el punto de partida. "No temas" es la primera instrucción. El llamamiento llega inmediatamente después.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Nuevo Nombre: Cefas / Pedro',
      intro: {
        romanNumeral: 'III',
        title: 'Un Nombre que Era una Profecía',
        paragraphs: [
          'Jesús renombra a las personas en momentos de llamamiento transformador. Abram se convirtió en Abraham; Sarai en Sara; Jacob en Israel. Simón en Pedro.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El significado del cambio de nombre',
          blocks: [
            {
              type: 'paragraph',
              text: 'En Juan 1:42, Jesús lo llama "Cefas" en arameo — la misma palabra que en griego es "Petros" (Pedro), que significa roca o piedra. En el mundo bíblico, cambiar el nombre de alguien era un acto de autoridad soberana que expresaba un cambio de identidad y destino. Los faraones cambiaban los nombres de sus vasallos. Dios cambió el nombre de Abram y Sarai. El nombre nuevo no describe la persona tal como es sino tal como será.',
            },
            {
              type: 'doctrine_box',
              title: 'Nombres nuevos en el plan eterno',
              body: 'La práctica de recibir un nombre nuevo tiene continuidad en la doctrina restaurada. En el templo, los fieles reciben un nuevo nombre que simboliza su nueva identidad en el convenio. Apocalipsis 2:17 promete que a los que vencen "se les dará una piedrecita blanca, y en la piedrecita escrito un nombre nuevo." El nombre de Pedro es la prefiguración escritural de esta promesa eterna.',
            },
            {
              type: 'key_points',
              title: 'El nombre doble: Simón Pedro en los Evangelios',
              points: [
                'Marcos (el evangelio con más influencia de Pedro) lo llama "Simón" o "Pedro" alternativamente, revelando que ambos nombres coexistían',
                'En Mateo 16:17, Jesús lo llama "Simón, hijo de Jonás" — el nombre antiguo en el momento de la gran confesión, enfatizando que la revelación vino de Dios, no de Simón',
                'Juan alterna entre "Simón Pedro" como nombre compuesto, uniendo identidad antigua y nueva',
                'Pablo en Gálatas lo llama "Cefas" — el nombre arameo original que Jesús usó — mostrando que en contextos judíos se usaba la versión aramea',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Pedro y Andrés: Hermanos en el Apostolado',
      intro: {
        romanNumeral: 'IV',
        title: 'El Hermano que Encontró al Apóstol',
        paragraphs: [
          'Andrés encontró a Jesús primero y trajo a su hermano. En la historia del reino, a veces el mayor servicio que hacemos es traer a alguien más grande que nosotros.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'La lección de Andrés',
          blocks: [
            {
              type: 'paragraph',
              text: 'Andrés es una figura fascinante precisamente por su anonimato voluntario. Fue discípulo de Juan el Bautista antes de seguir a Jesús (Juan 1:35-40). Cuando encontró al Mesías, lo primero que hizo fue buscar a su hermano Simón. Andrés aparece solo tres veces más en el Evangelio de Juan: trayendo al muchacho con los cinco panes y dos peces (Juan 6:8-9), presentando a griegos que querían ver a Jesús (Juan 12:21-22), y en la lista de los apóstoles. Siempre presenta a alguien. Nunca es el protagonista.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué dice sobre el carácter de Andrés el hecho de que trajera a su hermano Simón, quien eventualmente lo eclipsaría por completo en el registro histórico? ¿Conoces personas en tu familia o barrio que cumplen este papel: traer a otros sin buscar protagonismo?',
            },
            {
              type: 'central_quote',
              text: '"Este [Andrés] halló primero a su hermano Simón, y le dijo: Hemos hallado al Mesías."',
              attribution: 'Juan 1:41',
            },
            {
              type: 'paragraph',
              text: 'La tradición indica que Andrés misionó en las regiones del norte, incluyendo lo que hoy es Grecia, y murió crucificado en una cruz en forma de X (llamada "cruz de San Andrés") en Patras, Acaya. Su relación con Pedro establece un principio eterno: el evangelio se transmite de persona a persona, de hermano a hermano, de familia a familia.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Dejando las Redes — el Costo del Llamamiento',
      intro: {
        romanNumeral: 'V',
        title: '"Dejando al Instante las Redes, le Siguieron"',
        paragraphs: [
          'Mateo 4:20 contiene tres palabras que definen el discipulado radical: "dejando", "al instante", "siguieron".',
        ],
      },
      topics: [
        {
          id: 't7',
          title: 'El significado del abandono inmediato',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 4:18-20',
              text: 'Andando Jesús junto al mar de Galilea, vio a dos hermanos, Simón, llamado Pedro, y Andrés su hermano, que echaban una red en el mar; porque eran pescadores. Y les dijo: Venid en pos de mí, y os haré pescadores de hombres. Ellos entonces, dejando al instante las redes, le siguieron.',
            },
            {
              type: 'paragraph',
              text: 'Las redes no eran un accesorio sentimental — eran el capital de trabajo de una familia. En la economía del siglo I, las redes de pesca eran bienes de alto valor, fabricados a mano durante meses. Dejarlas "al instante" equivalía a dejar la fuente de sustento sin plan de contingencia. El texto no dice que las vendieron, ni que las dejaron guardadas para cuando regresaran. Las dejaron.',
            },
            {
              type: 'steps',
              title: 'El patrón del llamamiento apostólico en los Evangelios',
              steps: [
                'Jesús toma la iniciativa — nunca son los discípulos quienes se ofrecen primero en los relatos sinópticos',
                'El llamamiento es directo y específico ("venid en pos de mí") — no es una invitación general a la religiosidad',
                'La promesa incluye transformación de identidad ("os haré pescadores de hombres") — serán algo que no son ahora',
                'La respuesta es inmediata y total — no hay negociación ni plazo',
                'El costo es real y visible — dejan redes, barcas, familia, negocio',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué "redes" has tenido que dejar tú para seguir un llamamiento divino? ¿Hubo algún momento en tu vida en que la obediencia inmediata fue más difícil que la obediencia razonada?',
            },
          ],
        },
      ],
    },
  ],
}
