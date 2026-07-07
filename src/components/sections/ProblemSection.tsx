import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import SectionHeading from "@/components/ui/SectionHeading";

const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Des centaines d'heures perdues",
    description:
      "Entre les appels, les formulaires, les courriers et les délais administratifs, les proches épuisent un temps précieux au mauvais moment.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Une complexité qui décourage",
    description:
      "Chaque organisme a ses propres règles, ses propres délais, son propre jargon. Sans guide, on ne sait pas par où commencer.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Une solitude dans l'épreuve",
    description:
      "Notaires, banques, administrations... On se retrouve seul face à des institutions qui n'ont pas été conçues pour vous accompagner.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeading
          className="mb-12 lg:mb-16"
          kicker="La réalité"
          title="Après une perte, tout s'accumule."
          lead={
            <>
              En France, une personne en deuil doit contacter en moyenne{" "}
              <strong className="font-medium text-text">22 organismes différents</strong> dans les
              6 premiers mois. Souvent sans savoir lesquels, dans quel ordre, ni comment.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="rounded-card bg-white p-7 shadow-card">
              <IconBadge className="mb-5 text-primary">{p.icon}</IconBadge>
              <h3 className="font-display mb-2 text-[22px] font-medium leading-[1.3] text-text-heading">
                {p.title}
              </h3>
              <p className="font-display text-[17.5px] font-medium leading-[1.54] text-text-muted">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
