import * as THREE from 'three'

const { Vector2 } = THREE

/**
 * 计算 three 中的 mouse 的值
 * @param  {{x:Number, y:Number}} mouseXY 鼠标相对屏幕位置
 * @param  {Element}              element canvas元素（three的展示元素）
 */
export default function calculateThreeMouse(mouseXY, element) {
  const { offsetWidth: width, offsetHeight: height } = element
  const { top, left } = element.getBoundingClientRect()

  return Object.assign(new Vector2(), {
    x: ((mouseXY.x - left) / width) * 2 - 1,
    y: (-(mouseXY.y - top) / height) * 2 + 1,
  })
}
