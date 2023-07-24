import * as React from 'react'
import { ModelFloorplanPlugin } from '@realsee/dnalogel/dist'
import { Five, Mode } from '@realsee/five'
import { unsafe__useFiveInstance, useFiveEventCallback, useFiveModelReadyState, useFiveState } from '@realsee/five/react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

const ModelFloorplanPluginUse = (props: { isDefaultUnit: boolean }) => {
  const five = unsafe__useFiveInstance()
  const [mode, setMode] = React.useState<Mode>(five.getCurrentState().mode)
  const fiveModelReadyState = useFiveModelReadyState()
  const floorplanServerData = useFetchDatas(DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)
  const plugin = five.plugins.modelFloorplanPlugin as ReturnType<typeof ModelFloorplanPlugin>

  useFiveEventCallback('modeChange', (mode) => {
    setMode(mode)
  }, [setMode])

  React.useEffect(() => {
    plugin.changeConfigs({
      getRoomAreaText(areaSize) {
        return props.isDefaultUnit ? (areaSize / 1000000).toFixed(1) + '㎡' : (areaSize * 0.000010764).toFixed(1) + 'ft²'
      },
      getRuleDistanceText(distance) {
        return props.isDefaultUnit ? distance.toString() : (distance * 0.0032808).toFixed(1) + 'ft'
      },
    })
  }, [props.isDefaultUnit])

  // 插件事件监听
  React.useEffect(() => {
    five.plugins.modelFloorplanPlugin.hooks.on('showAnimationEnded', () => {
      console.info('🐶-- ModelFloorplanPlugin -- show')
    })
    five.plugins.modelFloorplanPlugin.hooks.on('hide', () => {
      console.info('🐶-- ModelFloorplanPlugin -- hide')
    })
  }, [five])

  React.useEffect(() => {
    if (!floorplanServerData || JSON.stringify(floorplanServerData) === '{}') return
    five.plugins.modelFloorplanPlugin.load(floorplanServerData)
  }, [floorplanServerData])

  if (fiveModelReadyState !== 'Loaded') return null

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}
      className="topview-floorplan-plugin-use"
    >
      <BottomNavigation showLabels value={mode}>
        <BottomNavigationAction
          label="全景漫游"
          icon={<DirectionsWalkIcon />}
          value={'Panorama'}
          onClick={() => {
            five.setState({ mode: Five.Mode.Panorama })
          }}
        />
        <BottomNavigationAction
          label="空间总览"
          icon={<ViewInArIcon />}
          value={'Floorplan'}
          onClick={() => {
            five.plugins.modelFloorplanPlugin.show()
          }}
        />
      </BottomNavigation>
    </Paper>
  )
}

export default ModelFloorplanPluginUse
