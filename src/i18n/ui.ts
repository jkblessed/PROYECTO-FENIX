/**
 * Diccionario de traducciones (es/en).
 * Internacionalización desde la V1 — todo texto visible vive aquí (PPR v1.3).
 */
export const languages = {
  en: "English",
  es: "Español",
} as const;

export const defaultLang = "en";

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // Navegación
    "nav.mission": "Nuestra Misión",
    "nav.stories": "Historias",
    "nav.join": "Únete",
    "nav.menu": "Menú",

    // Hero
    "hero.eyebrow": "Red global de talento futbolístico",
    "hero.title.line1": "Descubrimos talento",
    "hero.title.line2": "donde nadie mira",
    "hero.subtitle":
      "Del barrio al profesionalismo. Documentamos cada historia y construimos oportunidades reales.",
    "hero.cta.primary": "Sé parte de esta historia",
    "hero.cta.secondary": "Nuestra misión",
    "hero.scroll": "Desliza",

    // Misión
    "mission.eyebrow": "Nuestra Misión",
    "mission.title": "No patrocinamos jugadores. Construimos futuros.",
    "mission.body":
      "Creamos la red de descubrimiento, documentación y desarrollo de talento futbolístico más grande del planeta. Una comunidad global que acompaña cada historia desde el barrio hasta el profesionalismo.",
    "mission.quote": "Descubrir talento donde nadie mira, documentarlo y construir oportunidades reales.",

    // Pilares de filosofía
    "pillar.discover.title": "Descubrir",
    "pillar.discover.body": "Buscamos talento en las canchas que nadie filma, donde la historia apenas comienza.",
    "pillar.document.title": "Documentar",
    "pillar.document.body": "Convertimos cada paso en una historia real, contada con verdad y emoción.",
    "pillar.build.title": "Construir",
    "pillar.build.body": "Transformamos el talento en oportunidades concretas hacia el profesionalismo.",

    // Historias
    "stories.eyebrow": "Historias",
    "stories.title": "Cada barrio guarda una leyenda",
    "stories.body": "Historias reales de talento que el mundo aún no conoce. Esto es solo el comienzo.",
    "stories.cta": "Ver todas las historias",
    "stories.card.read": "Leer historia",

    // Historia inmersiva (páginas /historias)
    "story.back": "Volver a Proyecto Fénix",
    "story.prev": "Anterior",
    "story.next": "Siguiente",
    "story.quote.eyebrow": "En sus palabras",
    "story.cta.eyebrow": "Sé parte de su historia",
    "story.cta.title": "Ayuda a que la historia de {name} siga",
    "story.cta.body": "Cada historia documentada es una oportunidad real. Únete al movimiento o comparte la suya.",
    "story.cta.join": "Únete al movimiento",
    "story.cta.share": "Compartir historia",
    "story.share.readmore": "Lee su historia completa en",
    "story.share.text": "La historia de {name} en Proyecto Fénix",
    "story.share.copied": "¡Enlace copiado!",
    "card.comingsoon": "Próximamente",
    "notfound.title": "Página no encontrada",
    "notfound.body": "La historia que buscas no existe o cambió de lugar.",
    "notfound.cta": "Volver al inicio",

    // CTA final
    "cta.eyebrow": "Sé parte del movimiento",
    "cta.title": "La próxima historia podría ser la tuya",
    "cta.body": "Únete a la comunidad que está cambiando la forma de descubrir talento en el fútbol.",
    "cta.button": "Únete a Proyecto Fénix",
    "cta.placeholder": "Tu correo electrónico",

    // Footer
    "footer.tagline": "Construimos futuros. Contamos historias reales.",
    "footer.nav": "Navegación",
    "footer.social": "Síguenos",
    "footer.rights": "Todos los derechos reservados.",
    "footer.lang": "Idioma",
  },
  en: {
    // Navigation
    "nav.mission": "Our Mission",
    "nav.stories": "Stories",
    "nav.join": "Join",
    "nav.menu": "Menu",

    // Hero
    "hero.eyebrow": "Global football talent network",
    "hero.title.line1": "We discover talent",
    "hero.title.line2": "where no one looks",
    "hero.subtitle":
      "From the streets to the pros. We document every story and build real opportunities.",
    "hero.cta.primary": "Be part of this story",
    "hero.cta.secondary": "Our mission",
    "hero.scroll": "Scroll",

    // Mission
    "mission.eyebrow": "Our Mission",
    "mission.title": "We don't sponsor players. We build futures.",
    "mission.body":
      "We are building the largest football talent discovery, documentation and development network on the planet. A global community that walks beside every story from the streets to the pros.",
    "mission.quote": "Discover talent where no one looks, document it and build real opportunities.",

    // Philosophy pillars
    "pillar.discover.title": "Discover",
    "pillar.discover.body": "We seek talent on the pitches no one films, where the story is just beginning.",
    "pillar.document.title": "Document",
    "pillar.document.body": "We turn every step into a real story, told with truth and emotion.",
    "pillar.build.title": "Build",
    "pillar.build.body": "We turn talent into concrete opportunities on the road to the pros.",

    // Stories
    "stories.eyebrow": "Stories",
    "stories.title": "Every neighborhood holds a legend",
    "stories.body": "Real stories of talent the world doesn't know yet. This is only the beginning.",
    "stories.cta": "See all stories",
    "stories.card.read": "Read story",

    // Immersive story (pages /stories)
    "story.back": "Back to Proyecto Fénix",
    "story.prev": "Previous",
    "story.next": "Next",
    "story.quote.eyebrow": "In his words",
    "story.cta.eyebrow": "Be part of his story",
    "story.cta.title": "Help {name}'s story keep going",
    "story.cta.body": "Every documented story is a real opportunity. Join the movement or share his.",
    "story.cta.join": "Join the movement",
    "story.cta.share": "Share story",
    "story.share.readmore": "Read the full story at",
    "story.share.text": "{name}'s story on Proyecto Fénix",
    "story.share.copied": "Link copied!",
    "card.comingsoon": "Coming Soon",
    "notfound.title": "Page not found",
    "notfound.body": "The story you're looking for doesn't exist or has moved.",
    "notfound.cta": "Back to home",

    // Final CTA
    "cta.eyebrow": "Be part of the movement",
    "cta.title": "The next story could be yours",
    "cta.body": "Join the community that's changing how football talent is discovered.",
    "cta.button": "Join Proyecto Fénix",
    "cta.placeholder": "Your email address",

    // Footer
    "footer.tagline": "We build futures. We tell real stories.",
    "footer.nav": "Navigation",
    "footer.social": "Follow us",
    "footer.rights": "All rights reserved.",
    "footer.lang": "Language",
  },
} as const;

export type TranslationKey = keyof (typeof ui)["es"];
