import * as THREE from 'three'

interface ObjectIntersectDefaultOptions {
  /** XZ 轴平面的大小，分别配置长和宽 */
  planeSize: number[]
}

export interface ObjectIntersectOptions extends Partial<ObjectIntersectDefaultOptions> {
  planTexture: THREE.Texture
}

export class ObjectIntersect extends THREE.Group {
  public planMesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>
  public arrowMesh: THREE.Mesh<THREE.TubeGeometry, THREE.MeshBasicMaterial>
  private config: Required<ObjectIntersectOptions>

  public constructor(options: ObjectIntersectOptions) {
    super()
    const defaultOptions: ObjectIntersectDefaultOptions = {
      planeSize: [0.5, 0.5],
    }
    this.config = { ...defaultOptions, ...options }

    const planGeometry = new THREE.PlaneGeometry(...this.config.planeSize)
    const planMaterial = new THREE.MeshBasicMaterial({
      map: this.config.planTexture,
      transparent: true,
      depthTest: false,
    })
    this.planMesh = new THREE.Mesh(planGeometry, planMaterial)

    const arrowPath = new THREE.CurvePath<THREE.Vector3>()
    arrowPath.add(new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0.1)))
    const arrowGeometry = new THREE.TubeGeometry(arrowPath, 10, 0.005)
    const arrowMaterial = new THREE.MeshBasicMaterial({
      color: 0x33f1ef,
      depthTest: false,
      side: THREE.DoubleSide,
    })
    this.arrowMesh = new THREE.Mesh(arrowGeometry, arrowMaterial)

    this.add(this.planMesh, this.arrowMesh)
  }

  public appendTo(parent: THREE.Object3D) {
    parent.add(this)
  }
}
