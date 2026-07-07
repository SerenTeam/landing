import Link from "next/link";
import { getAllArticles } from "@/lib/blog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";

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
      <main className="flex flex-1 flex-col">
        {/* Header */}
        <section className="border-b border-border-card bg-gradient-to-b from-white to-border-card py-16 sm:py-20">
          <Container>
            <div className="font-display mb-5 inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3.5 py-1 text-[12px] font-medium uppercase tracking-[0.5px] text-primary">
              <span className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Ressources
            </div>

            <h1 className="font-sans mb-4 max-w-xl text-[32px] font-normal leading-[1.176] text-text sm:text-[40px] lg:text-[3rem]">
              Tout ce qu&apos;il faut savoir pour avancer
            </h1>

            <p className="font-display max-w-lg text-[17px] font-medium leading-[1.6] text-text-muted lg:text-[19.5px] lg:leading-[1.64]">
              Des articles clairs et bienveillants pour vous aider à traverser
              les démarches administratives après la perte d&apos;un proche.
            </p>

            {articles.length > 0 && (
              <p className="mt-6 text-[13px] text-text-muted">
                {articles.length} article{articles.length > 1 ? "s" : ""} publié{articles.length > 1 ? "s" : ""}
              </p>
            )}
          </Container>
        </section>

        {/* Articles grid */}
        <section className="flex-1 bg-page-bg py-16 sm:py-20">
          <Container>
            {articles.length === 0 ? (
              <p className="py-16 text-center text-text-muted">
                Aucun article publié pour l&apos;instant.
              </p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col overflow-hidden rounded-card border border-border-card bg-white shadow-card transition-shadow"
                  >
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <div className="flex flex-wrap items-center gap-1.5 text-[12px] text-text-muted">
                        <span>{formatDate(article.date)}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                        {article.categorie && (
                          <>
                            <span>·</span>
                            <span className="font-medium text-primary">{article.categorie}</span>
                          </>
                        )}
                      </div>
                      <h2 className="font-display text-[18px] font-medium leading-[1.3] text-text-heading transition-colors group-hover:text-primary">
                        {article.title}
                      </h2>
                      <p className="font-display flex-1 text-[15px] font-medium leading-[1.55] text-text-muted">
                        {article.excerpt}
                      </p>
                      <span className="font-display text-[14px] font-medium text-primary">
                        Lire l&apos;article →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </Container>
        </section>

        <CTASection
          lead="Seren vous accompagne pas à pas dans toutes vos démarches, avec clarté et bienveillance."
          ctaPosition="article"
          secondary={null}
        />
      </main>
      <Footer />
    </>
  );
}
