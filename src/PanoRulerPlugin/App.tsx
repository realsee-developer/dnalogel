import { PanoRulerPlugin } from '@realsee/dnalogel'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PanoRulerPluginUsage from './PanoRulerPluginUsage'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[PanoRulerPlugin, 'panoRulerPlugin', {}]],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const [vrCode, setVrCode] = React.useState<string>('81gmMq5a7zbF9leWMk')
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    <FiveProvider work={work && parseWork(work)} ref={(ref) => Object.assign(window, { $five: ref?.state.five })}>
      <FiveCanvas {...size} />
      <PanoRulerPluginUsage vrCode={vrCode} />
    </FiveProvider>
  )
}

export default App
