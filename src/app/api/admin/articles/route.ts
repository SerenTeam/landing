import { NextRequest, NextResponse } from 'next/server';
import matter from 'gray-matter';
import { SESSION_COOKIE, validateSessionToken } from '@/lib/session';
import { listFiles, getFile } from '@/lib/github';

export async function GET(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const valid = await validateSessionToken(token ?? '');
  if (!valid) return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });

  try {
    const files = await listFiles('content/blog');
    const mdxFiles = files.filter((f) => f.endsWith('.mdx'));

    const articles = (
      await Promise.all(
        mdxFiles.map(async (filename) => {
          const file = await getFile(`content/blog/${filename}`);
          if (!file) return null;
          const { data } = matter(file.content);
          return {
            slug: (data.slug as string) || filename.replace('.mdx', ''),
            title: (data.title as string) || '',
            excerpt: (data.excerpt as string) || '',
            date: (data.date as string) || '',
            readTime: (data.readTime as string) || '',
            categorie: (data.categorie as string) || '',
          };
        }),
      )
    )
      .filter(Boolean)
      .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime());

    return NextResponse.json(articles);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erreur GitHub inconnue.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
