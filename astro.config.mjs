// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://proyectofenix.team",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      // EN vive en `/` (por defecto), ES en `/es`. SEO-friendly, sin redirecciones.
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
