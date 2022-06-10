import type { Vector3 } from 'three'

export default function isNDCPointInScreen(ndcPoint: Vector3) {
  const { x, y, z } = ndcPoint
  if (Math.abs(x) > 1 || Math.abs(y) > 1 || Math.abs(z) > 1) return false
  return true
}
