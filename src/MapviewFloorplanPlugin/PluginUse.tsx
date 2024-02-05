/* eslint-disable react/jsx-curly-brace-presence */
import * as React from 'react'
import { Five, Mode } from '@realsee/five'
import { MapviewFloorplanPlugin } from '@realsee/dnalogel/dist'
import { unsafe__useFiveInstance, useFiveModelReadyState, useFiveState } from '@realsee/five/react'
import { Paper, BottomNavigation, BottomNavigationAction, ButtonGroup, Button, Slider, FormGroup, Stack } from '@mui/material'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'

const PluginUse = () => {
  const five = unsafe__useFiveInstance()
  const [fiveState, setFiveState] = useFiveState()
  const fiveModelReadyState = useFiveModelReadyState()
  const floorplanServerData = useFetchDatas(DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)
  const plugin = five.plugins.mapviewFloorplanPlugin as ReturnType<typeof MapviewFloorplanPlugin>
  Object.assign(window, { five, plugin })
  const floorIndex = React.useRef(0)

  const [isDefaultUnit, setIsDefaultUnit] = React.useState(true)
  const [missingFloorConfigWidth, setMissingFloorConfigWidth] = React.useState(200)
  const [missingFloorConfigHeight, setMissingFloorConfigHeight] = React.useState(120)
  const [missingFloorConfigFontSize, setMissingFloorConfigFontSize] = React.useState(14)

  function toggleUnit() {
    setIsDefaultUnit(!isDefaultUnit)
  }

  React.useEffect(() => {
    plugin.changeConfigs({
      getRoomAreaText(areaSize) {
        return isDefaultUnit ? (areaSize / 1000000).toFixed(1) + '㎡' : (areaSize * 0.000010764).toFixed(1) + 'ft²'
      },
      getRoomDimensionText(width: number, height: number) {
        return isDefaultUnit ? (width * 0.001).toFixed(1) + 'm × ' + (height * 0.001).toFixed(1) + 'm' : (width * 0.0032808).toFixed(1) + 'ft × ' + (height * 0.0032808).toFixed(1) + 'ft'
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

  React.useEffect(() => {
    plugin.changeConfigs({
      missingFloorConfig: {
        imageWidth: missingFloorConfigWidth,
        imageHeight: missingFloorConfigHeight,
        textFontSize: missingFloorConfigFontSize,
      },
    })
  }, [missingFloorConfigWidth, missingFloorConfigHeight, missingFloorConfigFontSize])

  function handleMissingFloorConfigWidthChange(event: Event, newValue: number | number[]) {
    setMissingFloorConfigWidth(newValue as number)
  }

  function handleMissingFloorConfigHeightChange(event: Event, newValue: number | number[]) {
    setMissingFloorConfigHeight(newValue as number)
  }

  function changeFloor() {
    const floorLength = five.model.floorLength
    floorIndex.current = (floorIndex.current + 1) % floorLength
    five.model.show(floorIndex.current)
  }

  if (fiveModelReadyState !== 'Loaded') return null
  return (
    <Paper sx={{ position: 'absolute', width: '100%', left: 0, top: 0, zIndex: 10 }}>
      <ButtonGroup
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
        size="large"
        aria-label="large button group"
        orientation="vertical"
        variant="contained"
      >
        <Button variant="contained" onClick={toggleUnit}>
          切换单位
        </Button>
        <Button variant="contained" onClick={changeFloor}>
          切换楼层
        </Button>
      </ButtonGroup>
      <FormGroup sx={{ position: 'absolute', left: '20px', top: '20px', width: '200px' }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider
            min={100}
            max={1000}
            value={missingFloorConfigWidth}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={handleMissingFloorConfigWidthChange}
          />
          <span style={{ whiteSpace: 'nowrap', color: '#fff' }}>占位图宽度</span>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider
            min={100}
            max={1000}
            value={missingFloorConfigHeight}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={handleMissingFloorConfigHeightChange}
          />
          <span style={{ whiteSpace: 'nowrap', color: '#fff' }}>占位图高度</span>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider
            min={14}
            max={20}
            value={missingFloorConfigFontSize}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(event, value) => setMissingFloorConfigFontSize(value as number)}
          />
          <span style={{ whiteSpace: 'nowrap', color: '#fff' }}>占位文字大小</span>
        </Stack>
      </FormGroup>
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
          <BottomNavigationAction key={1} label="全景漫游" icon={<DirectionsWalkIcon />} value={Five.Mode.Panorama} />
          <BottomNavigationAction key={2} label="户型图" icon={<ViewInArIcon />} value={Five.Mode.Mapview} />
        </BottomNavigation>
      </Paper>
    </Paper>
  )
}

export default PluginUse
