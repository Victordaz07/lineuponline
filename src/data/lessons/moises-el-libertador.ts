import type { Lesson } from '@/types/doctrine'

export const moisesElLibertador: Lesson = {
  id: 'moises-el-libertador',
  moduleId: 'personajes-escrituras',
  title: 'Moisés — El Libertador de Israel',
  subtitle: 'YHWH contra los dioses de Egipto — la guerra de plagas',
  description: 'El nombre sagrado "YO SOY EL QUE SOY," las 10 plagas como confrontación directa contra las deidades egipcias, la Pascua como tipo profético de la Expiación de Cristo, y la travesía del Mar Rojo. La liberación de Israel fue a la vez histórica y tipológica.',
  level: 'INTERMEDIO',
  icon: '🔥',
  duration: 30,
  order: 3512,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'moises',
  studySections: [
    {
      id: 's1',
      title: 'El nombre que no se podía pronunciar',
      intro: {
        romanNumeral: 'I',
        title: 'YHWH — El Existente Eterno',
        paragraphs: [
          'Éxodo 3:14 no es solo una respuesta a una pregunta — es la revelación más cargada teológicamente de todo el Antiguo Testamento.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'YO SOY EL QUE SOY',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Éxodo 3:13-14',
              text: 'Si ellos me preguntaren: ¿Cuál es su nombre? ¿Qué les responderé? Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros.',
            },
            {
              type: 'paragraph',
              text: 'El nombre YHWH (יהוה) deriva de la raíz hebrea hayah — "ser", "existir", "llegar a ser". Es el tetragrama sagrado, tan reverenciado que los judíos sustituyeron en la lectura en voz alta con "Adonai" (Señor) — práctica que perpetuaron las traducciones griegas y luego las castellanas al escribir "Señor" en versalitas donde el original dice YHWH. La forma "Jehová" es una hibridación medieval de las consonantes YHWH con las vocales de Adonai.',
            },
            {
              type: 'doctrine_box',
              title: 'YHWH es el Jesucristo premortal',
              body: 'La teología restaurada enseña que el YHWH del Antiguo Testamento es Jesucristo en su forma premortal — el mismo que, ya encarnado, declaró "Antes que Abraham fuese, yo soy" (Juan 8:58). Cuando usó "Ego eimi" (Yo Soy) en griego, los líderes religiosos intentaron apedrearlo de inmediato — porque entendieron exactamente que estaba reclamando ser el YHWH que habló a Moisés en Éxodo 3. No lo apedrearon por hereje sino por blasfemo: el hombre frente a ellos afirmaba ser el Dios eterno.',
            },
            {
              type: 'key_points',
              title: 'Lo que el nombre YHWH revela sobre Dios',
              points: [
                '"El que Es" — su existencia es inherente y necesaria, no contingente',
                'Eterno en todas las direcciones: sin principio de días ni fin de años',
                'Presente activo: no un dios distante sino uno que actúa en la historia',
                'El mismo ayer, hoy y siempre — el fundamento de Su confiabilidad',
                'Es el nombre personal de Dios, el que usaban Sus profetas al relacionarse con Él',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las 10 plagas como guerra de dioses',
      intro: {
        romanNumeral: 'II',
        title: 'Éxodo 7-12 — YHWH Derrota a los Dioses de Egipto',
        paragraphs: [
          'Cada plaga no fue aleatoria — fue una declaración de guerra teológica contra una deidad egipcia específica.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La lógica teológica detrás de las plagas',
          blocks: [
            {
              type: 'paragraph',
              text: 'Éxodo 12:12 es explícito: "Ejecutaré mis juicios en todos los dioses de Egipto. Yo Jehová." Las plagas no son simplemente castigos naturales amplificados — son ataques dirigidos contra el panteón egipcio. Los egipcios entendieron exactamente esto: su sistema religioso estaba siendo atacado directamente, deidad por deidad, dominio por dominio.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Plaga 1', text: 'Sangre en el Nilo — ataque a Hapi (dios del Nilo) y Osiris (cuya sangre era el Nilo)', ref: 'Éxodo 7:14-25', color: 'red' },
                { label: 'Plaga 4', text: 'Moscas — ataque a Khepri (dios escarabajo, patrón de la transformación solar)', ref: 'Éxodo 8:20-32', color: 'blue' },
                { label: 'Plaga 9', text: 'Tinieblas — ataque directo a Ra, el dios sol supremo del panteón egipcio', ref: 'Éxodo 10:21-29', color: 'blue' },
                { label: 'Plaga 10', text: 'Muerte de los primogénitos — ataque a Faraón mismo, considerado hijo del dios Ra', ref: 'Éxodo 11-12', color: 'red' },
              ],
            },
            {
              type: 'deep_dive',
              title: 'Las Plagas y el Panteón Egipcio',
              paragraphs: [
                'La primera plaga — agua convertida en sangre — atacó al Nilo, que los egipcios veneraban como la sangre de Osiris y la fuente de vida del dios Hapi. La segunda plaga (ranas) atacó a Heqet, la diosa rana de la fertilidad y el nacimiento. La tercera (piojos) desafió a Geb, el dios de la tierra.',
                'La novena plaga — tres días de tinieblas absolutas — fue el ataque más visible al dios Ra, la deidad suprema del panteón egipcio, con quien el Faraón se identificaba directamente. Que el dios de Israel pudiera apagar el sol egipcio era una declaración de superioridad absoluta.',
                'La décima plaga fue la más personal: el Faraón era considerado el hijo viviente del dios Ra, su representante en la tierra. La muerte del primogénito del Faraón fue la derrota directa de Ra — YHWH demostró que incluso la familia del dios-hombre estaba bajo Su autoridad.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Pascua como tipo de la Expiación',
      intro: {
        romanNumeral: 'III',
        title: 'Éxodo 12 — El Cordero que Prefigura a Cristo',
        paragraphs: [
          'La Pascua es el tipo profético más elaborado de la Expiación en toda la escritura.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El cordero sin mancha y la sangre en los dinteles',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Éxodo 12:5, 7, 13',
              text: 'El animal será sin defecto... Y tomarán de la sangre, y la pondrán en los dos postes y en el dintel de las casas... Y la sangre os será por señal en las casas donde vosotros estéis; y veré la sangre, y pasaré de vosotros.',
            },
            {
              type: 'paragraph',
              text: 'Pablo en 1 Corintios 5:7 lo declara directamente: "porque nuestra pascua, que es Cristo, ya fue sacrificada por nosotros." La Pascua no es solo historia — es tipología. Cada elemento del ritual prefigura específicamente la Expiación: el cordero sin defecto tipifica a Cristo, el único ser sin pecado; la sangre en los dinteles tipifica la sangre de Cristo que protege al creyente; el cordero debía ser comido, no guardado — tipificando que la Expiación debe ser aplicada personalmente, no solo contemplada.',
            },
            {
              type: 'compare_grid',
              title: 'La Pascua y la Expiación — Paralelos Tipológicos',
              left: {
                title: 'La Pascua de Éxodo 12',
                items: [
                  'Cordero sin defecto (v. 5)',
                  'Sangre en el dintel — señal de protección (v. 13)',
                  'Comerlo con prisa — acto de fe inmediato (v. 11)',
                  'El ángel de la muerte "pasa sobre" las casas señaladas',
                  'Se repite cada año como memorial (v. 14)',
                ],
              },
              right: {
                title: 'La Expiación de Cristo',
                items: [
                  'Cristo sin pecado — el único sacrificio aceptable',
                  'Su sangre protege al que la aplica por fe y arrepentimiento',
                  'La Expiación debe ser recibida activamente, no solo conocida',
                  'Cristo "pasa sobre" el pecado del creyente arrepentido',
                  'La Cena del Señor/Sacramente lo conmemora semanalmente',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Mar Rojo y la libertad',
      intro: {
        romanNumeral: 'IV',
        title: 'Éxodo 14 — Cuando el Camino Pasa por el Mar',
        paragraphs: [
          'La travesía del Mar Rojo es el momento fundacional de la identidad israelita — el nacimiento de la nación.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Dios que abre camino donde no lo hay',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Éxodo 14:13-14',
              text: 'No temáis; estad firmes, y ved la salvación que Jehová hará hoy con vosotros; porque los egipcios que hoy habéis visto, nunca más para siempre los veréis. Jehová peleará por vosotros, y vosotros estaréis tranquilos.',
            },
            {
              type: 'paragraph',
              text: 'La travesía del Mar Rojo ocurrió en el momento de mayor pánico de Israel: el ejército del Faraón detrás, el mar adelante, sin escapatoria visible. La respuesta de Moisés al pueblo aterrorizado — "estad firmes y ved la salvación de Dios" — no era ingenuidad sino experiencia: había visto cómo actuaba Dios. Pablo en 1 Corintios 10:1-2 interpreta la travesía del mar como tipo del bautismo: Israel "fue bautizado en Moisés en la nube y en el mar."',
            },
            {
              type: 'doctrine_box',
              title: 'El Mar Rojo como Tipo del Bautismo',
              body: '1 Corintios 10:2 enseña que los israelitas "todos en Moisés fueron bautizados en la nube y en el mar." La travesía del Mar Rojo tipifica el bautismo: entrar en el agua como esclavos, salir como pueblo libre. El ejército del Faraón (símbolo del pecado y del mundo) queda destruido detrás. El bautismo no solo limpia — libera. Así como Israel nunca volvió a Egipto, el bautizando deja atrás el "Egipto" de su vida anterior.',
            },
            {
              type: 'reflection',
              prompt: '¿En qué momento de tu vida te has encontrado con el "Mar Rojo" enfrente y el ejército del Faraón detrás — sin salida visible? ¿Qué aprendiste sobre Dios de esa experiencia?',
            },
          ],
        },
      ],
    },
  ],
}
