import type { Five } from '@realsee/five'
import type { Vector2Position } from '../../typings/math.type'
import type { FloorplanData, FloorplanBounding } from '../typings/floorplanData'

export function pathD(
  points: Vector2Position[],
  options: {
    needZ?: boolean
    needA?: Record<number, string>
    format?: (vector: Vector2Position) => Vector2Position
  } = {},
) {
  let d = ''
  const { needZ, needA } = options
  const _points = needZ ? points.slice().concat(points[0]) : points.slice()

  _points.forEach((_point, index) => {
    const { x, y } = options.format ? options.format(_point) : _point
    const point = x + ',' + y
    if (index === 0) {
      d += 'M' + point
      return d
    }
    if (needA?.[index]) {
      d += 'A' + needA[index] + ',' + point
      return d
    }
    d += 'L' + point
    return d
  })
  return d + (needZ ? 'Z' : '')
}

/** 把户型图上点点位转换到 SVG 上的点位 */
export default function formatFloorplanPoint({ x, y }: Vector2Position, bounding: FloorplanBounding) {
  const { max, min } = bounding
  return { x: x - min.x, y: max.y - y }
}

/** 模型坐标转户型图坐标 */
export function modelPosition2FloorplanPosition(
  position: { x: number; y: number; z: number },
  floorplanData: FloorplanData,
) {
  const x = position.x * 1000 + floorplanData.bounding.origin.x
  const y = -position.z * 1000 + floorplanData.bounding.origin.y
  return { x, y }
}

/** 户型图点位转在图片上的相对坐标 */
export function floorplanPosition2ImagePosition(position: { x: number; y: number }, floorplanData: FloorplanData) {
  const bounding = floorplanData.bounding
  const boundingWidth = bounding.max.x - bounding.min.x
  const boundingHeight = bounding.max.y - bounding.min.y
  return {
    x: (position.x - bounding.min.x) / boundingWidth,
    y: (bounding.max.y - position.y) / boundingHeight,
  }
}

/** 求三维坐标点所在的楼层 */
export function getFloorIndexFromModelPosition(position: { x: number; y: number; z: number }, five: Five) {
  const floorIndex = Math.max(
    ...five.work.observers.map((observer) => {
      if (position.z >= observer.standingPosition.z) return observer.floorIndex
      return 0
    }),
  )
  return floorIndex
}
