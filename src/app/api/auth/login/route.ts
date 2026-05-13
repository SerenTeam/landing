import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, SESSION_MAX_AGE, createSessionToken } from '@/lib/session';

// ─── Rate limiter en mémoire ────────────────────────────────────────────────
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 min

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_ATTEMPTS) return false;
  entry.count++;
  return true;
}

function clearRateLimit(ip: string) {
  attempts.delete(ip);
}

// ─── POST /api/auth/login ───────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? '127.0.0.1';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Trop de tentatives. Réessayez dans 15 minutes.' },
      { status: 429 }
    );
  }

  let body: { identifier?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const { identifier, password } = body;
  const expectedId = process.env.ADMIN_IDENTIFIER;
  const expectedPwd = process.env.ADMIN_SECRET;

  // Vérification côté serveur — rien n'est exposé au client
  if (
    !identifier ||
    !password ||
    identifier !== expectedId ||
    password !== expectedPwd
  ) {
    // Message générique — ne pas préciser ce qui est faux
    return NextResponse.json({ error: 'Identifiants incorrects.' }, { status: 401 });
  }

  clearRateLimit(ip);
  const token = await createSessionToken();

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: SESSION_MAX_AGE,
    path: '/',
  });

  return response;
}
