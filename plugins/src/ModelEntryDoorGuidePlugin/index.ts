import type { Five, FivePlugin, Mode } from '@realsee/five'
import type { Vector3Position } from '../typings/math.type'
import { AnimationMixer, MeshBasicMaterial } from 'three'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import createCanvasTextTexture from '../shared-utils/createCanvasTextTexture'
import transformPositionToVector3 from '../shared-utils/three/transformPositionToVector3'
import transfromToMeshBasicMaterial from '../shared-utils/three/transfromToMeshBasicMaterial'

export interface ModelEntryDoorGuidePluginData {
  position?: Vector3Position
  rad?: number
  fbx_url?: string
}

export type ModelEntryDoorGuidePluginParameterType = {
  animationEnabled?: boolean
} & ModelEntryDoorGuidePluginData

interface ModelEntryDoorGuidePluginPluginState {
  object?: THREE.Object3D
  rad?: number
  animation?: { play: () => void; stop: () => void }
  enabled?: boolean // 记录状态，防止重复enable
}

export interface ModelEntryDoorGuidePluginExportType {
  enable: (config?: { animationEnable?: boolean }) => boolean
  disable: () => boolean
  load: (data?: Partial<ModelEntryDoorGuidePluginData>) => Promise<boolean>
}

/**
 * 模型入户门引导插件
 */
export const ModelEntryDoorGuidePlugin: FivePlugin<
  ModelEntryDoorGuidePluginParameterType,
  ModelEntryDoorGuidePluginExportType
> = (five: Five, params) => {
  // 局部状态
  const state: ModelEntryDoorGuidePluginPluginState = {}

  const defaultAnimationEnable = params.animationEnabled ?? true
  const defaultModelPosition = params.position ?? undefined
  const defaultRad = params.rad ?? undefined
  const defaultFbxUrl = params.fbx_url || '//vrlab-image4.ljcdn.com/release/web/entryDoorMini/Anim_Door1.fbx'
  const mixers: AnimationMixer[] = []

  const load = async (data?: Partial<ModelEntryDoorGuidePluginData>) => {
    const position = data?.position ?? defaultModelPosition
    if (!position) return Promise.reject(`ModelEntryDoorGuidePlugin.load(): position is undefined`)
    const modelPosition = transformPositionToVector3(position)
    const rad = data?.rad ?? defaultRad
    const fbxUrl = data?.fbx_url ?? defaultFbxUrl
    state.rad = rad
    if (rad === undefined) return Promise.reject(`ModelEntryDoorGuidePlugin.load(): rad is ${rad}`)

    // 加载模型
    const object: THREE.Group = await new FBXLoader().loadAsync(fbxUrl)

    // 设置位置
    object.position.copy(modelPosition)
    object.rotation.z = rad
    object.scale.set(0.8, 0.8, 0.8)

    transfromToMeshBasicMaterial(object, { transparent: true, side: THREE.DoubleSide })

    const textMesh = (object.children?.[0]?.children?.[3] as THREE.Mesh | undefined)?.clone()
    if (!textMesh) return Promise.reject(`ModelEntryDoorGuidePlugin.load(): textMesh is ${textMesh}`)

    textMesh.material = new MeshBasicMaterial({ transparent: true, map: createCanvasTextTexture('入户门') })
    textMesh.renderOrder = 3
    object.children[0].add(textMesh)
    state.object = object

    return true
  }

  const initAnimation = () => {
    if (state.animation) return
    if (!state.object) return console.error('ModelEntryDoorGuidePlugin.initAnimation(): state.object is ', state.object)
    // action
    const animationSpeed = 1
    const mixer = new AnimationMixer(state.object)
    mixers.push(mixer)
    const action = mixer.clipAction((state.object as any).animations[0])
    action.timeScale = animationSpeed
    let stopAnimation: (() => void) | undefined

    const requestAnimationFrameLoop = () => {
      let index = 0
      let oldTime = 0
      const minDeltaTime = 1000 / 30
      const animation = (time: number) => {
        index = requestAnimationFrame(animation)
        const deltaTime = time - oldTime
        if (deltaTime < minDeltaTime) return
        oldTime = time
        mixers.forEach((mixer) => mixer.update(deltaTime / 1000))
        five.needsRender = true
      }
      index = requestAnimationFrame(animation)
      return () => {
        cancelAnimationFrame(index)
      }
    }

    const play = () => {
      if (stopAnimation) return
      action.play()
      stopAnimation = requestAnimationFrameLoop()
      // 开始播动画时，rotation可能会还原
      requestAnimationFrame(() => {
        if (state.object && state.object.rotation.z !== state.rad) state.object.rotation.z = state.rad!
      })
    }
    const stop = () => {
      action.stop()
      stopAnimation?.()
      stopAnimation = undefined
    }
    const animation = { play, stop }
    state.animation = animation
  }

  const show = (config?: { animationEnable?: boolean }) => {
    if (!state.object) return console.error('ModelEntryDoorGuidePlugin.enable(): object is ', state.object)
    const animationEnable = config?.animationEnable ?? defaultAnimationEnable
    if (animationEnable) {
      if (!state.animation) initAnimation()
      state.animation!.play()
    }
    five.scene.add(state.object)
    five.needsRender = true
  }
  const hide = () => {
    if (!state.object) return
    if (state.animation) state.animation.stop()
    five.scene.remove(state.object)
    five.needsRender = true
  }

  const modeChangeHandler = (mode?: Mode) => (mode === 'Floorplan' ? show() : hide())

  const enable = (config?: { animationEnable?: boolean }) => {
    if (state.enabled) return true
    state.enabled = true
    modeChangeHandler(five.currentMode)
    five.on('modeChange', modeChangeHandler)
    show(config)
    return true
  }
  const disable = () => {
    if (!state.enabled) return true
    state.enabled = false
    hide()
    five.off('modeChange', modeChangeHandler)
    return true
  }

  return { load, enable, disable }
}

export const modelEntryDoorGuidePluginServerParams = {
  name: 'ModelEntryDoorGuidePlugin',
  version: 0,
}
export default ModelEntryDoorGuidePlugin
