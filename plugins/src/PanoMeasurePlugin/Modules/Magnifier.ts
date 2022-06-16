import type { Five } from '@realsee/five'

import Hammer from 'hammerjs'
import * as THREE from 'three'
import { Rectangle } from '../../shared-utils'
import { Subscribe, SubscribeEventMap } from '@realsee/five'

/** 交换数组元素 */
function exchange(array: Uint8Array, index1: number, index2: number) {
  const value = array[index1]
  array[index1] = array[index2]
  array[index2] = value
}

/** 翻转 ArrayBuffer(RGBA像素) 的 Y 轴 */
function flipPixelsY(pixels: Uint8Array, width: number, height: number) {
  const flipYLength = height / 2
  for (let currentHeight = 1; currentHeight <= flipYLength; currentHeight++) {
    const targetHeight = height - (currentHeight - 1)
    for (let currentWidth = 1; currentWidth <= width; currentWidth++) {
      const pixelIndex = (currentHeight - 1) * width + currentWidth - 1
      const targetPixelIndex = (targetHeight - 1) * width + currentWidth - 1
      exchange(pixels, pixelIndex * 4 + 0, targetPixelIndex * 4 + 0)
      exchange(pixels, pixelIndex * 4 + 1, targetPixelIndex * 4 + 1)
      exchange(pixels, pixelIndex * 4 + 2, targetPixelIndex * 4 + 2)
      exchange(pixels, pixelIndex * 4 + 3, targetPixelIndex * 4 + 3)
    }
  }
}

interface MagnifierConfig {
  /** 允许拖动放大镜 */
  dragEnabled: boolean
  /** renderWithPoint 时，是否应该自动更新放大镜的位置 */
  autoFixPCPosition: boolean
  /** 放大镜初始位置应该设置在容器的哪个位置 */
  initialPosition: { left: string; top: string }
}

interface MagnifierEvent extends SubscribeEventMap {
  wantsPanGesture: (data: { deltaX: number; deltaY: number; srcEvent: typeof Hammer['Input'] }) => boolean
}

/** 放大镜配置参数 */
export interface MagnifierParameter {
  width?: number
  height?: number
  scale?: number
  /** 允许拖动放大镜 */
  dragEnabled?: boolean
  /** renderWithPoint 时，是否应该自动更新放大镜的位置 */
  autoFixPCPosition?: boolean
  /** 放大镜初始位置应该设置在容器的哪个位置 */
  initialPosition?: { left: string; top: string }
}

export default class Magnifier {
  public width: number
  public height: number
  public visible = false
  public hooks = new Subscribe<MagnifierEvent>()
  public contentDom = document.createElement('canvas')

  private five: Five
  private scale: number
  private wrapper?: Element
  private config: MagnifierConfig
  private offset = { x: 0, y: 0 }
  private canvas = this.contentDom
  private context: CanvasRenderingContext2D
  private renderCenter = new THREE.Vector3()
  private lastPanEvent?: typeof Hammer.Input
  private hammer?: InstanceType<typeof Hammer>

  public constructor(five: Five, options: MagnifierParameter) {
    if (!five.renderer) throw new Error('Five Render 未初始化')

    this.five = five
    this.scale = options?.scale ?? 2
    this.width = options?.width ?? 190
    this.height = options?.height ?? 190
    this.config = {
      dragEnabled: options?.dragEnabled || false,
      autoFixPCPosition: options?.autoFixPCPosition || false,
      initialPosition: options?.initialPosition || { left: '0', top: '0' },
    }

    const context = this.canvas.getContext('2d')
    if (!context) throw new Error('CANNOT CREATE CONTEXT2D')
    this.context = context

    if (this.config.dragEnabled) {
      this.hammer = new Hammer(this.canvas)
      this.hammer.on('pan', this.onPan)
      this.hammer.on('panend', this.onPanEnd)
      // this.hooks.on('wantsPanGesture', this.onMagnifierWantsPanGesture)
    }
  }

  public dispose() {
    this.clear()
    this.remove()
    this.hammer?.destroy()
  }

  /** 移除放大镜 DOM */
  public remove() {
    this.canvas.remove()
    this.visible = false
  }

  /** 清除放大镜渲染内容 */
  public clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  /** 把放大镜放到某一个容器中 */
  public appendTo(element: Element) {
    this.wrapper = element
    this.initStyle()
    element.append(this.canvas)
    this.visible = true
  }

  /** 放大传入点位周围的内容 */
  public renderWithPoint(point: THREE.Vector3) {
    if (!this.wrapper) return
    this.renderCenter = point
    this.render()
    if (this.config.autoFixPCPosition) this.autoFixPCPosition()
  }

