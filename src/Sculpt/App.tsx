import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PanoPluginUse from './Use'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import { Sculpt } from '@realsee/dnalogel/dist'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 128 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [
    [
      (five) =>
        new Sculpt(five, {
          point: { color: 0x67af6a },
          polyline: { lineColor: 0x67af6a, lineWidth: 4 },
          polygon: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 4 },
          prism: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 4 },
          rectangle: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 4 },
          circle: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 4 },
          cylinder: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 4 },
          box: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 4 },
        }),
      'Sculpt',
    ],
  ],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  if (!work) return null

  return (
    <FiveProvider initialWork={parseWork(work)} ref={(ref) => Object.assign(window, { $five: ref?.five })}>
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <FiveCanvas {...size} />
      </div>
      <PanoPluginUse />
    </FiveProvider>
  )
}

export default App
