import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { '@primary-color': '#1DA57A' },
        javascriptEnabled: true
      }
    }
  }
});
