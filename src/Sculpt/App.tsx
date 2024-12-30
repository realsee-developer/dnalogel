import { createFiveProvider, FiveCanvas, unsafe__useFiveInstance } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import Use from './Use'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import { Sculpt } from '@realsee/dnalogel/dist'
import { createTheme, ThemeProvider } from '@mui/material'
import { OrientationPlugin } from '@realsee/five/plugins'
import '../utils/$five.ts'
import { theme } from '../utils/theme.ts'

const lineWidth = 1.5
const lineOpacity = 0.8

const FiveProvider = createFiveProvider({
  imageOptions: { size: 1024 }, // 图片默认分辨率
  textureOptions: { size: 1024 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [
    [OrientationPlugin, 'OrientationPlugin'],
    [
      (five) =>
        new Sculpt(five, {
          point: { color: 0xffffff },
          line: { lineColor: 0xffffff, lineWidth },
          polyline: { lineColor: 0x000000, lineWidth },
          polygon: { color: 0xffffff, lineColor: 0x000000, lineWidth, lineOpacity },
          prism: { color: 0xffffff, lineColor: 0x000000, lineWidth, lineOpacity },
          rectangle: { color: 0xffffff, lineColor: 0x000000, lineWidth, lineOpacity },
          circle: { color: 0xffffff, lineColor: 0x000000, lineWidth, lineOpacity },
          cylinder: { color: 0xffffff, lineColor: 0x000000, lineWidth, lineOpacity },
          box: { color: 0xffffff, lineColor: 0x000000, lineWidth, lineOpacity },
        }),
      'Sculpt',
    ],
  ],
})

// goVEAXLvE4HWVjvT5x
//

const workCode = (new URLSearchParams(window.location.search).get('workCode') ?? '') as any
const workType = (new URLSearchParams(window.location.search).get('workType') ?? 'real') as any

const FiveUseage = () => {
  const five = unsafe__useFiveInstance()

  React.useEffect(() => {
    five.models.setMaterial({
      pointShape: 'CIRCLE',
      pointSize: 'ATTENUATION',
      pointBack: 'VISIBLE',
      pointScale: 0.012,
      pointMinPixel: 0,
      pointMaxPixel: 40,
    })
  }, [five])

  return null
}

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work =
    localStorage.getItem(`dnawork-${location.pathname}`) ?? useFetchDatas(DATA_TYPES.WORK, workCode, workCode ? workType : undefined)

  if (!work) return null

  return (
    <ThemeProvider theme={theme}>
      <FiveProvider
        initialOptions={{
          '3d-tiles': {
            minLevelOfDetail: 1,
            maxScreenSpaceError: 1,
          },
        }}
        initialWork={parseWork(work)}
        initialState={{ mode: 'Mapview', latitude: 0.78, longitude: 2 }}
      >
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <FiveCanvas {...size} />
        </div>
        <Use />
        <FiveUseage />
      </FiveProvider>
    </ThemeProvider>
  )
}

export default App
