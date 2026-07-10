import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { localizePath, type Locale } from "@/i18n/config";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  lang?: Locale;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, lang = "fr", children }: LegalLayoutProps) {
  const t = getDictionary(lang).legal;
  return (
    <>
      <Navbar lang={lang} />
      <main className="flex flex-1 flex-col bg-page-bg">
        {/* Header */}
        <section className="border-b border-border-card bg-gradient-to-b from-white to-border-card py-12 sm:py-14">
          <div className="mx-auto w-full max-w-[800px] px-6 sm:px-8">
            <Link
              href={localizePath("/", lang)}
              className="mb-5 inline-flex items-center gap-1 text-[13px] text-text-muted no-underline"
            >
              ← {t.home}
            </Link>
            <h1 className="font-sans mb-2.5 text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.176] text-text">
              {title}
            </h1>
            <p className="text-[13px] text-text-muted">{t.lastUpdated} {lastUpdated}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div
            className="
              prose prose-base mx-auto w-full max-w-[800px] px-6 sm:px-8
              prose-headings:font-normal prose-headings:text-text prose-headings:leading-snug
              prose-h2:mt-10 prose-h2:mb-3 prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-h2:text-xl
              prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-base
              prose-p:mt-0 prose-p:mb-4 prose-p:leading-relaxed prose-p:text-text-muted
              prose-a:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:font-semibold prose-strong:text-text
              prose-ul:my-3 prose-ol:my-3
              prose-li:my-1 prose-li:text-text-muted
            "
          >
            {t.translationNotice && (
              <p className="!mb-8 rounded-xl border border-border-card bg-surface px-4 py-3 text-[14px] italic text-text-muted">
                {t.translationNotice}
              </p>
            )}
            {children}
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
