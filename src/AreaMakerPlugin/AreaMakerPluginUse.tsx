import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import { Five, Mode } from '@realsee/five/five'
import { ContentType } from '@realsee/dnalogel/dist'
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { AreaMakerController } from '@realsee/dnalogel/dist/AreaMakerPlugin/typing'
import React from 'react'

const AreaMakerPluginUse = () => {
  const five = unsafe__useFiveInstance()
  const [fiveState, setFiveState] = useFiveState()
  const pluginInstance = five.plugins.areaMakerPlugin as AreaMakerController

  React.useEffect(() => {
    pluginInstance.appendTo(five.getElement()!.parentElement!)

    pluginInstance.load({
      list: [
        {
          id: 1,
          name: '123456',
          object_data: {
            points: [
              [0, 0, 0],
              [1, 0, 1],
              [0, 0, 1],
            ],
            floorIndex: 0,
            height: 2,
            fixedY: 0,
            fixedHeight: 2,
            color: '#000000',
          },
        },
      ],
    })
  }, [])

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
    </>
  )
}

export default AreaMakerPluginUse
