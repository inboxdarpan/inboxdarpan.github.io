import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://inboxdarpan.github.io',
  base: '/', // If you're deploying to a custom domain, keep it as '/'. If deploying to a subdirectory, use '/repo-name'
});