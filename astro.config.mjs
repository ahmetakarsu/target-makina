// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://targetmakina.com.tr',
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
