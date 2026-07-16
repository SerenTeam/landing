"use client";

import { useState } from "react";
import Link from "next/link";
import IconBadge from "@/components/ui/IconBadge";
import Container from "@/components/ui/Container";
import { getDictionary } from "@/i18n/dictionaries";
import { localizePath, type Locale } from "@/i18n/config";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  botField: string; // honeypot : doit rester vide
}

const inputCls =
  "font-sans w-full rounded-2xl border border-border bg-white px-4 text-[16px] text-text outline-none transition-colors h-[52px] focus:border-primary";
const textareaCls =
  "font-sans w-full rounded-2xl border border-border bg-white px-4 py-3 text-[16px] leading-[1.5] text-text outline-none transition-colors min-h-[150px] resize-y focus:border-primary";
const labelCls = "font-display mb-2 block text-[14px] font-medium text-text-secondary";
const cardCls = "rounded-card border border-border-card bg-white shadow-card-border";

type Status = "idle" | "sending" | "success";

export default function ContactContent({ lang = "fr" }: { lang?: Locale }) {
  const t = getDictionary(lang).contact;
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    botField: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.message) {
      setError(t.errorRequired);
      return;
    }
    setError("");
    setStatus("sending");
    try {
      // Soumission AJAX vers Netlify Forms (voir public/__forms.html).
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
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
    <main className="flex flex-1 flex-col bg-page-bg py-16 sm:py-20">
      <Container className="flex flex-col items-center">
        <div className="w-full max-w-[560px]">
          {status === "success" ? (
            <div className={`${cardCls} flex flex-col items-center gap-5 px-8 py-12 text-center sm:px-10`}>
              <IconBadge className="text-primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </IconBadge>
              <h1 className="font-sans text-[28px] font-normal leading-[1.3] text-text">
                {t.successTitle}
              </h1>
              <p className="font-display max-w-[400px] text-[17.5px] font-medium leading-[1.526] text-text-muted">
                {t.successBody}
              </p>
              <Link href={localizePath("/", lang)} className="font-display mt-2 text-[16px] font-medium text-primary no-underline">
                {t.backHome}
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <h1 className="font-sans mb-3 text-[32px] font-normal leading-[1.315] text-text sm:text-[36.5px]">
                  {t.title}
                </h1>
                <p className="font-display text-[17.5px] font-medium leading-[1.526] text-text-muted">
                  {t.subtitle}
                </p>
              </div>

              <div className={`${cardCls} p-7 sm:p-10`}>
                <form
                  name="contact"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
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

                  <div>
                    <label htmlFor="name" className={labelCls}>{t.nameLabel}</label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t.namePlaceholder}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelCls}>
                      {t.emailLabel} <span className="text-primary">*</span>
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

                  <div>
                    <label htmlFor="subject" className={labelCls}>{t.subjectLabel}</label>
                    <input
                      id="subject"
                      type="text"
                      placeholder={t.subjectPlaceholder}
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>
                      {t.messageLabel} <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      placeholder={t.messagePlaceholder}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      className={textareaCls}
                    />
                  </div>

                  {error && (
                    <p className="font-sans -mt-2 text-[14px] text-red-600">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="font-display mt-1 h-[51px] rounded-full bg-primary text-[18px] font-medium text-white transition-colors hover:bg-primary-hover disabled:opacity-60"
                  >
                    {status === "sending" ? t.sending : t.submit}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </Container>
    </main>
  );
}
