import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Never expose source maps publicly — attackers can use them to reverse-engineer your code
    sourcemap: false,
    // Warn if any single chunk exceeds 500kb (helps catch accidentally bundled secrets)
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Fingerprint all output files for cache-busting and integrity
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
