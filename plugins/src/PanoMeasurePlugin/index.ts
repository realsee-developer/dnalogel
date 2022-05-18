import type { FivePlugin } from '@realsee/five'
import MeasureController, { MeasurePluginParameter } from './Controller'

const PanoMeasurePlugin: FivePlugin<MeasurePluginParameter, PluginReturns> = function MeasurePlugin(five, params) {
  return new MeasureController(five, params)
}

export default PanoMeasurePlugin

// 类型导出
export type PluginReturns = MeasureController
export type { PluginEvent } from './typings/event.type'
export type { LineJson, PointJson } from './typings/data'
