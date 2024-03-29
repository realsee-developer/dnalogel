import { GuideLinePlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import GuideLinePluginUse from './GuideLinePluginUse'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import work from './mocks/work.json'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[GuideLinePlugin, 'guideLinePlugin']],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  // const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider
        initialState={{ mode: 'Mapview' }}
        initialWork={parseWork(work)}
        ref={(ref) => Object.assign(window, { $five: ref?.state.five })}
      >
        <FiveCanvas {...size} />
        <GuideLinePluginUse />
      </FiveProvider>
    )
  )
}

export default App
