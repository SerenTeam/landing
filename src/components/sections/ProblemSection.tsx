import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const icons = [
  (
    <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  (
    <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  (
    <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
];

export default function ProblemSection({ lang = "fr" }: { lang?: Locale }) {
  const t = getDictionary(lang).problem;
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            className="mb-12 lg:mb-16"
            kicker={t.kicker}
            title={t.title}
            lead={
              <>
                {t.leadPrefix}
                <strong className="font-medium text-text">{t.leadStrong}</strong>
                {t.leadSuffix}
              </>
            }
          />
        </Reveal>

        <div className="border-t border-border-card">
          {t.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group -mx-4 flex flex-col gap-4 border-b border-border-card px-4 py-8 transition-colors duration-300 hover:bg-white sm:flex-row sm:items-center sm:gap-8 md:py-10">
                <IconBadge className="shrink-0 text-primary transition-transform duration-300 group-hover:scale-110">
                  {icons[i]}
                </IconBadge>
                <div>
                  <h3 className="font-display mb-1.5 text-[20px] font-medium leading-[1.3] text-text-heading md:text-[22px]">
                    {p.title}
                  </h3>
                  <p className="font-display text-[16.5px] font-medium leading-[1.54] text-text-muted md:text-[17.5px]">
                    {p.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
