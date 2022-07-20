import type { Parameters } from './typing'
import type { FivePlugin } from '@realsee/five'

import { Controller } from './Controller'

export const TopviewFloorplanPlugin: FivePlugin<undefined | Parameters, Controller> = (five, params) => {
  return new Controller(five, params)
}

export type TopviewFloorplanPluginParameterType = Parameters | undefined
export type TopviewFloorplanPluginReturnType = InstanceType<typeof Controller>
export default TopviewFloorplanPlugin
