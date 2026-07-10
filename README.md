# Proyecto Fénix — Landing V1

> Construimos futuros. Contamos historias reales.

Landing premium del Proyecto Fénix: la red de descubrimiento, documentación y
desarrollo de talento futbolístico. Experiencia emocional, storytelling y scroll
cinematográfico — WOW en menos de cinco segundos.

## Stack

- **[Astro 5](https://astro.build)** — SSG/SSR, Islands y View Transitions ready.
- **[Tailwind CSS 4](https://tailwindcss.com)** — sistema de diseño vía `@theme`.
- **TypeScript** estricto.
- **i18n nativo** (es/en) con el routing oficial de Astro.

## Comandos

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo  → http://localhost:4321
npm run build    # build de producción     → ./dist
npm run preview  # previsualiza el build
```

## Rutas

| Idioma   | URL    |
| -------- | ------ |
| Español  | `/`    |
| English  | `/en/` |

## Arquitectura

Componentización extrema, props-first y cero hardcode (REGLA DE ORO del PPR).

```
src/
├── components/
│   ├── ui/         Container · Section · Button · Eyebrow      (primitivos)
│   ├── effects/    Reveal · RevealObserver                     (scroll cinematográfico)
│   ├── navbar/     Navbar · Logo · NavLinks · LanguageSwitcher
│   ├── hero/       Hero · HeroVideo · ScrollCue                (video de fondo)
│   ├── mission/    Mission · PillarCard
│   ├── stories/    Stories · StoryCard
│   ├── cta/        CallToAction
│   ├── footer/     Footer · SocialLinks
│   └── Landing.astro                                           (ensamblado de secciones)
├── config/         site.ts · navigation.ts                     (constantes de marca)
├── data/           stories.ts · pillars.ts                     (contenido placeholder)
├── i18n/           ui.ts (diccionario) · utils.ts (helpers)
├── layouts/        BaseLayout.astro
├── pages/          index.astro (es) · en/index.astro (en)
└── styles/         global.css (tema + animaciones)
```

### Principios

- **Todo configurable**: textos en `i18n/ui.ts`, datos en `data/`, marca en `config/`.
- **Props First**: cada componente recibe su información por props y está tipado.
- **i18n desde V1**: añadir un idioma = nuevo bloque en `ui.ts` + página en `pages/`.
- **Performance primero**: video optimizado, imágenes `lazy`, animaciones `motion-safe`.

## Identidad visual

| Token              | Hex       |
| ------------------ | --------- |
| `fenix-black`      | `#050505` |
| `fenix-gray`       | `#1A1A1A` |
| `fenix-ivory`      | `#F5F2EB` |
| `fenix-gold`       | `#D4AF37` |
| `fenix-white`      | `#FFFFFF` |

## Pendiente para próximas versiones (V2+)

- Migrar `data/stories.ts` a **Astro Content Collections**.
- Páginas: *Nuestra Misión*, *Historias* (índice) y *Página Individual de Jugador*.
- Conectar el formulario de captura de correo a un backend real.
- Reemplazar placeholders (`public/images/stories/*.svg`) por contenido real.
