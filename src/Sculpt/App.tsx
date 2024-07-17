import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PanoPluginUse from './Use'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import { Sculpt } from '@realsee/dnalogel/dist'
import '../utils/$five.ts'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 1024 }, // 图片默认分辨率
  textureOptions: { size: 1024 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [
    [
      (five) =>
        new Sculpt(five, {
          point: { color: 0x67af6a },
          polyline: { lineColor: 0x67af6a, lineWidth: 2 },
          polygon: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 2 },
          prism: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 2 },
          rectangle: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 2 },
          circle: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 2 },
          cylinder: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 2 },
          box: { color: 0x67af6a, lineColor: 0xa9eadc, lineWidth: 2 },
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
    <FiveProvider initialWork={parseWork(work)} initialState={{ mode: 'Mapview', latitude: 0.78, longitude: 2 }}>
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <FiveCanvas {...size} />
      </div>
      <PanoPluginUse />
    </FiveProvider>
  )
}

export default App
