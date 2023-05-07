import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const BACKEND_URL = 'http://localhost:3000'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: BACKEND_URL
      }
    },
    watch: { usePolling: true }
  }
})
