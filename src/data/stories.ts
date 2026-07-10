import type { Lang } from "@i18n/ui";
import { localizePath } from "@i18n/utils";

/**
 * Historias de jugadores: primera historia real (Juan Contreras) + placeholders para la V1.
 * Estructura lista para migrar a Astro Content Collections en V2.
 * Cada historia es bilingüe vía `Localized<T>`.
 */
type Localized<T> = Record<Lang, T>;

/**
 * Bloque narrativo reutilizable de una historia (origin / talent / dream).
 * `eyebrow` es la etiqueta superior opcional; `title` el encabezado; `body` el párrafo.
 */
export interface StoryNarrativeBlock {
  eyebrow?: string;
  title: string;
  body: string;
  /** Foto opcional del acto (junto al texto, marco dorado). */
  image?: string;
  /** Texto alternativo de la foto (accesibilidad), traducible por bloque. */
  alt?: string;
}

/**
 * Narrativa larga de una historia inmersiva (páginas /historias · /stories).
 * Se compone de tres actos documentales: origen, talento y sueño.
 * Solo las historias con `narrative` generan página propia.
 */
export interface StoryNarrative {
  origin: StoryNarrativeBlock;
  talent: StoryNarrativeBlock;
  dream: StoryNarrativeBlock;
}

export interface Story {
  id: string;
  /** Nombre del jugador (no traducible). */
  name: string;
  /** Edad mostrada en la tarjeta. */
  age: number;
  /** Dorsal mostrado estilo álbum de mundial. */
  number: number;
  /** Bandera del país (emoji) para el sello de la card. */
  flag: string;
  /** Código de país de 3 letras (estilo FIFA). */
  country: string;
  /** Posición, traducible. */
  position: Localized<string>;
  /** Origen / barrio / ciudad, traducible. */
  origin: Localized<string>;
  /** Gancho narrativo corto para la tarjeta. */
  hook: Localized<string>;
  /** Imagen de fondo de la tarjeta (placeholder en /images). */
  image: string;
  /** Card destacada (ocupa más espacio en el grid). */
  featured?: boolean;
  /** Oculta la card del grid sin borrar el dato (se reutiliza a futuro). */
  hidden?: boolean;
  /** Narrativa larga bilingüe. Si existe, la historia tiene página propia. */
  narrative?: Localized<StoryNarrative>;
}

/**
 * Jugador cuya historia aún está en proceso: se muestra como card "Coming Soon"
 * (solo foto, nombre y origen). Ocupa el lugar destacado del grid.
 */
export interface UpcomingStory {
  id: string;
  name: string;
  flag: string;
  country: string;
  origin: Localized<string>;
  image: string;
}

