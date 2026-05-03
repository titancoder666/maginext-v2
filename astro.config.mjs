import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maginext.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
