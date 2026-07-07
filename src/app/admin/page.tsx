'use client';

import { useState, useCallback, useEffect, useRef, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────

type BlockType = 'h2' | 'h3' | 'paragraph' | 'image' | 'quote' | 'list' | 'tip';
type Tab = 'editor' | 'preview' | 'mdx';
type AdminView = 'new-article' | 'articles-list';

interface Block {
  id: string;
  type: BlockType;
  content: string;
  caption?: string;
}

interface Meta {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  categorie: string;
}

type FieldErrors = Partial<Record<keyof Meta, string>>;

// ─── Helpers ──────────────────────────────────────────────────────────────

function toSlug(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function esc(str: string): string {
  return str.replace(/"/g, '\\"');
}

function uid(): string {
  return Math.random().toString(36).slice(2, 9);
}

// ─── MDX → Blocs parser ──────────────────────────────────────────────────

function parseMdxToBlocks(markdown: string): Block[] {
  const lines = markdown.split('\n');
  const blocks: Block[] = [];
  let i = 0;
  let listAccum: string[] = [];

  function flushList() {
    if (listAccum.length > 0) {
      blocks.push({ id: uid(), type: 'list', content: listAccum.join('\n') });
      listAccum = [];
    }
  }

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { flushList(); i++; continue; }

    // H2
    if (line.startsWith('## ')) {
      flushList();
      blocks.push({ id: uid(), type: 'h2', content: line.slice(3) });
      i++; continue;
    }

    // H3
    if (line.startsWith('### ')) {
      flushList();
      blocks.push({ id: uid(), type: 'h3', content: line.slice(4) });
      i++; continue;
    }

    // Tip : :::tip ... ::: (multiligne)
    if (line.startsWith(':::tip')) {
      flushList();
      const tipLines: string[] = [];
      i++; // sauter la ligne :::tip
      while (i < lines.length && lines[i].trim() !== ':::') {
        tipLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // sauter la ligne :::
      blocks.push({ id: uid(), type: 'tip', content: tipLines.join('\n').trim() });
      continue;
    }

    // Tip : > **Conseil :** texte (format legacy)
    if (line.startsWith('> **Conseil :**')) {
      flushList();
      blocks.push({ id: uid(), type: 'tip', content: line.slice('> **Conseil :** '.length) });
      i++; continue;
    }

    // Quote : > texte (lignes consécutives)
    if (line.startsWith('> ')) {
      flushList();
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      blocks.push({ id: uid(), type: 'quote', content: quoteLines.join('\n') });
      continue;
    }

    // List item : - texte
    if (line.startsWith('- ')) {
      listAccum.push(line.slice(2));
      i++; continue;
    }

    // Image : ![légende](url)
    const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
    if (imgMatch) {
      flushList();
      const caption = imgMatch[1];
      const url = imgMatch[2];
      i++;
      // Sauter la ligne *légende* éventuelle
      if (i < lines.length && /^\*[^*]+\*$/.test(lines[i].trim())) i++;
      blocks.push({ id: uid(), type: 'image', content: url, caption });
      continue;
    }

    // Paragraphe : texte brut
    flushList();
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith('## ') &&
      !lines[i].startsWith('### ') &&
      !lines[i].startsWith('> ') &&
      !lines[i].startsWith('- ') &&
      !lines[i].startsWith('![') &&
      !lines[i].startsWith(':::')
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0)
      blocks.push({ id: uid(), type: 'paragraph', content: paraLines.join('\n') });
  }

  flushList();
  return blocks;
}

// ─── blockToMdx ──────────────────────────────────────────────────────────

function blockToMdx(block: Block): string {
  const c = block.content;
  switch (block.type) {
    case 'h2': return `## ${c}`;
    case 'h3': return `### ${c}`;
    case 'paragraph': return c;
    case 'image':
      return `![${block.caption ?? ''}](${c})${block.caption ? `\n\n*${block.caption}*` : ''}`;
    case 'quote':
      return c.split('\n').map((l) => `> ${l}`).join('\n');
    case 'list':
      return c.split('\n').filter(Boolean).map((l) => `- ${l.trim()}`).join('\n');
    case 'tip': return `> **Conseil :** ${c}`;
  }
}

function generateMdxContent(meta: Meta, blocks: Block[]): string {
  const frontmatter = `---
title: "${esc(meta.title)}"
date: "${meta.date}"
excerpt: "${esc(meta.excerpt)}"
readTime: "${esc(meta.readTime)}"
slug: "${meta.slug}"
categorie: "${meta.category}"
---`;
  const body = blocks.map(blockToMdx).join('\n\n');
  return `${frontmatter}\n\n${body}`;
}

// ─── Block labels ────────────────────────────────────────────────────────

const BLOCK_TYPES: { type: BlockType; label: string; icon: string }[] = [
  { type: 'h2',       label: 'Titre H2',  icon: 'H2' },
  { type: 'h3',       label: 'Titre H3',  icon: 'H3' },
  { type: 'paragraph',label: 'Paragraphe',icon: '¶'  },
  { type: 'image',    label: 'Image',     icon: '🖼'  },
  { type: 'quote',    label: 'Citation',  icon: '"'  },
  { type: 'list',     label: 'Liste',     icon: '•'  },
  { type: 'tip',      label: 'Conseil',   icon: '💡' },
];

// ─── Preview renderer ─────────────────────────────────────────────────────

function PreviewBlock({ block }: { block: Block }) {
  const base = 'mb-4';
  switch (block.type) {
    case 'h2':
      return <h2 className={`${base} text-2xl font-bold text-[#1D1D1D] mt-8`}>{block.content}</h2>;
    case 'h3':
      return <h3 className={`${base} text-xl font-semibold text-[#1D1D1D] mt-6`}>{block.content}</h3>;
    case 'paragraph':
      return <p className={`${base} text-[#42424A] leading-relaxed`}>{block.content}</p>;
    case 'image':
      return (
        <figure className={`${base} flex flex-col gap-2`}>
          {block.content && (
            <div className="relative w-full h-56 rounded-xl overflow-hidden bg-[#F2F0FF]">
              <Image src={block.content} alt={block.caption ?? ''} fill className="object-cover" unoptimized />
            </div>
          )}
          {block.caption && (
            <figcaption className="text-xs text-[#666676] text-center italic">{block.caption}</figcaption>
          )}
        </figure>
      );
    case 'quote':
      return (
        <blockquote className={`${base} border-l-4 border-[#006BFA] pl-4 italic text-[#42424A]`}>
          {block.content}
        </blockquote>
      );
    case 'list':
      return (
        <ul className={`${base} list-disc list-inside text-[#42424A] space-y-1`}>
          {block.content.split('\n').filter(Boolean).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case 'tip':
      return (
        <div className={`${base} bg-[#F2F0FF] border-l-4 border-[#B5D4F4] rounded-r-xl px-4 py-3`}>
          <span className="text-xs font-bold text-[#006BFA] uppercase tracking-wider">Conseil</span>
          <p className="mt-1 text-[#1D1D1D] text-sm leading-relaxed">{block.content}</p>
        </div>
      );
  }
}

// ─── Block editor row ────────────────────────────────────────────────────

const TRANSFORMABLE_TYPES = BLOCK_TYPES.filter((b) => b.type !== 'image');

function BlockRow({
  block, index, total, onChange, onRemove, onMove, onTransform, openTransformId, setOpenTransformId,
}: {
  block: Block; index: number; total: number;
  onChange: (id: string, changes: Partial<Block>) => void;
  onRemove: (id: string) => void;
  onMove: (id: string, dir: -1 | 1) => void;
  onTransform: (id: string, newType: BlockType) => void;
  openTransformId: string | null;
  setOpenTransformId: (id: string | null) => void;
}) {
  const inputCls =
    'w-full rounded-lg border border-[#F2F0FF] bg-[#F8F8F8] px-3 py-2 text-sm text-[#1D1D1D] outline-none focus:border-[#006BFA] focus:ring-2 focus:ring-[#006BFA]/10 resize-none transition';

  const menuRef = useRef<HTMLDivElement>(null);
  const isMenuOpen = openTransformId === block.id;

  useEffect(() => {
    if (!isMenuOpen) return;
    function handleMouseDown(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenTransformId(null);
      }
    }
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [isMenuOpen, setOpenTransformId]);

  const transformOptions = TRANSFORMABLE_TYPES.filter((b) => b.type !== block.type);

  return (
    <div className="group flex gap-3 items-start bg-white border border-[#F2F0FF] rounded-xl p-3">
      <span className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-[#F2F0FF] text-[#006BFA] text-xs font-bold">
        {BLOCK_TYPES.find((b) => b.type === block.type)?.icon}
      </span>
      <div className="flex-1 flex flex-col gap-2">
        {block.type === 'image' ? (
          <>
            <input className={inputCls} placeholder="URL de l'image" value={block.content}
              onChange={(e) => onChange(block.id, { content: e.target.value })} />
            <input className={inputCls} placeholder="Légende (optionnel)" value={block.caption ?? ''}
              onChange={(e) => onChange(block.id, { caption: e.target.value })} />
          </>
        ) : block.type === 'list' ? (
          <textarea className={inputCls} rows={3} placeholder="Un élément par ligne" value={block.content}
            onChange={(e) => onChange(block.id, { content: e.target.value })} />
        ) : (
          <textarea className={inputCls} rows={block.type === 'paragraph' ? 3 : 1}
            placeholder={
              block.type === 'h2' ? 'Titre de section' :
              block.type === 'h3' ? 'Sous-titre' :
              block.type === 'quote' ? 'Texte de la citation' :
              block.type === 'tip' ? 'Texte du conseil' : 'Contenu du paragraphe'
            }
            value={block.content}
            onChange={(e) => onChange(block.id, { content: e.target.value })} />
        )}
      </div>
      <div className="flex flex-col gap-1 flex-shrink-0">
        {/* Transformer en : non disponible pour image */}
        {block.type !== 'image' && (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpenTransformId(isMenuOpen ? null : block.id)}
              title="Transformer en"
              className="w-7 h-7 flex items-center justify-center rounded text-[#666676] hover:bg-[#F2F0FF] text-xs transition"
            >⇄</button>
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-1 z-50 bg-white border border-[#F2F0FF] rounded-lg shadow-md min-w-[160px] py-1">
                {transformOptions.map(({ type, label, icon }) => (
                  <button
                    key={type}
                    onClick={() => { onTransform(block.id, type); setOpenTransformId(null); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-[13px] text-[#1D1D1D] hover:bg-[#F2F0FF] transition text-left"
                  >
                    <span className="text-[#006BFA] font-medium w-5 text-center">{icon}</span>
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        <button onClick={() => onMove(block.id, -1)} disabled={index === 0} title="Monter"
          className="w-7 h-7 flex items-center justify-center rounded text-[#666676] hover:bg-[#F2F0FF] disabled:opacity-30 disabled:cursor-not-allowed text-xs transition">↑</button>
        <button onClick={() => onMove(block.id, 1)} disabled={index === total - 1} title="Descendre"
          className="w-7 h-7 flex items-center justify-center rounded text-[#666676] hover:bg-[#F2F0FF] disabled:opacity-30 disabled:cursor-not-allowed text-xs transition">↓</button>
        <button onClick={() => onRemove(block.id)} title="Supprimer"
          className="w-7 h-7 flex items-center justify-center rounded text-[#E24B4A] hover:bg-red-50 text-xs transition">×</button>
      </div>
    </div>
  );
}

// ─── Main Admin Page ──────────────────────────────────────────────────────

export default function AdminPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();

  // ── Auth ──────────────────────────────────────────────────────────────
  const [authChecked, setAuthChecked] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [modalId, setModalId] = useState('');
  const [modalPwd, setModalPwd] = useState('');
  const [modalError, setModalError] = useState('');
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    fetch('/api/auth/check')
      .then((r) => r.json())
      .then(({ authenticated }) => { setAuthenticated(authenticated); setAuthChecked(true); })
      .catch(() => setAuthChecked(true));
  }, []);

  async function handleModalLogin(e: FormEvent) {
    e.preventDefault();
    setModalError('');
    setModalLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: modalId, password: modalPwd }),
      });
      if (res.ok) { setAuthenticated(true); setModalId(''); setModalPwd(''); }
      else setModalError('Identifiants incorrects.');
    } catch { setModalError('Erreur réseau.'); }
    finally { setModalLoading(false); }
  }

  // ── Admin view ────────────────────────────────────────────────────────
  const [adminView, setAdminView] = useState<AdminView>('new-article');

  // ── Articles list state ───────────────────────────────────────────────
  const [articlesList, setArticlesList] = useState<ArticleMeta[]>([]);
  const [articlesLoading, setArticlesLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (adminView === 'articles-list' && authenticated) fetchArticles();
  }, [adminView, authenticated]);

  async function fetchArticles() {
    setArticlesLoading(true);
    try {
      const res = await fetch('/api/admin/articles');
      const data = await res.json();
      setArticlesList(Array.isArray(data) ? data : []);
    } catch { setArticlesList([]); }
    finally { setArticlesLoading(false); }
  }

  async function handleDelete(slug: string) {
    const res = await fetch(`/api/admin/articles/${slug}`, { method: 'DELETE' });
    if (res.ok) {
      setArticlesList((prev) => prev.filter((a) => a.slug !== slug));
      setDeleteConfirm(null);
      setDeleteSuccess(slug);
      setTimeout(() => setDeleteSuccess(null), 3000);
    }
  }

  // ── Edit mode ─────────────────────────────────────────────────────────
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  async function loadArticleForEdit(slug: string) {
    const res = await fetch(`/api/admin/articles/${slug}`);
    if (!res.ok) return;
    const { frontmatter, content } = await res.json();
    setMeta({
      title:    (frontmatter.title    as string) || '',
      slug:     (frontmatter.slug     as string) || slug,
      excerpt:  (frontmatter.excerpt  as string) || '',
      date:     (frontmatter.date     as string) || today,
      readTime: (frontmatter.readTime as string) || '',
      category: (frontmatter.categorie as string) || 'Guide',
    });
    setSlugLocked(true);
    setBlocks(parseMdxToBlocks(content as string));
    setEditingSlug(slug);
    setActiveTab('editor');
    setPublishResult(null);
    setAdminView('new-article');
  }

  function resetEditor() {
    setMeta({ title: '', slug: '', excerpt: '', date: today, readTime: '', category: 'Guide' });
    setSlugLocked(false);
    setBlocks([]);
    setEditingSlug(null);
    setPublishResult(null);
    setErrors({});
  }

  // ── Editor state ──────────────────────────────────────────────────────
  const today = new Date().toISOString().slice(0, 10);
  const [meta, setMeta] = useState<Meta>({ title: '', slug: '', excerpt: '', date: today, readTime: '', category: 'Guide' });
  const [slugLocked, setSlugLocked] = useState(false);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>('editor');
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishResult, setPublishResult] = useState<{ ok: boolean; message: string; slug?: string } | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});

  // ── Import fichier .md ────────────────────────────────────────────────
  const importInputRef = useRef<HTMLInputElement>(null);
  const [importSuccess, setImportSuccess] = useState(false);

  function handleFileImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const raw = ev.target?.result as string;
      if (!raw) return;

      const VALID_CATEGORIES = ['Guide', 'Conseils', 'Témoignage', 'Juridique'];
      const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

      if (fmMatch) {
        const fmBlock = fmMatch[1];
        const body = fmMatch[2] ?? '';

        const getVal = (key: string) => {
          const m = fmBlock.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?`, 'm'));
          return m ? m[1].trim().replace(/\\"/g, '"') : undefined;
        };

        const imported: Partial<Meta> = {};
        const t = getVal('title');    if (t)                                 imported.title    = t;
        const s = getVal('slug');     if (s)                                 imported.slug     = s;
        const ex = getVal('excerpt'); if (ex)                                imported.excerpt  = ex;
        const d = getVal('date');     if (d)                                 imported.date     = d;
        const rt = getVal('readTime');if (rt)                                imported.readTime = rt;
        const cat = getVal('categorie'); if (cat && VALID_CATEGORIES.includes(cat)) imported.category = cat;

        setMeta((m) => ({ ...m, ...imported }));
        if (imported.slug) setSlugLocked(true);
        setBlocks(parseMdxToBlocks(body));
      } else {
        setBlocks(parseMdxToBlocks(raw));
      }

      setImportSuccess(true);
      setTimeout(() => setImportSuccess(false), 4000);
      if (importInputRef.current) importInputRef.current.value = '';
    };
    reader.readAsText(file);
  }

  function handleTitleChange(v: string) {
    setMeta((m) => ({ ...m, title: v, slug: slugLocked ? m.slug : toSlug(v) }));
  }
  function handleSlugChange(v: string) { setSlugLocked(true); setMeta((m) => ({ ...m, slug: toSlug(v) })); }

  const [openTransformId, setOpenTransformId] = useState<string | null>(null);

  const addBlock       = useCallback((type: BlockType) => setBlocks((bs) => [...bs, { id: uid(), type, content: '', caption: '' }]), []);
  const updateBlock    = useCallback((id: string, changes: Partial<Block>) => setBlocks((bs) => bs.map((b) => b.id === id ? { ...b, ...changes } : b)), []);
  const removeBlock    = useCallback((id: string) => setBlocks((bs) => bs.filter((b) => b.id !== id)), []);
  const transformBlock = useCallback((id: string, newType: BlockType) => setBlocks((bs) => bs.map((b) => b.id === id ? { ...b, type: newType } : b)), []);
  const moveBlock      = useCallback((id: string, dir: -1 | 1) => setBlocks((bs) => {
    const idx = bs.findIndex((b) => b.id === id);
    if (idx < 0) return bs;
    const next = idx + dir;
    if (next < 0 || next >= bs.length) return bs;
    const arr = [...bs];
    [arr[idx], arr[next]] = [arr[next], arr[idx]];
    return arr;
  }), []);

  function validate(): boolean {
    const errs: FieldErrors = {};
    if (!meta.title.trim())   errs.title   = 'Titre requis';
    if (!meta.slug.trim())    errs.slug    = 'Slug requis';
    if (!meta.excerpt.trim()) errs.excerpt = 'Extrait requis';
    if (!meta.date)           errs.date    = 'Date requise';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handlePublish() {
    if (!validate()) return;
    setIsPublishing(true);
    setPublishResult(null);
    const content = generateMdxContent(meta, blocks);
    try {
      const res = await fetch('/api/admin/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: meta.slug, content }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        const isUpdate = !!editingSlug;
        setPublishResult({ ok: true, message: isUpdate ? 'Article mis à jour !' : 'Article publié !', slug: meta.slug });
        if (isUpdate) setEditingSlug(null);
      } else {
        setPublishResult({ ok: false, message: (data.error as string) ?? 'Erreur lors de la publication.' });
      }
    } catch { setPublishResult({ ok: false, message: 'Erreur réseau.' }); }
    finally { setIsPublishing(false); }
  }

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    setAuthenticated(false);
  }

  const mdxPreview = generateMdxContent(meta, blocks);

  const inputCls = (field?: keyof Meta) =>
    `w-full rounded-lg border ${field && errors[field] ? 'border-[#E24B4A] bg-red-50' : 'border-[#F2F0FF] bg-[#F8F8F8]'} px-3 py-2 text-sm text-[#1D1D1D] outline-none focus:border-[#006BFA] focus:ring-2 focus:ring-[#006BFA]/10 transition resize-none`;

  // ─── Render ───────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      {/* ── Modale auth ── */}
      {authChecked && !authenticated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D1D1D]/60 backdrop-blur-sm">
          <div className="w-full max-w-[380px] mx-4 bg-white rounded-xl shadow-2xl p-8">
            <div className="text-center mb-7">
              <span className="text-xl font-semibold text-[#006BFA]">Seren</span>
              <p className="text-sm text-[#666676] mt-1">Espace équipe</p>
            </div>
            <form onSubmit={handleModalLogin} className="flex flex-col gap-4">
              <input type="text" autoComplete="username" placeholder="Identifiant" value={modalId}
                onChange={(e) => setModalId(e.target.value)} required
                className="rounded-lg border border-[#F2F0FF] bg-[#F8F8F8] px-4 py-2.5 text-sm text-[#1D1D1D] outline-none focus:border-[#006BFA] focus:ring-2 focus:ring-[#006BFA]/10 transition" />
              <input type="password" autoComplete="current-password" placeholder="Mot de passe" value={modalPwd}
                onChange={(e) => setModalPwd(e.target.value)} required
                className="rounded-lg border border-[#F2F0FF] bg-[#F8F8F8] px-4 py-2.5 text-sm text-[#1D1D1D] outline-none focus:border-[#006BFA] focus:ring-2 focus:ring-[#006BFA]/10 transition" />
              {modalError && (
                <p className="text-sm text-[#E24B4A] bg-red-50 rounded-lg px-3 py-2 border border-red-100">{modalError}</p>
              )}
              <button type="submit" disabled={modalLoading}
                className="mt-1 rounded-lg bg-[#006BFA] py-3 text-sm font-semibold text-white hover:bg-[#1D1D1D] transition disabled:opacity-60">
                {modalLoading ? 'Connexion…' : 'Accéder'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#F2F0FF] px-6 flex items-center justify-between h-14">
        <div className="flex items-center gap-6">
          <span className="font-semibold text-[#006BFA] text-lg">Seren Admin</span>
          {/* Onglets vue principale */}
          <div className="flex gap-1">
            {(['new-article', 'articles-list'] as AdminView[]).map((view) => (
              <button key={view}
                onClick={() => {
                  if (view === 'new-article' && adminView === 'new-article') resetEditor();
                  setAdminView(view);
                }}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
                  adminView === view
                    ? 'bg-[#F2F0FF] text-[#006BFA]'
                    : 'text-[#666676] hover:text-[#1D1D1D] hover:bg-[#F8F8F8]'
                }`}>
                {view === 'new-article' ? '✏️ Nouvel article' : '📋 Articles en ligne'}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleLogout} className="text-sm text-[#666676] hover:text-[#E24B4A] transition-colors">
          Déconnexion
        </button>
      </header>

      {/* ── VUE : Articles en ligne ── */}
      {adminView === 'articles-list' && (
        <div className="flex-1 p-6 max-w-4xl mx-auto w-full">
          <h2 className="text-xl font-semibold text-[#1D1D1D] mb-6">Articles en ligne</h2>

          {deleteSuccess && (
            <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-2 text-sm text-green-700">
              Article supprimé.
            </div>
          )}

          {articlesLoading ? (
            <div className="text-center py-20 text-[#666676]">
              <p className="text-3xl mb-3">⏳</p>
              <p className="text-sm">Chargement des articles…</p>
            </div>
          ) : articlesList.length === 0 ? (
            <div className="text-center py-20 text-[#666676]">
              <p className="text-3xl mb-3">📭</p>
              <p className="text-sm">Aucun article publié pour l'instant.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {articlesList.map((article) => (
                <div key={article.slug}
                  className="bg-white rounded-xl border border-[#F2F0FF] p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-medium text-[#1D1D1D] text-base leading-snug">{article.title}</h3>
                      {article.categorie && (
                        <span className="inline-flex items-center rounded-full bg-[#F2F0FF] px-2 py-0.5 text-xs font-medium text-[#006BFA]">
                          {article.categorie}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#666676] mb-2">/blog/{article.slug} · {article.readTime || 'N/A'} · {
                      article.date ? new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'N/A'
                    }</p>
                    <p className="text-sm text-[#666676] leading-relaxed line-clamp-2">{article.excerpt}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    {deleteConfirm === article.slug ? (
                      <div className="flex flex-col gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-xs">
                        <p className="text-[#E24B4A] font-medium">Supprimer définitivement ?</p>
                        <div className="flex gap-2">
                          <button onClick={() => handleDelete(article.slug)}
                            className="flex-1 rounded-lg bg-[#E24B4A] text-white px-3 py-1.5 font-medium hover:bg-red-700 transition">
                            Confirmer
                          </button>
                          <button onClick={() => setDeleteConfirm(null)}
                            className="flex-1 rounded-lg border border-[#F2F0FF] text-[#666676] px-3 py-1.5 hover:bg-[#F8F8F8] transition">
                            Annuler
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <button onClick={() => loadArticleForEdit(article.slug)}
                          className="rounded-lg border border-[#006BFA] px-4 py-1.5 text-sm font-medium text-[#006BFA] hover:bg-[#F2F0FF] transition">
                          Modifier
                        </button>
                        <button onClick={() => setDeleteConfirm(article.slug)}
                          className="rounded-lg border border-[#E24B4A] px-4 py-1.5 text-sm font-medium text-[#E24B4A] hover:bg-red-50 transition">
                          Supprimer
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── VUE : Éditeur (Nouvel article / Édition) ── */}
      {adminView === 'new-article' && (
        <div className="flex flex-1 overflow-hidden">
          {/* ── Sidebar ── */}
          <aside className="w-[260px] flex-shrink-0 bg-white border-r border-[#F2F0FF] flex flex-col overflow-y-auto">
            <div className="p-4 flex flex-col gap-3 flex-1">

              {/* Bannière mode édition */}
              {editingSlug && (
                <div className="rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Mode édition</p>
                    <p className="text-xs text-amber-600 mt-0.5 font-mono">{editingSlug}</p>
                  </div>
                  <button onClick={resetEditor} title="Nouvel article vierge"
                    className="text-amber-500 hover:text-amber-700 text-xs mt-0.5">✕</button>
                </div>
              )}

              {/* Title */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#1D1D1D] uppercase tracking-wider">Titre</label>
                <input className={inputCls('title')} placeholder="Titre de l'article"
                  value={meta.title} onChange={(e) => handleTitleChange(e.target.value)} />
                {errors.title && <p className="text-xs text-[#E24B4A]">{errors.title}</p>}
              </div>

              {/* Slug */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#1D1D1D] uppercase tracking-wider">Slug URL</label>
                <input className={inputCls('slug')} placeholder="mon-article"
                  value={meta.slug} onChange={(e) => handleSlugChange(e.target.value)} />
                {errors.slug && <p className="text-xs text-[#E24B4A]">{errors.slug}</p>}
                <p className="text-xs text-[#666676]">/blog/{meta.slug || '…'}</p>
              </div>

              {/* Excerpt */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#1D1D1D] uppercase tracking-wider">Extrait</label>
                <textarea className={inputCls('excerpt')} rows={2} placeholder="Résumé court de l'article"
                  value={meta.excerpt} onChange={(e) => setMeta((m) => ({ ...m, excerpt: e.target.value }))} />
                {errors.excerpt && <p className="text-xs text-[#E24B4A]">{errors.excerpt}</p>}
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#1D1D1D] uppercase tracking-wider">Date</label>
                <input type="date" className={inputCls('date')}
                  value={meta.date} onChange={(e) => setMeta((m) => ({ ...m, date: e.target.value }))} />
                {errors.date && <p className="text-xs text-[#E24B4A]">{errors.date}</p>}
              </div>

              {/* Read time */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#1D1D1D] uppercase tracking-wider">Temps de lecture</label>
                <input className={inputCls()} placeholder="5 min de lecture"
                  value={meta.readTime} onChange={(e) => setMeta((m) => ({ ...m, readTime: e.target.value }))} />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#1D1D1D] uppercase tracking-wider">Catégorie</label>
                <select className={inputCls()} value={meta.category}
                  onChange={(e) => setMeta((m) => ({ ...m, category: e.target.value }))}>
                  <option>Guide</option>
                  <option>Conseils</option>
                  <option>Témoignage</option>
                  <option>Juridique</option>
                </select>
              </div>

              <hr className="border-[#F2F0FF] my-1" />

              {/* Import fichier .md */}
              <input
                ref={importInputRef}
                type="file"
                accept=".md,.mdx,.txt"
                className="hidden"
                onChange={handleFileImport}
              />
              <button
                type="button"
                onClick={() => importInputRef.current?.click()}
                className="flex items-center gap-2 rounded-lg border border-[#F2F0FF] bg-[#F8F8F8] px-2 py-1.5 text-xs text-[#1D1D1D] hover:border-[#006BFA] hover:bg-[#F2F0FF] transition w-full"
              >
                <span className="text-[#006BFA] font-medium">↑</span>
                Importer un fichier .md
              </button>
              {importSuccess && (
                <p className="text-xs text-[#006BFA] bg-[#F2F0FF] rounded-lg px-2 py-1.5">
                  Fichier importé. Vérifiez les blocs avant de publier.
                </p>
              )}

              {/* Add blocks */}
              <p className="text-xs font-semibold text-[#1D1D1D] uppercase tracking-wider">Ajouter un bloc</p>
              <div className="grid grid-cols-2 gap-1.5">
                {BLOCK_TYPES.map(({ type, label, icon }) => (
                  <button key={type} onClick={() => addBlock(type)}
                    className="flex items-center gap-2 rounded-lg border border-[#F2F0FF] bg-[#F8F8F8] px-2 py-1.5 text-xs text-[#1D1D1D] hover:border-[#006BFA] hover:bg-[#F2F0FF] transition">
                    <span className="text-[#006BFA] font-medium w-5 text-center">{icon}</span>
                    {label}
                  </button>
                ))}
              </div>

              <hr className="border-[#F2F0FF] my-1" />

              <button onClick={() => setActiveTab('preview')}
                className="rounded-lg border border-[#006BFA] px-4 py-2 text-sm font-medium text-[#006BFA] hover:bg-[#F2F0FF] transition">
                Aperçu
              </button>

              <button onClick={handlePublish} disabled={isPublishing}
                className="rounded-lg bg-[#006BFA] px-4 py-3 text-sm font-bold text-white hover:bg-[#1D1D1D] transition disabled:opacity-60 disabled:cursor-not-allowed">
                {isPublishing
                  ? (editingSlug ? 'Mise à jour…' : 'Publication…')
                  : (editingSlug ? 'METTRE À JOUR' : "PUBLIER L'ARTICLE")}
              </button>

              {publishResult && (
                <div className={`rounded-lg px-3 py-2 text-sm ${
                  publishResult.ok
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-[#E24B4A] border border-red-200'
                }`}>
                  {publishResult.message}
                  {publishResult.ok && publishResult.slug && (
                    <a href={`/blog/${publishResult.slug}`} target="_blank" rel="noopener noreferrer"
                      className="block mt-1 underline text-xs text-[#006BFA]">
                      Voir l'article →
                    </a>
                  )}
                </div>
              )}
            </div>
          </aside>

          {/* ── Main panel ── */}
          <main className="flex-1 flex flex-col overflow-hidden">
            <div className="flex border-b border-[#F2F0FF] bg-white px-4">
              {(['editor', 'preview', 'mdx'] as Tab[]).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition -mb-px ${
                    activeTab === tab
                      ? 'border-[#006BFA] text-[#006BFA]'
                      : 'border-transparent text-[#666676] hover:text-[#1D1D1D]'
                  }`}>
                  {tab === 'editor' ? 'Éditeur' : tab === 'preview' ? 'Aperçu' : 'MDX'}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'editor' && (
                <div className="max-w-2xl mx-auto flex flex-col gap-3">
                  {blocks.length === 0 ? (
                    <div className="text-center py-20 text-[#666676]">
                      <p className="text-4xl mb-3">✍️</p>
                      <p className="text-sm">Ajoutez des blocs depuis la sidebar pour commencer.</p>
                    </div>
                  ) : (
                    blocks.map((block, i) => (
                      <BlockRow key={block.id} block={block} index={i} total={blocks.length}
                        onChange={updateBlock} onRemove={removeBlock} onMove={moveBlock}
                        onTransform={transformBlock}
                        openTransformId={openTransformId}
                        setOpenTransformId={setOpenTransformId} />
                    ))
                  )}
                </div>
              )}

              {activeTab === 'preview' && (
                <article className="max-w-[720px] mx-auto">
                  <div className="mb-6 text-sm text-[#666676] flex gap-3">
                    <span>{meta.date || today}</span>
                    {meta.readTime && <><span>·</span><span>{meta.readTime}</span></>}
                    {meta.category && <><span>·</span><span className="text-[#006BFA]">{meta.category}</span></>}
                  </div>
                  <h1 className="text-3xl font-bold text-[#1D1D1D] mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    {meta.title || "Titre de l'article"}
                  </h1>
                  {meta.excerpt && <p className="text-lg text-[#666676] mb-8 leading-relaxed">{meta.excerpt}</p>}
                  <hr className="border-[#F2F0FF] mb-8" />
                  <div style={{ fontFamily: 'Georgia, serif' }}>
                    {blocks.length === 0
                      ? <p className="text-[#666676] italic">Aucun contenu pour l'instant.</p>
                      : blocks.map((block) => <PreviewBlock key={block.id} block={block} />)
                    }
                  </div>
                </article>
              )}

              {activeTab === 'mdx' && (
                <div className="max-w-2xl mx-auto">
                  <pre className="bg-[#1D1D1D] text-[#B5D4F4] rounded-xl p-6 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono">
                    {mdxPreview || '# Le MDX apparaîtra ici'}
                  </pre>
                </div>
              )}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
