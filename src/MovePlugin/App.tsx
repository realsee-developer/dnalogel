import { MovePlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PanoTagPluginUse from './PluginUse'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 1024 }, // 图片默认分辨率
  textureOptions: { size: 1024 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[MovePlugin, 'movePlugin', { useGuideLine: true }]],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        initialState={{ mode: 'Mapview' }}
        ref={(ref) => Object.assign(window, { $five: ref?.state.five })}
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
