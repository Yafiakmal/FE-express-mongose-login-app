import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import noSpaFallback from './vite-plugin-no-spa-fallback';

// import Dashboard from './src/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index:'pages/index.html',
        dashboard: 'pages/dashboard.html',
        login: 'pages/login.html',
        register: 'pages/register.html',
      },
    },
  }
})
