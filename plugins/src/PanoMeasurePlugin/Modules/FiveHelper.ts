import { Line3, Vector3 } from 'three'
import { Five, Intersection } from '@realsee/five'

export default class FiveHelper {
  public edges: Line3[] = []
  private five: Five

  public constructor(five: Five) {
    this.five = five
    this.five.model.loaded ? this.onModelLoaded() : this.five.on('modelLoaded', this.onModelLoaded)
  }

  public dispose() {}

  public getAdsorbentPoint(intersection: Intersection): Vector3 | null {
    if (this.edges.length === 0) return null
    let distance = Infinity
    let closestPoint: Vector3 | undefined
    this.edges.forEach((line) => {
      const _closestPoint = line.closestPointToPoint(intersection.point, true, new Vector3())
      const _distance = _closestPoint.distanceTo(intersection.point)
      if (_distance < distance) {
        closestPoint = _closestPoint
        distance = _distance
      }
    })
    if (distance > 0.1) return null
    return closestPoint || null
  }

  /** 模型加载后获取折线 */
  private onModelLoaded = () => {
    if (!this.five.model) return
    this.edges = this.five.model.getEdges()
  }
}
