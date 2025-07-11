import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:5000/foo
      // '/foo': 'http://localhost:5000',

      // with options: http://localhost:5173/api/bar -> http://localhost:5000/bar
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
