import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  // root: './src',
  base: '/dnalogel/',
  plugins: [react(), svelte()],
  build: {
    // assetsDir: '../assets',
    target: 'esnext',
    outDir: '../online/dnalogel',
    rollupOptions: {
      input: {
        index: resolve(__dirname, './index.html'),
        ModelViewPlugin: resolve(__dirname, './src/ModelViewPlugin/index.html'),
        PanoFloorplanRadarPlugin: resolve(__dirname, './src/PanoFloorplanRadarPlugin/index.html'),
        ModelRoomLabelPlugin: resolve(__dirname, './src/ModelRoomLabelPlugin/index.html'),
        TopviewFloorplanPlugin: resolve(__dirname, './src/TopviewFloorplanPlugin/index.html'),
        ModelChassisCompassPlugin: resolve(__dirname, './src/ModelChassisCompassPlugin/index.html'),
        ModelEntryDoorGuidePlugin: resolve(__dirname, './src/ModelEntryDoorGuidePlugin/index.html'),
        CSS3DRenderPlugin: resolve(__dirname, './src/CSS3DRenderPlugin/index.html'),
        CameraMovementPlugin: resolve(__dirname, './src/CameraMovementPlugin/index.html'),
        ModelFloorplanPlugin: resolve(__dirname, './src/ModelFloorplanPlugin/index.html'),
        PanoCompassPlugin: resolve(__dirname, './src/PanoCompassPlugin/index.html'),
        PanoRulerPlugin: resolve(__dirname, './src/PanoRulerPlugin/index.html'),
        PanoMeasurePlugin: resolve(__dirname, './src/PanoMeasurePlugin/index.html'),
        PanoSpatialTagPlugin: resolve(__dirname, './src/PanoSpatialTagPlugin/index.html'),
        ModelItemLabelPlugin: resolve(__dirname, './src/ModelItemLabelPlugin/index.html'),
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      }
    }
  },
})
