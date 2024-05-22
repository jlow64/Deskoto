import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      cachedChecks: false,
    },
  },
  resolve: {
    alias: {
      src: '/src',
      pages: '/src/pages',
      components: '/src/components',
      types: '/src/types',
    },
  },
});
