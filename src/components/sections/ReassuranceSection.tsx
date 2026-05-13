const stats = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: "22 démarches",
    label: "en moyenne à effectuer dans les 6 premiers mois après une perte",
    source: "Ministère de la Justice, 2023",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "94%",
    label: "de nos utilisateurs disent avoir été soulagés dès la première session",
    source: "Seren, enquête 2024",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

const shadowCard = "0px 0.6px 0.6px -1.25px rgba(181,181,181,0.07), 0px 2.3px 2.3px -2.5px rgba(181,181,181,0.06), 0px 10px 10px -3.75px rgba(181,181,181,0.03), 0px 2px 4px 0px rgba(79,79,79,0.08)";

export default function ReassuranceSection() {
  return (
    <section id="temoignages" style={{ backgroundColor: "#FFFFFF", padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>

        {/* Section label */}
        <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "11px", fontWeight: 500, color: "#006BFA", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "8px" }}>
          Chiffres clés
        </p>
        <h2 style={{ fontFamily: "var(--font-inter)", fontSize: "36.5px", fontWeight: 400, lineHeight: 1.315, color: "#1D1D1D", marginBottom: "48px" }}>
          Ce que vivent nos familles.
        </h2>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "80px" }}>
          {stats.map((s) => (
            <div
              key={s.value}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "32px",
                padding: "32px 20px 24px",
                boxShadow: shadowCard,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "64px", height: "64px",
                  borderRadius: "128px",
                  backgroundColor: "#EAF3FE",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                {s.icon}
              </div>
              <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "22px", fontWeight: 500, lineHeight: 1.3, color: "#1D1D1D" }}>
                {s.value}
              </p>
              <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "17.5px", fontWeight: 500, lineHeight: 1.52, color: "#666676" }}>
                {s.label}
              </p>
              <div
                style={{
                  height: "29px",
                  borderRadius: "128px",
                  border: "1px solid #D9DBE0",
                  padding: "0 16px",
                  display: "flex", alignItems: "center",
                  fontSize: "14px", fontWeight: 500, color: "#42424A",
                  fontFamily: "var(--font-inter-display)",
                  whiteSpace: "nowrap",
                  marginTop: "4px",
                }}
              >
                {s.source}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "11px", fontWeight: 500, color: "#006BFA", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "8px" }}>
          Témoignages
        </p>
        <h2 style={{ fontFamily: "var(--font-inter)", fontSize: "36.5px", fontWeight: 400, lineHeight: 1.315, color: "#1D1D1D", marginBottom: "40px" }}>
          Ce que nos membres disent de Seren.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {testimonials.map((t) => (
            <div
              key={t.author}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "32px",
                border: "1px solid #F2F0FF",
                boxShadow: "0px 0.36px 0.36px -1.25px rgba(135,126,135,0.18), 0px 1.37px 1.37px -2.5px rgba(135,126,135,0.16), 0px 6px 6px -3.75px rgba(135,126,135,0.06)",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <blockquote
                style={{
                  fontFamily: "var(--font-inter-display)",
                  fontSize: "19.5px",
                  fontWeight: 500,
                  lineHeight: 1.64,
                  color: "#42424A",
                  fontStyle: "italic",
                }}
              >
                "{t.quote}"
              </blockquote>
              <div>
                <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "14px", fontWeight: 500, color: "#1D1D1D", lineHeight: 1.5 }}>{t.author}</p>
                <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "14px", fontWeight: 500, color: "#666676", lineHeight: 1.5, marginTop: "2px" }}>{t.context}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
