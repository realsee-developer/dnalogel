import * as THREE from 'three'
import { Group, Raycaster, Vector3 } from 'three'
import type { FivePlugin, Intersection } from '@realsee/five'
import createLine from '../shared-utils/createLine'

export interface PanoCursorRaycasterPluginParameterType {}
export interface PanoCursorRaycasterPluginExportType {
  /**
   * @description: 获取鼠标与模型的焦点位置
   * @return {Intersection | null} 鼠标与模型的焦点位置
   */
  intersection: () => Intersection | null

  /**
   * @description: 辅助坐标轴
   * @param {Vector3} point: 坐标轴原点的位置
   * @param {number} length: 坐标轴线长度，单位：米，默认值：2
   * @param {number} fixDistance: 为避免被模型遮挡，默认向camera方向移动0.1m，默认值：0.1
   * @return {{clear: () => void; pointAxesHelperMesh: THREE.Group}} clear: 清理函数；pointAxesHelperMesh: 辅助坐标轴mesh
   */
  // eslint-disable-next-line prettier/prettier
  pointAxesHelper: (point: Vector3, length?: number, fixDistance?: number) => { clear: () => void; pointAxesHelperMesh: Group }

  /**
   * @description: 将一个点在camera和点的向量上移动。传入点的位置和相对移动的距离，返回一个新的位置
   * @param {Vector3} point: 点
   * @param {number} distance: 向camera相对移动的距离（正方向为：点 -> 摄像头）
   * @return {Vector3} 计算移动后的位置
   */
  movePointTowardsCamera: (point: Vector3, distance: number) => Vector3

  /**
   * @description: 某个点是否可见
   * @param {Vector3} point: 要检测的点
   * @param {number} distanceError: 允许的误差，如果点有可能打在模型后，则传入一个误差值，通常为0.01
   * @return {boolean}: 是否可见
   */
  canSeePoint: (point: Vector3, distanceError?: number) => boolean

  /**
   * @description: 清理函数
   * @return {() => void} 清理函数
   */
  destroy: () => void
}

interface PanoCursorRaycasterPluginState {
  intersection: Intersection | null
  disposers: (() => any)[]
}

/**
 * 全景中对当前鼠标的位置进行碰撞监测
 * @param five
 * @return
 */
export const PanoCursorRaycasterPlugin: FivePlugin<
    PanoCursorRaycasterPluginParameterType,
    PanoCursorRaycasterPluginExportType
    > = (five) => {
  const state: PanoCursorRaycasterPluginState = {
    intersection: null,
    disposers: [],
  }

  const updateIntersection = (intersection: Intersection) => {
    state.intersection = intersection
  }

  const clearIntersection = () => {
    state.intersection = null
  }

  five.on('modelLoaded', () => {
    five.on('intersectionOnModelUpdate', updateIntersection)
    five.on('intersectionHidden', clearIntersection)
  })

  five.on('dispose', () => {
    five.off('intersectionOnModelUpdate', updateIntersection)
    five.off('intersectionHidden', clearIntersection)
  })

  const pointAxesHelper = (
      point: Vector3,
      length: number = 2,
      fixDistance: number = 0.1,
  ): { clear: () => void; pointAxesHelperMesh: THREE.Group } => {
    const halfLength = length / 2
    const helperCenterPoint = movePointTowardsCamera(point, fixDistance)
    const p = helperCenterPoint
    const pointAxesHelperMesh = new Group()
    pointAxesHelperMesh.add(
        createLine(
            new Vector3(p.x + halfLength, p.y, p.z),
            new Vector3(p.x - halfLength, p.y, p.z),
            new Vector3(1, 0, 0),
        ),
        createLine(
            new Vector3(p.x, p.y + halfLength, p.z),
            new Vector3(p.x, p.y - halfLength, p.z),
            new Vector3(0, 1, 0),
        ),
        createLine(
            new Vector3(p.x, p.y, p.z + halfLength),
            new Vector3(p.x, p.y, p.z - halfLength),
            new Vector3(0, 0, 1),
        ),
    )
    five.scene.add(pointAxesHelperMesh)
    five.needsRender = true

    // 清理函数
    const clear = () => {
      five.scene.remove(pointAxesHelperMesh)
    }
    state.disposers.push(clear)
    return { clear, pointAxesHelperMesh }
  }

  const canSeePoint = (point: Vector3, distanceError = 0): boolean => {
    const cameraPosition = five?.camera?.position
    if (!cameraPosition) return false
    const distance = point.distanceTo(cameraPosition)
    const direction = point.sub(cameraPosition).normalize()
    const raycaster = new Raycaster(cameraPosition, direction)
    const intersection = five.model.intersectRaycaster(raycaster)?.[0]
    return !(intersection && intersection.distance + distanceError < distance);

  }

  const intersection = () => {
    return state.intersection
  }

  const destroy = () => {
    state.disposers?.forEach?.((d) => d?.())
    five.off('intersectionOnModelUpdate', updateIntersection)
    five.off('intersectionHidden', clearIntersection)
  }

  // 逐步取代 destroy ,向下兼容
  const dispose = destroy

  const movePointTowardsCamera = (point: Vector3, distance: number) => {
    // 原点 position
    const originPoint = point.clone()
    // camera position
    const cameraPosition = five.camera.position.clone()
    // 移动的向量
    const fixVector3 = cameraPosition.sub(originPoint).setLength(distance)
    // 向量相加
    return fixVector3.add(originPoint)
  }

  return { intersection, pointAxesHelper, movePointTowardsCamera, destroy, dispose, canSeePoint }
}

export default PanoCursorRaycasterPlugin
