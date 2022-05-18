import type * as THREE from 'three'
import { formatRad } from './formatRad'

/** 单位向量转换成坐标 */
function vectorTocoordinates(vector: THREE.Vector3): { longitude: number; latitude: number } {
  return {
    longitude: formatRad(-Math.atan2(vector.x, -vector.z)),
    latitude: -Math.asin(vector.y / 1),
  }
}

export { vectorTocoordinates }
