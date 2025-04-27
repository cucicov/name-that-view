import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/


export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    host: '192.168.1.221',  // Ensure it's accessible over WiFi
    strictPort: true,
    port: 5173,
  },

})
