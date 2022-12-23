import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        web1: resolve(__dirname, "src","web1",  'index.html'),
        web2: resolve(__dirname, "src","web2",  'index.html'),
        web3: resolve(__dirname, "web3",  'index.html'),
      },
    },
  },
  // server: {
  //   open: '/src/web1/index.html',
  // },
})
