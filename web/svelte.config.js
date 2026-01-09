import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html',
      precompress: true,
    }),
    alias: {
      $lib: 'src/lib',
      '$lib/*': 'src/lib/*',
      $tests: 'src/../tests',
      '$tests/*': 'src/../tests/*',
      '@test-data': 'src/test-data',
      $i18n: '../i18n',
      'chromecast-caf-sender': './node_modules/@types/chromecast-caf-sender/index.d.ts',
    },
  },
};
