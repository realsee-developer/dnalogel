import { FLOOR_PLAN_ATTACHED_TO, ModelFloorplanPlugin } from '@realsee/dnalogel'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import { parseWork } from '@realsee/five'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import ModelFloorplanPluginUse from './ModelFloorplanPluginUse'
import { Box } from '@mui/material'
import getInitialParamFromUrl from '../utils/getInitialParamFromUrl'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

const defaultPluginParam = {
  attachedTo: FLOOR_PLAN_ATTACHED_TO.CEILING, // 户型图吸附至天花板，默认吸附至几何中心
}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams =
  JSON.stringify(initialParamFromUrl) !== '{}' ? initialParamFromUrl : defaultPluginParam

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  plugins: [
    [
      ModelFloorplanPlugin,
      'modelFloorplanPlugin',
      {
        selector: '.plugin-full-screen-container',
        ...pluginParams,
      },
    ],
  ],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)
  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        ref={(ref) => Object.assign(window, { $five: ref?.five })}
      >
        <FiveCanvas {...size} />
        <Box
          className="plugin-full-screen-container"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        />
        <ModelFloorplanPluginUse />
      </FiveProvider>
    )
  )
}

export default App
