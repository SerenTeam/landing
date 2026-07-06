"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section style={{ backgroundColor: "#1D1D1D", padding: "96px 0" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 80px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "36.5px",
            fontWeight: 400,
            lineHeight: 1.315,
            color: "#FFFFFF",
            maxWidth: "640px",
          }}
        >
          Vous n'avez pas à traverser ça seul.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-inter-display)",
            fontSize: "19.5px",
            fontWeight: 500,
            lineHeight: 1.64,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "480px",
          }}
        >
          Seren est là pour vous aider à avancer, une étape à la fois,
          avec clarté et bienveillance.
        </p>

        <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          {/* Primary */}
          <a
            href="/inscription"
            data-cta-label="Inscription"
            data-cta-position="CtaSection"
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

          {/* Secondary */}
          <Link
            href="/blog"
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
              textDecoration: "none",
              boxShadow: "0px 0.6px 0.6px -1.25px rgba(0,0,0,0.18), 0px 2.3px 2.3px -2.5px rgba(0,0,0,0.16), 0px 10px 10px -3.75px rgba(0,0,0,0.06)",
              whiteSpace: "nowrap",
            }}
          >
            Lire nos guides
          </Link>
        </div>

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "16px",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.6,
          }}
        >
          Sans engagement · Vos données restent privées
        </p>
      </div>
    </section>
  );
}
