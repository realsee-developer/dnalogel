import { Vector3 } from 'three'

export default function getNormal(a: Vector3, b: Vector3, c: Vector3): Vector3 {
  const ab = b.clone().sub(a)
  const ac = c.clone().sub(a)
  const normal = ab.clone().cross(ac)
  return normal
}
