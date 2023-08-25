import * as React from 'react'
import * as THREE from 'three'
import Stack from '@mui/material/Stack'
import { unsafe__useFiveInstance } from '@realsee/five/react'
import * as mockPluginData from './mockPluginData.json'
import { AreaMakerPluginPluginType } from '@realsee/dnalogel/dist'

const AreaMakerPluginUse = () => {
  const five = unsafe__useFiveInstance()
  const plugin = five.plugins.AreaMakerPluginPlugin as AreaMakerPluginPluginType.AreaMakerController

  React.useEffect(() => {
    plugin.load(mockPluginData)
    const maskItem = plugin.getMaskItemByID(4915)
    Object.assign(window, { maskItem, plugin, THREE })
    plugin.appendTo(five.getElement()!.parentElement!)

    plugin.hooks.on('wantsTap', (e) => {
      console.log('wantsTap', e)
      return false
    })
  }, [])

  return (
    <Stack spacing={2} direction="row" sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
    </Stack>
  )
}

export default AreaMakerPluginUse
