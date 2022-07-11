import {
  queue,
  execInterval,
  transformCoords,
  unTransformCoords,
  getQuadraticCurvePoint,
  noop,
  Coords,
  nextFrame,
} from './utils'

import tween, { TweenRes } from './tween'

import {
  PaintBrushAction,
  PaintBrushConfigs,
  PaintBrushEventMap,
  PaintBrushState,
  PaintBrushTypeEnum,
} from './typings'

import { Subscribe } from './Subscribe'
import { uuid } from '../../shared-utils/uuid'
import PaintBrushStyle from './style'

export class Controller extends Subscribe<PaintBrushEventMap> {
  configs: PaintBrushConfigs

 private clientWidth: number
 private clientHeight: number

 private ready = false

 private uuid = uuid()
 private tween?: TweenRes
 private tweening = false

 private container: HTMLDivElement
 private canvas: Record<string, HTMLCanvasElement | undefined>
 private data: Record<string, PaintBrushState[]> = {}
 private tempLine: Record<string, Coords[]> = {}

  get color() {
    return this.configs.currentColor
  }

  get state() {
    return this.data
  }

  get dpr() {
    return this.configs.DPR || 1
  }

  constructor(configs: PaintBrushConfigs) {
    super()
    this.configs = configs

    this.clientWidth = document.body.clientWidth
    this.clientHeight = document.body.clientHeight

    this.container = this.ifInsertToDOM()
    this.canvas = {}
    this.initCtrl()
  }

  ifInsertToDOM() {
    if (this.container) {
      return this.container
    }
    if (this.configs.container) {
      this.configs.container.id = '_gl_paintBrush'
      this.container = this.configs.container
    } else if (!document.getElementById('_gl_paintBrush')) {
      const container = document.createElement('div')
      container.id = '_gl_paintBrush'
      document.body.appendChild(container)
      this.container = container
    } else {
      this.container = document.getElementById('_gl_paintBrush') as HTMLDivElement
    }

    this.container.innerHTML = PaintBrushStyle

    return this.container
  }

  /**
   *
   * @param className 初始化画板
   * @returns
   */
  initCanvas(className: string) {
    const canvas = document.createElement('canvas')
    canvas.className = className
    canvas.width = this.clientWidth
    canvas.height = this.clientHeight
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.lineWidth = 5 * this.dpr
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    this.container.appendChild(canvas)
    return canvas
  }


  /**
   * 初始化操作面板
   * @returns
   */
  initCtrl() {
    const ctrl: HTMLDivElement = document.createElement('div')
    ctrl.className = '_paintBrush-ctrl'
    const ctrl_inner: HTMLDivElement = document.createElement('div')
    ctrl_inner.className = '_paintBrush-ctrlinner'

    const a_undo = document.createElement('a')
    a_undo.className = '_paintBrush-ctrlitem _paintBrush-ctrlitem--undo'
    a_undo.addEventListener('click', (e) => {
      e.stopPropagation()

      // 点击撤回：供埋点使用
      if (this.configs.onClickUndo) {
        this.configs.onClickUndo()
      }

      if (!this.canvas[this.uuid] || !this.data[this.uuid] || this.data[this.uuid].length === 0) {
        return
      }
      const popState = this.data[this.uuid].pop()

      if (popState) {
        this.emitStateChange({
          type: PaintBrushTypeEnum.Undo,
          color: this.color,
          ready: this.ready,
          state: popState,
          uuid: this.uuid,
        })
      }

      const $ctx = this.canvas[this.uuid]?.getContext('2d')
      if (!this.canvas[this.uuid]) {
        return
      }
      const { width, height } = this.canvas[this.uuid]!
      if ($ctx) {
        $ctx.clearRect(0, 0, width, height)
      }
      this.data[this.uuid].forEach((ld: any) => this.handleDrawLine(this.uuid, ld, { withUndo: true }))

    })
    const a_close = document.createElement('a')
    a_close.className = '_paintBrush-ctrlitem _paintBrush-ctrlitem--close'
    a_close.addEventListener('click', (e) => {
      e.stopPropagation()
      this.closeBrush()
      // 点击关闭：供埋点使用
      if (this.configs.onClickClose) {
        this.configs.onClickClose()
      }
    })

    const $A = [a_undo, a_close]
    $A.forEach(($a) => {
      const $i = document.createElement('i')
      $i.className = 'brush-icon'
      const $span = document.createElement('span')
      $span.className = 'brush-txt'

      $span.innerText = $a.className.endsWith('undo') ? this.configs.onUndoText : this.configs.onExitText
      $a.appendChild($i)
      $a.appendChild($span)
    })

    ctrl_inner.appendChild(a_undo)
    ctrl_inner.appendChild(a_close)
    ctrl.appendChild(ctrl_inner)

    this.container.appendChild(ctrl)

    return ctrl
  }

