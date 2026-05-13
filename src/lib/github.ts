const GITHUB_API = 'https://api.github.com';
const OWNER = process.env.GITHUB_OWNER!;
const REPO = process.env.GITHUB_REPO!;
const BRANCH = process.env.GITHUB_BRANCH ?? 'main';
const TOKEN = process.env.GITHUB_TOKEN!;

function headers() {
  return {
    Authorization: `Bearer ${TOKEN}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json',
  };
}

// Lire un fichier — retourne { content, sha } ou null si absent
export async function getFile(
  path: string,
): Promise<{ content: string; sha: string } | null> {
  const res = await fetch(
    `${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`,
    { headers: headers(), cache: 'no-store' },
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub getFile ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as { content: string; sha: string };
  const decoded = Buffer.from(data.content.replace(/\n/g, ''), 'base64').toString('utf-8');
  return { content: decoded, sha: data.sha };
}

// Créer ou mettre à jour un fichier
export async function upsertFile(
  path: string,
  content: string,
  message: string,
): Promise<void> {
  const existing = await getFile(path);
  const body: Record<string, string> = {
    message,
    content: Buffer.from(content).toString('base64'),
    branch: BRANCH,
  };
  if (existing) body.sha = existing.sha;

  const res = await fetch(
    `${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${path}`,
    { method: 'PUT', headers: headers(), body: JSON.stringify(body) },
  );
  if (!res.ok) throw new Error(`GitHub upsertFile ${res.status}: ${await res.text()}`);
}

// Supprimer un fichier
export async function deleteFile(path: string, message: string): Promise<void> {
  const existing = await getFile(path);
  if (!existing) throw new Error(`Fichier introuvable : ${path}`);

  const res = await fetch(
    `${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${path}`,
    {
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify({ message, sha: existing.sha, branch: BRANCH }),
    },
  );
  if (!res.ok) throw new Error(`GitHub deleteFile ${res.status}: ${await res.text()}`);
}

// Lister les fichiers d'un dossier — retourne [] si absent
export async function listFiles(path: string): Promise<string[]> {
  const res = await fetch(
    `${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`,
    { headers: headers(), cache: 'no-store' },
  );
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`GitHub listFiles ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as { name: string; type: string }[];
  return data.filter((f) => f.type === 'file').map((f) => f.name);
}
