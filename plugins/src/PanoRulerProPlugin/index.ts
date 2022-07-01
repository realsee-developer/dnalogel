import type { Five, FivePlugin } from '@realsee/five'
import Controller from './Controller'
import type { PanoRulerProPluginParameterType } from './typings'

export type PanoRulerProPluginExportType = Controller
/**
 * 全景标尺插件
 */
export const PanoRulerPluginV2: FivePlugin<PanoRulerProPluginParameterType, PanoRulerProPluginExportType> = (
  five: Five,
  params,
) => {
  return new Controller(five, params)
}

export default PanoRulerPluginV2
