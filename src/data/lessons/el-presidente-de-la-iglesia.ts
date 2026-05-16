import type { Lesson } from '@/types/doctrine'

export const elPresidenteDeLaIglesia: Lesson = {
  id: 'el-presidente-de-la-iglesia',
  moduleId: 'sacerdocio',
  title: 'El Presidente de la Iglesia',
  subtitle: 'Profeta, Vidente y Revelador — el único que ejerce todas las llaves',
  description:
    'El Presidente de la Iglesia es el único ser en la tierra que ejerce simultáneamente todas las llaves del sacerdocio. No simplemente un administrador — es el portavoz viviente de Cristo ante la Iglesia y el mundo.',
  level: 'AVANZADO',
  icon: '🔱',
  duration: 55,
  order: 14,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Único que Ejerce Todas las Llaves',
      intro: {
        romanNumeral: 'I',
        title: 'La Autoridad que Ningún Otro Tiene',
        paragraphs: ['DyC 107:91-92'],
      },
      topics: [
        {
          id: 't1',
          title: 'Presidente del Alto Sacerdocio',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 107:91-92',
              text: 'Por consiguiente, debe ser el presidente de la iglesia toda, y también es presidente del concilio del Sumo Sacerdocio, habiendo obtenido esta suerte por la vía de la ordenación... y es la cabeza de la iglesia.',
            },
            {
              type: 'paragraph',
              text: 'El Presidente de la Iglesia es el presidente del Alto Sacerdocio de la Iglesia. Todos los Apóstoles sostienen las llaves en reserva; el Presidente las ejerce activamente. Esta distinción es fundamental: todos los miembros del Quórum de los Doce tienen las mismas llaves ordenadas, pero solo el Presidente las ejerce de forma plena y activa.',
            },
            {
              type: 'doctrine_box',
              title: 'La Analogía de la Sala de Interruptores',
              body: 'Imagina que los Apóstoles ordenados son como electricistas que saben exactamente cómo energizar cada circuito de un edificio. Todos tienen el conocimiento y la capacitación. Pero solo uno — el Presidente — está autorizado para activar el interruptor principal. Los demás pueden activar circuitos locales cuando se les autoriza, pero el control general es del Presidente.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Tres títulos, una persona',
          blocks: [
            {
              type: 'key_points',
              title: 'Profeta, Vidente y Revelador',
              points: [
                'PROFETA: Habla en nombre de Dios — puede predecir el futuro pero su función principal es hablar la mente y voluntad de Dios al presente',
                'VIDENTE: Ve lo oculto — cosas pasadas, presentes y futuras que están veladas a los demás (Mosíah 8:13-17)',
                'REVELADOR: Revela nueva verdad — puede abrir nuevas dispensaciones de conocimiento divino al mundo',
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'Mosíah 8:17',
              text: 'Un vidente puede conocer las cosas pasadas, y también las venideras, y por medio de ellas se descubren cosas ocultas, y cosas de otro modo imposibles de conocer; de modo que, por medio de ellas, se ejecutan grandes obras.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Revelación Continua',
      intro: {
        romanNumeral: 'II',
        title: 'El Canon no Está Cerrado',
        paragraphs: ['La doctrina que separa la Restauración del mundo cristiano'],
      },
      topics: [
        {
          id: 't3',
          title: 'La voz del profeta vivo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 1:38',
              text: 'Lo que yo el Señor he hablado, lo he hablado, y no me retracto; y aunque los cielos y la tierra pasen, mi palabra no pasará, sino que todo será cumplido, sea por mi propia voz o por la voz de mis siervos, es lo mismo.',
            },
            {
              type: 'paragraph',
              text: 'Esta revelación establece algo radical: las palabras del profeta vivo tienen el mismo peso que las palabras del Señor. No porque el profeta sea infalible — no lo es — sino porque cuando habla bajo inspiración, sus palabras son las palabras de Cristo. La historia de la Iglesia está llena de momentos en que los miembros tuvieron que elegir entre la tradición conocida y la voz del profeta vivo.',
            },
            {
              type: 'leader_quote',
              name: 'Élder Ezra Taft Benson',
              role: 'Conferencia General, abril 1980',
              quote: 'El profeta vivo es más vital para nosotros que las escrituras del pasado. Siempre ha habido aquellos que se aferraron a las escrituras pasadas... y rechazaron los mensajes del profeta vivo. Eso es lo que hicieron los fariseos. Se basaban en las escrituras pero rechazaban al Cristo viviente.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Revelación vs. preferencia personal',
          blocks: [
            {
              type: 'paragraph',
              text: 'Un error común: tratar cada declaración de un Presidente de la Iglesia como revelación canónica. La doctrina de la Iglesia distingue entre declaraciones hechas bajo inspiración formal (que pueden convertirse en revelación canónica) y opiniones personales del profeta (que pueden ser incorrectas). El Presidente de la Iglesia no es infalible en su vida privada ni en sus preferencias personales — solo en aquello que declara como voluntad de Dios bajo su función apostólica.',
            },
            {
              type: 'doctrine_box',
              title: 'El Estándar de la Revelación Canónica',
              body: 'Para que una declaración del Presidente de la Iglesia se convierta en revelación canónica, normalmente pasa por: (1) Ser presentada a la Primera Presidencia y al Quórum de los Doce, (2) Recibir sustentación unánime de estos líderes, (3) Ser presentada a la Iglesia para sustentación. Las secciones de DyC y las declaraciones oficiales son ejemplos de este proceso.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Sucesión Apostólica',
      intro: {
        romanNumeral: 'III',
        title: 'El Apóstol de Mayor Antigüedad',
        paragraphs: ['Cómo se determina quién será el próximo Presidente'],
      },
      topics: [
        {
          id: 't5',
          title: 'El patrón establecido',
          blocks: [
            {
              type: 'paragraph',
              text: 'Tras la muerte de José Smith en 1844, hubo disputas sobre la sucesión. El argumento de Brigham Young fue que el Quórum de los Doce, como quórum, sostenía todas las llaves — y que su presidente (Brigham era presidente del Quórum de los Doce) era el sucesor natural. El Espíritu confirmó esto de manera dramática cuando Brigham Young habló y muchos testigos vieron el semblante de José Smith sobre él.',
            },
            {
              type: 'paragraph',
              text: 'Desde entonces, el patrón es consistente: el Presidente de la Iglesia es siempre el presidente del Quórum de los Doce — el miembro de más antigüedad en el Quórum. No hay elección, no hay campaña. El "elegido" es el que ha servido más tiempo en el apostolado.',
            },
            {
              type: 'key_points',
              title: 'Por qué este patrón es sabio',
              points: [
                'Elimina la ambición política — nadie puede maniobrar para "ganar" la presidencia',
                'El Señor determina quién llega a ser Presidente a través de cuándo llama a cada Apóstol',
                'El que más tiempo ha servido como Apóstol tiene la mayor experiencia apostólica',
                'La fecha de llamamiento de cada Apóstol está en manos de Dios, no de los hombres',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Apóstol Senior como Testigo Supremo',
      intro: {
        romanNumeral: 'IV',
        title: 'El Presidente es el Apóstol de Mayor Antigüedad',
        paragraphs: ['Su testimonio es el corazón de todo'],
      },
      topics: [
        {
          id: 't6',
          title: 'El Presidente como primer testigo',
          blocks: [
            {
              type: 'paragraph',
              text: 'Todo lo que el Presidente de la Iglesia hace fluye de una función central: es el primer testigo de Cristo en la tierra. Sus discursos, sus declaraciones, sus decisiones administrativas — todo es subordinado a esta misión fundamental. Un Presidente cuya presidencia se recordará no es el que administró mejor la Iglesia, sino el que testificó de Cristo con mayor claridad y poder.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 107:65',
              text: 'El presidente del Sumo Sacerdocio preside sobre todo el Sumo Sacerdocio de la iglesia; y es el presidente del concilio del Sumo Sacerdocio, habiendo obtenido esta suerte por la vía de la ordenación.',
            },
            {
              type: 'leader_quote',
              name: 'Presidente Russell M. Nelson',
              role: 'Conferencia General, octubre 2018',
              quote: 'Testifico que Jesucristo dirige esta Iglesia. Es el Buen Pastor que conoce a Sus ovejas y que es conocido por ellas. Él es el que revela Su mente y voluntad a Su profeta. Por eso, cada vez que les oigo decir "El profeta dijo...", quisiera agregar: "y Jesucristo es quien lo instruyó."',
            },
          ],
        },
        {
          id: 't7',
          title: 'La responsabilidad que nadie puede imaginar',
          blocks: [
            {
              type: 'paragraph',
              text: 'Ningún miembro de la Iglesia puede imaginar completamente el peso del llamamiento de Presidente. No es solo liderar una organización de millones de personas — es ser el canal a través del cual Cristo habla a Su Iglesia restaurada en la tierra. Es saber que las decisiones que tomas afectan el destino eterno de almas. Es mantenerse espiritualmente limpio bajo un nivel de presión, expectativa y escrutinio que ningún cargo político iguala.',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo tratas tú las palabras del Presidente de la Iglesia en tu vida personal? ¿Hay alguna de sus enseñanzas recientes que aún no has aplicado? ¿Por qué?',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Cristo — El Presidente Eterno',
      intro: {
        romanNumeral: 'V',
        title: 'El Único Presidente Perfecto',
        paragraphs: ['Cada presidente mortal apunta a Él'],
      },
      topics: [
        {
          id: 't8',
          title: 'Cristo preside Su propia Iglesia',
          blocks: [
            {
              type: 'paragraph',
              text: 'Algo profundo: la Iglesia no se llama "la Iglesia del Presidente Smith" ni "la Iglesia de Brigham Young". Se llama La Iglesia de Jesucristo. Porque Cristo es, en última instancia, el Presidente. El Presidente de la Iglesia mortal es su representante, su voz, su delegado — pero no el director. Cristo dirige Su Iglesia activamente, a través del Espíritu, a través de la revelación, a través del profeta vivo.',
            },
            {
              type: 'doctrine_box',
              title: 'La Cadena de Autoridad',
              body: 'Padre Celestial → Jesucristo → José Smith (por Priesthood) → Sucesión apostólica continua → Presidente actual de la Iglesia → Primera Presidencia y Doce → Autoridades de área → Presidentes de estaca → Obispos → Miembros. Cada eslabón transmite autoridad real. La cadena nunca se ha roto desde 1829.',
            },
          ],
        },
      ],
    },
  ],
}
