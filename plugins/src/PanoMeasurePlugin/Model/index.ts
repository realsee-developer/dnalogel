import Line from './line'
import Point from './point'
import { Subscribe, SubscribeEventMap } from '@realsee/five'
import { PluginData } from '../typings/data'
import removeArrayItem from '../../shared-utils/removeArrayItem'
import { Polyline } from './polyline'
import { UserDistanceItem } from '../utils/distanceDom'

interface IModelEvent extends SubscribeEventMap {
  /** 新增线条
   * @param line 被创建的线条
   */
  lineAdded: (line: Line) => void

  /** 删除线条
   * @param lines 被删除的线条数组
   */
  lineRemoved: (lines: Line) => void
}

export interface ModelParams {
  userDistanceItemCreator?: () => UserDistanceItem
}

export class Model {
  public readonly lines: Line[] = []
  public readonly points: Point[] = []
  public readonly params: ModelParams
  public readonly polylines: Polyline[] = []
  public readonly hook = new Subscribe<IModelEvent>()

  public constructor(params: ModelParams) {
    this.params = params
  }

  public addLine(line: Line) {
    const [startPoint, endPoint] = line.points
    if (!startPoint || !endPoint) return this
    if (!this.includes(startPoint)) this.points.push(startPoint)
    if (!this.includes(endPoint)) this.points.push(endPoint)
    this.lines.push(line)
    const lastPolyline = this.polylines.find((polyline) => !!polyline.getNext(line))
    if (lastPolyline) {
      lastPolyline.push(line)
    } else {
      const polyline = new Polyline()
      polyline.push(line)
      this.polylines.push(polyline)
    }
    this.hook.emit('lineAdded', line)
  }

  public removeLineByID(lineID: string) {
    const line = this.getLineByID(lineID)
    if (line) this.removeLine(line)
  }

  public removeLine(line: Line) {
    // handle polyline
    const polyline = this.polylines.find((polyline) => polyline.lines.includes(line))
    if (polyline) {
      if (polyline.lines.slice(-1)[0] !== line) throw new Error('不能从中间删除线段')
      polyline.pop()
      if (polyline.lines.length === 0) removeArrayItem(polyline, this.polylines)
    }

    const [point, anotherPoint] = line.points
    if (point.lines.length === 0) removeArrayItem(point, this.points)
    if (anotherPoint.lines.length === 0) removeArrayItem(anotherPoint, this.points)

    removeArrayItem(line, this.lines)
    line.clear()
    this.hook.emit('lineRemoved', line)
    return this
  }

  public mergeModel(model: Model) {
    model.lines.forEach((line) => this.addLine(line))
  }

  public includes(item: Point | Line) {
    if (item.type === 'point') {
      return this.points.find(({ id }) => id === item.id) !== undefined
    } else if (item.type === 'line') {
      return this.lines.find(({ id }) => id === item.id) !== undefined
    }
  }

  public getPointByID(id: string) {
    return this.points.find(({ id: _id }) => _id === id)
  }

  public getLineByID(id: string) {
    return this.lines.find(({ id: _id }) => _id === id)
  }

  public getClosestPoint() {}

  public parse(data: PluginData) {
    const points = data.points.map(({ id, position }) => {
      const point = new Point(position)
      point.id = id
      return point
    })
    const lines = data.lines.map((data) => {
      const [pointID, anotherPointID] = data.points
      const point = this.getPointByID.call({ points }, pointID)
      const anotherPoint = this.getPointByID.call({ points }, anotherPointID)
      if (!point || !anotherPoint) throw new Error('线上的点不存在')
      const line = new Line(point, anotherPoint, this)
      line.id = data.id
      return line
    })
    const polylines = data.polylines.map((polylineJson) => {
      const polyline = new Polyline()
      polylineJson.lines.forEach((lineID) => {
        const line = lines.find(({ id }) => id === lineID)
        line && polyline.push(line)
      })
      return polyline
    })
    this.points.splice(0, this.points.length, ...points)
    this.lines.splice(0, this.lines.length, ...lines)
    this.polylines.splice(0, this.polylines.length, ...polylines)
    return this
  }

  public toJson(): PluginData {
    return {
      points: this.points.map((point) => point.toJson()),
      lines: this.lines.map((line) => line.toJson()),
      polylines: this.polylines.map((polyline) => polyline.toJson()).filter((polylines) => polylines.lines.length > 0),
    }
  }
}
