// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://maadhav-codes.github.io',
  base: '/DCN',
  integrations: [
    starlight({
      title: 'DCN',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/maadhav-codes',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      expressiveCode: {
        themes: ['catppuccin-frappe'],
      },
      sidebar: [
        {
          label: 'HTML',
          items: [{ autogenerate: { directory: 'html' } }],
        },
        {
          label: 'CSS',
          items: [{ autogenerate: { directory: 'css' } }],
        },
        {
          label: 'JavaScript',
          items: [{ autogenerate: { directory: 'javascript' } }],
        },
      ],
    }),
  ],
});
