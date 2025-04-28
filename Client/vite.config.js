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
    host: '0.0.0.0',    // Make Vite listen on all network interfaces
    port: process.env.PORT || 5173  // Use Render's assigned port or fallback to 5173 for local dev
  }
})
