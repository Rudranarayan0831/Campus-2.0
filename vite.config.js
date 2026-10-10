import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
    proxy: {
      '/api/msg91': {
        target: 'https://control.msg91.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/msg91/, ''),
        secure: false,
      },
    },
  },
});

