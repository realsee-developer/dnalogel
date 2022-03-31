import * as THREE from 'three'
import CSS3DRenderPlugin from '../CSS3DRenderPlugin'
import type { FivePlugin } from '@realsee/five'
import { Five } from '@realsee/five'
import { nextFrame } from '../shared-utils/nextFrame'
import Origins from './Components/origins.svelte'
import Tag from './Components/tag.svelte'
import { pluginStyle } from './style'

import {
  PanoSpatialTagPluginDataElement,
  PanoSpatialTagPluginTagElement,
  PanoSpatialTagPluginOriginElement,
} from './typings'

export interface PanoSpatialTagPluginParameterType {
  container?: Element
  wait?: number
  minDistance?: number
  maxDistance?: number
}
export interface PanoSpatialTagPluginExportType {
  load: (data?: Array<PanoSpatialTagPluginDataElement>, enabled?: boolean) => void
  enable: () => void
  disable: () => void
  dispose: () => void
}

interface PanoSpatialTagPluginState {
  timeoutId?: NodeJS.Timeout
  data: Array<PanoSpatialTagPluginDataElement>
  origins: Array<PanoSpatialTagPluginOriginElement>
  tags: Array<PanoSpatialTagPluginTagElement>
  enabled: boolean // 用户控制启用禁止状态
  forbidden: boolean // 插件控制启用禁止状态
}

/**
 * 空间游走标签插件
 */
export const PanoSpatialTagPlugin: FivePlugin<
  PanoSpatialTagPluginParameterType,
  PanoSpatialTagPluginExportType
