import { Interval } from './'

/** 矩形的数学方法合集 */
class Rectangle {
  public min: { x: number; y: number }
  public max: { x: number; y: number }
  public xInterval: Interval
  public yInterval: Interval
  public isRectangle = true

  public constructor(min: { x: number; y: number }, max: { x: number; y: number }) {
    this.min = min
    this.max = max
    this.xInterval = new Interval(this.min.x, this.max.x)
    this.yInterval = new Interval(this.min.y, this.max.y)
  }

  /** 是否与矩形是否重叠 */
  public isOverlapWithRectangle(target: Rectangle): boolean {
    // X 轴投影无重叠 && 在 Y 轴投影无重叠
    return (
      !this.xInterval.isOverlap(target.xInterval) && !this.yInterval.isOverlap(target.yInterval)
    )
  }

  /** 是否包含目标矩形 */
  public containsRect(target: Rectangle): boolean {
    return this.xInterval.contains(target.xInterval) && this.yInterval.contains(target.yInterval)
  }
}

export { Rectangle }