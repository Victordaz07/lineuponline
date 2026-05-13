import type { Lesson } from '@/types/doctrine'

export const david: Lesson = {
  id: 'david',
  moduleId: 'personajes-escrituras',
  title: 'David — El Rey-Poeta y su Caída',
  subtitle: 'El hombre conforme al corazón de Dios que lo traicionó',
  description: 'David mató a Goliat a los 17 años, escribió los Salmos más hermosos de la historia, y a los 50 destruyó su legado con Betsabé y Urías. DyC 132:39 da el veredicto eterno. Salmo 22 y 110 como profecías mesiánicas directas.',
  level: 'INTERMEDIO',
  icon: '🎵',
  duration: 70,
  order: 42,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Elegido de Entre los Hijos',
      intro: { romanNumeral: 'I', heading: 'No el Mayor, Sino el del Corazón', subheading: '1 Samuel 16 — Dios ve diferente' },
      topics: [
        {
          id: 't1',
          title: 'Lo que Dios ve cuando mira un corazón',
          blocks: [
            { type: 'highlight_verse', id: 'v1', reference: '1 Samuel 16:7', text: 'Y Jehová respondió a Samuel: No mires a su parecer, ni a lo grande de su estatura, porque yo lo desecho; porque Jehová no mira lo que mira el hombre; pues el hombre mira lo que está delante de sus ojos, pero Jehová mira el corazón.' },
            { type: 'paragraph', id: 'p1', text: 'Cuando Samuel fue a ungir al próximo rey de Israel en la casa de Isaí, Dios rechazó a siete hijos antes de que llamaran al más joven, que estaba cuidando ovejas. David era el "pequeño" — literalmente el más joven. El principio establecido aquí es fundamental: Dios elige según criterios del corazón, no según apariencia, posición o experiencia. Este principio es consistente en toda la Escritura.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Goliat — La Fe que Actúa',
      intro: { romanNumeral: 'II', heading: '1 Samuel 17 — La Batalla que Definió su Vida', subheading: 'La honda, las cinco piedras y el nombre de Jehová' },
      topics: [
        {
          id: 't2',
          title: 'El argumento de David',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: '1 Samuel 17:45-46', text: 'Entonces dijo David al filisteo: Tú vienes a mí con espada y lanza y jabalina; mas yo vengo a ti en el nombre de Jehová de los ejércitos, el Dios de los escuadrones de Israel, a quien tú has provocado. Jehová te entregará hoy en mi mano... para que sepa toda esta tierra que hay Dios en Israel.' },
            { type: 'paragraph', id: 'p2', text: 'David no argumentó sobre el tamaño de la honda o la precisión de su puntería. Su argumento era teológico: Goliat desafió al ejército de Dios, y Dios no puede perder. La confianza de David no era en su propia habilidad — era en la naturaleza de Dios. Esta distinción es la que hace que su historia no sea simplemente "un chico valiente" sino una lección sobre la naturaleza de la fe verdadera.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Poeta del Alma Humana',
      intro: { romanNumeral: 'III', heading: 'Los Salmos — La Autobiografía Espiritual de David', subheading: 'El Salmo 22 como profecía mesiánica y el Salmo 23 como consuelo eterno' },
      topics: [
        {
          id: 't3',
          title: 'Cristo habló desde la cruz con palabras de David',
          blocks: [
            { type: 'highlight_verse', id: 'v3', reference: 'Salmo 22:1,7-8,16-18', text: 'Dios mío, Dios mío, ¿por qué me has desamparado?... Todos los que me ven me escarnecen; estiran la boca, menean la cabeza... Me han horadado las manos y los pies... Entre sí repartieron mis vestidos, y sobre mi ropa echaron suertes.' },
            { type: 'paragraph', id: 'p3', text: 'El Salmo 22 fue escrito por David 1,000 años antes de Cristo. Jesús lo citó desde la cruz (Mateo 27:46). Contiene detalles de la crucifixión que no tenían analogía en la experiencia de David: horadar manos y pies, dividir vestidos por suertes, el cuerpo dislocado visible para la gente (v.17). Ni el propio David entendía completamente lo que escribía — la inspiración lo llevó más allá de su propia experiencia.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Betsabé, Urías y el Veredicto Eterno',
      intro: { romanNumeral: 'IV', heading: '2 Samuel 11-12 — La Caída más Documentada de la Biblia', subheading: 'DyC 132:39 — la consecuencia que no se revocó' },
      topics: [
        {
          id: 't4',
          title: 'La caída y sus consecuencias eternas',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'David vio a Betsabé, la mandó traer, cometió adulterio, intentó encubrirlo, y cuando el encubrimiento falló, mandó colocar a Urías en el frente de batalla para que muriera. El Profeta Natán lo confrontó con la parábola de la oveja robada. La respuesta de David (2 Samuel 12:13) fue inmediata: "Pequé contra Jehová." Su arrepentimiento fue genuino — y sus consecuencias igualmente reales.' },
            { type: 'highlight_verse', id: 'v4', reference: 'DyC 132:39', text: 'David recibió muchas esposas y concubinas, y también Salomón y Moisés, mis siervos; mas David cedió a tentaciones y pecó en el asunto de Urías y su esposa; y, por tanto, se le quitaron las siguientes que tenía y fueron dadas a otro.' },
            { type: 'doctrine_box', id: 'db1', title: 'El Pecado que Tiene Consecuencias Eternas', content: 'DyC 132:39 establece que David perdió sus sellamientos conyugales a causa del derramamiento de sangre inocente (Urías). Esto no significa que David no se arrepintió — el Salmo 51 es uno de los arrepentimientos más hermosos y profundos de toda la Escritura. Significa que algunas consecuencias del pecado, incluso con arrepentimiento sincero, afectan el destino eterno. Su destino final pertenece al juicio de Dios (Hechos 2:29-34 sugiere que David no está en la exaltación, pero el Señor conoce su condición).' },
            { type: 'reflection', id: 'r1', prompt: '¿Qué te dice la historia de David sobre la posibilidad de ser "un hombre conforme al corazón de Dios" y aun así cometer errores graves? ¿Qué diferencia hay entre el arrepentimiento de David y el de Saúl (1 Samuel 15)?'},
          ],
        },
      ],
    },
  ],
}
