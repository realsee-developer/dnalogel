import { PanoTagPlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PanoTagPluginUse from './PluginUse.tsx'
import { FivePluginInit, parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import '../utils/$five.ts'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 1024 }, // 图片默认分辨率
  textureOptions: { size: 1024 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[PanoTagPlugin, 'panoTagPlugin', { debug: false }] as FivePluginInit<typeof PanoTagPlugin>],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        initialState={{
          panoIndex: 3,
          latitude: 0.031716492836436586,
          longitude: 3.28539937000811,

          // panoIndex: 8,
          // latitude: 0.0645096107262738,
          // longitude: 0.8460359249233026,
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
