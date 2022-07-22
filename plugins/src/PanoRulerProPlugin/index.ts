import type { Five, FivePlugin } from '@realsee/five'
import Controller from './Controller'
import type { PanoRulerProPluginParameterType, PanoRulerProPluginExportType } from './typings'

/**
 * 全景标尺插件
 */
export const PanoRulerProPlugin: FivePlugin<
  PanoRulerProPluginParameterType,
  PanoRulerProPluginExportType
> = (five: Five, params) => {
  return new Controller(five, params)
}

export default PanoRulerProPlugin

export type {
  PanoRulerProPluginParameterType,
  PanoRulerProPluginExportType,
  PanoRulerProPluginOptions,
  PanoRulerProPluginState,
} from './typings'
