import path from 'path'
import glob from 'glob'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

const appSrc = path.resolve(process.cwd(), 'src')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dnalogel/',
  server: {
    host: true,
    open: '/',
  },
  build: {
    rollupOptions: {
      input: glob
        .sync(path.resolve(appSrc, './**/index.html'))
        .map((filepath) => ({
          [path.relative(appSrc, path.dirname(filepath))]: filepath,
        }))
        .filter(Boolean)
        .reduce((prev, curr) => ({ ...prev, ...curr }), {
          index: path.resolve(process.cwd(), 'index.html'),
        }),
    },
  },
  plugins: [react()],
  // optimizeDeps: {
  //   include: Object.keys(pkg.dependencies),
  //   force: true,
  // },
  appType: 'mpa',
})
