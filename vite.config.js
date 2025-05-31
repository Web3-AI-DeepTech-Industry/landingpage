import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: '/landingpage',
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access via local network (like ngrok)
    allowedHosts: ['primary-husky-correct.ngrok-free.app']  // allows all public hosts including ngrok
  }
})
