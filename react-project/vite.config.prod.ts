import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  },
  build:{
    sourcemap: false, // Enable source maps for easier debugging
    minify: true, // Minify the output for production
    chunkSizeWarningLimit: 500,
    
  }
})
