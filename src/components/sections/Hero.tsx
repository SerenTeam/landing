"use client";

export default function Hero() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", overflow: "hidden", position: "relative" }}>
      <div
        className="mx-auto flex flex-col md:flex-row items-center gap-16"
        style={{ maxWidth: "1280px", padding: "96px 80px 120px" }}
      >
        {/* Left: text */}
        <div className="flex-1 flex flex-col gap-6" style={{ maxWidth: "560px" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#EAF3FE",
              color: "#006BFA",
              fontSize: "12px",
              fontWeight: 500,
              padding: "4px 12px",
              borderRadius: "128px",
              width: "fit-content",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Disponible 24h/24, 7j/7
          </div>

          <h1
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "50.5px",
              fontWeight: 400,
              lineHeight: 1.176,
              color: "#1D1D1D",
              letterSpacing: "-0.5px",
            }}
          >
            Vous venez de vivre<br />
            <span style={{ color: "#006BFA" }}>un moment difficile.</span><br />
            On s'occupe du reste.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-inter-display)",
              fontSize: "19.5px",
              fontWeight: 500,
              lineHeight: 1.64,
              color: "#42424A",
            }}
          >
            Seren vous guide pas à pas dans toutes les démarches après la perte
            d'un proche, dans le bon ordre, avec les bons mots, sans vous laisser seul.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {/* Primary CTA */}
            <a
              href="/inscription"
              data-cta-label="Inscription sur la plateforme"
              style={{
                fontFamily: "var(--font-inter-display)",
                fontSize: "18px",
                fontWeight: 500,
                color: "#FFFFFF",
                backgroundColor: "#006BFA",
                height: "51px",
                padding: "0 32px",
                borderRadius: "128px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "background 0.15s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0057D0")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#006BFA")}
            >
              Commencer gratuitement
            </a>

            {/* Secondary CTA */}
            <a
              href="#comment-ca-marche"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("comment-ca-marche")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                fontFamily: "var(--font-inter-display)",
                fontSize: "18px",
                fontWeight: 500,
                color: "#42424A",
                backgroundColor: "#FFFFFF",
                height: "51px",
                padding: "0 24px",
                borderRadius: "128px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                textDecoration: "none",
                boxShadow: "0px 0.6px 0.6px -1.25px rgba(0,0,0,0.18), 0px 2.3px 2.3px -2.5px rgba(0,0,0,0.16), 0px 10px 10px -3.75px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.15s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0px 0.6px 0.6px -1.25px rgba(0,0,0,0.18), 0px 2.3px 2.3px -2.5px rgba(0,0,0,0.16), 0px 10px 10px -3.75px rgba(0,0,0,0.06)")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Voir comment ça marche
            </a>
          </div>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6,
            }}
          >
            {/* invisible on white bg, shown on dark hero variant */}
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              fontStyle: "italic",
              color: "#666676",
              lineHeight: 1.6,
            }}
          >
            Sans inscription obligatoire · Données protégées · Humain avant tout
          </p>
        </div>

        {/* Right: visual cards */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div style={{ position: "relative", width: "100%", maxWidth: "440px", aspectRatio: "1" }}>
            {/* Background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "32px",
                background: "linear-gradient(to bottom, #FFFFFF, #F2F0FF)",
              }}
            />

            {/* Card 1 : tâche complétée */}
            <div
              style={{
                position: "absolute",
                top: "32px",
                left: "32px",
                backgroundColor: "#FFFFFF",
                borderRadius: "32px",
                border: "1px solid #F2F0FF",
                boxShadow: "0px 0.36px 0.36px -1.25px rgba(135,126,135,0.18), 0px 1.37px 1.37px -2.5px rgba(135,126,135,0.16), 0px 6px 6px -3.75px rgba(135,126,135,0.06)",
                padding: "20px",
                width: "200px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "40px", height: "40px",
                    borderRadius: "128px",
                    backgroundColor: "#EAF3FE",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--font-inter-display)", fontSize: "14px", fontWeight: 500, color: "#1D1D1D" }}>Acte de décès</span>
              </div>
              <div style={{ height: "6px", borderRadius: "128px", backgroundColor: "#EAF3FE", overflow: "hidden" }}>
                <div style={{ height: "100%", width: "100%", borderRadius: "128px", backgroundColor: "#006BFA" }} />
              </div>
              <p style={{ fontSize: "12px", color: "#666676", marginTop: "6px", fontFamily: "var(--font-inter-display)", fontWeight: 500 }}>Complété</p>
            </div>

            {/* Card 2 : en cours */}
            <div
              style={{
                position: "absolute",
                bottom: "48px",
                right: "24px",
                backgroundColor: "#FFFFFF",
                borderRadius: "32px",
                border: "1px solid #F2F0FF",
                boxShadow: "0px 0.36px 0.36px -1.25px rgba(135,126,135,0.18), 0px 1.37px 1.37px -2.5px rgba(135,126,135,0.16), 0px 6px 6px -3.75px rgba(135,126,135,0.06)",
                padding: "20px",
                width: "200px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "40px", height: "40px",
                    borderRadius: "128px",
                    backgroundColor: "rgba(242,240,255,0.5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--font-inter-display)", fontSize: "14px", fontWeight: 500, color: "#1D1D1D" }}>Clôture bancaire</span>
              </div>
              <div style={{ height: "6px", borderRadius: "128px", backgroundColor: "#EAF3FE", overflow: "hidden" }}>
                <div style={{ height: "100%", width: "60%", borderRadius: "128px", backgroundColor: "#006BFA" }} />
              </div>
              <p style={{ fontSize: "12px", color: "#666676", marginTop: "6px", fontFamily: "var(--font-inter-display)", fontWeight: 500 }}>En cours</p>
            </div>

            {/* Card 3 : prochaine étape */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "40px",
                backgroundColor: "#006BFA",
                borderRadius: "24px",
                padding: "16px 20px",
                width: "160px",
              }}
            >
              <p style={{ color: "#FFFFFF", fontSize: "12px", fontWeight: 500, fontFamily: "var(--font-inter-display)" }}>Prochaine étape :</p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", marginTop: "2px", fontFamily: "var(--font-inter-display)", fontWeight: 500 }}>Notifier la CAF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
