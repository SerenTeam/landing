"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Situation = "" | "perte" | "anticiper" | "professionnel";

interface FormState {
  prenom: string;
  email: string;
  situation: Situation;
}

export default function InscriptionPage() {
  const [form, setForm] = useState<FormState>({ prenom: "", email: "", situation: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email) {
      setError("Veuillez renseigner votre adresse email.");
      return;
    }
    setError("");
    // TODO: connect to Supabase
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "52px",
    padding: "0 16px",
    borderRadius: "16px",
    border: "1px solid #D9DBE0",
    fontFamily: "var(--font-inter)",
    fontSize: "16px",
    color: "#1D1D1D",
    backgroundColor: "#FFFFFF",
    outline: "none",
    transition: "border-color 0.15s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter-display)",
    fontSize: "14px",
    fontWeight: 500,
    color: "#42424A",
    marginBottom: "8px",
    display: "block",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8F8F8", display: "flex", flexDirection: "column" }}>
      {/* Minimal navbar */}
      <header style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #D9DBE0", height: "64px", display: "flex", alignItems: "center", padding: "0 40px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image src="/logo-full.svg" alt="Seren" width={90} height={34} priority />
        </Link>
      </header>

      {/* Main content */}
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px" }}>
        <div style={{ width: "100%", maxWidth: "480px" }}>

          {!submitted ? (
            <>
              {/* Badge */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
                <span style={{
                  backgroundColor: "#EAF3FE",
                  color: "#006BFA",
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "4px 14px",
                  borderRadius: "128px",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}>
                  Bientôt disponible
                </span>
              </div>

              {/* Heading */}
              <h1 style={{
                fontFamily: "var(--font-inter)",
                fontSize: "36.5px",
                fontWeight: 400,
                lineHeight: 1.315,
                color: "#1D1D1D",
                textAlign: "center",
                marginBottom: "16px",
              }}>
                Seren arrive bientôt.
              </h1>

              <p style={{
                fontFamily: "var(--font-inter-display)",
                fontSize: "17.7px",
                fontWeight: 500,
                lineHeight: 1.526,
                color: "#666676",
                textAlign: "center",
                marginBottom: "40px",
              }}>
                Nous préparons quelque chose pour vous aider à traverser les démarches après la perte d'un proche. Soyez parmi les premiers à en bénéficier.
              </p>

              {/* Form card */}
              <div style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "32px",
                border: "1px solid #F2F0FF",
                boxShadow: "0px 0.36px 0.36px -1.25px rgba(135,126,135,0.18), 0px 1.37px 1.37px -2.5px rgba(135,126,135,0.16), 0px 6px 6px -3.75px rgba(135,126,135,0.06)",
                padding: "40px",
              }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {/* Prénom */}
                  <div>
                    <label htmlFor="prenom" style={labelStyle}>Prénom</label>
                    <input
                      id="prenom"
                      type="text"
                      placeholder="Marie"
                      value={form.prenom}
                      onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#006BFA")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#D9DBE0")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" style={labelStyle}>
                      Email <span style={{ color: "#006BFA" }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="marie@exemple.fr"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#006BFA")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#D9DBE0")}
                    />
                  </div>

                  {/* Situation */}
                  <div>
                    <label htmlFor="situation" style={labelStyle}>Votre situation <span style={{ color: "#666676", fontWeight: 400 }}>(optionnel)</span></label>
                    <select
                      id="situation"
                      value={form.situation}
                      onChange={(e) => setForm({ ...form, situation: e.target.value as Situation })}
                      style={{ ...inputStyle, color: form.situation ? "#1D1D1D" : "#666676", cursor: "pointer" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#006BFA")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#D9DBE0")}
                    >
                      <option value="" disabled>Choisissez une situation</option>
                      <option value="perte">J'ai récemment perdu un proche</option>
                      <option value="anticiper">Je veux anticiper pour ma famille</option>
                      <option value="professionnel">Je suis professionnel (notaire, pompes funèbres…)</option>
                    </select>
                  </div>

                  {/* Error */}
                  {error && (
                    <p style={{ fontSize: "14px", color: "#E53E3E", fontFamily: "var(--font-inter)", marginTop: "-8px" }}>
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    style={{
                      fontFamily: "var(--font-inter-display)",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      backgroundColor: "#006BFA",
                      height: "51px",
                      borderRadius: "128px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.15s ease",
                      marginTop: "4px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0057D0")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#006BFA")}
                  >
                    Me prévenir au lancement
                  </button>
                </form>

                {/* Disclaimer */}
                <p style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "#666676",
                  textAlign: "center",
                  marginTop: "16px",
                  lineHeight: 1.5,
                }}>
                  Aucun spam. Juste un email quand Seren est prêt.
                </p>
              </div>
            </>
          ) : (
            /* Success state */
            <div style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "32px",
              border: "1px solid #F2F0FF",
              boxShadow: "0px 0.36px 0.36px -1.25px rgba(135,126,135,0.18), 0px 1.37px 1.37px -2.5px rgba(135,126,135,0.16), 0px 6px 6px -3.75px rgba(135,126,135,0.06)",
              padding: "48px 40px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}>
              {/* Check icon */}
              <div style={{
                width: "64px", height: "64px",
                borderRadius: "128px",
                backgroundColor: "#EAF3FE",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h2 style={{
                fontFamily: "var(--font-inter)",
                fontSize: "28px",
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#1D1D1D",
              }}>
                {form.prenom ? `Merci ${form.prenom} !` : "Merci !"}
              </h2>

              <p style={{
                fontFamily: "var(--font-inter-display)",
                fontSize: "17.7px",
                fontWeight: 500,
                lineHeight: 1.526,
                color: "#666676",
                maxWidth: "360px",
              }}>
                Vous serez parmi les premiers à découvrir Seren. On vous écrit dès que c'est prêt.
              </p>

              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-inter-display)",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#006BFA",
                  textDecoration: "none",
                  marginTop: "8px",
                }}
              >
                ← Retour à l'accueil
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
