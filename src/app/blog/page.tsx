import Link from "next/link";
import { getAllArticles } from "@/lib/blog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Pages pré-générées au build, revalidées toutes les heures
export const revalidate = 3600;

export const metadata = {
  title: "Blog — Seren",
  description:
    "Guides pratiques et conseils pour traverser les démarches administratives après la perte d'un proche.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  // getAllArticles lit uniquement le frontmatter — pas le contenu MDX complet
  const articles = getAllArticles();

  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        {/* Header */}
        <section className="bg-primary-dark py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-primary-light text-sm font-medium mb-3">Ressources</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Guides & conseils
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Des articles clairs pour vous aider à comprendre, anticiper et traverser
              les démarches après la perte d'un proche.
            </p>
          </div>
        </section>

        {/* Articles grid */}
        <section className="py-20 flex-1">
          <div className="mx-auto max-w-6xl px-6">
            {articles.length === 0 ? (
              <p className="text-text-muted text-center py-16">
                Aucun article publié pour l'instant.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="flex flex-col gap-4 p-6 flex-1">
                      <div className="flex items-center gap-2 flex-wrap text-xs text-text-muted">
                        <span>{formatDate(article.date)}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                        {article.categorie && (
                          <>
                            <span>·</span>
                            <span className="text-primary font-medium">
                              {article.categorie}
                            </span>
                          </>
                        )}
                      </div>
                      <h2 className="text-lg font-semibold text-text leading-snug group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-text-muted text-sm leading-relaxed flex-1">
                        {article.excerpt}
                      </p>
                      <span className="text-primary text-sm font-medium">
                        Lire l'article →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
