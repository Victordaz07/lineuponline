import type { Lesson } from '@/types/doctrine'

export const pabloElPerseguidor: Lesson = {
  id: 'pablo-el-perseguidor',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'pablo',
  title: 'El Perseguidor',
  subtitle: 'Saulo de Tarso — fariseo de fariseos, enemigo de la Iglesia',
  description:
    'Antes de convertirse en el mayor apóstol del mundo cristiano, Saulo de Tarso fue su más eficiente perseguidor. Educado a los pies de Gamaliel, ciudadano romano, fariseo convicto: todo lo que tenía lo puso al servicio de destruir la Iglesia. Y lo hacía convencido de servir a Dios.',
  level: 'INTERMEDIO',
  icon: '⚔️',
  duration: 30,
  order: 5110,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Hombre que Era Saulo',
      intro: {
        romanNumeral: 'I',
        title: 'Tres identidades que lo hacían formidable',
        paragraphs: [
          'Saulo de Tarso no era un fanático ordinario. Era un hombre con credenciales extraordinarias en tres mundos distintos: el judío, el religioso y el romano.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Fariseo de fariseos',
          blocks: [
            {
              type: 'paragraph',
              text: 'Filipenses 3:5-6 es el currículo vitae de Saulo antes de la conversión, escrito por él mismo: "circuncidado al octavo día, del linaje de Israel, de la tribu de Benjamín, hebreo de hebreos; en cuanto a la ley, fariseo; en cuanto a celo, perseguidor de la iglesia; en cuanto a la justicia que es en la ley, irreprensible." Esto no es modestia — es documentación. Saulo era lo mejor que el judaísmo farisaico podía producir.',
            },
            {
              type: 'highlight_verse',
              reference: 'Hechos 22:3',
              text: 'Yo de cierto soy judío, nacido en Tarso de Cilicia, pero criado en esta ciudad, instruido a los pies de Gamaliel, estrictamente conforme a la ley de nuestros padres, celoso de Dios, como hoy lo sois todos vosotros.',
            },
            {
              type: 'doctrine_box',
              title: 'Gamaliel — el maestro de Saulo',
              body: 'Gamaliel era el gran rabino de su generación, nieto de Hillel y considerado el más respetado maestro de la ley en el siglo primero. El mismo Gamaliel que en Hechos 5:34-39 aconsejó al Sanedrín moderación ante los apóstoles ("si es de Dios, no podréis destruirla") era el maestro de Saulo. La ironía es profunda: el alumno fue mucho más agresivo que el maestro.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Ciudadano romano',
          blocks: [
            {
              type: 'paragraph',
              text: 'Tarso era una ciudad cosmopolita en la provincia de Cilicia, y ser ciudadano romano de nacimiento era un privilegio heredado — no comprado ni concedido por servicio militar. Hechos 22:28 narra el momento en que el tribuno romano confiesa haber comprado su ciudadanía, y Pablo responde: "yo la tengo de nacimiento." Esta ciudadanía le dará acceso a esferas de poder inaccesibles para la mayoría de los predicadores del evangelio.',
            },
            {
              type: 'compare_grid',
              title: 'Saulo en dos mundos',
              left: {
                title: 'En el mundo judío',
                items: [
                  'Tribu de Benjamín — tribu real',
                  'Educación con Gamaliel — cúspide académica',
                  'Fariseo — la secta más estricta',
                  'Hablaba hebreo y arameo con fluidez',
                ],
              },
              right: {
                title: 'En el mundo romano',
                items: [
                  'Ciudadano romano de nacimiento',
                  'Nacido en Tarso — ciudad universitaria',
                  'Protección legal completa del Imperio',
                  'Acceso a tribunales y funcionarios romanos',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Muerte de Esteban',
      intro: {
        romanNumeral: 'II',
        title: 'Hechos 7 — El Primer Mártir y Saulo como Testigo',
        paragraphs: [
          'La primera aparición de Saulo en el relato de Lucas es siniestra: está presente en la lapidación del primer mártir cristiano, guardando los mantos de quienes arrojan las piedras.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El martirio de Esteban',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 7:57-8:1',
              text: 'Entonces ellos, dando grandes voces, se taparon los oídos, y arremetieron a una contra él. Y echándole fuera de la ciudad, le apedrearon; y los testigos pusieron sus ropas a los pies de un joven que se llamaba Saulo... Y Saulo consentía en su muerte.',
            },
            {
              type: 'paragraph',
              text: 'La frase "consentía en su muerte" en griego (syneudokōn) implica más que pasividad: es aprobación activa. Saulo no lanzó piedras pero fue parte del asesinato. Lucas menciona a Saulo aquí por dos razones: para establecer su presencia en el momento fundacional de la persecución, y quizás para sugerir que el sermón de Esteban — el discurso más largo del libro de los Hechos — cayó en sus oídos. Algo en ese momento quedó sembrado.',
            },
            {
              type: 'deep_dive',
              title: 'El discurso de Esteban y su impacto posible en Saulo',
              paragraphs: [
                'El sermón de Esteban en Hechos 7 es un recorrido por la historia de Israel que concluye con una acusación directa al Sanedrín: "¡Duros de cerviz, e incircuncisos de corazón y de oídos! vosotros resistís siempre al Espíritu Santo; como vuestros padres, así también vosotros." (Hechos 7:51).',
                'Este sermón fue pronunciado ante el Sanedrín, y Saulo estaba presente. Alguien con el intelecto y la formación teológica de Saulo no pudo haber ignorado los argumentos escriturales de Esteban. La violencia de la reacción — tapándose los oídos — sugiere que los argumentos fueron incómodos.',
                'Algunos estudiosos proponen que las semillas de la conversión de Saulo comenzaron a germinar en ese momento, aunque la planta tardaría tiempo en crecer. El recuerdo del rostro de Esteban "como el rostro de un ángel" (Hechos 6:15) pudo haber perseguido a Saulo en los meses posteriores.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Persecución Sistemática',
      intro: {
        romanNumeral: 'III',
        title: 'Hechos 8:3 — "Asolaba la Iglesia"',
        paragraphs: [
          'La persecución de Saulo no fue improvisada. Fue metódica, casa por casa, ciudad por ciudad. Él fue el arquitecto del primer gran esfuerzo organizado para exterminar el movimiento cristiano.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El método de la persecución',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 8:3',
              text: 'Y Saulo asolaba la iglesia, y entrando casa por casa, arrastraba a hombres y a mujeres, y los entregaba en la cárcel.',
            },
            {
              type: 'paragraph',
              text: 'La palabra griega para "asolaba" (elymaineto) es la misma que se usa para describir a una fiera salvaje destrozando su presa. No es lenguaje neutral. Saulo iba casa por casa — no esperaba que la gente llegara a espacios públicos. La búsqueda era activa, domiciliaria, sistemática. Arrastraba tanto hombres como mujeres, sin distinción. El efecto fue inmediato: Hechos 8:1 dice que "todos fueron esparcidos por las tierras de Judea y de Samaria," lo que paradójicamente extendió el evangelio.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Martirio de Esteban',
                  text: 'Saulo presente, guarda las ropas, consiente en la muerte. Hechos 7.',
                  ref: 'Hechos 7:58',
                  color: 'red',
                },
                {
                  label: 'Dispersión de Jerusalén',
                  text: 'La persecución de Saulo dispersa a los creyentes. Paradójicamente, extiende el evangelio.',
                  ref: 'Hechos 8:1-4',
                  color: 'red',
                },
                {
                  label: 'Cartas para Damasco',
                  text: 'Saulo pide autoridad del sumo sacerdote para arrestar creyentes en Damasco.',
                  ref: 'Hechos 9:1-2',
                  color: 'red',
                },
                {
                  label: 'El camino a Damasco',
                  text: 'La luz, la voz, la caída. El perseguidor se convierte.',
                  ref: 'Hechos 9:3-9',
                  color: 'gold',
                },
              ],
            },
          ],
        },
        {
          id: 't5',
          title: 'Las cartas para arrestar en Damasco',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 9:1-2',
              text: 'Saulo, respirando aún amenazas y muerte contra los discípulos del Señor, vino al sumo sacerdote, y le pidió cartas para las sinagogas de Damasco, a fin de que si hallase algunos hombres o mujeres de este Camino, los trajese presos a Jerusalén.',
            },
            {
              type: 'paragraph',
              text: 'La frase "respirando amenazas y muerte" (emphainōn aipeilas kai phonon) describe a alguien cuya entera energía vital estaba orientada a la destrucción. Saulo no era un funcionario cumpliendo una orden — era el motor de la persecución. El viaje a Damasco era su propia iniciativa. Damasco estaba a más de 200 kilómetros de Jerusalén. La Iglesia se había extendido hasta allí, y Saulo fue por ella.',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo es posible que alguien persiga a creyentes inocentes sinceramente convencido de servir a Dios? ¿Qué dice eso sobre la diferencia entre religiosidad intensa y rectitud genuina? ¿Has visto esa diferencia en ti mismo?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Hombre Absolutamente Convencido',
      intro: {
        romanNumeral: 'IV',
        title: 'La Conciencia de Saulo — Ni Hipócrita ni Malicioso',
        paragraphs: [
          'El aspecto más perturbador de la historia de Saulo es que no era un hombre malo haciendo algo que sabía que era malo. Era un hombre bueno, brillante y sincero haciendo algo terriblemente equivocado.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Conciencia limpia, acción destructiva',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Gálatas 1:13-14',
              text: 'Porque ya habéis oído acerca de mi conducta en otro tiempo en el judaísmo, que perseguía sobremanera a la iglesia de Dios, y la asolaba; y en el judaísmo aventajaba a muchos de mis contemporáneos en mi nación, siendo mucho más celoso de las tradiciones de mis padres.',
            },
            {
              type: 'paragraph',
              text: 'En Hechos 23:1 Pablo declara ante el Sanedrín: "Varones hermanos, yo con toda buena conciencia he vivido delante de Dios hasta el día de hoy." Y en 1 Timoteo 1:13 reconoce: "antes era blasfemo, perseguidor e injuriador; mas fui recibido a misericordia, porque lo hice por ignorancia, en incredulidad." La conciencia limpia y la conducta destructiva no se excluyen mutuamente. Saulo nos enseña que la sinceridad no garantiza la corrección.',
            },
            {
              type: 'doctrine_box',
              title: 'Saulo y el testimonio de José Smith',
              body: 'El paralelismo entre Saulo y la historia de la Restauración es notable: ambos involucran a un hombre profundamente religioso cuya visión del mundo fue radicalmente reorientada por una intervención divina directa. José Smith también encontró a Cristo en un momento de búsqueda sincera. La Restauración no vino para condenar a los que buscaban a Dios en otras tradiciones, sino para añadir luz donde había luz parcial.',
            },
            {
              type: 'key_points',
              title: 'Lo que Saulo revela sobre la naturaleza humana',
              points: [
                'La sinceridad religiosa no es garantía de corrección doctrinal o moral',
                'Los sistemas de creencias pueden justificar casi cualquier conducta si se les da suficiente autoridad',
                'La inteligencia y la erudición no protegen automáticamente contra el error fundamental',
                'La misericordia divina alcanza incluso al perseguidor convencido de su rectitud',
                'El pasado de perseguidor no descalifica el ministerio futuro — Pablo lo usa como evidencia de la gracia',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué te dice sobre la naturaleza de Dios el hecho de que eligiera a Saulo — el mayor perseguidor de la Iglesia — como su instrumento principal para extender el evangelio a los gentiles? ¿Qué implica eso sobre las personas que hoy se oponen al evangelio?',
            },
          ],
        },
      ],
    },
  ],
}
