import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Dites-nous ce qui s'est passé",
    description:
      "En quelques questions simples, Seren comprend votre situation et identifie toutes les démarches qui vous concernent, et seulement celles-là.",
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Suivez votre plan personnalisé",
    description:
      "Seren organise les démarches dans le bon ordre, avec les délais à respecter, les documents à rassembler et les contacts utiles pour chaque étape.",
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Avancez à votre rythme",
    description:
      "Faites une pause quand vous en avez besoin. Seren mémorise votre progression et vous recontacte avec douceur pour chaque nouvelle étape.",
  },
];

export default function SolutionSection() {
  return (
    <section id="comment-ca-marche" className="bg-gradient-to-b from-white to-border-card py-16 lg:py-24">
      <Container>
        <SectionHeading
          className="mb-12 lg:mb-16"
          kicker="Notre approche"
          title="Seren vous guide, étape par étape."
          lead="Pas de jargon, pas de surcharge. Juste ce qu'il faut faire, dans le bon ordre, avec des explications claires."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col rounded-card border border-border-card bg-white p-7 shadow-card-border"
            >
              <p className="font-display mb-4 text-[11px] font-medium uppercase tracking-[1.5px] text-primary">
                Étape {step.number}
              </p>
              <IconBadge tone="violet" className="mb-5 text-violet">
                {step.icon}
              </IconBadge>
              <h3 className="font-display mb-2 text-[22px] font-medium leading-[1.3] text-text-heading">
                {step.title}
              </h3>
              <p className="font-display text-[17.5px] font-medium leading-[1.54] text-text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
