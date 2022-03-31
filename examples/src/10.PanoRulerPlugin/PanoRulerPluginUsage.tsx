import { Box, Paper, ButtonGroup, Button } from '@mui/material'
import { PanoRulerPlugin } from '@realsee/dnalogel'
import { unsafe__useFiveInstance, useFiveEventCallback } from '@realsee/five/react'
import * as React from 'react'
import { roomInfo, roomRules } from './mockData'


// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PanoRulerPluginUsePropTypes {}

const OPERATE_OPTIONS = {
  OPEN: '开启标尺',
  CLOSE: '关闭标尺',
}

const PanoRulerPluginUsage = (props: PanoRulerPluginUsePropTypes) => {
  const five = unsafe__useFiveInstance()
  const panoRulerPlugin = five.plugins.panoRulerPlugin as ReturnType<typeof PanoRulerPlugin>
  // 标尺状态
  const [state, setState] = React.useState(panoRulerPlugin.state.enable)
  useFiveEventCallback('modelLoaded', async () => {
    await panoRulerPlugin.load(roomInfo, roomRules, {
      distanceText: (distance) => `约${distance.toFixed(1)}米`,
    })
    setState(panoRulerPlugin.state.enable)
  })

  return (
    <Box>
      <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
        <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
          <Button
            onClick={() => {
              panoRulerPlugin[panoRulerPlugin.state.enable ? 'disable' : 'enable']()
              setState(panoRulerPlugin.state.enable)
            }}
          >
            {state ? OPERATE_OPTIONS.CLOSE : OPERATE_OPTIONS.OPEN}
          </Button>
        </ButtonGroup>
      </Paper>
    </Box>
  )
}

export default PanoRulerPluginUsage
