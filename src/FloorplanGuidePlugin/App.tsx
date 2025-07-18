import { PanoFloorplanRadarPlugin, FloorplanGuidePlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import { parseWork } from '@realsee/five'
import FloorplanGuidePanel from './FloorplanGuidePanel.tsx'
import getInitialParamFromUrl from '../utils/getInitialParamFromUrl'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

const defaultPluginParam = {}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = JSON.stringify(initialParamFromUrl) !== '{}' ? initialParamFromUrl : defaultPluginParam

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  plugins: [[FloorplanGuidePlugin, 'floorplanGuidePlugin']],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider initialWork={parseWork(work)}>
        <FiveCanvas {...size} />
        <FloorplanGuidePanel />
      </FiveProvider>
    )
  )
}

export default App
