/* eslint-disable react/jsx-curly-brace-presence */
import * as React from 'react'
import { Five, Mode } from '@realsee/five'
import { MapviewFloorplanPlugin } from '@realsee/dnalogel'
import { unsafe__useFiveInstance, useFiveModelReadyState, useFiveState } from '@realsee/five/react'
import { Paper, BottomNavigation, BottomNavigationAction, ButtonGroup, Button } from '@mui/material'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
// import { pluginsData } from "../../mock/BigSpace/pluginsData";

const PluginUse = () => {
  const five = unsafe__useFiveInstance()
  const [fiveState, setFiveState] = useFiveState()
  const fiveModelReadyState = useFiveModelReadyState()
  const floorplanServerData = useFetchDatas(DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)
  // const floorplanServerData = pluginsData.FloorplanPlugin
  const plugin = five.plugins.mapviewFloorplanPlugin as ReturnType<typeof MapviewFloorplanPlugin>

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
      },
    })
  }, [isDefaultUnit])

  React.useEffect(() => {
    if (!floorplanServerData || JSON.stringify(floorplanServerData) === '{}') return
    plugin.load(floorplanServerData)
    plugin.appendTo(document.querySelector('.plugin-full-screen-container')!)
  }, [floorplanServerData])

  if (fiveModelReadyState !== 'Loaded') return null
  return (
    <Paper>
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
        className="mapview-floorplan-plugin-use"
      >
        <BottomNavigation
          showLabels
          key="mapview-floorplan-plugin"
          value={fiveState.mode}
          onChange={(_, newValue: Mode) => {
            if (newValue !== 'Mapview') return setFiveState({ mode: newValue })
            const plugin = five.plugins.mapviewFloorplanPlugin
            plugin.show()
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
            label="户型图"
            icon={<ViewInArIcon />}
            value={Five.Mode.Mapview}
          />
        </BottomNavigation>
      </Paper>
    </Paper>
  )
}

export default PluginUse
