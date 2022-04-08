import Line from './line'
import { Vector3 } from 'three'
import { PluginData } from '../typings/data'
import uuid from '../../shared-utils/uuid'
import removeArrayItem from '../../shared-utils/removeArrayItem'

type IPointData = PluginData['points'][0]
export default class Point {
  public id: string
  public lines: Line[]
  public position: Vector3
  public readonly type = 'point'

  public constructor(position: Vector3 | number[]) {
    this.id = uuid()
    this.lines = []
    this.position = new Vector3()
    position instanceof Vector3 ? this.position.copy(position) : this.position.fromArray(position)
  }

  public toJson(): IPointData {
    return { id: this.id, lines: this.lines.map(({ id }) => id), position: this.position.toArray() }
  }

  public addLine(line: Line) {
    this.lines.push(line)
  }

  public removeLine(line: Line) {
    removeArrayItem(line, this.lines)
  }

  public clone() {
    const point = new Point(this.position)
    return point
  }
}
