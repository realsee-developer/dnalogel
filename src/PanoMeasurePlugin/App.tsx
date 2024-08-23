import { PanoMeasurePlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PanoMeasurePluginUsage from './Usage'
import { parseWork } from '@realsee/five'
import { Box } from '@mui/material'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import { PanoMeasureParameterType } from '@realsee/dnalogel/dist'
import '../utils/$five.ts'
// import work from './mocks/Wox6RD.json'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [
    [
      PanoMeasurePlugin,
      'panoMeasurePluginPC',
      {
        useGuideController: true,
        useUIController: {
          useNewUI: true,
        },
        editParams: {
          allowMeasureType: ['area', 'line'],
          pointSelectorMode: 'auto',
          autoEndConfig: {
            line: 3,
          },
        },
        openParams: {
          isMobile: false,
        },
        magnifierParams: {
          height: 120,
          scale: 2,
          width: 120,
          dragEnabled: true,
          autoFixPCPosition: true,
          initialPosition: { left: '35%', top: '20%' },
        },
      },
    ],
    [
      PanoMeasurePlugin,
      'panoMeasurePluginMobile',
      {
        useGuideController: true,
        useUIController: {
          useNewUI: true,
        },
        editParams: {
          allowMeasureType: ['line'],
          pointSelectorMode: 'fixed',
          autoEndConfig: {
            line: 3,
          },
        },
        openParams: {
          isMobile: true,
        },
        magnifierParams: {
          height: 120,
          scale: 2,
          width: 120,
          dragEnabled: true,
          autoFixPCPosition: true,
          initialPosition: { left: '35%', top: '20%' },
        },
      },
    ],
  ],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider initialWork={parseWork(work)}>
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
