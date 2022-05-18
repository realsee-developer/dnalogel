import type { Vector2 } from 'three'
import type Point from '../Model/point'
import type { Five } from '@realsee/five'
import ndc2Screen from './ndc2Screen'
import isNDCPointInScreen from './isNDCPointInScreen'

/**
 * @param tapPoint 注意这里的坐标是相对于 FiveElement 的
 */
// eslint-disable-next-line max-params
export function findClosestPoint(five: Five, points: Point[], tapPoint: Vector2, maxDistance?: number) {
  const container = five.getElement()
  if (!container) return null
  if (points.length === 0) return null

  const containerSize = { width: container.clientWidth, height: container.clientHeight }
  const ndcPoints = points
    .map((point) => {
      const ndcPosition = point.position.clone().project(five.camera)
      if (!isNDCPointInScreen(ndcPosition)) return { distance: Infinity, point }
      const screenPosition = ndc2Screen(ndcPosition, containerSize)
      const distance = screenPosition.distanceTo(tapPoint)
      return { distance, point }
    })
    .sort((a, b) => a.distance - b.distance)
  if (typeof maxDistance === 'number' && ndcPoints[0].distance > maxDistance) return null
  return ndcPoints[0]
}
