import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  root: './src',
  base: './',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'esnext'
  },
  server: {
    host: '127.0.0.1',
    port: 3000
  },
  plugins: [
    react({ plugins: [] }),
    paths({ root: '../' })
  ],
});
