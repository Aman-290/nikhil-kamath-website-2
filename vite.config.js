import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('react') || id.includes('scheduler')) return 'react';
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('gsap') || id.includes('lottie-react') || id.includes('lottie-web')) return 'animations';
          if (id.includes('recharts') || id.includes('d3')) return 'charts';
          return 'vendor';
        },
      },
    },
  },
});
