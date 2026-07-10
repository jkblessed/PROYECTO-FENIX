/**
 * Configuración global del sitio.
 * Fuente única de verdad para metadatos, marca y enlaces sociales.
 * Nada de esto debe hardcodearse en los componentes (REGLA DE ORO · PPR v1.3).
 */
export const SITE = {
  name: "Proyecto Fénix",
  domain: "proyectofenix.team",
  url: "https://proyectofenix.team",
  /** Frase de marca, presente en el <title> y metadatos. */
  tagline: {
    es: "Construimos futuros. Contamos historias reales.",
    en: "We build futures. We tell real stories.",
  },
  email: "hola@proyectofenix.com",
} as const;

/** Paleta oficial — referencia centralizada para usos no-CSS (Open Graph, etc.). */
export const BRAND_COLORS = {
  black: "#050505",
  gray: "#1A1A1A",
  ivory: "#F5F2EB",
  gold: "#D4AF37",
  white: "#FFFFFF",
} as const;

/** Redes sociales. `handle` se usa como label; `href` como destino. */
export const SOCIALS = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/tatan.jl" },
  { id: "tiktok", label: "TikTok", href: "https://tiktok.com" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com" },
  { id: "x", label: "X", href: "https://x.com" },
] as const;
