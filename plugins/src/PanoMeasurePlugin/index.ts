import type { FivePlugin } from '@realsee/five'
import MeasureController, { PanoMeasureParameterType } from './Controller'
import Magnifier from './Modules/Magnifier'

export const PanoMeasurePlugin: FivePlugin<PanoMeasureParameterType, PanoMeasureReturnType> =
  function PanoMeasurePlugin(five, params) {
    return new MeasureController(five, params)
  }

export default PanoMeasurePlugin

// 类型导出
export type PanoMeasureReturnType = MeasureController
export type { PanoMeasurePluginEvent } from './typings/event.type'
export type { LineJson, PointJson, OpenParameter } from './typings/data'
export type { PanoMeasureParameterType } from './Controller'
export { Magnifier }