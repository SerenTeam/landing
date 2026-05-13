import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  categorie: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
      const { data } = matter(raw); // frontmatter uniquement, pas le contenu
      return {
        slug: (data.slug as string) || filename.replace('.mdx', ''),
        title: (data.title as string) || '',
        excerpt: (data.excerpt as string) || '',
        date: (data.date as string) || '',
        readTime: (data.readTime as string) || '',
        categorie: (data.categorie as string) || '',
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getArticleBySlug(slug: string): Article | null {
  const filepath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    slug: (data.slug as string) || slug,
    title: (data.title as string) || '',
    excerpt: (data.excerpt as string) || '',
    date: (data.date as string) || '',
    readTime: (data.readTime as string) || '',
    categorie: (data.categorie as string) || '',
    content,
  };
}
