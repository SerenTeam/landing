import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1" style={{ backgroundColor: "#F8F8F8" }}>
        {/* Header */}
        <section style={{ background: "linear-gradient(to bottom, #FFFFFF, #F2F0FF)", padding: "56px 0 48px", borderBottom: "1px solid #F2F0FF" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
            <Link
              href="/"
              style={{ fontSize: "13px", color: "#666676", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", marginBottom: "20px" }}
            >
              ← Accueil
            </Link>
            <h1
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 400,
                color: "#1D1D1D",
                lineHeight: 1.176,
                marginBottom: "10px",
              }}
            >
              {title}
            </h1>
            <p style={{ fontSize: "13px", color: "#666676" }}>
              Dernière mise à jour : {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: "64px 0 96px" }}>
          <div
            style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}
            className="
              prose prose-base max-w-none
              prose-headings:font-normal prose-headings:text-[#1D1D1D] prose-headings:leading-snug
              prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:border-b prose-h2:border-[#D9DBE0] prose-h2:pb-2
              prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2
              prose-p:text-[#666676] prose-p:leading-relaxed prose-p:mt-0 prose-p:mb-4
              prose-a:text-[#006BFA] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#1D1D1D] prose-strong:font-semibold
              prose-ul:my-3 prose-ol:my-3
              prose-li:text-[#666676] prose-li:my-1
            "
          >
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
