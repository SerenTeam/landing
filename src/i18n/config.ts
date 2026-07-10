export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

/** Nom du cookie de préférence de langue (choix manuel via le switcher). */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Vrai si la valeur est une locale supportée. */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Déduit la locale à partir du chemin (`/en`, `/en/...` → en, sinon fr). */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

/**
 * Chemins (côté français) qui possèdent une version traduite `/en`.
 * Le blog, /admin, etc. n'en font pas partie (contenu français uniquement).
 */
const TRANSLATABLE_PATHS = [
  "/",
  "/inscription",
  "/cgu",
  "/mentions-legales",
  "/confidentialite",
] as const;

/** Vrai si le chemin français dispose d'un équivalent traduit. */
export function isTranslatablePath(frPath: string): boolean {
  return (TRANSLATABLE_PATHS as readonly string[]).includes(frPath);
}

/**
 * Traduit un chemin interne (défini côté français) vers la locale cible.
 * Le français reste à la racine, l'anglais est préfixé par `/en`.
 * Ne pas utiliser pour un chemin non traduit (ex. `/blog`) : voir `switchLocalePath`.
 */
export function localizePath(path: string, locale: Locale): string {
  if (locale === "fr") return path;
  if (path === "/") return "/en";
  return `/en${path}`;
}

/** Retourne l'équivalent d'un chemin dans l'autre locale (pour le switcher). */
export function switchLocalePath(pathname: string, target: Locale): string {
  // On repart toujours du chemin « français » (sans préfixe) puis on relocalise.
  const frPath =
    pathname === "/en"
      ? "/"
      : pathname.startsWith("/en/")
        ? pathname.slice(3) // retire "/en"
        : pathname;
  // Pages sans traduction (blog…) → accueil de la langue cible plutôt qu'un 404.
  if (!isTranslatablePath(frPath)) {
    return target === "fr" ? "/" : "/en";
  }
  return localizePath(frPath, target);
}
