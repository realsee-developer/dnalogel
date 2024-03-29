import { CameraMovementPlugin } from '@realsee/dnalogel'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import CameraMovementPluginUse from './CameraMovementPluginUse'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

const FiveProvider = createFiveProvider({
  onlyRenderIfNeeds: true,
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  plugins: [[CameraMovementPlugin, 'cameraMovementPlugin', {}]],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider initialWork={work}>
        <FiveCanvas {...size} />
        <CameraMovementPluginUse />
      </FiveProvider>
    )
  )
}

export default App
