import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/vogue-web-base/",
  plugins: [react()],
});
