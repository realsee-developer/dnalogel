import Line from '../Model/line'
import Magnifier from '../Modules/Magnifier'
import FiveHelper from '../Modules/FiveHelper'

import { Group } from 'three'
import { Model } from '../Model'
import { preventDefault } from '../utils/ironbox'
import { PluginEvent } from '../typings/event.type'
import { Five, Intersection, IntersectMeshInterface, Subscribe } from '@realsee/five'
import { UserDistanceItem } from '../utils/distanceDom'

export interface IControllerParams {
  five: Five
  group: Group
  model: Model
  mouseGroup: Group
  container: Element
  magnifier: Magnifier
  fiveHelper: FiveHelper
  hook: Subscribe<PluginEvent>
  userDistanceItemCreator?: () => UserDistanceItem
}

export default abstract class BaseController {
  protected five: Five
  protected group: Group
  protected model: Model
  protected disposed = false
  protected mouseGroup: Group
  protected container: Element
  protected fiveHelper: FiveHelper
  protected hook: IControllerParams['hook']
  protected magnifier: IControllerParams['magnifier']
  protected userDistanceItemCreator: IControllerParams['userDistanceItemCreator']

  public constructor(params: IControllerParams) {
    // ==================== Params ====================
    this.five = params.five
    this.hook = params.hook
    this.model = params.model
    this.magnifier = params.magnifier
    this.container = params.container
    this.fiveHelper = params.fiveHelper
    this.userDistanceItemCreator = params.userDistanceItemCreator
    // ==================== Groups ====================
    this.group = params.group
    this.mouseGroup = params.mouseGroup

    const fiveElement = this.five.getElement()
    if (fiveElement) {
      fiveElement.addEventListener('touchstart', preventDefault)
      fiveElement.addEventListener('contextmenu', preventDefault)
    }
  }

  protected removeLine(line: Line) {
    this.group.remove(line.mesh, line.lightMesh)
    line.distanceItem.remove()
    this.five.needsRender = true
  }

  protected updateDistanceUI = () => {
    this.model.lines.forEach((line) => line.distanceItem.update(this.five))
  }

  protected updateMouseGroup(intersection: Intersection, mesh?: IntersectMeshInterface) {
    if (!intersection) return this.mouseGroup
    // ============ update mouseGroup position ============
    const adsorbentPoint = this.fiveHelper.getAdsorbentPoint(intersection)
    const viewPosition = adsorbentPoint ? adsorbentPoint : intersection.point
    this.mouseGroup.position.copy(viewPosition)
    // ============ update mouseGroup quaternion ============
    if (mesh) {
      this.mouseGroup.quaternion.copy(mesh.quaternion)
    } else if (intersection.face) {
      const normal = intersection.face.normal
      const positionVector = normal.clone().multiplyScalar(0.05)
      const position = intersection.point.clone().add(positionVector)
      const lookAtVector = position.clone().add(positionVector)
      this.mouseGroup.lookAt(lookAtVector)
    }
    return this.mouseGroup
  }

  protected dispose() {
    this.disposed = true
    this.magnifier.dispose()
    this.model.lines.forEach((line) => this.removeLine(line))

    const fiveElement = this.five.getElement()
    if (fiveElement) {
      fiveElement.removeEventListener('touchstart', preventDefault)
      fiveElement.removeEventListener('contextmenu', preventDefault)
    }
  }
}
