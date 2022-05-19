import { Five } from '@realsee/five'
import { Vector2, Vector3 } from 'three'

/** 交换数组元素 */
function exchange(array: Uint8Array, index1: number, index2: number) {
  const value = array[index1]
  array[index1] = array[index2]
  array[index2] = value
}

export interface MagnifierOptions {
  width: number
  height: number
  scale: number
}

export default class Magnifier {
  private five: Five
  private scale: number
  private width: number
  private height: number
  private pixelRatio: number
  private originWidth: number
  private originHeight: number
  private context: CanvasRenderingContext2D
  private canvas = document.createElement('canvas')
  private container?: Element

  public constructor(five: Five, options: MagnifierOptions) {
    if (!five.renderer) throw new Error('Five Render 未初始化')
    this.five = five
    const scale = options.scale
    const pixelRatio = five.renderer.getPixelRatio()
    const originWidth = options.width
    const originHeight = options.height
    const width = originWidth * pixelRatio
    const height = originHeight * pixelRatio
    const magnifier = this.canvas
    const context = this.canvas.getContext('2d')
    if (!context) throw new Error('CANNOT CREATE CONTEXT2D')
    this.scale = scale
    this.context = context
    this.width = width
    this.height = height
    this.originWidth = originWidth
    this.originHeight = originHeight
    this.pixelRatio = pixelRatio
    magnifier.classList.add('plugin-measure-magnifier')
    magnifier.style.position = 'absolute'
    magnifier.style.pointerEvents = 'none'
    magnifier.style.borderRadius = '50%'
    magnifier.style.left = -width / 2 + 'px'
    magnifier.style.top = -height - 90 + 'px'
    magnifier.setAttribute('width', width.toString())
    magnifier.setAttribute('height', height.toString())
    this.canvas.style.width = originWidth + 'px'
    this.canvas.style.height = originHeight + 'px'
  }

  public dispose() {
    this.clear()
    this.canvas.remove()
  }

  public clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  public appendTo(element: Element) {
    this.container = element
    element.append(this.canvas)
  }

  public updateWithPoint(point: Vector3) {
    if (!this.five.renderer || !this.container) return
    const { scale, pixelRatio, context, originWidth, originHeight, width, height } = this
    const position2d = point.clone().project(this.five.camera)
    const left = ((position2d.x + 1) / 2) * this.container.clientWidth
    const right = (-(position2d.x - 1) / 2) * this.container.clientWidth
    const top = (-(position2d.y - 1) / 2) * this.container.clientHeight
    if (left < 183) {
      this.canvas.style.top = -originHeight / 2 + 'px'
      this.canvas.style.left = 90 + 'px'
    } else if (top < 183) {
      this.canvas.style.top = 90 + 'px'
      this.canvas.style.left = -originWidth / 2 + 'px'
    } else if (right < 183) {
      this.canvas.style.top = -originHeight / 2 + 'px'
      this.canvas.style.left = -originWidth - 90 + 'px'
    } else {
      this.canvas.style.left = -originWidth / 2 + 'px'
      this.canvas.style.top = -originHeight - 90 + 'px'
    }
    this.canvas.style.transform = `translate3d(${left}px, ${top}px, 10px)`
    const renderSize = this.five.renderer.getSize(new Vector2())
    const x = ((position2d.x + 1) / 2) * renderSize.x
    const y = ((position2d.y + 1) / 2) * renderSize.y
    const pixels = this.five.getPixels(
      x - originWidth / scale / 2,
      y - originHeight / scale / 2,
      originWidth / scale,
      originHeight / scale,
      pixelRatio * scale,
    )
    const length = (width * height) / 2
    for (let index = 0; index < length; index++) {
      const targetIndex = (height - Math.floor(index / width) - 1) * width + (index % width)
      exchange(pixels, index * 4 + 0, targetIndex * 4 + 0)
      exchange(pixels, index * 4 + 1, targetIndex * 4 + 1)
      exchange(pixels, index * 4 + 2, targetIndex * 4 + 2)
      exchange(pixels, index * 4 + 3, targetIndex * 4 + 3)
    }
    const imageData = context.createImageData(width, height)
    imageData.data.set(pixels)
    context.putImageData(imageData, 0, 0)
  }
}
