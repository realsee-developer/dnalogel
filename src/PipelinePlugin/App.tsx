import { PipelinePlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import { parseWork } from '@realsee/five'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PipelinePluginUse from './PipelinePluginUse'
import { Box } from '@mui/material'
import getInitialParamFromUrl from '../utils/getInitialParamFromUrl'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import * as THREE from 'three'

Object.assign(window, { THREE })

const defaultPluginParam = {
  hoverEnable: true,
  northDesc: 'N',
}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = Object.assign(defaultPluginParam, JSON.stringify(initialParamFromUrl) !== '{}' ? initialParamFromUrl : {})

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  plugins: [
    [
      PipelinePlugin,
      'pipelinePlugin',
      { ...pluginParams },
    ],
  ],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK, '81xManr9NXhxbrmRmP')

  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        ref={(ref) => Object.assign(window, { $five: ref?.five })}
      >
        <FiveCanvas key="five-canvas" {...size} />
        <Box
          key="box"
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
        <PipelinePluginUse key="plugin-use"/>
      </FiveProvider>
    )
  )
}

export default App
