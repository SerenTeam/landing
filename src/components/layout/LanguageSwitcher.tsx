"use client";

import { usePathname } from "next/navigation";
import {
  LOCALE_COOKIE,
  localeFromPathname,
  switchLocalePath,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Bascule FR ⇄ EN. Renvoie vers le chemin équivalent dans l'autre langue
 * et mémorise le choix manuel dans un cookie (prioritaire sur la détection auto).
 *
 * On force une navigation « pleine page » (ancre native + reload) plutôt qu'un
 * `<Link>` Next : sinon, sur un navigateur anglais, le préchargement de `/` passe
 * par le proxy sans cookie → il est redirigé vers `/en`, et le clic « Français »
 * rebondit vers l'anglais. Le rechargement complet garantit que le cookie tout
 * juste posé accompagne la requête et que le proxy sert la bonne langue.
 */
export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/";
  const current: Locale = localeFromPathname(pathname);
  const target: Locale = current === "fr" ? "en" : "fr";
  const href = switchLocalePath(pathname, target);
  const t = getDictionary(current).nav;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Cookie posé de façon synchrone, avant la navigation.
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
    // Rechargement complet (et non navigation client) pour éviter tout cache de préchargement.
    e.preventDefault();
    window.location.assign(href);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label={t.switchAria}
      className={`font-sans inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border px-3 py-1.5 text-[14px] font-medium text-text-secondary no-underline transition-colors hover:border-primary hover:text-primary ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {t.switchTo}
    </a>
  );
}
