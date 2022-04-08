import { Vector2 } from 'three'

/**
 * 获取一点对于线段上最近的一点，
 * 如果可以是过直线垂线的垂足，不行的话取线段的两端
 * @param point
 * @param linePoints
 * @return
 */
export function closestPointOnLine(point: Vector2, linePoints: Vector2[]) {
  const tA = point.x - linePoints[0].x
  const tB = point.y - linePoints[0].y
  const tC = linePoints[1].x - linePoints[0].x
  const tD = linePoints[1].y - linePoints[0].y

  // 设线段为 AB 线段，线段外一点为 P
  // tDot = AP 向量与 AB 向量乘积，tLenSq 为 |AB|平方。
  // tParam 是 AP 向量在 AB 向量投影向量 AC 与 AB 向量的比。
  const tDot = tA * tC + tB * tD
  const tLenSq = tC * tC + tD * tD
  const tParam = tDot / tLenSq

  let tXx: number, tYy: number

  if (tParam < 0 || samePointAt(linePoints[0], linePoints[1])) {
    tXx = linePoints[0].x
    tYy = linePoints[0].y
  } else if (tParam > 1) {
    tXx = linePoints[1].x
    tYy = linePoints[1].y
  } else {
    tXx = linePoints[0].x + tParam * tC
    tYy = linePoints[0].y + tParam * tD
  }

  return new Vector2(tXx, tYy)
}

/**
 * 检查两个点是否位置相同
 * point: { x: number, y: number }
 * @param  point1
 * @param  point2
 * @return
 */
export function samePointAt(point1: Vector2, point2: Vector2) {
  return point1.x === point2.x && point1.y === point2.y
}
