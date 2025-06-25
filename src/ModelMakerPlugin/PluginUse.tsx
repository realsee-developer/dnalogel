import { unsafe__useFiveInstance } from '@realsee/five/react'
import { Paper, ButtonGroup, Button, Slider, Typography, Box } from '@mui/material'
import { type ModelMakerController } from '@realsee/dnalogel/dist/ModelMakerPlugin/typings'
import React from 'react'
import { data } from './mocks/data'
import { data2 } from './mocks/data2'
import { data3 } from './mocks/data3'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'

const PluginUse = () => {
  const five = unsafe__useFiveInstance()
  const pluginInstance = five.plugins.modelMakerPlugin as ModelMakerController
  const [opacityPercent, setOpacityPercent] = React.useState(1) // 默认为100%

  React.useEffect(() => {
    pluginInstance.load(data)
    return () => {
      pluginInstance.dispose()
    }
  }, [five])

  // 更新所有模型的透明度百分比
  const updateOpacity = (percent: number) => {
    setOpacityPercent(percent)
    pluginInstance.setModelsOpacity(percent)
  }

  return (
    <>
      <FiveModeSwitcher modeList={['Panorama', 'Mapview', 'Floorplan']} />
      <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent', padding: '10px' }}>
        <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
          <Button onClick={() => pluginInstance.load(data)}>data1</Button>
          <Button onClick={() => pluginInstance.load(data2)}>data2</Button>
          <Button onClick={() => pluginInstance.load(data3)}>data3</Button>
        </ButtonGroup>
        <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
          <Button onClick={() => pluginInstance?.show()}>show</Button>
          <Button onClick={() => pluginInstance?.hide()}>hide</Button>
          <Button onClick={() => pluginInstance?.disable()}>disable</Button>
          <Button onClick={() => pluginInstance?.enable()}>enable</Button>
          <Button onClick={() => pluginInstance.load(data)}>load</Button>
          <Button onClick={() => pluginInstance.playBoxAnimation(2).then(() => alert('done!'))}>Animate</Button>
          <Button onClick={() => pluginInstance.forceFinishBoxAnimation()}>STOP Animation</Button>
        </ButtonGroup>
        
        <Box sx={{ width: '100%', mt: 2 }}>
          <Typography gutterBottom>透明度百分比 ({Math.round(opacityPercent * 100)}%)</Typography>
          <Slider
            value={opacityPercent}
            min={0}
            max={1}
            step={0.01}
            onChange={(_, newValue) => updateOpacity(newValue as number)}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${Math.round(value * 100)}%`}
            aria-labelledby="opacity-slider"
          />
        </Box>
      </Paper>
    </>
  )
}

export default PluginUse
