import { PanoRulerPlugin } from '@realsee/dnalogel/libs/panoRulerPlugin'
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
  const work = useFetchDatas(DATA_TYPES.WORK, 'pWLy9nekmQdMXqja')

  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        ref={(ref) => Object.assign(window, { $five: ref?.five })}
      >
        <FiveCanvas {...size} />
        <PanoRulerPluginUsage />
      </FiveProvider>
    )
  )
}

export default App
