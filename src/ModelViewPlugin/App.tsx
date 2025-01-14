import { ModelViewPlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { parseWork } from '@realsee/five'
import MiniModelPanel from './MiniModelPanel'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import { useWindowDimensions } from '../utils/useWindowDimensions.ts'
import '../utils/$five.ts'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[ModelViewPlugin, 'modelViewPlugin', { initialState: { enabled: true } }]],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider initialWork={parseWork(work)}>
        <FiveCanvas {...size} />
        <MiniModelPanel />
      </FiveProvider>
    )
  )
}

export default App
