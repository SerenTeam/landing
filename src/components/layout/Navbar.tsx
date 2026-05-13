"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
      <nav className="mx-auto max-w-[1280px] px-[80px] flex items-center justify-between h-[82px]">
        <Link href="/" className="flex items-center">
          <Image src="/logo-full.svg" alt="Seren" width={104} height={40} priority />
        </Link>

        <ul className="hidden md:flex items-center gap-10" style={{ fontFamily: "var(--font-inter)" }}>
          <li>
            <a
              href="/#comment-ca-marche"
              onClick={(e) => handleSectionClick(e, "comment-ca-marche")}
              className="cursor-pointer transition-colors"
              style={{ fontSize: "16px", color: "#1D1D1D", lineHeight: "1.25", textDecoration: "none" }}
            >
              Comment ça marche
            </a>
          </li>
          <li>
            <a
              href="/#temoignages"
              onClick={(e) => handleSectionClick(e, "temoignages")}
              className="cursor-pointer transition-colors"
              style={{ fontSize: "16px", color: "#1D1D1D", lineHeight: "1.25", textDecoration: "none" }}
            >
              Témoignages
            </a>
          </li>
          <li>
            <Link
              href="/blog"
              style={{ fontSize: "16px", color: "#1D1D1D", lineHeight: "1.25", textDecoration: "none" }}
            >
              Blog
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="/inscription"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              color: "#1D1D1D",
              fontWeight: 400,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Se connecter
          </a>
          <a
            href="/inscription"
            style={{
              fontFamily: "var(--font-inter-display)",
              fontSize: "16px",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#006BFA",
              height: "42px",
              padding: "0 24px",
              borderRadius: "128px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              transition: "background 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0057D0")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#006BFA")}
          >
            Commencer gratuitement
          </a>
        </div>

        <button
          className="md:hidden p-2"
          style={{ color: "#1D1D1D" }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4 border-t"
          style={{ backgroundColor: "rgba(255,255,255,0.97)", borderColor: "#D9DBE0" }}
        >
          <a
            href="/#comment-ca-marche"
            onClick={(e) => handleSectionClick(e, "comment-ca-marche")}
            style={{ fontSize: "16px", color: "#1D1D1D", cursor: "pointer", textDecoration: "none" }}
          >
            Comment ça marche
          </a>
          <a
            href="/#temoignages"
            onClick={(e) => handleSectionClick(e, "temoignages")}
            style={{ fontSize: "16px", color: "#1D1D1D", cursor: "pointer", textDecoration: "none" }}
          >
            Témoignages
          </a>
          <Link href="/blog" onClick={() => setOpen(false)} style={{ fontSize: "16px", color: "#1D1D1D", textDecoration: "none" }}>
            Blog
          </Link>
          <a
            href="/inscription"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--font-inter-display)",
              fontSize: "16px",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#006BFA",
              height: "42px",
              borderRadius: "128px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            Commencer gratuitement
          </a>
        </div>
      )}
    </header>
  );
}
