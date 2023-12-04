import { AreaMakerPlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PanoTagPluginUse from './AreaMakerPluginUse'
import { FivePluginInit, parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
// import work from './mocks/work.json'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 128 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[AreaMakerPlugin, 'areaMakerPlugin']],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        initialState={{ mode: 'Mapview' }}
        ref={(ref) => Object.assign(window, { $five: ref ? ref.five : undefined })}
      >
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <FiveCanvas {...size} />
        </div>
        <PanoTagPluginUse />
      </FiveProvider>
    )
  )
}

export default App