> = (five: Five, params) => {
  let wrapper = params?.container
  const wait = params?.wait || 200
  const minDistance = params?.minDistance || 1.2
  const maxDistance = params?.maxDistance || 3.5

  const container = document.createElement('div')
  container.classList.add('PanoSpatialTagPlugin')
  Object.assign(container.style, pluginStyle)

  const state: PanoSpatialTagPluginState = {
    data: [],
    origins: [],
    tags: [],
    enabled: true,
    forbidden: true,
  }

  const origins = new Origins({
    target: container,
    props: { origins: state.origins },
  })

  const onCameraUpdate = ({ offset }, userAction) => {
    updateOrigins()
    if (userAction) updateTags()
  }

  const onPanoArrived = () => {
    if (state.forbidden) {
      state.forbidden = false
      updateTags()
    }
  }

  const onPanoWillArrive = (pano, pose) => {
    if (state.tags.length === 0) return
    const rad = pose.longitude - five.state.longitude
    const camera = five.camera.clone()
    camera.position.copy(pose.offset)
    camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), rad)
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
      const distance = camera.position.clone().setY(1.4).distanceTo(tag.position)
      if (distance < minDistance || distance > maxDistance) return tag.destroying = true
      if (!frustum.containsPoint(tag.position)) return tag.destroying = true
      const v = tag.position.clone().sub(camera.position).setY(0)
      if (
        v.angleTo(tag.normal) > Math.PI * 1 / 4 &&
        v.angleTo(tag.normal) < Math.PI * 3 / 4
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
        }
      })
      state.tags = state.tags.filter(tag => !tag.destroying)
      updateOrigins()
    }, 1900)
  }

  const onModeChange = mode => {
    if (mode !== Five.Mode.Panorama && !state.forbidden) {
      origins.$set({ origins: [] })
      state.tags.forEach(tag => {
        tag.app.$destroy()
      })
      state.origins = []
      state.tags = []
      state.forbidden = true
    }
  }

  const updateOrigins = () => {
    if (state.forbidden || !state.enabled) return
    const camera = five.camera
    const direction = camera.getWorldDirection(new THREE.Vector3())
    state.origins = state.tags.map(tag => {
      const mouse = tag.position.clone().project(camera)
      const front = tag.position.clone().sub(camera.position).setY(0).angleTo(direction.setY(0)) < Math.PI / 2
      return {
        position: tag.position.clone(),
        normal: tag.normal.clone(),
        id: tag.id,
        front,  
        left: (   mouse.x + 1 ) / 2 * 100,
        top:  ( - mouse.y + 1 ) / 2 * 100,
        destroying: tag.destroying,
      }
    })
    origins.$set({ origins: state.origins })
  }

  const updateTags = () => {
    if (state.forbidden || !state.enabled) return
    if (state.timeoutId) clearTimeout(state.timeoutId)
    state.timeoutId = setTimeout(() => {
      state.timeoutId = undefined
      const adds = getTags().filter(tag => {
        if (state.tags.find(_tag => tag.id === _tag.id)) return false
        else return true
      })
      if (adds.length) {
        state.tags = state.tags.concat(adds)
        updateOrigins()
      }
    }, wait)
  }

  const getTags = () => {
    const { clientWidth, clientHeight } = five.getElement()
    const tags = [...state.tags]
    const camera = five.camera
    const frustum = new THREE.Frustum()
    const projScreenMatrix = new THREE.Matrix4()
    const direction = camera.getWorldDirection(new THREE.Vector3())
    projScreenMatrix.multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    )
    frustum.setFromProjectionMatrix(projScreenMatrix)

    const points = state.data.reduce((result, point) => {
      if (tags.find(_point => point.id === _point.id)) return result
      const distance = camera.position.clone().setY(1.4).distanceTo(point.position)

      const _point = Object.assign({}, point, { distance })
      if (distance < minDistance || distance > maxDistance) return result

      if (!frustum.containsPoint(point.position)) return result

      const v = point.position.clone().sub(camera.position).setY(0)

      if (
        v.angleTo(point.normal) > Math.PI * 1 / 4 &&
        v.angleTo(point.normal) < Math.PI * 3 / 4
      ) return result

      const mouse = point.position.clone().project(camera)
      if (!tags.every(_point => {
        const visible = _point.position.clone().sub(camera.position).setY(0).angleTo(direction.setY(0)) < Math.PI / 2
        if (!visible) return true
        const _mouse = _point.position.clone().project(camera)
        return Math.sqrt(
          Math.pow((mouse.x - _mouse.x) / 2 * clientWidth, 2) + 
          Math.pow((mouse.y - _mouse.y) / 2 * clientHeight, 2)
        ) > 100
      })) return result

      const index = result.findIndex(one => one.distance > distance)
      if (index === -1) result.push(_point)
      else result.splice(index, 0, _point)
      return result
    }, [])

    for (let i = 0, l = points.length; i < l; i++) {
      if (tags.find(_point => points[i].id === _point.id)) continue

      const mouse = points[i].position.clone().project(camera)
      if (!tags.every(_point => {
        const visible = _point.position.clone().sub(camera.position).setY(0).angleTo(direction.setY(0)) < Math.PI / 2
        if (!visible) return true
        const _mouse = _point.position.clone().project(camera)
        return Math.sqrt(
          Math.pow((mouse.x - _mouse.x) / 2 * clientWidth, 2) + 
          Math.pow((mouse.y - _mouse.y) / 2 * clientHeight, 2)
        ) > 100
      })) continue

      const raycaster = new THREE.Raycaster(
        camera.position.clone().setY(1.4),
        points[i].position.clone().sub(camera.position.clone().setY(1.4)).normalize(),
        0,
        points[i].distance + 0.1
      )
      const [intersect] = five.model.intersectRaycaster(raycaster)
      if (!intersect) continue
      if (points[i].distance - intersect.distance < 0.01) {
        const { position, normal, id, content } = points[i]
        const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(normal, position)
        const right = position.clone().sub(camera.position)
          .cross(new THREE.Vector3(0, 1, 0)).setLength(0.001)
        const square = [
          position.clone(),
          position.clone().add(right),
          position.clone().add(new THREE.Vector3(0, 0.001, 0)).add(right),
          position.clone().add(new THREE.Vector3(0, 0.001, 0)),
        ].map(v => plane.projectPoint(v, new THREE.Vector3()))

        const css3DRender = CSS3DRenderPlugin(five)
        const { container, dispose } = css3DRender.create3DDomContainer(square) || {}
        const app = new Tag({ 
          target: container, 
          props: {
            id,
            content,
            lineZoom: 0.4 * (0.01 + camera.position.distanceTo(position) / maxDistance),
            contentZoom: 0.1 + camera.position.distanceTo(position) / maxDistance,
            upsideDown: position.y > 1.6,
            dispose,
          },
        })
        tags.push({
          position,
          normal,
          square,
          id,
          app,
        })
      }
    }

    return tags
  }

  const load = (data?: Array<PanoSpatialTagPluginDataElement>, enabled: boolean=true) => {
    state.data = data
    state.enabled = enabled
  }

  const enable = () => {
    state.enabled = true
  }

  const disable = () => {
    state.enabled = false
  }

  const dispose = () => {
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
    enable,
    disable,
    dispose,
  }
}

export default PanoSpatialTagPlugin
