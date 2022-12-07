import { PanoRulerPlugin } from '@realsee/dnalogel'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PanoRulerPluginUsage from './PanoRulerPluginUsage'
import { parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import { Box, Button, Paper } from '@mui/material'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[PanoRulerPlugin, 'panoRulerPlugin', {}]],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const [vrCode, setVrCode] = React.useState<string>('pWLy9nekmQdMXqja')
  const work = useFetchDatas(DATA_TYPES.WORK, vrCode)

  return (
    <FiveProvider work={work && parseWork(work)} ref={(ref) => Object.assign(window, { $five: ref?.five })}>
      <FiveCanvas {...size} />
      <PanoRulerPluginUsage vrCode={vrCode} />
      <Box>
        <Paper
          sx={{
            position: 'fixed',
            top: '10px',
            left: '10px',
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px 0',
          }}
        >
          <Button
            variant="contained"
            onClick={vrCode === 'pWLy9nekmQdMXqja' ? () => setVrCode('81gmMq5a7zbF9leWMk') : () => setVrCode('pWLy9nekmQdMXqja')}
          >
            切换VR
          </Button>
        </Paper>
      </Box>
    </FiveProvider>
  )
}

export default App
