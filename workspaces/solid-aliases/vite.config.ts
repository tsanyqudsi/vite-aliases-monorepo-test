import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { ViteAliases } from 'vite-aliases';

export default defineConfig({
  plugins: [solidPlugin(), ViteAliases({
    useConfig: true,
    useIndexes: true,
    useTypescript: true
  })],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
