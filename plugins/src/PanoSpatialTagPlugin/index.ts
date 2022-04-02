import * as THREE from 'three'
import CSS3DRenderPlugin from '../CSS3DRenderPlugin'
import type { FivePlugin } from '@realsee/five'
import { Five } from '@realsee/five'
import Origins from './Components/origins.svelte'
import Tag from './Components/tag.svelte'
import { pluginStyle } from './style'

import {
  PanoSpatialTagPluginId,
  PanoSpatialTagPluginDataElement,
  PanoSpatialTagPluginTagElement,
  PanoSpatialTagPluginOriginElement,
  PanoSpatialTagPluginPointElement,
} from './typings'

export interface PanoSpatialTagPluginData {
  folded?: boolean
  enabled?: boolean
  points: Array<PanoSpatialTagPluginDataElement>
}

export interface PanoSpatialTagPluginParameterType {
  container?: Element
  wait?: number
  minDistance?: number
  maxDistance?: number
  maxNumberOnScreen?: number
  minRad?: number
  upsideHeight?: number
}
export interface PanoSpatialTagPluginExportType {
  load: (data: PanoSpatialTagPluginData) => void
  unfoldAll: () => void
  foldAll: () => void
  unfold: (id: PanoSpatialTagPluginId) => void
  fold: (id: PanoSpatialTagPluginId) => void
  enable: () => void
  disable: () => void
  dispose: () => void
}

interface PanoSpatialTagPluginState {
  timeoutId?: NodeJS.Timeout
  points: Array<PanoSpatialTagPluginDataElement>
  origins: Array<PanoSpatialTagPluginOriginElement>
  tags: Array<PanoSpatialTagPluginTagElement>
  folded: boolean // 标签初始收起展开状态
  enabled: boolean // 用户控制启用禁止状态
  forbidden: boolean // 插件控制启用禁止状态
}

const MESH_SIZE = 0.001
const RAY_ORIGIN_Y = 1.4
const RAY_TOLERANT_DISTANCE = 0.01
const BLUR_IMAGE_URL = 'https://vrlab-image4.ljcdn.com/release/web/PanoSpatialTagPlugin__blur.png'

/**
 * 空间游走标签插件
 */
export const PanoSpatialTagPlugin: FivePlugin<
  PanoSpatialTagPluginParameterType,
  PanoSpatialTagPluginExportType
