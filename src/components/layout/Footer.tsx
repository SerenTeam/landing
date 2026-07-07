import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <Container className="flex flex-col gap-12 py-16 sm:flex-row sm:justify-between lg:py-20">
        <div className="flex max-w-[300px] flex-col gap-4">
          <Image src="/logo-full.svg" alt="Seren" width={90} height={34} className="brightness-0 invert" />
          <p className="text-[16px] leading-[1.6] text-white/50">
            Un copilote humain et apaisant pour vous guider dans les démarches
            après la perte d&apos;un proche.
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:flex-row">
          <div className="flex flex-col gap-3">
            <span className="text-[14px] font-medium uppercase tracking-[0.8px] text-white/35">
              Produit
            </span>
            <Link href="#comment-ca-marche" className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              Comment ça marche
            </Link>
            <Link href="/blog" className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              Blog
            </Link>
            <a href="/inscription" data-cta-label="Inscription" data-cta-position="footer" className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              Commencer
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[14px] font-medium uppercase tracking-[0.8px] text-white/35">
              Légal
            </span>
            <Link href="/mentions-legales" className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              Confidentialité
            </Link>
            <Link href="/cgu" className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              CGU
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[14px] font-medium uppercase tracking-[0.8px] text-white/35">
              Contact
            </span>
            <a href="mailto:bonjour@seren.fr" className="text-[14px] text-white/60 no-underline transition-colors hover:text-white">
              bonjour@seren.fr
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 px-6 py-6 text-center text-[12px] text-white/25 sm:px-10 lg:px-20">
        © {new Date().getFullYear()} Seren. Tous droits réservés.
      </div>
    </footer>
  );
}
