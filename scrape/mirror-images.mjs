import { mkdir, writeFile, readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)));
const ORIGIN = "https://estudio.babulashotsrd.com";
const OUT_ROOT = resolve(root, "..", "public");
const UA = "estudio-static-migrator/1.0 (+migration)";
const CONCURRENCY = 8;

async function main() {
  const inventory = JSON.parse(await readFile(`${root}/raw/image-inventory.json`, "utf8"));
  console.log(`Total to download: ${inventory.length}`);
  let i = 0;
  let ok = 0;
  let skipped = 0;
  let failed = [];

  async function download(url) {
    if (!url.startsWith(`${ORIGIN}/`)) return { skipped: true };
    const path = url.slice(ORIGIN.length);
    const target = join(OUT_ROOT, path);
    if (existsSync(target)) {
      const s = await stat(target);
      if (s.size > 0) return { skipped: true };
    }
    await mkdir(dirname(target), { recursive: true });
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(target, buf);
    return { size: buf.length };
  }

  async function worker() {
    while (true) {
      const idx = i++;
      if (idx >= inventory.length) return;
      const url = inventory[idx];
      try {
        const r = await download(url);
        if (r.skipped) skipped++;
        else ok++;
        if (idx % 100 === 0) console.log(`  [${idx}/${inventory.length}] ok=${ok} skipped=${skipped} failed=${failed.length}`);
      } catch (e) {
        failed.push({ url, error: e.message });
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log(`Done. ok=${ok} skipped=${skipped} failed=${failed.length}`);
  if (failed.length) {
    await writeFile(`${root}/raw/image-failures.json`, JSON.stringify(failed, null, 2));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
