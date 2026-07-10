/**
 * Utilidades de internacionalización.
 * Tipadas y desacopladas: los componentes solo reciben `lang` y un `t()`.
 */
import { ui, defaultLang, type Lang, type TranslationKey } from "./ui";

/** Devuelve una función `t(key)` con fallback al idioma por defecto. */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Construye una ruta respetando el prefijo de idioma. El idioma por defecto
 * va sin prefijo (`/`); los demás llevan `/<lang>` (ej. `/es/...`).
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === "/" ? `/${lang}/` : `/${lang}${clean}`;
}

export type { Lang, TranslationKey };
