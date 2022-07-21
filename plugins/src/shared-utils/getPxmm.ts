import type { Five } from '@realsee/five'
import { FLOOR_PLAN_ATTACHED_TO } from '../floorplan/constant'

import * as THREE from 'three'

interface GetPxmmOption {
  attachedTo: FLOOR_PLAN_ATTACHED_TO
}

/** 获取当前楼层地面的 Y 值 */
export function getFloorY(five: Five, floorIndex: number) {
  const maxFloorIndex = Math.max(...five.work.observers.map((ob) => ob.floorIndex))
  return floorIndex > maxFloorIndex
    ? five.model.bounding.max.y
    : Math.max(
        ...five.work.observers
          .filter((ob) => ob.floorIndex === floorIndex)
          .map((ob) => ob.standingPosition.y),
      )
}

/** 获取当前吸附类型的 Y 值
 * * FLOOR_PLAN_ATTACHED_TO.FLOOR：当前楼层地板的 Y 
 * * FLOOR_PLAN_ATTACHED_TO.BOUNDING_CENTER：当前模型中心的 Y 
 * * FLOOR_PLAN_ATTACHED_TO.BOUNDING_CENTER：当前楼层天花板的 Y 
*/
export function getAttachedY(five: Five, floorIndex: number, attachedTo: FLOOR_PLAN_ATTACHED_TO = FLOOR_PLAN_ATTACHED_TO.BOUNDING_CENTER) {
  const currentFloorY = getFloorY(five, floorIndex)
  const nextFloorY = getFloorY(five, floorIndex + 1)
  if (attachedTo === FLOOR_PLAN_ATTACHED_TO.BOUNDING_CENTER)
    return (five.model.bounding.max.y + five.model.bounding.min.y) / 2
  else if (attachedTo === FLOOR_PLAN_ATTACHED_TO.CEILING) return nextFloorY
  else return currentFloorY
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
  const y = getAttachedY(five, floorIndex, options?.attachedTo)
  const originPosition = new THREE.Vector3(0, y, 0)
  const originPositionXUnit = new THREE.Vector3(1, y, 0)
  const mouse = originPosition.clone().project(five.camera)
  const xUnitMouse = originPositionXUnit.clone().project(five.camera)
  const pxmm =
    Math.abs((xUnitMouse.x - mouse.x) / 1000) * (container.getBoundingClientRect().width / 2)
  return pxmm
}
