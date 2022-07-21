import type { Parameters } from './typing'
import type { FivePlugin } from '@realsee/five'

import { Controller } from './Controller'

export const PanoFloorplanRadarPlugin: FivePlugin<Parameters | undefined, Controller> = (five, params) => {
  return new Controller(five, params)
}

export type PanoFloorplanRadarPluginParameterType = Parameters | undefined
export type PanoFloorplanRadarPluginReturnType = InstanceType<typeof Controller>
export default PanoFloorplanRadarPlugin
