"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconBadge from "@/components/ui/IconBadge";

type Situation = "" | "perte" | "anticiper" | "professionnel";

interface FormState {
  prenom: string;
  email: string;
  situation: Situation;
}

const inputCls =
  "font-sans w-full rounded-2xl border border-border bg-white px-4 text-[16px] text-text outline-none transition-colors h-[52px] focus:border-primary";

const labelCls = "font-display mb-2 block text-[14px] font-medium text-text-secondary";

const cardCls = "rounded-card border border-border-card bg-white shadow-card-border";

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

  return (
    <div className="flex min-h-screen flex-col bg-page-bg">
      {/* Minimal navbar */}
      <header className="flex h-16 items-center border-b border-border bg-white px-6 sm:px-10">
        <Link href="/" className="flex items-center no-underline">
          <Image src="/logo-full.svg" alt="Seren" width={90} height={34} priority />
        </Link>
      </header>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center px-5 py-16">
        <div className="w-full max-w-[480px]">
          {!submitted ? (
            <>
              {/* Badge */}
              <div className="mb-8 flex justify-center">
                <span className="font-sans rounded-full bg-primary-light px-3.5 py-1 text-[12px] font-medium uppercase tracking-[0.5px] text-primary">
                  Bientôt disponible
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-sans mb-4 text-center text-[36.5px] font-normal leading-[1.315] text-text">
                Seren arrive bientôt.
              </h1>

              <p className="font-display mb-10 text-center text-[17.7px] font-medium leading-[1.526] text-text-muted">
                Nous préparons quelque chose pour vous aider à traverser les démarches après la perte d&apos;un proche. Soyez parmi les premiers à en bénéficier.
              </p>

              {/* Form card */}
              <div className={`${cardCls} p-10`}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Prénom */}
                  <div>
                    <label htmlFor="prenom" className={labelCls}>Prénom</label>
                    <input
                      id="prenom"
                      type="text"
                      placeholder="Marie"
                      value={form.prenom}
                      onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                      className={inputCls}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelCls}>
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="marie@exemple.fr"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className={inputCls}
                    />
                  </div>

                  {/* Situation */}
                  <div>
                    <label htmlFor="situation" className={labelCls}>
                      Votre situation <span className="font-normal text-text-muted">(optionnel)</span>
                    </label>
                    <select
                      id="situation"
                      value={form.situation}
                      onChange={(e) => setForm({ ...form, situation: e.target.value as Situation })}
                      className={`${inputCls} cursor-pointer ${form.situation ? "text-text" : "text-text-muted"}`}
                    >
                      <option value="" disabled>Choisissez une situation</option>
                      <option value="perte">J&apos;ai récemment perdu un proche</option>
                      <option value="anticiper">Je veux anticiper pour ma famille</option>
                      <option value="professionnel">Je suis professionnel (notaire, pompes funèbres…)</option>
                    </select>
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="font-sans -mt-2 text-[14px] text-red-600">{error}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="font-display mt-1 h-[51px] rounded-full bg-primary text-[18px] font-medium text-white transition-colors hover:bg-primary-hover"
                  >
                    Me prévenir au lancement
                  </button>
                </form>

                {/* Disclaimer */}
                <p className="font-sans mt-4 text-center text-[14px] italic leading-[1.5] text-text-muted">
                  Aucun spam. Juste un email quand Seren est prêt.
                </p>
              </div>
            </>
          ) : (
            /* Success state */
            <div className={`${cardCls} flex flex-col items-center gap-5 px-10 py-12 text-center`}>
              <IconBadge className="text-primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </IconBadge>

              <h2 className="font-sans text-[28px] font-normal leading-[1.3] text-text">
                {form.prenom ? `Merci ${form.prenom} !` : "Merci !"}
              </h2>

              <p className="font-display max-w-[360px] text-[17.7px] font-medium leading-[1.526] text-text-muted">
                Vous serez parmi les premiers à découvrir Seren. On vous écrit dès que c&apos;est prêt.
              </p>

              <Link href="/" className="font-display mt-2 text-[16px] font-medium text-primary no-underline">
                ← Retour à l&apos;accueil
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
