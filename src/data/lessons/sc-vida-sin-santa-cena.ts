import type { Lesson } from '@/types/doctrine'

export const scVidaSinSantaCena: Lesson = {
  id: 'sc-vida-sin-santa-cena',
  moduleId: 'la-santa-cena',
  title: 'La Vida sin la Santa Cena',
  subtitle: 'Qué perdemos cuando nos alejamos — y por qué el regreso siempre es posible',
  description:
    'Cuando un miembro de la Iglesia deja de tomar la Santa Cena, no solo pierde un ritual dominical — pierde el mecanismo semanal de acceso a la Expiación. Esta lección explora qué sucede espiritualmente con el alejamiento, cómo funciona el proceso de endurecimiento gradual, y por qué el camino de regreso siempre está abierto.',
  level: 'INTERMEDIO',
  icon: '💔',
  duration: 40,
  order: 5,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'Lo Que Se Pierde',
      intro: {
        romanNumeral: 'I',
        title: 'Lo Que Se Pierde',
        paragraphs: [
          'La promesa de la Santa Cena es "tendréis mi Espíritu consigo." Cuando alguien deja de tomarla, esa promesa deja de renovarse. No es un castigo externo — es una consecuencia natural de un convenio no renovado.',
        ],
      },
      topics: [
        {
          id: 'lo-perdido',
          title: 'La promesa que deja de renovarse',
          subtitle:
            'El Espíritu Santo no es una posesión automática — es una compañía que se confirma y renueva mediante la obediencia y la Santa Cena. Sin renovación, la compañía se debilita.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando alguien se aleja de la Iglesia y deja de tomar la Santa Cena, no pierde su bautismo ni la conferición del don del Espíritu Santo. Pero sí pierde algo real: la renovación semanal de esa promesa. Y las promesas no renovadas — como los músculos no ejercitados — se debilitan.',
              blockId: 'sc5s1p0',
            },
            {
              type: 'highlight_verse',
              text: '"Y si siempre os acordáis de mí, tendréis mi Espíritu con vosotros."',
              reference: '3 Nefi 18:7',
            },
            {
              type: 'highlight_verse',
              text: '"Bienaventurado sois si hacéis estas cosas siempre; y si no lo hacéis, sois desechados de los líderes de mi iglesia."',
              reference: '3 Nefi 18:12',
            },
            {
              type: 'paragraph',
              text: '"Desechados de los líderes de mi iglesia" no significa excomulgación formal. Significa que quien no renueva el convenio semanal se desconecta gradualmente del liderazgo espiritual que viene a través de los canales del sacerdocio y el Espíritu. No es un decreto — es una consecuencia que ocurre naturalmente.',
              blockId: 'sc5s1p1',
            },
            {
              type: 'doctrine_box',
              title: 'Cuatro cosas que se pierden',
              body: 'La Santa Cena es el mecanismo semanal de: (1) RENOVACIÓN de los convenios bautismales — sin renovación, los convenios se vuelven pasado en lugar de presente; (2) ACCESO a la remisión de pecados recientes — la culpa sin resolución semanal se acumula; (3) COMPAÑÍA del Espíritu Santo — la promesa no se renueva, la presencia se vuelve intermitente; (4) CONEXIÓN con el cuerpo de Cristo — la comunidad de convenio que sostiene al discípulo en la prueba. Las cuatro se erosionan gradualmente — no de golpe.',
            },
            {
              type: 'key_points',
              points: [
                '🌊 El Espíritu se retira gradualmente — No de repente. Sin la renovación semanal del convenio, la compañía constante del Espíritu se vuelve intermitente, luego ocasional, luego silenciosa.',
                '🔇 La voz de la conciencia se debilita — El Espíritu habla a través de la conciencia. Cuando se retira, las señales de advertencia se vuelven más débiles. Lo que antes incomodaba deja de incomodar.',
                '🧱 El corazón se endurece — No por maldad deliberada sino por ausencia prolongada. La escritura llama a esto "endurecimiento del corazón" — no necesariamente rebeldía, sino insensibilidad progresiva a lo espiritual.',
                '🏘️ La comunidad de convenio se pierde — Los miembros activos son los compañeros espirituales más directos. Al alejarse, también se pierde esa red de sostén y amor mutuo.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Has sentido en tu propia vida la diferencia entre períodos de Santa Cena regular y períodos sin ella? ¿Qué diferencia notaste en tu capacidad de discernir espiritualmente, de tomar buenas decisiones, de sentir paz interior?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Proceso del Alejamiento',
      intro: {
        romanNumeral: 'II',
        title: 'El Proceso del Alejamiento',
        paragraphs: [
          'Nadie se aleja de la Iglesia de un solo golpe. El alejamiento es un proceso gradual — y la ausencia de la Santa Cena es tanto síntoma como causa del deterioro espiritual.',
        ],
      },
      topics: [
        {
          id: 'proceso',
          title: 'Cómo funciona el alejamiento espiritual',
          subtitle:
            'El alejamiento no comienza con el abandono — comienza con la distancia interna. Primero el corazón se distancia, luego el cuerpo deja de ir. La Santa Cena es lo que más puede frenar ese proceso si se toma honestamente.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El profeta Alma describió el proceso: "se ha caído en transgresión... de tal manera que el Espíritu del Señor, sí, el Espíritu Santo, el cual es el gran regalo, se ha retirado de él" (Alma 12:10). El endurecimiento no ocurre de golpe — es una cadena de elecciones, de ausencias, de silencios no interrumpidos.',
              blockId: 'sc5s2p0',
            },
            {
              type: 'highlight_verse',
              text: '"Y así vemos que el Espíritu del Señor comenzó a retirarse de los nefitas, debido a la maldad y la terquedad de sus corazones."',
              reference: 'Moroni 8:28',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Primera ausencia',
                  text: 'Una semana sin venir. El Espíritu todavía está presente — el convenio sigue vivo en la mente. Pero la cadena se rompe por primera vez.',
                  color: 'gold',
                },
                {
                  label: 'Ausencias repetidas',
                  text: 'El domingo comienza a sentirse opcional. La conciencia sigue hablando, pero menos fuerte. La vida fuera de la Iglesia llena el espacio.',
                  color: 'gold',
                },
                {
                  label: 'Meses sin venir',
                  text: 'La promesa del Espíritu ya no se renueva. Las decisiones se toman sin esa guía. Lo que antes incomodaba espiritualmente deja de incomodar.',
                  color: 'red',
                },
                {
                  label: 'Endurecimiento',
                  text: 'El corazón ya no responde de la misma manera a lo espiritual. No por maldad declarada — sino por ausencia prolongada de la fuente que lo alimentaba.',
                  color: 'red',
                },
                {
                  label: 'El punto de regreso',
                  text: 'Siempre existe. El Señor no cierra la puerta — el miembro se alejó de ella. Volver a la Santa Cena es volver a ese umbral.',
                  color: 'green',
                },
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'Hay quienes dicen que la Iglesia los decepcionó, que un líder los ofendió, que la doctrina no cuadra con sus preguntas. Debajo de todas esas razones hay una pregunta más profunda: ¿Qué pasó con tu relación personal con Jesucristo? Porque esa relación se renueva cada semana en la Santa Cena — y sin ese mecanismo, cualquier razón para quedarse se vuelve más difícil de sostener.',
              name: 'Élder Dieter F. Uchtdorf · "Venid, uníos a nosotros" · Conferencia General, octubre 2013',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que la ausencia no puede quitarle al Señor',
              body: 'El Señor no deja de amar al que se aleja. D&C 18:10–13 enseña que el valor de un alma es grande a los ojos de Dios — y hay más gozo en el cielo por un pecador que se arrepiente que por noventa y nueve justos. La puerta de la reunión sacramental nunca se cierra desde el lado del Señor. Él continúa esperando, buscando, llamando — cada domingo que pasa sin que esa persona regrese.',
            },
            {
              type: 'reflection',
              prompt:
                '¿Conoces a alguien que se ha alejado de la Iglesia? ¿Cómo describirías — no en términos de reglas ni membresía — sino en términos del Espíritu y la gracia que han perdido acceso semanal? ¿Cómo podrías comunicar eso con amor?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Camino de Regreso',
      intro: {
        romanNumeral: 'III',
        title: 'El Camino de Regreso',
        paragraphs: [
          'La puerta de la Santa Cena nunca se cierra desde el lado del Señor. El camino de regreso siempre existe — y muchas veces comienza con un solo domingo.',
        ],
      },
      topics: [
        {
          id: 'regreso',
          title: 'La puerta que el Señor mantiene abierta',
          subtitle:
            'D&C 46:4–5 instruye que no se debe alejar de la reunión sacramental a nadie que sinceramente busque el reino. La bienvenida es del Señor — y es incondicional para el que regresa con honestidad.',
          blocks: [
            {
              type: 'highlight_verse',
              text: '"También se os manda no desechar de vuestras reuniones sacramentales a ninguno que pertenezca a la iglesia… Y además, os digo que no desecharéis de vuestros servicios sacramentales a nadie que sinceramente esté buscando el reino."',
              reference: 'Doctrina y Convenios 46:4–5',
            },
            {
              type: 'paragraph',
              text: 'El Señor hizo una distinción importante: quien ha transgredido gravemente puede necesitar reconciliarse antes de participar en los emblemas. Pero quien "sinceramente está buscando el reino" — el que regresa con dudas, heridas, vergüenza, preguntas sin respuesta — ese siempre es bienvenido en la reunión sacramental. La Santa Cena es el lugar para el que regresa, no solo para el que nunca se fue.',
              blockId: 'sc5s3p0',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que significa volver',
              body: 'Volver a la Santa Cena no es solo volver a un ritual — es volver al mecanismo del convenio. Es abrir de nuevo la posibilidad de tener "su Espíritu consigo." No se requiere haber resuelto todos los conflictos doctrinales, todas las preguntas, todas las ofensas. Se requiere ser sincero. Buscar el reino con honestidad es suficiente para sentarse en esa reunión y, cuando el corazón lo permita, recibir los emblemas.',
            },
            {
              type: 'leader_quote',
              quote:
                'Si te has alejado, por favor sepas esto: la puerta nunca se cerró de nuestro lado. El Salvador te conoce. Conoce tu nombre. Y cada domingo que el pan y el agua pasan por los pasillos de su Iglesia, Él piensa en ti.',
              name: 'Élder Jeffrey R. Holland · Conferencia General, octubre 2012',
            },
            {
              type: 'steps',
              title: 'El camino de regreso, paso a paso',
              steps: [
                'Un solo domingo — Entrar a la reunión sacramental. Sin presión de hacer todo perfecto. Solo estar. Escuchar el himno. Observar.',
                'Recibir los emblemas — No se requiere haber resuelto todo. Se requiere honestidad. Si puedes hacer la promesa sinceramente, hazla.',
                'Hablar con alguien — El obispo es un pastor, no un juez de primer golpe. Un amigo miembro. Un maestro ministerial. La reconexión comienza con una conversación.',
                'Repetir — El regreso no es un evento único. Es la decisión de volver el siguiente domingo también. Y el siguiente. Y el siguiente.',
                'La promesa se cumple — A medida que el convenio se renueva semana a semana, la compañía del Espíritu regresa. No de golpe — pero de manera real, creciente e innegable.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Hay alguien en tu familia o tu círculo que se ha alejado? ¿Qué podrías decirle sobre lo que significa volver a la Santa Cena — no en términos de reglas o membresía, sino en términos del Espíritu y la gracia que les espera cada domingo?',
            },
          ],
        },
      ],
    },
  ],
}
