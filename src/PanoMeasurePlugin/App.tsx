import { PanoMeasurePlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import PanoMeasurePluginUsage from './Usage'
import { parseWork } from '@realsee/five'
import { Box } from '@mui/material'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import '../utils/$five.ts'
import { useWindowDimensions } from '../utils/useWindowDimensions.ts'

const pcConfig: Parameters<typeof PanoMeasurePlugin>[1] = {
  useGuideController: true,
  useUIController: {
    useNewUI: true,
    showExit: true,
  },
  editParams: {
    pointSelectorMode: 'cursor',
    allowMeasureType: ['line', 'area'],
    autoEndConfig: { line: null },
  },
  openParams: {
    isMobile: false,
  },
  magnifierParams: {
    height: 120,
    scale: 2,
    width: 120,
    dragEnabled: false,
    autoFixPCPosition: true,
  },
  pointSelectorConfig: {
    // helper: { pointHelper: 'highlight' },
    actionIfNoModelUnderMouse: 'disable',
  },
}

const mobileConfig: Parameters<typeof PanoMeasurePlugin>[1] = {
  useGuideController: true,
  useUIController: {
    useNewUI: true,
  },
  editParams: {
    allowMeasureType: ['line', 'area'],
    pointSelectorMode: 'fixed',
    autoEndConfig: {
      line: 2,
    },
  },
  openParams: {
    isMobile: true,
  },
  magnifierParams: {
    height: 120,
    scale: 2,
    width: 120,
    dragEnabled: false,
    autoFixPCPosition: false,
  },
  pointSelectorConfig: {
    // helper: { pointHelper: 'highlight' },
  },
}

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [
    [PanoMeasurePlugin, 'panoMeasurePluginPC', pcConfig],
    [PanoMeasurePlugin, 'panoMeasurePluginMobile', mobileConfig],
  ],
})

const workCode = (new URLSearchParams(window.location.search).get('workCode') ?? '') as any
const workType = (new URLSearchParams(window.location.search).get('workType') ?? 'real') as any

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK, workCode, workCode ? workType : undefined)

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
