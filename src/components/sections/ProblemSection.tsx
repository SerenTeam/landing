const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Des centaines d'heures perdues",
    description:
      "Entre les appels, les formulaires, les courriers et les délais administratifs, les proches épuisent un temps précieux au mauvais moment.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Une complexité qui décourage",
    description:
      "Chaque organisme a ses propres règles, ses propres délais, son propre jargon. Sans guide, on ne sait pas par où commencer.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <section style={{ backgroundColor: "#FAFAFA", padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
        {/* Header */}
        <div style={{ maxWidth: "640px", marginBottom: "64px" }}>
          <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "11px", fontWeight: 500, color: "#006BFA", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "8px" }}>
            La réalité
          </p>
          <h2 style={{ fontFamily: "var(--font-inter)", fontSize: "36.5px", fontWeight: 400, lineHeight: 1.315, color: "#1D1D1D", marginBottom: "16px" }}>
            Après une perte, tout s'accumule.
          </h2>
          <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "19.5px", fontWeight: 500, lineHeight: 1.64, color: "#42424A" }}>
            En France, une personne en deuil doit contacter en moyenne{" "}
            <strong style={{ fontWeight: 500, color: "#1D1D1D" }}>22 organismes différents</strong>{" "}
            dans les 6 premiers mois. Souvent sans savoir lesquels, dans quel ordre, ni comment.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {problems.map((p) => (
            <div
              key={p.title}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "32px",
                padding: "28px",
                boxShadow: "0px 0.6px 0.6px -1.25px rgba(181,181,181,0.07), 0px 2.3px 2.3px -2.5px rgba(181,181,181,0.06), 0px 10px 10px -3.75px rgba(181,181,181,0.03), 0px 2px 4px 0px rgba(79,79,79,0.08)",
              }}
            >
              {/* Icon badge */}
              <div
                style={{
                  width: "64px", height: "64px",
                  borderRadius: "128px",
                  backgroundColor: "#EAF3FE",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "20px",
                  flexShrink: 0,
                }}
              >
                {p.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-inter-display)", fontSize: "22px", fontWeight: 500, lineHeight: 1.3, color: "#333333", marginBottom: "8px" }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "17.5px", fontWeight: 500, lineHeight: 1.54, color: "#666676" }}>
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
