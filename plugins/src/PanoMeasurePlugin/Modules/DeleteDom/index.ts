import type Line from '../../Model/line'
import type { Five } from '@realsee/five'
import type Point from '../../Model/point'
import deleteSvg from './_Assets/delete.svg'
import deleteBg from './_Assets/delete_bg.png'
import deleteHoverBg from './_Assets/delete_hover_bg.png'

export default class DeleteDom {
  public visible = false

  private five: Five
  private lines: Line[] = []
  private points: Point[] = []
  private onClick: (e: MouseEvent) => void
  private cancelDelete: (e: any) => void
  private content = document.createElement('div')
  private container = document.createElement('div')
  private masking = document.createElement('div')

  constructor(five: Five, opts?: { onClick?: (e: MouseEvent) => void; cancelDelete?: (e: MouseEvent) => void }) {
    this.five = five
    this.onClick = opts?.onClick || (() => void 0)
    this.cancelDelete = opts?.cancelDelete || (() => void 0)
    // container
    this.container.classList.add('fpm__delete')
    this.container.style.opacity = '0'
    this.container.style.position = 'absolute'
    this.container.style.left = '0'
    this.container.style.top = '10px'
    this.container.style.transform = `translate3d(0, 0, 10px)`
    this.container.style.pointerEvents = `none`
    this.container.style.transition = 'top 200ms ease, opacity 200ms ease'
    this.container.style.zIndex = '99'

    // content
    this.content.classList.add('fpm__delete-content')
    this.content.style.width = '62px'
    this.content.style.height = '26px'
    this.content.style.display = 'flex'
    this.content.style.alignItems = 'center'
    this.content.style.justifyContent = 'center'
    this.content.style.transform = 'translate(-50%, -50%)'
    this.content.style.color = '#fff'
    this.content.style.fontSize = '12px'
    this.content.style.lineHeight = '17px'
    this.content.style.borderRadius = '11px'
    this.content.style.backgroundSize = '100% 100%'
    this.content.style.cursor = 'pointer'
    this.content.style.userSelect = 'none'
    this.content.style.backgroundImage = `url(${deleteBg})`
    this.content.innerHTML = `
      ${deleteSvg}
      <span>删除</span>
    `
    this.container.append(this.content)

    const deleteSvgDom = this.content.querySelector<SVGElement>('.fpm__delete-icon')
    if (deleteSvgDom) {
      deleteSvgDom.style.width = '16px'
      deleteSvgDom.style.height = '17px'
      deleteSvgDom.style.marginRight = '1px'
    }

    this.content.addEventListener('click', this.onClick)
    this.content.addEventListener('mouseenter', this.onMouseEnter)
    this.content.addEventListener('mouseleave', this.onMouseLeave)

    // masking
    this.masking.setAttribute('style', 'position: absolute;top: 0;left: 0;bottom: 0;right: 0;pointer-events: none;')
    this.masking.addEventListener('click', this.cancelDelete)
    this.masking.addEventListener('touchstart', this.cancelDelete)
  }

  public dispose() {
    this.content.removeEventListener('click', this.onClick)
    this.content.removeEventListener('mouseenter', this.onMouseEnter)
    this.content.removeEventListener('mouseleave', this.onMouseLeave)
    this.container.remove()

    this.masking.removeEventListener('click', this.cancelDelete)
    this.masking.removeEventListener('touchstart', this.cancelDelete)
    this.masking.remove()
  }

  public appendTo(element: Element) {
    element.append(this.container)
    element.append(this.masking)
    return this
  }

  public setLines(lines: Line[]): this {
    this.lines = lines
    this.points = Array.from(new Set(this.lines.map((line) => [line.points[0], line.points[1]]).flat(1)))
    return this
  }

  public updatePosition() {
    if (this.lines.length === 0) return this
    const points = this.points.map((point) => point.position)
    const ndcPoints = points.map((point) => point.clone().project(this.five.camera))
    if (ndcPoints.some((ndcPoint) => Math.abs(ndcPoint.z) > 1)) return this.hide()
    const xArray = ndcPoints.map((point) => point.x)
    const yArray = ndcPoints.map((point) => point.y)
    const centerX = (Math.min(...xArray) + Math.max(...xArray)) / 2
    const maxY = Math.max(...yArray)

    const wrapper = this.container.parentElement
    if (!wrapper) return this
    const centerScreenX = ((centerX + 1) / 2) * wrapper.clientWidth
    const maxScreenY = (-(maxY - 1) / 2) * wrapper.clientHeight

    let x = centerScreenX
    let y = maxScreenY - 34

    // 只有一条线时且斜率大时删除按钮位于右侧
    if (this.lines.length === 1 && points.length === 2) {
      const k = (yArray[1] - yArray[0]) / (xArray[1] - xArray[0])
      const centerY = (yArray[1] + yArray[0]) / 2
      const centerScreenY = (-(centerY - 1) / 2) * wrapper.clientHeight
      if (Math.abs(k) > 0.4) {
        x = centerScreenX + 57
        y = centerScreenY
      }
    }

    this.container.style.transform = `translate3d(${x}px, ${y}px, 10px)`

    return this.show()
  }

  public hide() {
    this.visible = false
    this.masking.style.pointerEvents = 'none'
    this.container.style.opacity = '0'
    this.container.style.top = '10px'
    this.container.style.pointerEvents = 'none'
    return this
  }

  public show() {
    this.visible = true
    this.masking.style.pointerEvents = 'auto'
    this.container.style.opacity = '1'
    this.container.style.top = '0'
    this.container.style.pointerEvents = 'auto'
    return this
  }

  private onMouseEnter = () => {
    this.content.style.backgroundImage = `url(${deleteHoverBg})`
  }

  private onMouseLeave = () => {
    this.content.style.backgroundImage = `url(${deleteBg})`
  }
}
