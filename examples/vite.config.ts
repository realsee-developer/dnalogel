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
        ModelViewPlugin: resolve(__dirname, './ModelViewPlugin/index.html'),
        PanoFloorplanRadarPlugin: resolve(__dirname, './PanoFloorplanRadarPlugin/index.html'),
        ModelRoomLabelPlugin: resolve(__dirname, './ModelRoomLabelPlugin/index.html'),
        TopviewFloorplanPlugin: resolve(__dirname, './TopviewFloorplanPlugin/index.html'),
        ModelChassisCompassPlugin: resolve(__dirname, './ModelChassisCompassPlugin/index.html'),
        ModelEntryDoorGuidePlugin: resolve(__dirname, './ModelEntryDoorGuidePlugin/index.html'),
        CSS3DRenderPlugin: resolve(__dirname, './CSS3DRenderPlugin/index.html'),
        ModelEntryDoorGuCameraMovementPluginidePlugin: resolve(__dirname, './CameraMovementPlugin/index.html'),
        ModelFloorplanPlugin: resolve(__dirname, './ModelFloorplanPlugin/index.html'),
        PanoCompassPlugin: resolve(__dirname, './PanoCompassPlugin/index.html'),
        PanoRulerPlugin: resolve(__dirname, './PanoRulerPlugin/index.html'),
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      }
    }
  }
})
