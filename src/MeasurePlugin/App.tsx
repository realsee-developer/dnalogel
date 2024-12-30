import { MeasurePlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import Usage from './Usage.tsx'
import { parseWork } from '@realsee/five'
import { ThemeProvider } from '@mui/material'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas.ts'
import '../utils/$five.ts'
import { useWindowDimensions } from '../utils/useWindowDimensions.ts'
import { theme } from '../utils/theme.ts'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[MeasurePlugin, 'MeasurePlugin']],
})

const workCode = (new URLSearchParams(window.location.search).get('workCode') ?? '') as any
const workType = (new URLSearchParams(window.location.search).get('workType') ?? 'real') as any

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK, workCode, workCode ? workType : undefined)

  return (
    work && (
      <ThemeProvider theme={theme}>
        <FiveProvider initialWork={parseWork(work)}>
          <FiveCanvas {...size} />
          <Usage />
        </FiveProvider>
      </ThemeProvider>
    )
  )
}

export default App
