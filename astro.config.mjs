// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <-- Make sure this is here

export default defineConfig({
  site: 'https://kianbabaabady.ir',
  base: '/',
  outDir: './dist',
  integrations: [tailwind()],
});