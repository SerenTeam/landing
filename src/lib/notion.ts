import { Client } from "@notionhq/client";
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

// ─── Client ────────────────────────────────────────────────────────────────

const notion = new Client({ auth: process.env.NOTION_TOKEN });

// ─── Helpers ───────────────────────────────────────────────────────────────

function richText(items: RichTextItemResponse[]): string {
  return items.map((i) => i.plain_text).join("");
}

function getProp(page: PageObjectResponse, name: string) {
  return (page.properties as Record<string, unknown>)[name];
}

// ─── Types ─────────────────────────────────────────────────────────────────

export interface NotionPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  cover: string | null;
}

// ─── Fetch all published posts ──────────────────────────────────────────────
// Notion SDK v5 : databases.query → dataSources.query

export async function getNotionPosts(): Promise<NotionPost[]> {
  const db = process.env.NOTION_DATABASE_ID!;

  const response = await notion.dataSources.query({
    data_source_id: db,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results
    .filter((p): p is PageObjectResponse => p.object === "page")
    .map((page) => {
      const title = getProp(page, "Name") as { title: RichTextItemResponse[] };
      const slug = getProp(page, "Slug") as { rich_text: RichTextItemResponse[] };
      const excerpt = getProp(page, "Excerpt") as { rich_text: RichTextItemResponse[] };
      const date = getProp(page, "Date") as { date: { start: string } | null };
      const readTime = getProp(page, "ReadTime") as { rich_text: RichTextItemResponse[] };

      let cover: string | null = null;
      if (page.cover?.type === "external") cover = page.cover.external.url;
      if (page.cover?.type === "file") cover = page.cover.file.url;

      return {
        id: page.id,
        slug: richText(slug?.rich_text ?? []) || page.id,
        title: richText(title?.title ?? []),
        date: date?.date?.start ?? new Date().toISOString().slice(0, 10),
        excerpt: richText(excerpt?.rich_text ?? []),
        readTime: richText(readTime?.rich_text ?? []) || "5 min de lecture",
        cover,
      };
    });
}

// ─── Fetch a single post by slug ────────────────────────────────────────────
// Notion SDK v5 : pages.retrieveMarkdown remplace notion-to-md

export async function getNotionPostBySlug(
  slug: string
): Promise<{ post: NotionPost; markdown: string }> {
  const db = process.env.NOTION_DATABASE_ID!;

  const response = await notion.dataSources.query({
    data_source_id: db,
    filter: {
      and: [
        { property: "Published", checkbox: { equals: true } },
        { property: "Slug", rich_text: { equals: slug } },
      ],
    },
  });

  const page = response.results.find(
    (p): p is PageObjectResponse => p.object === "page"
  );

  if (!page) throw new Error(`Post not found: ${slug}`);

  const title = getProp(page, "Name") as { title: RichTextItemResponse[] };
  const excerptProp = getProp(page, "Excerpt") as { rich_text: RichTextItemResponse[] };
  const date = getProp(page, "Date") as { date: { start: string } | null };
  const readTime = getProp(page, "ReadTime") as { rich_text: RichTextItemResponse[] };

  let cover: string | null = null;
  if (page.cover?.type === "external") cover = page.cover.external.url;
  if (page.cover?.type === "file") cover = page.cover.file.url;

  const post: NotionPost = {
    id: page.id,
    slug,
    title: richText(title?.title ?? []),
    date: date?.date?.start ?? new Date().toISOString().slice(0, 10),
    excerpt: richText(excerptProp?.rich_text ?? []),
    readTime: richText(readTime?.rich_text ?? []) || "5 min de lecture",
    cover,
  };

  // SDK v5 : récupère le contenu de la page en Markdown nativement
  const mdResponse = await notion.pages.retrieveMarkdown({ page_id: page.id });
  const markdown = mdResponse.markdown;

  return { post, markdown };
}
