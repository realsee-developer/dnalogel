import { MapviewFloorplanPlugin, FLOOR_PLAN_ATTACHED_TO } from '@realsee/dnalogel'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import { parseWork } from '@realsee/five'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PluginUse from './PluginUse'
import { Box } from '@mui/material'
import getInitialParamFromUrl from '../utils/getInitialParamFromUrl'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import * as THREE from 'three'
import { work } from '../../mock/BigSpace/work'

Object.assign(window, { THREE })
console.log('🚀 ~ THREE', THREE)

const defaultPluginParam = {
  hoverEnable: true,
  northDesc: 'N',
  attachedTo: FLOOR_PLAN_ATTACHED_TO.CEILING,
}

const initialParamFromUrl = getInitialParamFromUrl()

const pluginParams = Object.assign(defaultPluginParam, JSON.stringify(initialParamFromUrl) !== '{}' ? initialParamFromUrl : {})

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 512 }, // 贴图默认分辨率
  plugins: [
    [
      MapviewFloorplanPlugin,
      'mapviewFloorplanPlugin',
      { ...pluginParams },
    ],
  ],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  // const work = useFetchDatas(DATA_TYPES.WORK)

  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        ref={(ref) => Object.assign(window, { $five: ref?.five })}
      >
        <FiveCanvas key="five-canvas" {...size} />
        <Box
          key="box"
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
        <PluginUse key="plugin-use"/>
      </FiveProvider>
    )
  )
}

export default App
