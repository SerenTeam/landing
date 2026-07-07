import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: "22 démarches",
    label: "en moyenne à effectuer dans les 6 premiers mois après une perte",
    source: "Ministère de la Justice, 2023",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "94%",
    label: "de nos utilisateurs disent avoir été soulagés dès la première session",
    source: "Seren, enquête 2024",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    value: "6 mois",
    label: "de délais légaux à respecter pour certaines démarches administratives",
    source: "Code civil français",
  },
];

const testimonials = [
  {
    quote:
      "Je ne savais pas par où commencer. Seren m'a redonné le sentiment de contrôler quelque chose dans un moment où tout s'effondrait.",
    author: "Marie-Claire, 54 ans",
    context: "Après la perte de son mari",
  },
  {
    quote:
      "En 20 minutes, j'avais une liste claire de tout ce que j'avais à faire. Pour la première fois depuis des semaines, je me suis sentie moins seule.",
    author: "Thomas, 38 ans",
    context: "Après la perte de son père",
  },
];

export default function ReassuranceSection() {
  return (
    <section id="temoignages" className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          className="mb-10 lg:mb-12"
          kicker="Chiffres clés"
          title="Ce que vivent nos familles."
        />

        <div className="mb-16 grid grid-cols-1 gap-6 lg:mb-20 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex flex-col items-center gap-3 rounded-card bg-white px-5 py-8 text-center shadow-card"
            >
              <IconBadge className="text-primary">{s.icon}</IconBadge>
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
          kicker="Témoignages"
          title="Ce que nos membres disent de Seren."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="flex flex-col gap-5 rounded-card border border-border-card bg-white p-7 shadow-card-border"
            >
              <blockquote className="font-display text-[19.5px] font-medium italic leading-[1.64] text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-display text-[14px] font-medium leading-[1.5] text-text">{t.author}</p>
                <p className="font-display mt-0.5 text-[14px] font-medium leading-[1.5] text-text-muted">
                  {t.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
