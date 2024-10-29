import { ModelMakerPlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from '../components/useWindowDimensions.ts'
import PanoTagPluginUse from './PluginUse'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import '../utils/$five.ts'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 128 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[ModelMakerPlugin, 'modelMakerPlugin', { occlusionVisibility: ['Mapview'] }]],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        initialState={{
          latitude: 0.33,
          longitude: 2.87,
          panoIndex: 3,
          mode: 'Mapview',
        }}
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
