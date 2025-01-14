import { Paper, ButtonGroup, Button } from '@mui/material'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'

import { unsafe__useFiveInstance } from '@realsee/five/react'
import { MeasureController } from '@realsee/dnalogel/dist/MeasurePlugin/Controller'

const PanoMeasurePluginUsage = () => {
  const five = unsafe__useFiveInstance()
  const measurePlugin = five.plugins.MeasurePlugin as MeasureController

  return (
    <>
      <FiveModeSwitcher modeList={['Panorama', 'Mapview', 'Model']} />
      <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
        <ButtonGroup orientation="vertical" variant="contained" style={{ textTransform: 'initial' }}>
          <Button onClick={() => measurePlugin.measure()}>Start</Button>
          <Button onClick={() => measurePlugin.endMeasure()}>End</Button>
          <Button onClick={() => measurePlugin.clear()}>Clear</Button>
          <Button onClick={() => measurePlugin.undo()}>Undo</Button>
          <Button onClick={() => measurePlugin.dispose()}>Close</Button>
        </ButtonGroup>
      </Paper>
    </>
  )
}

export default PanoMeasurePluginUsage
