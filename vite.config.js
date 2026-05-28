import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Target navegadores modernos → bundle más pequeño
    target: 'es2015',
    // Minificar CSS en producción
    cssMinify: true,
    rollupOptions: {
      output: {
        // Separar react/react-dom en un chunk estable con cache de larga duración
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // Nombres con hash para cache-busting automático
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
