import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VERCEL ? '/' : './', // Uses absolute '/' on Vercel, relative './' on local XAMPP subpaths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
