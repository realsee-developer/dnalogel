import type Line from '../Model/line'
import type Point from '../Model/point'

export function findAssociatedLines(line: Line) {
  // 找跟这个线段相邻的线
  const mergeNextLine = (point: Point, nextIndex: number, target: Line[]): Line[] => {
    const nextLine = point.lines.find((line) => {
      const pointIndex = line.points.findIndex(({ id }) => id === point.id)
      if (pointIndex === nextIndex) return false
      return true
    })
    if (!nextLine) return target
    const nextPoint = nextLine.points[nextIndex]
    if (!nextPoint) return target
    return mergeNextLine(nextPoint, nextIndex, target.concat(nextLine))
  }
  const rightLines = mergeNextLine(line.points[0], 1, [])
  const leftLines = mergeNextLine(line.points[0], 0, [])
  const lines: Line[] = rightLines.concat(leftLines)

  return lines
}
