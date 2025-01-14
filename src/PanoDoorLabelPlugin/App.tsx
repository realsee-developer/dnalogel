import { PanoDoorLabelPlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import { parseWork } from '@realsee/five'
import PanoDoorLabels from './DoorLabels'
import getInitialParamFromUrl from '../utils/getInitialParamFromUrl'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import '../utils/$five.ts'

const defaultPluginParam = {}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = JSON.stringify(initialParamFromUrl) !== '{}' ? initialParamFromUrl : defaultPluginParam
console.info(pluginParams, 'pluginParams')
const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  plugins: [[PanoDoorLabelPlugin, 'panoDoorLabelPlugin', { ...pluginParams }]],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider initialWork={parseWork(work)}>
        <FiveCanvas {...size} />
        <PanoDoorLabels />
      </FiveProvider>
    )
  )
}

export default App
