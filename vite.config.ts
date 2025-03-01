import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/tech-stack/', // Ensures relative paths are used
  plugins: [react()],
})
