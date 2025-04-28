import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 10000, // Use Render's port or fallback to 5173 for local dev
    allowedHosts: ['ecoms-front.onrender.com'] // Allow your deployed host and localhost for dev
  }
})
