import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/aurora_brew_cafe/', // Matching GitHub Pages repository subpath
  server: {
    port: 3000,
    open: true
  }
})
