"use client";

import { useEffect } from "react";
import { defaultLocale, type Locale } from "@/i18n/config";

/**
 * Ajuste l'attribut `lang` de <html> côté client.
 * Seul le layout racine rend <html> (avec `lang="fr"`) ; ce composant
 * le passe à la locale courante sur les pages `/en`, et le rétablit en quittant.
 */
export default function HtmlLang({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = defaultLocale;
    };
  }, [lang]);
  return null;
}
