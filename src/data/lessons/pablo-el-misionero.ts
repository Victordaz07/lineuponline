import type { Lesson } from '@/types/doctrine'

export const pabloElMisionero: Lesson = {
  id: 'pablo-el-misionero',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'pablo',
  title: 'El Misionero',
  subtitle: 'Tres viajes, un mundo transformado',
  description:
    'En menos de tres décadas, Pablo recorrió miles de kilómetros a pie, en barco y a caballo, estableciendo iglesias desde Antioquía hasta Roma. Su método, sus sufrimientos y su alegría desde la prisión definen lo que significa ser misionero del evangelio.',
  level: 'BÁSICO',
  icon: '✉️',
  duration: 30,
  order: 5112,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Los Tres Viajes Misioneros',
      intro: {
        romanNumeral: 'I',
        title: 'De Antioquía al Mundo Mediterráneo',
        paragraphs: [
          'Antioquía de Siria fue la base de operaciones misionera de Pablo. Desde allí partieron los tres grandes viajes que plantaron la Iglesia en las ciudades más influyentes del Imperio Romano.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Las ciudades clave del ministerio de Pablo',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los tres viajes misioneros de Pablo (aproximadamente 46-58 d.C.) cubrieron Asia Menor, Grecia y finalmente Roma. El primer viaje (Hechos 13-14) plantó iglesias en Chipre y Galacia. El segundo (Hechos 15:36-18:22) cruzó a Europa: Filipos, Tesalónica, Corinto — tres meses en Corinto establece una de las comunidades más importantes. El tercer viaje (Hechos 18:23-21:16) se centra en Éfeso, tres años que convierten la ciudad en el mayor centro cristiano de Asia.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Primer viaje (~46-48 d.C.)',
                  text: 'Chipre, Antioquía de Pisidia, Iconio, Listra, Derbe. La primera misión formal desde Antioquía.',
                  ref: 'Hechos 13-14',
                  color: 'blue',
                },
                {
                  label: 'Segundo viaje (~49-52 d.C.)',
                  text: 'Filipos, Tesalónica, Berea, Atenas, Corinto (18 meses). El evangelio llega a Europa.',
                  ref: 'Hechos 15:36-18:22',
                  color: 'blue',
                },
                {
                  label: 'Tercer viaje (~52-57 d.C.)',
                  text: 'Éfeso (3 años), Macedonia, Corinto (3 meses), regreso a Jerusalén.',
                  ref: 'Hechos 18:23-21:16',
                  color: 'blue',
                },
                {
                  label: 'Roma (~60-62 d.C.)',
                  text: 'Arrestado en Jerusalén, apela al César. Llega a Roma en cadenas — y predica libremente.',
                  ref: 'Hechos 28',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'key_points',
              title: 'Ciudades estratégicas del ministerio de Pablo',
              points: [
                'Antioquía — base misionera, primera iglesia con mayoría gentil significativa',
                'Corinto — puerto comercial de dos mares, cruce de culturas; Pablo vivió allí 18 meses',
                'Éfeso — capital de Asia Menor, templo de Artemisa, 3 años de ministerio intenso',
                'Filipos — colonia romana en Macedonia, primera iglesia europea',
                'Roma — capital del Imperio, Pablo llegó preso pero predicó con "toda libertad" (Hechos 28:31)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Método Misionero',
      intro: {
        romanNumeral: 'II',
        title: 'Sinagogas, Mercados y Casas Privadas',
        paragraphs: [
          'Pablo no improvisaba. Tenía un método reproducible que siguió en cada ciudad: comenzar en la sinagoga, predicar primero a los judíos, y cuando fue rechazado, volverse a los gentiles temerosos de Dios que ya frecuentaban las sinagogas.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El patrón misionero de Pablo',
          blocks: [
            {
              type: 'steps',
              title: 'El método de Pablo en cada ciudad nueva',
              steps: [
                'Llegar en día de reposo a la sinagoga local — aprovechar la infraestructura religiosa existente',
                'Predicar desde las Escrituras que Jesús es el Mesías prometido — argumento desde la Torá',
                'Ante el rechazo de la sinagoga, volverse a los "temerosos de Dios" — gentiles que ya adoraban al Dios de Israel',
                'Establecer una iglesia en una casa privada — generalmente la de un convertido de recursos',
                'Mantenerse trabajando como fabricante de tiendas — no ser carga económica para la nueva iglesia',
                'Pasar semanas o meses consolidando, luego seguir adelante nombrando ancianos',
              ],
            },
            {
              type: 'paragraph',
              text: 'Los "temerosos de Dios" (phoboumenoi ton Theon) eran gentiles que habían adoptado la ética y la adoración al Dios de Israel sin circuncidarse — el paso que les impedía ser prosélitos completos. Eran el terreno más fértil del ministerio de Pablo porque ya creían en un solo Dios y conocían las Escrituras. Pablo les ofrecía lo que la sinagoga no podía: plena membresía en el pueblo de Dios sin la barrera de la circuncisión.',
            },
            {
              type: 'doctrine_box',
              title: 'La estrategia de las ciudades capitales',
              body: 'Pablo eligió sistemáticamente las capitales y centros comerciales — Corinto, Éfeso, Roma — sobre los pueblos pequeños. Su lógica era misional: desde las ciudades clave, el evangelio se difundiría naturalmente por las rutas comerciales hacia las zonas rurales. No necesitaba ir a cada aldea si plantaba la Iglesia en los nudos de la red comercial. La misma lógica usó la Iglesia en los primeros años de la Restauración con Kirtland, Nauvoo y Salt Lake City.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Los Sufrimientos del Apóstol',
      intro: {
        romanNumeral: 'III',
        title: '2 Corintios 11:24-28 — El Catálogo de Pablo',
        paragraphs: [
          'Pablo hizo algo inusual para un escritor religioso: documentó su propio sufrimiento en detalle clínico. No como queja — sino como evidencia de la autenticidad de su apostolado.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El catálogo del dolor apostólico',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '2 Corintios 11:24-28',
              text: 'De los judíos cinco veces he recibido cuarenta azotes menos uno. Tres veces he sido azotado con varas; una vez apedreado; tres veces he padecido naufragio; una noche y un día he estado como náufrago en alta mar; en caminos muchas veces; en peligros de ríos, peligros de ladrones, peligros de los de mi nación, peligros de los gentiles, peligros en la ciudad, peligros en el desierto, peligros en el mar, peligros entre falsos hermanos; en trabajo y fatiga, en muchos desvelos, en hambre y sed, en muchos ayunos, en frío y en desnudez.',
            },
            {
              type: 'paragraph',
              text: 'Este catálogo es verificable en parte a través de Hechos: el apedreamiento en Listra (Hechos 14:19), los azotes en Filipos (Hechos 16:23). Pero hay naufragios y sufrimientos que Hechos no narra — el libro de los Hechos no es un registro completo de la vida de Pablo, sino una selección narrativa. La cantidad de sufrimiento no documentado supera con creces lo que está documentado.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué hace que alguien soporte este nivel de sufrimiento voluntariamente durante décadas? Pablo tenía alternativas — podía haber vuelto al judaísmo farisaico en cualquier momento. ¿Qué dice su perseverancia sobre la certeza de su convicción?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Carta desde la Cárcel',
      intro: {
        romanNumeral: 'IV',
        title: 'Filipenses — "Me Gozo en el Señor Siempre"',
        paragraphs: [
          'Filipenses es posiblemente la carta más alegre del Nuevo Testamento. Fue escrita desde la prisión. Eso no es una ironía accidental — es el corazón del mensaje.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Alegría desde el encadenamiento',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Filipenses 4:4, 11-13',
              text: 'Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos! [...] He aprendido a contentarme, cualquiera que sea mi situación. Sé vivir humildemente, y sé tener abundancia; en todo y por todo estoy enseñado, así para estar saciado como para tener hambre, así para tener abundancia como para padecer necesidad. Todo lo puedo en Cristo que me fortalece.',
            },
            {
              type: 'paragraph',
              text: 'La palabra "gozo" (chara) y sus derivados aparecen 16 veces en cuatro capítulos. Pablo escribe desde una situación de cautiverio real — probablemente Roma, o quizás Éfeso — rodeado de guardias, sin libertad de movimiento, con la posibilidad real de la ejecución. Y escribe sobre el gozo. No porque ignore su situación, sino porque ha encontrado un gozo que no depende de las circunstancias.',
            },
            {
              type: 'leader_quote',
              quote: 'Pablo no aprendió el contentamiento de manera natural — lo aprendió en la escuela del sufrimiento. El verbo que usa, "he aprendido" (memathēka), implica un proceso de aprendizaje gradual. El contentamiento es una habilidad adquirida, no un don innato.',
              name: 'Gordon B. Hinckley',
              role: 'Presidente de la Iglesia',
            },
            {
              type: 'paragraph',
              text: 'El final de Pablo fue la decapitación bajo el emperador Nerón, probablemente entre el 64 y el 68 d.C. Murió como ciudadano romano (lo que le dio el derecho a ser decapitado en lugar de crucificado). No hay relato en el Nuevo Testamento de su muerte — termina con él predicando en Roma con "toda denuedo y sin impedimento." La última imagen de Pablo en las Escrituras es la de un prisionero que predica libremente.',
            },
          ],
        },
      ],
    },
  ],
}
