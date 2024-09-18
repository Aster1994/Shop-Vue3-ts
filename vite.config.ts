import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  /* For Using Scss Variables in .vue Files*/
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` // just variables loaded globally
          @import "./src/assets/scss/font";
          @import "./src/assets/scss/variables";
          @import "./src/assets/scss/utilities";
        `
      }
    }
  }
})
