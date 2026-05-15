const steps = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <section
      id="comment-ca-marche"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #F2F0FF)",
        padding: "96px 0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
        {/* Header */}
        <div style={{ maxWidth: "640px", marginBottom: "64px" }}>
          <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "11px", fontWeight: 500, color: "#006BFA", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "8px" }}>
            Notre approche
          </p>
          <h2 style={{ fontFamily: "var(--font-inter)", fontSize: "36.5px", fontWeight: 400, lineHeight: 1.315, color: "#1D1D1D", marginBottom: "16px" }}>
            Seren vous guide, étape par étape.
          </h2>
          <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "19.5px", fontWeight: 500, lineHeight: 1.64, color: "#42424A" }}>
            Pas de jargon, pas de surcharge. Juste ce qu'il faut faire,
            dans le bon ordre, avec des explications claires.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "32px",
                border: "1px solid #F2F0FF",
                boxShadow: "0px 0.36px 0.36px -1.25px rgba(135,126,135,0.18), 0px 1.37px 1.37px -2.5px rgba(135,126,135,0.16), 0px 6px 6px -3.75px rgba(135,126,135,0.06)",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {/* Step number */}
              <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "11px", fontWeight: 500, color: "#006BFA", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px" }}>
                Étape {step.number}
              </p>

              {/* Icon badge purple */}
              <div
                style={{
                  width: "64px", height: "64px",
                  borderRadius: "128px",
                  backgroundColor: "rgba(242,240,255,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {step.icon}
              </div>

              <h3 style={{ fontFamily: "var(--font-inter-display)", fontSize: "22px", fontWeight: 500, lineHeight: 1.3, color: "#333333", marginBottom: "8px" }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "17.5px", fontWeight: 500, lineHeight: 1.54, color: "#666676" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
