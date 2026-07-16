"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconBadge from "@/components/ui/IconBadge";
import { getDictionary } from "@/i18n/dictionaries";
import { localizePath, type Locale } from "@/i18n/config";

interface FormState {
  firstName: string;
  email: string;
  botField: string; // honeypot : doit rester vide
}

const inputCls =
  "font-sans w-full rounded-2xl border border-border bg-white px-4 text-[16px] text-text outline-none transition-colors h-[52px] focus:border-primary";

const labelCls = "font-display mb-2 block text-[14px] font-medium text-text-secondary";

const cardCls = "rounded-card border border-border-card bg-white shadow-card-border";

type Status = "idle" | "sending" | "success";

export default function InscriptionContent({ lang = "fr" }: { lang?: Locale }) {
  const t = getDictionary(lang).inscription;
  const [form, setForm] = useState<FormState>({ firstName: "", email: "", botField: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const bang = lang === "fr" ? " !" : "!";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email) {
      setError(t.emailError);
      return;
    }
    setError("");
    setStatus("sending");
    try {
      // Soumission AJAX vers Netlify Forms (form « newsletter », voir public/__forms.html).
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "newsletter",
          firstname: form.firstName,
          email: form.email,
          "bot-field": form.botField,
        }).toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("idle");
      setError(t.errorGeneric);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-page-bg">
      {/* Minimal navbar */}
      <header className="flex h-16 items-center border-b border-border bg-white px-6 sm:px-10">
        <Link href={localizePath("/", lang)} className="flex items-center no-underline">
          <Image src="/logo-full.svg" alt="Seren" width={90} height={34} priority />
        </Link>
      </header>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center px-5 py-16">
        <div className="w-full max-w-[480px]">
          {status !== "success" ? (
            <>
              {/* Badge */}
              <div className="mb-8 flex justify-center">
                <span className="font-sans rounded-full bg-primary-light px-3.5 py-1 text-[12px] font-medium uppercase tracking-[0.5px] text-primary">
                  {t.badge}
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-sans mb-4 text-center text-[36.5px] font-normal leading-[1.315] text-text">
                {t.title}
              </h1>

              <p className="font-display mb-10 text-center text-[17.7px] font-medium leading-[1.526] text-text-muted">
                {t.subtitle}
              </p>

              {/* Form card */}
              <div className={`${cardCls} p-10`}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Honeypot anti-spam : masqué, ne doit jamais être rempli par un humain */}
                  <p className="hidden" aria-hidden="true">
                    <label>
                      {"Ne pas remplir : "}
                      <input
                        type="text"
                        name="bot-field"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.botField}
                        onChange={(e) => setForm({ ...form, botField: e.target.value })}
                      />
                    </label>
                  </p>

                  {/* Prénom */}
                  <div>
                    <label htmlFor="firstName" className={labelCls}>{t.firstName}</label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder={t.firstNamePlaceholder}
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className={inputCls}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelCls}>
                      {t.email} <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className={inputCls}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="font-sans -mt-2 text-[14px] text-red-600">{error}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="font-display mt-1 h-[51px] rounded-full bg-primary text-[18px] font-medium text-white transition-colors hover:bg-primary-hover disabled:opacity-60"
                  >
                    {status === "sending" ? t.sending : t.submit}
                  </button>
                </form>

                {/* Disclaimer */}
                <p className="font-sans mt-4 text-center text-[14px] italic leading-[1.5] text-text-muted">
                  {t.disclaimer}
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
                {form.firstName ? `${t.successTitle} ${form.firstName}${bang}` : `${t.successTitle}${bang}`}
              </h2>

              <p className="font-display max-w-[360px] text-[17.7px] font-medium leading-[1.526] text-text-muted">
                {t.successBody}
              </p>

              <Link href={localizePath("/", lang)} className="font-display mt-2 text-[16px] font-medium text-primary no-underline">
                {t.backHome}
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
