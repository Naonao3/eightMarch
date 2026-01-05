import { defineConfig } from 'vite'

export default defineConfig({
  base: '/eightMarch/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  publicDir: 'public'
})
