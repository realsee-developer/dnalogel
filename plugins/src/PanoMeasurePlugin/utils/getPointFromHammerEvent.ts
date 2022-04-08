import Hammer from 'hammerjs'
import { Vector2 } from 'three'

/**
 * 从 Hammer 事件中获取操作的点在交互 DOM 中的位置
 * @ignore TODO: make a suitable name
 */
export function getPointFromHammerEvent(event: typeof Hammer['Input']) {
  // clientX 与 clientY 是相对 document 的，需要转换成相对于 target 的坐标
  const { x: clientX, y: clientY } = event.center
  const { clientWidth, clientHeight } = event.target
  const clientRect = event.target.getBoundingClientRect()
  const position = new Vector2(clientX, clientY).sub(new Vector2(clientRect.left, clientRect.top))
  const mouse = new Vector2((position.x / clientWidth) * 2 - 1, -(position.y / clientHeight) * 2 + 1)
  return { point: position, ndcPoint: mouse }
}