> = (five: Five, params) => {
  let wrapper = params?.container
  const wait = params?.wait ?? 200
  const minDistance = params?.minDistance ?? 1.2
  const maxDistance = params?.maxDistance ?? 3.5
  const maxNumberOnScreen = params?.maxNumberOnScreen ?? 3
  const minRad = params?.minRad ?? Math.PI / 4
  const upsideHeight = params?.upsideHeight ?? 1.6

  const css3DRender = CSS3DRenderPlugin(five)
  const container = document.createElement('div')
  container.classList.add('PanoSpatialTagPlugin')
  Object.assign(container.style, pluginStyle)

  let blurImage = new Image()
  blurImage.src = BLUR_IMAGE_URL

  const state: PanoSpatialTagPluginState = {
    points: [],
    origins: [],
    tags: [],
    folded: false,
    enabled: true,
    forbidden: true,
  }

  const origins = new Origins({
    target: container,
    props: { origins: state.origins },
  })

  const onCameraUpdate = (pose, userAction): void => {
    updateOrigins()
    if (userAction) updateTags()
  }

  const onPanoArrived = () => {
    if (state.forbidden) {
      state.forbidden = false
      updateTags()
    }
  }

  const onPanoWillArrive = (pano, pose): void => {
    if (state.tags.length === 0) return
    const rotateRad = pose.longitude - five.state.longitude
    const camera = five.camera.clone()
    camera.position.copy(pose.offset)
    camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), rotateRad)
    camera.updateProjectionMatrix()
    camera.updateMatrixWorld(true)
    const frustum = new THREE.Frustum()
    const projScreenMatrix = new THREE.Matrix4()
    const direction = camera.getWorldDirection(new THREE.Vector3())
    projScreenMatrix.multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    )
    frustum.setFromProjectionMatrix(projScreenMatrix)

    state.tags.forEach(tag => {
      const distance = camera.position.clone().setY(RAY_ORIGIN_Y).distanceTo(tag.position)
      if (distance < minDistance || distance > maxDistance) return tag.destroying = true
      if (!frustum.containsPoint(tag.position)) return tag.destroying = true
      const v = tag.position.clone().sub(camera.position).setY(0)
      if (
        v.angleTo(tag.normal) > Math.PI / 2 - minRad &&
        v.angleTo(tag.normal) < Math.PI / 2 + minRad
      ) return tag.destroying = true
    })
    state.tags.forEach(tag => {
      if (tag.destroying) {
        tag.app.$set({
          destroying: tag.destroying
        })
      }
    })
    setTimeout(() => {
      state.tags.forEach(tag => {
        if (tag.destroying) {
          tag.app.$destroy()
          tag = null
        }
      })
      state.tags = state.tags.filter(tag => !tag.destroying)
      updateOrigins()
    }, 1900)
  }

  const onModeChange = (mode): void => {
    if (mode !== Five.Mode.Panorama && !state.forbidden) {
      origins.$set({ origins: [] })
      state.tags.forEach(tag => {
        tag.app.$destroy()
        tag = null
      })
      state.origins = []
      state.tags = []
      state.forbidden = true
    }
  }

  const updateOrigins = (): void => {
    if (state.forbidden || !state.enabled) return
    const camera = five.camera
    const direction = camera.getWorldDirection(new THREE.Vector3())
    state.origins = state.tags.map(tag => {
      const mouse = tag.position.clone().project(camera)
      const front = tag.position.clone().sub(camera.position).setY(0)
        .angleTo(direction.setY(0)) < Math.PI / 2
      return {
        id: tag.id,
        front,  
        left: (   mouse.x + 1 ) / 2 * 100,
        top:  ( - mouse.y + 1 ) / 2 * 100,
        destroying: tag.destroying,
      }
    })
    origins.$set({ origins: state.origins })
  }

  const updateTags = (): void => {
    if (state.forbidden || !state.enabled) return
    if (state.timeoutId) clearTimeout(state.timeoutId)
    state.timeoutId = setTimeout(() => {
      state.timeoutId = undefined
      const newTags = getNewTags()
      if (newTags.length) {
        state.tags = state.tags.concat(newTags)
        updateOrigins()
      }
    }, wait)
  }

  const getNewTags = (): Array<PanoSpatialTagPluginTagElement> => {
    const { clientWidth, clientHeight } = five.getElement()
    const newTags = []
    const camera = five.camera
    const frustum = new THREE.Frustum()
    const projScreenMatrix = new THREE.Matrix4()
    const direction = camera.getWorldDirection(new THREE.Vector3())
    projScreenMatrix.multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    )
    frustum.setFromProjectionMatrix(projScreenMatrix)
    const frontTagLength = state.tags.filter(tag => frustum.containsPoint(tag.position)).length

    const points: Array<PanoSpatialTagPluginPointElement> = state.points.reduce((result, point) => {
      if (state.tags.find(tag => point.id === tag.id && !tag.destroying)) return result
      const distance = camera.position.clone().setY(RAY_ORIGIN_Y).distanceTo(point.position)
      if (distance < minDistance || distance > maxDistance) return result
      if (!frustum.containsPoint(point.position)) return result
      
      const v = point.position.clone().sub(camera.position).setY(0)

      if (
        v.angleTo(point.normal) > Math.PI / 2 - minRad &&
        v.angleTo(point.normal) < Math.PI / 2 + minRad
      ) return result

      const mouse = point.position.clone().project(camera)
      if (!state.tags.every(tag => {
        if (tag.position.clone().sub(camera.position).setY(0)
          .angleTo(direction.setY(0)) > Math.PI / 2) return true
        const _mouse = tag.position.clone().project(camera)
        return Math.sqrt(
          Math.pow((mouse.x - _mouse.x) / 2 * clientWidth, 2) + 
          Math.pow((mouse.y - _mouse.y) / 2 * clientHeight, 2)
        ) > 100
      })) return result

      const newPoint: PanoSpatialTagPluginPointElement = {
        id: point.id,
        position: point.position,
        normal: point.normal,
        content: point.content,
        weight: point.weight ?? 0,
        distance,
      }

      let index: number
      for (let i = 0, l = result.length; i < l; i++) {
        const anotherPoint = result[i]
        if (newPoint.weight > anotherPoint.weight) {
          index = i
          break
        }
        if (newPoint.distance < anotherPoint.distance) {
          index = i
          break
        }
      }
      if (index !== undefined) result.splice(index, 0, newPoint)
      else result.push(newPoint)

      return result
    }, [])

    for (let i = 0, l = points.length; i < l; i++) {
      if (frontTagLength + newTags.length >= maxNumberOnScreen) break
      const point = points[i]
      if (newTags.find(tag => point.id === tag.id)) continue

      const mouse = point.position.clone().project(camera)
      if (!state.tags.concat(newTags).every(tag => {
        if (tag.position.clone().sub(camera.position).setY(0)
          .angleTo(direction.setY(0)) > Math.PI / 2
         ) return true
        const _mouse = tag.position.clone().project(camera)
        return Math.sqrt(
          Math.pow((mouse.x - _mouse.x) / 2 * clientWidth, 2) + 
          Math.pow((mouse.y - _mouse.y) / 2 * clientHeight, 2)
        ) > 100
      })) continue

      const raycaster = new THREE.Raycaster(
        camera.position.clone().setY(RAY_ORIGIN_Y),
        point.position.clone().sub(camera.position.clone().setY(RAY_ORIGIN_Y)).normalize(),
        0,
        point.distance + RAY_TOLERANT_DISTANCE
      )
      const [intersect] = five.model.intersectRaycaster(raycaster)
      if (!intersect) continue
      if (point.distance - intersect.distance < RAY_TOLERANT_DISTANCE) {
        const { position, normal, id, content } = point
        const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(normal, position)
        const right = position.clone().sub(camera.position)
          .cross(new THREE.Vector3(0, 1, 0)).setLength(MESH_SIZE)
        const square = [
          position.clone(),
          position.clone().add(right),
          position.clone().add(new THREE.Vector3(0, MESH_SIZE, 0)).add(right),
          position.clone().add(new THREE.Vector3(0, MESH_SIZE, 0)),
        ].map(v => plane.projectPoint(v, new THREE.Vector3()))

        const { container, dispose } = css3DRender.create3DDomContainer(square) || {}
        const app = new Tag({ 
          target: container, 
          props: {
            id,
            content,
            lineZoom: 0.4 * (0.01 + camera.position.distanceTo(position) / maxDistance),
            contentZoom: 0.1 + camera.position.distanceTo(position) / maxDistance,
            upsideDown: position.y > upsideHeight,
            folded: state.folded,
            dispose,
          },
        })
        newTags.push({
          position,
          normal,
          square,
          id,
          app,
        })
      }
    }

    return newTags
  }

  /** 标签数据加载
  * @param data.points {Array} 标签数据
  * @param data.enabled {Boolean} 插件是否启用
  * @param data.folded {Boolean} 标签是否默认展开
  */
  const load = (data: PanoSpatialTagPluginData): void => {
    state.points = data.points
    if (data.enabled === false) state.enabled = data.enabled
    if (data.folded === true) state.folded = data.folded
  }

  /** 标签启用
  * 启用插件并重新计算展示标签
  */
  const enable = (): void => {
    state.enabled = true
    updateTags()
  }

  /** 插件禁用
  * 1. 禁用同时会清除已展示的标签
  * 2. 再次启用时会重新计算展示标签
  */
  const disable = (): void => {
    state.enabled = false
    origins.$set({ origins: [] })
    state.tags.forEach(tag => {
      tag.app.$destroy()
      tag = null
    })
    state.origins = []
    state.tags = []
  }

  /** 展开所有标签
  * 1. 展开所有收起的标签
  * 2. 新标签会默认展开
  */
  const unfoldAll = (): void => {
    state.folded = true
    state.tags.forEach(tag => {
      tag.app.$set({ folded: state.folded })
    })
  }

  /** 收起所有标签
  * 1. 收起所有展开的标签
  * 2. 新标签会默认收起
  */
  const foldAll = (): void => {
    state.folded = false
    state.tags.forEach(tag => {
      tag.app.$set({ folded: state.folded })
    })
  }

  /** 展开单个标签
  * @param id {Number | String} 标签ID
  */
  const unfold = (id: PanoSpatialTagPluginId): void => {
    state.tags.forEach(tag => {
      if (tag.id === id) tag.app.$set({ folded: false })
    })
  }

  /** 收起单个标签
  * @param id {Number | String} 标签ID
  */
  const fold = (id: PanoSpatialTagPluginId): void => {
    state.tags.forEach(tag => {
      if (tag.id === id) tag.app.$set({ folded: true })
    })
  }

  const dispose = (): void => {
    blurImage = null
    css3DRender.disposeAll()

    origins.$destroy()
    state.tags.forEach(tag => {
      tag.app.$destroy()
      tag = null
    })
    state.origins = []
    state.tags = []

    five.off('panoWillArrive', onPanoWillArrive)
    five.off('panoArrived', onPanoArrived)
    five.off('modeChange', onModeChange)
    five.off('cameraUpdate', onCameraUpdate)
  }

  if (five?.model?.loaded) {
    if (!wrapper) wrapper = five.getElement().parentElement
    wrapper.appendChild(container)
    state.forbidden = false
    five.on('panoWillArrive', onPanoWillArrive)
    five.on('panoArrived', onPanoArrived)
    five.on('modeChange', onModeChange)
    five.on('cameraUpdate', onCameraUpdate)
  } else {
    five.once('modelBvhLoaded', () => {
      if (!wrapper) wrapper = five.getElement().parentElement
      wrapper.appendChild(container)
      state.forbidden = false
      five.on('panoWillArrive', onPanoWillArrive)
      five.on('panoArrived', onPanoArrived)
      five.on('modeChange', onModeChange)
      five.on('cameraUpdate', onCameraUpdate)
    })
  }

  five.on('dispose', dispose)

  return {
    load,
    unfoldAll,
    foldAll,
    unfold,
    fold,
    enable,
    disable,
    dispose,
  }
}

export default PanoSpatialTagPlugin
