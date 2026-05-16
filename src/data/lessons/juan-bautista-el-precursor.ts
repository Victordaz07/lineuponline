import type { Lesson } from '@/types/doctrine'

export const juanBautistaElPrecursor: Lesson = {
  id: 'juan-bautista-el-precursor',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'juan-bautista',
  title: 'El Precursor',
  subtitle: '"Voz del que clama en el desierto"',
  description: 'Juan el Bautista no llegó al mundo por accidente. Nació de una madre estéril anciana, recibió su nombre por revelación angelical, y fue llamado antes de nacer para preparar el camino del Señor. Su vida entera fue una flecha apuntando hacia Cristo.',
  level: 'INTERMEDIO',
  icon: '🏜️',
  duration: 30,
  order: 5210,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Nacimiento Milagroso',
      intro: { romanNumeral: 'I', title: 'Lucas 1 — Zacarías e Isabel', paragraphs: ['El ángel en el templo y la promesa de un hijo en la vejez'] },
      topics: [
        {
          id: 't1',
          title: 'El anuncio de Gabriel',
          blocks: [
            {
              type: 'paragraph',
              text: 'Zacarías era sacerdote de la división de Abías, y tanto él como su esposa Isabel eran descritos como "justos delante de Dios" (Lucas 1:6). Sin embargo, eran estériles y avanzados en edad — una condición que en la cultura hebrea se consideraba señal de disfavor divino, aunque en realidad era el escenario perfecto para un milagro. El ángel Gabriel se le apareció mientras Zacarías ofrecía incienso en el templo, el lugar más sagrado de su ministerio sacerdotal.',
            },
            {
              type: 'highlight_verse',
              reference: 'Lucas 1:13-17',
              text: 'El ángel le dijo: Zacarías, no temas; porque tu oración ha sido oída, y tu esposa Isabel te dará a luz un hijo, y llamarás su nombre Juan... porque será grande delante de Dios... e irá delante de él con el espíritu y el poder de Elías, para hacer volver los corazones de los padres a los hijos.',
            },
            {
              type: 'doctrine_box',
              title: 'Llamado por nombre antes de nacer',
              body: 'Gabriel no solo anunció el nacimiento — también dictó el nombre: Juan (Yojanan, "Dios es misericordioso"). Cuando los vecinos quisieron llamar al niño Zacarías según la tradición familiar, Isabel insistió en "Juan" y Zacarías confirmó por escrito: "Juan es su nombre" (Lucas 1:63). El nombre fue revelado desde el cielo porque Juan tenía una identidad predestinada que ninguna tradición familiar podía reemplazar.',
            },
            {
              type: 'paragraph',
              text: 'La incredulidad de Zacarías ante el anuncio le costó el habla hasta el día del nacimiento de Juan. Este detalle no es un castigo arbitrario — es una señal viva que silenció las dudas de un sacerdote que conocía las Escrituras pero no esperaba que se cumplieran en su propia casa. Cuando Juan nació, Zacarías recuperó el habla y profetizó, confirmando que el silencio había sido temporal, no permanente.',
            },
          ],
        },
        {
          id: 't2',
          title: 'El salto en el vientre',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando María, recién concebido Jesús, visitó a Isabel, ocurrió algo extraordinario: "En cuanto oyó Isabel la salutación de María, la criatura saltó en su vientre" (Lucas 1:41). Juan, aún no nacido, reconoció la presencia del Señor encarnado. Este fue el primer acto profético de Juan — un acto de adoración antes del primer aliento.',
            },
            {
              type: 'central_quote',
              text: 'Y aconteció que cuando oyó Isabel la salutación de María, la criatura saltó en su vientre; e Isabel fue llena del Espíritu Santo.',
              attribution: 'Lucas 1:41',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Espíritu y el Poder de Elías',
      intro: { romanNumeral: 'II', title: 'Lucas 1:17 — La Profecía del Ángel', paragraphs: ['Juan no era Elías en persona, pero operó con su mismo espíritu y autoridad'] },
      topics: [
        {
          id: 't3',
          title: 'Qué significa el espíritu de Elías',
          blocks: [
            {
              type: 'paragraph',
              text: 'Gabriel declaró que Juan vendría "con el espíritu y el poder de Elías" — no que sería Elías reencarnado, sino que ejercería el mismo tipo de ministerio: llamar a Israel al arrepentimiento, confrontar al poder religioso establecido, y preparar un pueblo dispuesto para el Señor. Malaquías 4:5-6 había prometido que "Elías el profeta" vendría antes del día grande y terrible del Señor. Juan fue el cumplimiento de esa promesa para la primera venida de Cristo.',
            },
            {
              type: 'doctrine_box',
              title: 'La doctrina de la Restauración sobre Juan y Elías',
              body: 'La Restauración distingue claramente entre "Elías" como título de precursor y Elías el profeta tisbita del Antiguo Testamento. Juan el Bautista cumplió el papel de Elías como precursor de la primera venida. La Restauración también enseña que el espíritu de Elías tiene relación con despertar el interés en los ancestros — el trabajo redentivo de los muertos que Juan representó al preparar el camino.',
            },
            {
              type: 'key_points',
              title: 'Lo que Juan compartió con Elías',
              points: [
                'Llamado directo de Dios sin pasar por la estructura religiosa establecida',
                'Predicación de arrepentimiento en momentos de apostasía generalizada',
                'Confrontación directa con el poder político-religioso de su época',
                'Vida austera como testimonio vivo de que el hombre no vive solo de pan',
                'Ministerio de preparación, no de edificación permanente',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Vida en el Desierto',
      intro: { romanNumeral: 'III', title: 'Mateo 3:1-4 — El Profeta del Desierto', paragraphs: ['La vestimenta y la dieta como proclamación teológica'] },
      topics: [
        {
          id: 't4',
          title: 'Langostas, miel y manto de camello',
          blocks: [
            {
              type: 'paragraph',
              text: 'Mateo 3:4 describe a Juan con un detalle deliberado: "Y Juan estaba vestido de pelo de camello, y tenía un cinto de cuero alrededor de sus lomos; y su comida era langostas y miel silvestre." Esta descripción no es folclórica — es una cita tipológica de 2 Reyes 1:8, donde Elías es descrito exactamente igual. El escritor del Evangelio quiere que el lector reconozca: este es el Elías que había de venir.',
            },
            {
              type: 'paragraph',
              text: 'La dieta de langostas y miel era lo que la tierra del desierto de Judea proveía gratuitamente a quien vivía sin depender de la economía del templo o del mercado. Juan no recibía diezmos. No vivía en el palacio sacerdotal de Jerusalén. Su ministerio era completamente independiente del sistema religioso establecido — lo cual era precisamente parte de su autoridad moral para confrontarlo.',
            },
            {
              type: 'central_quote',
              text: 'Voz del que clama en el desierto: Preparad el camino del Señor; enderezad sus sendas.',
              attribution: 'Mateo 3:3, citando Isaías 40:3',
            },
          ],
        },
        {
          id: 't5',
          title: 'La predicación de arrepentimiento',
          blocks: [
            {
              type: 'paragraph',
              text: 'La predicación de Juan era radical y específica. No era vaga espiritualidad — era un llamado a un cambio concreto de vida verificado por el bautismo en agua. A los fariseos y saduceos que venían a bautizarse les dijo: "Generación de víboras, ¿quién os enseñó a huir de la ira venidera? Haced, pues, frutos dignos de arrepentimiento" (Mateo 3:7-8). Juan no tenía paciencia para la religiosidad de superficie.',
            },
            {
              type: 'key_points',
              title: 'El contenido de la predicación de Juan',
              points: [
                'Arrepentimiento genuino, no solo ritual externo',
                'El bautismo como señal pública de cambio interior',
                'Advertencia de juicio inminente: "el hacha ya está puesta a la raíz de los árboles"',
                'Anuncio de uno que vendría después de él cuya sandalia no era digno de llevar',
                'Justicia social concreta: compartir ropa y comida, no extorsionar (Lucas 3:10-14)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Elías que Había de Venir',
      intro: { romanNumeral: 'IV', title: 'Mateo 11:14 — La Identificación de Jesús', paragraphs: ['Cristo mismo declaró quién era Juan'] },
      topics: [
        {
          id: 't6',
          title: 'La declaración de Jesús',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 11:13-14',
              text: 'Porque todos los profetas y la ley profetizaron hasta Juan. Y si queréis recibirlo, él es aquel Elías que había de venir.',
            },
            {
              type: 'paragraph',
              text: 'Jesús hizo la identificación de manera explícita: Juan era el cumplimiento de la profecía de Malaquías sobre el Elías que prepararía el camino antes del gran día. Esta declaración es teológicamente enorme: toda la trayectoria profética del Antiguo Testamento — desde Moisés hasta Malaquías — convergió en Juan como el punto de transición entre dos dispensaciones. Juan fue simultáneamente el último profeta del antiguo orden y el heraldo del nuevo.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué aspecto de la vida de Juan el Bautista — su independencia de las estructuras religiosas, su predicación directa, su vida austera — te desafía más personalmente en tu propio discipulado? ¿Cómo preparas tú el camino del Señor en tu contexto?',
            },
          ],
        },
      ],
    },
  ],
}
