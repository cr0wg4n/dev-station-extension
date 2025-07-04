import { crx } from '@crxjs/vite-plugin'
import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'
import manifest from './manifest.json'
import path from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
    inspect(),
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
