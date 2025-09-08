// import { FLOOR_PLAN_ATTACHED_TO, GuideLinePlugin, MapviewFloorplanPlugin } from '@realsee/dnalogel/dist'
import { FLOOR_PLAN_ATTACHED_TO, GuideLinePlugin, MapviewFloorplanPlugin } from '@realsee/dnalogel'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import { parseWork } from '@realsee/five'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PluginUse from './PluginUse'
import getInitialParamFromUrl from '../utils/getInitialParamFromUrl'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import '../utils/$five.ts'

import { workData, floorplanData } from './mock/dimensionData'


const defaultPluginParam = {
  hoverEnable: true,
  northDesc: 'N',
  attachedTo: FLOOR_PLAN_ATTACHED_TO.CEILING,
}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = Object.assign(defaultPluginParam, JSON.stringify(initialParamFromUrl) !== '{}' ? initialParamFromUrl : {})

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  plugins: [
    [MapviewFloorplanPlugin, 'mapviewFloorplanPlugin', { ...pluginParams }],
    [GuideLinePlugin, 'guideLinePlugin'],
  ],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  // const work = useFetchDatas(DATA_TYPES.WORK)
  const work = workData

  return (
    work && (
      <FiveProvider initialWork={parseWork(work)}>
        <FiveCanvas key="five-canvas" {...size} />
        <PluginUse key="plugin-use" />
      </FiveProvider>
    )
  )
}

export default App
