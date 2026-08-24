"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import PillButton from "@/components/ui/PillButton";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { getDictionary } from "@/i18n/dictionaries";
import { localizePath, type Locale } from "@/i18n/config";

export default function Navbar({ lang = "fr" }: { lang?: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = getDictionary(lang).nav;

  const home = localizePath("/", lang);
  const inscription = localizePath("/inscription", lang);

  function handleSectionClick(e: React.MouseEvent, sectionId: string) {
    if (pathname === home) {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-[16px]"
      style={{
        backgroundColor: "rgba(255,255,255,0.8)",
        boxShadow:
          "0px 0.3px 0.3px -1.25px rgba(0,0,0,0.18), 0px 1.14px 1.14px -2.5px rgba(0,0,0,0.16), 0px 5px 5px -3.75px rgba(0,0,0,0.06)",
      }}
    >
      <Container className="flex h-[82px] items-center justify-between">
        <Link href={home} className="flex items-center">
          <Image src="/logo-full.svg" alt="Seren" width={104} height={40} priority />
        </Link>

        <ul className="font-sans hidden items-center gap-10 lg:flex">
          <li>
            <Link
              href={`${home}#comment-ca-marche`}
              onClick={(e) => handleSectionClick(e, "comment-ca-marche")}
              className="cursor-pointer whitespace-nowrap text-[16px] leading-[1.25] text-text no-underline transition-colors hover:text-primary"
            >
              {t.howItWorks}
            </Link>
          </li>
          {lang === "fr" && (
            <li>
              <Link href="/blog" className="whitespace-nowrap text-[16px] leading-[1.25] text-text no-underline">
                {t.blog}
              </Link>
            </li>
          )}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher />
          <a
            href={inscription}
            data-cta-label="Connexion"
            data-cta-position="header"
            className="font-sans cursor-pointer whitespace-nowrap border-none bg-transparent text-[16px] font-normal text-text no-underline"
          >
            {t.login}
          </a>
          <PillButton href={inscription} size="md" ctaLabel="Inscription" ctaPosition="header">
            {t.cta}
          </PillButton>
        </div>

        <button
          className="p-2 text-text lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="mb-1.5 block h-0.5 w-5 bg-current" />
          <span className="mb-1.5 block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </button>
      </Container>

      {open && (
        <div
          className="flex flex-col gap-4 border-t px-6 py-4 lg:hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.97)", borderColor: "#D9DBE0" }}
        >
          <Link
            href={`${home}#comment-ca-marche`}
            onClick={(e) => handleSectionClick(e, "comment-ca-marche")}
            className="text-[16px] text-text no-underline"
          >
            {t.howItWorks}
          </Link>
          {lang === "fr" && (
            <Link href="/blog" onClick={() => setOpen(false)} className="text-[16px] text-text no-underline">
              {t.blog}
            </Link>
          )}
          <LanguageSwitcher className="w-fit" />
          <PillButton
            href={inscription}
            size="md"
            ctaLabel="Inscription"
            ctaPosition="header"
            onClick={() => setOpen(false)}
            className="w-full"
          >
            {t.cta}
          </PillButton>
        </div>
      )}
    </header>
  );
}