  openBrush() {
    if (this.ready) return
    if (!this.canvas[this.uuid]) {
      this.canvas[this.uuid] = this.initCanvas('_paintBrush-canvas')
    }
    this.container.className = 'brushing'
    const $curCanvas = this.canvas[this.uuid]!

    const $ctx = $curCanvas.getContext('2d')!
    $ctx.clearRect(0, 0, $curCanvas.width, $curCanvas.height)
    this.openBrushHandle()
    this.ready = true
    this.emit('readyChange', true)
  }

  closeBrush() {
    if (!this.ready) return

    this.container.className = ''
    this.data = {}
    this.tempLine = {}
    Object.keys(this.canvas).forEach((key) => {
      this.canvas[key]!.ontouchstart = () => false
      this.canvas[key]!.ontouchmove = () => false
      this.canvas[key]!.ontouchend = () => false
      this.canvas[key]!.ontouchcancel = () => false
      const $ctx = this.canvas[key]!.getContext('2d')
      if ($ctx) {
        $ctx.clearRect(0, 0, this.canvas[key]!.width, this.canvas[key]!.height)
      }
    })
    this.ready = false
    this.emit('readyChange', false)

    this.emitStateChange({
      type: PaintBrushTypeEnum.Exit,
      color: this.color,
      ready: false,
      uuid: this.uuid,
    })
  }

  updateCurrentColor(color: string) {
    const currentCanvas = this.canvas[this.uuid]
    if (!currentCanvas) return
    const currentCtx = currentCanvas.getContext('2d')
    if (!currentCtx) return
    this.configs.currentColor = color
    currentCtx.strokeStyle = color

  }

  openBrushHandle() {
    const currentCanvas = this.canvas[this.uuid]
    if (!currentCanvas) return
    const currentCtx = currentCanvas.getContext('2d')
    if (!currentCtx) return

    const color = this.color || '#6D92FF'

    currentCtx.strokeStyle = color

    let begin: any = null // 开始点
    let points: any[] = [] // 单次 touch 点位集合
    let move: Coords
    let line: Coords[] = [] // 同步 touch 点位数据
    let startTime = 0 // touch 开始时间

    // 绘制
    const draw = (beginPoint: Coords, controlPoint: Coords, endPoint: Coords) => {
      const color = this.color || '#ff0000'
      currentCtx.strokeStyle = color
      currentCtx.beginPath()
      currentCtx.moveTo(beginPoint.x, beginPoint.y)
      currentCtx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y)
      currentCtx.stroke()
    }

    // 鼠标按下
    currentCanvas.onmousedown = (e) => {
      e.preventDefault()
      startTime = Date.now()
      const x = e.clientX
      const y = e.clientY

      points = []
      points.push({ x, y })
      begin = { x, y }

      move = transformCoords({ x, y }, this.clientWidth, this.clientHeight)
      line = []
    }

    // 鼠标移动
    currentCanvas.onmousemove = (e) => {
      e.preventDefault()
      if (!begin) return
      const x = Number(e.clientX)
      const y = Number(e.clientY)
      // 密集点位稀释
      if (Math.abs(x - begin.x) < 5 && Math.abs(y - begin.y) < 5) {
        return
      }
      points.push({ x, y })
      // 此处应记录折线拟合之前的点
      line.push(transformCoords({ x, y }, this.clientWidth, this.clientHeight))
      // 折线拟合二次贝塞尔曲线至少需要三个点
      if (points.length < 3) {
        return
      }
      const { control, end } = getQuadraticCurvePoint(points)
      if (!control || !end) {
        return
      }
      draw(begin, control, end)
      begin = end
    }

