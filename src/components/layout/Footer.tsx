import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { getDictionary } from "@/i18n/dictionaries";
import { localizePath, type Locale } from "@/i18n/config";

export default function Footer({ lang = "fr" }: { lang?: Locale }) {
  const t = getDictionary(lang).footer;
  const home = localizePath("/", lang);
  return (
    <footer className="bg-ink text-white/60">
      <Container className="flex flex-col gap-12 py-16 sm:flex-row sm:justify-between lg:py-20">
        <div className="flex max-w-[300px] flex-col gap-4">
          <Image src="/logo-full.svg" alt="Seren" width={90} height={34} className="brightness-0 invert" />
          <p className="text-[16px] leading-[1.6] text-white/50">
            {t.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:flex-row">
          <div className="flex flex-col gap-3">
            <span className="text-[14px] font-medium uppercase tracking-[0.8px] text-white/35">
              {t.productTitle}
            </span>
            <Link href={`${home}#comment-ca-marche`} className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              {t.howItWorks}
            </Link>
            <Link href="/blog" className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              {t.blog}
            </Link>
            <a href={localizePath("/inscription", lang)} data-cta-label="Inscription" data-cta-position="footer" className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              {t.getStarted}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[14px] font-medium uppercase tracking-[0.8px] text-white/35">
              {t.legalTitle}
            </span>
            <Link href={localizePath("/mentions-legales", lang)} className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              {t.legalNotice}
            </Link>
            <Link href={localizePath("/confidentialite", lang)} className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              {t.privacy}
            </Link>
            <Link href={localizePath("/cgu", lang)} className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              {t.terms}
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[14px] font-medium uppercase tracking-[0.8px] text-white/35">
              {t.contactTitle}
            </span>
            <a href="mailto:contact@seren-app.fr" className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              contact@seren-app.fr
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 px-6 py-6 text-center text-[12px] text-white/25 sm:px-10 lg:px-20">
        © {new Date().getFullYear()} Seren. {t.rights}
      </div>
    </footer>
  );
}
