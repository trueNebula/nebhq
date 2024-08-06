import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths({ loose: true })],
  server: {
    port: 3000,
  },
  base: './',
  resolve: {
    alias: [
      { find: '@/src', replacement: '/src' },
      { find: '@/assets', replacement: '/src/assets' },
      { find: '@/components', replacement: '/src/components' },
      { find: '@/styles', replacement: '/src/styles' },
      { find: '@/hooks', replacement: '/src/hooks' },
      { find: '@/utils', replacement: '/src/utils' },
    ]
  }
})
