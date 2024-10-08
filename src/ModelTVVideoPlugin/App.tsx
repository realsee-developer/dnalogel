import { ModelTVVideoPlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import ShowPlugin from './ShowPlugin'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [
    [
      ModelTVVideoPlugin,
      'modelTVVideoPlugin',
      {
        // videoElement:
      },
    ],
  ],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider initialWork={parseWork(work)}>
        <FiveCanvas {...size} />
        <ShowPlugin />
      </FiveProvider>
    )
  )
}

export default App