export const STORIES: Story[] = [
  {
    id: "matias-rios",
    name: "Matías Ríos",
    age: 16,
    number: 11,
    flag: "🇻🇪",
    country: "VEN",
    position: { es: "Extremo izquierdo", en: "Left winger" },
    origin: { es: "La Vega, Caracas", en: "La Vega, Caracas" },
    hook: {
      es: "Jugaba descalzo en una cancha de tierra. Hoy el barrio entero lo filma.",
      en: "He played barefoot on a dirt pitch. Today the whole neighborhood films him.",
    },
    image: "/images/stories/story-01.svg",
    hidden: true,
    narrative: {
      es: {
        origin: {
          eyebrow: "El origen",
          title: "La cancha de tierra de La Vega",
          body: "Matías creció en La Vega, uno de los barrios más empinados de Caracas, donde el fútbol se juega entre escaleras, azoteas y una cancha de tierra que se inunda cuando llueve. Empezó descalzo, con una pelota remendada, imitando los regates que veía en videos prestados. Nadie llevaba la cuenta de sus goles, pero el barrio ya sabía su nombre.",
        },
        talent: {
          eyebrow: "El talento",
          title: "Zurda de otro planeta",
          body: "Extremo izquierdo, dorsal 11, encara sin miedo y define con una calma que no corresponde a sus 16 años. Su juego vive en el uno contra uno: cambio de ritmo, amague seco y centro medido con la zurda. Los rivales lo doblan la marca y aun así encuentra la grieta. No corre más que nadie; simplemente ve el partido dos segundos antes.",
        },
        dream: {
          eyebrow: "El sueño",
          title: "Del barrio al mundo",
          body: "Matías sueña con vestir la camiseta de la Vinotinto y, algún día, jugar en Europa. Pero su meta más inmediata es más simple y más grande a la vez: que su historia abra la puerta para los chicos que siguen jugando descalzos en La Vega. Documentar su camino es la primera oportunidad real que muchos nunca tuvieron.",
        },
      },
      en: {
        origin: {
          eyebrow: "The origin",
          title: "The dirt pitch of La Vega",
          body: "Matías grew up in La Vega, one of the steepest neighborhoods in Caracas, where football is played between staircases, rooftops and a dirt pitch that floods when it rains. He started barefoot, with a patched-up ball, copying the dribbles he saw in borrowed videos. No one kept count of his goals, but the neighborhood already knew his name.",
        },
        talent: {
          eyebrow: "The talent",
          title: "A left foot from another planet",
          body: "Left winger, number 11, he takes players on without fear and finishes with a calm that doesn't match his 16 years. His game lives in the one-on-one: a change of pace, a sharp feint and a measured cross with his left foot. Defenders double up on him and he still finds the gap. He doesn't run more than anyone; he simply reads the game two seconds early.",
        },
        dream: {
          eyebrow: "The dream",
          title: "From the streets to the world",
          body: "Matías dreams of wearing the Vinotinto shirt and, one day, playing in Europe. But his most immediate goal is at once simpler and bigger: that his story opens the door for the kids still playing barefoot in La Vega. Documenting his journey is the first real opportunity many of them never had.",
        },
      },
    },
  },
  {
    id: "juan-contreras",
    name: "Juan Contreras",
    age: 21,
    number: 25,
    flag: "🇨🇴",
    country: "COL",
    position: { es: "Delantero", en: "Forward" },
    origin: { es: "Fundación, Magdalena", en: "Fundación, Magdalena" },
    hook: {
      es: "Nadie lo tenía en el radar. Proyecto Fénix sí. Hoy es futbolista profesional.",
      en: "No one had him on their radar. Proyecto Fénix did. Today he's a professional.",
    },
    image: "/images/stories/juan-contreras.jpg",
    narrative: {
      es: {
        origin: {
          eyebrow: "El origen",
          title: "Del Magdalena, con un sueño",
          body: "Juan Contreras nació en Fundación, Magdalena, un municipio del Caribe colombiano donde creció, como tantos jóvenes, con un solo sueño: llegar a ser futbolista profesional. Tenía talento, pero su nombre todavía no aparecía en el radar del fútbol profesional. Nadie con poder de decisión lo había visto jugar.",
          image: "/images/stories/juan-contreras-origen.jpg",
          alt: "Juan Contreras junto a su madre en su casa de Fundación, Magdalena.",
        },
        talent: {
          eyebrow: "El hallazgo",
          title: "Lo que otros no vieron",
          body: "Durante una jornada de scouting en la escuela de fútbol de Francisco “Pacho” Maturana, en Medellín, Proyecto Fénix identificó en Juan algo distinto: personalidad, capacidad competitiva y un potencial que merecía una oportunidad real. No era solo talento con el balón; era la actitud de quien está listo para competir. Decidimos seguir su proceso y confiar en él.",
        },
        dream: {
          eyebrow: "El salto",
          title: "Del anonimato a profesional",
          body: "Proyecto Fénix le abrió la puerta: Juan fue presentado al Real Cartagena, donde inició su evaluación y terminó firmando con la institución. Más adelante firmaría también con el Unión Magdalena. Para Proyecto Fénix esto no es solo una firma: es la primera historia que demuestra que el talento puede aparecer en cualquier lugar cuando alguien decide buscarlo.",
          image: "/images/stories/juan-contreras-salto.jpg",
          alt: "Juan Contreras el día que dio el salto al fútbol profesional.",
        },
      },
      en: {
        origin: {
          eyebrow: "The origin",
          title: "From Magdalena, with a dream",
          body: "Juan Contreras was born in Fundación, Magdalena, on Colombia's Caribbean coast, where he grew up — like so many kids — with a single dream: to become a professional footballer. He had the talent, but his name still wasn't on the professional radar. No one with the power to decide had seen him play.",
          image: "/images/stories/juan-contreras-origen.jpg",
          alt: "Juan Contreras with his mother at their home in Fundación, Magdalena.",
        },
        talent: {
          eyebrow: "The discovery",
          title: "What others didn't see",
          body: "During a scouting day at Francisco “Pacho” Maturana's football school in Medellín, Proyecto Fénix saw something different in Juan: personality, a competitive edge and a potential that deserved a real chance. It wasn't just talent on the ball; it was the mindset of someone ready to compete. We decided to follow his process and back him.",
        },
        dream: {
          eyebrow: "The leap",
          title: "From unknown to professional",
          body: "Proyecto Fénix opened the door: Juan was introduced to Real Cartagena, where he began his evaluation and ended up signing with the club. He would later also sign with Unión Magdalena. For Proyecto Fénix this is more than a signing: it's the first story proving that talent can appear anywhere when someone decides to look for it.",
          image: "/images/stories/juan-contreras-salto.jpg",
          alt: "Juan Contreras on the day he made the leap to professional football.",
        },
      },
    },
  },
  {
    id: "kevin-osei",
    name: "Kevin Osei",
    age: 15,
    number: 9,
    flag: "🇬🇭",
    country: "GHA",
    position: { es: "Delantero centro", en: "Striker" },
    origin: { es: "Jamestown, Accra", en: "Jamestown, Accra" },
    hook: {
      es: "Marcó 40 goles en un torneo que nadie transmitió. Nosotros sí lo vimos.",
      en: "Scored 40 goals in a tournament no one broadcast. We saw it.",
    },
    image: "/images/stories/story-03.svg",
    hidden: true,
  },
  {
    id: "lucas-vidal",
    name: "Lucas Vidal",
    age: 18,
    number: 2,
    flag: "🇨🇱",
    country: "CHI",
    position: { es: "Lateral derecho", en: "Right-back" },
    origin: { es: "El Bosque, Santiago", en: "El Bosque, Santiago" },
    hook: {
      es: "Caminaba dos horas para entrenar. Su historia recién empieza a contarse.",
      en: "Walked two hours to train. His story is only starting to be told.",
    },
    image: "/images/stories/story-04.svg",
    hidden: true,
  },
];

