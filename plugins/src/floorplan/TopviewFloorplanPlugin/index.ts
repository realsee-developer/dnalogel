import { FivePlugin } from '@realsee/five'
import {
  TopviewFloorplanPluginController,
  TopviewFloorplanPluginParameterType,
  TopviewFloorplanPluginReturnType,
} from './Controller'

export const TopviewFloorplanPlugin: FivePlugin<
  TopviewFloorplanPluginParameterType,
  TopviewFloorplanPluginReturnType
> = (five, params) => {
  return new TopviewFloorplanPluginController(five, params)
}

export default TopviewFloorplanPlugin
export type { TopviewFloorplanPluginReturnType, TopviewFloorplanPluginParameterType } from './Controller'
