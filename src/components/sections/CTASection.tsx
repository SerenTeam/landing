import Container from "@/components/ui/Container";
import PillButton from "@/components/ui/PillButton";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/i18n/dictionaries";
import { localizePath, type Locale } from "@/i18n/config";

interface CTASectionProps {
  lang?: Locale;
  lead?: string;
  ctaPosition?: string;
  secondary?: { href: string; label: string } | null;
}

export default function CTASection({
  lang = "fr",
  lead,
  ctaPosition = "CtaSection",
  secondary,
}: CTASectionProps) {
  const t = getDictionary(lang).cta;
  // `secondary` non fourni → CTA par défaut ; `null` explicite → pas de bouton secondaire.
  const resolvedSecondary =
    secondary === undefined ? { href: "/blog", label: t.secondary } : secondary;
  return (
    <section className="bg-ink py-16 lg:py-24">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="font-sans max-w-xl text-[28px] font-normal leading-[1.3] text-white sm:text-[32px] lg:text-[36.5px] lg:leading-[1.315]">
            {t.title}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-display max-w-md text-[17px] font-medium leading-[1.6] text-white/70 lg:text-[19.5px] lg:leading-[1.64]">
            {lead ?? t.lead}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            <PillButton href={localizePath("/inscription", lang)} ctaLabel="Inscription" ctaPosition={ctaPosition}>
              {t.primary}
            </PillButton>
            {resolvedSecondary && (
              <PillButton href={resolvedSecondary.href} variant="secondary">
                {resolvedSecondary.label}
              </PillButton>
            )}
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="font-sans text-[16px] italic leading-[1.6] text-white/80">
            {t.reassurance}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
