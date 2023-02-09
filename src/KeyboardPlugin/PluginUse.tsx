/* eslint-disable react/jsx-curly-brace-presence */
import * as React from 'react'
import { Five, Mode } from '@realsee/five'
import { KeyboardPluginType } from '@realsee/dnalogel'
import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import { Paper, BottomNavigation, BottomNavigationAction, ButtonGroup, Button } from '@mui/material'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import ViewInArIcon from '@mui/icons-material/ViewInAr'

const PluginUse = () => {
  const five  = unsafe__useFiveInstance()
  const [fiveState, setFiveState] = useFiveState()
  const mode = React.useMemo(() => fiveState.mode, [fiveState])
  const plugin = five.plugins.keyboardPlugin as KeyboardPluginType.ReturnType

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
          <Button variant="contained" onClick={() => plugin.enable()}>
            开启控制器
          </Button>
          <Button variant="contained" onClick={() => plugin.disable()}>
            关闭控制器
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
          value={mode}
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
            label="模型漫游"
            icon={<ViewInArIcon />}
            value={Five.Mode.Model}
          />
        </BottomNavigation>
      </Paper>
    </Paper>
  )
}

export default PluginUse
