import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, validateSessionToken } from '@/lib/session';

export const config = {
  // Protège uniquement les API admin — /admin est géré par sa propre modale
  matcher: ['/api/admin/:path*'],
};

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const valid = await validateSessionToken(token ?? '');

  if (!valid) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }

  return NextResponse.next();
}
