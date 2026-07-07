import Container from "@/components/ui/Container";
import PillButton from "@/components/ui/PillButton";

interface CTASectionProps {
  lead?: string;
  ctaPosition?: string;
  secondary?: { href: string; label: string } | null;
}

export default function CTASection({
  lead = "Seren est là pour vous aider à avancer, une étape à la fois, avec clarté et bienveillance.",
  ctaPosition = "CtaSection",
  secondary = { href: "/blog", label: "Lire nos guides" },
}: CTASectionProps) {
  return (
    <section className="bg-ink py-16 lg:py-24">
      <Container className="flex flex-col items-center gap-8 text-center">
        <h2 className="font-sans max-w-xl text-[28px] font-normal leading-[1.3] text-white sm:text-[32px] lg:text-[36.5px] lg:leading-[1.315]">
          Vous n&apos;avez pas à traverser ça seul.
        </h2>

        <p className="font-display max-w-md text-[17px] font-medium leading-[1.6] text-white/70 lg:text-[19.5px] lg:leading-[1.64]">
          {lead}
        </p>

        <div className="flex flex-row flex-wrap justify-center gap-4">
          <PillButton href="/inscription" ctaLabel="Inscription" ctaPosition={ctaPosition}>
            Commencer gratuitement
          </PillButton>
          {secondary && (
            <PillButton href={secondary.href} variant="secondary">
              {secondary.label}
            </PillButton>
          )}
        </div>

        <p className="font-sans text-[16px] italic leading-[1.6] text-white/80">
          Sans engagement · Vos données restent privées
        </p>
      </Container>
    </section>
  );
}
