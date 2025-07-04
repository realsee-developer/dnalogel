import path from 'path'
import glob from 'glob'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const appSrc = path.resolve(process.cwd(), 'src')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isEnvProduction = mode === 'production'
  const isEnvDevelopment = mode === 'development'

  return {
    base: '/dnalogel/',
    server: {
      host: true,
      port: 3001,
      open: '/',
      hmr: isEnvProduction
        ? false
        : {
            overlay: false,
          },
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
  }
})
