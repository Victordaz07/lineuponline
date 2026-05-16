import type { Lesson } from '@/types/doctrine'

export const moises: Lesson = {
  id: 'moises',
  moduleId: 'personajes-escrituras',
  title: 'Moisés — El Libertador de Israel',
  subtitle: 'Profeta, legislador, hombre de dos mundos',
  description: 'Criado como príncipe egipcio, exiliado como fugitivo, llamado desde una zarza ardiente. Moisés habló cara a cara con Dios (Éxodo 33:11), pero solo vio su espalda. La restauración (Moisés 1) añade un encuentro con Satanás que la Biblia no tiene.',
  level: 'INTERMEDIO',
  icon: '🔥',
  duration: 80,
  order: 35,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Hombre de Dos Mundos',
      intro: { romanNumeral: 'I', title: 'Príncipe de Egipto, Hijo de Israel', paragraphs: ['La identidad dividida que lo preparó para todo'] },
      topics: [
        {
          id: 't1',
          title: 'Criado en el palacio, nacido en la esclavitud',
          blocks: [
            { type: 'paragraph', text: 'Moisés fue colocado en una canasta por su madre para salvarle la vida, rescatado por la hija del Faraón, y criado como príncipe en el palacio más poderoso del mundo. Hechos 7:22 dice que "fue enseñado Moisés en toda la sabiduría de los egipcios, y era poderoso en sus palabras y obras." Conocía el idioma, los protocolos, la arquitectura del poder — todo lo que necesitaría para negociar con el Faraón.' },
            { type: 'highlight_verse', reference: 'Hechos 7:22', text: 'Y fue enseñado Moisés en toda la sabiduría de los egipcios, y era poderoso en sus palabras y obras.' },
            { type: 'paragraph', text: 'La providencia es clara: Dios usó el sistema de opresión de Egipto para criar al propio libertador de Israel dentro de ese sistema. El perseguidor involuntariamente entrenó a su adversario. Este patrón se repite en José de Egipto, en Esther en la corte persa, en Daniel en Babilonia — Dios coloca a Sus siervos en el corazón del poder enemigo.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Moisés 1 — Lo que la Biblia no Tiene',
      intro: { romanNumeral: 'II', title: 'La Revelación Restaurada', paragraphs: ['El encuentro con Satanás y la identidad de Moisés'] },
      topics: [
        {
          id: 't2',
          title: 'El encuentro que precede a Génesis',
          blocks: [
            { type: 'highlight_verse', reference: 'Moisés 1:3-4', text: 'Y Dios habló a Moisés, cara a cara, como un hombre habla con otro hombre; y el Señor le dijo: He aquí, yo soy el Señor Dios Todopoderoso, y Sin Fin es mi nombre, pues soy sin principio de días ni fin de años... y mira, tú eres mi hijo.' },
            { type: 'paragraph', text: 'Moisés 1 revela lo que ocurrió cuando Moisés subió al monte ANTES de recibir los Diez Mandamientos: una visión del universo entero, la declaración de su identidad divina ("tú eres mi hijo"), y luego — el elemento más único — el intento de Satanás de engañarlo. Satanás se le apareció cuando la visión terminó y Moisés estaba débil, llamándole "hijo del hombre". La respuesta de Moisés es una de las declaraciones de identidad más poderosas de toda la escritura.' },
            { type: 'doctrine_box', title: 'La Identidad como Arma Espiritual', body: '"¿Quién eres tú? Porque, he aquí, yo soy un hijo de Dios, en semejanza de su Unigénito; ¿y dónde está tu gloria para que yo deba adorarte?" (Moisés 1:13). Moisés rechazó a Satanás no con argumento teológico ni con poder propio — sino con identidad claramente conocida. Esta es la lección más profunda de Moisés 1: saber quién eres ante Dios te hace invulnerable a quien te pide que olvides esa identidad.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Zarza Ardiente y el Gran YO SOY',
      intro: { romanNumeral: 'III', title: 'Éxodo 3 — El Nombre que Todo lo Cambia', paragraphs: ['Dios se revela como "EL QUE ES"'] },
      topics: [
        {
          id: 't3',
          title: 'El nombre YHWH',
          blocks: [
            { type: 'highlight_verse', reference: 'Éxodo 3:13-14', text: 'Y respondió Moisés a Dios: He aquí que llego yo a los hijos de Israel, y les digo: El Dios de vuestros padres me ha enviado a vosotros. Si ellos me preguntaren: ¿Cuál es su nombre? ¿qué les responderé? Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros.' },
            { type: 'paragraph', text: 'El nombre YHWH (יהוה) deriva del hebreo "ser" — "El que Es", "El que Existe", "El Existente Eterno". Es el nombre tan sagrado que los judíos no lo pronuncian en voz alta. Cuando Jesús dijo "Antes que Abraham fuese, yo soy" (Juan 8:58) usando el mismo "Ego eimi" (Yo Soy), los líderes religiosos intentaron apedrearlo — porque entendieron perfectamente que estaba reclamando ser el YHWH de Éxodo 3.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Cara a Cara — pero Solo Vio Su Espalda',
      intro: { romanNumeral: 'IV', title: 'La Paradoja de Éxodo 33', paragraphs: ['La tensión entre la intimidad y la trascendencia divina'] },
      topics: [
        {
          id: 't4',
          title: 'La aparente contradicción resuelta',
          blocks: [
            { type: 'compare_grid', title: 'La Paradoja de Éxodo 33', rows: [
              { label: 'Éxodo 33:11', a: '"Hablaba Jehová a Moisés cara a cara, como habla cualquiera a su compañero"', b: 'Intimidad directa y personal' },
              { label: 'Éxodo 33:20', a: '"No podrás ver mi rostro; porque no me verá hombre, y vivirá"', b: 'Restricción de la gloria plena' },
            ]},
            { type: 'paragraph', text: 'La aparente contradicción se resuelve entendiendo que "cara a cara" describe la calidad de la comunicación — directa, personal, sin intermediario — mientras que la restricción de ver el "rostro" se refiere a la gloria plena del cuerpo glorificado. Moisés vio y habló con el Cristo premortal en forma de ángel/mensajero (como en Génesis 18); lo que no pudo ver fue la gloria completa del Padre. DyC 84:22-24 añade que Israel también perdió este privilegio por su incredulidad en el desierto.' },
            { type: 'reflection', prompt: 'Moisés dedicó su vida a servir a un pueblo que constantemente se quejaba, rebelaba y defraudaba. ¿Qué fuente de fortaleza encuentras en esta historia para cuando el servicio a los demás se vuelve agotador y poco valorado?' },
          ],
        },
      ],
    },
  ],
}
