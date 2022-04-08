import { Vector2, Vector3 } from 'three'

export default function ndc2Screen(ndcPosition: Vector3, containerSize: { width: number; height: number }) {
  const left = ((ndcPosition.x + 1) / 2) * containerSize.width
  const top = (-(ndcPosition.y - 1) / 2) * containerSize.height
  return new Vector2(left, top)
}
