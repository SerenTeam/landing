// Utilitaire de session — compatible Edge runtime (pas de Buffer, pas de crypto Node)

export const SESSION_COOKIE = 'seren_session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 jours

async function computeToken(secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await globalThis.crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await globalThis.crypto.subtle.sign(
    'HMAC',
    key,
    enc.encode('seren-admin-v1')
  );
  // hex sans Buffer (Edge compatible)
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function createSessionToken(): Promise<string> {
  return computeToken(process.env.ADMIN_SECRET!);
}

export async function validateSessionToken(token: string): Promise<boolean> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret || !token) return false;
  const expected = await computeToken(secret);
  if (expected.length !== token.length) return false;
  // Comparaison en temps constant
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ token.charCodeAt(i);
  }
  return diff === 0;
}
