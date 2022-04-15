import { Box, Paper, ButtonGroup, Button } from '@mui/material'
import { PanoRulerPlugin } from '@realsee/dnalogel'
import { unsafe__useFiveInstance, useFiveEventCallback, useFiveModelReadyState } from '@realsee/five/react'
import * as React from 'react'
import { roomInfo, roomRules } from '../mockData'

interface PanoRulerPluginUsePropTypes {}

enum OPERATE_OPTIONS {
  OPEN = '开启标尺',
  CLOSE = '关闭标尺'
}

const PanoRulerPluginUsage = (props: PanoRulerPluginUsePropTypes) => {
  const fiveModelReadyState = useFiveModelReadyState()
  const five = unsafe__useFiveInstance()
  const panoRulerPlugin = five.plugins.panoRulerPlugin as ReturnType<typeof PanoRulerPlugin>

  // 标尺状态
  const [rulerEnable, setRulerEnable] = React.useState(panoRulerPlugin.state.enable)

  useFiveEventCallback('modelLoaded', async () => {
    await panoRulerPlugin.load(roomInfo, roomRules, {
      distanceText: (distance) => `约 ${distance.toFixed(1)}米`,
    })

    panoRulerPlugin.enable()
    setRulerEnable(panoRulerPlugin.state.enable)
  })

  const handleRulerEnable = () => {
    panoRulerPlugin[panoRulerPlugin.state.enable ? 'disable' : 'enable']()
    setRulerEnable(panoRulerPlugin.state.enable)
  }

  if(fiveModelReadyState !== 'Loaded') return null
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

export default PanoRulerPluginUsage
