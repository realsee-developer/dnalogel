import path from 'path'
import glob from 'glob'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

const appSrc = path.resolve(process.cwd(), 'src')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isEnvDevelopment = mode === 'development'

  return {
    base: '/dnalogel/',
    server: {
      host: true,
      open: '/',
      // watch: {
      //   usePolling: true,
      //   interval: 5000,
      //   alwaysStat: true,
      //   depth: 0,
      // }
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
      // watch: {
      //   chokidar: {
      //     depth: 1,
      //     ignoreInitial: true,
      //     atomic: 1000,
      //     alwaysStat: true,
      //   }
      // }
      // watch: isEnvDevelopment
      // ? {
      //     buildDelay: 2000, // milliseconds
      //   }
      // : null,
    },
    plugins: [react()],
    // optimizeDeps: {
    //   include: Object.keys(pkg.dependencies),
    //   force: true,
    // },
    appType: 'mpa',
  }
})
