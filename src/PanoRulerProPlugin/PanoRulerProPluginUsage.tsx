import { Box, Button, Paper } from '@mui/material'
import { PanoRulerProPlugin } from '@realsee/dnalogel'
import {
  unsafe__useFiveInstance,
  useFiveEventCallback,
  useFiveModelReadyState,
} from '@realsee/five/react'
import * as React from 'react'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

interface PanoRulerProPluginUsePropTypes {}

enum OPERATE_OPTIONS {
  OPEN = '开启标尺',
  CLOSE = '关闭标尺',
}

const PanoRulerProPluginUsage = (props: PanoRulerProPluginUsePropTypes) => {
  const fiveModelReadyState = useFiveModelReadyState()
  const five = unsafe__useFiveInstance()
  const panoRulerProPlugin = five.plugins.panoRulerProPlugin as ReturnType<
    typeof PanoRulerProPlugin
  >
  const panoRulerProData = useFetchDatas(
    DATA_TYPES.PANO_RULER_PRO_PLUGIN_SERVER_DATA,
    '80o024DE2xyva3j5BE',
    'real',
  )

  // 标尺状态
  const [rulerEnable, setRulerEnable] = React.useState(panoRulerProPlugin.state.enabled)

  useFiveEventCallback(
    'modelLoaded',
    async () => {
      if (!panoRulerProData) return

      await panoRulerProPlugin.load({
        data: panoRulerProData,
        version: 0,
      })

      panoRulerProPlugin.enable()
      setRulerEnable(panoRulerProPlugin.state.enabled)
    },
    [panoRulerProData],
  )

  const handleRulerEnable = () => {
    panoRulerProPlugin[panoRulerProPlugin.state.enabled ? 'disable' : 'enable']()
    setRulerEnable(panoRulerProPlugin.state.enabled)
  }

  if (fiveModelReadyState !== 'Loaded') return null
  return (
    <Box>
      <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
        <Button onClick={handleRulerEnable}>
          {rulerEnable ? OPERATE_OPTIONS.CLOSE : OPERATE_OPTIONS.OPEN}
        </Button>
      </Paper>
    </Box>
  )
}

export default PanoRulerProPluginUsage
