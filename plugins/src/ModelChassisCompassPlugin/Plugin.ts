import type { Five, FivePlugin } from '@realsee/five'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import object3d2LocalMatrix from '../shared-utils/object3d2LocalMatrix'
import transfromToMeshBasicMaterial from '../shared-utils/three/transfromToMeshBasicMaterial'

export interface ModelChassisCompassPluginParameterType {
  north_rad?: number
  fbx_url?: string
}

export interface ModelChassisCompassPluginData {
  north_rad?: number
  fbx_url?: string
}

interface ModelChassisCompassPluginState {
  yBase?: number
  object?: THREE.Object3D
}

export interface ModelChassisCompassPluginExportType {
  enable: () => void
  disable: () => void
  load: (data?: ModelChassisCompassPluginData) => Promise<boolean>
}

/**
 * 模型底盘指南针插件
 */
export const ModelChassisCompassPlugin: FivePlugin<
  ModelChassisCompassPluginParameterType,
  ModelChassisCompassPluginExportType
> = (five: Five, params) => {
  const defaultFbxUrl = params.fbx_url || '//vrlab-static.ljcdn.com/release/web/v3/dipan3/dipan.FBX'
  const defaultNorthRad = params.north_rad || undefined

  // 局部状态
  const state: ModelChassisCompassPluginState = {}

  const load = async (data?: ModelChassisCompassPluginData) => {
    const fbxUrl = data?.fbx_url || defaultFbxUrl
    const northRad = data?.north_rad || defaultNorthRad

    if (!northRad) {
      throw new Error('"northRad"配置参数缺失：未配置指南针指向！')
    }

    const bounding = five.model.bounding
    const xOffset = bounding.max.x - bounding.min.x
    const zOffset = bounding.max.z - bounding.min.z
    const maxOffset = Math.max(xOffset, zOffset)

    const fbxLoader = new FBXLoader()
    const object: THREE.Group = await fbxLoader.loadAsync(fbxUrl)

    transfromToMeshBasicMaterial(object, {
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    })

    const rotation = [0, northRad - Math.PI / 2, 0]

    const {
      model: {
        bounding: {
          max: { x: xMax, z: zMax },
          min: { x: xMin, y: yMin, z: zMin },
        },
      },
    } = five

    state.yBase = yMin

    const position = { x: (xMax + xMin) / 2, y: yMin - 1.6, z: (zMax + zMin) / 2 }
    const scale = 0.0045 * maxOffset
    object3d2LocalMatrix(object, { position, rotation, scale })
    state.object = object

    return true
  }

  const onCameraUpdate = ({ latitude }: { latitude: number }) => {
    if (!state.object) return
    const y = getPositionY(latitude)
    if (y) {
      state.object.position.y = y
    }
  }

  const getPositionY = (latitude: number) => {
    if (state.yBase === undefined) return
    const difference = 0.6
    if (latitude >= Math.PI / 4) return state.yBase - (difference + 1.6)
    const ratio = latitude * (4 / Math.PI)
    return state.yBase - (difference * ratio + 1.6)
  }

  const enable = () => {
    if (!state.object) return
    const y = getPositionY(five.getPose().latitude)
    if (y) state.object.position.y = y
    five.scene.add(state.object)
    five.needsRender = true
    five.on('cameraDirectionUpdate', onCameraUpdate)
  }

  const disable = () => {
    if (!state.object) return
    five.scene.remove(state.object)
    five.needsRender = true
    five.off('cameraDirectionUpdate', onCameraUpdate)
  }

  return { load, disable, enable }
}

export default ModelChassisCompassPlugin
