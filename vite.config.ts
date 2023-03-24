import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const dist = resolve(__dirname, 'dist') 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: dist,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        background: resolve(root, 'background.ts')
      }
    }
  }
})
