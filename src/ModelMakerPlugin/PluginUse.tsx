import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import { Five, Mode } from '@realsee/five'
import { ContentType } from '@realsee/dnalogel/dist'
import { Paper, BottomNavigation, BottomNavigationAction, ButtonGroup, Button } from '@mui/material'
import { AreaMakerController } from '@realsee/dnalogel/dist/AreaMakerPlugin/typing'
import React from 'react'
import { ModelMakerController } from '@realsee/dnalogel/dist/ModelMakerPlugin/typing'
import { data } from './data'

const PluginUse = () => {
  const five = unsafe__useFiveInstance()
  const [fiveState, setFiveState] = useFiveState()
  const pluginInstance = five.plugins.modelMakerPlugin as ModelMakerController

  React.useEffect(() => {
    pluginInstance.load(data)
  }, [])

  // React.useEffect(() => {}, [
  //   five.
  // ])

  return (
    <>
      <Paper sx={{ position: 'fixed', bottom: 0 }} style={{ borderRadius: '4px', overflow: 'hidden' }}>
        <BottomNavigation
          showLabels
          value={fiveState.mode}
          onChange={(_, newValue: Mode) => {
            setFiveState({ mode: newValue })
          }}
        >
          <BottomNavigationAction label="Panorama" value={Five.Mode.Panorama} />
          <BottomNavigationAction label="Floorplan" value={Five.Mode.Floorplan} />
          <BottomNavigationAction label="Mapview" value={Five.Mode.Mapview} />
        </BottomNavigation>
      </Paper>
      <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
        <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
          <Button onClick={() => pluginInstance?.show()}>show</Button>
          <Button onClick={() => pluginInstance?.hide()}>hide</Button>
          <Button onClick={() => pluginInstance?.disable()}>disable</Button>
          <Button onClick={() => pluginInstance?.enable()}>enable</Button>
        </ButtonGroup>
      </Paper>
    </>
  )
}

export default PluginUse
