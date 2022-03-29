import * as THREE from 'three'
import CSS3DRenderPlugin from '../CSS3DRenderPlugin'
import type { FivePlugin } from '@realsee/five'
import { Five } from '@realsee/five'

export interface PanoSpatialTagPluginParameterType {}
export interface PanoSpatialTagPluginExportType {
  load: () => void
  dispose: () => void
}

/**
 * 空间游走标签插件
 */
export const ModelChassisCompassPlugin: FivePlugin<
  PanoSpatialTagPluginParameterType,
  PanoSpatialTagPluginExportType
> = (five: Five, params) => {

  if (five.model?.bvhs) {
    five.on('panoWillArrive', () => {}) // TODO
    five.on('modeChange', () => {}) // TODO
    five.on('cameraUpdate', () => {}) // TODO
  } else {
    five.on('modelBvhLoaded', () => {
      five.on('panoWillArrive', () => {}) // TODO
      five.on('modeChange', () => {}) // TODO
      five.on('cameraUpdate', () => {}) // TODO
    })
  }

  five.on('modelBvhLoaded', () => {
    five.on('panoWillArrive', () => {}) // TODO
    five.on('modeChange', () => {}) // TODO
    five.on('cameraUpdate', () => {}) // TODO
  })

  five.on('dispose', () => {
    five.on('panoWillArrive', () => {}) // TODO
    five.on('modeChange', () => {}) // TODO
    five.on('cameraUpdate', () => {}) // TODO
  })

  const load = () => {

  }

  const dispose = () => {

  }

  return {
    load,
    dispose,
  }
}

export default ModelChassisCompassPlugin
