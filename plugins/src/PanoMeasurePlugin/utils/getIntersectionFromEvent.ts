import type Hammer from 'hammerjs'
import type { Five, Intersection } from '@realsee/five'
import { Raycaster } from 'three'
import { getPointFromHammerEvent } from './getPointFromHammerEvent'

/** 通过鼠标事件或者触摸事件，获取当前点击屏幕关联的射线与模型的交点 */
export function getIntersectionFromEvent(five: Five, event: typeof Hammer['Input']): Intersection[] {
  const mouse = getPointFromHammerEvent(event).ndcPoint
  const raycaster = new Raycaster()
  raycaster.setFromCamera(mouse, five.camera)
  return five.model.intersectRaycaster(raycaster)
}
