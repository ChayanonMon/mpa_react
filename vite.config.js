import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  envDir: "../environment",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src" ,'index.html'),
        web1: resolve(__dirname, "src" ,"web1",  'index.html'),
        web2: resolve(__dirname, "src" ,"web2",  'index.html'),
        web3: resolve(__dirname, "src" ,"web3",  'index.html'),
      },
    },
    outDir: '../dist'
  },
  // server: {
  //   open: '/src/index.html',
  // },
})
