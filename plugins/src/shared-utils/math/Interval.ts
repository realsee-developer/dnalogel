/** 一维区间 */
class Interval {
  public min: number
  public max: number
  public isInterval = true

  public constructor(min = 0, max = 0) {
    this.min = min
    this.max = max
  }

  public fromArray(array: number[]): Interval {
    this.min = array[0]
    this.max = array[1]
    return this
  }

  /** 两个区间是否重叠 */
  public isOverlap(target: Interval): boolean {
    // 两个区间最大值中的最小值小于两个区间最小值中的最大值时，两个区间没有交集
    return Math.min(this.max, target.max) < Math.max(this.min, target.min)
  }

  /** 是否包含区间 */
  public contains(target: Interval): boolean {
    return this.min < target.min && this.max > target.max
  }
}

export { Interval }