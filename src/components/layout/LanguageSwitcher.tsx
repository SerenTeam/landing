"use client";

import Link from "next/link";
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
 */
export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/";
  const current: Locale = localeFromPathname(pathname);
  const target: Locale = current === "fr" ? "en" : "fr";
  const href = switchLocalePath(pathname, target);
  const t = getDictionary(current).nav;

  function rememberChoice() {
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
  }

  return (
    <Link
      href={href}
      onClick={rememberChoice}
      aria-label={t.switchAria}
      className={`font-sans inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border px-3 py-1.5 text-[14px] font-medium text-text-secondary no-underline transition-colors hover:border-primary hover:text-primary ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {t.switchTo}
    </Link>
  );
}
