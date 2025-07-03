import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For local development, use base: '/'.
// For production (GitHub Pages), set base: '/SafeRoadReact/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
