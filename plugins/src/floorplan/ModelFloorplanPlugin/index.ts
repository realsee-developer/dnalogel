import type { Parameters } from './typing'
import type { FivePlugin } from '@realsee/five'

import { Controller } from './Controller'

export const ModelFloorplanPlugin: FivePlugin<undefined | Parameters, Controller> = (five, params) => {
  return new Controller(five, params)
}

export type ModelFloorplanPluginParameterType = Parameters | undefined
export type ModelFloorplanPluginReturnType = InstanceType<typeof Controller>
export default ModelFloorplanPlugin
