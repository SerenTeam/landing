import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, validateSessionToken } from '@/lib/session';
import { upsertFile } from '@/lib/github';

export async function POST(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const valid = await validateSessionToken(token ?? '');
  if (!valid) return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });

  let body: { slug?: string; content?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const { slug, content } = body;
  if (!slug || !content)
    return NextResponse.json({ error: 'Slug et contenu requis.' }, { status: 400 });

  if (!/^[a-z0-9-]+$/.test(slug))
    return NextResponse.json({ error: 'Slug invalide.' }, { status: 400 });

  try {
    await upsertFile(
      `content/blog/${slug}.mdx`,
      content,
      `blog: publish article "${slug}"`,
    );
    return NextResponse.json({ ok: true, path: `content/blog/${slug}.mdx` });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erreur GitHub inconnue.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
