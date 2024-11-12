import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      external: ['axios'], 
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components')
    }
  }
})

