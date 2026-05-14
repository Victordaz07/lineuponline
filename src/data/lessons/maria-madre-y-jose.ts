import type { Lesson } from '@/types/doctrine'

export const mariaMadreYJose: Lesson = {
  id: 'maria-madre-y-jose',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'maria-madre',
  title: 'José y María',
  subtitle: 'El desposorio, el sueño y Belén',
  author: 'Fuentes: Mateo 1:18-25; Lucas 2:1-38',
  description:
    'Antes del pesebre hubo una crisis matrimonial, una decisión difícil, y el sueño de un hombre justo. José descubrió que María estaba embarazada y decidió repudiarla en secreto — hasta que un ángel cambió su mente. Luego vino el decreto de Augusto, el viaje a Belén, y el nacimiento más extraordinario de la historia en el lugar más humilde posible. Estudiamos el contexto histórico, el dolor humano, y la providencia divina de la primera Navidad.',
  level: 'INTERMEDIO',
  icon: '🌙',
  duration: 35,
  order: 6412,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'maria-madre-la-visitacion',
  nextLessonId: 'maria-madre-en-la-cruz',
  studySections: [
    {
      id: 's1',
      title: 'El dilema de José',
      intro: {
        romanNumeral: 'I',
        title: 'Mateo 1:18-19 — El hombre justo ante lo imposible de explicar',
        paragraphs: [
          'María regresó de casa de Elisabet con tres meses de embarazo. José lo notó. No había forma de explicarlo que no lo rompiera todo.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El descubrimiento de José',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 1:18-19',
              text: 'El nacimiento de Jesucristo fue así: Estando desposada María su madre con José, antes que se juntasen, se halló que había concebido del Espíritu Santo. José su marido, como era justo, y no quería infamarla, quiso dejarla secretamente.',
            },
            {
              type: 'paragraph',
              text: 'Mateo presenta el descubrimiento de José con una brutalidad narrativa que a menudo pasa desapercibida: "antes que se juntasen, se halló que había concebido." El verbo "se halló" — pasivo, impersonal — subraya la objetividad del hecho. No había duda ni ambigüedad. María estaba embarazada y José lo sabía. Y José no era el padre.',
            },
            {
              type: 'paragraph',
              text: 'La respuesta de José revela su carácter. Mateo lo llama "justo" — "dikaios" en griego, "tsaddiq" en la tradición hebrea. En el Judaísmo del siglo I, un hombre "justo" era aquel que cumplía la Torah con fidelidad. La Torah decía que una mujer adúltera durante el período de desposorio debía ser apedreada (Deuteronomio 22:23-24). José tenía el derecho legal y religioso de denunciarla públicamente. Eligió no hacerlo. Su justicia no era rigidez legal — era misericordia operando dentro del marco de la ley.',
            },
            {
              type: 'doctrine_box',
              title: 'El "divorcio secreto" en el derecho judío del siglo I',
              body: 'El desposorio judío del siglo I era legalmente equivalente al matrimonio — para disolverlo se requería un "get" (documento de divorcio formal). Que José quisiera "dejarla secretamente" significaba darle el get sin hacer pública la razón. Esto la protegía de la lapidación pública pero la dejaba sola, sin padre para el niño, en un pueblo pequeño donde todos se conocían. La "misericordia" de José era real pero limitada — protegía su vida pero no su futuro. Solo Dios podía hacer eso.',
            },
            {
              type: 'dialogue',
              title: 'El momento que Mateo no describe — pero podemos imaginar',
              lines: [
                {
                  speaker: 'José',
                  side: 'left',
                  text: 'María. Te vi cuando volviste de casa de Elisabet. Necesito saber la verdad.',
                },
                {
                  speaker: 'María',
                  side: 'right',
                  text: 'Sé lo que parece, José. Sé que no hay palabras que hagan que esto tenga sentido.',
                },
                {
                  speaker: 'José',
                  side: 'left',
                  text: 'Explícame. Por favor.',
                },
                {
                  speaker: 'María',
                  side: 'right',
                  text: 'Un ángel se me apareció. El Espíritu Santo vino sobre mí. Este niño es el Hijo de Dios. Yo... sé cómo suena esto.',
                },
                {
                  speaker: 'José',
                  side: 'left',
                  text: '...',
                },
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo habrías respondido tú en el lugar de José? ¿Qué dice de su carácter que eligiera protegerla en lugar de exponerla, incluso antes de recibir la confirmación divina?',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'El ángel en el sueño de José',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 1:20-21',
              text: 'Y pensando él en esto, he aquí un ángel del Señor le apareció en sueños, y le dijo: José, hijo de David, no temas recibir a María tu mujer, porque lo que en ella es engendrado, del Espíritu Santo es. Y dará a luz un hijo, y llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados.',
            },
            {
              type: 'paragraph',
              text: 'El ángel se aparece a José "en sueños" — el modo de revelación favorito del libro de Génesis para los patriarcas (José el soñador de sueños en Génesis 37-41 recibe el mismo título que este José). Mateo, escribiendo para una audiencia judía, construye deliberadamente paralelos entre el José del Antiguo Testamento y el José del Nuevo. Ambos son hombres justos. Ambos reciben revelación en sueños. Ambos bajan a Egipto. Ambos preservan la línea del pacto.',
            },
            {
              type: 'paragraph',
              text: 'El ángel llama a José "hijo de David" — un título mesiánico. Esto no es accidental: el niño necesita a José para ser oficialmente hijo de David, porque la ascendencia davídica se transmitía por la línea paterna. Al recibir a María como esposa y nombrar al niño "Jesús," José realiza el acto de adopción legal que inserta a Jesús en la genealogía de David. La paternidad legal de José es indispensable para el cumplimiento de la promesa mesiánica.',
            },
            {
              type: 'key_points',
              title: 'Lo que el ángel le dice a José en tres versículos',
              points: [
                '"No temas recibir a María" — la decisión que debía tomar, expresada primero como mandato',
                '"Lo que en ella es engendrado, del Espíritu Santo es" — la explicación que María no pudo darle de manera convincente',
                '"Llamarás su nombre Jesús" — el acto de nombrar que constituye la adopción legal davídica',
                '"Él salvará a su pueblo de sus pecados" — la interpretación del nombre: Yeshua = "el Señor salva"',
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'Mateo 1:24-25',
              text: 'Y despertando José del sueño, hizo como el ángel del Señor le había mandado, y recibió a su mujer. Pero no la conoció hasta que dio a luz a su hijo primogénito; y le puso por nombre JESÚS.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El decreto de Augusto y el viaje a Belén',
      intro: {
        romanNumeral: 'II',
        title: 'Lucas 2:1-5 — El Imperio Romano al servicio de la profecía',
        paragraphs: [
          'El profeta Miqueas había dicho que el Mesías nacería en Belén (Miqueas 5:2). María vivía en Nazaret, a 130 kilómetros al norte. Dios usó el decreto de un emperador romano para resolver ese problema.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El census de Quirino',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 2:1-5',
              text: 'Aconteció en aquellos días, que se promulgó un edicto de parte de Augusto César, que todo el mundo fuese empadronado. Este primer censo se hizo siendo Cirenio gobernador de Siria. E iban todos para ser empadronados, cada uno a su ciudad. Y José subió de Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que se llama Belén, por cuanto era de la casa y familia de David; para ser empadronado con María su mujer, desposada con él, la cual estaba encinta.',
            },
            {
              type: 'paragraph',
              text: 'Augusto César gobernó el Imperio Romano de 27 a.C. a 14 d.C. y fue el architecto del "Pax Romana" — la paz imperial que creó las condiciones para la expansión del Evangelio. El census descrito por Lucas ha sido objeto de debate histórico intenso — los registros romanos conocidos no coinciden perfectamente con la cronología de Herodes el Grande. Sin embargo, los censos con propósitos tributarios eran práctica imperial regular, y el requerimiento de empadronarse en la ciudad de origen del linaje familiar está atestiguado en papiros egipcios del período.',
            },
            {
              type: 'deep_dive',
              badge: 'HISTORIA DEL PERÍODO',
              title: 'El viaje de Nazaret a Belén en el siglo I',
              paragraphs: [
                'El camino de Nazaret a Belén era de aproximadamente 130-150 kilómetros dependiendo de la ruta. El viaje tomaba típicamente de cuatro a siete días a pie. Para una mujer en el tercer trimestre del embarazo, el viaje sería significativamente más difícil. La tradición representó a María montada en un burro, aunque Lucas no lo menciona.',
                'La ruta más directa cruzaba Samaria — que los judíos piadosos evitaban por tensiones étnicas y religiosas — o seguía el Valle del Jordán hacia el sur antes de subir a Judea. José habría conocido el camino; Belén no era una aldea desconocida sino la ciudad de David, un lugar con resonancia histórica profunda para cualquier judío que conociera las Escrituras.',
                'Belén en el siglo I era un pueblo pequeño en las montañas de Judea, a unos 8 kilómetros al sur de Jerusalén. Su economía dependía principalmente de la ganadería — lo cual hace históricamente plausible la presencia de pastores en los campos circundantes incluso en las horas nocturnas.',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'No había lugar en el mesón',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 2:6-7',
              text: 'Y aconteció que estando ellos allí, se cumplieron los días de su alumbramiento. Y dio a luz a su hijo primogénito, y le envolvió en pañales, y le acostó en un pesebre, porque no había lugar para ellos en el mesón.',
            },
            {
              type: 'paragraph',
              text: 'La palabra griega traducida como "mesón" es "kataluma" — que en el contexto del Nuevo Testamento puede referirse a una habitación de huéspedes en una casa privada más que a un establecimiento comercial. En Lucas 22:11, el mismo término se usa para el "aposento alto" donde Jesús celebró la Última Cena. Muchos estudiosos modernos sugieren que José intentó quedarse en casa de parientes en Belén — su ciudad de origen — pero el cuarto de invitados estaba lleno debido al census. No había espacio en la habitación de huéspedes.',
            },
            {
              type: 'paragraph',
              text: 'Las casas de Belén del siglo I frecuentemente tenían un nivel inferior donde los animales domésticos eran guardados por la noche para protegerlos del frío y de los ladrones. Las excavaciones arqueológicas en Belén y alrededores muestran este patrón arquitectónico consistentemente. Jesús nació no en un establo separado de postales navideñas sino probablemente en el nivel inferior de una casa llena de parientes de José — un espacio humilde, cálido por los animales, y sin embargo el lugar donde la eternidad entró en el tiempo.',
            },
            {
              type: 'central_quote',
              text: 'El que sostiene el universo con su palabra de poder fue envuelto en tiras de tela y colocado en un comedero de animales. La humildad de la Encarnación no tiene paralelo en ninguna otra teología.',
              attribution: 'N.T. Wright — Simplemente Jesús',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Los pastores y los ángeles',
      intro: {
        romanNumeral: 'III',
        title: 'Lucas 2:8-20 — El anuncio más glorioso al grupo menos esperado',
        paragraphs: [
          'Los primeros seres humanos en saber del nacimiento del Salvador no fueron sacerdotes ni gobernantes sino pastores — personas en los márgenes de la sociedad religiosa judía.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La elección de los pastores',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 2:8-12',
              text: 'Había pastores en la misma región, que velaban y guardaban las vigilias de la noche sobre su rebaño. Y he aquí, se les presentó un ángel del Señor, y la gloria del Señor los rodeó de resplandor; y tuvieron gran temor. Pero el ángel les dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor. Esto os servirá de señal: Hallaréis al niño envuelto en pañales, acostado en un pesebre.',
            },
            {
              type: 'paragraph',
              text: 'Los pastores en la sociedad judía del siglo I ocupaban una posición ambigua. Por un lado, el vocabulario pastoral era central a la identidad religiosa de Israel — Dios era el "pastor de Israel" (Salmo 80:1), el Mesías sería el "buen pastor" (Ezequiel 34:23-24). Por otro lado, los pastores prácticos eran considerados poco confiables para el testimonio legal según la ley rabínica porque sus movimientos continuos hacían difícil verificar sus declaraciones. Dios eligió como primeros testigos del nacimiento de Su Hijo a las personas cuyo testimonio era legalmente descartable.',
            },
            {
              type: 'doctrine_box',
              title: 'El patrón de Dios: elegir a los marginados',
              body: 'El patrón del anuncio a los pastores es consistente con el tema del Magníficat que María cantó semanas antes: Dios "exaltó a los humildes" y "esparcía a los soberbios." Los pastores no fueron elegidos a pesar de su posición marginal — fueron elegidos precisamente porque representaban el tipo de persona a quien el Evangelio era destinado. Lucas construye este patrón conscientemente a lo largo de todo su evangelio: Jesús es constantemente anunciado, recibido, y celebrado por quienes la sociedad considera menos aptos para recibir tales noticias.',
            },
            {
              type: 'highlight_verse',
              reference: 'Lucas 2:13-14',
              text: 'Y repentinamente apareció con el ángel una multitud de las huestes celestiales, que alababan a Dios, y decían: ¡Gloria a Dios en las alturas, y en la tierra paz, buena voluntad para con los hombres!',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'María guarda todas estas cosas en su corazón',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 2:19',
              text: 'Pero María guardaba todas estas cosas, meditándolas en su corazón.',
            },
            {
              type: 'paragraph',
              text: 'Esta frase — "guardaba todas estas cosas, meditándolas en su corazón" — aparece dos veces en Lucas 2 (v.19 y v.51). Es la firma literaria de Lucas para indicar la fuente de su información sobre la infancia de Jesús: María misma. Muchos estudiosos de Lucas sugieren que el evangelista entrevistó a María o tuvo acceso a su testimonio. Estas escenas de la infancia, con su detalle íntimo y perspectiva femenina, son consistentes con un relato en primera persona de la madre.',
            },
            {
              type: 'paragraph',
              text: 'El verbo griego "suntēreō" — "guardar, preservar con cuidado" — implica un tesoro cuidadosamente protegido. María no procesó instantáneamente todo lo que estaba sucediendo. Lo guardó. Lo meditó. Fue una meditadora — una mujer que recibía las experiencias extraordinarias y las llevaba consigo para reflexionarlas con tiempo. La espiritualidad de María era contemplativa, no reactiva.',
            },
            {
              type: 'reflection',
              prompt: '¿Cuál es tu práctica de "guardar en el corazón" las experiencias espirituales significativas? ¿Tienes un modo de preservar y meditar sobre los momentos en que Dios ha obrado en tu vida antes de que el tiempo los diluya?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Simeón y la profecía de la espada',
      intro: {
        romanNumeral: 'IV',
        title: 'Lucas 2:21-38 — La presentación en el templo y el anciano que esperó',
        paragraphs: [
          'A los cuarenta días del nacimiento, José y María llevaron al niño al templo en Jerusalén para la purificación de la madre y la presentación del primogénito. Allí los esperaba un anciano que había esperado toda su vida.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La profecía de Simeón',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 2:28-35',
              text: 'Entonces le tomó en sus brazos, y bendijo a Dios, diciendo: Ahora, Señor, despides a tu siervo en paz, conforme a tu palabra; porque han visto mis ojos tu salvación, la cual has preparado en presencia de todos los pueblos; luz para revelación a los gentiles, y gloria de tu pueblo Israel... Y los bendijo Simeón, y dijo a María su madre: He aquí, éste está puesto para caída y para levantamiento de muchos en Israel, y para señal que será contradicha (y una espada traspasará tu misma alma).',
            },
            {
              type: 'paragraph',
              text: 'Simeón es uno de los personajes más misteriosos del Nuevo Testamento. Era "justo y piadoso," "esperaba la consolación de Israel," y el Espíritu Santo había prometido que no vería la muerte antes de ver al Cristo del Señor (Lucas 2:25-26). Cuando vio al niño Jesús, el Nunc Dimittis — "Ahora despides" — fue su respuesta: el hombre que había esperado toda su vida, ahora podía morir en paz.',
            },
            {
              type: 'paragraph',
              text: 'Pero la profecía sobre María es inquietante: "una espada traspasará tu misma alma." El sustantivo griego "rhomphaia" es la espada larga de la caballería — no el puñal de combate sino la hoja diseñada para atravesar. Simeón le dice a una madre que acaba de dar a luz que el dolor que vendrá sobre ella será del calibre de la espada. No en el sentido de muerte física sino en el sentido de dolor emocional y espiritual extremo. La alegría de Belén lleva en sí la sombra de la Cruz.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Día 8',
                  text: 'Circuncisión de Jesús — le fue puesto su nombre Jesús (Lucas 2:21)',
                  color: 'blue',
                },
                {
                  label: 'Día 40',
                  text: 'Presentación en el templo — purificación de María y consagración del primogénito (Lucas 2:22-24)',
                  color: 'gold',
                },
                {
                  label: 'Día 40',
                  text: 'Simeón profetiza: "una espada traspasará tu alma" (Lucas 2:35)',
                  color: 'red',
                },
                {
                  label: 'Día 40',
                  text: 'Ana la profetisa da gracias y habla de Jesús a todos los que esperaban la redención (Lucas 2:38)',
                  color: 'green',
                },
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                {
                  id: 'p1',
                  question: '¿Por qué Dios permite que Simeón revele desde el principio el dolor que vendrá sobre María?',
                },
                {
                  id: 'p2',
                  question: '¿Qué significa para ti que la alegría del nacimiento y la sombra de la Cruz estén presentes simultáneamente en la vida de María?',
                },
                {
                  id: 'p3',
                  question: '¿Cómo afecta tu fe el hecho de que Dios a veces nos revela el costo de nuestra misión desde el principio?',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
