import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',   // Output-Pfad: web/build
      assets: 'build',
      fallback: 'index.html', // Für SPA-Routing (wichtig!)
      precompress: false
    })
  }
};
