import type Line from '../Model/line'
import { Line as FiveLine } from '@realsee/five/line'
import { lightLineOpts, normalLineOpts } from './constants'
import { Color, PointsMaterial, Texture, Vector3 } from 'three'

type ISetMaterialOpts = Parameters<FiveLine['setMaterial']>[0]

export interface ICreatLineOpts extends ISetMaterialOpts {
  hasPoint?: boolean
  pointSize?: number
  lineWidth?: number
  pointTexture?: Texture
  lineRenderOrder?: number
  pointsRenderOrder?: number
  lineColor?: Color | string | number
  pointColor?: Color | string | number
}

export function creatLine(start: Vector3, end: Vector3, opts?: ICreatLineOpts) {
  const lineWidth = opts?.lineWidth ?? 2
  const lineColor = opts?.lineColor ?? (new Color(0xffffff) as any)
  const pointSize = opts?.pointSize ?? 5
  const lineRenderOrder = opts?.lineRenderOrder ?? 10
  const pointsRenderOrder = opts?.lineRenderOrder ?? 20
  const line = new FiveLine(start, end)
  // set line
  line.setMaterial({ linewidth: lineWidth, color: lineColor })
  line.line.material.depthTest = false
  line.line.material.transparent = true
  line.line.renderOrder = lineRenderOrder
  // set point
  line.points.renderOrder = pointsRenderOrder
  const pointMaterial = line.points.material as PointsMaterial
  pointMaterial.depthTest = false
  pointMaterial.size = pointSize
  opts?.pointColor && pointMaterial.color.set(opts.pointColor).convertSRGBToLinear()
  if (opts?.pointTexture) pointMaterial.map = opts.pointTexture
  return line
}

export function creatLineMesh(line: Line, type: 'normal' | 'light') {
  const [point, anotherPoint] = line.points
  const opts = type === 'light' ? lightLineOpts : normalLineOpts
  const fiveLine = creatLine(point.position, anotherPoint.position, opts)
  fiveLine.name = 'normalLine_' + line.id
  return fiveLine
}
