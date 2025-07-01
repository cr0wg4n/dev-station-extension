import { crx } from '@crxjs/vite-plugin'
import { defineConfig } from 'vite'
import manifest from './manifest.json'
import path from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: false,
  },
})
