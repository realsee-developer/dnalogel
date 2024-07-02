import { CruisePlugin, GuideLinePlugin, MovePlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import CruisePluginUse from './CruisePluginUse'
import { parseWork } from '@realsee/five'
import work from '../GuideLinePlugin/mocks/work.json'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [
    [CruisePlugin, 'cruisePlugin'],
    [MovePlugin, 'movePlugin'],
    [GuideLinePlugin, 'guideLinePlugin'],
  ],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  // const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        initialState={{ mode: 'Model' }}
        ref={(ref) => Object.assign(window, { $five: ref?.state.five })}
      >
        <FiveCanvas {...size} />
        <CruisePluginUse />
      </FiveProvider>
    )
  )
}

export default App
