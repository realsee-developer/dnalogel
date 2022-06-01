import { PanoMeasurePlugin } from '@realsee/dnalogel'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PanoMeasurePluginUsage from './PanoMeasurePluginUsage'
import { parseWork } from '@realsee/five'
import { Box } from '@mui/material'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [[PanoMeasurePlugin, 'panoMeasurePlugin', { useUIController: true }]],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  const work = useFetchDatas(DATA_TYPES.WORK)

  // const maxRedStyle: React.CSSProperties = {
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  //   left: '0',
  //   top: '0',
  //   background: 'red',
  //   pointerEvents: 'none',
  // }

  // const centerRedStyle: React.CSSProperties = {
  //   position: 'absolute',
  //   left: '50%',
  //   top: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   background: 'red',
  //   pointerEvents: 'none',
  // }

  // const blueStyle: React.CSSProperties = {
  //   position: 'absolute',
  //   left: '16px',
  //   top: '16px',
  //   pointerEvents: 'none',
  //   background: 'blue',
  // }

  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        ref={(ref) => Object.assign(window, { $five: ref?.five })}
      >
        <FiveCanvas {...size} />
        <Box
          className="plugin-full-screen-container"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        />
        <PanoMeasurePluginUsage />
        {/* <div className="max-red" style={maxRedStyle} />
        <div className="blue" style={blueStyle} />
        <div className="center-red" style={centerRedStyle} /> */}
      </FiveProvider>
    )
  )
}

export default App
