import { Box, Button, Paper } from '@mui/material'
import { PanoRulerPlugin } from '@realsee/dnalogel'
import {
  unsafe__useFiveInstance,
  useFiveEventCallback,
  useFiveModelReadyState,
} from '@realsee/five/react'
import * as React from 'react'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

enum OPERATE_OPTIONS {
  OPEN = '开启标尺',
  CLOSE = '关闭标尺',
}

const PanoRulerPluginUsage = () => {
  const fiveModelReadyState = useFiveModelReadyState()
  const five = unsafe__useFiveInstance()
  const panoRulerPlugin = five.plugins.panoRulerPlugin as ReturnType<typeof PanoRulerPlugin>
  const panoRulerData = useFetchDatas(
    DATA_TYPES.PANO_RULER_PLUGIN_SERVER_DATA,
    'pWLy9nekmQdMXqja',
  ) as any
  // 标尺状态
  const [rulerEnable, setRulerEnable] = React.useState(panoRulerPlugin.state.enable)

  const [isDefaultUnit, setIsDefaultUnit] = React.useState(true)

  function toggleUnit() {
    setIsDefaultUnit(!isDefaultUnit)
  }

  React.useEffect(() => {
    panoRulerPlugin.changeConfigs({
      distanceText(distance) {
        return isDefaultUnit
          ? distance.toFixed(1).toString() + 'm'
          : (distance * 3.2808).toFixed(1) + 'ft'
      },
    })
  }, [isDefaultUnit])

  useFiveEventCallback(
    'modelLoaded',
    async () => {
      if (!panoRulerData.pano_ruler_data.roomInfo || !panoRulerData.pano_ruler_data.roomRules)
        return

      await panoRulerPlugin.load(
        panoRulerData.pano_ruler_data.roomInfo,
        panoRulerData.pano_ruler_data.roomRules,
        // {
        //   distanceText: (distance) => `约 ${distance.toFixed(1)}米`,
        // },
      )

      panoRulerPlugin.enable()
      setRulerEnable(panoRulerPlugin.state.enable)
    },
    [panoRulerData],
  )

  const handleRulerEnable = () => {
    panoRulerPlugin[panoRulerPlugin.state.enable ? 'disable' : 'enable']()
    setRulerEnable(panoRulerPlugin.state.enable)
  }

  if (fiveModelReadyState !== 'Loaded') return null
  return (
    <Box>
      <Paper
        sx={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px 0',
        }}
      >
        <Button variant="contained" onClick={handleRulerEnable}>
          {rulerEnable ? OPERATE_OPTIONS.CLOSE : OPERATE_OPTIONS.OPEN}
        </Button>
        <Button variant="contained" onClick={toggleUnit}>
          切换单位
        </Button>
      </Paper>
    </Box>
  )
}

export default PanoRulerPluginUsage
