import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/blog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Chaque article est pré-généré au build → ouverture instantanée
export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Seren`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 py-16">
        <article className="mx-auto w-full max-w-[720px] px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-text-muted mb-10">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-text truncate max-w-xs">{article.title}</span>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-text-muted mb-6 flex-wrap">
            <span>{formatDate(article.date)}</span>
            <span>·</span>
            <span>{article.readTime}</span>
            {article.categorie && (
              <>
                <span>·</span>
                <span className="text-primary font-medium">{article.categorie}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-text leading-tight mb-8">
            {article.title}
          </h1>

          {/* MDX content */}
          <div className="
            prose prose-lg max-w-none
            prose-headings:font-normal prose-headings:text-[#1D1D1D] prose-headings:leading-snug
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[#666676] prose-p:leading-relaxed prose-p:mt-0 prose-p:mb-5
            prose-a:text-[#006BFA] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#1D1D1D] prose-strong:font-semibold
            prose-ul:my-5 prose-ol:my-5
            prose-li:text-[#666676] prose-li:my-1
            prose-blockquote:border-l-[#006BFA] prose-blockquote:text-[#42424A] prose-blockquote:not-italic
            prose-hr:border-[#D9DBE0] prose-hr:my-10
            prose-img:rounded-xl prose-img:shadow-md
          ">
            <MDXRemote source={article.content} />
          </div>

          {/* CTA Seren */}
          <div
            style={{ marginTop: "64px", borderRadius: "32px", backgroundColor: "#1D1D1D", padding: "32px" }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div className="flex-1">
              <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "18px", fontWeight: 500, color: "#FFFFFF", marginBottom: "4px" }}>
                Prêt à commencer vos démarches ?
              </p>
              <p style={{ fontFamily: "var(--font-inter-display)", fontSize: "15px", fontWeight: 500, color: "rgba(255,255,255,0.6)", lineHeight: 1.55 }}>
                Seren vous accompagne pas à pas, à votre rythme.
              </p>
            </div>
            <a
              href="/inscription"
              className="flex-shrink-0 inline-flex items-center justify-center whitespace-nowrap rounded-[128px] bg-[#006BFA] hover:bg-[#0057D0] transition-colors"
              style={{
                fontFamily: "var(--font-inter-display)",
                fontSize: "16px",
                fontWeight: 500,
                color: "#FFFFFF",
                height: "42px",
                padding: "0 24px",
                textDecoration: "none",
              }}
            >
              Commencer gratuitement
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
