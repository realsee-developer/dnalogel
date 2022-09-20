/* eslint-disable react/jsx-curly-brace-presence */
import * as React from 'react'
import { Five, Mode } from '@realsee/five'
import { TopviewFloorplanPlugin } from '@realsee/dnalogel'
import { unsafe__useFiveInstance, useFiveModelReadyState, useFiveState } from '@realsee/five/react'
import { Paper, BottomNavigation, BottomNavigationAction, ButtonGroup, Button } from '@mui/material'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

const TopviewFloorplanPluginUse = () => {
  const five = unsafe__useFiveInstance()
  const [fiveState, setFiveState] = useFiveState()
  const fiveModelReadyState = useFiveModelReadyState()
  const floorplanServerData = useFetchDatas(DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)
  const plugin = five.plugins.topviewFloorplanPlugin as ReturnType<typeof TopviewFloorplanPlugin>

  const [isDefaultUnit, setIsDefaultUnit] = React.useState(true)

  function toggleUnit() {
    setIsDefaultUnit(!isDefaultUnit)
  }

  React.useEffect(() => {
    plugin.changeConfigs({
      getRoomAreaText(areaSize) {
        return isDefaultUnit
          ? (areaSize / 1000000).toFixed(1) + '㎡'
          : (areaSize * 0.000010764).toFixed(1) + 'ft²'
      },
      getRuleDistanceText(distance) {
        return isDefaultUnit ? distance.toString() : (distance * 0.0032808).toFixed(1) + 'ft'
      }
    })
  }, [isDefaultUnit])

  React.useEffect(() => {
    if (!floorplanServerData || JSON.stringify(floorplanServerData) === '{}') return
    plugin.load(floorplanServerData)
    plugin.appendTo(document.querySelector('.plugin-full-screen-container')!)
  }, [floorplanServerData])

  if (fiveModelReadyState !== 'Loaded') return null
  return (
    <Paper sx={{ width: '100%', height: '100%' }}>
      <Paper
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent',
        }}
      >
        <ButtonGroup
          size="large"
          aria-label="large button group"
          orientation="vertical"
          variant="contained"
        >
          <Button variant="contained" onClick={toggleUnit}>
            切换单位
          </Button>
        </ButtonGroup>
      </Paper>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}
        className="topview-floorplan-plugin-use"
      >
        <BottomNavigation
          key="topview-floorplan-plugin"
          showLabels
          value={fiveState.mode}
          onChange={(_, newValue: Mode) => {
            setFiveState({ mode: newValue })
          }}
        >
          <BottomNavigationAction
            key={1}
            label="全景漫游"
            icon={<DirectionsWalkIcon />}
            value={Five.Mode.Panorama}
          />
          <BottomNavigationAction
            key={2}
            label="俯视模型"
            icon={<ViewInArIcon />}
            value={Five.Mode.Topview}
          />
        </BottomNavigation>
      </Paper>
    </Paper>
  )
}

export default TopviewFloorplanPluginUse
