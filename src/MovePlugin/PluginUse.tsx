import { unsafe__useFiveInstance } from '@realsee/five/react'
import { Paper, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import { MoveController } from '@realsee/dnalogel'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'

const AreaMakerPluginUse = () => {
  const five = unsafe__useFiveInstance()
  const pluginInstance = five.plugins.movePlugin as MoveController

  React.useEffect(() => {
    pluginInstance.load({
      path: [
        [0.09141919761896133, 0.008460694152031545, -0.08654399961233139],
        [-1.6820100545883179, 0.01284792484609465, 0.07329510152339935],
        [-3.437459945678711, 0.01757188648782715, 0.06699030101299286],
        [-0.618914008140564, 0.008730999445763388, -1.6621500253677368],
      ],
    })
  }, [five])

  return (
    <>
      <FiveModeSwitcher modeList={['Mapview', 'Floorplan', 'Model']} />
      <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
        <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
          <Button onClick={() => pluginInstance?.show()}>show</Button>
          <Button onClick={() => pluginInstance?.hide()}>hide</Button>
          <Button onClick={() => pluginInstance?.play()}>play</Button>
          <Button onClick={() => pluginInstance?.pause()}>pause</Button>
        </ButtonGroup>
      </Paper>
    </>
  )
}

export default AreaMakerPluginUse