/**
 * Historias en proceso (card "Coming Soon"). La destacada del grid sale de aquí
 * mientras se prepara su reportaje completo.
 */
export const UPCOMING: UpcomingStory[] = [
  {
    id: "brandon",
    name: "Brandon",
    flag: "🇨🇴",
    country: "COL",
    origin: { es: "Fundación, Magdalena", en: "Fundación, Magdalena" },
    image: "/images/stories/brandon.jpg",
  },
];

/**
 * Segmento de ruta de las historias por idioma (ES `/historias`, EN `/stories`).
 * Punto único de verdad: evita hardcodear el slug de sección en los componentes.
 */
export const STORY_SEGMENT: Localized<string> = {
  es: "historias",
  en: "stories",
};

/** Historias visibles en el grid (no ocultas). */
export const VISIBLE_STORIES: Story[] = STORIES.filter((s) => !s.hidden);

/** Historias visibles con narrativa (y por tanto, página propia y navegable). */
export const NARRATIVE_STORIES: Story[] = STORIES.filter((s) => s.narrative && !s.hidden);

/** Construye la ruta localizada a la historia (ES `/historias/id`, EN `/en/stories/id`). */
export function getStoryPath(id: string, lang: Lang): string {
  return localizePath(`/${STORY_SEGMENT[lang]}/${id}`, lang);
}

/**
 * Ruta equivalente de la página actual en el idioma `target`.
 * Mapea home ↔ home e historia ↔ historia (respeta el segmento por idioma),
 * para que el selector de idioma y los `hreflang` no pierdan el contexto.
 */
export function alternateLangPath(pathname: string, target: Lang): string {
  const clean = pathname.replace(/\/$/, "") || "/";
  const match = clean.match(/^\/(?:(?:es|en)\/)?(?:historias|stories)\/([^/]+)$/);
  if (match) return getStoryPath(match[1], target);
  return localizePath("/", target);
}

/**
 * Vecinos (anterior / siguiente) dentro del conjunto de historias con narrativa.
 * Robusto a un solo elemento: devuelve ambos `undefined` si no hay vecinos.
 */
export function getAdjacentStories(id: string): { prev?: Story; next?: Story } {
  const index = NARRATIVE_STORIES.findIndex((s) => s.id === id);
  if (index === -1) return {};
  return {
    prev: index > 0 ? NARRATIVE_STORIES[index - 1] : undefined,
    next: index < NARRATIVE_STORIES.length - 1 ? NARRATIVE_STORIES[index + 1] : undefined,
  };
}
