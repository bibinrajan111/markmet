import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['jonah-convulsive-tracelessly.ngrok-free.dev']
  }
});