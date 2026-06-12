import type { ImageCategory, QuestionLevel, RoundType } from '../types'

export interface ImageQuestionSeed {
  answer: string
  acceptedVariants: string[]
  category: ImageCategory
  level: QuestionLevel
  roundType: RoundType
  hint: string
  actorInstructions?: string // mime only
  imagePrompt: string
}

export const IMAGE_QUESTION_SEEDS: ImageQuestionSeed[] = [
  // ── image_guess · personaje · nivel 1 ──────────────────────────────
  {
    answer: 'David',
    acceptedVariants: ['rey david', 'david y goliat'],
    category: 'personaje', level: 1, roundType: 'image_guess',
    hint: 'Venció a un gigante con una honda',
    imagePrompt: '[ESTILO BASE] + A young shepherd boy holding a sling, standing confidently before a giant armored warrior silhouette in the distance, five smooth stones at his feet.',
  },
  {
    answer: 'Noé',
    acceptedVariants: ['noe', 'el arca de noe'],
    category: 'personaje', level: 1, roundType: 'image_guess',
    hint: 'Construyó una embarcación enorme',
    imagePrompt: '[ESTILO BASE] + An elderly bearded man with a wooden staff standing before a massive wooden ark on dry land, pairs of animals walking toward it, a dove with an olive branch above.',
  },
  {
    answer: 'Moisés',
    acceptedVariants: ['moises'],
    category: 'personaje', level: 1, roundType: 'image_guess',
    hint: 'Dividió las aguas del mar Rojo',
    imagePrompt: '[ESTILO BASE] + A prophet with raised staff parting a great sea, two walls of stylized water with a dry path between them, people walking through in the distance.',
  },
  {
    answer: 'Jonás',
    acceptedVariants: ['jonas', 'jonas y la ballena'],
    category: 'personaje', level: 1, roundType: 'image_guess',
    hint: 'Pasó tres días en el vientre de un gran pez',
    imagePrompt: '[ESTILO BASE] + A man praying inside the stylized silhouette of an enormous fish under the sea, rays of light reaching down through the water.',
  },
  // ── image_guess · personaje · nivel 2 ──────────────────────────────
  {
    answer: 'Daniel',
    acceptedVariants: ['daniel en el foso', 'daniel y los leones'],
    category: 'personaje', level: 2, roundType: 'image_guess',
    hint: 'Los leones no lo tocaron',
    imagePrompt: '[ESTILO BASE] + A calm man praying in a stone pit surrounded by peaceful lions lying down, an angel figure of light standing guard beside him.',
  },
  {
    answer: 'Nefi',
    acceptedVariants: ['nefi construye el barco'],
    category: 'personaje', level: 2, roundType: 'image_guess',
    hint: 'Construyó un barco guiado por el Señor',
    imagePrompt: '[ESTILO BASE] + A strong young man with ancient Near Eastern clothing building a wooden ship on a beach, tools at his feet, mountain and forge fire behind him, ocean horizon.',
  },
  {
    answer: 'Capitán Moroni',
    acceptedVariants: ['capitan moroni', 'moroni'],
    category: 'personaje', level: 2, roundType: 'image_guess',
    hint: 'Levantó el estandarte de la libertad',
    imagePrompt: '[ESTILO BASE] + A noble warrior captain in ancient American armor raising a torn cloak banner on a pole, army with shields gathered behind him on a hill. The banner is plain cloth with NO writing.',
  },
  {
    answer: 'Abinadí',
    acceptedVariants: ['abinadi', 'abinadi ante el rey noe'],
    category: 'personaje', level: 2, roundType: 'image_guess',
    hint: 'Testificó valientemente ante un rey inicuo',
    imagePrompt: '[ESTILO BASE] + An elderly prophet in chains speaking boldly with raised hand before a corrupt king on a jaguar-decorated throne, his face glowing with light while guards shield their eyes.',
  },
  // ── image_guess · escena · nivel 1 ─────────────────────────────────
  {
    answer: 'La Primera Visión',
    acceptedVariants: ['primera vision', 'la arboleda sagrada'],
    category: 'escena', level: 1, roundType: 'image_guess',
    hint: 'Un joven oró en una arboleda en 1820',
    imagePrompt: '[ESTILO BASE] + A young man kneeling in a grove of tall trees, looking up at a brilliant pillar of golden light descending from heaven with two glorious figures of light within it.',
  },
  {
    answer: 'El bautismo de Jesús',
    acceptedVariants: ['bautismo de jesus', 'jesus es bautizado'],
    category: 'escena', level: 1, roundType: 'image_guess',
    hint: 'Ocurrió en el río Jordán',
    imagePrompt: '[ESTILO BASE] + Two figures standing in a river, one baptizing the other, a white dove descending with rays of light from an opening in the clouds.',
  },
  // ── image_guess · escena · nivel 2 ─────────────────────────────────
  {
    answer: 'El sueño de Lehi',
    acceptedVariants: ['sueño de lehi', 'el arbol de la vida'],
    category: 'escena', level: 2, roundType: 'image_guess',
    hint: 'Un árbol con fruto blanco y una barra de hierro',
    imagePrompt: '[ESTILO BASE] + A radiant tree with glowing white fruit, an iron rod path leading to it through mists of darkness, a great building floating in the air in the distance, a river dividing the scene.',
  },
  {
    answer: 'Jesús calma la tempestad',
    acceptedVariants: ['calma la tormenta', 'jesus en la barca'],
    category: 'escena', level: 2, roundType: 'image_guess',
    hint: '«Calla, enmudece»',
    imagePrompt: '[ESTILO BASE] + A serene figure standing in a small fishing boat with raised hand, giant stylized waves freezing into calm around the boat, frightened disciples behind him.',
  },
  {
    answer: 'Cristo visita a los nefitas',
    acceptedVariants: ['cristo en america', '3 nefi 11'],
    category: 'escena', level: 2, roundType: 'image_guess',
    hint: 'Descendió del cielo ante un templo americano',
    imagePrompt: '[ESTILO BASE] + A glorious robed figure descending from heaven in light toward a crowd gathered at an ancient Mesoamerican stone temple, people kneeling and reaching upward.',
  },
  // ── image_guess · escena · nivel 3 ─────────────────────────────────
  {
    answer: 'La restauración del sacerdocio',
    acceptedVariants: ['restauracion del sacerdocio aaronico', 'juan el bautista restaura'],
    category: 'escena', level: 3, roundType: 'image_guess',
    hint: 'Un mensajero celestial impuso las manos sobre dos hombres',
    imagePrompt: '[ESTILO BASE] + An angelic figure of light laying hands on the heads of two kneeling young men in 1820s clothing, a river and forest in the background.',
  },
  {
    answer: 'Los 2000 jóvenes guerreros',
    acceptedVariants: ['2000 guerreros', 'ejercito de helaman', 'jovenes guerreros'],
    category: 'escena', level: 3, roundType: 'image_guess',
    hint: 'Sus madres les enseñaron a tener fe',
    imagePrompt: '[ESTILO BASE] + An army of very young warriors with simple shields and headbands marching in formation, led by a tall commander, golden light over them, mothers waving in the far background.',
  },
  {
    answer: 'Enós orando',
    acceptedVariants: ['enos', 'la oracion de enos'],
    category: 'escena', level: 3, roundType: 'image_guess',
    hint: 'Oró todo el día y toda la noche',
    imagePrompt: '[ESTILO BASE] + A hunter kneeling in prayer in a forest clearing, his bow set aside against a tree, scene split in half: daylight sun on one side and moon with stars on the other.',
  },
  // ── image_guess · lugar · nivel 1 ──────────────────────────────────
  {
    answer: 'El templo',
    acceptedVariants: ['templo', 'casa del señor'],
    category: 'lugar', level: 1, roundType: 'image_guess',
    hint: 'La casa del Señor',
    imagePrompt: '[ESTILO BASE] + A majestic white temple with a single golden spire topped by a trumpeting angel statue, garden path leading to its doors, glowing windows at dusk.',
  },
  // ── image_guess · lugar · nivel 2 ──────────────────────────────────
  {
    answer: 'Getsemaní',
    acceptedVariants: ['getsemani', 'el jardin de getsemani'],
    category: 'lugar', level: 2, roundType: 'image_guess',
    hint: 'Un jardín de olivos donde el Salvador oró',
    imagePrompt: '[ESTILO BASE] + An ancient olive garden at night, gnarled olive trees under a full moon, a kneeling figure praying beside a large rock, an angel of light nearby, three sleeping figures in the distance.',
  },
  {
    answer: 'El cerro Cumorah',
    acceptedVariants: ['cumorah', 'cerro de cumorah'],
    category: 'lugar', level: 2, roundType: 'image_guess',
    hint: 'Allí estaban enterradas las planchas',
    imagePrompt: '[ESTILO BASE] + A green drumlin hill with a young man kneeling at an open stone box on its slope, golden plates glowing inside the box, an angel of light hovering above.',
  },
  // ── image_guess · lugar · nivel 3 ──────────────────────────────────
  {
    answer: 'Las aguas de Mormón',
    acceptedVariants: ['aguas de mormon'],
    category: 'lugar', level: 3, roundType: 'image_guess',
    hint: 'Allí Alma bautizó a los conversos',
    imagePrompt: '[ESTILO BASE] + A hidden forest pool of clear water surrounded by a thicket of trees, a man baptizing another by immersion while a reverent crowd watches from the shore.',
  },
  // ── image_guess · simbolo · nivel 2 ────────────────────────────────
  {
    answer: 'La Liahona',
    acceptedVariants: ['liahona', 'la brujula de lehi'],
    category: 'simbolo', level: 2, roundType: 'image_guess',
    hint: 'Una esfera que guiaba según la fe',
    imagePrompt: '[ESTILO BASE] + An ornate brass sphere with two spindles floating with golden glow, intricate engravings of abstract patterns (no letters), desert dunes and a family caravan in the background.',
  },
  {
    answer: 'Las planchas de oro',
    acceptedVariants: ['planchas de oro', 'planchas'],
    category: 'simbolo', level: 2, roundType: 'image_guess',
    hint: 'De ellas se tradujo el Libro de Mormón',
    imagePrompt: '[ESTILO BASE] + A stack of golden metal plates bound with three rings, glowing softly, abstract engraved patterns suggesting ancient writing (no real letters), resting on a wooden table with rays of light.',
  },
  // ── image_guess · simbolo · nivel 3 ────────────────────────────────
  {
    answer: 'La serpiente de bronce',
    acceptedVariants: ['serpiente de bronce', 'serpiente de moises'],
    category: 'simbolo', level: 3, roundType: 'image_guess',
    hint: 'Mirar y vivir',
    imagePrompt: '[ESTILO BASE] + A bronze serpent coiled around a tall wooden pole raised in a desert camp, people looking up at it being healed with light, tents and dunes around.',
  },
  {
    answer: 'El estandarte de la libertad',
    acceptedVariants: ['estandarte de la libertad', 'titulo de la libertad'],
    category: 'simbolo', level: 3, roundType: 'image_guess',
    hint: 'Moroni lo escribió en su capa',
    imagePrompt: '[ESTILO BASE] + A torn cloak raised as a banner on a wooden pole on a hilltop at sunrise, soldiers with round shields kneeling around it in covenant. The cloth is plain with NO visible writing.',
  },
  // ── image_guess · simbolo · nivel 4 ────────────────────────────────
  {
    answer: 'El Urim y Tumim',
    acceptedVariants: ['urim y tumim', 'los interpretes'],
    category: 'simbolo', level: 4, roundType: 'image_guess',
    hint: 'Instrumento de videntes para traducir',
    imagePrompt: '[ESTILO BASE] + Two clear crystal stones set in silver bows like ancient spectacles attached to a breastplate, glowing with inner light, resting beside golden plates.',
  },
  {
    answer: 'Los dos palos (Judá y José)',
    acceptedVariants: ['palo de juda y palo de jose', 'los dos palos', 'ezequiel 37'],
    category: 'simbolo', level: 4, roundType: 'image_guess',
    hint: 'Dos registros que se vuelven uno',
    imagePrompt: '[ESTILO BASE] + Two ancient scrolls floating side by side merging into one beam of golden light where they meet, one scroll over Jerusalem skyline, the other over Mesoamerican temple skyline.',
  },
  // ── mime · nivel 1 ──────────────────────────────────────────────────
  {
    answer: 'David lanza la honda',
    acceptedVariants: ['david y goliat', 'lanzar la honda'],
    category: 'escena', level: 1, roundType: 'mime',
    hint: 'Un pastor vs un gigante',
    actorInstructions: 'Gira una honda imaginaria sobre tu cabeza y lánzala, luego señala alto como un gigante cayendo',
    imagePrompt: '[ESTILO BASE] + A shepherd boy mid-action swinging a sling above his head facing a giant warrior, dynamic action pose, motion lines.',
  },
  {
    answer: 'Remar en el barco de Nefi',
    acceptedVariants: ['el barco de nefi', 'navegar a la tierra prometida'],
    category: 'escena', level: 1, roundType: 'mime',
    hint: 'Navegar con una brújula especial',
    actorInstructions: 'Rema con fuerza, mira una brújula en tu mano, señala el horizonte',
    imagePrompt: '[ESTILO BASE] + A family rowing a wooden ship across stylized ocean waves, one figure at the bow holding a small glowing sphere, sail full of wind.',
  },
  {
    answer: 'Construir el arca',
    acceptedVariants: ['noe construye el arca', 'construccion del arca'],
    category: 'escena', level: 1, roundType: 'mime',
    hint: 'Madera, animales y lluvia',
    actorInstructions: 'Martilla, serrucha y mide madera; luego llama a los animales con gestos',
    imagePrompt: '[ESTILO BASE] + An elderly man hammering planks on a huge wooden ark under construction, sawdust, ladders, pairs of animals waiting in line.',
  },
  {
    answer: 'El muro de Jericó cae',
    acceptedVariants: ['jerico', 'las trompetas de jerico'],
    category: 'escena', level: 1, roundType: 'mime',
    hint: 'Trompetas y murallas',
    actorInstructions: 'Marcha en círculo, toca una trompeta imaginaria y derrumba un muro con gesto dramático',
    imagePrompt: '[ESTILO BASE] + Priests blowing rams horn trumpets marching around massive stone walls that crack and tumble, dramatic falling stones.',
  },
  {
    answer: 'Moisés divide el mar Rojo',
    acceptedVariants: ['dividir el mar rojo', 'cruce del mar rojo'],
    category: 'escena', level: 2, roundType: 'mime',
    hint: 'Aguas que se abren',
    actorInstructions: 'Levanta los brazos con fuerza separando «aguas», camina entre ellas',
    imagePrompt: '[ESTILO BASE] + A prophet with both arms raised dramatically splitting towering walls of water, dry path between them, people crossing.',
  },
  {
    answer: 'Ammón defiende los rebaños',
    acceptedVariants: ['ammon', 'ammon y los rebaños'],
    category: 'escena', level: 2, roundType: 'mime',
    hint: 'Un misionero-guerrero protege ovejas',
    actorInstructions: 'Pastorea ovejas, gira una honda y «corta» brazos de enemigos con golpes de espada',
    imagePrompt: '[ESTILO BASE] + A heroic young missionary-warrior defending a flock of sheep at a watering place, sling in motion, scattered fleeing bandits.',
  },
  {
    answer: 'Pescadores dejan las redes',
    acceptedVariants: ['pescadores de hombres', 'dejad las redes'],
    category: 'escena', level: 2, roundType: 'mime',
    hint: 'Del lago a seguir al Maestro',
    actorInstructions: 'Lanza una red, jálala pesada, luego suéltala y sigue a alguien',
    imagePrompt: '[ESTILO BASE] + Fishermen dropping their nets on the shore of a lake to follow a robed figure walking along the beach, boat and morning sun behind.',
  },
  {
    answer: 'El hijo pródigo regresa',
    acceptedVariants: ['hijo prodigo'],
    category: 'escena', level: 2, roundType: 'mime',
    hint: 'Un padre corriendo a abrazar',
    actorInstructions: 'Camina cansado y arrepentido, luego corre a abrazar a alguien con gran alegría',
    imagePrompt: '[ESTILO BASE] + A father running with open arms to embrace a ragged young man on a dirt road, celebration light around them, farmhouse behind.',
  },
  {
    answer: 'José Smith traduce las planchas',
    acceptedVariants: ['la traduccion', 'traduccion del libro de mormon'],
    category: 'escena', level: 3, roundType: 'mime',
    hint: 'Dictar sin hablar mientras otro escribe',
    actorInstructions: 'Estudia algo brillante, dicta en voz alta (sin hablar: mueve la boca) mientras otro escribe',
    imagePrompt: '[ESTILO BASE] + A young man studying glowing golden plates at a wooden table while a scribe writes with a quill on the other side of a hanging curtain, candlelight.',
  },
  {
    answer: 'Daniel ora junto a la ventana',
    acceptedVariants: ['daniel ora', 'daniel desafia el decreto'],
    category: 'escena', level: 3, roundType: 'mime',
    hint: 'Orar abiertamente desafiando el decreto',
    actorInstructions: 'Abre una ventana, mira a ambos lados, arrodíllate y ora tres veces',
    imagePrompt: '[ESTILO BASE] + A man kneeling in prayer at an open window facing a distant city skyline, spies peeking from behind a column, three candles marking three daily prayers.',
  },
  {
    answer: 'El bautismo en las aguas de Mormón',
    acceptedVariants: ['alma bautiza', 'bautismo en mormon'],
    category: 'escena', level: 3, roundType: 'mime',
    hint: 'Brazo en escuadra, sumergir y abrazar',
    actorInstructions: 'Levanta el brazo en escuadra, sumerge suavemente a alguien y abrázalo',
    imagePrompt: '[ESTILO BASE] + A man baptizing another by immersion in a forest pool, arm raised to the square, joyful crowd embracing on the shore.',
  },
  {
    answer: 'Samuel el Lamanita en la muralla',
    acceptedVariants: ['samuel el lamanita', 'samuel en el muro'],
    category: 'escena', level: 3, roundType: 'mime',
    hint: 'Predicar desde lo alto esquivando flechas',
    actorInstructions: 'Súbete a una «muralla», predica con brazos abiertos y esquiva flechas',
    imagePrompt: '[ESTILO BASE] + A prophet standing boldly atop a high city wall preaching with raised arms while arrows fly past him without touching him, divine light shield around his body.',
  },
]