    // 鼠标松开
    currentCanvas.onmouseup = (e) => {
      e.preventDefault()
      begin = null
      if (points.length < 3) return

      if (!this.data[this.uuid]) {
        this.data[this.uuid] = []
      }
      const duration = Date.now() - startTime
      const state = {
        move: Object.assign({}, move),
        uuid: this.uuid,
        line: [...line],
        color: this.color,
        duration: duration < 1280 ? duration : duration < 2000 ? 1280 : 0, // 单次笔迹时长超过2000ms不加动画
      }
      this.data[this.uuid].push(state)
      // 广播数据
      nextFrame(() => {
        this.emitStateChange({
          type: PaintBrushTypeEnum.Drawline,
          color: this.color,
          ready: this.ready,
          state,
          uuid: this.uuid,
        })
      })
    }

    // 手势按压
    currentCanvas.ontouchstart = (e) => {
      e.preventDefault()
      startTime = Date.now()
      const x = e.touches[0].clientX
      const y = e.touches[0].clientY

      points = []
      points.push({ x, y })
      begin = { x, y }
      console.log('ontouchstart', x, y, begin)

      move = transformCoords({ x, y }, this.clientWidth, this.clientHeight)
      line = []
    }

    // 手势移动
    currentCanvas.ontouchmove = (e) => {
      e.preventDefault()
      if (!begin) return
      const x = Number(e.touches[0].clientX)
      const y = Number(e.touches[0].clientY)
      if (Math.abs(x - begin.x) < 5 && Math.abs(y - begin.y) < 5) return // 密集点位稀释
      points.push({ x, y })
      line.push(transformCoords({ x, y }, this.clientWidth, this.clientHeight)) // 此处应记录折线拟合之前的点
      if (points.length < 3) return // 折线拟合二次贝塞尔曲线至少需要三个点
      const { control, end } = getQuadraticCurvePoint(points)
      if (!control || !end) return
      draw(begin, control, end)
      begin = end
    }

