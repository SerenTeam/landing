"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import PillButton from "@/components/ui/PillButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function handleSectionClick(e: React.MouseEvent, sectionId: string) {
    if (pathname === "/") {
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
        <Link href="/" className="flex items-center">
          <Image src="/logo-full.svg" alt="Seren" width={104} height={40} priority />
        </Link>

        <ul className="font-sans hidden items-center gap-10 lg:flex">
          <li>
            <Link
              href="/#comment-ca-marche"
              onClick={(e) => handleSectionClick(e, "comment-ca-marche")}
              className="cursor-pointer whitespace-nowrap text-[16px] leading-[1.25] text-text no-underline transition-colors"
            >
              Comment ça marche
            </Link>
          </li>
          <li>
            <Link
              href="/#temoignages"
              onClick={(e) => handleSectionClick(e, "temoignages")}
              className="cursor-pointer whitespace-nowrap text-[16px] leading-[1.25] text-text no-underline transition-colors"
            >
              Témoignages
            </Link>
          </li>
          <li>
            <Link href="/blog" className="whitespace-nowrap text-[16px] leading-[1.25] text-text no-underline">
              Blog
            </Link>
          </li>
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="/inscription"
            data-cta-label="Connexion"
            data-cta-position="header"
            className="font-sans cursor-pointer whitespace-nowrap border-none bg-transparent text-[16px] font-normal text-text no-underline"
          >
            Se connecter
          </a>
          <PillButton href="/inscription" size="md" ctaLabel="Inscription" ctaPosition="header">
            Commencer gratuitement
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
            href="/#comment-ca-marche"
            onClick={(e) => handleSectionClick(e, "comment-ca-marche")}
            className="text-[16px] text-text no-underline"
          >
            Comment ça marche
          </Link>
          <Link
            href="/#temoignages"
            onClick={(e) => handleSectionClick(e, "temoignages")}
            className="text-[16px] text-text no-underline"
          >
            Témoignages
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="text-[16px] text-text no-underline">
            Blog
          </Link>
          <PillButton
            href="/inscription"
            size="md"
            ctaLabel="Inscription"
            ctaPosition="header"
            onClick={() => setOpen(false)}
            className="w-full"
          >
            Commencer gratuitement
          </PillButton>
        </div>
      )}
    </header>
  );
}
