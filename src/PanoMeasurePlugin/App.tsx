import { PanoMeasurePlugin } from '@realsee/dnalogel'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PanoMeasurePluginUsage from './PanoMeasurePluginUsage'
import { parseWork } from '@realsee/five'
import { Box } from '@mui/material'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import { PanoMeasureParameterType } from '@realsee/dnalogel/dist'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [
    [
      PanoMeasurePlugin,
      'panoMeasurePlugin',
      {
        useGuideController: true,
        useUIController: true,
        openParams: {
          isMobile: true,
        },
        magnifierParams: {
          height: 120,
          scale: 2,
          width: 120,
          dragEnabled: true,
          autoFixPCPosition: false,
          initialPosition: { left: '35%', top: '20%' },
        },
      } as PanoMeasureParameterType,
    ],
  ],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK, 'pWLy9ndnVL73Xqja', 'real')

  return (
    work && (
      <FiveProvider initialWork={parseWork(work)} ref={(ref) => Object.assign(window, { $five: ref?.five })}>
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
        <PanoMeasurePluginUsage />
      </FiveProvider>
    )
  )
}

export default App