    // 手势按压离开
    currentCanvas.ontouchend = currentCanvas.ontouchcancel = (e) => {
      e.preventDefault()
      begin = null
      if (points.length < 3) return
      if (!this.data[this.uuid]) {
        this.data[this.uuid] = []
      }
      const duration = Date.now() - startTime
      const state = {
        move: Object.assign({}, move),
        line: [...line],
        uuid: this.uuid,
        color: this.color,
        duration: duration < 1280 ? duration : duration < 2000 ? 1280 : 0, // 单次笔迹时长超过2000ms不加动画
      }
      this.data[this.uuid].push(state)
      // 广播数据
      nextFrame(() => {
        this.emitStateChange({
          type: PaintBrushTypeEnum.Drawline,
          color: this.color,
          ready: this.ready,
          state,
          uuid: this.uuid,
        })
      })
    }
  }

  emitStateChange(action: PaintBrushAction, userAction: boolean = true) {
    if (action.type !== PaintBrushTypeEnum.Drawline) {
      this.emit('stateChange', action, userAction)
      return
    }

    const timestamp = Date.now()
    const state = action.state
    if (!state) return
    if (!state.line) return
    const sliceCount = Math.ceil(state.line.length / 100)

    for (let i = 0; i < sliceCount; i++) {
      const localityAction: PaintBrushAction = {
        uuid: this.uuid,
        color: this.color,
        ready: this.ready,
        type: action.type,
        state: {
          uuid: this.uuid,
          move: state.move,
          duration: state.duration,
          color: this.color,
          line: state.line.slice(i * 100, (i + 1) * 100),
        },
        timestamp,
        end: i === sliceCount - 1,
      }
      /** 由于单次 ws 传输数据量过大，会导致 ws 断掉，所以分批传数据 */
      execInterval(i, 20, () => {
        this.emit('stateChange', localityAction, userAction)
      })
    }
  }

  action(action: PaintBrushAction) {
    const { ready, type, uuid } = action

    if (!ready && this.ready) {
      // 关闭面板
      this.closeBrush()
      return
    }
    if (ready && !this.ready) {
      // 开启面板：首次打开画笔不同步上一次的画线
      this.openBrush()
      return
    }

    if (!this.ready) {
      return
    }

    switch (type) {
      case PaintBrushTypeEnum.Drawline:
        const { state, timestamp, end } = action
        if (!timestamp) return
        if (!state) return
        this.tempLine[timestamp] = ([] as Coords[]).concat(this.tempLine[timestamp] || [], state.line)
        if (end) {
          Object.assign(state, { line: this.tempLine[timestamp] })
          this.handleDrawLine(uuid, state, {}, () => delete this.tempLine[timestamp])
        }
        break
      case PaintBrushTypeEnum.Undo:
        this.handleUndo(uuid)
        break
      default:
        break
    }
  }


  handleDrawLine(_uuid: string, data: PaintBrushState, { withUndo = false }, callback = noop) {
    if (!data || Object.prototype.toString.call(data) != '[object Object]' || Object.keys(data).length === 0) {
      return
    }

    console.log('handleDrawLine', data, data.line)

    queue(() => {
      return new Promise((resolve) => {
        if (!withUndo) {
          if (!this.canvas[_uuid]) {
            this.canvas[_uuid] = this.initCanvas('_paintBrush-canvas--sync')
          }
          if (!this.data[_uuid]) {
            this.data[_uuid] = []
          }
          this.data[_uuid].push(data)
        }

        if (!this.canvas[_uuid]) {
          return
        }
        const $ctx = this.canvas[_uuid]!.getContext('2d')

        if (!$ctx) return
        const { line = [], color = 'black', duration = 0, uuid } = data
        const move = unTransformCoords(data.move || {} as Coords, this.clientWidth, this.clientHeight)

        let points = [move]

        $ctx.strokeStyle = color

        $ctx.beginPath()
        $ctx.moveTo(move.x, move.y)

        if (duration && !withUndo) {
          let drawCache: any[] = []
          const self = this
          self.tween = tween({ step: 0 }, { step: line.length - 1 }, duration)
            .onUpdate(({ step }) => {
              self.tweening = true
              if (!self.ready) {
                $ctx.clearRect(0, 0, self.canvas[uuid]!.width, self.canvas[uuid]!.height)
                return self.tween?.stop()
              }
              const i = Math.floor(step)
              if (!drawCache.find((dc) => dc === i)) {
                drawCache.push(i)
                console.log('__debug__', line, line[i], i)
                points.push(unTransformCoords(line[i], self.clientWidth, self.clientHeight))
                if (points.length < 3) return
                const { control, end } = getQuadraticCurvePoint(points)
                if (!control || !end) return
                $ctx.quadraticCurveTo(control.x, control.y, end.x, end.y)
                $ctx.stroke()
              }
            })
            .onComplete((e) => {
              self.tween = undefined
              self.tweening = false
              drawCache = []
              points = []
              if (callback) callback()
              resolve()
            })
        } else {
          for (let i = 0; i < line.length; i++) {
            points.push(unTransformCoords(line[i], this.clientWidth, this.clientHeight))
            if (points.length < 3) continue
            const { control, end } = getQuadraticCurvePoint(points)
            if (!control || !end) continue
            $ctx.quadraticCurveTo(control.x, control.y, end.x, end.y)
          }
          $ctx.stroke()
          points = []
          if (callback) callback()
          resolve()
        }
      })
    })
  }

  handleUndo(uuid: string) {
    console.log('handleUndo', uuid, this.canvas[uuid])
    if (!this.canvas[uuid] || !this.data[uuid] || this.data[uuid].length === 0) {
      return
    }
    this.data[uuid].pop()

    const handle = () => {
      const $ctx = this.canvas[uuid]?.getContext('2d')
      if ($ctx) {
        $ctx.clearRect(0, 0, this.canvas[uuid]!.width, this.canvas[uuid]!.height)
      }
      this.data[uuid].forEach((ld: any) => this.handleDrawLine(uuid, ld, { withUndo: true }))
    }
    if (this.tween && this.tweening) {
      this.tween.stop()
      nextFrame(handle, 60)
      return
    }
    handle()
  }

  destroyBrush() {
    this.closeBrush()
    this.ready = false
    this.emit('readyChange', true)
  }
}
