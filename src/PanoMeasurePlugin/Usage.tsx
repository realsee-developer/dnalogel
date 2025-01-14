import { Paper, ButtonGroup, Button } from '@mui/material'
import { PanoMeasurePlugin } from '@realsee/dnalogel/dist'
import { unsafe__useFiveInstance } from '@realsee/five/react'
import * as React from 'react'
import { useEffect } from 'react'
import { mockMeasureRulerServerData } from './mocks/mockData'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'

const PanoMeasurePluginUsage = () => {
  const five = unsafe__useFiveInstance()
  const panoMeasurePluginPC = five.plugins.panoMeasurePluginPC as ReturnType<typeof PanoMeasurePlugin>
  const panoMeasurePluginMobile = five.plugins.panoMeasurePluginMobile as ReturnType<typeof PanoMeasurePlugin>

  return (
    <>
      {/* <BlendingSwitcher
        // material={() => (panoMeasurePluginPC as any).controller.pointSelector.pointSelectorHelper.pointHelper.planeMesh.material}
        material={() => window['ballMesh']}
      /> */}
      <FiveModeSwitcher modeList={['Panorama', 'Mapview', 'Model']} />
      <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
        <ButtonGroup size="large" aria-label="large button group" orientation="vertical" variant="contained">
          <ButtonGroup variant="contained">
            <Button
              onClick={() => {
                panoMeasurePluginPC.disable()
                panoMeasurePluginPC.enable()
                // panoMeasurePluginPC.changeMeasureType('line')
              }}
            >
              开启测量工具(pc端)
            </Button>
            <Button onClick={() => panoMeasurePluginPC.disable()}>关闭</Button>
          </ButtonGroup>
          <ButtonGroup variant="contained">
            <Button
              onClick={() => {
                panoMeasurePluginMobile.disable()
                panoMeasurePluginMobile.enable({ mode: 'Edit' })
                // panoMeasurePluginMobile.changeMeasureType('line')
              }}
            >
              开启测量工具(moblie端)
            </Button>
            <Button onClick={() => panoMeasurePluginMobile.disable()}>关闭</Button>
          </ButtonGroup>
          <Button
            onClick={() => {
              panoMeasurePluginPC.disable()
              panoMeasurePluginPC.load(mockMeasureRulerServerData)
              panoMeasurePluginPC.enable({ mode: 'View' })
            }}
          >
            加载数据
          </Button>
        </ButtonGroup>
      </Paper>
    </>
  )
}

export default PanoMeasurePluginUsage
