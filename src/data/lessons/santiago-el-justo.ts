import type { Lesson } from '@/types/doctrine'

export const santiagoElJusto: Lesson = {
  id: 'santiago-el-justo',
  moduleId: 'personajes-escrituras',
  title: 'Santiago el Justo — El Hermano de Jesús',
  subtitle: 'De escéptico a primer obispo de Jerusalén',
  description: 'Santiago no creyó en Jesús durante el ministerio. Luego Cristo se le apareció resucitado personalmente. Presidió el concilio de Jerusalén. Su epístola es la teología práctica más exigente del NT. Fue lapidado en el año 62 d.C. Su muerte sacudió incluso a los judíos.',
  level: 'AVANZADO',
  icon: '⚖️',
  duration: 60,
  order: 55,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Hermano que No Creyó',
      intro: { romanNumeral: 'I', heading: 'Juan 7 — La Familia de Jesús', subheading: 'Lo más difícil de creer en tu propio hermano' },
      topics: [
        {
          id: 't1',
          title: 'Escepticismo familiar',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Juan 7:5 registra un hecho impactante: "Porque ni aun sus hermanos creían en él." Los hermanos de Jesús — Santiago, José, Simón, Judas — crecieron en la misma casa, comieron en la misma mesa, y no creyeron. Marcos 3:21 registra que la familia de Jesús intentó llevárselo porque decían "está fuera de sí." Esta es la razón por la que el testimonio de Santiago es tan poderoso: su conversión no fue por entusiasmo religioso sino a pesar del conocimiento íntimo.' },
            { type: 'doctrine_box', id: 'db1', title: 'Por qué la Conversión de Santiago Importa Históricamente', content: '1 Corintios 15:7 menciona que Cristo resucitado se apareció específicamente a Santiago. El historiador Josefo — judío no cristiano — registra la muerte de "Santiago, hermano de Jesús el llamado Cristo." Este es uno de los dos únicos textos no cristianos del siglo primero que mencionan a Jesús por nombre. La conversión de alguien que convivió con Jesús toda su vida y luego murió por creer en su resurrección es una evidencia de peso extraordinario.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Concilio de Jerusalén',
      intro: { romanNumeral: 'II', heading: 'Hechos 15 — ¿Deben Circuncidarse los Gentiles?', subheading: 'La primera gran crisis doctrinal de la Iglesia' },
      topics: [
        {
          id: 't2',
          title: 'La decisión que abrió el evangelio',
          blocks: [
            { type: 'highlight_verse', id: 'v1', reference: 'Hechos 15:19-20', text: 'Por lo cual yo juzgo que no se inquiete a los gentiles que se convierten a Dios, sino que se les escriba que se aparten de las contaminaciones de los ídolos, de fornicación, de ahogado y de sangre.' },
            { type: 'paragraph', id: 'p2', text: 'Santiago presidió el concilio de Jerusalén (aproximadamente 49 d.C.), el primer concilio de la Iglesia. El debate: ¿deben los gentiles convertidos circuncidarse y observar la ley de Moisés? La decisión de Santiago — no — fue revolucionaria. Liberó el evangelio de la identidad étnica judía y lo convirtió en un mensaje universal. Sin esta decisión, el cristianismo habría permanecido como una secta judía. La Restauración reconoce la autoridad apostólica de este concilio.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Epístola de Santiago',
      intro: { romanNumeral: 'III', heading: 'La Fe sin Obras está Muerta', subheading: 'El texto que Lutero quería quitar del canon' },
      topics: [
        {
          id: 't3',
          title: 'Fe operante',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Santiago 2:17-18', text: 'Así también la fe, si no tiene obras, es muerta en sí misma. Pero alguno dirá: Tú tienes fe, y yo tengo obras. Muéstrame tu fe sin tus obras, y yo te mostraré mi fe por mis obras.' },
            { type: 'paragraph', id: 'p3', text: 'Martín Lutero llamó a la epístola de Santiago "una epístola de paja" porque parecía contradecir su doctrina de la sola fide (solo por fe). Pero Santiago no contradice a Pablo — lo complementa. Pablo habla de la fe que justifica ante Dios; Santiago habla de la fe que se demuestra ante los hombres. Y para los Santos de los Últimos Días, la epístola de Santiago 1:5 tiene un significado especial: fue el versículo que José Smith leyó y que lo llevó a la Primera Visión.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Mártir de Jerusalén',
      intro: { romanNumeral: 'IV', heading: '62 d.C. — La Muerte que Conmovió a los Judíos', subheading: 'El testimonio final' },
      topics: [
        {
          id: 't4',
          title: 'Lapidado por su fe',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'Josefo registra en Antigüedades Judías XX.9.1 que Ananías el sumo sacerdote ordenó la lapidación de Santiago "el hermano de Jesús el llamado Cristo" en el año 62 d.C. Lo significativo es que Josefo añade que los judíos más observantes de Jerusalén se indignaron por esta muerte — el apodo de Santiago era "el Justo" incluso entre no cristianos. Hegesipo, historiador del siglo II, registra que sus rodillas estaban endurecidas como las de un camello de tanto orar. El hombre que no creyó en su hermano oró de rodillas hasta el martirio.' },
            { type: 'reflection', id: 'r1', prompt: '¿Qué te enseña la trayectoria de Santiago — de escéptico a mártir — sobre la naturaleza del cambio espiritual? ¿Hay alguien en tu vida cuya conversión eventual te parece tan improbable como la de Santiago?' },
          ],
        },
      ],
    },
  ],
}
