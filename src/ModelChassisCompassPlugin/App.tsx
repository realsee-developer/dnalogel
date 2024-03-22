import { ModelChassisCompassPlugin } from '@realsee/dnalogel'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import { parseWork } from '@realsee/five'
import ModelChassisCompassPluginUse from './ModelChassisCompassPluginUse'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  plugins: [[ModelChassisCompassPlugin, 'modelChassisCompassPlugin', {}]],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider initialWork={parseWork(work)} ref={(ref) => Object.assign(window, { $five: ref?.five })}>
        <FiveCanvas {...size} />
        <ModelChassisCompassPluginUse />
      </FiveProvider>
    )
  )
}

export default App
