import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/invitacion_graduacion/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        carla: resolve(__dirname, 'carla.html'),
      },
    },
  },
})
