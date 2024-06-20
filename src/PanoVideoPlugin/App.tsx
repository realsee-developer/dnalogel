import { PanoVideoPlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from '../components/useWindowDimensions.ts'
import PanoTagPluginUse from './PluginUse.tsx'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas.ts'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 128 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[PanoVideoPlugin, 'panoVideoPlugin']],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK, 'Vpvvo60O', 'real')

  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        initialState={{
          latitude: 0.27,
          longitude: 0.20,
          panoIndex: 305,
        }}
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
