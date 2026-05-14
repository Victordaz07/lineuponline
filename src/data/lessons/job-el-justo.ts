import type { Lesson } from '@/types/doctrine'

export const jobElJusto: Lesson = {
  id: 'job-el-justo',
  moduleId: 'personajes-escrituras',
  title: 'El Justo',
  subtitle: '"¿Has considerado a mi siervo Job?"',
  description: 'Job 1 presenta al hombre más recto de la tierra enfrentando una prueba que no mereció y que nunca comprendió del todo. La corte celestial, la apuesta de Satanás y las cuatro catástrofes en un solo día constituyen el prólogo más perturbador de la Escritura.',
  level: 'AVANZADO',
  icon: '⚖️',
  duration: 30,
  order: 4510,
  status: 'PUBLISHED',
  submoduleGroup: 'job',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Prólogo Celestial',
      intro: {
        romanNumeral: 'I',
        title: 'Job 1 — La Escena que Job Nunca Vio',
        paragraphs: [
          'El libro de Job comienza en el cielo antes de comenzar en la tierra. Este prólogo narrativo es lo que diferencia el libro de Job de cualquier otro tratado sobre el sufrimiento: el lector sabe desde la primera página lo que Job jamás supo.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La corte celestial y la apuesta del Acusador',
          blocks: [
            {
              type: 'paragraph',
              text: 'Job 1:6-12 describe una escena única en toda la Escritura: los "hijos de Dios" (bene ha-elohim) se presentan ante el Señor, y entre ellos aparece el Adversario — en hebreo ha-satan, el Acusador — cuya función en este texto es la de fiscal o interrogador. Cuando Dios señala a Job como hombre sin paralelo en integridad, el Acusador lanza su hipótesis: "¿Acaso teme Job a Dios de balde?" La objeción es filosófica y devastadora: Job solo es fiel porque le va bien. Quita las bendiciones y maldecirá a Dios en su rostro.',
            },
            {
              type: 'highlight_verse',
              reference: 'Job 1:8',
              text: 'Y Jehová dijo a Satanás: ¿No has considerado a mi siervo Job, que no hay otro como él en la tierra, varón perfecto y recto, temeroso de Dios y apartado del mal?',
            },
            {
              type: 'doctrine_box',
              title: 'Ha-Satan en Job: ¿El Diablo?',
              body: 'En Job 1-2, "ha-satan" lleva artículo definido en hebreo, lo que indica que es un título, no un nombre propio: "el Acusador" o "el Adversario." En este contexto aún forma parte de la corte celestial y actúa con permiso divino. Es distinto del Lucifer de Isaías 14 y del diablo del Nuevo Testamento, aunque los teólogos los identifican. Lo que importa para Job es la función narrativa: hay una fuerza que desafía la autenticidad de la fe de los justos.',
            },
            {
              type: 'key_points',
              title: 'Elementos del prólogo celestial',
              points: [
                'La escena ocurre en el cielo antes que en la tierra (Job 1:6)',
                'Dios mismo señala a Job — la prueba comienza por iniciativa divina',
                'El Acusador no actúa solo: necesita permiso y opera dentro de límites',
                'Job nunca recibe explicación de esta escena celestial',
                'El lector sabe lo que Job no sabe — esto crea la ironía central del libro',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Job: "Íntegro y Recto"',
      intro: {
        romanNumeral: 'II',
        title: 'Una Descripción sin Paralelo en la Biblia',
        paragraphs: [
          'El texto hebreo describe a Job con cuatro atributos: tam (íntegro, completo), yashar (recto), yere Elohim (temeroso de Dios) y sar me-ra (apartado del mal). Ningún otro personaje del Antiguo Testamento recibe exactamente esta descripción.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El retrato de un hombre íntegro',
          blocks: [
            {
              type: 'paragraph',
              text: 'Job 1:1-5 no es solo una introducción narrativa — es una declaración doctrinal. Job no es presentado como un profeta, ni como un israelita (hay debate sobre si era gentil de la tierra de Uz), sino simplemente como un hombre que vivía bien. Su integridad se manifestaba en lo concreto: después de que sus hijos festejaban, Job ofrecía holocaustos por si acaso alguno había "blasfemado a Dios en su corazón" (Job 1:5). Intercedía preventivamente por la posible transgresión de sus hijos.',
            },
            {
              type: 'central_quote',
              text: 'Y este hombre era el más grande de todos los orientales.',
              attribution: 'Job 1:3',
            },
            {
              type: 'deep_dive',
              title: 'Job y la Tradición de Sabiduría',
              paragraphs: [
                'El libro de Job pertenece a la literatura de sabiduría (junto con Proverbios y Eclesiastés), un género que cruza fronteras culturales y nacionales en el antiguo Cercano Oriente. Existen textos babilónicos similares — el "Job babilónico" (Ludlul bel nemeqi) y el "Diálogo del pesimismo" — que plantean preguntas parecidas sobre el sufrimiento del justo.',
                'Lo que distingue a Job de sus equivalentes culturales es la teología: en Job, el hombre justo tiene acceso a Dios, puede quejarse directamente ante él, y al final Dios responde. En los textos babilónicos, los dioses son impredecibles y caprichosos. En Job, Dios es moralmente coherente aunque misterioso.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Cuatro Catástrofes',
      intro: {
        romanNumeral: 'III',
        title: 'Un Solo Día — Todo lo Que Tenía',
        paragraphs: [
          'Job 1:13-19 narra cuatro catástrofes consecutivas con una economía narrativa brutal. Cuatro mensajeros llegan uno tras otro, y cada uno termina diciendo: "y solo yo escapé para darte la noticia."',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La estructura narrativa de las catástrofes',
          blocks: [
            {
              type: 'steps',
              title: 'Las cuatro catástrofes de Job 1',
              steps: [
                'Los sabeos atacan y roban los bueyes y asnos; matan a los criados (v. 14-15)',
                'Fuego del cielo consume las ovejas y a los pastores (v. 16)',
                'Los caldeos se llevan los camellos en tres tropas; matan a los criados (v. 17)',
                'Un gran viento del desierto derrumba la casa donde estaban los diez hijos — todos mueren (v. 18-19)',
              ],
            },
            {
              type: 'paragraph',
              text: 'La estructura narrativa es deliberada: cuatro mensajeros, cuatro pérdidas, cuatro veces la frase "y solo yo escapé." El ritmo acumulativo produce un efecto de aplastamiento. Job pierde sus posesiones (vv. 14-17) y luego sus hijos (vv. 18-19). El peor golpe es el último. Y todo ocurre en un solo día.',
            },
            {
              type: 'highlight_verse',
              reference: 'Job 1:21',
              text: 'Y dijo: Desnudo salí del vientre de mi madre, y desnudo volveré allá. Jehová dio, y Jehová quitó; sea el nombre de Jehová bendito.',
            },
            {
              type: 'doctrine_box',
              title: 'La Primera Respuesta de Job: Adoración',
              body: 'La respuesta inmediata de Job a las cuatro catástrofes no es queja ni amargura — es adoración. Rasga su manto (duelo), se rapa la cabeza (luto), y luego se postra y adora. "Jehová dio, y Jehová quitó; sea el nombre de Jehová bendito" (Job 1:21). El texto añade: "En todo esto no pecó Job, ni atribuyó a Dios despropósito alguno" (v. 22). Esta es la fe más robusta que la Escritura puede imaginar: la que persiste cuando todo se ha ido.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Problema del Sufrimiento de los Justos',
      intro: {
        romanNumeral: 'IV',
        title: 'La Pregunta que el Libro Hace — y No Responde Fácilmente',
        paragraphs: [
          'El libro de Job no es una teodicea simple. Plantea la pregunta con toda su crudeza y se niega a dar respuestas baratas. Es, en ese sentido, el texto más honesto de la Escritura.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Por qué el sufrimiento de Job nos importa',
          blocks: [
            {
              type: 'paragraph',
              text: 'Si Job sufriera por sus pecados, el libro no plantearía ningún problema. El problema es que Job no pecó — y el lector lo sabe desde el principio. Esto convierte cada argumento de sus amigos ("debes haber pecado para merecer esto") en una mentira conocida. Y convierte cada protesta de Job ("soy inocente") en una verdad difícil de escuchar.',
            },
            {
              type: 'compare_grid',
              title: 'Lo que el Prólogo Revela vs. Lo que Job Sabe',
              left: {
                title: 'El lector sabe',
                items: [
                  'Job es genuinamente íntegro (1:1)',
                  'La prueba viene de una apuesta celestial',
                  'Dios mismo inició el proceso (1:8)',
                  'El Acusador opera dentro de límites divinos',
                  'Dios ya consideró a Job digno de confianza',
                ],
              },
              right: {
                title: 'Job no sabe',
                items: [
                  'Por qué sucedió todo esto',
                  'Que existe una escena celestial previa',
                  'Que su sufrimiento es una respuesta a una hipótesis',
                  'Que sus amigos están equivocados desde el principio',
                  'Que Dios lo consideró el más recto de la tierra',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿Hay momentos en tu vida donde has sufrido sin comprender la razón? ¿Cómo responde tu fe al sufrimiento que no tiene explicación aparente?',
            },
            {
              type: 'leader_quote',
              quote: 'No siempre recibimos respuestas a por qué ocurren ciertas cosas. Pero la fe no depende de comprender — depende de confiar en Aquel que sí comprende.',
              name: 'Jeffrey R. Holland',
              role: 'Apóstol',
            },
          ],
        },
      ],
    },
  ],
}
