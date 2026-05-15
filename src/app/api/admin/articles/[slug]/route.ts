import { NextRequest, NextResponse } from 'next/server';
import matter from 'gray-matter';
import { SESSION_COOKIE, validateSessionToken } from '@/lib/session';
import { getFile, deleteFile } from '@/lib/github';

async function checkAuth(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  return validateSessionToken(token ?? '');
}

function safeSlug(slug: string): string {
  return slug.replace(/[^a-z0-9-]/g, '');
}

// GET /api/admin/articles/[slug] : contenu complet pour l'édition
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  if (!(await checkAuth(request)))
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });

  const { slug } = await params;
  const safe = safeSlug(slug);

  try {
    const file = await getFile(`content/blog/${safe}.mdx`);
    if (!file) return NextResponse.json({ error: 'Article introuvable.' }, { status: 404 });
    const { data, content } = matter(file.content);
    return NextResponse.json({ frontmatter: data, content });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erreur GitHub inconnue.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// DELETE /api/admin/articles/[slug] : suppression du fichier MDX
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  if (!(await checkAuth(request)))
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });

  const { slug } = await params;
  const safe = safeSlug(slug);

  if (!safe || !/^[a-z0-9-]+$/.test(safe))
    return NextResponse.json({ error: 'Slug invalide.' }, { status: 400 });

  try {
    await deleteFile(
      `content/blog/${safe}.mdx`,
      `blog: delete article "${safe}"`,
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erreur GitHub inconnue.';
    const status = message.includes('introuvable') ? 404 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
