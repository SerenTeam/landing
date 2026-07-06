import Link from "next/link";
import { getAllArticles } from "@/lib/blog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Pages pré-générées au build, revalidées toutes les heures
export const revalidate = 3600;

export const metadata = {
  title: "Blog | Seren",
  description:
    "Guides pratiques et conseils pour traverser les démarches administratives après la perte d'un proche.",
  alternates: {
    canonical: "/blog",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        {/* Header */}
        <section style={{ background: "linear-gradient(to bottom, #FFFFFF, #F2F0FF)", padding: "80px 0 72px", borderBottom: "1px solid #F2F0FF" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#EAF3FE",
                borderRadius: "128px",
                padding: "4px 14px",
                marginBottom: "20px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#006BFA", display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontSize: "12px", fontWeight: 500, color: "#006BFA", letterSpacing: "0.5px", textTransform: "uppercase" as const }}>
                Ressources
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "#1D1D1D",
                lineHeight: 1.176,
                marginBottom: "16px",
                maxWidth: "640px",
              }}
            >
              Tout ce qu'il faut savoir pour avancer
            </h1>

            <p
              style={{
                fontFamily: "var(--font-inter-display)",
                fontSize: "19.5px",
                fontWeight: 500,
                lineHeight: 1.64,
                color: "#666676",
                maxWidth: "520px",
              }}
            >
              Des articles clairs et bienveillants pour vous aider à traverser
              les démarches administratives après la perte d'un proche.
            </p>

            {articles.length > 0 && (
              <p style={{ marginTop: "24px", fontSize: "13px", color: "#666676" }}>
                {articles.length} article{articles.length > 1 ? "s" : ""} publié{articles.length > 1 ? "s" : ""}
              </p>
            )}
          </div>
        </section>

        {/* Articles grid */}
        <section style={{ padding: "80px 0", flex: 1, backgroundColor: "#F8F8F8" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
            {articles.length === 0 ? (
              <p style={{ color: "#666676", textAlign: "center", padding: "64px 0" }}>
                Aucun article publié pour l'instant.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col rounded-[32px] bg-white overflow-hidden"
                    style={{
                      border: "1px solid #F2F0FF",
                      boxShadow: "0px 0.6px 0.6px -1.25px rgba(181,181,181,0.07), 0px 2.3px 2.3px -2.5px rgba(181,181,181,0.06), 0px 10px 10px -3.75px rgba(181,181,181,0.03), 0px 2px 4px 0px rgba(79,79,79,0.08)",
                      transition: "box-shadow 0.2s ease",
                    }}
                  >
                    <div className="flex flex-col gap-4 p-6 flex-1">
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" as const, fontSize: "12px", color: "#666676" }}>
                        <span>{formatDate(article.date)}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                        {article.categorie && (
                          <>
                            <span>·</span>
                            <span style={{ color: "#006BFA", fontWeight: 500 }}>
                              {article.categorie}
                            </span>
                          </>
                        )}
                      </div>
                      <h2 style={{ fontFamily: "var(--font-inter-display)", fontSize: "18px", fontWeight: 500, color: "#333333", lineHeight: 1.3, transition: "color 0.15s ease" }} className="group-hover:!text-[#006BFA]">
                        {article.title}
                      </h2>
                      <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "15px", fontWeight: 500, color: "#666676", lineHeight: 1.55, flex: 1 }}>
                        {article.excerpt}
                      </p>
                      <span style={{ color: "#006BFA", fontSize: "14px", fontWeight: 500 }}>
                        Lire l'article →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA bas de page */}
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
              gap: "28px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-inter-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#FFFFFF",
                maxWidth: "580px",
              }}
            >
              Vous n'avez pas à traverser ça seul.
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.6)",
                maxWidth: "440px",
              }}
            >
              Seren vous accompagne pas à pas dans toutes vos démarches,
              avec clarté et bienveillance.
            </p>
            <a
              href="/inscription"
              data-cta-label="Inscription"
              data-cta-position="article"
              style={{
                fontFamily: "var(--font-inter-display)",
                fontSize: "17px",
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
              }}
            >
              Commencer gratuitement
            </a>
            <p
              style={{
                fontSize: "14px",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Sans engagement · Vos données restent privées
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
