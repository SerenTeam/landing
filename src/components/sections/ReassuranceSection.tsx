import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const statIcons = [
  (
    <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  (
    <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  (
    <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
];

export default function ReassuranceSection({ lang = "fr" }: { lang?: Locale }) {
  const t = getDictionary(lang).reassurance;
  return (
    <section id="chiffres-cles" className="bg-white py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            className="mb-10 lg:mb-12"
            kicker={t.statsKicker}
            title={t.statsTitle}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 100}>
              <div className="flex h-full flex-col items-center gap-3 rounded-card bg-white px-5 py-8 text-center shadow-card">
                <IconBadge className="text-primary">{statIcons[i]}</IconBadge>
                <p className="font-display text-[22px] font-medium leading-[1.3] text-text">{s.value}</p>
                <p className="font-display text-[17.5px] font-medium leading-[1.52] text-text-muted">{s.label}</p>
                <div className="font-display mt-1 flex h-[29px] items-center whitespace-nowrap rounded-full border border-border px-4 text-[14px] font-medium text-text-secondary">
                  {s.source}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
