import type { Lesson } from '@/types/doctrine'

export const vestimentaSacerdocio: Lesson = {
  id: 'vestimenta-sacerdocio',
  moduleId: 'vida-familiar-personal',
  title: 'Vestimenta y Preparación para el Sacerdocio',
  subtitle: 'Cómo honramos al Señor en cómo nos presentamos',
  description:
    'La camisa blanca no es un mandamiento — es una expresión de reverencia. Por qué nos preparamos físicamente para representar al Señor, cuándo hacerlo, cómo adaptarlo al contexto, y cómo enseñarlo en el hogar.',
  level: 'BÁSICO',
  icon: '👔',
  duration: 45,
  order: 5,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Principio que Lo Explica Todo',
      intro: {
        romanNumeral: 'I',
        title: 'El Principio que Lo Explica Todo',
        paragraphs: [
          'Antes de hablar de camisas blancas o corbatas, hay que entender el principio detrás de todo: cuando un portador del sacerdocio se presenta a oficiar una ordenanza, no se está representando a sí mismo. Está representando al Señor Jesucristo. Eso cambia completamente la conversación.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Corazón se Expresa en Cómo nos Presentamos',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'El Señor no mira lo que mira el hombre; pues el hombre mira lo que está delante de sus ojos, pero el Señor mira el corazón.',
              reference: '1 Samuel 16:7',
            },
            {
              type: 'paragraph',
              text: 'Este versículo se usa a veces para decir que la vestimenta no importa — pero ese no es su mensaje completo. Dios mira el corazón, sí. Pero nuestro corazón se expresa en lo que hacemos con el cuerpo. La forma en que elegimos presentarnos cuando vamos a representar al Señor dice algo sobre cómo valoramos ese privilegio.',
            },
            {
              type: 'highlight_verse',
              text: 'No os ataviéis con vestidos costosos, pero atavíaos con ropa limpia; y no os aventajéis los unos a los otros con joyas ni adornos vanos.',
              reference: 'Doctrina y Convenios 42:40–41',
            },
            {
              type: 'paragraph',
              text: 'La instrucción del Señor es precisa: no ropa costosa, sino ropa limpia. No extravagancia, sino dignidad. Este principio —sencillez limpia, no lujo— es exactamente lo que la camisa blanca representa en el contexto del sacerdocio.',
            },
            {
              type: 'doctrine_box',
              title: '¿Es la camisa blanca un mandamiento?',
              body: 'No. En las Escrituras no aparece como mandamiento. No es una regla universal para toda la Iglesia en todas las culturas. Lo que sí existe es un principio doctrinal claro: cuando nos preparamos para oficiar en el nombre del Señor, nuestra presentación debe reflejar reverencia, limpieza y dignidad. La camisa blanca es la expresión práctica de ese principio en muchas culturas — una invitación, no una exigencia. La diferencia es importante.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: '/images/vestimenta-sacerdocio/santa-cena-oracion.jpg',
              alt: 'Joven con camisa blanca y corbata ofreciando la Santa Cena con reverencia',
              caption: 'La presentación digna al oficiar es una expresión visible de lo que hay en el corazón.',
              contextCard: { label: 'Preparación para oficiar' },
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: '¿Cuándo Necesitamos Prepararnos?',
      intro: {
        romanNumeral: 'II',
        title: '¿Cuándo Necesitamos Prepararnos?',
        paragraphs: [
          'Hay momentos específicos en los que el sacerdocio que portamos nos llama a una preparación especial — no porque el Señor exija ropa cara, sino porque esos momentos son sagrados y nuestra preparación refleja que los reconocemos como tales.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Las Ocasiones del Sacerdocio',
          blocks: [
            {
              type: 'key_points',
              title: 'Momentos que requieren preparación especial',
              points: [
                '🍞 Oficiar la Santa Cena — bendecir y repartir el pan y el agua a la congregación',
                '🤲 Dar bendiciones del sacerdocio — de salud, de consuelo, de padre, o consagrar aceite',
                '🎤 Dirigir o presidir — conducir reuniones del quórum, ser orador, presidir actividades',
                '💧 Oficiar ordenanzas — bautismos, confirmaciones, conferir el sacerdocio',
                '🏛️ Servir en el templo — como obrero o participante en ordenanzas',
                '📣 Representar al Señor como misionero — en el campo o en el ministerio de miembros',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Pero todo se haga decentemente y con orden.',
              reference: '1 Corintios 14:40',
            },
            {
              type: 'paragraph',
              text: 'Pablo escribe esto sobre el orden en las reuniones, pero el principio aplica a la presentación: todo lo que hacemos en el nombre del Señor merece hacerse con orden y dignidad. Cuando vamos a oficiar en una ordenanza, llegamos preparados — espiritual y físicamente.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: '/images/vestimenta-sacerdocio/ocasiones-sacerdocio.jpg',
              alt: 'Collage de las seis ocasiones del sacerdocio: Santa Cena, bendición, bautismo, templo, misión, reunión',
              caption: 'Cada una de estas ocasiones representa al Señor — nuestra preparación debe reflejarlo.',
              contextCard: { label: 'Ocasiones del sacerdocio' },
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Sí se espera',
                items: [
                  'Ropa limpia y en buen estado',
                  'Camisa blanca o de color claro',
                  'Pantalón oscuro',
                  'Presentación aseada y digna',
                  'Preparación espiritual previa — oración, meditación',
                ],
              },
              right: {
                title: 'No se requiere',
                items: [
                  'Ropa de marca o costosa',
                  'Traje o saco elaborado',
                  'Corbata si tu cultura no la usa',
                  'Vestimenta idéntica a la de otros hermanos',
                  'Sacrificio económico para comprar ropa nueva',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Camisa Blanca — Símbolo, No Regla',
      intro: {
        romanNumeral: 'III',
        title: 'La Camisa Blanca — Símbolo, No Regla',
        paragraphs: [
          'En la mayoría de las culturas donde opera la Iglesia, la camisa blanca se ha convertido en el estándar visual para los portadores del sacerdocio que oficían. Entender por qué — y también sus límites — ayuda a enseñar este principio con claridad y sin rigidez.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Por Qué el Blanco y Cómo Adaptarlo al Contexto',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Eran humildes, humildes en el corazón, usando vestiduras limpias y sencillas, con el propósito de que sus cuerpos no fuesen adornados con gran extravagancia.',
              reference: 'Alma 1:26–27',
            },
            {
              type: 'key_points',
              title: 'Por qué el blanco tiene significado en el sacerdocio',
              points: [
                'Pureza — el blanco simboliza limpieza, santidad y estado de preparación espiritual',
                'Unidad — cuando todos los que ofician visten de manera similar, hay un sentido de unidad visible en el servicio',
                'Reverencia — es una expresión silenciosa de que este momento es diferente a lo cotidiano',
                'Conexión con el templo — el blanco nos recuerda las vestiduras sagradas que usamos en el templo',
                'Sencillez — no es ropa costosa; cualquier hermano, en cualquier nivel económico, puede tener una camisa blanca limpia',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Los varones que administran la Santa Cena deben vestir de forma modesta y aseada. Si es posible, deben usar camisas blancas.',
              name: 'Manual General de la Iglesia de Jesucristo',
              role: 'Sección 18.9.3 — Administración de la Santa Cena',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: '/images/vestimenta-sacerdocio/vestimenta-contextos.jpg',
              alt: 'Comparación visual de vestimenta apropiada para oficiar en clima frío (camisa blanca + corbata + saco) versus clima tropical (camisa blanca + pantalón, manga corta)',
              caption: 'El principio es el mismo en todos los climas; la aplicación se adapta al contexto. La limpieza y la dignidad no dependen del clima.',
              contextCard: { label: 'Vestimenta apropiada por contexto' },
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Climas fríos / Contextos formales',
                items: [
                  'Camisa blanca + corbata + pantalón oscuro',
                  'Saco o americana (gris, azul marino)',
                  'Manga larga — parte del protocolo formal',
                  'Abrigo encima si el clima lo requiere',
                ],
              },
              right: {
                title: 'Climas cálidos / Tropicales',
                items: [
                  'Camisa blanca + pantalón oscuro',
                  'Sin saco — innecesario e incómodo',
                  'Manga corta completamente aceptable',
                  'Lo esencial: limpieza, blanco, pantalón digno',
                ],
              },
            },
            {
              type: 'deep_dive',
              badge: 'Para el hogar',
              title: 'Cómo enseñar este principio a los hijos sin crear rigidez',
              paragraphs: [
                'El error más común al enseñar vestimenta para el sacerdocio es convertirlo en una regla sin principio. "Tienes que usar camisa blanca porque así se hace" — esa explicación crea obediencia sin comprensión. Cuando el hijo crezca y nadie lo supervise, la regla sin principio desaparece.',
                'La enseñanza correcta conecta la ropa con el significado: "Cuando vas a representar al Señor, tu presentación muestra cómo valoras ese privilegio. No es ropa cara — es ropa limpia y digna. No es rigidez — es reverencia." Esa explicación crea comprensión que dura.',
                'Para familias con recursos limitados: una camisa blanca limpia, bien planchada, y un pantalón oscuro es todo lo que se necesita. El principio nunca fue "vístete caro" — el principio es "vístete dignamente para el Señor."',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Para Los Que Están Aprendiendo',
      intro: {
        romanNumeral: 'IV',
        title: 'Para Los Que Están Aprendiendo',
        paragraphs: [
          'Nadie nace sabiendo estas cosas. Cada portador del sacerdocio —cada padre que enseña a su hijo— pasó por un proceso de aprendizaje. El Señor honra la disposición sincera, no la perfección de la ropa.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Crecer Poco a Poco — El Señor Honra la Disposición',
          blocks: [
            {
              type: 'paragraph',
              text: 'Si eres miembro nuevo, o si estás enseñando a alguien que acaba de recibir el sacerdocio: no hay prisa y no hay vergüenza en no saber. Estas cosas se aprenden observando, preguntando y practicando. Nadie en la Iglesia espera perfección desde el primer día.',
            },
            {
              type: 'key_points',
              title: 'Pasos graduales para los que están comenzando',
              points: [
                'El primer mes — lo más importante es tu participación en la Santa Cena; la ropa es secundaria',
                'Al tercer mes — habrás observado cómo se visten los hermanos de tu rama o barrio',
                'A los seis meses — ya tienes contexto para hacer ajustes si lo deseas',
                'Al año — el principio estará interiorizado y la presentación será natural',
                'Siempre — si no tienes camisa blanca, lo que tienes limpio y digno es suficiente para comenzar',
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: '/images/vestimenta-sacerdocio/padre-hijo-preparacion.jpg',
              alt: 'Padre enseñando a su hijo adolescente a preparar su camisa blanca antes de ir a la iglesia',
              caption: 'La preparación para el sacerdocio se enseña en el hogar — con paciencia, con principios, y con el ejemplo.',
              contextCard: { label: 'Enseñar en el hogar' },
            },
            {
              type: 'highlight_verse',
              text: 'Yo honraré a los que me honran, y los que me desprecian serán tenidos en poco.',
              reference: '1 Samuel 2:30',
            },
            {
              type: 'paragraph',
              text: 'Esta promesa no está condicionada a tener un saco nuevo. Está condicionada al honor — a que el corazón reconozca la sacralidad del momento y lo refleje en cómo se presenta. Un hermano en Centroamérica con una camisa blanca de cinco dólares que sirve con devoción honra al Señor más que un hermano con traje italiano que no piensa en Quién representa.',
            },
            {
              type: 'leader_quote',
              quote: 'La vestimenta no determina tu valor ni tu espiritualidad. El Señor mira el corazón. Ninguna camisa blanca puede compensar un corazón lleno de orgullo. Tampoco un corazón sincero es invalidado por no tener la ropa "correcta". Lo que buscamos es que la presentación exterior refleje la preparación interior.',
              name: 'Principio de las Escrituras',
              role: 'Síntesis de 1 Samuel 16:7 y D&C 42:40–41',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo te preparas actualmente antes de oficiar o asistir a la iglesia? ¿Hay algún ajuste sencillo que podrías hacer para que tu preparación exterior refleje mejor lo que hay en tu corazón? ¿Cómo podrías enseñar este principio — no como regla, sino como expresión de reverencia — a los hijos o jóvenes a quienes enseñas?',
            },
          ],
        },
      ],
    },
  ],
}
