import Line from './line'
import Point from './point'
import uuid from '../../shared-utils/uuid'
import { PolylineJson, PolylineCompletelyJson } from '../typings/data'

export class Polyline {
  public readonly id = uuid()
  public points: Point[] = []
  public readonly lines: Line[] = []

  public push(line: Line) {
    const next = this.getNext(line)
    if (!next) throw new Error('当前线段于上一条线段无法构成折线')
    this.lines.push(next.line)
    this.points.push(...next.points)
    return this.lines.length
  }

  public pop() {
    const lastPoint = this.lines.pop()
    const polylineLength = this.lines.length
    if (polylineLength === 0) this.points.slice(0, this.points.length)
    else this.points.pop()
    return lastPoint
  }

  public getNext(line: Line) {
    const lastPoint = this.points.slice(-1)[0]
    if (!lastPoint) return { line: line, points: line.points }
    if (!line.points.includes(lastPoint)) return null
    const nextPoint = line.points.find((point) => point !== lastPoint)
    if (!nextPoint) return null
    return { line: line, points: [nextPoint] }
  }

  public toJson(): PolylineJson {
    return {
      id: this.id,
      lines: this.lines.map((line) => line.id),
      points: this.points.map((point) => point.id),
    }
  }

  public toCompletelyJson(): PolylineCompletelyJson {
    return {
      id: this.id,
      points: this.points.map((point) => point.toJson()),
      lines: this.lines.map((line) => line.toCompletelyJson()),
    }
  }
}
