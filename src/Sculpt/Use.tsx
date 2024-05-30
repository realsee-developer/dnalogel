import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import { Five, Mode } from '@realsee/five'
import { Paper, BottomNavigation, BottomNavigationAction, ButtonGroup, Button } from '@mui/material'
import type { Sculpt } from '@realsee/dnalogel/dist'
import { reblink, blink } from '@realsee/dnalogel/dist'
import data from './mocks/data.json'
import boxData from './mocks/boxData.json'
import { useEffect } from 'react'

export const PanoPluginUse = () => {
  const five = unsafe__useFiveInstance()
  const [fiveState, setFiveState] = useFiveState()
  const sculpt = five.plugins.Sculpt as Sculpt

  useEffect(() => {
    sculpt.load(data, {
      occlusionVisibility: false,
    })
    sculpt.items.forEach((item) => item.on('click', (...args) => console.info('click', ...args)))
    window['blink'] = () => {
      const item = sculpt.items[4]
      if (item) {
        blink(item.model, {updateRender: () => {
          five.needsRender = true
        }})
      }
    }
    window['reblink'] = () => {
      const item = sculpt.items[3]
      item.visible = false
      if (item) {
        reblink(item, {updateRender: () => {
          five.needsRender = true
        }})
      }
    }
    return () => {
      sculpt.clear()
    }
  }, [five])

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
          <BottomNavigationAction label="Model" value={Five.Mode.Model} />
          <BottomNavigationAction label="Floorplan" value={Five.Mode.Floorplan} />
        </BottomNavigation>
      </Paper>
      <ButtonGroup sx={{ position: 'fixed', top: 0 }}>
        <Button onClick={() => sculpt.createPoint()}>Point</Button>
        <Button onClick={() => sculpt.createPolyline()}>PolyLine</Button>
        <Button onClick={() => sculpt.createPolygon()}>Polygon</Button>
        <Button onClick={() => sculpt.createPrism()}>Prism</Button>
        <Button onClick={() => sculpt.createRectangle()}>Rectangle</Button>
        <Button onClick={() => sculpt.createBox()}>Box</Button>
        <Button onClick={() => sculpt.createCircle()}>Circle</Button>
        <Button onClick={() => sculpt.createCylinder()}>Cylinder</Button>
      </ButtonGroup>
    </>
  )
}

export default PanoPluginUse
