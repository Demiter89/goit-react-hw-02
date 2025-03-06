import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()], // Додаємо svgr в масив plugins
  server: {
    open: true, // Це відкриє браузер автоматично при запуску
  },
});