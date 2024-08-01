import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Specify the base path
  plugins: [
    vue(),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist', // Specify the output directory
    assetsDir: 'assets', // Directory to place generated static assets
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Ensure asset names include the hash
        entryFileNames: 'assets/[name]-[hash].js', // Ensure entry files include the hash
        chunkFileNames: 'assets/[name]-[hash].js', // Ensure chunk files include the hash
      },
    },
  },
})
