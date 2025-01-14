import * as React from 'react'
import * as THREE from 'three'
import { unsafe__useFiveInstance } from '@realsee/five/react'
import { Button } from '@mui/material'
import './index.css'
import type { CurrentPanoImagePluginExportType } from '@realsee/dnalogel/dist'

const FloorCompassPluginUse = () => {
  const five = unsafe__useFiveInstance()
  const plugin = five.plugins.CurrentPanoImagePlugin
  const [yRotate, setYRotate] = React.useState(0)

  React.useEffect(() => {
    Object.assign(window, { five, THREE, plugin })
  }, [five])

  React.useEffect(() => {
    const plugin: CurrentPanoImagePluginExportType = five.plugins.CurrentPanoImagePlugin
    plugin.updateConfig({ yRotate })
  }, [yRotate])

  function show() {
    plugin.show()
  }

  function hide() {
    plugin.hide()
  }

  function enable() {
    plugin.enable()
  }

  function disable() {
    plugin.disable()
  }

  function addNorthRad() {
    setYRotate((prev) => (prev + Math.PI / 6) % (Math.PI * 2))
  }

  return (
    <div className="btn-group">
      <div className="left-group" key="left-group">
        <Button key="showFiveFloorplan" variant="contained" onClick={() => five.changeMode('Floorplan')}>
          模型
        </Button>
        <Button key="showFivePanorama" variant="contained" onClick={() => five.changeMode('Panorama')}>
          全景
        </Button>
      </div>
      <div className="right-group" key="right-group">
        <Button key="show" variant="contained" onClick={show}>
          展示
        </Button>
        <Button key="hide" variant="contained" onClick={hide}>
          隐藏
        </Button>
        <Button key="enable" variant="contained" onClick={enable}>
          启用
        </Button>
        <Button key="disable" variant="contained" onClick={disable}>
          禁用
        </Button>
        <Button key="addNorthRad" variant="contained" onClick={addNorthRad}>
          更改转向
        </Button>
      </div>
    </div>
  )
}

export default FloorCompassPluginUse
