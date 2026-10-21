import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bluedune.tech',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
