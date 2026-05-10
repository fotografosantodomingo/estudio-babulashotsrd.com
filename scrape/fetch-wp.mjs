import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)));
const ORIGIN = "https://estudio.babulashotsrd.com";
const UA = "estudio-static-migrator/1.0 (+migration)";

const QUOTE_SLUGS = new Set([
  "cotizacion-98-2024",
  "cotizacion-99-2024",
  "quotations-cart"
]);

async function ensureDir(p) {
  if (!existsSync(p)) await mkdir(p, { recursive: true });
}

async function fetchAll(endpoint, perPage = 100) {
  const items = [];
  for (let page = 1; page <= 50; page++) {
    const url = `${ORIGIN}/wp-json/wp/v2/${endpoint}?per_page=${perPage}&page=${page}&_embed=1`;
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.status === 400 || res.status === 404) break;
    if (!res.ok) throw new Error(`${endpoint} page ${page}: ${res.status}`);
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    items.push(...batch);
    if (batch.length < perPage) break;
  }
  return items;
}

async function fetchSeo(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  const html = await res.text();
  const get = (re) => {
    const m = html.match(re);
    return m ? m[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#039;/g, "'") : null;
  };
  return {
    status: res.status,
    title: get(/<title[^>]*>([\s\S]*?)<\/title>/i),
    description: get(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)
      || get(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i),
    canonical: get(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i),
    ogTitle: get(/<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i),
    ogDescription: get(/<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i),
    ogImage: get(/<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i),
    ogType: get(/<meta\s+property=["']og:type["']\s+content=["']([^"']*)["']/i),
    locale: get(/<meta\s+property=["']og:locale["']\s+content=["']([^"']*)["']/i),
    h1: get(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.replace(/<[^>]+>/g, "").trim() || null
  };
}

function extractImages(html) {
  if (!html) return [];
  const out = new Set();
  const imgRe = /<img[^>]*src=["']([^"']+)["']/gi;
  let m;
  while ((m = imgRe.exec(html))) {
    if (m[1].startsWith(`${ORIGIN}/`)) out.add(m[1]);
    else if (m[1].startsWith("/wp-content/")) out.add(`${ORIGIN}${m[1]}`);
  }
  const srcsetRe = /srcset=["']([^"']+)["']/gi;
  while ((m = srcsetRe.exec(html))) {
    for (const part of m[1].split(",")) {
      const u = part.trim().split(" ")[0];
      if (u.startsWith(`${ORIGIN}/`)) out.add(u);
      else if (u.startsWith("/wp-content/")) out.add(`${ORIGIN}${u}`);
    }
  }
  return [...out];
}

async function main() {
  await ensureDir(`${root}/raw`);
  await ensureDir(`${root}/seo`);

  console.log("Fetching posts...");
  const posts = await fetchAll("posts");
  console.log(`  posts: ${posts.length}`);
  await writeFile(`${root}/raw/posts.json`, JSON.stringify(posts, null, 2));

  console.log("Fetching pages...");
  const pages = await fetchAll("pages");
  console.log(`  pages: ${pages.length}`);
  await writeFile(`${root}/raw/pages.json`, JSON.stringify(pages, null, 2));

  console.log("Fetching categories...");
  const categories = await fetchAll("categories");
  console.log(`  categories: ${categories.length}`);
  await writeFile(`${root}/raw/categories.json`, JSON.stringify(categories, null, 2));

  console.log("Fetching tags...");
  const tags = await fetchAll("tags");
  console.log(`  tags: ${tags.length}`);
  await writeFile(`${root}/raw/tags.json`, JSON.stringify(tags, null, 2));

  // Build URL list to fetch SEO for
  const urls = new Set();
  urls.add(`${ORIGIN}/`);
  for (const p of posts) urls.add(p.link);
  for (const p of pages) {
    if (QUOTE_SLUGS.has(p.slug)) continue;
    urls.add(p.link);
  }
  for (const c of categories) urls.add(c.link);
  for (const t of tags) urls.add(t.link);

  const urlList = [...urls];
  console.log(`Fetching SEO for ${urlList.length} URLs (concurrency 6)...`);
  const seoMap = {};
  let i = 0;
  async function worker() {
    while (true) {
      const idx = i++;
      if (idx >= urlList.length) return;
      const url = urlList[idx];
      try {
        const seo = await fetchSeo(url);
        seoMap[url] = seo;
        if (idx % 20 === 0) console.log(`  [${idx}/${urlList.length}] ${url} -> ${seo.status}`);
      } catch (e) {
        console.warn(`  ERR ${url}: ${e.message}`);
        seoMap[url] = { status: 0, error: e.message };
      }
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));
  await writeFile(`${root}/seo/seo.json`, JSON.stringify(seoMap, null, 2));

  // Image inventory
  const imgs = new Set();
  for (const p of [...posts, ...pages]) {
    for (const u of extractImages(p.content?.rendered)) imgs.add(u);
    for (const u of extractImages(p.excerpt?.rendered)) imgs.add(u);
    if (p._embedded?.["wp:featuredmedia"]) {
      for (const m of p._embedded["wp:featuredmedia"]) {
        if (m.source_url) imgs.add(m.source_url);
        const sizes = m.media_details?.sizes;
        if (sizes) for (const s of Object.values(sizes)) if (s.source_url) imgs.add(s.source_url);
      }
    }
  }
  // Also pull any og:image referenced in SEO
  for (const v of Object.values(seoMap)) if (v.ogImage) imgs.add(v.ogImage);
  await writeFile(`${root}/raw/image-inventory.json`, JSON.stringify([...imgs].sort(), null, 2));
  console.log(`  unique image URLs: ${imgs.size}`);

  console.log("Done. Output in ./raw and ./seo");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
