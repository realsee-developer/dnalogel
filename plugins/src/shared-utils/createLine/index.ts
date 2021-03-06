import { Line } from '@realsee/five/line'
import { Vector3 } from 'three'

export default function createLine(
  point1: Vector3,
  point2: Vector3,
  color: Vector3 = new Vector3(1, 1, 1),
  dashed: boolean = false,
): Line {
  const line = new Line(point1, point2)
  line.setMaterial({ dashed, color, linewidth: 1 })
  line.remove(line.points)
  return line
}
