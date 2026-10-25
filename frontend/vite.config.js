import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // En développement, Vite redirige /api/... vers FastAPI (port 8000).
    // Le front et l'API ont donc la même origine : pas besoin de configurer CORS.
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
})
