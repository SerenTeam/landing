import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, validateSessionToken } from "@/lib/session";
import { LOCALE_COOKIE, isLocale, localizePath, type Locale } from "@/i18n/config";

/**
 * Proxy unique du projet (ex-`middleware.ts`, renommé en Next 16).
 * Deux responsabilités, aiguillées par le chemin (voir `matcher`) :
 *   1. Protéger les API admin (`/api/admin/*`) via le cookie de session HMAC.
 *   2. Détecter la langue du device à l'entrée sur les pages traduisibles.
 */

/** Renvoie la locale préférée d'après l'en-tête Accept-Language (fr par défaut). */
function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return "fr";
  // Ex. "en-US,en;q=0.9,fr;q=0.8" → on prend la langue de plus haute qualité.
  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)[0];
  return preferred?.tag.startsWith("en") ? "en" : "fr";
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Auth des API admin (comportement historique, inchangé).
  if (pathname.startsWith("/api/admin")) {
    const token = request.cookies.get(SESSION_COOKIE)?.value;
    const valid = await validateSessionToken(token ?? "");
    if (!valid) {
      return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
    }
    return NextResponse.next();
  }

  // 2. Détection de langue sur les pages françaises traduisibles.
  //    Un choix manuel (cookie NEXT_LOCALE, posé par le switcher) est prioritaire.
  //    On ne redirige que le français « nu » vers `/en` (jamais l'inverse).
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const preferred: Locale =
    cookie && isLocale(cookie)
      ? cookie
      : localeFromAcceptLanguage(request.headers.get("accept-language"));

  if (preferred === "en") {
    const url = request.nextUrl.clone();
    url.pathname = localizePath(pathname, "en");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // API admin (protection par session)
    "/api/admin/:path*",
    // Pages françaises traduisibles (détection de langue).
    // Tout le reste (/en, /blog, /admin, assets) est ignoré → pas de boucle.
    "/",
    "/inscription",
    "/cgu",
    "/mentions-legales",
    "/confidentialite",
  ],
};
