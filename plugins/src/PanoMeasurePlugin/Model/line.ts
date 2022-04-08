import { Model } from '.'
import Point from './point'
import { LineJson } from '..'
import { Polyline } from './polyline'
import uuid from '../../shared-utils/uuid'
import { creatLineMesh } from '../utils/line'
import { LineCompletelyJson } from '../typings/data'
import { Line as FiveLine } from '@realsee/five/line'
import { Subscribe, SubscribeEventMap } from '@realsee/five'
import { creatDistanceItem, DistanceItem } from '../utils/distanceDom'

export interface ILineHook extends SubscribeEventMap {
  selected: (line: Line) => void
}

export default class Line {
  public id: string
  public selected = false
  public readonly type = 'line'
  public readonly model: Model
  public readonly mesh: FiveLine
  public readonly points: Point[]
  public readonly lightMesh: FiveLine
  public readonly hook: Subscribe<ILineHook>
  public readonly distanceItem: DistanceItem

  private polyline?: Polyline

  public constructor(point: Point, anotherPoint: Point, model: Model) {
    this.id = uuid()
    this.model = model
    if (point.id === anotherPoint.id) throw new Error('无效的线段, 一个点无法构成线段')

    this.hook = new Subscribe<ILineHook>()
    this.points = [point, anotherPoint]
    this.mesh = creatLineMesh(this, 'normal')
    this.lightMesh = creatLineMesh(this, 'light')
    this.distanceItem = creatDistanceItem({
      line: this,
      clickCallback: () => this.hook.emit('selected', this),
      userDistanceItem: this.model.params.userDistanceItemCreator
        ? this.model.params.userDistanceItemCreator()
        : undefined,
    })
    point.lines.push(this)
    anotherPoint.lines.push(this)
  }

  public clear(): void {
    this.selected = false
    this.polyline = undefined
  }

  public getPolyline(): Polyline {
    if (this.polyline) return this.polyline
    const modelPolyline = this.model.polylines.find((polyline) => polyline.lines.includes(this))
    this.polyline = modelPolyline
    if (modelPolyline) return modelPolyline
    const polyline = new Polyline()
    polyline.push(this)
    return polyline
  }

  public findAnotherPoint(point: Point) {
    return this.points.find(({ id }) => id !== point.id)
  }

  public toJson(): LineJson {
    return { id: this.id, points: this.points.map(({ id }) => id) }
  }

  public toCompletelyJson(): LineCompletelyJson {
    return { id: this.id, points: this.points.map((point) => point.toJson()) }
  }

  public clone() {
    const line = new Line(this.points[0].clone(), this.points[1].clone(), this.model)
    return line
  }
}
