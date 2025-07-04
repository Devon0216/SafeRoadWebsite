import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Check if we're in development mode
const isDev = process.env.NODE_ENV !== 'production'

// For local development, use base: '/'.
// For production (GitHub Pages), set base: '/SafeRoadWebsite/'.
export default defineConfig({
  plugins: [react()],
  base: isDev ? '/' : '/SafeRoadWebsite/',
  server: {
    port: 5173,
    open: true
  }
})
