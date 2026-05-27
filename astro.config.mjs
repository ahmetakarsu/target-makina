// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://ahmetakarsu.github.io' : 'https://targetmakina.com.tr',
  base: isGitHubPages ? '/target-makina' : undefined,
  output: 'static',
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto',
  },
  image: {
    domains: [],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
