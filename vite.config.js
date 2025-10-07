import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import removeConsole from 'vite-plugin-remove-console';
// https://vite.dev/config/
export default defineConfig({
   build: {
    minify: 'terser',
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  plugins: [react(), tailwindcss(), removeConsole()],
  base: '/HumFlow/',
})
