import type { TranslationKey } from "@i18n/ui";

/**
 * Pilares de la filosofía Fénix: Descubrir · Documentar · Construir.
 * Las etiquetas vienen del diccionario i18n; el número es decorativo.
 */
export interface Pillar {
  id: string;
  index: string;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
}

export const PILLARS: Pillar[] = [
  { id: "discover", index: "01", titleKey: "pillar.discover.title", bodyKey: "pillar.discover.body" },
  { id: "document", index: "02", titleKey: "pillar.document.title", bodyKey: "pillar.document.body" },
  { id: "build", index: "03", titleKey: "pillar.build.title", bodyKey: "pillar.build.body" },
];
