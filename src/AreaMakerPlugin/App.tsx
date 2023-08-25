import { AreaMakerPluginPlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PluginUse from './PluginUse'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import * as mockWork from './mockWork.json'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[AreaMakerPluginPlugin, 'AreaMakerPluginPlugin']],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  // const work = useFetchDatas(DATA_TYPES.WORK)
  const work = mockWork

  return (
    work && (
      <FiveProvider initialWork={parseWork(work)} ref={(ref) => Object.assign(window, { $five: ref?.five })}>
        <FiveCanvas {...size} />
        <PluginUse />
      </FiveProvider>
    )
  )
}

export default App
