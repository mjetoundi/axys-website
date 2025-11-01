import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Suppress chunk size warning
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      // Suppress "use client" directive warnings
      onwarn(warning, warn) {
        // Ignore "use client" directive warnings from dependencies
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
        }
        warn(warning)
      }
    }
  }
})

