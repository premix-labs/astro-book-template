// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://uxui-masterclass.com',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
