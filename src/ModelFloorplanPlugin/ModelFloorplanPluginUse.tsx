import * as React from 'react'
import { ModelFloorplanPlugin } from '@realsee/dnalogel'
import { Five, Mode } from '@realsee/five'
import {
  unsafe__useFiveInstance,
  useFiveEventCallback,
  useFiveModelReadyState,
  useFiveState,
} from '@realsee/five/react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

const ModelFloorplanPluginUse = (props: { isDefaultUnit: boolean }) => {
  const five = unsafe__useFiveInstance()
  const [fiveState, setFiveState] = useFiveState()
  const fiveModelReadyState = useFiveModelReadyState()
  const floorplanServerData = useFetchDatas(DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)
  const plugin = five.plugins.modelFloorplanPlugin as ReturnType<typeof ModelFloorplanPlugin>

  React.useEffect(() => {
    plugin.changeConfigs({
      getRoomAreaText(areaSize) {
        return props.isDefaultUnit
          ? (areaSize / 1000000).toFixed(1) + '㎡'
          : (areaSize * 0.000010764).toFixed(1) + 'ft²'
      },
      getRuleDistanceText(distance) {
        return props.isDefaultUnit ? distance.toString() : (distance * 0.0032808).toFixed(1) + 'ft'
      }
    })
  })

  // 插件事件监听
  React.useEffect(() => {
    five.plugins.modelFloorplanPlugin.hooks.on('showAnimationEnded', () => {
      console.log('🐶-- ModelFloorplanPlugin -- show')
    })
    five.plugins.modelFloorplanPlugin.hooks.on('hide', () => {
      console.log('🐶-- ModelFloorplanPlugin -- hide')
    })
  }, [five])

  useFiveEventCallback(
    'modelLoaded',
    () => {
      if (!floorplanServerData || JSON.stringify(floorplanServerData) === '{}') return
      Promise.resolve(five.plugins.modelFloorplanPlugin.load(floorplanServerData)).then(() => {
        five.plugins.modelFloorplanPlugin.show()
      })
    },
    [floorplanServerData],
  )

  useFiveEventCallback(
    'initAnimationEnded',
    () => {
      if (fiveState.mode === Five.Mode.Floorplan) {
        five.plugins.modelFloorplanPlugin.show()
      }
    },
    [fiveState.mode],
  )

  if (fiveModelReadyState !== 'Loaded') return null
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}
      className="topview-floorplan-plugin-use"
    >
      <BottomNavigation
        showLabels
        value={fiveState.mode}
        onChange={(_, newValue: Mode) => {
          setFiveState({ mode: newValue })
        }}
      >
        <BottomNavigationAction
          label="全景漫游"
          icon={<DirectionsWalkIcon />}
          value={Five.Mode.Panorama}
        />
        <BottomNavigationAction
          label="空间总览"
          icon={<ViewInArIcon />}
          value={Five.Mode.Floorplan}
        />
      </BottomNavigation>
    </Paper>
  )
}

export default ModelFloorplanPluginUse
