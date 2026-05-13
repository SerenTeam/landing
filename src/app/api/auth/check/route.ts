import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, validateSessionToken } from '@/lib/session';

// Toujours 200 — le client lit le booléen, jamais un 401
export async function GET(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const authenticated = await validateSessionToken(token ?? '');
  return NextResponse.json({ authenticated });
}
