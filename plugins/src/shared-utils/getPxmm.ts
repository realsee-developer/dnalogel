import type { Five } from '@realsee/five'
import { FLOOR_PLAN_ATTACHED_TO } from '../floorplan/constant'

import * as THREE from 'three'

interface GetPxmmOption {
  attachedTo: FLOOR_PLAN_ATTACHED_TO
}

/**
 * 获取「在俯视图」状态下，模型 mm 与屏幕像素 px 的对应关系，即每 mm 对应多少 px
 * @param five five
 */
export default function getPxmm(
  five: Five,
  container: Element,
  floorIndex: number,
  options?: GetPxmmOption,
): number {
  const maxFloorIndex = Math.max(...five.work.observers.map((ob) => ob.floorIndex))
  function getFloorY(floorIndex: number) {
    return floorIndex > maxFloorIndex
      ? five.model.bounding.max.y
      : Math.max(
          ...five.work.observers
            .filter((ob) => ob.floorIndex === floorIndex)
            .map((ob) => ob.standingPosition.y),
        )
  }
  const currentFloorY = getFloorY(floorIndex)
  const nextFloorY = getFloorY(floorIndex + 1)
  const floorY = options?.attachedTo === FLOOR_PLAN_ATTACHED_TO.CEILING ? nextFloorY : currentFloorY
  const originPosition = new THREE.Vector3(0, floorY, 0)
  const originPositionXUnit = new THREE.Vector3(1, floorY, 0)
  const mouse = originPosition.clone().project(five.camera)
  const xUnitMouse = originPositionXUnit.clone().project(five.camera)
  const pxmm =
    Math.abs((xUnitMouse.x - mouse.x) / 1000) * (container.getBoundingClientRect().width / 2)
  return pxmm
}
