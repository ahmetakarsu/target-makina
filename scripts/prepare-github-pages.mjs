import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const base = `/${(process.env.GITHUB_PAGES_BASE || 'target-makina').replace(/^\/+|\/+$/g, '')}`;
const textExtensions = new Set(['.html', '.css', '.js', '.xml', '.txt', '.json']);

async function walk(dir, files = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, files);
    } else if (entry.isFile() && textExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

function prefixRootPath(url) {
  if (!url.startsWith('/') || url.startsWith('//')) return url;
  if (url === base || url.startsWith(`${base}/`)) return url;
  return `${base}${url}`;
}

function rewriteSrcset(value) {
  return value
    .split(',')
    .map((candidate) => {
      const trimmed = candidate.trim();
      if (!trimmed) return candidate;
      const [url, ...descriptor] = trimmed.split(/\s+/);
      const rewritten = prefixRootPath(url);
      return [rewritten, ...descriptor].join(' ');
    })
    .join(', ');
}

function rewriteContent(content) {
  let rewritten = content.replace(
    /\b(href|src|poster|action)=("|')\/(?!\/)([^"']*)\2/g,
    (_match, attr, quote, rest) => `${attr}=${quote}${prefixRootPath(`/${rest}`)}${quote}`,
  );

  rewritten = rewritten.replace(
    /\bsrcset=("|')([^"']*)\1/g,
    (_match, quote, value) => `srcset=${quote}${rewriteSrcset(value)}${quote}`,
  );

  rewritten = rewritten.replace(
    /url\(\s*(["']?)\/(?!\/)([^"')]+)\1\s*\)/g,
    (_match, quote, rest) => `url(${quote}${prefixRootPath(`/${rest}`)}${quote})`,
  );

  return rewritten;
}

try {
  await stat(distDir);
} catch {
  throw new Error('dist directory was not found. Run the Astro build before this script.');
}

for (const file of await walk(distDir)) {
  const original = await readFile(file, 'utf8');
  const rewritten = rewriteContent(original);
  if (rewritten !== original) {
    await writeFile(file, rewritten);
  }
}

console.log(`Prepared GitHub Pages assets with base path ${base}`);
