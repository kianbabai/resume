// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <-- Make sure this is here

export default defineConfig({
  // ... other configs (site, base, outDir)
  site: 'https://kianbabai.github.io/',
  base: '/resume/',
  outDir: './dist', // Ensure this is './dist'
  integrations: [tailwind()], // <-- Make sure this is here
});