/**
 * Mapa central de assets visuales del módulo piloto de David.
 * Fuente de verdad de rutas — ver ASSET_MANIFEST.json del paquete de arte original.
 */
export const davidAssets = {
  module: {
    icon: '/assets/modules/david/icons/david-character.png',
    hero: '/assets/modules/david/heroes/david-module-hero.webp',
    heroDesktop: '/assets/modules/david/heroes/david-module-hero-desktop.webp',
    heroObjectPosition: '32% center',
    timeline: '/assets/modules/david/ui/cinco-actos-timeline.png',
    divider: '/assets/modules/david/ui/divider-david.png',
    pattern: '/assets/modules/david/backgrounds/patron-david.png',
    conclusion: '/assets/modules/david/heroes/david-module-conclusion.webp',
  },
  lessons: {
    elegido: {
      icon: '/assets/modules/david/icons/david-elegido.png',
      hero: '/assets/modules/david/lessons/elegido/hero.webp',
      heroObjectPosition: 'center',
      heart: '/assets/modules/david/lessons/elegido/dios-mira-el-corazon.webp',
    },
    goliat: {
      icon: '/assets/modules/david/icons/david-goliat.png',
      hero: '/assets/modules/david/lessons/goliat/hero.webp',
      heroObjectPosition: 'center',
      stones: '/assets/modules/david/lessons/goliat/cinco-piedras.webp',
      objects: '/assets/modules/david/lessons/goliat/objetos-david-vs-goliat.webp',
      map: '/assets/modules/david/maps/valle-de-ela.webp',
    },
    poeta: {
      icon: '/assets/modules/david/icons/david-poeta.png',
      hero: '/assets/modules/david/lessons/poeta/hero.webp',
      heroObjectPosition: '72% center',
      writing: '/assets/modules/david/lessons/poeta/escribiendo-salmo.webp',
    },
    caida: {
      icon: '/assets/modules/david/icons/david-caida.png',
      hero: '/assets/modules/david/lessons/caida/hero.webp',
      heroObjectPosition: '30% center',
      uriahLetter: '/assets/modules/david/lessons/caida/carta-de-urias.webp',
      nathan: '/assets/modules/david/lessons/caida/natan-confronta-david.webp',
      repentance: '/assets/modules/david/lessons/caida/david-arrepentimiento.webp',
    },
    restauracion: {
      icon: '/assets/modules/david/icons/david-restauracion.png',
      hero: '/assets/modules/david/lessons/restauracion/hero.webp',
      heroObjectPosition: 'center',
      covenantTree: '/assets/modules/david/backgrounds/arbol-pacto-davidico.webp',
    },
  },
} as const
