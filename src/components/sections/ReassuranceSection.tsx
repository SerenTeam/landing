import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
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
    <section id="temoignages" className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          className="mb-10 lg:mb-12"
          kicker={t.statsKicker}
          title={t.statsTitle}
        />

        <div className="mb-16 grid grid-cols-1 gap-6 lg:mb-20 md:grid-cols-3">
          {t.stats.map((s, i) => (
            <div
              key={s.value}
              className="flex flex-col items-center gap-3 rounded-card bg-white px-5 py-8 text-center shadow-card"
            >
              <IconBadge className="text-primary">{statIcons[i]}</IconBadge>
              <p className="font-display text-[22px] font-medium leading-[1.3] text-text">{s.value}</p>
              <p className="font-display text-[17.5px] font-medium leading-[1.52] text-text-muted">{s.label}</p>
              <div className="font-display mt-1 flex h-[29px] items-center whitespace-nowrap rounded-full border border-border px-4 text-[14px] font-medium text-text-secondary">
                {s.source}
              </div>
            </div>
          ))}
        </div>

        <SectionHeading
          className="mb-8 lg:mb-10"
          kicker={t.testimonialsKicker}
          title={t.testimonialsTitle}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.testimonials.map((item) => (
            <div
              key={item.author}
              className="flex flex-col gap-5 rounded-card border border-border-card bg-white p-7 shadow-card-border"
            >
              <blockquote className="font-display text-[19.5px] font-medium italic leading-[1.64] text-text-secondary">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-display text-[14px] font-medium leading-[1.5] text-text">{item.author}</p>
                <p className="font-display mt-0.5 text-[14px] font-medium leading-[1.5] text-text-muted">
                  {item.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