  private autoFixPCPosition() {
    if (!this.wrapper) return
    const { width, height } = this
    const position2d = this.renderCenter.clone().project(this.five.camera)
    const left = ((position2d.x + 1) / 2) * this.wrapper.clientWidth
    const right = (-(position2d.x - 1) / 2) * this.wrapper.clientWidth
    const top = (-(position2d.y - 1) / 2) * this.wrapper.clientHeight
    if (left < 183) {
      this.canvas.style.top = -height / 2 + 'px'
      this.canvas.style.left = 90 + 'px'
    } else if (top < 183) {
      this.canvas.style.top = 90 + 'px'
      this.canvas.style.left = -width / 2 + 'px'
    } else if (right < 183) {
      this.canvas.style.top = -height / 2 + 'px'
      this.canvas.style.left = -width - 90 + 'px'
    } else {
      this.canvas.style.left = -width / 2 + 'px'
      this.canvas.style.top = -height - 90 + 'px'
    }
    this.canvas.style.transform = `translate3d(${left}px, ${top}px, 10px)`
    this.offset = { x: left, y: top }
  }

  private render() {
    if (!this.five.renderer || !this.wrapper) return
    const { scale, context, width, height } = this
    const position2d = this.renderCenter.clone().project(this.five.camera)
    const renderSize = this.five.renderer.getSize(new THREE.Vector2())
    // const pixelRatio = this.five.renderer.getPixelRatio()
    // 安卓机型和ios部分机型在app里读不到像素，固定为1降低清晰度可以读到
    const pixelRatio = 1
    // 从 renderTarget 读取区域的大小
    const readPixelsWidth = width / scale
    const readPixelsHeight = height / scale
    // 一个像素重复多少倍，pixelRatio 是兼容屏幕像素比，scale 是真实重复倍数
    const readPixelsRadio = pixelRatio * scale
    const x = ((position2d.x + 1) / 2) * renderSize.x
    const y = ((position2d.y + 1) / 2) * renderSize.y
    const pixels = this.five.getPixels(
      x - readPixelsWidth / 2,
      y - readPixelsWidth / 2,
      readPixelsWidth,
      readPixelsHeight,
      readPixelsRadio,
    )
    // 最后生成的图像大小是 [width * pixelRatio, height * pixelRatio]
    // 绘制在[width, height]的区域上
    const imageWidth = Math.floor(width * pixelRatio)
    const imageHeight = Math.floor(height * pixelRatio)
    // 因为 Canvas 与 THREE Renderer Y 坐标相反，所以需要 Y 轴翻转
    flipPixelsY(pixels, imageWidth, imageHeight)
    const imageData = new ImageData(imageWidth, imageHeight)
    imageData.data.set(pixels)
    context.putImageData(imageData, 0, 0)
  }

  private initStyle() {
    const canvas = this.canvas
    canvas.classList.add('five-plugin__magnifier')
    canvas.style.position = 'absolute'
    canvas.style.pointerEvents = 'all'
    canvas.style.borderRadius = '50%'
    canvas.style.zIndex = '99'
    const pixelRatio = 1
    canvas.setAttribute('width', (this.width * pixelRatio).toString())
    canvas.setAttribute('height', (this.height * pixelRatio).toString())
    canvas.style.border = '2px solid rgba(255,255,255,0.20)'
    canvas.style.width = this.width + 'px'
    canvas.style.height = this.height + 'px'
    canvas.style.top = this.config.initialPosition.top
    canvas.style.left = this.config.initialPosition.left
    canvas.style.transform = 'translate(0,0,100px)'

    if (this.config.dragEnabled) {
      this.canvas.style.cursor = 'pointer'
    }
  }

  private onPan = (event: typeof Hammer['Input']) => {
    if (!this.wrapper) return

    const lastDeltaX = this.lastPanEvent?.deltaX ?? 0
    const lastDeltaY = this.lastPanEvent?.deltaY ?? 0
    const deltaX = event.deltaX - lastDeltaX
    const deltaY = event.deltaY - lastDeltaY
    this.lastPanEvent = event
    const prevented = this.hooks.emit('wantsPanGesture', { srcEvent: event, deltaX, deltaY })
    if (prevented) return

    const translateX = this.offset.x + deltaX
    const translateY = this.offset.y + deltaY
    this.contentDom.style.boxShadow = '0 2px 30px 0 rgba(0,0,0,0.20)'
    this.canvas.style.transform = `translate3d(${translateX}px, ${translateY}px, 100px)`
    this.offset = { x: translateX, y: translateY }
  }

  private onPanEnd = (event: typeof Hammer['Input']) => {
    this.lastPanEvent = undefined
    this.contentDom.style.boxShadow = 'none'
  }
}
