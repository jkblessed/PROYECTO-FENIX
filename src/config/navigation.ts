import type { TranslationKey } from "@i18n/ui";

/**
 * Enlaces de navegación principal.
 * `labelKey` referencia el diccionario i18n; `anchor` es el destino on-page.
 * Añadir rutas aquí basta para reflejarlas en navbar y footer.
 */
export interface NavLink {
  id: string;
  labelKey: TranslationKey;
  anchor: string;
}

export const MAIN_NAV: NavLink[] = [
  { id: "mission", labelKey: "nav.mission", anchor: "#mission" },
  { id: "stories", labelKey: "nav.stories", anchor: "#stories" },
  { id: "join", labelKey: "nav.join", anchor: "#join" },
];
