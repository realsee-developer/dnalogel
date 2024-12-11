import { Box, Paper, ButtonGroup, Button, BottomNavigation, BottomNavigationAction, Popper } from '@mui/material'
import { PanoMeasurePlugin, PanoMeasurePluginPolylineJson, PanoMeasurePluginPolyline } from '@realsee/dnalogel/dist'
import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import * as React from 'react'
import { useEffect } from 'react'
import { mockMeasureRulerServerData } from './mocks/mockData'
import { Five, Mode } from '@realsee/five'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'
import { BlendingSwitcher } from '../components/BlendingSwitcher'

const PanoMeasurePluginUsage = () => {
  const five = unsafe__useFiveInstance()
  const panoMeasurePluginPC = five.plugins.panoMeasurePluginPC as ReturnType<typeof PanoMeasurePlugin>
  const panoMeasurePluginMobile = five.plugins.panoMeasurePluginMobile as ReturnType<typeof PanoMeasurePlugin>

  useEffect(() => {
    const container = document.querySelector('.plugin-full-screen-container') as HTMLElement
    if (container && five.getElement()) {
      panoMeasurePluginPC.appendTo(container)
      panoMeasurePluginMobile.appendTo(container)
    }
  }, [five])

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
