import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // импортируем path из Node.js

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // добавляем алиас
    },
  },
})
