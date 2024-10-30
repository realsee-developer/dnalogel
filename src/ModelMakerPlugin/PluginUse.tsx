import { unsafe__useFiveInstance } from '@realsee/five/react'
import { Paper, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import { type ModelMakerController } from '@realsee/dnalogel/dist/ModelMakerPlugin/typings'
import { data } from './mocks/data'
import { data2 } from './mocks/data2'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'

const PluginUse = () => {
  const five = unsafe__useFiveInstance()
  const pluginInstance = five.plugins.modelMakerPlugin as ModelMakerController

  React.useEffect(() => {
    pluginInstance.load(data)
    return () => {
      pluginInstance.dispose()
    }
  }, [five])

  return (
    <>
      <FiveModeSwitcher modeList={['Panorama', 'Mapview', 'Floorplan']} />
      <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
        <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
          <Button onClick={() => pluginInstance?.show()}>show</Button>
          <Button onClick={() => pluginInstance?.hide()}>hide</Button>
          <Button onClick={() => pluginInstance?.disable()}>disable</Button>
          <Button onClick={() => pluginInstance?.enable()}>enable</Button>
          <Button onClick={() => pluginInstance.load(data)}>load</Button>
        </ButtonGroup>
      </Paper>
    </>
  )
}

export default PluginUse
