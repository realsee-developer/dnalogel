export function noop() { }
const promise = () => Promise.resolve()

const state = {
  __queue: Promise.resolve()
}

export interface Coords {
  x: number
  y: number
}

export function queue(promiseCallback = promise) {
  state.__queue = state.__queue.then(promiseCallback).catch(promise)
}

export function transformCoords(coords: Coords, cw: number, ch: number) {
  const _x: number = coords.x
  const _y: number = coords.y
  const x = Math.floor((_x / cw) * 10000) / 10000   // 保留四位小数
  const y = Math.floor((_y / ch) * 10000) / 10000   // 保留四位小数
  return { x, y }
}

export function unTransformCoords(coords: Coords, cw: number, ch: number) {
  const { x: _x, y: _y } = coords
  const x = _x * cw
  const y = _y * ch
  return { x, y }
}

export function getQuadraticCurvePoint(points: Coords[]) {
  if (points.length < 2) return {}
  const lastTwo = points.slice(-2)
  const control = lastTwo[0]
  const end = {
    x: (lastTwo[0].x + lastTwo[1].x) / 2,
    y: (lastTwo[0].y + lastTwo[1].y) / 2,
  }
  return { control, end }
}

export function execInterval(i: number, time: number, callback = noop) {
  new Promise((resolve) => {
    setTimeout(() => {
      callback()
      resolve(true)
    }, time * i)
  })
}

const _window = window as any

const _requestAnimationFrame =
  window.requestAnimationFrame ||
  _window.webkitRequestAnimationFrame ||
  (fn => setTimeout(fn, 16))

const _cancelAnimationFrame = window.cancelAnimationFrame || _window.webkitCancelAnimationFrame || clearTimeout


export function nextFrame (fn: FrameRequestCallback, delay = 0) {
  if (delay <= 0) _requestAnimationFrame(fn)
  else _requestAnimationFrame(() => nextFrame(fn, delay - 1))
}