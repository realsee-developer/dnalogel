import { DIRECTION, Point } from "../typings";

export function parseModelTVVideoPoints(points: Point[][] | Record<DIRECTION, Point>[]): Point[][] {
    if (points.length === 0) return []
    if (Array.isArray(points[0])) return points as Point[][]
    let newPoints: Point[][] = []
    points.map(point => {
        const newPoint: Point[] = [point[DIRECTION.TOP_LEFT], point[DIRECTION.BOTTOM_LEFT], point[DIRECTION.BOTTOM_RIGHT], point[DIRECTION.TOP_RIGHT]]
        newPoints.push(newPoint)
    })
    return newPoints
}
