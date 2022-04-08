import { TextureLoader, Color } from 'three'
import { ICreatLineOpts } from './line'

const lineWidth = 2
const lightLineWidth = 4
const lineColor = new Color(0xffffff)
const lightLineColor = new Color(0x2d7cff)
const pointColor = new Color(0xffffff)
const lightPointColor = new Color(0x2d7cff)
const pointSize = 8
const lightPointSize = 16
const pointImage =
  'data:image/png;base64,' +
  'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEUAAAD////////////////////////////////////////PIev5AAAACnRSTlMAG/Py2baba05un7UgfgAAAHJJREFUKM9joBpgLHVSCRdA4metAoJlCJHmVWBgAeNzroKCCVCBLpjACqgJVjCBxRBT2FbBQQJYQAohsBAsUIUQWA4WiEIILAULeCEEloAFtBACizAEMLRgGIphLabDMJ2O6TlM72MGECIIMQIZIxqoBQCPvpJ/e9FaAAAAAABJRU5ErkJggg=='
const pointTexture = new TextureLoader().load(pointImage)

export const normalLineOpts: ICreatLineOpts = {
  pointTexture,
  pointSize,
  lineWidth,
  lineColor,
  pointColor,
  lineRenderOrder: 20,
  pointsRenderOrder: 20,
}

export const dashLineOpts: ICreatLineOpts = Object.assign({}, normalLineOpts, { dashed: true })

export const lightLineOpts: ICreatLineOpts = {
  pointTexture,
  pointSize: lightPointSize,
  lineWidth: lightLineWidth,
  lineColor: lightLineColor,
  pointColor: lightPointColor,
  lineRenderOrder: 10,
  pointsRenderOrder: 10,
}
