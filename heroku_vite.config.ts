import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    host: '0.0.0.0',
  },
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    host: '0.0.0.0',
    allowedHosts: ['name-that-view-d8397d25fcef.herokuapp.com', '.herokuapp.com']
  }
})
