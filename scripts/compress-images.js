#!/usr/bin/env node
/**
 * Compresse les images d'uploads/ avant commit (ou en bulk avec --all).
 * - JPG/JPEG: max 1600px, qualité 75 (mozjpeg)
 * - PNG: max 1400px, compression maximale
 * - WEBP: max 1600px, qualité 75
 * Skip si fichier déjà sous 500KB ou si compression n'apporte aucun gain.
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const MAX_JPG = 1600;
const MAX_PNG = 1400;
const QUALITY = 75;
const SKIP_UNDER = 500 * 1024;

const EXT_JPG = new Set([".jpg", ".jpeg"]);
const EXT_PNG = new Set([".png"]);
const EXT_WEBP = new Set([".webp"]);

async function compressOne(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!EXT_JPG.has(ext) && !EXT_PNG.has(ext) && !EXT_WEBP.has(ext)) return null;

  const before = fs.statSync(filePath).size;
  if (before < SKIP_UNDER) return null;

  const tmp = filePath + ".tmp";
  const meta = await sharp(filePath).metadata();
  const max = EXT_PNG.has(ext) ? MAX_PNG : MAX_JPG;

  let pipeline = sharp(filePath).rotate(); // applique l'EXIF puis le supprime
  if ((meta.width || 0) > max || (meta.height || 0) > max) {
    pipeline = pipeline.resize(max, max, { fit: "inside", withoutEnlargement: true });
  }
  if (EXT_JPG.has(ext)) pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
  else if (EXT_PNG.has(ext)) pipeline = pipeline.png({ compressionLevel: 9, palette: true });
  else pipeline = pipeline.webp({ quality: QUALITY });

  await pipeline.toFile(tmp);
  const after = fs.statSync(tmp).size;

  if (after >= before) {
    fs.unlinkSync(tmp);
    return null;
  }
  fs.renameSync(tmp, filePath);
  return { before, after };
}

function listFiles() {
  if (process.argv.includes("--all")) {
    const dir = "uploads";
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).map((f) => path.join(dir, f));
  }
  const staged = execSync("git diff --cached --name-only --diff-filter=ACM", { encoding: "utf8" });
  return staged.split("\n").filter((f) => f.startsWith("uploads/"));
}

async function main() {
  const files = listFiles();
  if (files.length === 0) return;

  let count = 0;
  let savedTotal = 0;

  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    try {
      const r = await compressOne(f);
      if (r) {
        count++;
        savedTotal += r.before - r.after;
        const beforeKB = (r.before / 1024).toFixed(0);
        const afterKB = (r.after / 1024).toFixed(0);
        console.log(`  ${path.basename(f)}: ${beforeKB} KB → ${afterKB} KB`);
        if (!process.argv.includes("--all")) {
          execSync(`git add ${JSON.stringify(f)}`);
        }
      }
    } catch (e) {
      console.warn(`  Skip ${f}: ${e.message}`);
    }
  }

  if (count > 0) {
    const savedMB = (savedTotal / 1024 / 1024).toFixed(1);
    console.log(`✓ ${count} image(s) compressée(s) — ${savedMB} MB économisés`);
  }
}

main().catch((e) => {
  console.error("compress-images failed:", e.message);
  process.exit(0); // ne pas bloquer le commit en cas d'erreur
});
