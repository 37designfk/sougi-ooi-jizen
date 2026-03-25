// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://37designfk.github.io',
  base: '/sougi-ooi-jizen',
  vite: {
    // @ts-ignore - vite version mismatch between @tailwindcss/vite and astro
    plugins: [tailwindcss()]
  }
});
