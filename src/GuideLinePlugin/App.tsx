import { GuideLinePlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import GuideLinePluginUse from './PluginUse.tsx'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import work from './mocks/work.json'
import '../utils/$five.ts'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[GuideLinePlugin, 'guideLinePlugin']],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  // const work = useFetchDatas(DATA_TYPES.WORK, 'REQQYY2m', 'real')

  return (
    work && (
      <FiveProvider
        initialState={{
          mode: 'Mapview',
          distance: 18,
          fov: 80,
          latitude: 0.9,
          longitude: 1,
        }}
        initialWork={parseWork(work)}
      >
        <FiveCanvas {...size} />
        <GuideLinePluginUse />
      </FiveProvider>
    )
  )
}

export default App
