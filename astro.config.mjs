// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://hashfounder.in';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        if (item.url.includes('/guides/incorporate-in-india')) {
          item.priority = 1;
          item.changefreq = 'monthly';
        } else if (item.url.endsWith('/faq') || item.url.includes('/faq/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (item.url.endsWith('/')) {
          item.priority = 0.95;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
});
