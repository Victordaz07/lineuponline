import type { Question } from '../../types'

/**
 * Banco de preguntas — Nivel 2: comprensión, contexto y secuencias (20 pts).
 * 5 preguntas por tema × 10 temas = 50 preguntas.
 */
export const LEVEL_2: Question[] = [
  // ── La Expiación de Jesucristo ──────────────────────────────────────────
  {
    id: 'atonement-n2-1',
    question: '¿A dónde fue Jesús con Sus apóstoles inmediatamente después de la Última Cena?',
    options: {
      A: 'Al templo de Jerusalén',
      B: 'A Betania',
      C: 'Al monte de los Olivos, a Getsemaní',
      D: 'A casa de Pedro',
    },
    correctAnswer: 'C',
    explanation:
      'Después de cantar un himno salieron al monte de los Olivos, al jardín de Getsemaní (Mateo 26:30, 36).',
    topic: 'atonement',
    level: 2,
    points: 2000,
    category: 'cronologia',
  },
  {
    id: 'atonement-n2-2',
    question: 'Según Lucas, ¿qué le ocurrió a Jesús mientras oraba en Getsemaní?',
    options: {
      A: 'Su sudor era como grandes gotas de sangre',
      B: 'Fue transfigurado',
      C: 'Se quedó dormido',
      D: 'Cantó un salmo',
    },
    correctAnswer: 'A',
    explanation:
      '"Y era su sudor como grandes gotas de sangre que caían hasta la tierra" (Lucas 22:44).',
    topic: 'atonement',
    level: 2,
    points: 2000,
    category: 'eventos',
  },
  {
    id: 'atonement-n2-3',
    question: '¿Qué dos efectos de la Caída vence la Expiación de Jesucristo?',
    options: {
      A: 'La pobreza y la enfermedad',
      B: 'La muerte física y la muerte espiritual',
      C: 'El hambre y la guerra',
      D: 'El dolor y el cansancio',
    },
    correctAnswer: 'B',
    explanation:
      'La resurrección vence la muerte física, y el arrepentimiento por medio de Cristo vence la separación de Dios (2 Nefi 9:6–12).',
    topic: 'atonement',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'atonement-n2-4',
    question: '¿Cuál es el orden correcto de los acontecimientos de la Expiación?',
    options: {
      A: 'Crucifixión → Getsemaní → juicios → resurrección',
      B: 'Juicios → Getsemaní → resurrección → crucifixión',
      C: 'Resurrección → Getsemaní → juicios → crucifixión',
      D: 'Getsemaní → juicios → crucifixión → resurrección',
    },
    correctAnswer: 'D',
    explanation:
      'El Salvador sufrió en Getsemaní, fue juzgado, crucificado en el Gólgota y resucitó al tercer día.',
    topic: 'atonement',
    level: 2,
    points: 2000,
    category: 'cronologia',
  },
  {
    id: 'atonement-n2-5',
    question: '¿Por qué Juan el Bautista llamó a Jesús "el Cordero de Dios"?',
    options: {
      A: 'Por Su mansedumbre al hablar',
      B: 'Porque nació entre pastores',
      C: 'Porque sería el sacrificio que los corderos de la ley de Moisés simbolizaban',
      D: 'Porque cuidaba ovejas en Galilea',
    },
    correctAnswer: 'C',
    explanation:
      'Los sacrificios de corderos apuntaban al sacrificio del Hijo de Dios, que quita el pecado del mundo (Juan 1:29; Moisés 5:6–8).',
    topic: 'atonement',
    level: 2,
    points: 2000,
    category: 'simbolos',
  },

  // ── La Restauración del Evangelio ───────────────────────────────────────
  {
    id: 'restoration-n2-1',
    question: '¿Qué pasaje de la Biblia motivó a José Smith a orar para saber a qué iglesia unirse?',
    options: { A: 'Santiago 1:5', B: 'Juan 3:16', C: 'Mateo 5:1', D: 'Salmos 23:1' },
    correctAnswer: 'A',
    explanation:
      '"Si alguno de vosotros tiene falta de sabiduría, pídala a Dios" penetró su corazón con gran poder (José Smith—Historia 1:11–13).',
    topic: 'restoration',
    level: 2,
    points: 2000,
    category: 'escrituras',
  },
  {
    id: 'restoration-n2-2',
    question: '¿Por qué fue necesaria una restauración y no solo una reforma de las iglesias existentes?',
    options: {
      A: 'Porque la Biblia se había perdido por completo',
      B: 'Porque la autoridad del sacerdocio se perdió en la Gran Apostasía',
      C: 'Porque faltaban edificios religiosos',
      D: 'Porque no había suficientes creyentes',
    },
    correctAnswer: 'B',
    explanation:
      'Tras la muerte de los apóstoles se perdieron la autoridad y la organización originales; debían restaurarse, no reformarse (2 Tesalonicenses 2:3).',
    topic: 'restoration',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'restoration-n2-3',
    question: '¿En qué fecha se organizó oficialmente la Iglesia restaurada?',
    options: {
      A: 'El 22 de septiembre de 1827',
      B: 'El 15 de mayo de 1829',
      C: 'El 6 de abril de 1830',
      D: 'El 27 de marzo de 1836',
    },
    correctAnswer: 'C',
    explanation:
      'La Iglesia de Jesucristo fue organizada el 6 de abril de 1830 en Fayette, Nueva York (D. y C. 20:1).',
    topic: 'restoration',
    level: 2,
    points: 2000,
    category: 'cronologia',
  },
  {
    id: 'restoration-n2-4',
    question: '¿Quién sirvió como escriba principal durante la traducción del Libro de Mormón?',
    options: { A: 'Emma Smith', B: 'Martin Harris', C: 'Hyrum Smith', D: 'Oliver Cowdery' },
    correctAnswer: 'D',
    explanation:
      'Oliver Cowdery escribió la mayor parte del manuscrito mientras José dictaba la traducción (José Smith—Historia 1:66–67).',
    topic: 'restoration',
    level: 2,
    points: 2000,
    category: 'personajes',
  },
  {
    id: 'restoration-n2-5',
    question: '¿Qué seres celestiales aparecieron en el Templo de Kirtland el 3 de abril de 1836?',
    options: {
      A: 'El Salvador, Moisés, Elías y Elías el Profeta',
      B: 'Solo el ángel Moroni',
      C: 'Adán y Eva',
      D: 'Pedro, Santiago y Juan',
    },
    correctAnswer: 'A',
    explanation:
      'El Señor aceptó Su casa y antiguos profetas entregaron llaves del sacerdocio (D. y C. 110).',
    topic: 'restoration',
    level: 2,
    points: 2000,
    category: 'eventos',
  },

  // ── El Plan de Salvación ────────────────────────────────────────────────
  {
    id: 'plan_of_salvation-n2-1',
    question: '¿Por qué no recordamos nuestra vida preterrenal?',
    options: {
      A: 'Porque no existió',
      B: 'Para que caminemos por fe y seamos probados',
      C: 'Porque Dios nos castigó',
      D: 'Por un accidente del nacimiento',
    },
    correctAnswer: 'B',
    explanation:
      'El velo del olvido nos permite andar por fe durante la prueba terrenal (2 Corintios 5:7; Abraham 3:25).',
    topic: 'plan_of_salvation',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'plan_of_salvation-n2-2',
    question: '¿Qué es la muerte espiritual?',
    options: {
      A: 'Dejar de respirar',
      B: 'El fin del espíritu',
      C: 'La separación de la presencia de Dios',
      D: 'Un sueño profundo',
    },
    correctAnswer: 'C',
    explanation:
      'La muerte espiritual es quedar separados de la presencia de Dios a causa del pecado (Alma 42:9).',
    topic: 'plan_of_salvation',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'plan_of_salvation-n2-3',
    question: 'Según Abraham 3:25, ¿para qué fuimos enviados a la tierra?',
    options: {
      A: 'Para acumular bienes',
      B: 'Para probarnos, y ver si haremos todo lo que el Señor nos mande',
      C: 'Para olvidar a Dios',
      D: 'Para vivir sin leyes',
    },
    correctAnswer: 'B',
    explanation:
      '"Y con esto los probaremos, para ver si harán todas las cosas que el Señor su Dios les mandare" (Abraham 3:25).',
    topic: 'plan_of_salvation',
    level: 2,
    points: 2000,
    category: 'escrituras',
  },
  {
    id: 'plan_of_salvation-n2-4',
    question: '¿Cómo se divide el mundo de los espíritus?',
    options: {
      A: 'En doce tribus',
      B: 'En tres reinos de gloria',
      C: 'No tiene divisiones',
      D: 'En paraíso y prisión espiritual',
    },
    correctAnswer: 'D',
    explanation:
      'Los justos van al paraíso; quienes murieron sin conocer la verdad o en rebelión, a la prisión espiritual (Alma 40:12–14).',
    topic: 'plan_of_salvation',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'plan_of_salvation-n2-5',
    question: '¿Qué propuso Lucifer en el concilio preterrenal?',
    options: {
      A: 'Salvar a todos quitando el albedrío y tomar la gloria para sí',
      B: 'Respetar la libertad de elegir',
      C: 'Crear más mundos',
      D: 'No participar en el plan',
    },
    correctAnswer: 'A',
    explanation:
      'Satanás buscó "destruir el albedrío del hombre" y exigió el honor de Dios (Moisés 4:1–3).',
    topic: 'plan_of_salvation',
    level: 2,
    points: 2000,
    category: 'personajes',
  },

  // ── El Libro de Mormón ──────────────────────────────────────────────────
  {
    id: 'book_of_mormon-n2-1',
    question: '¿Para qué regresaron Nefi y sus hermanos a Jerusalén la primera vez?',
    options: {
      A: 'Por provisiones para el desierto',
      B: 'Por la familia de Ismael',
      C: 'Por las planchas de bronce',
      D: 'Por oro y plata',
    },
    correctAnswer: 'C',
    explanation:
      'El Señor mandó obtener las planchas de bronce, que contenían las Escrituras y su genealogía (1 Nefi 3:2–4).',
    topic: 'book_of_mormon',
    level: 2,
    points: 2000,
    category: 'eventos',
  },
  {
    id: 'book_of_mormon-n2-2',
    question: 'En el sueño de Lehi, ¿qué representa el fruto del árbol de la vida?',
    options: {
      A: 'La riqueza del mundo',
      B: 'El amor de Dios',
      C: 'El conocimiento humano',
      D: 'La tierra prometida',
    },
    correctAnswer: 'B',
    explanation:
      'El árbol representa "el amor de Dios", lo más deseable de todas las cosas (1 Nefi 11:21–22).',
    topic: 'book_of_mormon',
    level: 2,
    points: 2000,
    category: 'simbolos',
  },
  {
    id: 'book_of_mormon-n2-3',
    question: 'En el mismo sueño, ¿qué representa la barra de hierro?',
    options: {
      A: 'El poder político',
      B: 'El sacerdocio',
      C: 'El camino a Jerusalén',
      D: 'La palabra de Dios',
    },
    correctAnswer: 'D',
    explanation:
      'La barra de hierro que conduce al árbol es la palabra de Dios (1 Nefi 11:25; 15:23–24).',
    topic: 'book_of_mormon',
    level: 2,
    points: 2000,
    category: 'simbolos',
  },
  {
    id: 'book_of_mormon-n2-4',
    question: '¿En qué momento de Su ministerio visitó Jesucristo a los nefitas?',
    options: {
      A: 'Después de Su resurrección',
      B: 'Antes de Su nacimiento',
      C: 'Durante Su ministerio en Galilea',
      D: 'Solo en sueños y visiones',
    },
    correctAnswer: 'A',
    explanation:
      'El Cristo resucitado descendió del cielo y ministró a los nefitas reunidos junto al templo (3 Nefi 11).',
    topic: 'book_of_mormon',
    level: 2,
    points: 2000,
    category: 'cronologia',
  },
  {
    id: 'book_of_mormon-n2-5',
    question: '¿Qué señal acompañó el nacimiento de Cristo en el continente americano?',
    options: {
      A: 'Tres días de oscuridad',
      B: 'Un gran terremoto',
      C: 'Un día, una noche y un día sin oscuridad',
      D: 'Lluvia de fuego',
    },
    correctAnswer: 'C',
    explanation:
      'Como profetizó Samuel el Lamanita, no hubo oscuridad la noche de Su nacimiento (3 Nefi 1:15, 19).',
    topic: 'book_of_mormon',
    level: 2,
    points: 2000,
    category: 'eventos',
  },

  // ── Profetas y Revelación Continua ──────────────────────────────────────
  {
    id: 'prophets-n2-1',
    question: '¿Qué sucede con la dirección de la Iglesia cuando fallece el profeta?',
    options: {
      A: 'Se convoca a elecciones generales',
      B: 'El Cuórum de los Doce preside, y el apóstol de mayor antigüedad llega a ser presidente',
      C: 'Cada estaca se gobierna sola',
      D: 'La Primera Presidencia continúa sin cambios',
    },
    correctAnswer: 'B',
    explanation:
      'A la muerte del presidente, las llaves recaen en el Cuórum de los Doce, y se reorganiza la Primera Presidencia.',
    topic: 'prophets',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'prophets-n2-2',
    question: '¿Qué es una dispensación del Evangelio?',
    options: {
      A: 'Un período en que Dios revela Su evangelio mediante profetas autorizados',
      B: 'Un programa de la Escuela Dominical',
      C: 'Una región administrativa de la Iglesia',
      D: 'Un libro de Escrituras',
    },
    correctAnswer: 'A',
    explanation:
      'Cada dispensación comienza cuando el Señor revela Su evangelio y autoridad a un profeta, como Adán, Noé, Moisés o José Smith.',
    topic: 'prophets',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'prophets-n2-3',
    question: '¿Qué profeta testificó de Cristo desde la muralla de Zarahemla?',
    options: { A: 'Abinadí', B: 'Alma', C: 'Helamán', D: 'Samuel el Lamanita' },
    correctAnswer: 'D',
    explanation:
      'Samuel el Lamanita profetizó desde la muralla las señales del nacimiento y la muerte de Cristo (Helamán 13–14).',
    topic: 'prophets',
    level: 2,
    points: 2000,
    category: 'personajes',
  },
  {
    id: 'prophets-n2-4',
    question: '¿En qué se distingue el presidente de la Iglesia de cualquier otra persona que recibe revelación?',
    options: {
      A: 'En que nunca se equivoca en nada',
      B: 'En que vive en el templo',
      C: 'En que solo él recibe revelación para toda la Iglesia',
      D: 'En que no necesita orar',
    },
    correctAnswer: 'C',
    explanation:
      'Todos podemos recibir revelación personal, pero solo el profeta la recibe para la Iglesia entera (D. y C. 28:2–7).',
    topic: 'prophets',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'prophets-n2-5',
    question: '¿Cómo se llama la dispensación en la que vivimos?',
    options: {
      A: 'La dispensación del cumplimiento de los tiempos',
      B: 'La dispensación de Adán',
      C: 'La dispensación mosaica',
      D: 'La dispensación apostólica',
    },
    correctAnswer: 'A',
    explanation:
      'En esta última dispensación, Dios reúne todas las llaves y verdades de las épocas anteriores (Efesios 1:10; D. y C. 128:18).',
    topic: 'prophets',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },

  // ── Las Ordenanzas y los Convenios ──────────────────────────────────────
  {
    id: 'ordinances-n2-1',
    question: '¿Cuál es el orden correcto de estas ordenanzas?',
    options: {
      A: 'Confirmación → bautismo → investidura',
      B: 'Bautismo → confirmación → investidura → sellamiento',
      C: 'Investidura → bautismo → confirmación',
      D: 'Santa Cena → bautismo → confirmación',
    },
    correctAnswer: 'B',
    explanation:
      'Primero el bautismo y la confirmación; las ordenanzas del templo (investidura y sellamiento) vienen después.',
    topic: 'ordinances',
    level: 2,
    points: 2000,
    category: 'cronologia',
  },
  {
    id: 'ordinances-n2-2',
    question: 'Según las oraciones sacramentales, ¿qué prometemos al participar de la Santa Cena?',
    options: {
      A: 'Asistir a todas las reuniones',
      B: 'Pagar el diezmo',
      C: 'Ayunar cada semana',
      D: 'Recordarle siempre, tomar Su nombre y guardar Sus mandamientos',
    },
    correctAnswer: 'D',
    explanation:
      'Testificamos que estamos dispuestos a tomar Su nombre, recordarle siempre y guardar Sus mandamientos (D. y C. 20:77).',
    topic: 'ordinances',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'ordinances-n2-3',
    question: '¿Qué promete Dios a quienes guardan sus convenios sacramentales?',
    options: {
      A: 'Que siempre tendrán Su Espíritu consigo',
      B: 'Riquezas y abundancia',
      C: 'Una vida sin pruebas',
      D: 'Salud perfecta',
    },
    correctAnswer: 'A',
    explanation:
      'La promesa de la oración sacramental es "que siempre puedan tener su Espíritu consigo" (D. y C. 20:77).',
    topic: 'ordinances',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'ordinances-n2-4',
    question: '¿Por qué se efectúan bautismos por los muertos en los templos?',
    options: {
      A: 'Es solo un símbolo sin efecto real',
      B: 'Para honrar la memoria de los antepasados',
      C: 'Porque muchos murieron sin la oportunidad de recibir esta ordenanza esencial',
      D: 'Por tradición del Antiguo Testamento',
    },
    correctAnswer: 'C',
    explanation:
      'Dios ofrece la salvación a todos: los vivos pueden bautizarse vicariamente por los muertos (1 Corintios 15:29; D. y C. 128).',
    topic: 'ordinances',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'ordinances-n2-5',
    question: '¿Qué se requiere para que una ordenanza sea válida ante Dios?',
    options: {
      A: 'Que se realice en público',
      B: 'Que la efectúe alguien con autoridad del sacerdocio',
      C: 'Que se realice en domingo',
      D: 'Que haya muchos testigos',
    },
    correctAnswer: 'B',
    explanation:
      'El hombre debe "ser llamado por Dios… por aquellos que tienen la autoridad" (Artículos de Fe 1:5).',
    topic: 'ordinances',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },

  // ── El Sacerdocio ───────────────────────────────────────────────────────
  {
    id: 'priesthood-n2-1',
    question: '¿Qué oficios pertenecen al Sacerdocio Aarónico?',
    options: {
      A: 'Élder y sumo sacerdote',
      B: 'Apóstol y setenta',
      C: 'Patriarca y obispo presidente',
      D: 'Diácono, maestro y presbítero',
    },
    correctAnswer: 'D',
    explanation:
      'Los oficios del Sacerdocio Aarónico son diácono, maestro y presbítero, presididos por el obispo (D. y C. 107:13–14, 20).',
    topic: 'priesthood',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'priesthood-n2-2',
    question: '¿Por qué el sacerdocio mayor se llama "de Melquisedec"?',
    options: {
      A: 'Para evitar la repetición frecuente del nombre de Dios, se nombró por el gran sumo sacerdote Melquisedec',
      B: 'Porque Melquisedec lo inventó',
      C: 'Por mandato del rey David',
      D: 'Porque así se llamaba el primer templo',
    },
    correctAnswer: 'A',
    explanation:
      'Su nombre original era "el Santo Sacerdocio según el Orden del Hijo de Dios" (D. y C. 107:2–4).',
    topic: 'priesthood',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'priesthood-n2-3',
    question: 'Según D. y C. 13, ¿qué llaves tiene el Sacerdocio Aarónico?',
    options: {
      A: 'Las llaves del sellamiento eterno',
      B: 'Las del ministerio de ángeles, del evangelio de arrepentimiento y del bautismo',
      C: 'Las llaves del recogimiento de Israel',
      D: 'Las llaves de la investidura',
    },
    correctAnswer: 'B',
    explanation:
      'Juan el Bautista declaró que este sacerdocio "tiene las llaves del ministerio de ángeles, y del evangelio de arrepentimiento, y del bautismo" (D. y C. 13:1).',
    topic: 'priesthood',
    level: 2,
    points: 2000,
    category: 'escrituras',
  },
  {
    id: 'priesthood-n2-4',
    question: '¿Cuál de los dos sacerdocios fue restaurado primero?',
    options: {
      A: 'El de Melquisedec',
      B: 'Ambos al mismo tiempo',
      C: 'El Aarónico',
      D: 'Ninguno fue restaurado',
    },
    correctAnswer: 'C',
    explanation:
      'El Sacerdocio Aarónico fue restaurado el 15 de mayo de 1829; el de Melquisedec, poco después.',
    topic: 'priesthood',
    level: 2,
    points: 2000,
    category: 'cronologia',
  },
  {
    id: 'priesthood-n2-5',
    question: '¿Quién es la única persona autorizada para ejercer todas las llaves del sacerdocio en la tierra?',
    options: {
      A: 'Cada poseedor del sacerdocio',
      B: 'El obispo de cada barrio',
      C: 'El patriarca de estaca',
      D: 'El presidente de la Iglesia',
    },
    correctAnswer: 'D',
    explanation:
      'Solo hay uno a la vez sobre la tierra autorizado para ejercer todas las llaves (D. y C. 132:7).',
    topic: 'priesthood',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },

  // ── La Fe y el Arrepentimiento ──────────────────────────────────────────
  {
    id: 'faith_repentance-n2-1',
    question: '¿Qué elementos forman parte de un arrepentimiento sincero?',
    options: {
      A: 'Reconocer, confesar y abandonar el pecado, y restituir el daño',
      B: 'Solo sentirse triste un tiempo',
      C: 'Esperar a que pase el tiempo',
      D: 'Hacer una donación',
    },
    correctAnswer: 'A',
    explanation:
      '"Por esto sabréis si un hombre se arrepiente de sus pecados: he aquí, los confesará y los abandonará" (D. y C. 58:42–43).',
    topic: 'faith_repentance',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'faith_repentance-n2-2',
    question: '¿Qué llevó a Enós a orar con tanta intensidad?',
    options: {
      A: 'Una tormenta en el mar',
      B: 'Las palabras de su padre sobre la vida eterna penetraron su corazón',
      C: 'La visita de un ángel',
      D: 'Una enfermedad grave',
    },
    correctAnswer: 'B',
    explanation:
      'Mientras cazaba, las palabras que su padre Jacob le había enseñado penetraron profundamente su corazón (Enós 1:3–4).',
    topic: 'faith_repentance',
    level: 2,
    points: 2000,
    category: 'personajes',
  },
  {
    id: 'faith_repentance-n2-3',
    question: 'En Alma 32, ¿cómo sabes que la semilla —la palabra— es buena?',
    options: {
      A: 'Porque otros lo afirman',
      B: 'Porque produce riquezas',
      C: 'Porque hincha el pecho, ensancha el alma e ilumina el entendimiento',
      D: 'Porque crece sin esfuerzo',
    },
    correctAnswer: 'C',
    explanation:
      'La buena semilla "empezará a hinchar vuestro pecho… a ensanchar mi alma… a iluminar mi entendimiento" (Alma 32:28).',
    topic: 'faith_repentance',
    level: 2,
    points: 2000,
    category: 'simbolos',
  },
  {
    id: 'faith_repentance-n2-4',
    question: '¿Qué experimentó el pueblo del rey Benjamín después de su discurso?',
    options: {
      A: 'Construyeron una nueva ciudad',
      B: 'Se dividieron en tribus',
      C: 'Salieron a la guerra',
      D: 'Un potente cambio de corazón, sin más disposición a obrar mal',
    },
    correctAnswer: 'D',
    explanation:
      '"El Espíritu del Señor… ha efectuado un potente cambio en nosotros… no tenemos más disposición a obrar mal" (Mosíah 5:2).',
    topic: 'faith_repentance',
    level: 2,
    points: 2000,
    category: 'eventos',
  },
  {
    id: 'faith_repentance-n2-5',
    question: '¿Cuál es la relación correcta entre la fe y los milagros?',
    options: {
      A: 'Los milagros producen la fe verdadera',
      B: 'Los milagros siguen a la fe; no la preceden',
      C: 'No tienen relación alguna',
      D: 'La fe exige ver señales primero',
    },
    correctAnswer: 'B',
    explanation:
      '"La fe no es un conocimiento perfecto… no recibiréis ningún testimonio sino hasta después de la prueba de vuestra fe" (Éter 12:6, 12, 18).',
    topic: 'faith_repentance',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },

  // ── Bautismo y Don del Espíritu Santo ───────────────────────────────────
  {
    id: 'baptism-n2-1',
    question: '¿Por qué se bautizó Jesús si no tenía pecado?',
    options: {
      A: 'Para cumplir toda justicia y mostrarnos el camino',
      B: 'Porque Juan se lo exigió',
      C: 'Por costumbre de Su época',
      D: 'No necesitaba hacerlo y fue simbólico solamente',
    },
    correctAnswer: 'A',
    explanation:
      '"Nos conviene cumplir así toda justicia" — Jesús obedeció y marcó la senda (Mateo 3:15; 2 Nefi 31:7–9).',
    topic: 'baptism',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'baptism-n2-2',
    question: '¿Qué simboliza la inmersión completa en el agua?',
    options: {
      A: 'La limpieza del cuerpo físico',
      B: 'El valor del converso',
      C: 'La muerte y sepultura del "hombre viejo" y el nacimiento a una vida nueva',
      D: 'El paso del mar Rojo',
    },
    correctAnswer: 'C',
    explanation:
      '"Somos sepultados juntamente con él para muerte por el bautismo… así también nosotros andemos en novedad de vida" (Romanos 6:3–5).',
    topic: 'baptism',
    level: 2,
    points: 2000,
    category: 'simbolos',
  },
  {
    id: 'baptism-n2-3',
    question: 'Según Mosíah 18:8–9, ¿qué prometemos al entrar en el convenio del bautismo?',
    options: {
      A: 'Leer las Escrituras una hora diaria',
      B: 'Llevar las cargas los unos de los otros, llorar con los que lloran y ser testigos de Dios',
      C: 'Servir una misión de tiempo completo',
      D: 'No volver a equivocarnos jamás',
    },
    correctAnswer: 'B',
    explanation:
      'Alma enseñó estos convenios junto a las aguas de Mormón (Mosíah 18:8–10).',
    topic: 'baptism',
    level: 2,
    points: 2000,
    category: 'escrituras',
  },
  {
    id: 'baptism-n2-4',
    question: '¿Qué es el "bautismo de fuego"?',
    options: {
      A: 'Una ceremonia antigua con antorchas',
      B: 'Una prueba difícil de la vida',
      C: 'Un símbolo del juicio final',
      D: 'La purificación y santificación que efectúa el Espíritu Santo',
    },
    correctAnswer: 'D',
    explanation:
      'Después del bautismo de agua "viene la remisión de vuestros pecados por fuego y por el Espíritu Santo" (2 Nefi 31:17).',
    topic: 'baptism',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'baptism-n2-5',
    question: '¿Qué funciones cumple el Espíritu Santo como "el Consolador"?',
    options: {
      A: 'Enseña, testifica de la verdad, consuela y nos guía',
      B: 'Solo consuela en los funerales',
      C: 'Reemplaza la necesidad de orar',
      D: 'Castiga a los desobedientes',
    },
    correctAnswer: 'A',
    explanation:
      '"El Consolador… os enseñará todas las cosas y os recordará todo lo que os he dicho" (Juan 14:26).',
    topic: 'baptism',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },

  // ── La Familia Eterna ───────────────────────────────────────────────────
  {
    id: 'eternal_family-n2-1',
    question: '¿Qué significa casarse "por el tiempo y por toda la eternidad"?',
    options: {
      A: 'Tener una ceremonia más larga',
      B: 'Renovar los votos cada año',
      C: 'Que el convenio matrimonial, sellado con la debida autoridad, continúa después de la muerte',
      D: 'Vivir cerca del templo',
    },
    correctAnswer: 'C',
    explanation:
      'El matrimonio sellado por el poder del sacerdocio permanece válido en la eternidad (D. y C. 132:19).',
    topic: 'eternal_family',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'eternal_family-n2-2',
    question: '¿Qué profetizó Malaquías acerca de Elías el Profeta?',
    options: {
      A: 'Que construiría un templo en Jerusalén',
      B: 'Que haría volver el corazón de los padres a los hijos y el de los hijos a los padres',
      C: 'Que escribiría un nuevo libro de Escrituras',
      D: 'Que reuniría a los ejércitos de Israel',
    },
    correctAnswer: 'B',
    explanation:
      '"He aquí, yo os envío a Elías el profeta… Él hará volver el corazón de los padres hacia los hijos" (Malaquías 4:5–6).',
    topic: 'eternal_family',
    level: 2,
    points: 2000,
    category: 'escrituras',
  },
  {
    id: 'eternal_family-n2-3',
    question: 'Según la proclamación sobre la familia, ¿sobre qué se logran los matrimonios y las familias felices?',
    options: {
      A: 'Sobre la riqueza y la estabilidad económica',
      B: 'Sobre la disciplina estricta',
      C: 'Sobre las tradiciones culturales',
      D: 'Sobre las enseñanzas del Señor Jesucristo',
    },
    correctAnswer: 'D',
    explanation:
      'La proclamación enseña que la felicidad familiar se logra cuando se basa en las enseñanzas del Señor Jesucristo.',
    topic: 'eternal_family',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'eternal_family-n2-4',
    question: '¿Qué relación hay entre la historia familiar y la obra del templo?',
    options: {
      A: 'Encontramos los nombres de nuestros antepasados para efectuar por ellos las ordenanzas vicarias',
      B: 'Ninguna; son programas separados',
      C: 'La historia familiar es solo un pasatiempo cultural',
      D: 'Solo sirve para decorar el árbol genealógico',
    },
    correctAnswer: 'A',
    explanation:
      'La investigación de los antepasados permite ofrecerles las ordenanzas de salvación en el templo (D. y C. 128:15).',
    topic: 'eternal_family',
    level: 2,
    points: 2000,
    category: 'doctrina',
  },
  {
    id: 'eternal_family-n2-5',
    question: 'Además de Elías el Profeta, ¿quién entregó en Kirtland las llaves del recogimiento de Israel?',
    options: { A: 'Abraham', B: 'Noé', C: 'Moisés', D: 'Enoc' },
    correctAnswer: 'C',
    explanation:
      'Moisés entregó "las llaves del recogimiento de Israel de las cuatro partes de la tierra" (D. y C. 110:11).',
    topic: 'eternal_family',
    level: 2,
    points: 2000,
    category: 'personajes',
  },
]
