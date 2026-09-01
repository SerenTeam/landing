import Image from "next/image";
import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const stepMeta = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function SolutionSection({ lang = "fr" }: { lang?: Locale }) {
  const t = getDictionary(lang).solution;
  return (
    <section id="comment-ca-marche" className="bg-gradient-to-b from-white to-border-card py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            className="mb-10 lg:mb-12"
            kicker={t.kicker}
            title={t.title}
            lead={t.lead}
          />
        </Reveal>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mb-16">
          {t.steps.map((step, i) => (
            <Reveal key={stepMeta[i].number} delay={i * 100}>
              <div className="flex h-full flex-col rounded-card border border-border-card bg-white p-7 shadow-card-border">
                <p className="font-display mb-4 text-[11px] font-medium uppercase tracking-[1.5px] text-primary">
                  {t.stepLabel} {stepMeta[i].number}
                </p>
                <IconBadge tone="violet" className="mb-5 text-violet">
                  {stepMeta[i].icon}
                </IconBadge>
                <h3 className="font-display mb-2 text-[22px] font-medium leading-[1.3] text-text-heading">
                  {step.title}
                </h3>
                <p className="font-display text-[17.5px] font-medium leading-[1.54] text-text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} y={24}>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-card shadow-card-border">
            <Image
              src="/images/landing/solution-path.jpg"
              alt={t.imageAlt}
              fill
              sizes="(min-width: 1024px) 1120px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
